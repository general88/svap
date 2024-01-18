const UserModel = require("../model/userModel");
const { CustomError } = require("../middleware/errorHandlerMiddleware");
const validator = require("validator");
const bcrypt = require("bcrypt");
const { StatusCodes } = require("http-status-codes");
const { encrypt, createJwtToken } = require("../utils/tools");
const SessionModel = require("../model/sessionModel");

const createUser = async (req, res) => {
  let { nafNum, password, radioRoomEmail, role } = req.body;

  console.log(req.body);

  if (nafNum && validator.isEmpty(nafNum.trim())) {
    throw new CustomError(
      StatusCodes.BAD_REQUEST,
      "Please provide your NAF NUMBER"
    );
  }

  if (radioRoomEmail && !validator.isEmail(radioRoomEmail.trim())) {
    throw new CustomError(
      StatusCodes.BAD_REQUEST,
      "Please provide a valid email"
    );
  }

  if (!validator.isStrongPassword(password)) {
    throw new CustomError(StatusCodes.BAD_REQUEST, "Please provide a strong");
  }

  let checkUserAlreadyExist;
  //checking existing user

  if (nafNum && !validator.isEmpty(nafNum.trim())) {
    checkUserAlreadyExist = await UserModel.findOne({ nafNum });
    radioRoomEmail = undefined;
  } else {
    nafNum = undefined;
    checkUserAlreadyExist = await UserModel.findOne({ radioRoomEmail });
  }

  if (checkUserAlreadyExist) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      message: `A user with name ${nafNum || radioRoomEmail} already exist`,
    });
  }

  console.log(nafNum);

  const newUser = await UserModel.create({
    nafNum,
    password,
    radioRoomEmail,
    role,
  });

  res.status(StatusCodes.CREATED).json({
    _id: newUser._id,
    nafNum: newUser.nafNum,
    radioRoomEmail: newUser.radioRoomEmail,
    role: newUser.role,
  });
};

//sign in existing user
const loginUser = async (req, res) => {
  //extract the neccesary values from the body
  const { loginUserType, password } = req.body;

  if (validator.isEmpty(loginUserType?.trim())) {
    throw new CustomError(400, "Invalid credentials");
  }

  if (!validator.isStrongPassword(password)) {
    throw new CustomError(400, "Invalid credentials");
  }

  let queryObj = {};

  if (validator.isEmail(loginUserType)) {
    queryObj.radioRoomEmail = loginUserType;
  } else {
    queryObj.nafNum = loginUserType;
  }

  //checking existing user
  const checkUserAlreadyExist = await UserModel.findOne(queryObj);

  if (!checkUserAlreadyExist) {
    throw new CustomError(400, `Invalid credentials`);
  }
  const comparedPassword = await bcrypt.compare(
    password,
    checkUserAlreadyExist.password
  );
  if (!comparedPassword) {
    throw new CustomError(400, "Sorry invalid credentials");
  }

  /*extract the values to encrypt from the 
  user gotten from the database, exclude the password*/
  const user = { ...checkUserAlreadyExist._doc, password: undefined };

  // encrypt the user user crpyto library
  const encryptedUserInfo = encrypt(JSON.stringify(user));

  // create a json web token
  const token = await createJwtToken(encryptedUserInfo);

  // establish a login session for the user

  await SessionModel.findOneAndUpdate(
    { userId: user._id },
    {
      remoteAddress: req.ip,
      userDevice: req.headers["user-agent"],
      token: token,
      userId: user._id,
    },
    {
      upsert: true,
    }
  );

  res.status(StatusCodes.OK).json({
    nafNum: user.nafNum,
    role: user.role,
    radioRoomEmail: user.radioRoomEmail,
    token,
  });
};

module.exports = {
  createUser,
  loginUser,
};

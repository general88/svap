const { CustomError } = require("./errorHandlerMiddleware");
const { StatusCodes } = require("http-status-codes");

const uploadMiddleware = async (req, res, next) => {
  console.log(req.user);
  if (req.user.role !== "admin" && req.user.radioRoomEmail === null) {
    throw new CustomError(StatusCodes.UNAUTHORIZED, "Access denied");
  }

  next();
};

module.exports = { uploadMiddleware };

const { CustomError } = require("./errorHandlerMiddleware");
const { StatusCodes } = require("http-status-codes");

const adminBasedMiddleware = async (req, res, next) => {

  if (req.user.role !== "admin") {
    throw new CustomError(StatusCodes.UNAUTHORIZED, "Access denied");
  }

  next();
};

module.exports = { adminBasedMiddleware };

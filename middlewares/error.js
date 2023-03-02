import Errorhandler from "../utils/ErrorHandler.js";

const errorMiddleware = (err, req, res, next) => {
  err.statuscode = err.statuscode || 404;
  err.message = err.message || "Internal server error";
  //Mongoose Duplicate key error
  if (err.code === 11000) {
    const message = `Duplicate ${Object.keys(err.keyValue)} entered`;
    err = new Errorhandler(message, 400);
  }
  res.status(err.statuscode).json({
    success: false,
    message: err.message,
  });
};

export default errorMiddleware;

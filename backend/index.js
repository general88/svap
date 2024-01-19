require("dotenv").config();
require("express-async-errors");

const express = require("express");
const cors = require("cors");
// const path = require("path");
const path = require("node:path");
const app = express();
const PORT = process.env.port || 5000;

// custom middleware
const { routeNotFoundMiddleware } = require("./middleware/routeNotFound");
const {
  errorHandlerMiddleware,
} = require("./middleware/errorHandlerMiddleware");

// connect to database func
const { connectDB } = require("./config/dbConnect");
const { connectCloudinary } = require("./config/cloudinaryConnect");

// routes imports
const authRoutes = require("./route/authRoute");
const documentRoutes = require("./route/documentRoute");
// middlewares
// app.use(
//   cors({
//     origin: ["https://svap-v2es.vercel.app", "https://localhost:5173"],
//     credentials: true,
//   })
// );

// const allowedOrigins = [
//   "https://svap-v2es.vercel.app",
//   "https://localhost:5173",
// ];

// // middleware
// app.use(function (req, res, next) {
//   const origin = req.headers.origin;

//   if (allowedOrigins.includes(origin)) {
//     res.setHeader("Access-Control-Allow-Origin", origin);
//   }
//   res.setHeader(
//     "Access-Control-Allow-Methods",
//     "GET, POST, OPTIONS, PUT, PATCH, DELETE"
//   );
//   res.setHeader(
//     "Access-Control-Allow-Headers",
//     "X-Requested-With,content-type, authorization"
//   );
//   res.setHeader("Access-Control-Allow-Credentials", true);
//   next();
// });
//
app.use(express.json());
// Middleware to parse urlencoded form data
app.use(express.urlencoded({ extended: true }));
//
app.use(function (req, res, next) {
  // Specify the allowed origins
  res.setHeader("Access-Control-Allow-Origin", [
    "https://svap-v2es.vercel.app",
    "https://localhost:5173",
  ]);

  // Specify the allowed methods
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS,CONNECT,TRACE"
  );

  // Specify the allowed headers
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization, X-Content-Type-Options, Accept, X-Requested-With, Origin, Access-Control-Request-Method, Access-Control-Request-Headers"
  );

  // Allow credentials
  res.setHeader("Access-Control-Allow-Credentials", true);

  // Handle preflight requests
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  // Pass control to the next middleware
  next();
});

/****** */

// routes usage
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/document", documentRoutes);

app.use(routeNotFoundMiddleware);
app.use(errorHandlerMiddleware);

connectCloudinary();
const startApp = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => console.log(`Server starting on ${PORT}`));
  } catch (error) {
    console.log(error);
  }
};

startApp();

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

const corsOrigin = {
  origin: ["https://svap-v2es.vercel.app", "http://localhost:5173"], //or whatever port your frontend is using
  credentials: true,
  optionSuccessStatus: 200,
};
app.use(cors(corsOrigin));

// const allowedOrigins = [
//   "https://svap-v2es.vercel.app",
//   "http://localhost:5173",
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
//     "X-Requested-With,Content-Type, authorization"
//   );
//   res.setHeader("Access-Control-Allow-Credentials", true);
//   next();
// });

app.use(express.json());
// Middleware to parse urlencoded form data
app.use(express.urlencoded({ extended: true }));

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

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
app.use(
  cors({
    origin: ["https://svap-v2es.vercel.app", "https://localhost:5173"],
    credentials: true,
  })
);
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

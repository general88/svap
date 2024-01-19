const express = require("express");
const { uploadMiddleware } = require("../middleware/uploadMiddleware");
const { authenticationMiddleware } = require("../middleware/authMiddleware");
const router = express.Router();

const multer = require("multer");
const {
  uploadDocument,
  getUnitDocuments,
} = require("../controller/documentController");
// Multer configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // Set the destination folder for uploaded files
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    // Set the filename for uploaded files
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage, dest: "uploads/" });
// const upload = multer({ dest: "uploads/" });

// Serve uploaded files
router.post(
  "/upload",
  authenticationMiddleware,
  uploadMiddleware,
  upload.array("files", 1),
  uploadDocument
);

// get documents that belongs to a specific unit

router.get("/:unitName", authenticationMiddleware, getUnitDocuments);
// File List Endpoint

module.exports = router;

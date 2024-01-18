const mongoose = require("mongoose");

const uploadSchema = new mongoose.Schema(
  {
    unit: {
      type: String,
      required: true,
      uppercase: true,
    },
    documentTitle: {
      type: String,
      required: true,
      trim: true,
    },
    signalReferenceNumber: {
      type: String,
      required: true,
      trim: true,
    },
    DTG: {
      type: String,
      required: true,
    },
    uploadedBy: {
      type: String,
      required: true,
    },

    documents: [
      {
        docUrl: {
          type: String,
          required: true,
        },
        format: {
          type: String,
          required: true,
        },
        public_id: {
          type: String,
          required: true,
        },
      },
    ],
  },
  { timestamps: true }
);

// user model creation
const DocumentModel = mongoose.model("Upload", uploadSchema);

module.exports = DocumentModel;

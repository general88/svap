const { StatusCodes } = require("http-status-codes");
const DocumentModel = require("../model/DocumentModel");
const validator = require("validator");
const cloudinary = require("cloudinary").v2;

const uploadDocument = async (req, res) => {
  const { unit, signalReferenceNumber, DTG, documentTitle, uploadedBy } =
    req.body;
  const documentFile = req.files;

  if (validator.isEmpty(unit)) {
    throw new CustomError(StatusCodes.BAD_REQUEST, "Please select the unit");
  }

  if (
    validator.isEmpty(signalReferenceNumber.trim()) ||
    !validator.isUppercase(signalReferenceNumber.trim())
  ) {
    throw new CustomError(
      StatusCodes.BAD_REQUEST,
      "Please provide the SIGNAL REFERENCE NUMBER in ALL CAPS"
    );
  }

  if (validator.isEmpty(DTG.trim()) || !validator.isUppercase(DTG.trim())) {
    throw new CustomError(
      StatusCodes.BAD_REQUEST,
      "Please provide the DTG in ALL CAPS"
    );
  }

  if (
    validator.isEmpty(documentTitle.trim()) ||
    !validator.isUppercase(documentTitle.trim())
  ) {
    throw new CustomError(
      StatusCodes.BAD_REQUEST,
      "Please provide the TITLE in ALL CAPS"
    );
  }

  if (!documentFile) {
    throw new CustomError(
      StatusCodes.BAD_REQUEST,
      "Please provide the document file"
    );
  }

  // upload document to cloudinary and get the document url

  const documents = await Promise.all(
    documentFile.map(async (doc) => {
      const result = await cloudinary.uploader.upload(doc.path);
      return {
        docUrl: result.secure_url,
        public_id: result.public_id,
        format: result.format,
      };
    })
  );

  const createNewDocument = await DocumentModel.create({
    unit,
    signalReferenceNumber,
    DTG,
    documentTitle,
    uploadedBy,
    documents,
  });

  res.status(StatusCodes.CREATED).json({ createNewDocument });
};

const getUnitDocuments = async (req, res) => {
  const unitName = req.params.unitName.split("-").join(" ");
  console.log(unitName);

  // find documents with the same unit name

  const documents = await DocumentModel.find({ unit: unitName });

  res.status(StatusCodes.OK).json(documents);
};

module.exports = { uploadDocument, getUnitDocuments };

import React, { useState } from "react";
import { Button, Modal, Space } from "antd";

import { Document, Page, pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url
).toString();

const DocModal = ({ openModal, closeModal, document }) => {
  const [open, setOpen] = useState(false);

  const [numPages, setNumPages] = useState();
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  console.log(document);
  const showModal = () => {
    setOpen(true);
  };
  const handleOk = () => {
    setOpen(false);
  };
  const handleCancel = () => {
    setOpen(false);
  };

  const onError = (e) => {
    logger.logError(e, "error in file-viewer");
  };
  return (
    <>
      <Modal
        width={1000}
        open={openModal}
        title="Title"
        // onOk={handleOk}
        onCancel={closeModal}
        footer={(_, { OkBtn, CancelBtn }) => (
          <>
            <Button onClick={closeModal}>Close</Button>
          </>
        )}
      >
        {/* <FileViewer
          fileType={document?.format}
          filePath=
          //   errorComponent={CustomErrorComponent}
          onError={onError}
        /> */}

        <iframe
          src={`${document?.docUrl}#toolbar=0`}
          frameborder="0"
          className="w-full h-screen"
        ></iframe>

        {/* <Document file={document?.docUrl} onLoadSuccess={onDocumentLoadSuccess}>
          <Page pageNumber={pageNumber} />
        </Document>
        <p>
          Page {pageNumber} of {numPages}
        </p> */}
      </Modal>
    </>
  );
};
export default DocModal;

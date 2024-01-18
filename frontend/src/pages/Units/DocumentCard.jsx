import React from "react";
import { EyeOutlined, DownloadOutlined } from "@ant-design/icons";
import { Avatar, Card } from "antd";
import DocModal from "../../ui/Modal";

import fileDownload from "js-file-download";
import axios from "axios";

const { Meta } = Card;
const DocumentCard = ({
  documentTitle,
  DTG,
  //   createdAt,
  documents,
  signalReferenceNumber,
}) => {
  const [openModal, setOpenModal] = React.useState(false);
  const [selectedDocument, setSelectedDocument] = React.useState(null);

  const closeModal = () => {
    setOpenModal(false);
  };

  const handleDownload = () => {
    axios
      .get(documents[0].docUrl, {
        responseType: "blob",
      })
      .then((res) => {
        fileDownload(
          res.data,
          `${documentTitle} ${signalReferenceNumber} ${DTG}  `
        );
      });
  };
  return (
    <>
      <DocModal
        openModal={openModal}
        document={selectedDocument}
        closeModal={closeModal}
      />
      <Card
        hoverable
        cover={<img alt="example" src="document.png" />}
        actions={[
          <div
            onClick={() => {
              setOpenModal(true);
              setSelectedDocument(documents[0]);
            }}
            key={"0"}
          >
            <span className="mr-4">View</span>
            <EyeOutlined />
          </div>,
          <div onClick={handleDownload} key={"1"}>
            <span className="mr-4">Download</span>
            <DownloadOutlined />
          </div>,
        ]}
      >
        <Meta
          title={documentTitle}
          description={
            <div>
              <p>
                {signalReferenceNumber} {DTG}
              </p>{" "}
              <p></p>
            </div>
          }
        />
      </Card>
    </>
  );
};
export default DocumentCard;

import React, { useState } from "react";
import { UploadOutlined } from "@ant-design/icons";
import { Button, message, Upload } from "antd";

const FileUploadInput = ({ fileList, setFileList }) => {
  const props = {
    onRemove: (file) => {
      const index = fileList.indexOf(file);
      const newFileList = fileList.slice();
      newFileList.splice(index, 1);
      setFileList(newFileList);
    },
    beforeUpload: (file) => {
      setFileList([...fileList, file]);
      return false;
    },
    fileList,
  };
  return (
    <>
      <Upload listType="picture" multiple={false} {...props}>
        <Button disabled={fileList.length > 0} icon={<UploadOutlined />}>
          Select File
        </Button>
      </Upload>
    </>
  );
};
export default FileUploadInput;

import { Input, Button, message } from "antd";
import React, { useState } from "react";
import validator from "validator";
import axios from "axios";
import { Select, Space } from "antd";
import { mergedUnits } from "../../utils/unitsSelect";
import FileUploadInput from "./FileUploadInput";
import { useSelector } from "react-redux";
import { baseUrlServer } from "../../utils/helper";
import { useNavigate } from "react-router";

const UploadPanel = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const { profile } = useSelector((state) => state.user);
  const [formDataInfo, setFormDataInfo] = useState({
    unit: "",
    signalReferenceNumber: "",
    DTG: "",
    documentTitle: "",
    uploadedBy: profile.radioRoomEmail || profile.nafNum,
  });
  const [errorText, setErrorText] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  const navigate = useNavigate();
  const [fileList, setFileList] = useState([]);

  const errorDisplay = (text) => {
    return message.error({
      content: text,
      style: { color: "red" },
    });
  };

  const handleFileUpload = async () => {
    if (validator.isEmpty(formDataInfo.unit)) {
      errorDisplay("Please select the unit");
      setErrorText("unit");
      return;
    }

    if (
      validator.isEmpty(formDataInfo.signalReferenceNumber.trim()) ||
      !validator.isUppercase(formDataInfo.signalReferenceNumber)
    ) {
      errorDisplay("Please SIGNAL REFRENCE NUMBER must be in uppercase");
      setErrorText("SRF");
      return;
    }

    if (
      validator.isEmpty(formDataInfo.DTG?.slice(3).trim()) ||
      !validator.isUppercase(formDataInfo.DTG?.slice(3))
    ) {
      errorDisplay("Please DTG must be in uppercase");
      setErrorText("DTG");
      return;
    }

    if (
      validator.isEmpty(formDataInfo.documentTitle.trim()) ||
      !validator.isUppercase(formDataInfo.documentTitle)
    ) {
      errorDisplay("Please document title must be in uppercase");
      setErrorText("title");
      return;
    }

    if (fileList.length <= 0) {
      errorDisplay("Please select document to upload");
      return;
    }

    const formData = new FormData();
    formData.append("unit", formDataInfo.unit);
    formData.append(
      "signalReferenceNumber",
      formDataInfo.signalReferenceNumber
    );
    formData.append("DTG", formDataInfo.DTG);
    formData.append("documentTitle", formDataInfo.documentTitle);
    formData.append("uploadedBy", formDataInfo.uploadedBy);
    fileList.forEach((file) => {
      return formData.append("files", file);
    });

    setLoading(true);

    try {
      const res = await axios.post(
        `${baseUrlServer}/api/v1/document/upload`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${profile.token}`,
            "Content-Type": "multipart/form-data", // Make sure to set Content-Type
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
          },
        }
      );

      // Set preflight
      // app.options("*", (req, res) => {
      //   console.log("preflight");
      //   if (
      //     req.headers.origin ===
      //       ("https://svap-v2es.vercel.app" || "https://localhost:5173") &&
      //     allowMethods.includes(req.headers["access-control-request-method"]) &&
      //     allowHeaders.includes(req.headers["access-control-request-headers"])
      //   ) {
      //     console.log("pass");
      //     return res.status(204).send();
      //   } else {
      //     console.log("fail");
      //   }
      // }),
      // console.log(formDataInfo.unit.split(" ").join("-"));
      navigate(`/${formDataInfo.unit.split(" ").join("-")}`);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="grid place-items-center min-h-screen">
      {contextHolder}
      <form className="space-y-6 shadow-md p-4 rounded-md">
        <h1>File Upload Page</h1>

        <Select
          disabled={loading}
          showSearch
          status={errorText === "unit" && "error"}
          size="large"
          style={{
            width: "100%",
          }}
          onChange={(value) =>
            setFormDataInfo((preValue) => {
              {
                if (errorText) {
                  setErrorText(null);
                }
                return {
                  ...preValue,
                  unit: value,
                };
              }
            })
          }
          placeholder="Search to Select unit"
          optionFilterProp="children"
          filterOption={(input, option) =>
            (option?.label ?? "").includes(input)
          }
          filterSort={(optionA, optionB) =>
            (optionA?.label ?? "")
              .toLowerCase()
              .localeCompare((optionB?.label ?? "").toLowerCase())
          }
        >
          {mergedUnits.map((option) => (
            <Select.Option
              key={option.value}
              value={option.label}
              label={option.label}
              size="large"
              className="uppercase"
            >
              {option.label}
            </Select.Option>
          ))}
        </Select>
        <div>
          <Input
            disabled={loading}
            status={errorText === "SRF" && "error"}
            onChange={(e) =>
              setFormDataInfo((preValue) => {
                {
                  if (errorText) {
                    setErrorText(null);
                  }
                  return {
                    ...preValue,
                    signalReferenceNumber: e.target.value,
                  };
                }
              })
            }
            name="reference"
            size="large"
            placeholder="Signal Ref Number (AIRSEC/001)"
            style={{
              width: "100%",
            }}
          />
        </div>

        <Space.Compact style={{ width: "100%" }} size="large">
          <Input
            disabled={loading}
            style={{
              width: "20%",
            }}
            defaultValue="DTG"
            status={errorText === "DTG" && "error"}
          />
          <Input
            disabled={loading}
            status={errorText === "DTG" && "error"}
            onChange={(e) =>
              setFormDataInfo((preValue) => {
                {
                  if (errorText) {
                    setErrorText(null);
                  }
                  return {
                    ...preValue,
                    DTG: `DTG ${e.target.value.trim()}`,
                  };
                }
              })
            }
            style={{
              width: "100%",
            }}
            name="dtg"
            placeholder="Date Time Group (051505 A JAN 24)"
          />
        </Space.Compact>

        <Input
          disabled={loading}
          onChange={(e) =>
            setFormDataInfo((preValue) => {
              {
                if (errorText) {
                  setErrorText(null);
                }
                return {
                  ...preValue,
                  documentTitle: e.target.value,
                };
              }
            })
          }
          status={errorText === "title" && "error"}
          name="reference"
          size="large"
          placeholder="Document title"
          style={{
            width: "100%",
          }}
        />

        <div>
          <FileUploadInput fileList={fileList} setFileList={setFileList} />
        </div>
        <Button
          disabled={loading}
          loading={loading}
          onClick={handleFileUpload}
          block
          type="primary"
          size="large"
        >
          Start upload
        </Button>
      </form>
    </section>
  );
};

export default UploadPanel;

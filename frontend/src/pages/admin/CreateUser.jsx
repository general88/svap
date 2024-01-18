import { UserOutlined, KeyOutlined, MailOutlined } from "@ant-design/icons";
import { Input, Button, message, Select, notification } from "antd";
import React, { useState } from "react";
import validator from "validator";
import axios from "axios";
import { useSelector } from "react-redux";

import generator from "generate-password-browser";

const CreateUser = () => {
  //fxn to handle user input
  const [formData, setFormData] = useState({
    nafNum: "",
    password: "",
    radioRoomEmail: "",
    role: "user",
  });
  const { profile } = useSelector((state) => state.user);
  const [messageApi, contextHolder] = message.useMessage();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [showRandomPassword, setShowRandomPassword] = React.useState(null);

  const handleUserInput = (e) => {
    if (error) {
      setError(false);
    }
    const { name, value } = e.target;
    setFormData((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  };

  // display error message
  const errorDisplay = (text) => {
    return message.error({
      content: text,
      style: { color: "red" },
    });
  };

  //fxn to handle submit
  const handleSubmit = async () => {
    console.log(formData);
    if (!formData.nafNum && !formData.radioRoomEmail) {
      errorDisplay("Please Provide Naf Number or Radio Room Email");
      return;
    }

    if (formData.nafNum && !validator.isUppercase(formData.nafNum.trim())) {
      errorDisplay("Please Provide a Valid Naf number");
      return;
    }

    if (
      formData.radioRoomEmail &&
      !validator.isEmail(formData.radioRoomEmail)
    ) {
      errorDisplay("Please Provide a Valid email");
      return;
    }

    if (formData.nafNum && formData.radioRoomEmail) {
      errorDisplay("A user cannot have radio room email and Naf Number");
      return;
    }

    if (!validator.isStrongPassword(formData.password)) {
      errorDisplay("Please provide a strong password");
      return;
    }

    console.log(formData);
    try {
      setLoading(true);
      const response = await axios.post(
        "http://localhost:5000/api/v1/auth/register",
        formData,
        {
          headers: {
            Authorization: `Bearer ${profile.token}`,
          },
        }
      );
      message.success({
        content: "User account created successfully",
      });
      setFormData({
        nafNum: "",
        password: "",
        radioRoomEmail: "",
        role: "user",
      });
      setShowRandomPassword(null);
    } catch (error) {
      errorDisplay(error.response.data.message);
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  // generate random password
  const generateRandomPassword = () => {
    setShowRandomPassword(
      generator.generate({
        length: 15,
        uppercase: true,
        numbers: true,
        symbols: true,
      })
    );
  };

  return (
    <section className="grid place-items-center py-10">
      {contextHolder}
      <form className="space-y-6 shadow-md p-4 rounded-md">
        <h1>Create User Page</h1>
        {error && <p>Please ensure you provide the correct values</p>}
        <Input
          onChange={handleUserInput}
          name="nafNum"
          size="large"
          placeholder="Please input your NAF NO"
          prefix={<UserOutlined />}
          value={formData.nafNum}
        />
        <Input
          onChange={handleUserInput}
          name="radioRoomEmail"
          size="large"
          placeholder="Radio room email"
          prefix={<MailOutlined />}
          value={formData.radioRoomEmail}
        />
        <Select
          defaultValue={formData.role}
          name="role"
          size="large"
          style={{
            width: "100%",
          }}
          onChange={(value) =>
            setFormData((prev) => ({
              ...prev,
              role: value,
            }))
          }
          options={[
            {
              value: "user",
              label: "User",
            },
            {
              value: "admin",
              label: "Admin",
            },
          ]}
        />
        <div>
          <Input.Password
            onChange={handleUserInput}
            name="password"
            prefix={<KeyOutlined />}
            placeholder="Input Password"
            size="large"
            value={formData.password}
          />

          <div className="flex items-center my-4 gap-6">
            <Button onClick={generateRandomPassword}>Generate password</Button>
            {showRandomPassword && (
              <p className="bg-slate-800 text-white font-medium py-2 px-4 rounded-md shadow">
                {showRandomPassword}
              </p>
            )}
          </div>
        </div>

        <Button onClick={handleSubmit} type="primary" loading={loading} block>
          Create User
        </Button>
      </form>
    </section>
  );
};

export default CreateUser;

import { UserOutlined, KeyOutlined } from "@ant-design/icons";
import { Input, Button } from "antd";
import React, { useState } from "react";
import validator from "validator";
import axios from "axios";
import { loginUser } from "../redux/features/user/userSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { baseUrlServer } from "../utils/helper";

export const SignIn = () => {
  //fxn to handle user input
  const [formData, setFormData] = useState({
    loginUserType: " ",
    password: " ",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

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

  //fxn to handle submit
  const handleSubmit = async () => {
    if (
      validator.isEmpty(formData.loginUserType) ||
      !validator.isStrongPassword(formData.password)
    ) {
      setError(true);
      return;
    }
    try {
      setLoading(true);
      const response = await axios.post(
        `${baseUrlServer}/api/v1/auth/sign-in`,
        formData
      );
      dispatch(loginUser(response.data));
      navigate("/", { replace: true });
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="grid place-items-center min-h-screen">
      <form className="space-y-6 shadow-md p-4 rounded-md">
        <h1>Welcome to SignIn Page</h1>
        {error && <p>Please ensure you provide the correct values</p>}
        <Input
          onChange={handleUserInput}
          name="loginUserType"
          size="large"
          placeholder="Please input your NAF No / Radio room email"
          prefix={<UserOutlined />}
        />
        <Input.Password
          onChange={handleUserInput}
          name="password"
          prefix={<KeyOutlined />}
          placeholder="Input Password"
          size="large"
        />
        <Button onClick={handleSubmit} type="primary" loading={loading} block>
          Sign In
        </Button>
      </form>
    </section>
  );
};

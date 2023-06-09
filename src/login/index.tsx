import React from "react";
import { Form, Input, Button } from "antd";
import "firebase/auth";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { createContext } from "vm";
import { useNavigate } from "react-router-dom";

// Initialize Firebase app

const LoginForm: React.FC = () => {
  const navigate = useNavigate();

  const onFinish = async (values: any) => {
    let user = {};
    const auth = getAuth();
    const { username, password } = values;
    try {
      // Sign in with email and password
      // await auth().signInWithEmailAndPassword(username, password);
      await signInWithEmailAndPassword(
        auth,
        values?.username,
        values?.password
      ).then((userCredential) => {
        user = userCredential?.user;
        // navigate("/dashboard");
        console.log(user, "user");
      });

      console.log("Login successful!");
    } catch (error) {
      console.error("Login failed:");
    }
  };
  return (
    <Form
      name="login-form"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      style={{ maxWidth: "300px", margin: "0 auto" }}
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: "Please enter your username!" }]}
      >
        <Input placeholder="Enter your username" />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: "Please enter your password!" }]}
      >
        <Input.Password placeholder="Enter your password" />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" style={{ width: "100%" }}>
          Log In
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
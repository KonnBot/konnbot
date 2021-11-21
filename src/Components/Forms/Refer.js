import React from "react";
import { Form, Input, Button } from "antd";
import emailjs from "emailjs-com";
import style from "./Form.module.css";
const { TextArea } = Input;

export default function Refer({ isSent, setIsSent }) {
  const onFinish = (values) => {
    console.log("Success:", values);
    emailjs
      .send(
        "service_segecqs",
        "template_g6qv0v5",
        values,
        "user_1p2tVDJbeXhD8xcswmz3f"
      )
      .then((res) => {
        console.log("response", res.status);
        if (res && res.status === 200) {
          setIsSent(true);
        }
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <Form
      layout="vertical"
      name="basic"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      requiredMark={false}
    >
      <Form.Item
        style={{ marginBottom: "16px" }}
        label="Your Name"
        name="name"
        rules={[{ required: true, message: "Please input your name" }]}
      >
        <Input size="large" />
      </Form.Item>

      <Form.Item
        style={{ marginBottom: "16px" }}
        label="Mobile No.*"
        name="mobile"
        rules={[
          { required: true, message: "Please input your mobile nuumber" },
        ]}
      >
        <Input size="large" />
      </Form.Item>
      <Form.Item
        style={{ marginBottom: "16px" }}
        label="Email ID"
        name="email"
        rules={[{ required: true, message: "Please input your Email Id" }]}
      >
        <Input size="large" />
      </Form.Item>
      <Form.Item
        style={{ marginBottom: "16px" }}
        label="Friends Name*"
        name="friendName"
        rules={[{ required: true, message: "Please input your Email Id" }]}
      >
        <Input size="large" />
      </Form.Item>

      <Form.Item
        style={{ marginBottom: "16px" }}
        label="Mobile No"
        name="friendMobile"
        rules={[
          { required: true, message: "Please input your mobile nuumber" },
        ]}
      >
        <Input size="large" />
      </Form.Item>
      <Form.Item
        style={{ marginBottom: "16px" }}
        label="Description"
        name="description"
        rules={[{ required: true, message: "Please input your description!" }]}
      >
        <TextArea />
      </Form.Item>

      <Form.Item>
        <Button
          shape="round"
          className={style.formButton}
          type="primary"
          htmlType="submit"
        >
          Send
        </Button>
      </Form.Item>
    </Form>
  );
}

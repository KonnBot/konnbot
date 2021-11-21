import React from "react";
import emailjs from "emailjs-com";

import { Form, Input, Button, Row, Col } from "antd";
import style from "./Form.module.css";
export default function NewsLetterForm() {
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
        console.log("response", res);
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
      name="User"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      layout="vertical"
      requiredMark={false}
    >
      <Row justify="center" gutter={[16, 16]}>
        <Col span={24}>
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input size="large" />
          </Form.Item>
        </Col>
        <Col span={24}>
          <Form.Item
            label="Email Id"
            name="email"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input size="large" />
          </Form.Item>
        </Col>
        <Col span={24}>
          <Form.Item>
            <Button
              size="large"
              shape="round"
              className={style.formButton}
              type="primary"
              htmlType="submit"
            >
              Submit
            </Button>
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
}

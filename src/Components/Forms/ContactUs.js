import React from "react";
import { Form, Input, Button, Row, Col } from "antd";
import emailjs from "emailjs-com";
import style from "./Form.module.css";
const { TextArea } = Input;

export default function ContactUs() {
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
      layout="vertical"
      name="basic"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      requiredMark={false}
    >
      <Row justify="center" gutter={[16, 16]}>
        <Col span={24}>
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: "Please input your name" }]}
          >
            <Input size="large" />
          </Form.Item>
        </Col>
        <Col span={24}>
          <Form.Item
            label="Mobile"
            name="mobile"
            rules={[
              { required: true, message: "Please input your mobile nuumber" },
            ]}
          >
            <Input size="large" />
          </Form.Item>
        </Col>

        <Col span={24}>
          <Form.Item
            label="Email Id"
            name="email"
            rules={[{ required: true, message: "Please input your Email Id" }]}
          >
            <Input size="large" />
          </Form.Item>
        </Col>

        <Col span={24}>
          <Form.Item
            label="Description"
            name="description"
            rules={[
              { required: true, message: "Please input your description!" },
            ]}
          >
            <TextArea />
          </Form.Item>
        </Col>

        <Col span={24}>
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
        </Col>
      </Row>
    </Form>
  );
}

import React from "react";
import { Row, Col, Image } from "antd";

export default function ImageGallery({ images }) {
  return (
    <Row gutter={[30, 30]} justify="center">
      <Col span={8}>
        <Image src="/assets/02_Project.png" />
      </Col>
      <Col span={8}>
        <Image src="/assets/02_Project.png" />
      </Col>
      <Col span={8}>
        <Image src="/assets/02_Project.png" />
      </Col>
      <Col span={8}>
        <Image src="/assets/02_Project.png" />
      </Col>
      <Col span={8}>
        <Image src="/assets/02_Project.png" />
      </Col>
      <Col span={8}>
        <Image src="/assets/02_Project.png" />
      </Col>
      <Col span={8}>
        <Image src="/assets/02_Project.png" />
      </Col>
      <Col span={8}>
        <Image src="/assets/02_Project.png" />
      </Col>
      <Col span={8}>
        <Image src="/assets/02_Project.png" />
      </Col>
    </Row>
  );
}

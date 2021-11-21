import React from "react";
import { Row, Col } from "antd";
import KnownProjectCard from "../Cards/KnownProjectCard";

export default function KnownProjects() {
  return (
    <Row justify="space-between" gutter={[0, 20]}>
      <Col span={11} xs={24} sm={24} md={12} lg={11}>
        <KnownProjectCard />
      </Col>
      <Col span={11} xs={24} sm={24} md={12} lg={11}>
        <KnownProjectCard />
      </Col>
    </Row>
  );
}

import React from "react";
import { Row, Col, Avatar } from "antd";
import style from "./Project.module.css";
export default function AboutContractor({ name, about, url }) {
  return (
    <Row justify="center" gutter={[30, 30]}>
      <Col span={16} xs={24} sm={24} md={24} lg={16}>
        <div className={style.container3text1}>
          <Avatar size={40} src="/assets/01_Project.png" />
          <span className={style.container3text2}>{name && name}</span>
        </div>
        <div className={style.container3text3}>{about && about}</div>
      </Col>
      <Col
        span={8}
        xs={24}
        sm={24}
        md={24}
        lg={8}
        style={{ textAlign: "center" }}
      >
        <iframe
          title="video"
          width="420"
          height="315"
          src={url && url}
        ></iframe>
      </Col>
    </Row>
  );
}

import React from "react";
import { Row, Col, Avatar } from "antd";
import style from "./Project.module.css";
export default function AboutContractor() {
  return (
    <Row justify="center" gutter={[30, 30]}>
      <Col span={16} xs={24} sm={24} md={24} lg={16}>
        <div className={style.container3text1}>
          <Avatar size={40} src="/assets/01_Project.png" />
          <span className={style.container3text2}>Mr & Mrs Patel</span>
        </div>
        <div className={style.container3text3}>
          In the case of the Mauryan capital Pataliputra (near Patna), we have
          Greek accounts, and that of Faxian; Megasthenes (a visitor around 300
          BCE) mentions 564 towers and 64 gates in the city walls. Modern
          excavations have uncovered a "massive palisade of teak beams held
          together with iron dowels".[7] A huge apadana-like hall with eighty
          sandstone columns shows clear influence from contemporary Achaemenid
          Persia.[8] The single massive sandstone Pataliputra capital shows
          clear Hellenistic features, reaching India via Persia.[9] A huge
          apadana-like hall with eighty sandstone columns shows clear influence
          from contemporary Achaemenid Persia.[8] The single massive sandstone
          Pataliputra capital shows clear Hellenistic features, reaching India
          via Persia.[9]
        </div>
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
          src="https://www.youtube.com/embed/tgbNymZ7vqY"
        ></iframe>
      </Col>
    </Row>
  );
}

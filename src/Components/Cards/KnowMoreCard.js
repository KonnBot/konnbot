import React from "react";
import { Card } from "antd";
import style from "./Cards.module.css";
export default function KnowMoreCard({ src, flex, title, text }) {
  return (
    <Card
      bodyStyle={{
        padding: "0px 0px",
      }}
      bordered={false}
    >
      <div
        style={{
          display: "flex",
          flexDirection: flex,
        }}
      >
        <span>
          <img alt="knowmore" src={src} />
        </span>
        <span style={{ margin: "0px 16px 0px 16px" }}>
          <div className={style.KnowMoreCardText1}>{title}</div>
          <div className={style.KnowMoreCardText2}>{text}</div>
        </span>
      </div>
    </Card>
  );
}

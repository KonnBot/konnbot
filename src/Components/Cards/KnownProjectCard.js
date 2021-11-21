import React from "react";
import { Card } from "antd";
import style from "./Cards.module.css";
export default function KnownProjectCard({ src, name, add, area, status }) {
  return (
    <Card
      bordered={false}
      style={{
        borderRadius: "16px",
      }}
      bodyStyle={{
        padding: "0px",
        paddingTop: "10px",
      }}
      cover={<img alt="example" src={src} />}
    >
      <div className={style.carttext1}>{name}</div>
      <div className={style.carttext2}>{add}</div>
      <div className={style.carttext3}>
        <span>
          Builtup Area - <strong>{area}</strong>
        </span>

        <span>{status}</span>
      </div>
    </Card>
  );
}

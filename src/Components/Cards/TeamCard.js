import React from "react";
import { Card } from "antd";
import style from "./Cards.module.css";
export default function TeamCard({ src, name, role }) {
  return (
    <Card
      style={{ borderRadius: "16px" }}
      cover={<img alt="about" src={src} />}
    >
      <div className={style.TeamCard}>
        <div className={style.TeamCardtext1}>{name}</div>
        <div className={style.TeamCardtext2}>{role}</div>
      </div>
    </Card>
  );
}

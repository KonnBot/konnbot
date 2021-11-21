import React from "react";
import { Card } from "antd";
import style from "./Cards.module.css";
export default function OffersCard({ src, title }) {
  return (
    <Card
      bodyStyle={{ padding: "0px", display: "flex", alignItems: "center" }}
      style={{ borderRadius: "16px" }}
    >
      <img src={src} alt="home" />
      <div className={style.OffersCardText}>{title}</div>
    </Card>
  );
}

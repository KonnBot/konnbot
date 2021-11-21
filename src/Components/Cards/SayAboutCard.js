import React from "react";
import { Card } from "antd";
import style from "./Cards.module.css";
export default function SayAbout({ src, name, proff, text }) {
  return (
    <Card
      bodyStyle={{ padding: "0px 10px 10px 10px" }}
      style={{ borderRadius: "16px", height: "260px", maxWidth: "293px" }}
    >
      <span className={style.sayaboutimg}>
        <img className={style.sayaboutimg1} alt="home" src={src} />
      </span>
      <div className={style.sayabouttext1}>{name}</div>
      <div className={style.sayabouttext2}>{proff}</div>
      <div className={style.sayabouttext3}>“{text}”</div>
    </Card>
  );
}

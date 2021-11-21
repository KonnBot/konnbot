import React from "react";
import { Card } from "antd";
import style from "./Cards.module.css";
export default function VideoProjectCard() {
  return (
    <Card
      bordered={true}
      cover={
        <iframe
          title="video"
          width="420"
          height="315"
          src="https://www.youtube.com/embed/tgbNymZ7vqY"
        ></iframe>
      }
      bodyStyle={{ padding: "10px" }}
    >
      <div className={style.videoprojecttext1}>Mr. Vivek Singh Bunglow</div>
      <div className={style.videoprojecttext2}>
        Technology integrated Construction, Help us to provide you various
        facilities in single.
      </div>
    </Card>
  );
}

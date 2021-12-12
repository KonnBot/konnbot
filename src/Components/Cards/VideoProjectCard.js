import React from "react";
import { Card } from "antd";
import style from "./Cards.module.css";
export default function VideoProjectCard({url,name, text}) {
  return (
    <Card
      bordered={true}
      cover={
        <iframe
          title="video"
          width="420"
          height="350"
          src={url&&url}
          
        ></iframe>
      }
      bodyStyle={{ padding: "10px" }}
    >
      <div className={style.videoprojecttext1}>{name && name}</div>
      <div className={style.videoprojecttext2}>
        {text && text}
      </div>
    </Card>
  );
}

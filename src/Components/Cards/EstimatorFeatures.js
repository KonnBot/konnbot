import React from "react";
import { Card } from "antd";
import style from "./Cards.module.css";
import { useHistory } from "react-router";

export default function EstimatorFeatures({
  title,
  text,
  discount,
  src,
  background,
}) {
  const history = useHistory();

  const handeleClick = () => {
    history.push("/estimator/details");
  };
  return (
    <Card
      onClick={() => handeleClick()}
      style={{
        cursor: "pointer",
        borderRadius: "16px",
        padding: "16px",
        background: background,
      }}
      bordered={true}
      bodyStyle={{ padding: "16px 0px", height: "190px" }}
      cover={
        <img
          style={{ height: "160px", width: "160px", margin: "auto" }}
          alt="example"
          src={src}
        />
      }
    >
      <div className={style.estimatortext1}>{title}</div>
      <div className={style.estimatortext2}>{text}</div>
      <div className={style.estimatortext3}>Save {discount}</div>
    </Card>
  );
}

import React from "react";
import { Card } from "antd";
import { EyeOutlined, HeartTwoTone } from "@ant-design/icons";
import { useHistory } from "react-router";
import style from "./Cards.module.css";

export default function Blogs({ id, src, text, desc, seen, like, time }) {
  const history = useHistory();
  const handleClick = () => {
    history.push(`/blogs/architecture/${id}`);
  };
  return (
    <Card
      hoverable
      onClick={() => handleClick()}
      bodyStyle={{
        padding: "5px",
        paddingTop: "10px",
        paddingBottom: "15px",
        borderRadius: "16px",
      }}
      className="blogCard"
      style={{ borderRadius: "16px" }}
      cover={<img alt="example" src={src} />}
      actions={[
        <div>
          <EyeOutlined />
          {"  "}
          {seen}
        </div>,
        <div>
          <HeartTwoTone twoToneColor="#eb2f96" />
          {"  "}
          {like}
        </div>,
        <div>{time}</div>,
      ]}
    >
      <div className={style.container7text1}>{text}</div>
      <div className={style.container7text2}>{desc}</div>
    </Card>
  );
}

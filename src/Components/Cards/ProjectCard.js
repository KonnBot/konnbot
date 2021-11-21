import React from "react";
import { Card, Divider } from "antd";
import style from "./Cards.module.css";
import { useHistory } from "react-router";
export default function ProjectCard({ id, src, name, add, area, floor, cost }) {
  const history = useHistory();
  const handleClick = () => {
    console.log("je");
    history.push(`/projects/${id}`);
  };
  return (
    <Card
      style={{ borderRadius: "16px" }}
      hoverable
      onClick={() => handleClick()}
      bordered={true}
      cover={<img alt="example" src={src} />}
      bodyStyle={{ padding: "16px" }}
    >
      <div className={style.projectCardtext}>
        <div className={style.projectCardtext1}>{name}</div>
        <div className={style.projectCardtext2}>{add}</div>
        <Divider style={{ margin: "8px 0px" }} />
        <div className={style.projectCardtext3}>
          <span>{area}</span>
          <Divider type="vertical" style={{ margin: "0px" }} />

          <span>{floor}</span>
          <Divider type="vertical" style={{ margin: "0px" }} />

          <span>{cost}</span>
        </div>
      </div>
    </Card>
  );
}

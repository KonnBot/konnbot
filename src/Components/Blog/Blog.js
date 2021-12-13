import React, { useState, useEffect } from "react";
import { Row, Col, Card } from "antd";
import { useLocation } from "react-router-dom";
import style from "./Blog.module.css";
import BlogCard from "../Cards/BlogCard";
import { Blogs } from "./Blogs";
import { ShareAltOutlined, HeartTwoTone } from "@ant-design/icons";

export default function Blog() {
  const [blogData, setBlogData] = useState({});

  const location = useLocation();
  useEffect(() => {
    let check = location.pathname.split("/");
    setBlogData(Blogs[check[3] - 1]);
  }, [location]);

  console.log("blogData", blogData);
  return (
    <Row justify="center" gutter={[0, 60]}>
      <Col span={14}>
        <Card
          hoverable
          cover={
            <>
              <div className={style.blogHeading}>
                {blogData && blogData.title}
              </div>
              <img
                className={style.blogImg}
                alt="example"
                src={blogData && blogData.url}
              />
            </>
          }
          actions={[
            <div>
              <ShareAltOutlined />
              {"    "}Share
            </div>,
            <div>
              <HeartTwoTone twoToneColor="#eb2f96" />
              {"    "} Like
            </div>,
          ]}
        >
          <div className={style.container7text1}>
            {blogData && blogData.blog}
          </div>
        </Card>
      </Col>
      <Col span={18}>
        <Row justify="space-between" gutter={[30, 30]}>
          <Col span={8}>
            <BlogCard
              id={1}
              src="/assets/18_HomePage.png"
              text="White Space Creating Ambiance with minimal Boxing & Louvers"
              desc="Technology integrated Construction, Help us to provide you various facilities in single platform Technology integrated Construction, Help us to provide you various facilities in"
              seen="108"
              like="84"
              time="1 Week"
            />
          </Col>
          <Col span={8}>
            <BlogCard
              id={2}
              src="/assets/FAR.jpg"
              text="Floor Area ration and Floor space Index"
              desc="Floor area ratio is the ratio of a building's total floor area to the size of land upon which it is built. Every city has a limited space so FAR is used as regulations in building planning along with the building-to-land ratio. Industrial "
              seen="120"
              like="84"
              time="2 Week"
            />
          </Col>
          <Col span={8}>
            <BlogCard
             id={3}
             src="/assets/Carpet.jpg"
             text="Carpet Area ,Built up Area and Super built up Area"
             desc="Carpet area is the distance between inner walls of your home. Carpet area is the actual usable area inside your home. Carpet area is around 75-80% of total built up area "
             seen="120"
             like="84"
             time="2 Week"
            />
          </Col>
        </Row>
      </Col>
      <Col span={24}></Col>
    </Row>
  );
}

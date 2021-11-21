import React from "react";

import { Row, Col } from "antd";
import style from "./Blogs.module.css";
import BlogTab from "./BlogTab";
import NewsLetterForm from "../Forms/NewsLetterForm";
const index = () => {
  return (
    <Row justify="center" gutter={[0, 60]}>
      <Col span={24}>
        <div className={style.container1}>
          <div style={{ width: "80%", margin: "auto" }}>
            <div className={style.container1text1}>Blog</div>
            <div className={style.container1text2}>
              Building your house is exciting, especially when you know how it
              works.
            </div>
          </div>
        </div>
      </Col>
      <Col span={20}>
        <BlogTab />
      </Col>
      <Col span={24}>
        <div className={style.container2}>
          <div className={style.container2text1}>
            Subscribe to our Newsletter
          </div>
          <div className={style.container2form}>
            <NewsLetterForm />
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default index;

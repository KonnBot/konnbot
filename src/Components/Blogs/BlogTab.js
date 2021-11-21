import React from "react";
import { Row, Col, Tabs } from "antd";
import BlogCard from "../Cards/BlogCard";

const { TabPane } = Tabs;

export default function BlogTab() {
  function callback(key) {
    console.log(key);
  }

  return (
    <Tabs defaultActiveKey="1" onChange={callback}>
      <TabPane tab="Architecture" key="1">
        <div style={{ paddingTop: "20px", paddingBottom: "20px" }}>
          <Row justify="center" gutter={[20, 20]}>
            <Col sm={12} md={8} lg={8} xl={6} xxl={6}>
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
            <Col sm={12} md={8} lg={8} xl={6} xxl={6}>
              <BlogCard
                id={2}
                src="/assets/18_HomePage.png"
                text="White Space Creating Ambiance with minimal Boxing & Louvers"
                desc="Technology integrated Construction, Help us to provide you various facilities in single platform Technology integrated Construction, Help us to provide you various facilities in"
                seen="108"
                like="84"
                time="1 Week"
              />
            </Col>
            <Col sm={12} md={8} lg={8} xl={6} xxl={6}>
              <BlogCard
                id={3}
                src="/assets/18_HomePage.png"
                text="White Space Creating Ambiance with minimal Boxing & Louvers"
                desc="Technology integrated Construction, Help us to provide you various facilities in single platform Technology integrated Construction, Help us to provide you various facilities in"
                seen="108"
                like="84"
                time="1 Week"
              />
            </Col>
            <Col sm={12} md={8} lg={8} xl={6} xxl={6}>
              <BlogCard
                id={4}
                src="/assets/18_HomePage.png"
                text="White Space Creating Ambiance with minimal Boxing & Louvers"
                desc="Technology integrated Construction, Help us to provide you various facilities in single platform Technology integrated Construction, Help us to provide you various facilities in"
                seen="108"
                like="84"
                time="1 Week"
              />
            </Col>
            <Col sm={12} md={8} lg={8} xl={6} xxl={6}>
              <BlogCard
                id={5}
                src="/assets/18_HomePage.png"
                text="White Space Creating Ambiance with minimal Boxing & Louvers"
                desc="Technology integrated Construction, Help us to provide you various facilities in single platform Technology integrated Construction, Help us to provide you various facilities in"
                seen="108"
                like="84"
                time="1 Week"
              />
            </Col>
            <Col sm={12} md={8} lg={8} xl={6} xxl={6}>
              <BlogCard
                id={6}
                src="/assets/18_HomePage.png"
                text="White Space Creating Ambiance with minimal Boxing & Louvers"
                desc="Technology integrated Construction, Help us to provide you various facilities in single platform Technology integrated Construction, Help us to provide you various facilities in"
                seen="108"
                like="84"
                time="1 Week"
              />
            </Col>
            <Col sm={12} md={8} lg={8} xl={6} xxl={6}>
              <BlogCard
                id={7}
                src="/assets/18_HomePage.png"
                text="White Space Creating Ambiance with minimal Boxing & Louvers"
                desc="Technology integrated Construction, Help us to provide you various facilities in single platform Technology integrated Construction, Help us to provide you various facilities in"
                seen="108"
                like="84"
                time="1 Week"
              />
            </Col>
            <Col sm={12} md={8} lg={8} xl={6} xxl={6}>
              <BlogCard
                id={8}
                src="/assets/18_HomePage.png"
                text="White Space Creating Ambiance with minimal Boxing & Louvers"
                desc="Technology integrated Construction, Help us to provide you various facilities in single platform Technology integrated Construction, Help us to provide you various facilities in"
                seen="108"
                like="84"
                time="1 Week"
              />
            </Col>
          </Row>
        </div>
      </TabPane>
      <TabPane tab="Interior" key="2">
        Comming Soon !
      </TabPane>
      <TabPane tab="Construction" key="3">
        Comming Soon !
      </TabPane>
      <TabPane tab="Industry" key="4">
        Comming Soon !
      </TabPane>
    </Tabs>
  );
}
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
          </Row>
        </div>
      </TabPane>
      <TabPane tab="Interior" key="2">
        Comming Soon !
      </TabPane>
      <TabPane tab="Construction" key="3">
      <div style={{ paddingTop: "20px", paddingBottom: "20px" }}>
          <Row justify="center" gutter={[20, 20]}>
            <Col sm={12} md={8} lg={8} xl={6} xxl={6}>
              <BlogCard
                id={2}
                src="/assets/FAR.jpg"
                text="Floor Area ratio and Floor space Index"
                desc="Floor area ratio is the ratio of a building's total floor area to the size of land upon which it is built. Every city has a limited space so FAR is used as regulations in building planning along with the building-to-land ratio. Industrial "
                seen="120"
                like="84"
                time="2 Week"
              />
            </Col>
            <Col sm={12} md={8} lg={8} xl={6} xxl={6}>
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
            <Col sm={12} md={8} lg={8} xl={6} xxl={6}>
              <BlogCard
                id={4}
                src="/assets/Drawings.jpg"
                text="Types of Drawings required in Construction"
                desc="Different types of drawings are needed during construction such as architectural drawings, structural, electrical, plumbing, finishing drawings and landscaping drawing. Drawings plays an important role in the "
                seen="120"
                like="84"
                time="2 Week"
              />
            </Col>
            <Col sm={12} md={8} lg={8} xl={6} xxl={6}>
              <BlogCard
                id={5}
                src="/assets/building.png"
                text="Types of Buildings"
                desc="These buildings have sleeping accommodation provided to people for residential puposes.These buildings may or may not have cooking facilities "
                seen="120"
                like="84"
                time="2 Week"
              />
            </Col>
            <Col sm={12} md={8} lg={8} xl={6} xxl={6}>
              <BlogCard
                id={6}
                src="/assets/Bricks.jpeg"
                text="Bricks"
                desc="These are thoroughly burnt and are of deep red, cherry or copper color.The surface should be smooth and rectangular, with parallel, sharp and straight edges and square corners"
                seen="120"
                like="84"
                time="2 Week"
              />
            </Col>
            </Row>
        </div>
      </TabPane>
      <TabPane tab="Industry" key="4">
        Comming Soon !
      </TabPane>
    </Tabs>
  );
}

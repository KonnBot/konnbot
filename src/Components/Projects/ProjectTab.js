import React from "react";
import { Row, Col, Tabs } from "antd";
import ProjectCard from "../Cards/ProjectCard";

const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

const ProjectTab = () => (
  <Tabs defaultActiveKey="1" onChange={callback}>
    <TabPane tab="All Projects" key="1">
      <div style={{ paddingTop: "20px", paddingBottom: "20px" }}>
        <Row justify="space-between" gutter={[20, 20]}>
          <Col sm={12} md={8} lg={8} xl={6} xxl={6}>
            <ProjectCard
              src="/assets/12project.png"
              id={1}
              name="Mr. Rajesh Yadav"
              add="Pardesipura,Indore"
              area="3,152 Sqft"
              floor="G + 2"
              cost="54.5 Lakh"
            />
          </Col>
          <Col sm={12} md={8} lg={8} xl={6} xxl={6}>
            <ProjectCard
              src="/assets/13project.png"
              id={2}
              name="Mr. Vinay Pingle Residence"
              add="Andanva,Prayagraj"
              area="3,023 Sqft"
              floor="G + 1"
              cost="52.3 Lakh"
            />
          </Col>
          <Col sm={12} md={8} lg={8} xl={6} xxl={6}>
            <ProjectCard
              src="/assets/Priyansh.png"
              id={3}
              name="Priyansh Joshi's House"
              add="Naini Prayagraj"
              area="2854 Sqft"
              floor="G+1"
              cost="65.4 Lakh"
            />
          </Col>
          <Col sm={12} md={8} lg={8} xl={6} xxl={6}>
            <ProjectCard
              src="/assets/Aashu.png"
              id={4}
              name="Mr. Rajesh Sahu"
              add="Lalghati,Bhopal"
              area="3,794 Sqft"
              floor="G+2"
              cost="54.2 Lakh"
            />
          </Col>
          <Col sm={12} md={8} lg={8} xl={6} xxl={6}>
            <ProjectCard
              src="/assets/14project.png"
              id={7}
              name="Mr. Wadhvani Residence"
              add="Bengali Square,Indore"
              area="1750 Sqft"
              floor="G+1"
              cost="28.9 Lakh"
            />
          </Col>
          <Col sm={12} md={8} lg={8} xl={6} xxl={6}>
            <ProjectCard
              src="/assets/15project.png"
              id={8}
              name="Akshat Apartmen"
              add="Ashoka Garden,Bhopal"
              area="12,160 Sqft"
              floor="G+4"
              cost="158.42 Lakh"
            />
          </Col>
          <Col sm={12} md={8} lg={8} xl={6} xxl={6}>
            <ProjectCard
              src="/assets/01project.png"
              id={9}
              name="Mr. Mahesh Sahu"
              add="Lalghati, Bhopal"
              area="3,550 Sqft"
              floor="G + 2"
              cost="57.6 Lakh"
            />
          </Col>
          <Col sm={12} md={8} lg={8} xl={6} xxl={6}>
            <ProjectCard
              src="/assets/Praveen.png"
              id={10}
              name="Mr. Praveen Villa"
              add="RK Puram,Prayagraj"
              area="2850 Sqft"
              floor="G + 1"
              cost="48.6 Lakh"
            />
          </Col>
          <Col sm={12} md={8} lg={8} xl={6} xxl={6}>
            <ProjectCard
              src="/assets/Geeta.png"
              id={11}
              name="Mrs Geeta Residence"
              add="Lalghati,Bhopal"
              area="3,554 Sqft"
              floor="G + 2"
              cost="54.10 Lakh"
            />
          </Col>
          <Col sm={12} md={8} lg={8} xl={6} xxl={6}>
            <ProjectCard
              src="/assets/11project.png"
              id={12}
              name="Mr. Akshat Kanasal"
              add="Bhawarkua,Indore"
              area="2505 Sqft"
              floor="G + 1"
              cost="48.6 Lakh"
            />
          </Col>
          <Col sm={12} md={8} lg={8} xl={6} xxl={6}>
            <ProjectCard
              src="/assets/04project.png"
              id={13}
              name="Mr & Mrs Sahu Residence"
              add="Nayapura,Bhopal"
              area="2700 Sqft"
              floor="G + 2"
              cost="40.10 Lakh"
            />
          </Col>
          <Col sm={12} md={8} lg={8} xl={6} xxl={6}>
            <ProjectCard
              src="/assets/03project.png"
              id={14}
              name="Grace Garden Housing"
              add="BHEL,Bhopal"
              area="1200 Sqft"
              floor="G + 1"
              cost="66.20 Lakh"
            />
          </Col>
        </Row>
      </div>
    </TabPane>
    <TabPane tab="Completed Projects" key="2">
      Comming Soon !
    </TabPane>
    <TabPane tab="Ongoing Projects" key="3">
      Comming Soon !
    </TabPane>
    <TabPane tab="Upcoming Projects" key="4">
      Comming Soon !
    </TabPane>
  </Tabs>
);

export default ProjectTab;

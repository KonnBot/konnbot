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
              src="/assets/01project.png"
              id={1}
              name="Mr. Mahesh Sahu"
              add="Lalghati, Bhopal"
              area="3550 Sqft"
              floor="G + 2"
              cost="57.6 Lakh"
            />
          </Col>
          <Col sm={12} md={8} lg={8} xl={6} xxl={6}>
            <ProjectCard
              src="/assets/02project.png"
              id={2}
              name="Mr. Vivek Singh"
              add="Akriti Retreat, Rohit Nagar, Bhopal"
              area="3694 Sqft"
              floor="G + 1"
              cost="51.5 Lakh"
            />
          </Col>
          <Col sm={12} md={8} lg={8} xl={6} xxl={6}>
            <ProjectCard
              src="/assets/03project.png"
              id={3}
              name="Grace Garden Housing"
              add="BHEL, Bhopal"
              area="1200 Sqft"
              floor="G"
              cost="32.8 Lakh"
            />
          </Col>
          <Col sm={12} md={8} lg={8} xl={6} xxl={6}>
            <ProjectCard
              src="/assets/04project.png"
              id={4}
              name="Mr & Mrs Sahu"
              add="Nayapura, Bhopal"
              area="1200 Sqft"
              floor="G"
              cost="32.8 Lakh"
            />
          </Col>
          <Col sm={12} md={8} lg={8} xl={6} xxl={6}>
            <ProjectCard
              src="/assets/05project.png"
              id={5}
              name="Mr. Mahesh Sahu"
              add="Lalghati, Bhopal"
              area="3550 Sqft"
              floor="G + 2"
              cost="57.6 Lakh"
            />
          </Col>
          <Col sm={12} md={8} lg={8} xl={6} xxl={6}>
            <ProjectCard
              src="/assets/06project.png"
              id={6}
              name="Mr. Vivek Singh"
              add="Akriti Retreat, Rohit Nagar, Bhopal"
              area="3694 Sqft"
              floor="G + 1"
              cost="51.5 Lakh"
            />
          </Col>
          <Col sm={12} md={8} lg={8} xl={6} xxl={6}>
            <ProjectCard
              src="/assets/07project.png"
              id={7}
              name="Grace Garden Housing"
              add="BHEL, Bhopal"
              area="1200 Sqft"
              floor="G"
              cost="32.8 Lakh"
            />
          </Col>
          <Col sm={12} md={8} lg={8} xl={6} xxl={6}>
            <ProjectCard
              src="/assets/08project.png"
              id={8}
              name="Mr. Mahesh Sahu"
              add="Lalghati, Bhopal"
              area="1200 Sqft"
              floor="G"
              cost="32.8 Lakh"
            />
          </Col>
          <Col sm={12} md={8} lg={8} xl={6} xxl={6}>
            <ProjectCard
              src="/assets/09project.png"
              id={9}
              name="Mr. Geeta Residence"
              add="Lords Colony, Lalghati, Bhopal"
              area="3554 Sqft"
              floor="G + 2"
              cost="54.1 Lakh"
            />
          </Col>
          <Col sm={12} md={8} lg={8} xl={6} xxl={6}>
            <ProjectCard
              src="/assets/10project.png"
              id={10}
              name="Mr. Akshat Kansal"
              add="Bhawarkua, Indore"
              area="2505 Sqft"
              floor="G + 1"
              cost="48.6 Lakh"
            />
          </Col>
          <Col sm={12} md={8} lg={8} xl={6} xxl={6}>
            <ProjectCard
              src="/assets/11project.png"
              id={11}
              name="Mr. Rajesh Yadav"
              add="Prashantpura, Indore"
              area="3152 Sqft"
              floor="G + 2"
              cost="54.5 Lakh"
            />
          </Col>
          <Col sm={12} md={8} lg={8} xl={6} xxl={6}>
            <ProjectCard
              src="/assets/12project.png"
              id={12}
              name="Mr. Priyansh Joshi Villa"
              add="Naini, Prayagraj"
              area="2854 Sqft"
              floor="G + 1"
              cost="64.7 Lakh"
            />
          </Col>
          <Col sm={12} md={8} lg={8} xl={6} xxl={6}>
            <ProjectCard
              src="/assets/13project.png"
              id={13}
              name="Mr. Mahendra Sharma"
              add="Teliarganj, Prayagraj"
              area="3032 Sqft"
              floor="G + 1"
              cost="52.3 Lakh"
            />
          </Col>
          <Col sm={12} md={8} lg={8} xl={6} xxl={6}>
            <ProjectCard
              src="/assets/14project.png"
              id={14}
              name="Mr. Wadwani Residence"
              add="Bengali Square, Indore"
              area="1750 Sqft"
              floor="G + 1"
              cost="31.6 Lakh"
            />
          </Col>
          <Col sm={12} md={8} lg={8} xl={6} xxl={6}>
            <ProjectCard
              src="/assets/15project.png"
              id={15}
              name="Akshat Appartment"
              add="Ashoka Garden, Bhopal"
              area="12160 Sqft"
              floor="G + 2"
              cost="-- Lakh"
            />
          </Col>
          <Col sm={12} md={8} lg={8} xl={6} xxl={6}>
            <ProjectCard
              src="/assets/16project.png"
              id={16}
              name="Mr. Narendra Jain"
              add="Lalghati, Bhopal"
              area="3684 Sqft"
              floor="G + 1"
              cost="55.6 Lakh"
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

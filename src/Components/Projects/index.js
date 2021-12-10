import React from "react";
import { Row, Col, Button } from "antd";
import style from "./Project.module.css";
import ProjectTab from "./ProjectTab";
import KnownProjectCard from "../Cards/KnownProjectCard";
import VideoProjectCard from "../Cards/VideoProjectCard";
const index = () => {
  return (
    <Row justify="space-around" gutter={[0, 60]}>
      <Col span={24}>
        <div className={style.container1}>
          <div style={{ width: "80%", margin: "auto" }}>
            <div className={style.container1text1}>Our Projects</div>
            <div className={style.container1text2}>
              Putting the control of your projects in your hand.
            </div>
          </div>
        </div>
      </Col>
      <Col span={18}>
        <ProjectTab />
      </Col>
      <Col span={18}>
        <div className={style.container3}>
          <div className={style.container3text1}>
            Featured Projects
            <span className={style.titleImg}>
              <img alt="title" src="/assets/Title.png" />
            </span>
          </div>
          <div className={style.container3text2}>
            We put our heart and soul into each project.
          </div>
        </div>
      </Col>
      <Col span={18}>
        <Row justify="centeer" gutter={[30, 30]}>
          <Col span={24} sm={12} md={12} lg={12} xl={12} xxl={12}>
            <KnownProjectCard
              src="/assets/02ProjectPage.png"
              name="Mr Vivek Singh"
              add="Akriti Retreat, Rohit Nagar, Bhopal"
              area=" 3684 sqft"
              status="Ongoing"
            />
          </Col>
          <Col span={24} sm={12} md={12} lg={12} xl={12} xxl={12}>
            <KnownProjectCard
              src="/assets/03ProjectPage.png"
              name="Mr Rajesh Yadav"
              add="Prashantpura, Indore"
              area=" 3152 sqft"
              status="Ongoing"
            />
          </Col>
        </Row>
      </Col>

      <Col span={18}>
        <div className={style.container3}>
          <div className={style.container3text1}>
            Walkthrough
            <span className={style.titleImg}>
              <img alt="title" src="/assets/Title.png" />
            </span>
          </div>
          <div className={style.container3text2}>
            Have a look of Walthrough of our projects
          </div>
        </div>
      </Col>
      <Col span={18}>
        <Row justify="center" gutter={[30, 30]}>
          <Col span={24} sm={12} md={8} lg={8} xl={8} xxl={8}>
            <VideoProjectCard url="https://www.youtube.com/embed/CTP9JC6yT4g" name="Mr. Vivek Singh Residence" text="Akriti Retreat, Rohit Nagar, Bhopal" />
          </Col>
          <Col span={24} sm={12} md={8} lg={8} xl={8} xxl={8}>
            <VideoProjectCard url="https://www.youtube.com/embed/k7vAqPTVKjY" name="Grace Garden Housing" text="BHEL,Bhopal"  />
          </Col>
          <Col span={24} sm={12} md={8} lg={8} xl={8} xxl={8}>
            <VideoProjectCard url="https://www.youtube.com/embed/lg7bE3lPVG0" name="Mr. Rajesh Sahu Residence" text="Lalghati,Bhopal"  />
          </Col>
        </Row>
      </Col>
      <Col span={18}>
        <div>
          <img
            style={{ width: "100%" }}
            alt="project"
            src="/assets/01_ProjectPage.png"
          />
        </div>
        <div style={{ position: "absolute", top: "10%" }}>
          <img
            style={{ width: "100%" }}
            alt="project"
            src="/assets/02_ProjectPage.png"
          />
        </div>
      </Col>
      <Col span={24}>
        <div className={style.container4}>
          <div style={{ width: "80%", margin: "auto", textAlign: "center" }}>
            <div>
              <Button
                style={{
                  backgroundColor: "#FFC000",
                  color: "#FFFFFF",
                  borderRadius: "5px",
                  height: "max-content",
                  marginTop: "10px",
                }}
                type="primary"
                size="large"
              >
                <div style={{ fontSize: "20px" }}>Let's Build Together</div>
              </Button>
            </div>
            <div className={style.container4text2}>
              A vision for construction industry in new India.
            </div>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default index;

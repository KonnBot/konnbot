import React from "react";
import { Row, Col, Steps } from "antd";
import style from "./About.module.css";
import TeamCard from "../Cards/TeamCard";
const { Step } = Steps;

const index = () => {
  return (
    <Row justify="center" gutter={[0, 60]}>
      <Col span={24}>
        <div className={style.container1}>
          <div style={{ width: "75%", margin: "auto" }}>
            <div className={style.container1text1}>About Us</div>
            <div className={style.container1text2}>
              We are a distributed agency of experts with an incredible focus
              within each of our disciplines.
            </div>
          </div>
        </div>
      </Col>
      <Col span={18}>
        <div className={style.title}>
          How we started
          <span className={style.titleImg}>
            <img alt="title" src="/assets/Title.png" />
          </span>
        </div>
        <div className={style.title2}>
          A new vision for the construction industry in new India.
        </div>
      </Col>
      <Col span={9}>
        <Steps
          style={{ height: "100%" }}
          progressDot
          current={5}
          direction="vertical"
        >
          <Step
            className="aboutSteps"
            title="Started"
            description="It’s all being in COVID-19 Pandemic that we started as Architecture Consultancy in Bhopal, Prayagraj. In the starting we are getting architectural projects but the problem become is as usual the miscommunication and we can’t be there every-time to explain the contractor & labor to do what. No updates of what is going on, calling us whenever they want. It happens with all the 6 projects which are going on, either you accept what is going on or you want to implement with the best techniques and coordinate in the best manner, where project don’t get delays due to unnecessary issues & mismanagement. Conclude to stop architecture consultancy which doesn’t allow us to practice the manner we want."
          />
          <Step
            className="aboutSteps"
            title="Why we need software in Construction"
            description="Personally, I want to pursue construction management from HFT Stuttgart (IPM) after getting selected waiting for winter semester, sitting at home thinking to see what the future in management & other parameters. All the major projects & KPGM reports, saying that we need tech enabled process to create better system for betterment of Construction management. 
            Concluding to start the making software for lower scale of projects in India for the clients who has the dream to build the home in life, but the system through which they have to go through is very tensive experience due to which they have to stop and buying the flat, where again the builders flat do not satisfy them.
            "
          />
          <Step
            className="aboutSteps"
            title="KONNBOT - Construction Management Consultancy "
            description="KONNBOT as a company started the construction management consultancy in Bhopal, Indore & Prayagraj to start our journey in Central India. Our experience center to help you explain about the construction & techniques of working."
          />
          <Step
            className="aboutSteps"
            title="KONNBOT CMS - Upcoming "
            description="We are working on pre-cast concrete for lower scale up to G +4 projects plant in Indore. Currently in contact with the CSIR labs in CBRI Roorkee, AMPRI Bhopal & SERC Chennai & other industry experts for thermal efficient home in India. "
          />
          <Step
            className="aboutSteps"
            title="A lot to come "
            description="Project Management Software for large scale projects is on development stage

            "
          />
        </Steps>
      </Col>
      <Col span={9}>
        <img src="/assets/aboutImg.png" alt="about" />
      </Col>
      <Col span={24}>
        <Row
          justify="center"
          style={{
            paddingTop: "64px",
            paddingBottom: "64px",
            backgroundColor: "#E8F5FF",
          }}
        >
          <Col span={18}>
            <div className={style.title}>
              What we do
              <span className={style.titleImg}>
                <img alt="title" src="/assets/Title.png" />
              </span>
            </div>
            <div className={style.title2}>
              What ever you can think in construction we are here to do that. If
              you have material supplier thats good or if you have well known
              contractor thats good than we can help out to manage quality and
              maintenance of your construction project with the best way and
              maximize your savings in the project.
            </div>
          </Col>
        </Row>

        <Row
          justify="center"
          style={{
            paddingTop: "64px",
            paddingBottom: "64px",
            backgroundColor: "#FFFBF1",
          }}
        >
          <Col span={9}>
            <div className={style.title}>
              How we do
              <span className={style.titleImg}>
                <img alt="title" src="/assets/Title.png" />
              </span>
            </div>
            <div className={style.title2}>
              We are tech based construction managment system to manage all
              construction activities and resource management. We give the all
              control of project in your hand as you can choose the best
              material, best rates from the market and quality of material you want.
            </div>
          </Col>
          <Col span={9}>
            <img
              style={{ float: "right" }}
              src="/assets/aboutImage1.png"
              alt="about"
            />
          </Col>
        </Row>
      </Col>
      <Col span={18}>
        <div className={style.title}>
          Our Team
          <span className={style.titleImg}>
            <img alt="title" src="/assets/Title.png" />
          </span>
        </div>
        <Row justify="start" gutter={[30, 30]}>
          <Col span={12} sm={12} md={8} lg={6}>
            <TeamCard
              src="/assets/15.png"
              name="Priyanka Gayen"
              role="Design Head"
            />
          </Col>
          <Col span={12} sm={12} md={8} lg={6}>
            <TeamCard
              src="/assets/17.png"
              name="Vinay Dhomne"
              role="UI/UX Designer"
            />
          </Col>
          <Col span={12} sm={12} md={8} lg={6}>
            <TeamCard
              src="/assets/13.png"
              name="Ashish Yadav"
              role="CRM"
            />
          </Col>
          <Col span={12} sm={12} md={8} lg={6}>
            <TeamCard
              src="/assets/11.png"
              name="Nitin Sahu"
              role="CEO"
            />
          </Col>
          <Col span={12} sm={12} md={8} lg={6}>
            <TeamCard
              src="/assets/12.png"
              name="Kinshuk kujur"
              role="UI/UX Head"
            />
          </Col>
          <Col span={12} sm={12} md={8} lg={6}>
            <TeamCard
              src="/assets/14.png"
              name="Harshit Sahu"
              role="Supply chain manager"
            />
          </Col>
          <Col span={12} sm={12} md={8} lg={6}>
            <TeamCard
              src="/assets/16.png"
              name="Anshul Gautam"
              role="Quality Manager"
            />
          </Col>
          <Col span={12} sm={12} md={8} lg={6}>
            <TeamCard
              src="/assets/19.png"
              name="Simran Dhiman"
              role="Marketing Head"
            />
          </Col>
          <Col span={12} sm={12} md={8} lg={6}>
            <TeamCard
              src="/assets/18.png"
              name="Aditi Moulick"
              role="Finance Head"
            />
          </Col>
        </Row>
      </Col>
      <Col span={24}></Col>
    </Row>
  );
};

export default index;

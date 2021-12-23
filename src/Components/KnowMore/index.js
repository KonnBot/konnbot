import React from "react";
import { Row, Col } from "antd";
import style from "./KnowMore.module.css";
import KnowMoreCard from "../Cards/KnowMoreCard";
import ContactUs from "../Forms/ContactUs";
export default function index() {
  return (
    <Row justify="space-around" gutter={[0, 30]}>
      <Col span={24}>
        <div className={style.container1}>
          <div style={{ width: "80%", margin: "auto" }}>
            <div className={style.container1text1}>
              Benefits of being with us
            </div>
            <div className={style.container1text2}>
              Estimate your budget with the accurate need of your construction
              project
            </div>
          </div>
        </div>
      </Col>
      <Col span={18}>
        <div className={style.container3}>
          <div className={style.container3text1}>
            You will get the advanced <br /> services
            <span className={style.titleImg}>
              <img alt="title" src="/assets/Title.png" />
            </span>
          </div>
          <div className={style.container3text2}>
            We provide you best tech oriented services for your construction
          </div>
        </div>
      </Col>
      <Col span={18}>
        <KnowMoreCard
          src="/assets/knowmore01.png"
          flex="row-reverse"
          title="256+ Quality checks"
          text="We promise you the best quality construction services. It ensure that the you always get the best quality material and workmanship under your budget. To ensure that we have more than 256 quality checks specially designed by experts of industry. It starts from soil test to delivery of finishes of your home before handing over to you. We have the RCC tests, Bar tests, Spirit level checked flooring etc. We will hand over the detailed report of projects to you when the project gets completed."
        />
      </Col>
      <Col span={18}>
        <KnowMoreCard
          src="/assets/knowmore02.png"
          flex="row"
          title="Documents & analytics"
          text="We take care of all legal and permission processes for your building construction. We take care of all documents and file at single platform. It gives you the hassle free communication betweek all vendors, architectural and structural drawings. "
        />
      </Col>
      <Col span={18}>
        <KnowMoreCard
          src="/assets/knowmore03.png"
          flex="row-reverse"
          title="100% Track of project"
          text="We provide you the best solution for the construction of your home with 100% transparancy in all the things which will be conducted on site. 
            We give the tech based project tracking solution for the work, material and project schedule. Before project starts we will give you the all details about the project  "
        />
      </Col>
      <Col span={18}>
        <KnowMoreCard
          src="/assets/knowmore04.png"
          flex="row"
          title="23+ Contractors "
          text="We take care of all legal and permission processes for your building construction. We take care of all documents and file at single platform. It gives you the hassle free communication betweek all vendors, architectural and structural drawings. "
        />
      </Col>
      <Col span={18}>
        <KnowMoreCard
          src="/assets/knowmore05.png"
          flex="row-reverse"
          title="15 years Warranty"
          text="You many have not heard about the warranty in construction project. Here we are always with you for your construction project during the construction and after 15 years of construction. We give you the 15 years of warranty on structure to make sure your home is built safe and durable. "
        />
      </Col>
      <Col span={18}>
        <KnowMoreCard
          src="/assets/knowmore06.png"
          flex="row"
          title="Daily Updates"
          text="Quality control and safety represents increasingly important concerns for Project managers. Defects or failures in constructed facilities can result in very large costs. Even with minor defects, re-construction may be required and facility operations impaired. Increased costs and delays are the result. In the worst case, failures may cause personal injuries or fatalities. Accidents during the construction process can similarly result in personal injuries and large costs. Indirect costs of insurance, inspection and regulation are increasing rapidly due to these increased direct costs. Competent project managers try to ensure that the job is done right the first time and that no major accidents occur on the project."
        />
      </Col>
      <Col span={18}>
        <KnowMoreCard
          src="/assets/knowmore07.png"
          flex="row-reverse"
          title="Budget in 5 Min."
          text="We have inbuilt software which can calculate the exact as per the requirement which is customize budget in not more than 5 mins. "
        />
      </Col>
      <Col span={18}>
        <KnowMoreCard
          src="/assets/knowmore08.png"
          flex="row"
          title="Easy Payment   "
          text="We follow escrow model where you have to pay us and when the construction is over by the contractor & inspected by the quality manager & approved by the project manager it is given to respective person. Until then it is safe with us. "
        />
      </Col>
      <Col span={18}>
        <div className={style.text4}>
          In Doubt, Consult Us
          <span className={style.titleImg}>
            <img alt="title" src="/assets/Title.png" />
          </span>
        </div>
        <div className={style.container3text2}>
          Technology integrated Construction helps us to provide you various
          facilities in single platform
          <br />
          ,connect among Stakeholder & Client to built strong relation
        </div>
      </Col>
      <Col span={24}>
        <div className={style.container6content}>
          <div className={style.container6content1}>
            <img
              className={style.container6img}
              alt="estimator"
              src="/assets/02_EstimatorPage.png"
            />
            <div className={style.container6form}>
              <ContactUs />
            </div>
          </div>
        </div>
      </Col>
    </Row>
  );
}

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
              Estimate your budget with the accurate need for your construction
              project
            </div>
          </div>
        </div>
      </Col>
      <Col span={18}>
        <div className={style.container3}>
          <div className={style.container3text1}>
            you will get the advanced <br /> services
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
          title="256 + Quality checks"
          text="+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ promise you the best quality construction services. It ensure that the you always get the best quality material and workmanship under your budget. To ensure that we have more than 256 quality checks spaecily designed by experts of industry. It starts from soil test to delivery of finishes of your home before handing over to you. We have the RCC tests, Bar tests, Sprit level checked flooring etc. we will hand over the detail report of projects to you when the project get completed."
        />
      </Col>
      <Col span={18}>
        <KnowMoreCard
          src="/assets/knowmore02.png"
          flex="row"
          title="Documents & analytics"
          text="we take care of all legel and permission process for your buillding construction. we take care of all documents and file at single platform. It give you the hessle free communication betweek all vendors, architect and structure drawings. "
        />
      </Col>
      <Col span={18}>
        <KnowMoreCard
          src="/assets/knowmore03.png"
          flex="row-reverse"
          title="100% Track of project"
          text="We provide you the best solution for the construction of your home with 100% transperacy in all the things which will be conducted on site. 
            we give the tech based project traking solution for the work, material and project schedule. before project start we will give you the all detils about the project  "
        />
      </Col>
      <Col span={18}>
        <KnowMoreCard
          src="/assets/knowmore04.png"
          flex="row"
          title="23+ Contractors "
          text="we take care of all legel and permission process for your buillding construction. we take care of all documents and file at single platform. It give you the hessle free communication betweek all vendors, architect and structure drawings. "
        />
      </Col>
      <Col span={18}>
        <KnowMoreCard
          src="/assets/knowmore05.png"
          flex="row-reverse"
          title="15 years Warranty"
          text="You many not herd about the warranty in construction project. here we are always with you for your construction projct during the construction and after 15 years of construction. we give you the 15 years of warrenty on structure. to make sure your home is built safe and durable. "
        />
      </Col>
      <Col span={18}>
        <KnowMoreCard
          src="/assets/knowmore06.png"
          flex="row"
          title="Daily Updates"
          text="Quality control and safety represent increasingly important concerns for project managers. Defects or failures in constructed facilities can result in very large costs. Even with minor defects, re-construction may be required and facility operations impaired. Increased costs and delays are the result. In the worst case, failures may cause personal injuries or fatalities. Accidents during the construction process can similarly result in personal injuries and large costs. Indirect costs of insurance, inspection and regulation are increasing rapidly due to these increased direct costs. Good project managers try to ensure that the job is done right the first time and that no major accidents occur on the project."
        />
      </Col>
      <Col span={18}>
        <KnowMoreCard
          src="/assets/knowmore07.png"
          flex="row-reverse"
          title="Budget in 15 Min."
          text="Quality control and safety represent increasingly important concerns for project managers. Defects or failures in constructed facilities can result in very large costs. Even with minor defects, re-construction may be required and facility operations impaired. Increased costs and delays are the result. In the worst case, failures may cause personal injuries or fatalities. Accidents during the construction process can similarly result in personal injuries and large costs. Indirect costs of insurance, inspection and regulation are increasing rapidly due to these increased direct costs. Good project managers try to ensure that the job is done right the first time and that no major accidents occur on the project."
        />
      </Col>
      <Col span={18}>
        <KnowMoreCard
          src="/assets/knowmore08.png"
          flex="row"
          title="Easy Payment   "
          text="Quality control and safety represent increasingly important concerns for project managers. Defects or failures in constructed facilities can result in very large costs. Even with minor defects, re-construction may be required and facility operations impaired. Increased costs and delays are the result. In the worst case, failures may cause personal injuries or fatalities. Accidents during the construction process can similarly result in personal injuries and large costs. Indirect costs of insurance, inspection and regulation are increasing rapidly due to these increased direct costs. Good project managers try to ensure that the job is done right the first time and that no major accidents occur on the project."
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
          Technology integrated Construction, Help us to provide you various
          facilities in single platform
          <br />
          connects among Stakeholder & Client to built strong relation
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

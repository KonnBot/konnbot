import React from "react";
import { Row, Col } from "antd";
import style from "./Estimator.module.css";
import EstimatorFeatures from "../Cards/EstimatorFeatures";
// import PackageIncludes from "./PackageIncludes";
import ContactUs from "../Forms/ContactUs";
import Calc from "../Forms/Calc";
const index = ({ calcData, setCalcData }) => {
  return (
    <Row justify="center" gutter={[0, 60]}>
      <Col span={24}>
        <div className={style.container1}>
          <div style={{ width: "80%", margin: "auto" }}>
            <div className={style.container1text1}>Estimator</div>
            <div className={style.container1text2}>
              Calculate your budget free of cost.
            </div>
          </div>
        </div>
      </Col>
      <Col span={18}>
        <div className={style.container2}>
          <div className={style.container2text1}>Where can you save money</div>
          <div className={style.container2text3}>
            Building your home is exciting especially when you know how it works
          </div>
          <span className={style.titleImg}>
            <img alt="title" src="/assets/Title.png" />
          </span>
        </div>
      </Col>
      <Col span={18}>
        <Row justify="center" gutter={[30, 30]}>
          <Col span={24} sm={24} md={12} lg={6}>
            <EstimatorFeatures
              title="Plot Selection"
              text="Plot width irregular size,services land cost & development analysis"
              discount="20%"
              src="/assets/EstimatorF01.png"
              background="#FFFBF1"
            />
          </Col>
          <Col span={24} sm={24} md={12} lg={6}>
            <EstimatorFeatures
              title="Design & Approval"
              text="Design as per cost analysis, no additional approval cost."
              discount="1-2%"
              src="/assets/EstimatorF02.png"
              background="#F3FFF2"
            />
          </Col>
          <Col span={24} sm={24} md={12} lg={6}>
            <EstimatorFeatures
              title="Contractor"
              text="Everyone is working for profit,either its your known or relative"
              discount="15%"
              src="/assets/EstimatorF03.png"
              background="#FFEFEF"
            />
          </Col>
          <Col span={24} sm={24} md={12} lg={6}>
            <EstimatorFeatures
              title="Material Selection"
              text="50% of the project cost depends on material."
              discount="20%"
              src="/assets/EstimatorF04.png"
              background="#FBF4FF"
            />
          </Col>
          <Col span={24} sm={24} md={12} lg={6}>
            <EstimatorFeatures
              title="Maintenance"
              text="15 years Warranty on Structure & Service helps to reduce maintenance cost."
              discount="20%"
              src="/assets/EstimatorF05.png"
              background="#FDFFF2"
            />
          </Col>
          <Col span={24} sm={24} md={12} lg={6}>
            <EstimatorFeatures
              title="Interior Design"
              text="Integrating Interior from intial stage lowers the interior cost of you project."
              discount="20%"
              src="/assets/EstimatorF06.png"
              background="#EDFFF7"
            />
          </Col>
          <Col span={24} sm={24} md={12} lg={6}>
            <EstimatorFeatures
              title="Thermal analysis"
              text="Insultating layers will reduce the buiding heating & cooling load reduction in bill"
              discount="20%"
              src="/assets/EstimatorF07.png"
              background="#F3F0FF"
            />
          </Col>
          <Col span={20} sm={24} md={12} lg={6}>
            <EstimatorFeatures
              title="Quality of Construction"
              text="If you know the technology & techniques we can give you better quality"
              discount="20%"
              src="/assets/EstimatorF08.png"
              background="#F1F9FF"
            />
          </Col>
        </Row>
      </Col>
      <Col span={18}>
        <div className={style.container2}>
          <div className={style.container2text1}>Tell us about your plot</div>
          <div className={style.container2text3}>
            Calculate your project cost in a few easy steps
          </div>
          <span className={style.titleImg}>
            <img alt="title" src="/assets/Title.png" />
          </span>
        </div>
      </Col>
      <Col span={18}>
        <Calc calcData={calcData} setCalcData={setCalcData} disabled={false} />
      </Col>
      {/* <Col span={24}>
        <div className={style.container5}>
          <div className={style.container5Content}>
            <div className={style.container2}>
              <div className={style.container2text1}>Package Includes</div>
              <div className={style.container2text3}>
                Technology integrated Construction, Help us to provide you
                various facilities in single platform connects among Stakeholder
                & Client to built strong relation
              </div>
            </div>
            <div className={style.container5Content1}>
              <PackageIncludes />
            </div>
          </div>
        </div>
      </Col> */}
      <Col span={18} style={{ marginBottom: "-28px" }}>
        <div className={style.container2}>
          <div className={style.container2text1}>
            Book your free consultation now
          </div>
          <div className={style.container2text3}>We are only one call away</div>
          <div className={style.container2text3}>
            Our expert of construction professional is happy to help you in any
            way possible. Get in touch with us today!
          </div>
          <span className={style.titleImg}>
            <img alt="title" src="/assets/Title.png" />
          </span>
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
};

export default index;

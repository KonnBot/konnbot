import React from "react";
import { Row, Col, Tabs } from "antd";
import style from "./BeforeYouBegin.module.css";
import EstimatorFeatures from "../Cards/EstimatorFeatures";
import ContactUs from "../Forms/ContactUs";
import Calc from "../Forms/Calc";
const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}
export default function index({ calcData, setCalcData }) {
  return (
    <>
      <div className={style.container}>
        <img
          className={style.mainImage}
          alt="home"
          src="/assets/01_HomePage.png"
        />
        <div className={style.containerText1}>
          <div className={style.containerText2}>Before you begin </div>
          <div className={style.containerText3}>
            Building your home is exciting, especially if you know how it works.
          </div>
        </div>
      </div>
      <Row justify="center" gutter={[0, 60]}>
        <Col span={18}>
          <Tabs
            size="large"
            centered={true}
            defaultActiveKey="1"
            onChange={callback}
          >
            <TabPane className={style.tabPan} tab="Space Arrangments" key="1">
              <div>
                <div className={style.text1}>
                  White Space Creating Ambiance with minimal Boxing & Louvers
                  makes the Elevation more
                </div>
                <img
                  className={style.detailImage}
                  alt="details"
                  src="/assets/details01.png"
                />
              </div>
            </TabPane>
            <TabPane tab="Strategies of Construction" key="2">
              Content of Tab Pane 2
            </TabPane>
            <TabPane tab="Water Proofing" key="3">
              Content of Tab Pane 3
            </TabPane>
            <TabPane tab="Home Termite Free Check" key="4">
              Content of Tab Pane 3
            </TabPane>
            <TabPane tab="Site Selection Ckecklist" key="5">
              Content of Tab Pane 3
            </TabPane>
          </Tabs>
        </Col>
        <Col span={18}>
          {/* <div className={style.hh}> */}
          <div className={style.calctext1}>
            Tell us about your
            <span className={style.calctext2}> plot</span>
            <span className={style.titleImg}>
              <img alt="title" src="/assets/Title.png" />
            </span>
          </div>
          <div className={style.calctext3}>
            Calculate your peoject cost in a few easy steps
          </div>
          {/* </div> */}
        </Col>
        <Col span={18}>
          <Calc
            calcData={calcData}
            setCalcData={setCalcData}
            disabled={false}
          />
        </Col>
        <Col span={18}>
          <div className={style.container2}>Read similar blogs</div>
          <Row justify="center" gutter={[30, 30]}>
            <Col span={12} sm={12} md={12} lg={6}>
              <EstimatorFeatures
                src="/assets/EstimatorF01.png"
                title="Selection of Plot"
                text="Here you can save money by selection plot area, where and when are you buying."
                discount="20%"
                background="#FFFBF1"
              />
            </Col>
            <Col span={12} sm={12} md={12} lg={6}>
              <EstimatorFeatures
                src="/assets/EstimatorF02.png"
                title="Design & Approval"
                text="Here you can not save more money. it has fix rate in market."
                discount="1-2%"
                background="#F3FFF2"
              />
            </Col>
            <Col span={12} sm={12} md={12} lg={6}>
              <EstimatorFeatures
                src="/assets/EstimatorF03.png"
                title="Contractor"
                text="This one is most importance stage where you can save money by"
                discount="15%"
                background="#FFEFEF"
              />
            </Col>
            <Col span={12} sm={12} md={12} lg={6}>
              <EstimatorFeatures
                src="/assets/EstimatorF04.png"
                title="Material Selection"
                text="Here are the most important stap for the quality of construction and you cane save a lot."
                discount="20%"
                background="#FBF4FF"
              />
            </Col>
          </Row>
        </Col>
        <Col span={18}>
          <div className={style.container3text1}>
            Book your
            <span style={{ color: "#ffcc00" }}> free consultation </span>
            now
            <span className={style.titleImg}>
              <img alt="title" src="/assets/Title.png" />
            </span>
          </div>
          <div className={style.container3text2}>
            We are only one call away.
            <br />
            Our expert team of construction professionals is happy to help you
            in any way possible. Get in touch with us today!
          </div>
        </Col>
        <Col span={24}>
          <div className={style.container4content}>
            <div className={style.container4content1}>
              <img
                className={style.container4img}
                alt="estimator"
                src="/assets/02_EstimatorPage.png"
              />
              <div className={style.container4form}>
                <ContactUs />
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
}

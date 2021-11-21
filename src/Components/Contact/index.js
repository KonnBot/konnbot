import React from "react";
import { Row, Col } from "antd";
import style from "./Contact.module.css";
import ContactUs from "../Forms/ContactUs";
const index = () => {
  return (
    <Row justify="center" gutter={[0, 60]}>
      <Col span={24}>
        <div className={style.container1}>
          <div style={{ width: "75%", margin: "auto" }}>
            <div className={style.container1text1}>Connect Us</div>
            <div className={style.container1text2}>
              To request for quote or want to meet up for coffee fill out the
              details or contact us directly
              <br /> and we will get back to you ASAP.
            </div>
          </div>
        </div>
      </Col>
      <Col span={9}>
        <Row justify="center" gutter={[30, 30]}>
          <Col span={24}>
            <div className={style.container2}>
              <span className={style.container2Img}>
                <img alt="contac" src="/assets/contact01.png" />
              </span>
              <span>
                Office No. 306, 3rd Floor, Opp. Raymond Showroom,
                <br /> Zone - 2, M.P. Nagar, Bhopal, M.P., 462011
              </span>
            </div>
          </Col>
          <Col span={24}>
            <div className={style.container2}>
              <span className={style.container2Img}>
                <img alt="contac" src="/assets/contact02.png" />
              </span>
              <span>+91 9981 833 966</span>
            </div>
          </Col>
          <Col span={24}>
            <div className={style.container2}>
              <span className={style.container2Img}>
                <img alt="contac" src="/assets/contact03.png" />
              </span>
              <span>info@konnbot.com</span>
            </div>
          </Col>
          <Col span={24}>
            <div className={style.container3}>
              <span className={style.container3Img1}>
                <img alt="contac" src="/assets/contact04.png" />
              </span>
              <span className={style.container3Img1}>
                <img alt="contac" src="/assets/contact05.png" />
              </span>
              <span className={style.container3Img1}>
                <img alt="contac" src="/assets/contact06.png" />
              </span>
            </div>
          </Col>
        </Row>
      </Col>
      <Col span={9}>
        <div className={style.container4}>
          <div className={style.container4text1}>
            We would love to hear from you.
            <br />
            Do get in touch with us
          </div>
          <ContactUs />
        </div>
      </Col>
      <Col span={24}></Col>
    </Row>
  );
};

export default index;

import React from "react";
import { Row, Col } from "antd";
import { useHistory } from "react-router";

import style from "./Footer.module.css";
const Footer = () => {
  const history = useHistory();
  const handleLogo = () => {
    history.push("/");
  };
  const handleClick = (name) => {
    console.log("handleClick", name);
    if (name === "blog") {
      history.push("/blogs");
    } else if (name === "project") {
      history.push("/projects");
    } else if (name === "about") {
      history.push("/about");
    } else if (name === "estimator") {
      history.push("/estimator");
    }
  };
  return (
    <div className={style.footer}>
      <Row
        style={{
          width: "80%",
          margin: "auto",
          paddingTop: "30px",
          paddingBottom: "30px",
        }}
        justify="space-between"
        gutter={[30, 60]}
      >
        <Col span={24} sm={24} md={24} lg={8}>
          <div onClick={() => handleLogo()} className={style.logod}>
            <img alt="logo" src="/assets/logo.svg" />
            <img alt="konnbot" src="/assets/konnbot.svg" />
          </div>
          <div className={style.text1}>
            We are a tech based construction managment Consultancy
          </div>
          <div className={style.footerIcons}>
            <div>
              <img src="/assets/facebook.png" alt="footer" />{" "}
            </div>
            <div>
              <img src="/assets/instagram.png" alt="footer" />
            </div>
            <div>
              <img src="/assets/linkedin.png" alt="footer" />
            </div>
          </div>
          <div className={style.text2}>
            Address : Office No. 306, 3rd Floor, Opp. Raymond Showroom, Zone -
            2, M.P. Nagar, Bhopal, Madhya Pradesh
            <br />
            <br />
            Contact No. +91 9887622649
          </div>
        </Col>
        <Col span={24} sm={24} md={24} lg={14}>
          <Row justify="center" gutter={[60, 90]}>
            <Col span={12}>
              <div className={style.text3}>Estimator</div>
              <div
                onClick={() => handleClick("estimator")}
                className={style.text4}
              >
                Informative Blogs
              </div>
              <div
                onClick={() => handleClick("estimator")}
                className={style.text4}
              >
                Cost Estimator
              </div>
              <div
                onClick={() => handleClick("estimator")}
                className={style.text4}
              >
                Book Consultation
              </div>
            </Col>
            <Col span={12}>
              <div className={style.text3}>Projects</div>
              <div
                onClick={() => handleClick("project")}
                className={style.text4}
              >
                Completed
              </div>
              <div
                onClick={() => handleClick("project")}
                className={style.text4}
              >
                Ongoing Project
              </div>
              <div
                onClick={() => handleClick("estimator")}
                className={style.text4}
              >
                Upcoming
              </div>
            </Col>
            <Col span={12}>
              <div className={style.text3}>Blogs</div>
              <div onClick={() => handleClick("blog")} className={style.text4}>
                Architecture
              </div>
              <div onClick={() => handleClick("blog")} className={style.text4}>
                Interior
              </div>
              <div onClick={() => handleClick("blog")} className={style.text4}>
                Construction
              </div>
              <div onClick={() => handleClick("blog")} className={style.text4}>
                Industry
              </div>
            </Col>
            <Col span={12}>
              <div onClick={() => handleClick("about")} className={style.text3}>
                About
              </div>
              <div onClick={() => handleClick("about")} className={style.text4}>
                Who are we ?
              </div>
              <div onClick={() => handleClick("about")} className={style.text4}>
                Our Team
              </div>
            </Col>
          </Row>
        </Col>
        <Col span={8}>
          <div className={style.text5}>
            Copyright © 2020-21 KONNBOT Private Limited.All rights reserved.
          </div>
        </Col>
        <Col span={14}>
          <div className={style.text5}>
            Privacy Policy | Terms and Conditions
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Footer;

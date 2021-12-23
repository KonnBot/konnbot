import React from "react";
import style from "./Home.module.css";
import { Row, Col, Button } from "antd";
import { useHistory } from "react-router";
import { ArrowRightOutlined } from "@ant-design/icons";
import HomeCarousel from "./HomeCarousel";
import BlogCard from "../Cards/BlogCard";
import SayAboutCard from "../Cards/SayAboutCard";
import ReferFriend from "./ReferFriend";
import ProjectCard from "../Cards/ProjectCard";
import OffersCard from "../Cards/OffersCard";
const Home = () => {
  const history = useHistory();

  const handleClick = () => {
    history.push("/estimator");
  };
  const Knowmore = () => {
    history.push("/know-more");
  };
  return (
    <div>
      <div className={style.HomeImageMain}>
        <img
          className={style.HomeImage}
          alt="home"
          src="/assets/HomePage01.png"
        />
        <div className={style.HomeImageMainText}>
          <div className={style.HomeImageText}>
            <div className={style.HomeImageText1}>
              A single platform for all your construction needs.
            </div>
          </div>
          <div className={style.HomeImageButton}>
            <Button
              style={{
                height: "fit-content",
                background: "#FFFFFF",
                border: "none",
              }}
              type="primary"
              size="large"
              shape="round"
              onClick={() => handleClick()}
            >
              <div className={style.HomeImageButtonText}>
                <span>Let’s get started</span>
                <ArrowRightOutlined className={style.HomeImageButtonIcon} />
              </div>
            </Button>
          </div>
        </div>
      </div>
      <div>
        <Row justify="center" gutter={[0, 60]}>
          <Col span={24}>
            <div className={style.container0}>
              <Row
                justify="center"
                style={{ padding: "64px 0px 64px 0px" }}
                gutter={[0, 60]}
              >
                <Col
                  span={18}
                  md={18}
                  lg={9}
                  style={{ alignItems: "center", display: "flex" }}
                >
                  <div>
                    <div className={style.homeTitleC}>
                      How are we tech based
                    </div>
                    <div className={style.homeTitleC1}>
                      Project Management Consultancy
                    </div>
                    <div className={style.homeTitleC2}>
                      We give tech based solutions like estimate, Project
                      schedule, Project management which are correct and
                      accurate based on codes.
                    </div>
                  </div>
                </Col>
                <Col span={18} md={12} lg={9}>
                  <img
                    style={{ width: "95%" }}
                    alt="home"
                    src="/assets/22_HomePage.png"
                  />
                </Col>
              </Row>
            </div>
          </Col>
          <Col span={18}>
            <div style={{ width: "min-content", minWidth: "70%" }}>
              <div className={style.homeTitle}>
                We can <span className={style.homeTitle1}> offer you</span>
                <span className={style.titleImg}>
                  <img alt="title" src="/assets/Title.png" />
                </span>
              </div>
            </div>

            <Row justify="center" gutter={[48, 48]}>
              <Col span={24} sm={12} md={12} lg={8}>
                <OffersCard
                  src="/assets/feature01.png"
                  title="Architectural Design"
                />
              </Col>
              <Col span={24} sm={12} md={12} lg={8}>
                <OffersCard
                  src="/assets/feature02.png"
                  title="Building Construction"
                />
              </Col>
              <Col span={24} sm={12} md={12} lg={8}>
                <OffersCard
                  src="/assets/feature03.png"
                  title="Quality Control"
                />
              </Col>
              <Col span={24} sm={12} md={12} lg={8}>
                <OffersCard
                  src="/assets/feature04.png"
                  title="Interior Design"
                />
              </Col>
              <Col span={24} sm={12} md={12} lg={8}>
                <OffersCard
                  src="/assets/feature05.png"
                  title={
                    <>
                      Renovation & <br /> Documentation
                    </>
                  }
                />
              </Col>
              <Col span={24} sm={12} md={12} lg={8}>
                <OffersCard
                  src="/assets/feature06.png"
                  title="Space Arrangements"
                />
              </Col>
            </Row>
          </Col>
          <Col span={18} style={{ textAlign: "center" }}>
            <div className={style.homeTitleC5}>
              Whatever you think comes under building construction we are here
              to help you
            </div>
            <div>
              <Button
                onClick={() => Knowmore()}
                style={{
                  height: "50px",
                  backgroundColor: "#FFFFFF",
                  boxShadow: "4px 4px 4px rgba(27, 117, 188, 0.2)",
                  borderRadius: "8px",
                  border: "none",
                }}
                type="primary"
                size="large"
                shape="round"
              >
                <div
                  style={{
                    width: "8rem",
                    color: "#FFC000",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <span style={{ fontSize: "18px" }}>Know More</span>
                  <ArrowRightOutlined />
                </div>
              </Button>
            </div>
          </Col>
          <Col span={24}>
            <Row
              justify="center"
              style={{
                background: "rgba(225, 244, 243, 0.2)",
                padding: "64px 0px",
              }}
            >
              <Col span={24} sm={24} md={18} lg={18}>
                <div className={style.homeTitle}>
                  How does konn
                  <span className={style.homeTitle1}>bot Works?</span>
                  <span className={style.titleImg}>
                    <img alt="title" src="/assets/Title.png" />
                  </span>
                </div>
              </Col>
              <Col span={24}>
                <HomeCarousel />
              </Col>
            </Row>
          </Col>
          <Col
            span={24}
            style={{ backgroundColor: "#C7C7C7", marginTop: "-64px" }}
          >
            <Row
              justify="center"
              gutter={[0, 30]}
              style={{ padding: "64px 0px" }}
            >
              <Col span={18}>
                <div className={style.homeTitleC6}>
                  Why should you meet us{" "}
                  <span className={style.homeTitleC7}>(bots)</span>
                </div>
              </Col>
              <Col span={20}>
                <Row justify="center" type="flex" gutter={[-80, 60]}>
                  <Col span={12} sm={8} md={6} lg={4}>
                    <div className={style.HomeBotstext}>
                      <img alt="home" src="/assets/23_HomePage.png" />
                      <div className={style.HomeBotstext1}>Hassel Free</div>
                    </div>
                  </Col>
                  <Col span={12} sm={8} md={6} lg={4}>
                    <div className={style.HomeBotstext}>
                      <img alt="home" src="/assets/24_HomePage.png" />
                      <div className={style.HomeBotstext1}>
                        15 Years Warranty
                      </div>
                    </div>
                  </Col>
                  <Col span={12} sm={8} md={6} lg={4}>
                    <div className={style.HomeBotstext}>
                      <img alt="home" src="/assets/25_HomePage.png" />
                      <div className={style.HomeBotstext1}>Contract Based</div>
                    </div>
                  </Col>
                  <Col span={12} sm={8} md={6} lg={4}>
                    <div className={style.HomeBotstext}>
                      <img alt="home" src="/assets/26_HomePage.png" />
                      <div className={style.HomeBotstext1}>On Time</div>
                    </div>
                  </Col>
                  <Col span={12} sm={8} md={6} lg={4}>
                    <div className={style.HomeBotstext}>
                      <img alt="home" src="/assets/27_HomePage.png" />
                      <div className={style.HomeBotstext1}>Dynamic Budget</div>
                    </div>
                  </Col>
                  <Col span={0} sm={0} md={0} lg={2}></Col>
                  <Col span={12} sm={8} md={6} lg={4}>
                    <div className={style.HomeBotstext}>
                      <img alt="home" src="/assets/28_HomePage.png" />
                      <div className={style.HomeBotstext1}>84+ Contractors</div>
                    </div>
                  </Col>
                  <Col span={12} sm={8} md={6} lg={4}>
                    <div className={style.HomeBotstext}>
                      <img alt="home" src="/assets/29_HomePage.png" />
                      <div className={style.HomeBotstext1}>
                        Budget in 15 Mins
                      </div>
                    </div>
                  </Col>
                  <Col span={12} sm={8} md={6} lg={4}>
                    <div className={style.HomeBotstext}>
                      <img alt="home" src="/assets/30_HomePage.png" />
                      <div className={style.HomeBotstext1}>Escrow Model</div>
                    </div>
                  </Col>
                  <Col span={12} sm={8} md={6} lg={4}>
                    <div className={style.HomeBotstext}>
                      <img alt="home" src="/assets/31_HomePage.png" />
                      <div className={style.HomeBotstext1}>
                        Design Experience
                      </div>
                    </div>
                  </Col>
                  <Col span={12} sm={8} md={6} lg={4}>
                    <div className={style.HomeBotstext}>
                      <img alt="home" src="/assets/32_HomePage.png" />
                      <div className={style.HomeBotstext1}>Budget Friendly</div>
                    </div>
                  </Col>
                  <Col span={0} sm={0} md={0} lg={2}></Col>
                </Row>
              </Col>
            </Row>
          </Col>
          <Col span={24} style={{ marginTop: "-62px " }}>
            <Row
              justify="center"
              style={{
                background: "#FFF8E8",
                padding: "64px 0px",
              }}
            >
              <Col span={18}>
                <div className={style.homeTitle}>
                  Why cost in <br /> round off
                </div>
                <div className={style.homeTitleC2}>
                  If your budget of your home is 1,237 INR/sqft,
                  <br />
                  then why it is given to you in round of 1,250 INR/sqft.
                  <br />
                  Why it is not through the detailed estimate.
                  <br />
                  <br />
                  When you go to the shop for 2,431 INR you <br /> ask all the
                  prices you get, why not in construction?
                </div>
                <div className={style.homeTitleC8}>Think Once</div>
              </Col>
            </Row>
          </Col>
          <Col span={18}>
            <div className={style.homeTitle}>
              Our
              <span className={style.homeTitle1}> Projects</span>
              <span className={style.titleImg}>
                <img alt="title" src="/assets/Title.png" />
              </span>
            </div>

            <Row justify="center" gutter={[48, 48]}>
              <Col span={24} sm={12} md={8} lg={6}>
                <ProjectCard
                  id={1}
                  src="/assets/12project.png"
                  name="Mr. Rajesh Yadav"
                  add="Pardesipura,Indore"
                  area="3152 Sqft"
                  floor="G + 2"
                  cost="54.5 Lakh"
                />
              </Col>
              <Col span={24} sm={12} md={8} lg={6}>
                <ProjectCard
                  id={4}
                  src="/assets/Aashu.png"
                  name="Mr. Rajesh Sahu"
                  add="Lalghati,Bhopal"
                  area="3794 Sqft"
                  floor="G + 2"
                  cost="54.28 Lakh"
                />
              </Col>
              <Col span={24} sm={12} md={8} lg={6}>
                <ProjectCard
                  id={10}
                  src="/assets/10project.png"
                  name="Mr Akshat kanasal"
                  add="Bhawarkua,Indore"
                  area="2505 Sqft"
                  floor="G+1"
                  cost="48.6 Lakh"
                />
              </Col>
              <Col span={24} sm={12} md={8} lg={6}>
                <ProjectCard
                  id={5}
                  src="/assets/14project.png"
                  name="Mr. Wadhvani Residence"
                  add="Bengali Square,Indore"
                  area="1750 Sqft"
                  floor="G + 1"
                  cost="28.9 Lakh"
                />
              </Col>
            </Row>
          </Col>
          <Col
            span={24}
            style={{
              backgroundColor: "#e8f5ff",
            }}
          >
            <Row justify="center">
              <Col span={18}>
                <ReferFriend />
              </Col>
            </Row>
          </Col>
          <Col span={18}>
            <div className={style.homeTitle}>
              Our
              <span className={style.homeTitle1}> Blogs</span>
              <span className={style.titleImg}>
                <img alt="title" src="/assets/Title.png" />
              </span>
            </div>

            <Row justify="space-between" gutter={[30, 0]}>
              <Col span={8} xs={24} sm={24} md={12} lg={8}>
                <BlogCard
                  id={1}
                  src="/assets/16_HomePage.png"
                  text="White Space Creating Ambiance with minimal Boxing & Louvers"
                  desc="Technology integrated Construction, Help us to provide you various facilities in single platform Technology integrated Construction, Help us to provide you various facilities in"
                  seen="108"
                  like="84"
                  time="1 Week"
                />
              </Col>
              <Col span={8} xs={24} sm={24} md={12} lg={8}>
                <BlogCard
                  id={3}
                  src="/assets/Carpet.jpg"
                  text="Carpet area,Built up area and Super built up Area"
                  desc="Carpet area is the distance between inner walls of your home. Carpet area is the actual usable area inside your home. Carpet area is around 75-80% of total built up area"
                  seen="108"
                  like="84"
                  time="1 Week"
                />
              </Col>
              <Col span={8} xs={24} sm={24} md={12} lg={8}>
                <BlogCard
                  id={2}
                  src="/assets/FAR.jpg"
                  text="Floor Area Ratio and Floor Space Index"
                  desc="Floor area ratio is the ratio of a building's total floor area to the size of land upon which it is built. Every city has a limited space so FAR is used as regulations in building planning along with the building-to-land ratio"
                  seen="80"
                  like="54"
                  time="1 Week"
                />
              </Col>
            </Row>
          </Col>
          <Col span={24}>
            <div className={style.container8}>
              <Row justify="center">
                <Col span={18}>
                  <div
                    style={{ padding: "20px", paddingLeft: "0px" }}
                    className={style.homeTitle}
                  >
                    What
                    <span className={style.homeTitle1}>
                      {" "}
                      people say about us
                    </span>
                  </div>
                </Col>
                <Col span={18}>
                  <Row
                    justify="center"
                    gutter={[48, 100]}
                    style={{ paddingTop: "52px" }}
                  >
                    <Col span={24} sm={12} md={12} lg={12} xl={6}>
                      <SayAboutCard
                        src="/assets/19_HomePage.png"
                        name="Mr. Prashant Tripathi"
                        proff="Client"
                        text="Konnbot has delivered what they had promised. Thank you for being there for us. I would recommend them to everyone"
                      />
                    </Col>
                    <Col span={24} sm={12} md={12} lg={12} xl={6}>
                      <SayAboutCard
                        src="/assets/20_HomePage.png"
                        name="Mr. Vivek Singh"
                        proff="Client"
                        text="They were very enthusiastic from day one. In terms of transparency and quality. It’s a complete team for your project from designing to handing over."
                      />
                    </Col>
                    <Col span={24} sm={12} md={12} lg={12} xl={6}>
                      <SayAboutCard
                        src="/assets/21.png"
                        name="Mr. Asfaque Khan"
                        proff="Contractor"
                        text="They were absolutely great! They met their project dates and were so organised throughout the project. Looking to work with them in the future."
                      />
                    </Col>
                    <Col span={24} sm={12} md={12} lg={12} xl={6}>
                      <SayAboutCard
                        src="/assets/20.png"
                        name="Mr. Anshul Sahu"
                        proff="Client"
                        text="Konnbot is one of the most incredible working team we've worked with. The whole group tactfully delivered a project of exceptional quality while staying on schedule and under budget"
                      />
                    </Col>
                    <Col span={24}></Col>
                  </Row>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Home;

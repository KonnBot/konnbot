import React, { useState, useEffect } from "react";
import { Row, Col } from "antd";
import style from "./Project.module.css";
import FeatureCards from "../Cards/FeatureCards";
import ImageGallery from "./ImageGallery";
import AboutContractor from "./AboutContractor";
import ProjectCard from "../Cards/ProjectCard";
import { useLocation } from "react-router-dom";
import { Projects } from "./Projects";

export default function Project() {
  const [projectData, setProjectData] = useState({});

  const location = useLocation();
  useEffect(() => {
    let check = location.pathname.split("/");
    setProjectData(Projects[check[2] - 1]);
  }, [location]);

  console.log(projectData);
  return (
    <Row justify="center" gutter={[0, 60]}>
      <Col span={18}>
        <img
          style={{ width: "100%" }}
          alt="project"
          src={projectData && projectData.url}
        />
      </Col>
      <Col span={18}>
        <div className={style.container1text1}>
          {projectData && projectData.name}
        </div>
        <FeatureCards
          sm="G + 1"
          rm="3,246"
          ce="47.32"
          pt="9.5"
          ba="4.5"
          text="text"
        />
      </Col>
      <Col span={18}>
        <div className={style.container2text1}>
          Contractor -{" "}
          <span className={style.container2text2}>
            {projectData && projectData.contractorName}
          </span>
        </div>
        <div className={style.container2text3}>
          {projectData && projectData.constructorData}
        </div>
      </Col>
      <Col span={18}>
        <div className={style.container1text1}>Photo Gallery</div>
        <ImageGallery />
      </Col>
      <Col span={18}>
        <AboutContractor
          name={projectData && projectData.name}
          about={projectData && projectData.about}
          url={projectData && projectData.videourl}
        />
      </Col>
      <Col span={18}>
        <div className={style.container1text1}>Similar Projects</div>
        <Row
          justify="center"
          gutter={[30, 30]}
          style={{ paddingBottom: "10px" }}
        >
          <Col span={6} xs={24} sm={12} md={8} lg={6}>
            <ProjectCard
              id="1"
              src="/assets/05project.png"
              name="Mr. Mahesh Sahu"
              add="Lalghati, Bhopal"
              area="3550 Sqft"
              floor="G + 2"
              cost="57.6 Lakh"
            />
          </Col>
          <Col span={6} xs={24} sm={12} md={8} lg={6}>
            <ProjectCard
              id="2"
              src="/assets/07project.png"
              name="Grace Garden Housing"
              add="BHEL, Bhopal"
              area="1200 Sqft"
              floor="G"
              cost="32.8 Lakh"
            />
          </Col>
          <Col span={6} xs={24} sm={12} md={8} lg={6}>
            <ProjectCard
              id="3"
              src="/assets/04project.png"
              name="Mr & Mrs Sahu"
              add="Nayapura, Bhopal"
              area="1200 Sqft"
              floor="G"
              cost="32.8 Lakh"
            />
          </Col>
          <Col span={6} xs={24} sm={12} md={8} lg={6}>
            <ProjectCard
              id="4"
              src="/assets/09project.png"
              name="Mr. Geeta Residence"
              add="Lords Colony, Lalghati, Bhopal"
              area="35504 Sqft"
              floor="G + 2"
              cost="54.1 Lakh"
            />
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

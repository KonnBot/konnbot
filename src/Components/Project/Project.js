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
          sm={projectData && projectData.floor}
          rm={projectData && projectData.area}
          ce={projectData && projectData.cost}
          pt={projectData && projectData.months}
          ba={projectData && projectData.rating}
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
        <ImageGallery images={projectData && projectData.photoGallery} />
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
              id={1}
              src="/assets/12project.png"
              name="Mr. Rajesh Yadav"
              add="Pardesipura,Indore"
              area="3152 Sqft"
              floor="G + 2"
              cost="54.5 Lakh"
            />
          </Col>
          <Col span={6} xs={24} sm={12} md={8} lg={6}>
            <ProjectCard
              id={2}
              src="/assets/13project.png"
              name="Mr. Vinay Pingle Residence"
              add="Andanva,Prayagraj"
              area="3023 Sqft"
              floor="G+1"
              cost="52.3 Lakh"
            />
          </Col>
          <Col span={6} xs={24} sm={12} md={8} lg={6}>
            <ProjectCard
              id={3}
              src="/assets/priyansh5.png"
              name="Priyansh Joshi's House"
              add="Naini,Prayagraj"
              area="2854 Sqft"
              floor="G+1"
              cost="65.4 Lakh"
            />
          </Col>
          <Col span={6} xs={24} sm={12} md={8} lg={6}>
            <ProjectCard
              id={4}
              src="/assets/Aashu.png"
              name="Mr. Rajesh Sahu"
              add="Lalghati, Bhopal"
              area="3794 Sqft"
              floor="G + 2"
              cost="54.28 Lakh"
            />
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

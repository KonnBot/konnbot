import React from "react";
import { Row, Col } from "antd";
import style from "./Project.module.css";
import FeatureCards from "../Cards/FeatureCards";
import ImageGallery from "./ImageGallery";
import AboutContractor from "./AboutContractor";
import ProjectCard from "../Cards/ProjectCard";
export default function index() {
  return (
    <Row justify="center" gutter={[0, 60]}>
      <Col span={18}>
        <img
          style={{ width: "100%" }}
          alt="project"
          src="/assets/01_Project.png"
        />
      </Col>
      <Col span={18}>
        <div className={style.container1text1}>Mr. Rupesh Deshpande</div>
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
          <span className={style.container2text2}>L&R Construction</span>
        </div>
        <div className={style.container2text3}>
          In the case of the Mauryan capital Pataliputra (near Patna), we have
          Greek accounts, and that of Faxian; Megasthenes (a visitor around 300
          BCE) mentions 564 towers and 64 gates in the city walls. Modern
          excavations have uncovered a "massive palisade of teak beams held
          together with iron dowels".[7] A huge apadana-like hall with eighty
          sandstone columns shows clear influence from contemporary Achaemenid
          Persia.[8] The single massive sandstone Pataliputra capital shows
          clear Hellenistic features, reaching India via Persia.[9] The famous
          Ashoka columns show great sophistication, and a variety of influences
          in their details. In both these cases a now-vanished Indian
          predecessor tradition in wood is likely.[10]
        </div>
      </Col>
      <Col span={18}>
        <div className={style.container1text1}>Photo Gallery</div>
        <ImageGallery />
      </Col>
      <Col span={18}>
        <AboutContractor />
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
              id="17"
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
              id="18"
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
              id="19"
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
              id="20"
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

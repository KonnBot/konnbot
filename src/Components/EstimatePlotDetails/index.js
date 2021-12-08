import React, { useEffect, useState } from "react";
import { Row, Col } from "antd";
import style from "./EstimatePlotDetails.module.css";
import Calc from "../Forms/Calc";
import ContactUs from "../Forms/ContactUs";
import PackageCard from "../Cards/PackageCard";
import CustomizePackage from "../CustomizePackage/Custom";
import ComparePackage from "../ComparePackage";
const EstimatorPlotDetails = ({ calcData, setCalcData }) => {
  const [plotDetails, setPlotDetails] = useState({});
  const [finalCustomizeCost, setFinalCustomizeCost] = useState({
    basic: {
      civilWork: "",
      flooring: "",
      doorWindows: "",
      finishes: "",
      sanitryPlumbing: "",
      electricalWork: "",
      elevation: "",
    },
    standard: {
      civilWork: "",
      flooring: "",
      doorWindows: "",
      finishes: "",
      sanitryPlumbing: "",
      electricalWork: "",
      elevation: "",
    },
    classic: {
      civilWork: "",
      flooring: "",
      doorWindows: "",
      finishes: "",
      sanitryPlumbing: "",
      electricalWork: "",
      elevation: "",
    },
    supreme: {
      civilWork: "",
      flooring: "",
      doorWindows: "",
      finishes: "",
      sanitryPlumbing: "",
      electricalWork: "",
      elevation: "",
    },
    premium: {
      civilWork: "",
      flooring: "",
      doorWindows: "",
      finishes: "",
      sanitryPlumbing: "",
      electricalWork: "",
      elevation: "",
    },
    platinum: {
      civilWork: "",
      flooring: "",
      doorWindows: "",
      finishes: "",
      sanitryPlumbing: "",
      electricalWork: "",
      elevation: "",
    },
  });
  useEffect(() => {
    var persistData = JSON.parse(localStorage.getItem("calcData"));
    console.log("calcData1", calcData);
    const { plotFrontage, noOfCar, plotArea } = persistData;
    const openAreaGroundFloor =
      3 * 3.28 * plotFrontage +
      ((3 * 3.28) / 2) * (plotFrontage / 2) +
      (15 - 3.28 * 3) * (plotFrontage / 2) * noOfCar;
    const builtAreagroundFloor = plotArea - openAreaGroundFloor;

    const B12 = 1;
    const openAreaOtherFloor =
      B12 * (3.5 * plotFrontage + (plotFrontage / 3) * ((3 * 3.28) / 2)) * 2;
    const builtAreaOtherFloor = builtAreagroundFloor - openAreaOtherFloor / 3;

    const totalOpenArea = openAreaGroundFloor + openAreaOtherFloor;
    const totalBuiltArea = builtAreagroundFloor + builtAreaOtherFloor;

    let OAcP1,
      OAcP2,
      OAcP3,
      OAcP4,
      OAcP5,
      OAcP6,
      OArP1,
      OArP2,
      OArP3,
      OArP4,
      OArP5,
      OArP6,
      BAcP1,
      BAcP2,
      BAcP3,
      BAcP4,
      BAcP5,
      BAcP6,
      BArP1,
      BArP2,
      BArP3,
      BArP4,
      BArP5,
      BArP6;
    let TOAcP1, TOAcP2, TOAcP3, TOAcP4, TOAcP5, TOAcP6;
    let SBrP1, SBrP2, SBrP3, SBrP4, SBrP5, SBrP6;

    let TotalArea = totalBuiltArea + totalOpenArea;

    OArP1 = 863;
    BArP1 = 1523;
    OAcP1 = totalOpenArea * OArP1;
    BAcP1 = totalBuiltArea * BArP1;
    TOAcP1 = OAcP1 + BAcP1;
    SBrP1 = TOAcP1 / TotalArea;

    OArP2 = 906.15;
    BArP2 = 1637.23;
    OAcP2 = totalOpenArea * OArP2;
    BAcP2 = totalBuiltArea * BArP2;
    TOAcP2 = OAcP2 + BAcP2;
    SBrP2 = TOAcP2 / TotalArea;

    OArP3 = 951.46;
    BArP3 = 1784.58;
    OAcP3 = totalOpenArea * OArP3;
    BAcP3 = totalBuiltArea * BArP3;
    TOAcP3 = OAcP3 + BAcP3;
    SBrP3 = TOAcP3 / TotalArea;

    OArP4 = 999.03;
    BArP4 = 1927.34;
    OAcP4 = totalOpenArea * OArP4;
    BAcP4 = totalBuiltArea * BArP4;
    TOAcP4 = OAcP4 + BAcP4;
    SBrP4 = TOAcP4 / TotalArea;

    OArP5 = 1048.98;
    BArP5 = 2062.26;
    OAcP5 = totalOpenArea * OArP5;
    BAcP5 = totalBuiltArea * BArP5;
    TOAcP5 = OAcP5 + BAcP5;
    SBrP5 = TOAcP5 / TotalArea;

    OArP6 = 1101.43;
    BArP6 = 2185.99;
    OAcP6 = totalOpenArea * OArP6;
    BAcP6 = totalBuiltArea * BArP6;
    TOAcP6 = OAcP6 + BAcP6;
    SBrP6 = TOAcP6 / TotalArea;

    const payload = {
      totalOpenArea: totalOpenArea.toFixed(2),
      totalBuiltArea: totalBuiltArea.toFixed(2),
      superArea: TotalArea.toFixed(2),
      package1: {
        superRate: SBrP1.toFixed(2),
        openRate: OArP1.toFixed(2),
        builtRate: BArP1.toFixed(2),
        totalCost: TOAcP1.toFixed(2)
          .toString()
          .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ","),
      },
      package2: {
        superRate: SBrP2.toFixed(2),
        openRate: OArP2.toFixed(2),
        builtRate: BArP2.toFixed(2),
        openCost: OAcP2.toFixed(2)
          .toString()
          .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ","),
        totalCost: TOAcP2.toFixed(2)
          .toString()
          .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ","),
      },
      package3: {
        superRate: SBrP3.toFixed(2),
        openRate: OArP3.toFixed(2),
        builtRate: BArP3.toFixed(2),
        totalCost: TOAcP3.toFixed(2)
          .toString()
          .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ","),
      },
      package4: {
        superRate: SBrP4.toFixed(2),
        openRate: OArP4.toFixed(2),
        builtRate: BArP4.toFixed(2),
        totalCost: TOAcP4.toFixed(2)
          .toString()
          .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ","),
      },
      package5: {
        superRate: SBrP5.toFixed(2),
        openRate: OArP5.toFixed(2),
        builtRate: BArP5.toFixed(2),
        totalCost: TOAcP5.toFixed(2)
          .toString()
          .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ","),
      },
      package6: {
        superRate: SBrP6.toFixed(2),
        openRate: OArP6.toFixed(2),
        builtRate: BArP6.toFixed(2),
        totalCost: TOAcP6.toFixed(2)
          .toString()
          .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ","),
      },
    };
    console.log("payload", payload);

    const customizePayload = {
      civilWork: TOAcP1 * (62.5 / 100),
      flooring: TOAcP1 * (12.25 / 100),
      doorWindows: TOAcP1 * (5.0 / 100),
      finishes: TOAcP1 * (5.25 / 100),
      sanitryPlumbing: TOAcP1 * (8.5 / 100),
      electricalWork: TOAcP1 * (5.5 / 100),
      elevation: TOAcP1 * (1.0 / 100),
    };

    setFinalCustomizeCost({
      basic: customizePayload,
      standard: {
        civilWork: customizePayload.civilWork * 1.072167,
        flooring: customizePayload.flooring * 1.072167,
        doorWindows: customizePayload.doorWindows * 1.072167,
        finishes: customizePayload.finishes * 1.072167,
        sanitryPlumbing: customizePayload.sanitryPlumbing * 1.072167,
        electricalWork: customizePayload.electricalWork * 1.072167,
        elevation: customizePayload.elevation * 1.072167,
      },
      classic: {
        civilWork: customizePayload.civilWork * 1.163903,
        flooring: customizePayload.flooring * 1.163903,
        doorWindows: customizePayload.doorWindows * 1.163903,
        finishes: customizePayload.finishes * 1.163903,
        sanitryPlumbing: customizePayload.sanitryPlumbing * 1.163903,
        electricalWork: customizePayload.electricalWork * 1.163903,
        elevation: customizePayload.elevation * 1.163903,
      },
      supreme: {
        civilWork: customizePayload.civilWork * 1.253267,
        flooring: customizePayload.flooring * 1.253267,
        doorWindows: customizePayload.doorWindows * 1.253267,
        finishes: customizePayload.finishes * 1.253267,
        sanitryPlumbing: customizePayload.sanitryPlumbing * 1.253267,
        electricalWork: customizePayload.electricalWork * 1.253267,
        elevation: customizePayload.elevation * 1.253267,
      },
      premium: {
        civilWork: customizePayload.civilWork * 1.338372,
        flooring: customizePayload.flooring * 1.338372,
        doorWindows: customizePayload.doorWindows * 1.338372,
        finishes: customizePayload.finishes * 1.338372,
        sanitryPlumbing: customizePayload.sanitryPlumbing * 1.338372,
        electricalWork: customizePayload.electricalWork * 1.338372,
        elevation: customizePayload.elevation * 1.338372,
      },
      platinum: {
        civilWork: customizePayload.civilWork * 1.417297,
        flooring: customizePayload.flooring * 1.417297,
        doorWindows: customizePayload.doorWindows * 1.417297,
        finishes: customizePayload.finishes * 1.417297,
        sanitryPlumbing: customizePayload.sanitryPlumbing * 1.417297,
        electricalWork: customizePayload.electricalWork * 1.417297,
        elevation: customizePayload.elevation * 1.417297,
      },
    });
    setPlotDetails(payload);
  }, [calcData, setFinalCustomizeCost]);

  console.log("final", finalCustomizeCost);
  return (
    <Row justify="center" gutter={[0, 60]}>
      <Col span={9}>
        <div className={style.container}>
          <div className={style.text1}>Area Statement</div>
          <div className={style.container1}>
            <div className={style.text2}>
              <span>Super Builtup Area -</span>
              <span className={style.text3}>
                {plotDetails && plotDetails.superArea} sqft
              </span>
            </div>
            <div className={style.text2}>
              <span>Total Builtup Area -</span>
              <span className={style.text3}>
                {" "}
                {plotDetails && plotDetails.totalBuiltArea} sqft
              </span>
            </div>
            <div className={style.text2}>
              <span>Total Open Area Cost -</span>
              <span className={style.text3}>
                {plotDetails &&
                  plotDetails.package2 &&
                  plotDetails.package2.openCost}{" "}
                ₹
              </span>
            </div>
          </div>
        </div>
      </Col>
      <Col span={9}>
        <img alt="plot detail" src="/assets/plotDetail01.png" />
      </Col>
      <Col span={18}>
        <div className={style.text4}>
          Your Plot
          <span className={style.text5}> Details</span>
          <span className={style.titleImg}>
            <img alt="title" src="/assets/Title.png" />
          </span>
        </div>
        <div className={style.text6}>
          Calculate your project cost in a few easy steps.
        </div>
        <div style={{ marginTop: "16px" }}>
          <Calc calcData={calcData} disabled={true} />
        </div>
      </Col>

      <Col span={18}>
        <div className={style.text4}>
          Packages
          <span className={style.titleImg}>
            <img alt="title" src="/assets/Title.png" />
          </span>
        </div>
        <div className={style.text6}>
          Pick the package that suits your need. Consult us for further details.
        </div>
        <Row className={style.container2} justify="center" gutter={[30, 30]}>
          <Col span={24} sm={12} md={12} lg={8}>
            <PackageCard
              title="Basic Package"
              superArea={plotDetails && plotDetails.superArea}
              builtArea={plotDetails && plotDetails.totalBuiltArea}
              openArea={plotDetails && plotDetails.totalOpenArea}
              superAreaRate={
                plotDetails &&
                plotDetails.package1 &&
                plotDetails.package1.superRate
              }
              builtAreaRate={
                plotDetails &&
                plotDetails.package1 &&
                plotDetails.package1.builtRate
              }
              openAreaRate={
                plotDetails &&
                plotDetails.package1 &&
                plotDetails.package1.openRate
              }
              totalCost={
                plotDetails &&
                plotDetails.package1 &&
                plotDetails.package1.totalCost
              }
            />
          </Col>
          <Col span={24} sm={12} md={12} lg={8}>
            <PackageCard
              title="Standard Package"
              superArea={plotDetails && plotDetails.superArea}
              builtArea={plotDetails && plotDetails.totalBuiltArea}
              openArea={plotDetails && plotDetails.totalOpenArea}
              superAreaRate={
                plotDetails &&
                plotDetails.package2 &&
                plotDetails.package2.superRate
              }
              builtAreaRate={
                plotDetails &&
                plotDetails.package2 &&
                plotDetails.package2.builtRate
              }
              openAreaRate={
                plotDetails &&
                plotDetails.package2 &&
                plotDetails.package2.openRate
              }
              totalCost={
                plotDetails &&
                plotDetails.package2 &&
                plotDetails.package2.totalCost
              }
            />
          </Col>
          <Col span={24} sm={12} md={12} lg={8}>
            <PackageCard
              title="Classic Package"
              superArea={plotDetails && plotDetails.superArea}
              builtArea={plotDetails && plotDetails.totalBuiltArea}
              openArea={plotDetails && plotDetails.totalOpenArea}
              superAreaRate={
                plotDetails &&
                plotDetails.package3 &&
                plotDetails.package3.superRate
              }
              builtAreaRate={
                plotDetails &&
                plotDetails.package3 &&
                plotDetails.package3.builtRate
              }
              openAreaRate={
                plotDetails &&
                plotDetails.package3 &&
                plotDetails.package3.openRate
              }
              totalCost={
                plotDetails &&
                plotDetails.package3 &&
                plotDetails.package3.totalCost
              }
            />
          </Col>
          <Col span={24} sm={12} md={12} lg={8}>
            <PackageCard
              title="Premium Package"
              superArea={plotDetails && plotDetails.superArea}
              builtArea={plotDetails && plotDetails.totalBuiltArea}
              openArea={plotDetails && plotDetails.totalOpenArea}
              superAreaRate={
                plotDetails &&
                plotDetails.package4 &&
                plotDetails.package4.superRate
              }
              builtAreaRate={
                plotDetails &&
                plotDetails.package4 &&
                plotDetails.package4.builtRate
              }
              openAreaRate={
                plotDetails &&
                plotDetails.package4 &&
                plotDetails.package4.openRate
              }
              totalCost={
                plotDetails &&
                plotDetails.package4 &&
                plotDetails.package4.totalCost
              }
            />
          </Col>
          <Col span={24} sm={12} md={12} lg={8}>
            <PackageCard
              title="Luxurious Package"
              superArea={plotDetails && plotDetails.superArea}
              builtArea={plotDetails && plotDetails.totalBuiltArea}
              openArea={plotDetails && plotDetails.totalOpenArea}
              superAreaRate={
                plotDetails &&
                plotDetails.package5 &&
                plotDetails.package5.superRate
              }
              builtAreaRate={
                plotDetails &&
                plotDetails.package5 &&
                plotDetails.package5.builtRate
              }
              openAreaRate={
                plotDetails &&
                plotDetails.package5 &&
                plotDetails.package5.openRate
              }
              totalCost={
                plotDetails &&
                plotDetails.package5 &&
                plotDetails.package5.totalCost
              }
            />
          </Col>
          <Col span={24} sm={12} md={12} lg={8}>
            <PackageCard
              title="Royal Package"
              superArea={plotDetails && plotDetails.superArea}
              builtArea={plotDetails && plotDetails.totalBuiltArea}
              openArea={plotDetails && plotDetails.totalOpenArea}
              superAreaRate={
                plotDetails &&
                plotDetails.package6 &&
                plotDetails.package6.superRate
              }
              builtAreaRate={
                plotDetails &&
                plotDetails.package6 &&
                plotDetails.package6.builtRate
              }
              openAreaRate={
                plotDetails &&
                plotDetails.package6 &&
                plotDetails.package6.openRate
              }
              totalCost={
                plotDetails &&
                plotDetails.package6 &&
                plotDetails.package6.totalCost
              }
            />
          </Col>
        </Row>
      </Col>
      <Col span={24} style={{ backgroundColor: "#FFF8E8" }}>
        <Row justify="center" style={{ padding: "64px 0px 64px 0px" }}>
          <Col span={18}>
            <div className={style.text4}>
              Create a<span className={style.text5}> Compare Packages</span>
              <span className={style.titleImg}>
                <img alt="title" src="/assets/Title.png" />
              </span>
            </div>
            <div className={style.text6}>
              Technology integrated Construction, Help us to provide you various
              facilities in single platform <br /> connects among Stakeholder &
              Client to built strong relation
            </div>
            <div style={{ marginTop: "16px" }}>
              <CustomizePackage finalCustomizeCost={finalCustomizeCost} />
            </div>
          </Col>
        </Row>
      </Col>
      <Col span={24}>
        <Row justify="center" style={{ padding: "0px 0px 64px 0px" }}>
          <Col span={18}>
            <div className={style.text4}>
              Compare Packages
              <span className={style.titleImg}>
                <img alt="title" src="/assets/Title.png" />
              </span>
            </div>
            <div style={{ marginTop: "16px" }}>
              <ComparePackage finalCustomizeCost={finalCustomizeCost} />
            </div>
          </Col>
        </Row>
      </Col>
      <Col span={18}>
        <div className={style.text4}>
          Book your
          <span className={style.text5}> free consultation </span>
          now
          <span className={style.titleImg}>
            <img alt="title" src="/assets/Title.png" />
          </span>
        </div>
        <div className={style.container3text2}>
          We are only one call away.
          <br />
          Our expert team of construction professionals is happy to help you in
          any way possible. Get in touch with us today!
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
  );
};

export default EstimatorPlotDetails;

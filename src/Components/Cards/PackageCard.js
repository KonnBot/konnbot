import React from "react";
import { Card } from "antd";
import style from "./Cards.module.css";

export default function PackageCard({
  title,
  superArea,
  builtArea,
  openArea,
  superAreaRate,
  builtAreaRate,
  openAreaRate,
  totalCost,
}) {
  return (
    <Card
      style={{ borderRadius: "16px" }}
      hoverable
      bordered={true}
      title={<div className={style.packageCardTitle}>{title}</div>}
      className="packageCard"
      actions={[
        <>
          <div className={style.packageCardtext3}>
            <span className={style.packageCardtext4}>
              Total Cost
              <div className={style.packageCardtext4Inner}>(Exclusive GST)</div>
            </span>
            <span className={style.packageCardtext5}>₹ {totalCost}</span>
          </div>
        </>,
      ]}
    >
      <div className={style.packageCardtext}>
        <div className={style.packageCardBorderB}>
          <div className={style.packageCardtext1}>
            <span>
              Super Builtup Area
              <div className={style.packageCardInner}>{superArea} sqft</div>
            </span>
            <span className={style.packageCardtext2}>
              <span className={style.packageCardRateS}>{superAreaRate}</span>
              <div className={style.packageCardInner1}>INR/Sqft</div>
            </span>
          </div>
        </div>
        <div className={style.packageCardBorderT}>
          <div className={style.packageCardtext1}>
            <span>
              Built Up Area
              <div className={style.packageCardInner}>{builtArea} sqft</div>
            </span>
            <span className={style.packageCardtext2}>
              <span className={style.packageCardRate}>{builtAreaRate}</span>
              <div className={style.packageCardInner1}>INR/Sqft</div>
            </span>
          </div>
        </div>
        <div className={style.packageCardBorderB}>
          <div className={style.packageCardtext1}>
            <span>
              Open Area
              <div className={style.packageCardInner}>{openArea} sqft</div>
            </span>
            <span className={style.packageCardtext2}>
              <span className={style.packageCardRate}>{openAreaRate}</span>

              <div className={style.packageCardInner1}>INR/Sqft</div>
            </span>
          </div>
        </div>
      </div>
    </Card>
  );
}

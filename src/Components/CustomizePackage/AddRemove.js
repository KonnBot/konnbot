import React from "react";
import style from "./CustomizePackage.module.css";
export default function AddRemove({ current, setCurrent }) {
  const handleClick = (e) => {
    if (e === "m" && current !== 1) {
      setCurrent(current - 1);
    } else if (e === "p" && current !== 6) {
      setCurrent(current + 1);
    }
  };
  return (
    <div className={style.slider}>
      <div style={{ cursor: "pointer" }} onClick={() => handleClick("m")}>
        <img alt="customize" src="/assets/CustomImage.png" />
        <img className={style.minus} alt="customize" src="/assets/minus.png" />
      </div>
      <div className={style.packageName}>
        {current === 1
          ? "BASIC PACKAGE"
          : current === 2
          ? "STANDARD PACKAGE"
          : current === 3
          ? "CLASSIC PACKAGE"
          : current === 4
          ? "SUPREME PACKAGE"
          : current === 5
          ? "PREMIUM PACKAGE"
          : current === 6
          ? "PLATINUM PACKAGE"
          : ""}
      </div>
      <div style={{ cursor: "pointer" }} onClick={() => handleClick("p")}>
        <img alt="customize" src="/assets/CustomImage.png" />
        <img className={style.plus} alt="customize" src="/assets/plus.png" />
      </div>
    </div>
  );
}

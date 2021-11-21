import React, { useState } from "react";
import style from "./CustomizePackage.module.css";
export default function AddRemove() {
  const [current, setCurrent] = useState(1);
  const handleClick = (e) => {
    console.log(e);
    if (e === "m" && current !== 1) {
      setCurrent(current - 1);
    } else if (e === "p" && current !== 6) {
      setCurrent(current + 1);
    }
  };
  console.log("sss", current);
  return (
    <div className={style.slider}>
      <div style={{ cursor: "pointer" }} onClick={() => handleClick("m")}>
        <img alt="customize" src="/assets/CustomImage.png" />
        <img className={style.minus} alt="customize" src="/assets/minus.png" />
      </div>
      <div>{current === 1 ? "BASIC PACKAGE" : ""}</div>
      <div style={{ cursor: "pointer" }} onClick={() => handleClick("p")}>
        <img alt="customize" src="/assets/CustomImage.png" />
        <img className={style.plus} alt="customize" src="/assets/plus.png" />
      </div>
    </div>
  );
}

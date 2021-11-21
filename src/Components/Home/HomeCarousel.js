import React from "react";
import { Steps } from "antd";
import style from "./Home.module.css";
const { Step } = Steps;

const steps = [
  {
    title: "Design",
    content: "First-content",
  },
  {
    title: "Planning & Budgeting",
    content: "Second-content",
  },
  {
    title: "Construction",
    content: "Last-content",
  },
  {
    title: "Quality Check",
    content: "Last-content",
  },
  {
    title: "Hand over",
    content: "Last-content",
  },
];

const HomeCarousel = () => {
  const [current, setCurrent] = React.useState(0);

  const next = () => {
    if (current !== 4) {
      setCurrent(current + 1);
    }
  };

  const prev = () => {
    if (current !== 0) {
      setCurrent(current - 1);
    }
  };

  return (
    <>
      <Steps
        className={style.homeSteps}
        style={{
          width: "60%",
          margin: "auto",
        }}
        size="large"
        labelPlacement="vertical"
        current={current}
      >
        {steps.map((item) => (
          <Step className="homeSteps" key={item.title} title={item.title} />
        ))}
      </Steps>
      {current >= 0 ? (
        <div className={style.carouselArrows}>
          <span style={{ float: "left" }}>
            <img
              style={{ cursor: "pointer" }}
              onClick={() => prev()}
              alt="arrow"
              src="/assets/homeLeft.png"
            />
          </span>
          <span style={{ float: "right" }}>
            <img
              style={{ cursor: "pointer" }}
              onClick={() => next()}
              alt="arrow"
              src="/assets/homeRight.png"
            />
          </span>
        </div>
      ) : (
        ""
      )}
      {current === 0 ? (
        <div className={style.carouselContent}>
          <div className={style.carouselImage}>
            <img
              className={style.carouselImage1}
              alt="Cimage"
              src="/assets/carouselimage1.png"
            />
          </div>

          <span className={style.carouselText}>
            The inhouse architect in collaboration with consultants develop a
            unique and efficient design
          </span>
        </div>
      ) : current === 1 ? (
        <div className={style.carouselContent}>
          <div className={style.carouselImage}>
            <img
              className={style.carouselImage1}
              alt="Cimage"
              src="/assets/carouselimage2.png"
            />
          </div>

          <span className={style.carouselText}>
            Project cost and timeline are finalised. Both are tracked in
            real-time via our mobile app.
          </span>
        </div>
      ) : current === 2 ? (
        <div className={style.carouselContent}>
          <div className={style.carouselImage}>
            <img
              className={style.carouselImage1}
              alt="Cimage"
              src="/assets/carouselimage3.png"
            />
          </div>

          <span className={style.carouselText}>
            Construction commences on site. Regular updates, bills, BOQs, etc,
            are uploaded on the mobile app.
          </span>
        </div>
      ) : current === 3 ? (
        <div className={style.carouselContent}>
          <div className={style.carouselImage}>
            <img
              className={style.carouselImage1}
              alt="Cimage"
              src="/assets/carouselimage4.png"
            />
          </div>

          <span className={style.carouselText}>
            Team KONNBOT tracks the project and ensures that quality is
            maintained.
          </span>
        </div>
      ) : current === 4 ? (
        <div className={style.carouselContent}>
          <div className={style.carouselImage}>
            <img
              className={style.carouselImage1}
              alt="Cimage"
              src="/assets/carouselimage5.png"
            />
          </div>

          <span className={style.carouselText}>
            Once you settle in your new home, enjoy a 15 year warranty with us.
          </span>
        </div>
      ) : (
        ""
      )}
      {/* <div className="steps-action">
        {current < steps.length - 1 && (
          <Button type="primary" onClick={() => next()}>
            Next
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button
            type="primary"
            onClick={() => message.success("Processing complete!")}
          >
            Done
          </Button>
        )}
        {current > 0 && (
          <Button style={{ margin: "0 8px" }} onClick={() => prev()}>
            Previous
          </Button>
        )}
      </div> */}
    </>
  );
};

export default HomeCarousel;

import React from "react";
// import Slider from "react-slick";
import { Carousel, Card } from "antd";
import style from "./Home.module.css";

const ChooseCarousel = () => {
  function SampleNextArrow(props) {
    const { style, onClick } = props;

    return (
      <div
        style={{
          ...style,
          display: "block",
          right: "-25px",
          position: "absolute",
          top: "50%",
          fontSize: "20px",
          transform: "translateY(-50%)",
        }}
        onClick={(e) => onClick()}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xlink="http://www.w3.org/1999/xlink"
          width="77"
          height="77"
          viewBox="0 0 77 77"
        >
          <defs>
            <filter
              id="Ellipse_20"
              x="0"
              y="0"
              width="77"
              height="77"
              filterUnits="userSpaceOnUse"
            >
              <feOffset dy="3" input="SourceAlpha" />
              <feGaussianBlur stdDeviation="6.5" result="blur" />
              <feFlood flood-opacity="0.161" />
              <feComposite operator="in" in2="blur" />
              <feComposite in="SourceGraphic" />
            </filter>
          </defs>
          <g
            id="Slider_Arrow"
            data-name="Slider Arrow"
            transform="translate(-298.5 -5465.5)"
          >
            <g
              transform="matrix(1, 0, 0, 1, 298.5, 5465.5)"
              filter="url(#Ellipse_20)"
            >
              <circle
                id="Ellipse_20-2"
                data-name="Ellipse 20"
                cx="19"
                cy="19"
                r="19"
                transform="translate(19.5 16.5)"
                fill="#fff"
              />
            </g>
            <path
              id="Polygon_18"
              data-name="Polygon 18"
              d="M8.64,1.448a1,1,0,0,1,1.72,0L18.1,14.489A1,1,0,0,1,17.243,16H1.757A1,1,0,0,1,.9,14.489Z"
              transform="translate(348 5491.506) rotate(90)"
              fill="gray"
            />
          </g>
        </svg>
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { style, onClick } = props;
    return (
      <div
        style={{
          ...style,
          display: "block",
          left: "-25px",
          position: "absolute",
          top: "50%",
          fontSize: "20px",
          zIndex: "1",
          transform: "translateY(-50%)",
        }}
        onClick={(e) => onClick()}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xlink="http://www.w3.org/1999/xlink"
          width="77"
          height="77"
          viewBox="0 0 77 77"
        >
          <defs>
            <filter
              id="Ellipse_20"
              x="0"
              y="0"
              width="77"
              height="77"
              filterUnits="userSpaceOnUse"
            >
              <feOffset dy="3" input="SourceAlpha" />
              <feGaussianBlur stdDeviation="6.5" result="blur" />
              <feFlood flood-opacity="0.161" />
              <feComposite operator="in" in2="blur" />
              <feComposite in="SourceGraphic" />
            </filter>
          </defs>
          <g
            id="Slider_Arrow"
            data-name="Slider Arrow"
            transform="translate(-298.5 -5465.5)"
          >
            <g
              transform="matrix(1, 0, 0, 1, 298.5, 5465.5)"
              filter="url(#Ellipse_20)"
            >
              <circle
                id="Ellipse_20-2"
                data-name="Ellipse 20"
                cx="19"
                cy="19"
                r="19"
                transform="translate(19.5 16.5)"
                fill="#fff"
              />
            </g>
            <path
              id="Polygon_18"
              data-name="Polygon 18"
              d="M8.64,1.448a1,1,0,0,1,1.72,0L18.1,14.489A1,1,0,0,1,17.243,16H1.757A1,1,0,0,1,.9,14.489Z"
              transform="translate(326 5510.506) rotate(-90)"
              fill="gray"
            />
          </g>
        </svg>
      </div>
    );
  }
  const settings = {
    arrows: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1098,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 680,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />,
  };

  return (
    <div>
      <Carousel {...settings}>
        <div>
          <Card
            bordered={false}
            bodyStyle={{ padding: "10px" }}
            style={{
              width: 250,
              border: "1px solid #FFC000",
              borderRadius: "31px",
              margin: "auto",
            }}
            cover={<img alt="example" src="/assets/09_HomePage.png" />}
          >
            <div className={style.container4cardtext}>256 Quality Checks</div>
          </Card>
        </div>
        <div>
          <Card
            bordered={false}
            bodyStyle={{ padding: "10px" }}
            style={{
              width: 250,
              border: "1px solid #FFC000",
              borderRadius: "31px",
              margin: "auto",
            }}
            cover={<img alt="example" src="/assets/10_HomePage.png" />}
          >
            <div className={style.container4cardtext}>256 Quality Checks</div>
          </Card>
        </div>
        <div>
          <Card
            bordered={false}
            bodyStyle={{ padding: "10px" }}
            style={{
              width: 250,
              border: "1px solid #FFC000",
              borderRadius: "31px",
              margin: "auto",
            }}
            cover={<img alt="example" src="/assets/11_HomePage.png" />}
          >
            <div className={style.container4cardtext}>256 Quality Checks</div>
          </Card>
        </div>
        <div>
          <Card
            bordered={false}
            bodyStyle={{ padding: "10px" }}
            style={{
              width: 250,
              border: "1px solid #FFC000",
              borderRadius: "31px",
              margin: "auto",
            }}
            cover={<img alt="example" src="/assets/12_HomePage.png" />}
          >
            <div className={style.container4cardtext}>256 Quality Checks</div>
          </Card>
        </div>
        <div>
          <Card
            bordered={false}
            bodyStyle={{ padding: "10px" }}
            style={{
              width: 250,
              border: "1px solid #FFC000",
              borderRadius: "31px",
              margin: "auto",
            }}
            cover={<img alt="example" src="/assets/09_HomePage.png" />}
          >
            <div className={style.container4cardtext}>256 Quality Checks</div>
          </Card>
        </div>
        <div>
          <Card
            bordered={false}
            bodyStyle={{ padding: "10px" }}
            style={{
              width: 250,
              border: "1px solid #FFC000",
              borderRadius: "31px",
              margin: "auto",
            }}
            cover={<img alt="example" src="/assets/09_HomePage.png" />}
          >
            <div className={style.container4cardtext}>256 Quality Checks</div>
          </Card>
        </div>
      </Carousel>
    </div>
  );
};
export default ChooseCarousel;

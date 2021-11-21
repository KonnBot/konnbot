import React from "react";
import style from "./Cards.module.css";
import { Row, Col, Card, Button } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";

export default function Features({ sm, rm, ce, pt, ba, qa, text }) {
  return (
    <Row justify="space-between" gutter={[0, 14]}>
      <Col sm={12} md={8} lg={8} xl={4} xxl={4}>
        <Card
          bordered={false}
          style={{
            width: 200,
            backgroundColor: "#E7FFEA",
            borderRadius: "10px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "center",
              height: "100%",
            }}
          >
            <img
              className={style.FeatureCardImg}
              alt="example"
              src="/assets/02_HomePage.png"
            />

            <div className={style.FeatureText}>{sm}</div>
            {text ? (
              <div className={style.FeatureText1}>Residence</div>
            ) : (
              <Button
                style={{
                  backgroundColor: "#E7FFEA",
                  color: "#595959",
                  border: "0.25px solid #595959",
                }}
                type="primary"
                size="large"
                block
                shape="round"
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <span style={{ fontSize: "12px" }}>Learn more</span>
                  <ArrowRightOutlined />
                </div>
              </Button>
            )}
          </div>
        </Card>
      </Col>

      <Col sm={12} md={8} lg={8} xl={4} xxl={4}>
        <Card
          bordered={false}
          style={{
            width: 200,
            backgroundColor: "#FFECF7",
            borderRadius: "10px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "center",
              height: "100%",
            }}
          >
            <img
              className={style.FeatureCardImg}
              alt="example"
              src="/assets/03_HomePage.png"
            />

            <div className={style.FeatureText}>{rm}</div>
            {text ? (
              <div className={style.FeatureText1}>SQFT</div>
            ) : (
              <Button
                style={{
                  backgroundColor: "#FFECF7",
                  color: "#595959",
                  border: "0.25px solid #595959",
                }}
                type="primary"
                size="large"
                block
                shape="round"
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <span style={{ fontSize: "12px" }}>Learn more</span>
                  <ArrowRightOutlined />
                </div>
              </Button>
            )}
          </div>
        </Card>
      </Col>

      <Col sm={12} md={8} lg={8} xl={4} xxl={4}>
        <Card
          bordered={false}
          style={{
            width: 200,
            backgroundColor: "#FFF6E0",
            borderRadius: "10px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "center",
              height: "100%",
            }}
          >
            <img
              className={style.FeatureCardImg}
              alt="example"
              src="/assets/04_HomePage.png"
            />

            <div className={style.FeatureText}>{ce}</div>
            {text ? (
              <div className={style.FeatureText1}>Lakhs</div>
            ) : (
              <Button
                style={{
                  backgroundColor: "#FFF6E0",
                  color: "#595959",
                  border: "0.25px solid #595959",
                }}
                type="primary"
                size="large"
                block
                shape="round"
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <span style={{ fontSize: "12px" }}>Learn more</span>
                  <ArrowRightOutlined />
                </div>
              </Button>
            )}
          </div>
        </Card>
      </Col>

      <Col sm={12} md={8} lg={8} xl={4} xxl={4}>
        <Card
          bordered={false}
          style={{
            width: 200,
            backgroundColor: "#FCF3FF",
            borderRadius: "10px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "center",
              height: "100%",
            }}
          >
            <img
              className={style.FeatureCardImg}
              alt="example"
              src="/assets/05_HomePage.png"
            />

            <div className={style.FeatureText}>{pt}</div>
            {text ? (
              <div className={style.FeatureText1}>Months</div>
            ) : (
              <Button
                style={{
                  backgroundColor: "#FCF3FF",
                  color: "#595959",
                  border: "0.25px solid #595959",
                }}
                type="primary"
                size="large"
                block
                shape="round"
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <span style={{ fontSize: "12px" }}>Learn more</span>
                  <ArrowRightOutlined />
                </div>
              </Button>
            )}
          </div>
        </Card>
      </Col>

      <Col sm={12} md={8} lg={8} xl={4} xxl={4}>
        <Card
          bordered={false}
          style={{
            width: 200,
            backgroundColor: "#FFECEC",
            borderRadius: "10px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "center",
              height: "100%",
            }}
          >
            <img
              className={style.FeatureCardImg}
              alt="example"
              src="/assets/06_HomePage.png"
            />

            <div className={style.FeatureText}>{ba}</div>
            {text ? (
              <div className={style.FeatureText1}>Rating</div>
            ) : (
              <Button
                style={{
                  backgroundColor: "#FFECEC",
                  color: "#595959",
                  border: "0.25px solid #595959",
                }}
                type="primary"
                size="large"
                block
                shape="round"
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <span style={{ fontSize: "12px" }}>Learn more</span>
                  <ArrowRightOutlined />
                </div>
              </Button>
            )}
          </div>
        </Card>
      </Col>

      {qa ? (
        <Col sm={12} md={8} lg={8} xl={4} xxl={4}>
          <Card
            bordered={false}
            style={{
              width: 200,
              backgroundColor: "#E4F2FF",
              borderRadius: "10px",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "center",
                height: "100%",
              }}
            >
              <img
                className={style.FeatureCardImg}
                alt="example"
                src="/assets/07_HomePage.png"
              />

              <div className={style.FeatureText}>{qa}</div>
              {text ? (
                <div className={style.FeatureText1}>Profit</div>
              ) : (
                <Button
                  style={{
                    backgroundColor: "#E4F2FF",
                    color: "#595959",
                    border: "0.25px solid #595959",
                  }}
                  type="primary"
                  size="large"
                  block
                  shape="round"
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <span style={{ fontSize: "12px" }}>Learn more</span>
                    <ArrowRightOutlined />
                  </div>
                </Button>
              )}
            </div>
          </Card>
        </Col>
      ) : (
        ""
      )}
    </Row>
  );
}

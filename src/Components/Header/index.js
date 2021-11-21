import React, { useEffect, useState } from "react";
import { Row, Col, Menu, Button } from "antd";
import { Link, useLocation } from "react-router-dom";
import { useHistory } from "react-router";
import { MenuOutlined } from "@ant-design/icons";
import style from "./Header.module.css";

const Header = (props) => {
  const [current, setCurrent] = useState("");

  const history = useHistory();

  const handleClickLogo = () => {
    history.push("/");
    setCurrent("");
  };

  const handleClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
    let check = location.pathname.split("/");

    if (
      location.pathname === "/projects" ||
      (check && check[1] === "projects")
    ) {
      setCurrent("projects");
    } else if (
      location.pathname === "/estimator" ||
      (check && check[1] === "estimator")
    ) {
      console.log("Hello");
      setCurrent("estimator");
    } else if (
      location.pathname === "/blogs" ||
      (check && check[1] === "blogs")
    ) {
      setCurrent("blogs");
    } else if (location.pathname === "/about") {
      setCurrent("about");
    } else if (location.pathname === "/contact") {
      setCurrent("contact");
    } else if (location.pathname === "/") {
      setCurrent("");
    }
  }, [location.pathname]);
  return (
    <>
      <Row justify="space-between" className={style.headerRow}>
        <Col
          xs={24}
          sm={24}
          md={8}
          lg={8}
          xl={8}
          xxl={7}
          style={{ flex: "40%" }}
        >
          <div onClick={() => handleClickLogo()} className={style.logod}>
            <img alt="logo" src="/assets/logo.svg" />
            <img alt="konnbot" src="/assets/konnbot.svg" />
            <div className={style.logoText}>Project Management Consultancy</div>
          </div>
        </Col>
        <Col
          xs={0}
          sm={0}
          md={16}
          lg={16}
          xl={16}
          xxl={24}
          style={{ flex: "60%" }}
        >
          <div className={style.mainMenu}>
            <Menu
              onClick={(e) => handleClick(e)}
              selectedKeys={current}
              mode="horizontal"
              className={style.headerMenu}
              overflowedIndicator={<MenuOutlined />}
            >
              <Menu.Item className="headMenu" key="home">
                <Link to="/">Home</Link>
              </Menu.Item>
              <Menu.Item className="headMenu" key="projects">
                <Link to="/projects">Projects</Link>
              </Menu.Item>
              <Menu.Item className="headMenu" key="estimator">
                <Link to="/estimator">Estimator</Link>
              </Menu.Item>
              <Menu.Item className="headMenu" key="blogs">
                <Link to="/blogs">Blogs</Link>
              </Menu.Item>
              <Menu.Item className="headMenu" key="about">
                <Link to="/about">About Us</Link>
              </Menu.Item>
              <Menu.Item className="contact">
                <div>
                  <Link to="/contact">
                    <Button
                      size="large"
                      shape="round"
                      style={{
                        border: "none",
                        fontWeight: "400",
                        fontSize: "16px",
                        lineHeight: "20px",
                      }}
                    >
                      Connect Us
                    </Button>
                  </Link>
                </div>
              </Menu.Item>
            </Menu>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default Header;

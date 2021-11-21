import React, { useState, useEffect } from "react";
import { Router, Route, Switch } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Projects from "./Components/Projects";
import Project from "./Components/Project";
import Estimator from "./Components/Estimator";
import Details from "./Components/BeforeYouBegin";
import Blogs from "./Components/Blogs";
import Blog from "./Components/Blog";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Notfound from "./Components/Notfound";
import EstimatorPlotDetails from "./Components/EstimatePlotDetails";
import KnowMore from "./Components/KnowMore";

// import "antd/dist/antd.css";
import "./antd.css";
import "./antd.less";
import "./App.css";
import history from "./history";

const App = () => {
  const [calcData, setCalcData] = useState({});

  useEffect(() => {
    var persistData = JSON.parse(localStorage.getItem("calcData"));

    if (persistData !== {}) {
      setCalcData(persistData);
    }
  }, []);

  return (
    <div>
      <Router history={history}>
        <Header />
        <div
          style={{
            top: "96px",
            position: "absolute",
            width: "100%",
            display: "inline-block",
          }}
        >
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/projects" exact component={Projects} />
            <Route path="/projects/:id" exact component={Project} />
            <Route
              path="/estimator"
              exact
              component={() => (
                <Estimator calcData={calcData} setCalcData={setCalcData} />
              )}
            />
            <Route
              path="/estimator/details"
              exact
              component={() => (
                <Details calcData={calcData} setCalcData={setCalcData} />
              )}
            />
            <Route
              path="/estimator/plot-details"
              exact
              component={() => (
                <EstimatorPlotDetails
                  calcData={calcData}
                  setCalcData={setCalcData}
                />
              )}
            />
            <Route path="/blogs" exact component={Blogs} />
            <Route path="/blogs/:slug/:id" exact component={Blog} />
            <Route path="/about" exact component={About} />
            <Route path="/contact" exact component={Contact} />
            <Route path="/know-more" component={KnowMore} />
            <Route path="" component={Notfound} />
          </Switch>

          <Footer />
        </div>
      </Router>
    </div>
  );
};

export default App;

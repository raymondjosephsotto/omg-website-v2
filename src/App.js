import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "animate.css/animate.min.css";

import Header from "./containers/header/Header";
import Hero from "./containers/hero/Hero";
import MainBody from "./containers/main-body/MainBody";
import Footer from "./containers/footer/Footer";
import Particles from "react-particles-js";
import ParticlesConfig from "./config/particles-config";

import "./components/prefab-styles/PrefabStyles.scss";

const App = () => {
  return (
    <React.Fragment>
      <Particles id="particles-js" params={ParticlesConfig} />
        <Header />
        <Hero />
        <MainBody />
        <Footer />
    </React.Fragment>
  );
};

export default App;

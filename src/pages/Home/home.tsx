import React from "react";
import Styles from "./home.module.scss";
const Home = () => {
  return (
    <>
      <div className={Styles.homeContainer}>
        <div className={Styles.homeContainerFelx}>
          <div className={Styles.containerTexxtH1}>
            <p>Hi!!! My Name is Jaiydev Gupta,</p>
          </div>
          <div className={Styles.containerTextbody}>
            <p>
              a Results-driven Full Stack Software Engineer with 1.5 years of
              experience at VISA Inc. Experienced in containerized
              microservices, cloud deployment, and full-stack development
            </p>
          </div>
        </div>
      </div>
      <div className={Styles.homeContainer2}>
        <div className={Styles.homeContainerFelx}></div>
      </div>
    </>
  );
};

export default Home;

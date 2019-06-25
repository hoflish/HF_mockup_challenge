import React from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";

import Main from "../../components/Main";
import MapContainer from "../../containers/MapContainer";
import "./css/index.css";
import "./css/navbar.css";

const heroStyle = {
  position: "relative",
  width: "100%",
  height: "100%",
  backgroundImage: `url(${require("../../images/New-York-Wallpaper-Background-7.jpg")})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundSize: "cover"
};

const Page = ({ restaurant }) => {
  return (
    <React.Fragment>
      <section className="hf-hero" style={heroStyle}>
        {/* avatar iamge */}
        <div className="hf-hero__avatar">
          <div className="hf-hero__avatar-large">
            <img src={null} alt="" />
          </div>
        </div>

        {/* content wrapper */}
        <div className="hf-hero__content">
          {/* hero title */}
          <div className="hf-hero__title">{"restaurant name"}</div>

          {/* hero description */}
          <div className="hf-hero__description">
            <h3>{"restaurant description"}</h3>
          </div>

          {/* follow section */}
          <div className="hf-hero__follow">
            {/* followers number */}
            <div className="hf-hero__follow-number">{"6M followers"}</div>
            <div className="flex-grow" />
            {/* follow button */}
            <div className="hf-hero__follow-left">
              <button className="btn btn-primary">Follow</button>
              <i className="sp-icon icon--settings" />
            </div>
          </div>
        </div>
      </section>
      <nav>
        <Tabs>
          <TabList>
            <Tab>AFFORDABLE</Tab>
            <Tab>FANCY</Tab>
            <Tab>TIPS</Tab>
            <Tab>COMMUNITY</Tab>
          </TabList>
          <div className="tabs-content">
            <div className="main-content">
              <TabPanel>
                <Main />
              </TabPanel>
              <TabPanel>fancy</TabPanel>
              <TabPanel>tips</TabPanel>
              <TabPanel>community</TabPanel>
            </div>
            {/* google maps goes here */}
            <div className="map">
              <MapContainer />
            </div>
          </div>
        </Tabs>
      </nav>
    </React.Fragment>
  );
};

export default Page;

import React from "react";
import ContentLoader from "react-content-loader"

const CircleLoader = () => (
  <ContentLoader
    height={40}
    width={150}
    speed={2}
    primaryColor="#f3f3f3"
    secondaryColor="#ecebeb"
  >
    <circle cx="25" cy="20" r="20" />
    <circle cx="75" cy="20" r="20" />
    <circle cx="125" cy="20" r="20" />
  </ContentLoader>
)

export default CircleLoader

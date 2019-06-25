import React from "react";
import Page from "./Page";

const View = ({
  match: {
    params: { id }
  }
}) => {
  return <Page restaurant={{}}/>;
};

export default View;

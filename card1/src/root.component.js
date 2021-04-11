// import React from "react";

// export default function Root(props) {
//   return <section>{props.name} is mounted!</section>;
// }

import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Card1 from "./components/Card1";

const Root = () => {
  return (
    <>
      <Card1 />
    </>
  )
};

export default Root
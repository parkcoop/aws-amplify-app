import React, { useContext } from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";

import Employees from '../pages/Employees'
import Home from "../pages/Home";

const Routes = () => {
  return (
  <>
    <Route exact path="/" render={() => <Home />} />
    <Route exact path="/employees" render={() => <Employees />} />
  </>
  )
}

export default Routes
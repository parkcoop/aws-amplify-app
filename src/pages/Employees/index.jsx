import React from "react";
import { useQuery } from "react-apollo";
import gql from "graphql-tag";
import AllEmployees  from './components/AllEmployees'
import NewEmployee from "./components/NewEmployee";

const Employees = () => {

    return (
        <div style={{display: "flex", flexDirection: "column", alignItems: "flex-start", justifyContent: "flex-start"}}>
          <div style={{display: "flex", alignItems: "flex-start"}}>
            <NewEmployee />
            <AllEmployees />
          </div>
        </div>
    );
};

export default Employees;

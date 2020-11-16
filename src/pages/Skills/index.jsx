import React from "react";
import { useQuery } from "react-apollo";
import gql from "graphql-tag";

import NewSkill from "./components/NewSkill";
import AllSkills from "./components/AllSkills";

const Employees = () => {

    return (
        <div style={{display: "flex", flexDirection: "column", alignItems: "flex-start", justifyContent: "flex-start"}}>
          <div style={{display: "flex", alignItems: "flex-start"}}>
            <NewSkill />
            <AllSkills />
          </div>
        </div>
    );
};

export default Employees;

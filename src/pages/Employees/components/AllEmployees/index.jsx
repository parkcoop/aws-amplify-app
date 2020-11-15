import React from "react";
import { useQuery } from "react-apollo";
import gql from "graphql-tag";
import { listEmployees } from "../../../../graphql/queries";

const AllEmployees = () => {
    const { employeesLoading, employeesError, data } = useQuery(gql(listEmployees))

    if (employeesLoading) return 'Loading...';
    if (employeesError) return `Error! ${employeesError.message}`;
    return (
        <div style={{width: 500, backgroundColor: "#CDCDCD", margin: 10, padding: 15}}>
           <p>All Employees</p>
           {data?.listEmployees?.items?.map(employee => (
            <div key={employee.id}>
              <p>Name: {employee.firstname}</p>
            </div>
           ))}
        </div>
    );
};

export default AllEmployees;

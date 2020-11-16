import React, { useState } from "react";
import { useMutation } from "react-apollo";
import { createEmployee } from "../../../../graphql/mutations";
import gql from "graphql-tag";
import { useInput } from "../../../../hooks";
import { Button } from "@material-ui/core";
import SelectSkills from "../../../../components/SelectSkills";

const NewEmployee = () => {
    const [id, idInput] = useInput({ type: "text", placeholder: "ID" });
    const [firstname, firstnameInput] = useInput({ type: "text", placeholder: "First name" });
    const [lastname, lastnameInput] = useInput({ type: "text", placeholder: "Last name" });
    const [selectedSkills, setSelectedSkills] = useState([]);
    
    const [
        newEmployee,
        { loading: newEmployeeLoading, error: newEmployeeError },
    ] = useMutation(gql(createEmployee));

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(id, firstname, lastname);
        newEmployee({
            variables: {
                input: {
                    id,
                    firstname,
                    lastname,
                    // skills: selectedSkills
                },
            },
        });
    };

    if (newEmployeeLoading) return <p>Loading...</p>;
    if (newEmployeeError) return <p>Error: </p>;

    return (
        <div style={{
            display: "flex", 
            flexDirection: "column", 
            alignItems: "center", 
            justifyContent: "space-around",
            backgroundColor: "rgb(245, 245, 245)",
            borderRadius: 4,
            padding: 15,
            margin: 10,
          }}>
            <h1>New Employee</h1>
            <div>
                <form
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between", 
                    }}
                >
                    {idInput}
                    {firstnameInput}
                    {lastnameInput}
                    <SelectSkills 
                      selectedSkills={selectedSkills}
                      setSelectedSkills={setSelectedSkills}
                    />
                    <Button variant="contained" color="primary" onClick={(e) => handleSubmit(e)}>
                        New Employee
                    </Button>
                </form>
            </div>
        </div>
    );
};

export default NewEmployee;

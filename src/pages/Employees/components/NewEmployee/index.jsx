import React, { useState } from "react";
import { useMutation } from "react-apollo";
import { createEmployee, createEmployeeSkill } from "../../../../graphql/mutations";
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

    const [
        newEmployeeSkill,
        { loading: newEmployeeSkillLoading, error: newEmployeeSkillError },
    ] = useMutation(gql(createEmployeeSkill));

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(id, firstname, lastname);
        try {
          await newEmployee({
              variables: {
                  input: {
                      id,
                      firstname,
                      lastname,
                  },
              },
          });
          console.log(selectedSkills)
          selectedSkills.forEach(async skill => {
            await newEmployeeSkill({
              variables: {
                input: {
                  skill: skill,
                  employee: {
                    id,
                    firstname,
                    lastname,
                }
                }
              }
            })
          })
        }
        catch(err) {
          console.log(err)
        }
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

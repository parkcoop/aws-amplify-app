import React from "react";
import { useMutation } from "react-apollo";
import { createEmployee } from "../../../../graphql/mutations";
import gql from "graphql-tag";
import { useInput } from "../../../../hooks";

const NewEmployee = () => {
    const [id, idInput] = useInput({ type: "text" });
    const [firstname, firstnameInput] = useInput({ type: "text" });
    const [lastname, lastnameInput] = useInput({ type: "text" });

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
            justifyContent: "space-between",
            backgroundColor: "#CDCDCD",
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
                        height: 125
                    }}
                >
                    {idInput}
                    {firstnameInput}
                    {lastnameInput}
                    <button onClick={(e) => handleSubmit(e)}>
                        New Employee
                    </button>
                </form>
            </div>
        </div>
    );
};

export default NewEmployee;

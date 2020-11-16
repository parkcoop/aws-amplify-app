import React from "react";
import { useMutation } from "react-apollo";
import { createEmployee, createSkill } from "../../../../graphql/mutations";
import gql from "graphql-tag";
import { useInput } from "../../../../hooks";

const NewSkill = () => {
    const [id, idInput] = useInput({ type: "text", placeholder: "ID" });
    const [name, nameInput] = useInput({ type: "text", placeholder: "Skill name" });

    const [
        newSkill,
        { loading: newSkillLoading, error: newSkillError },
    ] = useMutation(gql(createSkill));

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(id, name);
        newSkill({
            variables: {
                input: {
                    id,
                    name,
                },
            },
        });
    };

    if (newSkillLoading) return <p>Loading...</p>;
    if (newSkillError) return <p>Error: </p>;

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
            <h1>New Skill</h1>
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
                    {nameInput}
                    <button onClick={(e) => handleSubmit(e)}>
                        New Skill
                    </button>
                </form>
            </div>
        </div>
    );
};

export default NewSkill;

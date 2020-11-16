import React, { useEffect, useState } from "react";
import { useMutation } from "react-apollo";
import { updateSkill } from "../../../../graphql/mutations";
import gql from "graphql-tag";
import { useInput } from "../../../../hooks";
import { Backdrop, Button, Fade, Input, Modal } from "@material-ui/core";

const EditSkill = ({ skill, open, setOpen, handleClose }) => {
    console.log(skill)

    const [id, idInput, setId  ] = useInput({ type: "text", placeholder: "ID" });
    const [name, nameInput, setName  ] = useInput({ type: "text", placeholder: "Skill name" });

    const [
        editSkill,
        { loading: editSkillLoading, error: editSkillError },
    ] = useMutation(gql(updateSkill));

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(id, name);
        editSkill({
            variables: {
                input: {
                    id: skill.id,
                    name,
                },
            },
        });
        handleClose()
    };

    useEffect(() => {
      if (!skill) return
      setId(skill.id)
      setName(skill.name)
    }, [skill])


    if (editSkillLoading) return <p>Loading...</p>;
    if (editSkillError) return <p>Error: </p>;
   
    return (
      <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      // className={classes.modal}
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      {/* <Fade in={open}> */}
      <div style={{
            display: "flex", 
            flexDirection: "column", 
            alignItems: "center", 
            justifyContent: "space-between",
            backgroundColor: "rgb(245, 245, 245)",
            padding: 25,
            width: "50%",
            margin: "10% auto",
          }}>
            <h1>Edit Skill</h1>
            <div>
                <form
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between", 
                        margin: 25,
                    }}
                >
                  <p>Editing skill #{skill?.id}</p>
                   {idInput}
                   {nameInput}
                   <Button onClick={(e) => handleSubmit(e)} variant="contained" color="primary">
                      Primary
                    </Button>
                </form>
            </div>
        </div>
      {/* </Fade> */}
    </Modal>
      
    );
};

export default EditSkill;

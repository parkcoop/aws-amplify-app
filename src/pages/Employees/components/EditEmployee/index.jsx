import React, { useEffect, useRef, useState } from "react";
import { useMutation, useQuery } from "react-apollo";
import { updateEmployee } from "../../../../graphql/mutations";
import gql from "graphql-tag";
import { useInput, useIsMounted } from "../../../../hooks";
import { Backdrop, Button, Checkbox, Fade, FormControl, FormControlLabel, FormGroup, FormHelperText, FormLabel, Input, Modal, Select } from "@material-ui/core";
import { listSkills } from "../../../../graphql/queries";
import SelectSkills from "../../../../components/SelectSkills";

const EditEmployee = ({ employee, open, setOpen, handleClose }) => {
    console.log(employee)
    const isMounted = useIsMounted()
    const [firstname, firstnameInput, setFirstname] = useInput({ type: "text", placeholder: "First name", label: "First name" });
    const [lastname, lastnameInput, setLastname] = useInput({ type: "text", placeholder: "Last name", label: "Last name" });
    const [selectedSkills, setSelectedSkills] = useState([])

    const { skillsLoading, skillsError, data: skillsData } = useQuery(gql(listSkills))

    const [
        editEmployee,
        { loading: editEmployeeLoading, error: editEmployeeError },
    ] = useMutation(gql(updateEmployee));

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(firstname, lastname);
        editEmployee({
            variables: {
                input: {
                    id: employee.id,
                    firstname,
                    lastname,
                },
            },
        });
        handleClose()
    };

    useEffect(() => {
      if (!employee || !isMounted) return
      setFirstname(employee.firstname)
      setLastname(employee.lastname)



    }, [employee, setFirstname, setLastname, isMounted])

    useEffect(() => {
      if (!skillsData || !isMounted) return
        // skillsData.listSkills.items.forEach()



    }, [skillsData, isMounted])

console.log(skillsData)
    if (editEmployeeLoading) return <p>Loading...</p>;
    if (editEmployeeError) return <p>Error: </p>;
   
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
      <Fade in={open}>
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
            <h1>New Employee</h1>
            <div style={{display: "flex"}}>
                <form
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between", 
                        margin: 25,
                    }}
                >
                  <p>Editing employee #{employee?.id}</p>
                   {firstnameInput}
                   {lastnameInput}
                   <Button onClick={(e) => handleSubmit(e)} variant="contained" color="primary">
                      Primary
                    </Button>
                </form>
                <SelectSkills 
                  selectedSkills={selectedSkills}
                  setSelectedSkills={setSelectedSkills}
                />
                {/* <FormControl component="fieldset" >
                  <FormLabel component="legend">Skills</FormLabel>
                  <FormGroup>
                    {skillsData?.listSkills?.items?.map(skill => (
                      <FormControlLabel
                        control={<Checkbox checked={true} name={skill} />}
                        label={skill.name}
                      />
                    ))}
                  </FormGroup>
                </FormControl> */}
                {employee?.skills?.map(skill => (
                  <div>
                    <p>{skill.name}</p>
                  </div>
                ))}
            </div>
        </div>
      </Fade>
    </Modal>
      
    );
};

export default EditEmployee;

import React, { useCallback, useEffect, useRef, useState } from "react";
import { useMutation, useQuery } from "react-apollo";
import { updateEmployee } from "../../graphql/mutations";
import gql from "graphql-tag";
import { Backdrop, Button, Checkbox, Fade, FormControl, FormControlLabel, FormGroup, FormHelperText, FormLabel, Input, Modal, Select } from "@material-ui/core";
import { listSkills } from "../../graphql/queries";

const SelectSkills = ({ selectedSkills, setSelectedSkills }) => {
  const { skillsLoading, skillsError, data: skillsData } = useQuery(gql(listSkills))

  const handleChange = (e, skill) => {
      if (e.target.checked) {
        setSelectedSkills([...selectedSkills, skill])
      } else {
        let newSkills = Array.from(selectedSkills)
        newSkills.splice(selectedSkills.indexOf(skill), 1)
        setSelectedSkills([...newSkills])
      }
    
    }
  


  if (skillsLoading) return <p>Loading...</p>
  if (skillsError) return <p>Error...</p>
  return (
    <FormControl component="fieldset" >
    <FormLabel component="legend">Skills</FormLabel>
    <FormGroup>
      {skillsData?.listSkills?.items?.map((skill, idx) => (
        <FormControlLabel
          control={
            <Checkbox 
              onChange={(e) => handleChange(e, skill)} 
              checked={selectedSkills?.includes(skill)} 
              name={skill.name} />
            }
          label={skill.name}
        />
      ))}
    </FormGroup>
  </FormControl>
  )
}

export default SelectSkills
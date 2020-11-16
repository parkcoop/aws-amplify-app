import React , {useState} from "react";
import { useQuery } from "react-apollo";
import gql from "graphql-tag";
import { listSkills } from "../../../../graphql/queries";
import { makeStyles } from '@material-ui/core/styles';
import { DataGrid } from '@material-ui/data-grid';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import EditSkill from "../EditSkill";

const AllSkills = () => {
    const { skillsLoading, skillsError, data } = useQuery(gql(listSkills))

    const columns = [
      { field: 'id', headerName: 'ID', width: 70},
      { field: 'name', headerName: 'Skill name', width: 300},
    ]

    const rows = data?.listSkills?.items


    const [open, setOpen] = useState(false);
    const [selectedSkill, setSelectedSkill] = useState()

  const handleOpen = (employee) => {
    setOpen(true);
    setSelectedSkill(employee);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedSkill(null);

  };


    
    if (skillsLoading) return 'Loading...';
    if (skillsError) return `Error! ${skillsError.message}`;
    console.log(data)
    return (
        <div style={{width: "50vw",backgroundColor: "rgb(245, 245, 245)", margin: 10, padding: 15, borderRadius: 4 }}>
           <p>All Skills</p>
           <div style={{height: "50vh",}}>
            {rows && <DataGrid onRowClick={(row) => handleOpen(row.data)} rows={rows} columns={columns} pageSize={100} />}
           <EditSkill skill={selectedSkill} open={open} setOpen={setOpen} handleClose={handleClose} />
           </div>
        </div>
    );
};

export default AllSkills;

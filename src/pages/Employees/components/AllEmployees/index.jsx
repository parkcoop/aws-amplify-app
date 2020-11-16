import React , {useState} from "react";
import { useQuery } from "react-apollo";
import gql from "graphql-tag";
import { listEmployees } from "../../../../graphql/queries";
import { makeStyles } from '@material-ui/core/styles';
import { DataGrid } from '@material-ui/data-grid';
import EditEmployee from "../EditEmployee";


const AllEmployees = () => {
    const { employeesLoading, employeesError, data } = useQuery(gql(listEmployees))

    const columns = [
      { field: 'id', headerName: 'ID', width: 100},
      { field: 'firstname', headerName: 'First name', width: 150},
      { field: 'lastname', headerName: 'Last name', width: 150},
    ]

    const rows = data?.listEmployees?.items

    const [open, setOpen] = useState(false);
    const [selectedEmployee, setSelectedEmployee] = useState()

    const handleOpen = (employee) => {
      setOpen(true);
      console.log(employee)
      setSelectedEmployee(employee);
    };

    const handleClose = () => {
      setOpen(false);
      setSelectedEmployee(null);

    };


    
    if (employeesLoading) return 'Loading...';
    if (employeesError) return `Error! ${employeesError.message}`;
    console.log(data)
    return (
      <div style={{ width: "50vw",backgroundColor: "rgb(245, 245, 245)", margin: 10, padding: 15, borderRadius: 4 }}>
        <p>OMG</p>
        <div style={{ height: 500}}>
           {rows && <DataGrid onRowClick={(row) => handleOpen(row.data)} rows={rows} columns={columns} pageSize={100}/>}
           <EditEmployee employee={selectedEmployee} open={open} setOpen={setOpen} handleClose={handleClose} />
        </div>
      </div>
    );
};

export default AllEmployees;

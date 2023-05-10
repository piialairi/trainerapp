import React, { useState, useEffect } from "react";
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-material.css';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import Addworkout from "./Addworkouts";
//import Editworkout from "./Editworkout";
import { API_URL_WO, API_URL_WOCUST } from "../Constant";
import dayjs from "dayjs";
//import { TimePicker } from "@mui/x-date-pickers";
import DeleteIcon from '@mui/icons-material/Delete';
//import moment from "moment";


export default function Workoutlist() {
    const [workouts, setWorkouts] = useState([]);
    const [open, setOpen] = useState(false);
    const [msg, setMsg] = useState("");

    const [columnDefs] = useState([
        /*{
            field: 'date', sortable: true, filter: true, width: 180, floatingFilter: true,
            valueFormatter: params => moment(params.value).toISOString()
        },*/
        {
            field: 'date', sortable: true, filter: true, width: 150, floatingFilter: true,
            valueFormatter: params => dayjs(params.value).format('DD.MM.YY HH:mm')
        },
        /*{
            field: 'time', sortable: true, filter: true, width: 150, floatingFilter: true,
            valueFormatter: params => dayjs(params.value).format('HH:mm')
        },*/
        { field: 'duration', sortable: true, filter: true, width: 150, floatingFilter: true },
        { field: 'activity', sortable: true, filter: true, width: 150, floatingFilter: true },
        { field: 'customer.firstname', sortable: true, filter: true, width: 200, floatingFilter: true },
        { field: 'customer.lastname', sortable: true, filter: true, width: 200, floatingFilter: true },
        {
            cellRenderer: params =>
                <Button startIcon={<DeleteIcon />} size="small" color="error" onClick={() => deleteWorkouts(params)}>
                </Button>,
            width: 70
        }
    ])

    useEffect(() => {
        getWorkouts()
    }, []);

    const getWorkouts = () => {
        fetch(API_URL_WOCUST)
            .then(response => response.json())
            .then(data => setWorkouts(data))
            .catch(err => console.error(err))
    }

    const deleteWorkouts = (params) => {
        if (window.confirm('Are you sure?')) {
            fetch(API_URL_WO + '/' + params.data.id, { method: 'DELETE' })
                // fetch(API_URL_WO + '/' + params.data.links[0].href, { method: 'DELETE' })
                //fetch(params.data.links[0].href, { method: 'DELETE' })
                .then(response => {
                    if (response.ok) {
                        setOpen(true)
                        getWorkouts()
                    }
                    else
                        alert('Something went wrong in deletion: ' + response.statusText);
                })
                .catch(err => console.error(err));
        }
    }

    const addWorkout = (workout) => {
        fetch(API_URL_WO, {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(workout)
        })
            .then(response => {
                if (response.ok) {
                    setMsg("Workout added succesfully");
                    getWorkouts();
                }
                else
                    alert('Something went wrong');
            })
            .catch(err => console.error(err))
    }

    return (
        <>
            <Addworkout addWorkout={addWorkout} />
            <div className="ag-theme-material"
                style={{ height: 600, width: '90%', margin: 'auto' }}>
                <AgGridReact
                    rowData={workouts}
                    columnDefs={columnDefs}
                    pagination={true}
                    paginationPageSize={10}
                    animateRows={true}
                />
            </div>
            <Snackbar
                open={open}
                autoHideDuration={3000}
                onClose={() => setOpen(false)}
                message={msg}
            />
        </>
    )

}

/*{
       field: 'time', sortable: true, filter: true, width: 150, floatingFilter: true,
       valueFormatter: params => dayjs(params.value).format('HH:mm')
       },*/
       //{ field: 'customer', sortable: true, filter: true, width: 160, floatingFilter: true },
/*{
   field: 'date', sortable: true, filter: true, width: 180, floatingFilter: true, valueFormatter: params => new Date(params.value).toISOString()
},*/
/*{
         cellRenderer: params =>
             <Editworkout updateWorkout={updateWorkout}
                 params={params.data} />,
         width: 70
     },*/
/*const updateWorkout = (url, updateWorkout) => {
    fetch(url, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updateWorkout)
    })
        .then(response => {
            if (response.ok) {
                setMsg("Workout edited succesfully");
                setOpen(true)
                getWorkouts();
            }
            else
                alert("Something went wrong updating workout " + response.statusText)
        })
        .catch(err => console.error(err));
}*/
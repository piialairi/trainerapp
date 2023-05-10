import React, { useState, useEffect } from "react";
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-material.css';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import Addcustomer from "./Addcustomer";
import { API_URL, API_URL_WO, API_URL_WOCUST } from "../Constant";
import Editcustomer from "./Editcustomer";
import DeleteIcon from '@mui/icons-material/Delete';
import { CSVLink } from "react-csv";
import AddCustomerWorkout from "./AddCustomerWorkout.js";

export default function Customerlist() {
    const [customers, setCustomers] = useState([]);
    const [open, setOpen] = useState(false);
    const [msg, setMsg] = useState("");

    const [columnDefs] = useState([
        { field: 'firstname', sortable: true, filter: true, width: 120, floatingFilter: true },
        { field: 'lastname', sortable: true, filter: true, width: 150, floatingFilter: true },
        { field: 'streetaddress', sortable: true, filter: true, width: 150, floatingFilter: true },
        { field: 'postcode', sortable: true, filter: true, width: 150, floatingFilter: true },
        { field: 'city', sortable: true, filter: true, width: 150, floatingFilter: true },
        { field: 'email', sortable: true, filter: true, width: 150, floatingFilter: true },
        { field: 'phone', sortable: true, filter: true, width: 150, floatingFilter: true },
        {
            cellRenderer: params =>

                <AddCustomerWorkout addWorkoutToCustomer={addWorkoutToCustomer}
                />,

            width: 130
        },
        {
            cellRenderer: params =>
                <Editcustomer updateCustomer={updateCustomer}
                    params={params.data} />,

            width: 70
        },
        {
            cellRenderer: params =>
                <Button startIcon={<DeleteIcon />} size="small" color="error" onClick={() => deleteCustomer(params)}>
                </Button>,
            width: 70
        }
    ])

    useEffect(() => {
        getCustomers()
    }, []);

    const getCustomers = () => {
        fetch(API_URL)
            .then(response => response.json())
            .then(data => setCustomers(data.content))
            .catch(err => console.error(err))
    }


    const deleteCustomer = (params) => {
        if (window.confirm('Are you sure?')) {
            fetch(params.data.links[1].href, { method: 'DELETE' })
                .then(response => {
                    if (response.ok) {
                        setOpen(true)
                        setMsg("Customer deleted succesfully");
                        getCustomers()
                    }
                    else
                        alert('Something went wrong in deletion: ' + response.status);
                })
                .catch(err => console.error(err));
        }
    }

    const addCustomer = (customer) => {
        fetch(API_URL, {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(customer)
        })
            .then(response => {
                if (response.ok) {
                    setOpen(true)
                    setMsg("Customer added succesfully");
                    getCustomers();
                }
                else
                    alert('Something went wrong');
            })
            .catch(err => console.error(err))
    }
    const updateCustomer = (url, updateCustomer) => {
        fetch(url, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(updateCustomer)
        })
            .then(response => {
                if (response.ok) {
                    setOpen(true)
                    setMsg("Customer edited succesfully");
                    getCustomers();
                }
                else
                    alert("Something went wrong updating a customer " + response.statusText)
            })
            .catch(err => console.error(err));
    }


    const headers = [
        { label: 'Firstname', key: 'firstname' },
        { label: 'Lastname', key: 'lastname' },
        { label: 'Streetaddress', key: 'streetaddress' },
        { label: 'Postcode', key: 'postcode' },
        { label: 'City', key: 'city' },
        { label: 'Email', key: 'email' },
        { label: 'Phone', key: 'phone' },
    ]
    const CSVReport = {
        filename: 'customerlist',
        headers: headers,
        data: customers
    }

    const addWorkoutToCustomer = (workout) => {
        fetch(API_URL_WO, {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(workout)
        })
            .then(response => {
                if (response.ok) {
                    setMsg("Workout added succesfully");
                    //getCustomers();
                }
                else
                    alert('Something went wrong');
            })
            .catch(err => console.error(err))
    }

    return (
        <>
            <CSVLink {...CSVReport}>Export customerlist</CSVLink>
            <Addcustomer addCustomer={addCustomer} />
            <div className="ag-theme-material"
                style={{ height: 600, width: '90%', margin: 'auto' }}>
                <AgGridReact
                    rowData={customers}
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
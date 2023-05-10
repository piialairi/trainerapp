import { Button, DialogContent, TextField } from "@mui/material";
import React, { useState } from "react";
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import EditIcon from '@mui/icons-material/Edit';

export default function Editworkout(props) {
    const [open, setOpen] = useState(false);
    const [workout, setWorkout] = React.useState({
        date: '',
        time: '',
        duration: '',
        activity: '',
        //customer.id: ''
    });
    const handleClickOpen = (params) => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason !== "backdropClick") {
            setOpen(false);
        }
    };
    const handleSave = () => {
        props.updateWorkout(props.params.links[0].href, workout);
        setOpen(false);
    };


    return (
        <div>
            <Button startIcon={<EditIcon />} size="small" onClick={handleClickOpen}>

            </Button>

            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Edit Workout</DialogTitle>
                <DialogContent>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                            label='Date'
                            value={workout.date}
                            format="DD.MM.YY"
                            onChange={newValue => {
                                setWorkout({ ...workout, date: newValue });
                            }}
                        />
                    </LocalizationProvider>

                    <TextField
                        margin="dense"
                        label="duration"
                        value={workout.duration}
                        onChange={(e) => setWorkout({ ...workout, duration: e.target.value })}
                        fullWidth
                        variant="standard"
                    />
                    <TextField
                        margin="dense"
                        label="activity"
                        value={workout.activity}
                        onChange={(e) => setWorkout({ ...workout, activity: e.target.value })}
                        fullWidth
                        variant="standard"
                    />
                </DialogContent>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={handleSave}>Save</Button>
            </Dialog>
        </div>
    )
}

/*<TextField
                        margin="dense"
                        label="date"
                        value={workout.date}
                        onChange={(e) => setWorkout({ ...workout, date: e.target.value })}
                        fullWidth
                        variant="standard"
                    />
                    
                     <TimePicker
                            label="Starting time"
                            value={workout.time}
                            format='HH.mm'
                            onChange={newValue => {
                                setWorkout({ ...workout, time: newValue });
                            }}
                        />*/
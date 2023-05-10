import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

export default function Addworkout(props) {
    const [workout, setWorkout] = React.useState({
        date: '',
        duration: '',
        activity: '',
        firstname: '',
        lastname: ''
    });

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSave = () => {
        props.addWorkout(workout);
        setOpen(false);
    }

    return (
        <div>
            <Button variant="outlined" onClick={handleClickOpen}>
                New workout
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Add new workout</DialogTitle>
                <DialogContent>

                    <TextField
                        margin="dense"
                        label="date"
                        value={workout.date}
                        format="DD.MM.YYYY"
                        onChange={(e) => setWorkout({ ...workout, date: e.target.value })}
                        fullWidth
                        variant="standard"
                    />
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
                    <TextField
                        margin="dense"
                        label="customer firstname"
                        value={workout.firstname}
                        onChange={(e) => setWorkout({ ...workout, firstname: e.target.value })}
                        fullWidth
                        variant="standard"
                    />
                    <TextField
                        margin="dense"
                        label="customer lastname"
                        value={workout.lastname}
                        onChange={(e) => setWorkout({ ...workout, lastname: e.target.value })}
                        fullWidth
                        variant="standard"
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleSave}>Save</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

/*
 <TextField
                        margin="dense"
                        label="customer"
                        value={workout.customer}
                        onChange={(e) => setWorkout({ ...workout, customer: e.target.value })}
                        fullWidth
                        variant="standard"
                    />
                    <TextField
                        margin="dense"
                        label="date"
                        value={workout.date}
                        format="DD.MM.YY"
                        onChange={(e) => setWorkout({ ...workout, date: e.target.value })}
                        fullWidth
                        variant="standard"
                    />
                     <TextField
                        margin="dense"
                        label="time"
                        value={workout.time}
                        format="HH_mm"
                        onChange={(e) => setWorkout({ ...workout, time: e.target.value })}
                        fullWidth
                        variant="standard"
                    />

                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                            label='Date'
                            value={workout.date}
                            format="DD.MM.YY"
                            onChange={newValue => {
                                setWorkout({ ...workout, date: newValue });
                            }}
                        />
                        <TimePicker label="Starting time"
                            format='HH.mm' />
                    </LocalizationProvider>

                     const inputChanged = (event) => {
        console.log("yritetään tallentaa attr arvoa");
        setWorkout({ ...workout, [event.target.name]: event.target.value })
    }
                    <TextField
                        name="customer"
                        value={workout.customer}
                        autoFocus
                        margin="dense"
                        label="Customer"
                        type="text"
                        fullWidth
                        variant="standard"
                        onChange={inputChanged}
                    />
                    */

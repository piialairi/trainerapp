import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import AddIcon from '@mui/icons-material/Add';

export default function AddWorkoutToCustomer(props) {
    const [workout, setWorkout] = React.useState({
        date: '',
        duration: '',
        activity: ''
    });

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSave = () => {
        props.addWorkoutToCustomer(workout);
        setOpen(false);
    }
    return (
        <div>

            <Button startIcon={<AddIcon />} size="small" onClick={handleClickOpen}>Workout</Button>
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
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleSave}>Save</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}
/*<Button variant="outlined" onClick={handleClickOpen}>
    New workout
</Button>*/
import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import EditIcon from '@mui/icons-material/Edit';

export default function Editcustomer(props, updateCustomer, params) {
    const [customer, setCustomer] = React.useState({
        firstname: '',
        lastname: '',
        streetaddress: '',
        postcode: '',
        city: '',
        email: '',
        phone: ''
    });

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = (params) => {
        setOpen(true);
        setCustomer({
            firstname: params.firstname,
            lastname: params.lastname,
            postcode: params.postcode,
            city: params.city,
            email: params.email,
            phone: params.phone
        })
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSave = () => {
        props.updateCustomer(props.params.links[1].href, customer);
        setOpen(false);
    }

    return (
        <div>
            <Button startIcon={<EditIcon />} onClick={handleClickOpen}>

            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Edit customer</DialogTitle>
                <DialogContent>
                    <TextField
                        margin="dense"
                        label="firstname"
                        value={customer.firstname}
                        onChange={(e) => setCustomer({ ...customer, firstname: e.target.value })}
                        fullWidth
                        variant="standard"
                    />
                    <TextField
                        margin="dense"
                        label="lastname"
                        value={customer.lastname}
                        onChange={(e) => setCustomer({ ...customer, lastname: e.target.value })}
                        fullWidth
                        variant="standard"
                    />
                    <TextField
                        margin="dense"
                        label="streetaddress"
                        value={customer.streetaddress}
                        onChange={(e) => setCustomer({ ...customer, streetaddress: e.target.value })}
                        fullWidth
                        variant="standard"
                    />
                    <TextField
                        margin="dense"
                        label="postcode"
                        value={customer.postcode}
                        onChange={(e) => setCustomer({ ...customer, postcode: e.target.value })}
                        fullWidth
                        variant="standard"
                    />
                    <TextField
                        margin="dense"
                        label="city"
                        value={customer.city}
                        onChange={(e) => setCustomer({ ...customer, city: e.target.value })}
                        fullWidth
                        variant="standard"
                    />
                    <TextField
                        margin="dense"
                        label="email"
                        value={customer.email}
                        onChange={(e) => setCustomer({ ...customer, email: e.target.value })}
                        fullWidth
                        variant="standard"
                    />
                    <TextField
                        margin="dense"
                        label="phone"
                        value={customer.phone}
                        onChange={(e) => setCustomer({ ...customer, phone: e.target.value })}
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


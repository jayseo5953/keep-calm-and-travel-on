import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import CustomInput from '../../../components/CustomInput/CustomInput'


 const SaveTrip = (props)=> {
  
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const postToBackEnd = (columns)=> {
    // return Promise.resolve()
    console.log("aaaa",columns)
    return Promise.reject()
  }

  return (
    <div className='save-trip'>
      <Button variant="contained" color="primary" onClick={handleClickOpen}>
        Save Trip
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">
          <h3>
          Your Trip
          </h3>
        </DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="tripname"
            label="Enter Trip Name"
            type="text"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={
            ()=>{
              postToBackEnd("My Trip" ,props.columns)
              .then((res)=>{
                handleClose()
              })
              .catch((err)=>{
                alert("aa")
              })
            
            }
            
            } color="primary"  >
            Save Itinerary
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
export default SaveTrip
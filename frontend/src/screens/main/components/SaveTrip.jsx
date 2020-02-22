import React,{useState} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import CustomInput from '../../../components/CustomInput/CustomInput'
import axios from 'axios';



const handleClickOpen = (setOpen) => {
  setOpen(true);
};
const handleClose = (setOpen) => {
  setOpen(false);
};


const postToBackEnd = (tripName,userid,columns)=> {

  return axios.post('/trips', {
      userid,
      columns,
      trip: tripName
  })

}



 const SaveTrip = (props)=> {
  
  const [open, setOpen] = useState(false);
  const [tripName, setTripName] = useState('')

  return (
    <div className='save-trip'>
      <Button variant="contained" color="primary" onClick={()=>handleClickOpen(setOpen)}>
        Save Trip
      </Button>
      <Dialog open={open} onClose={()=>handleClose(setOpen)} aria-labelledby="form-dialog-title">
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
            value={tripName}
            onChange={e=>setTripName(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={
            ()=>{
              if (!tripName) {
                alert('Trip name is required!')
                return
              }
              postToBackEnd(tripName, props.user.id ,props.columns)
              .then((res)=>{
                handleClose()
              })
              .catch((err)=>{
                alert("Saving was unsuccessful")
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
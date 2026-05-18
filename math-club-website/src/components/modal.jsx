import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: { xs: '90%', sm: 400 },
  bgcolor: '#32006e',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal({ open, close, score, onSuccess }) {

  const handleClose = () => close();
  const [user, setUser] = useState("");
  const [loading, setLoading] = useState(false);

  // Call AWS API Gateway Endpoint to save score to DynamoDB through our Lambda Function
  const handleSave = async () => {
    setLoading(true);

    try {
      const response = await fetch("https://fp2ro24shl.execute-api.us-west-2.amazonaws.com/score", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          score: score,
          name: user
        })
      });
      const resposne_data = await response.json();
      onSuccess(resposne_data.message, true);
    } catch (error) {
      console.error("Error saving score: ", error);
      onSuccess(error.message, false);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2" sx={{ color: "#ffffff" }}>
            Confirm To Save Your Score?
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2, color: "#ffffff"}}>
            Please enter the name you want your score to be saved under:
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <TextField id="outlined-basic" label="" placeholder='Enter Your Name' variant="outlined" value={user} onChange={(e) => setUser(e.target.value)} sx={{ mt: 2, '& .MuiOutlinedInput-root': { backgroundColor: '#ffffff', '& fieldset': { border: 'none' },}, '& .MuiOutlinedInput-input': { color: '#4b2e83',}, marginTop: {xs: 1, sm: 2, md: 3}}}/>
            <Button variant="contained" sx={{ mt: 2, marginTop: {xs: 1, sm: 2, md: 3}}} onClick={() => handleSave()} disabled={loading}>
              Confirm Save
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}

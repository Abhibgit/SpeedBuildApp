import React, { useState } from 'react';
import {
  Button,
  Modal,
  Box,
  Typography,
  Radio,
  RadioGroup,
  FormControlLabel
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 350,
  bgcolor: 'rgba(255, 0, 0, 1)',
  boxShadow: 24,
  p: 4,
  borderRadius: 3,
  color:'#F0F0F0',
};

export default function NextBeginButton() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleChange = (event) => {
    const value = event.target.value;
    setOpen(false); 
    navigate(value);
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
      <Typography sx={{color:"#F2F2F2"}} variant="h4" gutterBottom>
        Let’s Begin <br /> Your Journey
      </Typography>

      <Button
        variant="contained"
        onClick={() => setOpen(true)}
        sx={{
          minWidth: '48px',
          padding: '12px',
          borderRadius: '50%',
          background: 'rgba(255, 72, 0, 1)',
          color: 'white',
          '&:hover': {
            opacity: 0.9,
          },
        }}
      >
        <ArrowForwardIcon />
      </Button>

      <Modal
        open={open}
        onClose={() => setOpen(false)}
        BackdropProps={{
          sx: {
            backdropFilter: 'blur(6px)', 
            backgroundColor: 'rgba(222, 78, 0, 1)',
          },
        }}
      >
        <Box sx={{...style, backgroundColor:'rgba(228, 4, 4, 0.45)'}}>
          <Typography
            variant="h6"
            sx={{ textAlign: 'center', mb: 3, fontWeight: 'bold', textTransform: 'capitalize' }}
          >
            What would you like to do today:
          </Typography>

          <RadioGroup onChange={handleChange}>
            <FormControlLabel
              value="/HeatPumpCalculatorPage"
              control={<Radio />}
              label="I want to know why my costs are so high! how I can save money?"
              sx={{ textTransform: 'capitalize', mb: 3 }}
            />
            <FormControlLabel
              value="/NewEquipment"
              control={<Radio />}
              label="My equipments too old what should I replace with?"
              sx={{ textTransform: 'capitalize', mb: 3 }}
            />
           
          
          </RadioGroup>
        </Box>
      </Modal>
    </div>
  );
}

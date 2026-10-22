import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectHeatingAge() {
  const [heatage, setHeatAge] = React.useState('');

  const handleChange = (event) => {
    setHeatAge(event.target.value);
  };

  return (
    <div>
      <FormControl required sx={{ m: 1, minWidth: 250 }}>
        <InputLabel backgroundColor='#FFFFFF' id="demo-simple-select-required-label" >Equipment Age</InputLabel>
        <Select sx={{
          backgroundColor: 'white', // ✅ Make background white
        }}
          color='#ff0404ff'
          labelId="demo-simple-select-required-label"
          id="demo-simple-select-required"
          value={heatage}
          label="Equipment Age *"
          onChange={handleChange}
          
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4</MenuItem>
          <MenuItem value={5}>5</MenuItem>
          <MenuItem value={6}>6</MenuItem>
          <MenuItem value={7}>7</MenuItem>
          <MenuItem value={8}>8</MenuItem>
          <MenuItem value={9}>9</MenuItem>
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={11}>11</MenuItem>
          <MenuItem value={12}>12</MenuItem>
          <MenuItem value={13}>13</MenuItem>
          <MenuItem value={14}>14</MenuItem>
          <MenuItem value={15}>15</MenuItem>
          <MenuItem value={16}>16</MenuItem>
          <MenuItem value={17}>17</MenuItem>
          <MenuItem value={18}>18</MenuItem>
          <MenuItem value={19}>19</MenuItem>
          <MenuItem value={20}>20</MenuItem>
          
        </Select>
        <FormHelperText >Required</FormHelperText>
      </FormControl>
    </div>
  );
}

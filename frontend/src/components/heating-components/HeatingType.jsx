import * as React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const hequipnames = [
  'Oil Furnace',
  'BaseBoard Heaters',
  'Propane Furnace',
  'Gas Furnace',
  'Gas Boiler',
  'Propane Boiler',
  'Thermal Heat Pump (Ground Source)',
  'Heat Pump (Air)',
  'Portable Heaters',
  'Gas Fireplace',
  'Propane Fireplace',
];

export default function HeatingSelectCheckmarks({
  selectedHeating = [],
  setSelectedHeating,
}) {
  const handleChange = (event) => {
    const { value } = event.target;
    setSelectedHeating(Array.isArray(value) ? value : []);
  };

  return (
    <FormControl sx={{ m: 1, width: 250 }}>
      <InputLabel id="heating-equipment-label">Heating Equipment</InputLabel>
      <Select
        labelId="heating-equipment-label"
        id="heating-equipment-select"
        multiple
        value={Array.isArray(selectedHeating) ? selectedHeating : []}
        onChange={handleChange}
        input={<OutlinedInput label="Heating Equipment " />}
        renderValue={(selected) =>
          Array.isArray(selected) ? selected.join(', ') : ''
        }
        MenuProps={MenuProps}
        sx={{ backgroundColor: 'white' }}
      >
        {hequipnames.map((name) => (
          <MenuItem key={name} value={name}>
            <Checkbox checked={Array.isArray(selectedHeating) && selectedHeating.includes(name)} />
            <ListItemText primary={name} />
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

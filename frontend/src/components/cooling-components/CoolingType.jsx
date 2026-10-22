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

const cequipnames = [
  'WindowShakers',
  'Central AC',
  'Ceiling Fan',
  'Portable Ac',
  'No Ac',
  'Portable Fans',
  'Water Blowers',
  'Heat Pump (Air)',
  'Mini-Split',
];

export default function CoolingType({
  selectedEquipment = [],
  setSelectedEquipment,
}) {
  const handleChange = (e) => {
    const { value } = e.target;
    setSelectedEquipment(Array.isArray(value) ? value : []);
  };

  return (
    <FormControl sx={{ m: 1, width: 250 }}>
      <InputLabel id="demo-multiple-checkbox-label">Cooling Equipment</InputLabel>
      <Select
        labelId="demo-multiple-checkbox-label"
        id="demo-multiple-checkbox"
        multiple
        value={Array.isArray(selectedEquipment) ? selectedEquipment : []}
        onChange={handleChange}
        input={<OutlinedInput label="Cooling Equipment" />}
        renderValue={(selected) =>
          Array.isArray(selected) ? selected.join(', ') : ''
        }
        MenuProps={MenuProps}
        sx={{ backgroundColor: 'white' }}
      >
        {cequipnames.map((name) => (
          <MenuItem key={name} value={name}>
            <Checkbox
              checked={Array.isArray(selectedEquipment) && selectedEquipment.includes(name)}
            />
            <ListItemText primary={name} />
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

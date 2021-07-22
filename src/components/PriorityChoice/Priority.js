import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

export default function Priority() {
  return (
    <Autocomplete
      id="combo-box-demo"
      options={priorities}
      getOptionLabel={(option) => option.title}
      style={{ width: 120 }}
      renderInput={(params) => <TextField {...params} label="Priority" variant="outlined" />}
    />
  );
}

const priorities = [
  { title: 'High', value: 2 },
  { title: 'Meduim', value: 1 },
  { title: 'Low', value: 0 },
];
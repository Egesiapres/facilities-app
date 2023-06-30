import React, { useContext, useState } from 'react';
import { TextField, Typography } from '@mui/material';
import FacilitiesList from './facilitiesList';
import { TitleContext } from './titleContext';

function FacilitiesHome() {
  // default state: empty string
  const [inputBox, setInputBox] = useState('');
  // always convert input text to lower case
  const inputHandler = e => {
    const lowercase = e.target.value.toLowerCase();
    setInputBox(lowercase);
  };

  const title = useContext(TitleContext);

  return (
    <div className="App">
      <br />
      {title}
      <Typography variant="h2">Tutte</Typography>
      <br />
      <br />
      {/* search box */}
      <TextField
        id="outlined-basic"
        onChange={inputHandler}
        variant="outlined"
        label="Cerca struttura"
        placeholder="Es: Abbiategrasso"
      />

      <FacilitiesList input={inputBox} />
    </div>
  );
}

export default FacilitiesHome;

import React, { useState } from 'react';
import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';

export default function FormDialog({
  open,
  handleClose,
  selectedFacility,
  onChangedFacility
}) {
  // WRONG METHOD
  // problem: the selectedFacility value changes (check)
  // useEffect(): update the value that changes
  // useEffect(() => {
  //   setName(selectedFacility.name);
  //   setCity(selectedFacility.city);
  //   setId(selectedFacility.id)
  // }, [selectedFacility]);

  // uuid: value that is not going to change
  const uuid = selectedFacility.uuid;
  const [name, setName] = useState(selectedFacility.name);
  const [city, setCity] = useState(selectedFacility.city);
  const [id, setId] = useState(selectedFacility.id);

  // managing of the custom working of the saving button
  const inputNameHandler = e => {
    const inputName = e.target.value;
    setName(inputName);
  };
  const inputCityHandler = e => {
    const inputCity = e.target.value;
    setCity(inputCity);
  };
  const inputIdHandler = e => {
    const inputId = e.target.value;
    setId(inputId);
  };

  // IMPORTANT
  // to return back to the facilitiesList component the data
  // storing all the values needed by the parent component
  const handleSave = () => {
    const changedFacility = { uuid, name, city, id };
    onChangedFacility(changedFacility);
    handleClose();
  };

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Modifica dati</DialogTitle>

        <DialogContent>
          <DialogContentText>Inserisci i nuovi dati</DialogContentText>

          <TextField
            autoFocus
            margin="dense"
            label="Nome"
            fullWidth
            variant="standard"
            value={name}
            onChange={inputNameHandler}
          />
          <TextField
            autoFocus
            margin="dense"
            label="Città"
            fullWidth
            variant="standard"
            value={city}
            onChange={inputCityHandler}
          />
          <TextField
            autoFocus
            margin="dense"
            label="Id"
            fullWidth
            variant="standard"
            value={id}
            onChange={inputIdHandler}
          />
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose}>Annulla</Button>
          <Button onClick={handleSave}>Salva</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

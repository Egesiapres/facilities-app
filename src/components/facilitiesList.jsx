import React, { useState } from 'react';
import Facility from './facility.jsx';
import FormDialog from './formDialog.jsx';
import { LinearProgress, Alert } from '@mui/material';
import useModal from './useModal.jsx';
import { getFacilities } from '../api.js';
import useApi from './useApi.jsx';

function FacilitiesList({ input }) {
  const facilities = useApi(getFacilities);
  
  const [selectedFacility, setSelectedFacility] = useState([]);
  
  const modal = useModal();
  // const [open, setOpen] = useState(false);
  // custom hook that does the same work
  // const { open, handleOpen, handleClose } = useModal();
  // shorter syntax

  // state that allow to pass the facility clicked to formDialog

  // states that manages the presentation of the dialog form

  // logic that talks with the props in App.jsx
  // filter(): returns only the elements that satisfy the conditions specified
  const filteredFacilities = facilities.state.data.filter(filteredFacility => {
    if (input === '') {
      return filteredFacility;
    } else {
      return filteredFacility.name.toLowerCase().includes(input);
    }
  });

  const onClickModify = facility => {
    setSelectedFacility(facility);
    console.log(facility);
  };

  // data passing from child to parent
  // map: executes a changing when a condition is satisfied
  const onChangedFacility = changedFacility => {
    const newFacilities = facilities.state.data.map(facility =>
      facility.uuid === changedFacility.uuid ? changedFacility : facility
    );
    // reassign f.s.d in nF
    // facilities.setData(newFacilities);
    facilities.state.data = newFacilities;
  };

  return (
    <div>
      <br />
      <br />
      {facilities.state.loading ? (
        <LinearProgress variant="determinate" value={100} />
      ) : facilities.state.error ? (
        <Alert variant="outlined" severity="error">
          Errore: {facilities.state.error}!
        </Alert>
      ) : (
        filteredFacilities.map(facility => (
          <Facility
            facility={facility}
            key={facility.uuid}
            handleOpen={modal.handleOpen}
            onClickModify={onClickModify}
          />
        ))
      )}

      {/* conditionally render formDialog */}
      {modal.open === true ? (
        <FormDialog
          open={modal.open}
          handleClose={modal.handleClose}
          selectedFacility={selectedFacility}
          onChangedFacility={onChangedFacility}
        />
      ) : null}
    </div>
  );
}

export default FacilitiesList;

// PROBLEMI
// 1. console.log(): stampa due volte gli oggetti presi grazie al fetch
// S1. Eliminare i tag <React.StrictMode> in index.js
// 2. I child dentro al return() devono avere key diversi (quando aggiungo altri tag html)
// S2. Dare la key al tag padre, nel nostro caso il <div>

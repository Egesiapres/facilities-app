import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar.jsx';
import FacilitiesHome from './components/facilititesHome.jsx';
import FacilitiesDetail from './components/facilitiesDetail';

import { TitleContext } from './components/titleContext';
import { Typography } from '@mui/material';

function App() {
  const title = <Typography variant="body1">Strutture mediche</Typography>;

  return (
    <div className="App">
      <Navbar />

      <TitleContext.Provider value={title}>
        <Routes>
          <Route path="/:uuid" element={<FacilitiesDetail />} />

          <Route path="/" element={<FacilitiesHome />} />
        </Routes>
      </TitleContext.Provider>
    </div>
  );
}

export default App;

// :uuid: param that will be recalled in FacilityDetail
// YES router, NO conditional rendering (and props)
// FacilitiesDetail: first because in facility,
// the button takes you in the first element with /

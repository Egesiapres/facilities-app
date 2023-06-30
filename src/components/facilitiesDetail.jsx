import { LinearProgress, Alert } from '@mui/material';
import FacilityDetail from './facilityDetail';
import { getFacility, } from '../api.js';
import { useParams } from 'react-router-dom';
import useApi from './useApi';

function FacilitiesDetail() {
  const params = useParams();
  // () => allows to execute after, not immediately
  const facility = useApi(() => getFacility(params.uuid))

  return (
    <div>
      {facility.state.loading ? (
        <LinearProgress variant="determinate" value={100} />
      ) : facility.state.error ? (
        <Alert variant="outlined" severity="error">
          Errore: {facility.state.error}!
        </Alert>
      ) : (
        <FacilityDetail data={facility.state.data} />
      )}
    </div>
  );
}

export default FacilitiesDetail;

// new api call due to the additional details of the new api
// id I use the router, I don't have to pass props
// (no state prop to know if the window has been opened)

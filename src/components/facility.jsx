import '../App.css';
import { Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

// props importing using the destructoring
// (there's no props.)
function Facility({ facility, onClickModify, handleOpen }) {
  // instead of creating a new variable
  // it's sufficient to pass facility (with all the past data)
  // pass the variable back to the parent component
  // back to facilitiesList.jsx
  const handleClickModify = () => {
    handleOpen();
    onClickModify(facility);
  };

  return (
    <div>
      <Typography variant="h6">{facility.name}</Typography>
      <Typography variant="body1">{facility.city}</Typography>
      <Typography variant="body2">{facility.id}</Typography>

      <Button className="btn" variant="contained" size="medium">
        <Link to={`/${facility.uuid}`}>Apri</Link>
      </Button>
      {/* the button sends the values of the facility clicked */}
      <Button
        className="btn"
        variant="outlined"
        size="medium"
        onClick={handleClickModify}
      >
        Modifica
      </Button>
    </div>
  );
}

export default Facility;

// NOTES
// The state is automatically passed from the parent to the child component
// It's not necessary to use useState() and useEffect()

import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="navbar">
      <Button>
        <Link to="/">Home</Link>
      </Button>
    </div>
  );
}

export default Navbar;

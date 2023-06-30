import { Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { TitleContext } from './titleContext';
// import { format } from 'date-fns';

function FacilityDetail({ data }) {
  const title = useContext(TitleContext);

  const creationDate = new Date(data.created_at);
  const updateDate = new Date(data.updated_at);
  // const formattedCreationDate = format(creationDate, 'MM/dd/yyyy');
  // const formattedUpdateDate = format(updateDate, 'MM/dd/yyyy');

  return (
    <div>
      <br />
      {title}
      <Typography variant="h2">Dettaglio</Typography>
      <br />
      <br />
      <br />
      <br />

      <Typography variant="h4">Nome: {data.name}</Typography>
      <Typography variant="h6">Telefono: {data.phone}</Typography>
      <Typography variant="body1">Città: {data.city}</Typography>
      <Typography variant="body1">
        Indirizzo: {data.address}, {data.street_number}, {data.district} (
        {data.country})
      </Typography>
      <Typography variant="body1">CAP: {data.zip_code}</Typography>
      <Typography variant="body1">uuid: {data.uuid}</Typography>
      <Typography variant="body2">
        Data di creazione: {`${creationDate}`}
      </Typography>
      <Typography variant="body2">
        Ultimo aggiornamento: {`${updateDate}`}
      </Typography>

      <Button className="btn" variant="contained" size="medium">
        <Link to="/">Indietro</Link>
      </Button>
    </div>
  );
}

export default FacilityDetail;

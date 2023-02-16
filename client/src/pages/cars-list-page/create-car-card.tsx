import { Button } from '@mui/material';
import routes from 'navigation/routes';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const CreateCarCard = () => {
  const navigate = useNavigate();
  return (
    <Button sx={{ mb: 10 }} color="success" variant="contained" onClick={() => navigate(routes.CarCreatePage)}>Create new car</Button>
  );
};

export default CreateCarCard;

import React from 'react';
import { Typography } from '@mui/material';
import TripForm from '../components/TripForm';

function AddTrip() {
  return (
    <div className="container3">
      <Typography variant="h3" gutterBottom>
        Add Trip
      </Typography>
      <TripForm />
    </div>
  );
}

export default AddTrip;

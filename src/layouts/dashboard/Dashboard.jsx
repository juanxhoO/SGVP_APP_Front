import * as React from 'react';
import { VehicleDash } from './VehicleDash';
import { AreaDash } from './AreaDash';
import { LineDash } from './LineDash';
import { Grid, Paper } from '@mui/material';

export default function MainDashboard() {
  return (

    <Grid container sx={{ display: 'flex', alignItems: 'center', p: 4 }}>
      <Grid item xs={12} md={6}>
        <Paper sx={{p:2}}>
          <VehicleDash />
        </Paper>
      </Grid>
      <Grid item xs={12} md={6}>
        <Paper sx={{p:2}}>
          <AreaDash />

        </Paper>
      </Grid>
      <Grid item xs={12} md={12}>

        <Paper sx={{p:2}}>
          <LineDash />
        </Paper>
      </Grid>
      {/* <Grid item xs={12} md={6}>
        <Paper>
          <DonutDash />
        </Paper>
      </Grid> */}
    </Grid>
  );
}
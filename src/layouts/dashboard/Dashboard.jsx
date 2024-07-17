import * as React from 'react';
import Box from '@mui/material/Box';
import { VehicleDash } from './VehicleDash';
import { AreaDash } from './AreaDash';
import { LineDash } from './LineDash';
import { DonutDash } from './DonutDash';
import { Grid, Paper } from '@mui/material';

export default function MainDashboard() {
  return (
    <Box>
      <Grid container sx={{ display: 'flex', alignItems: 'center', p: 4 }}>

        <Grid item xs={12} md={6}>
          <Paper>
            <VehicleDash />
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper>
            <AreaDash />

          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>

          <Paper>
            <LineDash />

          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper>
            <DonutDash />

          </Paper>
        </Grid>


      </Grid>
    </Box>
  );
}
import * as React from 'react';
import { styled, createTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { VehicleDash } from './VehicleDash';
import { PieDash } from './PieDash';
import { RadarDash } from './RadarDash';
import { AreaDash } from './AreaDash';
import { LineDash } from './LineDash';
import { DonutDash } from './DonutDash';
import { Grid, Paper } from '@mui/material';


// TODO remove, this demo shouldn't need to reset the theme.

export default function MainDashboard() {
  return (
    <Box

    >


      <Grid container sx={{ display: 'flex', alignItems: 'center', p: 4 }}>
        <Grid item xs={4}>

          <Paper>
            <RadarDash />

          </Paper>
        </Grid>
        <Grid item xs={4}>


          <Paper>
            <PieDash />

          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper>
            <VehicleDash />

          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper>
            <AreaDash />

          </Paper>
        </Grid>
        <Grid item xs={4}>

          <Paper>
            <LineDash />

          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper>
            <DonutDash />

          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
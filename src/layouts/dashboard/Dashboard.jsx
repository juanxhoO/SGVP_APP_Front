import * as React from 'react';
import { styled, createTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { VehicleDash } from './VehicleDash';
import { PieDash } from './PieDash';
import { AreaDash } from './AreaDash';
import { LineDash } from './LineDash';
import { DonutDash } from './DonutDash';
import { Grid, Paper, Typography } from '@mui/material';

export default function MainDashboard() {
  return (
    <Box>
      <Grid container sx={{ display: 'flex', alignItems: 'center', p: 4 }}>
        <Grid item xs={4}>
          <Paper>
            sdsds
            <Typography>Mantenimientos</Typography>
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
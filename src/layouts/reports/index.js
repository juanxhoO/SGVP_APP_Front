import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CustomizedTables from '../components/DataTable/Table';


// TODO remove, this demo shouldn't need to reset the theme.

export default function Reports() {

    return (
        <Container component="main">
            <CustomizedTables></CustomizedTables>
            <Box sx={{justifyContent:"end", display:"flex"}}>
                <Button size="large" variant="contained">Crear Reporte</Button>
            </Box>
        </Container>
    );
}
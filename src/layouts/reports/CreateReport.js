import * as React from 'react';

import Container from '@mui/material/Container';
import { Paper, Grid, Typography, Stack, TextField, Button } from '@mui/material';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useState } from 'react';
// TODO remove, this demo shouldn't need to reset the theme.
import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import DropFile from '../components/DropFile';


export default function CreateReport() {

    const [value, setValue] = useState('');

    return (
        <Grid container>
            <Grid item xs={6}
                sx={{
                    mt: 4,
                    mb: 8
                }}
            >
                <Paper elevation={5} sx={{ p: 5 }}>
                    <ReactQuill theme="snow" value={value} onChange={setValue} />
                    <Stack direction="column"
                        sx={{
                            padding: '30px',
                            marginTop: 8,
                        }} component="form">
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <Typography sx={{ fontWeight: 'bold' }}>Apellidos</Typography>
                                <TextField
                                    fullWidth
                                    sx={{ minWidth: "400px" }}
                                    margin="normal"
                                    required
                                    name="email"
                                    autoComplete="email"
                                    autoFocusrequired
                                    id="outlined-required"
                                    label="Required"
                                    defaultValue="Hello World"
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <Typography sx={{ fontWeight: 'bold' }}>correo</Typography>
                                <TextField
                                    fullWidth
                                    margin="normal"
                                    required
                                    name="email"
                                    autoComplete="email"
                                    autoFocusrequired
                                    id="outlined-required"
                                    label="Required"
                                    defaultValue="Hello World"
                                />
                            </Grid>


                            <Grid item xs={12}>
                                <Typography sx={{ fontWeight: 'bold' }}>Telefono</Typography>
                                <TextField
                                    fullWidth
                                    margin="normal"
                                    required
                                    name="email"
                                    autoComplete="email"
                                    autoFocusrequired
                                    id="outlined-required"
                                    label="Required"
                                    defaultValue="Hello World"
                                />
                            </Grid>


                            <Grid item xs={12} >
                                <Typography sx={{ fontWeight: 'bold' }}>Tipo de Sangre:</Typography>
                                <TextField
                                    fullWidth
                                    margin="normal"
                                    required
                                    name="email"
                                    autoComplete="email"
                                    autoFocusrequired
                                    id="outlined-required"
                                    label="Required"
                                    defaultValue="Hello World"
                                />
                            </Grid>
                        </Grid>
                    </Stack>

                </Paper>
            </Grid>
            <Grid item
                xs={6}
                sx={{
                    mt: 8,
                    mb: 8
                }}
            >
                <Paper elevation={5} sx={{ p: 5 }}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DemoContainer
                            components={[
                                'DatePicker',
                                'MobileDatePicker',
                                'DesktopDatePicker',
                                'StaticDatePicker',
                            ]}
                        >
                            <DemoItem label="Desktop variant">
                                <DesktopDatePicker defaultValue={dayjs('2022-04-17')} />
                            </DemoItem>
                            <DemoItem label="Mobile variant">
                                <MobileDatePicker defaultValue={dayjs('2022-04-17')} />
                            </DemoItem>
                            <DemoItem label="Responsive variant">
                                <DatePicker defaultValue={dayjs('2022-04-17')} />
                            </DemoItem>
                            <DemoItem label="Static variant">
                                <StaticDatePicker defaultValue={dayjs('2022-04-17')} />
                            </DemoItem>
                        </DemoContainer>
                    </LocalizationProvider>
                    <DropFile/>
                </Paper>
                <Button variant="contained" size="large">Generar Reporte</Button>
            </Grid>


        </Grid>

    );
}
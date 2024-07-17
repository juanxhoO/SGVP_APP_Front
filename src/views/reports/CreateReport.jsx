import * as React from 'react';
import { Paper, Select, MenuItem, Grid, Typography, Box, Stack, TextField, Button, Card, CardContent } from '@mui/material';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useState } from 'react';
// TODO remove, this demo shouldn't need to reset the theme.
import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import DropFile from '../../components/DropFile';
import { useForm } from 'react-hook-form'
import axios from 'axios';
export default function CreateReport() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const onSubmit = async (data) => {
        console.log("sdsd")
        const response = await axios.post("http://localhost:3000/v1/reports", data)
    }

    const [value, setValue] = useState('');
    return (
        <Grid
            onSubmit={handleSubmit(onSubmit)}
            component="form" sx={{ p: 2 }} container spacing={2}>
            <Grid item xs={12}
                md={6}
                sx={{
                    mt: 4,
                    mb: 8
                }}
            >
                <Paper elevation={5} sx={{ p: 5 }}>

                    <Typography variant='h4'>
                        Crear Reporte
                    </Typography>

                    <ReactQuill style={{height:"250px"}} theme="snow" value={value} onChange={setValue} />
                    <Stack direction="column"

                        sx={{
                            padding: '30px',
                            marginTop: 8,
                        }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <Typography sx={{ fontWeight: 'bold' }}>Usuario</Typography>
                                <TextField
                                    {...register('name', { required: "Nombres Requerido" })}
                                    fullWidth
                                    margin="normal"
                                    name="name"
                                    autoComplete="email"
                                    autoFocusrequired
                                    id="name"
                                    label="Required"

                                />
                            </Grid>

                            <Grid item xs={12}>
                                <Typography sx={{ fontWeight: 'bold' }}>correo</Typography>
                                <TextField
                                    {...register('email', { required: "Nombres Requerido" })}
                                    fullWidth
                                    margin="normal"
                                    required
                                    name="email"
                                    autoComplete="email"
                                    autoFocusrequired
                                    id="email"
                                    label="Required"

                                />
                            </Grid>

                            <Grid item xs={12}>
                                <Typography sx={{ fontWeight: 'bold' }}>Seleccionar Vehiculo</Typography>
                                <Select
                                    {...register('rank', { required: "Rol  Requerida" })}
                                    id="rank"
                                    name="rank"
                                    fullWidth
                                >
                                        <MenuItem value="dssd">dsd</MenuItem>
                                </Select>   
                            </Grid>
                        </Grid>
                    </Stack>

                </Paper>
            </Grid>
            <Grid item
                xs={12}
                md={6}
                sx={{
                    mt: 4,
                    mb: 8
                }}
            >
                <Paper elevation={5} sx={{ p: 5 }}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DemoContainer
                            components={[
                                'DatePicker'
                            ]}
                        >
                            <DemoItem label="Fecha de Incidencia">
                                <DatePicker defaultValue={dayjs('2022-04-17')} />
                            </DemoItem>
                        </DemoContainer>
                    </LocalizationProvider>

                    <Card>
                        <CardContent>
                            <Typography gutterBottom variant="h6" component="div">
                                Adjuntar Archivos
                            </Typography>
                            <DropFile />

                        </CardContent>
                    </Card>
                    <Box>
                        <Button type="submit" variant="contained" size="large">Generar Reporte</Button>
                    </Box>
                </Paper>
            </Grid>
        </Grid>
    );
}
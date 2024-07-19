import * as React from 'react';
import { Paper, Select, MenuItem, Grid, Typography, Box, Stack, TextField, Button, Card, CardContent } from '@mui/material';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
// TODO remove, this demo shouldn't need to reset the theme.
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import DropFile from '../../components/DropFile';
import { useForm, Controller } from 'react-hook-form'
import axios from 'axios';
import useAuthStore from '../../store/useAuthStore';
import useDataFetcher from '../../hooks/useDataFetcher';

export default function CreateReport() {
    const userId = useAuthStore(state => state.userId)
    const { data: userInfo, isLoading, isError } = useDataFetcher("http://localhost:3000/v1/users/" + userId);
    console.log(userInfo)
    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm()

    const onSubmit = async (data) => {
        console.log("dsds")
        const response = await axios.post("http://localhost:3000/v1/reports", data)
    }

    return (
        <Grid
            onSubmit={handleSubmit(onSubmit)}
            component="form"
            sx={{ p: 2 }} container spacing={2}>
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

                    <Controller
                        name="content"
                        control={control}
                        render={({ field }) => (
                            <ReactQuill
                                {...field}
                                style={{ height: "250px" }}
                                theme="snow"
                            />
                        )}
                    />

                    <Stack direction="column"

                        sx={{
                            padding: '30px',
                            marginTop: 8,
                        }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <Typography sx={{ fontWeight: 'bold' }}>Usuario</Typography>
                               
                                <TextField
                                Disabled
                                value={userInfo?.name}
                                >
                                </TextField>
                                <TextField
                                    {...register('userId', { required: "Nombres Requerido" })}
                                    fullWidth
                                    margin="normal"
                                    name="userId"
                                    autoComplete="email"
                                    autoFocusrequired
                                    id="userId"
                                    label="Required"

                                />
                            </Grid>

                            <Grid item xs={12}>
                                <Typography sx={{ fontWeight: 'bold' }}>Seleccionar Vehiculo</Typography>
                                <Select
                                    {...register('vehicleId', { required: "Rol  Requerida" })}
                                    id="vehicleId"
                                    name="vehicleId"
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

                        <Controller
                            name="date"
                            control={control}
                            render={({ field: { onChange, value } }) => (
                                <DatePicker
                                    fullWidth
                                    value={value ? dayjs(value) : null} // Ensure value is only passed as dayjs object if not null   
                                    onChange={(newValue) => onChange(newValue ? dayjs(newValue) : null)}
                                    renderInput={(params) => <TextField {...params} />}
                                />
                            )}
                        />
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
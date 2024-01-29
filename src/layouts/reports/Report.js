import * as React from 'react';

import { Box, Paper, Grid, Typography, CardMedia, CardContent, Button, CardActions, Card, TextField, Stack } from '@mui/material';
import ReactQuill from 'react-quill';
import { useState } from 'react';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileCsv } from '@fortawesome/free-solid-svg-icons'
import dayjs from 'dayjs';
import { DatePicker } from '@mui/x-date-pickers';
import { LocalizationProvider } from '@mui/x-date-pickers';
import DropFile from '../components/DropFile';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { DateCalendar } from '@mui/x-date-pickers';

// TODO remove, this demo shouldn't need to reset the theme.

export default function Report() {
    const [value, setValue] = useState('');

    const report = {
        "id": "a1b2c3d4-e5f6-4g7h-8i9j-0k1l2m3n4o5p",
        "name": "Monthly Report",
        "files": "monthly_report.pdf",
        "images": "report_images.zip",
        "content": "This is the summary of the monthly activities.",
        "userId": 123,
        "user": {
            "id": 123,
            "name": "John Doe",
            "email": "john.doe@example.com"
        },
        "date": "2024-01-28T12:30:00Z",
        "createdAt": "2024-01-28T15:45:00Z"
    }

    const user = {
        "id":"123f123",
        "email": "example@email.com",
        "name": "John",
        "lastname": "Doe",
        "phone": "1234567890",
        "idCard": "AB123456",
        "password": "securePassword",
        "id_card": "987654321",
        "birthday": "1990-01-01T00:00:00Z",
        "bloodType": "O+",
        "vehicle": [],
        "role": "USER",
        "city": "Quito",
        "isEmailVerified": false
    }

    return (
        <Box>
            <Grid container spacing={2}>
                <Grid item sm={12} md={8}>
                    <Paper elevation={5} sx={{ p: 5 }}>
                        <Typography variant='h4'>{report.name}</Typography>
                        <Card>
                            <CardContent>
                                <Typography gutterBottom variant="h6" component="div">
                                    Informe                                </Typography>



                                <Typography>
                                    **Reporte de Accidente**

                                    Fecha y Hora del Incidente: 2024-01-28 14:45

                                    **Detalles del Incidente:**

                                    Ubicación: Calle Principal, Intersección de Avenida Central
                                    Ciudad: Ciudad Ejemplo

                                    **Descripción del Incidente:**

                                    A las 14:45 del día 28 de enero de 2024, la unidad de policía recibió un informe sobre un accidente de tráfico en la intersección de la Calle Principal y la Avenida Central.

                                    Al llegar al lugar, se observó una colisión entre dos vehículos: un sedán de color azul (matrícula ABC-123) y una camioneta SUV roja (matrícula XYZ-789). Según los testimonios de los testigos, el sedán no respetó la señal de alto, lo que resultó en la colisión con la camioneta SUV que tenía el derecho de paso.

                                    **Condiciones de la Escena:**

                                    - No se reportan lesiones graves.
                                    - Ambos conductores están presentes y cooperando con las autoridades.
                                    - No se detecta la presencia de sustancias intoxicantes en ninguno de los conductores.

                                    **Acciones Tomadas:**

                                    1. Se aseguró la escena y se proporcionó asistencia a los involucrados.
                                    2. Se solicitó una ambulancia para una evaluación médica de precaución.
                                    3. Se recopilaron declaraciones de los testigos y de los conductores involucrados.
                                    4. Se realizaron pruebas de alcoholemia a ambos conductores, arrojando resultados negativos.
                                    5. Se emitió una citación al conductor del sedán por no respetar la señal de alto.

                                    **Información de Contacto:**

                                    Oficial a Cargo: Oficial García
                                    Número de Placa del Vehículo Policial: PD-12345
                                    Número de Contacto: 555-1234

                                    Este reporte es proporcionado con el propósito de documentar el incidente y las acciones tomadas por las autoridades. Cualquier persona involucrada puede solicitar una copia oficial del informe en la comisaría local.

                                </Typography>
                            </CardContent>
                        </Card>
                        <Box direction="row">
                            <Card>
                                <CardMedia
                                    component="img"
                                    alt="green iguana"
                                    height="140"
                                    image="/static/images/cards/contemplative-reptile.jpg"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h6" component="div">
                                        Lizard
                                    </Typography>
                                </CardContent>
                            </Card>
                            <Card >
                                <CardMedia
                                    component="img"
                                    alt="green iguana"
                                    height="140"
                                    image="/static/images/cards/contemplative-reptile.jpg"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h6" component="div">
                                        Lizard
                                    </Typography>
                                </CardContent>
                            </Card>
                            <Card >
                                <CardMedia
                                    component="img"
                                    alt="green iguana"
                                    height="140"
                                    image="/static/images/cards/contemplative-reptile.jpg"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h6" component="div">
                                        Lizard
                                    </Typography>
                                </CardContent>
                            </Card>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DemoContainer components={['DateCalendar', 'DateCalendar']}>
                                    
                                    <Typography>
                                        Fecha de Incidente
                                    </Typography>
                                    <DemoItem>
                                        <DateCalendar defaultValue={dayjs('2022-04-17')} readOnly />
                                    </DemoItem>
                                </DemoContainer>
                            </LocalizationProvider>
                        </Box>
                    </Paper>
                </Grid>

                <Grid item sm={12} md={4}>
                    <Paper>
                        <Stack direction="column"
                            alignItems="center"
                            sx={{
                                padding: '30px',
                            }} component="form">
                            <Grid container spacing={2}>


                            <Typography variant='h4'>Reportante: {user.id}</Typography>
                                <Grid item xs={12}>
                                    <Typography sx={{ fontWeight: 'bold' }}>Nombre</Typography>
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
                                    <Typography sx={{ fontWeight: 'bold' }}>Apellido</Typography>
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


                                {/* <FontAwesomeIcon icon={faFileCsv} /> */}
                                <Stack direction="row" justifyContent="space-around" >
                                    <Button size="large" variant='contained'>Editar Reporte</Button>
                                    <Button size="large" variant='contained' color="error">Borrar Reporte</Button>

                                </Stack>
                            </Grid>
                        </Stack>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    );
}
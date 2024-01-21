import * as React from 'react';

import Container from '@mui/material/Container';
import { Box, Paper, Grid, Typography, CardMedia, CardContent, Button, CardActions, Card, TextField, Stack } from '@mui/material';
import ReactQuill from 'react-quill';
import { useState } from 'react';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileCsv } from '@fortawesome/free-solid-svg-icons'

import DropFile from '../components/DropFile';
// TODO remove, this demo shouldn't need to reset the theme.

export default function Report() {
    const [value, setValue] = useState('');

    return (
        <Box>
            <Grid container spacing={2}>
                <Grid item sm={12} md={8}>
                    <Paper elevation={5} sx={{ p: 5 }}>
                        <ReactQuill theme="snow" value={value} onChange={setValue} />
                        <DropFile />
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
                                <Grid item xs={12}>
                                    <Typography sx={{ fontWeight: 'bold' }}>Apellidos</Typography>
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
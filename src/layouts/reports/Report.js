import * as React from 'react';

import Container from '@mui/material/Container';
import { Box, Paper, Grid, Typography, CardMedia, CardContent, Button, CardActions, Card, TextField, Stack } from '@mui/material';
import ReactQuill from 'react-quill';
import { useState } from 'react';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
// TODO remove, this demo shouldn't need to reset the theme.

export default function Report() {
    const [value, setValue] = useState('');

    return (
        <Box
            sx={{
                mt: 8,
                display: 'flex',
                mb: 8
            }}
        >


            <Grid container>


                <Grid item xs={8}>
                    <Paper elevation={5} sx={{ p: 5 }}>

                        <ReactQuill theme="snow" value={value} onChange={setValue} />
                        <Card sx={{ maxWidth: 345 }}>
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
                    </Paper>
                </Grid>

                <Grid item xs={4}>
                    <Paper>
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

            </Grid>



        </Box>
    );
}
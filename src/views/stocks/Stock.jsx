import * as React from 'react';
import { Grid, Paper, Card, CardMedia, Typography, CardContent, Button, TextField, Stack } from '@mui/material';

// TODO remove, this demo shouldn't need to reset the theme.

export default function Stock() {

    const stock = {
        "id": "d3a4c1e9-5a2b-4c8f-bb6d-92a3e8c7f1a1",
        "name": "Juego de Pastillas de Freno",
        "image": "imagen_pastillas_freno.jpg",
        "sku": "BP-12345",
        "stock": 50,
        "price": 29.99,
        "condition": "Nuevo",
        "brand": "Piezas ABC",
        "model": "XYZ-200"
    }

    return (
        <Grid container spacing={2}>
            <Grid item sx={{alignItems:"center",justifyContent:"center", display:"flex"}} xs={12}>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            sx={{ height: 140 }}
                            image="/static/images/cards/contemplative-reptile.jpg"
                            title="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {stock.name}
                            </Typography>
                        </CardContent>
                    </Card>
                
            </Grid>

            <Grid item xs={12} md={12}>
                <Paper>
                    <Stack direction="column"
                        sx={{
                            padding: '30px',
                        }} component="form">
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={6}>
                                <Typography sx={{ fontWeight: 'bold' }}>SKU</Typography>
                                <TextField
                                    fullWidth
                                    margin="normal"
                                    required
                                    name="email"
                                    autoComplete="email"
                                    autoFocusrequired
                                    id="outlined-required"
                                    label="Required"
                                    value={stock.sku}
                                />
                            </Grid>

                            <Grid item xs={12} md={6}>
                                <Typography sx={{ fontWeight: 'bold' }}>Tipo de Repuesto:</Typography>
                                <TextField
                                    fullWidth
                                    margin="normal"
                                    required
                                    name="email"
                                    autoComplete="email"
                                    autoFocusrequired
                                    id="outlined-required"
                                    label="Required"
                                    value={stock.name}
                                />
                            </Grid>


                            <Grid item xs={12} md={6}>
                                <Typography sx={{ fontWeight: 'bold' }}>Cantidad en Stock:</Typography>
                                <TextField
                                    fullWidth
                                    margin="normal"
                                    required
                                    name="email"
                                    autoComplete="email"
                                    autoFocusrequired
                                    id="outlined-required"
                                    label="Required"
                                    value={stock.stock}
                                />
                            </Grid>

                            <Grid item xs={12} md={6}>
                                <Typography sx={{ fontWeight: 'bold' }}>Marca del Repuesto:</Typography>
                                <TextField
                                    fullWidth
                                    margin="normal"
                                    required
                                    name="email"
                                    autoComplete="email"
                                    autoFocusrequired
                                    id="outlined-required"
                                    label="Required"
                                    value={stock.brand}
                                />
                            </Grid>

                            <Grid item xs={12} md={6} >
                                <Typography sx={{ fontWeight: 'bold' }}>Modelo del Vehículo:</Typography>
                                <TextField
                                    fullWidth
                                    margin="normal"
                                    required
                                    name="email"
                                    autoComplete="email"
                                    autoFocusrequired
                                    id="outlined-required"
                                    label="Required"
                                    value={stock.model}
                                />
                            </Grid>
                            <Grid item xs={12} md={6} >
                                <Typography sx={{ fontWeight: 'bold' }}>Precio</Typography>
                                <TextField
                                    fullWidth
                                    margin="normal"
                                    required
                                    name="email"
                                    autoComplete="email"
                                    autoFocusrequired
                                    id="outlined-required"
                                    label="Required"
                                    value={stock.price}
                                />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Typography sx={{ fontWeight: 'bold' }}>Condición del Repuesto:</Typography>
                                <TextField
                                    fullWidth
                                    margin="normal"
                                    required
                                    name="email"
                                    autoComplete="email"
                                    autoFocusrequired
                                    id="outlined-required"
                                    label="Required"
                                    value={stock.condition}
                                />
                            </Grid>
                        </Grid>
                        <Stack direction="row" justifyContent="space-around" >
                            <Button size="large" variant='contained'>Editar Repuesto</Button>
                            <Button size="large" variant='contained' color="error">Borrar Repuesto</Button>
                        </Stack>
                    </Stack>
                </Paper>
            </Grid>
        </Grid>
    );
}
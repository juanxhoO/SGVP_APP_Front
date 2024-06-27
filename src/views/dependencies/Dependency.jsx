import * as React from 'react';
import { Grid, Typography, Card, CardMedia, CardContent, Paper } from '@mui/material';


// TODO remove, this demo shouldn't need to reset the theme.

export default function Dependency() {

    return (
        <Grid p={4} container spacing={2}>
            <Grid sx={{ display: "flex", justifyContent: "center" }} item xs={12}>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image="/static/images/cards/contemplative-reptile.jpg"
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Vilcabamba
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>

            <Grid item xs={12}>
                <Paper>
                    <Typography>
                        Nombre:Vilcabamba1
                    </Typography>
                    <Typography>
                        Codigo: 11D01C
                        01S01
                    </Typography>

                    <Typography>
                        Parroquia:VILCABAM
                        BA
                        (VICTORIA
                        )
                    </Typography>

                    <Typography>
                        Circuito Principal: Vilcabamba
                    </Typography>

                    <Typography>
                        Provincia: Loja
                    </Typography>

                    <Typography>
                        Distrito: Loja
                    </Typography>
                </Paper>
            </Grid>
        </Grid>

    );
}
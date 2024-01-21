import * as React from 'react';
import Container from '@mui/material/Container';
import { Stack, Grid, Typography, TextField, Button, Box, Card, CardMedia, CardContent } from '@mui/material';


// TODO remove, this demo shouldn't need to reset the theme.

export default function Dependency() {

    return (
        <Grid p={4} container spacing={2}>
            <Grid sx={{display:"flex", justifyContent:"center"}}  item xs={12}>
                <Paper  >
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            sx={{ height: 140 }}
                            image="/static/images/cards/contemplative-reptile.jpg"
                            title="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Lizard
                            </Typography>
                        </CardContent>
                    </Card>
                </Paper>
            </Grid>

            <Grid item xs={12}>
                <Paper>
                    dsd
                </Paper>
            </Grid>
        </Grid>

    );
}
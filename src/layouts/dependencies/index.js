import * as React from 'react';

import { Grid, Typography, Paper, MenuList, MenuItem, Card, CardContent } from '@mui/material';
// TODO remove, this demo shouldn't need to reset the theme.

export default function Dependencies() {

    const Parroquias = ["VILCABAMBA(VICTORIA)", "QUINARA", "MALACATOS(VALLADOLID)", "CHUQUIRIBAMBA", "TAQUIL(MIGUELRIOFRIO", "Loja", "EL TAMBO", "CATAMAYO (LATOMA)", "ZAMBI", "SANPEDRODE LABENDITA", "CHAGUARPAMBA"];

    return (
        <Grid p={4} container spacing={2}>
            <Grid item xs={4}>

                <Paper>
                    <MenuList>
                        {Parroquias.map((parroquia, index) => (
                            <MenuItem sx={{padding:'10px'}}>
                                <Typography variant="body2" color="text.secondary">
                                    {parroquia}
                                </Typography>
                            </MenuItem>

                        ))}
                    </MenuList>
                </Paper>
            </Grid>

            <Grid item xs={8}>
                <Paper>
                    <Card sx={{ minWidth: 275 }}>
                        <CardContent>
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                Word of the Day
                            </Typography>
                            <Typography variant="h5" component="div">
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                adjective
                            </Typography>
                            <Typography variant="body2">
                                well meaning and kindly.
                                <br />
                                {'"a benevolent smile"'}
                            </Typography>
                        </CardContent>
                    </Card>
                </Paper>
            </Grid>
        </Grid>

    );
}
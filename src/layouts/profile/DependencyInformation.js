import * as React from 'react';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Card, CardActions, CardContent, CardMedia } from '@mui/material';
import { Link } from 'react-router-dom';
// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function DependencyInormation() {
    return (
        <Grid sx={{ p: 5 }} container spacing={3} alignItems="center">
            <Grid item>
                <Box height="100%" mt={0.5} lineHeight={1}>
                    <Typography variant="h5" fontWeight="medium">
                        Dependency                 </Typography>
                    <Typography variant="button" color="text" fontWeight="regular">
                        CEO / Co-Founder
                    </Typography>
                    <Box>
                        <Card>
                            <CardMedia
                                sx={{ height: 140 }}
                                image="/static/images/cards/contemplative-reptile.jpg"
                                title="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Mazda x1
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                    species, ranging across all continents except Antarctica
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button component={Link} to="/dependencies/1" variant="contained" size="small">Ver Dependecia</Button>
                            </CardActions>
                        </Card>
                    </Box>
                </Box>
            </Grid>
        </Grid>
    );
}
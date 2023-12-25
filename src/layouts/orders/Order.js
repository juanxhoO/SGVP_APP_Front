import * as React from 'react';
import { Grid, Typography, TextField, Box, Stack, Button } from '@mui/material';

// TODO remove, this demo shouldn't need to reset the theme.

export default function Order() {
    return (
        <Stack
            sx={{
                padding: '30px',
                alignItems: 'center',
                marginTop: 8,
                display: 'flex',
            }} component="form">

            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <Typography sx={{ fontWeight: 'bold' }}>Input2:</Typography>
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


                <Grid item xs={12} sm={6}>
                    <Typography sx={{ fontWeight: 'bold' }}>Input2:</Typography>
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

                <Grid item xs={12} sm={6}>
                    <Typography sx={{ fontWeight: 'bold' }}>Input2:</Typography>
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

                <Grid item xs={12} sm={6}>
                    <Typography sx={{ fontWeight: 'bold' }}>Input2:</Typography>
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


                <Grid item xs={12} sm={6}>
                    <Typography sx={{ fontWeight: 'bold' }}>Input2:</Typography>
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


                <Grid item xs={12} sm={6}>
                    <Typography sx={{ fontWeight: 'bold' }}>Input2:</Typography>
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

                <Grid item xs={12} sm={6}>
                    <Typography sx={{ fontWeight: 'bold' }}>Input2:</Typography>
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
            <Button sx={{minWidth:'200px'}} type="submit" variant='contained'>Edit</Button>
        </Stack>
    );
}
import * as React from 'react';

import Container from '@mui/material/Container';
import { Box, Paper } from '@mui/material';

// TODO remove, this demo shouldn't need to reset the theme.

export default function Report() {

    return (
        <Container component="main">
            <Box
                sx={{
                    mt: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    mb: 8
                }}
            >
                <Paper elevation={5} sx={{ p: 5 }}>

                    Report
                </Paper>


            </Box>
        </Container>
    );
}
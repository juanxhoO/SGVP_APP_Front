import * as React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import { Card, CardActions, CardContent } from '@mui/material';

export default function MaintanneanceInfo() {
    return (
        <Box  mt={0.5} lineHeight={1}>
            <Card >
                <CardActions sx={{ justifyContent: 'center' }}>
                    <Button component={Link} to="/orders/create" variant="contained" size="large">Solicitar Mantenimiento</Button>
                </CardActions>
            </Card>
        </Box>
    );
}
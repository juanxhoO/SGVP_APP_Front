import * as React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { CardActions, CardContent, CardMedia } from '@mui/material';
import { Link } from 'react-router-dom';
// TODO remove, this demo shouldn't need to reset the theme.
import useAuthStore from "../../store/useAuthStore";
import useDataFetcher from '../../hooks/useDataFetcher';

export default function DependencyInormation() {
    const userId = useAuthStore(state => state.userId)
    const { data: userInfo, isLoading, isError } = useDataFetcher("http://localhost:3000/v1/users/" + userId)
    const subCircuit = userInfo?.subcircuit
    return (
        <Box sx={{minHeight:"28rem"}} mt={0.5} lineHeight={1}>
            <Typography variant="h4" fontWeight="bold">
                Dependencia
            </Typography>
            <CardMedia
                sx={{ height: 250, width:"auto" }}
                image="/google-maps.jpg"
                title="green iguana"
            />
            <CardContent>
                <Typography fontWeight="bold">
                    Nombre:
                </Typography>
                <Typography gutterBottom variant="h5" component="div">
                    {subCircuit?.name}
                </Typography>
                <Typography fontWeight="bold">
                    Codigo:
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {subCircuit?.code}
                </Typography>
            </CardContent>
            <CardActions sx={{ justifyContent: 'center' }}>
                <Button component={Link} to={`/subdependencies/${subCircuit?.id}`} variant="contained" size="large">Ver Dependecia</Button>
            </CardActions>
        </Box>
    );
}
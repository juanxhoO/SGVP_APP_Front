import * as React from 'react';
import { Grid, Button, Typography, Card, CardMedia, CardContent, Paper } from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';
import useDataFetcher from '../../hooks/useDataFetcher';
import useDeleteEntity from '../../hooks/useDeleteItem';
import { useEffect } from 'react';
// TODO remove, this demo shouldn't need to reset the theme.

export default function Dependency() {

    const navigate = useNavigate()
    const { id } = useParams()
    const { data: circuitInfo } = useDataFetcher("http://localhost:3000/v1/circuits/" + id);
    const { isLoading, error, isDeleted, deleteEntity } = useDeleteEntity('http://localhost:3000/v1/circuits');

    const handleDelete = () => {
        const confirmed = window.confirm('Esta Seguro de Borrar la siguiente dependencia?');
        if (confirmed) {
            deleteEntity(id);
        }
    };

    useEffect(() => {
        if (isDeleted) {
            navigate("/dependencies");
        }
    }, [isDeleted, navigate]);
    return (
        <Grid container p={4} spacing={2}>
            <Grid p={2} sx={{ justifyContent: "center" }} item xs={12}>

                <Paper display="flex" sx={{ flexDirection:"column",alignItems:"center", display:"flex", gap:2,p:2}}>
                    <Card sx={{ width: "auto" }}>
                        <CardMedia
                            sx={{ height: 450 }}
                            image="/google-maps.jpg"
                            title="Circuit Map"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Nombre:{circuitInfo?.name}
                            </Typography>
                        </CardContent>
                    </Card>
                    <Typography>
                        Codigo: {circuitInfo?.code}
                    </Typography>
                    <Button onClick={handleDelete} variant="contained" color="error" >Borrar SubCircuito</Button>
                </Paper>
            </Grid>
        </Grid>
    );
}
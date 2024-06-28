import * as React from 'react';
import { Button, Grid, Typography, Card, CardMedia, CardContent, Paper } from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';
import useDataFetcher from '../../hooks/useDataFetcher';
import useDeleteEntity from '../../hooks/useDeleteItem';
import { useEffect } from 'react';
// TODO remove, this demo shouldn't need to reset the theme.

export default function SubDependency() {

    const { isLoading, error, isDeleted, deleteEntity } = useDeleteEntity('http://localhost:3000/v1/subcircuits');
    const navigate = useNavigate()
    const handleDelete = () => {
        const confirmed = window.confirm('Are you sure you want to delete this user?');
        if (confirmed) {
            deleteEntity(id);
        }
    };

    useEffect(() => {
        if (isDeleted) {
            navigate("/dependencies");
        }
    }, [isDeleted, navigate]);

    const { id } = useParams()
    const { data: subcircuitInfo } = useDataFetcher("http://localhost:3000/v1/subcircuits/" + id);
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
                        Nombre:{subcircuitInfo?.name}
                    </Typography>
                    <Typography>
                        Codigo:{subcircuitInfo?.code}
                    </Typography>
                </Paper>
            </Grid>
            <Button onClick={handleDelete} variant="contained" color="error" >Borrar SubCircuito</Button>
        </Grid>
    );
}
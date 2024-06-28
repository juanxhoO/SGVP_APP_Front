import * as React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import useDataFetcher from '../../hooks/useDataFetcher';
import { Box, Button } from '@mui/material';
import axios from 'axios';
import { Link } from 'react-router-dom';
export default function OrderTypes() {
    const { data: maintenancesInfo, isLoading, isError } = useDataFetcher("http://localhost:3000/v1/maintenances/");
    const [maintenances, setMaintenances] = React.useState([]);

    React.useEffect(() => {
        if (maintenancesInfo) {
            setMaintenances(maintenancesInfo);
        }
    }, [maintenancesInfo]);

    const handleDelete = async (id) => {
        try {

            const confirmed = window.confirm('Esta Seguro de Borrar el siguiente Mantenimiento?');
            if (confirmed) {
                await axios.delete(`http://localhost:3000/v1/maintenances/${id}`);
                setMaintenances(maintenances.filter(maintenance => maintenance.id !== id));

            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <Container>
            <Box display="flex" flexWrap="wrap">
                {maintenances?.map((maintenance, index) => (
                    <Box key={index} flex="1 1 100%" p={1} gap={2} sx={{ margin: "20px", border: "1px solid red" }}>
                        <Typography sx={{ fontWeight: 'bold' }}>
                            {maintenance?.name}
                        </Typography>
                        <Typography sx={{ fontWeight: 'bold' }}>
                            Descripcion:
                        </Typography>
                        <Typography>
                            {maintenance?.details}
                        </Typography>
                        <Typography sx={{ fontWeight: 'bold' }}>
                            Precio:
                        </Typography>
                        <Typography>
                            ${maintenance?.price}
                        </Typography>
                        <Button variant='contained'>
                            Editar Tipo Mantenimiento
                        </Button>
                        <Button onClick={() => handleDelete(maintenance.id)} color="error" variant='contained'>
                            Borrar Tipo Mantenimiento
                        </Button>
                    </Box>
                ))}
                <Button component={Link} to="/maintenances/create" variant="contained">
                    Agregar Tipo Mantenimiento
                </Button>
            </Box>
        </Container>
    );
}

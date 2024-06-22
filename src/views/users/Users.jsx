import Container from '@mui/material/Container';
import CustomizedTables from '../../components/DataTable/Table';
import { Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import useDataFetcher from '../../hooks/useDataFetcher';

export  default function Users() {
    const {data,isLoading, isError} = useDataFetcher("http://localhost:3000/v1/users/");
    console.log(data)
    const headerCells = ['name', 'Apellido', 'Correo', 'Telefono', 'Cedula', 'fecha_nacimiento', 'Rango', 'Sangre_Tipo', 'Editar'];
   
    const rowsData = data ?? [];

    return (
        <Container component="main">
            <CustomizedTables headerCells={headerCells} rowsData={rowsData} />
            <Box sx={{ justifyContent: "end", display: "flex" }}>
                <Button component={Link} to="/users/create" size="large" variant="contained">Crear Usuario</Button>
            </Box>
        </Container>
    );
}
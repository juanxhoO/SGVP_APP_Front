import Grid from '@mui/material/Grid';
import CustomizedTables from '../../components/DataTable/Table';
import { Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import useDataFetcher from '../../hooks/useDataFetcher';

export default function Users() {
    const { data, isLoading, isError } = useDataFetcher("http://localhost:3000/v1/users/");
    
    const headerCells = ['name', 'lastname', 'email', 'phone', 'id_card', 'fecha_nacimiento', 'rank', 'bloodType'];
    const rowsData = data ?? [];

    return (
        <Box p={3}>
            <CustomizedTables sx={{ mt: 2 }} headerCells={headerCells} rowsData={rowsData} />
            <Box sx={{ justifyContent: "start", display: "flex", mt: 4 }}>
                <Button component={Link} to="/users/create" size="large" variant="contained">Crear Usuario</Button>
            </Box>
        </Box>
    );
}
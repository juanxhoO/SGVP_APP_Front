import Container from '@mui/material/Container';
import CustomizedTables from '../../components/DataTable/Table';
import { Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import useDataFetcher from '../../hooks/useDataFetcher';

export default function Users() {
    const { data: contractsInfo, isLoading, isError } = useDataFetcher("http://localhost:3000/v1/contracts/");
    console.log(contractsInfo)
    const headerCells = ['name', 'details', 'type'];
    const rowsData = contractsInfo ?? [];

    return (
        <Container component="main">
            <CustomizedTables headerCells={headerCells} rowsData={rowsData} />
            <Box sx={{ justifyContent: "end", display: "flex" }}>
                <Button component={Link} to="/contracts/create" size="large" variant="contained">Crear Contrato</Button>
            </Box>
        </Container>
    );
}
import * as React from 'react';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CustomizedTables from '../../components/DataTable/Table';
import useDataFetcher from '../../hooks/useDataFetcher';
import { Typography, Paper } from '@mui/material';
// TODO remove, this demo shouldn't need to reset the theme.

export default function SpareOrders() {
    const { data: ordersInfo, isLoading, isError } = useDataFetcher("http://localhost:3000/v1/spareorders/");
    console.log(ordersInfo)
    const headerCells = ['id', 'status', , 'maintenanceDay', 'selectedTime'];
    const rowsData = ordersInfo ?? [];
    return (
        <Container sx={{ p: 4 }} component="main" >
            <Box>
                Lista de Ordenes de Lubricantes
            </Box>
            {ordersInfo?.map((order, index) => (
                <Paper sx={{ p: 4 }}>
                    <Box>
                        <Typography>
                            Orden Id: {order?.id}
                        </Typography>
                    </Box>
                    <Box>
                        <Typography>
                            Usuario Id: {order?.user?.name}
                        </Typography>
                    </Box>
                    <Box>
                        <Typography>
                            Lubricante Id:{order?.lubricant?.name}
                        </Typography>
                    </Box>
                    <Box>
                        <Typography>
                            Vehiculo Id: {order?.vehicle?.name}
                        </Typography>
                    </Box>
                    <Box>
                        <Typography>
                            Repuesto Id:{order?.spare?.name}
                        </Typography>
                    </Box>
                    <Button component={Link} to="/" variant='contained'>Ver Orden</Button>
                </Paper>

            ))}
        </Container>
    );
}
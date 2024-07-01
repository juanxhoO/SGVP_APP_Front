import { Typography, Container, Select, Box, Stack, Button, MenuItem } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import useDataFetcher from '../../hooks/useDataFetcher';
export default function RolesAdmin() {
    const { data: usersInfo } = useDataFetcher("http://localhost:3000/v1/users/");
    const [role, setRole] = useState()

    const handleChange = (event) => {
        setRole(event.target.value);
    };

    const updateRole = async (id) => {

        try {
            const response = await axios.patch("http://localhost:3000/v1/users/" + id, { role });
            if(response.status == 200){
                alert("Rol ha Sido Actualizado")
            }
        }
        catch (error) {
            console.log(error)
        }
    };

    return (
        <Container>
            <Stack
                sx={{
                    padding: '30px',
                    alignItems: 'center',
                    marginTop: 2,
                    display: 'flex',
                }}>
                <Box>
                    <Typography variant="h1">Editar Usuario</Typography>
                </Box>
                {usersInfo?.map((user, index) => (
                    <Box sx={{ border: "1px solid #cccccc", p: 2, alignItems: "center", m: 2, width: "100%", justifyContent: "space-between" }} display="flex">
                        <Box>
                            <Typography>Nombre</Typography>
                            <Typography sx={{ fontWeight: 'bold' }}>{user?.name}</Typography>
                        </Box>
                        <Box>
                            <Typography>Apellido</Typography>
                            <Typography sx={{ fontWeight: 'bold' }}>{user?.lastname}</Typography>
                        </Box>
                        <Box>
                            <Typography>Rango</Typography>
                            <Typography sx={{ fontWeight: 'bold' }}>{user?.rank}</Typography>
                        </Box>
                        <Box>
                            <Typography>Rol</Typography>
                            <Select

                                onChange={handleChange}
                                defaultValue={user?.role}
                            >
                                <MenuItem value="USER">
                                    Usuario
                                </MenuItem>
                                <MenuItem value="ADMIN">
                                    Administrador
                                </MenuItem>
                            </Select>
                        </Box>
                        <Box>
                            <Button onClick={() => updateRole(user?.id)} sx={{ minWidth: '200px' }} type="submit" variant='contained'>Actualizar Rol</Button>
                        </Box>
                    </Box>
                ))}
            </Stack>
        </Container>
    );
}

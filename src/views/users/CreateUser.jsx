import { Grid, Typography, Select, MenuItem, TextField, Box, Stack, Button, Card, CardMedia, CardContent } from '@mui/material';
import axios from 'axios';
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';

export default function CreateUser() {
    const OfficeRank = ["TENIENTE_CORONEL", "SARGENTO_PRIMERO", "SARGENTO_SEGUNDO", "CABO_PRIMERO", "CABO_SEGUNDO", "TENIENTE", "MAYOR", "CAPITAN", "POLICIA", "SUBTENIENTE"];
    const ROLES = ["ADMIN", "USER"]
    const navigate = useNavigate()
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = async (data) => {
        try {
            const response = await axios.post("http://localhost:3000/v1/users", data)
            if(response.status === 201){
                navigate("/users")
            }
        }
        catch (error) {
            console.log(error)
        }
    }

    return (
        <Stack
            onSubmit={handleSubmit(onSubmit)}
            sx={{
                padding: '30px',
                alignItems: 'center',
                marginTop: 8,
                display: 'flex',
            }} component="form">
            <Box>
                <Typography variant="h1">Crear Usuario</Typography>
                <Card  sx={{    alignItems: "center",justifyContent: "center",display:"flex",flexDirection: "column"}}>
                    <CardMedia
                        component="img"
                        alt="green iguana"
                        height="140"
                        image="/static/images/cards/contemplative-reptile.jpg"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h6" component="div">
                            Lizard
                        </Typography>
                    </CardContent>
                </Card>
            </Box>
            <Grid mt={4} container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <Typography sx={{ fontWeight: 'bold' }}>Nombres</Typography>
                    <TextField
                        {...register('name', { required: "Nombres Requerido" })}
                        fullWidth
                        margin="normal"
                        name="name"
                        autoComplete="name"
                        id="name"
                        label="Required"
                    />
                    {errors.name && <p>{errors.name.message}</p>}
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Typography sx={{ fontWeight: 'bold' }}>Apellidos</Typography>
                    <TextField
                        {...register('lastname', { required: "Apellidos es Requerido" })}

                        fullWidth
                        margin="normal"
                        name="lastname"
                        autoComplete="lastname"
                        autoFocusrequired
                        id="lastname"
                        label="Required"
                        defaultValue=""
                    />
                    {errors.name && <p>{errors.name.message}</p>}

                </Grid>

                <Grid item xs={12} sm={6}>
                    <Typography sx={{ fontWeight: 'bold' }}>CI</Typography>
                    <TextField
                        {...register('id_card', { required: "Cedula de Ciudadania  Requerida" })}

                        fullWidth
                        margin="normal"
                        name="id_card"
                        type="number"
                        autoComplete="id_card"
                        autoFocusrequired
                        id="id_card"
                        label="Required"
                        defaultValue=""
                    />
                    {errors.id_card && <p>{errors.id_card.message}</p>}

                </Grid>

                <Grid item xs={12} sm={6}>
                    <Typography sx={{ fontWeight: 'bold' }}>correo</Typography>
                    <TextField
                        {...register('email', { required: "Correo Requerido" })}
                        fullWidth
                        margin="normal"
                        name="email"
                        autoComplete="email"
                        autoFocusrequired
                        id="email"
                        label="Required"
                        defaultValue=""
                    />
                    {errors.email && <p>{errors.email.message}</p>}

                </Grid>

                <Grid item xs={12} sm={6}>
                    <Typography sx={{ fontWeight: 'bold' }}>Telefono</Typography>
                    <TextField
                        fullWidth
                        {...register('phone', { required: "Telefono es  Requerido" })}
                        margin="normal"
                        name="phone"
                        type="phone"
                        autoComplete="email"
                        autoFocusrequired
                        id="outlined-required"
                        label="Required"
                        defaultValue=""
                    />
                    {errors.phone && <p>{errors.phone.message}</p>}
                </Grid>

                <Grid item xs={12} sm={6}>
                    <Typography sx={{ fontWeight: 'bold' }}>Tipo de Sangre:</Typography>
                    <TextField
                        fullWidth
                        margin="normal"
                        {...register('bloodType', { required: "Tipo de Sangre es Requerido" })}
                        name="bloodType"
                        id="bloodType"
                        label="Required"
                        defaultValue=""
                    />
                    {errors.bloodType && <p>{errors.bloodType.message}</p>}

                </Grid>

                <Grid item xs={12} sm={6}>
                    <Typography sx={{ fontWeight: 'bold' }}>Fecha de Nacimiento:</Typography>
                    <TextField
                        fullWidth
                        {...register('birthdate', { required: "Fecha de  Requerido" })}
                        margin="normal"
                        name="birthdate"
                        autoFocusrequired
                        id="birthdate"
                        label="Required"
                        defaultValue=""
                    />
                    {errors.birthdate && <p>{errors.birthdate.message}</p>}

                </Grid>

                <Grid item xs={12} sm={6}>
                    <Typography sx={{ fontWeight: 'bold' }}>Ciudad  de Nacimiento:</Typography>
                    <TextField
                        fullWidth
                        {...register('cityId', { required: "Ciudad de Nacimiento Requerida" })}
                        margin="normal"
                        name="cityId"
                        autoFocusrequired
                        id="cityId"
                        label="Required"
                        defaultValue=""

                    />
                    {errors.city && <p>{errors.city.message}</p>}
                </Grid>

                <Grid item xs={12} sm={6}>
                    <Typography sx={{ fontWeight: 'bold' }}>Contrasenia:</Typography>
                    <TextField
                        fullWidth
                        {...register('password', { required: "Contrasenia  Requerida" })}
                        margin="normal"
                        type="password"
                        name="password"
                        id="password"
                        label="Required"
                        defaultValue=""

                    />
                    {errors.city && <p>{errors.city.message}</p>}
                </Grid>

                <Grid item xs={12} sm={6}>
                    <Typography sx={{ fontWeight: 'bold' }}>Rol:</Typography>
                    <TextField
                        fullWidth
                        {...register('role', { required: "Rol  Requerida" })}
                        margin="normal"
                        name="role"
                        autoFocusrequired
                        id="role"
                        label="Required"
                        defaultValue=""

                    />
                    {errors.city && <p>{errors.city.message}</p>}
                </Grid>

                <Grid item xs={12} sm={6}>
                    <Typography sx={{ fontWeight: 'bold' }}>Rango:</Typography>
                    <Select
                        {...register('rank', { required: "Rol  Requerida" })}
                        id="rank"
                        name="rank"
                        fullWidth
                    >
                        {OfficeRank.map((rank, index) => (
                            <MenuItem value={rank}>{rank}</MenuItem>
                        ))}
                    </Select>
                </Grid>
            </Grid>

            <Button  sx={{mt:4, minWidth: '200px' }} type="submit" variant='contained'>Crear</Button>
        </Stack>
    );
}
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { FormControl, InputLabel, Select, MenuItem, Input } from '@mui/material';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';



// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data) => {
    try {
      console.log(data)
      const response = await axios.post("http://localhost:3000/v1/users", data)
      if (response.status === 201) {
        navigate("/users")
      }
    }
    catch (error) {
      console.log(error)
    }
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Registrarse
          </Typography>
          <Box onSubmit={handleSubmit(onSubmit)}
            component="form" noValidate sx={{ mt: 1 }}>
            <TextField
              {...register('name', { required: "Telefono es  Requerido" })}

              margin="normal"
              required
              fullWidth
              name="name"
              label="Nombres"
              type="text"
              id="name"
            />

            <TextField
              {...register('lastname', { required: "Telefono es  Requerido" })}

              margin="normal"
              required
              fullWidth
              name="lastname"
              label="Apellidos"
              type="text"
              id="lastname"
            />
            <TextField
              {...register('email', { required: "Telefono es  Requerido" })}

              margin="normal"
              required
              fullWidth
              id="email"
              label="Correo"
              name="email"
              autoComplete="email"
              autoFocus

            />
            <TextField
              {...register('phone', { required: "Telefono es  Requerido" })}

              margin="normal"
              required
              fullWidth
              name="phone"
              label="Telefono"
              type="number"
              id="phone"
            />

            <TextField
              {...register('id_card', { required: "Telefono es  Requerido" })}

              margin="normal"
              required
              fullWidth
              name="id_card"
              label="Cedula de Ciudadania"
              type="number"
              id="id_card"

            />
            <TextField
              {...register('password', { required: "Telefono es  Requerido" })}

              margin="normal"
              required
              fullWidth
              name="password"
              label="Contrasenia"
              type="password"
              id="password"

            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Registrarse
            </Button>
            <Grid container>
              <Grid item>
                <Link href="/authentication/sign-in" variant="body2">
                  {"Tienes una Cuenta? Ingresa"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
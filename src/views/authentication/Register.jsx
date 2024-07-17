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
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useForm } from 'react-hook-form'
import axios from 'axios';
import { useState } from 'react';

const defaultTheme = createTheme();

export default function Register() {
  const [error, setError] = useState('');

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
      console.log("dsd")
      console.log(error.response.data.message)
      setError(response.data.message)
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
            {error && <p>{error}</p>}

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
            {errors.name && <p>{errors.name.message}</p>}

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
            {errors.lastname && <p>{errors.lastname.message}</p>}

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
            {errors.email && <p>{errors.email.message}</p>}

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
            {errors.phone && <p>{errors.phone.message}</p>}

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
            {errors.id_card && <p>{errors.id_card.message}</p>}

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
            {errors.password && <p>{errors.password.message}</p>}

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
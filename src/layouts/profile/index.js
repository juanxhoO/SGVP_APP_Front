import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Paper, Stack, Box, Container, Grid, Avatar } from '@mui/material';

function Profile() {
    return (
        <Box>
            <Container>
                <Paper elevation={5}>
                    <Grid>
                        <Grid item xs={8}>
                            <Avatar alt="Remy Sharp" />
                        </Grid>
                    </Grid>
                </Paper>
            </Container>
        </Box>
    );
}

export default Profile;

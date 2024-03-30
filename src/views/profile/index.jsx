import { Paper, Box, Container, Grid, Avatar, Typography } from '@mui/material';
import ProfileInfoCard from './ProfileInformation';
import VehicleInormation from './VehicleInormation';
import DependencyInformation from './DependencyInformation';
import MaintanneanceInfo from './MaintanneanceInfo';

function Profile() {

    //const userInfo = useDataFetcher()    


    return (
        <Container component="main" maxWidth="lg">
            <Box
                sx={{
                    mt: 4,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Paper elevation={5} sx={{ p: 5 }}>
                    <Grid container spacing={3} alignItems="center">
                        <Grid item >
                            <Avatar alt="Remy Sharp" />
                        </Grid>
                        <Grid item>
                            <Box height="100%" mt={0.5} lineHeight={1}>
                                <Typography variant="h5" fontWeight="medium">
                                    Richard Davis
                                </Typography>
                                <Typography variant="button" color="text" fontWeight="regular">
                                    CEO / Co-Founder
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>

                    <Grid>
                        <ProfileInfoCard
                            title="profile information"
                            description="Hi, I’m Alec Thompson, Decisions: If you can’t decide, the answer is no. If two equally difficult paths, choose the one more painful in the short term (pain avoidance is creating an illusion of equality)."
                            info={{
                                fullName: "Alec M. Thompson",
                                mobile: "(44) 123 1234 123",
                                email: "alecthompson@mail.com",
                                location: "USA",
                            }}
                            action={{ route: "", tooltip: "Edit Profile" }}
                            shadow={false}
                        />
                    </Grid>
                </Paper>

                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <Paper elevation={5} sx={{
                            mt: 8,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}>

                            <VehicleInormation />
                        </Paper>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <Paper elevation={5} sx={{
                            mt: 8,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}>
                            <Grid>
                                <DependencyInformation />
                            </Grid>
                        </Paper>
                    </Grid>
                    <Grid item xs={12}>

                        <Paper elevation={5} sx={{
                            mt: 4,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            mb: 4
                        }}>
                            <Grid>
                                <MaintanneanceInfo />
                            </Grid>
                        </Paper>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
}
export default Profile;

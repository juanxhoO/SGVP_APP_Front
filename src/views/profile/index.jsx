import { Paper, Box, Container, Grid, Avatar, Typography } from '@mui/material';
import ProfileInfoCard from './ProfileInformation';
import VehicleInormation from './VehicleInormation';
import DependencyInformation from './DependencyInformation';
import MaintanneanceInfo from './MaintanneanceInfo';
import useDataFetcher from '../../hooks/useDataFetcher';

function Profile() {

    const {data,loading,error} = useDataFetcher("http://localhost:3000/v1/users/e2f32b58-89ea-4411-9f26-06402186d273")  

    const userInfo = data
    console.log(userInfo)
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
                                <Typography variant="h5" fontWeight="medium">{userInfo?.name}</Typography>
                                <Typography variant="button" color="text" fontWeight="regular">{userInfo?.Rank}</Typography>
                            </Box>
                        </Grid>
                    </Grid>

                    <Grid>
                        <ProfileInfoCard
                            title="profile information"
                            description="Hi, I’m Alec Thompson, Decisions: If you can’t decide, the answer is no. If two equally difficult paths, choose the one more painful in the short term (pain avoidance is creating an illusion of equality)."
                            info={{
                                fullName: "Alec M. Thompson",
                                mobile: userInfo?.phone,
                                email: userInfo?.email
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

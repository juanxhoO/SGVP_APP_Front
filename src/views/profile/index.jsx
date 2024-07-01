import { Paper, Box, Container, Grid, Avatar, Typography } from '@mui/material';
import ProfileInfoCard from './ProfileInformation';
import VehicleInormation from './VehicleInormation';
import DependencyInformation from './DependencyInformation';
import MaintanneanceInfo from './MaintanneanceInfo';
import useDataFetcher from '../../hooks/useDataFetcher';
import useAuthStore from '../../store/useAuthStore';


function Profile() {
    const userId =  useAuthStore(state => state.userId)
    const {data:userInfo,loading,error} = useDataFetcher("http://localhost:3000/v1/users/" + userId)  
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
                <Paper elevation={5} sx={{ width:"100%", p: 5 }}>
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
                            id= {userId}
                            title="profile information"
                            info={{
                                fullName: userInfo?.name + " " + userInfo?.lastname,
                                mobile: userInfo?.phone,
                                email: userInfo?.email,
                                rank: userInfo?.rank
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
                            px:2,
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

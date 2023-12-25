import { Paper, Box, Container, Grid, Avatar, Typography } from '@mui/material';
import ProfileInfoCard from './ProfileInformation';
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import VehicleInormation from './VehicleInormation';
import DependencyInformation from './DependencyInformation';
function Profile() {
    return (

        <Container component="main" maxWidth="lg">
            <Box
                sx={{
                    mt: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    mb: 8
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
                            social={[
                                {
                                    link: "https://www.facebook.com/CreativeTim/",
                                    icon: <FacebookIcon />,
                                    color: "facebook",
                                },
                                {
                                    link: "https://twitter.com/creativetim",
                                    icon: <TwitterIcon />,
                                    color: "twitter",
                                },
                                {
                                    link: "https://www.instagram.com/creativetimofficial/",
                                    icon: <InstagramIcon />,
                                    color: "instagram",
                                },
                            ]}
                            action={{ route: "", tooltip: "Edit Profile" }}
                            shadow={false}
                        />
                    </Grid>
                </Paper>

                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <Paper elevation={5} sx={{
                            mt: 8,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            mb: 8
                        }}>

                            <VehicleInormation />
                        </Paper>
                    </Grid>

                    <Grid item xs={6}>

                        <Paper elevation={5} sx={{
                            mt: 8,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            mb: 8
                        }}>

                            <Grid>
                                <DependencyInformation />
                            </Grid>

                        </Paper>

                    </Grid>

                </Grid>

            </Box>
        </Container>
    );
}

export default Profile;

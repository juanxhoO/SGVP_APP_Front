// Footer.js
import React from 'react';
import { Container, Box, Typography, Link, IconButton } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer = () => {
  const facebookUrl = "https://www.facebook.com/policia.ecuador";
  const instagramUrl = "https://www.instagram.com/policiaecuadoroficial/";
  const youtubeUrl = "https://www.youtube.com/c/PoliciaNacionalDelEcuador";
  const twitterUrl = "https://twitter.com/policiaecuador";

  return (
    <Container className='Footer' style={{display:'flex', backgroundColor: '#004291', justifyContent: "space-around", alignItems: "center", minHeight: "120px" }} maxWidth="full" >
      <Box sx={{ display: "block" }} alignItems="center">
        <Typography variant="subtitle1" align="center" color="#ffffff" component="p">
          Policia Nacional del Ecuador
        </Typography>
        <Typography variant="body2" color="#ffffff" align="center">
          {'© '}
          <Link color="inherit" href="#">
            SGVP - Loja
          </Link>{' '}
          {new Date().getFullYear()}
        </Typography>
        <IconButton
          component="a"
          href={instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram">
          <InstagramIcon
                    sx={{color:"#ffffff"}} 
                    color="#ffffff"/>
        </IconButton>
        <IconButton
          component="a"
          href={facebookUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
        >
          <FacebookIcon sx={{color:"#ffffff"}} />
        </IconButton>
        <IconButton
          component="a"
          href={twitterUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter">
          <XIcon sx={{color:"#ffffff"}} />
        </IconButton >
        <IconButton
        color="#ffffff"
          component="a"
          href={youtubeUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Youtube">
          <YouTubeIcon 
          sx={{color:"#ffffff"}} 
          color="#ffffff"/>
        </IconButton>
      </Box>
    </Container>
  );
};

export default Footer;

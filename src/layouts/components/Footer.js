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
  const ecu911Url = "https://twitter.com/ecu911quito";

  return (
    <Container className='Footer' style={{display:'flex', backgroundColor: '#1976d2', justifyContent: "space-around", alignItems: "center", minHeight: "120px" }} maxWidth="full" >
      <Box sx={{ display: "block" }} alignItems="center">
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Policia Nacional del Ecuador
        </Typography>
        <Typography variant="body2" color="textSecondary" align="center">
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
          <InstagramIcon />
        </IconButton>
        <IconButton
          component="a"
          href={facebookUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
        >
          <FacebookIcon />
        </IconButton>
        <IconButton
          component="a"
          href={twitterUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter">
          <XIcon />
        </IconButton>
        <IconButton
          component="a"
          href={youtubeUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Youtube">
          <YouTubeIcon />
        </IconButton>
      </Box>
    </Container>
  );
};

export default Footer;

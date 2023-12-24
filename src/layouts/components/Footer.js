// Footer.js
import React from 'react';
import { Container, Typography, Link } from '@mui/material';



const Footer = () => {

  return (
      <Container className='Footer' style={{backgroundColor:'#1976d2'}} maxWidth="full">
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Your footer content goes here.
        </Typography>
        <Typography variant="body2" color="textSecondary" align="center">
          {'© '}
          <Link color="inherit" href="#">
            Your Website Name
          </Link>{' '}
          {new Date().getFullYear()}
        </Typography>
      </Container>
  );
};

export default Footer;

import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function LandingPageHeading() {
  return (
    <Box
      sx={{
        textAlign: 'center',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
     
      <Typography
        variant="h1"
        component="h1"
        sx={{
          color: '#F2F2F2',
          fontFamily: 'initial',
          fontWeight: 'bold',
          mb: 2,
          textAlign: 'center',
          width: '100%',
        }}
      >
        Take Control of Your
        <br />
        Energy Costs
      </Typography>

    
      <Typography
        variant="h5"
        component="h2"
        sx={{
          color: '#F2F2F2',
          fontFamily: 'initial',
          fontWeight: 400,
          lineHeight: 1.6,
          maxWidth: '700px',
          textAlign: 'center',
          width: '100%',
        }}
      >
        Discover smarter ways to save energy, reduce your bills, and make
        the right choices for your home.
      </Typography>
    </Box>
  );
}
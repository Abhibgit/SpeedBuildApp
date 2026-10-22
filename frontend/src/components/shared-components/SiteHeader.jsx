import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function SiteHeader() {
  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        py: 1,
      }}
    >
      <Typography
        component="h1"
        sx={{
          color: '#F2F2F2',
          fontFamily: 'initial',
          fontSize: '1.2rem',
          fontWeight: 'bold',
          textAlign: 'center',
          m: 0,
        }}
      >
        Heating Savings Calculator
      </Typography>
    </Box>
  );
}
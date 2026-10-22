import React from 'react';
import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';

import HeatingCard from '../components/heating-components/HeatingCard';
import CoolingInfoCard from '../components/cooling-components/CoolingCard';

export default function HeatPumpCalculatorPage() {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        width: '100%',
        p: 3,
        boxSizing: 'border-box',
        backgroundColor: '#12343b',
      }}
    >
      <Typography
        level="h1"
        sx={{
          color: '#fff',
          textAlign: 'center',
          mb: 4,
        }}
      >
        Heating & Cooling Information
      </Typography>

      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          justifyContent: 'center',
          alignItems: 'flex-start',
          gap: 3,
          width: '100%',
        }}
      >
        <Box sx={{ flex: 1, minWidth: 0, width: '100%' }}>
          <HeatingCard />
        </Box>

        <Box sx={{ flex: 1, minWidth: 0, width: '100%' }}>
          <CoolingInfoCard />
        </Box>
      </Box>
    </Box>
  );
}
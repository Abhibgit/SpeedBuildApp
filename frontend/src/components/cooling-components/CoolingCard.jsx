import * as React from 'react';
import { useState } from 'react';

import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';

import CoolingType from './CoolingType';
import SelectCoolingAge from './CoolingAge';

export default function CoolingInfoCard() {
  const [selectedEquipment, setSelectedEquipment] = useState(null);
  const [coolingAge, setCoolingAge] = useState(null);

  return (
    <Box
      sx={{
        width: '100%',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        boxSizing: 'border-box',
        p: 3,
      }}
    >
      <Card
        sx={{
          width: '100%',
          maxWidth: 500,
          background:
            'linear-gradient(56deg, rgba(4, 53, 64, 1) 80%, rgba(232, 116, 0, 1) 100%)',
          p: 2,
          border: '1px solid rgba(255, 255, 255, 0.2)',
          borderRadius: '16px',
          color: 'white',
          boxShadow: '0 4px 30px rgba(0, 0, 0, 0.2)',
          boxSizing: 'border-box',
        }}
      >
        <CardContent
          sx={{
            width: '100%',
            boxSizing: 'border-box',
          }}
        >
          <Typography
            level="title-lg"
            sx={{
              color: 'white',
              mb: 3,
              textAlign: 'center',
            }}
          >
            Cooling Type & Unit Age
          </Typography>

          {/* Stack the inputs vertically */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'stretch',
              gap: 3,
              width: '100%',
            }}
          >
            {/* Cooling Type */}
            <Box sx={{ width: '100%' }}>
              <CoolingType
                selectedEquipment={selectedEquipment}
                setSelectedEquipment={setSelectedEquipment}
              />
            </Box>

            {/* Cooling Unit Age */}
            <Box sx={{ width: '100%' }}>
              <SelectCoolingAge
                coolingAge={coolingAge}
                setCoolingAge={setCoolingAge}
              />
            </Box>
          </Box>

          {/* Display selected values */}
          <Box sx={{ mt: 3 }}>
            <Typography sx={{ color: 'white', mb: 1 }}>
              Selected cooling: {selectedEquipment || 'None'}
            </Typography>

            <Typography sx={{ color: 'white' }}>
              Equipment age:{' '}
              {coolingAge === null
                ? 'Not selected'
                : coolingAge === 0
                  ? 'Less than 1 year'
                  : `${coolingAge} ${
                      coolingAge === 1 ? 'year' : 'years'
                    }`}
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}
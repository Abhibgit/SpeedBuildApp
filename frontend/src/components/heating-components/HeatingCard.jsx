import * as React from 'react';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import HeatingSelectCheckmarks from './HeatingType';
import SelectHeatingAge from './HeatingAge';

export default function HeatingCard() {
  const [selectedHeating, setSelectedHeating] = useState(null);
  const [heatingAge, setHeatingAge] = useState(null);

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
        <CardContent sx={{ width: '100%', boxSizing: 'border-box' }}>
          <Typography
            level="title-lg"
            sx={{
              color: 'white',
              mb: 3,
              textAlign: 'center',
            }}
          >
            Heating Type & Heating Age
          </Typography>

          
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'stretch',
              gap: 3,
              width: '100%',
            }}
          >
            
            <Box sx={{ width: '100%' }}>
              <HeatingSelectCheckmarks
                selectedHeating={selectedHeating}
                setSelectedHeating={setSelectedHeating}
              />
            </Box>

         
            <Box sx={{ width: '100%' }}>
              <SelectHeatingAge
                heatingAge={heatingAge}
                setHeatingAge={setHeatingAge}
              />
            </Box>
          </Box>

       
          <Box sx={{ mt: 3 }}>
            <Typography sx={{ color: 'white', mb: 1 }}>
              Selected heating: {selectedHeating || 'None'}
            </Typography>

            <Typography sx={{ color: 'white' }}>
              Equipment age:{' '}
              {heatingAge === null
                ? 'Not selected'
                : heatingAge === 0
                  ? 'Less than 1 year'
                  : `${heatingAge} ${heatingAge === 1 ? 'year' : 'years'}`}
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}
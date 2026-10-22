import React from "react";

import { Box, Container,Typography } from "@mui/joy";

export default function LandingPageIntro() {
   return(
      <Container
    
      disableGutters
      sx={{
        height: '100px',      
        backgroundColor: 'transparent',
        padding: 0,
        textAlign: 'center',
      }}
    >
    <Box>
      <Typography sx={{ color: '#F2F2F2', fontWeight: 'bold', fontSize: '17px',}}>
        From Assessment to Installation — Simply Smarter HVAC.
</Typography>

      </Box>

    
    
     </Container>
   );
}

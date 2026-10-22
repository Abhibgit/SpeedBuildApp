import React from "react";
import { Box, Card, useMediaQuery, useTheme } from "@mui/material";
import LandingPageContent from "../components/landing-page-components/LandingPageContent";


export default function LandingPage() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
   
            <Box>
            <LandingPageContent/>
            </Box>

           
      
    
  );
}
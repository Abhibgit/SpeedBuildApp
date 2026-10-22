import React from "react";
import { Box, Card, useMediaQuery, useTheme } from "@mui/material";
import LandingPageIntro from "../landing-page-components/LandingPageIntro"
import NextBeginButton from "../shared-components/NextButtons";
import LandingPageHeading from "./LandingPageHeader";

export default function LandingPageContent() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        minHeight: "100vh",
        position: "relative",
        px: 2,
        boxSizing: "border-box",
        overflowX: "hidden",
        background: "transparent",
      }}
    >
     
      <Box
        sx={{
          width: "100%",
          maxWidth: 1200,
          mx: "auto",
          pt: { xs: 3, md: 5 },
          textAlign: "left",
        }}
      >
        <LandingPageHeading />
      </Box>

      
      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Card
          elevation={0}
          sx={{
            width: "100%",
            maxWidth: 920,
            minHeight: isMobile ? "auto" : "70vh",
            backgroundColor: "transparent",
            borderRadius: 0,
            boxShadow: "none",
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              gap: 3,
              py: 4,
            }}
          >
            <LandingPageIntro />

            <NextBeginButton />
          </Box>
        </Card>
      </Box>
    </Box>
  );
}
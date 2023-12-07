import React, { useState } from "react";
import {
  detection1,
  intervention1,
  engagement1,
  community1,
} from "../../config/Images/Images";
// mport React from "react";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Typography, Box } from "@mui/material";

const images = {
  image1: { image: detection1, text: "detection" },
  image2: { image: intervention1, text: "Intervention" },
  image3: { image: engagement1, text: "Engagement" },
  image4: { image: community1, text: "Community" },
};
const WeDo = () => {
  //   const [isHovered, setIsHovered] = useState(false);

  //   const handleHover = () => {
  //     setIsHovered(true);
  //   };

  //   const handleHoverLeave = () => {
  //     setIsHovered(false);
  //   };

  return (
    <div style={{ textAlign: "center", marginTop: "10rem" }}>
      <Typography
        variant="h2"
        // className="mb-6 flex items-center DBlack"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          // fontSize: "70px",
          fontWeight: "700",
          fontSize: { lg: "70px", sm: "70px", xs: "40px" },
        }}
      >
        What we do
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          ml: { xs: "0rem" },
          mr: { xs: "0rem" },
        }}
      >
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          spacing={0}
          sx={{
            padding: "20px",
            maxWidth: "100%",
          }}
        >
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <Paper
              elevation={0}
              style={{
                height: "100%",
                textAlign: "center",
                padding: "15px",
                // maxWidth: "150px",
                display: "flex",
                // flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img src={images.image1.image} alt={images.image1.text} />
                <p style={{ fontSize: "24px", fontWeight: "300" }}>
                  {images.image1.text}
                </p>
              </div>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <Paper
              elevation={0}
              style={{
                height: "100%",
                textAlign: "center",
                padding: "15px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img src={images.image2.image} alt={images.image2.text} />
                <p style={{ fontSize: "24px", fontWeight: "300" }}>
                  {images.image2.text}
                </p>
              </div>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <Paper
              elevation={0}
              style={{
                height: "100%",
                textAlign: "center",
                padding: "15px",
                // maxWidth: "150px",
                display: "flex",
                // flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img src={images.image3.image} alt={images.image3.text} />
                <p style={{ fontSize: "24px", fontWeight: "300" }}>
                  {images.image3.text}
                </p>
              </div>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <Paper
              elevation={0}
              style={{
                height: "100%",
                textAlign: "center",
                padding: "20px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img src={images.image4.image} alt={images.image4.text} />
                <p style={{ fontSize: "24px", fontWeight: "300" }}>
                  {images.image4.text}
                </p>
              </div>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default WeDo;

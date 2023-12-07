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
import { Typography } from "@mui/material";

const images = {
  image1: { image: detection1, text: "detection" },
  image2: { image: intervention1, text: "Intervention" },
  image3: { image: engagement1, text: "Engagement" },
  image4: { image: community1, text: "Community" },
};
const WeDo = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleHoverLeave = () => {
    setIsHovered(false);
  };

  return (
    <div>
      <Typography
        variant="h1"
        className="mb-6 flex items-center DBlack"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "50px",
          fontWeight: "700",
        }}
      >
        What we do
      </Typography>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginLeft: "5rem",
          marginRight: "5rem",
        }}
      >
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          spacing={0}
          xs={12}
          sx={{
            padding: "20px",
            margin: "auto",
            // maxWidth: "100%",
            "& > .MuiGrid-item": {
              width: "100%",
              display: "flex",
              justifyContent: "center",
            },
          }}
        >
          {Object.keys(images).map((imageKey, index) => (
            <Grid item lg={6} md={6} sm={6} xs={12} key={index}>
              <Paper
                elevation={0}
                style={{
                  height: "100%",
                  textAlign: "center",
                  // justifyContent: "center",
                  padding: "15px",
                  maxWidth: "150px",
                  transition: "color 0.3s ease",
                  // color: isHovered ? "purple" : "inherit",
                }}
                onMouseEnter={handleHover}
                onMouseLeave={handleHoverLeave}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img
                    src={images[imageKey].image}
                    alt={images[imageKey].text}
                  />
                  <p style={{ fontSize: "24px", fontWeight: "300" }}>
                    {images[imageKey].text}
                  </p>
                </div>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default WeDo;

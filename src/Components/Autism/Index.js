import React from "react";
import {
  Paper,
  Typography,
  Grid,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import { group2 } from "../../config/Images/Images";
import { group1 } from "../../config/Images/Images";
const Autism = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <div>
      <Paper
        elevation={0}
        sx={{
          p: "20px",
          //   m: "10rem",
          textAlign: "center",
          position: "relative",
          mt: "5rem",
          ml: { lg: "10rem", xs: "0rem" },
          mr: { lg: "10rem", xs: "0rem" },
        }}
      >
        {!isSmallScreen && (
          <Grid
            container
            justifyContent="flex-end"
            alignItems="flex-start"
            style={{
              position: "absolute",
              top: "0",
              right: "0",
              paddingTop: "10px",
              paddingRight: "10px",
            }}
          >
            <img src={group1} alt="" />
          </Grid>
        )}

        <Grid container direction="column" spacing={2}>
          <Grid item>
            <Typography
              alignItems="center"
              variant="h4"
              gutterBottom
              style={{ fontSize: "36px", fontWeight: "600" }}
            >
              What is Autism
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              paragraph
              style={{
                fontSize: "30px",
                fontStyle: "italic",
                fontWeight: "500",
              }}
            >
              NAMASTE is a research project that will implement and evaluate a
              novel integrated detection and care pathway for young children
              with autism and their families in India, Sri Lanka, and Nepal,
              delivered by non-specialist health workers.
            </Typography>
            {!isSmallScreen && (
              <Grid container justifyContent="flex-start" alignItems="flex-end">
                <img src={group2} alt="" />
              </Grid>
            )}
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default Autism;

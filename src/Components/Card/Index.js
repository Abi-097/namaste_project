import React from "react";
import { Card, CardContent, Typography, Button, Box } from "@mui/material";
import { projectcard1, projectcard2 } from "../../config/Images/Images";
import { Grid } from "@mui/material";
const ProjectCard = () => {
  return (
    <div style={{}}>
      <Grid container spacing={2}>
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          lg={6}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Card
            sx={{
              borderRadius: 10,
              background: "#FFF",
              boxShadow: "2px 2px 20px 3px rgba(0, 0, 0, 0.06)",
              textAlign: "center",
              width: "22rem",
              marginTop: "-50px",
              zIndex: 999,

              pt: 2,
              pl: 1,
              pr: 1,
            }}
          >
            <CardContent>
              <Box sx={{ display: "flex", justifyContent: "center", mb: 3 }}>
                {/* Small Logo */}
                <img
                  src={projectcard1}
                  alt="Small Logo"
                  // style={{ alignItems: "center" }}
                />
              </Box>

              {/* Heading */}
              <Typography
                variant="h5"
                gutterBottom
                style={{
                  color: "#413F3E",
                  fontSize: "22px",
                  fontWeight: "600",
                  lineHeight: "18px",
                  paddingBottom: "20px",
                }}
              >
                Project Background
              </Typography>

              {/* Paragraph */}
              <Typography
                variant="body1"
                color="textSecondary"
                paragraph
                style={{
                  color: "#413F3E",
                  fontSize: "12px",
                  fontWeight: "600",
                }}
              >
                Most children with neurodevelopmental disabilities living in
                South Asia have no access to services. This means that families
                are not given the help they need to fully understand their
                child’s needs and know how best to support them.
              </Typography>

              {/* Learn More Button */}
              {/* <Button variant="contained" style={{ background: "transparent" }}>
                Learn More
              </Button> */}
              <p
                style={{
                  textAlign: "center",
                  fontWeight: "600",
                  color: "#769863",
                }}
              >
                Learn More
              </p>
            </CardContent>
          </Card>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          lg={6}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Card
            sx={{
              borderRadius: 10,
              background: "#FFF",
              boxShadow: "2px 2px 20px 3px rgba(0, 0, 0, 0.06)",
              textAlign: "center",
              width: "22rem",
              marginTop: {
                lg: "-50px",
                md: "-50px",
                sm: "2px",
                xs: "2px",
              },
              zIndex: 999,
              pt: 2,
              pl: 1,
              pr: 1,
            }}
          >
            <CardContent>
              <Box sx={{ display: "flex", justifyContent: "center", mb: 3 }}>
                {/* Small Logo */}
                <img
                  src={projectcard2}
                  alt="Small Logo"
                  // style={{ alignItems: "center" }}
                />
              </Box>

              {/* Heading */}
              <Typography
                variant="h5"
                gutterBottom
                style={{
                  color: "#413F3E",
                  fontSize: "22px",
                  fontWeight: "600",
                  lineHeight: "18px",
                  paddingBottom: "20px",
                }}
              >
                Project Objectives
              </Typography>

              {/* Paragraph */}
              <Typography
                variant="body1"
                color="textSecondary"
                paragraph
                style={{
                  color: "#413F3E",
                  fontSize: "12px",
                  fontWeight: "600",
                }}
              >
                Most children with neurodevelopmental disabilities living in
                South Asia have no access to services. This means that families
                are not given the help they need to fully understand their
                child’s needs and know how best to support them.
              </Typography>

              {/* Learn More Button */}
              <p
                style={{
                  textAlign: "center",
                  fontWeight: "600",
                  color: "#769863",
                }}
              >
                Learn More
              </p>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default ProjectCard;

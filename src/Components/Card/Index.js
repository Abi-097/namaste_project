import React from "react";
import { Card, CardContent, Typography, Button, Box } from "@mui/material";
import { projectcard1 } from "../../config/Images/Images";
import { Grid } from "@mui/material";
const ProjectCard = () => {
  return (
    <div
      style={
        {
          // display: "flex",
          // justifyContent: "center",
          // alignItems: "center",
        }
      }
    >
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
              width: "50%",
              //   width: {
              //     lg: "30%",
              //     md: "75%",
              //     xs: "50%",
              //   },
              //   position: {
              //     lg: "absolute",
              //     md: "",
              //     xs: "",
              //   },
              //   height: {
              //     lg: "60%",
              //     sm: "70%",
              //     md: "100%",
              //     xs: "100%",
              //   },
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
              <Typography variant="h5" gutterBottom>
                Project Background
              </Typography>

              {/* Paragraph */}
              <Typography variant="body1" color="textSecondary" paragraph>
                Most children with neurodevelopmental disabilities living in
                South Asia have no access to services. This means that families
                are not given the help they need to fully understand their
                child’s needs and know how best to support them.
              </Typography>

              {/* Learn More Button */}
              <Button variant="contained" color="primary">
                Learn More
              </Button>
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
              //   mt: 30,
              borderRadius: 10,
              background: "#FFF",
              boxShadow: "2px 2px 20px 3px rgba(0, 0, 0, 0.06)",
              textAlign: "center",
              width: "50%",
              //   width: {
              //     lg: "30%",
              //     md: "75%",
              //     xs: "50%",
              //   },
              //   position: {
              //     lg: "absolute",
              //     md: "",
              //     xs: "",
              //   },
              //   height: {
              //     lg: "60%",
              //     sm: "70%",
              //     md: "100%",
              //     xs: "100%",
              //   },
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
              <Typography variant="h5" gutterBottom>
                Project Background
              </Typography>

              {/* Paragraph */}
              <Typography variant="body1" color="textSecondary" paragraph>
                Most children with neurodevelopmental disabilities living in
                South Asia have no access to services. This means that families
                are not given the help they need to fully understand their
                child’s needs and know how best to support them.
              </Typography>

              {/* Learn More Button */}
              <Button variant="contained" color="primary">
                Learn More
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default ProjectCard;

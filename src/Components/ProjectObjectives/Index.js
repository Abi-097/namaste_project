import React from "react";
import "./style.css";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
const data = [
  {
    text: "Identifying the non-specialist workforce to support both detection and intervention services in all four contexts.",
  },
  {
    text: "Adapt the SACS screening tool for administration in the four districts and develop a data pathway for detection results to link with the appropriate intervention pathway.",
  },
  {
    text: "Digitise training and supervision of the PASS Plus intervention which can support non-specialist providers to learn the intervention remotely,",
  },
  {
    text: "Develop a context-specific community awareness campaign which would allow broad stakeholder engagement with the pathway to care.",
  },
  {
    text: "Establish the detection-care pathway and evaluate the effectiveness, including cost effectiveness, of these pathways in four differing public systems.",
  },
  {
    text: "Build wider awareness on early childhood care and development for neurodevelopmental disabilities by working with advocates and advisors with experiential understanding of disability.",
  },
  {
    text: "Build clinical, training, and research capacity in the field of neurodevelopmental disabilities in the region.",
  },
];
const ProjectObjectivesCard = () => {
  return (
    <div className="project_body">
      <h4 className="project_h4">Project background</h4>

      <Typography variant="body2" className="project_typography1">
        Our aim is to address the current gaps where families are struggling to
        access early detection and care services. To achieve these aims we will
        be:
      </Typography>

      <Grid container spacing={2}>
        {data.map(
          (
            item,
            index // Mapping through data array
          ) => (
            <Grid
              item
              xs={6}
              key={index}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItem: "center",
              }}
            >
              <Card sx={{ height: "250px", width: "600px" }}>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  {item.text} {/* Accessing text property of each item */}
                </Typography>
              </Card>
            </Grid>
          )
        )}
        {/* </Grid> */}
        {/* <Grid item xs={6}></Grid> */}
      </Grid>
    </div>
  );
};

export default ProjectObjectivesCard;

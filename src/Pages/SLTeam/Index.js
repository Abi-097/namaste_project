import React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { aboutus, aboutus1, aboutus2, email } from "../../config/Images/Images";

const data = [
  {
    id: 1,
    image: aboutus1,
    name: "Pat Heffernan",
    position: "President",
    description: "Pat — marketing strategist, writer, and founder of",
    description2: "Marketing Partners — serves as creative change ",
    description3: "director for our client team.",
    email: "aaa@gmail.com",
  },
  {
    id: 2,
    image: aboutus1,
    name: "Pat Heffernan",
    position: "President",
    description: "Pat — marketing strategist, writer, and founder of",
    description2: "Marketing Partners — serves as creative change ",
    description3: "director for our client team.",
    email: "aaa@gmail.com",
  },
  {
    id: 3,
    image: aboutus1,
    name: "Pat Heffernan",
    position: "President",
    description: "Pat — marketing strategist, writer, and founder of",
    description2: "Marketing Partners — serves as creative change ",
    description3: "director for our client team.",
    email: "aaa@gmail.com",
  },
  {
    id: 4,
    image: aboutus1,
    name: "Pat Heffernan",
    position: "President",
    description: "Pat — marketing strategist, writer, and founder of",
    description2: "Marketing Partners — serves as creative change ",
    description3: "director for our client team.",
    email: "aaa@gmail.com",
  },
  {
    id: 5,
    image: aboutus1,
    name: "Pat Heffernan",
    position: "President",
    description: "Pat — marketing strategist, writer, and founder of",
    description2: "Marketing Partners — serves as creative change ",
    description3: "director for our client team.",
    email: "aaa@gmail.com",
  },
  {
    id: 6,
    image: aboutus1,
    name: "Pat Heffernan",
    position: "President",
    description: "Pat — marketing strategist, writer, and founder of",
    description2: "Marketing Partners — serves as creative change ",
    description3: "director for our client team.",
    email: "aaa@gmail.com",
  },
  {
    id: 7,
    image: aboutus1,
    name: "Pat Heffernan",
    position: "President",
    description: "Pat — marketing strategist, writer, and founder of",
    description2: "Marketing Partners — serves as creative change ",
    description3: "director for our client team.",
    email: "aaa@gmail.com",
  },
  {
    id: 8,
    image: aboutus1,
    name: "Pat Heffernan",
    position: "President",
    description: "Pat — marketing strategist, writer, and founder of",
    description2: "Marketing Partners — serves as creative change ",
    description3: "director for our client team.",
    email: "aaa@gmail.com",
  },
  {
    id: 9,
    image: aboutus1,
    name: "Pat Heffernan",
    position: "President",
    description: "Pat — marketing strategist, writer, and founder of",
    description2: "Marketing Partners — serves as creative change ",
    description3: "director for our client team.",
    email: "aaa@gmail.com",
  },
];
const SLTeam = () => {
  return (
    <div>
      <Typography
        variant="h4"
        component="h2"
        sx={{
          fontWeight: "700",
          fontSize: "64px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mt: 4,
          mb: 3,
        }}
      >
        Our Team
      </Typography>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItem: "center",
        }}
      >
        <Grid
          container
          spacing={2}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignitem: "center",
            p: 9,
          }}
        >
          {data.map((member) => (
            <Grid
              key={member.id}
              item
              lg={6}
              md={6}
              sm={6}
              xs={12}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItem: "center",
              }}
            >
              <div>
                <Box>
                  <img src={member.image} alt={member.name} />
                </Box>
                <Box>
                  <p
                    style={{
                      fontWeight: "500",
                      fontSize: "16px",
                      color: "#474747",
                    }}
                  >
                    {member.name}
                  </p>
                  <p
                    style={{
                      fontWeight: "500",
                      fontSize: "16px",
                      color: "#474747",
                    }}
                  >
                    {member.position}
                  </p>
                  <p
                    style={{
                      //   fontWeight: "500",
                      fontSize: "16px",
                      color: "#474747",
                    }}
                  >
                    {member.description} <br />
                    {member.description2}
                    <br />
                    {member.description3}
                  </p>
                  <a href={`mailto:${member.email}`}>
                    {" "}
                    <img src={email} alt="email" />{" "}
                  </a>
                </Box>
              </div>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default SLTeam;

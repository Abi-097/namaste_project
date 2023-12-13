import React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import {
  aboutus,
  aboutus1,
  aboutus2,
  email,
  asiri,
  raj,
  chamika,
  hasuni,
  heshali,
  poornima,
  nethma,
  piumi,
  rasika,
  sakuni,
  shashini,
  Shehara,
  yas,
} from "../../config/Images/Images";

const data = [
  {
    id: 1,
    image: asiri,
    name: "Dr. Asiri Hewamalage",
    position: "Principle Investigator",
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
    image: raj,
    name: "Dr Raj Phriyadharshini",
    position: "Research Team Director",
    description: "Pat — marketing strategist, writer, and founder of",
    description2: "Marketing Partners — serves as creative change ",
    description3: "director for our client team.",
    email: "aaa@gmail.com",
  },
  {
    id: 4,
    image: chamika,
    name: "Chamika Hansamalee",
    position: "Coordinator - Community Engagement and Involement (CEI)",

    description: "Pat — marketing strategist, writer, and founder of",
    description2: "Marketing Partners — serves as creative change ",
    description3: "director for our client team.",
    email: "aaa@gmail.com",
  },
  {
    id: 5,
    image: hasuni,
    name: "Hasuni Yasora Withana",
    position: "Research Associate",

    description: "Pat — marketing strategist, writer, and founder of",
    description2: "Marketing Partners — serves as creative change ",
    description3: "director for our client team.",
    email: "aaa@gmail.com",
  },
  {
    id: 6,
    image: heshali,

    name: "Heshali De Silva",
    position: "Project Secretary",
    description: "Pat — marketing strategist, writer, and founder of",
    description2: "Marketing Partners — serves as creative change ",
    description3: "director for our client team.",
    email: "aaa@gmail.com",
  },
  {
    id: 7,
    image: poornima,
    name: "Poornima Madhubhashini",

    position: "Accountant",
    description: "Pat — marketing strategist, writer, and founder of",
    description2: "Marketing Partners — serves as creative change ",
    description3: "director for our client team.",
    email: "aaa@gmail.com",
  },
  {
    id: 8,
    image: nethma,
    name: "Nethma Abeysingha",
    position: "Research Associate",
    description: "Pat — marketing strategist, writer, and founder of",
    description2: "Marketing Partners — serves as creative change ",
    description3: "director for our client team.",
    email: "aaa@gmail.com",
  },
  {
    id: 9,
    image: piumi,
    name: "Piumi Dolawaththa",
    position: "Research Associate & CST facilitator",
    description: "Pat — marketing strategist, writer, and founder of",
    description2: "Marketing Partners — serves as creative change ",
    description3: "director for our client team.",
    email: "aaa@gmail.com",
  },
  {
    id: 10,
    image: rasika,
    name: "Rasika Haggepola Arachchi",
    position: "Research Associate",
    description: "Pat — marketing strategist, writer, and founder of",
    description2: "Marketing Partners — serves as creative change ",
    description3: "director for our client team.",
    email: "aaa@gmail.com",
  },
  {
    id: 11,
    image: sakuni,
    name: "Sakuni Hingurangala",

    position: "Direction coordinator",
    description: "Pat — marketing strategist, writer, and founder of",
    description2: "Marketing Partners — serves as creative change ",
    description3: "director for our client team.",
    email: "aaa@gmail.com",
  },

  {
    id: 12,
    image: shashini,
    name: "Shashini Hewavithanagamage",

    position: "Intervention Coordinator",
    description: "Pat — marketing strategist, writer, and founder of",
    description2: "Marketing Partners — serves as creative change ",
    description3: "director for our client team.",
    email: "aaa@gmail.com",
  },
  {
    id: 13,
    image: Shehara,
    name: "Shehara Mayadunne",
    position: "Research Associate",
    description: "Pat — marketing strategist, writer, and founder of",
    description2: "Marketing Partners — serves as creative change ",
    description3: "director for our client team.",
    email: "aaa@gmail.com",
  },
  {
    id: 14,
    image: yas,
    name: "R. T. S. Yashodha Rajapaksha",
    position: "Research Associate & PASS PLUS Master Trainer",
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
                  <img
                    src={member.image}
                    alt={member.name}
                    width="349px"
                    height="520px"
                    style={{ borderRadius: "15px" }}
                  />
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

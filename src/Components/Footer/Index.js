import React from "react";
// import { Typography } from "@material-tailwind/react";
import {
  namastheLogo2,
  instagram,
  facebook,
  linkedin,
} from "../../config/Images/Images";
import AspectRatio from "@mui/joy/AspectRatio";
import Box from "@mui/joy/Box";
import IconButton from "@mui/joy/IconButton";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Divider from "@mui/joy/Divider";
import Input from "@mui/joy/Input";
import List from "@mui/joy/List";
import ListSubheader from "@mui/joy/ListSubheader";
import ListItem from "@mui/joy/ListItem";
import ListItemButton from "@mui/joy/ListItemButton";
import Typography from "@mui/joy/Typography";
import Sheet from "@mui/joy/Sheet";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import GitHubIcon from "@mui/icons-material/GitHub";
import ColorLensRoundedIcon from "@mui/icons-material/ColorLensRounded";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div>
      <Sheet
        sx={{
          flexGrow: 1,
          p: 2,
          borderRadius: { xs: 0, sm: "sm" },
          bgcolor: "#F8F8F8",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row", lg: "row" },
            alignItems: { md: "center" },
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 2,
            marginLeft: { lg: "12rem", md: "2rem", sm: "1rem", xs: 0 },
            marginRight: { lg: "12rem", md: "2rem", sm: "2rem", xs: 0 },
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              // paddingLeft: "1rem",
            }}
          >
            <img
              src={namastheLogo2}
              alt="namastheLogo2"
              height="180px"
              width="387px"
            />
          </div>
          <List
            size="sm"
            orientation="horizontal"
            wrap
            sx={{
              flexGrow: 0,
              "--ListItem-radius": "8px",
              "--ListItem-gap": "0px",
            }}
          >
            <ListItem
              nested
              sx={{
                width: { xs: "50%", sm: "33%", md: 140, lg: "33%" },
                padding: "25px",
              }}
            >
              <ListItem
                sx={{ color: "#000", fontSize: "24px", fontWeight: "500" }}
              >
                Links
              </ListItem>
              <List>
                <Link to="/" style={{ textDecoration: "none" }}>
                  <ListItem>
                    <ListItem
                      sx={{
                        color: "#454342",
                        fontSize: "18px",
                        fontWeight: "500",
                        "&:hover": { cursor: "pointer" },
                      }}
                    >
                      Home
                    </ListItem>
                  </ListItem>
                </Link>
                <Link to="/team" style={{ textDecoration: "none" }}>
                  <ListItem>
                    <ListItem
                      sx={{
                        color: "#454342",
                        fontSize: "18px",
                        fontWeight: "500",
                        "&:hover": { cursor: "pointer" },
                      }}
                    >
                      About Us
                    </ListItem>
                  </ListItem>
                </Link>
                <ListItem>
                  <ListItem
                    sx={{
                      color: "#454342",
                      fontSize: "18px",
                      fontWeight: "500",
                      "&:hover": { cursor: "pointer" },
                    }}
                  >
                    Resources
                  </ListItem>
                </ListItem>
                <ListItem>
                  <ListItem
                    sx={{
                      color: "#454342",
                      fontSize: "18px",
                      fontWeight: "500",
                      "&:hover": { cursor: "pointer" },
                    }}
                  >
                    Events
                  </ListItem>
                </ListItem>
                <ListItem>
                  <ListItem
                    sx={{
                      color: "#454342",
                      fontSize: "18px",
                      fontWeight: "500",
                      "&:hover": { cursor: "pointer" },
                    }}
                  >
                    Contact
                  </ListItem>
                </ListItem>
              </List>
            </ListItem>
            <ListItem
              nested
              sx={{
                width: { xs: "50%", sm: "33%", md: 140, lg: "33%" },
                padding: "25px",
              }}
            >
              <ListItem
                sx={{
                  color: "#000",
                  fontSize: "24px",
                  fontWeight: "500",
                }}
              >
                Follow
              </ListItem>
              <List>
                <ListItem>
                  <a href="https://www.instagram.com/">
                    <InstagramIcon />
                  </a>
                  &nbsp;
                  <a href="https://www.facebook.com/">
                    <FacebookRoundedIcon />
                  </a>
                  &nbsp;
                  <a href="https://www.linkedin.com/">
                    <LinkedInIcon />
                  </a>
                  &nbsp;
                  <a href="https://www.youtube.com/">
                    <YouTubeIcon />
                  </a>
                  &nbsp;
                </ListItem>
              </List>
            </ListItem>
            <ListItem
              nested
              sx={{
                width: { xs: "50%", sm: "33%", md: 180, lg: "33%" },
                padding: "25px",
              }}
            >
              <ListItem
                sx={{ color: "#000", fontSize: "24px", fontWeight: "500" }}
              >
                Contact
              </ListItem>
              <List sx={{ "--ListItemDecorator-size": "32px" }}>
                <ListItem>
                  <p style={{ fontSize: "18px", fontWeight: 500 }}>
                    195M, 'Karlshue Court', Baseline Road, Colombo 09, <br />
                    Sri Lanka.
                    <a href="mailto:info@namasthesl.com">
                      <p>info@namasthesl.com</p>
                    </a>
                  </p>
                </ListItem>
              </List>
            </ListItem>
          </List>
        </Box>
      </Sheet>
    </div>
  );
};

export default Footer;

/*
import React from "react";
// import { Typography } from "@material-tailwind/react";
import {
  namastheLogo2,
  instagram,
  facebook,
  linkedin,
} from "../../config/Images/Images";
import AspectRatio from "@mui/joy/AspectRatio";
import Box from "@mui/joy/Box";
import IconButton from "@mui/joy/IconButton";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Divider from "@mui/joy/Divider";
import Input from "@mui/joy/Input";
import List from "@mui/joy/List";
import ListSubheader from "@mui/joy/ListSubheader";
import ListItem from "@mui/joy/ListItem";
import ListItemButton from "@mui/joy/ListItemButton";
import Typography from "@mui/joy/Typography";
import Sheet from "@mui/joy/Sheet";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import GitHubIcon from "@mui/icons-material/GitHub";
import ColorLensRoundedIcon from "@mui/icons-material/ColorLensRounded";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  return (
    <div>
      <Sheet
        sx={{
          flexGrow: 1,
          p: 2,
          borderRadius: { xs: 0, sm: "sm" },
          bgcolor: "#F8F8F8",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: { md: "center" },
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 2,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              // paddingLeft: "1rem",
            }}
          >
            <img
              src={namastheLogo2}
              alt="namastheLogo2"
              height="180px"
              width="387px"
            />
          </div>
          <List
            size="sm"
            orientation="horizontal"
            wrap
            sx={{
              flexGrow: 0,
              "--ListItem-radius": "8px",
              "--ListItem-gap": "0px",
            }}
          >
            <ListItem nested sx={{ width: { xs: "50%", md: 140 } }}>
              <ListSubheader
                sx={{ color: "#000", fontSize: "24px", fontWeight: "500" }}
              >
                Links
              </ListSubheader>
              <List>
                <ListItem>
                  <ListItem
                    sx={{
                      color: "#454342",
                      fontSize: "18px",
                      fontWeight: "500",
                      "&:hover": { cursor: "pointer" },
                    }}
                  >
                    Home
                  </ListItem>
                </ListItem>
                <ListItem>
                  <ListItem
                    sx={{
                      color: "#454342",
                      fontSize: "18px",
                      fontWeight: "500",
                      "&:hover": { cursor: "pointer" },
                    }}
                  >
                    About Us
                  </ListItem>
                </ListItem>
                <ListItem>
                  <ListItem
                    sx={{
                      color: "#454342",
                      fontSize: "18px",
                      fontWeight: "500",
                      "&:hover": { cursor: "pointer" },
                    }}
                  >
                    Resources
                  </ListItem>
                </ListItem>
                <ListItem>
                  <ListItem
                    sx={{
                      color: "#454342",
                      fontSize: "18px",
                      fontWeight: "500",
                      "&:hover": { cursor: "pointer" },
                    }}
                  >
                    Events
                  </ListItem>
                </ListItem>
                <ListItem>
                  <ListItem
                    sx={{
                      color: "#454342",
                      fontSize: "18px",
                      fontWeight: "500",
                      "&:hover": { cursor: "pointer" },
                    }}
                  >
                    Contact
                  </ListItem>
                </ListItem>
              </List>
            </ListItem>
            <ListItem nested sx={{ width: { xs: "50%", md: 140 } }}>
              <ListSubheader
                sx={{ color: "#000", fontSize: "24px", fontWeight: "500" }}
              >
                Follow
              </ListSubheader>
              <List>
                <ListItem>
                  <a href="https://www.instagram.com/">
                    <InstagramIcon />
                  </a>
                  &nbsp;
                  <a href="https://www.facebook.com/">
                    <FacebookRoundedIcon />
                  </a>
                  &nbsp;
                  <a href="https://www.linkedin.com/">
                    <LinkedInIcon />
                  </a>
                  &nbsp;
                  <a href="https://www.youtube.com/">
                    <YouTubeIcon />
                  </a>
                  &nbsp;
                </ListItem>
              </List>
            </ListItem>
            <ListItem nested sx={{ width: { xs: "50%", md: 180 } }}>
              <ListSubheader
                sx={{ color: "#000", fontSize: "24px", fontWeight: "500" }}
              >
                Contact
              </ListSubheader>
              <List sx={{ "--ListItemDecorator-size": "32px" }}>
                <ListItem>
                  <ListItem
                    sx={{
                      color: "#060505",
                      fontSize: "18px",
                      fontWeight: "500",
                    }}
                  >
                    <p>
                      195M, 'Karlshue Court', <br />
                      Baseline Road, Colombo 09, <br />
                      Sri Lanka.
                      <a href="mailto:info@namasthesl.com">
                        <p>info@namasthesl.com</p>
                      </a>
                    </p>

                    <div></div>
                  </ListItem>
                </ListItem>
              </List>
            </ListItem>

            <ListItem>
              <ListSubheader />
              <List sx={{ "--ListItemDecorator-size": "32px" }}>
                <ListItem />
              </List>
            </ListItem>
          </List>
        </Box>
      </Sheet>
    </div>
  );
};

export default Footer;

*/

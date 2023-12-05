import React from "react";
import { Typography } from "@material-tailwind/react";
import {
  namastheLogo2,
  instagram,
  facebook,
  linkedin,
} from "../../config/Images/Images";

const LINKS = [
  {
    title: "Links",
    items: ["Home", "About Us", "Resources", "Events", "Contact"],
  },
  {
    title: "Follow",
  },
  {
    title: "Contact",
    items: [
      "2211 Campus Drive, Evanston, IL 60208",
      "insight@kellogg.northwestern.edu",
      "847-491-3300",
    ],
  },
];

const Footer = () => {
  return (
    <div>
      <footer className="relative w-full bg-grey">
        <div className="mx-auto w-full max-w-7xl px-8">
          <div className="grid grid-cols-1 justify-between gap-4 md:grid-cols-2">
            <Typography variant="h5" className="mb-6 flex items-center">
              <img src={namastheLogo2} alt="namastheLogo2" />
            </Typography>
            <div className="grid grid-cols-3 justify-between gap-4">
              {LINKS.map(({ title, items }) => (
                <ul key={title}>
                  <Typography
                    variant="lead"
                    className="mb-3 font-large opacity-90 text-black"
                    style={{ fontWeight: 500 }}
                  >
                    {title}
                  </Typography>
                  {title === "Follow" ? (
                    <div className="flex gap-2">
                      <img
                        src={instagram}
                        alt="Instagram"
                        width="26"
                        height="26"
                      />
                      <img
                        src={facebook}
                        alt="Facebook"
                        width="26"
                        height="26"
                      />
                      <img
                        src={linkedin}
                        alt="LinkedIn"
                        width="26"
                        height="26"
                      />
                    </div>
                  ) : (
                    items.map((item, index) => (
                      <li key={index}>
                        <Typography
                          as={index === 0 ? "div" : "a"}
                          href={index === 0 ? null : "#"}
                          color={index === 0 ? "div" : "gray"}
                          className={
                            index === 0
                              ? "py-1.5 font-normal transition-colors hover:text-blue-gray-900"
                              : "py-1.5 font-normal transition-colors hover:text-blue-gray-900"
                          }
                        >
                          {item}
                        </Typography>
                      </li>
                    ))
                  )}
                </ul>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

import React, { useState } from "react";
import { Link } from "react-router-dom";
const NeedToJoin = () => {
  const [isHovered, setIsHovered] = useState(false);
  const hoverStyles = {
    transition: "transform 0.3s ease, color 0.3s ease",
    transform: isHovered ? "scale(1.1)" : "scale(1)",
    color: isHovered ? "#769863" : "#413F3E",
    cursor: "pointer",
    display: "inline-block",
  };

  return (
    <div style={{ marginTop: "10rem", marginBottom: "10rem" }}>
      <h4 className="text-gray-800 text-center text-5xl font-bold">
        <Link to="/join">
          <span
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={hoverStyles}
          >
            Need to join ?
          </span>
        </Link>
      </h4>
    </div>
  );
};

export default NeedToJoin;

// const [isHovered, setIsHovered] = useState(false);
// const hoverStyles = {
//   transition: "transform 0.3s ease, color 0.3s ease", // Add transition for both transform and color change
//   transform: isHovered ? "scale(1.1)" : "scale(1)",
//   color: isHovered ? "#00A86B" : "#413F3E", // Change color on hover
//   cursor: "pointer",
//   display: "inline-block", // Ensures the width is only as wide as the text
// };

// return (
//   <div>
//     <h4 className="text-center text-5xl">
//       <span
//         onMouseEnter={() => setIsHovered(true)}
//         onMouseLeave={() => setIsHovered(false)}
//         style={hoverStyles}
//       >
//         Need to join ?
//       </span>
//     </h4>
//   </div>

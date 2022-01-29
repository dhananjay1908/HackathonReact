import React from "react";
import { Typography } from "@mui/material";

const CardDetails = (props) => {
  return (
    <Typography
      style={{
        fontFamily: "Inter",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: "12px",
        lineHeight: "15px",
        letterSpacing: "0.01em",
        margin: "8px",
        padding: "0 8px",
        ...props.style,
      }}
    >
      {props.children}
    </Typography>
  );
};
export default CardDetails;

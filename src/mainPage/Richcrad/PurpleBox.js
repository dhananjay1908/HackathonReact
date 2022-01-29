import React from "react";
import { Card, Typography, CardMedia, Grid, Box } from "@mui/material";

const Purplebox = (props) => {
  return (
    <Typography
      style={{
        backgroundColor: "#E4EAFF",
        boxSizing: "border-box",
        borderRadius: "8px",
        fontFamily: "Inter",
        fontStyle: "normal",
        fontWeight: "700",
        fontSize: "10px",
        lineHeight: "12px",
        letterSpacing: "0.01em",
        color: "#0D38CE",
        padding: "5px 16px",
        marginRight: "10px",
      }}
    >
      {props.children}
    </Typography>
  );
};

export default Purplebox;

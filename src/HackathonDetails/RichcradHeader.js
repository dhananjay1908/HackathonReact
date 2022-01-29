import { Card, CardHeader, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import vector from "./Vector.png";

const RichcradHeader = (props) => {
  return (
    <Card
      style={{
        margin: "5vw 5vw 0 5vw",
        borderRadius: "12px 12px 0 0",
        borderBottom: "0.5px solid #B8C8FF",
      }}
    >
      <Box
        sx={{
          display: "flex",
          direction: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography
          style={{
            fontFamily: "Inter",
            fontStyle: "normal",
            fontWeight: "700",
            fontSize: "14px",
            lineHeight: "17px",
            letterSpacing: "0.05em",
            color: "#0D38CE",
            padding: "18px 8%",
          }}
        >
          {props.children}
        </Typography>
        <div
          style={{
            background: "#B8C8FF",
            width: "24px",
            height: "24px",
            borderRadius: "50%",
            marginRight: "8%",
          }}
        >
          <img src={props.img} style={{ padding: "7px", ...props.style }}></img>
        </div>
      </Box>
    </Card>
  );
};

export default RichcradHeader;

import React from "react";
import { Card, Typography, CardMedia, Grid, Box } from "@mui/material";

const Stickyfooter = (props) => {
  return (
    <div
      style={{
        position: "fixed",
        bottom: "0",
        width: "100vw",
        height: "7vh",
        background: "white",
        borderRadius: "30px 30px 0 0",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          p: 1,
          m: 1,
          // bgcolor: "background.paper",
          borderRadius: 1,
          paddingBottom: "0",
        }}
      >
        <div class="hack"></div>
        <div
          class="profile"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div class="pf"></div>
        </div>
        <div class="notif"></div>
      </Box>
    </div>
  );
};

export default Stickyfooter;

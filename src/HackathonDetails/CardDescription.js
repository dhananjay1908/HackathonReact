import React from "react";
import {
  Card,
  Typography,
  CardMedia,
  Grid,
  Box,
  CardHeader,
} from "@mui/material";
import Purplebox from "../mainPage/Richcrad/PurpleBox";
import CardDetails from "./CradDetails";
import BlueButton from "../mainPage/Richcrad/BlueButton";
import BoldTitle from "../mainPage/Richcrad/BoldTitle";
import LightTitle from "../mainPage/Richcrad/LightTitle";
import itam from "./interface.png";
import BlueText from "../mainPage/Richcrad/BlueText";

const CardDescription = (props) => {
  return (
    <Card style={{ margin: "0 5vw", borderRadius: "0", ...props.style }}>
      <Box
        sx={{
          display: "flex",
          p: 1,
          m: 1,
          bgcolor: "background.paper",
          borderRadius: 1,
          paddingBottom: "0",
        }}
      >
        <Grid xs={2.5}>
          <img src={itam} style={{ borderRadius: "10px" }}></img>
        </Grid>
        <Grid
          xs={6.5}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "center",
          }}
        >
          <BoldTitle>ITAM-1</BoldTitle>
          <LightTitle style={{ padding: "0" }}>3 человека</LightTitle>
        </Grid>
        <Grid xs={3} sx={{ display: "flex", alignItems: "center" }}>
          <BlueButton>Запрос</BlueButton>
        </Grid>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "flex-start",
          p: 1,
          m: 1,
          padding: "0 8px 10px 8px",
        }}
      >
        <BlueText>Дизайнер</BlueText>
        <BlueText>Python - разработчик</BlueText>
      </Box>
    </Card>
  );
};

export default CardDescription;

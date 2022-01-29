import RichcradHeader from "../HackathonDetails/RichcradHeader";
import Appbar from "../mainPage/AppBar/Appbar";
import notif from "../mainPage/Notifications.png";
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
import CardDetails from "../HackathonDetails/CradDetails";
import BlueButton from "../mainPage/Richcrad/BlueButton";
import BoldTitle from "../mainPage/Richcrad/BoldTitle";
import LightTitle from "../mainPage/Richcrad/LightTitle";
import itam from "../HackathonDetails/interface.png";
import BlueText from "../mainPage/Richcrad/BlueText";
import ITAMimg from "./ITAMimg";
import ITAMtitle from "./ITAMtitle";
import ITAMbutton from "./ITAMbutton";

const CardDetailed = (props) => {
  return (
    <Card
      elevation={props.elevation}
      style={{ margin: "0 5vw", borderRadius: "0", ...props.style }}
    >
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
        <ITAMimg img={props.img}></ITAMimg>
        <ITAMtitle></ITAMtitle>
        <ITAMbutton></ITAMbutton>
      </Box>
      <LightTitle>{props.lighttitle}</LightTitle>
      <Box
        sx={{
          display: "flex",
          alignItems: "flex-start",
          p: 1,
          m: 1,
          padding: "0 8px 8px 8px",
        }}
      >
        <Purplebox>Design</Purplebox>
        <Purplebox>UX/UI</Purplebox>
        <Purplebox>Figma</Purplebox>
      </Box>
    </Card>
  );
};

export default CardDetailed;

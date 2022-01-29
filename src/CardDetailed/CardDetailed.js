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
import CardITAM from "./CardITAM";
import itam from "../HackathonDetails/interface.png";
import BlueText from "../mainPage/Richcrad/BlueText";
import Stickyfooter from "../mainPage/Stickyfooter";
const CardDetailed = (props) => {
  return (
    <div
      style={{ width: "100%", background: "#E4EAFF", paddingBottom: "400px" }}
    >
      <Appbar style={{ height: "90px", overflow: "hidden" }}></Appbar>
      <RichcradHeader img={notif} style={{ padding: "8px", height: "10px" }}>
        Приглашения
      </RichcradHeader>
      <CardITAM
        img={itam}
        lighttitle="Привет, нам нужен дизайнер, не хочешь к нам в команду?"
      ></CardITAM>
      <CardITAM
        elevation="none"
        img={itam}
        style={{ borderRadius: "0 0 12px 12px" }}
        lighttitle="Привет, нам нужен дизайнер, не хочешь к нам в команду?"
      ></CardITAM>
      <Stickyfooter></Stickyfooter>
    </div>
  );
};

export default CardDetailed;

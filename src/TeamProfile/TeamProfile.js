import React from "react";
import RichcradHeader from "../HackathonDetails/RichcradHeader";
import Appbar from "../mainPage/AppBar/Appbar";
import Richcrad from "../mainPage/Richcrad/Richcrad";
import profile from "../mainPage/Profile.png";
import ProfileCard from "../Profile/ProfileCard";
import CardDetails from "../HackathonDetails/CradDetails";
import ProfileITAM from "../Profile/ProfileITAM";
import Stickyfooter from "../mainPage/Stickyfooter";
import itam from "../HackathonDetails/interface.png";
import { Card, Grid } from "@mui/material";
import ITAMimg from "../CardDetailed/ITAMimg";
import BoldTitle from "../mainPage/Richcrad/BoldTitle";
import LightTitle from "../mainPage/Richcrad/LightTitle";
import telegram from "./telegram.png";

const TeamProfile = (props) => {
  return (
    <div
      style={{ width: "100%", background: "#E4EAFF", paddingBottom: "170px" }}
    >
      <Appbar style={{ height: "90px", overflow: "hidden" }}></Appbar>

      <RichcradHeader img={profile} style={{ padding: "7px", height: "10px" }}>
        Текущая команда
      </RichcradHeader>
      <Card style={{ margin: "0 5vw", borderRadius: "0 0 12px 12px" }}>
        <Grid
          xs={12}
          sx={{
            display: "flex",
            flexDirection: "row",
            // justifyContent: "space-between",
            alignItems: "center",
            padding: "16px",
          }}
        >
          <ITAMimg img={itam}></ITAMimg>
          <Grid
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "center",
              paddingRight: "45%",
            }}
          >
            <BoldTitle>ITAM-1</BoldTitle>
            <LightTitle>More Tech</LightTitle>
          </Grid>
          <div
            style={{
              background: "#37AEE2",
              borderRadius: "50%",
              height: "20px",
              width: "20px",
            }}
          >
            <img src={telegram} style={{ padding: "3px" }}></img>
          </div>
        </Grid>
        <Grid style={{ padding: "0 16px 16px 0" }}>
          <LightTitle>
            Собираемся участвовать на трэке мобильной разработки
          </LightTitle>
        </Grid>
      </Card>
      <RichcradHeader img={profile} style={{ padding: "7px", height: "10px" }}>
        Достижения
      </RichcradHeader>
      <ProfileCard
        style={{ margin: "0 5vw", borderRadius: "0" }}
        boldtitle="Павел Дуров"
        lighttitle="БИВТ 21 - 2"
      ></ProfileCard>
      <ProfileCard
        style={{ margin: "0 5vw", borderRadius: "0 0 12px 12px" }}
        boldtitle="Tim Cook"
        lighttitle="БИВТ 21 - 2"
      ></ProfileCard>
      <Stickyfooter></Stickyfooter>
    </div>
  );
};

export default TeamProfile;

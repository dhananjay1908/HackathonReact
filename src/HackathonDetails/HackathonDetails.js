import { Card, Typography } from "@mui/material";
import React from "react";
import Appbar from "../mainPage/AppBar/Appbar";
import Richcrad from "../mainPage/Richcrad/Richcrad";
import Stickyfooter from "../mainPage/Stickyfooter";
import CardDetails from "./CradDetails";
import RichcradHeader from "./RichcradHeader";
import vector from "./Vector.png";
import profile from "../mainPage/Profile.png";
import CardDescription from "./CardDescription";

const HackathonDetails = (props) => {
  return (
    <div
      style={{ width: "100%", background: "#E4EAFF", paddingBottom: "100px" }}
    >
      <Appbar style={{ height: "90px", overflow: "hidden" }}></Appbar>
      <RichcradHeader img={vector}>Хакатон</RichcradHeader>
      <Richcrad
        style={{ marginTop: "0", borderRadius: "0 0 12px 12px" }}
      ></Richcrad>

      <RichcradHeader img={vector}>Треки</RichcradHeader>
      <Card style={{ margin: "0 5vw 0 5vw", borderRadius: "0 0 12px 12px" }}>
        <Typography
          style={{
            fontFamily: "Inter",
            fontStyle: "normal",
            fontWeight: "700",
            fontSize: "14px",
            lineHeight: "20px",
            padding: "3% 16px 1% 16px",
          }}
        >
          Мобильная разработка
        </Typography>
        <CardDetails style={{ paddingBottom: "8px" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio amet
          feugiat ut integer tincidunt sed. Fusce vulputate sed commodo, sed
          lorem. Mi semper orci, semper vestibulum.
        </CardDetails>
      </Card>
      <RichcradHeader img={profile} style={{ padding: "4px" }}>
        Команды с набором
      </RichcradHeader>
      <CardDescription
        style={{ borderRadius: "0 0 12px 12px" }}
      ></CardDescription>
      <Stickyfooter></Stickyfooter>
    </div>
  );
};

export default HackathonDetails;

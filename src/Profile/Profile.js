import React from "react";
import RichcradHeader from "../HackathonDetails/RichcradHeader";
import Appbar from "../mainPage/AppBar/Appbar";
import Richcrad from "../mainPage/Richcrad/Richcrad";
import profile from "../mainPage/Profile.png";
import ProfileCard from "./ProfileCard";
import CardDetails from "../HackathonDetails/CradDetails";
import ProfileITAM from "./ProfileITAM";
import Stickyfooter from "../mainPage/Stickyfooter";
import itam from "../HackathonDetails/interface.png";
import boyrun from "../TeamProfile/boyrun.png";
import phone from "../TeamProfile/phone.png";
import { Hidden } from "@mui/material";

const Profile = (props) => {
  return (
    <div
      style={{ width: "100%", background: "#E4EAFF", paddingBottom: "100px" }}
    >
      <Appbar style={{ height: "90px", overflow: "hidden" }}></Appbar>
      <RichcradHeader img={profile} style={{ padding: "7px", height: "10px" }}>
        Профиль
      </RichcradHeader>
      <ProfileCard
        boldtitle="Tim Cook"
        lighttitle="БИВТ 21 - 2"
        style={{ margin: "0 5vw", borderRadius: "0 0 12px 12px" }}
      ></ProfileCard>

      <RichcradHeader img={profile} style={{ padding: "7px", height: "10px" }}>
        Текущая команда
      </RichcradHeader>
      <ProfileITAM
        img={itam}
        style={{ borderRadius: "0 0 12px 12px", paddingBottom: "8px" }}
      ></ProfileITAM>
      <RichcradHeader img={profile} style={{ padding: "7px", height: "10px" }}>
        Достижения
      </RichcradHeader>
      <ProfileITAM img={boyrun} elevation="none"></ProfileITAM>
      <ProfileITAM
        img={phone}
        elevation="none"
        style={{ borderRadius: "0 0 12px 12px", paddingBottom: "10px" }}
      ></ProfileITAM>
      <Stickyfooter></Stickyfooter>
    </div>
  );
};

export default Profile;

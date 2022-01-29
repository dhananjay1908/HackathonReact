import logo from "./logo.svg";
import "./App.css";
import Card from "@mui/material/Card";
import { Box, CardHeader, imageListClasses, Typography } from "@mui/material";
import Background from "./mainPage/Background";
import Appbar from "./mainPage/AppBar/Appbar";
import React from "react";
import Richcrad from "./mainPage/Richcrad/Richcrad";
import Mainpage from "./mainPage/Mainpage";
import HackathonDetails from "./HackathonDetails/HackathonDetails";
import CardDetailed from "./CardDetailed/CardDetailed";
import Profile from "./Profile/Profile";
import TeamProfile from "./TeamProfile/TeamProfile";

function App() {
  return (
    <React.Fragment>
      {/* <Mainpage></Mainpage> */}
      {/* <HackathonDetails></HackathonDetails> */}
      {/* <CardDetailed></CardDetailed> */}
      {/* <Profile></Profile> */}
      <TeamProfile></TeamProfile>
      <div></div>
    </React.Fragment>
  );
}

export default App;

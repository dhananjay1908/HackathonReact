import React from "react";
import Appbar from "./AppBar/Appbar";
import Richcrad from "./Richcrad/Richcrad";
import Stickyfooter from "./Stickyfooter";

const Mainpage = (props) => {
  return (
    <div
      style={{ width: "100%", background: "#E4EAFF", paddingBottom: "100px" }}
    >
      <Appbar></Appbar>
      <Richcrad></Richcrad>
      <Richcrad></Richcrad>
      <Richcrad></Richcrad>
      <Stickyfooter></Stickyfooter>
    </div>
  );
};

export default Mainpage;

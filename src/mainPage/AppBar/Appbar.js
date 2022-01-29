import { Card, Typography, CardMedia, Grid } from "@mui/material";
import React from "react";
import classes from "./Appbar.module.css";
import star from "./image8.png";
import IT from "./it.png";
import mu from "./mu.png";
import m from "./m.png";
import rectangle from "./Rectangle 5.png";
import { typography } from "@mui/system";

const Appbar = (props) => {
  return (
    <Grid
      container
      className={classes.bgimg}
      style={{
        width: "100%",
        height: "303px",
        ...props.style,
      }}
    >
      <Grid style={{ paddingBottom: "0", height: "50px" }}>
        <img src={IT} style={{ padding: "5vh 0 0 10vw" }}></img>
        <img src={mu} style={{ padding: "5vh 0 0 0" }}></img>
        <img src={m} style={{ padding: "5vh 0 0 0" }}></img>
      </Grid>
      <Grid xs="8" style={{ padding: "5vh 0 0 0", height: "50px" }}>
        <div
          style={{
            background: "white",
            height: "17.56px",
          }}
        >
          <Typography
            style={{
              paddingLeft: "60%",
              paddingBottom: "0",
              fontFamily: "Ubuntu",
              fontStyle: "normal",
              fontWeight: "900",
              fontSize: "14.4488px",
              lineHeight: "84%",
              // color: "white",
            }}
          >
            #хакатоны
          </Typography>
        </div>
      </Grid>
      <Grid xs={12} style={{ paddingTop: "36px" }}>
        <Typography
          style={{
            color: "white",
            padding: "0px 5% 10px 5%",
            paddingBottom: "10px",
            fontFamily: "Inter",
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "28px",
            lineHeight: "34px",
            letterSpacing: "-0.02em",
          }}
        >
          Учавствуй Совершенствуйся Выигрывай бабло
        </Typography>
      </Grid>
      <Grid xs={12}>
        <Typography
          style={{
            color: "white",
            padding: "0px 5% 5% 5%",
            fontFamily: "Inter",
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "12px",
            lineHeight: "15px",
            letterSpacing: "0.01em",
          }}
        >
          последнее не точно
        </Typography>
      </Grid>
    </Grid>
    // // <Card style={{ width: "100vw", height: "33vh", backgroundImage: { star } }}>
    // <CardMedia component="img" height="auto" image={star}>
    //   <Typography color="white">hjvhjv</Typography>
    // </CardMedia>
    // /* <img src={IT} style={{}}></img>
    //   <img src={mu} style={{}}></img>
    //   <img src={m} style={{}}></img> */

    // // </Card>
  );
};

export default Appbar;

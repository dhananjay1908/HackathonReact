import React from "react";
import {
  Card,
  Typography,
  CardMedia,
  Grid,
  Box,
  CardHeader,
} from "@mui/material";
import Purplebox from "./PurpleBox";
import CardDetails from "../../HackathonDetails/CradDetails";
import BlueButton from "./BlueButton";
import BoldTitle from "./BoldTitle";
import LightTitle from "./LightTitle";
import BlueText from "./BlueText";

const Richcrad = (props) => {
  return (
    <Card style={{ margin: "5vw", borderRadius: "12px", ...props.style }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          p: 1,
          m: 1,
          bgcolor: "background.paper",
          borderRadius: 1,
          paddingBottom: "0",
        }}
      >
        <BoldTitle>More Tech</BoldTitle>
        <BlueButton>Сайт</BlueButton>
      </Box>

      <LightTitle>20 октября 2021</LightTitle>

      <Box
        sx={{
          display: "flex",
          alignItems: "flex-start",
          p: 1,
          m: 1,
          padding: "0 8px",
        }}
      >
        <Purplebox>Дизайн</Purplebox>
        <Purplebox>Data Science</Purplebox>
        <Purplebox>AR</Purplebox>
      </Box>

      <CardDetails>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio amet
        feugiat ut integer tincidunt sed. Fusce vulputate sed commodo, sed
        lorem. Mi semper orci, semper vestibulum.
      </CardDetails>

      <Box
        sx={{
          display: "flex",
          alignItems: "flex-start",
          p: 1,
          m: 1,
          padding: "0 8px 10px 8px",
        }}
      >
        <BlueText>Есть отбор</BlueText>
        <BlueText>Регистрация до 21.09</BlueText>
      </Box>
    </Card>
  );
};

export default Richcrad;

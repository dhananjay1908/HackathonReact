import { Card, Grid, Typography } from "@mui/material";
import Profile from "./Profile";
import BoldTitle from "../mainPage/Richcrad/BoldTitle";
import LightTitle from "../mainPage/Richcrad/LightTitle";
import CardDetails from "../HackathonDetails/CradDetails";
import { Box } from "@mui/system";
import Purplebox from "../mainPage/Richcrad/PurpleBox";
import telegram from "../TeamProfile/telegram.png";
import crown from "../TeamProfile/crown.png";

const ProfileCard = (props) => {
  return (
    <Card style={{ margin: "5vw", borderRadius: "12px", ...props.style }}>
      <Grid
        sx={{
          display: "flex",
          p: 1,
          m: 1,
          bgcolor: "background.paper",
          borderRadius: 1,
          paddingBottom: "0",
        }}
      >
        <Grid
          xs={12}
          sx={{
            display: "flex",
            flexDirection: "row",
            // justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Grid
            xs={10}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "center",
              // paddingRight: "50%",
            }}
          >
            <BoldTitle>{props.boldtitle}</BoldTitle>
            <LightTitle style={{ padding: "0" }}>{props.lighttitle}</LightTitle>
          </Grid>
          <Grid
            xs={2}
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                background: "#4C6C91",
                borderRadius: "50%",
                height: "20px",
                width: "20px",
              }}
            >
              <img src={crown} style={{ padding: "4px" }}></img>
            </div>
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
        </Grid>
      </Grid>
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

export default ProfileCard;

import { Grid } from "@mui/material";
import BoldTitle from "../mainPage/Richcrad/BoldTitle";
import LightTitle from "../mainPage/Richcrad/LightTitle";

const ITAMtitle = (props) => {
  return (
    <Grid
      xs={6.5}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center",
      }}
    >
      <BoldTitle>ITAM-1</BoldTitle>
      <LightTitle style={{ padding: "0" }}>3 человека</LightTitle>
    </Grid>
  );
};

export default ITAMtitle;

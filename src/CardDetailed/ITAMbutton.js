import { Grid } from "@mui/material";
import BoldTitle from "../mainPage/Richcrad/BoldTitle";
import LightTitle from "../mainPage/Richcrad/LightTitle";
import BlueButton from "../mainPage/Richcrad/BlueButton";

const ITAMbutton = (props) => {
  return (
    <Grid xs={3} sx={{ display: "flex", alignItems: "center" }}>
      <BlueButton>принять</BlueButton>
    </Grid>
  );
};

export default ITAMbutton;

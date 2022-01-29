import { Grid } from "@mui/material";

import itam from "../HackathonDetails/interface.png";

const ITAMimg = (props) => {
  return (
    <Grid xs={2.5}>
      <img src={props.img} style={{ borderRadius: "10px" }}></img>
    </Grid>
  );
};

export default ITAMimg;

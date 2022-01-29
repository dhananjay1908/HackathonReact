import { Card } from "@mui/material";
import { Box } from "@mui/system";
import ITAMbutton from "../CardDetailed/ITAMbutton";
import ITAMimg from "../CardDetailed/ITAMimg";
import ITAMtitle from "../CardDetailed/ITAMtitle";

const ProfileITAM = (props) => {
  return (
    <Card
      elevation={props.elevation}
      style={{ margin: "0 5vw", borderRadius: "0", ...props.style }}
    >
      <Box
        sx={{
          display: "flex",
          p: 1,
          m: 1,
          bgcolor: "background.paper",
          borderRadius: 1,
          paddingBottom: "0",
        }}
      >
        <ITAMimg img={props.img}></ITAMimg>
        <ITAMtitle></ITAMtitle>
        <ITAMbutton></ITAMbutton>
      </Box>
    </Card>
  );
};

export default ProfileITAM;

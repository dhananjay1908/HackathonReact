import { Typography } from "@mui/material";
const BoldTitle = (props) => {
  return (
    <Typography
      style={{
        fontFamily: "Inter",
        fontStyle: "normal",
        fontWeight: "700",
        fontSize: "16px",
        lineHeight: "145%",
      }}
    >
      {props.children}
    </Typography>
  );
};
export default BoldTitle;

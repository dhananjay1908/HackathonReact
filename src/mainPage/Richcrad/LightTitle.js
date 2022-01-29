import { Typography } from "@mui/material";
const LightTitle = (props) => {
  return (
    <Typography
      style={{
        fontFamily: "Inter",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: "12px",
        lineHeight: "15px",
        letterSpacing: "0.01em",
        color: "rgba(0, 0, 0, 0.6)",
        paddingLeft: "16px",
        ...props.style,
      }}
    >
      {props.children}
    </Typography>
  );
};
export default LightTitle;

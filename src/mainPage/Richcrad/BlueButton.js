import { Typography } from "@mui/material";
const BlueButton = (props) => {
  return (
    <Typography
      style={{
        border: "1px solid #0D38CE",
        boxSizing: "border-box",
        borderRadius: "8px",
        fontFamily: "Inter",
        fontStyle: "normal",
        fontWeight: "700",
        fontSize: "10px",
        lineHeight: "12px",
        letterSpacing: "0.01em",
        color: "#0D38CE",
        padding: "5px 16px",
      }}
    >
      {props.children}
    </Typography>
  );
};
export default BlueButton;

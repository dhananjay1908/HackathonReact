import { Typography } from "@mui/material";

const BlueText = (props) => {
  return (
    <Typography
      style={{
        fontFamily: "Inter",
        fontStyle: "normal",
        fontWeight: "800",
        fontSize: "10px",
        lineHeight: "12px",
        letterSpacing: "0.01em",
        color: "#0D38CE",
        marginRight: "50px",
      }}
    >
      {props.children}
    </Typography>
  );
};

export default BlueText;

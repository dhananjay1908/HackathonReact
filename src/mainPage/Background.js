const Background = (props) => {
  return (
    <div style={{ background: "#E4EAFF", height: "100vh", width: "100vw" }}>
      {props.children}
    </div>
  );
};

export default Background;

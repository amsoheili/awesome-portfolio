import classes from "./Greeting.module.css";
import Card from "@mui/material/Card";

const Greeting = (props) => {
  const spanStyle = {
    color: "#1d3b6b",
    borderBottom: "1px solid #000",
    padding: "1rem 0",
  };
  return (
    <div className={classes["info-section"]}>
      <Card className={classes.introduction}>
        <div className={classes.avatar}></div>
        <div className={classes.greetings}>
          <h1>
            Hello
            <br />
            I'm Amir Mohammad Soheili
            <br />
            <span style={spanStyle}>Front End Developer</span>
          </h1>
        </div>
      </Card>
    </div>
  );
};

export default Greeting;

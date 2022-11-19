import classes from "./Greeting.module.css";
import Card from "@mui/material/Card";

const Greeting = (props) => {
  const spanStyle = {
    color: "#fff",
    borderBottom: "1px solid #ccc",
    padding: "1rem 0",
    textShadow: "4px 4px 2px rgb(81, 54, 238)",
  };

  return (
    <div className={classes["info-section"]} id={props.id}>
      <Card className={classes.introduction}>
        <div className={classes.avatar}></div>
        <div className={classes.greetings}>
          <h1>
            Hello
            <br />
            I'm Amir Mohammad Soheili
            <br />
            <span style={spanStyle}>Front End Player</span>
          </h1>
        </div>
      </Card>
    </div>
  );
};

export default Greeting;

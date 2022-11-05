import classes from "./App.module.css";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Avatar from "@mui/material/Avatar";
import DeveloperImage from "./assets/images/Developer.jpg";
import { useState } from "react";

const App = () => {
  const spanStyle = {
    color: "#1d3b6b",
    "border-bottom": "1px solid #000",
    padding: "1rem 0",
  };

  const [spanText, setSpanText] = useState({
    text: "Front End Developer",
    letter: 0,
  });

  setTimeout(() => {}, 200);

  return (
    <div className={classes.main}>
      <div className={classes.navbar}>
        <AppBar className={classes.appbar}>
          <div className={classes.logo}>
            <h1>AMS</h1>
          </div>
          <div className={classes.links}>
            <Button className={classes.btn}>Home</Button>
            <Button className={classes.btn}>About</Button>
            <Button className={classes.btn}>Contact</Button>
          </div>
        </AppBar>
      </div>
      <div className={classes["home-section"]}>
        <div className={classes.overlay}></div>
        <div className={classes.start}>
          <h1>In The Name Of The God</h1>
        </div>
      </div>
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
    </div>
  );
};

export default App;

import classes from "./Navbar.module.css";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import { useState, useEffect } from "react";

const Navbar = (props) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [pageNum, setPageNum] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
    console.log(Math.round(position / (2 * window.innerHeight)));
    setPageNum(Math.round(position / (2 * window.innerHeight)));
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={classes.navbar}>
      <div
        className={
          pageNum % 2 == 0
            ? classes["background-light"]
            : classes["background-dark"]
        }
      ></div>
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
  );
};

export default Navbar;

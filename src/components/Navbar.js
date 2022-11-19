import classes from "./Navbar.module.css";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import { useState, useEffect } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
const Navbar = (props) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [pageNum, setPageNum] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
    // console.log(Math.round(position / (2 * window.innerHeight)));
    setPageNum(Math.round(position / (2 * window.innerHeight)));
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const appbarDarkBackground = {
    backgroundImage: `linear-gradient(to right,#111 ${
      window.pageYOffset / 20
    }%, #202a7a)`,
  };

  return (
    <div className={classes.navbar}>
      {/* <div
        className={
          window.pageYOffset < window.innerHeight / 2
            ? classes["background-light"]
            : classes["background-dark"]
        }
      ></div> */}
      <AppBar
        className={
          window.pageYOffset < window.innerHeight / 4
            ? classes["appbar"]
            : classes["appbar"] + " " + classes["appbar-bg-dark"]
        }
        style={
          window.pageYOffset < window.innerHeight / 4
            ? { background: "none" }
            : appbarDarkBackground
        }
      >
        <div className={classes.logo}>
          <h1>AMS</h1>
        </div>
        <div className={classes.links}>
          <Link
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <Button className={classes.btn}>Home</Button>
          </Link>
          <Link
            activeClass="active"
            to="greeting"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <Button className={classes.btn}>Greeting</Button>
          </Link>
          <Link
            activeClass="active"
            to="introduction"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <Button className={classes.btn}>About</Button>
          </Link>
          <Link
            activeClass="active"
            to="contact-me"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <Button className={classes.btn}>Contact</Button>
          </Link>
        </div>
      </AppBar>
    </div>
  );
};

export default Navbar;

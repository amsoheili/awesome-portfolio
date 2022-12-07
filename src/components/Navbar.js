import classes from "./Navbar.module.css";
import AppBar from "@mui/material/AppBar";
import { useState, useEffect } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import MenuItems from "./MenuItems";
import HambergurMenu from "./HambergurMenu";

const Navbar = (props) => {
  const [isMenuHambergur, setIsMenuHambergur] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
      // setIsMenuHambergur(screenWidth < 500);
    };

    window.addEventListener("resize", changeWidth);

    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  const appbarDarkBackground = {
    backgroundImage: `linear-gradient(to right,#111 ${
      window.pageYOffset / 20
    }%, #202a7a)`,
  };

  const menuItems = [
    { title: "Home", link: "home" },
    { title: "Greeting", link: "greeting" },
    { title: "About", link: "introduction" },
    { title: "Contact", link: "contact-me" },
  ];

  return (
    <div className={classes.navbar}>
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
        {screenWidth >= 600 && <MenuItems menuItems={menuItems} />}
        {screenWidth < 600 && <HambergurMenu menuItems={menuItems} />}
      </AppBar>
    </div>
  );
};

export default Navbar;

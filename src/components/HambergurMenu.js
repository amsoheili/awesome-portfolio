import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MailIcon from "@material-ui/icons/Mail";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Button } from "@mui/material";
import clsx from "clsx";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import { useState } from "react";
import { Link } from "react-scroll";

const useStyles = makeStyles({
  drawer: {
    backdropFilter: "blur(3px)",
    "& .MuiPaper-root": {
      backdropFilter: "blur(10px)",
      background: "none",
    },
  },
  list: {
    width: "200px",
  },
  fullList: {
    width: "auto",
  },
  main: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  bars: {
    color: "#fff",
  },
  listItem: {
    color: "#fff",
    textAlign: "center",
  },
  divider: {
    background: "#fff",
  },
});

const HambergurMenu = (props) => {
  const classes = useStyles();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleDrawer = () => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setIsMenuOpen((prevState) => !prevState);
  };

  const list = (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer()}
      onKeyDown={toggleDrawer()}
    >
      <List>
        {props.menuItems.map((menuItem, index) => (
          <div key={index}>
            <Link
              activeClass="active"
              to={menuItem.link}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={toggleDrawer()}
            >
              <ListItem button>
                <ListItemText
                  className={classes.listItem}
                  primary={menuItem.title}
                />
              </ListItem>
            </Link>
            <Divider classes={{ root: classes.divider }} />
          </div>
        ))}
      </List>
      {/* <Divider /> */}
    </div>
  );

  return (
    <div className={classes.main}>
      <Button onClick={toggleDrawer()}>
        <MenuIcon className={classes.bars} />
      </Button>
      <SwipeableDrawer
        anchor="right"
        open={isMenuOpen}
        onClose={toggleDrawer()}
        onOpen={toggleDrawer()}
        className={classes.drawer}
      >
        {list}
      </SwipeableDrawer>
    </div>
  );
};

export default HambergurMenu;

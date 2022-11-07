import classes from "./App.module.css";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
// import Avatar from "@mui/material/Avatar";
// import DeveloperImage from "./assets/images/Developer.jpg";
import { useState, useEffect } from "react";

import Introduction from "./components/Introduction";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Greeting from "./components/Greeting";

const App = () => {
  const project_1 = [
    {
      id: 1,
      title: "Home Page 0",
      imageSrc: "./assets/projects/project1/Home_Page_0.jpg",
    },
    {
      id: 2,
      title: "Home Page 1",
      imageSrc: "./assets/projects/project1/Home_Page_1.jpg",
    },
    {
      id: 3,
      title: "About Page",
      imageSrc: "./assets/projects/project1/About_Page.jpg",
    },
  ];
  //setTimeout(() => {}, 200);

  const [scrollPosition, setScrollPosition] = useState(0);
  const [pageNum, setPageNum] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
    console.log(Math.round(position / (2 * window.innerHeight)));
    setPageNum(Math.round(position / window.innerHeight));
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={classes.main}>
      <Navbar />
      <Home />
      <Greeting />
      <Introduction />
      {/* <Projects /> */}
      {/* <div className={classes["projects-section"]}>
        <div className={classes.title}>
          <h1>My Projects</h1>
        </div>
        <div className={classes.carouselSlider}>
          <CarouselSlider items={project_1} />
        </div>
      </div> */}
    </div>
  );
};

export default App;

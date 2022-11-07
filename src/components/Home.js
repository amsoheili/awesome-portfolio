import { useState } from "react";
import classes from "./Home.module.css";
import { Typewriter } from "react-simple-typewriter";

const Home = (props) => {
  const [title, setTitle] = useState("");
  const [titleLength, setTitleLength] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  const titleText = " The God The Compassionate The Merciful";
  const titleArray = [" The God", " The Compassionate", " The Merciful"];
  const x = "The Compassionate , The Merciful";
  const titleInterval = setInterval(() => {
    if (titleLength < titleText.length) {
      let tmp = titleText.slice(0, titleLength);
      setTitle(tmp);
      setTitleLength((prev) => prev + 1);
    } else {
      setTitle("");
      setTitleLength(0);
    }
  }, 3000);

  return (
    <div className={classes["home-section"]}>
      <div className={classes.overlay}></div>
      <div
        className={classes.start}
        onMouseEnter={() => {
          setIsHovering(true);
        }}
        onMouseLeave={() => {
          setIsHovering(false);
        }}
      >
        <h1>
          In The Name Of
          <Typewriter words={titleArray} typeSpeed={50} />
        </h1>
      </div>
    </div>
  );
};

export default Home;

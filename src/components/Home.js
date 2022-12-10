import { useState } from "react";
import classes from "./Home.module.css";
import { Typewriter } from "react-simple-typewriter";
import { useInView } from "react-intersection-observer";

const Home = (props) => {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
  });
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
    <div className={classes["home-section"]} id={props.id}>
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
        <h1
          className={classes[`${inView ? "titleWithEffect" : "title"}`]}
          ref={ref}
        >
          Never Stop <br />
          Looking Up <br />
        </h1>
      </div>
    </div>
  );
};

export default Home;

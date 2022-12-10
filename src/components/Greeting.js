import classes from "./Greeting.module.css";
import Card from "@mui/material/Card";
import { useInView } from "react-intersection-observer";

const Greeting = (props) => {
  const [ref1, inView1, entry1] = useInView({
    /* Optional options */
    threshold: 0,
  });

  const [ref2, inView2, entry2] = useInView({
    /* Optional options */
    threshold: 0,
  });

  const spanStyle = {
    color: "#fff",
    borderBottom: "1px solid #ccc",
    padding: "1rem 0",
    textShadow: "4px 4px 2px rgb(81, 54, 238)",
    fontSize: "1rem",
  };

  // console.log(`${!inView ? "greetings" : "greetingsWithEffect"} `);

  return (
    <div className={classes["info-section"]} id={props.id}>
      <Card className={classes.introduction}>
        <div
          className={classes[`${!inView1 ? "avatar" : "avatarWithEffect"}`]}
          ref={ref1}
        ></div>
        <div
          className={
            classes[`${!inView2 ? "greetings" : "greetingsWithEffect"}`]
          }
          ref={ref2}
        >
          <h1>
            Amir Mohammad Soheili
            <br />
            <span style={spanStyle}>{`Front End Developer`}</span>
          </h1>
        </div>
      </Card>
    </div>
  );
};

export default Greeting;

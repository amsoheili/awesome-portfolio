import classes from "./Introduction.module.css";
import { useInView } from "react-intersection-observer";

const Introduction = (props) => {
  const [ref1, inView1, entry1] = useInView({
    /* Optional options */
    threshold: 0,
  });

  const [ref2, inView2, entry2] = useInView({
    /* Optional options */
    threshold: 0,
  });

  const [ref3, inView3, entry3] = useInView({
    /* Optional options */
    threshold: 0,
  });

  const [ref4, inView4, entry4] = useInView({
    /* Optional options */
    threshold: 0,
  });

  return (
    <div className={classes.main} id={props.id}>
      <div className={classes.container}>
        <div className={classes.left}>
          <div
            className={classes[`${!inView1 ? " " : "cardWithEffect"}`]}
            // className={classes.card}
            ref={ref1}
          >
            <h1>Commitment</h1>
            <p>Try to do my best</p>
          </div>
          <div
            className={classes[`${!inView2 ? " " : "cardWithEffect"}`]}
            // className={classes.card}
            ref={ref2}
          >
            <h1>Hard Working</h1>
            <p>The feeling of reaching my goals is the motivation</p>
          </div>
          <div
            className={classes[`${!inView3 ? "card" : "cardWithEffect"}`]}
            // className={classes.card}
            ref={ref3}
          >
            <h1>Thirst For Knowledge</h1>
            <p>
              There are two things,
              <br />
              Things that I know
              <br />
              Things that I will know
            </p>
          </div>
        </div>
        <div
          className={classes[`${!inView4 ? "right" : "rightWithEffect"}`]}
          // className={classes.right}
          ref={ref4}
        >
          <div>
            <h5>Introduce</h5>
          </div>
          <div>
            <h1>My Journey</h1>
          </div>
          <div>
            <p>
              Since beginning my journey as a front end developer nearly 2 years
              ago, I've done diffrent projects , consulted for an startup, and
              collaborated with talented people to become more experienced, I am
              quietly confident, naturally curious.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;

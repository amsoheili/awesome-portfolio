import classes from "./Introduction.module.css";
const Introduction = (props) => {
  return (
    <div className={classes.main} id={props.id}>
      <div className={classes.container}>
        <div className={classes.left}>
          <div className={classes.card}>
            <h1>Commitment</h1>
            <p>Try to do my best</p>
          </div>
          <div className={classes.card}>
            <h1>Hard Working</h1>
            <p>The feeling of reaching my goals is the motivation</p>
          </div>
          <div className={classes.card}>
            <h1>Thirst For Knowledge</h1>
            <p>
              There are two things,
              <br />
              Things that I know <br /> Things that I will know
            </p>
          </div>
        </div>
        <div className={classes.right}>
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

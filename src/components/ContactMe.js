import classes from "./ContactMe.module.css";
const ContactMe = (props) => {
  return (
    <div className={classes.main} id={props.id}>
      <div className={classes["access-info"]}>
        <h1>Hire Me .</h1>
        <h2>Phone Number: 09021546920</h2>
        <h2>Telegram: @AMS_1380</h2>
        <h2>Email: amirmohammad.soheili1380@gmail.com</h2>
      </div>
      <div className={classes["awesome-pic"]}></div>
    </div>
  );
};

export default ContactMe;

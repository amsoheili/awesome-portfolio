import classes from "./ContactMe.module.css";
import TelegramIcon from "@material-ui/icons/Telegram";
import EmailIcon from "@material-ui/icons/Email";
import GitHubIcon from "@material-ui/icons/GitHub";
const ContactMe = (props) => {
  return (
    <div className={classes.main} id={props.id}>
      <div className={classes["access-info"]}>
        <h1>Contact Me</h1>

        <div className={classes.links}>
          <a href="https://www.t.me/ams_soh">
            <TelegramIcon />
          </a>
          <a href="mailto: [amirmohammad.soheili1380@gmail.com]? subject=portfolio">
            <EmailIcon />
          </a>
          <a href="https://github.com/amsoheili/">
            <GitHubIcon />
          </a>
        </div>
      </div>
      <div className={classes["awesome-pic"]}></div>
    </div>
  );
};

export default ContactMe;

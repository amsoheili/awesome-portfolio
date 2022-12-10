import classes from "./ContactMe.module.css";
import TelegramIcon from "@material-ui/icons/Telegram";
import EmailIcon from "@material-ui/icons/Email";
import GitHubIcon from "@material-ui/icons/GitHub";
import { useInView } from "react-intersection-observer";

const ContactMe = (props) => {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
  });

  return (
    <div className={classes.main} id={props.id}>
      <div className={classes["access-info"]}>
        <h1>Contact Me</h1>

        <div className={classes.links} ref={ref}>
          <div className={classes[`${inView ? "link1" : " "}`]}>
            <a href="https://www.t.me/ams_soh">
              <TelegramIcon />
            </a>
          </div>
          <div className={classes[`${inView ? "link2" : " "}`]}>
            <a href="mailto: [amirmohammad.soheili1380@gmail.com]? subject=portfolio">
              <EmailIcon />
            </a>
          </div>
          <div className={classes[`${inView ? "link3" : " "}`]}>
            <a href="https://github.com/amsoheili/">
              <GitHubIcon />
            </a>
          </div>
        </div>
      </div>
      <div className={classes["awesome-pic"]}></div>
    </div>
  );
};

export default ContactMe;

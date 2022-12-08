import { Link } from "react-scroll";
import Button from "@mui/material/Button";
import classes from "./MenuItem.module.css";

const MenuItem = (props) => {
  return (
    <div className="main">
      <Link
        activeClass="active"
        to={props.link}
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        <Button className={classes.btn}>{props.title}</Button>
      </Link>
    </div>
  );
};

export default MenuItem;

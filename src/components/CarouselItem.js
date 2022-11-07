import Paper from "@mui/material/Paper";
import image from "../assets/images/projects/project1/Home_Page_0.jpg";
import classes from "./CarouselItem.module.css";

const CarouselItem = (props) => {
  const paperStyle = {
    background: `url(${image}) no-repeat center center/cover`,
    height: "100%",
    width: "100%",
  };

  return (
    <Paper className={classes.main}>
      <h4>{props.title}</h4>
    </Paper>
  );
};

export default CarouselItem;

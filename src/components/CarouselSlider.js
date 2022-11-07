import Button from "@mui/material/Button";

import CarouselItem from "./CarouselItem";
import classes from "./CarouselSlider.module.css";

const CarouselSlider = (props) => {
  return (
    <div className={classes.main}>
      <div className={classes.background}></div>
      <div className={classes.controls}>
        <Button>Next</Button>
      </div>
    </div>
  );
};

export default CarouselSlider;

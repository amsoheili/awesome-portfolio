import Button from "@mui/material/Button";
import MenuItem from "./MenuItem";
import classes from "./MenuItems.module.css";

const MenuItems = (props) => {
  return (
    <>
      <div className={classes.menu}>
        {props.menuItems.map((menuItem, index) => (
          <MenuItem title={menuItem.title} link={menuItem.link} key={index} />
        ))}
      </div>
    </>
  );
};

export default MenuItems;

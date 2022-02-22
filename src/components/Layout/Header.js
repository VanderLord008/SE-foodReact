import React from "react";
import classes from "./Header.module.css";
import mealsImage from "../../assests/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";

function Header(props) {
  return (
    <>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onShow={props.onShow}  />
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImage} alt='food on the table' />
      </div>
    </>
  );
}

export default Header;

import React, { useEffect,useState } from "react";
import classes from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";
import {useContext} from 'react';


function HeaderCartButton(props) {
  const ctx = useContext(CartContext);
  const [highLightedBtn,setHighlightedBtn]=useState(false)
  
  const cartItemNumber=ctx.items.reduce((curNumber,item)=>{
    return curNumber+item.amount;
  },0);

useEffect(()=>{
  if(ctx.items.length===0){
    return
  }
  setHighlightedBtn(true)
  const timer = setTimeout(() => {
    setHighlightedBtn(false);
  }, 300);

  return () => {
    clearTimeout(timer);
  };
  
},[ctx.items])

const btnClasses=`${classes.button} ${highLightedBtn? classes.bump:''}`
  return (
    <button className={btnClasses} onClick={props.onShow}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{cartItemNumber}</span>
    </button>
  );
}

export default HeaderCartButton;

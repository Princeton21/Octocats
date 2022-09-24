import React from "react";
import classes from "./Logo.module.css";
import logo from "../../../Assets/logo.png"
const Logo = () => {
  return (
    <>
      <div className={classes.logo_container}>
       <img style={{width:"120px"}} src={logo} alt="logo" />
      </div>
    </>
  );
};

export default Logo;

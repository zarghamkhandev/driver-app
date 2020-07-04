import React from "react";
import Logo from "./Logo"
import Hamburger from "./Hamburger"

const navBar = (props) => {
  return (
    <nav className={props.scrolled ? "scrolled":"absolute top-0 w-full"}>
        <div className="justify-between flex px-4 pt-4 sm:px-8 sm:pt-8 lg:px-12 lg:pt-8 pb-2 sm:pb-4 ">
            
      <Logo className="w-32 sm:w-40 md:w-48 lg:w-64" color={props.color}/>
      <div className="flex items-center">
        <button className="w-16 h-6 bg-custom-red rounded-lg text-white text-xs flex items-center justify-center md:w-24 md:h-8 md:text-lg">
          Login
        </button>
        <Hamburger className="w-6 ml-3 md:w-8 md:ml-6" color={props.color}/>
      </div>
        </div>
    </nav>
  );
};

export default navBar;

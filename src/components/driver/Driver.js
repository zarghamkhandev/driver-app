import React from "react";
import NavBar from "../NavBar";
import HeaderPhoto from "./HeaderPhoto";
import Background from "./Background";
import DriverSidePanel1 from "./DriverSidePanel1";
import DriverSidePanel2 from "./DriverSidePanel2";
import DriverSidePanel3 from "./DriverSidePanel3";
import DriverSidePanel4 from "./DriverSidePanel4";
import Footer from "../Footer";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const driver = () => {
  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
      <header>
        <Background className="w-full absolute top-0 -z-10" />
        <NavBar color="black" hamcolor="black" />
        <div
          className="flex w-full justify-center"
          style={{ marginTop: "15vh" }}
        >
          <div className="w-2/5 flex flex-col items-start justify-center">
            <h1
              className="text-black font-bold text-3vw uppercase"
              style={{ marginTop: "18%" }}
            >
              getting loads has <br />
              <span className="text-custom-red">never been this easy</span>
            </h1>
            <p className="text-1vw uppercase">
              Get the right loads. The right rate.Right in your inbox.
              <br /> Join the driver network now and Axelavate your freight.
            </p>
          </div>
          <div className="w-2/5">
            <HeaderPhoto />
          </div>
        </div>
      </header>
      <div className="w-full flex">
        <div className="w-1/2">
          <DriverSidePanel1 />
        </div>
        <div className="w-1/2" style={{ marginTop: "22%" }}>
          <div className="" style={{ marginLeft: "19%" }}>
            <h1 className="text-custom-red font-bold text-2.5vw uppercase">
              YOU SET THE RATE
              <br />
              LOADS YOU WANT
            </h1>
            <p className="uppercase text-1.25vw font-medium">
              you have the control to select <br />
              the loads that makes sense for you.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full flex" style={{ marginTop: "-22%" }}>
        <div className="w-1/2" style={{ marginTop: "28%" }}>
          <div className="" style={{ marginLeft: "19%" }}>
            <h1 className="text-custom-red font-bold text-2.5vw uppercase">
              YOU SET THE RATE
            </h1>
            <p className="uppercase text-1.25vw font-medium">
              THE rATE YOU GET pAID IS IN THE RIGHT HANDS, <br />
              YOUR OWN.
            </p>
          </div>
        </div>
        <div className="w-1/2">
          <DriverSidePanel2 />
        </div>
      </div>
      <div className="w-full flex" style={{ marginTop: "-18%" }}>
        <div className="w-1/2">
          <DriverSidePanel3 />
        </div>
        <div className="w-1/2" style={{ marginTop: "23%" }}>
          <div className="" style={{ marginLeft: "19%" }}>
            <h1 className="text-custom-red font-bold text-2.5vw uppercase">
              gET PAID QUICK
            </h1>
            <p className="uppercase text-1.25vw font-medium">
              WITH EVERYTHING ONLINE, <br />
              YOU GET PAID QUICKER THEN EVER.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full flex" style={{ marginTop: "-22%" }}>
        <div className="w-1/2" style={{ marginTop: "28%" }}>
          <div className="" style={{ marginLeft: "19%" }}>
            <h1 className="text-custom-red font-bold text-2.5vw uppercase">
              ALWAYS BE SUPPORTED
            </h1>
            <p className="uppercase text-1.25vw font-medium">
              OUR CUSTOMER SUPPORT TEAM IS ALWAYS <br />
              AVAILABLE TO ANSWER ALL OF <br />
              YOUR QUESTIONS.
            </p>
          </div>
        </div>
        <div className="w-1/2">
          <DriverSidePanel4 />
        </div>
      </div>
      <div className="text-center w-2/6 mx-auto" style={{ marginTop: "4%" }}>
        <h1 className="text-custom-red font-bold text-2.5vw uppercase">
          hOW IT WORKS
        </h1>
        <p className="uppercase text-1.25vw font-medium">
          bECOMING PART OF AXELAVATE NETWORK
          <br /> IS SIMPLE, AND GETTING YOUR FIRST LOAD
          <br /> IS EVEN EASIER.
        </p>
      </div>

      <div className="w-full flex justify-center" style={{ marginTop: "8%" }}>
        <Link to="/driversignup">
          <button
            className="curson-pointer hover:bg-gray-700 uppercase font-medium text-xs bg-custom-gray px-4 py-2 text-white rounded-lg sm:px-10 sm:ml-4 md:px-12 lg:px-24 lg:py-3 lg:ml-16 lg:text-lg "
            style={{ letterSpacing: "3px" }}
          >
            signup
          </button>
        </Link>
      </div>

      <Footer />
    </motion.div>
  );
};

export default driver;

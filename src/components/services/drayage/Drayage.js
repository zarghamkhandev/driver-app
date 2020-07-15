import React from "react";
import NavBar from "../../NavBar";
import DrayageBackground from "./DrayageBackground";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const drayage = () => {
  return (
    <motion.div
      className="h-screen overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <NavBar color="black" hamcolor="black" />
      <div className="w-full flex items-center" style={{ marginTop: "15vh" }}>
        <div className="w-1/2">
          <DrayageBackground />
        </div>
        <div className="w-1/2">
          <div className="w-3/4" style={{ marginLeft: "10%" }}>
            <h1 className="text-custom-red uppercase text-3vw font-bold">
              Port drayage
            </h1>

            <h2 className="text-1.5vw uppercase font-bold">
              The drayage import and export experts
            </h2>
            <p className="text-1.25vw uppercase">
              manage your containers to and from ports, at container yards, and
              to your location of your choice.
            </p>
            <Link to="/customersignup">
              <button className="w-1/2 bg-custom-red mt-4 focus:outline-none hover:bg-custom-redlight text-1.5vw text-white font-medium rounded-lg py-2 shadow-md hover:bg-custom-redlight">
                Start Shipping Now
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full absolute bottom-0 flex justify-center bg-white">
        <div className="w-4/5">
          <ul className=" flex justify-between pt-4">
            <Link to="/services/drayage">
              <li className="text-1.5vw font-bold uppercase text-custom-red cursor-pointer border-b-4 border-custom-gray  px-2 pt-2 ">
                port drayage
              </li>
            </Link>
            <Link to="/services/intermodel">
              <li className="text-1.5vw font-bold uppercase text-custom-red cursor-pointer border-b-4 border-custom-white hover:border-custom-gray  px-2 pt-2 ">
                intermodal drayage
              </li>
            </Link>
            <Link to="/services/ltl">
              <li className="text-1.5vw font-bold uppercase text-custom-red cursor-pointer border-b-4 border-custom-white hover:border-custom-gray  px-2 pt-2 ">
                LTL
              </li>
            </Link>
            <Link to="/services/truckload">
              <li className="text-1.5vw font-bold uppercase text-custom-red cursor-pointer border-b-4 border-custom-white hover:border-custom-gray  px-2 pt-2 ">
                Truckload
              </li>
            </Link>
            <Link to="/services/expedited">
              <li className="text-1.5vw font-bold uppercase text-custom-red cursor-pointer border-b-4 border-custom-white hover:border-custom-gray  px-2 pt-2 ">
                Expedited/hotspot
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default drayage;

import React from "react";
import NavBar from "../NavBar";
import ServicesBackground from "./ServicesBackground";
import Card from "./Card";
import ServicesCard1 from "./ServicesCard1";
import ServicesCard2 from "./ServicesCard2";
import ServicesCard3 from "./ServicesCard3";
import ServicesCard4 from "./ServicesCard4";
import ServicesCard5 from "./ServicesCard5";
import { motion } from "framer-motion";

const services = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="h-screen overflow-hidden"
    >
      <header>
        <NavBar color="black" hamcolor="black" />
      </header>
      <div className="w-full flex" style={{ marginTop: "20vh" }}>
        <div className="w-1/2">
          <div className="">
            <div
              className="w-3/5 "
              style={{ marginLeft: "30%", maxWidth: "500px" }}
            >
              <ServicesBackground />
            </div>
          </div>
          <div
            className=" flex items-end"
            style={{ marginTop: "6%", marginLeft: "34%" }}
          >
            <h1
              className="text-3vw uppercase font-bold"
              style={{ lineHeight: "3vw" }}
            >
              ALL OF YOUR
              <br /> SHIPPING{" "}
              <span className="text-custom-red">
                NEEDS
                <br /> UNDER ONE ROOF
              </span>
            </h1>
          </div>
        </div>
        <div className="w-1/2 flex justify-center flex-wrap items-center">
          <Card
            ServiceCard={ServicesCard1}
            title="port drayage"
            link="/services/drayage"
            text="The drayage import and export experts"
          />
          <Card
            ServiceCard={ServicesCard2}
            title="intermodal drayage"
            link="/services/intermodel"
            text="Intermodal drayage at its finest."
          />
          <Card ServiceCard={ServicesCard3} title="ltl" link="/services/ltl" text="Ltl (less than truckload), more than exceptional."/>
          <Card
            ServiceCard={ServicesCard4}
            title="Truckload"
            link="/services/truckload"
            text="Full truckload, full service."
          />
          <Card
            ServiceCard={ServicesCard5}
            title="EXPEDITED/ HOTSHOT"
            link="/services/expedited"
            text="Expedited/hotshot in a flash."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default services;

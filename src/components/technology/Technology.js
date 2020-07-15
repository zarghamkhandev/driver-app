import React from "react";
import NavBar from "../NavBar";
import HeaderPhoto from "./HeaderPhoto";
import HeaderLineLeft from "./HeaderLineLeft";
import HeaderLineRight from "./HeaderLineRight";
import TechSidePanel1 from "./TechSidePanel1";
import TechSidePanel2 from "./TechSidePanel2";
import TechSidePanel3 from "./TechSidePanel3";
import TechSidePanel4 from "./TechSidePanel4";
import Footer from "../Footer"
import ScrollButton from "../ScrollButton"
import { motion } from "framer-motion";

const technology = () => {
  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
      <header>
        <NavBar color="black" hamcolor="black"/>
        <div className="w-full flex" style={{ marginTop: "10vh" }}>
          <div className="w-1/2">
            <div style={{ marginTop: "30%", marginLeft: "20%" }}>
              <h1 className="text-3.5vw text-custom-black font-bold uppercase">
                advanced
                <br />
              </h1>
              <h1
                className="text-3.5vw text-custom-red font-medium uppercase"
                style={{ marginTop: "-3%" }}
              >
                technology
              </h1>
              <p className="text-1.5vw">
                The Axelavate TMS system was designed
                <br />
                to make a complicated shipping process simple.
                <br />
                Our proven technology is here to help.
              </p>
              <button
                className="uppercase font-bold border border-custom-red rounded cursor-pointer hover:bg-red-300 text-1.5vw py-1 lg:border-2 lg:py-2 lg:rounded-lg"
                style={{ width: "35%", marginTop: "5%" }}
              >
                Learn more
              </button>
            </div>
          </div>
          <div className="w-1/2 flex justify-center">
            <div className="w-3/4">
              <HeaderPhoto />
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center" style={{}}>
          <div className="w-2/6">
            <div className="w-2/5 ml-auto">
              <HeaderLineLeft />
            </div>
          </div>
          <div className="w-2/6 ">
            <h1 className="text-custom-redlight text-2vw text-center">
              GET THE BEST PRICE AND
              <br />
              THE BEST SERVICE
            </h1>
            <p className="text-1.25vw text-center uppercase -mt-1">
              Using Our Comperhensive Driver Network,
              <br /> We Are Able To Deliver Competitive
              <br /> Pricing Without Sacrificing Service.
            </p>
          </div>
          <div className="w-2/6">
            <div className="w-2/5">
              <HeaderLineRight />
            </div>
          </div>
        </div>
      </header>
      <div className="w-full flex" style={{ marginTop: "-5%" }}>
        <div className="w-3/5">
          <TechSidePanel1 />
        </div>
        <div className="w-2/5" style={{ marginTop: "26%" }}>
          <div style={{ marginLeft: "3%" }}>
            <h1 className="text-custom-redlight text-2.5vw uppercase">
              PEOPLE FIRST
            </h1>
            <p className="uppercase text-1.1vw">
              Technology is great, but it is great people that
              <br /> keep the world moving. Our customer service
              <br /> team (with real people) are here to help if you
              <br /> ever need it.Technology is great, but it is great
              <br />
              people that keep the world moving. Our customer service team (with
              real people) are here to help if
              <br /> you ever need it.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full flex" style={{ marginTop: "-22%" }}>
        <div className="w-2/5" style={{ marginTop: "26%" }}>
          <div style={{ marginLeft: "15%" }}>
            <h1 className="text-custom-redlight text-2.5vw uppercase">
              CUSTOMERS FIRST
            </h1>
            <p className="uppercase text-1.1vw">
              GET THE BEST PRICE AND THE BEST SERVICE
              <br /> Using our comprehensive driver network, we are
              <br /> able to deliver competitive pricing without sacri-
              <br />
              ficing service.
            </p>
          </div>
        </div>
        <div className="w-3/5">
          <TechSidePanel2 />
        </div>
      </div>
      <div className="w-full flex" style={{ marginTop: "-22%" }}>
        <div className="w-3/5">
          <TechSidePanel3 />
        </div>
        <div className="w-2/5" style={{ marginTop: "26%" }}>
          <div style={{ marginLeft: "1%" }}>
            <h1 className="text-custom-redlight text-1.5vw uppercase">
              Order management and visibility
              <br /> live shipment tracking and
              <br /> order status...check.
            </h1>
            <p className="uppercase text-1vw">
              Our TMS Allows You To Track Your Load From Quote To Invoice
              <br /> And Everything In Between.View Where Your Load Is At
              <br /> Anytime Using Axelview Technology.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full flex" style={{ marginTop: "-26%" }}>
        <div className="w-2/5" style={{ marginTop: "26%" }}>
          <div style={{ marginLeft: "15%" }}>
            <h1 className="text-custom-redlight text-1.5vw uppercase">
              EFFORTLESS DOCUMENT VIEWING AND SMOOTH RECONCILIATION
            </h1>
            <p className="uppercase text-1vw">
              Shipment documentation is
              <br /> streamlined, automated, and digital
              <br />
              Manage freight reconciliation with<br/> Ease using the TMS to do all
              the heavy lifting.
            </p>
          </div>
        </div>
        <div className="w-3/5">
          <TechSidePanel4 />
        </div>
      </div>
      <ScrollButton/>
      <Footer/>
    </motion.div>
  );
};

export default technology;

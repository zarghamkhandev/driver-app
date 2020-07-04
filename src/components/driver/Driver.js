import React from "react";
import NavBar from "../NavBar";
import HeaderPhoto from "./HeaderPhoto";
import Background from "./Background";

const driver = () => {
  return (
    <>
      <header>
        <NavBar color="black" />
        <div className="flex w-full justify-center" style={{ marginTop: "8%" }}>
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

      <Background className="w-full absolute" style={{top:"75%"}}/>
    </>
  );
};

export default driver;

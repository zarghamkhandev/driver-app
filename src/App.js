import React from "react";
import Background from "./components/homepage/Background.js";
import SidePanel1 from "./components/homepage/SidePanel1";
import SidePanel2 from "./components/homepage/SidePanel2";
import SidePanel3 from "./components/homepage/SidePanel3";
import SidePanel4 from "./components/homepage/SidePanel4";
import ScrollButton from "./components/ScrollButton";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import { Link } from "react-router-dom";
import Animation from "./components/homepage/Animation";
import BackgroundLayer from "./components/homepage/BackgroundLayer";
import { motion } from "framer-motion";

class App extends React.Component {
  state = {
    text1InitialPosition: 0,
    text2InitialPosition: 0,
    text3InitialPosition: 0,
    text4InitialPosition: 0,
    showtext1: false,
    showtext2: false,
    showtext3: false,
    showtext4: false,
  };

  textRef1 = React.createRef();
  textRef2 = React.createRef();
  textRef3 = React.createRef();
  textRef4 = React.createRef();

  componentDidMount() {
    window.addEventListener("scroll", this.onScrollHome);
    const windowPosition = window.scrollY;
    const box1bottom =
      this.textRef1.current.getBoundingClientRect().bottom + windowPosition;
    const box2bottom =
      this.textRef2.current.getBoundingClientRect().bottom + windowPosition;
    const box3bottom =
      this.textRef3.current.getBoundingClientRect().bottom + windowPosition;
    const box4bottom =
      this.textRef4.current.getBoundingClientRect().bottom + windowPosition;
    this.setState({
      text1InitialPosition: box1bottom,
      text2InitialPosition: box2bottom,
      text3InitialPosition: box3bottom,
      text4InitialPosition: box4bottom,
    });
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.onScrollHome);
  }

  onScrollHome = () => {
    const windowPosition = window.scrollY + window.innerHeight;
    if (windowPosition > this.state.text1InitialPosition) {
      this.setState({ showtext1: true });
    }
    if (windowPosition > this.state.text2InitialPosition) {
      this.setState({ showtext2: true });
    }
    if (windowPosition > this.state.text3InitialPosition) {
      this.setState({ showtext3: true });
    }
    if (windowPosition > this.state.text4InitialPosition) {
      this.setState({ showtext4: true });
    }
  };

  render() {
    return (
      <motion.div className="overflow-hidden">
        <header>
          <Background className="absolute top-0 z-0" />
          <Animation className="absolute top-0 z-10 " />
          <BackgroundLayer className="absolute top-0 z-20 " />
          <NavBar color="white" hamcolor="white" />
        </header>
        <div
          className="w-3/5 mt-1 text-center uppercase flex items-center flex-col m-auto  relative z-100  "
          style={{ minHeight: "10%", marginTop: "15%" }}
        >
          <h1 className="text-white text-3vw">
            Technology that makes shipping almost too easy
          </h1>
        </div>
        <div
          className="w-full flex relative"
          style={{ marginTop: "38%", zIndex: "998" }}
        >
          <div className="w-1/2 ">
            <SidePanel1 />
          </div>
          <div className="w-1/2">
            <motion.div
              style={{ marginLeft: "28%", marginTop: "30%" }}
              ref={this.textRef1}
            >
              <motion.h1
                className="text-custom-red font-bold text-2.5vw uppercase"
                initial={{ x: 300, opacity: 0 }}
                animate={
                  this.state.showtext1 ? { x: 0, opacity: 1 } : undefined
                }
                transition={{ duration: 3, type: "spring" }}
              >
                YOU NEED IT MOVED.
                <br /> WE’LL PICK IT UP
              </motion.h1>
              <motion.p
                className="uppercase text-1.25vw font-medium"
                initial={{ x: 300, opacity: 0 }}
                animate={
                  this.state.showtext1 ? { x: 0, opacity: 1 } : undefined
                }
                transition={{ duration: 3, type: "spring", delay: 0.3 }}
              >
                We have a variety of shipping types available for all your
                shipping needs
              </motion.p>

              <motion.ul
                className="text-1.5vw font-bold text-custom-red flex flex-wrap"
                initial={{ x: 300, opacity: 0 }}
                animate={
                  this.state.showtext1 ? { x: 0, opacity: 1 } : undefined
                }
                transition={{ duration: 3, type: "spring", delay: 0.5 }}
              >
                <li>
                  <Link
                    to="/services/drayage"
                    className="hover:text-custom-redlight cursor-pointer"
                  >
                    Port Drayage
                  </Link>
                </li>
                <li className="text-black mx-2">|</li>
                <li>
                  <Link
                    to="/services/intermodel"
                    className="hover:text-custom-redlight cursor-pointer"
                  >
                    Intermodal Drayage
                  </Link>
                </li>
                <li className="text-black mx-2">|</li>
                <li>
                  <Link
                    to="/services/truckload"
                    className="hover:text-custom-redlight cursor-pointer"
                  >
                    Truckload
                  </Link>
                </li>
                <li className="text-black mx-2">|</li>
                <li>
                  <Link
                    to="/services/ltl"
                    className="hover:text-custom-redlight cursor-pointer"
                  >
                    LTL
                  </Link>
                </li>
                <li className="text-black mx-2">|</li>
                <li>
                  <Link
                    to="/services/expedited"
                    className="hover:text-custom-redlight cursor-pointer"
                  >
                    Expedited / Hot Shot
                  </Link>
                </li>
              </motion.ul>
            </motion.div>
          </div>
        </div>
        <div className="w-full flex " style={{ marginTop: "-10%" }}>
          <div className="w-1/2 ">
            <div
              className="w-3/4"
              style={{ marginLeft: "15%", marginTop: "25%" }}
              ref={this.textRef2}
            >
              <motion.h1
                className="text-custom-red font-bold text-2.5vw uppercase"
                initial={{ x: -300, opacity: 0 }}
                animate={
                  this.state.showtext2 ? { x: 0, opacity: 1 } : undefined
                }
                transition={{ duration: 3, type: "spring" }}
              >
                A powerfull tms platform to manage any load
              </motion.h1>
              <ul className="list-disc uppercase text-1.25vw font-medium">
                <motion.li
                  initial={{ x: -300, opacity: 0 }}
                  animate={
                    this.state.showtext2 ? { x: 0, opacity: 1 } : undefined
                  }
                  transition={{ duration: 3, type: "spring", delay: 0.3 }}
                >
                  real time tracking using axelview
                </motion.li>
                <motion.li
                  initial={{ x: -300, opacity: 0 }}
                  animate={
                    this.state.showtext2 ? { x: 0, opacity: 1 } : undefined
                  }
                  transition={{ duration: 3, type: "spring", delay: 0.6 }}
                >
                  mangage shipments, orders, scheduling, invoices, and so much
                  more.
                </motion.li>
              </ul>
            </div>
          </div>
          <div className="w-1/2">
            <SidePanel2 />
          </div>
        </div>
        <div className="w-full flex " style={{ marginTop: "-25%" }}>
          <div className="w-1/2">
            <SidePanel3 />
          </div>
          <div className="w-1/2 ">
            <div
              className="w-3/4"
              style={{ marginLeft: "22%", marginTop: "55%" }}
              ref={this.textRef3}
            >
              <motion.h1
                className="text-custom-red font-bold text-2.5vw uppercase"
                initial={{ x: 300, opacity: 0 }}
                animate={
                  this.state.showtext3 ? { x: 0, opacity: 1 } : undefined
                }
                transition={{ duration: 3, type: "spring" }}
              >
                ORDER MANAGEMENT LIKE IT SHOULD BE
              </motion.h1>
              <motion.p
                className="uppercase text-1.25vw font-medium"
                initial={{ x: 300, opacity: 0 }}
                animate={
                  this.state.showtext3 ? { x: 0, opacity: 1 } : undefined
                }
                transition={{ duration: 3, type: "spring", delay: 0.3 }}
              >
                OUR STREAMLINE TMS ALLOWS YOU VIEW YOUR LOAD AT EVERY TURN.
                Axelavate’s mission is to provide cost efficient freight
                showcasing full visibility with real time updates through our
                proprietary Axelview software.
              </motion.p>
            </div>
          </div>
        </div>
        <div className="w-full flex " style={{ marginTop: "-7%" }}>
          <div className="w-1/2 ml-auto">
            <SidePanel4 />
          </div>
        </div>
        <div
          className="w-1/3 flex justify-center relative z-100 bg-white flex-col"
          style={{ marginTop: "-10%", marginLeft: "32%" }}
          ref={this.textRef4}
        >
          <h1 className="text-custom-red text-1.5vw text-center font-semibold">
            EXPERIENCE THE AXELAVATE <br />
            TMS DIFFERENCE
          </h1>
          <p className="leading-tight uppercase text-1vw font-medium text-center">
            Customers and Drivers unite. Using Axelavate’s proprietary software,
            we make it easy to track and manage every load every time.
          </p>
        </div>
        <div className="w-full flex justify-center" style={{ marginTop: "9%" }}>
          <Link to="/customersignup">
            <button
              className="cursor-pointer hover:bg-gray-700 uppercase font-medium text-xs bg-custom-gray px-4 py-2 text-white rounded-lg sm:px-10 sm:ml-4 md:px-12 lg:px-24 lg:py-3 lg:ml-16 lg:text-lg "
              style={{ letterSpacing: "3px", marginLeft: "-5%" }}
            >
              signup
            </button>
          </Link>
        </div>
        <ScrollButton />
        <Footer className="relative z-30" />
      </motion.div>
    );
  }
}

export default App;

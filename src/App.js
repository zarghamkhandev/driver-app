import React from "react";
import Background from "./components/homepage/Background.js";
import SidePanel1 from "./components/homepage/SidePanel1";
import SidePanel2 from "./components/homepage/SidePanel2";
import SidePanel3 from "./components/homepage/SidePanel3";
import SidePanel4 from "./components/homepage/SidePanel4";
import { ReactComponent as ScrollButton } from "./assets/illustrations/ScrollButton.svg";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";


class App extends React.Component {
  state = { scrolled: false };
  componentDidMount() {
    window.addEventListener("scroll", () => {
      console.log("hi");
      const isTop = window.scrollY < 100;
  
      if (isTop === true) {
        this.setState({ scrolled: false });
      } else {
        this.setState({ scrolled: true });
      }
      console.log(this.state.scrolled)
    });
  }


  render() {
    return (
      <>
        <header >
          <Background className="absolute top-0 -z-10" />
          <NavBar scrolled={this.state.scrolled} color="white"/>
        </header>
        <div
          className="w-3/5 mt-1 text-center uppercase flex items-center flex-col m-auto    "
          style={{ minHeight: "10%",marginTop:"15%" }}
        >
          <h1 className="text-white text-3vw">
            Technology that makes shipping almost too easy.
          </h1>
        </div>
        <div
          className="w-full flex items-center justify-between"
          style={{ marginTop: "43%" }}
        >
          <div className="w-1/2 ">
            <SidePanel1 />
          </div>
          <div className="w-4/12 mr-3 -mt-16">
            <h1 className="text-custom-red  text-2vw">
              YOU NEED IT MOVED.
              <br /> WE’LL PICK IT UP
            </h1>
            <p className="text-1.5vw">
              We have a variety of shipping types available for all your
              shipping needs
            </p>
            <p className="text-1.5vw font-bold text-custom-red">
              PORT DRAYAGE <span className="text-black">|</span> INTERMODAL
              DRAYAGE <br />
              LTL <span className="text-black">|</span> TRUCKLOAD{" "}
              <span className="text-black">|</span>
              EXPEDITED/HOTSHOT
            </p>
          </div>
        </div>
        <div
          className="w-full flex items-center justify-between"
          style={{ marginTop: "-20%" }}
        >
          <div className="w-1/2 -mt-10">
            <div className="w-5/6 ml-auto ">
              <div className="w-3/4 mr-auto ">
                <h1 className="text-custom-red  text-1.5vw">
                  ORDER MANAGEMENT <br />
                  LIKE IT SHOULD BE OUR STREAMLINE TMS ALLOWS YOU VIEW YOUR LOAD
                  AT EVERY TURN
                </h1>
                <p className="text-1vw">
                  Axelavate’s mission is to provide cost efficient freight
                  showcasing full visibility with real time updates through our
                  proprietary Axelview software.
                </p>
              </div>
            </div>
          </div>
          <div className="w-1/2">
            <SidePanel2 />
          </div>
        </div>
        <div
          className="w-full flex items-center justify-between"
          style={{ marginTop: "-12%" }}
        >
          <div className="w-1/2">
            <SidePanel3 />
          </div>
          <div className="w-1/2 -mt-10">
            <div className="w-3/5 ml-auto ">
              <div className="w-3/4 mr-auto ">
                <h1 className="text-custom-red  text-1.5vw">
                  SHIPPING WITH EASE
                </h1>
                <p className="text-1vw">
                  A powerful TMS platform to manage any load Real Time tracking
                  using Axelview technology Manage shipments, orders,
                  scheduling, invoices, and so much more.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="w-full flex items-center justify-between"
          style={{ marginTop: "-10%" }}
        >
          <div className="w-1/2 ml-auto">
            <SidePanel4 />
          </div>
        </div>
        <div className="w-2/5 text-center mx-auto" style={{ marginTop: "-8%" }}>
          <h1 className="text-custom-red text-1.5vw">
            EXPERIENCE THE AXELAVATE <br />
            TMS DIFFERENCE
          </h1>
          <p className="text-1vw text-justify leading-tight uppercase px-4">
            Customers and Drivers unite. Using Axelavate’s proprietary software,
            we make it easy to track and manage every load every time.
          </p>
          <div className="text-1vw leading-tight uppercase">
            <div className="flex items-center w-full justify-center">
              <div className="h-1 w-1 bg-black rounded-full mx-2"></div>
              <div>A powerful TMS platform to manage any load</div>
            </div>
            <div className="flex items-center w-full justify-center">
              <div className="h-1 w-1 bg-black rounded-full mx-2"></div>
              <div>Real Time tracking using Axelview</div>
            </div>
            <div className="flex items-center w-full justify-center">
              <div className="h-1 w-1 bg-black rounded-full mx-2"></div>
              <div>Manage shipments, orders, scheduling, invoices,</div>
            </div>
            <div>and so much more.</div>
          </div>
        </div>
        <div className=" mx-auto" style={{ marginTop: "5%", width: "5%" }}>
          <ScrollButton />
        </div>
        <Footer />
      </>
    );
  }
}

export default App;

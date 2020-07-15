import React from "react";
import NavBar from "../NavBar";
import Footer from "../Footer";
import { Link } from "react-router-dom";
import DriverSignupCard from "./CustomerSignupCard";
import DriverSignupBackground from "../driversignup/DriverSignupBackground";
import { motion } from "framer-motion";


class CustomerSignup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      company: "",
      email: "",
      phone: "",
    };
  }
  changeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      ...this.state,
      [name]: value,
    });
  };

  render() {
    return (
      <motion.div className="relative overflow-hidden" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
        <header>
          <NavBar color="black" hamcolor="black" />
        </header>
        <div
          className="w-1/2 absolute -z-10 top-0"
          style={{ marginTop: "15vh" }}
        >
          <DriverSignupBackground />
        </div>

        <div className="w-full" style={{ marginTop: "25vh" }}>
          <div className="w-3/4 mx-auto bg-white flex driversignupcard">
            <div className="w-1/2">
              <div className="w-3/4 mx-auto">
                <form>
                  <h1 className="text-2vw uppercase text-custom-red font-bold">
                    welcome
                  </h1>
                  <p className="text-1vw text-black font-medium -mt-2 uppercase">
                    Customer SIgnup
                  </p>
                  <label className="text-black uppercase flex flex-col w-full text-0.75vw font-semibold mt-6">
                    <input
                      placeholder="Name"
                      type="text"
                      name="firstname"
                      value={this.state.firstname}
                      className=" w-full placeholder-custom-lightgray border-b border-custom-lightgray pb-1 text-0.75vw mt-2 focus:outline-none"
                      onChange={this.changeHandler}
                    ></input>
                  </label>
                  <label className="text-black uppercase flex flex-col w-full text-0.75vw font-semibold mt-6">
                    <input
                      placeholder="Company Name"
                      type="text"
                      name="company"
                      value={this.state.company}
                      className=" w-full placeholder-custom-lightgray border-b border-custom-lightgray pb-1 text-0.75vw mt-2 focus:outline-none"
                      onChange={this.changeHandler}
                    ></input>
                  </label>
                  <label className="text-black uppercase flex flex-col w-full text-0.75vw font-semibold mt-6">
                    <input
                      placeholder="Email"
                      type="email"
                      name="email"
                      value={this.state.email}
                      className=" w-full placeholder-custom-lightgray border-b border-custom-lightgray pb-1 text-0.75vw mt-2 focus:outline-none"
                      onChange={this.changeHandler}
                    ></input>
                  </label>
                  <label className="text-black uppercase flex flex-col w-full text-0.75vw font-semibold mt-6">
                    <input
                      placeholder="Phone Number"
                      type="text"
                      name="phone"
                      value={this.state.phone}
                      className=" w-full placeholder-custom-lightgray border-b border-custom-lightgray pb-1 text-0.75vw mt-2 focus:outline-none"
                      onChange={this.changeHandler}
                    ></input>
                  </label>
                  <button
                    className="w-full bg-custom-red mt-10 relative focus:outline-none hover:bg-custom-redlight"
                    style={{ paddingBottom: "12%", borderRadius: "1vw" }}
                  >
                    <span
                      className="text-white uppercase absolute text-1vw"
                      style={{
                        top: "50%",
                        left: "50%",
                        transform: "translateX(-50%) translateY(-50%)",
                      }}
                    >
                      sign up
                    </span>
                  </button>
                  <p className="text-1vw text-medium text-center mt-2">
                    Have An Account?{" "}
                    <span className="text-custom-red">
                      <Link to="/login">Login</Link>
                    </span>
                  </p>
                </form>
              </div>
            </div>
            <div className="w-1/2">
              <div className="w-4/5 mx-auto">
                <DriverSignupCard />
              </div>
            </div>
          </div>
        </div>
        <Footer
          color="white"
          footerColor="black"
          className="absolute bottom-0"
        />
      </motion.div>
    );
  }
}

export default CustomerSignup;

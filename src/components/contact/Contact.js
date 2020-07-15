import React from "react";
import ContactCard from "./ContactCard";
import ContactBackground from "./ContactBackground";
import NavBar from "../NavBar";
import Footer from "../Footer";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      phone: "",
      message: "",
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
      <motion.div className="overflow-hidden" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
        <ContactBackground  />
        <header>
          <NavBar color="black" hamcolor="black" className=" " />
        </header>

        <div
          className="w-full absolute top-0 flex z-10"
          style={{ marginTop: "25vh" }}
        >
          <div className="w-11/12 mx-auto flex">
            <div className="w-1/2">
              <div className="w-3/4 mx-auto">
                <form>
                  <h1 className="text-2vw uppercase text-white font-bold">
                    contact us
                  </h1>
                  <p className="text-1.4vw text-white font-medium  uppercase">
                    Feel free to contat us anytime. we will get back to you as
                    soon as we can!
                  </p>
                  <label className="text-white uppercase flex flex-col w-full text-1.1vw mt-6">
                    <input
                      placeholder="Name"
                      type="text"
                      name="name"
                      value={this.state.name}
                      className="bg-transparent w-full placeholder-white border-b border-custom-lightgray pb-1 text-0.9vw mt-4 focus:outline-none uppercase"
                      onChange={this.changeHandler}
                    ></input>
                  </label>
                  <label className="text-white uppercase flex flex-col w-full text-1.1vw mt-6">
                    <input
                      placeholder="Phone#"
                      type="text"
                      name="phone"
                      value={this.state.phone}
                      className="bg-transparent w-full placeholder-white border-b border-custom-lightgray pb-1 text-0.9vw mt-4 focus:outline-none uppercase"
                      onChange={this.changeHandler}
                    ></input>
                  </label>
                  <label className="text-white uppercase flex flex-col w-full text-1.1vw mt-6">
                    <input
                      placeholder="E-MAIL"
                      type="email"
                      name="email"
                      value={this.state.email}
                      className="bg-transparent w-full placeholder-white border-b border-custom-lightgray pb-1 text-0.9vw mt-4 focus:outline-none uppercase"
                      onChange={this.changeHandler}
                    ></input>
                  </label>
                  <label className="text-white uppercase flex flex-col w-full text-0.9vw mt-6">
                      Message
                    <textarea
                      type="text"
                      name="message"
                      value={this.state.message}
                      rows="8"
                      className="bg-transparent w-full placeholder-white border border-custom-lightgray pb-1 text-0.9vw focus:outline-none uppercase"
                      onChange={this.changeHandler}
                    ></textarea>
                  </label>

                  <button
                    className="w-full bg-custom-red mt-10 relative focus:outline-none hover:bg-custom-redlight"
                    style={{ paddingBottom: "8%", borderRadius: "1vw" }}
                  >
                    <span
                      className="text-white uppercase absolute text-0.9vw"
                      style={{
                        top: "50%",
                        left: "50%",
                        letterSpacing:"3px",
                        transform: "translateX(-50%) translateY(-50%)",
                      }}
                    >
                      send message
                    </span>
                  </button>
                </form>
              </div>
            </div>
            <div className="w-1/2">
              <div className="w-4/5 mx-auto">
                <ContactCard />
              </div>
            </div>
          </div>
        </div>
        <Footer  />
      </motion.div>
    );
  }
}

export default Contact;

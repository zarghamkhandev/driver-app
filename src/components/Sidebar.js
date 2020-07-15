import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { AiOutlineTwitter as Twitter } from "react-icons/ai";
import { FaLinkedinIn as Linkedin } from "react-icons/fa";
import { FaFacebookF as Facebook } from "react-icons/fa";
import { FaYoutube as Youtube } from "react-icons/fa";
import { GrInstagram as Instagram } from "react-icons/gr";

class sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { width: 0 };
  }

  componentDidMount() {
    const width = document.getElementById("sidebarcontainer").clientWidth;
    this.setState({ width: width });
  }

  render() {
    return (
      <motion.div
        className="w-1/5 h-screen bg-custom-red fixed top-0 right-0"
        style={{ translateX: this.state.width, zIndex: "20" }}
        id="sidebarcontainer"
        initial={{ translateX: this.state.width }}
        animate={
          this.props.isOpen
            ? { translateX: 0 }
            : { translateX: this.state.width }
        }
        transition={{ duration: 0.5 }}
      >
        <ul
          className="text-1.5vw text-white w-full flex flex-col items-center "
          style={{ marginTop: "20vh" }}
        >
          <Link to="/" className="w-3/4">
            <li className="hover:bg-custom-redlight hover:text-custom-black font-medium rounded-lg my-1 py-1 pl-2 hover:shadow-sm ">
              Home
            </li>
          </Link>
          <Link to="/technology" className="w-3/4">
            <li className="hover:bg-custom-redlight hover:text-custom-black font-medium  w-full rounded-lg my-1 py-1 pl-2 hover:shadow-sm ">
              Technology
            </li>
          </Link>
          <Link to="/services" className="w-3/4">
            <li className="hover:bg-custom-redlight hover:text-custom-black font-medium  w-full rounded-lg my-1 py-1 pl-2 hover:shadow-sm ">
              Services
            </li>
          </Link>
          <Link to="/driver" className="w-3/4">
            <li className="hover:bg-custom-redlight hover:text-custom-black font-medium  w-full rounded-lg my-1 py-1 pl-2 hover:shadow-sm ">
              Driver
            </li>
          </Link>
          <Link to="/contact" className="w-3/4">
            <li className="hover:bg-custom-redlight hover:text-custom-black font-medium  w-full rounded-lg my-1 py-1 pl-2 hover:shadow-sm ">
              Contact Us
            </li>
          </Link>
          <Link to="/customersignup" className="w-3/4">
            <li className="hover:bg-custom-redlight hover:text-custom-black font-medium  w-full rounded-lg my-1 py-1 pl-2 hover:shadow-sm ">
              Customer Signup
            </li>
          </Link>
          <Link to="/driversignup" className="w-3/4">
            <li className="hover:bg-custom-redlight hover:text-custom-black font-medium  w-full rounded-lg my-1 py-1 pl-2 hover:shadow-sm ">
              Driver Signup
            </li>
          </Link>
        </ul>

        <div
          className="w-full flex justify-center px-4"
          style={{ marginTop: "10vh" }}
        >
          <Link to="/login" className="w-full">
            <button className="w-full h-6 bg-custom-black focus:outline-none rounded-lg text-white text-xs flex items-center justify-center md:h-10 md:text-lg hover:bg-custom-gray shadow-lg">
              Login
            </button>
          </Link>
        </div>

        <div className="absolute bottom-0 left-0 w-full">
          <ul className="flex justify-center w-full">
            <li className=" mx-2 w-8 h-8 rounded-full border-0 text-black flex items-center justify-center hover:bg-custom-redlight">
              <Link to="/">
                <Facebook size={18} />
              </Link>
            </li>
            <li className=" mx-2 w-8 h-8 rounded-full border-0 text-black flex items-center justify-center hover:bg-custom-redlight">
              <Link to="/">
                <Twitter size={18} />
              </Link>
            </li>
            <li className=" mx-2 w-8 h-8 rounded-full border-0 text-black flex items-center justify-center hover:bg-custom-redlight">
              <Link to="/">
                <Linkedin size={18} />
              </Link>
            </li>
            <li className=" mx-2 w-8 h-8 rounded-full border-0 text-black flex items-center justify-center hover:bg-custom-redlight">
              <Link to="/">
                <Youtube size={18} />
              </Link>
            </li>
            <li className=" mx-2 w-8 h-8 rounded-full border-0 text-black flex items-center justify-center hover:bg-custom-redlight">
              <Link to="/">
                <Instagram size={18} />
              </Link>
            </li>
          </ul>
          <div className="w-full flex justify-center">
            <p className="text-black text-0.75vw font-medium">
              2020 Axelevate, LLC
            </p>
          </div>
        </div>
      </motion.div>
    );
  }
}

export default sidebar;

import React from "react";
import { AiOutlineTwitter as Twitter } from "react-icons/ai";
import { FaLinkedinIn as Linkedin } from "react-icons/fa";
import { FaFacebookF as Facebook } from "react-icons/fa";
import { FaYoutube as Youtube } from "react-icons/fa";
import { GrInstagram as Instagram } from "react-icons/gr";
import { Link } from "react-router-dom";

const footer = () => {
  return (
    <footer>
      <div className="w-full flex justify-center mt-20">
        <div className="w-2/5 py-4 border-r border-gray-500 ml-16">
          <ul className="text-1.25vw text-gray-500">
            <li className="text-black">Services</li>
            <li>Drayage</li>
            <li>Intermodel</li>
            <li>Truckload</li>
            <li>LTD</li>
            <li>Expectide / Hot Shot</li>
          </ul>
        </div>
        <div className="w-2/5 py-4 border-r border-gray-500 ml-16">
          <ul className="text-1.25vw text-gray-500">
            <li className="text-black">Go to Page</li>
            <li>
              <Link to="/" className="hover:text-gray-700">Home</Link>
            </li>
            <li>Technology</li>
            <li>Services</li>
            <Link to="/driver" className="hover:text-gray-700">Driver</Link>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="w-2/5 py-4 ml-16">
          <ul className="text-1.25vw text-gray-500 ">
            <li className="text-black">Contact Us</li>
            <li>30 N Gould Street Suite R</li>
            <li>Sheridan WY 82801</li>
            <li>E-Mail : Info@axelavate.com</li>
          </ul>
          <div className="flex mt-2 -ml-1">
            <div className="mx-1 w-6 h-6 rounded-full border border-gray-500 flex items-center justify-center">
              <Twitter className="text-gray-500" />
            </div>
            <div className="mx-1 w-6 h-6 rounded-full border border-gray-500 flex items-center justify-center">
              <Linkedin className="text-gray-500" size={13} />
            </div>
            <div className="mx-1 w-6 h-6 rounded-full border border-gray-500 flex items-center justify-center">
              <Facebook className="text-gray-500" size={13} />
            </div>
            <div className="mx-1 w-6 h-6 rounded-full border border-gray-500 flex items-center justify-center">
              <Instagram className="text-gray-500 " size={13} />
            </div>
            <div className="mx-1 w-6 h-6 rounded-full border border-gray-500 flex items-center justify-center">
              <Youtube className="text-gray-500" />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full py-2 bg-gray-900 text-gray-700 font-semibold text-center font-mono mt-10">
        <p>
          Axelavate, All Rights Reserved. Privacy Policy, Terms & Conditions
        </p>
      </div>
    </footer>
  );
};

export default footer;

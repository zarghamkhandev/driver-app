import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Morph1 from "./Morph1";


class card extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hovered: false };
  }

  render() {

    return (
      <div
        className="overflow-hidden relative justify-end border-2 border-custom-red hover:border-custom- w-1/5 rounded-lg h-0 mx-6 mb-6 hover:bg-custom-black cursor-pointer "
        style={{ paddingBottom: "30%", maxWidth: "200px" }}
        onMouseEnter={() => {
          this.setState({ hovered: true });
        }}
        onMouseLeave={() => {
          this.setState({ hovered: false });
        }}
      >
        <Link
          className="h-full absolute top-0 left-0 w-full"
          to={this.props.link}
        >
          <motion.div
            className="w-4/5 absolute mx-auto"
            initial={{ scale: 1, bottom: "0%", top: "auto", right: 0, left: 0 }}
            animate={
              this.state.hovered
                ? {
                    scale: 0.8,
                    top: "0%",
                    bottom: "auto",
                    right: 0,
                    left: "auto",
                  }
                : { scale: 1, bottom: "0%", top: "auto", right: 0, left: 0 }
            }
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <this.props.ServiceCard />
            <h1 className={(this.state.hovered ? "text-white" : "text-custom-red")+" uppercase font-bold text-1vw  text-center mt-1 "}>
              <span>

              {this.props.title}
              </span>
            </h1>
          </motion.div>
          <div className="absolute bottom-0">
            <motion.p
              className="text-white font-medium text-0.75vw px-2 normal-case"
              initial={{ opacity: 0,y:-50 }}
              animate={this.state.hovered ? { opacity: 1,y:-30 } : { opacity: 0,y:-100 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              {this.props.text}
            </motion.p>
          </div>
        </Link>
      </div>
    );
  }
}

export default card;

import React from "react";
import NavBar from "../NavBar";
import LoginBackground from "./LoginBackground";
import Footer from "../Footer";
import { FiEyeOff, FiEye } from "react-icons/fi";
import { motion } from "framer-motion";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: "", password: "", isEyeOpen: false };
  }
  changeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      ...this.state,
      [name]: value,
    });
  };

  eyeOpen = (event) => {
  
      this.setState({ isEyeOpen: !this.state.isEyeOpen });
  
    
  };

  render() {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <header className="relative z-20">
          <NavBar color="black" hamcolor="white" />
        </header>
        <div className="w-full flex ">
          <div className="w-1/2" style={{ marginTop: "10%" }}>
            <LoginBackground />
          </div>
          <div className="w-1/2 bg-custom-gray flex items-center">
            <div className="w-3/5" style={{ marginLeft: "15%" }}>
              <h1 className="text-2.5vw uppercase text-white font-bold">
                LogIn
              </h1>
              <form className="w-full mt-10">
                <label className="text-white uppercase flex flex-col w-full text-1vw">
                  e-mail
                  <input
                    placeholder="Your e-mail address"
                    type="email"
                    name="email"
                    value={this.state.email}
                    className="bg-custom-gray w-full placeholder-custom-lightgray border-b border-custom-lightgray pb-1 text-0.75vw mt-4 focus:outline-none"
                    onChange={this.changeHandler}
                  ></input>
                </label>
                <label className="text-white uppercase flex flex-col w-full text-1vw mt-4 z-20">
                  password
                  <div className="relative w-full border-b pb-1 mt-4 z-10">
                    <div
                      className="text-custom-lightgray absolute top-0 right-0 cursor-pointer"
                      onClick={this.eyeOpen}
                     
                    >
                      {this.state.isEyeOpen? <FiEye/>: <FiEyeOff />}
                     
                    </div>

                    <input
                      placeholder="******"

                      type={this.state.isEyeOpen?"text":"password"}
                      name="password"
                      value={this.state.password}
                      className="bg-custom-gray  placeholder-custom-lightgray  border-custom-lightgray  text-0.75vw focus:outline-none"
                      onChange={this.changeHandler}
                    ></input>
                  </div>
                </label>
                <button
                  className="w-full bg-custom-red mt-10 relative focus:outline-none hover:bg-custom-redlight"
                  style={{ paddingBottom: "10%", borderRadius: "1vw" }}
                >
                  <span
                    className="text-white uppercase absolute text-1vw"
                    style={{
                      letterSpacing: "0.5vw",
                      top: "50%",
                      left: "50%",
                      transform: "translateX(-50%) translateY(-50%)",
                    }}
                  >
                    Login
                  </span>
                </button>
              </form>
            </div>
          </div>
        </div>
        <Footer />
      </motion.div>
    );
  }
}

export default Login;

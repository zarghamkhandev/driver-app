import React from "react";
import Logo from "./Logo";
import Hamburger from "./Hamburger";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";
import { FaUnderline } from "react-icons/fa";

class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      scrolled: false,
      color: "",
      hamcolor: "",
      stateNotChanged: true,
      isOpen: false,
    };

    this.onScroll = this.onScroll.bind(this);
  }
  static getDerivedStateFromProps(nextProps, state) {
    if (nextProps.hamcolor !== state.hamcolor && state.stateNotChanged) {
      return {
        color: nextProps.color,
        hamcolor: nextProps.hamcolor,
      };
    }

    // Return null if the state hasn't changed
    return null;
  }
  componentDidMount() {
    window.addEventListener("scroll", this.onScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.onScroll);
  }

  updateChange = () => {
    this.setState({ stateNotChanged: true });
  };

  toggleHandler = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  onScroll = () => {
    const isTop = window.scrollY < 100;
    if (isTop === true) {
      this.setState({
        scrolled: false,
        color: this.props.color,
        hamcolor: this.props.hamcolor,
      });
    } else {
      this.setState({
        scrolled: true,
        color: "white",
        hamcolor: "white",
        stateNotChanged: false,
      });
    }
  };
  render() {
    return (
      <nav className={this.state.scrolled ? "scrolled" : "unscrolled"}>
        <div className="justify-between flex px-4 pt-4 sm:px-8 sm:pt-8 lg:px-12 lg:pt-8 pb-2 sm:pb-4 relative">
          <Link to="/">
            <Logo
              className="w-32 sm:w-40 md:w-48 lg:w-64"
              color={this.state.color}
            />
          </Link>
          <div className="flex items-center"  >
            <Link to="/login" >
              <button className="w-16 h-6 bg-custom-red focus:outline-none rounded-lg text-white text-xs flex items-center justify-center md:w-24 md:h-8 md:text-lg hover:bg-custom-redlight">
                Login
              </button>
            </Link>
            <Hamburger
              className="w-6 ml-3 md:w-8 md:ml-6 cursor-pointer"
              style={{zIndex:"30"}}
              color={this.state.hamcolor}
              isopen={this.state.isOpen?"true":"false"}
              onClick={this.toggleHandler}
            />
             <Sidebar isOpen={this.state.isOpen}/>
          </div>
        </div>
     
      </nav>
    );
  }
}

export default NavBar;

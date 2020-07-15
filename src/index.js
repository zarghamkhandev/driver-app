import React from "react";
import ReactDOM from "react-dom";
import "./assets/styles/index.css";
import App from "./App";
import Driver from "./components/driver/Driver";
import Technology from "./components/technology/Technology";
import Services from "./components/services/Services";
import ScrollToTop from "./components/ScrollToTop";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Drayage from "./components/services/drayage/Drayage";
import Intermodel from "./components/services/intermodel/Intermodel";
import Ltl from "./components/services/ltl/Ltl";
import Truckload from "./components/services/truckload/Truckload";
import Expedited from "./components/services/expedited/Expedited";
import Login from "./components/login/Login";
import DriverSignup from "./components/driversignup/DriverSignup";
import CustomerSignup from "./components/cutomersignup/CustomerSignup";
import Contact from "./components/contact/Contact";
import { AnimatePresence, motion } from "framer-motion";

class Root extends React.Component {
  state = {};
  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <ScrollToTop />
        <AnimatePresence>
          <Switch>
            <Route path="/" exact component={App} />
            <Route path="/driver" component={Driver} />
            <Route path="/technology" component={Technology} />
            <Route path="/services" exact component={Services} />
            <Route path="/services/drayage" component={Drayage} />
            <Route path="/services/intermodel" component={Intermodel} />
            <Route path="/services/ltl" component={Ltl} />
            <Route path="/services/truckload" component={Truckload} />
            <Route path="/services/expedited" component={Expedited} />
            <Route path="/login" component={Login} />
            <Route path="/driversignup" component={DriverSignup} />
            <Route path="/customersignup" component={CustomerSignup} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </AnimatePresence>
      </Router>
    );
  }
}

export default Root;

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

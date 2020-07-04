import React from "react";
import ReactDOM from "react-dom";
import "./assets/styles/index.css";
import App from "./App";
import Driver from "./components/driver/Driver"
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";




class Root extends React.Component {
  state = {  }
  render() { 
    return (  <Switch>
      <Route path="/" exact component={App} />
      <Route path="/driver" component={Driver} />
      <Route path="/services" />
    </Switch> );
  }
}
 
export default Root;





ReactDOM.render(
  <React.StrictMode>
   <Router>
        <Root/>
   </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

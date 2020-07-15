import React from 'react';
import {ReactComponent as ScrollButton} from "../assets/illustrations/ScrollButton.svg" 

class scrollButton extends React.Component {
  state = {  }

  scrollToTop =()=>{
    window.scroll({top: 0, left: 0, behavior: 'smooth' })
  }

  render() { 
    return ( 
      <div className="w-full flex justify-center" style={{ marginTop: "5%" }}>
      <div className="" style={{ marginLeft: "-2.5%" }} className="cursor-pointer" onClick={this.scrollToTop}>
      <ScrollButton/>
      </div>
      
    </div>
     );
  }
}
 
export default scrollButton;
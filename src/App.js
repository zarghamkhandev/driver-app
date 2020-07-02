import React from "react";
import { ReactComponent as Logo } from "./assets/illustrations/Logo.svg";
import { ReactComponent as Hamburger } from "./assets/illustrations/Hamburger.svg";
import { ReactComponent as Background } from "./assets/illustrations/background.svg";
import { ReactComponent as BackgroundContent } from "./assets/illustrations/background-content.svg";
import { ReactComponent as LineDrawing } from "./assets/illustrations/line-drawing.svg";
import { ReactComponent as HomepageSvg1 } from "./assets/illustrations/homepage-svg-1.svg";
import { ReactComponent as HomepageSvg3 } from "./assets/illustrations/homepage-svg-3.svg";
import { ReactComponent as HomepageSvg4 } from "./assets/illustrations/homepage-svg-4.svg";

function App() {
  return (
    <div>
      <header>
        
        <Background className="absolute -z-10" />
        <BackgroundContent className="absolute" />
        <LineDrawing className="absolute" />
        <HomepageSvg1 className="absolute"/>
        <HomepageSvg3 className="absolute"/>
        <HomepageSvg4 className="absolute"/>
      
       
        <nav className="px-6 pt-6 flex justify-between">
          <Logo className="w-24" />
          <div className="flex">
            <button className="w-16 h-6 bg-custom-red rounded-lg text-white text-xs flex items-center justify-center">
              Login
            </button>
            <Hamburger className="w-6 ml-3" />
          </div>
        </nav>
        {/* <div className="px-10 mt-1 text-center uppercase flex items-center flex-col">
          <h1 className="text-xs text-white ">
            Technology that makes shipping almost too easy.
          </h1>
        </div> */}
      </header>
    </div>
  );
}

export default App;

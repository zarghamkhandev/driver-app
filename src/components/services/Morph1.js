import * as React from "react";
import {motion} from "framer-motion"

function SvgComponent(props) {
  return (
    <svg width={"100%"} viewBox="0 0 229.7 110" {...props}>
      <motion.path
        initial={{scaleY:0}}
        animate={props.hovered ? {scaleY:1}:{scaleY:0}}
        style={{originY:1,originX:0.5}}
        transition={{duration:0.5,ease:"easeIn"}}
        d="M229.7 98.4V110H0V13.5h.4c8.5-.1 17.2-3.6 25.6-6.9.9-.3 1.7-.7 2.6-1C37.6 2 46.1-1 54.3.3 63 1.6 70.7 7.2 78.1 13.2c1 .8 1.9 1.6 2.9 2.3 7.1 5.8 13.8 11.2 21.2 13.5 8.6 2.7 18.4 1.9 27.8 1.2.8-.1 1.6-.1 2.3-.2 9.6-.7 18.5-1.1 25.7 2.4 8.6 4.2 14.4 11.9 19.5 20.1 1.1 1.7 2.1 3.4 3.1 5.1 4.2 6.9 8.2 13.3 13.2 17.4 7 5.6 14.8 10.3 21.7 14.5 3.3 2 6.5 3.9 9.3 5.8 1.2.6 4 2.4 4.9 3.1z"
        fill="#c1272d"
      />
    </svg>
  );
}

export default SvgComponent;


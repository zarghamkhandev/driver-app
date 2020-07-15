import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";

function SvgComponent(props) {
  
  return (
    <svg width={52.93} height={46.78} viewBox="0 0 60 55" {...props} >
      <g id="hamburgericon__Layer_2" data-name="Layer 2">
        <g fill={props.color} id="hamburgericon__Layer_1-2" data-name="Layer 1">
          <motion.path
            id="hamburgericon__lower"
            d="M0 0h52.93v8.13H0z"
            style={{ originY: 1, originX: 1 }}
            initial={{ rotate: 0 }}
            exit={{ rotate: 0 }}
            animate={props.isopen ==="true" ? { rotate: -45 } : { rotate: 0 }}
          />

          <AnimatePresence>
            {props.isopen ==="false" ? (
              <motion.path
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                id="hamburgericon__middle"
                d="M0 19.33h52.93v8.13H0z"
              />
              
            ):undefined}
          </AnimatePresence>
          <motion.path
            id="hamburgericon__upper"
            d="M0 38.66h52.93v8.13H0z"
            style={{ originY: 0, originX: 1 }}
            initial={{ rotate: 0 }}
            exit={{ rotate: 0 }}
            animate={props.isopen ==="true" ? { rotate: 45 } : { rotate: 0 }}
          />
        </g>
      </g>
    </svg>
  );
}

export default SvgComponent;

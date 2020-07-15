import * as React from "react";

function SvgComponent(props) {
  return (
    <svg width={"100%"}  viewBox="0 50 1920 1495.29" {...props}>
      <g id="prefix__Layer_2" data-name="Layer 2">
        <g id="prefix__Layer_1-2" data-name="Layer 1">
          <g id="prefix__background">
            <path fill="#1e1e20" d="M0 214.42h1920v1280.87H0z" />
            <path
              fill="#c1272d"
              d="M1531.74 214.42h388.07v1280.87h-388.07zM0 799.17h108.72v101.71H0z"
            />
          </g>
          <path fill="none" d="M0 0h1920v1495.29H0z" />
        </g>
      </g>
    </svg>
  );
}

export default SvgComponent;


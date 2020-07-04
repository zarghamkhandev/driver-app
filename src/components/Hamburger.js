import * as React from "react";

function SvgComponent(props) {
  return (
    <svg width={35.85} height={31.68} viewBox="0 0 35.85 31.68" {...props}>
      <g id="prefix__Layer_2" data-name="Layer 2">
        <g id="prefix__Layer_1-2" data-name="Layer 1">
          <g id="prefix__Hamburger" fill={props.color}>
            <path d="M0 0h35.85v5.5H0zM0 13.09h35.85v5.5H0zM0 26.18h35.85v5.5H0z" />
          </g>
        </g>
      </g>
    </svg>
  );
}

export default SvgComponent;


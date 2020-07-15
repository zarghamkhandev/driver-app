import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

function SvgComponent(props) {
  const aeroVariant = {
    beforeStart: {
      x: 0,
      y: 0,
      opacity: 0,
      transition:{
        duration:0.3
      }
    },
    start: {
      x: [-467,-231],
      y: [-421,-136],
      opacity: [0,1],
      transition:{
        transition:"easeIn",
        duration:5
      }
    },
    landing: {
      x: [-231,0],
      y: [-136,0],
      opacity: 1,
      transition: {
        ease:"easeOut",
        duration: 5,
      },
    },
    beforeTakeOff: {
      x: [0,272],
      y: [0,153],
      opacity: 1,
      transition: {
        transition:"easeIn",
        duration: 5,
      },
    },
    takeOff: {
      x: [272,551],
      y: [153,86],
      opacity: [1,0],
      transition: {
        duration: 5,
      },
    },
  };
  const aeroControls = useAnimation();

  useEffect(() => {
    const sequence = async () => {
      await aeroControls.start(aeroVariant.beforeStart);
      await aeroControls.start(aeroVariant.start);
      await aeroControls.start(aeroVariant.landing);
      await new Promise((resolve) => setTimeout(resolve, 3000));
      await aeroControls.start(aeroVariant.beforeTakeOff);
      await aeroControls.start(aeroVariant.takeOff);
      await aeroControls.start(aeroVariant.beforeStart);
      await sequence();
    };
    sequence();
  });

  return (
    <svg width={"100%"} viewBox="0 0 1280.82 813.2" {...props}>
      <defs>
        <linearGradient
          id="expeditedbackground__\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_9"
          data-name="\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9 \xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2 9"
          x1={-3061.59}
          y1={-49.33}
          x2={-3061.2}
          y2={-49.33}
          gradientTransform="matrix(-1 -.01 -.01 1 -2344.56 380.3)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.16} stopColor="#111" />
          <stop offset={0.16} stopColor="#1b1b1b" />
          <stop offset={0.56} stopColor="#1b1b1b" />
          <stop offset={0.56} stopColor="#242424" />
          <stop offset={0.87} stopColor="#242424" />
          <stop offset={0.87} stopColor="#242424" />
        </linearGradient>
        <linearGradient
          id="expeditedbackground__\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_9-2"
          x1={-3058.94}
          y1={-51.04}
          x2={-3058.54}
          y2={-51.04}
          xlinkHref="#expeditedbackground__\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_9"
        />
        <linearGradient
          id="expeditedbackground__\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_9-3"
          x1={-3070.05}
          y1={-65.99}
          x2={-3069.65}
          y2={-65.99}
          xlinkHref="#expeditedbackground__\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_9"
        />
        <linearGradient
          id="expeditedbackground__\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_9-4"
          x1={-3044.76}
          y1={-51.78}
          x2={-3044.47}
          y2={-51.78}
          xlinkHref="#expeditedbackground__\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_9"
        />
        <linearGradient
          id="expeditedbackground__\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_9-5"
          x1={-3038.31}
          y1={-63.74}
          x2={-3037.91}
          y2={-63.74}
          xlinkHref="#expeditedbackground__\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_9"
        />
        <linearGradient
          id="expeditedbackground__\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_9-6"
          x1={-3040.39}
          y1={-62.18}
          x2={-3039.99}
          y2={-62.18}
          xlinkHref="#expeditedbackground__\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_9"
        />
        <linearGradient
          id="expeditedbackground__\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_7"
          data-name="\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9 \xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2 7"
          x1={-2993.19}
          y1={352.67}
          x2={-2994}
          y2={354.03}
          gradientTransform="matrix(-1 0 0 1 -2311.35 0)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.01} stopColor="#909090" />
          <stop offset={0.01} stopColor="#929292" />
          <stop offset={0.02} stopColor="#a6a6a6" />
          <stop offset={0.04} stopColor="#a6a6a6" />
          <stop offset={0.16} stopColor="#a6a6a6" />
          <stop offset={0.25} stopColor="#a0a0a0" />
          <stop offset={0.37} stopColor="#909090" />
          <stop offset={0.38} stopColor="#797979" />
          <stop offset={0.78} stopColor="#646464" />
          <stop offset={0.78} stopColor="#5e5e5e" />
          <stop offset={0.83} stopColor="#474747" />
          <stop offset={0.88} stopColor="#373737" />
          <stop offset={0.93} stopColor="#2d2d2d" />
          <stop offset={1} stopColor="#2a2a2a" />
        </linearGradient>
        <linearGradient
          id="expeditedbackground__linear-gradient"
          x1={9772.85}
          y1={596.27}
          x2={9763.97}
          y2={601.14}
          gradientTransform="translate(-8895.17)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#9f79c8" />
          <stop offset={0.14} stopColor="#a580cb" />
          <stop offset={0.33} stopColor="#b492d3" />
          <stop offset={0.55} stopColor="#cdb0e1" />
          <stop offset={0.58} stopColor="#d1b4e3" />
          <stop offset={0.76} stopColor="#dbc4e9" />
          <stop offset={1} stopColor="#ebdef3" />
        </linearGradient>
        <linearGradient
          id="expeditedbackground__linear-gradient-2"
          x1={9772}
          y1={600.54}
          x2={9768.44}
          y2={594.88}
          gradientTransform="translate(-8895.17)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.01} stopColor="#c1a1d5" />
          <stop offset={0.23} stopColor="#c9abdc" />
          <stop offset={0.36} stopColor="#d1b4e3" />
          <stop offset={0.43} stopColor="#b395d6" />
          <stop offset={0.49} stopColor="#9c7dcb" />
          <stop offset={0.56} stopColor="#8e6ec5" />
          <stop offset={0.61} stopColor="#8969c3" />
          <stop offset={0.76} stopColor="#9471c6" />
          <stop offset={1} stopColor="#b086cc" />
        </linearGradient>
        <linearGradient
          id="expeditedbackground__linear-gradient-3"
          x1={-11213.22}
          y1={595.41}
          x2={-11206.67}
          y2={598.81}
          gradientTransform="matrix(-1 0 0 1 -10332.94 0)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#8770b8" />
          <stop offset={1} stopColor="#fff" />
        </linearGradient>
        <linearGradient
          id="expeditedbackground__linear-gradient-4"
          x1={-11208.16}
          y1={595.71}
          x2={-11209.71}
          y2={598.87}
          gradientTransform="matrix(-1 0 0 1 -10332.94 0)"
          xlinkHref="#expeditedbackground__linear-gradient-2"
        />
        <linearGradient
          id="expeditedbackground__linear-gradient-5"
          x1={9781.1}
          y1={601.13}
          x2={9772.21}
          y2={606}
          xlinkHref="#expeditedbackground__linear-gradient"
        />
        <linearGradient
          id="expeditedbackground__linear-gradient-6"
          x1={9780.24}
          y1={605.4}
          x2={9776.69}
          y2={599.74}
          xlinkHref="#expeditedbackground__linear-gradient-2"
        />
        <linearGradient
          id="expeditedbackground__linear-gradient-7"
          x1={-11221.47}
          y1={600.27}
          x2={-11214.92}
          y2={603.67}
          xlinkHref="#expeditedbackground__linear-gradient-3"
        />
        <linearGradient
          id="expeditedbackground__linear-gradient-8"
          x1={-11216.4}
          y1={600.57}
          x2={-11217.96}
          y2={603.73}
          gradientTransform="matrix(-1 0 0 1 -10332.94 0)"
          xlinkHref="#expeditedbackground__linear-gradient-2"
        />
        <linearGradient
          id="expeditedbackground__linear-gradient-9"
          x1={-11221.32}
          y1={581.86}
          x2={-11234.62}
          y2={607.22}
          gradientTransform="matrix(-1 0 0 1 -10332.94 0)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.02} stopColor="#744ca1" />
          <stop offset={0.53} stopColor="#9f79c8" />
          <stop offset={0.64} stopColor="#a580cb" />
          <stop offset={0.8} stopColor="#b492d3" />
          <stop offset={0.98} stopColor="#cdb0e1" />
          <stop offset={1} stopColor="#d1b4e3" />
        </linearGradient>
        <linearGradient
          id="expeditedbackground__linear-gradient-10"
          x1={-11269.12}
          y1={625.34}
          x2={-11262.58}
          y2={622.41}
          xlinkHref="#expeditedbackground__linear-gradient-3"
        />
        <linearGradient
          id="expeditedbackground__linear-gradient-11"
          x1={9757.4}
          y1={488.56}
          x2={9748.52}
          y2={493.43}
          xlinkHref="#expeditedbackground__linear-gradient"
        />
        <linearGradient
          id="expeditedbackground__linear-gradient-12"
          x1={9756.55}
          y1={492.83}
          x2={9752.99}
          y2={487.17}
          xlinkHref="#expeditedbackground__linear-gradient-2"
        />
        <linearGradient
          id="expeditedbackground__linear-gradient-13"
          x1={-11197.77}
          y1={487.7}
          x2={-11191.22}
          y2={491.1}
          xlinkHref="#expeditedbackground__linear-gradient-3"
        />
        <linearGradient
          id="expeditedbackground__linear-gradient-14"
          x1={-11192.71}
          y1={488}
          x2={-11194.26}
          y2={491.15}
          gradientTransform="matrix(-1 0 0 1 -10332.94 0)"
          xlinkHref="#expeditedbackground__linear-gradient-2"
        />
        <linearGradient
          id="expeditedbackground__linear-gradient-15"
          x1={9765.65}
          y1={493.42}
          x2={9756.76}
          y2={498.29}
          xlinkHref="#expeditedbackground__linear-gradient"
        />
        <linearGradient
          id="expeditedbackground__linear-gradient-16"
          x1={9764.79}
          y1={497.69}
          x2={9761.24}
          y2={492.03}
          xlinkHref="#expeditedbackground__linear-gradient-2"
        />
        <linearGradient
          id="expeditedbackground__linear-gradient-17"
          x1={-11206.02}
          y1={492.56}
          x2={-11199.47}
          y2={495.96}
          xlinkHref="#expeditedbackground__linear-gradient-3"
        />
        <linearGradient
          id="expeditedbackground__linear-gradient-18"
          x1={-11200.95}
          y1={492.86}
          x2={-11202.51}
          y2={496.01}
          gradientTransform="matrix(-1 0 0 1 -10332.94 0)"
          xlinkHref="#expeditedbackground__linear-gradient-2"
        />
        <linearGradient
          id="expeditedbackground__linear-gradient-19"
          x1={-11205.87}
          y1={474.15}
          x2={-11219.17}
          y2={499.51}
          xlinkHref="#expeditedbackground__linear-gradient-9"
        />
        <linearGradient
          id="expeditedbackground__linear-gradient-20"
          x1={-11253.67}
          y1={517.63}
          x2={-11247.13}
          y2={514.7}
          xlinkHref="#expeditedbackground__linear-gradient-3"
        />
        <linearGradient
          id="expeditedbackground__linear-gradient-21"
          x1={9927.97}
          y1={503.08}
          x2={9919.08}
          y2={507.95}
          xlinkHref="#expeditedbackground__linear-gradient"
        />
        <linearGradient
          id="expeditedbackground__linear-gradient-22"
          x1={9927.11}
          y1={507.35}
          x2={9923.56}
          y2={501.69}
          xlinkHref="#expeditedbackground__linear-gradient-2"
        />
        <linearGradient
          id="expeditedbackground__linear-gradient-23"
          x1={-11368.34}
          y1={502.22}
          x2={-11361.79}
          y2={505.62}
          xlinkHref="#expeditedbackground__linear-gradient-3"
        />
        <linearGradient
          id="expeditedbackground__linear-gradient-24"
          x1={-11363.27}
          y1={502.52}
          x2={-11364.83}
          y2={505.67}
          gradientTransform="matrix(-1 0 0 1 -10332.94 0)"
          xlinkHref="#expeditedbackground__linear-gradient-2"
        />
        <linearGradient
          id="expeditedbackground__linear-gradient-25"
          x1={9936.22}
          y1={507.94}
          x2={9927.33}
          y2={512.81}
          xlinkHref="#expeditedbackground__linear-gradient"
        />
        <linearGradient
          id="expeditedbackground__linear-gradient-26"
          x1={9935.36}
          y1={512.21}
          x2={9931.81}
          y2={506.55}
          xlinkHref="#expeditedbackground__linear-gradient-2"
        />
        <linearGradient
          id="expeditedbackground__linear-gradient-27"
          x1={-11376.58}
          y1={507.08}
          x2={-11370.04}
          y2={510.48}
          xlinkHref="#expeditedbackground__linear-gradient-3"
        />
        <linearGradient
          id="expeditedbackground__linear-gradient-28"
          x1={-11371.52}
          y1={507.38}
          x2={-11373.08}
          y2={510.53}
          gradientTransform="matrix(-1 0 0 1 -10332.94 0)"
          xlinkHref="#expeditedbackground__linear-gradient-2"
        />
        <linearGradient
          id="expeditedbackground__linear-gradient-29"
          x1={-11376.43}
          y1={488.67}
          x2={-11389.74}
          y2={514.03}
          xlinkHref="#expeditedbackground__linear-gradient-9"
        />
        <linearGradient
          id="expeditedbackground__linear-gradient-30"
          x1={-11424.24}
          y1={532.15}
          x2={-11417.69}
          y2={529.22}
          xlinkHref="#expeditedbackground__linear-gradient-3"
        />
        <linearGradient
          id="expeditedbackground__New_Gradient_Swatch_copy_8"
          data-name="New Gradient Swatch copy 8"
          x1={511.46}
          y1={322}
          x2={544.17}
          y2={312.21}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.04} stopColor="#ffa98c" />
          <stop offset={0.32} stopColor="#ffb892" />
          <stop offset={0.86} stopColor="#fee1a3" />
          <stop offset={1} stopColor="#feeca8" />
        </linearGradient>
        <linearGradient
          id="expeditedbackground__New_Gradient_Swatch_copy_8-2"
          x1={481.58}
          y1={325.98}
          x2={522.85}
          y2={316.73}
          xlinkHref="#expeditedbackground__New_Gradient_Swatch_copy_8"
        />
        <linearGradient
          id="expeditedbackground__linear-gradient-31"
          x1={488.09}
          y1={326.13}
          x2={512.69}
          y2={320.61}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#d4d1d8" />
          <stop offset={1} stopColor="#eeebf2" />
        </linearGradient>
        <linearGradient
          id="expeditedbackground__New_Gradient_Swatch_copy_8-3"
          x1={521.05}
          y1={286.47}
          x2={507.02}
          y2={313.2}
          xlinkHref="#expeditedbackground__New_Gradient_Swatch_copy_8"
        />
        <linearGradient
          id="expeditedbackground__linear-gradient-32"
          x1={513.82}
          y1={316.45}
          x2={521.53}
          y2={314.14}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.04} stopColor="#c97052" />
          <stop offset={0.34} stopColor="#d47e61" />
          <stop offset={0.92} stopColor="#f2a48a" />
          <stop offset={1} stopColor="#f7aa90" />
        </linearGradient>
        <linearGradient
          id="expeditedbackground__linear-gradient-33"
          x1={511.94}
          y1={304.47}
          x2={508.21}
          y2={311.57}
          xlinkHref="#expeditedbackground__linear-gradient-32"
        />
        <linearGradient
          id="expeditedbackground__linear-gradient-34"
          x1={153.82}
          y1={-765.98}
          x2={158.69}
          y2={-763.35}
          gradientTransform="matrix(.87 -.5 0 1.15 376.64 1287.71)"
          xlinkHref="#expeditedbackground__linear-gradient-32"
        />
        <linearGradient
          id="expeditedbackground__linear-gradient-35"
          x1={156.6}
          y1={-765.98}
          x2={161.47}
          y2={-763.35}
          gradientTransform="matrix(.87 -.5 0 1.15 376.64 1287.71)"
          xlinkHref="#expeditedbackground__linear-gradient-32"
        />
        <linearGradient
          id="expeditedbackground__New_Gradient_Swatch_copy_8-4"
          x1={3941.36}
          y1={311.69}
          x2={3974.37}
          y2={304.29}
          gradientTransform="matrix(-1 0 0 1 4461.93 0)"
          xlinkHref="#expeditedbackground__New_Gradient_Swatch_copy_8"
        />
        <linearGradient
          id="expeditedbackground__New_Gradient_Swatch_copy_8-5"
          x1={3947.73}
          y1={308.85}
          x2={3962.7}
          y2={304.37}
          gradientTransform="matrix(-1 0 0 1 4461.93 0)"
          xlinkHref="#expeditedbackground__New_Gradient_Swatch_copy_8"
        />
        <linearGradient
          id="expeditedbackground__New_Gradient_Swatch_copy_8-6"
          x1={3961.92}
          y1={286.47}
          x2={3953.21}
          y2={303.07}
          gradientTransform="matrix(-1 0 0 1 4461.93 0)"
          xlinkHref="#expeditedbackground__New_Gradient_Swatch_copy_8"
        />
        <linearGradient
          id="expeditedbackground__linear-gradient-36"
          x1={3957.43}
          y1={305.08}
          x2={3962.22}
          y2={303.65}
          gradientTransform="matrix(-1 0 0 1 4461.93 0)"
          xlinkHref="#expeditedbackground__linear-gradient-32"
        />
        <linearGradient
          id="expeditedbackground__linear-gradient-37"
          x1={3956.26}
          y1={297.64}
          x2={3953.95}
          y2={302.05}
          gradientTransform="matrix(-1 0 0 1 4461.93 0)"
          xlinkHref="#expeditedbackground__linear-gradient-32"
        />
        <linearGradient
          id="expeditedbackground__linear-gradient-38"
          x1={4132.02}
          y1={943.55}
          x2={4135.04}
          y2={945.18}
          gradientTransform="matrix(-.87 -.5 0 1.15 4085.29 1287.71)"
          xlinkHref="#expeditedbackground__linear-gradient-32"
        />
        <linearGradient
          id="expeditedbackground__linear-gradient-39"
          x1={4133.74}
          y1={943.55}
          x2={4136.77}
          y2={945.18}
          gradientTransform="matrix(-.87 -.5 0 1.15 4085.29 1287.71)"
          xlinkHref="#expeditedbackground__linear-gradient-32"
        />
        <linearGradient
          id="expeditedbackground__New_Gradient_Swatch_copy_11"
          data-name="New Gradient Swatch copy 11"
          x1={530.39}
          y1={337.63}
          x2={523.37}
          y2={328.22}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.04} stopColor="#1e1e1e" />
          <stop offset={0.49} stopColor="#2d2d2d" />
          <stop offset={1} stopColor="#444" />
        </linearGradient>
        <linearGradient
          id="expeditedbackground__New_Gradient_Swatch_copy_38"
          data-name="New Gradient Swatch copy 38"
          x1={520.99}
          y1={334.16}
          x2={529}
          y2={334.16}
          gradientTransform="rotate(30.31 525.004 334.165)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#171717" />
          <stop offset={1} stopColor="#2d2d2d" />
        </linearGradient>
        <linearGradient
          id="expeditedbackground__linear-gradient-40"
          x1={522.05}
          y1={334.23}
          x2={528.21}
          y2={334.23}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#e19595" />
          <stop offset={0.68} stopColor="#eec2c2" />
          <stop offset={1} stopColor="#f4d9d9" />
        </linearGradient>
        <linearGradient
          id="expeditedbackground__linear-gradient-41"
          x1={521.85}
          y1={334.3}
          x2={528.02}
          y2={334.3}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.04} stopColor="#ccc" />
          <stop offset={0.58} stopColor="#e6e6e6" />
          <stop offset={1} stopColor="#f2f2f2" />
        </linearGradient>
        <linearGradient
          id="expeditedbackground__New_Gradient_Swatch_copy_11-2"
          x1={568.36}
          y1={359.4}
          x2={561.34}
          y2={349.99}
          xlinkHref="#expeditedbackground__New_Gradient_Swatch_copy_11"
        />
        <linearGradient
          id="expeditedbackground__New_Gradient_Swatch_copy_38-2"
          x1={558.96}
          y1={355.93}
          x2={566.97}
          y2={355.93}
          xlinkHref="#expeditedbackground__New_Gradient_Swatch_copy_38"
        />
        <linearGradient
          id="expeditedbackground__linear-gradient-42"
          x1={560.02}
          y1={355.99}
          x2={566.18}
          y2={355.99}
          xlinkHref="#expeditedbackground__linear-gradient-40"
        />
        <linearGradient
          id="expeditedbackground__linear-gradient-43"
          x1={559.82}
          y1={356.07}
          x2={565.99}
          y2={356.07}
          xlinkHref="#expeditedbackground__linear-gradient-41"
        />
        <linearGradient
          id="expeditedbackground__New_Gradient_Swatch_copy_37"
          data-name="New Gradient Swatch copy 37"
          x1={564.78}
          y1={336.7}
          x2={583.71}
          y2={336.7}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.04} stopColor="silver" />
          <stop offset={0.45} stopColor="#cfcfcf" />
          <stop offset={1} stopColor="#eaeaea" />
        </linearGradient>
        <linearGradient
          id="expeditedbackground__New_Gradient_Swatch_copy_37-2"
          x1={556.67}
          y1={337.76}
          x2={563.6}
          y2={337.76}
          xlinkHref="#expeditedbackground__New_Gradient_Swatch_copy_37"
        />
        <linearGradient
          id="expeditedbackground__linear-gradient-44"
          x1={569.86}
          y1={355.47}
          x2={575.31}
          y2={355.47}
          xlinkHref="#expeditedbackground__linear-gradient-40"
        />
        <linearGradient
          id="expeditedbackground__linear-gradient-45"
          x1={572.69}
          y1={356.69}
          x2={572.57}
          y2={352.66}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#d26161" />
          <stop offset={0.02} stopColor="#d36666" />
          <stop offset={0.27} stopColor="#e39c9c" />
          <stop offset={0.5} stopColor="#efc7c7" />
          <stop offset={0.7} stopColor="#f8e6e6" />
          <stop offset={0.88} stopColor="#fdf8f8" />
          <stop offset={1} stopColor="#fff" />
        </linearGradient>
        <linearGradient
          id="expeditedbackground__linear-gradient-46"
          x1={587.57}
          y1={347.22}
          x2={589.64}
          y2={347.22}
          xlinkHref="#expeditedbackground__linear-gradient-40"
        />
        <linearGradient
          id="expeditedbackground__linear-gradient-47"
          x1={587.57}
          y1={347.22}
          x2={589.53}
          y2={347.22}
          xlinkHref="#expeditedbackground__linear-gradient-45"
        />
        <linearGradient
          id="expeditedbackground__linear-gradient-48"
          x1={564.78}
          y1={332.69}
          x2={582.51}
          y2={332.69}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#d26161" />
          <stop offset={0.19} stopColor="#994747" />
          <stop offset={0.39} stopColor="#632e2e" />
          <stop offset={0.58} stopColor="#381a1a" />
          <stop offset={0.75} stopColor="#190c0c" />
          <stop offset={0.9} stopColor="#070303" />
          <stop offset={1} />
        </linearGradient>
        <linearGradient
          id="expeditedbackground__linear-gradient-49"
          x1={587.59}
          y1={333.87}
          x2={538.34}
          y2={307.47}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#eab7b7" />
          <stop offset={0.04} stopColor="#dcacac" />
          <stop offset={0.24} stopColor="#9a7878" />
          <stop offset={0.44} stopColor="#634d4d" />
          <stop offset={0.61} stopColor="#382c2c" />
          <stop offset={0.77} stopColor="#191414" />
          <stop offset={0.91} stopColor="#070505" />
          <stop offset={1} />
        </linearGradient>
        <linearGradient
          id="expeditedbackground__linear-gradient-50"
          x1={564.49}
          y1={344.32}
          x2={559.7}
          y2={347.31}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#ba0f0f" />
          <stop offset={0.06} stopColor="#c02323" />
          <stop offset={0.26} stopColor="#d36565" />
          <stop offset={0.44} stopColor="#e39c9c" />
          <stop offset={0.62} stopColor="#efc7c7" />
          <stop offset={0.77} stopColor="#f8e6e6" />
          <stop offset={0.91} stopColor="#fdf8f8" />
          <stop offset={1} stopColor="#fff" />
        </linearGradient>
        <linearGradient
          id="expeditedbackground__linear-gradient-51"
          x1={541.77}
          y1={345.02}
          x2={544.11}
          y2={341.16}
          xlinkHref="#expeditedbackground__linear-gradient-45"
        />
        <linearGradient
          id="expeditedbackground__linear-gradient-52"
          x1={515.19}
          y1={329.48}
          x2={517.28}
          y2={326.03}
          xlinkHref="#expeditedbackground__linear-gradient-45"
        />
        <linearGradient
          id="expeditedbackground__linear-gradient-53"
          x1={571.36}
          y1={355.33}
          x2={574.43}
          y2={355.33}
          xlinkHref="#expeditedbackground__linear-gradient-40"
        />
        <linearGradient
          id="expeditedbackground__linear-gradient-54"
          x1={-2251.11}
          y1={355.55}
          x2={-2249.73}
          y2={355.55}
          gradientTransform="matrix(-1 0 0 1 -1676.39 0)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#e19595" />
          <stop offset={0.45} stopColor="#eec2c2" />
          <stop offset={1} stopColor="#fff" />
        </linearGradient>
        <linearGradient
          id="expeditedbackground__linear-gradient-55"
          x1={570.29}
          y1={355.55}
          x2={572.74}
          y2={355.55}
          xlinkHref="#expeditedbackground__linear-gradient-40"
        />
        <linearGradient
          id="expeditedbackground__linear-gradient-56"
          x1={-2249.36}
          y1={355.73}
          x2={-2248.27}
          y2={355.73}
          xlinkHref="#expeditedbackground__linear-gradient-54"
        />
        <linearGradient
          id="expeditedbackground__linear-gradient-57"
          x1={587.79}
          y1={347.7}
          x2={589.15}
          y2={347.7}
          xlinkHref="#expeditedbackground__linear-gradient-40"
        />
        <linearGradient
          id="expeditedbackground__linear-gradient-58"
          x1={-2265.74}
          y1={347.73}
          x2={-2264.8}
          y2={347.73}
          xlinkHref="#expeditedbackground__linear-gradient-54"
        />
        <linearGradient
          id="expeditedbackground__linear-gradient-59"
          x1={588.39}
          y1={346.58}
          x2={589.38}
          y2={346.58}
          xlinkHref="#expeditedbackground__linear-gradient-40"
        />
        <linearGradient
          id="expeditedbackground__linear-gradient-60"
          x1={-2265.91}
          y1={346.6}
          x2={-2265.23}
          y2={346.6}
          xlinkHref="#expeditedbackground__linear-gradient-54"
        />
        <linearGradient
          id="expeditedbackground__linear-gradient-61"
          x1={582.4}
          y1={353.1}
          x2={580.87}
          y2={348.89}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#b3b3b3" />
          <stop offset={1} stopColor="#f2f2f2" />
        </linearGradient>
        <linearGradient
          id="expeditedbackground__linear-gradient-62"
          x1={598.55}
          y1={347.93}
          x2={568.01}
          y2={344.18}
          xlinkHref="#expeditedbackground__linear-gradient-49"
        />
        <linearGradient
          id="expeditedbackground__linear-gradient-63"
          x1={538.41}
          y1={335.18}
          x2={540.8}
          y2={331.23}
          xlinkHref="#expeditedbackground__linear-gradient-48"
        />
        <linearGradient
          id="expeditedbackground__linear-gradient-64"
          x1={511.87}
          y1={325.55}
          x2={513.8}
          y2={325.55}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.04} stopColor="#e6e6e6" />
          <stop offset={1} stopColor="#f2f2f2" />
        </linearGradient>
        <linearGradient
          id="expeditedbackground__linear-gradient-65"
          x1={557.37}
          y1={343.02}
          x2={559.18}
          y2={343.02}
          xlinkHref="#expeditedbackground__linear-gradient-45"
        />
        <linearGradient
          id="expeditedbackground__linear-gradient-66"
          x1={552.89}
          y1={340.61}
          x2={554.71}
          y2={340.61}
          xlinkHref="#expeditedbackground__linear-gradient-45"
        />
        <linearGradient
          id="expeditedbackground__New_Gradient_Swatch_copy_11-3"
          x1={976.88}
          y1={561.25}
          x2={969.86}
          y2={551.84}
          xlinkHref="#expeditedbackground__New_Gradient_Swatch_copy_11"
        />
        <linearGradient
          id="expeditedbackground__New_Gradient_Swatch_copy_38-3"
          x1={967.48}
          y1={557.78}
          x2={975.49}
          y2={557.78}
          gradientTransform="rotate(30.31 971.506 557.806)"
          xlinkHref="#expeditedbackground__New_Gradient_Swatch_copy_38"
        />
        <linearGradient
          id="expeditedbackground__linear-gradient-67"
          x1={968.53}
          y1={557.85}
          x2={974.7}
          y2={557.85}
          xlinkHref="#expeditedbackground__linear-gradient-40"
        />
        <linearGradient
          id="expeditedbackground__linear-gradient-68"
          x1={968.34}
          y1={557.92}
          x2={974.51}
          y2={557.92}
          xlinkHref="#expeditedbackground__linear-gradient-41"
        />
        <linearGradient
          id="expeditedbackground__New_Gradient_Swatch_copy_11-4"
          x1={1014.85}
          y1={583.02}
          x2={1007.83}
          y2={573.61}
          xlinkHref="#expeditedbackground__New_Gradient_Swatch_copy_11"
        />
        <linearGradient
          id="expeditedbackground__New_Gradient_Swatch_copy_38-4"
          x1={1005.45}
          y1={579.55}
          x2={1013.46}
          y2={579.55}
          xlinkHref="#expeditedbackground__New_Gradient_Swatch_copy_38"
        />
        <linearGradient
          id="expeditedbackground__linear-gradient-69"
          x1={1006.5}
          y1={579.61}
          x2={1012.67}
          y2={579.61}
          xlinkHref="#expeditedbackground__linear-gradient-40"
        />
        <linearGradient
          id="expeditedbackground__linear-gradient-70"
          x1={1006.31}
          y1={579.69}
          x2={1012.48}
          y2={579.69}
          xlinkHref="#expeditedbackground__linear-gradient-41"
        />
        <linearGradient
          id="expeditedbackground__New_Gradient_Swatch_copy_37-3"
          x1={1011.26}
          y1={560.32}
          x2={1030.19}
          y2={560.32}
          xlinkHref="#expeditedbackground__New_Gradient_Swatch_copy_37"
        />
        <linearGradient
          id="expeditedbackground__New_Gradient_Swatch_copy_37-4"
          x1={1003.15}
          y1={561.38}
          x2={1010.09}
          y2={561.38}
          xlinkHref="#expeditedbackground__New_Gradient_Swatch_copy_37"
        />
        <linearGradient
          id="expeditedbackground__linear-gradient-71"
          x1={1016.35}
          y1={579.09}
          x2={1021.8}
          y2={579.09}
          xlinkHref="#expeditedbackground__linear-gradient-40"
        />
        <linearGradient
          id="expeditedbackground__linear-gradient-72"
          x1={1019.18}
          y1={580.31}
          x2={1019.06}
          y2={576.28}
          xlinkHref="#expeditedbackground__linear-gradient-45"
        />
        <linearGradient
          id="expeditedbackground__linear-gradient-73"
          x1={1034.06}
          y1={570.84}
          x2={1036.13}
          y2={570.84}
          xlinkHref="#expeditedbackground__linear-gradient-40"
        />
        <linearGradient
          id="expeditedbackground__linear-gradient-74"
          x1={1034.06}
          y1={570.84}
          x2={1036.01}
          y2={570.84}
          xlinkHref="#expeditedbackground__linear-gradient-45"
        />
        <linearGradient
          id="expeditedbackground__linear-gradient-75"
          x1={1011.27}
          y1={556.31}
          x2={1029}
          y2={556.31}
          xlinkHref="#expeditedbackground__linear-gradient-48"
        />
        <linearGradient
          id="expeditedbackground__linear-gradient-76"
          x1={1034.08}
          y1={557.49}
          x2={984.82}
          y2={531.09}
          xlinkHref="#expeditedbackground__linear-gradient-49"
        />
        <linearGradient
          id="expeditedbackground__linear-gradient-77"
          x1={1010.98}
          y1={567.94}
          x2={1006.18}
          y2={570.93}
          xlinkHref="#expeditedbackground__linear-gradient-50"
        />
        <linearGradient
          id="expeditedbackground__linear-gradient-78"
          x1={988.26}
          y1={568.64}
          x2={990.6}
          y2={564.78}
          xlinkHref="#expeditedbackground__linear-gradient-45"
        />
        <linearGradient
          id="expeditedbackground__linear-gradient-79"
          x1={961.68}
          y1={553.1}
          x2={963.77}
          y2={549.65}
          xlinkHref="#expeditedbackground__linear-gradient-45"
        />
        <linearGradient
          id="expeditedbackground__linear-gradient-80"
          x1={1017.84}
          y1={578.95}
          x2={1020.92}
          y2={578.95}
          xlinkHref="#expeditedbackground__linear-gradient-40"
        />
        <linearGradient
          id="expeditedbackground__linear-gradient-81"
          x1={-2697.6}
          y1={579.17}
          x2={-2696.22}
          y2={579.17}
          xlinkHref="#expeditedbackground__linear-gradient-54"
        />
        <linearGradient
          id="expeditedbackground__linear-gradient-82"
          x1={1016.78}
          y1={579.17}
          x2={1019.23}
          y2={579.17}
          xlinkHref="#expeditedbackground__linear-gradient-40"
        />
        <linearGradient
          id="expeditedbackground__linear-gradient-83"
          x1={-2695.85}
          y1={579.35}
          x2={-2694.75}
          y2={579.35}
          xlinkHref="#expeditedbackground__linear-gradient-54"
        />
        <linearGradient
          id="expeditedbackground__linear-gradient-84"
          x1={1034.28}
          y1={571.32}
          x2={1035.64}
          y2={571.32}
          xlinkHref="#expeditedbackground__linear-gradient-40"
        />
        <linearGradient
          id="expeditedbackground__linear-gradient-85"
          x1={-2712.23}
          y1={571.35}
          x2={-2711.29}
          y2={571.35}
          xlinkHref="#expeditedbackground__linear-gradient-54"
        />
        <linearGradient
          id="expeditedbackground__linear-gradient-86"
          x1={1034.87}
          y1={570.2}
          x2={1035.87}
          y2={570.2}
          xlinkHref="#expeditedbackground__linear-gradient-40"
        />
        <linearGradient
          id="expeditedbackground__linear-gradient-87"
          x1={-2712.4}
          y1={570.22}
          x2={-2711.71}
          y2={570.22}
          xlinkHref="#expeditedbackground__linear-gradient-54"
        />
        <linearGradient
          id="expeditedbackground__linear-gradient-88"
          x1={1028.89}
          y1={576.72}
          x2={1027.36}
          y2={572.51}
          xlinkHref="#expeditedbackground__linear-gradient-61"
        />
        <linearGradient
          id="expeditedbackground__linear-gradient-89"
          x1={1045.04}
          y1={571.55}
          x2={1014.5}
          y2={567.8}
          xlinkHref="#expeditedbackground__linear-gradient-49"
        />
        <linearGradient
          id="expeditedbackground__linear-gradient-90"
          x1={984.9}
          y1={558.8}
          x2={987.29}
          y2={554.85}
          xlinkHref="#expeditedbackground__linear-gradient-48"
        />
        <linearGradient
          id="expeditedbackground__linear-gradient-91"
          x1={958.36}
          y1={549.17}
          x2={960.28}
          y2={549.17}
          xlinkHref="#expeditedbackground__linear-gradient-64"
        />
        <linearGradient
          id="expeditedbackground__linear-gradient-92"
          x1={1003.86}
          y1={566.64}
          x2={1005.67}
          y2={566.64}
          xlinkHref="#expeditedbackground__linear-gradient-45"
        />
        <linearGradient
          id="expeditedbackground__linear-gradient-93"
          x1={999.38}
          y1={564.23}
          x2={1001.19}
          y2={564.23}
          xlinkHref="#expeditedbackground__linear-gradient-45"
        />
        <linearGradient
          id="expeditedbackground__\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_14"
          data-name="\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9 \xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2 14"
          x1={796.54}
          y1={112.01}
          x2={797.75}
          y2={112.01}
          gradientTransform="translate(-241.22 380.3)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.16} stopColor="#3d3d3d" />
          <stop offset={0.16} stopColor="#5e5e5e" />
          <stop offset={0.56} stopColor="#5e5e5e" />
          <stop offset={0.56} stopColor="#7a7a7a" />
          <stop offset={0.87} stopColor="#7a7a7a" />
          <stop offset={0.87} stopColor="#7a7a7a" />
        </linearGradient>
        <linearGradient
          id="expeditedbackground__\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_14-2"
          x1={825.4}
          y1={134.56}
          x2={826.61}
          y2={134.56}
          xlinkHref="#expeditedbackground__\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_14"
        />
        <linearGradient
          id="expeditedbackground__\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_14-3"
          x1={-2415.62}
          y1={456.15}
          x2={-2414.28}
          y2={455.92}
          gradientTransform="matrix(-1 0 0 1 -1916.66 0)"
          xlinkHref="#expeditedbackground__\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_14"
        />
        <linearGradient
          id="expeditedbackground__\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_14-4"
          x1={779.97}
          y1={107.45}
          x2={781.18}
          y2={107.45}
          xlinkHref="#expeditedbackground__\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_14"
        />
        <linearGradient
          id="expeditedbackground__\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_14-5"
          x1={784.78}
          y1={111.32}
          x2={785.99}
          y2={111.32}
          xlinkHref="#expeditedbackground__\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_14"
        />
        <linearGradient
          id="expeditedbackground__\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_14-6"
          x1={789.59}
          y1={115.19}
          x2={790.8}
          y2={115.19}
          xlinkHref="#expeditedbackground__\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_14"
        />
        <radialGradient
          id="expeditedbackground__radial-gradient"
          cx={-11208.9}
          cy={597.12}
          r={0.83}
          gradientTransform="matrix(-1 0 0 1 -10332.94 0)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#eeebf2" />
          <stop offset={0.58} stopColor="#d4d1d8" />
          <stop offset={0.94} stopColor="#a5a6b9" />
          <stop offset={1} stopColor="#9d9eb3" />
        </radialGradient>
        <radialGradient
          id="expeditedbackground__radial-gradient-2"
          cx={-11217.26}
          cy={601.98}
          r={0.83}
          xlinkHref="#expeditedbackground__radial-gradient"
        />
        <radialGradient
          id="expeditedbackground__radial-gradient-3"
          cx={-11241.44}
          cy={616.05}
          r={0.83}
          xlinkHref="#expeditedbackground__radial-gradient"
        />
        <radialGradient
          id="expeditedbackground__radial-gradient-4"
          cx={-11266.27}
          cy={630.42}
          r={0.83}
          xlinkHref="#expeditedbackground__radial-gradient"
        />
        <radialGradient
          id="expeditedbackground__radial-gradient-5"
          cx={-11289.97}
          cy={624.05}
          r={0.3}
          gradientTransform="matrix(-1 0 0 1 -10332.94 0)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#9f19ab" />
          <stop offset={0.01} stopColor="#9c19a8" />
          <stop offset={0.13} stopColor="#73127c" />
          <stop offset={0.25} stopColor="#500d56" />
          <stop offset={0.38} stopColor="#330836" />
          <stop offset={0.52} stopColor="#1c041e" />
          <stop offset={0.66} stopColor="#0c020d" />
          <stop offset={0.81} stopColor="#030003" />
          <stop offset={1} />
        </radialGradient>
        <radialGradient
          id="expeditedbackground__radial-gradient-6"
          cx={-11281.1}
          cy={629.15}
          r={7.77}
          xlinkHref="#expeditedbackground__radial-gradient-5"
        />
        <radialGradient
          id="expeditedbackground__radial-gradient-7"
          cx={-34718.39}
          cy={-10384.92}
          r={6.5}
          gradientTransform="matrix(-.09 -.18 -.88 .47 -11479.25 -627.64)"
          xlinkHref="#expeditedbackground__radial-gradient-5"
        />
        <radialGradient
          id="expeditedbackground__radial-gradient-8"
          cx={-11193.45}
          cy={489.4}
          r={0.83}
          xlinkHref="#expeditedbackground__radial-gradient"
        />
        <radialGradient
          id="expeditedbackground__radial-gradient-9"
          cx={-11201.81}
          cy={494.27}
          r={0.83}
          xlinkHref="#expeditedbackground__radial-gradient"
        />
        <radialGradient
          id="expeditedbackground__radial-gradient-10"
          cx={-11225.99}
          cy={508.34}
          r={0.83}
          xlinkHref="#expeditedbackground__radial-gradient"
        />
        <radialGradient
          id="expeditedbackground__radial-gradient-11"
          cx={-11250.82}
          cy={522.71}
          r={0.83}
          xlinkHref="#expeditedbackground__radial-gradient"
        />
        <radialGradient
          id="expeditedbackground__radial-gradient-12"
          cx={-11274.52}
          cy={516.34}
          r={0.3}
          xlinkHref="#expeditedbackground__radial-gradient-5"
        />
        <radialGradient
          id="expeditedbackground__radial-gradient-13"
          cx={-11265.65}
          cy={521.44}
          r={7.77}
          xlinkHref="#expeditedbackground__radial-gradient-5"
        />
        <radialGradient
          id="expeditedbackground__radial-gradient-14"
          cx={-34206.62}
          cy={-10421.84}
          r={6.5}
          gradientTransform="matrix(-.09 -.18 -.88 .47 -11479.25 -627.64)"
          xlinkHref="#expeditedbackground__radial-gradient-5"
        />
        <radialGradient
          id="expeditedbackground__radial-gradient-15"
          cx={-11364.02}
          cy={503.92}
          r={0.83}
          xlinkHref="#expeditedbackground__radial-gradient"
        />
        <radialGradient
          id="expeditedbackground__radial-gradient-16"
          cx={-11372.37}
          cy={508.79}
          r={0.83}
          xlinkHref="#expeditedbackground__radial-gradient"
        />
        <radialGradient
          id="expeditedbackground__radial-gradient-17"
          cx={-11396.56}
          cy={522.86}
          r={0.83}
          xlinkHref="#expeditedbackground__radial-gradient"
        />
        <radialGradient
          id="expeditedbackground__radial-gradient-18"
          cx={-11421.39}
          cy={537.23}
          r={0.83}
          xlinkHref="#expeditedbackground__radial-gradient"
        />
        <radialGradient
          id="expeditedbackground__radial-gradient-19"
          cx={-11445.08}
          cy={530.86}
          r={0.3}
          xlinkHref="#expeditedbackground__radial-gradient-5"
        />
        <radialGradient
          id="expeditedbackground__radial-gradient-20"
          cx={-11436.22}
          cy={535.96}
          r={7.77}
          xlinkHref="#expeditedbackground__radial-gradient-5"
        />
        <radialGradient
          id="expeditedbackground__radial-gradient-21"
          cx={-34671.01}
          cy={-10565.63}
          r={6.5}
          gradientTransform="matrix(-.09 -.18 -.88 .47 -11479.25 -627.64)"
          xlinkHref="#expeditedbackground__radial-gradient-5"
        />
        <radialGradient
          id="expeditedbackground__New_Gradient_Swatch_copy_33"
          data-name="New Gradient Swatch copy 33"
          cx={584}
          cy={333.63}
          r={1.89}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#853232" />
          <stop offset={1} stopColor="#ff3030" />
        </radialGradient>
        <radialGradient
          id="expeditedbackground__Radial_Gradient_1"
          data-name="Radial Gradient 1"
          cx={583.93}
          cy={333.46}
          r={1.81}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#fff" />
          <stop offset={1} />
        </radialGradient>
        <radialGradient
          id="expeditedbackground__Radial_Gradient_1-2"
          cx={525.82}
          cy={334.02}
          r={4.32}
          xlinkHref="#expeditedbackground__Radial_Gradient_1"
        />
        <radialGradient
          id="expeditedbackground__Radial_Gradient_1-3"
          cx={563.79}
          cy={355.79}
          r={4.32}
          xlinkHref="#expeditedbackground__Radial_Gradient_1"
        />
        <radialGradient
          id="expeditedbackground__New_Gradient_Swatch_copy_33-2"
          cx={553.13}
          cy={308.77}
          r={58.99}
          xlinkHref="#expeditedbackground__New_Gradient_Swatch_copy_33"
        />
        <radialGradient
          id="expeditedbackground__Radial_Gradient_1-4"
          cx={544.12}
          cy={331.14}
          r={27.79}
          xlinkHref="#expeditedbackground__Radial_Gradient_1"
        />
        <radialGradient
          id="expeditedbackground__New_Gradient_Swatch_copy_33-3"
          cx={561.62}
          cy={343.03}
          r={2.54}
          xlinkHref="#expeditedbackground__New_Gradient_Swatch_copy_33"
        />
        <radialGradient
          id="expeditedbackground__Radial_Gradient_1-5"
          cx={561.08}
          cy={340.93}
          r={2.93}
          xlinkHref="#expeditedbackground__Radial_Gradient_1"
        />
        <radialGradient
          id="expeditedbackground__New_Gradient_Swatch_copy_33-4"
          cx={578.46}
          cy={354.8}
          r={9.35}
          xlinkHref="#expeditedbackground__New_Gradient_Swatch_copy_33"
        />
        <radialGradient
          id="expeditedbackground__New_Gradient_Swatch_copy_39"
          data-name="New Gradient Swatch copy 39"
          cx={571.18}
          cy={-3789.69}
          r={1.04}
          gradientTransform="matrix(1 0 0 1.67 0 6670.4)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#c41010" />
          <stop offset={1} stopColor="#ff1717" />
        </radialGradient>
        <radialGradient
          id="expeditedbackground__Radial_Gradient_1-6"
          cx={582.29}
          cy={351.48}
          r={8.58}
          xlinkHref="#expeditedbackground__Radial_Gradient_1"
        />
        <radialGradient
          id="expeditedbackground__Radial_Gradient_1-7"
          cx={537.84}
          cy={326.8}
          r={21.9}
          xlinkHref="#expeditedbackground__Radial_Gradient_1"
        />
        <radialGradient
          id="expeditedbackground__New_Gradient_Swatch_copy_33-5"
          cx={557.46}
          cy={342.38}
          r={1.76}
          xlinkHref="#expeditedbackground__New_Gradient_Swatch_copy_33"
        />
        <radialGradient
          id="expeditedbackground__New_Gradient_Swatch_copy_33-6"
          cx={552.98}
          cy={339.97}
          r={1.76}
          xlinkHref="#expeditedbackground__New_Gradient_Swatch_copy_33"
        />
        <radialGradient
          id="expeditedbackground__White_Black_Radial"
          data-name="White, Black Radial"
          cx={550.31}
          cy={330.98}
          r={6.98}
          xlinkHref="#expeditedbackground__Radial_Gradient_1"
        />
        <radialGradient
          id="expeditedbackground__New_Gradient_Swatch_copy_33-7"
          cx={1030.49}
          cy={557.25}
          r={1.89}
          xlinkHref="#expeditedbackground__New_Gradient_Swatch_copy_33"
        />
        <radialGradient
          id="expeditedbackground__Radial_Gradient_1-8"
          cx={1030.42}
          cy={557.08}
          r={1.81}
          xlinkHref="#expeditedbackground__Radial_Gradient_1"
        />
        <radialGradient
          id="expeditedbackground__Radial_Gradient_1-9"
          cx={972.31}
          cy={557.64}
          r={4.32}
          xlinkHref="#expeditedbackground__Radial_Gradient_1"
        />
        <radialGradient
          id="expeditedbackground__Radial_Gradient_1-10"
          cx={1010.28}
          cy={579.41}
          r={4.32}
          xlinkHref="#expeditedbackground__Radial_Gradient_1"
        />
        <radialGradient
          id="expeditedbackground__New_Gradient_Swatch_copy_33-8"
          cx={999.62}
          cy={532.39}
          r={58.99}
          xlinkHref="#expeditedbackground__New_Gradient_Swatch_copy_33"
        />
        <radialGradient
          id="expeditedbackground__Radial_Gradient_1-11"
          cx={990.61}
          cy={554.76}
          r={27.79}
          xlinkHref="#expeditedbackground__Radial_Gradient_1"
        />
        <radialGradient
          id="expeditedbackground__New_Gradient_Swatch_copy_33-9"
          cx={1008.11}
          cy={566.65}
          r={2.54}
          xlinkHref="#expeditedbackground__New_Gradient_Swatch_copy_33"
        />
        <radialGradient
          id="expeditedbackground__Radial_Gradient_1-12"
          cx={1007.57}
          cy={564.55}
          r={2.93}
          xlinkHref="#expeditedbackground__Radial_Gradient_1"
        />
        <radialGradient
          id="expeditedbackground__New_Gradient_Swatch_copy_33-10"
          cx={1024.94}
          cy={578.42}
          r={9.35}
          xlinkHref="#expeditedbackground__New_Gradient_Swatch_copy_33"
        />
        <radialGradient
          id="expeditedbackground__New_Gradient_Swatch_copy_39-2"
          cx={1017.67}
          cy={-3655.49}
          r={1.04}
          xlinkHref="#expeditedbackground__New_Gradient_Swatch_copy_39"
        />
        <radialGradient
          id="expeditedbackground__Radial_Gradient_1-13"
          cx={1028.77}
          cy={575.1}
          r={8.58}
          xlinkHref="#expeditedbackground__Radial_Gradient_1"
        />
        <radialGradient
          id="expeditedbackground__Radial_Gradient_1-14"
          cx={984.32}
          cy={550.42}
          r={21.9}
          xlinkHref="#expeditedbackground__Radial_Gradient_1"
        />
        <radialGradient
          id="expeditedbackground__New_Gradient_Swatch_copy_33-11"
          cx={1003.94}
          cy={566}
          r={1.76}
          xlinkHref="#expeditedbackground__New_Gradient_Swatch_copy_33"
        />
        <radialGradient
          id="expeditedbackground__New_Gradient_Swatch_copy_33-12"
          cx={999.47}
          cy={563.59}
          r={1.76}
          xlinkHref="#expeditedbackground__New_Gradient_Swatch_copy_33"
        />
        <radialGradient
          id="expeditedbackground__White_Black_Radial-2"
          data-name="White, Black Radial"
          cx={996.8}
          cy={554.6}
          r={6.98}
          xlinkHref="#expeditedbackground__Radial_Gradient_1"
        />
        <clipPath id="expeditedbackground__clip-path">
          <path
            fill="none"
            d="M730.09 344.34v33.8l-64.22-11.03v-59.82l21.43 12.36 42.79 24.69z"
          />
        </clipPath>
      </defs>
      <g
        style={{
          isolation: "isolate",
        }}
      >
        <g id="expeditedbackground__Layer_2" data-name="Layer 2">
          <g id="expeditedbackground__Layer_1-2" data-name="Layer 1">
            <path
              fill="#e8bb78"
              d="M1280.82 563.78l-119.28 68.99-1.32.77-6.61 3.8-1.16.67-13.42 7.77-6.58 3.8-1.16.67-7.76 4.5-240.12 138.86L0 283.59 397.42 53.73l883.4 510.05z"
            />
            <g fill="#cc974c">
              <path d="M776 420.8c-.71 1.79-4.11 2.93-7.59 2.53s-5.72-2.17-5-4 4.12-2.93 7.59-2.54 5.74 2.21 5 4.01zM710.56 572.08c-.72 1.79-4.12 2.93-7.59 2.54s-5.73-2.17-5-4 4.11-2.93 7.59-2.54 5.71 2.2 5 4zM445.94 211.88c-.71 1.8-4.11 2.93-7.59 2.54s-5.72-2.17-5-4 4.12-2.93 7.6-2.53 5.71 2.2 4.99 3.99zM1015.63 684.42c-.71 1.79-4.11 2.93-7.59 2.54s-5.72-2.17-5-4 4.12-2.93 7.6-2.54 5.71 2.2 4.99 4zM348.69 440.05c-.71 1.79-4.11 2.93-7.59 2.54s-5.72-2.17-5-4 4.11-2.93 7.59-2.54 5.71 2.2 5 4z" />
              <ellipse
                cx={1101.28}
                cy={582.07}
                rx={3.33}
                ry={6.43}
                transform="rotate(-89.43 1101.331 582.054)"
              />
              <path d="M509 211.73c-.71 1.79-4.11 2.93-7.59 2.53s-5.72-2.17-5-4 4.11-2.93 7.59-2.54 5.73 2.21 5 4.01zM448.49 385.81c-.71 1.79-4.11 2.93-7.59 2.53s-5.72-2.17-5-4 4.12-2.93 7.6-2.54 5.71 2.2 4.99 4.01zM928.93 470.48c-.71 1.79-4.11 2.93-7.59 2.53s-5.72-2.17-5-4 4.12-2.93 7.6-2.54 5.71 2.21 4.99 4.01zM411.74 332.94c-.71 1.8-4.11 2.93-7.59 2.54s-5.72-2.17-5-4 4.11-2.93 7.59-2.53 5.71 2.2 5 3.99zM177.49 227.18c-.71 1.8-4.11 2.93-7.59 2.54s-5.72-2.17-5-4 4.11-2.93 7.59-2.53 5.71 2.2 5 3.99zM125.23 258c-.71 1.8-4.11 2.93-7.59 2.54s-5.72-2.17-5-4 4.11-2.94 7.59-2.54 5.77 2.16 5 4zM424.71 441c-.72 1.79-4.12 2.93-7.6 2.53s-5.72-2.17-5-4 4.11-2.93 7.59-2.54 5.72 2.24 5.01 4.01z" />
              <ellipse
                cx={528.7}
                cy={330.07}
                rx={3.33}
                ry={6.43}
                transform="rotate(-89.43 528.727 330.063)"
              />
              <path d="M689.12 638.91c-.71 1.8-4.11 2.93-7.59 2.54s-5.72-2.17-5-4 4.12-2.93 7.6-2.53 5.71 2.2 4.99 3.99zM874.81 506.26c-.71 1.8-4.11 2.93-7.59 2.54s-5.72-2.17-5-4 4.12-2.93 7.59-2.53 5.72 2.2 5 3.99zM980.7 559c-.71 1.8-4.11 2.93-7.59 2.54s-5.72-2.17-5-4 4.12-2.93 7.6-2.53 5.71 2.15 4.99 3.99z" />
              <ellipse
                cx={510.38}
                cy={269.66}
                rx={3.33}
                ry={6.43}
                transform="rotate(-89.43 510.411 269.647)"
              />
              <path d="M353.72 308.27c-.71 1.79-4.11 2.93-7.59 2.53s-5.72-2.17-5-4 4.11-2.93 7.59-2.54 5.71 2.21 5 4.01zM293.08 410.72c-.71 1.79-4.11 2.93-7.59 2.53s-5.72-2.17-5-4 4.11-2.93 7.59-2.54 5.71 2.21 5 4.01z" />
              <ellipse
                cx={269.64}
                cy={165.84}
                rx={3.33}
                ry={6.43}
                transform="rotate(-89.43 269.654 165.84)"
              />
              <path d="M870.06 573c-.72 1.8-4.12 2.93-7.6 2.54s-5.72-2.17-5-4 4.11-2.93 7.59-2.53 5.72 2.17 5.01 3.99zM990.67 621.84c-.71 1.8-4.11 2.93-7.59 2.54s-5.72-2.17-5-4 4.12-2.93 7.6-2.53 5.71 2.2 4.99 3.99zM508.52 539.75c-.71 1.79-4.11 2.93-7.59 2.54s-5.72-2.17-5-4 4.12-2.93 7.59-2.54 5.71 2.25 5 4zM1030.87 516.35c-.71 1.8-4.11 2.93-7.59 2.54s-5.72-2.17-5-4 4.12-2.93 7.6-2.53 5.71 2.2 4.99 3.99zM811.84 606.24c-.72 1.79-4.11 2.93-7.59 2.53s-5.72-2.17-5-4 4.11-2.93 7.59-2.54 5.71 2.21 5 4.01zM716.84 381c-.71 1.79-4.11 2.93-7.59 2.53s-5.72-2.17-5-4 4.12-2.93 7.6-2.54 5.71 2.16 4.99 4.01zM716.9 317.22c-.71 1.79-4.11 2.93-7.59 2.53s-5.72-2.17-5-4 4.12-2.93 7.6-2.54 5.71 2.21 4.99 4.01zM513.18 386.94c-.72 1.8-4.11 2.93-7.59 2.54s-5.72-2.17-5-4 4.11-2.94 7.59-2.54 5.71 2.21 5 4zM1163.08 601c-.71 1.8-4.11 2.93-7.59 2.54s-5.72-2.17-5-4 4.12-2.93 7.6-2.53 5.71 2.18 4.99 3.99zM701.28 261.5c-.71 1.79-4.11 2.93-7.59 2.53s-5.72-2.17-5-4 4.12-2.93 7.6-2.54 5.71 2.21 4.99 4.01zM576.65 384.53c-.71 1.79-4.11 2.93-7.59 2.53s-5.72-2.17-5-4 4.11-2.93 7.59-2.54 5.71 2.21 5 4.01zM603.16 484.23c-.72 1.79-4.11 2.93-7.59 2.53s-5.72-2.17-5-4 4.11-2.93 7.59-2.54 5.71 2.21 5 4.01zM568.48 575.73c-.71 1.8-4.11 2.93-7.59 2.54s-5.72-2.17-5-4 4.11-2.93 7.59-2.53 5.72 2.2 5 3.99zM828.33 464.53c-.71 1.8-4.11 2.93-7.59 2.54s-5.72-2.17-5-4 4.12-2.93 7.6-2.53 5.71 2.19 4.99 3.99zM606.72 334.86c-.71 1.8-4.11 2.93-7.59 2.54s-5.72-2.17-5-4 4.11-2.93 7.59-2.53 5.72 2.2 5 3.99zM716.52 510.55c-.72 1.8-4.12 2.93-7.6 2.54s-5.72-2.17-5-4 4.11-2.93 7.59-2.53 5.72 2.19 5.01 3.99zM456.78 277.66c-.72 1.79-4.11 2.93-7.59 2.54s-5.72-2.17-5-4 4.11-2.93 7.59-2.54 5.71 2.2 5 4zM342.06 365.45c-.71 1.79-4.11 2.93-7.59 2.53s-5.72-2.17-5-4 4.12-2.93 7.6-2.54 5.71 2.21 4.99 4.01zM473.43 140.43c-.71 1.79-4.11 2.93-7.59 2.53s-5.72-2.17-5-4 4.11-2.93 7.59-2.54 5.71 2.21 5 4.01zM407.56 158.46c-.71 1.8-4.11 2.93-7.59 2.54s-5.72-2.17-5-4 4.11-2.93 7.59-2.53 5.71 2.2 5 3.99zM824.84 665.47c-.72 1.79-4.12 2.93-7.59 2.53s-5.73-2.17-5-4 4.11-2.93 7.59-2.54 5.71 2.21 5 4.01zM928.8 605.48c-.71 1.79-4.11 2.93-7.59 2.53s-5.72-2.17-5-4 4.11-2.93 7.59-2.54 5.71 2.21 5 4.01zM70.32 285.79c-.71 1.79-4.11 2.93-7.59 2.53s-5.72-2.17-5-4 4.11-2.93 7.59-2.54 5.68 2.22 5 4.01zM1225.21 566.19c-.71 1.79-4.11 2.93-7.59 2.53s-5.72-2.17-5-4 4.12-2.93 7.6-2.54 5.71 2.21 4.99 4.01zM774.9 358c-.72 1.79-4.12 2.93-7.6 2.54s-5.72-2.17-5-4 4.11-2.93 7.59-2.54 5.72 2.23 5.01 4zM768.71 554.67c-.72 1.79-4.12 2.93-7.59 2.53s-5.73-2.17-5-4 4.11-2.93 7.59-2.54 5.71 2.21 5 4.01zM937.3 402c-.71 1.79-4.11 2.93-7.59 2.53s-5.72-2.17-5-4 4.12-2.93 7.59-2.54 5.7 2.22 5 4.01zM577.13 239.54c-.72 1.8-4.12 2.93-7.6 2.54s-5.72-2.17-5-4 4.11-2.93 7.59-2.53 5.72 2.2 5.01 3.99z" />
              <ellipse
                cx={874.1}
                cy={432.55}
                rx={3.33}
                ry={6.43}
                transform="rotate(-89.43 874.146 432.54)"
              />
              <path d="M828.52 334.78c-.71 1.8-4.11 2.93-7.59 2.54s-5.72-2.17-5-4 4.11-2.93 7.59-2.53 5.71 2.21 5 3.99zM894.41 691c-.71 1.8-4.11 2.93-7.59 2.54s-5.72-2.17-5-4 4.11-2.93 7.59-2.53 5.72 2.16 5 3.99zM775.49 489.69c-.71 1.79-4.11 2.93-7.59 2.53s-5.72-2.17-5-4 4.12-2.93 7.6-2.54 5.71 2.21 4.99 4.01z" />
              <ellipse
                cx={514.79}
                cy={484.28}
                rx={3.33}
                ry={6.43}
                transform="rotate(-89.43 514.825 484.278)"
              />
              <path d="M485.87 441c-.71 1.79-4.11 2.93-7.59 2.53s-5.72-2.16-5-4 4.11-2.93 7.59-2.54 5.72 2.22 5 4.01zM750.32 671c-.72 1.8-4.11 2.94-7.59 2.54s-5.72-2.17-5-4 4.11-2.93 7.59-2.54 5.68 2.25 5 4zM1098.36 641c-.71 1.79-4.11 2.93-7.59 2.53s-5.72-2.17-5-4 4.12-2.93 7.6-2.54 5.71 2.25 4.99 4.01zM641.11 281c-.71 1.8-4.11 2.93-7.59 2.54s-5.72-2.17-5-4 4.11-2.93 7.59-2.53 5.71 2.2 5 3.99zM945.9 665.39c-.36.91-2.06 1.48-3.81 1.28s-2.88-1.09-2.52-2 2.07-1.47 3.82-1.27 2.87 1.09 2.51 1.99zM578.19 190c-.36.9-2.07 1.47-3.82 1.27s-2.88-1.09-2.52-2 2.07-1.47 3.82-1.28 2.88 1.13 2.52 2.01zM793.07 708.36c-.36.9-2.07 1.47-3.82 1.27s-2.88-1.09-2.52-2 2.07-1.47 3.82-1.28 2.88 1.11 2.52 2.01zM288.29 295.24c-.35.91-2.06 1.48-3.81 1.28s-2.88-1.09-2.52-2 2.07-1.48 3.82-1.28 2.87 1.1 2.51 2zM125.35 320.07c-.35.91-2.06 1.48-3.81 1.28s-2.88-1.09-2.52-2 2.07-1.48 3.82-1.28 2.87 1.1 2.51 2zM418.26 96.92c-.35.9-2.06 1.47-3.81 1.28s-2.88-1.09-2.52-2 2.07-1.47 3.82-1.27 2.87 1.07 2.51 1.99zM639 383.45c-.36.9-2.07 1.47-3.82 1.27s-2.87-1.09-2.51-2 2.06-1.48 3.81-1.28 2.86 1.1 2.52 2.01zM1037.7 579.51c-.36.91-2.07 1.48-3.82 1.28s-2.87-1.09-2.51-2 2.07-1.47 3.81-1.27 2.88 1.09 2.52 1.99zM375.52 207.27c-.36.91-2.07 1.48-3.82 1.28s-2.88-1.09-2.52-2 2.07-1.48 3.82-1.28 2.88 1.1 2.52 2zM674.84 422.05c-.36.91-2.07 1.48-3.82 1.28s-2.88-1.09-2.52-2 2.07-1.48 3.82-1.28 2.88 1.1 2.52 2zM1129.46 514c-.36.9-2.07 1.47-3.82 1.27s-2.87-1.09-2.52-2 2.07-1.48 3.82-1.28 2.88 1.01 2.52 2.01zM451.72 502.9c-.36.91-2.07 1.48-3.82 1.28s-2.88-1.09-2.52-2 2.07-1.47 3.82-1.27 2.87 1.09 2.52 1.99zM1044.65 637.15c-.36.9-2.07 1.47-3.82 1.27s-2.88-1.09-2.52-2 2.07-1.48 3.82-1.28 2.87 1.1 2.52 2.01zM1079.67 537.9c-.36.91-2.07 1.48-3.82 1.28s-2.88-1.09-2.52-2 2.07-1.47 3.82-1.27 2.85 1.09 2.52 1.99zM526.15 161.24c-.36.9-2.07 1.48-3.82 1.28s-2.88-1.09-2.52-2 2.07-1.47 3.82-1.27 2.88 1.09 2.52 1.99zM621.7 610.34c-.36.9-2.07 1.48-3.82 1.28s-2.87-1.09-2.52-2 2.07-1.47 3.82-1.27 2.88 1.09 2.52 1.99zM748.18 615.2c-.36.9-2.07 1.47-3.82 1.28s-2.88-1.1-2.52-2 2.07-1.47 3.82-1.27 2.88 1.09 2.52 1.99zM561.2 520.36c-.36.9-2.07 1.47-3.82 1.27s-2.88-1.09-2.52-2 2.07-1.48 3.82-1.28 2.88 1.1 2.52 2.01zM393.87 480.08c-.35.91-2.06 1.48-3.81 1.28s-2.88-1.09-2.52-2 2.07-1.47 3.82-1.27 2.87 1.09 2.51 1.99zM921.91 539.47c-.35.9-2.06 1.48-3.81 1.28s-2.88-1.09-2.52-2 2.07-1.47 3.82-1.27 2.87 1.09 2.51 1.99zM974.09 495.89c-.36.9-2.07 1.47-3.82 1.28s-2.88-1.1-2.52-2 2.07-1.47 3.82-1.27 2.88 1.1 2.52 1.99zM274.8 236c-.36.91-2.07 1.48-3.82 1.28s-2.88-1.09-2.52-2 2.07-1.47 3.82-1.27 2.88 1.06 2.52 1.99zM1030.9 456.5c-.36.91-2.07 1.48-3.82 1.28s-2.87-1.09-2.52-2 2.07-1.47 3.82-1.27 2.88 1.09 2.52 1.99zM662.11 472.14c-.36.9-2.06 1.47-3.81 1.27s-2.88-1.09-2.52-2 2.07-1.48 3.82-1.28 2.87 1.1 2.51 2.01zM223.78 198.14c-.36.9-2.06 1.47-3.81 1.27s-2.88-1.09-2.52-2 2.07-1.48 3.82-1.28 2.87 1.1 2.51 2.01zM551.2 438.35c-.36.9-2.07 1.47-3.82 1.27s-2.88-1.09-2.52-2 2.07-1.47 3.82-1.27 2.88 1.1 2.52 2zM385.32 394c-.36.9-2.07 1.47-3.82 1.27s-2.88-1.09-2.52-2 2.07-1.48 3.82-1.28 2.88 1.13 2.52 2.01zM397.31 264.12c-.36.9-2.07 1.47-3.81 1.27s-2.88-1.09-2.52-2 2.07-1.48 3.82-1.28 2.87 1.1 2.51 2.01zM282.3 350.62c-.36.9-2.07 1.47-3.82 1.28s-2.88-1.1-2.52-2 2.07-1.47 3.82-1.27 2.87 1.09 2.52 1.99zM1171.74 541.2c-.36.9-2.07 1.48-3.82 1.28s-2.88-1.09-2.52-2 2.07-1.47 3.82-1.27 2.88 1.09 2.52 1.99zM881 369c-.36.9-2.07 1.47-3.82 1.27s-2.88-1.09-2.52-2 2.07-1.47 3.82-1.27 2.89 1.06 2.52 2zM227.9 264.25c-.36.9-2.07 1.47-3.82 1.27s-2.88-1.09-2.52-2 2.07-1.48 3.82-1.28 2.88 1.1 2.52 2.01zM573.82 290c-.36.91-2.07 1.48-3.82 1.28s-2.87-1.09-2.51-2 2.06-1.47 3.81-1.27 2.88 1.1 2.52 1.99zM952.56 721.59c-.36.9-2.07 1.47-3.82 1.27s-2.88-1.09-2.52-2 2.07-1.47 3.82-1.28 2.88 1.11 2.52 2.01zM335.79 254.9c-.36.9-2.06 1.47-3.81 1.27s-2.88-1.09-2.52-2 2.07-1.48 3.82-1.28 2.87 1.11 2.51 2.01zM472.52 332.67c-.35.91-2.06 1.48-3.81 1.28s-2.88-1.09-2.52-2 2.07-1.47 3.82-1.27 2.87 1.09 2.51 1.99zM176.9 292c-.36.9-2.07 1.47-3.82 1.27s-2.87-1.09-2.51-2 2.06-1.47 3.81-1.27 2.88 1.14 2.52 2zM610.81 546.52c-.36.9-2.07 1.48-3.82 1.28s-2.88-1.09-2.52-2 2.07-1.47 3.82-1.27 2.88 1.09 2.52 1.99zM827.52 396.05c-.36.91-2.07 1.48-3.82 1.28s-2.87-1.09-2.51-2 2.07-1.48 3.81-1.28 2.88 1.1 2.52 2zM663.54 337.1c-.36.9-2.07 1.47-3.82 1.27s-2.87-1.09-2.52-2 2.07-1.47 3.82-1.28 2.88 1.11 2.52 2.01zM1081.71 482c-.36.9-2.07 1.47-3.82 1.27s-2.87-1.09-2.51-2 2.06-1.48 3.81-1.28 2.88 1.11 2.52 2.01zM365.62 109.36c-.36.9-2.07 1.47-3.82 1.27s-2.87-1.09-2.51-2 2.06-1.48 3.81-1.28 2.9 1.1 2.52 2.01zM232.05 381c-.36.9-2.07 1.47-3.82 1.27s-2.87-1.09-2.51-2 2.06-1.48 3.81-1.28 2.88 1.11 2.52 2.01zM844.52 731.54c-.36.91-2.07 1.48-3.82 1.28s-2.88-1.09-2.52-2 2.07-1.48 3.82-1.28 2.88 1.1 2.52 2zM656.5 523.76c-.36.9-2.07 1.47-3.82 1.27s-2.87-1.09-2.51-2 2.07-1.48 3.81-1.28 2.88 1.1 2.52 2.01zM328.2 144.68c-.36.9-2.07 1.47-3.82 1.27s-2.87-1.09-2.52-2 2.07-1.48 3.82-1.28 2.88 1.1 2.52 2.01zM636.75 223.81c-.36.9-2.07 1.47-3.82 1.28s-2.87-1.1-2.51-2 2.06-1.47 3.81-1.27 2.88 1.09 2.52 1.99zM180 350.33c-.36.91-2.07 1.48-3.82 1.28s-2.87-1.09-2.51-2 2.06-1.47 3.81-1.27 2.88 1.09 2.52 1.99zM873.66 634c-.36.9-2.07 1.47-3.82 1.27s-2.88-1.09-2.52-2 2.07-1.48 3.82-1.28 2.86 1.12 2.52 2.01zM232.22 320.63c-.36.9-2.07 1.48-3.82 1.28s-2.88-1.09-2.52-2 2.07-1.47 3.82-1.27 2.88 1.09 2.52 1.99zM818.67 535.39c-.36.9-2.07 1.47-3.82 1.28s-2.88-1.09-2.52-2 2.07-1.47 3.82-1.27 2.85 1.09 2.52 1.99zM895.78 753.16c-.36.9-2.06 1.47-3.81 1.28s-2.88-1.1-2.52-2 2.07-1.47 3.82-1.27 2.87 1.09 2.51 1.99zM657.47 580.09c-.36.91-2.07 1.48-3.82 1.28s-2.87-1.09-2.51-2 2.06-1.48 3.81-1.28 2.88 1.1 2.52 2zM765.79 297.09c-.36.9-2.07 1.47-3.82 1.27s-2.88-1.09-2.52-2 2.07-1.48 3.82-1.28 2.88 1.1 2.52 2.01zM983.68 432.62c-.36.9-2.07 1.47-3.82 1.27s-2.88-1.09-2.52-2 2.07-1.48 3.82-1.28 2.84 1.1 2.52 2.01zM721.89 450.43c-.36.9-2.07 1.47-3.81 1.27s-2.88-1.09-2.52-2 2.07-1.48 3.82-1.28 2.87 1.1 2.51 2.01zM613.35 431.81c-.35.91-2.06 1.48-3.81 1.28s-2.88-1.09-2.52-2 2.07-1.47 3.82-1.27 2.87 1.09 2.51 1.99zM319.65 201.94c-.36.9-2.07 1.47-3.82 1.27s-2.87-1.09-2.51-2 2.07-1.48 3.82-1.28 2.86 1.07 2.51 2.01z" />
            </g>
            <path
              fill="#7c0a12"
              d="M1280.82 583.36l-119.28 69-1.32.76-6.61 3.8-1.16.67-13.42 7.77-6.58 3.8-1.16.67-7.76 4.5L883.41 813.2 0 303.17v-19.58L397.42 73.31l883.4 490.47v19.58z"
            />
            <path
              fill="#cd5257"
              d="M1280.82 563.78l-119.28 68.99-1.32.77-6.61 3.8-1.16.67-13.42 7.77-6.58 3.8-1.16.67-7.76 4.5-240.12 138.86L0 283.59 397.42 53.73l883.4 510.05z"
            />
            <g fill="#e6a9ab">
              <path d="M776 420.8c-.71 1.79-4.11 2.93-7.59 2.53s-5.72-2.17-5-4 4.12-2.93 7.59-2.54 5.74 2.21 5 4.01zM710.56 572.08c-.72 1.79-4.12 2.93-7.59 2.54s-5.73-2.17-5-4 4.11-2.93 7.59-2.54 5.71 2.2 5 4zM445.94 211.88c-.71 1.8-4.11 2.93-7.59 2.54s-5.72-2.17-5-4 4.12-2.93 7.6-2.53 5.71 2.2 4.99 3.99zM1015.63 684.42c-.71 1.79-4.11 2.93-7.59 2.54s-5.72-2.17-5-4 4.12-2.93 7.6-2.54 5.71 2.2 4.99 4zM348.69 440.05c-.71 1.79-4.11 2.93-7.59 2.54s-5.72-2.17-5-4 4.11-2.93 7.59-2.54 5.71 2.2 5 4z" />
              <ellipse
                cx={1101.28}
                cy={582.07}
                rx={3.33}
                ry={6.43}
                transform="rotate(-89.43 1101.331 582.054)"
              />
              <path d="M509 211.73c-.71 1.79-4.11 2.93-7.59 2.53s-5.72-2.17-5-4 4.11-2.93 7.59-2.54 5.73 2.21 5 4.01zM448.49 385.81c-.71 1.79-4.11 2.93-7.59 2.53s-5.72-2.17-5-4 4.12-2.93 7.6-2.54 5.71 2.2 4.99 4.01zM928.93 470.48c-.71 1.79-4.11 2.93-7.59 2.53s-5.72-2.17-5-4 4.12-2.93 7.6-2.54 5.71 2.21 4.99 4.01zM411.74 332.94c-.71 1.8-4.11 2.93-7.59 2.54s-5.72-2.17-5-4 4.11-2.93 7.59-2.53 5.71 2.2 5 3.99zM177.49 227.18c-.71 1.8-4.11 2.93-7.59 2.54s-5.72-2.17-5-4 4.11-2.93 7.59-2.53 5.71 2.2 5 3.99zM125.23 258c-.71 1.8-4.11 2.93-7.59 2.54s-5.72-2.17-5-4 4.11-2.94 7.59-2.54 5.77 2.16 5 4zM424.71 441c-.72 1.79-4.12 2.93-7.6 2.53s-5.72-2.17-5-4 4.11-2.93 7.59-2.54 5.72 2.24 5.01 4.01z" />
              <ellipse
                cx={528.7}
                cy={330.07}
                rx={3.33}
                ry={6.43}
                transform="rotate(-89.43 528.727 330.063)"
              />
              <path d="M689.12 638.91c-.71 1.8-4.11 2.93-7.59 2.54s-5.72-2.17-5-4 4.12-2.93 7.6-2.53 5.71 2.2 4.99 3.99zM874.81 506.26c-.71 1.8-4.11 2.93-7.59 2.54s-5.72-2.17-5-4 4.12-2.93 7.59-2.53 5.72 2.2 5 3.99zM980.7 559c-.71 1.8-4.11 2.93-7.59 2.54s-5.72-2.17-5-4 4.12-2.93 7.6-2.53 5.71 2.15 4.99 3.99z" />
              <ellipse
                cx={510.38}
                cy={269.66}
                rx={3.33}
                ry={6.43}
                transform="rotate(-89.43 510.411 269.647)"
              />
              <path d="M353.72 308.27c-.71 1.79-4.11 2.93-7.59 2.53s-5.72-2.17-5-4 4.11-2.93 7.59-2.54 5.71 2.21 5 4.01zM293.08 410.72c-.71 1.79-4.11 2.93-7.59 2.53s-5.72-2.17-5-4 4.11-2.93 7.59-2.54 5.71 2.21 5 4.01z" />
              <ellipse
                cx={269.64}
                cy={165.84}
                rx={3.33}
                ry={6.43}
                transform="rotate(-89.43 269.654 165.84)"
              />
              <path d="M870.06 573c-.72 1.8-4.12 2.93-7.6 2.54s-5.72-2.17-5-4 4.11-2.93 7.59-2.53 5.72 2.17 5.01 3.99zM990.67 621.84c-.71 1.8-4.11 2.93-7.59 2.54s-5.72-2.17-5-4 4.12-2.93 7.6-2.53 5.71 2.2 4.99 3.99zM508.52 539.75c-.71 1.79-4.11 2.93-7.59 2.54s-5.72-2.17-5-4 4.12-2.93 7.59-2.54 5.71 2.25 5 4zM1030.87 516.35c-.71 1.8-4.11 2.93-7.59 2.54s-5.72-2.17-5-4 4.12-2.93 7.6-2.53 5.71 2.2 4.99 3.99zM811.84 606.24c-.72 1.79-4.11 2.93-7.59 2.53s-5.72-2.17-5-4 4.11-2.93 7.59-2.54 5.71 2.21 5 4.01zM716.84 381c-.71 1.79-4.11 2.93-7.59 2.53s-5.72-2.17-5-4 4.12-2.93 7.6-2.54 5.71 2.16 4.99 4.01zM716.9 317.22c-.71 1.79-4.11 2.93-7.59 2.53s-5.72-2.17-5-4 4.12-2.93 7.6-2.54 5.71 2.21 4.99 4.01zM513.18 386.94c-.72 1.8-4.11 2.93-7.59 2.54s-5.72-2.17-5-4 4.11-2.94 7.59-2.54 5.71 2.21 5 4zM1163.08 601c-.71 1.8-4.11 2.93-7.59 2.54s-5.72-2.17-5-4 4.12-2.93 7.6-2.53 5.71 2.18 4.99 3.99zM701.28 261.5c-.71 1.79-4.11 2.93-7.59 2.53s-5.72-2.17-5-4 4.12-2.93 7.6-2.54 5.71 2.21 4.99 4.01zM576.65 384.53c-.71 1.79-4.11 2.93-7.59 2.53s-5.72-2.17-5-4 4.11-2.93 7.59-2.54 5.71 2.21 5 4.01zM603.16 484.23c-.72 1.79-4.11 2.93-7.59 2.53s-5.72-2.17-5-4 4.11-2.93 7.59-2.54 5.71 2.21 5 4.01zM568.48 575.73c-.71 1.8-4.11 2.93-7.59 2.54s-5.72-2.17-5-4 4.11-2.93 7.59-2.53 5.72 2.2 5 3.99zM828.33 464.53c-.71 1.8-4.11 2.93-7.59 2.54s-5.72-2.17-5-4 4.12-2.93 7.6-2.53 5.71 2.19 4.99 3.99zM606.72 334.86c-.71 1.8-4.11 2.93-7.59 2.54s-5.72-2.17-5-4 4.11-2.93 7.59-2.53 5.72 2.2 5 3.99zM716.52 510.55c-.72 1.8-4.12 2.93-7.6 2.54s-5.72-2.17-5-4 4.11-2.93 7.59-2.53 5.72 2.19 5.01 3.99zM456.78 277.66c-.72 1.79-4.11 2.93-7.59 2.54s-5.72-2.17-5-4 4.11-2.93 7.59-2.54 5.71 2.2 5 4zM342.06 365.45c-.71 1.79-4.11 2.93-7.59 2.53s-5.72-2.17-5-4 4.12-2.93 7.6-2.54 5.71 2.21 4.99 4.01zM473.43 140.43c-.71 1.79-4.11 2.93-7.59 2.53s-5.72-2.17-5-4 4.11-2.93 7.59-2.54 5.71 2.21 5 4.01zM407.56 158.46c-.71 1.8-4.11 2.93-7.59 2.54s-5.72-2.17-5-4 4.11-2.93 7.59-2.53 5.71 2.2 5 3.99zM824.84 665.47c-.72 1.79-4.12 2.93-7.59 2.53s-5.73-2.17-5-4 4.11-2.93 7.59-2.54 5.71 2.21 5 4.01zM928.8 605.48c-.71 1.79-4.11 2.93-7.59 2.53s-5.72-2.17-5-4 4.11-2.93 7.59-2.54 5.71 2.21 5 4.01zM70.32 285.79c-.71 1.79-4.11 2.93-7.59 2.53s-5.72-2.17-5-4 4.11-2.93 7.59-2.54 5.68 2.22 5 4.01zM1225.21 566.19c-.71 1.79-4.11 2.93-7.59 2.53s-5.72-2.17-5-4 4.12-2.93 7.6-2.54 5.71 2.21 4.99 4.01zM774.9 358c-.72 1.79-4.12 2.93-7.6 2.54s-5.72-2.17-5-4 4.11-2.93 7.59-2.54 5.72 2.23 5.01 4zM768.71 554.67c-.72 1.79-4.12 2.93-7.59 2.53s-5.73-2.17-5-4 4.11-2.93 7.59-2.54 5.71 2.21 5 4.01zM937.3 402c-.71 1.79-4.11 2.93-7.59 2.53s-5.72-2.17-5-4 4.12-2.93 7.59-2.54 5.7 2.22 5 4.01zM577.13 239.54c-.72 1.8-4.12 2.93-7.6 2.54s-5.72-2.17-5-4 4.11-2.93 7.59-2.53 5.72 2.2 5.01 3.99z" />
              <ellipse
                cx={874.1}
                cy={432.55}
                rx={3.33}
                ry={6.43}
                transform="rotate(-89.43 874.146 432.54)"
              />
              <path d="M828.52 334.78c-.71 1.8-4.11 2.93-7.59 2.54s-5.72-2.17-5-4 4.11-2.93 7.59-2.53 5.71 2.21 5 3.99zM894.41 691c-.71 1.8-4.11 2.93-7.59 2.54s-5.72-2.17-5-4 4.11-2.93 7.59-2.53 5.72 2.16 5 3.99zM775.49 489.69c-.71 1.79-4.11 2.93-7.59 2.53s-5.72-2.17-5-4 4.12-2.93 7.6-2.54 5.71 2.21 4.99 4.01z" />
              <ellipse
                cx={514.79}
                cy={484.28}
                rx={3.33}
                ry={6.43}
                transform="rotate(-89.43 514.825 484.278)"
              />
              <path d="M485.87 441c-.71 1.79-4.11 2.93-7.59 2.53s-5.72-2.16-5-4 4.11-2.93 7.59-2.54 5.72 2.22 5 4.01zM750.32 671c-.72 1.8-4.11 2.94-7.59 2.54s-5.72-2.17-5-4 4.11-2.93 7.59-2.54 5.68 2.25 5 4zM1098.36 641c-.71 1.79-4.11 2.93-7.59 2.53s-5.72-2.17-5-4 4.12-2.93 7.6-2.54 5.71 2.25 4.99 4.01zM641.11 281c-.71 1.8-4.11 2.93-7.59 2.54s-5.72-2.17-5-4 4.11-2.93 7.59-2.53 5.71 2.2 5 3.99zM945.9 665.39c-.36.91-2.06 1.48-3.81 1.28s-2.88-1.09-2.52-2 2.07-1.47 3.82-1.27 2.87 1.09 2.51 1.99zM578.19 190c-.36.9-2.07 1.47-3.82 1.27s-2.88-1.09-2.52-2 2.07-1.47 3.82-1.28 2.88 1.13 2.52 2.01zM793.07 708.36c-.36.9-2.07 1.47-3.82 1.27s-2.88-1.09-2.52-2 2.07-1.47 3.82-1.28 2.88 1.11 2.52 2.01zM288.29 295.24c-.35.91-2.06 1.48-3.81 1.28s-2.88-1.09-2.52-2 2.07-1.48 3.82-1.28 2.87 1.1 2.51 2zM125.35 320.07c-.35.91-2.06 1.48-3.81 1.28s-2.88-1.09-2.52-2 2.07-1.48 3.82-1.28 2.87 1.1 2.51 2zM418.26 96.92c-.35.9-2.06 1.47-3.81 1.28s-2.88-1.09-2.52-2 2.07-1.47 3.82-1.27 2.87 1.07 2.51 1.99zM639 383.45c-.36.9-2.07 1.47-3.82 1.27s-2.87-1.09-2.51-2 2.06-1.48 3.81-1.28 2.86 1.1 2.52 2.01zM1037.7 579.51c-.36.91-2.07 1.48-3.82 1.28s-2.87-1.09-2.51-2 2.07-1.47 3.81-1.27 2.88 1.09 2.52 1.99zM375.52 207.27c-.36.91-2.07 1.48-3.82 1.28s-2.88-1.09-2.52-2 2.07-1.48 3.82-1.28 2.88 1.1 2.52 2zM674.84 422.05c-.36.91-2.07 1.48-3.82 1.28s-2.88-1.09-2.52-2 2.07-1.48 3.82-1.28 2.88 1.1 2.52 2zM1129.46 514c-.36.9-2.07 1.47-3.82 1.27s-2.87-1.09-2.52-2 2.07-1.48 3.82-1.28 2.88 1.01 2.52 2.01zM451.72 502.9c-.36.91-2.07 1.48-3.82 1.28s-2.88-1.09-2.52-2 2.07-1.47 3.82-1.27 2.87 1.09 2.52 1.99zM1044.65 637.15c-.36.9-2.07 1.47-3.82 1.27s-2.88-1.09-2.52-2 2.07-1.48 3.82-1.28 2.87 1.1 2.52 2.01zM1079.67 537.9c-.36.91-2.07 1.48-3.82 1.28s-2.88-1.09-2.52-2 2.07-1.47 3.82-1.27 2.85 1.09 2.52 1.99zM526.15 161.24c-.36.9-2.07 1.48-3.82 1.28s-2.88-1.09-2.52-2 2.07-1.47 3.82-1.27 2.88 1.09 2.52 1.99zM621.7 610.34c-.36.9-2.07 1.48-3.82 1.28s-2.87-1.09-2.52-2 2.07-1.47 3.82-1.27 2.88 1.09 2.52 1.99zM748.18 615.2c-.36.9-2.07 1.47-3.82 1.28s-2.88-1.1-2.52-2 2.07-1.47 3.82-1.27 2.88 1.09 2.52 1.99zM561.2 520.36c-.36.9-2.07 1.47-3.82 1.27s-2.88-1.09-2.52-2 2.07-1.48 3.82-1.28 2.88 1.1 2.52 2.01zM393.87 480.08c-.35.91-2.06 1.48-3.81 1.28s-2.88-1.09-2.52-2 2.07-1.47 3.82-1.27 2.87 1.09 2.51 1.99zM921.91 539.47c-.35.9-2.06 1.48-3.81 1.28s-2.88-1.09-2.52-2 2.07-1.47 3.82-1.27 2.87 1.09 2.51 1.99zM974.09 495.89c-.36.9-2.07 1.47-3.82 1.28s-2.88-1.1-2.52-2 2.07-1.47 3.82-1.27 2.88 1.1 2.52 1.99zM274.8 236c-.36.91-2.07 1.48-3.82 1.28s-2.88-1.09-2.52-2 2.07-1.47 3.82-1.27 2.88 1.06 2.52 1.99zM1030.9 456.5c-.36.91-2.07 1.48-3.82 1.28s-2.87-1.09-2.52-2 2.07-1.47 3.82-1.27 2.88 1.09 2.52 1.99zM662.11 472.14c-.36.9-2.06 1.47-3.81 1.27s-2.88-1.09-2.52-2 2.07-1.48 3.82-1.28 2.87 1.1 2.51 2.01zM223.78 198.14c-.36.9-2.06 1.47-3.81 1.27s-2.88-1.09-2.52-2 2.07-1.48 3.82-1.28 2.87 1.1 2.51 2.01zM551.2 438.35c-.36.9-2.07 1.47-3.82 1.27s-2.88-1.09-2.52-2 2.07-1.47 3.82-1.27 2.88 1.1 2.52 2zM385.32 394c-.36.9-2.07 1.47-3.82 1.27s-2.88-1.09-2.52-2 2.07-1.48 3.82-1.28 2.88 1.13 2.52 2.01zM397.31 264.12c-.36.9-2.07 1.47-3.81 1.27s-2.88-1.09-2.52-2 2.07-1.48 3.82-1.28 2.87 1.1 2.51 2.01zM282.3 350.62c-.36.9-2.07 1.47-3.82 1.28s-2.88-1.1-2.52-2 2.07-1.47 3.82-1.27 2.87 1.09 2.52 1.99zM1171.74 541.2c-.36.9-2.07 1.48-3.82 1.28s-2.88-1.09-2.52-2 2.07-1.47 3.82-1.27 2.88 1.09 2.52 1.99zM881 369c-.36.9-2.07 1.47-3.82 1.27s-2.88-1.09-2.52-2 2.07-1.47 3.82-1.27 2.89 1.06 2.52 2zM227.9 264.25c-.36.9-2.07 1.47-3.82 1.27s-2.88-1.09-2.52-2 2.07-1.48 3.82-1.28 2.88 1.1 2.52 2.01zM573.82 290c-.36.91-2.07 1.48-3.82 1.28s-2.87-1.09-2.51-2 2.06-1.47 3.81-1.27 2.88 1.1 2.52 1.99zM952.56 721.59c-.36.9-2.07 1.47-3.82 1.27s-2.88-1.09-2.52-2 2.07-1.47 3.82-1.28 2.88 1.11 2.52 2.01zM335.79 254.9c-.36.9-2.06 1.47-3.81 1.27s-2.88-1.09-2.52-2 2.07-1.48 3.82-1.28 2.87 1.11 2.51 2.01zM472.52 332.67c-.35.91-2.06 1.48-3.81 1.28s-2.88-1.09-2.52-2 2.07-1.47 3.82-1.27 2.87 1.09 2.51 1.99zM176.9 292c-.36.9-2.07 1.47-3.82 1.27s-2.87-1.09-2.51-2 2.06-1.47 3.81-1.27 2.88 1.14 2.52 2zM610.81 546.52c-.36.9-2.07 1.48-3.82 1.28s-2.88-1.09-2.52-2 2.07-1.47 3.82-1.27 2.88 1.09 2.52 1.99zM827.52 396.05c-.36.91-2.07 1.48-3.82 1.28s-2.87-1.09-2.51-2 2.07-1.48 3.81-1.28 2.88 1.1 2.52 2zM663.54 337.1c-.36.9-2.07 1.47-3.82 1.27s-2.87-1.09-2.52-2 2.07-1.47 3.82-1.28 2.88 1.11 2.52 2.01zM1081.71 482c-.36.9-2.07 1.47-3.82 1.27s-2.87-1.09-2.51-2 2.06-1.48 3.81-1.28 2.88 1.11 2.52 2.01zM365.62 109.36c-.36.9-2.07 1.47-3.82 1.27s-2.87-1.09-2.51-2 2.06-1.48 3.81-1.28 2.9 1.1 2.52 2.01zM232.05 381c-.36.9-2.07 1.47-3.82 1.27s-2.87-1.09-2.51-2 2.06-1.48 3.81-1.28 2.88 1.11 2.52 2.01zM844.52 731.54c-.36.91-2.07 1.48-3.82 1.28s-2.88-1.09-2.52-2 2.07-1.48 3.82-1.28 2.88 1.1 2.52 2zM656.5 523.76c-.36.9-2.07 1.47-3.82 1.27s-2.87-1.09-2.51-2 2.07-1.48 3.81-1.28 2.88 1.1 2.52 2.01zM328.2 144.68c-.36.9-2.07 1.47-3.82 1.27s-2.87-1.09-2.52-2 2.07-1.48 3.82-1.28 2.88 1.1 2.52 2.01zM636.75 223.81c-.36.9-2.07 1.47-3.82 1.28s-2.87-1.1-2.51-2 2.06-1.47 3.81-1.27 2.88 1.09 2.52 1.99zM180 350.33c-.36.91-2.07 1.48-3.82 1.28s-2.87-1.09-2.51-2 2.06-1.47 3.81-1.27 2.88 1.09 2.52 1.99zM873.66 634c-.36.9-2.07 1.47-3.82 1.27s-2.88-1.09-2.52-2 2.07-1.48 3.82-1.28 2.86 1.12 2.52 2.01zM232.22 320.63c-.36.9-2.07 1.48-3.82 1.28s-2.88-1.09-2.52-2 2.07-1.47 3.82-1.27 2.88 1.09 2.52 1.99zM818.67 535.39c-.36.9-2.07 1.47-3.82 1.28s-2.88-1.09-2.52-2 2.07-1.47 3.82-1.27 2.85 1.09 2.52 1.99zM895.78 753.16c-.36.9-2.06 1.47-3.81 1.28s-2.88-1.1-2.52-2 2.07-1.47 3.82-1.27 2.87 1.09 2.51 1.99zM657.47 580.09c-.36.91-2.07 1.48-3.82 1.28s-2.87-1.09-2.51-2 2.06-1.48 3.81-1.28 2.88 1.1 2.52 2zM765.79 297.09c-.36.9-2.07 1.47-3.82 1.27s-2.88-1.09-2.52-2 2.07-1.48 3.82-1.28 2.88 1.1 2.52 2.01zM983.68 432.62c-.36.9-2.07 1.47-3.82 1.27s-2.88-1.09-2.52-2 2.07-1.48 3.82-1.28 2.84 1.1 2.52 2.01zM721.89 450.43c-.36.9-2.07 1.47-3.81 1.27s-2.88-1.09-2.52-2 2.07-1.48 3.82-1.28 2.87 1.1 2.51 2.01zM613.35 431.81c-.35.91-2.06 1.48-3.81 1.28s-2.88-1.09-2.52-2 2.07-1.47 3.82-1.27 2.87 1.09 2.51 1.99zM319.65 201.94c-.36.9-2.07 1.47-3.82 1.27s-2.87-1.09-2.51-2 2.07-1.48 3.82-1.28 2.86 1.07 2.51 2.01z" />
            </g>
            <g fill="#72746f">
              <path d="M1070.08 493.72l-526-303.92-99.87 57.67 26.4 15.35-68.6 39.61-66.62 38.46 92.87 53.62 66.62-38.46 160.27 92.53v113.05h69.46V428.7L917.7 540.03 799.8 608.1l35.95 20.9 144.5-83.42 89.83-51.86z" />
              <path d="M1161.54 632.77l-1.32.77-6.61 3.8-1.16.67-13.42 7.77-6.58 3.8-1.16.67-7.76 4.5-184.34-106.47 38.03-21.93 184.32 106.42z" />
            </g>
            <path
              d="M1152.45 638l1.16-.67-173.33-100.09-.3-.16L957.64 550l173.65 100.28 1.16-.67L960 550l20-11.54zM843.66 456.2l-.58-.33-286.4-161.32 73.92-48.07.62.36L917.4 412.19zM561.15 294.41l282.48 159.11 69.2-41.29-282.15-163z"
              fill="#f0f0f0"
            />
            <path
              d="M835.75 621.64l-25.92-15.17.86-.5 117-67.56-209.45-120.75v137.59h-56.72V444.9l-166.64-96.21-66.62 38.46-80.12-46.26 135.19-78.05-26.41-15.35 87.16-50.33.28.17 513 296.38-.86.51zm-23.62-15.16l23.63 13.82L1055 493.71 544.08 198.5l-84.85 49 26.41 15.35-.87.5-134.31 77.54 77.8 44.92 66.62-38.46.29.17 167.51 96.71v109.86h54.4V415.65l.87.5L930 538.41l-.87.5z"
              fill="#f0f0f0"
            />
            <path
              fill="#f0f0f0"
              d="M897.84 735.03L68.81 256.62l92.73-53.53L990.56 681.5l-92.72 53.53z"
            />
            <path
              fill="#72746f"
              d="M871.11 715.82L81.14 259.73l86.17-49.75 789.97 456.09-86.17 49.75z"
            />
            <g fill="#f0f0f0">
              <path d="M861.43 695.8l-4.24 2.45-41.08-23.72 4.24-2.44 41.08 23.71zM870.65 690.48l-4.24 2.45-41.08-23.72 4.24-2.45 41.08 23.72zM879.87 685.16l-4.25 2.45-41.08-23.72 4.24-2.45 41.09 23.72zM889.08 679.84l-4.24 2.45-41.08-23.72 4.24-2.45 41.08 23.72zM900.64 673.17l-4.24 2.45-41.08-23.72 4.24-2.45 41.08 23.72zM909.86 667.85l-4.24 2.45-41.09-23.72 4.25-2.45 41.08 23.72zM919.08 662.52l-4.25 2.46-41.08-23.72 4.24-2.45 41.09 23.71zM732.11 561.88l-5.8 3.34-33.06-19.08 5.8-3.35 33.06 19.09zM697.88 581.64l-5.8 3.35-33.06-19.09 5.8-3.35 33.06 19.09zM849.82 611.46l-10.11 5.84-58.94-34.03 10.11-5.84 58.94 34.03zM786.98 648.22l-10.11 5.84-58.94-34.03 10.11-5.84 58.94 34.03zM928.29 657.2l-4.24 2.45-41.08-23.72 4.24-2.44 41.08 23.71z" />
              <g>
                <path d="M826.54 648.62a11.46 11.46 0 003.47-1.15c1.43-.83 1.46-1.65.59-2.15a4.33 4.33 0 00-4.08.36l-1.12.65-2-1.14 1.07-.62c.92-.54 1.72-1.42.71-2a3 3 0 00-3 .29 4.31 4.31 0 00-1.73 1.83l-2.57-.84a6.37 6.37 0 012.75-2.62c2.5-1.44 5.23-1.48 6.85-.54 1.26.73 1.56 1.71.6 2.83a6.62 6.62 0 015.46.19c2.07 1.21 1.78 3.15-1.21 4.88a12.83 12.83 0 01-4.33 1.54zM836.6 642.82a11.81 11.81 0 003.47-1.16c1.43-.83 1.46-1.65.58-2.15a4.31 4.31 0 00-4.07.37l-1.12.65-2-1.15 1.07-.62c.92-.53 1.72-1.42.71-2a3 3 0 00-3 .29 4.35 4.35 0 00-1.74 1.83L828 638a6.39 6.39 0 012.74-2.62c2.51-1.44 5.23-1.48 6.86-.54 1.26.73 1.56 1.72.6 2.84a6.58 6.58 0 015.46.2c2.08 1.2 1.79 3.14-1.2 4.87a12.83 12.83 0 01-4.33 1.54z" />
              </g>
              <g>
                <path d="M164.25 220.98l4.24-2.45 41.08 23.72-4.24 2.45-41.08-23.72zM155.03 226.3l4.24-2.45 41.08 23.72-4.24 2.45-41.08-23.72zM145.81 231.62l4.25-2.45 41.08 23.72-4.24 2.45-41.09-23.72zM136.6 236.94l4.24-2.44 41.08 23.71-4.24 2.45-41.08-23.72zM125.04 243.62l4.24-2.45 41.08 23.72-4.24 2.45-41.08-23.72zM115.82 248.94l4.24-2.45 41.09 23.72-4.25 2.45-41.08-23.72zM106.61 254.26l4.24-2.45 41.08 23.72-4.24 2.45-41.08-23.72zM410.52 422.43l5.8-3.35 33.06 19.09-5.8 3.35-33.06-19.09zM444.75 402.67l5.8-3.35 33.06 19.08-5.8 3.35-33.06-19.08zM243.71 331.1l10.11-5.84 58.94 34.03-10.11 5.84-58.94-34.03zM282.25 308.85l10.12-5.84 58.94 34.03-10.12 5.84-58.94-34.03zM97.39 259.58l4.24-2.45 41.08 23.72-4.24 2.45-41.08-23.72z" />
              </g>
              <g>
                <path d="M183.43 278.86a11.39 11.39 0 003.46-1.16c1.44-.82 1.47-1.64.59-2.15a4.34 4.34 0 00-4.07.37l-1.12.65-2-1.15 1.06-.62c.93-.53 1.72-1.41.72-2a3 3 0 00-3 .29 4.28 4.28 0 00-1.74 1.82l-2.57-.83a6.43 6.43 0 012.75-2.62c2.5-1.45 5.23-1.48 6.86-.55 1.26.73 1.55 1.72.6 2.84a6.62 6.62 0 015.46.2c2.08 1.2 1.78 3.14-1.21 4.87a13 13 0 01-4.22 1.58zM193.48 273.05a11.29 11.29 0 003.52-1.15c1.44-.83 1.47-1.65.59-2.16a4.33 4.33 0 00-4.07.37l-1.13.65-2-1.14 1.07-.62c.93-.54 1.72-1.42.72-2a3 3 0 00-3 .29 4.29 4.29 0 00-1.74 1.83l-2.57-.84a6.43 6.43 0 012.75-2.62c2.5-1.44 5.23-1.48 6.86-.54 1.26.72 1.55 1.71.6 2.83a6.66 6.66 0 015.46.2c2.08 1.21 1.78 3.15-1.21 4.88a12.94 12.94 0 01-4.32 1.54z" />
              </g>
              <g>
                <path d="M816.51 632.87l-2.12 1.23-32.11-18.54 2.12-1.23 32.11 18.54zM769.64 605.81l-2.12 1.22-32.11-18.53 2.12-1.23 32.11 18.54zM722.77 578.75l-2.13 1.22-32.11-18.54 2.13-1.22 32.11 18.54zM675.89 551.68l-2.12 1.23-32.11-18.54 2.12-1.23 32.11 18.54zM629.02 524.62l-2.12 1.23-32.11-18.54 2.12-1.23 32.11 18.54zM582.14 497.56l-2.12 1.22-32.11-18.54 2.12-1.22 32.11 18.54zM535.27 470.5l-2.12 1.22-32.11-18.54 2.12-1.22 32.11 18.54zM488.4 443.43l-2.13 1.23-32.1-18.54 2.12-1.23 32.11 18.54zM441.52 416.37l-2.12 1.23-32.11-18.54 2.12-1.23 32.11 18.54zM394.65 389.31l-2.12 1.22-32.11-18.54 2.12-1.22 32.11 18.54zM347.77 362.24l-2.12 1.23-32.11-18.54 2.12-1.22 32.11 18.53zM300.9 335.18l-2.12 1.23-32.11-18.54 2.12-1.23 32.11 18.54zM254.03 308.12l-2.12 1.22-32.12-18.53 2.13-1.23 32.11 18.54z" />
              </g>
            </g>
            <path
              fill="#dedede"
              d="M742.53 340.86l-84.48-48.77 61.87-35.72 84.48 48.77-61.87 35.72z"
            />
            <path
              fill="#af9d83"
              d="M667.52 297.55l-4.52-2.61 4.63-2.95-.11 5.56z"
            />
            <path
              fill="#969696"
              d="M804.4 349.6l-61.87 35.72v-44.46l61.87-35.72v44.46zM791.38 297.62l-61.88 35.72v-7.9l61.88-35.72v7.9z"
            />
            <path
              fill="#7c7c7c"
              d="M658.05 336.55l84.48 48.77v-44.46l-13.03-7.52v-7.9l-61.87-35.72-.11 7.83-9.47-5.46v44.46z"
            />
            <path
              fill="#ccc"
              d="M667.63 289.72l61.87 35.72 61.88-35.72L729.5 254l-61.87 35.72z"
            />
            <path
              fill="#32342d"
              d="M730.09 344.34v33.8l-64.22-37.08v-33.77l21.43 12.36 42.79 24.69z"
            />
            <path
              fill="#272727"
              d="M687.3 319.65l-21.43 12.39v-24.75l21.43 12.36z"
            />
            <path
              fill="#32342d"
              d="M730.09 375.54v2.6l-64.22-37.08v-2.57l64.22 37.05z"
            />
            <path
              fill="#969696"
              d="M668.11 339.77l-2.23 1.29v-33.78l2.23 1.28v31.21z"
            />
            <path
              fill="#dedede"
              d="M843.64 399.34l-84.47-48.77 61.87-35.72 84.48 48.77-61.88 35.72z"
            />
            <path
              fill="#af9d83"
              d="M768.63 356.04l-4.52-2.61 4.64-2.96-.12 5.57z"
            />
            <path
              fill="#969696"
              d="M905.52 408.08l-61.88 35.72v-44.46l61.88-35.72v44.46zM892.49 356.1l-61.87 35.72v-7.9l61.87-35.72v7.9z"
            />
            <path
              fill="#7c7c7c"
              d="M759.17 395.03l84.47 48.77v-44.46l-13.02-7.52v-7.9l-61.87-35.72-.12 7.84-9.46-5.47v44.46z"
            />
            <path
              fill="#ccc"
              d="M768.75 348.2l61.87 35.72 61.87-35.72-61.87-35.72-61.87 35.72z"
            />
            <path
              fill="#c2c2bf"
              d="M831.2 402.82v33.8l-64.21-37.07v-33.78l21.43 12.36 42.78 24.69z"
            />
            <path
              fill="#46433f"
              d="M831.2 429.91v6.71l-64.21-37.07v-6.69l64.21 37.05z"
            />
            <path
              fill="#72746f"
              d="M831.2 434.03v2.59l-64.21-37.07v-2.58l64.21 37.06z"
            />
            <path
              fill="#969696"
              d="M769.23 398.26l-2.23 1.29v-33.79l2.23 1.29v31.21z"
            />
            <path
              style={{
                mixBlendMode: "multiply",
              }}
              fill="#af9d83"
              d="M543.78 276.44l-20.21-67.48-34.88-1.03-20.37 12.05-115.47-.65-23.91-3.87-45.53 26.92 45.26 26.54 23.95-3.88H468.9l19.45 11.4h55.43z"
            />
            <path
              fill="#ab9f8f"
              d="M543.78 202.49v73.95l-50.72-29.4v-73.95l50.72 29.4z"
            />
            <path
              fill="#eaeaea"
              d="M594.72 173.09l-50.94 29.4-50.72-29.4 50.93-29.41 50.73 29.41z"
            />
            <path
              style={{
                mixBlendMode: "multiply",
              }}
              fill="#af9d83"
              d="M543.93 195.04h-13l-37.87-21.95 19.56-11.3 31.31 33.25z"
            />
            <path
              fill="#e3dad1"
              d="M543.78 202.49v73.95l50.94-29.4v-73.95l-50.94 29.4zM543.92 195.04l37.18-21.47V75.05l-37.18 21.47v98.52z"
            />
            <path
              fill="#ab9f8f"
              d="M543.93 96.52v98.52l-37.2-21.46V75.06l37.2 21.46z"
            />
            <path
              fill="#dbd1c7"
              d="M544.05 85.8l.09 11.22 37.34-21.56 3.24-13.14-40.67 23.48z"
            />
            <path
              fill="#736653"
              d="M584.02 63.14l-.67 1.79-2.18 10.29-36.33 20.97-.49-10.15h.02l28.28-16.34 9.85-5.68 1.52-.88z"
            />
            <path
              fill="#b3aca1"
              d="M582.5 64.02l-1.84 10.32-8.01-4.64 9.85-5.68z"
            />
            <g fill="#8f775d">
              <path d="M553.09 81l-.67.38-2.59 11.42.42.27L553.09 81zM559.57 77.25l-.66.39-2.59 11.4.42.28 2.83-12.07zM566.06 73.51l-.66.38-2.59 11.39.42.3 2.83-12.07zM572.55 69.76l-.66.39-2.58 11.38.41.3 2.83-12.07zM579.04 66.02l-.66.38-2.58 11.37.41.31 2.83-12.06z" />
            </g>
            <g fill="#dbd1c7">
              <path d="M553.93 80.14l-.67.39-3.19 13.01.64-.32 3.22-13.08zM560.42 76.39l-.66.38-3.21 13.04.65-.33 3.22-13.09zM566.91 72.63l-.66.38-3.22 13.08.65-.35 3.23-13.11zM573.41 68.87l-.67.39-3.23 13.1.66-.37 3.24-13.12zM579.9 65.12l-.66.38L576 78.64l.66-.39 3.24-13.13z" />
            </g>
            <path
              fill="#dbd1c7"
              d="M544.18 85.78l-.04 11.24-37.34-21.56-3.24-13.14 40.62 23.46z"
            />
            <path
              fill="#736653"
              d="M543.88 86.02l-.44 10.17-36.36-20.97-2.15-10.29-.68-1.79 1.86 1.07 9.29 5.37 28.46 16.41.02.03z"
            />
            <path
              fill="#fff"
              d="M515.4 69.58l-7.46 4.31-1.83-9.68 9.29 5.37z"
            />
            <g fill="#8f775d">
              <path d="M535.19 81l.66.38 2.6 11.42-.42.27L535.19 81zM528.7 77.25l.66.39 2.6 11.4-.42.28-2.84-12.07zM522.21 73.51l.67.38 2.58 11.39-.41.3-2.84-12.07zM515.72 69.76l.67.39 2.58 11.38-.41.3-2.84-12.07zM509.23 66.02l.67.38 2.58 11.37-.41.31-2.84-12.06z" />
            </g>
            <g fill="#dbd1c7">
              <path d="M534.35 80.14l.66.39 3.2 13.01-.64-.32-3.22-13.08zM527.86 76.39l.66.38 3.2 13.04-.64-.33-3.22-13.09zM521.36 72.63l.67.38 3.21 13.08-.65-.35-3.23-13.11zM514.87 68.87l.66.39 3.23 13.1-.66-.37-3.23-13.12zM508.38 65.12l.66.38 3.24 13.14-.67-.39-3.23-13.13z" />
            </g>
            <path
              fill="#ab9f8f"
              d="M584.72 62.32L544.05 85.8l-40.49-23.48v-4.23l81.16 4.23z"
            />
            <path
              fill="#eaeaea"
              d="M584.72 58.09l-40.67 23.48-40.49-23.48 40.65-23.48 40.51 23.48z"
            />
            <path
              fill="#ab9f8f"
              d="M534.13 65.45v1.9l-8.54-5.06v-1.9l8.54 5.06z"
            />
            <path
              fill="#e3dad1"
              d="M534.13 65.45l6.36-3.66v1.9l-6.36 3.66v-1.9z"
            />
            <path
              fill="#eaeaea"
              d="M540.49 61.79l-8.55-5.06-6.35 3.66 8.54 5.06 6.36-3.66z"
            />
            <path
              fill="#ab9f8f"
              d="M533.26 62.13v1.32l-4.89-2.94v-1.33l4.89 2.95z"
            />
            <path
              fill="#e3dad1"
              d="M533.26 62.13l4.44-2.57v1.33l-4.44 2.56v-1.32z"
            />
            <path
              fill="#eaeaea"
              d="M537.7 59.56l-4.88-2.94-4.45 2.56 4.89 2.95 4.44-2.57z"
            />
            <g>
              <path
                fill="#a8a8a8"
                d="M533.04 21.16v39l1.13-.65v-39l-1.13.65z"
              />
              <path
                fill="#7a7a7a"
                d="M533.04 21.16l-1.13-.66v39l1.13.66v-39z"
              />
              <path
                fill="#8d8b8e"
                d="M531.51 19.73l1.12-.65 1.14.65-1.12.65-1.14-.65z"
              />
            </g>
            <g>
              <path
                fill="#cc4935"
                d="M533.05 14.69v7.25l1.6-.93v-7.24l-1.6.92z"
              />
              <path
                fill="#8a2212"
                d="M533.05 14.69l-1.62-.93V21l1.62.94v-7.25z"
              />
              <path
                fill="#ffa1a1"
                d="M531.43 13.76l1.6-.93 1.62.94-1.6.92-1.62-.93z"
              />
            </g>
            <g>
              <path
                fill="#ab9f8f"
                d="M556.74 52.62v1.9l-8.55-5.06v-1.9l8.55 5.06z"
              />
              <path
                fill="#e3dad1"
                d="M556.74 52.62l6.36-3.66v1.9l-6.36 3.66v-1.9z"
              />
              <path
                fill="#eaeaea"
                d="M563.1 48.96l-8.55-5.06-6.36 3.66 8.55 5.06 6.36-3.66z"
              />
              <path
                fill="#ab9f8f"
                d="M555.87 49.3v1.33l-4.89-2.96v-1.32l4.89 2.95z"
              />
              <path
                fill="#e3dad1"
                d="M555.87 49.3l4.44-2.57v1.33l-4.44 2.57V49.3z"
              />
              <path
                fill="#eaeaea"
                d="M560.31 46.73l-4.89-2.95-4.44 2.57 4.89 2.95 4.44-2.57z"
              />
              <g>
                <path
                  fill="#a8a8a8"
                  d="M555.65 8.33v39l1.12-.65v-39l-1.12.65z"
                />
                <path
                  fill="#7a7a7a"
                  d="M555.65 8.33l-1.13-.66v39l1.13.66v-39z"
                />
                <path
                  fill="#8d8b8e"
                  d="M554.12 6.9l1.12-.65 1.13.65-1.12.65-1.13-.65z"
                />
              </g>
              <g>
                <path
                  fill="#cc4935"
                  d="M555.65 1.86v7.25l1.61-.93V.94l-1.61.92z"
                />
                <path
                  fill="#8a2212"
                  d="M555.65 1.86l-1.62-.93v7.24l1.62.94V1.86z"
                />
                <path
                  fill="#ffa1a1"
                  d="M554.03.93l1.6-.93 1.63.94-1.61.92-1.62-.93z"
                />
              </g>
            </g>
            <path
              fill="#e3dad1"
              d="M544.05 81.57v4.23l40.67-23.48v-4.23l-40.67 23.48z"
            />
            <g>
              <path
                fill="#ab9f8f"
                d="M986.93 711.71v1.9l-8.55-5.06v-1.9l8.55 5.06z"
              />
              <path
                fill="#e3dad1"
                d="M986.93 711.71l6.36-3.67v1.9l-6.36 3.67v-1.9z"
              />
              <path
                fill="#eaeaea"
                d="M993.29 708.04l-8.55-5.06-6.36 3.67 8.55 5.06 6.36-3.67z"
              />
              <path
                fill="#ab9f8f"
                d="M986.06 708.38v1.33l-4.89-2.95v-1.33l4.89 2.95z"
              />
              <path
                fill="#e3dad1"
                d="M986.06 708.38l4.44-2.56v1.33l-4.44 2.56v-1.33z"
              />
              <path
                fill="#eaeaea"
                d="M990.5 705.82l-4.88-2.95-4.45 2.56 4.89 2.95 4.44-2.56z"
              />
              <g>
                <path
                  fill="#a8a8a8"
                  d="M985.84 674.97v31.44l1.12-.65v-31.44l-1.12.65z"
                />
                <path
                  fill="#7a7a7a"
                  d="M985.84 674.97l-1.13-.66v31.45l1.13.65v-31.44z"
                />
                <path
                  fill="#8d8b8e"
                  d="M984.31 673.54l1.12-.65 1.14.65-1.13.65-1.13-.65z"
                />
              </g>
              <g>
                <path
                  fill="#cc4935"
                  d="M985.85 668.5v7.25l1.6-.93v-7.25l-1.6.93z"
                />
                <path
                  fill="#8a2212"
                  d="M985.85 668.5l-1.63-.93v7.24l1.63.94v-7.25z"
                />
                <path
                  fill="#ffa1a1"
                  d="M984.22 667.57l1.61-.93 1.62.93-1.6.93-1.63-.93z"
                />
              </g>
            </g>
            <g>
              <path
                fill="#ab9f8f"
                d="M936.06 741.05v1.9l-8.55-5.06v-1.9l8.55 5.06z"
              />
              <path
                fill="#e3dad1"
                d="M936.06 741.05l6.36-3.67v1.9l-6.36 3.67v-1.9z"
              />
              <path
                fill="#eaeaea"
                d="M942.42 737.38l-8.55-5.06-6.36 3.67 8.55 5.06 6.36-3.67z"
              />
              <path
                fill="#ab9f8f"
                d="M935.19 737.72v1.33l-4.89-2.95v-1.33l4.89 2.95z"
              />
              <path
                fill="#e3dad1"
                d="M935.19 737.72l4.44-2.56v1.33l-4.44 2.56v-1.33z"
              />
              <path
                fill="#eaeaea"
                d="M939.63 735.16l-4.88-2.95-4.45 2.56 4.89 2.95 4.44-2.56z"
              />
              <g>
                <path
                  fill="#a8a8a8"
                  d="M934.97 704.3v31.45l1.12-.65v-31.44l-1.12.64z"
                />
                <path
                  fill="#7a7a7a"
                  d="M934.97 704.3l-1.13-.65v31.45l1.13.65V704.3z"
                />
                <path
                  fill="#8d8b8e"
                  d="M933.44 702.88l1.12-.65 1.14.65-1.12.65-1.14-.65z"
                />
              </g>
              <g>
                <path
                  fill="#cc4935"
                  d="M934.98 697.84v7.25l1.6-.93v-7.25l-1.6.93z"
                />
                <path
                  fill="#8a2212"
                  d="M934.98 697.84l-1.62-.94v7.25l1.62.94v-7.25z"
                />
                <path
                  fill="#ffa1a1"
                  d="M933.36 696.9l1.6-.92 1.62.93-1.6.93-1.62-.94z"
                />
              </g>
            </g>
            <g>
              <path
                fill="#465658"
                d="M771.49 373l10.39 6v-3.56l-10.39-6V373z"
              />
              <path
                fill="#c4b59d"
                d="M772.16 369.83v2.8l9.72 5.61v.76l-10.39-6v-3.56l.67.39z"
              />
            </g>
            <g>
              <path
                fill="#465658"
                d="M783.69 380.04l10.39 6v-3.56l-10.39-5.99v3.55z"
              />
              <path
                fill="#c4b59d"
                d="M784.36 376.87v2.8l9.72 5.61v.76l-10.39-6v-3.55l.67.38z"
              />
            </g>
            <g>
              <path
                fill="#465658"
                d="M806.48 393.16l10.38 5.99v-3.55l-10.38-6v3.56z"
              />
              <path
                fill="#c4b59d"
                d="M807.15 389.99v2.8l9.71 5.61v.75l-10.38-5.99v-3.56l.67.39z"
              />
            </g>
            <g>
              <path
                fill="#465658"
                d="M818.68 400.2l10.38 6v-3.56l-10.38-6v3.56z"
              />
              <path
                fill="#c4b59d"
                d="M819.35 397.03v2.8l9.71 5.61v.76l-10.38-6v-3.56l.67.39z"
              />
            </g>
            <path
              d="M558.71 36.45a.23.23 0 000-.44.87.87 0 00-.77 0c-.2.13-.2.33 0 .44a.84.84 0 00.77 0z"
              fill="#3a3128"
            />
            <g>
              <path
                d="M1071.87 513.72a.22.22 0 01-.13.18.65.65 0 01-.34.07h-.16l-.14-.06a.22.22 0 01-.13-.19v-24.95h.91v24.94z"
                fill="#8c7779"
              />
              <path
                d="M1071.1 489a.2.2 0 010-.37.75.75 0 01.64 0c.17.11.17.28 0 .37a.69.69 0 01-.64 0z"
                fill="#e6d9d1"
              />
              <g>
                <path
                  d="M1071.73 488.7c0 .05 0 .09-.1.13a.4.4 0 01-.22 0H1071.2a.17.17 0 01-.08-.13V464h.61v24.67z"
                  fill="#8c7779"
                />
                <path
                  d="M1071.21 464.15a.13.13 0 010-.25.47.47 0 01.43 0 .13.13 0 010 .25.5.5 0 01-.43 0z"
                  fill="#e6d9d1"
                />
              </g>
            </g>
            <g>
              <path
                fill="#736653"
                d="M522.26 98.85v7.07l1.35-.78 1.87 1.09v-5.5l-3.22-1.88z"
              />
              <path
                fill="#c7c7c7"
                d="M523.61 99.63v5.51l-1.35.78v-7.07l1.35.78z"
              />
              <path
                fill="#848686"
                d="M525.48 106.23v1.55l-3.22-1.86 1.35-.78 1.87 1.09z"
              />
            </g>
            <g>
              <path
                fill="#736653"
                d="M522.26 120.29v7.07l1.35-.79 1.87 1.1v-5.51l-3.22-1.87z"
              />
              <path
                fill="#c7c7c7"
                d="M523.61 121.07v5.51l-1.35.78v-7.07l1.35.78z"
              />
              <path
                fill="#848686"
                d="M525.48 127.67v1.54l-3.22-1.85 1.35-.78 1.87 1.09z"
              />
            </g>
            <g>
              <path
                fill="#736653"
                d="M522.26 141.73v7.06l1.35-.78 1.87 1.1v-5.51l-3.22-1.87z"
              />
              <path
                fill="#c7c7c7"
                d="M523.61 142.51v5.5l-1.35.78v-7.06l1.35.78z"
              />
              <path
                fill="#848686"
                d="M525.48 149.11v1.54l-3.22-1.86 1.35-.78 1.87 1.1z"
              />
            </g>
            <g>
              <path
                fill="#736653"
                d="M522.26 163.17v7.06l1.35-.78 1.87 1.09v-5.5l-3.22-1.87z"
              />
              <path
                fill="#c7c7c7"
                d="M523.61 163.95v5.5l-1.35.78v-7.06l1.35.78z"
              />
              <path
                fill="#848686"
                d="M525.48 170.54v1.55l-3.22-1.86 1.35-.78 1.87 1.09z"
              />
            </g>
            <g>
              <path
                fill="#736653"
                d="M565.8 98.43l-.01 7.07-1.35-.78-1.86 1.09v-5.51l3.22-1.87z"
              />
              <path
                fill="#c7c7c7"
                d="M564.44 99.21v5.51l1.35.78v-7.07l-1.35.78z"
              />
              <path
                fill="#848686"
                d="M562.58 105.81v1.55l3.21-1.86-1.35-.78-1.86 1.09z"
              />
            </g>
            <g>
              <path
                fill="#736653"
                d="M565.8 119.87l-.01 7.06-1.35-.78-1.86 1.1v-5.51l3.22-1.87z"
              />
              <path
                fill="#c7c7c7"
                d="M564.44 120.65v5.5l1.35.78v-7.06l-1.35.78z"
              />
              <path
                fill="#848686"
                d="M562.58 127.25v1.54l3.21-1.86-1.35-.78-1.86 1.1z"
              />
            </g>
            <g>
              <path
                fill="#736653"
                d="M565.8 141.31l-.01 7.06-1.35-.78-1.86 1.09v-5.5l3.22-1.87z"
              />
              <path
                fill="#c7c7c7"
                d="M564.44 142.09v5.5l1.35.78v-7.06l-1.35.78z"
              />
              <path
                fill="#848686"
                d="M562.58 148.68v1.55l3.21-1.86-1.35-.78-1.86 1.09z"
              />
            </g>
            <g>
              <path
                fill="#736653"
                d="M565.8 162.75l-.01 7.06-1.35-.78-1.86 1.09v-5.5l3.22-1.87z"
              />
              <path
                fill="#c7c7c7"
                d="M564.44 163.52v5.51l1.35.78v-7.06l-1.35.77z"
              />
              <path
                fill="#848686"
                d="M562.58 170.12v1.55l3.21-1.86-1.35-.78-1.86 1.09z"
              />
            </g>
            <g>
              <path
                fill="#736653"
                d="M518.77 226.66v10.49l2.01-1.16 2.77 1.63v-8.18l-4.78-2.78z"
              />
              <path
                fill="#c7c7c7"
                d="M520.78 227.82V236l-2.01 1.15v-10.49l2.01 1.16z"
              />
              <path
                fill="#848686"
                d="M523.55 237.62v2.3l-4.78-2.77 2.01-1.15 2.77 1.62z"
              />
            </g>
            <g>
              <path
                fill="#736653"
                d="M505.74 200.34l.01 10.5 2-1.16 2.77 1.62v-8.18l-4.78-2.78z"
              />
              <path
                fill="#c7c7c7"
                d="M507.75 201.5v8.18l-2 1.16v-10.5l2 1.16z"
              />
              <path
                fill="#848686"
                d="M510.52 211.3v2.3l-4.77-2.76 2-1.16 2.77 1.62z"
              />
            </g>
            <g>
              <path
                fill="#736653"
                d="M745.57 319.24l-.01 2.8-1.35-.79-7.45 4.33v-1.24l8.81-5.1z"
              />
              <path
                fill="#575757"
                d="M744.21 320.02v1.24l1.35.78v-2.8l-1.35.78z"
              />
              <path
                fill="#848686"
                d="M736.76 325.58v1.55l8.8-5.09-1.35-.78-7.45 4.32z"
              />
              <path
                fill="#736653"
                d="M758.94 311.57v2.8l-1.35-.78-7.46 4.33v-1.24l8.81-5.11z"
              />
              <path
                fill="#575757"
                d="M757.59 312.35v1.24l1.35.78v-2.8l-1.35.78z"
              />
              <path
                fill="#848686"
                d="M750.13 317.92v1.54l8.81-5.09-1.35-.78-7.46 4.33z"
              />
              <g>
                <path
                  fill="#736653"
                  d="M772.32 303.91l-.01 2.8-1.35-.78-7.45 4.32v-1.24l8.81-5.1z"
                />
                <path
                  fill="#575757"
                  d="M770.96 304.69v1.24l1.35.78v-2.8l-1.35.78z"
                />
                <path
                  fill="#848686"
                  d="M763.51 310.25v1.55l8.8-5.09-1.35-.78-7.45 4.32z"
                />
              </g>
              <g>
                <path
                  fill="#736653"
                  d="M785.69 296.25l-.01 2.79-1.34-.78-7.46 4.33v-1.24l8.81-5.1z"
                />
                <path
                  fill="#575757"
                  d="M784.34 297.02v1.24l1.35.78v-2.79l-1.35.77z"
                />
                <path
                  fill="#848686"
                  d="M776.88 302.59v1.55l8.81-5.1-1.35-.78-7.46 4.33z"
                />
              </g>
            </g>
            <g>
              <path
                fill="#736653"
                d="M757.1 337.36l-.01 2.8-1.35-.78-7.45 4.33v-1.24l8.81-5.11z"
              />
              <path
                fill="#575757"
                d="M755.74 338.14v1.24l1.35.78v-2.8l-1.35.78z"
              />
              <path
                fill="#848686"
                d="M748.29 343.71v1.54l8.8-5.09-1.35-.78-7.45 4.33z"
              />
              <path
                fill="#736653"
                d="M770.47 329.7v2.8l-1.35-.78-7.46 4.32v-1.24l8.81-5.1z"
              />
              <path
                fill="#575757"
                d="M769.12 330.48v1.24l1.35.78v-2.8l-1.35.78z"
              />
              <path
                fill="#848686"
                d="M761.66 336.04v1.55l8.81-5.09-1.35-.78-7.46 4.32z"
              />
              <g>
                <path
                  fill="#736653"
                  d="M783.84 322.04v2.79l-1.35-.78-7.45 4.33v-1.24l8.8-5.1z"
                />
                <path
                  fill="#575757"
                  d="M782.49 322.81v1.25l1.35.77v-2.79l-1.35.77z"
                />
                <path
                  fill="#848686"
                  d="M775.04 328.38v1.55l8.8-5.1-1.35-.77-7.45 4.32z"
                />
              </g>
              <g>
                <path
                  fill="#736653"
                  d="M797.22 314.37l-.01 2.8-1.34-.78-7.46 4.33v-1.24l8.81-5.11z"
                />
                <path
                  fill="#575757"
                  d="M795.87 315.15v1.24l1.35.78v-2.8l-1.35.78z"
                />
                <path
                  fill="#848686"
                  d="M788.41 320.72v1.54l8.81-5.09-1.35-.78-7.46 4.33z"
                />
              </g>
            </g>
            <g>
              <path
                fill="#736653"
                d="M846.59 377.48l-.01 2.8-1.34-.78-7.46 4.33v-1.24l8.81-5.11z"
              />
              <path
                fill="#575757"
                d="M845.23 378.26v1.24l1.36.78v-2.8l-1.36.78z"
              />
              <path
                fill="#848686"
                d="M837.78 383.83v1.54l8.81-5.09-1.36-.78-7.45 4.33z"
              />
              <path
                fill="#736653"
                d="M859.96 369.82v2.8l-1.35-.78-7.46 4.33v-1.25l8.81-5.1z"
              />
              <path
                fill="#575757"
                d="M858.61 370.6v1.24l1.35.78v-2.8l-1.35.78z"
              />
              <path
                fill="#848686"
                d="M851.15 376.17v1.54l8.81-5.09-1.35-.78-7.46 4.33z"
              />
              <g>
                <path
                  fill="#736653"
                  d="M873.34 362.16l-.01 2.79-1.35-.78-7.45 4.33v-1.24l8.81-5.1z"
                />
                <path
                  fill="#575757"
                  d="M871.98 362.94v1.24l1.35.77v-2.79l-1.35.78z"
                />
                <path
                  fill="#848686"
                  d="M864.53 368.5v1.55l8.8-5.1-1.35-.77-7.45 4.32z"
                />
              </g>
              <g>
                <path
                  fill="#736653"
                  d="M886.71 354.49v2.8l-1.35-.78-7.46 4.33v-1.24l8.81-5.11z"
                />
                <path
                  fill="#575757"
                  d="M885.36 355.27v1.24l1.35.78v-2.8l-1.35.78z"
                />
                <path
                  fill="#848686"
                  d="M877.9 360.84v1.54l8.81-5.09-1.35-.78-7.46 4.33z"
                />
              </g>
            </g>
            <g>
              <path
                fill="#736653"
                d="M858.12 395.61l-.01 2.8-1.35-.78-7.45 4.33v-1.25l8.81-5.1z"
              />
              <path
                fill="#575757"
                d="M856.76 396.39v1.24l1.35.78v-2.8l-1.35.78z"
              />
              <path
                fill="#848686"
                d="M849.31 401.96v1.54l8.8-5.09-1.35-.78-7.45 4.33z"
              />
              <path
                fill="#736653"
                d="M871.49 387.95v2.8l-1.35-.79-7.46 4.33v-1.24l8.81-5.1z"
              />
              <path
                fill="#575757"
                d="M870.14 388.73v1.24l1.35.78v-2.8l-1.35.78z"
              />
              <path
                fill="#848686"
                d="M862.68 394.29v1.55l8.81-5.09-1.35-.78-7.46 4.32z"
              />
              <g>
                <path
                  fill="#736653"
                  d="M884.87 380.28l-.01 2.8-1.35-.78-7.45 4.33v-1.24l8.81-5.11z"
                />
                <path
                  fill="#575757"
                  d="M883.51 381.06v1.24l1.35.78v-2.8l-1.35.78z"
                />
                <path
                  fill="#848686"
                  d="M876.06 386.63v1.54l8.8-5.09-1.35-.78-7.45 4.33z"
                />
              </g>
              <g>
                <path
                  fill="#736653"
                  d="M898.24 372.62v2.8l-1.35-.78-7.46 4.32v-1.24l8.81-5.1z"
                />
                <path
                  fill="#575757"
                  d="M896.89 373.4v1.24l1.35.78v-2.8l-1.35.78z"
                />
                <path
                  fill="#848686"
                  d="M889.43 378.96v1.55l8.81-5.09-1.35-.78-7.46 4.32z"
                />
              </g>
            </g>
            <g clipPath="url(#expeditedbackground__clip-path)">
              <path
                d="M672.23 356.94l1.79-.55 9.92.13a42.68 42.68 0 016.11-5c1.29-.84 3.85-2.41 6.84-4.21l-6.89-4.88-16.7-5 3.82-1.16 31.43 4.16 1.13-.64a75 75 0 0116.09-6.79c3-.71 7.36-2.31 6.5.83 0 0-.86 1.45-2.35 3.45-.22.3-2.12 2.19-2.47 2.51-2.71 2.44-7.1 3.2-10.37 4.93l7.56 20.72-2.34 1.44L711 355.4l-6.33-4.24q-5 2.5-10.09 5l-4.17 2 .93 8-1.11.68-3.48-3.51-2.94-2-1.46.71c-.89.43-1.68.89-2.67.51l-.48-.19a.75.75 0 01-.31-.18.83.83 0 01.08-.94 12.58 12.58 0 011.5-1.12l-3.78-1.86z"
                fill="#949692"
              />
              <path
                d="M711.83 352.05l.24-3.81 2-1.27a1.17 1.17 0 011.14.12 3.36 3.36 0 011.54 2.72c0 .48-.89 1.28-1.55 1.64l.08-.09h-.05z"
                fill="#696969"
              />
              <path
                d="M711 349.46h.05c.37-.2.4-.3.78-.17s1.5.55 2.06.71a4.57 4.57 0 002.78-.16c.52-.74-1.73-2.85-1.73-2.85l.28.13a3.23 3.23 0 011.14 1.23 3.09 3.09 0 01.4 1.49c0 .19-.48.65-1.09 1.05l-2.28.83c-.13 0-1.4.36-1.55.28s.14.13 0 0l-1.2-1.8a3 3 0 01.36-.74z"
                fill="#696969"
              />
              <path
                d="M711 349.46l1-1.22a.94.94 0 011 .07c.88.51 2.59 1.41 2.59 2.41 0 .76-.91.6-2 1.08l-1.81.25z"
                fill="#696969"
              />
              <path
                d="M710.53 350.57a1.73 1.73 0 00.79 1.39c.45.26.83.05.84-.46a1.69 1.69 0 00-.78-1.39.52.52 0 00-.85.46z"
                fill="#a5a5a5"
              />
              <path
                d="M710.56 350.59a1.65 1.65 0 00.76 1.33c.43.25.8.06.81-.43a1.62 1.62 0 00-.76-1.34.49.49 0 00-.81.44z"
                fill="#a1a1a1"
              />
              <path
                d="M710.84 350.76a1.06 1.06 0 00.49.86c.28.16.51 0 .52-.28a1 1 0 00-.49-.86c-.27-.16-.51-.04-.52.28z"
                fill="#a9a6a6"
              />
              <path
                d="M710.88 350.78a1 1 0 00.45.8c.26.15.48 0 .49-.26a1 1 0 00-.46-.8c-.26-.15-.47-.04-.48.26z"
                fill="#0a0404"
              />
              <path
                d="M711.37 350.52a1 1 0 01.45.8.36.36 0 010 .11l-.35.2-.12-.05a1 1 0 01-.45-.79z"
                fill="#181717"
              />
              <path
                d="M711.62 350.76a.94.94 0 01.18.41l-.59.33a1.23 1.23 0 01-.26-.37z"
                fill="#5b5858"
              />
              <path
                d="M711.06 350.83a.76.76 0 00.36.63c.2.12.38 0 .38-.21a.82.82 0 00-.37-.66c-.21-.12-.37 0-.37.24z"
                fill="#0a0404"
              />
              <g fillRule="evenodd">
                <path
                  d="M716 354.76c0 .38.14.57.52.35s.78-.61.78-1-.25-.66-.62-.44a1.39 1.39 0 00-.68 1.09z"
                  fill="#010007"
                />
                <path
                  fill="#010007"
                  d="M717.54 353.95l-.45-.27.05.3.4-.03zM716.52 355.44l-.43-.26.37-.34.04.42.02.18z"
                />
                <path
                  d="M716.36 355.1c0 .37.31.5.68.29a1.42 1.42 0 00.69-1.08c0-.37-.31-.5-.69-.29a1.44 1.44 0 00-.68 1.08z"
                  fill="#0d0d0d"
                />
                <path
                  d="M716.43 355.06c0 .34.27.45.61.26a1.29 1.29 0 00.62-1c0-.34-.28-.46-.62-.26a1.26 1.26 0 00-.61 1z"
                  fill="#1b1b1f"
                />
                <path
                  d="M716.59 355c0 .25.2.34.45.2a1 1 0 00.46-.72c0-.25-.21-.33-.46-.19a.92.92 0 00-.45.71z"
                  fill="#101010"
                />
                <path
                  d="M716.63 354.91c0 .22.17.3.4.17a.81.81 0 00.39-.63c0-.22-.17-.29-.39-.17a.81.81 0 00-.4.63z"
                  fill="#787878"
                />
                <path
                  d="M716.68 354.88c0 .19.16.25.35.15a.73.73 0 00.34-.54c0-.19-.15-.25-.33-.15a.75.75 0 00-.34.48s-.02.04-.02.06z"
                  fill="#252625"
                />
                <path
                  d="M716.69 354.82c0 .07.12.09.22 0a.52.52 0 00.24-.38c0-.09 0-.13-.11-.13a.75.75 0 00-.35.51z"
                  fill="#787878"
                />
              </g>
              <path
                fill="#696969"
                d="M718.07 353.99l-.4-.6-.06.06.4.61.06-.07z"
              />
              <path
                fill="#777"
                d="M717.04 353.03l.63.36-.06.06-.62-.36.05-.06z"
              />
              <path
                fill="#909090"
                d="M717.39 353.69l.62.37-.4-.61-.62-.36.4.6z"
              />
              <path
                d="M717.36 350.05v4.59c0 .06-.08.1-.18.1s-.19-.05-.19-.1v-4.59z"
                fill="url(#expeditedbackground__\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_9)"
              />
              <g fillRule="evenodd">
                <path
                  d="M716.81 355.28c0 .37.14.57.52.35s.78-.61.78-1-.25-.65-.62-.44a1.41 1.41 0 00-.68 1.09z"
                  fill="#010007"
                />
                <path
                  fill="#010007"
                  d="M718.4 354.47l-.46-.27.05.29.41-.02zM717.37 355.95l-.43-.26.37-.33.04.42.02.17z"
                />
                <path
                  d="M717.21 355.61c0 .38.31.51.68.29a1.42 1.42 0 00.69-1.07c0-.38-.31-.51-.69-.29a1.42 1.42 0 00-.68 1.07z"
                  fill="#0d0d0d"
                />
                <path
                  d="M717.28 355.57c0 .34.28.46.61.26a1.27 1.27 0 00.62-1c0-.33-.28-.45-.62-.26a1.3 1.3 0 00-.61 1z"
                  fill="#1b1b1f"
                />
                <path
                  d="M717.44 355.48c0 .25.21.34.45.19a.93.93 0 00.46-.71c0-.25-.21-.34-.46-.19a1 1 0 00-.45.71z"
                  fill="#101010"
                />
                <path
                  d="M717.48 355.43c0 .22.18.3.4.17a.84.84 0 00.4-.63c0-.22-.18-.3-.4-.17a.84.84 0 00-.4.63z"
                  fill="#787878"
                />
                <path
                  d="M717.53 355.4c0 .18.16.25.35.14a.73.73 0 00.34-.54c0-.18-.15-.25-.33-.15a.73.73 0 00-.34.47s-.02.06-.02.08z"
                  fill="#252625"
                />
                <path
                  d="M717.54 355.33c0 .08.12.09.22 0a.48.48 0 00.24-.33c0-.09 0-.14-.11-.14a.73.73 0 00-.35.47z"
                  fill="#787878"
                />
              </g>
              <path
                fill="#696969"
                d="M716.37 354.96l.84-1.26h-.06l-.85 1.26h.07z"
              />
              <path
                fill="#777"
                d="M716.59 353.33l.62.37h-.06l-.62-.36.06-.01z"
              />
              <path
                fill="#909090"
                d="M715.68 354.6l.62.36.85-1.26-.63-.37-.84 1.27z"
              />
              <path
                d="M718.12 357.81l.24-3.81 2-1.28a1.21 1.21 0 011.13.12 3.36 3.36 0 011.54 2.73c0 .47-.88 1.27-1.54 1.63l.07-.09z"
                fill="#696969"
              />
              <path
                d="M717.32 355.22h.06c.36-.2.39-.31.78-.18s1.5.55 2.05.71a4.56 4.56 0 002.78-.16c.53-.74-1.73-2.85-1.73-2.85l.28.13a3.19 3.19 0 011.14 1.24 3 3 0 01.4 1.49c0 .18-.48.64-1.09 1l-2.27.83c-.14 0-1.4.37-1.55.28s.14.13 0 0l-1.2-1.81a3.12 3.12 0 01.35-.68z"
                fill="#696969"
              />
              <path
                d="M717.32 355.22l1-1.23a.92.92 0 011 .06c.88.51 2.59 1.41 2.59 2.41 0 .77-.91.6-2 1.08l-1.82.26z"
                fill="#696969"
              />
              <path
                d="M716.82 356.32a1.73 1.73 0 00.79 1.39c.45.26.83.06.85-.45a1.74 1.74 0 00-.79-1.4c-.45-.25-.83-.05-.85.46z"
                fill="#a5a5a5"
              />
              <path
                d="M716.86 356.34a1.64 1.64 0 00.75 1.34c.44.24.8.05.81-.44a1.64 1.64 0 00-.75-1.34c-.44-.25-.8-.05-.81.44z"
                fill="#a1a1a1"
              />
              <path
                d="M717.14 356.51a1 1 0 00.48.86c.28.16.51 0 .52-.28a1.05 1.05 0 00-.48-.86c-.28-.16-.51-.03-.52.28z"
                fill="#a9a6a6"
              />
              <path
                d="M717.17 356.53a1 1 0 00.45.8c.26.15.48 0 .49-.26a1 1 0 00-.45-.8c-.26-.15-.48-.03-.49.26z"
                fill="#0a0404"
              />
              <path
                d="M717.66 356.27a1 1 0 01.45.8.5.5 0 010 .12l-.35.19a.31.31 0 01-.12-.05 1 1 0 01-.45-.78z"
                fill="#181717"
              />
              <path
                d="M717.92 356.51a1.07 1.07 0 01.18.41l-.59.33a1.08 1.08 0 01-.26-.37z"
                fill="#5b5858"
              />
              <path
                d="M717.35 356.58a.78.78 0 00.36.64c.21.11.38 0 .39-.21a.86.86 0 00-.38-.67c-.2-.12-.36 0-.37.24z"
                fill="#0a0404"
              />
              <g fillRule="evenodd">
                <path
                  d="M713.31 353c0 .38.15.57.52.35s.79-.61.79-1-.25-.66-.63-.44a1.42 1.42 0 00-.68 1.09z"
                  fill="#010007"
                />
                <path
                  fill="#010007"
                  d="M714.9 352.23l-.45-.27.04.29.41-.02zM713.87 353.72l-.42-.27.37-.33.03.42.02.18z"
                />
                <path
                  d="M713.72 353.37c0 .38.3.51.68.29a1.39 1.39 0 00.68-1.07c0-.38-.3-.51-.68-.29a1.41 1.41 0 00-.68 1.07z"
                  fill="#0d0d0d"
                />
                <path
                  d="M713.78 353.34c0 .34.28.45.62.26a1.29 1.29 0 00.62-1c0-.34-.28-.46-.62-.26a1.27 1.27 0 00-.62 1z"
                  fill="#1b1b1f"
                />
                <path
                  d="M714 353.24c0 .25.2.34.45.19a.92.92 0 00.45-.71c0-.25-.2-.33-.45-.19a.92.92 0 00-.45.71z"
                  fill="#101010"
                />
                <path
                  d="M714 353.19c0 .22.18.3.4.17a.84.84 0 00.4-.63c0-.22-.18-.29-.4-.17a.84.84 0 00-.4.63z"
                  fill="#787878"
                />
                <path
                  d="M714 353.16c0 .19.15.25.34.14a.7.7 0 00.34-.54c0-.18-.14-.24-.33-.15a.68.68 0 00-.33.48.13.13 0 00-.02.07z"
                  fill="#252625"
                />
                <path
                  d="M714.05 353.1c0 .07.11.08.22 0a.48.48 0 00.24-.37c0-.09 0-.14-.12-.14a.68.68 0 00-.34.51z"
                  fill="#787878"
                />
              </g>
              <path
                fill="#696969"
                d="M715.42 352.27l-.4-.6-.06.06.4.61.06-.07z"
              />
              <path
                fill="#777"
                d="M714.4 351.31l.62.36-.06.06-.61-.36.05-.06z"
              />
              <path
                fill="#909090"
                d="M714.74 351.97l.62.37-.4-.61-.62-.36.4.6z"
              />
              <path
                d="M714.72 348.33v4.59c0 .06-.09.1-.19.1s-.18 0-.18-.1v-4.59z"
                fill="url(#expeditedbackground__\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_9-2)"
              />
              <g fillRule="evenodd">
                <path
                  d="M714.16 353.56c0 .37.15.57.53.35s.78-.61.78-1-.25-.65-.63-.44a1.44 1.44 0 00-.68 1.09z"
                  fill="#010007"
                />
                <path
                  fill="#010007"
                  d="M715.75 352.75l-.45-.27.04.29.41-.02zM714.73 354.23l-.43-.26.37-.34.03.43.03.17z"
                />
                <path
                  d="M714.57 353.89c0 .38.31.51.68.29a1.41 1.41 0 00.68-1.07c0-.38-.3-.51-.68-.29a1.4 1.4 0 00-.68 1.07z"
                  fill="#0d0d0d"
                />
                <path
                  d="M714.64 353.85c0 .34.27.46.61.26a1.27 1.27 0 00.62-1c0-.34-.28-.45-.62-.26a1.27 1.27 0 00-.61 1z"
                  fill="#1b1b1f"
                />
                <path
                  d="M714.8 353.76c0 .25.2.33.45.19a.92.92 0 00.45-.71c0-.25-.2-.34-.45-.19a.92.92 0 00-.45.71z"
                  fill="#101010"
                />
                <path
                  d="M714.83 353.71c0 .22.18.29.4.17a.84.84 0 00.4-.63c0-.22-.18-.3-.4-.17a.82.82 0 00-.4.63z"
                  fill="#787878"
                />
                <path
                  d="M714.89 353.68c0 .18.15.25.34.14a.7.7 0 00.34-.54c0-.18-.14-.25-.32-.15a.68.68 0 00-.33.47.17.17 0 00-.03.08z"
                  fill="#252625"
                />
                <path
                  d="M714.9 353.61c0 .08.12.09.22 0a.48.48 0 00.24-.37c0-.09-.05-.14-.11-.14a.68.68 0 00-.35.51z"
                  fill="#787878"
                />
              </g>
              <path
                fill="#696969"
                d="M713.72 353.24l.85-1.26h-.07l-.84 1.26h.06z"
              />
              <path
                fill="#777"
                d="M713.95 351.61l.62.37h-.07l-.61-.36.06-.01z"
              />
              <path
                fill="#909090"
                d="M713.03 352.87l.62.37.85-1.26-.62-.37-.85 1.26z"
              />
              <g fillRule="evenodd">
                <path
                  d="M724.53 338.17c0 .37.14.57.52.35s.78-.61.78-1-.25-.65-.62-.43a1.38 1.38 0 00-.68 1.08z"
                  fill="#010007"
                />
                <path
                  fill="#010007"
                  d="M726.12 337.36l-.46-.27.05.29.41-.02zM725.09 338.85l-.43-.27.37-.33.04.42.02.18z"
                />
                <path
                  d="M724.93 338.5c0 .38.31.51.68.29a1.4 1.4 0 00.69-1.07c0-.38-.31-.51-.69-.29a1.42 1.42 0 00-.68 1.07z"
                  fill="#0d0d0d"
                />
                <path
                  d="M725 338.46c0 .34.28.46.61.27a1.3 1.3 0 00.62-1c0-.34-.28-.46-.62-.27a1.32 1.32 0 00-.61 1z"
                  fill="#1b1b1f"
                />
                <path
                  d="M725.16 338.37c0 .25.21.34.45.19a.93.93 0 00.46-.71c0-.25-.21-.34-.46-.19a1 1 0 00-.45.71z"
                  fill="#101010"
                />
                <path
                  d="M725.2 338.32c0 .22.18.3.4.17a.84.84 0 00.4-.63c0-.22-.18-.3-.4-.17a.84.84 0 00-.4.63z"
                  fill="#787878"
                />
                <path
                  d="M725.25 338.29c0 .18.16.25.35.14a.73.73 0 00.34-.54c0-.18-.15-.25-.33-.15a.73.73 0 00-.34.47s-.02.06-.02.08z"
                  fill="#252625"
                />
                <path
                  d="M725.26 338.22c0 .08.12.09.22 0a.48.48 0 00.24-.37c0-.09 0-.14-.11-.14a.73.73 0 00-.35.51z"
                  fill="#787878"
                />
              </g>
              <path
                fill="#696969"
                d="M726.64 337.4l-.4-.61-.06.07.4.6.06-.06z"
              />
              <path
                fill="#777"
                d="M725.62 336.43l.62.36-.06.07-.62-.36.06-.07z"
              />
              <path
                fill="#909090"
                d="M725.96 337.1l.62.36-.4-.6-.62-.36.4.6z"
              />
              <path
                d="M725.93 333.46v4.59c0 .05-.08.1-.18.1s-.19 0-.18-.11v-4.58z"
                fill="url(#expeditedbackground__\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_9-3)"
              />
              <g fillRule="evenodd">
                <path
                  d="M725.38 338.69c0 .37.14.56.52.35s.78-.62.78-1-.25-.65-.62-.44a1.41 1.41 0 00-.68 1.09z"
                  fill="#010007"
                />
                <path
                  fill="#010007"
                  d="M726.97 337.88l-.46-.27.05.29.41-.02zM725.94 339.36l-.43-.26.37-.34.04.43.02.17z"
                />
                <path
                  d="M725.78 339c0 .37.31.5.69.29a1.44 1.44 0 00.68-1.08c0-.37-.31-.5-.68-.29a1.42 1.42 0 00-.69 1.08z"
                  fill="#0d0d0d"
                />
                <path
                  d="M725.85 339c0 .34.28.46.62.26a1.28 1.28 0 00.61-1c0-.34-.28-.45-.61-.26a1.29 1.29 0 00-.62 1z"
                  fill="#1b1b1f"
                />
                <path
                  d="M726 338.89c0 .25.21.33.46.19a1 1 0 00.45-.71c0-.25-.21-.34-.45-.2a1 1 0 00-.46.72z"
                  fill="#101010"
                />
                <path
                  d="M726.05 338.84c0 .22.18.29.4.17a.84.84 0 00.4-.63c0-.22-.18-.3-.4-.17a.82.82 0 00-.4.63z"
                  fill="#787878"
                />
                <path
                  d="M726.11 338.8c0 .19.15.26.34.15a.73.73 0 00.34-.54c0-.18-.15-.25-.33-.15a.75.75 0 00-.34.48z"
                  fill="#252625"
                />
                <path
                  d="M726.11 338.74c0 .07.12.09.22 0a.5.5 0 00.24-.38c0-.08 0-.13-.11-.13a.75.75 0 00-.35.51z"
                  fill="#787878"
                />
              </g>
              <path
                fill="#696969"
                d="M724.94 338.37l.84-1.27-.06.01-.85 1.26h.07z"
              />
              <path fill="#777" d="M725.16 336.74l.62.36-.06.01-.62-.37h.06z" />
              <path
                fill="#909090"
                d="M724.25 338l.62.37.85-1.26-.62-.37-.85 1.26z"
              />
              <g>
                <g fillRule="evenodd">
                  <path
                    d="M699.52 351.56c0 .27.11.41.38.26s.58-.45.58-.73-.19-.48-.46-.32a1.05 1.05 0 00-.5.79z"
                    fill="#010007"
                  />
                  <path
                    fill="#010007"
                    d="M700.68 350.97l-.33-.2.03.21.3-.01zM699.93 352.05l-.31-.19.27-.24.03.3.01.13z"
                  />
                  <path
                    d="M699.82 351.8c0 .28.22.37.5.21a1 1 0 00.5-.78c0-.28-.23-.37-.5-.21a1 1 0 00-.5.78z"
                    fill="#0d0d0d"
                  />
                  <path
                    d="M699.87 351.77c0 .25.2.34.45.2a1 1 0 00.45-.71c0-.25-.2-.34-.45-.2a1 1 0 00-.45.71z"
                    fill="#1b1b1f"
                  />
                  <path
                    d="M700 351.71c0 .18.15.24.33.14a.7.7 0 00.33-.53c0-.18-.15-.24-.33-.14a.7.7 0 00-.33.53z"
                    fill="#101010"
                  />
                  <path
                    d="M700 351.67c0 .16.13.22.29.12a.62.62 0 00.3-.46c0-.16-.14-.21-.3-.12a.6.6 0 00-.29.46z"
                    fill="#787878"
                  />
                  <path
                    d="M700.05 351.64c0 .14.12.19.25.11a.5.5 0 00.25-.39c0-.14-.1-.19-.24-.11a.54.54 0 00-.24.35z"
                    fill="#252625"
                  />
                  <path
                    d="M700.06 351.6s.09.06.16 0a.37.37 0 00.18-.27.09.09 0 00-.09-.1.54.54 0 00-.25.37z"
                    fill="#787878"
                  />
                </g>
                <path
                  fill="#696969"
                  d="M701.07 351l-.3-.45-.04.05.29.44.05-.04z"
                />
                <path
                  fill="#777"
                  d="M700.32 350.29l.45.26-.04.05-.45-.26.04-.05z"
                />
                <path
                  fill="#909090"
                  d="M700.57 350.78l.45.26-.29-.44-.46-.27.3.45z"
                />
                <path
                  d="M700.55 348.11v3.36s-.06.07-.14.07-.13 0-.13-.07v-3.36z"
                  fill="url(#expeditedbackground__\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_9-4)"
                />
                <g fillRule="evenodd">
                  <path
                    d="M700.14 351.94c0 .27.11.41.39.25s.57-.44.57-.72-.18-.48-.46-.32a1.05 1.05 0 00-.5.79z"
                    fill="#010007"
                  />
                  <path
                    fill="#010007"
                    d="M701.31 351.34l-.34-.2.04.22.3-.02zM700.55 352.43l-.31-.19.27-.25.03.31.01.13z"
                  />
                  <path
                    d="M700.44 352.18c0 .27.23.37.5.21a1.05 1.05 0 00.5-.78c0-.28-.23-.37-.5-.22a1.05 1.05 0 00-.5.79z"
                    fill="#0d0d0d"
                  />
                  <path
                    d="M700.49 352.15c0 .25.2.34.45.19a.92.92 0 00.45-.71c0-.24-.2-.33-.45-.19a.92.92 0 00-.45.71z"
                    fill="#1b1b1f"
                  />
                  <path
                    d="M700.61 352.08c0 .19.15.25.33.14a.68.68 0 00.33-.52c0-.18-.15-.24-.33-.14a.7.7 0 00-.33.52z"
                    fill="#101010"
                  />
                  <path
                    d="M700.63 352.05c0 .16.13.21.3.12a.6.6 0 00.29-.46c0-.16-.13-.22-.29-.12a.59.59 0 00-.3.46z"
                    fill="#787878"
                  />
                  <path
                    d="M700.68 352c0 .14.11.19.25.11a.55.55 0 00.25-.4c0-.13-.11-.18-.24-.11a.52.52 0 00-.25.35z"
                    fill="#252625"
                  />
                  <path
                    d="M700.68 352s.09.06.16 0a.37.37 0 00.18-.28.09.09 0 00-.08-.1.52.52 0 00-.26.38z"
                    fill="#787878"
                  />
                </g>
                <g>
                  <path
                    fill="#696969"
                    d="M699.82 351.7l.62-.92h-.05l-.62.92h.05z"
                  />
                  <path
                    fill="#777"
                    d="M699.99 350.51l.45.27h-.05l-.45-.27h.05z"
                  />
                  <path
                    fill="#909090"
                    d="M699.32 351.44l.45.26.62-.92-.45-.27-.62.93z"
                  />
                </g>
              </g>
              <g>
                <g fillRule="evenodd">
                  <path
                    d="M692.77 340.19c0 .37.15.57.53.35s.78-.61.78-1-.25-.65-.62-.43a1.39 1.39 0 00-.69 1.08z"
                    fill="#010007"
                  />
                  <path
                    fill="#010007"
                    d="M694.36 339.38l-.45-.27.05.29.4-.02zM693.34 340.87l-.43-.27.37-.33.04.42.02.18z"
                  />
                  <path
                    d="M693.18 340.52c0 .38.31.51.68.29a1.39 1.39 0 00.68-1.07c0-.38-.3-.51-.68-.29a1.42 1.42 0 00-.68 1.07z"
                    fill="#0d0d0d"
                  />
                  <path
                    d="M693.25 340.48c0 .34.27.46.61.27a1.3 1.3 0 00.62-1c0-.34-.28-.46-.62-.27a1.29 1.29 0 00-.61 1z"
                    fill="#1b1b1f"
                  />
                  <path
                    d="M693.41 340.39c0 .25.2.34.45.19a.93.93 0 00.46-.71c0-.25-.21-.34-.46-.19a.92.92 0 00-.45.71z"
                    fill="#101010"
                  />
                  <path
                    d="M693.44 340.34c0 .22.18.3.4.17a.84.84 0 00.4-.63c0-.22-.18-.3-.4-.17a.84.84 0 00-.4.63z"
                    fill="#787878"
                  />
                  <path
                    d="M693.5 340.31c0 .18.15.25.34.14a.72.72 0 00.35-.54c0-.18-.15-.25-.33-.15a.68.68 0 00-.33.48s-.03.05-.03.07z"
                    fill="#252625"
                  />
                  <path
                    d="M693.51 340.25c0 .07.12.08.22 0a.48.48 0 00.24-.37c0-.09-.05-.14-.11-.14a.68.68 0 00-.35.51z"
                    fill="#787878"
                  />
                </g>
                <path
                  fill="#696969"
                  d="M694.88 339.42l-.39-.61-.06.07.4.61.05-.07z"
                />
                <path
                  fill="#777"
                  d="M693.86 338.45l.63.36-.06.07-.62-.36.05-.07z"
                />
                <path
                  fill="#909090"
                  d="M694.2 339.12l.63.37-.4-.61-.63-.37.4.61z"
                />
                <path
                  d="M694.18 335.48v4.59c0 .05-.08.1-.18.1s-.19-.05-.19-.11v-4.58z"
                  fill="url(#expeditedbackground__\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_9-5)"
                />
                <g fillRule="evenodd">
                  <path
                    d="M693.62 340.71c0 .37.15.56.53.35s.78-.62.78-1-.25-.65-.62-.44a1.42 1.42 0 00-.69 1.09z"
                    fill="#010007"
                  />
                  <path
                    fill="#010007"
                    d="M695.22 339.9l-.46-.27.04.29.42-.02zM694.19 341.38l-.43-.26.37-.34.04.43.02.17z"
                  />
                  <path
                    d="M694 341c0 .37.31.5.68.29a1.41 1.41 0 00.68-1.08c0-.37-.3-.5-.68-.29A1.44 1.44 0 00694 341z"
                    fill="#0d0d0d"
                  />
                  <path
                    d="M694.1 341c0 .34.27.46.61.26a1.27 1.27 0 00.62-1c0-.34-.28-.45-.62-.26a1.27 1.27 0 00-.61 1z"
                    fill="#1b1b1f"
                  />
                  <path
                    d="M694.26 340.91c0 .25.2.33.45.19a1 1 0 00.46-.71c0-.25-.21-.34-.46-.2a1 1 0 00-.45.72z"
                    fill="#101010"
                  />
                  <path
                    d="M694.29 340.86c0 .22.18.29.4.17a.84.84 0 00.4-.63c0-.22-.18-.3-.4-.17a.82.82 0 00-.4.63z"
                    fill="#787878"
                  />
                  <path
                    d="M694.35 340.82c0 .19.16.26.34.15a.72.72 0 00.35-.54c0-.18-.15-.25-.33-.15a.77.77 0 00-.33.48s-.03.04-.03.06z"
                    fill="#252625"
                  />
                  <path
                    d="M694.36 340.76c0 .07.12.09.22 0a.5.5 0 00.24-.38.12.12 0 00-.11-.13.77.77 0 00-.35.51z"
                    fill="#787878"
                  />
                </g>
                <g>
                  <path
                    fill="#696969"
                    d="M693.18 340.39l.85-1.27-.06.01-.85 1.26h.06z"
                  />
                  <path
                    fill="#777"
                    d="M693.41 338.76l.62.36-.06.01-.62-.37h.06z"
                  />
                  <path
                    fill="#909090"
                    d="M692.5 340.02l.62.37.85-1.26-.63-.37-.84 1.26z"
                  />
                </g>
              </g>
              <g>
                <g fillRule="evenodd">
                  <path
                    d="M694.84 341.77c0 .38.15.57.52.35s.79-.61.79-1-.25-.65-.63-.43a1.42 1.42 0 00-.68 1.08z"
                    fill="#010007"
                  />
                  <path
                    fill="#010007"
                    d="M696.43 340.96l-.45-.27.04.29.41-.02zM695.4 342.45l-.42-.27.37-.33.03.42.02.18z"
                  />
                  <path
                    d="M695.25 342.1c0 .38.3.51.68.29a1.42 1.42 0 00.68-1.07c0-.38-.31-.51-.68-.29a1.41 1.41 0 00-.68 1.07z"
                    fill="#0d0d0d"
                  />
                  <path
                    d="M695.31 342.07c0 .33.28.45.62.26a1.27 1.27 0 00.61-1c0-.34-.27-.46-.61-.26a1.27 1.27 0 00-.62 1z"
                    fill="#1b1b1f"
                  />
                  <path
                    d="M695.48 342c0 .25.2.34.45.19a.92.92 0 00.45-.71c0-.25-.2-.33-.45-.19a.92.92 0 00-.45.71z"
                    fill="#101010"
                  />
                  <path
                    d="M695.51 341.92c0 .22.18.3.4.17a.84.84 0 00.4-.63c0-.22-.18-.29-.4-.17a.84.84 0 00-.4.63z"
                    fill="#787878"
                  />
                  <path
                    d="M695.57 341.89c0 .19.15.25.34.14a.7.7 0 00.34-.54c0-.18-.14-.25-.33-.15a.68.68 0 00-.33.48.13.13 0 00-.02.07z"
                    fill="#252625"
                  />
                  <path
                    d="M695.58 341.83c0 .07.11.08.22 0a.48.48 0 00.24-.37c0-.09 0-.14-.12-.14a.68.68 0 00-.34.51z"
                    fill="#787878"
                  />
                </g>
                <path
                  fill="#696969"
                  d="M696.95 341l-.4-.6-.06.06.4.61.06-.07z"
                />
                <path
                  fill="#777"
                  d="M695.93 340.04l.62.36-.06.06-.61-.36.05-.06z"
                />
                <path
                  fill="#909090"
                  d="M696.27 340.7l.62.37-.4-.61-.62-.36.4.6z"
                />
                <path
                  d="M696.25 337.06v4.59c0 .05-.09.1-.19.1s-.18-.05-.18-.1v-4.59z"
                  fill="url(#expeditedbackground__\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_9-6)"
                />
                <g fillRule="evenodd">
                  <path
                    d="M695.69 342.29c0 .37.15.56.52.35s.79-.61.79-1-.25-.65-.63-.44a1.44 1.44 0 00-.68 1.09z"
                    fill="#010007"
                  />
                  <path
                    fill="#010007"
                    d="M697.28 341.48l-.45-.27.04.29.41-.02zM696.25 342.96l-.42-.26.37-.34.03.43.02.17z"
                  />
                  <path
                    d="M696.1 342.62c0 .38.3.5.68.29a1.41 1.41 0 00.68-1.08c0-.37-.3-.5-.68-.28a1.38 1.38 0 00-.68 1.07z"
                    fill="#0d0d0d"
                  />
                  <path
                    d="M696.16 342.58c0 .34.28.46.62.26a1.27 1.27 0 00.62-1c0-.34-.28-.45-.62-.26a1.29 1.29 0 00-.62 1z"
                    fill="#1b1b1f"
                  />
                  <path
                    d="M696.33 342.49c0 .25.2.33.45.19a.92.92 0 00.45-.71c0-.25-.2-.34-.45-.2a1 1 0 00-.45.72z"
                    fill="#101010"
                  />
                  <path
                    d="M696.36 342.44c0 .22.18.29.4.17a.84.84 0 00.4-.63c0-.22-.18-.3-.4-.17a.82.82 0 00-.4.63z"
                    fill="#787878"
                  />
                  <path
                    d="M696.42 342.4c0 .19.15.26.34.15a.7.7 0 00.34-.54c0-.18-.14-.25-.33-.15a.66.66 0 00-.33.47.13.13 0 00-.02.07z"
                    fill="#252625"
                  />
                  <path
                    d="M696.43 342.34c0 .07.11.09.22 0a.5.5 0 00.24-.37c0-.09 0-.14-.12-.14a.66.66 0 00-.34.51z"
                    fill="#787878"
                  />
                </g>
                <g>
                  <path
                    fill="#696969"
                    d="M695.25 341.97l.85-1.27-.07.01-.85 1.26h.07z"
                  />
                  <path
                    fill="#777"
                    d="M695.48 340.34l.62.36-.07.01-.61-.37h.06z"
                  />
                  <path
                    fill="#909090"
                    d="M694.56 341.6l.62.37.85-1.26-.62-.37-.85 1.26z"
                  />
                </g>
              </g>
              <g>
                <path
                  d="M696.15 343l.25-3.81 2-1.27a1.15 1.15 0 011.13.12 3.33 3.33 0 011.54 2.72c0 .48-.88 1.28-1.54 1.64l.07-.09z"
                  fill="#696969"
                />
                <path
                  d="M695.36 340.41c.36-.2.39-.3.78-.17s1.5.55 2 .71a4.59 4.59 0 002.79-.16c.52-.74-1.74-2.85-1.74-2.85l.28.13a3.25 3.25 0 011.15 1.23 3 3 0 01.39 1.49c0 .19-.47.65-1.08 1.05l-2.28.83c-.14 0-1.4.36-1.55.28s.14.13 0 0l-1.2-1.8a3.45 3.45 0 01.46-.74z"
                  fill="#696969"
                />
                <path
                  d="M695.36 340.41l1-1.22a.92.92 0 011 .07c.88.51 2.59 1.41 2.6 2.41 0 .76-.92.6-2 1.08l-1.82.25z"
                  fill="#696969"
                />
                <path
                  d="M694.86 341.52a1.68 1.68 0 00.79 1.39.51.51 0 00.84-.46 1.73 1.73 0 00-.79-1.39c-.45-.26-.83-.06-.84.46z"
                  fill="#a5a5a5"
                />
                <path
                  d="M694.89 341.54a1.61 1.61 0 00.76 1.33c.43.25.79.06.81-.43a1.67 1.67 0 00-.76-1.34c-.43-.25-.8-.05-.81.44z"
                  fill="#a1a1a1"
                />
                <path
                  d="M695.17 341.71a1 1 0 00.49.86.32.32 0 00.52-.28 1 1 0 00-.49-.86c-.28-.16-.51-.04-.52.28z"
                  fill="#a9a6a6"
                />
                <path
                  d="M695.2 341.73a1 1 0 00.46.8c.26.15.47 0 .48-.26a1 1 0 00-.45-.8c-.26-.15-.48-.03-.49.26z"
                  fill="#0a0404"
                />
                <path
                  d="M695.7 341.47a1 1 0 01.44.8.37.37 0 010 .11l-.36.2-.11-.05a1 1 0 01-.46-.79z"
                  fill="#181717"
                />
                <path
                  d="M696 341.71a1.07 1.07 0 01.18.41l-.59.33a1.08 1.08 0 01-.26-.37z"
                  fill="#5b5858"
                />
                <path
                  d="M695.38 341.78a.8.8 0 00.36.63c.21.12.38 0 .39-.21a.85.85 0 00-.37-.66c-.21-.12-.37 0-.38.24z"
                  fill="#0a0404"
                />
              </g>
              <g>
                <path
                  d="M689.14 339.45l.24-3.81 2-1.27a1.16 1.16 0 011.13.12 3.36 3.36 0 011.54 2.72c0 .48-.72 1.13-1.38 1.49l-.09.06z"
                  fill="#696969"
                />
                <path
                  d="M688.34 336.86h.06c.36-.2.39-.3.77-.17.53.19 1.51.55 2.06.71a4.56 4.56 0 002.78-.16c.53-.74-1.73-2.85-1.73-2.85a1.75 1.75 0 01.28.13 3.16 3.16 0 011.14 1.23 3 3 0 01.4 1.49c0 .19-.48.65-1.09 1.05l-2.27.83c-.14 0-1.41.36-1.55.28s.14.13 0 0l-1.2-1.81a3.15 3.15 0 01.35-.73z"
                  fill="#696969"
                />
                <path
                  d="M688.34 336.86l1-1.22a.94.94 0 011 .07c.88.51 2.59 1.41 2.59 2.41 0 .76-.56.65-2 1.08l-1.81.25z"
                  fill="#696969"
                />
                <path
                  d="M687.84 338a1.73 1.73 0 00.79 1.39c.45.26.83.05.84-.46a1.69 1.69 0 00-.78-1.39.52.52 0 00-.85.46z"
                  fill="#a5a5a5"
                />
                <path
                  d="M687.88 338a1.62 1.62 0 00.75 1.34c.43.25.8.06.81-.43a1.64 1.64 0 00-.75-1.34c-.44-.27-.8-.08-.81.43z"
                  fill="#a1a1a1"
                />
                <path
                  d="M688.15 338.16a1.09 1.09 0 00.49.86c.28.16.51 0 .52-.28a1.06 1.06 0 00-.48-.86c-.28-.16-.52-.04-.53.28z"
                  fill="#a9a6a6"
                />
                <path
                  d="M688.19 338.18a1 1 0 00.45.8c.26.15.48 0 .49-.26a1 1 0 00-.45-.8c-.26-.15-.48-.04-.49.26z"
                  fill="#0a0404"
                />
                <path
                  d="M688.68 337.92a1 1 0 01.45.8.36.36 0 010 .11l-.35.2h-.12a1 1 0 01-.45-.79z"
                  fill="#181717"
                />
                <path
                  d="M688.94 338.16a1.07 1.07 0 01.18.41l-.59.33a1.11 1.11 0 01-.27-.37z"
                  fill="#5b5858"
                />
                <path
                  d="M688.37 338.23a.76.76 0 00.36.63c.21.12.38 0 .39-.21a.84.84 0 00-.38-.66c-.2-.12-.36.01-.37.24z"
                  fill="#0a0404"
                />
              </g>
              <path
                fill="#767676"
                d="M691.16 347.46l-17.33.12v.25l4.71 1.46 5.25 2.57 7.37-4.4z"
              />
              <path
                fill="#cecece"
                d="M691.16 347.21l-15.41-.21-1.92.58 4.71 1.45 5.25 2.58 7.37-4.4z"
              />
              <path
                fill="#787878"
                d="M678.54 349.03l1.19-.41 4.33 2.07-.9.61-4.62-2.27z"
              />
              <path
                fill="#8d8d8d"
                d="M715.36 337.09l-42.82-4.1v.53l19.51 5.11 11.59 4.5 11.72-6.04z"
              />
              <path
                fill="#cecece"
                d="M715.36 336.56l-38.75-4.81-4.07 1.24 19.51 5.11 11.59 4.49 11.72-6.03z"
              />
              <path
                fill="#787878"
                d="M693.69 338.75l1.04-.42 6.76 2.45-.9.61-6.9-2.64z"
              />
              <path
                fill="#989898"
                d="M713.43 337.67l-16.64-1.84-21.29-3.74 1.11-.34 39.22 4.25-2.4 1.67z"
              />
              <path
                d="M731.64 332.58l.08-.06a12.41 12.41 0 001.6-1.83 1 1 0 00.11-.17 6.48 6.48 0 00.55-.91c0-.06.4-1 .43-1.09s0-.14 0-.21v-.17c0-.07.06-.24.07-.31s-.06.05 0-.08c0-.16-.17-.26-.2-.38a.3.3 0 000-.1.32.32 0 000-.09v-.16a1.25 1.25 0 00-.09-.12c-.16-.17-.16-.37-1.1-.36h-.21l.89.23a.77.77 0 01.17.09c.57.36-.41 3.47-2.3 5.72z"
                fill="#696969"
              />
              <path
                d="M681 353.88a1.46 1.46 0 00.21.32c.16.19 0-.17.31-.1 1.56.36 4.72-.8 7.48-1.67s8.41-2.46 12.57-4c1-.4 2-.78 2.76-1.15 3.8-1.83 5.73-3 13.1-7 2.93-1.62 5.3-2.83 7.27-3.86 3-1.56 5-2.1 6.71-3.61l.19-.18c1.89-2.25 2.83-5.44 2.14-5.88a.91.91 0 01-.39.05l-.63-.27h-.09l-.86.07c-.54.06-1.22.14-2.09.27a29.59 29.59 0 00-11.79 4c-4.72 2.53-29.31 16.93-35 20.2a5.57 5.57 0 00-1.24 1.41l-.19.12a1.71 1.71 0 00-.45.5.85.85 0 00-.01.78z"
                fill="#b8b8b8"
              />
              <path
                d="M681.05 353.74a1.23 1.23 0 00.3.54c1.06 1.19 4 .55 7.3-.07a54.8 54.8 0 0012.29-3.91c3.8-1.83 8.76-4.23 16.13-8.3s10.61-6.27 13.36-8.76c.45-.41.85-.22 1.21-.66 1.89-2.25 2.83-5.44 2.14-5.88a.91.91 0 01-.39.05 2.1 2.1 0 00-.75-.09h-.44a8.83 8.83 0 00-1.72.37c-.39.12-.54.79-1 .95-4.28 1.33-6.73 1.79-11.9 4.57-4.2 2.25-22.33 12.86-31.73 18.27a15.78 15.78 0 01-4 1.64s-.99.54-.8 1.28z"
                fill="#989898"
              />
              <path
                d="M683.66 351.86a23.86 23.86 0 006.6-1.28 81.63 81.63 0 0010.68-4.28c3.8-1.83 8.76-4.23 16.13-8.3s10.61-6.27 13.36-8.76a12 12 0 001.21-1.27 12.34 12.34 0 001-1.32h-.44a8.83 8.83 0 00-1.72.37c-.39.12-.54.79-1 .95-4.28 1.33-6.73 1.79-11.9 4.57-4.28 2.28-24.52 13.91-33.92 19.32z"
                fill="#b8b8b8"
              />
              <g>
                <path
                  d="M730.36 327.09l-.24.21a.79.79 0 01.24-.21z"
                  fill="#a9a9a9"
                />
                <path
                  d="M729.26 328c-2.55 2.12-5.83 4.24-12.19 7.75-7.37 4.07-12.33 6.47-16.13 8.29a51.8 51.8 0 01-8.89 3.15c.67-.39-.4-.53.3-.94 11.42-6.55 21.9-12 25.15-13.72 5.11-2.71 7.57-3.19 11.76-4.53z"
                  fill="#cecece"
                />
              </g>
              <path
                d="M681.78 352.48l.26-.15c1.26.41 3.9 0 6.61-.5a55.32 55.32 0 0012.29-3.91c3.8-1.83 8.76-4.23 16.13-8.3s10.61-6.27 13.36-8.76a12 12 0 001.21-1.27c.78-.93.69-2.26 1.06-3.12 0 0 .68.11.69.08l.39.15c.81.5-.25 3.63-2.14 5.88-.36.44-.76.25-1.21.66-2.75 2.49-6 4.69-13.36 8.76s-12.33 6.47-16.13 8.3a54.8 54.8 0 01-12.29 3.91c-3.29.62-6.24 1.26-7.3.07a1.23 1.23 0 01-.3-.54c-.19-.74.73-1.26.73-1.26z"
                fill="#8d8d8d"
              />
              <path
                d="M681.35 353.31c1.06 1.2 4 .55 7.29-.06a54.77 54.77 0 0012.3-3.92c3.8-1.82 8.76-4.23 16.13-8.29s10.61-6.28 13.37-8.77c1.88-1.7 3.91-3.55 3.53-5.3.51 1-.8 4.36-3.53 6.87s-6 4.1-13.37 8.16-12.33 6.47-16.13 8.3a54.21 54.21 0 01-12.3 3.91c-3.28.62-6.23 1.26-7.29.07a1 1 0 01-.18-1.22 1.71 1.71 0 00.18.25z"
                fill="#696969"
              />
              <path
                fill="#8d8d8d"
                d="M718.53 338.91l8.4 22.48v.53l-2.5 1.54-10.85-12.85-6.04-5.25v-.53l10.99-5.92z"
              />
              <path fill="#464847" d="M684.12 351.75l-.3.37.3-.37z" />
              <path
                d="M679.89 341.82s-.41-.39-1.27.06-3.15 1.6-3.15 1.6l-.19.66 8.15 7.3s.41.12 3.76-1.74c2.57-1.43 5.88-3 6.51-3.51.2-.15-.45-.29-.45-.29s-.32 0-1 .07a7.5 7.5 0 01-4-.5c-1.59-.69-8.36-3.65-8.36-3.65z"
                fill="#767676"
              />
              <path
                d="M693.7 346.19a58.47 58.47 0 01-6 3.88c-.94.52-1.65.9-2.19 1.15-1.36.65-1.57.59-1.57.59l-8-8 1.29-.65c.67-.33 1.44-.72 1.86-.95.86-.46 1.27-.07 1.27-.07s6.77 3 8.41 3.66a6.94 6.94 0 004.1.35c.64-.15.83.04.83.04z"
                fill="#b8b8b8"
              />
              <path
                fill="#b8b8b8"
                d="M679.38 347.18l2.02-4.59 6.83 3.04-2.9 5.67-3.46-1.7-2.49-2.42z"
              />
              <path
                d="M685.49 351.22c-1.36.65-1.57.59-1.57.59l-8-8 1.29-.65z"
                fill="#a2a2a2"
              />
              <g>
                <path
                  d="M718.73 339a.25.25 0 01-.12-.21 5.91 5.91 0 00-.15-1.19 5.45 5.45 0 00-.64-1.46.65.65 0 01-.13-.5c.05-.19.23-.31.49-.46l.88-.51c.43-.25.59-.07.86.31a5.74 5.74 0 01.43.78 4.2 4.2 0 01.29 2.09.4.4 0 01-.19.31L719 339a.28.28 0 01-.13 0 .31.31 0 01-.14 0zm.37-4.26l-.88.51c-.24.14-.4.24-.44.39a.6.6 0 00.11.43 5.24 5.24 0 01.65 1.49 5.52 5.52 0 01.16 1.21.13.13 0 00.07.12.15.15 0 00.16 0l1.45-.86a.27.27 0 00.14-.23 4.09 4.09 0 00-.28-2 6 6 0 00-.42-.76c-.18-.25-.29-.39-.44-.39a.62.62 0 00-.28.05zM701.65 348.4a.22.22 0 01-.12-.21 5.91 5.91 0 00-.15-1.18 5.55 5.55 0 00-.64-1.47.66.66 0 01-.13-.5c0-.19.23-.31.49-.46l.88-.51c.43-.26.59-.07.86.31a5.68 5.68 0 01.43.77 4.25 4.25 0 01.29 2.1.37.37 0 01-.19.3l-1.45.86a.2.2 0 01-.13 0 .22.22 0 01-.14-.01zm.37-4.26l-.88.52c-.24.13-.4.24-.44.39a.61.61 0 00.11.43 5.33 5.33 0 01.65 1.5 5.44 5.44 0 01.16 1.21.17.17 0 00.07.12.18.18 0 00.16 0l1.45-.86a.29.29 0 00.14-.23 4.09 4.09 0 00-.28-2 6 6 0 00-.42-.76c-.18-.26-.29-.39-.44-.39a.59.59 0 00-.3.07z"
                  fill="#8f8f8f"
                />
              </g>
              <path
                fill="#cecece"
                d="M718.53 338.37l8.4 23.02-2.5 1.54-10.85-12.86-6.04-5.24 10.99-6.46z"
              />
              <path
                fill="#989898"
                d="M726.26 361.8l.67-.41-8.4-23.02-2.05 1.24 9.78 22.19z"
              />
              <path
                fill="#787878"
                d="M708.78 345.9l1.19-.41 4.51 3.98-.9.6-4.8-4.17z"
              />
              <path
                fill="#767676"
                d="M694.46 349.07l1.13 9.8-1.17.72-3.71-3.73-3.26-2.18 7.01-4.61z"
              />
              <path
                fill="#cecece"
                d="M694.46 348.82l1.13 9.8-1.17.72-3.71-3.73-3.26-2.18 7.01-4.61z"
              />
              <path
                fill="#787878"
                d="M687.89 353.72l1.19-.41 2.53 1.69-.9.61-2.82-1.89z"
              />
              <path
                fill="#696969"
                d="M726.93 361.39v.53l-2.5 1.54v-.53l2.5-1.54z"
              />
              <path
                d="M730 328.75v.71l1.52-.36a11.62 11.62 0 001.73-1.35 1.16 1.16 0 00.13-1l-.63-.27h-.09l-.86.07a1.12 1.12 0 00.38.14c.1 0 0 .37-.24.68a13.51 13.51 0 01-1.94 1.38z"
                fill="#222422"
              />
              <path
                d="M731.13 329a12.12 12.12 0 001.74-1.35 1.16 1.16 0 00.13-1l-.33-.14h.09l.63.27a1.16 1.16 0 01-.13 1 11.62 11.62 0 01-1.73 1.35l-1.52.36v-.22z"
                fill="#4d4f4d"
              />
              <path
                fill="#696969"
                d="M695.59 358.62v.25l-1.17.72v-.25l1.17-.72z"
              />
              <path
                fill="#8d8d8d"
                d="M732.17 326.68l1.1-.03.12.1-1.22.08v-.15z"
              />
              <path
                fill="#9f9f9f"
                d="M730.64 328.35l.89.75.18-.13-.92-.72-.15.1z"
              />
              <path
                fill="#8d8d8d"
                d="M731.98 327.3l1.18.56-.15.14-1.15-.56.12-.14z"
              />
              <path
                d="M733.39 326.45s.64.29.74.49a2.7 2.7 0 01.24 1.38 5.22 5.22 0 01-.19.82 5.65 5.65 0 00.43-.78 1.46 1.46 0 00-.11-1.53 2 2 0 00-1.11-.38z"
                fill="#696969"
              />
              <g>
                <path
                  d="M681 352.81l.86-.69s.63-.16 1.22.94a2 2 0 01.13 1.86l-1 .09z"
                  fill="url(#expeditedbackground__\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_7)"
                />
                <path
                  d="M680.78 353.37a1.93 1.93 0 00.88 1.52c.49.28.88.06.88-.5a1.93 1.93 0 00-.88-1.52c-.49-.29-.88-.06-.88.5z"
                  fill="#3b3b3b"
                />
              </g>
            </g>
            <g>
              <path
                d="M543.12 433.23a4.1 4.1 0 003.69 0 1.13 1.13 0 000-2.13 4.1 4.1 0 00-3.69 0 1.13 1.13 0 000 2.13z"
                fill="#fa5"
              />
              <path
                d="M531.71 426.62a4.07 4.07 0 003.69 0 1.13 1.13 0 000-2.13 4.07 4.07 0 00-3.69 0 1.12 1.12 0 000 2.13z"
                fill="#1c9dff"
              />
              <path
                d="M526.23 423.5a4.07 4.07 0 003.69 0 1.12 1.12 0 000-2.12 4.07 4.07 0 00-3.69 0 1.13 1.13 0 000 2.12z"
                fill="#fa5"
              />
              <path
                d="M514.82 416.9a4.1 4.1 0 003.69 0 1.13 1.13 0 000-2.13 4.1 4.1 0 00-3.69 0 1.13 1.13 0 000 2.13z"
                fill="#1c9dff"
              />
              <path
                d="M509.34 413.77a4.07 4.07 0 003.69 0 1.13 1.13 0 000-2.13 4 4 0 00-3.68 0c-1.02.6-1.02 1.55-.01 2.13z"
                fill="#fa5"
              />
              <path
                d="M497.93 407.17a4.1 4.1 0 003.69 0 1.13 1.13 0 000-2.13 4.1 4.1 0 00-3.69 0 1.13 1.13 0 000 2.13z"
                fill="#1c9dff"
              />
              <path
                d="M492.46 404.05a4.08 4.08 0 003.68 0 1.12 1.12 0 000-2.13 4.08 4.08 0 00-3.68 0 1.12 1.12 0 000 2.13z"
                fill="#fa5"
              />
              <path
                d="M481 397.44a4.07 4.07 0 003.69 0 1.12 1.12 0 000-2.12 4 4 0 00-3.68 0c-1.01.58-1.01 1.54-.01 2.12z"
                fill="#1c9dff"
              />
              <path
                d="M475.57 394.32a4 4 0 003.68 0c1-.59 1-1.54 0-2.12a4 4 0 00-3.68 0 1.12 1.12 0 000 2.12z"
                fill="#fa5"
              />
              <path
                d="M464.16 387.71a4 4 0 003.68 0 1.12 1.12 0 000-2.13 4 4 0 00-3.68 0c-1.01.6-1.02 1.55 0 2.13z"
                fill="#1c9dff"
              />
              <path
                d="M458.68 384.59a4.08 4.08 0 003.68 0c1-.59 1-1.55 0-2.13a4.08 4.08 0 00-3.68 0c-1.01.59-1.02 1.54 0 2.13z"
                fill="#fa5"
              />
              <path
                d="M447.27 378a4.08 4.08 0 003.68 0 1.12 1.12 0 000-2.13 4.08 4.08 0 00-3.68 0 1.12 1.12 0 000 2.13z"
                fill="#1c9dff"
              />
              <g>
                <path
                  d="M441.79 374.86a4 4 0 003.68 0 1.12 1.12 0 000-2.13 4.08 4.08 0 00-3.68 0c-1.01.6-1.02 1.55 0 2.13z"
                  fill="#fa5"
                />
                <path
                  d="M430.38 368.26a4 4 0 003.68 0c1-.59 1-1.54 0-2.12a4 4 0 00-3.68 0 1.12 1.12 0 000 2.12z"
                  fill="#1c9dff"
                />
              </g>
              <g>
                <path
                  d="M424.9 365.14a4.08 4.08 0 003.68 0 1.12 1.12 0 000-2.13 4.1 4.1 0 00-3.69 0 1.13 1.13 0 00.01 2.13z"
                  fill="#fa5"
                />
                <path
                  d="M413.49 358.53a4.08 4.08 0 003.68 0c1-.59 1-1.55 0-2.13a4.1 4.1 0 00-3.69 0c-1 .6-1.01 1.6.01 2.13z"
                  fill="#1c9dff"
                />
              </g>
              <g>
                <path
                  d="M408 355.41a4.07 4.07 0 003.69 0 1.12 1.12 0 000-2.12 4.07 4.07 0 00-3.69 0 1.13 1.13 0 000 2.12z"
                  fill="#fa5"
                />
                <path
                  d="M396.6 348.8a4.07 4.07 0 003.69 0 1.13 1.13 0 000-2.13 4.1 4.1 0 00-3.69 0 1.12 1.12 0 000 2.13z"
                  fill="#1c9dff"
                />
              </g>
              <g>
                <path
                  d="M391.12 345.68a4.07 4.07 0 003.69 0 1.13 1.13 0 000-2.13 4.07 4.07 0 00-3.69 0 1.12 1.12 0 000 2.13z"
                  fill="#fa5"
                />
                <path
                  d="M379.71 339.08a4.1 4.1 0 003.69 0 1.13 1.13 0 000-2.13 4.1 4.1 0 00-3.69 0 1.13 1.13 0 000 2.13z"
                  fill="#1c9dff"
                />
              </g>
              <g>
                <path
                  d="M374.23 336a4.1 4.1 0 003.69 0 1.13 1.13 0 000-2.13 4.08 4.08 0 00-3.68 0 1.12 1.12 0 00-.01 2.13z"
                  fill="#fa5"
                />
                <path
                  d="M362.82 329.35a4.07 4.07 0 003.69 0 1.12 1.12 0 000-2.12 4.07 4.07 0 00-3.69 0 1.13 1.13 0 000 2.12z"
                  fill="#1c9dff"
                />
              </g>
              <g>
                <path
                  d="M357.34 326.23a4.1 4.1 0 003.69 0 1.12 1.12 0 000-2.13 4.08 4.08 0 00-3.68 0c-1.01.59-1.02 1.54-.01 2.13z"
                  fill="#fa5"
                />
                <path
                  d="M345.93 319.62a4.07 4.07 0 003.69 0 1.13 1.13 0 000-2.13 4 4 0 00-3.68 0 1.12 1.12 0 00-.01 2.13z"
                  fill="#1c9dff"
                />
              </g>
              <g>
                <path
                  d="M339.87 316.22a4.08 4.08 0 003.68 0c1-.59 1-1.54 0-2.13a4.1 4.1 0 00-3.69 0 1.12 1.12 0 00.01 2.13z"
                  fill="#fa5"
                />
                <path
                  d="M328.46 309.61a4 4 0 003.68 0 1.12 1.12 0 000-2.12 4 4 0 00-3.68 0c-1.01.58-1.02 1.51 0 2.12z"
                  fill="#1c9dff"
                />
                <path
                  d="M323 306.49a4.1 4.1 0 003.69 0 1.13 1.13 0 000-2.13 4.1 4.1 0 00-3.69 0 1.13 1.13 0 000 2.13z"
                  fill="#fa5"
                />
                <path
                  d="M311.57 299.88a4 4 0 003.68 0c1-.59 1-1.54 0-2.13a4.07 4.07 0 00-3.69 0 1.12 1.12 0 00.01 2.13z"
                  fill="#1c9dff"
                />
                <path
                  d="M306.09 296.76a4.07 4.07 0 003.69 0 1.12 1.12 0 000-2.12 4.07 4.07 0 00-3.69 0 1.13 1.13 0 000 2.12z"
                  fill="#fa5"
                />
                <path
                  d="M294.68 290.16a4.1 4.1 0 003.69 0 1.13 1.13 0 000-2.13 4.1 4.1 0 00-3.69 0 1.13 1.13 0 000 2.13z"
                  fill="#1c9dff"
                />
                <path
                  d="M289.2 287a4.07 4.07 0 003.69 0 1.13 1.13 0 000-2.13 4.07 4.07 0 00-3.69 0 1.12 1.12 0 000 2.13z"
                  fill="#fa5"
                />
                <path
                  d="M277.79 280.43a4.1 4.1 0 003.69 0 1.13 1.13 0 000-2.13 4.1 4.1 0 00-3.69 0 1.13 1.13 0 000 2.13z"
                  fill="#1c9dff"
                />
                <path
                  d="M272.31 277.31a4.1 4.1 0 003.69 0 1.13 1.13 0 000-2.13 4.08 4.08 0 00-3.68 0 1.12 1.12 0 00-.01 2.13z"
                  fill="#fa5"
                />
                <path
                  d="M260.9 270.7a4.07 4.07 0 003.69 0 1.12 1.12 0 000-2.12 4.07 4.07 0 00-3.69 0 1.13 1.13 0 000 2.12z"
                  fill="#1c9dff"
                />
                <path
                  d="M255.43 267.58a4 4 0 003.68 0c1-.59 1-1.54 0-2.12a4 4 0 00-3.68 0 1.12 1.12 0 000 2.12z"
                  fill="#fa5"
                />
                <path
                  d="M244 261a4.07 4.07 0 003.69 0 1.12 1.12 0 000-2.13 4 4 0 00-3.68 0c-1.01.57-1.01 1.52-.01 2.13z"
                  fill="#1c9dff"
                />
                <g>
                  <path
                    d="M238.54 257.85a4.08 4.08 0 003.68 0c1-.59 1-1.55 0-2.13a4.08 4.08 0 00-3.68 0c-1.01.59-1.02 1.55 0 2.13z"
                    fill="#fa5"
                  />
                  <path
                    d="M227.13 251.25a4.08 4.08 0 003.68 0 1.12 1.12 0 000-2.13 4.08 4.08 0 00-3.68 0 1.12 1.12 0 000 2.13z"
                    fill="#1c9dff"
                  />
                </g>
                <g>
                  <path
                    d="M221.65 248.12a4 4 0 003.68 0 1.12 1.12 0 000-2.13 4.08 4.08 0 00-3.68 0c-1.01.6-1.02 1.55 0 2.13z"
                    fill="#fa5"
                  />
                  <path
                    d="M210.24 241.52a4 4 0 003.68 0c1-.59 1-1.54 0-2.12a4 4 0 00-3.68 0 1.12 1.12 0 000 2.12z"
                    fill="#1c9dff"
                  />
                </g>
                <g>
                  <path
                    d="M204.76 238.4a4.08 4.08 0 003.68 0c1-.59 1-1.54 0-2.13a4.1 4.1 0 00-3.69 0 1.12 1.12 0 00.01 2.13z"
                    fill="#fa5"
                  />
                  <path
                    d="M193.35 231.79a4.08 4.08 0 003.68 0c1-.59 1-1.55 0-2.13a4.08 4.08 0 00-3.68 0c-1.01.59-1.02 1.55 0 2.13z"
                    fill="#1c9dff"
                  />
                </g>
                <g>
                  <path
                    d="M187.87 228.67a4 4 0 003.68 0c1-.59 1-1.54 0-2.12a4.07 4.07 0 00-3.69 0 1.13 1.13 0 00.01 2.12z"
                    fill="#fa5"
                  />
                  <path
                    d="M176.46 222.06a4 4 0 003.68 0c1-.59 1-1.54 0-2.13a4.1 4.1 0 00-3.69 0 1.12 1.12 0 00.01 2.13z"
                    fill="#1c9dff"
                  />
                </g>
                <path
                  d="M171 218.94a4.07 4.07 0 003.69 0 1.13 1.13 0 000-2.13 4.07 4.07 0 00-3.69 0 1.12 1.12 0 000 2.13z"
                  fill="#fa5"
                />
              </g>
              <g>
                <path
                  d="M743.9 548.77a4 4 0 003.64 0 1.11 1.11 0 000-2.1 4 4 0 00-3.64 0 1.11 1.11 0 000 2.1z"
                  fill="#fa5"
                />
                <path
                  d="M732.64 542.25a4 4 0 003.64 0 1.11 1.11 0 000-2.1 4 4 0 00-3.64 0 1.11 1.11 0 000 2.1z"
                  fill="#1c9dff"
                />
                <path
                  d="M727.23 539.17a4.06 4.06 0 003.64 0 1.11 1.11 0 000-2.1 4 4 0 00-3.64 0 1.11 1.11 0 000 2.1z"
                  fill="#fa5"
                />
                <path
                  d="M716 532.65a4 4 0 003.63 0c1-.58 1-1.52 0-2.1a4 4 0 00-3.64 0 1.11 1.11 0 00.01 2.1z"
                  fill="#1c9dff"
                />
                <path
                  d="M710.56 529.56a4 4 0 003.64 0 1.11 1.11 0 000-2.1 4 4 0 00-3.64 0c-1 .59-1 1.54 0 2.1z"
                  fill="#fa5"
                />
                <path
                  d="M699.3 523a4 4 0 003.63 0c1-.58 1-1.52 0-2.1a4 4 0 00-3.64 0c-.99.63-.99 1.57.01 2.1z"
                  fill="#1c9dff"
                />
                <path
                  d="M693.89 520a4 4 0 003.64 0c1-.59 1-1.53 0-2.1a4 4 0 00-3.64 0 1.11 1.11 0 000 2.1z"
                  fill="#fa5"
                />
                <path
                  d="M682.63 513.44a4 4 0 003.63 0c1-.59 1-1.53 0-2.1a4 4 0 00-3.63 0c-1 .58-1.01 1.52 0 2.1z"
                  fill="#1c9dff"
                />
                <path
                  d="M677.22 510.36a4 4 0 003.64 0 1.11 1.11 0 000-2.1 4.06 4.06 0 00-3.64 0 1.11 1.11 0 000 2.1z"
                  fill="#fa5"
                />
                <path
                  d="M666 503.84a4 4 0 003.64 0 1.11 1.11 0 000-2.1 4 4 0 00-3.63 0c-1.01.58-1.01 1.52-.01 2.1z"
                  fill="#1c9dff"
                />
                <path
                  d="M660.55 500.76a4 4 0 003.63 0c1-.58 1-1.52 0-2.1a4 4 0 00-3.64 0 1.11 1.11 0 00.01 2.1z"
                  fill="#fa5"
                />
                <path
                  d="M649.28 494.24a4 4 0 003.64 0 1.11 1.11 0 000-2.1 4 4 0 00-3.63 0c-1 .58-1.01 1.52-.01 2.1z"
                  fill="#1c9dff"
                />
                <g>
                  <path
                    d="M643.88 491.16a4 4 0 003.63 0c1-.58 1-1.52 0-2.1a4 4 0 00-3.64 0 1.11 1.11 0 00.01 2.1z"
                    fill="#fa5"
                  />
                  <path
                    d="M632.61 484.64a4.06 4.06 0 003.64 0 1.11 1.11 0 000-2.1 4 4 0 00-3.64 0 1.11 1.11 0 000 2.1z"
                    fill="#1c9dff"
                  />
                </g>
                <g>
                  <path
                    d="M627.21 481.55a4 4 0 003.63 0c1-.58 1-1.52 0-2.1a4 4 0 00-3.63 0c-1 .55-1.01 1.55 0 2.1z"
                    fill="#fa5"
                  />
                  <path
                    d="M615.94 475a4 4 0 003.64 0 1.11 1.11 0 000-2.1 4 4 0 00-3.64 0c-.94.62-1 1.56 0 2.1z"
                    fill="#1c9dff"
                  />
                </g>
                <g>
                  <path
                    d="M610.53 472a4 4 0 003.64 0c1-.59 1-1.53 0-2.1a4 4 0 00-3.63 0c-1 .53-1.01 1.47-.01 2.1z"
                    fill="#fa5"
                  />
                  <path
                    d="M599.27 465.43a4 4 0 003.64 0c1-.59 1-1.53 0-2.1a4 4 0 00-3.64 0 1.11 1.11 0 000 2.1z"
                    fill="#1c9dff"
                  />
                </g>
                <g>
                  <path
                    d="M593.86 462.35a4 4 0 003.64 0 1.11 1.11 0 000-2.1 4 4 0 00-3.63 0c-1 .58-1.01 1.52-.01 2.1z"
                    fill="#fa5"
                  />
                  <path
                    d="M582.6 455.83a4 4 0 003.64 0 1.11 1.11 0 000-2.1 4.06 4.06 0 00-3.64 0 1.11 1.11 0 000 2.1z"
                    fill="#1c9dff"
                  />
                </g>
                <g>
                  <path
                    d="M577.19 452.75a4 4 0 003.64 0 1.11 1.11 0 000-2.1 4 4 0 00-3.64 0 1.11 1.11 0 000 2.1z"
                    fill="#fa5"
                  />
                  <path
                    d="M565.93 446.23a4 4 0 003.64 0 1.11 1.11 0 000-2.1 4 4 0 00-3.64 0 1.11 1.11 0 000 2.1z"
                    fill="#1c9dff"
                  />
                </g>
                <g>
                  <path
                    d="M560.52 443.15a4 4 0 003.64 0 1.11 1.11 0 000-2.1 4 4 0 00-3.64 0 1.11 1.11 0 000 2.1z"
                    fill="#fa5"
                  />
                  <path
                    d="M549.26 436.63a4.06 4.06 0 003.64 0 1.11 1.11 0 000-2.1 4 4 0 00-3.64 0 1.11 1.11 0 000 2.1z"
                    fill="#1c9dff"
                  />
                </g>
              </g>
              <g>
                <path
                  d="M944.09 663.88a4 4 0 003.64 0 1.11 1.11 0 000-2.1 4 4 0 00-3.64 0 1.11 1.11 0 000 2.1z"
                  fill="#fa5"
                />
                <path
                  d="M932.83 657.36a4 4 0 003.63 0c1-.58 1-1.52 0-2.1a4 4 0 00-3.63 0c-1 .58-1.01 1.52 0 2.1z"
                  fill="#1c9dff"
                />
                <path
                  d="M927.42 654.28a4.06 4.06 0 003.64 0 1.11 1.11 0 000-2.1 4 4 0 00-3.64 0 1.11 1.11 0 000 2.1z"
                  fill="#fa5"
                />
                <path
                  d="M916.15 647.76a4.06 4.06 0 003.64 0 1.11 1.11 0 000-2.1 4 4 0 00-3.63 0c-1 .58-1.01 1.52-.01 2.1z"
                  fill="#1c9dff"
                />
                <path
                  d="M910.75 644.67a4 4 0 003.63 0c1-.58 1-1.52 0-2.1a4 4 0 00-3.64 0c-.99.59-.99 1.53.01 2.1z"
                  fill="#fa5"
                />
                <path
                  d="M899.48 638.15a4 4 0 003.64 0 1.11 1.11 0 000-2.1 4 4 0 00-3.63 0c-1 .59-1.01 1.53-.01 2.1z"
                  fill="#1c9dff"
                />
                <path
                  d="M894.08 635.07a4 4 0 003.63 0c1-.59 1-1.53 0-2.1a4 4 0 00-3.63 0 1.11 1.11 0 000 2.1z"
                  fill="#fa5"
                />
                <path
                  d="M882.81 628.55a4 4 0 003.64 0c1-.59 1-1.53 0-2.1a4 4 0 00-3.64 0 1.11 1.11 0 000 2.1z"
                  fill="#1c9dff"
                />
                <path
                  d="M877.41 625.47a4 4 0 003.63 0c1-.58 1-1.52 0-2.1a4 4 0 00-3.63 0c-1 .63-1.01 1.52 0 2.1z"
                  fill="#fa5"
                />
                <path
                  d="M866.14 619a4 4 0 003.64 0 1.11 1.11 0 000-2.1 4.06 4.06 0 00-3.64 0 1.11 1.11 0 000 2.1z"
                  fill="#1c9dff"
                />
                <path
                  d="M860.73 615.87a4 4 0 003.64 0 1.11 1.11 0 000-2.1 4 4 0 00-3.63 0c-1 .58-1.01 1.52-.01 2.1z"
                  fill="#fa5"
                />
                <path
                  d="M849.47 609.35a4 4 0 003.64 0 1.11 1.11 0 000-2.1 4 4 0 00-3.64 0 1.11 1.11 0 000 2.1z"
                  fill="#1c9dff"
                />
                <g>
                  <path
                    d="M844.06 606.27a4 4 0 003.64 0 1.11 1.11 0 000-2.1 4 4 0 00-3.63 0c-1 .58-1.01 1.52-.01 2.1z"
                    fill="#fa5"
                  />
                  <path
                    d="M832.8 599.75a4.06 4.06 0 003.64 0 1.11 1.11 0 000-2.1 4 4 0 00-3.64 0 1.11 1.11 0 000 2.1z"
                    fill="#1c9dff"
                  />
                </g>
                <g>
                  <path
                    d="M827.39 596.67a4.06 4.06 0 003.64 0 1.11 1.11 0 000-2.1 4 4 0 00-3.64 0 1.11 1.11 0 000 2.1z"
                    fill="#fa5"
                  />
                  <path
                    d="M816.13 590.14a4 4 0 003.64 0 1.11 1.11 0 000-2.1 4 4 0 00-3.64 0c-1 .59-1 1.53 0 2.1z"
                    fill="#1c9dff"
                  />
                </g>
                <g>
                  <path
                    d="M810.72 587.06a4 4 0 003.64 0 1.11 1.11 0 000-2.1 4 4 0 00-3.64 0c-.99.59-1 1.53 0 2.1z"
                    fill="#fa5"
                  />
                  <path
                    d="M799.46 580.54a4 4 0 003.64 0c1-.59 1-1.53 0-2.1a4 4 0 00-3.64 0 1.11 1.11 0 000 2.1z"
                    fill="#1c9dff"
                  />
                </g>
                <g>
                  <path
                    d="M794.05 577.46a4 4 0 003.64 0 1.11 1.11 0 000-2.1 4.06 4.06 0 00-3.64 0 1.11 1.11 0 000 2.1z"
                    fill="#fa5"
                  />
                  <path
                    d="M782.79 570.94a4 4 0 003.63 0c1-.58 1-1.52 0-2.1a4.06 4.06 0 00-3.64 0 1.11 1.11 0 00.01 2.1z"
                    fill="#1c9dff"
                  />
                </g>
                <g>
                  <path
                    d="M777.38 567.86a4 4 0 003.64 0 1.11 1.11 0 000-2.1 4.06 4.06 0 00-3.64 0 1.11 1.11 0 000 2.1z"
                    fill="#fa5"
                  />
                  <path
                    d="M766.12 561.34a4 4 0 003.63 0c1-.58 1-1.52 0-2.1a4 4 0 00-3.63 0 1.11 1.11 0 000 2.1z"
                    fill="#1c9dff"
                  />
                </g>
                <g>
                  <path
                    d="M760.71 558.26a4 4 0 003.64 0 1.11 1.11 0 000-2.1 4 4 0 00-3.64 0 1.11 1.11 0 000 2.1z"
                    fill="#fa5"
                  />
                  <path
                    d="M749.45 551.74a4 4 0 003.63 0c1-.58 1-1.52 0-2.1a4 4 0 00-3.63 0c-1 .58-1.01 1.52 0 2.1z"
                    fill="#1c9dff"
                  />
                </g>
              </g>
            </g>
            <g>
              <path
                d="M465.17 479.74a4.07 4.07 0 003.69 0 1.13 1.13 0 000-2.13 4 4 0 00-3.68 0c-1.01.6-1.02 1.55-.01 2.13z"
                fill="#fa5"
              />
              <path
                d="M453.76 473.14a4.1 4.1 0 003.69 0 1.12 1.12 0 000-2.12 4 4 0 00-3.68 0 1.12 1.12 0 00-.01 2.12z"
                fill="#1c9dff"
              />
              <path
                d="M448.29 470a4.08 4.08 0 003.68 0 1.12 1.12 0 000-2.13 4.08 4.08 0 00-3.68 0 1.12 1.12 0 000 2.13z"
                fill="#fa5"
              />
              <path
                d="M436.87 463.41a4.1 4.1 0 003.69 0c1-.59 1-1.55 0-2.13a4.08 4.08 0 00-3.68 0c-1.01.59-1.02 1.55-.01 2.13z"
                fill="#1c9dff"
              />
              <path
                d="M431.4 460.29a4 4 0 003.68 0c1-.59 1-1.54 0-2.12a4 4 0 00-3.68 0 1.12 1.12 0 000 2.12z"
                fill="#fa5"
              />
              <path
                d="M420 453.68a4 4 0 003.68 0 1.12 1.12 0 000-2.13 4 4 0 00-3.68 0c-1 .6-1 1.55 0 2.13z"
                fill="#1c9dff"
              />
              <path
                d="M414.51 450.56a4.08 4.08 0 003.68 0c1-.59 1-1.55 0-2.13a4 4 0 00-3.68 0 1.12 1.12 0 000 2.13z"
                fill="#fa5"
              />
              <path
                d="M403.1 444a4.08 4.08 0 003.68 0 1.12 1.12 0 000-2.13 4.08 4.08 0 00-3.68 0 1.12 1.12 0 000 2.13z"
                fill="#1c9dff"
              />
              <path
                d="M397.62 440.84a4.08 4.08 0 003.68 0c1-.59 1-1.54 0-2.13a4.1 4.1 0 00-3.69 0 1.12 1.12 0 00.01 2.13z"
                fill="#fa5"
              />
              <path
                d="M386.21 434.23a4 4 0 003.68 0c1-.59 1-1.54 0-2.12a4 4 0 00-3.68 0 1.12 1.12 0 000 2.12z"
                fill="#1c9dff"
              />
              <path
                d="M380.73 431.11a4.08 4.08 0 003.68 0 1.12 1.12 0 000-2.13 4.1 4.1 0 00-3.69 0 1.13 1.13 0 00.01 2.13z"
                fill="#fa5"
              />
              <path
                d="M369.32 424.5a4 4 0 003.68 0c1-.59 1-1.55 0-2.13a4.07 4.07 0 00-3.69 0 1.12 1.12 0 00.01 2.13z"
                fill="#1c9dff"
              />
              <g>
                <path
                  d="M363.84 421.38a4.07 4.07 0 003.69 0 1.12 1.12 0 000-2.12 4.07 4.07 0 00-3.69 0 1.13 1.13 0 000 2.12z"
                  fill="#fa5"
                />
                <path
                  d="M352.43 414.78a4.1 4.1 0 003.69 0 1.13 1.13 0 000-2.13 4.1 4.1 0 00-3.69 0 1.13 1.13 0 000 2.13z"
                  fill="#1c9dff"
                />
              </g>
              <g>
                <path
                  d="M347 411.65a4.07 4.07 0 003.69 0 1.13 1.13 0 000-2.13 4.07 4.07 0 00-3.69 0 1.12 1.12 0 000 2.13z"
                  fill="#fa5"
                />
                <path
                  d="M335.54 405.05a4.1 4.1 0 003.69 0 1.13 1.13 0 000-2.13 4.1 4.1 0 00-3.69 0 1.13 1.13 0 000 2.13z"
                  fill="#1c9dff"
                />
              </g>
              <g>
                <path
                  d="M330.06 401.93a4.1 4.1 0 003.69 0 1.13 1.13 0 000-2.13 4.08 4.08 0 00-3.68 0 1.12 1.12 0 00-.01 2.13z"
                  fill="#fa5"
                />
                <path
                  d="M318.65 395.32a4.07 4.07 0 003.69 0 1.12 1.12 0 000-2.12 4.07 4.07 0 00-3.69 0 1.13 1.13 0 000 2.12z"
                  fill="#1c9dff"
                />
              </g>
              <g>
                <path
                  d="M313.18 392.2a4.08 4.08 0 003.68 0 1.12 1.12 0 000-2.13 4.08 4.08 0 00-3.68 0 1.12 1.12 0 000 2.13z"
                  fill="#fa5"
                />
                <path
                  d="M301.76 385.59a4.07 4.07 0 003.69 0c1-.59 1-1.55 0-2.13a4 4 0 00-3.68 0 1.12 1.12 0 00-.01 2.13z"
                  fill="#1c9dff"
                />
              </g>
              <g>
                <path
                  d="M296.29 382.47a4 4 0 003.68 0c1-.59 1-1.54 0-2.12a4 4 0 00-3.68 0c-1.01.58-1.02 1.54 0 2.12z"
                  fill="#fa5"
                />
                <path
                  d="M284.88 375.87a4.08 4.08 0 003.68 0 1.12 1.12 0 000-2.13 4.08 4.08 0 00-3.68 0 1.12 1.12 0 000 2.13z"
                  fill="#1c9dff"
                />
              </g>
              <g>
                <path
                  d="M279.4 372.74a4 4 0 003.68 0 1.12 1.12 0 000-2.13 4 4 0 00-3.68 0c-1.01.6-1.02 1.55 0 2.13z"
                  fill="#fa5"
                />
                <path
                  d="M268 366.14a4.08 4.08 0 003.68 0 1.12 1.12 0 000-2.13 4.08 4.08 0 00-3.68 0 1.12 1.12 0 000 2.13z"
                  fill="#1c9dff"
                />
              </g>
              <g>
                <path
                  d="M261.92 362.73a4.1 4.1 0 003.69 0 1.13 1.13 0 000-2.13 4.1 4.1 0 00-3.69 0 1.13 1.13 0 000 2.13z"
                  fill="#fa5"
                />
                <path
                  d="M250.51 356.13a4.1 4.1 0 003.69 0 1.13 1.13 0 000-2.13 4.1 4.1 0 00-3.69 0 1.13 1.13 0 000 2.13z"
                  fill="#1c9dff"
                />
                <path
                  d="M245 353a4.07 4.07 0 003.69 0 1.13 1.13 0 000-2.13 4.1 4.1 0 00-3.69 0 1.12 1.12 0 000 2.13z"
                  fill="#fa5"
                />
                <path
                  d="M233.62 346.4a4.1 4.1 0 003.69 0 1.12 1.12 0 000-2.12 4.07 4.07 0 00-3.69 0 1.13 1.13 0 000 2.12z"
                  fill="#1c9dff"
                />
                <path
                  d="M228.14 343.28a4.1 4.1 0 003.69 0 1.13 1.13 0 000-2.13 4.08 4.08 0 00-3.68 0c-1.01.59-1.02 1.54-.01 2.13z"
                  fill="#fa5"
                />
                <path
                  d="M216.73 336.67a4.1 4.1 0 003.69 0 1.13 1.13 0 000-2.13 4.08 4.08 0 00-3.68 0c-1.02.59-1.02 1.55-.01 2.13z"
                  fill="#1c9dff"
                />
                <path
                  d="M211.26 333.55a4 4 0 003.68 0c1-.59 1-1.54 0-2.12a4 4 0 00-3.68 0 1.12 1.12 0 000 2.12z"
                  fill="#fa5"
                />
                <path
                  d="M199.84 326.94a4.07 4.07 0 003.69 0 1.12 1.12 0 000-2.13 4 4 0 00-3.68 0c-1.01.6-1.02 1.55-.01 2.13z"
                  fill="#1c9dff"
                />
                <path
                  d="M194.37 323.82a4 4 0 003.68 0c1-.59 1-1.55 0-2.13a4 4 0 00-3.68 0 1.12 1.12 0 000 2.13z"
                  fill="#fa5"
                />
                <path
                  d="M183 317.22a4.08 4.08 0 003.68 0 1.12 1.12 0 000-2.13 4.08 4.08 0 00-3.68 0 1.12 1.12 0 000 2.13z"
                  fill="#1c9dff"
                />
                <path
                  d="M177.48 314.1a4.08 4.08 0 003.68 0 1.12 1.12 0 000-2.13 4.08 4.08 0 00-3.68 0 1.12 1.12 0 000 2.13z"
                  fill="#fa5"
                />
                <path
                  d="M166.07 307.49a4 4 0 003.68 0c1-.59 1-1.54 0-2.12a4 4 0 00-3.68 0 1.12 1.12 0 000 2.12z"
                  fill="#1c9dff"
                />
                <g>
                  <path
                    d="M160.59 304.37a4.08 4.08 0 003.68 0c1-.59 1-1.54 0-2.13a4.1 4.1 0 00-3.69 0 1.13 1.13 0 00.01 2.13z"
                    fill="#fa5"
                  />
                  <path
                    d="M149.18 297.76a4 4 0 003.68 0c1-.59 1-1.55 0-2.13a4 4 0 00-3.68 0 1.12 1.12 0 000 2.13z"
                    fill="#1c9dff"
                  />
                </g>
                <g>
                  <path
                    d="M143.7 294.64a4.07 4.07 0 003.69 0 1.12 1.12 0 000-2.12 4.07 4.07 0 00-3.69 0 1.13 1.13 0 000 2.12z"
                    fill="#fa5"
                  />
                  <path
                    d="M132.29 288a4 4 0 003.68 0 1.12 1.12 0 000-2.13 4.1 4.1 0 00-3.69 0 1.12 1.12 0 00.01 2.13z"
                    fill="#1c9dff"
                  />
                </g>
                <g>
                  <path
                    d="M126.81 284.91a4.07 4.07 0 003.69 0 1.13 1.13 0 000-2.13 4.07 4.07 0 00-3.69 0 1.12 1.12 0 000 2.13z"
                    fill="#fa5"
                  />
                  <path
                    d="M115.4 278.31a4.1 4.1 0 003.69 0 1.13 1.13 0 000-2.13 4.1 4.1 0 00-3.69 0 1.13 1.13 0 000 2.13z"
                    fill="#1c9dff"
                  />
                </g>
                <g>
                  <path
                    d="M109.92 275.19a4.1 4.1 0 003.69 0 1.13 1.13 0 000-2.13 4.1 4.1 0 00-3.69 0 1.13 1.13 0 000 2.13z"
                    fill="#fa5"
                  />
                  <path
                    d="M98.51 268.58a4.07 4.07 0 003.69 0 1.12 1.12 0 000-2.12 4.07 4.07 0 00-3.69 0 1.13 1.13 0 000 2.12z"
                    fill="#1c9dff"
                  />
                </g>
                <path
                  d="M93 265.46a4.1 4.1 0 003.69 0 1.13 1.13 0 000-2.13 4.08 4.08 0 00-3.68 0c-1.01.59-1.01 1.54-.01 2.13z"
                  fill="#fa5"
                />
              </g>
              <g>
                <path
                  d="M666 595.28a4 4 0 003.64 0 1.11 1.11 0 000-2.1 4 4 0 00-3.63 0c-1.01.59-1.01 1.53-.01 2.1z"
                  fill="#fa5"
                />
                <path
                  d="M654.69 588.76a4 4 0 003.64 0 1.11 1.11 0 000-2.1 4 4 0 00-3.64 0c-.99.59-1 1.53 0 2.1z"
                  fill="#1c9dff"
                />
                <path
                  d="M649.28 585.68a4 4 0 003.64 0c1-.58 1-1.52 0-2.09a4 4 0 00-3.63 0c-1 .57-1.01 1.51-.01 2.09z"
                  fill="#fa5"
                />
                <path
                  d="M638 579.16a4 4 0 003.64 0 1.11 1.11 0 000-2.1 4.06 4.06 0 00-3.64 0 1.11 1.11 0 000 2.1z"
                  fill="#1c9dff"
                />
                <path
                  d="M632.61 576.08a4 4 0 003.64 0 1.11 1.11 0 000-2.1 4.06 4.06 0 00-3.64 0 1.11 1.11 0 000 2.1z"
                  fill="#fa5"
                />
                <path
                  d="M621.35 569.56a4 4 0 003.64 0 1.11 1.11 0 000-2.1 4 4 0 00-3.64 0 1.11 1.11 0 000 2.1z"
                  fill="#1c9dff"
                />
                <path
                  d="M615.94 566.48a4 4 0 003.64 0 1.11 1.11 0 000-2.1 4 4 0 00-3.64 0 1.11 1.11 0 000 2.1z"
                  fill="#fa5"
                />
                <path
                  d="M604.68 560a4 4 0 003.64 0 1.11 1.11 0 000-2.1 4 4 0 00-3.64 0 1.11 1.11 0 000 2.1z"
                  fill="#1c9dff"
                />
                <path
                  d="M599.27 556.88a4.06 4.06 0 003.64 0 1.11 1.11 0 000-2.1 4 4 0 00-3.64 0 1.11 1.11 0 000 2.1z"
                  fill="#fa5"
                />
                <path
                  d="M588 550.36a4 4 0 003.63 0c1-.58 1-1.52 0-2.1a4 4 0 00-3.64 0 1.11 1.11 0 00.01 2.1z"
                  fill="#1c9dff"
                />
                <path
                  d="M582.6 547.27a4 4 0 003.64 0 1.11 1.11 0 000-2.1 4 4 0 00-3.64 0c-1 .59-1 1.53 0 2.1z"
                  fill="#fa5"
                />
                <path
                  d="M571.34 540.75a4 4 0 003.63 0c1-.58 1-1.52 0-2.1a4 4 0 00-3.64 0c-.99.59-.99 1.53.01 2.1z"
                  fill="#1c9dff"
                />
                <g>
                  <path
                    d="M565.93 537.67a4 4 0 003.64 0c1-.59 1-1.53 0-2.1a4 4 0 00-3.64 0 1.11 1.11 0 000 2.1z"
                    fill="#fa5"
                  />
                  <path
                    d="M554.67 531.15a4 4 0 003.63 0c1-.59 1-1.53 0-2.1a4 4 0 00-3.63 0c-1 .58-1.01 1.52 0 2.1z"
                    fill="#1c9dff"
                  />
                </g>
                <g>
                  <path
                    d="M549.26 528.07a4 4 0 003.64 0 1.11 1.11 0 000-2.1 4.06 4.06 0 00-3.64 0 1.11 1.11 0 000 2.1z"
                    fill="#fa5"
                  />
                  <path
                    d="M538 521.55a4 4 0 003.63 0 1.11 1.11 0 000-2.1 4 4 0 00-3.63 0c-1 .55-1 1.55 0 2.1z"
                    fill="#1c9dff"
                  />
                </g>
                <g>
                  <path
                    d="M532.59 518.47a4 4 0 003.63 0c1-.58 1-1.52 0-2.1a4 4 0 00-3.64 0 1.11 1.11 0 00.01 2.1z"
                    fill="#fa5"
                  />
                  <path
                    d="M521.32 512a4 4 0 003.64 0 1.11 1.11 0 000-2.1 4 4 0 00-3.63 0c-1 .53-1.01 1.47-.01 2.1z"
                    fill="#1c9dff"
                  />
                </g>
                <g>
                  <path
                    d="M515.92 508.87a4 4 0 003.63 0c1-.58 1-1.52 0-2.1a4 4 0 00-3.64 0 1.11 1.11 0 00.01 2.1z"
                    fill="#fa5"
                  />
                  <path
                    d="M504.65 502.35a4.06 4.06 0 003.64 0 1.11 1.11 0 000-2.1 4 4 0 00-3.64 0 1.11 1.11 0 000 2.1z"
                    fill="#1c9dff"
                  />
                </g>
                <g>
                  <path
                    d="M499.25 499.26a4 4 0 003.63 0c1-.58 1-1.52 0-2.1a4 4 0 00-3.63 0c-1 .59-1.01 1.53 0 2.1z"
                    fill="#fa5"
                  />
                  <path
                    d="M488 492.74a4 4 0 003.64 0 1.11 1.11 0 000-2.1 4 4 0 00-3.64 0c-1 .59-1 1.53 0 2.1z"
                    fill="#1c9dff"
                  />
                </g>
                <g>
                  <path
                    d="M482.57 489.66a4 4 0 003.64 0c1-.59 1-1.53 0-2.1a4 4 0 00-3.63 0c-1 .58-1.01 1.52-.01 2.1z"
                    fill="#fa5"
                  />
                  <path
                    d="M471.31 483.14a4 4 0 003.64 0c1-.59 1-1.53 0-2.1a4 4 0 00-3.64 0 1.11 1.11 0 000 2.1z"
                    fill="#1c9dff"
                  />
                </g>
              </g>
              <g>
                <path
                  d="M866.14 710.39a4 4 0 003.64 0 1.11 1.11 0 000-2.1 4 4 0 00-3.64 0c-.99.59-1 1.53 0 2.1z"
                  fill="#fa5"
                />
                <path
                  d="M854.88 703.87a4 4 0 003.64 0 1.11 1.11 0 000-2.1 4 4 0 00-3.64 0c-1 .59-1 1.53 0 2.1z"
                  fill="#1c9dff"
                />
                <path
                  d="M849.47 700.79a4 4 0 003.64 0c1-.59 1-1.53 0-2.1a4 4 0 00-3.64 0 1.11 1.11 0 000 2.1z"
                  fill="#fa5"
                />
                <path
                  d="M838.21 694.27a4 4 0 003.63 0c1-.59 1-1.53 0-2.1a4 4 0 00-3.64 0 1.11 1.11 0 00.01 2.1z"
                  fill="#1c9dff"
                />
                <path
                  d="M832.8 691.19a4 4 0 003.64 0 1.11 1.11 0 000-2.1 4.06 4.06 0 00-3.64 0 1.11 1.11 0 000 2.1z"
                  fill="#fa5"
                />
                <path
                  d="M821.54 684.67a4 4 0 003.63 0c1-.58 1-1.52 0-2.1a4.06 4.06 0 00-3.64 0 1.11 1.11 0 00.01 2.1z"
                  fill="#1c9dff"
                />
                <path
                  d="M816.13 681.59a4 4 0 003.64 0 1.11 1.11 0 000-2.1 4 4 0 00-3.64 0 1.11 1.11 0 000 2.1z"
                  fill="#fa5"
                />
                <path
                  d="M804.87 675.07a4 4 0 003.63 0c1-.58 1-1.52 0-2.1a4 4 0 00-3.63 0c-1 .58-1.01 1.52 0 2.1z"
                  fill="#1c9dff"
                />
                <path
                  d="M799.46 672a4.06 4.06 0 003.64 0 1.11 1.11 0 000-2.1 4 4 0 00-3.64 0 1.11 1.11 0 000 2.1z"
                  fill="#fa5"
                />
                <path
                  d="M788.19 665.47a4.06 4.06 0 003.64 0 1.11 1.11 0 000-2.1 4 4 0 00-3.63 0c-1 .63-1.01 1.52-.01 2.1z"
                  fill="#1c9dff"
                />
                <path
                  d="M782.79 662.38a4 4 0 003.63 0c1-.58 1-1.52 0-2.1a4 4 0 00-3.64 0c-.99.59-.99 1.53.01 2.1z"
                  fill="#fa5"
                />
                <path
                  d="M771.52 655.86a4 4 0 003.64 0 1.11 1.11 0 000-2.1 4 4 0 00-3.63 0c-1 .59-1.01 1.53-.01 2.1z"
                  fill="#1c9dff"
                />
                <g>
                  <path
                    d="M766.12 652.78a4 4 0 003.63 0c1-.59 1-1.53 0-2.1a4 4 0 00-3.64 0 1.11 1.11 0 00.01 2.1z"
                    fill="#fa5"
                  />
                  <path
                    d="M754.85 646.26a4 4 0 003.64 0c1-.59 1-1.53 0-2.1a4 4 0 00-3.64 0 1.11 1.11 0 000 2.1z"
                    fill="#1c9dff"
                  />
                </g>
                <g>
                  <path
                    d="M749.45 643.18a4 4 0 003.63 0c1-.58 1-1.52 0-2.1a4 4 0 00-3.63 0c-1 .58-1.01 1.52 0 2.1z"
                    fill="#fa5"
                  />
                  <path
                    d="M738.18 636.66a4 4 0 003.64 0 1.11 1.11 0 000-2.1 4.06 4.06 0 00-3.64 0 1.11 1.11 0 000 2.1z"
                    fill="#1c9dff"
                  />
                </g>
                <g>
                  <path
                    d="M732.77 633.58a4 4 0 003.64 0 1.11 1.11 0 000-2.1 4 4 0 00-3.63 0c-1 .58-1.01 1.52-.01 2.1z"
                    fill="#fa5"
                  />
                  <path
                    d="M721.51 627.06a4 4 0 003.64 0 1.11 1.11 0 000-2.1 4 4 0 00-3.64 0 1.11 1.11 0 000 2.1z"
                    fill="#1c9dff"
                  />
                </g>
                <g>
                  <path
                    d="M716.1 624a4 4 0 003.64 0 1.11 1.11 0 000-2.1 4 4 0 00-3.63 0c-1 .56-1.01 1.5-.01 2.1z"
                    fill="#fa5"
                  />
                  <path
                    d="M704.84 617.46a4.06 4.06 0 003.64 0 1.11 1.11 0 000-2.1 4 4 0 00-3.64 0 1.11 1.11 0 000 2.1z"
                    fill="#1c9dff"
                  />
                </g>
                <g>
                  <path
                    d="M699.43 614.38a4.06 4.06 0 003.64 0 1.11 1.11 0 000-2.1 4 4 0 00-3.64 0 1.11 1.11 0 000 2.1z"
                    fill="#fa5"
                  />
                  <path
                    d="M688.17 607.85a4 4 0 003.64 0 1.11 1.11 0 000-2.1 4 4 0 00-3.64 0c-1 .59-1 1.53 0 2.1z"
                    fill="#1c9dff"
                  />
                </g>
                <g>
                  <path
                    d="M682.76 604.77a4 4 0 003.64 0 1.11 1.11 0 000-2.1 4 4 0 00-3.64 0c-.99.59-1 1.53 0 2.1z"
                    fill="#fa5"
                  />
                  <path
                    d="M671.5 598.25a4 4 0 003.64 0c1-.59 1-1.53 0-2.1a4 4 0 00-3.64 0 1.11 1.11 0 000 2.1z"
                    fill="#1c9dff"
                  />
                </g>
              </g>
            </g>
            <g>
              <path
                fill="#949692"
                d="M835.89 580.02h-3.35l13.42-7.27h3.45v-.8h-1.96l1.24-.67h-7.25l-19.14 10.36h7.25l1.5-.82h4.85l-.01-.8z"
              />
              <path
                fill="#a8a8a8"
                d="M835.49 574.24v6.57l.81-.47v-6.57l-.81.47z"
              />
              <path
                fill="#7a7a7a"
                d="M835.49 574.24l-.81-.47v6.57l.81.47v-6.57z"
              />
              <path
                fill="#a8a8a8"
                d="M849.41 566.18v6.57l.81-.46v-6.57l-.81.46z"
              />
              <path
                fill="#7a7a7a"
                d="M849.41 566.18l-.81-.47v6.57l.81.47v-6.57z"
              />
              <g>
                <path
                  fill="#cc4935"
                  d="M833.61 573.32v5.5l17.88-10.35v-5.5l-17.88 10.35z"
                />
                <path
                  fill="#8a2212"
                  d="M833.61 573.32l-1.63-.94v5.5l1.63.94v-5.5z"
                />
                <path
                  fill="#ffa1a1"
                  d="M831.98 572.38l17.89-10.35 1.62.94-17.88 10.35-1.63-.94z"
                />
              </g>
            </g>
            <g>
              <path
                fill="#949692"
                d="M741.47 527.22h-3.36l13.42-7.26h3.46l-.01-.81h-1.96l1.24-.67h-7.24l-19.14 10.36h7.24l1.5-.81h4.85v-.81z"
              />
              <path
                fill="#a8a8a8"
                d="M741.07 521.44v6.57l.81-.47v-6.57l-.81.47z"
              />
              <path
                fill="#7a7a7a"
                d="M741.07 521.44l-.82-.47v6.57l.82.47v-6.57z"
              />
              <path
                fill="#a8a8a8"
                d="M754.99 513.39v6.57l.8-.47v-6.57l-.8.47z"
              />
              <path
                fill="#7a7a7a"
                d="M754.99 513.39l-.82-.48v6.58l.82.47v-6.57z"
              />
              <g>
                <path
                  fill="#e1a70c"
                  d="M739.18 520.52v5.5l17.88-10.35v-5.5l-17.88 10.35z"
                />
                <path
                  fill="#9f7400"
                  d="M739.18 520.52l-1.62-.93v5.49l1.62.94v-5.5z"
                />
                <path
                  fill="#f3ab31"
                  d="M737.56 519.59l17.88-10.35 1.62.93-17.88 10.35-1.62-.93z"
                />
              </g>
            </g>
            <g>
              <path
                fill="#949692"
                d="M625.46 459.72h-3.36l13.42-7.27h3.45v-.8h-1.96l1.24-.67h-7.24l-19.14 10.35h7.24l1.5-.81h4.85v-.8z"
              />
              <path
                fill="#a8a8a8"
                d="M625.06 453.94v6.57l.8-.47v-6.57l-.8.47z"
              />
              <path
                fill="#7a7a7a"
                d="M625.06 453.94l-.82-.47v6.57l.82.47v-6.57z"
              />
              <path
                fill="#a8a8a8"
                d="M638.98 445.88v6.57l.8-.46v-6.57l-.8.46z"
              />
              <path
                fill="#7a7a7a"
                d="M638.98 445.88l-.82-.47v6.57l.82.47v-6.57z"
              />
              <g>
                <path
                  fill="#4f75a8"
                  d="M623.17 453.02v5.49l17.88-10.34v-5.5l-17.88 10.35z"
                />
                <path
                  fill="#233f66"
                  d="M623.17 453.02l-1.62-.94v5.5l1.62.93v-5.49z"
                />
                <path
                  fill="#b8d3db"
                  d="M621.55 452.08l17.88-10.35 1.62.94-17.88 10.35-1.62-.94z"
                />
              </g>
            </g>
            <g>
              <path
                fill="#949692"
                d="M481.89 377.75h-3.36l13.42-7.26h3.46l-.01-.81h-1.96l1.25-.67h-7.25l-19.14 10.36h7.24l1.51-.81h4.84v-.81z"
              />
              <path
                fill="#a8a8a8"
                d="M481.49 371.97v6.57l.81-.46v-6.57l-.81.46z"
              />
              <path
                fill="#7a7a7a"
                d="M481.49 371.97l-.81-.47v6.57l.81.47v-6.57z"
              />
              <path
                fill="#a8a8a8"
                d="M495.41 363.92v6.57l.8-.47v-6.57l-.8.47z"
              />
              <path
                fill="#7a7a7a"
                d="M495.41 363.92l-.82-.47v6.57l.82.47v-6.57z"
              />
              <g>
                <path
                  fill="#81c232"
                  d="M479.6 371.05v5.5l17.89-10.35v-5.5l-17.89 10.35z"
                />
                <path
                  fill="#4e8011"
                  d="M479.6 371.05l-1.62-.93v5.5l1.62.93v-5.5z"
                />
                <path
                  fill="#e6f59b"
                  d="M477.98 370.12l17.88-10.35 1.63.93-17.89 10.35-1.62-.93z"
                />
              </g>
            </g>
            <g>
              <path
                fill="#949692"
                d="M330.71 289.92h-3.36l13.42-7.26h3.46l-.01-.81h-1.96l1.24-.67h-7.24l-19.14 10.36h7.24l1.5-.81h4.85v-.81z"
              />
              <path
                fill="#a8a8a8"
                d="M330.31 284.14v6.57l.8-.46v-6.57l-.8.46z"
              />
              <path
                fill="#7a7a7a"
                d="M330.31 284.14l-.82-.47v6.57l.82.47v-6.57z"
              />
              <path
                fill="#a8a8a8"
                d="M344.23 276.09v6.57l.8-.47v-6.57l-.8.47z"
              />
              <path
                fill="#7a7a7a"
                d="M344.23 276.09l-.82-.47v6.57l.82.47v-6.57z"
              />
              <g>
                <path
                  fill="#e1a70c"
                  d="M328.42 283.22v5.5l17.88-10.35v-5.49l-17.88 10.34z"
                />
                <path
                  fill="#9f7400"
                  d="M328.42 283.22l-1.62-.93v5.49l1.62.94v-5.5z"
                />
                <path
                  fill="#f3ab31"
                  d="M326.8 282.29l17.88-10.35 1.62.94-17.88 10.34-1.62-.93z"
                />
              </g>
            </g>
            <g>
              <path
                fill="#949692"
                d="M227.97 231.56h-3.35l13.42-7.27h3.45v-.8h-1.96l1.24-.67h-7.25l-19.14 10.36h7.25l1.5-.82h4.85l-.01-.8z"
              />
              <path
                fill="#a8a8a8"
                d="M227.57 225.78v6.57l.81-.47v-6.57l-.81.47z"
              />
              <path
                fill="#7a7a7a"
                d="M227.57 225.78l-.81-.47v6.57l.81.47v-6.57z"
              />
              <path
                fill="#a8a8a8"
                d="M241.49 217.72v6.57l.81-.46v-6.57l-.81.46z"
              />
              <path
                fill="#7a7a7a"
                d="M241.49 217.72l-.81-.47v6.57l.81.47v-6.57z"
              />
              <g>
                <path
                  fill="#cc4935"
                  d="M225.69 224.86v5.5l17.88-10.35v-5.5l-17.88 10.35z"
                />
                <path
                  fill="#8a2212"
                  d="M225.69 224.86l-1.63-.94v5.5l1.63.94v-5.5z"
                />
                <path
                  fill="#ffa1a1"
                  d="M224.06 223.92l17.88-10.35 1.63.94-17.88 10.35-1.63-.94z"
                />
              </g>
            </g>
            <g id="expeditedbackground__truck3">
              <path
                fill="#b4c4cc"
                d="M871.64 589.08v6.97l1.21-.68v-7l-1.21.71z"
              />
              <path
                d="M881.79 598.13a2.7 2.7 0 01-1.08 2.44l-2.13 1.24c-.69.38-.25-.5-1.31-1.11a8.46 8.46 0 01-3.84-6.63c0-1.2-1.12-1.21-.43-1.62l2.26-1.25a2.73 2.73 0 012.68.3 8.44 8.44 0 013.85 6.63z"
                fill="#474756"
              />
              <path
                d="M879.56 599.39c0 2.44-1.72 3.42-3.84 2.2a8.48 8.48 0 01-3.85-6.64c0-2.43 1.72-3.41 3.85-2.19a8.49 8.49 0 013.84 6.63z"
                fill="#545466"
              />
              <path
                d="M875.69 594.51c-1.37-.79-2.49-.15-2.49 1.42a5.5 5.5 0 002.49 4.29c1.37.79 2.48.15 2.48-1.42a5.5 5.5 0 00-2.48-4.29z"
                fill="url(#expeditedbackground__linear-gradient)"
              />
              <path
                d="M876.57 599.65a5.48 5.48 0 01-2.49-4.29 2.13 2.13 0 01.3-1.17c-.71.1-1.18.72-1.18 1.74a5.5 5.5 0 002.49 4.29c.94.55 1.77.41 2.19-.25a2 2 0 01-1.31-.32z"
                fill="url(#expeditedbackground__linear-gradient-2)"
              />
              <path
                d="M877.41 598.58c0 1-.69 1.36-1.53.88a3.39 3.39 0 01-1.54-2.65c0-1 .69-1.36 1.54-.87a3.39 3.39 0 011.53 2.64z"
                style={{
                  mixBlendMode: "multiply",
                }}
                fill="url(#expeditedbackground__linear-gradient-3)"
              />
              <path
                d="M877.29 598c0 .83-.59 1.16-1.3.74a2.84 2.84 0 01-1.3-2.24c0-.82.58-1.15 1.3-.74a2.9 2.9 0 011.3 2.24z"
                fill="url(#expeditedbackground__linear-gradient-4)"
              />
              <path
                d="M876.93 598.27c0 .82-.58 1.15-1.3.74a2.87 2.87 0 01-1.29-2.24c0-.82.58-1.15 1.29-.74a2.85 2.85 0 011.3 2.24z"
                fill="#e7f1f7"
              />
              <path
                d="M881.64 598.12a2.72 2.72 0 01-1.08 2.45l-2 1.19c-.7.39-.25-.5-1.31-1.11a8.51 8.51 0 01-3.87-6.67c0-1.21-1.12-1.22-.43-1.63l2.18-1.2a2.76 2.76 0 012.7.29 8.54 8.54 0 013.81 6.68z"
                fill="#4c4c5e"
              />
              <path
                d="M879.5 599.33c0 2.46-1.73 3.44-3.87 2.21a8.54 8.54 0 01-3.87-6.67c0-2.45 1.74-3.44 3.87-2.21a8.52 8.52 0 013.87 6.67z"
                fill="#474756"
              />
              <path
                d="M878.39 598.69c0 1.75-1.24 2.45-2.76 1.57a6.06 6.06 0 01-2.75-4.75c0-1.75 1.23-2.45 2.75-1.57a6.09 6.09 0 012.76 4.75z"
                fill="#e7f1f7"
              />
              <path
                d="M878.39 598.69A2.39 2.39 0 01878 600a1.75 1.75 0 01-1.93-.11 5.67 5.67 0 01-2.57-4.44c0-1.18.6-1.85 1.47-1.82a2.59 2.59 0 01.62.28 6.09 6.09 0 012.8 4.78z"
                fill="#e7f1f7"
              />
              <path
                d="M874.06 593.6a1.91 1.91 0 00-.8 1.76 6.07 6.07 0 002.76 4.75 2.2 2.2 0 001.57.34 1.9 1.9 0 01-2-.19 6.06 6.06 0 01-2.75-4.75c.04-1.07.5-1.75 1.22-1.91z"
                fill="#474756"
              />
              <path
                d="M876.68 597.53c0 .46-.32.64-.72.41a1.57 1.57 0 01-.72-1.24c0-.46.32-.64.72-.41a1.57 1.57 0 01.72 1.24z"
                fill="url(#expeditedbackground__radial-gradient)"
              />
              <path
                d="M875.66 594.73a.79.79 0 00.37.62c.19.12.36 0 .36-.2a.81.81 0 00-.36-.62c-.2-.12-.37-.02-.37.2zm0 4.22a.79.79 0 00.37.62.22.22 0 00.36-.2.81.81 0 00-.36-.62c-.2-.12-.37-.03-.37.25zm-.68-4.29c-.14-.24-.37-.37-.51-.29s-.14.34 0 .58.37.38.51.3.14-.34.02-.59zm2.09 4.78c.14.24.37.37.51.29s.14-.34 0-.58-.37-.38-.51-.3-.14.34 0 .59zm-3.24-3.66a.78.78 0 00.36.62c.2.12.36 0 .36-.2a.78.78 0 00-.36-.62c-.19-.12-.36-.03-.36.2zm3.67 2.12a.78.78 0 00.36.62c.2.12.36 0 .36-.2a.78.78 0 00-.36-.62c-.2-.12-.36-.02-.36.2zm-3 0c.14.24.37.37.51.29s.14-.34 0-.58-.37-.38-.51-.3-.17.38-.03.63zm2.6-1.49c.14.25.37.38.51.3s.14-.34 0-.59-.37-.37-.51-.29-.17.38-.03.62z"
                fill="#474756"
              />
              <path
                d="M877.14 597.53a.74.74 0 01-.3.68l-.45.27c-.19.11-.07-.14-.36-.31a2.35 2.35 0 01-1.07-1.84c0-.33-.31-.33-.12-.44l.48-.28a.8.8 0 01.75.08 2.36 2.36 0 011.07 1.84z"
                fill="#545466"
              />
              <path
                d="M876.66 597.81c0 .68-.47 1-1.06.61a2.36 2.36 0 01-1.07-1.84c0-.68.48-1 1.07-.61a2.33 2.33 0 011.06 1.84z"
                fill="#545466"
              />
              <path
                d="M890 603a2.7 2.7 0 01-1.08 2.44l-2.13 1.24c-.7.38-.25-.5-1.31-1.11a8.46 8.46 0 01-3.84-6.63c0-1.2-1.12-1.21-.43-1.62l2.26-1.25a2.73 2.73 0 012.68.3A8.44 8.44 0 01890 603z"
                fill="#474756"
              />
              <path
                d="M887.81 604.25c0 2.44-1.72 3.42-3.85 2.2a8.49 8.49 0 01-3.84-6.64c0-2.43 1.72-3.41 3.84-2.19a8.47 8.47 0 013.85 6.63z"
                fill="#545466"
              />
              <path
                d="M883.93 599.37c-1.37-.79-2.48-.15-2.48 1.42a5.49 5.49 0 002.48 4.29c1.37.79 2.49.15 2.49-1.42a5.51 5.51 0 00-2.49-4.29z"
                fill="url(#expeditedbackground__linear-gradient-5)"
              />
              <path
                d="M884.82 604.51a5.48 5.48 0 01-2.49-4.29 2.13 2.13 0 01.3-1.17c-.71.1-1.18.72-1.18 1.74a5.49 5.49 0 002.48 4.29c1 .55 1.78.41 2.2-.25a2 2 0 01-1.31-.32z"
                fill="url(#expeditedbackground__linear-gradient-6)"
              />
              <path
                d="M885.66 603.44c0 1-.69 1.36-1.54.88a3.41 3.41 0 01-1.53-2.65c0-1 .69-1.36 1.53-.87a3.37 3.37 0 011.54 2.64z"
                style={{
                  mixBlendMode: "multiply",
                }}
                fill="url(#expeditedbackground__linear-gradient-7)"
              />
              <path
                d="M885.53 602.88c0 .83-.58 1.16-1.29.74a2.84 2.84 0 01-1.3-2.24c0-.82.58-1.15 1.3-.74a2.89 2.89 0 011.29 2.24z"
                fill="url(#expeditedbackground__linear-gradient-8)"
              />
              <path
                d="M885.18 603.13c0 .82-.58 1.15-1.3.74a2.85 2.85 0 01-1.3-2.24c0-.82.58-1.15 1.3-.74a2.85 2.85 0 011.3 2.24z"
                fill="#e7f1f7"
              />
              <path
                d="M890 603a2.72 2.72 0 01-1.08 2.46l-2 1.19c-.7.39-.25-.5-1.32-1.11a8.54 8.54 0 01-3.86-6.67c0-1.22-1.12-1.23-.44-1.63l2.18-1.21a2.77 2.77 0 012.7.3A8.51 8.51 0 01890 603z"
                fill="#4c4c5e"
              />
              <path
                d="M887.86 604.2c0 2.45-1.74 3.44-3.87 2.21a8.53 8.53 0 01-3.87-6.68c0-2.45 1.73-3.43 3.87-2.2a8.54 8.54 0 013.87 6.67z"
                fill="#474756"
              />
              <path
                d="M886.74 603.56c0 1.75-1.23 2.45-2.75 1.57a6.09 6.09 0 01-2.76-4.75c0-1.75 1.24-2.45 2.76-1.57a6 6 0 012.75 4.75z"
                fill="#e7f1f7"
              />
              <path
                d="M886.74 603.56a2.31 2.31 0 01-.35 1.34 1.72 1.72 0 01-1.92-.12 5.67 5.67 0 01-2.58-4.43c0-1.18.61-1.85 1.47-1.82a2.84 2.84 0 01.63.28 6 6 0 012.75 4.75z"
                fill="#e7f1f7"
              />
              <path
                d="M882.41 598.46a1.93 1.93 0 00-.79 1.77 6.08 6.08 0 002.75 4.75 2.23 2.23 0 001.58.34 2 2 0 01-2-.19 6.09 6.09 0 01-2.76-4.75c.04-1.08.51-1.76 1.22-1.92z"
                fill="#474756"
              />
              <path
                d="M885 602.4a.44.44 0 01-.72.41 1.6 1.6 0 01-.73-1.24c0-.46.33-.65.73-.42a1.62 1.62 0 01.72 1.25z"
                fill="url(#expeditedbackground__radial-gradient-2)"
              />
              <path
                d="M884 599.6a.78.78 0 00.36.62c.2.12.36 0 .36-.2a.81.81 0 00-.36-.63c-.18-.11-.36-.02-.36.21zm0 4.22a.79.79 0 00.36.62c.2.11.36 0 .36-.21a.79.79 0 00-.36-.62c-.18-.11-.36-.02-.36.21zm-.68-4.29c-.15-.24-.37-.37-.51-.29s-.14.34 0 .58.36.37.51.29.16-.34.02-.58zm2.09 4.77c.14.25.36.38.5.3s.14-.34 0-.59-.36-.37-.5-.29-.13.34.02.58zm-3.25-3.65a.79.79 0 00.36.62c.2.11.36 0 .36-.21a.81.81 0 00-.36-.62c-.18-.11-.34-.02-.34.21zm3.68 2.12a.78.78 0 00.36.62c.2.12.36 0 .36-.2a.81.81 0 00-.36-.63c-.2-.11-.34-.02-.34.21zm-3 0c.14.25.36.38.51.3s.14-.35 0-.59-.37-.37-.51-.29-.15.37-.01.61zm2.6-1.48c.14.24.36.37.5.29s.14-.34 0-.58-.36-.37-.5-.29-.16.37-.01.61z"
                fill="#474756"
              />
              <path
                d="M885.49 602.4a.77.77 0 01-.29.68l-.45.26c-.2.11-.07-.13-.37-.3a2.36 2.36 0 01-1.06-1.84c0-.33-.31-.34-.12-.45l.48-.27a.75.75 0 01.75.08 2.33 2.33 0 011.06 1.84z"
                fill="#545466"
              />
              <path
                d="M885 602.68c0 .67-.48.94-1.07.6a2.33 2.33 0 01-1.06-1.83c0-.68.47-1 1.06-.61a2.35 2.35 0 011.07 1.84z"
                fill="#545466"
              />
              <g>
                <path
                  fill="#9aa0a6"
                  d="M904.48 608.65v3.67l-12.38-7.19v-3.65l12.38 7.17zM904.48 608.65v3.67l3.48-1.98v-3.68l-3.48 1.99z"
                />
                <path
                  fill="url(#expeditedbackground__linear-gradient-9)"
                  d="M907.96 606.66l-3.48 1.99-12.38-7.17 3.48-1.99 12.38 7.17z"
                />
              </g>
              <g>
                <path
                  fill="#8c9399"
                  d="M869.2 587.89v4.67l-.46-.36v-4.67l.46.36z"
                />
                <path
                  fill="#8c9399"
                  d="M869.19 587.89v4.67l11.14-6.26v-4.68l-11.14 6.27z"
                />
                <path
                  fill="#e7f1f7"
                  d="M880.33 581.62l-11.14 6.27-.45-.36 11.14-6.26.45.35z"
                />
              </g>
              <path
                fill="#c5d4dd"
                d="M889.77 599.54v6.97l-1.24-.72v-5.54l-16.88-9.75v5.54l-1.24-.71v-6.96l19.36 11.17z"
              />
              <path
                fill="#b4c4cc"
                d="M889.78 599.55v6.97l1.21-.67v-7.01l-1.21.71z"
              />
              <g>
                <path
                  fill="#b4c4cc"
                  d="M902.44 611.71l-.63.37-10.28-5.92.64-.36 10.27 5.91z"
                />
                <path
                  fill="#b4c4cc"
                  d="M891.52 602.4v3.77l.65-.37v-3.79l-.65.39z"
                />
                <path
                  d="M890.58 601.36v5.31l12.16 7.05v-5.36zm.95 1.64l10.27 5.91v3.17l-10.27-6z"
                  fill="#c5d4dd"
                />
                <path
                  fill="#b4c4cc"
                  d="M902.74 608.36v5.36l.79-.4v-5.39l-.79.43zM903.53 607.93l-.79.43-12.16-7 .81-.43 12.14 7z"
                />
              </g>
              <g>
                <path
                  d="M914.34 617.13a2.7 2.7 0 01-1.08 2.44l-2.13 1.23c-.7.39-.25-.49-1.31-1.1a8.49 8.49 0 01-3.84-6.63c0-1.21-1.12-1.22-.43-1.62l2.26-1.25a2.73 2.73 0 012.68.29 8.48 8.48 0 013.85 6.64z"
                  fill="#474756"
                />
                <path
                  d="M912.11 618.39c0 2.44-1.72 3.42-3.85 2.19a8.46 8.46 0 01-3.84-6.63c0-2.44 1.72-3.42 3.84-2.19a8.44 8.44 0 013.85 6.63z"
                  fill="#545466"
                />
                <path
                  d="M908.23 613.51c-1.37-.79-2.48-.16-2.48 1.42a5.47 5.47 0 002.48 4.28c1.37.79 2.49.16 2.49-1.41a5.48 5.48 0 00-2.49-4.29z"
                  fill="#b4c4cc"
                />
                <path
                  d="M909.48 617.26c0 .83-.58 1.16-1.3.74a2.84 2.84 0 01-1.3-2.24c0-.82.58-1.15 1.3-.74a2.87 2.87 0 011.3 2.24z"
                  fill="#e7f1f7"
                />
                <path
                  d="M914.18 617.05a2.72 2.72 0 01-1.08 2.46l-2.05 1.19c-.7.39-.25-.5-1.31-1.11a8.51 8.51 0 01-3.87-6.67c0-1.21-1.12-1.22-.43-1.63l2.18-1.21a2.8 2.8 0 012.7.3 8.54 8.54 0 013.86 6.67z"
                  fill="#4c4c5e"
                />
                <path
                  d="M912 618.27c0 2.45-1.73 3.44-3.87 2.21a8.55 8.55 0 01-3.87-6.67c0-2.45 1.74-3.44 3.87-2.21a8.51 8.51 0 013.87 6.67z"
                  fill="#474756"
                />
                <path
                  d="M910.93 617.63c0 1.75-1.24 2.45-2.76 1.57a6.08 6.08 0 01-2.75-4.75c0-1.75 1.23-2.45 2.75-1.57a6.07 6.07 0 012.76 4.75z"
                  fill="#e7f1f7"
                />
                <path
                  d="M910.93 617.63a2.39 2.39 0 01-.35 1.34 1.74 1.74 0 01-1.93-.12 5.65 5.65 0 01-2.57-4.43c0-1.18.6-1.85 1.47-1.82a2.59 2.59 0 01.62.28 6.07 6.07 0 012.76 4.75z"
                  fill="#e7f1f7"
                />
                <path
                  d="M906.6 612.54a1.91 1.91 0 00-.8 1.76 6.09 6.09 0 002.76 4.75 2.2 2.2 0 001.57.34 1.9 1.9 0 01-2-.19 6.08 6.08 0 01-2.75-4.75c.04-1.08.5-1.76 1.22-1.91z"
                  fill="#474756"
                />
                <path
                  d="M909.22 616.47c0 .46-.32.64-.72.41a1.59 1.59 0 01-.72-1.24c0-.46.32-.64.72-.41a1.57 1.57 0 01.72 1.24z"
                  fill="url(#expeditedbackground__radial-gradient-3)"
                />
                <path
                  d="M908.2 613.67a.81.81 0 00.36.62c.2.12.36 0 .36-.2a.78.78 0 00-.36-.62c-.19-.12-.36-.03-.36.2zm0 4.22a.81.81 0 00.36.62c.2.12.36 0 .36-.2a.81.81 0 00-.36-.63.22.22 0 00-.36.21zm-.68-4.29c-.14-.24-.37-.37-.51-.29s-.14.34 0 .58.37.38.51.3.14-.35 0-.59zm2.09 4.77c.14.25.37.38.51.3s.14-.34 0-.59-.37-.37-.51-.29-.14.34 0 .58zm-3.24-3.65a.78.78 0 00.36.62c.2.12.36 0 .36-.2a.81.81 0 00-.36-.63c-.2-.11-.36-.02-.36.21zm3.67 2.12a.78.78 0 00.36.62c.2.12.36 0 .36-.2a.78.78 0 00-.36-.62c-.2-.12-.4-.03-.4.2zm-3 0c.14.25.37.38.51.3s.14-.34 0-.59-.37-.37-.51-.29-.17.37-.04.61zm2.6-1.48c.14.25.37.38.51.3s.14-.35 0-.59-.37-.37-.51-.29-.17.37-.03.61z"
                  fill="#474756"
                />
                <path
                  d="M909.68 616.47a.78.78 0 01-.3.68l-.45.27c-.19.1-.07-.14-.36-.31a2.35 2.35 0 01-1.07-1.84c0-.33-.31-.33-.12-.45l.48-.27a.8.8 0 01.75.08 2.36 2.36 0 011.07 1.84z"
                  fill="#545466"
                />
                <path
                  d="M909.2 616.75c0 .67-.48 1-1.06.61a2.36 2.36 0 01-1.07-1.84c0-.68.48-.95 1.07-.61a2.36 2.36 0 011.06 1.84z"
                  fill="#545466"
                />
              </g>
              <g>
                <path
                  fill="#cfdee8"
                  d="M928.32 623.24v5.36l-16.04-9.27v-5.31l16.04 9.22z"
                />
                <path
                  style={{
                    mixBlendMode: "multiply",
                  }}
                  fill="#e7f1f7"
                  d="M916.85 616.68v5.17l-.26-.14v-5.18l.26.15z"
                />
                <path
                  fill="#e7f1f7"
                  d="M928.32 623.24v5.36l12.67-7.21v-5.4l-12.67 7.25z"
                />
                <path
                  fill="#e7f1f7"
                  d="M940.99 615.99l-12.67 7.25-16.04-9.22 12.68-7.23 16.03 9.2z"
                />
              </g>
              <g fill="#545466">
                <path d="M926.16 619.66v1.79l-57.75-33.59v-1.73l57.75 33.53zM926.16 619.66v1.79l15.84-9.02v-1.82l-15.84 9.05z" />
                <path d="M942 610.61l-15.84 9.05-57.75-33.53 15.85-9.03L942 610.61z" />
              </g>
              <g>
                <path
                  fill="#cfdee8"
                  d="M926.16 600.3v19.45l-57.75-33.59v-19.39l57.75 33.53z"
                />
                <path
                  style={{
                    mixBlendMode: "multiply",
                  }}
                  fill="#e6e7e8"
                  d="M924.79 601.09l-55.01-31.94v16.23l55.01 31.99v-16.28z"
                />
                <g fill="#dce8f1">
                  <path
                    style={{
                      mixBlendMode: "multiply",
                    }}
                    d="M923.05 600.3l.72.48v16.28l-.72-.48V600.3zM923.8 600.71l.27-.01v16.28l-.27.01v-16.28zM920.69 598.93l.72.48v16.28l-.72-.48v-16.28zM921.44 599.34l.27-.01v16.28l-.27.01v-16.28zM918.33 597.56l.72.47v16.29l-.72-.48v-16.28zM919.08 597.97l.27-.01v16.28l-.27.01v-16.28zM915.97 596.19l.71.47v16.29l-.71-.48v-16.28zM916.72 596.6l.27-.01v16.28l-.27.01V596.6zM913.61 594.82l.72.47v16.28l-.72-.47v-16.28zM914.36 595.23l.27-.01v16.28l-.27.01v-16.28zM911.25 593.45l.71.47v16.28l-.71-.47v-16.28zM912 593.86l.27-.02v16.29l-.27.01v-16.28zM908.88 592.08l.72.47v16.28l-.72-.48v-16.27zM909.64 592.49l.27-.02v16.28l-.27.01v-16.27zM906.52 590.7l.72.48v16.28l-.72-.48V590.7zM907.28 591.11l.27-.01v16.28l-.27.01v-16.28zM904.16 589.33l.72.48v16.28l-.72-.48v-16.28zM904.92 589.74l.27-.01v16.28l-.27.01v-16.28zM901.8 587.96l.72.48v16.28l-.72-.48v-16.28zM902.56 588.37l.27-.01v16.28l-.27.01v-16.28zM899.44 586.59l.72.48v16.28l-.72-.48v-16.28zM900.2 587l.27-.01v16.28l-.27.01V587zM897.08 585.22l.72.48v16.28l-.72-.48v-16.28zM897.84 585.63l.27-.01v16.28l-.27.01v-16.28z"
                  />
                  <g>
                    <path
                      style={{
                        mixBlendMode: "multiply",
                      }}
                      d="M894.72 583.85l.72.48v16.28l-.72-.48v-16.28zM895.47 584.26l.28-.01v16.28l-.28.01v-16.28z"
                    />
                  </g>
                  <g>
                    <path
                      style={{
                        mixBlendMode: "multiply",
                      }}
                      d="M892.36 582.48l.72.47v16.28l-.72-.47v-16.28zM893.11 582.89l.28-.01v16.28l-.28.01v-16.28z"
                    />
                  </g>
                  <g>
                    <path
                      style={{
                        mixBlendMode: "multiply",
                      }}
                      d="M890 581.11l.72.47v16.28l-.72-.48v-16.27zM890.75 581.52l.28-.02v16.28l-.28.02v-16.28z"
                    />
                  </g>
                  <g>
                    <path
                      style={{
                        mixBlendMode: "multiply",
                      }}
                      d="M887.64 579.74l.72.47v16.28l-.72-.48v-16.27zM888.39 580.14l.28-.01v16.28l-.28.01v-16.28z"
                    />
                  </g>
                  <g>
                    <path
                      style={{
                        mixBlendMode: "multiply",
                      }}
                      d="M885.28 578.36l.72.48v16.28l-.72-.48v-16.28zM886.03 578.77l.28-.01v16.28l-.28.01v-16.28z"
                    />
                  </g>
                  <g>
                    <path
                      style={{
                        mixBlendMode: "multiply",
                      }}
                      d="M882.92 576.99l.72.48v16.28l-.72-.48v-16.28zM883.67 577.4l.28-.01v16.28l-.28.01V577.4z"
                    />
                  </g>
                  <g>
                    <path
                      style={{
                        mixBlendMode: "multiply",
                      }}
                      d="M880.56 575.62l.72.48v16.28l-.72-.48v-16.28zM881.31 576.03l.28-.01v16.28l-.28.01v-16.28z"
                    />
                  </g>
                  <g>
                    <path
                      style={{
                        mixBlendMode: "multiply",
                      }}
                      d="M878.2 574.25l.72.48v16.28l-.72-.48v-16.28zM878.95 574.66l.27-.01v16.28l-.27.01v-16.28z"
                    />
                  </g>
                  <g>
                    <path
                      style={{
                        mixBlendMode: "multiply",
                      }}
                      d="M875.84 572.88l.72.48v16.28l-.72-.48v-16.28zM876.59 573.29l.27-.01v16.28l-.27.01v-16.28z"
                    />
                  </g>
                  <g>
                    <path
                      style={{
                        mixBlendMode: "multiply",
                      }}
                      d="M873.48 571.51l.72.48v16.27l-.72-.47v-16.28zM874.23 571.92l.27-.01v16.28l-.27.01v-16.28z"
                    />
                  </g>
                  <g>
                    <path
                      style={{
                        mixBlendMode: "multiply",
                      }}
                      d="M871.12 570.14l.72.47v16.28l-.72-.47v-16.28zM871.87 570.55l.27-.01v16.28l-.27.01v-16.28z"
                    />
                  </g>
                </g>
                <path
                  fill="#dce8f1"
                  d="M926.16 600.3v19.45l15.84-9.02v-19.49l-15.84 9.06z"
                />
                <path
                  style={{
                    mixBlendMode: "multiply",
                  }}
                  fill="#e6e7e8"
                  d="M940.63 609.94V593.6l-13.1 7.49v16.3l13.1-7.45z"
                />
                <path
                  fill="#e7f1f7"
                  d="M942 591.24l-15.84 9.06-57.75-33.53 15.85-9.04L942 591.24z"
                />
                <g fill="#dce8f1">
                  <path
                    style={{
                      mixBlendMode: "multiply",
                    }}
                    d="M928.86 600.59l-.73.48v16.28l.73-.48v-16.28zM928.1 601l-.27-.01v16.28l.27.01V601zM930.99 599.34l-.72.48v16.28l.72-.48v-16.28zM930.24 599.75l-.28-.01v16.28l.28.01v-16.28zM933.12 598.09l-.72.47v16.28l.72-.48v-16.27zM932.37 598.5l-.27-.02v16.28l.27.01V598.5z"
                  />
                  <g>
                    <path
                      style={{
                        mixBlendMode: "multiply",
                      }}
                      d="M935.26 596.83l-.72.48v16.28l.72-.48v-16.28zM934.5 597.24l-.27-.01v16.28l.27.01v-16.28z"
                    />
                  </g>
                  <g>
                    <path
                      style={{
                        mixBlendMode: "multiply",
                      }}
                      d="M937.39 595.58l-.72.47v16.28l.72-.47v-16.28zM936.64 595.99l-.28-.01v16.28l.28.01v-16.28z"
                    />
                  </g>
                  <g>
                    <path
                      style={{
                        mixBlendMode: "multiply",
                      }}
                      d="M939.52 594.32l-.72.48v16.28l.72-.48v-16.28zM938.77 594.73l-.27-.01V611l.27.01v-16.28z"
                    />
                  </g>
                </g>
              </g>
              <g>
                <path
                  d="M941.93 598.77l10.42 6.07a5.37 5.37 0 012.56 3.36l1.46 5.77a21.4 21.4 0 01.66 5.28V626l-14.85 8.41v-6a21.48 21.48 0 00-1-6.47l-1.89-6a5.38 5.38 0 00-2.48-3.06l-9.74-5.68z"
                  fill="red"
                />
                <path
                  d="M942.18 628.38v6l-7.95-4.56-.61-3.51-6.55-3.9V607.2l9.78 5.7a5.39 5.39 0 012.48 3.08l1.87 6a21.5 21.5 0 01.98 6.4z"
                  fill="#e50000"
                />
                <path
                  d="M938.43 616.26l1.87 6a.47.47 0 01-.69.55l-5.88-3.43a1.28 1.28 0 01-.63-1.1v-4.91a.47.47 0 01.71-.41l3.65 2.13a2.06 2.06 0 011 1.17z"
                  fill="#26262e"
                />
                <path
                  d="M939.85 622.7a.33.33 0 00.25-.13.31.31 0 000-.27l-1.88-6a1.93 1.93 0 00-.88-1.09l-3.66-2.13h-.11c-.23 0-.34.11-.34.28v4.91a1.1 1.1 0 00.54 1l5.89 3.43z"
                  fill="#616173"
                />
                <path
                  d="M944.71 623.68v2.22a3.07 3.07 0 004.6 2.66l2.12-1.21a7.48 7.48 0 003.78-6.5v-3.21z"
                  fill="#e50000"
                />
                <path
                  d="M947.79 628.15a2.2 2.2 0 001.11-.3l2.13-1.21a6.7 6.7 0 003.36-5.79v-1.79l-8.86 5.09v1.75a2.26 2.26 0 002.26 2.25z"
                  fill="#616173"
                />
                <path
                  d="M953.66 623.86l-7 4a2.35 2.35 0 00.43.19l6.15-3.54a6.11 6.11 0 00.42-.65zm.6-1.71l-8.44 4.85a1.69 1.69 0 00.21.31l8.1-4.66c.05-.16.09-.33.13-.5zm.13-1.44l-8.86 5.09v.1a1.73 1.73 0 000 .32l8.82-5.07v-.3zm-8.86 3.72v.43l8.86-5.09v-.43z"
                  fill="#474756"
                  opacity={0.5}
                />
                <path
                  d="M942.7 622.87a.92.92 0 00.43-.11l12-6.84a1.46 1.46 0 00.7-1.64l-1.5-5.95a5.92 5.92 0 00-.32-.89.56.56 0 00-.49-.31.59.59 0 00-.26.07l-13.12 7.54a.87.87 0 00-.39 1l2.06 6.49a.87.87 0 00.84.62z"
                  fill="#26262e"
                />
                <path
                  d="M942.7 622.7a.73.73 0 00.35-.09l12.05-6.84a1.31 1.31 0 00.62-1.45l-1.51-6a4.33 4.33 0 00-.31-.85.37.37 0 00-.33-.22.34.34 0 00-.17.05l-13.13 7.54a.69.69 0 00-.3.82l2 6.49a.71.71 0 00.73.55z"
                  fill="#616173"
                />
                <path
                  d="M929.32 610.91l1.75 1a.82.82 0 01.41.7v4.66a.11.11 0 01-.1.1l-1.69-1a.77.77 0 01-.37-.66v-4.85z"
                  fill="#26262e"
                />
                <path
                  d="M931.31 612.63a.64.64 0 00-.32-.55l-1.5-.88v4.56a.58.58 0 00.29.51l1.53.88z"
                  fill="#616173"
                />
                <path
                  style={{
                    mixBlendMode: "multiply",
                  }}
                  fill="url(#expeditedbackground__linear-gradient-10)"
                  d="M933.53 622.02l-6.46.43 6.54 3.86-.08-4.29z"
                />
              </g>
              <path
                fill="#b4c4cc"
                d="M929.04 625.32v2.94l2.24-1.26-.15-2.93-2.09 1.25z"
              />
              <g>
                <path
                  d="M939 631.42a2.72 2.72 0 01-1.09 2.45l-2 1.19c-.7.39-.25-.5-1.31-1.11a8.51 8.51 0 01-3.87-6.67c0-1.21-1.12-1.22-.43-1.63l2.18-1.2a2.74 2.74 0 012.7.3 8.54 8.54 0 013.82 6.67z"
                  fill="#4c4c5e"
                />
                <path
                  d="M936.87 632.64c0 2.45-1.73 3.43-3.87 2.2a8.53 8.53 0 01-3.86-6.67c0-2.45 1.73-3.44 3.86-2.21a8.53 8.53 0 013.87 6.68z"
                  fill="#474756"
                />
                <path
                  d="M935.76 632c0 1.75-1.23 2.45-2.76 1.57a6 6 0 01-2.75-4.75c0-1.75 1.23-2.45 2.75-1.57a6.06 6.06 0 012.76 4.75z"
                  fill="#e7f1f7"
                />
                <path
                  d="M935.76 632a2.39 2.39 0 01-.35 1.34 1.75 1.75 0 01-1.93-.11 5.67 5.67 0 01-2.57-4.44c0-1.18.6-1.85 1.47-1.82a3.06 3.06 0 01.62.28 6.06 6.06 0 012.76 4.75z"
                  fill="#e7f1f7"
                />
                <path
                  d="M931.43 626.9a1.92 1.92 0 00-.8 1.76 6.06 6.06 0 002.76 4.75 2.21 2.21 0 001.57.35 1.93 1.93 0 01-2-.2 6 6 0 01-2.75-4.75c.04-1.07.5-1.75 1.22-1.91z"
                  fill="#474756"
                />
                <path
                  d="M934.05 630.83c0 .46-.32.64-.72.41a1.57 1.57 0 01-.72-1.24c0-.46.32-.64.72-.41a1.59 1.59 0 01.72 1.24z"
                  fill="url(#expeditedbackground__radial-gradient-4)"
                />
                <path
                  d="M933 628a.81.81 0 00.36.63.22.22 0 00.36-.21.81.81 0 00-.36-.62c-.16-.09-.36.01-.36.2zm0 4.22a.78.78 0 00.36.62c.19.12.36 0 .36-.2a.81.81 0 00-.36-.62c-.16-.09-.36-.02-.36.23zm-.69-4.29c-.14-.24-.37-.37-.51-.29s-.14.34 0 .58.37.38.51.3.18-.31.04-.52zm2.09 4.78c.14.24.37.37.51.29s.14-.34 0-.58-.37-.38-.51-.3-.1.37.04.62zm-3.24-3.66a.78.78 0 00.36.62c.2.12.36 0 .36-.2a.78.78 0 00-.36-.62c-.16-.09-.32 0-.32.23zm3.67 2.12a.81.81 0 00.36.63c.2.11.36 0 .36-.21a.78.78 0 00-.36-.62c-.19-.09-.32.03-.32.23zm-3 0c.14.24.37.37.51.29s.14-.34 0-.58-.37-.38-.51-.3-.13.42.01.66zm2.6-1.48c.14.24.37.37.51.29s.14-.34 0-.58-.37-.38-.51-.3-.13.41.01.66z"
                  fill="#474756"
                />
                <path
                  d="M934.51 630.83a.74.74 0 01-.3.68l-.45.27c-.19.11-.07-.14-.36-.31a2.34 2.34 0 01-1.07-1.83c0-.34-.3-.34-.12-.45l.48-.27a.75.75 0 01.75.08 2.34 2.34 0 011.07 1.83z"
                  fill="#545466"
                />
                <path
                  d="M934 631.11c0 .68-.47.95-1.06.61a2.35 2.35 0 01-1.07-1.84c0-.68.48-1 1.07-.61a2.35 2.35 0 011.06 1.84z"
                  fill="#545466"
                />
              </g>
              <path
                fill="#e7f1f7"
                d="M937.85 634.66v-4.26l-2.77-4.78-3.91-2.25 2.36-1.35 3.92 2.27 2.77 4.78v4.26l-2.37 1.33z"
              />
              <path
                fill="#dce8f1"
                d="M937.85 630.4l-2.77-4.78 2.37-1.33 2.77 4.78-2.37 1.33z"
              />
              <path
                fill="#cfdee8"
                d="M937.19 634.31v-3.73l-2.59-4.48-3.45-1.98-2.11 1.2v2.94l-.65-.37v-2.95l2.77-1.58 3.92 2.26 2.77 4.78v4.29l-.66-.38z"
              />
              <g>
                <path
                  d="M958.15 624.58l-14.86 8.82a2.38 2.38 0 01-2.34 0l-2.78-1.56v2.53L941 636a2.33 2.33 0 002.34 0l14.83-8.51z"
                  fill="#cfdee8"
                />
                <path
                  d="M957.89 625.06l-14.6 8.34a2.38 2.38 0 01-2.34 0l-2.78-1.56.76-.43 2 1.14a2.35 2.35 0 002.35 0l13.72-7.92v-1l.89.55a.52.52 0 010 .88z"
                  fill="#e7f1f7"
                />
                <g
                  style={{
                    mixBlendMode: "color-dodge",
                  }}
                >
                  <path
                    fill="url(#expeditedbackground__radial-gradient-5)"
                    d="M957.04 624.46l-.02.01v-.85l.01.01.01.83z"
                  />
                  <path
                    d="M938.33 631.75l2.64 1.48a2.38 2.38 0 002.34 0l14.6-8.34a.47.47 0 00.24-.3.49.49 0 01-.26.47l-14.6 8.34a2.38 2.38 0 01-2.34 0l-2.78-1.56z"
                    fill="url(#expeditedbackground__radial-gradient-6)"
                  />
                </g>
              </g>
              <g>
                <path
                  d="M927.05 602.69l14.61-8.38 5.51 3.31a7.73 7.73 0 013.85 6.69l-14.58 8.3z"
                  fill="#ff4a4a"
                />
                <path
                  d="M936.43 612.59l-9.43-5.51v-4.42l5.54 3.24a7.71 7.71 0 013.89 6.69z"
                  fill="#e50000"
                />
              </g>
              <path
                d="M945.52 629.72l-2.77 1.56a.39.39 0 01-.58-.34v-1.2a1.06 1.06 0 01.56-.93l.87-.45a1 1 0 011.1.08l.86.63a.39.39 0 01-.04.65zM957 622.33v1a.38.38 0 01-.2.33l-1.21.61a.29.29 0 01-.4-.35l.49-1.31a.78.78 0 01.39-.43l.4-.19a.37.37 0 01.53.34z"
                style={{
                  mixBlendMode: "multiply",
                }}
                fill="#e7f1f7"
              />
              <path
                d="M945.52 629.51l-2.77 1.57a.39.39 0 01-.58-.34v-1.21a1 1 0 01.56-.92l.87-.46a1.06 1.06 0 011.1.08l.86.63a.39.39 0 01-.04.65zM957 622.17v1a.38.38 0 01-.2.33l-1.21.61a.29.29 0 01-.4-.35l.49-1.31a.78.78 0 01.39-.43l.4-.19a.37.37 0 01.53.34z"
                fill="#ffc950"
              />
              <path
                d="M945.28 632.79L943.2 634l.61.41a1 1 0 001 0l2.15-1.26-.78-.39a.93.93 0 00-.9.03zM957.64 625.82l-2.23 1.28a1 1 0 00-.42.48l-.53 1.37 2.35-1.37a1 1 0 00.42-.52zM954 629.81v-.47a.65.65 0 00-1-.56l-4.27 2.45a2.14 2.14 0 00-1.07 1.85v.37z"
                style={{
                  mixBlendMode: "multiply",
                }}
                fill="#e7f1f7"
              />
              <path
                fill="#e7f1f7"
                d="M948.85 631.6v1.15l4.13-2.33v-1.17l-4.13 2.35z"
              />
              <path
                d="M950.08 627.8c-3.17 1.68-5.47 3.56-5.13 4.2s3.18-.22 6.35-1.91 5.47-3.56 5.13-4.2-3.18.22-6.35 1.91z"
                style={{
                  mixBlendMode: "color-dodge",
                }}
                fill="url(#expeditedbackground__radial-gradient-7)"
              />
            </g>
            <g id="expeditedbackground__truck2">
              <path
                fill="#b4c4cc"
                d="M856.19 481.37v6.97l1.2-.68v-7.01l-1.2.72z"
              />
              <path
                d="M866.34 490.42a2.7 2.7 0 01-1.08 2.44l-2.13 1.23c-.69.39-.25-.49-1.31-1.1a8.46 8.46 0 01-3.84-6.63c0-1.21-1.12-1.22-.43-1.62l2.26-1.25a2.71 2.71 0 012.68.3 8.44 8.44 0 013.85 6.63z"
                fill="#474756"
              />
              <path
                d="M864.11 491.68c0 2.44-1.72 3.42-3.84 2.2a8.48 8.48 0 01-3.85-6.64c0-2.43 1.72-3.42 3.85-2.19a8.49 8.49 0 013.84 6.63z"
                fill="#545466"
              />
              <path
                d="M860.24 486.8c-1.37-.79-2.49-.15-2.49 1.42a5.5 5.5 0 002.49 4.29c1.37.79 2.48.15 2.48-1.42a5.49 5.49 0 00-2.48-4.29z"
                fill="url(#expeditedbackground__linear-gradient-11)"
              />
              <path
                d="M861.12 491.94a5.5 5.5 0 01-2.49-4.29 2.13 2.13 0 01.3-1.17c-.71.1-1.18.72-1.18 1.74a5.5 5.5 0 002.49 4.29c.94.54 1.77.41 2.19-.25a2.08 2.08 0 01-1.31-.32z"
                fill="url(#expeditedbackground__linear-gradient-12)"
              />
              <path
                d="M862 490.87c0 1-.69 1.36-1.53.88a3.39 3.39 0 01-1.54-2.65c0-1 .69-1.36 1.54-.87a3.39 3.39 0 011.53 2.64z"
                style={{
                  mixBlendMode: "multiply",
                }}
                fill="url(#expeditedbackground__linear-gradient-13)"
              />
              <path
                d="M861.84 490.31c0 .83-.59 1.16-1.3.74a2.84 2.84 0 01-1.3-2.24c0-.82.58-1.15 1.3-.74a2.9 2.9 0 011.3 2.24z"
                fill="url(#expeditedbackground__linear-gradient-14)"
              />
              <path
                d="M861.48 490.56c0 .82-.58 1.15-1.3.74a2.9 2.9 0 01-1.3-2.24c0-.82.59-1.16 1.3-.74a2.85 2.85 0 011.3 2.24z"
                fill="#e7f1f7"
              />
              <path
                d="M866.19 490.41a2.72 2.72 0 01-1.08 2.45l-2.05 1.19c-.7.39-.25-.5-1.31-1.11a8.51 8.51 0 01-3.87-6.67c0-1.21-1.12-1.22-.43-1.63l2.18-1.2a2.76 2.76 0 012.7.29 8.54 8.54 0 013.86 6.68z"
                fill="#4c4c5e"
              />
              <path
                d="M864.05 491.62c0 2.45-1.73 3.44-3.87 2.21a8.54 8.54 0 01-3.87-6.67c0-2.45 1.74-3.44 3.87-2.21a8.52 8.52 0 013.87 6.67z"
                fill="#474756"
              />
              <path
                d="M862.94 491c0 1.75-1.24 2.45-2.76 1.57a6.06 6.06 0 01-2.75-4.75c0-1.75 1.23-2.45 2.75-1.57a6.07 6.07 0 012.76 4.75z"
                fill="#e7f1f7"
              />
              <path
                d="M862.94 491a2.39 2.39 0 01-.35 1.34 1.75 1.75 0 01-1.93-.11 5.67 5.67 0 01-2.57-4.44c0-1.18.6-1.85 1.47-1.82a2.59 2.59 0 01.62.28 6.07 6.07 0 012.76 4.75z"
                fill="#e7f1f7"
              />
              <path
                d="M858.61 485.89a1.91 1.91 0 00-.8 1.76 6.07 6.07 0 002.76 4.75 2.2 2.2 0 001.57.34 1.9 1.9 0 01-2-.19 6.06 6.06 0 01-2.75-4.75c.04-1.08.5-1.75 1.22-1.91z"
                fill="#474756"
              />
              <path
                d="M861.23 489.82c0 .46-.32.64-.72.41a1.59 1.59 0 01-.72-1.24c0-.46.32-.64.72-.41a1.57 1.57 0 01.72 1.24z"
                fill="url(#expeditedbackground__radial-gradient-8)"
              />
              <path
                d="M860.21 487a.81.81 0 00.36.62c.2.12.36 0 .36-.2a.78.78 0 00-.36-.62c-.19-.1-.36-.01-.36.2zm0 4.22a.81.81 0 00.36.62c.2.12.36 0 .36-.2a.81.81 0 00-.36-.63.22.22 0 00-.36.23zm-.68-4.29c-.14-.24-.37-.37-.51-.29s-.14.34 0 .58.37.38.51.3.14-.32 0-.52zm2.09 4.78c.14.24.37.37.51.29s.14-.34 0-.58-.37-.38-.51-.3-.14.36 0 .61zm-3.24-3.66a.78.78 0 00.36.62c.2.12.36 0 .36-.2a.78.78 0 00-.36-.62c-.2-.1-.36-.01-.36.22zm3.67 2.12a.78.78 0 00.36.62c.2.12.36 0 .36-.2a.78.78 0 00-.36-.62c-.2-.1-.36.03-.36.22zm-3 0c.14.24.37.37.51.29s.14-.34 0-.58-.37-.38-.51-.3-.17.42-.05.65zm2.6-1.49c.14.25.37.38.51.3s.14-.34 0-.59-.37-.37-.51-.29-.17.4-.03.64z"
                fill="#474756"
              />
              <path
                d="M861.69 489.82a.76.76 0 01-.3.68l-.45.27c-.19.11-.07-.14-.36-.31a2.35 2.35 0 01-1.07-1.84c0-.33-.31-.33-.12-.44l.48-.28a.8.8 0 01.75.08 2.36 2.36 0 011.07 1.84z"
                fill="#545466"
              />
              <path
                d="M861.21 490.1c0 .67-.47.95-1.06.61a2.36 2.36 0 01-1.07-1.84c0-.68.48-.95 1.07-.61a2.33 2.33 0 011.06 1.84z"
                fill="#545466"
              />
              <path
                d="M874.59 495.28a2.7 2.7 0 01-1.08 2.44l-2.13 1.28c-.7.39-.25-.49-1.31-1.1a8.46 8.46 0 01-3.84-6.63c0-1.21-1.12-1.22-.43-1.62l2.26-1.25a2.71 2.71 0 012.68.3 8.44 8.44 0 013.85 6.58z"
                fill="#474756"
              />
              <path
                d="M872.36 496.54c0 2.44-1.72 3.42-3.85 2.2a8.49 8.49 0 01-3.84-6.64c0-2.43 1.72-3.42 3.84-2.19a8.47 8.47 0 013.85 6.63z"
                fill="#545466"
              />
              <path
                d="M868.48 491.66c-1.37-.79-2.48-.15-2.48 1.42a5.49 5.49 0 002.48 4.29c1.37.79 2.49.15 2.49-1.42a5.5 5.5 0 00-2.49-4.29z"
                fill="url(#expeditedbackground__linear-gradient-15)"
              />
              <path
                d="M869.37 496.8a5.5 5.5 0 01-2.49-4.29 2.13 2.13 0 01.3-1.17c-.71.1-1.18.72-1.18 1.74a5.49 5.49 0 002.48 4.29c.95.54 1.78.41 2.2-.25a2.08 2.08 0 01-1.31-.32z"
                fill="url(#expeditedbackground__linear-gradient-16)"
              />
              <path
                d="M870.21 495.73c0 1-.69 1.36-1.54.88a3.41 3.41 0 01-1.53-2.65c0-1 .69-1.36 1.53-.87a3.37 3.37 0 011.54 2.64z"
                style={{
                  mixBlendMode: "multiply",
                }}
                fill="url(#expeditedbackground__linear-gradient-17)"
              />
              <path
                d="M870.08 495.17c0 .83-.58 1.16-1.29.74a2.84 2.84 0 01-1.3-2.24c0-.82.58-1.15 1.3-.74a2.89 2.89 0 011.29 2.24z"
                fill="url(#expeditedbackground__linear-gradient-18)"
              />
              <path
                d="M869.73 495.42c0 .82-.58 1.15-1.3.74a2.87 2.87 0 01-1.3-2.24c0-.82.58-1.16 1.3-.74a2.85 2.85 0 011.3 2.24z"
                fill="#e7f1f7"
              />
              <path
                d="M874.55 495.27a2.7 2.7 0 01-1.09 2.46l-2 1.18c-.7.4-.25-.49-1.32-1.1a8.54 8.54 0 01-3.86-6.68c0-1.21-1.12-1.22-.44-1.62l2.16-1.21a2.74 2.74 0 012.7.3 8.51 8.51 0 013.85 6.67z"
                fill="#4c4c5e"
              />
              <path
                d="M872.4 496.49c0 2.45-1.73 3.44-3.86 2.21a8.53 8.53 0 01-3.87-6.68c0-2.45 1.73-3.43 3.87-2.2a8.53 8.53 0 013.86 6.67z"
                fill="#474756"
              />
              <path
                d="M871.29 495.85c0 1.74-1.23 2.45-2.75 1.57a6.09 6.09 0 01-2.76-4.75c0-1.75 1.24-2.45 2.76-1.58a6.08 6.08 0 012.75 4.76z"
                fill="#e7f1f7"
              />
              <path
                d="M871.29 495.85a2.31 2.31 0 01-.35 1.34 1.72 1.72 0 01-1.92-.12 5.67 5.67 0 01-2.58-4.43c0-1.18.6-1.85 1.47-1.82a3.31 3.31 0 01.63.27 6.08 6.08 0 012.75 4.76z"
                fill="#e7f1f7"
              />
              <path
                d="M867 490.75a1.93 1.93 0 00-.79 1.77 6.08 6.08 0 002.75 4.75 2.23 2.23 0 001.58.34 2 2 0 01-2-.19 6.09 6.09 0 01-2.76-4.75c0-1.08.47-1.76 1.22-1.92z"
                fill="#474756"
              />
              <path
                d="M869.59 494.69a.44.44 0 01-.72.41 1.6 1.6 0 01-.73-1.25c0-.45.33-.64.73-.41a1.62 1.62 0 01.72 1.25z"
                fill="url(#expeditedbackground__radial-gradient-9)"
              />
              <path
                d="M868.57 491.89a.78.78 0 00.36.62c.2.11.36 0 .36-.21a.81.81 0 00-.36-.62c-.2-.11-.36-.02-.36.21zm0 4.22a.81.81 0 00.36.62c.2.11.36 0 .36-.21a.79.79 0 00-.36-.62c-.2-.11-.36-.02-.36.21zm-.68-4.29c-.15-.24-.37-.37-.51-.29s-.14.34 0 .58.36.37.51.29.11-.34 0-.58zm2.08 4.77c.15.24.37.38.51.3s.14-.35 0-.59-.36-.37-.51-.29-.14.34.03.58zm-3.24-3.65a.79.79 0 00.36.62c.2.11.36 0 .36-.21a.79.79 0 00-.36-.62c-.2-.11-.36-.02-.36.21zm3.68 2.12a.78.78 0 00.36.62c.2.11.36 0 .36-.21a.81.81 0 00-.36-.62c-.2-.11-.36-.02-.36.21zm-3 0c.14.24.36.38.51.3s.14-.35 0-.59-.37-.37-.51-.29-.17.37-.03.61zm2.59-1.48c.15.24.37.37.51.29s.14-.34 0-.58-.36-.37-.51-.29-.17.37 0 .61z"
                fill="#474756"
              />
              <path
                d="M870 494.69a.77.77 0 01-.29.68l-.45.26c-.2.11-.07-.13-.37-.3a2.36 2.36 0 01-1.06-1.84c0-.33-.31-.34-.12-.45l.48-.27a.75.75 0 01.75.08 2.33 2.33 0 011.06 1.84z"
                fill="#545466"
              />
              <path
                d="M869.57 495c0 .67-.48.94-1.07.6a2.33 2.33 0 01-1.06-1.83c0-.68.47-.95 1.06-.61a2.35 2.35 0 011.07 1.84z"
                fill="#545466"
              />
              <g>
                <path
                  fill="#9aa0a6"
                  d="M889.03 500.94v3.67l-12.38-7.19v-3.65l12.38 7.17zM889.03 500.94v3.67l3.48-1.98v-3.68l-3.48 1.99z"
                />
                <path
                  fill="url(#expeditedbackground__linear-gradient-19)"
                  d="M892.51 498.95l-3.48 1.99-12.38-7.17 3.48-1.99 12.38 7.17z"
                />
              </g>
              <g>
                <path
                  fill="#8c9399"
                  d="M853.74 480.18v4.67l-.45-.36v-4.67l.45.36zM853.74 480.18v4.67l11.14-6.26v-4.68l-11.14 6.27z"
                />
                <path
                  fill="#e7f1f7"
                  d="M864.88 473.91l-11.14 6.27-.45-.36 11.14-6.26.45.35z"
                />
              </g>
              <path
                fill="#c5d4dd"
                d="M874.32 491.83v6.97l-1.24-.72v-5.54l-16.88-9.75v5.54l-1.24-.71v-6.97l19.36 11.18z"
              />
              <path
                fill="#b4c4cc"
                d="M874.33 491.85v6.96l1.2-.67v-7.01l-1.2.72z"
              />
              <g>
                <path
                  fill="#b4c4cc"
                  d="M886.99 504l-.63.37-10.28-5.92.64-.36 10.27 5.91zM876.07 494.69v3.76l.65-.36v-3.79l-.65.39z"
                />
                <path
                  d="M875.13 493.65V499l12.16 7v-5.36zm1 1.64l10.27 5.91v3.17l-10.27-5.95z"
                  fill="#c5d4dd"
                />
                <path
                  fill="#b4c4cc"
                  d="M887.29 500.65v5.36l.8-.4v-5.4l-.8.44z"
                />
                <path
                  fill="#b4c4cc"
                  d="M888.09 500.21l-.8.44-12.16-7 .81-.43 12.15 6.99z"
                />
              </g>
              <g>
                <path
                  d="M898.89 509.41a2.7 2.7 0 01-1.08 2.45l-2.13 1.23c-.7.39-.25-.49-1.31-1.1a8.49 8.49 0 01-3.84-6.64c0-1.2-1.12-1.21-.43-1.61l2.26-1.25a2.73 2.73 0 012.68.29 8.47 8.47 0 013.85 6.63z"
                  fill="#474756"
                />
                <path
                  d="M896.66 510.68c0 2.44-1.72 3.42-3.85 2.19a8.47 8.47 0 01-3.84-6.63c0-2.44 1.72-3.42 3.84-2.19a8.44 8.44 0 013.85 6.63z"
                  fill="#545466"
                />
                <path
                  d="M892.78 505.8c-1.37-.79-2.48-.16-2.48 1.42a5.47 5.47 0 002.48 4.28c1.37.79 2.49.16 2.49-1.41a5.48 5.48 0 00-2.49-4.29z"
                  fill="#b4c4cc"
                />
                <path
                  d="M894 509.55c0 .83-.58 1.16-1.3.74a2.84 2.84 0 01-1.3-2.24c0-.82.58-1.15 1.3-.74a2.87 2.87 0 011.3 2.24z"
                  fill="#e7f1f7"
                />
                <path
                  d="M898.73 509.34a2.72 2.72 0 01-1.08 2.46l-2 1.19c-.7.39-.25-.5-1.31-1.11a8.52 8.52 0 01-3.87-6.67c0-1.22-1.12-1.23-.43-1.63l2.18-1.21a2.8 2.8 0 012.7.3 8.54 8.54 0 013.81 6.67z"
                  fill="#4c4c5e"
                />
                <path
                  d="M896.59 510.56c0 2.45-1.73 3.44-3.87 2.21a8.55 8.55 0 01-3.87-6.67c0-2.46 1.74-3.44 3.87-2.21a8.51 8.51 0 013.87 6.67z"
                  fill="#474756"
                />
                <path
                  d="M895.48 509.92c0 1.75-1.24 2.45-2.76 1.57a6.08 6.08 0 01-2.75-4.75c0-1.75 1.23-2.45 2.75-1.57a6.07 6.07 0 012.76 4.75z"
                  fill="#e7f1f7"
                />
                <path
                  d="M895.48 509.92a2.39 2.39 0 01-.35 1.34 1.74 1.74 0 01-1.93-.12 5.65 5.65 0 01-2.57-4.43c0-1.18.6-1.85 1.47-1.82a2.59 2.59 0 01.62.28 6.07 6.07 0 012.76 4.75z"
                  fill="#e7f1f7"
                />
                <path
                  d="M891.15 504.82a1.94 1.94 0 00-.8 1.77 6.09 6.09 0 002.76 4.75 2.2 2.2 0 001.57.34 2 2 0 01-2-.19 6.08 6.08 0 01-2.75-4.75c.07-1.08.5-1.74 1.22-1.92z"
                  fill="#474756"
                />
                <path
                  d="M893.77 508.76c0 .46-.32.64-.72.41a1.59 1.59 0 01-.72-1.24c0-.46.32-.64.72-.41a1.57 1.57 0 01.72 1.24z"
                  fill="url(#expeditedbackground__radial-gradient-10)"
                />
                <path
                  d="M892.75 506a.81.81 0 00.36.62c.2.12.36 0 .36-.2a.78.78 0 00-.36-.62c-.19-.16-.36-.07-.36.2zm0 4.22a.82.82 0 00.36.62c.2.11.36 0 .36-.21a.81.81 0 00-.36-.62.22.22 0 00-.36.17zm-.68-4.29c-.14-.24-.37-.37-.51-.29s-.14.34 0 .58.37.38.51.3.14-.39 0-.63zm2.09 4.77c.14.25.37.38.51.3s.14-.34 0-.59-.37-.37-.51-.29-.16.3 0 .54zm-3.24-3.7a.78.78 0 00.36.62c.2.11.36 0 .36-.21a.81.81 0 00-.36-.62c-.2-.1-.36-.01-.36.21zm3.67 2.12a.78.78 0 00.36.62c.2.12.36 0 .36-.2a.78.78 0 00-.36-.62c-.2-.11-.36-.02-.36.21zm-3 0c.14.25.37.38.51.3s.14-.34 0-.59-.37-.37-.51-.29-.17.38-.03.62zm2.6-1.48c.14.24.37.38.51.3s.14-.35 0-.59-.37-.37-.51-.29-.19.38-.03.62z"
                  fill="#474756"
                />
                <path
                  d="M894.23 508.76a.78.78 0 01-.3.68l-.45.27c-.19.1-.07-.14-.36-.31a2.35 2.35 0 01-1.07-1.84c0-.33-.31-.33-.12-.45l.48-.27a.77.77 0 01.75.08 2.35 2.35 0 011.07 1.84z"
                  fill="#545466"
                />
                <path
                  d="M893.75 509c0 .67-.48.95-1.06.61a2.36 2.36 0 01-1.07-1.84c0-.68.48-.95 1.07-.61a2.36 2.36 0 011.06 1.84z"
                  fill="#545466"
                />
              </g>
              <g>
                <path
                  fill="#cfdee8"
                  d="M912.87 515.52v5.36l-16.04-9.26v-5.31l16.04 9.21z"
                />
                <path
                  style={{
                    mixBlendMode: "multiply",
                  }}
                  fill="#e7f1f7"
                  d="M901.4 508.97v5.17l-.26-.14v-5.18l.26.15z"
                />
                <path
                  fill="#e7f1f7"
                  d="M912.87 515.52v5.36l12.67-7.21v-5.39l-12.67 7.24z"
                />
                <path
                  fill="#e7f1f7"
                  d="M925.54 508.28l-12.67 7.24-16.04-9.21 12.68-7.23 16.03 9.2z"
                />
              </g>
              <g fill="#545466">
                <path d="M910.71 511.95v1.79l-57.75-33.59v-1.72l57.75 33.52zM910.71 511.95v1.79l15.84-9.02v-1.82l-15.84 9.05z" />
                <path d="M926.55 502.9l-15.84 9.05-57.75-33.52 15.86-9.05 57.73 33.52z" />
              </g>
              <g>
                <path
                  fill="#cfdee8"
                  d="M910.71 492.59v19.44l-57.75-33.58v-19.39l57.75 33.53z"
                />
                <path
                  style={{
                    mixBlendMode: "multiply",
                  }}
                  fill="#e6e7e8"
                  d="M909.34 493.38l-55.01-31.94v16.23l55.01 31.98v-16.27z"
                />
                <g fill="#dce8f1">
                  <path
                    style={{
                      mixBlendMode: "multiply",
                    }}
                    d="M907.6 492.59l.72.48v16.28l-.72-.48v-16.28zM908.35 493l.27-.01v16.28l-.27.01V493zM905.24 491.22l.72.48v16.28l-.72-.48v-16.28zM905.99 491.63l.27-.01v16.28l-.27.01v-16.28zM902.88 489.85l.72.47v16.29l-.72-.48v-16.28zM903.63 490.26l.27-.01v16.28l-.27.01v-16.28zM900.51 488.48l.73.47v16.28l-.73-.47v-16.28zM901.27 488.89l.27-.01v16.28l-.27.01v-16.28zM898.15 487.11l.73.47v16.28l-.73-.48v-16.27zM898.91 487.52l.27-.02v16.29l-.27.01v-16.28zM895.79 485.74l.72.47v16.28l-.72-.48v-16.27zM896.55 486.14l.27-.01v16.28l-.27.02v-16.29zM893.43 484.36l.72.48v16.28l-.72-.48v-16.28zM894.19 484.77l.27-.01v16.28l-.27.01v-16.28zM891.07 482.99l.72.48v16.28l-.72-.48v-16.28zM891.83 483.4l.27-.01v16.28l-.27.01V483.4zM888.71 481.62l.72.48v16.28l-.72-.48v-16.28zM889.47 482.03l.27-.01v16.28l-.27.01v-16.28zM886.35 480.25l.72.48v16.28l-.72-.48v-16.28zM887.11 480.66l.27-.01v16.28l-.27.01v-16.28zM883.99 478.88l.72.48v16.28l-.72-.48v-16.28zM884.75 479.29l.27-.01v16.28l-.27.01v-16.28zM881.63 477.51l.72.48v16.27l-.72-.47v-16.28zM882.38 477.92l.28-.01v16.28l-.28.01v-16.28z"
                  />
                  <g>
                    <path
                      style={{
                        mixBlendMode: "multiply",
                      }}
                      d="M879.27 476.14l.72.47v16.28l-.72-.47v-16.28zM880.02 476.55l.28-.01v16.28l-.28.01v-16.28z"
                    />
                  </g>
                  <g>
                    <path
                      style={{
                        mixBlendMode: "multiply",
                      }}
                      d="M876.91 474.77l.72.47v16.28l-.72-.47v-16.28zM877.66 475.18l.28-.01v16.28l-.28.01v-16.28z"
                    />
                  </g>
                  <g>
                    <path
                      style={{
                        mixBlendMode: "multiply",
                      }}
                      d="M874.55 473.39l.72.48v16.28l-.72-.48v-16.28zM875.3 473.81l.28-.02v16.28l-.28.01v-16.27z"
                    />
                  </g>
                  <g>
                    <path
                      style={{
                        mixBlendMode: "multiply",
                      }}
                      d="M872.19 472.02l.72.48v16.28l-.72-.48v-16.28zM872.94 472.44l.28-.02v16.28l-.28.01v-16.27z"
                    />
                  </g>
                  <g>
                    <path
                      style={{
                        mixBlendMode: "multiply",
                      }}
                      d="M869.83 470.65l.72.48v16.28l-.72-.48v-16.28zM870.58 471.06l.28-.01v16.28l-.28.01v-16.28z"
                    />
                  </g>
                  <g>
                    <path
                      style={{
                        mixBlendMode: "multiply",
                      }}
                      d="M867.47 469.28l.72.48v16.28l-.72-.48v-16.28zM868.22 469.69l.28-.01v16.28l-.28.01v-16.28z"
                    />
                  </g>
                  <g>
                    <path
                      style={{
                        mixBlendMode: "multiply",
                      }}
                      d="M865.11 467.91l.72.48v16.28l-.72-.48v-16.28zM865.86 468.32l.27-.01v16.28l-.27.01v-16.28z"
                    />
                  </g>
                  <g>
                    <path
                      style={{
                        mixBlendMode: "multiply",
                      }}
                      d="M862.75 466.54l.72.48v16.28l-.72-.48v-16.28zM863.5 466.95l.27-.01v16.28l-.27.01v-16.28z"
                    />
                  </g>
                  <g>
                    <path
                      style={{
                        mixBlendMode: "multiply",
                      }}
                      d="M860.39 465.17l.72.47v16.29l-.72-.48v-16.28zM861.14 465.58l.27-.01v16.28l-.27.01v-16.28z"
                    />
                  </g>
                  <g>
                    <path
                      style={{
                        mixBlendMode: "multiply",
                      }}
                      d="M858.03 463.8l.72.47v16.29l-.72-.48V463.8zM858.78 464.21l.27-.01v16.28l-.27.01v-16.28z"
                    />
                  </g>
                  <g>
                    <path
                      style={{
                        mixBlendMode: "multiply",
                      }}
                      d="M855.67 462.43l.72.47v16.28l-.72-.47v-16.28zM856.42 462.84l.27-.02v16.29l-.27.01v-16.28z"
                    />
                  </g>
                </g>
                <path
                  fill="#dce8f1"
                  d="M910.71 492.59v19.44l15.84-9.01v-19.49l-15.84 9.06z"
                />
                <path
                  style={{
                    mixBlendMode: "multiply",
                  }}
                  fill="#e6e7e8"
                  d="M925.18 502.23v-16.34l-13.1 7.49v16.3l13.1-7.45z"
                />
                <path
                  fill="#e7f1f7"
                  d="M926.55 483.53l-15.84 9.06-57.75-33.53 15.86-9.04 57.73 33.51z"
                />
                <g fill="#dce8f1">
                  <path
                    style={{
                      mixBlendMode: "multiply",
                    }}
                    d="M913.4 492.88l-.72.48v16.28l.72-.48v-16.28zM912.65 493.29l-.27-.01v16.28l.27.01v-16.28zM915.54 491.63l-.72.48v16.27l.72-.47v-16.28zM914.78 492.04l-.27-.01v16.28l.27.01v-16.28zM917.67 490.37l-.72.48v16.28l.72-.48v-16.28zM916.92 490.79l-.28-.02v16.28l.28.01v-16.27z"
                  />
                  <g>
                    <path
                      style={{
                        mixBlendMode: "multiply",
                      }}
                      d="M919.81 489.12l-.72.48v16.28l.72-.48v-16.28zM919.05 489.53l-.27-.01v16.28l.27.01v-16.28z"
                    />
                  </g>
                  <g>
                    <path
                      style={{
                        mixBlendMode: "multiply",
                      }}
                      d="M921.94 487.87l-.72.47v16.28l.72-.48v-16.27zM921.19 488.28l-.28-.02v16.29l.28.01v-16.28z"
                    />
                  </g>
                  <g>
                    <path
                      style={{
                        mixBlendMode: "multiply",
                      }}
                      d="M924.07 486.61l-.72.48v16.28l.72-.48v-16.28zM923.32 487.02l-.27-.01v16.28l.27.01v-16.28z"
                    />
                  </g>
                </g>
              </g>
              <g>
                <path
                  d="M926.48 491.06l10.42 6.06a5.42 5.42 0 012.56 3.37l1.46 5.77a21.4 21.4 0 01.66 5.28v6.76l-14.85 8.41v-6a21.48 21.48 0 00-1-6.47l-1.89-6a5.38 5.38 0 00-2.48-3.06l-9.74-5.68z"
                  fill="red"
                />
                <path
                  d="M926.73 520.67v6l-8-4.56-.61-3.51-6.55-3.9v-15.21l9.78 5.7a5.41 5.41 0 012.48 3.07l1.87 6a21.5 21.5 0 011.03 6.41z"
                  fill="#e50000"
                />
                <path
                  d="M923 508.55l1.87 6a.47.47 0 01-.69.55l-5.88-3.43a1.28 1.28 0 01-.63-1.1v-4.92a.47.47 0 01.71-.41l3.65 2.14a2.06 2.06 0 011 1.17z"
                  fill="#26262e"
                />
                <path
                  d="M924.4 515a.33.33 0 00.25-.13.31.31 0 000-.27l-1.88-6a1.93 1.93 0 00-.88-1.09l-3.66-2.13h-.11c-.23 0-.34.11-.34.27v4.92a1.1 1.1 0 00.54.95l5.89 3.43z"
                  fill="#616173"
                />
                <path
                  d="M929.26 516v2.22a3.07 3.07 0 004.6 2.66l2.12-1.21a7.49 7.49 0 003.78-6.5v-3.21z"
                  fill="#e50000"
                />
                <path
                  d="M932.34 520.44a2.2 2.2 0 001.11-.3l2.13-1.22a6.68 6.68 0 003.36-5.78v-1.79l-8.86 5.09v1.75a2.26 2.26 0 002.26 2.25z"
                  fill="#616173"
                />
                <path
                  d="M938.21 516.15l-7 4a2.35 2.35 0 00.43.19l6.15-3.54a6.11 6.11 0 00.42-.65zm.6-1.71l-8.44 4.85a2.11 2.11 0 00.21.31l8.1-4.66c.05-.16.09-.33.13-.5zm.13-1.44l-8.86 5.09v.1a1.73 1.73 0 000 .32l8.82-5.08v-.29zm-8.86 3.72v.43l8.86-5.09v-.43z"
                  fill="#474756"
                  opacity={0.5}
                />
                <path
                  d="M927.25 515.16a.82.82 0 00.43-.12l12.05-6.83a1.47 1.47 0 00.7-1.65l-1.5-5.94a5.92 5.92 0 00-.32-.89.56.56 0 00-.49-.31.59.59 0 00-.26.07L924.74 507a.87.87 0 00-.39 1l2.06 6.49a.87.87 0 00.84.62z"
                  fill="#26262e"
                />
                <path
                  d="M927.25 515a.73.73 0 00.35-.09l12-6.84a1.31 1.31 0 00.62-1.45l-1.51-5.95a4.33 4.33 0 00-.31-.85.37.37 0 00-.33-.22.34.34 0 00-.17.05l-13.13 7.54a.69.69 0 00-.3.82l2.05 6.49a.71.71 0 00.73.5z"
                  fill="#616173"
                />
                <path
                  d="M913.87 503.2l1.75 1a.82.82 0 01.41.7v4.66a.11.11 0 01-.1.1l-1.69-1a.77.77 0 01-.37-.66v-4.8z"
                  fill="#26262e"
                />
                <path
                  d="M915.86 504.92a.64.64 0 00-.32-.55l-1.5-.88v4.56a.58.58 0 00.29.51l1.53.88z"
                  fill="#616173"
                />
                <path
                  style={{
                    mixBlendMode: "multiply",
                  }}
                  fill="url(#expeditedbackground__linear-gradient-20)"
                  d="M918.08 514.31l-6.46.43 6.53 3.86-.07-4.29z"
                />
              </g>
              <path
                fill="#b4c4cc"
                d="M913.59 517.61v2.94l2.24-1.26-.15-2.93-2.09 1.25z"
              />
              <g>
                <path
                  d="M923.57 523.71a2.72 2.72 0 01-1.09 2.45l-2.05 1.19c-.7.39-.25-.5-1.31-1.11a8.51 8.51 0 01-3.87-6.67c0-1.21-1.12-1.22-.43-1.63l2.18-1.2a2.76 2.76 0 012.7.29 8.55 8.55 0 013.87 6.68z"
                  fill="#4c4c5e"
                />
                <path
                  d="M921.42 524.92c0 2.46-1.73 3.44-3.87 2.21a8.53 8.53 0 01-3.86-6.67c0-2.45 1.73-3.44 3.86-2.21a8.52 8.52 0 013.87 6.67z"
                  fill="#474756"
                />
                <path
                  d="M920.31 524.28c0 1.75-1.24 2.45-2.76 1.57a6 6 0 01-2.75-4.75c0-1.75 1.23-2.45 2.75-1.57a6.09 6.09 0 012.76 4.75z"
                  fill="#e7f1f7"
                />
                <path
                  d="M920.31 524.28a2.39 2.39 0 01-.35 1.34 1.75 1.75 0 01-1.93-.11 5.67 5.67 0 01-2.57-4.44c0-1.18.6-1.85 1.47-1.82a3.06 3.06 0 01.62.28 6.09 6.09 0 012.76 4.75z"
                  fill="#e7f1f7"
                />
                <path
                  d="M916 519.19a1.91 1.91 0 00-.8 1.76 6.07 6.07 0 002.76 4.75 2.26 2.26 0 001.57.35 1.93 1.93 0 01-2-.2 6 6 0 01-2.75-4.75c.02-1.1.48-1.75 1.22-1.91z"
                  fill="#474756"
                />
                <path
                  d="M918.6 523.12c0 .46-.32.64-.72.41a1.57 1.57 0 01-.72-1.24c0-.46.32-.64.72-.41a1.57 1.57 0 01.72 1.24z"
                  fill="url(#expeditedbackground__radial-gradient-11)"
                />
                <path
                  d="M917.59 520.32a.78.78 0 00.36.62c.19.12.36 0 .36-.2a.81.81 0 00-.36-.62c-.2-.12-.36-.02-.36.2zm0 4.22a.78.78 0 00.36.62c.19.12.36 0 .36-.2a.81.81 0 00-.36-.62c-.2-.12-.36-.03-.36.2zm-.69-4.29c-.14-.24-.37-.37-.51-.29s-.14.34 0 .58.37.38.51.3.1-.34 0-.59zM919 525c.14.24.37.37.51.29s.14-.34 0-.58-.37-.38-.51-.3-.15.37 0 .59zm-3.24-3.66a.78.78 0 00.36.62c.2.12.36 0 .36-.2a.78.78 0 00-.36-.62c-.21-.09-.37 0-.37.23zm3.67 2.12a.78.78 0 00.36.62c.2.12.36 0 .36-.2a.78.78 0 00-.36-.62c-.21-.09-.37.01-.37.23zm-3 0c.14.24.37.37.51.29s.14-.34 0-.58-.37-.38-.51-.3-.18.41-.04.66zM919 522c.14.25.37.38.51.3s.14-.34 0-.59-.37-.37-.51-.29-.15.38 0 .58z"
                  fill="#474756"
                />
                <path
                  d="M919.06 523.12a.74.74 0 01-.3.68l-.45.27c-.19.11-.07-.14-.36-.31a2.35 2.35 0 01-1.07-1.84c0-.33-.31-.33-.12-.44l.48-.27a.77.77 0 01.75.07 2.36 2.36 0 011.07 1.84z"
                  fill="#545466"
                />
                <path
                  d="M918.58 523.4c0 .68-.47 1-1.06.61a2.36 2.36 0 01-1.07-1.84c0-.68.48-.95 1.07-.61a2.33 2.33 0 011.06 1.84z"
                  fill="#545466"
                />
              </g>
              <path
                fill="#e7f1f7"
                d="M922.4 526.95v-4.26l-2.77-4.78-3.91-2.25 2.36-1.35 3.92 2.27 2.77 4.78v4.26l-2.37 1.33z"
              />
              <path
                fill="#dce8f1"
                d="M922.4 522.69l-2.77-4.78 2.37-1.33 2.77 4.78-2.37 1.33z"
              />
              <path
                fill="#cfdee8"
                d="M921.74 526.6v-3.73l-2.59-4.48-3.44-1.99-2.12 1.21v2.94l-.66-.37v-2.95l2.78-1.58 3.92 2.26 2.77 4.78v4.29l-.66-.38z"
              />
              <g>
                <path
                  d="M942.7 516.87l-14.86 8.82a2.38 2.38 0 01-2.34 0l-2.78-1.56v2.53l2.81 1.58a2.33 2.33 0 002.34 0l14.83-8.51z"
                  fill="#cfdee8"
                />
                <path
                  d="M942.44 517.35l-14.6 8.34a2.38 2.38 0 01-2.34 0l-2.78-1.56.76-.43 2 1.14a2.33 2.33 0 002.35 0l13.72-7.91v-1l.89.55a.52.52 0 010 .87z"
                  fill="#e7f1f7"
                />
                <g
                  style={{
                    mixBlendMode: "color-dodge",
                  }}
                >
                  <path
                    fill="url(#expeditedbackground__radial-gradient-12)"
                    d="M941.59 516.75l-.02.01v-.85l.02.01v.83z"
                  />
                  <path
                    d="M922.88 524l2.64 1.48a2.38 2.38 0 002.34 0l14.6-8.34a.47.47 0 00.24-.3.49.49 0 01-.26.47l-14.6 8.34a2.38 2.38 0 01-2.34 0l-2.78-1.56z"
                    fill="url(#expeditedbackground__radial-gradient-13)"
                  />
                </g>
              </g>
              <g>
                <path
                  d="M911.6 495l14.61-8.38 5.51 3.31a7.71 7.71 0 013.85 6.69L921 504.89z"
                  fill="#ff4a4a"
                />
                <path
                  d="M921 504.88l-9.39-5.52V495l5.54 3.24a7.71 7.71 0 013.85 6.64z"
                  fill="#e50000"
                />
              </g>
              <path
                d="M930.07 522l-2.77 1.56a.39.39 0 01-.58-.34V522a1.05 1.05 0 01.56-.92l.87-.45a1 1 0 011.1.08l.86.63a.39.39 0 01-.04.66zM941.59 514.62v1a.37.37 0 01-.21.33l-1.2.61a.29.29 0 01-.4-.35l.49-1.31a.78.78 0 01.39-.43l.4-.19a.37.37 0 01.53.34z"
                style={{
                  mixBlendMode: "multiply",
                }}
                fill="#e7f1f7"
              />
              <path
                d="M930.07 521.8l-2.77 1.57a.39.39 0 01-.58-.34v-1.21a1 1 0 01.56-.92l.87-.46a1.06 1.06 0 011.1.08l.86.63a.39.39 0 01-.04.65zM941.59 514.46v1a.37.37 0 01-.21.33l-1.2.61a.29.29 0 01-.4-.35l.49-1.31a.78.78 0 01.39-.43l.4-.19a.37.37 0 01.53.34z"
                fill="#ffc950"
              />
              <path
                d="M929.83 525.08l-2.08 1.19.61.41a1 1 0 001 0l2.15-1.26-.78-.39a.93.93 0 00-.9.05zM942.19 518.11l-2.19 1.28a1 1 0 00-.42.48l-.53 1.37 2.35-1.37a1 1 0 00.42-.52zM938.52 522.1v-.47a.65.65 0 00-1-.56l-4.27 2.45a2.14 2.14 0 00-1.07 1.85v.37z"
                style={{
                  mixBlendMode: "multiply",
                }}
                fill="#e7f1f7"
              />
              <path
                fill="#e7f1f7"
                d="M933.4 523.89v1.14l4.13-2.32v-1.18l-4.13 2.36z"
              />
              <path
                d="M934.63 520.09c-3.17 1.68-5.47 3.56-5.13 4.2s3.18-.22 6.35-1.91 5.47-3.56 5.13-4.2-3.18.22-6.35 1.91z"
                style={{
                  mixBlendMode: "color-dodge",
                }}
                fill="url(#expeditedbackground__radial-gradient-14)"
              />
            </g>
            <g id="expeditedbackground__truck1">
              <path
                fill="#b4c4cc"
                d="M1026.76 495.89v6.97l1.2-.68v-7l-1.2.71z"
              />
              <path
                d="M1036.9 504.94a2.71 2.71 0 01-1.07 2.44l-2.13 1.24c-.7.38-.25-.5-1.31-1.11a8.47 8.47 0 01-3.85-6.63c0-1.21-1.11-1.21-.43-1.62l2.27-1.25a2.73 2.73 0 012.68.3 8.46 8.46 0 013.84 6.63z"
                fill="#474756"
              />
              <path
                d="M1034.68 506.2c0 2.44-1.72 3.42-3.85 2.2a8.49 8.49 0 01-3.84-6.64c0-2.43 1.72-3.41 3.84-2.19a8.47 8.47 0 013.85 6.63z"
                fill="#545466"
              />
              <path
                d="M1030.8 501.32c-1.37-.79-2.48-.15-2.48 1.42a5.49 5.49 0 002.48 4.29c1.37.79 2.49.15 2.49-1.42a5.51 5.51 0 00-2.49-4.29z"
                fill="url(#expeditedbackground__linear-gradient-21)"
              />
              <path
                d="M1031.69 506.46a5.48 5.48 0 01-2.49-4.29 2.22 2.22 0 01.29-1.17c-.7.1-1.17.72-1.17 1.74a5.49 5.49 0 002.48 4.29c1 .55 1.77.41 2.19-.25a2 2 0 01-1.3-.32z"
                fill="url(#expeditedbackground__linear-gradient-22)"
              />
              <path
                d="M1032.53 505.39c0 1-.69 1.36-1.54.88a3.41 3.41 0 01-1.53-2.65c0-1 .69-1.36 1.53-.87a3.37 3.37 0 011.54 2.64z"
                style={{
                  mixBlendMode: "multiply",
                }}
                fill="url(#expeditedbackground__linear-gradient-23)"
              />
              <path
                d="M1032.4 504.83c0 .83-.58 1.16-1.3.74a2.87 2.87 0 01-1.3-2.24c0-.82.59-1.15 1.3-.74a2.87 2.87 0 011.3 2.24z"
                fill="url(#expeditedbackground__linear-gradient-24)"
              />
              <path
                d="M1032.05 505.08c0 .82-.58 1.15-1.3.74a2.85 2.85 0 01-1.3-2.24c0-.82.58-1.15 1.3-.74a2.85 2.85 0 011.3 2.24z"
                fill="#e7f1f7"
              />
              <path
                d="M1036.76 504.93a2.72 2.72 0 01-1.08 2.45l-2 1.19c-.7.39-.25-.5-1.31-1.11a8.51 8.51 0 01-3.87-6.67c0-1.21-1.12-1.22-.44-1.63l2.18-1.2a2.76 2.76 0 012.7.29 8.53 8.53 0 013.82 6.68z"
                fill="#4c4c5e"
              />
              <path
                d="M1034.62 506.14c0 2.46-1.74 3.44-3.87 2.21a8.51 8.51 0 01-3.87-6.67c0-2.45 1.73-3.44 3.87-2.21a8.55 8.55 0 013.87 6.67z"
                fill="#474756"
              />
              <path
                d="M1033.5 505.5c0 1.75-1.23 2.45-2.75 1.57a6.07 6.07 0 01-2.76-4.75c0-1.75 1.24-2.45 2.76-1.57a6.08 6.08 0 012.75 4.75z"
                fill="#e7f1f7"
              />
              <path
                d="M1033.5 505.5a2.39 2.39 0 01-.34 1.34 1.75 1.75 0 01-1.93-.11 5.68 5.68 0 01-2.58-4.44c0-1.18.61-1.85 1.48-1.82a2.78 2.78 0 01.62.28 6.08 6.08 0 012.75 4.75z"
                fill="#e7f1f7"
              />
              <path
                d="M1029.17 500.41a1.9 1.9 0 00-.79 1.76 6.06 6.06 0 002.75 4.75 2.23 2.23 0 001.58.34 1.9 1.9 0 01-2-.19 6.07 6.07 0 01-2.76-4.75c.05-1.07.51-1.75 1.22-1.91z"
                fill="#474756"
              />
              <path
                d="M1031.8 504.34c0 .46-.33.64-.72.41a1.57 1.57 0 01-.72-1.24c0-.46.32-.64.72-.41a1.6 1.6 0 01.72 1.24z"
                fill="url(#expeditedbackground__radial-gradient-15)"
              />
              <path
                d="M1030.78 501.54a.78.78 0 00.36.62c.2.12.36 0 .36-.2a.78.78 0 00-.36-.62c-.2-.12-.36-.03-.36.2zm0 4.22a.78.78 0 00.36.62c.2.12.36 0 .36-.2a.78.78 0 00-.36-.62c-.2-.12-.36-.03-.36.2zm-.68-4.29c-.14-.24-.37-.37-.51-.29s-.14.34 0 .58.37.38.51.3.14-.34 0-.59zm2.09 4.78c.14.24.36.37.51.29s.14-.34 0-.58-.37-.38-.51-.3-.14.34 0 .59zm-3.25-3.66a.78.78 0 00.36.62c.2.12.36 0 .36-.2a.78.78 0 00-.36-.62c-.2-.12-.36-.03-.36.2zm3.68 2.12a.78.78 0 00.36.62c.2.12.36 0 .36-.2a.78.78 0 00-.36-.62c-.2-.12-.36-.03-.36.2zm-3 0c.14.24.37.37.51.29s.14-.34 0-.58-.37-.38-.51-.3-.17.38-.03.63zm2.6-1.49c.14.25.36.38.51.3s.14-.34 0-.59-.37-.37-.51-.29-.17.36-.03.62z"
                fill="#474756"
              />
              <path
                d="M1032.26 504.34a.76.76 0 01-.3.68s-.45.26-.45.27c-.2.11-.07-.14-.37-.31a2.36 2.36 0 01-1.06-1.84c0-.33-.31-.33-.12-.44l.48-.28a.8.8 0 01.75.08 2.36 2.36 0 011.07 1.84z"
                fill="#545466"
              />
              <path
                d="M1031.78 504.62c0 .68-.48.95-1.07.61a2.35 2.35 0 01-1.06-1.84c0-.68.47-.95 1.06-.61a2.35 2.35 0 011.07 1.84z"
                fill="#545466"
              />
              <path
                d="M1045.15 509.8a2.7 2.7 0 01-1.08 2.44l-2.13 1.23c-.69.39-.25-.49-1.3-1.1a8.44 8.44 0 01-3.85-6.63c0-1.21-1.11-1.21-.43-1.62l2.26-1.25a2.75 2.75 0 012.69.3 8.46 8.46 0 013.84 6.63z"
                fill="#474756"
              />
              <path
                d="M1042.93 511.06c0 2.44-1.73 3.42-3.85 2.2a8.49 8.49 0 01-3.84-6.64c0-2.43 1.72-3.41 3.84-2.19a8.5 8.5 0 013.85 6.63z"
                fill="#545466"
              />
              <path
                d="M1039.05 506.18c-1.37-.79-2.49-.15-2.49 1.42a5.5 5.5 0 002.49 4.29c1.37.79 2.49.15 2.49-1.42a5.51 5.51 0 00-2.49-4.29z"
                fill="url(#expeditedbackground__linear-gradient-25)"
              />
              <path
                d="M1039.93 511.32a5.47 5.47 0 01-2.48-4.29 2.22 2.22 0 01.29-1.17c-.7.1-1.18.72-1.18 1.74a5.5 5.5 0 002.49 4.29c1 .55 1.77.41 2.19-.25a2 2 0 01-1.31-.32z"
                fill="url(#expeditedbackground__linear-gradient-26)"
              />
              <path
                d="M1040.77 510.25c0 1-.68 1.36-1.53.88a3.38 3.38 0 01-1.53-2.65c0-1 .68-1.36 1.53-.87a3.36 3.36 0 011.53 2.64z"
                style={{
                  mixBlendMode: "multiply",
                }}
                fill="url(#expeditedbackground__linear-gradient-27)"
              />
              <path
                d="M1040.65 509.69c0 .83-.58 1.16-1.3.74a2.84 2.84 0 01-1.3-2.24c0-.82.58-1.15 1.3-.74a2.87 2.87 0 011.3 2.24z"
                fill="url(#expeditedbackground__linear-gradient-28)"
              />
              <path
                d="M1040.3 509.94c0 .82-.59 1.15-1.3.74a2.87 2.87 0 01-1.3-2.24c0-.82.58-1.15 1.3-.74a2.88 2.88 0 011.3 2.24z"
                fill="#e7f1f7"
              />
              <path
                d="M1045.12 509.79a2.73 2.73 0 01-1.09 2.46l-2 1.19c-.7.39-.25-.5-1.31-1.11a8.52 8.52 0 01-3.87-6.67c0-1.22-1.12-1.23-.43-1.63l2.18-1.21a2.74 2.74 0 012.7.3 8.54 8.54 0 013.82 6.67z"
                fill="#4c4c5e"
              />
              <path
                d="M1043 511c0 2.45-1.73 3.44-3.87 2.21a8.54 8.54 0 01-3.86-6.68c0-2.45 1.73-3.43 3.86-2.2A8.51 8.51 0 011043 511z"
                fill="#474756"
              />
              <path
                d="M1041.86 510.37c0 1.75-1.23 2.45-2.76 1.57a6.08 6.08 0 01-2.75-4.75c0-1.75 1.23-2.45 2.75-1.58a6.06 6.06 0 012.76 4.76z"
                fill="#e7f1f7"
              />
              <path
                d="M1041.86 510.37a2.39 2.39 0 01-.35 1.34 1.74 1.74 0 01-1.93-.12 5.65 5.65 0 01-2.57-4.43c0-1.18.6-1.85 1.47-1.82a3 3 0 01.62.27 6.06 6.06 0 012.76 4.76z"
                fill="#e7f1f7"
              />
              <path
                d="M1037.53 505.27a1.94 1.94 0 00-.8 1.77 6.09 6.09 0 002.76 4.75 2.21 2.21 0 001.57.34 2 2 0 01-2-.19 6.08 6.08 0 01-2.75-4.75c.04-1.08.5-1.76 1.22-1.92z"
                fill="#474756"
              />
              <path
                d="M1040.15 509.21c0 .45-.32.64-.72.41a1.59 1.59 0 01-.72-1.25c0-.45.32-.64.72-.41a1.59 1.59 0 01.72 1.25z"
                fill="url(#expeditedbackground__radial-gradient-16)"
              />
              <path
                d="M1039.14 506.41a.78.78 0 00.36.62c.2.12.36 0 .36-.2a.81.81 0 00-.36-.63c-.2-.11-.36-.02-.36.21zm0 4.22a.79.79 0 00.36.62c.2.11.36 0 .36-.21a.79.79 0 00-.36-.62c-.2-.11-.36-.02-.36.21zm-.69-4.29c-.14-.24-.37-.37-.51-.29s-.14.34 0 .58.37.37.51.29.14-.34 0-.58zm2.09 4.77c.14.25.37.38.51.3s.14-.34 0-.59-.37-.37-.51-.29-.14.34 0 .58zm-3.24-3.65a.79.79 0 00.36.62c.2.11.36 0 .36-.21a.79.79 0 00-.36-.62c-.2-.11-.36-.02-.36.21zm3.67 2.12a.81.81 0 00.36.62c.2.12.36 0 .36-.2a.81.81 0 00-.36-.63.22.22 0 00-.33.21zm-3 0c.14.24.37.38.51.3s.14-.35 0-.59-.37-.37-.51-.29-.17.37-.03.61zm2.6-1.48c.14.24.37.37.51.29s.14-.34 0-.58-.37-.37-.51-.29-.17.37-.03.61z"
                fill="#474756"
              />
              <path
                d="M1040.61 509.21a.75.75 0 01-.3.68l-.45.26c-.19.11-.07-.13-.36-.3a2.35 2.35 0 01-1.07-1.84c0-.33-.3-.34-.12-.45l.49-.27a.73.73 0 01.74.08 2.35 2.35 0 011.07 1.84z"
                fill="#545466"
              />
              <path
                d="M1040.13 509.49c0 .67-.47.94-1.06.6a2.34 2.34 0 01-1.07-1.83c0-.68.48-.95 1.07-.61a2.33 2.33 0 011.06 1.84z"
                fill="#545466"
              />
              <g>
                <path
                  fill="#9aa0a6"
                  d="M1059.6 515.46v3.67l-12.39-7.19v-3.65l12.39 7.17zM1059.6 515.46v3.67l3.47-1.98v-3.68l-3.47 1.99z"
                />
                <path
                  fill="url(#expeditedbackground__linear-gradient-29)"
                  d="M1063.07 513.47l-3.47 1.99-12.39-7.17 3.49-1.99 12.37 7.17z"
                />
              </g>
              <g>
                <path
                  fill="#8c9399"
                  d="M1024.31 494.7v4.67l-.46-.36v-4.66l.46.35zM1024.31 494.7v4.67l11.14-6.26v-4.68l-11.14 6.27z"
                />
                <path
                  fill="#e7f1f7"
                  d="M1035.45 488.43l-11.14 6.27-.46-.35 11.15-6.27.45.35z"
                />
              </g>
              <path
                fill="#c5d4dd"
                d="M1044.89 506.35v6.97l-1.24-.72v-5.54l-16.88-9.75v5.55l-1.24-.72v-6.97l19.36 11.18z"
              />
              <path
                fill="#b4c4cc"
                d="M1044.9 506.37v6.96l1.2-.67v-7.01l-1.2.72z"
              />
              <g>
                <path
                  fill="#b4c4cc"
                  d="M1057.56 518.52l-.64.37-10.27-5.92.64-.36 10.27 5.91z"
                />
                <path
                  fill="#b4c4cc"
                  d="M1046.63 509.21v3.77l.66-.37v-3.79l-.66.39z"
                />
                <path
                  d="M1045.7 508.17v5.31l12.16 7v-5.36zm1 1.64l10.26 5.91v3.17l-10.26-5.95z"
                  fill="#c5d4dd"
                />
                <path
                  fill="#b4c4cc"
                  d="M1057.85 515.17v5.36l.8-.4v-5.39l-.8.43z"
                />
                <path
                  fill="#b4c4cc"
                  d="M1058.65 514.74l-.8.43-12.15-7 .81-.43 12.14 7z"
                />
              </g>
              <g>
                <path
                  d="M1069.45 523.94a2.7 2.7 0 01-1.08 2.44l-2.13 1.23c-.69.39-.25-.49-1.3-1.1a8.48 8.48 0 01-3.85-6.64c0-1.2-1.11-1.21-.43-1.61l2.26-1.25a2.74 2.74 0 012.69.29 8.49 8.49 0 013.84 6.64z"
                  fill="#474756"
                />
                <path
                  d="M1067.23 525.2c0 2.44-1.73 3.42-3.85 2.19a8.46 8.46 0 01-3.84-6.63c0-2.44 1.72-3.42 3.84-2.19a8.47 8.47 0 013.85 6.63z"
                  fill="#545466"
                />
                <path
                  d="M1063.35 520.32c-1.37-.79-2.49-.16-2.49 1.42a5.48 5.48 0 002.49 4.28c1.37.79 2.49.16 2.49-1.41a5.48 5.48 0 00-2.49-4.29z"
                  fill="#b4c4cc"
                />
                <path
                  d="M1064.6 524.07c0 .83-.59 1.16-1.3.74a2.84 2.84 0 01-1.3-2.24c0-.82.58-1.15 1.3-.74a2.9 2.9 0 011.3 2.24z"
                  fill="#e7f1f7"
                />
                <path
                  d="M1069.3 523.86a2.72 2.72 0 01-1.08 2.46l-2 1.19c-.7.39-.25-.5-1.32-1.11a8.53 8.53 0 01-3.86-6.67c0-1.21-1.12-1.22-.44-1.63l2.18-1.21a2.8 2.8 0 012.7.3 8.52 8.52 0 013.82 6.67z"
                  fill="#4c4c5e"
                />
                <path
                  d="M1067.16 525.08c0 2.45-1.74 3.44-3.87 2.21a8.52 8.52 0 01-3.87-6.67c0-2.45 1.73-3.44 3.87-2.21a8.54 8.54 0 013.87 6.67z"
                  fill="#474756"
                />
                <path
                  d="M1066 524.44c0 1.75-1.23 2.45-2.75 1.57a6.09 6.09 0 01-2.76-4.75c0-1.75 1.24-2.45 2.76-1.57a6.06 6.06 0 012.75 4.75z"
                  fill="#e7f1f7"
                />
                <path
                  d="M1066 524.44a2.31 2.31 0 01-.35 1.34 1.72 1.72 0 01-1.92-.12 5.67 5.67 0 01-2.58-4.43c0-1.18.61-1.85 1.47-1.82a2.84 2.84 0 01.63.28 6.06 6.06 0 012.75 4.75z"
                  fill="#e7f1f7"
                />
                <path
                  d="M1061.71 519.35a1.9 1.9 0 00-.79 1.76 6.08 6.08 0 002.75 4.75 2.23 2.23 0 001.58.34 1.93 1.93 0 01-2-.19 6.09 6.09 0 01-2.76-4.75c.04-1.08.51-1.76 1.22-1.91z"
                  fill="#474756"
                />
                <path
                  d="M1064.34 523.28c0 .46-.33.64-.72.41a1.59 1.59 0 01-.72-1.24c0-.46.32-.64.72-.41a1.6 1.6 0 01.72 1.24z"
                  fill="url(#expeditedbackground__radial-gradient-17)"
                />
                <path
                  d="M1063.32 520.48a.78.78 0 00.36.62c.2.12.36 0 .36-.2a.78.78 0 00-.36-.62c-.2-.12-.36-.03-.36.2zm0 4.22a.78.78 0 00.36.62c.2.11.36 0 .36-.21a.81.81 0 00-.36-.62c-.2-.11-.36-.02-.36.21zm-.68-4.29c-.15-.24-.37-.37-.51-.29s-.14.34 0 .58.36.38.51.3.14-.35 0-.59zm2.09 4.77c.14.25.36.38.5.3s.15-.34 0-.59-.36-.37-.5-.29-.15.34 0 .58zm-3.25-3.65a.78.78 0 00.36.62c.2.12.36 0 .36-.21a.81.81 0 00-.36-.62c-.2-.11-.36-.02-.36.21zm3.68 2.12a.78.78 0 00.36.62c.2.12.36 0 .36-.2a.78.78 0 00-.36-.62c-.2-.12-.36-.03-.36.2zm-3 0c.14.25.36.38.51.3s.14-.34 0-.59-.37-.37-.51-.29-.16.37-.03.61zm2.6-1.48c.14.24.36.38.5.3s.15-.35 0-.59-.36-.37-.5-.29-.18.41-.03.61z"
                  fill="#474756"
                />
                <path
                  d="M1064.79 523.28a.77.77 0 01-.29.68l-.45.27c-.2.1-.07-.14-.37-.31a2.36 2.36 0 01-1.06-1.84c0-.33-.31-.33-.12-.45l.48-.27a.8.8 0 01.75.08 2.35 2.35 0 011.06 1.84z"
                  fill="#545466"
                />
                <path
                  d="M1064.32 523.56c0 .67-.48 1-1.07.61a2.35 2.35 0 01-1.06-1.84c0-.68.47-1 1.06-.61a2.35 2.35 0 011.07 1.84z"
                  fill="#545466"
                />
              </g>
              <g>
                <path
                  fill="#cfdee8"
                  d="M1083.44 530.04v5.36l-16.05-9.26v-5.31l16.05 9.21z"
                />
                <path
                  style={{
                    mixBlendMode: "multiply",
                  }}
                  fill="#e7f1f7"
                  d="M1071.96 523.49v5.17l-.25-.14v-5.18l.25.15z"
                />
                <path
                  fill="#e7f1f7"
                  d="M1083.43 530.04v5.36l12.67-7.2v-5.4l-12.67 7.24zM1096.1 522.8l-12.67 7.24-16.04-9.21 12.68-7.23 16.03 9.2z"
                />
              </g>
              <g fill="#545466">
                <path d="M1081.28 526.47v1.78l-57.75-33.58v-1.73l57.75 33.53z" />
                <path d="M1081.27 526.47v1.78l15.84-9.01v-1.82l-15.84 9.05z" />
                <path d="M1097.11 517.42l-15.84 9.05-57.74-33.53 15.85-9.03 57.73 33.51z" />
              </g>
              <g>
                <path
                  fill="#cfdee8"
                  d="M1081.28 507.11v19.45l-57.75-33.59v-19.39l57.75 33.53z"
                />
                <path
                  style={{
                    mixBlendMode: "multiply",
                  }}
                  fill="#e6e7e8"
                  d="M1079.91 507.89l-55.01-31.93v16.23l55.01 31.99v-16.29z"
                />
                <g fill="#dce8f1">
                  <path
                    style={{
                      mixBlendMode: "multiply",
                    }}
                    d="M1078.16 507.11l.72.48v16.28l-.72-.48v-16.28zM1078.92 507.52l.27-.01v16.28l-.27.01v-16.28zM1075.8 505.74l.72.48v16.28l-.72-.48v-16.28zM1076.56 506.15l.27-.01v16.28l-.27.01v-16.28zM1073.44 504.37l.72.48v16.28l-.72-.48v-16.28zM1074.19 504.78l.28-.01v16.28l-.28.01v-16.28zM1071.08 503l.72.47v16.28l-.72-.47V503zM1071.84 503.41l.27-.01v16.28l-.27.01v-16.28zM1068.72 501.63l.72.47v16.28l-.72-.47v-16.28zM1069.47 502.04l.28-.02v16.29l-.28.01v-16.28zM1066.36 500.25l.72.48v16.28l-.72-.48v-16.28zM1067.11 500.67l.28-.02v16.28l-.28.02v-16.28zM1064 498.88l.72.48v16.28l-.72-.48v-16.28zM1064.75 499.3l.28-.02v16.28l-.28.01V499.3zM1061.64 497.51l.72.48v16.28l-.72-.48v-16.28zM1062.39 497.92l.28-.01v16.28l-.28.01v-16.28zM1059.28 496.14l.72.48v16.28l-.72-.48v-16.28zM1060.03 496.55l.28-.01v16.28l-.28.01v-16.28zM1056.92 494.77l.72.48v16.28l-.72-.48v-16.28zM1057.67 495.18l.27-.01v16.28l-.27.01v-16.28zM1054.56 493.4l.72.48v16.28l-.72-.48V493.4zM1055.31 493.81l.28-.01v16.28l-.28.01v-16.28zM1052.2 492.03l.72.47v16.29l-.72-.48v-16.28zM1052.95 492.44l.27-.01v16.28l-.27.01v-16.28z"
                  />
                  <g>
                    <path
                      style={{
                        mixBlendMode: "multiply",
                      }}
                      d="M1049.84 490.66l.72.47v16.29l-.72-.48v-16.28zM1050.59 491.07l.27-.01v16.28l-.27.01v-16.28z"
                    />
                  </g>
                  <g>
                    <path
                      style={{
                        mixBlendMode: "multiply",
                      }}
                      d="M1047.48 489.29l.72.47v16.28l-.72-.47v-16.28zM1048.23 489.7l.27-.01v16.28l-.27.01V489.7z"
                    />
                  </g>
                  <g>
                    <path
                      style={{
                        mixBlendMode: "multiply",
                      }}
                      d="M1045.12 487.92l.72.47v16.28l-.72-.48v-16.27zM1045.87 488.33l.27-.02v16.29l-.27.01v-16.28z"
                    />
                  </g>
                  <g>
                    <path
                      style={{
                        mixBlendMode: "multiply",
                      }}
                      d="M1042.76 486.54l.71.48v16.28l-.71-.48v-16.28zM1043.51 486.95l.27-.01v16.28l-.27.01v-16.28z"
                    />
                  </g>
                  <g>
                    <path
                      style={{
                        mixBlendMode: "multiply",
                      }}
                      d="M1040.39 485.17l.73.48v16.28l-.73-.48v-16.28zM1041.15 485.58l.27-.01v16.28l-.27.01v-16.28z"
                    />
                  </g>
                  <g>
                    <path
                      style={{
                        mixBlendMode: "multiply",
                      }}
                      d="M1038.04 483.8l.71.48v16.28l-.71-.48V483.8zM1038.79 484.21l.27-.01v16.28l-.27.01v-16.28z"
                    />
                  </g>
                  <g>
                    <path
                      style={{
                        mixBlendMode: "multiply",
                      }}
                      d="M1035.67 482.43l.72.48v16.28l-.72-.48v-16.28zM1036.43 482.84l.27-.01v16.28l-.27.01v-16.28z"
                    />
                  </g>
                  <g>
                    <path
                      style={{
                        mixBlendMode: "multiply",
                      }}
                      d="M1033.31 481.06l.72.48v16.28l-.72-.48v-16.28zM1034.07 481.47l.27-.01v16.28l-.27.01v-16.28z"
                    />
                  </g>
                  <g>
                    <path
                      style={{
                        mixBlendMode: "multiply",
                      }}
                      d="M1030.95 479.69l.72.48v16.28l-.72-.48v-16.28zM1031.71 480.1l.27-.01v16.28l-.27.01V480.1z"
                    />
                  </g>
                  <g>
                    <path
                      style={{
                        mixBlendMode: "multiply",
                      }}
                      d="M1028.59 478.32l.72.47v16.28l-.72-.47v-16.28zM1029.35 478.73l.27-.01V495l-.27.01v-16.28z"
                    />
                  </g>
                  <g>
                    <path
                      style={{
                        mixBlendMode: "multiply",
                      }}
                      d="M1026.23 476.95l.72.47v16.28l-.72-.47v-16.28zM1026.98 477.36l.28-.01v16.28l-.28.01v-16.28z"
                    />
                  </g>
                </g>
                <path
                  fill="#dce8f1"
                  d="M1081.27 507.11v19.45l15.84-9.02v-19.49l-15.84 9.06z"
                />
                <path
                  style={{
                    mixBlendMode: "multiply",
                  }}
                  fill="#e6e7e8"
                  d="M1095.74 516.75v-16.34l-13.1 7.49v16.3l13.1-7.45z"
                />
                <path
                  fill="#e7f1f7"
                  d="M1097.11 498.05l-15.84 9.06-57.74-33.53 15.85-9.04 57.73 33.51z"
                />
                <g fill="#dce8f1">
                  <path
                    style={{
                      mixBlendMode: "multiply",
                    }}
                    d="M1083.97 507.4l-.72.48v16.28l.72-.48V507.4zM1083.22 507.81l-.28-.01v16.28l.28.01v-16.28zM1086.11 506.15l-.73.48v16.28l.73-.48v-16.28zM1085.35 506.56l-.27-.01v16.28l.27.01v-16.28zM1088.24 504.89l-.72.48v16.28l.72-.48v-16.28zM1087.48 505.31l-.27-.02v16.28l.27.02v-16.28z"
                  />
                  <g>
                    <path
                      style={{
                        mixBlendMode: "multiply",
                      }}
                      d="M1090.37 503.64l-.72.48v16.28l.72-.48v-16.28zM1089.62 504.05l-.27-.01v16.28l.27.01v-16.28z"
                    />
                  </g>
                  <g>
                    <path
                      style={{
                        mixBlendMode: "multiply",
                      }}
                      d="M1092.51 502.39l-.72.47v16.28l.72-.47v-16.28zM1091.75 502.8l-.27-.01v16.28l.27.01V502.8z"
                    />
                  </g>
                  <g>
                    <path
                      style={{
                        mixBlendMode: "multiply",
                      }}
                      d="M1094.64 501.13l-.72.48v16.28l.72-.48v-16.28zM1093.89 501.54l-.28-.01v16.28l.28.01v-16.28z"
                    />
                  </g>
                </g>
              </g>
              <g>
                <path
                  d="M1097.05 505.58l10.41 6.07A5.34 5.34 0 011110 515l1.47 5.77a21.4 21.4 0 01.66 5.28v6.76l-14.85 8.41v-6a21.48 21.48 0 00-1-6.47l-1.9-6a5.37 5.37 0 00-2.47-3.06l-9.74-5.68z"
                  fill="red"
                />
                <path
                  d="M1097.3 535.19v6l-8-4.56-.61-3.51-6.55-3.9V514l9.77 5.7a5.38 5.38 0 012.49 3.07l1.87 6a21.5 21.5 0 011.03 6.42z"
                  fill="#e50000"
                />
                <path
                  d="M1093.54 523.07l1.88 6a.47.47 0 01-.69.55l-5.89-3.43a1.28 1.28 0 01-.63-1.1v-4.91a.48.48 0 01.72-.41l3.65 2.13a2.1 2.1 0 011 1.17z"
                  fill="#26262e"
                />
                <path
                  d="M1095 529.51a.31.31 0 00.25-.13.26.26 0 000-.27l-1.87-6a2 2 0 00-.89-1.09l-3.65-2.13h-.11c-.23 0-.35.11-.35.28v4.91a1.09 1.09 0 00.55.95l5.88 3.43z"
                  fill="#616173"
                />
                <path
                  d="M1099.83 530.49v2.22a3.06 3.06 0 004.59 2.66l2.13-1.21a7.49 7.49 0 003.77-6.5v-3.21z"
                  fill="#e50000"
                />
                <path
                  d="M1102.9 535a2.24 2.24 0 001.12-.3l2.12-1.21a6.7 6.7 0 003.36-5.79v-1.79l-8.85 5.09v1.75a2.26 2.26 0 002.25 2.25z"
                  fill="#616173"
                />
                <path
                  d="M1108.78 530.67l-7 4a2.08 2.08 0 00.43.19l6.15-3.54c.18-.21.3-.43.42-.65zm.59-1.71l-8.44 4.85a2.44 2.44 0 00.22.31l8.1-4.66a4.05 4.05 0 00.12-.46zm.13-1.44l-8.85 5.09V533.03l8.82-5.07v-.3zm-8.85 3.72v.43l8.85-5.09v-.43z"
                  fill="#474756"
                  opacity={0.5}
                />
                <path
                  d="M1097.81 529.68a1 1 0 00.44-.11l12-6.84a1.49 1.49 0 00.7-1.65l-1.51-5.94a4.32 4.32 0 00-.32-.89.56.56 0 00-.48-.31.59.59 0 00-.26.07l-13.13 7.54a.87.87 0 00-.38 1l2 6.49a.89.89 0 00.84.62z"
                  fill="#26262e"
                />
                <path
                  d="M1097.82 529.51a.69.69 0 00.34-.09l12-6.84a1.32 1.32 0 00.63-1.45l-1.51-6a5.08 5.08 0 00-.31-.85.37.37 0 00-.33-.22.34.34 0 00-.17 0l-13.13 7.54a.69.69 0 00-.31.82l2.06 6.49a.7.7 0 00.73.6z"
                  fill="#616173"
                />
                <path
                  d="M1084.43 517.72l1.76 1a.81.81 0 01.4.7v4.66a.11.11 0 01-.1.1l-1.68-1a.78.78 0 01-.38-.66v-4.85z"
                  fill="#26262e"
                />
                <path
                  d="M1086.42 519.44a.62.62 0 00-.32-.55l-1.5-.88v4.56a.58.58 0 00.29.51l1.53.88z"
                  fill="#616173"
                />
                <path
                  style={{
                    mixBlendMode: "multiply",
                  }}
                  fill="url(#expeditedbackground__linear-gradient-30)"
                  d="M1088.64 528.84l-6.45.42 6.53 3.86-.08-4.28z"
                />
              </g>
              <path
                fill="#b4c4cc"
                d="M1084.16 532.13v2.94l2.23-1.25-.14-2.94-2.09 1.25z"
              />
              <g>
                <path
                  d="M1094.13 538.23a2.72 2.72 0 01-1.08 2.45l-2 1.19c-.7.39-.25-.5-1.31-1.11a8.51 8.51 0 01-3.87-6.67c0-1.21-1.12-1.22-.44-1.63l2.18-1.2a2.74 2.74 0 012.7.3 8.51 8.51 0 013.82 6.67z"
                  fill="#4c4c5e"
                />
                <path
                  d="M1092 539.44c0 2.46-1.73 3.44-3.87 2.21a8.51 8.51 0 01-3.87-6.67c0-2.45 1.73-3.44 3.87-2.21a8.52 8.52 0 013.87 6.67z"
                  fill="#474756"
                />
                <path
                  d="M1090.87 538.8c0 1.75-1.23 2.45-2.75 1.57a6.06 6.06 0 01-2.76-4.75c0-1.75 1.24-2.45 2.76-1.57a6.08 6.08 0 012.75 4.75z"
                  fill="#e7f1f7"
                />
                <path
                  d="M1090.87 538.8a2.39 2.39 0 01-.34 1.34 1.75 1.75 0 01-1.93-.11 5.67 5.67 0 01-2.57-4.44c0-1.18.6-1.85 1.47-1.82a3.32 3.32 0 01.62.28 6.08 6.08 0 012.75 4.75z"
                  fill="#e7f1f7"
                />
                <path
                  d="M1086.54 533.71a1.92 1.92 0 00-.79 1.76 6 6 0 002.76 4.75 2.2 2.2 0 001.57.35 1.93 1.93 0 01-2-.2 6.06 6.06 0 01-2.76-4.75c.04-1.07.51-1.75 1.22-1.91z"
                  fill="#474756"
                />
                <path
                  d="M1089.17 537.64c0 .46-.32.64-.72.41a1.57 1.57 0 01-.72-1.24c0-.46.32-.64.72-.41a1.57 1.57 0 01.72 1.24z"
                  fill="url(#expeditedbackground__radial-gradient-18)"
                />
                <path
                  d="M1088.15 534.84a.81.81 0 00.36.63c.2.11.36 0 .36-.21a.78.78 0 00-.36-.62c-.2-.12-.36-.02-.36.2zm0 4.22a.78.78 0 00.36.62c.2.12.36 0 .36-.2a.78.78 0 00-.36-.62c-.2-.12-.36-.03-.36.2zm-.68-4.29c-.14-.24-.37-.37-.51-.29s-.14.34 0 .58.37.38.51.3.14-.36 0-.59zm2.09 4.78c.14.24.37.37.51.29s.14-.34 0-.58-.37-.38-.51-.3-.14.34 0 .59zm-3.25-3.66a.81.81 0 00.36.62c.2.12.36 0 .36-.2a.78.78 0 00-.36-.62c-.19-.12-.36-.03-.36.2zM1090 538a.78.78 0 00.36.62c.2.12.36 0 .36-.2a.78.78 0 00-.36-.62c-.21-.11-.36-.01-.36.2zm-3 0c.14.24.37.37.51.29s.14-.34 0-.58-.37-.38-.51-.3-.18.39 0 .64zm2.6-1.49c.14.25.37.38.51.3s.14-.34 0-.59-.37-.37-.51-.29-.18.39-.04.63z"
                  fill="#474756"
                />
                <path
                  d="M1089.63 537.64a.76.76 0 01-.3.68l-.45.27c-.19.11-.07-.14-.36-.31a2.34 2.34 0 01-1.07-1.83c0-.34-.31-.34-.12-.45l.48-.27a.77.77 0 01.75.07 2.36 2.36 0 011.07 1.84z"
                  fill="#545466"
                />
                <path
                  d="M1089.15 537.92c0 .68-.48 1-1.07.61a2.36 2.36 0 01-1.06-1.84c0-.68.48-1 1.06-.61a2.36 2.36 0 011.07 1.84z"
                  fill="#545466"
                />
              </g>
              <path
                fill="#e7f1f7"
                d="M1092.96 541.47v-4.26l-2.77-4.78-3.9-2.25 2.35-1.34 3.92 2.26 2.78 4.78v4.26l-2.38 1.33z"
              />
              <path
                fill="#dce8f1"
                d="M1092.96 537.21l-2.77-4.78 2.37-1.33 2.78 4.78-2.38 1.33z"
              />
              <path
                fill="#cfdee8"
                d="M1092.31 541.12v-3.73l-2.6-4.48-3.44-1.99-2.11 1.21v2.94l-.66-.37v-2.95l2.77-1.58 3.92 2.26 2.77 4.78v4.29l-.65-.38z"
              />
              <g>
                <path
                  d="M1113.26 531.39l-14.85 8.82a2.38 2.38 0 01-2.34 0l-2.78-1.56v2.53l2.8 1.58a2.35 2.35 0 002.35 0l14.82-8.51z"
                  fill="#cfdee8"
                />
                <path
                  d="M1113 531.87l-14.6 8.34a2.38 2.38 0 01-2.34 0l-2.78-1.56.76-.43 2 1.14a2.37 2.37 0 002.36 0l13.72-7.92v-1l.9.55a.52.52 0 01-.02.88z"
                  fill="#e7f1f7"
                />
                <g
                  style={{
                    mixBlendMode: "color-dodge",
                  }}
                >
                  <path
                    fill="url(#expeditedbackground__radial-gradient-19)"
                    d="M1112.15 531.27l-.01.01-.01-.85.02.01v.83z"
                  />
                  <path
                    d="M1093.45 538.56l2.64 1.48a2.36 2.36 0 002.33 0l14.58-8.34a.54.54 0 00.24-.3.51.51 0 01-.26.47l-14.6 8.34a2.38 2.38 0 01-2.34 0l-2.78-1.56z"
                    fill="url(#expeditedbackground__radial-gradient-20)"
                  />
                </g>
              </g>
              <g>
                <path
                  d="M1082.16 509.5l14.62-8.38 5.51 3.31a7.73 7.73 0 013.85 6.69l-14.58 8.3z"
                  fill="#ff4a4a"
                />
                <path
                  d="M1091.55 519.4l-9.4-5.51v-4.42l5.55 3.24a7.73 7.73 0 013.85 6.69z"
                  fill="#e50000"
                />
              </g>
              <path
                d="M1100.63 536.53l-2.77 1.56a.38.38 0 01-.57-.34v-1.2a1 1 0 01.55-.93l.87-.45a1 1 0 011.1.08l.86.63a.38.38 0 01-.04.65zM1112.15 529.14v1a.38.38 0 01-.2.33l-1.2.61a.28.28 0 01-.4-.35l.48-1.31a.77.77 0 01.4-.43l.39-.19a.37.37 0 01.53.34z"
                style={{
                  mixBlendMode: "multiply",
                }}
                fill="#e7f1f7"
              />
              <path
                d="M1100.63 536.32l-2.77 1.57a.39.39 0 01-.57-.34v-1.21a1 1 0 01.55-.92l.87-.46a1.06 1.06 0 011.1.08l.86.63a.38.38 0 01-.04.65zM1112.15 529v1a.38.38 0 01-.2.33l-1.2.61a.28.28 0 01-.4-.35l.48-1.31a.77.77 0 01.4-.43l.39-.19a.37.37 0 01.53.34z"
                fill="#ffc950"
              />
              <path
                d="M1100.39 539.6l-2.08 1.19.62.41a1 1 0 001 0l2.15-1.26-.78-.39a1 1 0 00-.91.05zM1112.76 532.63l-2.24 1.28a1 1 0 00-.41.48l-.54 1.37 2.35-1.37a.91.91 0 00.42-.52zM1109.08 536.62v-.47a.65.65 0 00-1-.56l-4.27 2.45a2.14 2.14 0 00-1.07 1.85v.37z"
                style={{
                  mixBlendMode: "multiply",
                }}
                fill="#e7f1f7"
              />
              <path
                fill="#e7f1f7"
                d="M1103.97 538.41v1.14l4.12-2.32v-1.18l-4.12 2.36z"
              />
              <path
                d="M1105.2 534.61c-3.18 1.68-5.47 3.56-5.14 4.2s3.19-.22 6.36-1.91 5.46-3.56 5.13-4.2-3.18.22-6.35 1.91z"
                style={{
                  mixBlendMode: "color-dodge",
                }}
                fill="url(#expeditedbackground__radial-gradient-21)"
              />
            </g>
            <g>
              <g
                style={{
                  isolation: "isolate",
                }}
              >
                <path
                  fill="#96654d"
                  d="M833.64 452.39l.01 1.57 12.98 7.32-.01-1.57-12.98-7.32z"
                />
                <path
                  fill="#96654d"
                  d="M846.62 459.71l.01 1.57 51.06-29.48-.01-1.57-51.06 29.48z"
                />
                <path
                  fill="#a06e52"
                  d="M833.64 452.39l12.98 7.32 51.06-29.48-12.98-7.32-51.06 29.48z"
                />
              </g>
              <g
                style={{
                  isolation: "isolate",
                }}
              >
                <path
                  fill="#474756"
                  d="M888.88 430.86v.67l-2.9 1.68.01-.67 2.89-1.68z"
                />
                <path
                  fill="#4c4c5e"
                  d="M885.99 432.54l-.01.67-2.91-1.68.01-.67 2.91 1.68z"
                />
                <path
                  fill="#595959"
                  d="M888.88 430.86l-2.89 1.68-2.91-1.68 2.89-1.68 2.91 1.68z"
                />
              </g>
              <g
                style={{
                  isolation: "isolate",
                }}
              >
                <path
                  fill="#474756"
                  d="M887.51 382.23v48.63l-1.53.89v-48.63l1.53-.89z"
                />
                <path
                  fill="#4c4c5e"
                  d="M885.98 383.12v48.63l-1.54-.89v-48.63l1.54.89z"
                />
                <path
                  fill="#616173"
                  d="M887.51 382.23l-1.53.89-1.54-.89 1.53-.89 1.54.89z"
                />
              </g>
              <g
                style={{
                  isolation: "isolate",
                }}
              >
                <path
                  fill="#616173"
                  d="M886.88 400.47l.88-.52 9.92 5.73-.89.51-9.91-5.72z"
                />
                <path
                  fill="#4c4c5e"
                  d="M896.79 406.19l.89-.51v.51l-.89.52v-.52z"
                />
                <path
                  fill="#474756"
                  d="M897.65 391.38l.89-.51-10.78 9.08-.88.52 10.77-9.09z"
                />
                <path
                  fill="#4c4c5e"
                  d="M897.23 390.94l.89-.51.42.44-.89.51-.42-.44z"
                />
                <path
                  fill="#4c4c5e"
                  d="M897.23 390.94l.42.44-10.77 9.09 9.91 5.72v.52l-10.59-6.11 11.03-9.66z"
                />
              </g>
              <g
                style={{
                  isolation: "isolate",
                }}
              >
                <path
                  fill="#616173"
                  d="M886.88 415.51l.88-.52 9.92 5.73-.89.51-9.91-5.72z"
                />
                <path
                  fill="#4c4c5e"
                  d="M896.79 421.23l.89-.51v.51l-.89.52v-.52z"
                />
                <path
                  fill="#474756"
                  d="M897.65 406.42l.89-.51-10.78 9.08-.88.52 10.77-9.09z"
                />
                <path
                  fill="#4c4c5e"
                  d="M897.23 405.98l.89-.52.42.45-.89.51-.42-.44z"
                />
                <path
                  fill="#4c4c5e"
                  d="M897.23 405.98l.42.44-10.77 9.09 9.91 5.72v.52l-10.59-6.12 11.03-9.65z"
                />
              </g>
              <g
                style={{
                  isolation: "isolate",
                }}
              >
                <path
                  fill="#616173"
                  d="M886.88 430.55l.88-.52 9.92 5.73-.89.51-9.91-5.72z"
                />
                <path
                  fill="#4c4c5e"
                  d="M896.79 436.27l.89-.51v.51l-.89.52v-.52z"
                />
                <path
                  fill="#474756"
                  d="M897.65 421.46l.89-.51-10.78 9.08-.88.52 10.77-9.09z"
                />
                <path
                  fill="#4c4c5e"
                  d="M897.23 421.02l.89-.52.42.45-.89.51-.42-.44z"
                />
                <path
                  fill="#4c4c5e"
                  d="M897.23 421.02l.42.44-10.77 9.09 9.91 5.72v.52l-10.59-6.12 11.03-9.65z"
                />
              </g>
              <g
                style={{
                  isolation: "isolate",
                }}
              >
                <path
                  fill="#474756"
                  d="M901.37 438.07v.67l-2.89 1.68v-.67l2.89-1.68z"
                />
                <path
                  fill="#4c4c5e"
                  d="M898.48 439.75v.67l-2.91-1.68v-.67l2.91 1.68z"
                />
                <path
                  fill="#595959"
                  d="M901.37 438.07l-2.89 1.68-2.91-1.68 2.89-1.68 2.91 1.68z"
                />
              </g>
              <g
                style={{
                  isolation: "isolate",
                }}
              >
                <path
                  fill="#474756"
                  d="M900.01 389.44l-.01 48.64-1.53.89.01-48.64 1.53-.89z"
                />
                <path
                  fill="#4c4c5e"
                  d="M898.48 390.33l-.01 48.64-1.54-.89v-48.64l1.55.89z"
                />
                <path
                  fill="#616173"
                  d="M900.01 389.44l-1.53.89-1.55-.89 1.54-.89 1.54.89z"
                />
              </g>
              <g>
                <g
                  style={{
                    isolation: "isolate",
                  }}
                >
                  <path
                    fill="#f2c0a7"
                    d="M874.35 423.85l.02 8.14 9.06 5.27-.02-8.14-9.06-5.27z"
                  />
                  <path
                    fill="#e2af98"
                    d="M877.88 425.91v1.77l.63.36.72.42-.01-1.77-1.34-.78z"
                  />
                  <path
                    fill="#fed0b5"
                    d="M883.41 429.12l.02 8.14 10.7-6.18-.03-8.14-10.69 6.18z"
                  />
                  <path
                    fill="#ffdcc5"
                    d="M874.35 423.85l9.06 5.27 10.69-6.18-9.06-5.26-10.69 6.17z"
                  />
                  <path
                    fill="#fed0b5"
                    d="M877.88 425.91l1.34.78 10.69-6.18-1.34-.78-10.69 6.18z"
                  />
                </g>
                <g fill="#616173">
                  <path d="M890.65 431a1.23 1.23 0 000 .19.55.55 0 00.27.51.27.27 0 01.13.27l-.12.08a.08.08 0 000 .07l.33-.19a.13.13 0 000-.07l-.12.07a.72.72 0 01.13-.43 1.46 1.46 0 00.25-1zM890 432.9l-1.54.89V432l1.54-.89zm-1.47.76l1.39-.8v-1.6l-1.39.8v1.6" />
                  <path d="M889.21 431.77a.05.05 0 000 .05 1.36 1.36 0 00-.54.87.3.3 0 01.1-.14.08.08 0 01.1 0 .24.24 0 01.09-.13h.09a.23.23 0 01.1-.13.06.06 0 01.07 0v.71a.12.12 0 00.19.11.42.42 0 00.19-.33v-.07V432.83a.28.28 0 01-.13.23c-.07 0-.13 0-.13-.07v-.61a.16.16 0 01.07-.07.06.06 0 01.1 0 .18.18 0 01.09-.13.06.06 0 01.1 0 .18.18 0 01.09-.13.06.06 0 01.1 0 .34.34 0 00-.55-.23s-.11-.06-.13-.05zM892.46 431.12v.1l.95-.55v-.1l-.95.55zM892.46 430.92v.1l.95-.55-.01-.1-.14.08-.12.07-.41.24-.12.07-.15.09z" />
                  <path d="M892.66 429.84l-.23.51.17-.1.01.58.12-.07v-.58l.16-.1-.23-.24z" />
                  <path d="M893.7 430.76l-1.54.88v-1.77l1.54-.88zm-1.46.76l1.39-.81v-1.6l-1.39.81v1.6" />
                  <path d="M893.2 429.53l-.23.51.17-.1v.58l.12-.07v-.57l.17-.1-.23-.25zM891.85 431.83l-1.54.89V431l1.54-.89zm-1.47.76l1.39-.8v-1.6l-1.39.8v1.6" />
                </g>
                <g
                  style={{
                    isolation: "isolate",
                  }}
                >
                  <path
                    fill="#f2c0a7"
                    d="M862.18 430.92l.03 8.14 9.06 5.27-.02-8.14-9.07-5.27z"
                  />
                  <path
                    fill="#e2af98"
                    d="M865.71 432.98l.01 1.77.63.36.71.42v-1.77l-1.35-.78z"
                  />
                  <path
                    fill="#fed0b5"
                    d="M871.25 436.19l.02 8.14 10.69-6.17-.02-8.15-10.69 6.18z"
                  />
                  <path
                    fill="#ffdcc5"
                    d="M862.18 430.92l9.07 5.27 10.69-6.18-9.06-5.26-10.7 6.17z"
                  />
                  <path
                    fill="#fed0b5"
                    d="M865.71 432.98l1.35.78 10.69-6.17-1.34-.78-10.7 6.17z"
                  />
                </g>
                <g fill="#616173">
                  <path d="M878.48 438.06a1.23 1.23 0 000 .19.53.53 0 00.28.51.29.29 0 01.13.28l-.13.07a.08.08 0 000 .07l.34-.19a.13.13 0 000-.07l-.1.08a.89.89 0 01.13-.43 1.4 1.4 0 00.25-1zM877.82 440l-1.54.89v-1.77l1.54-.89zm-1.46.76l1.39-.8v-1.6l-1.39.8v1.6" />
                  <path d="M877 438.85a1.36 1.36 0 00-.54.87.28.28 0 01.09-.14h.1a.3.3 0 01.09-.13h.1a.26.26 0 01.1-.13h.06v.6c0 .12.08.17.19.11a.44.44 0 00.19-.33v-.07.06a.3.3 0 01-.13.23c-.08 0-.14 0-.14-.07v-.61a.22.22 0 01.06-.07h.1a.19.19 0 01.1-.13.05.05 0 01.09 0 .19.19 0 01.1-.13.05.05 0 01.09 0 .34.34 0 00-.55-.23s-.04.16-.1.17zM880.29 438.19v.1l.95-.55v-.1l-.95.55zM880.29 437.99v.1l.95-.55v-.1l-.15.08-.12.07-.41.24-.12.07-.15.09z" />
                  <path d="M880.5 436.91l-.23.51.17-.1v.58l.12-.07v-.58l.17-.09-.23-.25z" />
                  <path d="M881.54 437.83l-1.54.89V437l1.54-.89zm-1.47.76l1.39-.81v-1.59l-1.39.8v1.6" />
                  <path d="M881.03 436.6l-.23.51.17-.09v.57l.12-.07v-.57l.17-.1-.23-.25zM879.68 438.9l-1.54.89V438l1.54-.89zm-1.47.76l1.4-.8v-1.6l-1.39.8v1.6" />
                </g>
                <g>
                  <g
                    style={{
                      isolation: "isolate",
                    }}
                  >
                    <path
                      fill="#f2c0a7"
                      d="M850.02 437.99l.02 8.14 9.06 5.27-.02-8.14-9.06-5.27z"
                    />
                    <path
                      fill="#e2af98"
                      d="M853.55 440.05v1.77l.63.36.72.42-.01-1.77-1.34-.78z"
                    />
                    <path
                      fill="#fed0b5"
                      d="M859.08 443.26l.02 8.14 10.7-6.17-.03-8.14-10.69 6.17z"
                    />
                    <path
                      fill="#ffdcc5"
                      d="M850.02 437.99l9.06 5.27 10.69-6.17-9.06-5.27-10.69 6.17z"
                    />
                    <path
                      fill="#fed0b5"
                      d="M853.55 440.05l1.34.78 10.7-6.17-1.35-.78-10.69 6.17z"
                    />
                  </g>
                  <g fill="#616173">
                    <path d="M866.32 445.13a1.37 1.37 0 000 .19.54.54 0 00.27.51.29.29 0 01.13.28l-.12.07a.08.08 0 000 .07l.33-.19a.08.08 0 000-.07l-.12.07a.72.72 0 01.13-.43 1.46 1.46 0 00.25-1zM865.66 447l-1.54.89v-1.77l1.54-.89zm-1.47.76l1.39-.8v-1.6l-1.39.81v1.59" />
                    <path d="M864.88 445.92a1.36 1.36 0 00-.54.87.3.3 0 01.1-.14.08.08 0 01.1 0 .24.24 0 01.09-.13h.09a.32.32 0 01.1-.13h.07v.6a.12.12 0 00.19.11.41.41 0 00.19-.33v-.07.06a.26.26 0 01-.13.23c-.07 0-.13 0-.13-.07v-.61l.07-.07a.08.08 0 01.1 0 .18.18 0 01.09-.13h.1a.18.18 0 01.09-.13.06.06 0 01.1 0 .34.34 0 00-.55-.23s-.11.16-.13.17zM868.13 445.26v.1l.95-.55v-.1l-.95.55zM868.13 445.06v.1l.95-.55v-.1l-.15.09-.12.07-.41.23-.12.07-.15.09zM868.33 443.98l-.23.51.17-.1.01.58.12-.07-.01-.58.17-.09-.23-.25z" />
                    <path d="M869.37 444.9l-1.54.89V444l1.54-.89zm-1.46.76l1.39-.8v-1.6l-1.39.8v1.6" />
                    <path d="M868.87 443.67l-.23.52.17-.1v.58l.12-.07v-.58l.17-.1-.23-.25zM867.52 446l-1.54.89v-1.77l1.54-.89zm-1.47.76l1.39-.8v-1.6l-1.39.8v1.6" />
                  </g>
                </g>
                <g>
                  <g
                    style={{
                      isolation: "isolate",
                    }}
                  >
                    <path
                      fill="#f2c0a7"
                      d="M837.85 445.06l.03 8.14 9.06 5.27-.02-8.14-9.07-5.27z"
                    />
                    <path
                      fill="#e2af98"
                      d="M841.38 447.12l.01 1.77.62.36.72.42v-1.77l-1.35-.78z"
                    />
                    <path
                      fill="#fed0b5"
                      d="M846.92 450.33l.02 8.14 10.69-6.17-.02-8.14-10.69 6.17z"
                    />
                    <path
                      fill="#ffdcc5"
                      d="M837.85 445.06l9.07 5.27 10.69-6.17-9.07-5.27-10.69 6.17z"
                    />
                    <path
                      fill="#fed0b5"
                      d="M841.38 447.12l1.35.78 10.69-6.17-1.34-.78-10.7 6.17z"
                    />
                  </g>
                  <g fill="#616173">
                    <path d="M854.15 452.2a1.37 1.37 0 000 .19.53.53 0 00.28.51.32.32 0 01.13.28l-.13.07a.08.08 0 000 .07l.34-.19a.08.08 0 000-.07l-.13.07a.92.92 0 01.13-.43 1.4 1.4 0 00.25-1zM853.49 454.11L852 455v-1.77l1.54-.89zm-1.46.77l1.39-.81v-1.6l-1.39.81v1.6" />
                    <path d="M852.71 453a1.36 1.36 0 00-.54.87.22.22 0 01.09-.13h.1a.28.28 0 01.09-.14h.1a.24.24 0 01.1-.14h.06v.6c0 .12.08.17.19.11a.44.44 0 00.19-.33v-.07a.05.05 0 000 .05v.18a.29.29 0 01-.13.23c-.08.05-.14 0-.14-.07v-.61l.06-.07h.1a.19.19 0 01.1-.13.06.06 0 01.09 0 .19.19 0 01.1-.13h.09a.34.34 0 00-.55-.23s-.08.01-.1.01zM855.96 452.33v.1l.95-.54v-.11l-.95.55zM855.96 452.13v.1l.95-.54v-.11l-.15.09-.12.07-.41.23-.12.07-.15.09zM856.17 451.05l-.23.51.17-.1v.58l.12-.07v-.58l.17-.09-.23-.25z" />
                    <path d="M857.21 452l-1.54.89v-1.77l1.54-.89zm-1.47.76l1.39-.8v-1.6l-1.39.8v1.6" />
                    <path d="M856.7 450.74l-.23.52.17-.1v.58l.12-.07v-.58l.17-.1-.23-.25zM855.35 453l-1.54.89v-1.77l1.54-.89zm-1.47.76l1.4-.8v-1.6l-1.39.8v1.6" />
                  </g>
                </g>
              </g>
              <g
                style={{
                  isolation: "isolate",
                }}
              >
                <path
                  fill="#96654d"
                  d="M833.64 437.66l.01 1.57 12.98 7.32-.01-1.57-12.98-7.32z"
                />
                <path
                  fill="#96654d"
                  d="M846.62 444.98l.01 1.57 51.06-29.48-.01-1.57-51.06 29.48z"
                />
                <path
                  fill="#a06e52"
                  d="M833.64 437.66l12.98 7.32 51.06-29.48-12.98-7.32-51.06 29.48z"
                />
              </g>
              <g>
                <g
                  style={{
                    isolation: "isolate",
                  }}
                >
                  <path
                    fill="#f2c0a7"
                    d="M874.35 409.12l.02 8.14 9.06 5.27-.02-8.15-9.06-5.26z"
                  />
                  <path
                    fill="#e2af98"
                    d="M877.88 411.17v1.77l.63.37.72.41-.01-1.77-1.34-.78z"
                  />
                  <path
                    fill="#fed0b5"
                    d="M883.41 414.38l.02 8.15 10.7-6.18-.03-8.14-10.69 6.17z"
                  />
                  <path
                    fill="#ffdcc5"
                    d="M874.35 409.12l9.06 5.26 10.69-6.17-9.06-5.27-10.69 6.18z"
                  />
                  <path
                    fill="#fed0b5"
                    d="M877.88 411.17l1.34.78 10.69-6.17-1.34-.78-10.69 6.17z"
                  />
                </g>
                <g fill="#616173">
                  <path d="M890.65 416.26a1.23 1.23 0 000 .19.55.55 0 00.27.51.27.27 0 01.13.27l-.12.08a.08.08 0 000 .06l.33-.2a.08.08 0 000-.06l-.12.08a.72.72 0 01.13-.43 1.47 1.47 0 00.25-1zM890 418.17l-1.54.89v-1.77l1.54-.89zm-1.47.76l1.39-.8v-1.6l-1.39.8v1.6" />
                  <path d="M889.21 417a1.36 1.36 0 00-.54.87.26.26 0 01.1-.14.08.08 0 01.1 0 .18.18 0 01.09-.13h.09a.23.23 0 01.1-.13.06.06 0 01.07 0v.61c0 .12.09.16.19.1a.41.41 0 00.19-.32v-.07.21a.28.28 0 01-.13.23c-.07 0-.13 0-.13-.08v-.6a.16.16 0 01.07-.07.06.06 0 01.1 0 .18.18 0 01.09-.13.06.06 0 01.1 0 .23.23 0 01.09-.14.07.07 0 01.1 0 .34.34 0 00-.55-.23s-.11.02-.13.02zM892.46 416.38v.11l.95-.55v-.1l-.95.54zM892.46 416.18v.11l.95-.55-.01-.1-.14.08-.12.07-.41.24-.12.07-.15.08z" />
                  <path d="M892.66 415.11l-.23.51.17-.1.01.58.12-.07v-.58l.16-.1-.23-.24z" />
                  <path d="M893.7 416l-1.54.89v-1.77l1.54-.89zm-1.46.76l1.39-.8v-1.6l-1.39.81v1.59" />
                  <path d="M893.2 414.8l-.23.51.17-.1v.58l.12-.07v-.58l.17-.09-.23-.25zM891.85 417.1l-1.54.89v-1.77l1.54-.89zm-1.47.76l1.39-.81v-1.6l-1.39.81v1.6" />
                </g>
                <g
                  style={{
                    isolation: "isolate",
                  }}
                >
                  <path
                    fill="#f2c0a7"
                    d="M862.18 416.19l.03 8.14 9.06 5.27-.02-8.14-9.07-5.27z"
                  />
                  <path
                    fill="#e2af98"
                    d="M865.71 418.25l.01 1.76.63.37.71.42v-1.77l-1.35-.78z"
                  />
                  <path
                    fill="#fed0b5"
                    d="M871.25 421.46l.02 8.14 10.69-6.18-.02-8.14-10.69 6.18z"
                  />
                  <path
                    fill="#ffdcc5"
                    d="M862.18 416.19l9.07 5.27 10.69-6.18-9.06-5.26-10.7 6.17z"
                  />
                  <path
                    fill="#fed0b5"
                    d="M865.71 418.25l1.35.78 10.69-6.18-1.34-.78-10.7 6.18z"
                  />
                </g>
                <g fill="#616173">
                  <path d="M878.48 423.33a1.23 1.23 0 000 .19.54.54 0 00.28.51.29.29 0 01.13.27l-.13.08a.08.08 0 000 .06l.34-.19a.13.13 0 000-.07l-.13.08a.89.89 0 01.13-.43 1.4 1.4 0 00.25-1zM877.82 425.24l-1.54.89v-1.77l1.54-.89zm-1.46.76l1.39-.8v-1.6l-1.39.8v1.6" />
                  <path d="M877 424.11a.08.08 0 000 .05 1.36 1.36 0 00-.54.87.28.28 0 01.09-.14h.1a.25.25 0 01.09-.13h.1a.19.19 0 01.1-.13h.06v.61c0 .12.08.17.19.1a.43.43 0 00.19-.32V425v.07a.3.3 0 01-.13.23c-.08 0-.14 0-.14-.08v-.6a.22.22 0 01.06-.07h.1a.19.19 0 01.1-.13.05.05 0 01.09 0 .19.19 0 01.1-.13.05.05 0 01.09 0 .34.34 0 00-.55-.23s-.04.04-.1.05zM880.29 423.45v.11l.95-.55v-.1l-.95.54zM880.29 423.25v.11l.95-.55v-.1l-.15.08-.12.07-.41.24-.12.07-.15.08z" />
                  <path d="M880.5 422.18l-.23.51.17-.1v.58l.12-.07v-.58l.17-.1-.23-.24z" />
                  <path d="M881.54 423.09L880 424v-1.77l1.54-.89zm-1.47.77l1.39-.81v-1.6l-1.39.81v1.6" />
                  <path d="M881.03 421.87l-.23.51.17-.1v.58l.12-.07v-.58l.17-.09-.23-.25zM879.68 424.17l-1.54.89v-1.77l1.54-.89zm-1.47.76l1.4-.8v-1.6l-1.39.8v1.6" />
                </g>
                <g>
                  <g
                    style={{
                      isolation: "isolate",
                    }}
                  >
                    <path
                      fill="#f2c0a7"
                      d="M850.02 423.26l.02 8.14 9.06 5.27-.02-8.14-9.06-5.27z"
                    />
                    <path
                      fill="#e2af98"
                      d="M853.55 425.32v1.77l.63.36.72.42-.01-1.77-1.34-.78z"
                    />
                    <path
                      fill="#fed0b5"
                      d="M859.08 428.53l.02 8.14 10.7-6.17-.03-8.15-10.69 6.18z"
                    />
                    <path
                      fill="#ffdcc5"
                      d="M850.02 423.26l9.06 5.27 10.69-6.18-9.06-5.26-10.69 6.17z"
                    />
                    <path
                      fill="#fed0b5"
                      d="M853.55 425.32l1.34.78 10.7-6.17-1.35-.79-10.69 6.18z"
                    />
                  </g>
                  <g fill="#616173">
                    <path d="M866.32 430.4a1.23 1.23 0 000 .19.55.55 0 00.27.51c.09 0 .13.14.13.28l-.12.07a.08.08 0 000 .07l.33-.19a.13.13 0 000-.07l-.12.07a.72.72 0 01.13-.43 1.46 1.46 0 00.25-1zM865.66 432.31l-1.54.89v-1.77l1.54-.89zm-1.47.76l1.39-.8v-1.6l-1.39.8v1.6" />
                    <path d="M864.88 431.18a.05.05 0 000 .05 1.36 1.36 0 00-.54.87.3.3 0 01.1-.14.08.08 0 01.1 0 .24.24 0 01.09-.13h.09a.23.23 0 01.1-.13.06.06 0 01.07 0v.61a.12.12 0 00.19.11.42.42 0 00.19-.33v-.07a.13.13 0 000 .05v.07a.28.28 0 01-.13.23c-.07 0-.13 0-.13-.07v-.61a.16.16 0 01.07-.07.06.06 0 01.1 0 .18.18 0 01.09-.13.06.06 0 01.1 0 .18.18 0 01.09-.13.06.06 0 01.1 0 .34.34 0 00-.55-.23s-.11.04-.13.05zM868.13 430.53v.1l.95-.55v-.1l-.95.55zM868.13 430.32v.11l.95-.55v-.1l-.15.08-.12.07-.41.24-.12.07-.15.08z" />
                    <path d="M868.33 429.25l-.23.51.17-.1.01.58.12-.07-.01-.58.17-.09-.23-.25z" />
                    <path d="M869.37 430.17l-1.54.89v-1.78l1.54-.88zm-1.46.76l1.39-.81v-1.6l-1.39.81v1.6" />
                    <path d="M868.87 428.94l-.23.51.17-.09v.57l.12-.07v-.57l.17-.1-.23-.25zM867.52 431.24l-1.54.89v-1.77l1.54-.89zm-1.47.76l1.39-.8v-1.6l-1.39.8v1.6" />
                  </g>
                </g>
                <g>
                  <g
                    style={{
                      isolation: "isolate",
                    }}
                  >
                    <path
                      fill="#f2c0a7"
                      d="M837.85 430.33l.03 8.14 9.06 5.27-.02-8.14-9.07-5.27z"
                    />
                    <path
                      fill="#e2af98"
                      d="M841.38 432.39l.01 1.77.62.36.72.42v-1.77l-1.35-.78z"
                    />
                    <path
                      fill="#fed0b5"
                      d="M846.92 435.6l.02 8.14 10.69-6.17-.02-8.14-10.69 6.17z"
                    />
                    <path
                      fill="#ffdcc5"
                      d="M837.85 430.33l9.07 5.27 10.69-6.17-9.07-5.27-10.69 6.17z"
                    />
                    <path
                      fill="#fed0b5"
                      d="M841.38 432.39l1.35.78 10.69-6.17-1.34-.79-10.7 6.18z"
                    />
                  </g>
                  <g fill="#616173">
                    <path d="M854.15 437.47a1.23 1.23 0 000 .19.53.53 0 00.28.51.29.29 0 01.13.28l-.13.07a.08.08 0 000 .07l.34-.19a.13.13 0 000-.07l-.13.07a.89.89 0 01.13-.43 1.4 1.4 0 00.25-1zM853.49 439.38l-1.54.89v-1.77l1.54-.89zm-1.46.76l1.39-.8v-1.6l-1.39.8v1.6" />
                    <path d="M852.71 438.26a1.36 1.36 0 00-.54.87.28.28 0 01.09-.14h.1a.3.3 0 01.09-.13h.1a.26.26 0 01.1-.13h.06v.6c0 .12.08.17.19.11a.44.44 0 00.19-.33v-.07.11a.3.3 0 01-.13.23c-.08 0-.14 0-.14-.07v-.61a.22.22 0 01.06-.07h.1a.19.19 0 01.1-.13.05.05 0 01.09 0 .19.19 0 01.1-.13.05.05 0 01.09 0 .34.34 0 00-.55-.23s-.08.11-.1.12zM855.96 437.6v.1l.95-.55v-.1l-.95.55zM855.96 437.4v.1l.95-.55v-.1l-.15.08-.12.07-.41.24-.12.07-.15.09z" />
                    <path d="M856.17 436.32l-.23.51.17-.1v.58l.12-.07v-.58l.17-.09-.23-.25z" />
                    <path d="M857.21 437.24l-1.54.89v-1.77l1.54-.89zm-1.47.76l1.39-.81v-1.59l-1.39.8v1.6" />
                    <path d="M856.7 436.01l-.23.51.17-.09v.57l.12-.07v-.57l.17-.1-.23-.25zM855.35 438.31l-1.54.89v-1.77l1.54-.89zm-1.47.76l1.4-.8v-1.6l-1.39.8v1.6" />
                  </g>
                </g>
              </g>
              <g
                style={{
                  isolation: "isolate",
                }}
              >
                <path
                  fill="#96654d"
                  d="M833.64 422.93l.01 1.56 12.98 7.33-.01-1.57-12.98-7.32z"
                />
                <path
                  fill="#96654d"
                  d="M846.62 430.25l.01 1.57 51.06-29.48-.01-1.57-51.06 29.48z"
                />
                <path
                  fill="#a06e52"
                  d="M833.64 422.93l12.98 7.32 51.06-29.48-12.98-7.32-51.06 29.48z"
                />
              </g>
              <g>
                <g
                  style={{
                    isolation: "isolate",
                  }}
                >
                  <path
                    fill="#f2c0a7"
                    d="M874.35 394.39l.02 8.14 9.06 5.26-.02-8.14-9.06-5.26z"
                  />
                  <path
                    fill="#e2af98"
                    d="M877.88 396.44v1.77l.63.36.72.42-.01-1.77-1.34-.78z"
                  />
                  <path
                    fill="#fed0b5"
                    d="M883.41 399.65l.02 8.14 10.7-6.17-.03-8.14-10.69 6.17z"
                  />
                  <path
                    fill="#ffdcc5"
                    d="M874.35 394.39l9.06 5.26 10.69-6.17-9.06-5.27-10.69 6.18z"
                  />
                  <path
                    fill="#fed0b5"
                    d="M877.88 396.44l1.34.78 10.69-6.17-1.34-.78-10.69 6.17z"
                  />
                </g>
                <g fill="#616173">
                  <path d="M890.65 401.52a1.54 1.54 0 000 .19.55.55 0 00.27.52.27.27 0 01.13.27l-.12.07a.1.1 0 000 .07l.33-.19a.08.08 0 000-.07l-.12.07a.74.74 0 01.13-.43 1.43 1.43 0 00.25-1zM890 403.44l-1.54.89v-1.77l1.54-.89zm-1.47.76l1.39-.81v-1.59l-1.39.8v1.6" />
                  <path d="M889.21 402.31a.05.05 0 000 .05 1.33 1.33 0 00-.54.86.23.23 0 01.1-.13.06.06 0 01.1 0 .18.18 0 01.09-.13h.09a.23.23 0 01.1-.13.06.06 0 01.07 0v.61c0 .11.09.16.19.1a.41.41 0 00.19-.33v-.06a.09.09 0 000 .05v.07a.29.29 0 01-.13.23c-.07 0-.13 0-.13-.08v-.6a.12.12 0 01.07-.07.06.06 0 01.1 0 .23.23 0 01.09-.14.07.07 0 01.1 0 .23.23 0 01.09-.14.07.07 0 01.1 0 .35.35 0 00-.55-.24s-.11.07-.13.08zM892.46 401.65v.11l.95-.55v-.1l-.95.54zM892.46 401.45v.1l.95-.54-.01-.11-.14.09-.12.07-.41.24-.12.07-.15.08z" />
                  <path d="M892.66 400.37l-.23.52.17-.1.01.58.12-.07v-.58l.16-.1-.23-.25z" />
                  <path d="M893.7 401.29l-1.54.89v-1.77l1.54-.89zm-1.46.76l1.39-.8v-1.6l-1.39.8v1.6" />
                  <path d="M893.2 400.07l-.23.51.17-.1v.58l.12-.07v-.58l.17-.1-.23-.24zM891.85 402.36l-1.54.89v-1.77l1.54-.89zm-1.47.77l1.39-.81v-1.6l-1.39.81v1.6" />
                </g>
                <g
                  style={{
                    isolation: "isolate",
                  }}
                >
                  <path
                    fill="#f2c0a7"
                    d="M862.18 401.46l.03 8.14 9.06 5.27-.02-8.15-9.07-5.26z"
                  />
                  <path
                    fill="#e2af98"
                    d="M865.71 403.51l.01 1.77.63.37.71.41v-1.77l-1.35-.78z"
                  />
                  <path
                    fill="#fed0b5"
                    d="M871.25 406.72l.02 8.15 10.69-6.18-.02-8.14-10.69 6.17z"
                  />
                  <path
                    fill="#ffdcc5"
                    d="M862.18 401.46l9.07 5.26 10.69-6.17-9.06-5.27-10.7 6.18z"
                  />
                  <path
                    fill="#fed0b5"
                    d="M865.71 403.51l1.35.78 10.69-6.17-1.34-.78-10.7 6.17z"
                  />
                </g>
                <g fill="#616173">
                  <path d="M878.48 408.59a1.5 1.5 0 000 .2.54.54 0 00.28.51.29.29 0 01.13.27l-.13.07a.13.13 0 000 .07l.34-.2a.08.08 0 000-.07l-.13.07a.86.86 0 01.13-.42 1.41 1.41 0 00.25-1zM877.82 410.51l-1.54.89v-1.77l1.54-.89zm-1.46.76l1.39-.8v-1.6l-1.39.8v1.6" />
                  <path d="M877 409.38a.08.08 0 000 .05 1.36 1.36 0 00-.54.87.21.21 0 01.09-.14h.1a.22.22 0 01.09-.13h.1a.19.19 0 01.1-.13h.06v.61c0 .11.08.16.19.1a.44.44 0 00.19-.33v-.06a.05.05 0 000 .05v.07a.32.32 0 01-.13.23c-.08 0-.14 0-.14-.08v-.6a.22.22 0 01.06-.07h.1a.24.24 0 01.1-.14.06.06 0 01.09 0 .24.24 0 01.1-.14.06.06 0 01.09 0 .34.34 0 00-.55-.23s-.04.06-.1.07zM880.29 408.72v.11l.95-.55v-.1l-.95.54zM880.29 408.52v.11l.95-.55v-.1l-.15.08-.12.07-.41.24-.12.07-.15.08z" />
                  <path d="M880.5 407.44l-.23.52.17-.1v.58l.12-.07v-.58l.17-.1-.23-.25z" />
                  <path d="M881.54 408.36l-1.54.89v-1.77l1.54-.89zm-1.47.76l1.39-.8v-1.6l-1.39.8v1.6" />
                  <path d="M881.03 407.14l-.23.51.17-.1v.58l.12-.07v-.58l.17-.1-.23-.24zM879.68 409.44l-1.54.88v-1.77l1.54-.89zm-1.47.76l1.4-.81v-1.6l-1.39.81v1.6" />
                </g>
                <g>
                  <g
                    style={{
                      isolation: "isolate",
                    }}
                  >
                    <path
                      fill="#f2c0a7"
                      d="M850.02 408.53l.02 8.14 9.06 5.27-.02-8.14-9.06-5.27z"
                    />
                    <path
                      fill="#e2af98"
                      d="M853.55 410.58v1.77l.63.37.72.41-.01-1.76-1.34-.79z"
                    />
                    <path
                      fill="#fed0b5"
                      d="M859.08 413.8l.02 8.14 10.7-6.18-.03-8.14-10.69 6.18z"
                    />
                    <path
                      fill="#ffdcc5"
                      d="M850.02 408.53l9.06 5.27 10.69-6.18-9.06-5.26-10.69 6.17z"
                    />
                    <path
                      fill="#fed0b5"
                      d="M853.55 410.58l1.34.79 10.7-6.18-1.35-.78-10.69 6.17z"
                    />
                  </g>
                  <g fill="#616173">
                    <path d="M866.32 415.67a1.23 1.23 0 000 .19.55.55 0 00.27.51.27.27 0 01.13.27l-.12.08a.08.08 0 000 .06l.33-.2a.08.08 0 000-.06l-.12.08a.72.72 0 01.13-.43 1.47 1.47 0 00.25-1zM865.66 417.58l-1.54.89v-1.77l1.54-.89zm-1.47.76l1.39-.8v-1.6l-1.39.8v1.6" />
                    <path d="M864.88 416.45a.05.05 0 000 .05 1.36 1.36 0 00-.54.87.26.26 0 01.1-.14.08.08 0 01.1 0 .18.18 0 01.09-.13h.09a.23.23 0 01.1-.13.06.06 0 01.07 0v.61c0 .12.09.16.19.1a.41.41 0 00.19-.32v-.07a.09.09 0 000 .05v.07a.28.28 0 01-.13.23c-.07 0-.13 0-.13-.08V417a.16.16 0 01.07-.07.06.06 0 01.1 0 .18.18 0 01.09-.13.06.06 0 01.1 0 .23.23 0 01.09-.14.07.07 0 01.1 0 .34.34 0 00-.55-.23s-.11.01-.13.02zM868.13 415.79v.11l.95-.55v-.1l-.95.54zM868.13 415.59v.11l.95-.55v-.1l-.15.08-.12.07-.41.24-.12.07-.15.08z" />
                    <path d="M868.33 414.52l-.23.51.17-.1.01.58.12-.07-.01-.58.17-.1-.23-.24z" />
                    <path d="M869.37 415.43l-1.54.89v-1.77l1.54-.89zm-1.46.76l1.39-.8v-1.6l-1.39.81v1.59" />
                    <path d="M868.87 414.21l-.23.51.17-.1v.58l.12-.07v-.58l.17-.09-.23-.25zM867.52 416.51l-1.54.89v-1.77l1.54-.89zm-1.47.76l1.39-.81v-1.59l-1.39.8v1.6" />
                  </g>
                </g>
                <g>
                  <g
                    style={{
                      isolation: "isolate",
                    }}
                  >
                    <path
                      fill="#f2c0a7"
                      d="M837.85 415.6l.03 8.14 9.06 5.27-.02-8.14-9.07-5.27z"
                    />
                    <path
                      fill="#e2af98"
                      d="M841.38 417.66l.01 1.77.62.36.72.42v-1.77l-1.35-.78z"
                    />
                    <path
                      fill="#fed0b5"
                      d="M846.92 420.87l.02 8.14 10.69-6.18-.02-8.14-10.69 6.18z"
                    />
                    <path
                      fill="#ffdcc5"
                      d="M837.85 415.6l9.07 5.27 10.69-6.18-9.07-5.26-10.69 6.17z"
                    />
                    <path
                      fill="#fed0b5"
                      d="M841.38 417.66l1.35.78 10.69-6.18-1.34-.78-10.7 6.18z"
                    />
                  </g>
                  <g fill="#616173">
                    <path d="M854.15 422.74a1.23 1.23 0 000 .19.54.54 0 00.28.51.29.29 0 01.13.27l-.13.08a.08.08 0 000 .07l.34-.19a.13.13 0 000-.07l-.13.08a.89.89 0 01.13-.43 1.4 1.4 0 00.25-1zM853.49 424.65l-1.54.89v-1.77l1.54-.89zm-1.46.76l1.39-.8V423l-1.39.8v1.6" />
                    <path d="M852.71 423.52a.08.08 0 000 .05 1.36 1.36 0 00-.54.87.28.28 0 01.09-.14h.1a.25.25 0 01.09-.13h.1a.19.19 0 01.1-.13h.06v.61c0 .12.08.17.19.1a.42.42 0 00.19-.32v-.07a.05.05 0 000 .05v.07a.3.3 0 01-.13.23c-.08 0-.14 0-.14-.08v-.6a.22.22 0 01.06-.07h.1a.19.19 0 01.1-.13.05.05 0 01.09 0 .19.19 0 01.1-.13.05.05 0 01.09 0 .34.34 0 00-.55-.23l-.1.05zM855.96 422.87v.1l.95-.55v-.1l-.95.55zM855.96 422.66v.11l.95-.55v-.1l-.15.08-.12.07-.41.24-.12.07-.15.08z" />
                    <path d="M856.17 421.59l-.23.51.17-.1v.58l.12-.07v-.58l.17-.1-.23-.24z" />
                    <path d="M857.21 422.5l-1.54.89v-1.77l1.54-.89zm-1.47.77l1.39-.81v-1.6l-1.39.81v1.6" />
                    <path d="M856.7 421.28l-.23.51.17-.1v.58l.12-.07v-.58l.17-.09-.23-.25zM855.35 423.58l-1.54.89v-1.77l1.54-.89zm-1.47.76l1.4-.8v-1.6l-1.39.8v1.6" />
                  </g>
                </g>
              </g>
              <g>
                <g
                  style={{
                    isolation: "isolate",
                  }}
                >
                  <path
                    fill="#474756"
                    d="M835.77 460.94v.67l-2.89 1.68v-.67l2.89-1.68z"
                  />
                  <path
                    fill="#4c4c5e"
                    d="M832.88 462.62v.67l-2.91-1.68v-.67l2.91 1.68z"
                  />
                  <path
                    fill="#595959"
                    d="M835.77 460.94l-2.89 1.68-2.91-1.68 2.89-1.68 2.91 1.68z"
                  />
                </g>
                <g
                  style={{
                    isolation: "isolate",
                  }}
                >
                  <path
                    fill="#474756"
                    d="M834.41 412.3v48.64l-1.53.89v-48.64l1.53-.89z"
                  />
                  <path
                    fill="#4c4c5e"
                    d="M832.88 413.19v48.64l-1.54-.89V412.3l1.54.89z"
                  />
                  <path
                    fill="#616173"
                    d="M834.41 412.3l-1.53.89-1.54-.89 1.53-.89 1.54.89z"
                  />
                </g>
                <g
                  style={{
                    isolation: "isolate",
                  }}
                >
                  <path
                    fill="#616173"
                    d="M833.77 430.54l.89-.51 9.91 5.72-.88.52-9.92-5.73z"
                  />
                  <path
                    fill="#4c4c5e"
                    d="M843.69 436.27l.88-.52v.52l-.88.51v-.51z"
                  />
                  <path
                    fill="#474756"
                    d="M844.55 421.46l.88-.52-10.77 9.09-.89.51 10.78-9.08z"
                  />
                  <path
                    fill="#4c4c5e"
                    d="M844.13 421.01l.89-.51.41.44-.88.52-.42-.45zM844.13 421.01l.42.45-10.78 9.08 9.92 5.73v.51l-10.59-6.11 11.03-9.66z"
                  />
                </g>
                <g
                  style={{
                    isolation: "isolate",
                  }}
                >
                  <path
                    fill="#616173"
                    d="M833.77 445.58l.89-.51 9.91 5.72-.88.52-9.92-5.73z"
                  />
                  <path
                    fill="#4c4c5e"
                    d="M843.69 451.31l.88-.52v.52l-.88.51v-.51z"
                  />
                  <path
                    fill="#474756"
                    d="M844.55 436.5l.88-.52-10.77 9.09-.89.51 10.78-9.08z"
                  />
                  <path
                    fill="#4c4c5e"
                    d="M844.13 436.05l.89-.51.41.44-.88.52-.42-.45zM844.13 436.05l.42.45-10.78 9.08 9.92 5.73v.51l-10.59-6.11 11.03-9.66z"
                  />
                </g>
                <g
                  style={{
                    isolation: "isolate",
                  }}
                >
                  <path
                    fill="#616173"
                    d="M833.77 460.62l.89-.51 9.91 5.72-.88.52-9.92-5.73z"
                  />
                  <path
                    fill="#4c4c5e"
                    d="M843.69 466.35l.88-.52v.52l-.88.51v-.51z"
                  />
                  <path
                    fill="#474756"
                    d="M844.55 451.54l.88-.52-10.77 9.09-.89.51 10.78-9.08z"
                  />
                  <path
                    fill="#4c4c5e"
                    d="M844.13 451.09l.89-.51.41.44-.88.52-.42-.45z"
                  />
                  <path
                    fill="#4c4c5e"
                    d="M844.13 451.09l.42.45-10.78 9.08 9.92 5.73v.51l-10.59-6.11 11.03-9.66z"
                  />
                </g>
                <g>
                  <g
                    style={{
                      isolation: "isolate",
                    }}
                  >
                    <path
                      fill="#474756"
                      d="M848.27 468.15l-.01.67-2.89 1.68.01-.67 2.89-1.68z"
                    />
                    <path
                      fill="#4c4c5e"
                      d="M845.38 469.83l-.01.67-2.91-1.68.01-.67 2.91 1.68z"
                    />
                    <path
                      fill="#595959"
                      d="M848.27 468.15l-2.89 1.68-2.91-1.68 2.89-1.68 2.91 1.68z"
                    />
                  </g>
                  <g
                    style={{
                      isolation: "isolate",
                    }}
                  >
                    <path
                      fill="#474756"
                      d="M846.9 419.52v48.63l-1.53.89v-48.63l1.53-.89z"
                    />
                    <path
                      fill="#4c4c5e"
                      d="M845.37 420.41v48.63l-1.54-.89v-48.63l1.54.89z"
                    />
                    <path
                      fill="#616173"
                      d="M846.9 419.52l-1.53.89-1.54-.89 1.53-.89 1.54.89z"
                    />
                  </g>
                </g>
              </g>
            </g>
            <g id="expeditedbackground__boxcollection6">
              <g
                style={{
                  isolation: "isolate",
                }}
              >
                <path
                  fill="#f2c0a7"
                  d="M902.63 445.36l.01 5.24 5.84 3.4-.01-5.25-5.84-3.39z"
                />
                <path
                  fill="#e2af98"
                  d="M904.9 446.68l.01 1.14.4.24.46.27v-1.14l-.87-.51z"
                />
                <path
                  fill="#fed0b5"
                  d="M908.47 448.75l.01 5.25 6.89-3.98-.01-5.25-6.89 3.98z"
                />
                <path
                  fill="#ffdcc5"
                  d="M902.63 445.36l5.84 3.39 6.89-3.98-5.84-3.39-6.89 3.98z"
                />
                <path
                  fill="#fed0b5"
                  d="M904.9 446.68l.87.51 6.89-3.98-.87-.5-6.89 3.97z"
                />
              </g>
              <g fill="#616173">
                <path d="M913.13 450a.49.49 0 000 .12.36.36 0 00.17.33.18.18 0 01.09.18h-.08a.05.05 0 000 .05l.21-.12a.05.05 0 000-.05l-.08.05a.51.51 0 01.09-.28 1 1 0 00.16-.64zM912.7 451.19l-1 .57v-1.14l1-.57zm-.94.49l.9-.52v-1l-.89.52v1" />
                <path d="M912.2 450.46a.84.84 0 00-.35.56s0-.08.06-.09.05 0 .06 0a.13.13 0 01.06-.08h.06c.01 0 0-.07.07-.08v.39c0 .08.06.11.12.07a.28.28 0 00.13-.21.2.2 0 01-.09.15.05.05 0 01-.08-.05v-.44h.06a.15.15 0 01.06-.09h.06a.2.2 0 01.06-.09h.06c0-.19-.18-.24-.35-.15s.02.11.01.11zM914.3 450.04v.07l.61-.36v-.06l-.61.35zM914.3 449.91v.07l.61-.35v-.07l-.1.05-.08.05-.26.15-.08.05-.09.05z" />
                <path d="M914.43 449.22l-.15.33.11-.07v.38l.08-.05v-.37l.11-.06-.15-.16z" />
                <path d="M915.1 449.81l-1 .57v-1.14l1-.57zm-1 .49l.9-.52v-1l-.9.52v1" />
                <path d="M914.77 449.02l-.15.33.11-.06v.37l.08-.05v-.37l.11-.06-.15-.16zM913.9 450.5l-1 .57v-1.14l1-.57zm-.9.5l.89-.52v-1l-.9.52v1" />
              </g>
              <g
                style={{
                  isolation: "isolate",
                }}
              >
                <path
                  fill="#f2c0a7"
                  d="M894.74 449.91l.01 5.24 5.84 3.4-.02-5.25-5.83-3.39z"
                />
                <path
                  fill="#e2af98"
                  d="M897.01 451.24v1.13l.41.24.46.27v-1.14l-.87-.5z"
                />
                <path
                  fill="#fed0b5"
                  d="M900.57 453.3l.02 5.25 6.89-3.98-.02-5.24-6.89 3.97z"
                />
                <path
                  fill="#ffdcc5"
                  d="M894.74 449.91l5.83 3.39 6.89-3.97-5.84-3.4-6.88 3.98z"
                />
                <path
                  fill="#fed0b5"
                  d="M897.01 451.24l.87.5 6.88-3.98-.86-.5-6.89 3.98z"
                />
              </g>
              <g fill="#616173">
                <path d="M905.24 454.51a.5.5 0 000 .12.34.34 0 00.18.33.22.22 0 01.09.18h-.09a.08.08 0 000 .05l.22-.12-.08.05a.6.6 0 01.08-.28.88.88 0 00.16-.64zM904.81 455.74l-1 .57v-1.14l1-.57zm-.94.49l.89-.52v-1l-.9.52v1" />
                <path d="M904.31 455a.87.87 0 00-.34.56s0-.08.06-.09h.06s0-.07.06-.08 0 0 .06 0a.13.13 0 01.06-.08v.39c0 .08.05.11.12.07a.26.26 0 00.12-.21.2.2 0 01-.09.15s-.08 0-.08-.05v-.44h.07a.15.15 0 01.06-.09h.06a.15.15 0 01.06-.09h.06a.22.22 0 00-.35-.15zM906.4 454.59v.07l.61-.35v-.07l-.61.35zM906.4 454.46v.07l.61-.35v-.07l-.09.05-.08.05-.26.15-.08.05-.1.05z" />
                <path d="M906.53 453.77l-.14.33.11-.07v.38l.08-.05v-.37l.1-.06-.15-.16z" />
                <path d="M907.21 454.36l-1 .57v-1.14l1-.57zm-1 .49l.9-.52v-1l-.89.52v1" />
                <path d="M906.88 453.57l-.15.33.11-.06v.37l.08-.05v-.37l.11-.06-.15-.16zM906 455.05l-1 .57v-1.14l1-.57zm-1 .49l.9-.52v-1l-.9.52v1" />
              </g>
              <g>
                <g
                  style={{
                    isolation: "isolate",
                  }}
                >
                  <path
                    fill="#f2c0a7"
                    d="M898.38 442.23l.02 5.25 5.83 3.39-.01-5.24-5.84-3.4z"
                  />
                  <path
                    fill="#e2af98"
                    d="M900.66 443.56v1.14l.4.23.46.27v-1.14l-.86-.5z"
                  />
                  <path
                    fill="#fed0b5"
                    d="M904.22 445.63l.01 5.24 6.89-3.98-.01-5.24-6.89 3.98z"
                  />
                  <path
                    fill="#ffdcc5"
                    d="M898.38 442.23l5.84 3.4 6.89-3.98-5.84-3.39-6.89 3.97z"
                  />
                  <path
                    fill="#fed0b5"
                    d="M900.66 443.56l.86.5 6.89-3.98-.87-.5-6.88 3.98z"
                  />
                </g>
                <g fill="#616173">
                  <path d="M908.88 446.83a.53.53 0 000 .12.36.36 0 00.17.33.19.19 0 01.09.18l-.08.05.21-.13-.08.05a.51.51 0 01.09-.28.92.92 0 00.16-.63zM908.46 448.06l-1 .58v-1.14l1-.58zm-1 .49l.9-.51v-1l-.9.51v1" />
                  <path d="M908 447.34a.88.88 0 00-.35.56.2.2 0 01.06-.09h.06l.06-.08h.07s0-.07.06-.08v.38c0 .08.06.11.13.07a.28.28 0 00.12-.21.2.2 0 01-.08.15c-.05 0-.09 0-.09-.05v-.39h.06a.13.13 0 01.06-.08h.06a.2.2 0 01.06-.09h.07a.23.23 0 00-.36-.15s.01.05.01.06zM910.05 446.91v.07l.61-.35v-.07l-.61.35zM910.05 446.78v.07l.61-.35v-.07l-.1.06-.07.04-.27.15-.08.05-.09.05z" />
                  <path d="M910.18 446.09l-.15.33.11-.06v.37l.08-.05v-.37l.11-.06-.15-.16z" />
                  <path d="M910.85 446.68l-1 .57v-1.14l1-.57zm-.94.49l.89-.52v-1l-.9.52v1" />
                  <path d="M910.52 445.89l-.15.33.11-.06.01.37.07-.04v-.38l.11-.06-.15-.16zM909.65 447.37l-1 .58v-1.15l1-.57zm-.94.49l.89-.51v-1l-.89.51v1" />
                </g>
              </g>
            </g>
            <g id="expeditedbackground__boxcollection4">
              <g
                style={{
                  isolation: "isolate",
                }}
              >
                <path
                  fill="#f2c0a7"
                  d="M479.32 296.45l.02 5.25 5.84 3.39-.02-5.24-5.84-3.4z"
                />
                <path
                  fill="#e2af98"
                  d="M481.6 297.78v1.14l.4.23.47.27-.01-1.14-.86-.5z"
                />
                <path
                  fill="#fed0b5"
                  d="M485.16 299.85l.02 5.24 6.88-3.98-.01-5.24-6.89 3.98z"
                />
                <path
                  fill="#ffdcc5"
                  d="M479.32 296.45l5.84 3.4 6.89-3.98-5.84-3.39-6.89 3.97z"
                />
                <path
                  fill="#fed0b5"
                  d="M481.6 297.78l.86.5 6.89-3.98-.86-.5-6.89 3.98z"
                />
              </g>
              <g fill="#616173">
                <path d="M489.82 301.05v.12a.34.34 0 00.18.33.19.19 0 01.08.18l-.08.05.21-.13h-.08a.61.61 0 01.09-.28.92.92 0 00.16-.63zM489.4 302.28l-1 .58v-1.14l1-.58zm-.95.49l.9-.51v-1l-.9.51v1" />
                <path d="M488.9 301.56a.88.88 0 00-.35.56.2.2 0 01.06-.09.06.06 0 01.07 0 .16.16 0 01.06-.08h.06s0-.07.06-.08v.39c0 .08.05.11.12.07a.28.28 0 00.12-.21.2.2 0 01-.08.15h-.09v-.39h.06a.13.13 0 01.06-.08h.07a.15.15 0 01.06-.09h.06a.22.22 0 00-.35-.15s.02-.01.01 0zM490.99 301.13v.07l.61-.35v-.07l-.61.35zM490.99 301v.07l.61-.35v-.07l-.1.06-.07.04-.27.15-.08.05-.09.05z" />
                <path d="M491.12 300.31l-.15.33.11-.06v.37l.08-.05v-.37l.11-.06-.15-.16z" />
                <path d="M491.79 300.9l-1 .57v-1.14l1-.57zm-.94.49l.89-.52v-1l-.9.52v1" />
                <path d="M491.46 300.11l-.14.33.11-.06v.37l.07-.04v-.38l.11-.06-.15-.16zM490.6 301.59l-1 .58V301l1-.57zm-1 .49l.9-.52v-1l-.89.52v1" />
              </g>
              <g
                style={{
                  isolation: "isolate",
                }}
              >
                <path
                  fill="#f2c0a7"
                  d="M471.43 301l.01 5.25 5.84 3.39-.01-5.24-5.84-3.4z"
                />
                <path
                  fill="#e2af98"
                  d="M473.7 302.33l.01 1.14.4.23.46.27v-1.14l-.87-.5z"
                />
                <path
                  fill="#fed0b5"
                  d="M477.27 304.4l.01 5.24 6.89-3.98-.02-5.24-6.88 3.98z"
                />
                <path
                  fill="#ffdcc5"
                  d="M471.43 301l5.84 3.4 6.88-3.98-5.83-3.39-6.89 3.97z"
                />
                <path
                  fill="#fed0b5"
                  d="M473.7 302.33l.87.5 6.89-3.97-.87-.51-6.89 3.98z"
                />
              </g>
              <g fill="#616173">
                <path d="M481.93 305.6a.53.53 0 000 .12.36.36 0 00.17.33.19.19 0 01.09.18h-.08l.21-.13-.08.05a.51.51 0 01.09-.28 1 1 0 00.16-.63zM481.5 306.83l-1 .58v-1.14l1-.58zm-.94.49l.9-.51v-1l-.89.51v1" />
                <path d="M481 306.11a.84.84 0 00-.35.56.15.15 0 01.06-.09h.06a.2.2 0 01.06-.09h.06c.01 0 0-.07.07-.08v.39a.07.07 0 00.12.06.27.27 0 00.13-.21.19.19 0 01-.09.15s-.08 0-.08-.05v-.39h.06a.1.1 0 01.06-.08h.06a.2.2 0 01.06-.09h.06a.22.22 0 00-.35-.15s.01.06.01.07zM483.1 305.68v.07l.61-.35v-.07l-.61.35zM483.1 305.55v.07l.61-.35v-.07l-.1.06-.08.04-.26.15-.08.05-.09.05z" />
                <path d="M483.23 304.86l-.15.33.11-.06v.37l.08-.05v-.37l.11-.06-.15-.16z" />
                <path d="M483.9 305.45l-1 .57v-1.14l1-.57zm-.95.49l.9-.52v-1l-.9.52v1" />
                <path d="M483.57 304.66l-.15.33.11-.06v.37l.08-.04v-.38l.11-.06-.15-.16zM482.7 306.14l-1 .58v-1.14l1-.58zm-.94.49l.89-.51v-1l-.9.51v1" />
              </g>
              <g>
                <g
                  style={{
                    isolation: "isolate",
                  }}
                >
                  <path
                    fill="#f2c0a7"
                    d="M475.07 293.33l.02 5.24 5.84 3.39-.02-5.24-5.84-3.39z"
                  />
                  <path
                    fill="#e2af98"
                    d="M477.35 294.65v1.14l.4.23.47.27-.01-1.14-.86-.5z"
                  />
                  <path
                    fill="#fed0b5"
                    d="M480.91 296.72l.02 5.24 6.88-3.97-.01-5.25-6.89 3.98z"
                  />
                  <path
                    fill="#ffdcc5"
                    d="M475.07 293.33l5.84 3.39 6.89-3.98-5.84-3.39-6.89 3.98z"
                  />
                  <path
                    fill="#fed0b5"
                    d="M477.35 294.65l.86.5 6.89-3.97-.86-.51-6.89 3.98z"
                  />
                </g>
                <g fill="#616173">
                  <path d="M485.58 297.92a.69.69 0 000 .13.34.34 0 00.18.33.18.18 0 01.08.17l-.08.05.22-.12a.08.08 0 000-.05h-.08a.59.59 0 01.08-.27.89.89 0 00.16-.64zM485.15 299.16l-1 .57v-1.14l1-.57zm-.95.49l.9-.52v-1l-.9.52v1" />
                  <path d="M484.65 298.43a.91.91 0 00-.35.56.18.18 0 01.06-.08h.07a.15.15 0 01.06-.09h.06a.15.15 0 01.06-.09v.39c0 .07.05.11.12.07a.27.27 0 00.12-.21v.07a.16.16 0 01-.08.14h-.09v-.39h.06c.01 0 0-.07.07-.08s0 0 .06 0a.1.1 0 01.06-.08h.06a.22.22 0 00-.35-.15s.02-.07.01-.06zM486.74 298.01v.06l.61-.35v-.07l-.61.36zM486.74 297.88v.06l.61-.35v-.07l-.09.06-.08.05-.27.15-.07.04-.1.06z" />
                  <path d="M486.87 297.18l-.14.33.1-.06.01.37.07-.04v-.38l.11-.06-.15-.16z" />
                  <path d="M487.54 297.77l-1 .58v-1.14l1-.58zm-.94.5l.9-.52v-1l-.89.51v1" />
                  <path d="M487.22 296.99l-.15.33.11-.07v.38l.08-.05-.01-.37.11-.07-.14-.15zM486.35 298.47l-1 .57v-1.14l1-.57zm-1 .49l.9-.52v-1l-.9.52v1" />
                </g>
              </g>
            </g>
            <g id="expeditedbackground__forkliftwithbox2">
              <g id="expeditedbackground__forklift2">
                <path
                  d="M961.48 461a14.66 14.66 0 01-6.69 4.38c-1 .28-2.09.42-3.12.68a6.52 6.52 0 00-2.85 1.37 3.58 3.58 0 00-1.05 1.77v5.08l2-1.14 5.66-3.28 8.24-4.75c.67-.72.52-4.42.29-7.29a26.26 26.26 0 01-2.48 3.18z"
                  fill="#4c4c5e"
                />
                <g
                  style={{
                    isolation: "isolate",
                  }}
                >
                  <path
                    fill="#545466"
                    d="M937.91 460.25l.03 8.31 9.85 5.72-.03-8.3-9.85-5.73z"
                  />
                  <path
                    fill="#ffd469"
                    d="M963.63 456.81l-5.61 3.24-.03-2.47-6.73-3.91 3.49-2.02 8.88 5.16z"
                  />
                </g>
                <g
                  style={{
                    isolation: "isolate",
                  }}
                  fill="#ffd469"
                >
                  <path d="M958.02 460.05l-10.26 5.92-9.85-5.71 11.24-5.37 2.11-1.22 6.73 3.91.03 2.47z" />
                  <path d="M951.26 453.67l-2.11 1.22-.03-2.46 2.14 1.24z" />
                  <g>
                    <path d="M949.12 452.43l8.87 5.16 5.61-3.24c-1.27-2.43-4.63-4-8.87-5.16z" />
                    <path d="M950.16 452.6l4.83-2.79 7.77 4.51-4.84 2.79-7.76-4.51z" />
                  </g>
                </g>
                <g
                  style={{
                    isolation: "isolate",
                  }}
                >
                  <path
                    d="M953.22 447.72l-9.81-5.72 3.26-1.88a3.34 3.34 0 013.36 0l8.13 4.77z"
                    fill="#616173"
                  />
                  <path
                    d="M947.69 457.29V466l-9.81-5.75v-8.71a12.16 12.16 0 015.52-9.57l9.81 5.75a12.16 12.16 0 00-5.52 9.57z"
                    fill="#545466"
                  />
                  <path
                    d="M938.76 459.77v-8.23a11.34 11.34 0 014.69-8.58l8.21 4.82a13.07 13.07 0 00-4.8 9.52v7.22z"
                    fill="#73d0fe"
                  />
                  <g>
                    <path
                      d="M958.16 444.87v11a7.75 7.75 0 01-3.52 6.1l-6.95 4v-8.72a12.16 12.16 0 015.53-9.57z"
                      fill="#4c4c5e"
                    />
                    <path
                      d="M957.34 455.9a7 7 0 01-1.93 4.41 5.19 5.19 0 01-1.17.95l-.87.5-2 1.17-2.79 1.61v-7.25a9.22 9.22 0 01.6-3.14 12.26 12.26 0 011.37-2.64 9.86 9.86 0 013.13-3.05l.65-.38 3-1.74v7.22z"
                      fill="#57c7ff"
                    />
                  </g>
                </g>
                <g id="expeditedbackground__liftjaw">
                  <g
                    style={{
                      isolation: "isolate",
                    }}
                  >
                    <path
                      fill="#4c4c5e"
                      d="M935.25 469.12l-.01 1.06-1.81-1.04.01-1.06 1.81 1.04z"
                    />
                    <path
                      fill="#2d3c41"
                      d="M937.17 470.23v1.06l-1.93-1.11.01-1.06 1.92 1.11z"
                    />
                    <path
                      fill="#474756"
                      d="M945.02 474.76v1.06l-7.85-4.53v-1.06l7.85 4.53z"
                    />
                    <path
                      fill="#2d3c41"
                      d="M946.95 475.88v1.06l-1.93-1.12v-1.06l1.93 1.12z"
                    />
                    <path
                      fill="#474756"
                      d="M950.63 475.83v1.06l-1.88 1.09.01-1.06 1.87-1.09z"
                    />
                    <path
                      fill="#4c4c5e"
                      d="M950.63 475.83l-1.87 1.09-1.81-1.04-1.93-1.12-7.85-4.53-1.92-1.11-1.81-1.04 1.88-1.1 15.31 8.85z"
                    />
                    <path
                      fill="#474756"
                      d="M948.76 476.92l-.01 1.06-1.8-1.04v-1.06l1.81 1.04z"
                    />
                  </g>
                  <g
                    style={{
                      isolation: "isolate",
                    }}
                  >
                    <path
                      d="M937.54 444.9v24.18a.36.36 0 01-.22.31 1.17 1.17 0 01-1.06 0 .38.38 0 01-.23-.31V444.9a.38.38 0 00.22.31 1.17 1.17 0 001.06 0 .38.38 0 00.23-.31z"
                      fill="#c1c1c1"
                    />
                    <path
                      d="M937.32 444.59a.33.33 0 010 .62 1.17 1.17 0 01-1.06 0 .33.33 0 010-.62 1.19 1.19 0 011.06 0z"
                      fill="#dce8f1"
                    />
                  </g>
                  <g
                    style={{
                      isolation: "isolate",
                    }}
                  >
                    <path
                      d="M938.84 434.69v20.81a.36.36 0 01-.22.31 1.19 1.19 0 01-1.07 0 .39.39 0 01-.22-.31v-20.81a.39.39 0 00.23.31 1.17 1.17 0 001.06 0 .38.38 0 00.22-.31z"
                      fill="#cfdee8"
                    />
                    <g
                      style={{
                        isolation: "isolate",
                      }}
                    >
                      <path
                        d="M946 439.91a.24.24 0 00-.24 0 .72.72 0 00-.32.56.21.21 0 00.1.2l-7.27-4.25a.23.23 0 01-.1-.21.71.71 0 01.33-.56.22.22 0 01.23 0z"
                        fill="#616173"
                      />
                      <path
                        d="M945.78 439.93a.73.73 0 00-.32.57c0 .2.15.28.33.18a.7.7 0 00.32-.56c0-.21-.11-.29-.33-.19z"
                        fill="#cfdee8"
                      />
                    </g>
                    <path
                      d="M938.62 434.38a.33.33 0 010 .62 1.17 1.17 0 01-1.06 0 .33.33 0 010-.62 1.19 1.19 0 011.06 0z"
                      fill="#dce8f1"
                    />
                  </g>
                  <g
                    style={{
                      isolation: "isolate",
                    }}
                  >
                    <path
                      d="M946 444.17a.24.24 0 00-.24 0 .72.72 0 00-.32.56.24.24 0 00.1.21l-7.27-4.26a.22.22 0 01-.1-.21.74.74 0 01.33-.56.24.24 0 01.23 0z"
                      fill="#545466"
                    />
                    <path
                      d="M945.78 444.19a.7.7 0 00-.32.56c0 .21.15.29.33.18a.7.7 0 00.32-.56c0-.2-.11-.29-.33-.18z"
                      fill="#cfdee8"
                    />
                  </g>
                  <g
                    style={{
                      isolation: "isolate",
                    }}
                  >
                    <path
                      d="M946 445.88a.24.24 0 00-.24 0 .72.72 0 00-.32.56.24.24 0 00.1.21l-7.27-4.26a.22.22 0 01-.1-.21.74.74 0 01.33-.56.24.24 0 01.23 0z"
                      fill="#545466"
                    />
                    <path
                      d="M945.78 445.9a.7.7 0 00-.32.56c0 .2.15.29.33.18a.7.7 0 00.32-.56c0-.2-.11-.29-.33-.18z"
                      fill="#cfdee8"
                    />
                  </g>
                  <g
                    style={{
                      isolation: "isolate",
                    }}
                  >
                    <path
                      d="M946 447.58a.27.27 0 00-.24 0 .72.72 0 00-.32.56.24.24 0 00.1.21l-7.27-4.26a.22.22 0 01-.1-.21.74.74 0 01.33-.56.24.24 0 01.23 0z"
                      fill="#545466"
                    />
                    <path
                      d="M945.78 447.61a.7.7 0 00-.32.56c0 .2.15.29.33.18a.7.7 0 00.32-.56c0-.2-.11-.29-.33-.18z"
                      fill="#cfdee8"
                    />
                  </g>
                  <g
                    style={{
                      isolation: "isolate",
                    }}
                  >
                    <path
                      d="M946 449.29a.24.24 0 00-.24 0 .72.72 0 00-.32.56.24.24 0 00.1.21l-7.27-4.26a.22.22 0 01-.1-.21.74.74 0 01.33-.56.24.24 0 01.23 0z"
                      fill="#545466"
                    />
                    <path
                      d="M945.78 449.32a.7.7 0 00-.32.56c0 .2.15.29.33.18a.7.7 0 00.32-.56c0-.2-.11-.29-.33-.18z"
                      fill="#cfdee8"
                    />
                  </g>
                  <g
                    style={{
                      isolation: "isolate",
                    }}
                  >
                    <path
                      d="M946 451a.24.24 0 00-.24 0 .72.72 0 00-.32.56.21.21 0 00.1.2l-7.27-4.25a.22.22 0 01-.1-.21.74.74 0 01.33-.56.24.24 0 01.23 0z"
                      fill="#545466"
                    />
                    <path
                      d="M945.78 451a.7.7 0 00-.32.56c0 .2.15.29.33.18a.7.7 0 00.32-.56c0-.18-.11-.26-.33-.18z"
                      fill="#cfdee8"
                    />
                  </g>
                  <g
                    style={{
                      isolation: "isolate",
                    }}
                  >
                    <path
                      d="M946 452.71a.24.24 0 00-.24 0 .72.72 0 00-.32.56.21.21 0 00.1.2l-7.27-4.25a.23.23 0 01-.1-.21.74.74 0 01.33-.56.22.22 0 01.23 0z"
                      fill="#545466"
                    />
                    <path
                      d="M945.78 452.74a.7.7 0 00-.32.56c0 .2.15.28.33.18a.7.7 0 00.32-.56c0-.21-.11-.29-.33-.18z"
                      fill="#cfdee8"
                    />
                  </g>
                  <g
                    style={{
                      isolation: "isolate",
                    }}
                  >
                    <path
                      d="M946.26 438.2V459a.38.38 0 01-.22.31 1.17 1.17 0 01-1.06 0c-.15-.09-.23-.2-.22-.31v-20.8a.38.38 0 00.22.31 1.19 1.19 0 001.07 0 .4.4 0 00.21-.31z"
                      fill="#cfdee8"
                    />
                    <path
                      d="M946 437.89a.33.33 0 010 .62 1.19 1.19 0 01-1.07 0 .33.33 0 010-.62 1.17 1.17 0 011.07 0z"
                      fill="#dce8f1"
                    />
                  </g>
                  <g
                    style={{
                      isolation: "isolate",
                    }}
                  >
                    <path
                      d="M947.23 450.54v24.18a.35.35 0 01-.22.3 1.19 1.19 0 01-1.07 0 .37.37 0 01-.22-.31v-24.18a.38.38 0 00.23.31 1.17 1.17 0 001.06 0 .35.35 0 00.22-.3z"
                      fill="#c1c1c1"
                    />
                    <path
                      d="M947 450.22c.29.18.3.45 0 .62a1.17 1.17 0 01-1.06 0c-.3-.17-.3-.44 0-.62a1.19 1.19 0 011.06 0z"
                      fill="#dce8f1"
                    />
                  </g>
                  <g fill="#cfdee8">
                    <path d="M940.32 437.63v3.31a.08.08 0 01-.05.07.28.28 0 01-.25 0 .06.06 0 01-.06-.07v-3.52zM940.93 438v3.3a.09.09 0 01-.06.08.28.28 0 01-.25 0 .12.12 0 010-.08v-3.52zM941.54 438.34v3.38a.3.3 0 01-.26 0s-.05-.05-.05-.08v-3.52zM942.15 438.7v3.3a.07.07 0 010 .06.24.24 0 01-.26 0s-.06 0-.05-.07v-3.5zM942.76 439.05v3.29a.1.1 0 010 .08.3.3 0 01-.26 0s-.05-.05-.05-.08v-3.5zM943.38 439.41v3.29a.1.1 0 010 .07.3.3 0 01-.26 0 .1.1 0 010-.07v-3.51zM944 439.77V443a.08.08 0 01-.05.08.3.3 0 01-.26 0 .1.1 0 010-.08v-3.49z" />
                  </g>
                  <g
                    style={{
                      isolation: "isolate",
                    }}
                  >
                    <path
                      fill="#616173"
                      d="M934.36 455.52l.68-.4 2.06-.95-.68.39-2.06.96z"
                    />
                    <path
                      fill="#616173"
                      d="M936.42 454.56l.68-.39 8.47 4.89-.68.39-8.47-4.89z"
                    />
                    <path
                      fill="#474756"
                      d="M946.95 462.79l.68-.4-.02 6.02-.68.4.02-6.02z"
                    />
                    <path
                      fill="#4c4c5e"
                      d="M944.89 459.45l.68-.39 2.06 3.33-.68.4-2.06-3.34z"
                    />
                    <path
                      fill="#616173"
                      d="M944.89 459.45l2.06 3.34-.02 6.02-12.59-7.27.02-6.02 2.06-.96 8.47 4.89z"
                    />
                  </g>
                  <path
                    fill="#474756"
                    d="M937.17 470.23v1.06l-9.4 5.47v-1.06l9.4-5.47zM946.95 475.88v1.06l-9.41 5.46.01-1.06 9.4-5.46z"
                  />
                  <path
                    fill="#545466"
                    d="M937.17 470.23l-9.4 5.47-5.88 2.99-1.19-.69 5.14-3.42 9.41-5.46 1.92 1.11z"
                  />
                  <path
                    fill="#474756"
                    d="M927.77 475.7v1.06l-5.88 2.99v-1.06l5.88-2.99z"
                  />
                  <path
                    fill="#4c4c5e"
                    d="M921.89 478.69v1.06l-1.19-.69V478l1.19.69z"
                  />
                  <g>
                    <path
                      fill="#474756"
                      d="M937.55 481.34l-.01 1.06-5.88 2.99v-1.06l5.89-2.99z"
                    />
                    <path
                      fill="#4c4c5e"
                      d="M931.66 484.33v1.06l-1.18-.68v-1.06l1.18.68z"
                    />
                    <path
                      fill="#545466"
                      d="M946.95 475.88l-9.4 5.46-5.89 2.99-1.18-.68 5.14-3.42 9.4-5.47 1.93 1.12z"
                    />
                  </g>
                </g>
                <g fill="#474756">
                  <path d="M952.58 468.15a4.49 4.49 0 00-.52.37c1.35-.52 2.37.23 2.37 1.85a.25.25 0 010 .08l1-.58a.28.28 0 000-.09c0-1.78-1.28-2.54-2.85-1.63z" />
                  <path d="M952.06 468.52a6.25 6.25 0 00-2.3 4.53v.1l4.66-2.7a.25.25 0 000-.08c.01-1.62-1.01-2.37-2.36-1.85z" />
                </g>
                <g
                  style={{
                    isolation: "isolate",
                  }}
                >
                  <path
                    d="M955.29 468.91a1.57 1.57 0 00-1.6.17 4.92 4.92 0 00-2.24 3.87 2.06 2.06 0 00.26 1 1 1 0 00.4.4l-.55-.32-.9-.52a1.28 1.28 0 01-.58-.79 8.48 8.48 0 012.39-3.75 2.76 2.76 0 011.5-.72.54.54 0 01.35.07z"
                    fill="#545466"
                  />
                  <path
                    d="M953.69 469.07a5 5 0 00-2.24 3.88c0 1.42 1 2 2.25 1.28a4.92 4.92 0 002.24-3.87c0-1.43-1.01-2.01-2.25-1.29z"
                    fill="#424242"
                  />
                </g>
                <path
                  d="M953.49 472a.16.16 0 00-.08.14c0 .05 0 .08.08.05a.17.17 0 00.08-.14c0-.05-.03-.05-.08-.05zM955.1 471.54c-.22-.05-.9 0-.9-.18s.88-1.16.93-1.22a2.09 2.09 0 01-.03 1.4zm-.37-.15a1.28 1.28 0 000-.68 4.5 4.5 0 00-.45.59s0 .09.43.09M954 472c.19-.11.9 0 .94 0a3.1 3.1 0 01-1 1.28A5 5 0 01954 472zm0 .72a1.66 1.66 0 00.5-.6.94.94 0 00-.47 0 1.46 1.46 0 000 .62"
                  fill="#cfd8dd"
                />
                <g fill="#cfd8dd">
                  <path d="M953.92 471.77a.17.17 0 00-.09.14s0 .07.09 0a.2.2 0 00.08-.15l-.08.01z" />
                  <ellipse
                    cx={953.71}
                    cy={471.65}
                    rx={0.3}
                    ry={0.17}
                    transform="rotate(-59.84 953.735 471.652)"
                  />
                </g>
                <path
                  d="M953.7 471.15a.19.19 0 00-.09.15c0 .05 0 .07.09.05a.22.22 0 00.08-.15.05.05 0 00-.08-.05zM953.36 471.62a.18.18 0 00-.08.15c0 .05 0 .07.08 0a.16.16 0 00.08-.14c0-.02-.03-.04-.08-.01zM954 471.24a.16.16 0 00-.08.14c0 .06 0 .08.08.05a.18.18 0 00.09-.14c.04-.06 0-.08-.09-.05zM953.18 471.92c.06.13-.86 1.19-.91 1.24a2.05 2.05 0 010-1.37c.22.03.91-.01.91.13zm-.54.66a3.75 3.75 0 00.45-.59s-.05-.1-.44-.07a1.06 1.06 0 000 .66M953.46 471.28a2.63 2.63 0 01-.95 0 3.12 3.12 0 011-1.29 5.58 5.58 0 01-.05 1.29zm-.06 0a1.29 1.29 0 000-.62 1.65 1.65 0 00-.5.61 1.33 1.33 0 00.47 0M953.43 472.32c.15-.06.07 1.16.06 1.22-.7.3-1-.09-1-.11a12.24 12.24 0 01.93-1.11zm0 .72a2.54 2.54 0 000-.61 2.47 2.47 0 00-.47.54s.15.18.49.07M954.92 469.88A12.45 12.45 0 01954 471c-.15.06-.08-1.16-.08-1.22.67-.3.98.08 1 .1zm-.93 1a2.47 2.47 0 00.47-.54s-.15-.18-.49-.06a2.55 2.55 0 000 .6"
                  fill="#cfd8dd"
                />
                <path
                  d="M955.94 470.35a5 5 0 01-2.23 3.88c-1.24.71-2.25.14-2.25-1.29a4.91 4.91 0 012.23-3.87c1.24-.71 2.25-.14 2.25 1.28zm-2.24 3.24a3.69 3.69 0 001.68-2.91c0-1.07-.76-1.51-1.69-1a3.72 3.72 0 00-1.68 2.91c0 1.07.76 1.5 1.69 1M961.5 464.36a2.92 2.92 0 00-.32.21c.81-.31 1.43.14 1.43 1.11a.13.13 0 010 .06l.61-.35v-.06c-.01-1.08-.78-1.52-1.72-.97z"
                  fill="#474756"
                />
                <path
                  d="M961.18 464.57a3.81 3.81 0 00-1.38 2.73v.06l2.8-1.62a.13.13 0 000-.06c.01-.97-.6-1.42-1.42-1.11z"
                  fill="#474756"
                />
                <g>
                  <g
                    style={{
                      isolation: "isolate",
                    }}
                  >
                    <path
                      d="M963 464.85a.93.93 0 00-1 .1 3 3 0 00-1.34 2.32 1.11 1.11 0 00.16.62.56.56 0 00.23.25l-.32-.2-.55-.31a.74.74 0 01-.34-.48 5.07 5.07 0 011.43-2.25 1.65 1.65 0 01.9-.43.31.31 0 01.21 0z"
                      fill="#545466"
                    />
                    <path
                      d="M962 464.94a3 3 0 00-1.34 2.33c0 .86.61 1.2 1.35.77a3 3 0 001.35-2.33c0-.85-.6-1.2-1.36-.77z"
                      fill="#424242"
                    />
                  </g>
                  <path
                    d="M961.89 466.7a.16.16 0 000 .09.12.12 0 00.05-.09s-.02-.01-.05 0zM962.86 466.42c-.13 0-.54 0-.54-.1s.53-.7.56-.73a1.2 1.2 0 01-.02.83zm-.22-.08a.78.78 0 000-.41 2.93 2.93 0 00-.27.35s0 .06.26.06M962.2 466.68a1.26 1.26 0 01.56 0 1.87 1.87 0 01-.62.77 3.62 3.62 0 010-.77zm0 .43a1.06 1.06 0 00.31-.37.78.78 0 00-.28 0s-.05.09 0 .38"
                    fill="#cfd8dd"
                  />
                  <g fill="#cfd8dd">
                    <path d="M962.15 466.56a.12.12 0 000 .09.12.12 0 00.05-.09s-.02-.01-.05 0z" />
                    <ellipse
                      cx={962.03}
                      cy={466.49}
                      rx={0.18}
                      ry={0.1}
                      transform="rotate(-59.84 962.049 466.49)"
                    />
                  </g>
                  <path
                    d="M962 466.19a.12.12 0 000 .09s0 .05 0 0a.13.13 0 00.05-.09H962zM961.82 466.47a.12.12 0 00-.05.09s0 .05.05 0a.11.11 0 000-.09zM962.22 466.25a.11.11 0 00-.05.08s0 .05.05 0a.1.1 0 00.06-.09s-.03-.01-.06.01zM961.71 466.66a4 4 0 01-.55.74 1.17 1.17 0 010-.82c.13.02.55-.01.55.08zm-.33.39a2.15 2.15 0 00.27-.35s0-.06-.26-.05a.65.65 0 000 .4M961.87 466.27a1.5 1.5 0 01-.57 0 1.87 1.87 0 01.62-.77 3 3 0 01-.05.77zm0 0a1 1 0 000-.37.87.87 0 00-.31.36.64.64 0 00.29 0M961.86 466.89c.09 0 0 .7 0 .74-.43.18-.61-.06-.62-.07a7.25 7.25 0 01.56-.66zm0 .44a1.59 1.59 0 000-.37 1.47 1.47 0 00-.28.32s.09.11.3.05M962.75 465.43a5.31 5.31 0 01-.56.67c-.08 0 0-.7 0-.74.37-.17.55.06.56.07zm-.56.61s.09 0 .28-.32a.3.3 0 00-.3 0 1.59 1.59 0 000 .37"
                    fill="#cfd8dd"
                  />
                  <path
                    d="M963.37 465.71A3 3 0 01962 468c-.74.43-1.35.09-1.35-.77a3 3 0 011.34-2.33c.77-.39 1.37-.04 1.38.81zm-1.35 2a2.25 2.25 0 001-1.75c0-.65-.46-.9-1-.58a2.19 2.19 0 00-1 1.75c0 .64.45.9 1 .58"
                    fill="#474756"
                  />
                </g>
                <g fill="#73d0fe">
                  <path d="M953.37 461.76l-2 1.17-2.81-5v-.61a9.22 9.22 0 01.6-3.14zM957.34 455.9a7 7 0 01-1.93 4.41l-4.9-8.8a9.86 9.86 0 013.13-3.05l.65-.38 3 5.48z" />
                </g>
                <path
                  d="M951.67 466.07c1-.26 2.09-.4 3.12-.68a14.66 14.66 0 006.69-4.38 26.26 26.26 0 002.47-3.18c-.16-1.93-.35-3.49-.35-3.49l-5.6 3.25a4.24 4.24 0 01-2.12 3.7l-8.12 4.71v3.24a3.58 3.58 0 011.05-1.77 6.52 6.52 0 012.86-1.4z"
                  fill="#ffb839"
                />
              </g>
              <g id="expeditedbackground__boxcollection5">
                <g
                  style={{
                    isolation: "isolate",
                  }}
                >
                  <path
                    fill="#f2c0a7"
                    d="M936.31 466.29l-.02 7.04-7.83 4.55.02-7.04 7.83-4.55z"
                  />
                  <path
                    fill="#e2af98"
                    d="M933.26 468.07l-.01 1.53-.54.31-.62.36.01-1.53 1.16-.67z"
                  />
                  <path
                    fill="#fed0b5"
                    d="M928.48 470.84l-.02 7.04-9.25-5.34.02-7.03 9.25 5.33z"
                  />
                  <path
                    fill="#ffdcc5"
                    d="M936.31 466.29l-7.83 4.55-9.25-5.33 7.84-4.56 9.24 5.34z"
                  />
                  <path
                    fill="#fed0b5"
                    d="M933.26 468.07l-1.16.67-9.25-5.33 1.17-.68 9.24 5.34z"
                  />
                </g>
                <g fill="#616173">
                  <path d="M922.22 472.46a1 1 0 010 .17.47.47 0 01-.24.44.24.24 0 00-.11.23l.1.07a.07.07 0 010 .06l-.28-.17a.08.08 0 010-.06l.11.06a.8.8 0 00-.12-.37 1.24 1.24 0 01-.21-.85zM922.79 472.58l1.34.77v1.53l-1.33-.77zm1.27 2.19v-1.38l-1.2-.69v1.38l1.2.69" />
                  <path d="M923.46 473.14a1.16 1.16 0 01.46.75.18.18 0 00-.08-.12h-.08a.36.36 0 00-.08-.12.06.06 0 00-.09 0 .15.15 0 00-.08-.11h-.06v.53c0 .1-.08.14-.17.09a.37.37 0 01-.16-.29.08.08 0 010 .05v.08a.27.27 0 00.11.2c.07 0 .12 0 .12-.06v-.53a.15.15 0 000-.06.06.06 0 00-.09 0 .15.15 0 00-.08-.11h-.08a.23.23 0 00-.08-.12.06.06 0 00-.09 0 .3.3 0 01.48-.2s.04.01.05.02zM920.65 472.57v.09l-.81-.47v-.09l.81.47zM920.65 472.4v.09l-.81-.48v-.09l.12.08.11.06.35.2.11.06.12.08z" />
                  <path d="M920.48 471.47l.2.44-.15-.09v.5l-.11-.06v-.5l-.14-.08.2-.21z" />
                  <path d="M919.58 470.73l1.33.77v1.5l-1.33-.77zm1.27 2.19v-1.38l-1.2-.7v1.38l1.21.7" />
                  <path d="M920.02 471.2l.2.44-.15-.08v.5l-.11-.06.01-.5-.15-.09.2-.21zM921.19 471.66l1.33.76V474l-1.34-.77zm1.26 2.18v-1.38l-1.21-.69v1.38l1.2.69" />
                </g>
                <g
                  style={{
                    isolation: "isolate",
                  }}
                >
                  <path
                    fill="#f2c0a7"
                    d="M946.9 472.4l-.02 7.03-7.83 4.56.02-7.04 7.83-4.55z"
                  />
                  <path
                    fill="#e2af98"
                    d="M943.85 474.17l-.01 1.53-.54.32-.62.36.01-1.53 1.16-.68z"
                  />
                  <path
                    fill="#fed0b5"
                    d="M939.07 476.95l-.02 7.04-9.25-5.34.03-7.04 9.24 5.34z"
                  />
                  <path
                    fill="#ffdcc5"
                    d="M946.9 472.4l-7.83 4.55-9.24-5.34 7.83-4.55 9.24 5.34z"
                  />
                  <path
                    fill="#fed0b5"
                    d="M943.85 474.17l-1.16.68-9.24-5.34 1.16-.67 9.24 5.33z"
                  />
                </g>
                <g fill="#616173">
                  <path d="M932.81 478.57a.88.88 0 010 .16.46.46 0 01-.24.44.27.27 0 00-.11.24l.11.06a.11.11 0 010 .06l-.29-.16a.08.08 0 010-.06l.11.06a.68.68 0 00-.12-.37 1.27 1.27 0 01-.21-.86zM933.39 478.69l1.33.77V481l-1.33-.77zm1.26 2.19v-1.38l-1.2-.7v1.38l1.2.7" />
                  <path d="M934.05 479.25a1.21 1.21 0 01.46.75.15.15 0 00-.08-.11h-.08a.24.24 0 00-.08-.11.06.06 0 00-.09 0 .17.17 0 00-.08-.12h-.06v.52c0 .1-.07.15-.16.09a.34.34 0 01-.17-.28V480.06a.27.27 0 00.11.2c.07 0 .12 0 .12-.07v-.52a.1.1 0 000-.06h-.08a.23.23 0 00-.09-.12.05.05 0 00-.08 0 .19.19 0 00-.08-.11h-.08a.29.29 0 01.47-.2s0 .06.05.07zM931.25 478.68v.09l-.82-.48v-.09l.82.48zM931.25 478.5v.09l-.82-.47v-.09l.12.07.11.06.35.21.11.06.13.07z" />
                  <path d="M931.07 477.57l.2.44-.15-.08v.5l-.11-.06.01-.5-.15-.08.2-.22z" />
                  <path d="M930.17 476.84l1.34.76v1.53l-1.33-.76zm1.27 2.18v-1.38l-1.2-.69v1.38l1.21.69" />
                  <path d="M930.61 477.31l.2.44-.15-.08v.49l-.11-.06.01-.5-.15-.08.2-.21zM931.78 477.76l1.33.77v1.53l-1.34-.77zM933 480v-1.38l-1.21-.7v1.39l1.2.69" />
                </g>
                <g>
                  <g
                    style={{
                      isolation: "isolate",
                    }}
                  >
                    <path
                      fill="#f2c0a7"
                      d="M942.01 462.1l-.02 7.03-7.83 4.56.02-7.04 7.83-4.55z"
                    />
                    <path
                      fill="#e2af98"
                      d="M938.96 463.87l-.01 1.53-.54.32-.62.36.01-1.53 1.16-.68z"
                    />
                    <path
                      fill="#fed0b5"
                      d="M934.18 466.65l-.02 7.04-9.25-5.34.02-7.04 9.25 5.34z"
                    />
                    <path
                      fill="#ffdcc5"
                      d="M942.01 462.1l-7.83 4.55-9.25-5.34 7.84-4.55 9.24 5.34z"
                    />
                    <path
                      fill="#fed0b5"
                      d="M938.96 463.87l-1.16.68-9.25-5.34 1.17-.67 9.24 5.33z"
                    />
                  </g>
                  <g fill="#616173">
                    <path d="M927.92 468.26a1.11 1.11 0 010 .17.46.46 0 01-.24.44.25.25 0 00-.11.24l.11.06a.11.11 0 010 .06l-.29-.16v-.06c0-.06 0 0 0 0l.11.06a.77.77 0 00-.12-.37 1.27 1.27 0 01-.21-.86zM928.49 468.39l1.34.77v1.53l-1.33-.77zm1.27 2.19v-1.39l-1.2-.69v1.38l1.2.7" />
                    <path d="M929.16 468.94a.05.05 0 010 .05 1.21 1.21 0 01.46.75.19.19 0 00-.08-.11h-.08a.24.24 0 00-.08-.11.06.06 0 00-.09 0 .17.17 0 00-.08-.12h-.06v.6c0 .1-.08.14-.17.09a.36.36 0 01-.16-.28v-.06.06a.27.27 0 00.11.2c.07 0 .12 0 .12-.07v-.52a.1.1 0 000-.06h-.09a.15.15 0 00-.08-.11.05.05 0 00-.08 0 .25.25 0 00-.08-.12h-.08a.3.3 0 01.47-.2s.04.01.05.01zM926.36 468.38v.09l-.82-.48v-.09l.82.48zM926.36 468.2v.09l-.82-.47v-.09l.12.07.11.06.35.21.11.06.13.07z" />
                    <path d="M926.18 467.27l.2.44-.15-.08v.5l-.11-.06.01-.5-.15-.09.2-.21z" />
                    <path d="M925.28 466.53l1.33.77v1.53l-1.33-.77zm1.27 2.19v-1.38l-1.2-.69V468l1.21.69" />
                    <path d="M925.72 467.01l.2.44-.15-.09v.5l-.11-.06.01-.5-.15-.08.2-.21zM926.89 467.46l1.33.77v1.53l-1.34-.77zm1.26 2.19v-1.38l-1.21-.7V469l1.2.69" />
                  </g>
                </g>
              </g>
            </g>
            <g id="expeditedbackground__liftwithbox">
              <g id="expeditedbackground__forklift">
                <path
                  d="M414.79 329.09a14.69 14.69 0 006.7 4.38c1 .28 2.08.42 3.12.68a6.44 6.44 0 012.84 1.37 3.51 3.51 0 011.05 1.77v5.08l-2-1.14-5.65-3.23-8.23-4.75c-.67-.72-.52-4.42-.29-7.29a27.22 27.22 0 002.46 3.13z"
                  fill="#4c4c5e"
                />
                <g
                  style={{
                    isolation: "isolate",
                  }}
                >
                  <path
                    fill="#545466"
                    d="M438.36 328.33l-.03 8.31-9.84 5.72.03-8.3 9.84-5.73z"
                  />
                  <path
                    fill="#ffd469"
                    d="M412.65 324.89l5.61 3.24.03-2.46 6.73-3.92-3.5-2.02-8.87 5.16z"
                  />
                </g>
                <g
                  style={{
                    isolation: "isolate",
                  }}
                  fill="#ffd469"
                >
                  <path d="M418.26 328.13l10.25 5.92 9.86-5.71-11.24-5.37-2.11-1.22-6.73 3.92-.03 2.46z" />
                  <path d="M425.02 321.75l2.11 1.22.03-2.46-2.14 1.24z" />
                  <g>
                    <path d="M427.16 320.51l-8.87 5.16-5.61-3.24c1.26-2.43 4.63-4 8.87-5.16z" />
                    <path d="M426.12 320.68l-4.83-2.79-7.77 4.51 4.83 2.79 7.77-4.51z" />
                  </g>
                </g>
                <g
                  style={{
                    isolation: "isolate",
                  }}
                >
                  <path
                    d="M423.06 315.8l9.8-5.75-3.25-1.88a3.36 3.36 0 00-3.37 0l-8.12 4.83z"
                    fill="#616173"
                  />
                  <path
                    d="M428.59 325.37v8.71l9.8-5.75v-8.71a12.17 12.17 0 00-5.53-9.57l-9.8 5.75a12.19 12.19 0 015.53 9.57z"
                    fill="#545466"
                  />
                  <path
                    d="M437.52 327.85v-8.23a11.34 11.34 0 00-4.69-8.58l-8.21 4.82a13.09 13.09 0 014.79 9.52v7.22z"
                    fill="#73d0fe"
                  />
                  <g>
                    <path
                      d="M418.12 313v11a7.75 7.75 0 003.52 6.1l6.95 4v-8.72a12.19 12.19 0 00-5.53-9.57z"
                      fill="#4c4c5e"
                    />
                    <path
                      d="M418.93 324a7 7 0 001.94 4.41 5.19 5.19 0 001.17.95l.87.5 2 1.17 2.78 1.61v-7.25a9.47 9.47 0 00-.6-3.14 12.26 12.26 0 00-1.37-2.64 9.89 9.89 0 00-3.14-3l-.64-.38-3-1.74v7.22z"
                      fill="#57c7ff"
                    />
                  </g>
                </g>
                <g
                  style={{
                    isolation: "isolate",
                  }}
                >
                  <path
                    fill="#4c4c5e"
                    d="M441.03 337.2l.01 1.06 1.8-1.04v-1.06l-1.81 1.04z"
                  />
                  <path
                    fill="#2d3c41"
                    d="M439.1 338.31l.01 1.06 1.93-1.11-.01-1.06-1.93 1.11z"
                  />
                  <path
                    fill="#474756"
                    d="M431.26 342.84v1.06l7.85-4.53-.01-1.06-7.84 4.53z"
                  />
                  <path
                    fill="#2d3c41"
                    d="M429.33 343.96v1.06l1.93-1.12v-1.06l-1.93 1.12z"
                  />
                  <path
                    fill="#474756"
                    d="M425.64 343.91v1.06l1.88 1.09V345l-1.88-1.09z"
                  />
                  <path
                    fill="#4c4c5e"
                    d="M425.64 343.91l1.88 1.09 1.81-1.04 1.93-1.12 7.84-4.53 1.93-1.11 1.81-1.04-1.88-1.1-15.32 8.85z"
                  />
                  <path
                    fill="#474756"
                    d="M427.52 345v1.06l1.81-1.04v-1.06l-1.81 1.04z"
                  />
                </g>
                <g
                  style={{
                    isolation: "isolate",
                  }}
                >
                  <path
                    d="M438.73 313v24.18a.36.36 0 00.22.31 1.17 1.17 0 001.06 0 .37.37 0 00.22-.31V313a.38.38 0 01-.22.31 1.19 1.19 0 01-1.07 0 .4.4 0 01-.21-.31z"
                    fill="#c1c1c1"
                  />
                  <path
                    d="M439 312.67a.33.33 0 000 .62 1.19 1.19 0 001.07 0 .33.33 0 000-.62 1.17 1.17 0 00-1.07 0z"
                    fill="#dce8f1"
                  />
                </g>
                <g
                  style={{
                    isolation: "isolate",
                  }}
                >
                  <path
                    d="M437.43 302.77v20.81a.36.36 0 00.22.31 1.17 1.17 0 001.06 0 .35.35 0 00.22-.31v-20.81a.38.38 0 01-.22.31 1.19 1.19 0 01-1.07 0 .4.4 0 01-.21-.31z"
                    fill="#cfdee8"
                  />
                  <g
                    style={{
                      isolation: "isolate",
                    }}
                  >
                    <path
                      d="M430.26 308a.22.22 0 01.23 0 .71.71 0 01.33.56.21.21 0 01-.1.2l7.27-4.25a.22.22 0 00.09-.21.67.67 0 00-.32-.56.22.22 0 00-.23 0z"
                      fill="#616173"
                    />
                    <path
                      d="M430.49 308a.74.74 0 01.33.57c0 .2-.15.28-.33.18a.7.7 0 01-.32-.56c0-.19.14-.28.32-.19z"
                      fill="#cfdee8"
                    />
                  </g>
                  <path
                    d="M437.66 302.46a.33.33 0 000 .62 1.19 1.19 0 001.07 0 .33.33 0 000-.62 1.17 1.17 0 00-1.07 0z"
                    fill="#dce8f1"
                  />
                </g>
                <g
                  style={{
                    isolation: "isolate",
                  }}
                >
                  <path
                    d="M430.26 312.25a.22.22 0 01.23 0 .71.71 0 01.33.56.24.24 0 01-.1.21l7.27-4.26q.09 0 .09-.21a.7.7 0 00-.32-.56.24.24 0 00-.23 0z"
                    fill="#545466"
                  />
                  <path
                    d="M430.49 312.27a.71.71 0 01.33.56c0 .21-.15.29-.33.18a.7.7 0 01-.32-.56c0-.2.14-.29.32-.18z"
                    fill="#cfdee8"
                  />
                </g>
                <g
                  style={{
                    isolation: "isolate",
                  }}
                >
                  <path
                    d="M430.26 314a.22.22 0 01.23 0 .71.71 0 01.33.56.24.24 0 01-.1.21l7.27-4.26q.09 0 .09-.21a.7.7 0 00-.32-.56.24.24 0 00-.23 0z"
                    fill="#545466"
                  />
                  <path
                    d="M430.49 314a.71.71 0 01.33.56c0 .2-.15.29-.33.18a.7.7 0 01-.32-.56c0-.18.14-.31.32-.18z"
                    fill="#cfdee8"
                  />
                </g>
                <g
                  style={{
                    isolation: "isolate",
                  }}
                >
                  <path
                    d="M430.26 315.66a.25.25 0 01.23 0 .71.71 0 01.33.56.24.24 0 01-.1.21l7.28-4.23q.09 0 .09-.21a.7.7 0 00-.32-.56.24.24 0 00-.23 0z"
                    fill="#545466"
                  />
                  <path
                    d="M430.49 315.69a.71.71 0 01.33.56c0 .2-.15.29-.33.18a.7.7 0 01-.32-.56c0-.2.14-.29.32-.18z"
                    fill="#cfdee8"
                  />
                </g>
                <g
                  style={{
                    isolation: "isolate",
                  }}
                >
                  <path
                    d="M430.26 317.37a.22.22 0 01.23 0 .71.71 0 01.33.56.24.24 0 01-.1.21l7.27-4.26q.09 0 .09-.21a.7.7 0 00-.32-.56.24.24 0 00-.23 0z"
                    fill="#545466"
                  />
                  <path
                    d="M430.49 317.4a.71.71 0 01.33.56c0 .2-.15.29-.33.18a.7.7 0 01-.32-.56c0-.2.14-.29.32-.18z"
                    fill="#cfdee8"
                  />
                </g>
                <g
                  style={{
                    isolation: "isolate",
                  }}
                >
                  <path
                    d="M430.26 319.08a.22.22 0 01.23 0 .71.71 0 01.33.56.21.21 0 01-.1.2l7.27-4.25q.09 0 .09-.21a.7.7 0 00-.32-.56.24.24 0 00-.23 0z"
                    fill="#545466"
                  />
                  <path
                    d="M430.49 319.11a.71.71 0 01.33.56c0 .2-.15.29-.33.18a.7.7 0 01-.32-.56c0-.2.14-.29.32-.18z"
                    fill="#cfdee8"
                  />
                </g>
                <g
                  style={{
                    isolation: "isolate",
                  }}
                >
                  <path
                    d="M430.26 320.79a.22.22 0 01.23 0 .71.71 0 01.33.56.21.21 0 01-.1.2l7.27-4.25a.22.22 0 00.09-.21.7.7 0 00-.32-.56.22.22 0 00-.23 0z"
                    fill="#545466"
                  />
                  <path
                    d="M430.49 320.82a.71.71 0 01.33.56c0 .2-.15.28-.33.18a.7.7 0 01-.32-.56c0-.21.14-.29.32-.18z"
                    fill="#cfdee8"
                  />
                </g>
                <g
                  style={{
                    isolation: "isolate",
                  }}
                >
                  <path
                    d="M430 306.28v20.81a.4.4 0 00.22.31 1.19 1.19 0 001.07 0 .38.38 0 00.22-.31v-20.81a.4.4 0 01-.22.31 1.19 1.19 0 01-1.07 0 .38.38 0 01-.22-.31z"
                    fill="#cfdee8"
                  />
                  <path
                    d="M430.24 306a.33.33 0 000 .62 1.19 1.19 0 001.07 0 .33.33 0 000-.62 1.19 1.19 0 00-1.07 0z"
                    fill="#dce8f1"
                  />
                </g>
                <g
                  style={{
                    isolation: "isolate",
                  }}
                >
                  <path
                    d="M429.05 318.62v24.18a.35.35 0 00.22.3 1.17 1.17 0 001.06 0 .37.37 0 00.23-.31v-24.18a.37.37 0 01-.22.31 1.19 1.19 0 01-1.07 0 .36.36 0 01-.22-.3z"
                    fill="#c1c1c1"
                  />
                  <path
                    d="M429.27 318.3c-.3.18-.3.45 0 .62a1.19 1.19 0 001.07 0c.3-.17.3-.44 0-.62a1.17 1.17 0 00-1.07 0z"
                    fill="#dce8f1"
                  />
                </g>
                <g fill="#cfdee8">
                  <path d="M436 305.71V309a.06.06 0 00.05.07.28.28 0 00.25 0 .07.07 0 00.06-.07v-3.5zM435.34 306.07v3.3a.11.11 0 00.06.08.28.28 0 00.25 0 .09.09 0 00.05-.08v-3.52zM434.74 306.42v3.3l.05.08a.3.3 0 00.26 0s.05-.05.05-.08v-3.52zM434.12 306.78v3.3s0 .05.06.06a.23.23 0 00.25 0s.06 0 .05-.07v-3.5zM433.52 307.13v3.29a.08.08 0 00.05.08.3.3 0 00.26 0s.05-.05.05-.08v-3.5zM432.9 307.49v3.29a.1.1 0 000 .07.28.28 0 00.25 0 .1.1 0 00.06-.07v-3.51zM432.29 307.85v3.27a.09.09 0 00.06.08.3.3 0 00.26 0 .1.1 0 00.05-.08v-3.49z" />
                </g>
                <g
                  style={{
                    isolation: "isolate",
                  }}
                >
                  <path
                    fill="#616173"
                    d="M441.92 323.6l-.68-.4-2.06-.95.68.39 2.06.96z"
                  />
                  <path
                    fill="#616173"
                    d="M439.86 322.64l-.68-.39-8.48 4.89.69.39 8.47-4.89z"
                  />
                  <path
                    fill="#474756"
                    d="M429.33 330.87l-.68-.4.02 6.02.68.4-.02-6.02z"
                  />
                  <path
                    fill="#4c4c5e"
                    d="M431.39 327.53l-.69-.39-2.05 3.33.68.4 2.06-3.34z"
                  />
                  <path
                    fill="#616173"
                    d="M431.39 327.53l-2.06 3.34.02 6.02 12.59-7.27-.02-6.02-2.06-.96-8.47 4.89z"
                  />
                </g>
                <path
                  fill="#474756"
                  d="M439.1 338.31l.01 1.06 9.4 5.47-.01-1.06-9.4-5.47zM429.33 343.96v1.06l9.4 5.46v-1.06l-9.4-5.46z"
                />
                <path
                  fill="#545466"
                  d="M439.1 338.31l9.4 5.47 5.89 2.99 1.19-.69-5.15-3.42-9.4-5.46-1.93 1.11z"
                />
                <path
                  fill="#474756"
                  d="M448.5 343.78l.01 1.06 5.88 2.99v-1.06l-5.89-2.99z"
                />
                <path
                  fill="#4c4c5e"
                  d="M454.39 346.77v1.06l1.19-.69v-1.06l-1.19.69z"
                />
                <g>
                  <path
                    fill="#474756"
                    d="M438.73 349.42v1.06l5.89 2.99-.01-1.06-5.88-2.99z"
                  />
                  <path
                    fill="#4c4c5e"
                    d="M444.61 352.41l.01 1.06 1.18-.68v-1.06l-1.19.68z"
                  />
                  <path
                    fill="#545466"
                    d="M429.33 343.96l9.4 5.46 5.88 2.99 1.19-.68-5.14-3.42-9.4-5.47-1.93 1.12z"
                  />
                </g>
                <g fill="#474756">
                  <path d="M423.7 336.23a5.56 5.56 0 01.52.37c-1.35-.52-2.37.23-2.37 1.85v.08l-1-.58v-.09c0-1.81 1.27-2.54 2.85-1.63z" />
                  <path d="M424.22 336.6a6.32 6.32 0 012.3 4.53v.1l-4.67-2.7v-.08c0-1.62 1.02-2.37 2.37-1.85z" />
                </g>
                <g>
                  <g
                    style={{
                      isolation: "isolate",
                    }}
                  >
                    <path
                      d="M421 337a1.57 1.57 0 011.6.17 4.91 4.91 0 012.23 3.87 1.87 1.87 0 01-.26 1 1 1 0 01-.39.4l.54-.32.91-.52a1.23 1.23 0 00.57-.79 8.46 8.46 0 00-2.38-3.75 2.76 2.76 0 00-1.51-.72.51.51 0 00-.34.07z"
                      fill="#545466"
                    />
                    <path
                      d="M422.59 337.15a4.91 4.91 0 012.23 3.88c0 1.42-1 2-2.25 1.28a5 5 0 01-2.24-3.87c.01-1.44 1.02-2.01 2.26-1.29z"
                      fill="#424242"
                    />
                  </g>
                  <path
                    d="M422.79 340.08a.18.18 0 01.08.14s0 .08-.08 0a.18.18 0 01-.09-.14c0-.01.04-.03.09 0zM421.15 338.22c.05.06 1 1.09.92 1.22s-.67.13-.9.18a2.12 2.12 0 01-.02-1.4zm.4 1.25c.38 0 .43-.09.43-.09a4.36 4.36 0 00-.46-.59 1.14 1.14 0 000 .68M422.32 340.07a5.53 5.53 0 01.06 1.28 3 3 0 01-1-1.28s.75-.15.94 0zm0 .68a1.46 1.46 0 000-.62 1 1 0 00-.48 0 1.74 1.74 0 00.51.6"
                    fill="#cfd8dd"
                  />
                  <g fill="#cfd8dd">
                    <path d="M422.36 339.85a.16.16 0 01.08.14c0 .05 0 .07-.08.05a.18.18 0 01-.08-.15c0-.05.03-.07.08-.04z" />
                    <ellipse
                      cx={422.56}
                      cy={339.73}
                      rx={0.17}
                      ry={0.3}
                      transform="rotate(-30.16 422.54 339.72)"
                    />
                  </g>
                  <path
                    d="M422.58 339.23a.19.19 0 01.09.15c0 .05 0 .07-.09.05a.19.19 0 01-.08-.15.05.05 0 01.08-.05zM422.92 339.7a.2.2 0 01.08.15h-.08a.17.17 0 01-.09-.14c0-.02.04-.04.09-.01zM422.24 339.32a.18.18 0 01.08.14c0 .06 0 .08-.08.05a.18.18 0 01-.09-.14c0-.06.04-.08.09-.05zM424 339.87a2 2 0 010 1.37c-.05-.05-1-1.11-.9-1.24s.69-.1.9-.13zm-.38.79a1.15 1.15 0 000-.66c-.39 0-.44.07-.44.07a3.75 3.75 0 00.45.59M422.78 338.09a3.12 3.12 0 011 1.29 2.64 2.64 0 01-.95 0 5.06 5.06 0 01-.05-1.29zm.09 1.22a1.41 1.41 0 00.48 0 1.65 1.65 0 00-.5-.61 1.68 1.68 0 000 .62M422.87 340.4a12.17 12.17 0 01.94 1.11s-.32.41-1 .11c0-.06-.08-1.28.06-1.22zm0 .72c.35.11.49-.06.49-.07a1.94 1.94 0 00-.47-.54 2.64 2.64 0 000 .61M422.39 337.87c0 .06.08 1.28-.07 1.22a12.53 12.53 0 01-.93-1.12s.3-.41 1-.1zm-.1 1.1a2.55 2.55 0 000-.6c-.34-.12-.49.05-.49.06a2.33 2.33 0 00.46.54"
                    fill="#cfd8dd"
                  />
                  <path
                    d="M422.59 337.15a4.94 4.94 0 012.23 3.87c0 1.43-1 2-2.25 1.29a4.91 4.91 0 01-2.23-3.88c0-1.43 1.01-1.99 2.25-1.28zm0 4.52c.93.53 1.69.1 1.69-1a3.69 3.69 0 00-1.68-2.91c-.93-.54-1.68-.1-1.69 1a3.72 3.72 0 001.68 2.91"
                    fill="#474756"
                  />
                </g>
                <path
                  d="M414.78 332.44a2.11 2.11 0 01.31.21c-.81-.31-1.42.14-1.42 1.11v.06l-.6-.35v-.06c0-1.08.77-1.52 1.71-.97z"
                  fill="#474756"
                />
                <path
                  d="M415.09 332.65a3.82 3.82 0 011.39 2.73v.06l-2.81-1.62v-.06c0-.97.61-1.42 1.42-1.11z"
                  fill="#474756"
                />
                <g>
                  <g
                    style={{
                      isolation: "isolate",
                    }}
                  >
                    <path
                      d="M413.3 332.93a.93.93 0 011 .1 2.94 2.94 0 011.35 2.32 1.2 1.2 0 01-.16.62.64.64 0 01-.24.25l.33-.2.55-.31a.74.74 0 00.34-.48A5.07 5.07 0 00415 333a1.69 1.69 0 00-.91-.43.28.28 0 00-.2 0z"
                      fill="#545466"
                    />
                    <path
                      d="M414.26 333a3 3 0 011.35 2.33c0 .86-.61 1.2-1.35.77a3 3 0 01-1.35-2.33c0-.83.61-1.18 1.35-.77z"
                      fill="#424242"
                    />
                  </g>
                  <path
                    d="M414.38 334.78a.12.12 0 01.05.09h-.05a.16.16 0 01-.05-.09h.05zM413.4 333.67s.58.65.55.73-.4.08-.54.1a1.23 1.23 0 01-.01-.83zm.24.75c.23 0 .26-.06.26-.06a2.77 2.77 0 00-.28-.35.73.73 0 000 .41M414.1 334.78a3 3 0 010 .77 1.85 1.85 0 01-.63-.77 1.3 1.3 0 01.57 0zm0 .41a1 1 0 000-.38.77.77 0 00-.28 0 1.1 1.1 0 00.3.37"
                    fill="#cfd8dd"
                  />
                  <g fill="#cfd8dd">
                    <path d="M414.13 334.64a.12.12 0 01.05.09h-.05a.12.12 0 01-.05-.09s.02-.01.05 0z" />
                    <ellipse
                      cx={414.25}
                      cy={334.57}
                      rx={0.1}
                      ry={0.18}
                      transform="rotate(-30.16 414.237 334.557)"
                    />
                  </g>
                  <path
                    d="M414.26 334.27a.12.12 0 01.05.09s0 .05-.05 0a.11.11 0 01-.05-.09s.02-.01.05 0zM414.46 334.55a.12.12 0 01.05.09s0 .05-.05 0a.09.09 0 010-.09s-.03-.01 0 0zM414.05 334.33a.09.09 0 01.05.08h-.05a.09.09 0 01-.05-.09s0-.01.05.01zM415.12 334.66a1.14 1.14 0 010 .82 3.9 3.9 0 01-.54-.74c-.01-.09.42-.06.54-.08zm-.23.47a.69.69 0 000-.4h-.27a2.93 2.93 0 00.27.35M414.38 333.59a1.87 1.87 0 01.62.77 1.5 1.5 0 01-.57 0 3.06 3.06 0 01-.05-.77zm.06.73a.6.6 0 00.28 0 .89.89 0 00-.3-.36v.37M414.44 335a7.25 7.25 0 01.56.66s-.19.25-.62.07c0 0-.05-.77 0-.74zm0 .43c.21.06.29 0 .29-.05-.19-.26-.26-.31-.28-.32a1.59 1.59 0 000 .37M414.15 333.45v.74a5.31 5.31 0 01-.56-.67s.13-.25.56-.07zm-.07.67a1.69 1.69 0 000-.37.29.29 0 00-.3 0c.19.27.27.32.28.32"
                    fill="#cfd8dd"
                  />
                  <path
                    d="M414.26 333a3 3 0 011.35 2.33c0 .86-.61 1.2-1.36.77a3 3 0 01-1.34-2.33c0-.83.61-1.18 1.35-.77zm0 2.72c.56.32 1 .06 1-.58a2.22 2.22 0 00-1-1.75c-.56-.32-1-.07-1 .58a2.24 2.24 0 001 1.75"
                    fill="#474756"
                  />
                </g>
                <g fill="#73d0fe">
                  <path d="M422.91 329.84l2 1.17 2.81-5v-.61a9.47 9.47 0 00-.6-3.14zM418.93 324a7 7 0 001.94 4.41l4.9-8.8a9.89 9.89 0 00-3.14-3l-.64-.38-3.05 5.48z" />
                </g>
                <path
                  d="M424.61 334.15c-1-.26-2.1-.4-3.12-.68a14.69 14.69 0 01-6.7-4.38 27.22 27.22 0 01-2.46-3.18c.15-1.93.34-3.49.34-3.49l5.61 3.25a4.25 4.25 0 002.13 3.7l8.11 4.68v3.24a3.51 3.51 0 00-1.05-1.77 6.44 6.44 0 00-2.86-1.37z"
                  fill="#ffb839"
                />
              </g>
              <g id="expeditedbackground__boxcollection1">
                <g
                  style={{
                    isolation: "isolate",
                  }}
                >
                  <path
                    fill="#f2c0a7"
                    d="M439.97 334.37l.02 7.04 7.83 4.55-.02-7.04-7.83-4.55z"
                  />
                  <path
                    fill="#e2af98"
                    d="M443.02 336.15v1.53l.54.31.63.36-.01-1.53-1.16-.67z"
                  />
                  <path
                    fill="#fed0b5"
                    d="M447.8 338.92l.02 7.04 9.24-5.34-.02-7.03-9.24 5.33z"
                  />
                  <path
                    fill="#ffdcc5"
                    d="M439.97 334.37l7.83 4.55 9.24-5.33-7.83-4.56-9.24 5.34z"
                  />
                  <path
                    fill="#fed0b5"
                    d="M443.02 336.15l1.16.67 9.24-5.33-1.16-.68-9.24 5.34z"
                  />
                </g>
                <g fill="#616173">
                  <path d="M454.06 340.54a1 1 0 000 .17.47.47 0 00.24.44.24.24 0 01.11.23l-.11.07a.06.06 0 000 .06l.29-.17a.07.07 0 000-.06l-.11.06a.78.78 0 01.11-.37 1.2 1.2 0 00.22-.85zM453.49 342.19l-1.34.77v-1.53l1.33-.77zm-1.27.66l1.2-.69v-1.38l-1.21.69v1.38" />
                  <path d="M452.81 341.22a1.16 1.16 0 00-.46.75.15.15 0 01.08-.12.05.05 0 01.08 0 .36.36 0 01.08-.12h.08a.2.2 0 01.09-.11h.05v.53c0 .1.07.14.16.09a.39.39 0 00.17-.29v.1a.25.25 0 01-.12.2c-.06 0-.11 0-.11-.06v-.53l.06-.06h.08a.24.24 0 01.08-.11.05.05 0 01.09 0 .15.15 0 01.08-.12h.08a.29.29 0 00-.47-.2l-.1.05zM455.62 340.65v.09l.82-.47v-.09l-.82.47zM455.62 340.48v.09l.82-.48V340l-.13.08-.1.06-.36.2-.1.06-.13.08z" />
                  <path d="M455.8 339.55l-.2.44.15-.09v.5l.1-.06v-.5l.15-.08-.2-.21z" />
                  <path d="M456.7 340.34l-1.33.77v-1.53l1.33-.77zm-1.27.66l1.2-.7v-1.38l-1.2.7V341" />
                  <path d="M456.26 339.28l-.2.44.15-.08v.5l.1-.06v-.5l.15-.09-.2-.21zM455.09 341.27l-1.33.77v-1.54l1.33-.76zm-1.27.65l1.21-.69v-1.38l-1.2.69v1.38" />
                </g>
                <g
                  style={{
                    isolation: "isolate",
                  }}
                >
                  <path
                    fill="#f2c0a7"
                    d="M429.38 340.48l.02 7.03 7.83 4.56-.02-7.04-7.83-4.55z"
                  />
                  <path
                    fill="#e2af98"
                    d="M432.43 342.25v1.53l.54.32.63.36-.01-1.53-1.16-.68z"
                  />
                  <path
                    fill="#fed0b5"
                    d="M437.21 345.03l.02 7.04 9.24-5.34-.02-7.04-9.24 5.34z"
                  />
                  <path
                    fill="#ffdcc5"
                    d="M429.38 340.48l7.83 4.55 9.24-5.34-7.83-4.55-9.24 5.34z"
                  />
                  <path
                    fill="#fed0b5"
                    d="M432.43 342.25l1.16.68 9.24-5.34-1.16-.67-9.24 5.33z"
                  />
                </g>
                <g fill="#616173">
                  <path d="M443.47 346.65a.88.88 0 000 .16.46.46 0 00.24.44.27.27 0 01.11.24l-.11.06a.07.07 0 000 .06l.29-.16a.07.07 0 000-.06l-.11.06a.75.75 0 01.11-.37 1.23 1.23 0 00.22-.86zM442.9 348.3l-1.34.77v-1.53l1.33-.77zm-1.27.66l1.2-.7v-1.38l-1.21.7V349" />
                  <path d="M442.22 347.33a1.18 1.18 0 00-.47.75.2.2 0 01.09-.11.05.05 0 01.08 0 .19.19 0 01.08-.11h.08a.23.23 0 01.09-.12h.05v.52c0 .1.07.15.16.09a.33.33 0 00.16-.28v-.06.06a.28.28 0 01-.12.2c-.06 0-.11 0-.11-.07v-.52a.17.17 0 01.06-.06h.08a.28.28 0 01.08-.12.06.06 0 01.09 0 .15.15 0 01.08-.11h.08a.29.29 0 00-.47-.2s-.07.13-.09.14zM445.03 346.76v.09l.82-.48v-.08l-.82.47zM445.03 346.58v.09l.82-.47v-.09l-.13.07-.1.06-.36.21-.1.06-.13.07z" />
                  <path d="M445.21 345.65l-.2.45.15-.09v.5l.1-.06v-.5l.15-.08-.2-.22z" />
                  <path d="M446.11 346.45l-1.33.76v-1.53l1.33-.76zm-1.27.65l1.2-.69V345l-1.2.69v1.38" />
                  <path d="M445.67 345.39l-.2.44.15-.08v.49l.1-.06v-.5l.15-.08-.2-.21zM444.5 347.37l-1.33.77v-1.53l1.33-.77zm-1.27.66l1.21-.69V346l-1.2.7v1.3" />
                </g>
                <g>
                  <g
                    style={{
                      isolation: "isolate",
                    }}
                  >
                    <path
                      fill="#f2c0a7"
                      d="M434.27 330.18l.02 7.03 7.83 4.55-.02-7.03-7.83-4.55z"
                    />
                    <path
                      fill="#e2af98"
                      d="M437.32 331.95v1.53l.54.32.63.36-.01-1.53-1.16-.68z"
                    />
                    <path
                      fill="#fed0b5"
                      d="M442.1 334.73l.02 7.03 9.24-5.33-.02-7.04-9.24 5.34z"
                    />
                    <path
                      fill="#ffdcc5"
                      d="M434.27 330.18l7.83 4.55 9.24-5.34-7.83-4.55-9.24 5.34z"
                    />
                    <path
                      fill="#fed0b5"
                      d="M437.32 331.95l1.16.68 9.24-5.34-1.16-.67-9.24 5.33z"
                    />
                  </g>
                  <g fill="#616173">
                    <path d="M448.36 336.34a1.11 1.11 0 000 .17.46.46 0 00.24.44.25.25 0 01.11.24l-.11.06a.07.07 0 000 .06l.29-.16a.09.09 0 000-.06l-.11.06a.75.75 0 01.11-.37 1.23 1.23 0 00.22-.86zM447.79 338l-1.34.77v-1.53l1.33-.77zm-1.27.66l1.2-.7v-1.38l-1.21.69v1.39" />
                    <path d="M447.11 337a.08.08 0 000 .05 1.27 1.27 0 00-.47.75.2.2 0 01.09-.11h.08a.19.19 0 01.08-.11h.08a.23.23 0 01.09-.12v.54c0 .1.07.14.16.09a.33.33 0 00.16-.28v-.06.06a.25.25 0 01-.12.2c-.06 0-.11 0-.11-.07v-.52l.06-.06h.08a.24.24 0 01.08-.11.06.06 0 01.09 0 .2.2 0 01.08-.12.05.05 0 01.08 0 .3.3 0 00-.47-.2s-.02.07-.04.07zM449.92 336.46v.09l.82-.48v-.09l-.82.48zM449.92 336.28v.09l.82-.47v-.09l-.13.07-.1.06-.36.21-.1.06-.13.07z" />
                    <path d="M450.1 335.35l-.2.44.15-.08v.5l.1-.06v-.5l.15-.09-.2-.21z" />
                    <path d="M451 336.14l-1.33.77v-1.53l1.33-.77zm-1.27.66l1.2-.69v-1.38l-1.2.69v1.38" />
                    <path d="M450.56 335.09l-.2.44.15-.09v.5l.1-.06v-.5l.15-.08-.2-.21zM449.39 337.07l-1.33.77v-1.53l1.33-.77zm-1.27.66l1.21-.69v-1.39l-1.2.7v1.38" />
                  </g>
                </g>
              </g>
            </g>
            <g id="expeditedbackground__boxcollection2">
              <g
                style={{
                  isolation: "isolate",
                }}
              >
                <path
                  fill="#f2c0a7"
                  d="M463.89 305.35l.02 5.24 5.83 3.39-.01-5.24-5.84-3.39z"
                />
                <path
                  fill="#e2af98"
                  d="M466.17 306.67v1.14l.4.23.47.27-.01-1.14-.86-.5z"
                />
                <path
                  fill="#fed0b5"
                  d="M469.73 308.74l.01 5.24 6.89-3.97-.01-5.25-6.89 3.98z"
                />
                <path
                  fill="#ffdcc5"
                  d="M463.89 305.35l5.84 3.39 6.89-3.98-5.84-3.39-6.89 3.98z"
                />
                <path
                  fill="#fed0b5"
                  d="M466.17 306.67l.86.5 6.89-3.97-.87-.51-6.88 3.98z"
                />
              </g>
              <g fill="#616173">
                <path d="M474.39 309.94a.62.62 0 000 .13.35.35 0 00.18.33.18.18 0 01.08.17l-.08.05.21-.13h-.08a.51.51 0 01.09-.27 1 1 0 00.16-.64zM474 311.18l-1 .57v-1.14l1-.57zm-1 .49l.9-.52v-1l-.9.52v1" />
                <path d="M473.46 310.45a.91.91 0 00-.35.56.2.2 0 01.06-.09h.06l.06-.09h.07a.15.15 0 01.06-.09v.39c0 .07.06.1.13.07a.3.3 0 00.12-.22.18.18 0 01-.08.14h-.09v-.39a.07.07 0 010-.05h.06a.17.17 0 01.06-.08h.06a.13.13 0 01.06-.08h.07a.23.23 0 00-.36-.15s.03.07.01.08zM475.56 310.03v.06l.61-.35v-.07l-.61.36zM475.56 309.9v.06l.61-.35v-.07l-.1.06-.07.04-.27.16-.08.04-.09.06z" />
                <path d="M475.69 309.2l-.15.33.11-.06v.37l.08-.04v-.38l.11-.06-.15-.16z" />
                <path d="M476.36 309.79l-1 .58v-1.14l1-.58zm-.94.49l.89-.51v-1l-.9.51v1" />
                <path d="M476.03 309l-.15.33.12-.06v.37l.07-.04v-.37l.11-.07-.15-.16zM475.16 310.48l-1 .58v-1.14l1-.58zm-.94.5l.9-.52v-1l-.89.52v1" />
              </g>
              <g
                style={{
                  isolation: "isolate",
                }}
              >
                <path
                  fill="#f2c0a7"
                  d="M456 309.9l.01 5.24 5.84 3.39-.01-5.24-5.84-3.39z"
                />
                <path
                  fill="#e2af98"
                  d="M458.27 311.22l.01 1.14.4.24.46.26v-1.14l-.87-.5z"
                />
                <path
                  fill="#fed0b5"
                  d="M461.84 313.29l.01 5.24 6.89-3.97-.02-5.25-6.88 3.98z"
                />
                <path
                  fill="#ffdcc5"
                  d="M456 309.9l5.84 3.39 6.88-3.98-5.83-3.39-6.89 3.98z"
                />
                <path
                  fill="#fed0b5"
                  d="M458.27 311.22l.87.5 6.89-3.97-.87-.51-6.89 3.98z"
                />
              </g>
              <g fill="#616173">
                <path d="M466.5 314.49a.62.62 0 000 .13.34.34 0 00.17.33.17.17 0 01.09.17l-.08.05.21-.12a.09.09 0 000-.05h-.08a.59.59 0 01.08-.27.89.89 0 00.16-.64zM466.07 315.73l-1 .57v-1.14l1-.57zm-.94.49l.9-.52v-1l-.89.52v1" />
                <path d="M465.57 315a.9.9 0 00-.34.56.1.1 0 01.06-.08h.06a.15.15 0 01.06-.09h.06a.2.2 0 01.06-.09h.05v.39a.07.07 0 00.12.07.25.25 0 00.12-.21v-.05.05a.17.17 0 01-.09.14h-.08v-.39l.05-.05h.06s0-.07.06-.08.05 0 .06 0a.1.1 0 01.06-.08h.06a.22.22 0 00-.35-.15s-.07.06-.08.06zM467.67 314.58v.06l.6-.35v-.06l-.6.35zM467.67 314.45v.06l.6-.35v-.06l-.09.05-.08.04-.26.16-.08.04-.09.06z" />
                <path d="M467.8 313.75l-.15.33.11-.06v.37l.08-.04v-.37l.1-.07-.14-.16z" />
                <path d="M468.47 314.34l-1 .58v-1.14l1-.58zm-1 .5l.9-.52v-1l-.9.51v1" />
                <path d="M468.14 313.56l-.15.33.11-.07v.37l.08-.04v-.37l.11-.07-.15-.15zM467.27 315l-1 .57v-1.14l1-.58zm-.94.49l.89-.52v-1l-.9.52v1" />
              </g>
              <g>
                <g
                  style={{
                    isolation: "isolate",
                  }}
                >
                  <path
                    fill="#f2c0a7"
                    d="M459.64 302.22l.02 5.24 5.84 3.4-.02-5.25-5.84-3.39z"
                  />
                  <path
                    fill="#e2af98"
                    d="M461.92 303.54v1.14l.4.24.47.27-.01-1.14-.86-.51z"
                  />
                  <path
                    fill="#fed0b5"
                    d="M465.48 305.61l.02 5.25 6.88-3.98-.01-5.25-6.89 3.98z"
                  />
                  <path
                    fill="#ffdcc5"
                    d="M459.64 302.22l5.84 3.39 6.89-3.98-5.84-3.39-6.89 3.98z"
                  />
                  <path
                    fill="#fed0b5"
                    d="M461.92 303.54l.86.51 6.89-3.98-.86-.5-6.89 3.97z"
                  />
                </g>
                <g fill="#616173">
                  <path d="M470.14 306.82v.12a.34.34 0 00.18.33.19.19 0 01.08.18h-.08a.08.08 0 000 .05l.21-.12a.05.05 0 000-.05l-.08.05a.61.61 0 01.09-.28.94.94 0 00.16-.64zM469.72 308.05l-1 .57v-1.14l1-.57zm-1 .49l.9-.52v-1l-.9.52v1" />
                  <path d="M469.22 307.32a.86.86 0 00-.35.56.16.16 0 01.06-.09h.07a.1.1 0 01.06-.08h.06a.15.15 0 01.06-.09v.39c0 .08.05.11.12.07a.27.27 0 00.12-.21.22.22 0 01-.08.15c-.05 0-.09 0-.09-.05v-.44h.06l.06-.09h.07a.15.15 0 01.06-.09h.06a.22.22 0 00-.35-.15zM471.31 306.9v.07l.61-.36v-.06l-.61.35zM471.31 306.77v.07l.61-.36v-.06l-.1.05-.07.05-.27.15-.08.04-.09.06z" />
                  <path d="M471.44 306.08l-.15.33.11-.07v.37l.08-.04v-.37l.11-.06-.15-.16z" />
                  <path d="M472.11 306.67l-1 .57v-1.14l1-.57zm-.94.49l.89-.52v-1l-.9.52v1" />
                  <path d="M471.78 305.88l-.14.33.11-.07v.38l.07-.05v-.37l.11-.06-.15-.16zM470.92 307.36l-1 .57v-1.14l1-.57zm-.95.49l.9-.52v-1l-.89.52v1" />
                </g>
              </g>
            </g>
            <g id="expeditedbackground__boxcollection3">
              <g
                style={{
                  isolation: "isolate",
                }}
              >
                <path
                  fill="#f2c0a7"
                  d="M480.48 307.24l.01 5.25 5.84 3.39-.01-5.25-5.84-3.39z"
                />
                <path
                  fill="#e2af98"
                  d="M482.75 308.57l.01 1.14.4.23.46.27v-1.14l-.87-.5z"
                />
                <path
                  fill="#fed0b5"
                  d="M486.32 310.63l.01 5.25 6.89-3.98-.02-5.24-6.88 3.97z"
                />
                <path
                  fill="#ffdcc5"
                  d="M480.48 307.24l5.84 3.39 6.88-3.97-5.83-3.4-6.89 3.98z"
                />
                <path
                  fill="#fed0b5"
                  d="M482.75 308.57l.87.5 6.89-3.98-.87-.5-6.89 3.98z"
                />
              </g>
              <g fill="#616173">
                <path d="M491 311.84a.49.49 0 000 .12.36.36 0 00.17.33.18.18 0 01.09.18h-.08l.21-.12-.08.05a.51.51 0 01.09-.28 1 1 0 00.16-.63zM490.55 313.07l-1 .58v-1.15l1-.57zm-.94.49l.9-.51v-1l-.89.51v1" />
                <path d="M490.05 312.35a.84.84 0 00-.35.56.15.15 0 01.06-.09h.06a.24.24 0 01.06-.08h.06c.01 0 0-.07.07-.08v.39c0 .08.06.11.12.07a.27.27 0 00.13-.21.19.19 0 01-.09.15s-.08 0-.08-.05v-.39h.11a.15.15 0 01.06-.09h.06a.2.2 0 01.06-.09h.06a.22.22 0 00-.35-.15s-.03.05-.04.06zM492.15 311.92v.07l.61-.35v-.07l-.61.35zM492.15 311.79v.07l.61-.35v-.07l-.1.06-.08.04-.26.15-.08.05-.09.05z" />
                <path d="M492.28 311.1l-.15.33.11-.06v.37l.08-.05v-.37l.11-.06-.15-.16z" />
                <path d="M493 311.69l-1 .57v-1.14l1-.57zm-.95.49l.9-.52v-1l-.9.52v1" />
                <path d="M492.62 310.9l-.15.33.11-.06v.37l.08-.04v-.38l.11-.06-.15-.16zM491.75 312.38l-1 .57v-1.14l1-.57zm-.94.49l.89-.52v-1l-.9.52v1" />
              </g>
              <g
                style={{
                  isolation: "isolate",
                }}
              >
                <path
                  fill="#f2c0a7"
                  d="M472.59 311.79l.01 5.25 5.84 3.39-.02-5.24-5.83-3.4z"
                />
                <path
                  fill="#e2af98"
                  d="M474.86 313.12v1.14l.41.23.46.27v-1.14l-.87-.5z"
                />
                <path
                  fill="#fed0b5"
                  d="M478.42 315.19l.02 5.24 6.89-3.98-.02-5.24-6.89 3.98z"
                />
                <path
                  fill="#ffdcc5"
                  d="M472.59 311.79l5.83 3.4 6.89-3.98-5.84-3.39-6.88 3.97z"
                />
                <path
                  fill="#fed0b5"
                  d="M474.86 313.12l.87.5 6.88-3.98-.86-.5-6.89 3.98z"
                />
              </g>
              <g fill="#616173">
                <path d="M483.09 316.39a.6.6 0 000 .12.34.34 0 00.18.33.22.22 0 01.09.18l-.09.05.22-.13-.08.05a.6.6 0 01.08-.28.87.87 0 00.16-.63zM482.66 317.62l-1 .58v-1.14l1-.58zm-.94.49l.89-.51v-1l-.9.51v1" />
                <path d="M482.16 316.9a.87.87 0 00-.34.56.15.15 0 01.06-.09h.06a.16.16 0 01.06-.08h.06a.17.17 0 01.06-.08v.39c0 .08.05.11.12.07a.26.26 0 00.12-.21.19.19 0 01-.09.15s-.08 0-.08-.05v-.39h.07a.1.1 0 01.06-.08h.06a.15.15 0 01.06-.09h.06a.22.22 0 00-.35-.15s.02.04.01.05zM484.25 316.47v.07l.61-.35v-.07l-.61.35zM484.25 316.34v.07l.61-.35v-.07l-.09.06-.08.04-.26.15-.08.05-.1.05z" />
                <path d="M484.38 315.65l-.14.33.11-.06v.37l.08-.05v-.37l.1-.06-.15-.16z" />
                <path d="M485.06 316.24l-1 .57v-1.14l1-.57zm-.95.49l.9-.52v-1l-.89.52v1" />
                <path d="M484.73 315.45l-.15.33.11-.06v.37l.08-.04v-.38l.11-.06-.15-.16zM483.86 316.93l-1 .58v-1.15l1-.57zm-.95.49l.9-.52v-1l-.9.52v1" />
              </g>
              <g>
                <g
                  style={{
                    isolation: "isolate",
                  }}
                >
                  <path
                    fill="#f2c0a7"
                    d="M476.23 304.12l.02 5.24 5.83 3.39-.01-5.24-5.84-3.39z"
                  />
                  <path
                    fill="#e2af98"
                    d="M478.51 305.44v1.14l.4.23.46.27v-1.14l-.86-.5z"
                  />
                  <path
                    fill="#fed0b5"
                    d="M482.07 307.51l.01 5.24 6.89-3.97-.01-5.25-6.89 3.98z"
                  />
                  <path
                    fill="#ffdcc5"
                    d="M476.23 304.12l5.84 3.39 6.89-3.98-5.84-3.39-6.89 3.98z"
                  />
                  <path
                    fill="#fed0b5"
                    d="M478.51 305.44l.86.5 6.89-3.97-.87-.51-6.88 3.98z"
                  />
                </g>
                <g fill="#616173">
                  <path d="M486.73 308.71a.62.62 0 000 .13.37.37 0 00.17.33.17.17 0 01.09.17l-.08.05.21-.13h-.08a.51.51 0 01.09-.27 1 1 0 00.16-.64zM486.31 310l-1 .57v-1.14l1-.57zm-.95.49l.9-.52v-1l-.9.52v1" />
                  <path d="M485.8 309.22a.91.91 0 00-.35.56.2.2 0 01.06-.09h.06a.35.35 0 01.06-.09h.07a.15.15 0 01.06-.09v.49c0 .07.06.1.13.07a.3.3 0 00.12-.22v.05a.18.18 0 01-.08.14h-.09v-.39a.07.07 0 010-.05h.06a.17.17 0 01.06-.08h.06a.13.13 0 01.06-.08h.07a.23.23 0 00-.36-.15s.03-.08.01-.07zM487.9 308.8v.06l.61-.35v-.07l-.61.36zM487.9 308.67v.06l.61-.35v-.07l-.1.06-.08.04-.26.16-.08.04-.09.06z" />
                  <path d="M488.03 307.97l-.15.33.11-.06v.37l.08-.04v-.38l.11-.06-.15-.16z" />
                  <path d="M488.7 308.56l-1 .58V308l1-.58zm-.94.49l.89-.51v-1l-.9.51v1" />
                  <path d="M488.37 307.77l-.15.34.11-.07v.37l.08-.04V308l.11-.07-.15-.16zM487.5 309.25l-1 .58v-1.14l1-.58zm-.94.5l.89-.52v-1l-.89.52v1" />
                </g>
              </g>
            </g>
            <g>
              <g id="expeditedbackground__bigbox4">
                <path
                  opacity={0.2}
                  d="M494.68 324.35l13.3 7.79 13.99-8.23-13.33-7.75-13.96 8.19z"
                />
                <path
                  fill="url(#expeditedbackground__New_Gradient_Swatch_copy_8)"
                  d="M507.69 318.45v12.96l12.5-7.24v-13.06l-12.5 7.34z"
                />
                <path
                  fill="url(#expeditedbackground__New_Gradient_Swatch_copy_8-2)"
                  d="M507.71 318.45v12.96l-11.86-6.85v-13.07l11.86 6.96z"
                />
                <path
                  fill="url(#expeditedbackground__linear-gradient-31)"
                  d="M503.98 323.02v5.27l-7.69-4.35v-5.37l7.69 4.45z"
                />
                <path
                  fill="url(#expeditedbackground__New_Gradient_Swatch_copy_8-3)"
                  d="M495.85 311.49l11.86 6.96 12.48-7.34-11.89-6.92-12.45 7.3z"
                />
                <path
                  fill="url(#expeditedbackground__linear-gradient-32)"
                  d="M513 315.39v3.48l2.82-1.62v-3.58l-2.82 1.72z"
                />
                <path
                  fill="url(#expeditedbackground__linear-gradient-33)"
                  d="M501.15 308.43l11.86 6.96 2.81-1.72-11.89-6.92-2.78 1.68z"
                />
                <path
                  fill="url(#expeditedbackground__linear-gradient-34)"
                  d="M510.07 323.15l-.99 3.07.64-.37v3.65l.7-.4v-3.65l.64-.37-.99-1.93z"
                />
                <path
                  fill="url(#expeditedbackground__linear-gradient-35)"
                  d="M513.47 323.69l-.99-1.93-.99 3.07.64-.37v3.66l.7-.41v-3.65l.64-.37z"
                />
                <g
                  style={{
                    mixBlendMode: "multiply",
                  }}
                  fill="#45108a"
                >
                  <path d="M497.12 323.89l-.38-.22v-4.06l.38.22v4.06zM497.76 323.57l-.39-.22v-3.37l.39.22v3.37zM498.74 324.14l-.39-.22v-3.38l.39.22v3.38zM498.14 323.8l-.17-.1v-3.38l.17.1v3.38zM499.29 324.46l-.39-.22v-3.38l.39.22v3.38zM499.57 324.62l-.13-.07v-3.38l.13.08v3.37zM501.76 325.88l-.13-.07v-3.37l.13.07v3.37zM500.73 325.29l-.3-.17v-3.38l.3.18v3.37zM500.19 324.98l-.38-.22v-3.38l.38.23v3.37zM501.45 325.71l-.46-.27v-3.38l.46.27v3.38zM502.26 326.18l-.3-.18v-3.37l.3.17v3.38zM502.9 326.55l-.38-.23v-3.37l.38.22v3.38zM503.45 327.55l-.3-.17v-4.07l.3.18v4.06z" />
                </g>
              </g>
              <path
                fill="url(#expeditedbackground__New_Gradient_Swatch_copy_8-4)"
                d="M508.3 306.32v8.05l-7.76-4.49v-8.11l7.76 4.55z"
              />
              <path
                fill="url(#expeditedbackground__New_Gradient_Swatch_copy_8-5)"
                d="M508.29 306.32v8.05l7.37-4.25v-8.11l-7.37 4.31z"
              />
              <path
                fill="url(#expeditedbackground__New_Gradient_Swatch_copy_8-6)"
                d="M515.66 302.01l-7.37 4.31-7.75-4.55 7.38-4.3 7.74 4.54z"
              />
              <path
                fill="url(#expeditedbackground__linear-gradient-36)"
                d="M505.01 304.43v2.15l-1.75-1v-2.22l1.75 1.07z"
              />
              <path
                fill="url(#expeditedbackground__linear-gradient-37)"
                d="M512.37 300.11l-7.37 4.32-1.74-1.07 7.38-4.3 1.73 1.05z"
              />
              <path
                fill="url(#expeditedbackground__linear-gradient-38)"
                d="M506.83 309.25l.61 1.9-.4-.23v2.27l-.43-.25v-2.27l-.4-.23.62-1.19z"
              />
              <path
                fill="url(#expeditedbackground__linear-gradient-39)"
                d="M504.72 309.58l.61-1.2.62 1.91-.4-.23v2.27l-.43-.25v-2.27l-.4-.23z"
              />
              <g id="expeditedbackground__van2">
                <path
                  d="M583.05 333.4l.17 2.55a.5.5 0 00.77.4l1.62-1a.5.5 0 00.23-.5l-.32-2.54a.51.51 0 00-.79-.36l-1.46 1a.52.52 0 00-.22.45z"
                  fill="url(#expeditedbackground__New_Gradient_Swatch_copy_33)"
                />
                <path
                  d="M583.49 336.31l-.16-2.56a.5.5 0 01.22-.45l1.45-1a.52.52 0 01.51 0 .51.51 0 00-.78-.32l-1.46 1a.52.52 0 00-.22.46l.17 2.55a.48.48 0 00.29.42s-.01-.08-.02-.1z"
                  style={{
                    mixBlendMode: "color-dodge",
                  }}
                  fill="url(#expeditedbackground__Radial_Gradient_1)"
                />
                <path
                  d="M513.32 332.64l47 27.18a20 20 0 0020-.05l8.46-4.88a1.29 1.29 0 000-2.23l-56.13-32.76a1.31 1.31 0 00-1.3 0l-18 10.51a1.29 1.29 0 00-.03 2.23z"
                  opacity={0.2}
                />
                <path
                  fill="red"
                  d="M558.25 353.3l6.64-3.86-6.95-1.26.31 5.12zM520.72 332.13l6.64-3.86-6.95-1.26.31 5.12z"
                />
                <path
                  d="M531.32 335.15a2.82 2.82 0 01-1.13 2.55L528 339c-.73.4-.26-.51-1.36-1.15a8.81 8.81 0 01-4-6.9c0-1.26-1.15-1.27-.44-1.68l2.35-1.31a2.84 2.84 0 012.79.31 8.84 8.84 0 013.98 6.88z"
                  fill="url(#expeditedbackground__New_Gradient_Swatch_copy_11)"
                />
                <ellipse
                  cx={525}
                  cy={334.16}
                  rx={3.26}
                  ry={5.64}
                  transform="rotate(-30.31 525.012 334.164)"
                  fill="url(#expeditedbackground__New_Gradient_Swatch_copy_38)"
                />
                <path
                  d="M525.19 329.47a2.92 2.92 0 00-2.74-.34 3.17 3.17 0 012.39.48 8.8 8.8 0 014 6.9 2.72 2.72 0 01-1.26 2.62c1-.28 1.61-1.25 1.61-2.76a8.83 8.83 0 00-4-6.9z"
                  style={{
                    mixBlendMode: "screen",
                  }}
                  fill="url(#expeditedbackground__Radial_Gradient_1-2)"
                />
                <path
                  d="M525.13 330.69c-1.7-1-3.08-.2-3.08 1.76a6.78 6.78 0 003.08 5.31c1.7 1 3.08.2 3.08-1.76a6.78 6.78 0 00-3.08-5.31zm1.18 3.89l1-.08c.15 0 .33.18.37.39a4 4 0 01.09.83 2.65 2.65 0 01-.09.73c0 .16-.22.14-.37 0l-1-1.18a.49.49 0 01-.13-.34v-.12c-.01-.15.04-.22.13-.23zm.61-1l-1 .08a.34.34 0 01-.26-.16l-.09-.11a.59.59 0 01-.14-.34v-1.26c0-.19.16-.24.32-.1a5.82 5.82 0 011.18 1.46c.16.24.13.45-.01.47zm-2.14-2.19v1.26c0 .11 0 .19-.13.19h-.09a.33.33 0 01-.26-.15l-1-1.19c-.14-.18-.17-.42-.05-.49a1.53 1.53 0 011.17-.1.55.55 0 01.36.52zM523 332l1 1.18a.56.56 0 01.13.34v.12a.16.16 0 01-.13.19l-1 .08c-.15 0-.33-.18-.38-.39a4 4 0 01-.09-.83 2.7 2.7 0 01.09-.73c.05-.12.23-.1.38.04zm.34 2.8l1-.09a.38.38 0 01.26.16l.09.11a.58.58 0 01.13.34v1.26c0 .19-.16.24-.32.1a6 6 0 01-1.17-1.46c-.16-.16-.13-.37.01-.38zm2.13 2.18v-1.26c0-.11.06-.19.14-.19h.09a.33.33 0 01.26.15l1 1.19c.14.18.17.42.05.49a1.56 1.56 0 01-1.18.1.55.55 0 01-.36-.46z"
                  style={{
                    mixBlendMode: "multiply",
                  }}
                  fill="url(#expeditedbackground__linear-gradient-40)"
                />
                <path
                  d="M524.94 330.77c-1.71-1-3.09-.2-3.09 1.75a6.77 6.77 0 003.09 5.32c1.7 1 3.08.19 3.08-1.76a6.78 6.78 0 00-3.08-5.31zm1.17 3.89l1-.08c.14 0 .33.18.37.39a4 4 0 01.09.83 2.7 2.7 0 01-.09.73c0 .16-.23.14-.37 0l-1-1.19a.58.58 0 01-.11-.34v-.06c0-.06 0-.27.11-.28zm.61-1l-1 .08a.34.34 0 01-.27-.15.76.76 0 00-.08-.11.53.53 0 01-.14-.34v-1.24c0-.19.16-.24.32-.09a5.86 5.86 0 011.18 1.46c.17.2.14.41-.01.42zm-2.13-2.18v1.26c0 .11-.05.18-.14.19h-.08c-.08 0-.18 0-.26-.15l-1-1.18c-.14-.18-.17-.42-.06-.49a1.52 1.52 0 011.18-.1.53.53 0 01.36.5zm-1.79.6l1 1.19a.58.58 0 01.13.34v.11c0 .12 0 .19-.13.19l-1 .09c-.14 0-.33-.18-.37-.39a4.07 4.07 0 01-.09-.84 2.75 2.75 0 01.09-.73c.04-.13.23-.1.37.07zm.35 2.8l1-.08a.32.32 0 01.26.16l.08.1a.56.56 0 01.14.35v1.26c0 .19-.16.24-.32.1a6 6 0 01-1.18-1.46c-.13-.18-.13-.39.02-.4zm2.13 2.19v-1.26c0-.12.05-.19.14-.19h.08a.34.34 0 01.27.15l1 1.19c.15.17.18.42.06.48a1.51 1.51 0 01-1.18.11.55.55 0 01-.37-.45z"
                  fill="url(#expeditedbackground__linear-gradient-41)"
                />
                <path
                  d="M569.28 356.92a2.79 2.79 0 01-1.12 2.54l-2.16 1.29c-.73.4-.27-.51-1.36-1.15a8.84 8.84 0 01-4-6.9c0-1.26-1.16-1.27-.45-1.69l2.36-1.3a2.84 2.84 0 012.79.31 8.83 8.83 0 013.94 6.9z"
                  fill="url(#expeditedbackground__New_Gradient_Swatch_copy_11-2)"
                />
                <path
                  d="M567 358.24c0 2.54-1.79 3.56-4 2.28a8.83 8.83 0 01-4-6.9c0-2.54 1.79-3.56 4-2.28a8.78 8.78 0 014 6.9z"
                  fill="url(#expeditedbackground__New_Gradient_Swatch_copy_38-2)"
                />
                <path
                  d="M563.16 351.24a2.92 2.92 0 00-2.74-.34 3.21 3.21 0 012.39.47 8.83 8.83 0 014 6.91 2.72 2.72 0 01-1.26 2.62c1-.28 1.61-1.25 1.61-2.76a8.83 8.83 0 00-4-6.9z"
                  style={{
                    mixBlendMode: "screen",
                  }}
                  fill="url(#expeditedbackground__Radial_Gradient_1-3)"
                />
                <path
                  d="M563.1 352.46c-1.7-1-3.08-.2-3.08 1.75a6.79 6.79 0 003.08 5.32c1.7 1 3.08.2 3.08-1.76a6.78 6.78 0 00-3.08-5.31zm1.17 3.89l1-.08c.14 0 .33.18.37.39a4 4 0 01.09.83 2.7 2.7 0 01-.09.73c0 .16-.23.14-.37 0l-1-1.18a.54.54 0 01-.12-.34v-.12c-.01-.15.04-.22.12-.23zm.61-1l-1 .09a.39.39 0 01-.27-.16.76.76 0 00-.08-.11.53.53 0 01-.14-.34v-1.23c0-.2.16-.24.32-.1a5.82 5.82 0 011.18 1.46c.17.2.11.41-.01.42zm-2.13-2.18v1.26c0 .11 0 .19-.13.19h-.09a.29.29 0 01-.26-.14l-1-1.19c-.14-.18-.17-.42 0-.49a1.53 1.53 0 011.17-.1.54.54 0 01.31.5zm-1.79.61l1 1.18a.6.6 0 01.13.34v.12c0 .11 0 .18-.13.19l-1 .08c-.14 0-.32-.18-.37-.39a4 4 0 01-.09-.83 2.78 2.78 0 01.09-.74c.05-.12.23-.1.41.08zm.35 2.79l1-.08a.34.34 0 01.26.16l.09.1a.61.61 0 01.13.35v1.26c0 .19-.16.24-.32.1a6 6 0 01-1.17-1.46c-.16-.17-.13-.38.01-.4zm2.13 2.19v-1.26c0-.11 0-.19.14-.19h.08a.34.34 0 01.27.15l1 1.19c.15.18.18.42.06.49a1.56 1.56 0 01-1.18.1.55.55 0 01-.37-.45z"
                  style={{
                    mixBlendMode: "multiply",
                  }}
                  fill="url(#expeditedbackground__linear-gradient-42)"
                />
                <path
                  d="M562.91 352.53c-1.71-1-3.09-.19-3.09 1.76a6.79 6.79 0 003.09 5.32c1.7 1 3.08.19 3.08-1.76a6.82 6.82 0 00-3.08-5.32zm1.17 3.9l1-.08c.14 0 .33.18.37.38a4.14 4.14 0 01.09.84 2.7 2.7 0 01-.09.73c0 .16-.23.14-.37 0l-1-1.19a.58.58 0 01-.13-.34v-.11c.05-.15.05-.22.13-.23zm.61-1l-1 .08a.33.33 0 01-.27-.15.44.44 0 00-.08-.11.53.53 0 01-.14-.34v-1.27c0-.19.16-.24.32-.09a5.69 5.69 0 011.18 1.46c.17.23.14.44-.01.45zm-2.13-2.19v1.27c0 .11 0 .18-.14.18h-.08a.36.36 0 01-.27-.15l-1-1.18c-.14-.18-.17-.42-.06-.49a1.47 1.47 0 011.18-.1.52.52 0 01.37.5zm-1.79.61l1 1.19a.58.58 0 01.13.34v.11c0 .12-.05.19-.13.19l-1 .09c-.14 0-.33-.18-.37-.39a4.14 4.14 0 01-.09-.84 2.75 2.75 0 01.09-.73c.04-.13.23-.1.37.07zm.35 2.8l1-.08a.32.32 0 01.27.16l.08.1a.54.54 0 01.14.35v1.26c0 .19-.16.24-.32.1a5.91 5.91 0 01-1.18-1.47c-.11-.17-.11-.38.01-.39zm2.13 2.19v-1.24c0-.11 0-.18.14-.18h.08a.36.36 0 01.27.15l1 1.18c.15.18.18.42.06.49a1.47 1.47 0 01-1.18.1.52.52 0 01-.37-.47z"
                  fill="url(#expeditedbackground__linear-gradient-43)"
                />
                <path
                  d="M588.94 344.09l-15.42-23.86a2.79 2.79 0 00-.88-.83l-41.14-23.68a2.61 2.61 0 00-2.54 0l-11.6 6.28a2.63 2.63 0 00-1.17 1.33l-3.54 7.54a2.77 2.77 0 00-.18.9l-.27 13.91a2.62 2.62 0 001.32 2.31l7.26 4.11a6.78 6.78 0 01-.11-1.16c0-2.87 2-4 4.53-2.59a10 10 0 014.53 7.82 4.72 4.72 0 01-.09 1l28.61 16.14a5.78 5.78 0 010-.58c0-2.87 2-4 4.53-2.58a10 10 0 014.53 7.81v.46l1.7 1a2.59 2.59 0 002.42.07l16.54-8.17a2.6 2.6 0 001.44-2.33v-3.49a2.53 2.53 0 00-.47-1.41z"
                  fill="url(#expeditedbackground__New_Gradient_Swatch_copy_33-2)"
                />
                <path
                  d="M570.75 352.26l-2.26-6.91-9.33-17.69a4 4 0 00-1.62-1.73l-40.45-23.27c-.14.17.08.29 0 .49l40 23.05a4 4 0 011.62 1.72l9.33 17.69 2.26 6.92a4.32 4.32 0 01.46 1.93v5.09c.24 0 .16.1.4.05v-5.41a4.31 4.31 0 00-.41-1.93z"
                  style={{
                    mixBlendMode: "color-dodge",
                  }}
                  fill="url(#expeditedbackground__Radial_Gradient_1-4)"
                />
                <path
                  d="M564.84 334.39l3.95-1.43a27.91 27.91 0 007.19-3.87l1-.78a1 1 0 011.43.25l5.43 8.18a1 1 0 01-.27 1.39l-2.73 1.87a31.18 31.18 0 01-6.89 3.48l-4.34 1.52a1 1 0 01-1.24-.52l-4.09-8.73a1 1 0 01.56-1.36z"
                  fill="#4d4d4d"
                />
                <path
                  d="M565.4 334.6l3.76-1.36a26.67 26.67 0 006.85-3.69l1-.74a.94.94 0 011.36.24l5.18 7.79a1 1 0 01-.27 1.32l-2.63 1.77a30 30 0 01-6.57 3.31l-4.08 1.48a1 1 0 01-1.19-.49l-3.89-8.33a1 1 0 01.48-1.3z"
                  fill="url(#expeditedbackground__New_Gradient_Swatch_copy_37)"
                />
                <path
                  d="M556.18 332.14l.22 7.67a.6.6 0 00.28.47l9.22 5.28v-1.3l-4.7-10.34-4.2-2.29a.56.56 0 00-.82.51z"
                  fill="#4d4d4d"
                />
                <path
                  fill="url(#expeditedbackground__New_Gradient_Swatch_copy_37-2)"
                  d="M556.66 331.93l.24 7.78 6.7 3.88-.18-3.85-2.37-5.41-4.39-2.4z"
                />
                <path
                  d="M566.84 355.2l3.38 1.81a4.86 4.86 0 003.92.13l2.57-1a66.84 66.84 0 0011.18-6.34l1.62-1.3h.52L590 352l-.52.51a47.63 47.63 0 01-15.31 8.13 4.85 4.85 0 01-3.8-.38l-3.26-1.91z"
                  fill="#f2f2f2"
                />
                <path
                  d="M570 353.6a3 3 0 002.9.16 1.43 1.43 0 012 .89l.46 1.54-2.36.93a3.07 3.07 0 01-2.43-.08l-.66-.32z"
                  fill="url(#expeditedbackground__linear-gradient-44)"
                />
                <path
                  d="M570 353.6a3 3 0 002.9.16 1.43 1.43 0 012 .89l.46 1.54-2.73-.13c-2.72-.56-2.63-2.46-2.63-2.46z"
                  style={{
                    mixBlendMode: "multiply",
                  }}
                  fill="url(#expeditedbackground__linear-gradient-45)"
                />
                <path
                  d="M587.78 347.45l-.21 2.23s1.92-1.18 2-1.64a27.37 27.37 0 00-.07-3.28l-.56.67a2.75 2.75 0 00-1.16 2.02z"
                  fill="url(#expeditedbackground__linear-gradient-46)"
                />
                <path
                  d="M587.78 347.45l-.21 2.23a22.83 22.83 0 001.34-2.53l.62-2.39-.56.67a2.75 2.75 0 00-1.19 2.02z"
                  style={{
                    mixBlendMode: "multiply",
                  }}
                  fill="url(#expeditedbackground__linear-gradient-47)"
                />
                <path
                  d="M583.88 336.74l-.54-.82a1.13 1.13 0 01-.48.78l-3.12 2.09a35.57 35.57 0 01-7.74 3.9l-3.83 1.38.2.42a1 1 0 001.25.52l4.33-1.55a31.18 31.18 0 006.89-3.48l2.77-1.85a1 1 0 00.27-1.39z"
                  fill="#4d4d4d"
                />
                <path
                  d="M582.51 335.28l-4.14-6.23a.94.94 0 00-1.36-.24l-1 .74a26.67 26.67 0 01-6.85 3.69l-3.76 1.36a1 1 0 00-.58 1.18 31.47 31.47 0 008 1 29.59 29.59 0 009.69-1.5z"
                  style={{
                    mixBlendMode: "color-dodge",
                  }}
                  fill="url(#expeditedbackground__linear-gradient-48)"
                />
                <path
                  style={{
                    mixBlendMode: "color-dodge",
                  }}
                  opacity={0.7}
                  fill="url(#expeditedbackground__linear-gradient-49)"
                  d="M559.55 326.2l12-6.83-41.1-23.48-12 6.72 41.1 23.59z"
                />
                <path
                  d="M564.8 344.78c.65.39-3.28 2.13-4.82 2.45s-.24.71-.28.45c-.22-1.2 2.95-4.22 5.1-2.9z"
                  style={{
                    mixBlendMode: "multiply",
                  }}
                  fill="url(#expeditedbackground__linear-gradient-50)"
                />
                <path
                  d="M560.19 342.65l.26 3.05a.69.69 0 00.95.57l3.31-1a.68.68 0 00.4-.73L564 341.7a.68.68 0 00-.88-.56l-2.48.81a.69.69 0 00-.45.7z"
                  fill="url(#expeditedbackground__New_Gradient_Swatch_copy_33-3)"
                />
                <path
                  d="M561.09 346.07l-.26-3.05a.68.68 0 01.47-.7l2.48-.81h.17a.7.7 0 00-.81-.34l-2.48.81a.69.69 0 00-.47.7l.26 3.05a.68.68 0 00.72.62.73.73 0 01-.08-.28z"
                  style={{
                    mixBlendMode: "color-dodge",
                  }}
                  fill="url(#expeditedbackground__Radial_Gradient_1-5)"
                />
                <path
                  d="M559.77 349.7l-31.41-18a9.26 9.26 0 011.37 4.52 4.72 4.72 0 01-.09 1l28.61 16.14a5.78 5.78 0 010-.58 3 3 0 011.52-3.08z"
                  style={{
                    mixBlendMode: "multiply",
                  }}
                  fill="url(#expeditedbackground__linear-gradient-51)"
                />
                <path
                  d="M520.67 331a3.12 3.12 0 011.36-2.93l-9.76-5.62-.07 3.29a2.62 2.62 0 001.32 2.31l7.26 4.11a6.78 6.78 0 01-.11-1.16z"
                  style={{
                    mixBlendMode: "multiply",
                  }}
                  fill="url(#expeditedbackground__linear-gradient-52)"
                />
                <path
                  d="M566.87 355.53l3.43 1.82a4.89 4.89 0 003.93.14l2.56-1a47.8 47.8 0 0011.21-6.38l2.06-1.67v3.1a1.57 1.57 0 01-.58 1.22l-.28.22a72.19 72.19 0 01-15 7.95 4.91 4.91 0 01-3.81-.37l-3.32-2z"
                  fill="url(#expeditedbackground__New_Gradient_Swatch_copy_33-4)"
                />
                <path
                  d="M574.43 354.72l-.82 1.73s-2.48-1.54-2.24-2.07 3.06.34 3.06.34z"
                  fill="url(#expeditedbackground__linear-gradient-53)"
                />
                <path
                  d="M573.35 356c0 .43.3.61.68.39a1.52 1.52 0 00.69-1.18c0-.44-.31-.62-.69-.4a1.51 1.51 0 00-.68 1.19z"
                  fill="url(#expeditedbackground__linear-gradient-54)"
                />
                <path
                  d="M572.74 355.07l-.65 1.37s-2-1.22-1.78-1.64 2.43.27 2.43.27z"
                  fill="url(#expeditedbackground__linear-gradient-55)"
                />
                <path
                  d="M571.88 356c0 .35.24.49.54.31a1.17 1.17 0 00.55-.94c0-.35-.24-.48-.55-.31a1.2 1.2 0 00-.54.94z"
                  fill="url(#expeditedbackground__linear-gradient-56)"
                />
                <path
                  d="M589.15 347.16l-.56 1.18s-1-.72-.78-1.09 1.34-.09 1.34-.09z"
                  fill="url(#expeditedbackground__linear-gradient-57)"
                />
                <path
                  d="M588.41 348c0 .29.21.41.47.26a1 1 0 00.47-.8c0-.3-.21-.42-.47-.27a1 1 0 00-.47.81z"
                  fill="url(#expeditedbackground__linear-gradient-58)"
                />
                <path
                  d="M589.38 346.19l-.41.86s-.69-.53-.57-.79.98-.07.98-.07z"
                  fill="url(#expeditedbackground__linear-gradient-59)"
                />
                <path
                  d="M588.84 346.8c0 .22.15.3.34.19a.75.75 0 00.34-.59c0-.21-.15-.3-.34-.19a.75.75 0 00-.34.59z"
                  fill="url(#expeditedbackground__linear-gradient-60)"
                />
                <path
                  d="M571.56 354.05a3 3 0 01-1.59-.45l-.11 3.12.66.32a3.19 3.19 0 001.35.29z"
                  fill="url(#expeditedbackground__New_Gradient_Swatch_copy_39)"
                />
                <path
                  d="M575.63 353.21l.33.88a1.28 1.28 0 001.77.7c1.22-.6 3.12-1.57 4.7-2.51 1.76-1 3.2-2 3.94-2.48a1.25 1.25 0 00.57-1l.09-1.63a.36.36 0 00-.56-.32c-1 .69-3.2 2.11-5.05 3.16-2.06 1.17-4.7 2.34-5.6 2.73a.37.37 0 00-.19.47z"
                  fill="url(#expeditedbackground__linear-gradient-61)"
                />
                <path
                  d="M586.71 346.8a.58.58 0 010 .19l-.1 1.63a1.27 1.27 0 01-.56 1c-.74.49-2.19 1.44-4 2.48-1.58.94-3.47 1.91-4.7 2.51a1.28 1.28 0 01-1.13 0 1.29 1.29 0 001.42.18c1.22-.6 3.12-1.57 4.7-2.51 1.76-1 3.2-2 3.94-2.48a1.25 1.25 0 00.57-1l.09-1.63a.35.35 0 00-.23-.37z"
                  style={{
                    mixBlendMode: "color-dodge",
                  }}
                  fill="url(#expeditedbackground__Radial_Gradient_1-6)"
                />
                <path
                  d="M584.84 338.68s3.14 4.59 2.91 5.59-5.12 4.06-7.73 5.25-7.34 3.34-8.45 2.58-2.07-6.31-2.07-6.31a62.12 62.12 0 009-3.25 23 23 0 006.34-3.86z"
                  style={{
                    mixBlendMode: "color-dodge",
                  }}
                  fill="url(#expeditedbackground__linear-gradient-62)"
                />
                <path
                  d="M583.5 339.81a.35.35 0 00-.54 0l-.08.07-2 1.32a22.82 22.82 0 01-4.93 2.49l-2.15.77a.27.27 0 00-.15.37.63.63 0 00.79.33l2.76-1a19.51 19.51 0 004.37-2.21l1.77-1.18a.64.64 0 00.16-.96z"
                  fill="#f2f2f2"
                />
                <path
                  style={{
                    mixBlendMode: "screen",
                  }}
                  fill="url(#expeditedbackground__linear-gradient-63)"
                  d="M512.5 316.26l52.7 29.73 1.6 4-54.33-30.52.03-3.21z"
                />
                <path
                  d="M511.94 322.73l1.86 1v4.68a3.26 3.26 0 01-1.93-3.05z"
                  fill="url(#expeditedbackground__linear-gradient-64)"
                />
                <path
                  style={{
                    mixBlendMode: "multiply",
                  }}
                  fill="#eab7b7"
                  d="M557.9 350.03L529.97 334l.17-.29 27.93 16.02-.17.3z"
                />
                <path
                  style={{
                    mixBlendMode: "color-dodge",
                  }}
                  fill="url(#expeditedbackground__Radial_Gradient_1-7)"
                  d="M560.42 331.49l-45-25.89-.17.3 29.42 16.92v19.1h.34v-18.9l10.11 5.81V348h.34v-18.97l4.79 2.76.17-.3z"
                />
                <g>
                  <path
                    d="M558.56 343.55c0 .57-.41.8-.91.51a2 2 0 01-.91-1.56c0-.58.41-.81.91-.52a2 2 0 01.91 1.57z"
                    style={{
                      mixBlendMode: "multiply",
                    }}
                    fill="url(#expeditedbackground__linear-gradient-65)"
                  />
                  <path
                    d="M558.54 343.51c.2.4-.16.46-.8.14a3.88 3.88 0 01-1.52-1.31c-.2-.4.16-.47.8-.14a3.81 3.81 0 011.52 1.31z"
                    fill="url(#expeditedbackground__New_Gradient_Swatch_copy_33-5)"
                  />
                </g>
                <g>
                  <path
                    d="M554.08 341.13c0 .58-.41.81-.91.52a2 2 0 01-.91-1.57c0-.57.41-.8.91-.51a2 2 0 01.91 1.56z"
                    style={{
                      mixBlendMode: "multiply",
                    }}
                    fill="url(#expeditedbackground__linear-gradient-66)"
                  />
                  <path
                    d="M554.07 341.09c.19.4-.17.47-.81.15a4 4 0 01-1.52-1.31c-.2-.41.16-.47.8-.15a3.85 3.85 0 011.53 1.31z"
                    fill="url(#expeditedbackground__New_Gradient_Swatch_copy_33-6)"
                  />
                </g>
                <path
                  d="M553.72 338.56a.87.87 0 01-.39-.1l-6.45-3.46a1.78 1.78 0 01-1-1.58v-6.54a.82.82 0 01.82-.82.87.87 0 01.41.11l6.48 3.78a1.8 1.8 0 01.9 1.56v6.24a.83.83 0 01-.25.59.86.86 0 01-.52.22zm-7-12.17a.48.48 0 00-.48.48v6.54a1.46 1.46 0 00.77 1.28l6.45 3.47a.5.5 0 00.56-.08.48.48 0 00.14-.34v-6.24a1.45 1.45 0 00-.72-1.26l-6.44-3.78a.44.44 0 00-.25-.07z"
                  style={{
                    mixBlendMode: "multiply",
                  }}
                  fill="#eab7b7"
                />
                <path
                  d="M553.8 338.83a.87.87 0 01-.39-.1l-6.41-3.47a1.8 1.8 0 01-1-1.59v-6.53a.83.83 0 01.82-.83.79.79 0 01.42.12l6.48 3.78a1.81 1.81 0 01.89 1.56V338a.78.78 0 01-.24.58.86.86 0 01-.57.25zm-7-12.17a.48.48 0 00-.47.48v6.53a1.46 1.46 0 00.77 1.29l6.45 3.46a.48.48 0 00.56-.07.48.48 0 00.14-.34v-6.24a1.47 1.47 0 00-.72-1.26l-6.49-3.79a.48.48 0 00-.22-.06z"
                  style={{
                    mixBlendMode: "color-dodge",
                  }}
                  fill="url(#expeditedbackground__White_Black_Radial)"
                />
              </g>
            </g>
            <g id="expeditedbackground__van1">
              <path
                d="M1029.54 557l.16 2.55a.51.51 0 00.78.4l1.61-1a.51.51 0 00.24-.5l-.33-2.54a.5.5 0 00-.78-.36l-1.46 1a.52.52 0 00-.22.45z"
                fill="url(#expeditedbackground__New_Gradient_Swatch_copy_33-7)"
              />
              <path
                d="M1030 559.93l-.16-2.56a.5.5 0 01.22-.45l1.45-1a.5.5 0 01.5 0 .5.5 0 00-.77-.32l-1.46 1a.52.52 0 00-.22.46l.16 2.55a.53.53 0 00.3.43.25.25 0 01-.02-.11z"
                style={{
                  mixBlendMode: "color-dodge",
                }}
                fill="url(#expeditedbackground__Radial_Gradient_1-8)"
              />
              <path
                d="M959.81 556.26l47.05 27.18a20 20 0 0019.95-.05l8.46-4.88a1.29 1.29 0 000-2.23l-56.14-32.76a1.29 1.29 0 00-1.29 0L959.8 554a1.29 1.29 0 00.01 2.26z"
                opacity={0.2}
              />
              <path
                fill="red"
                d="M1004.74 576.92l6.64-3.86-6.95-1.26.31 5.12zM967.21 555.75l6.64-3.86-6.95-1.26.31 5.12z"
              />
              <path
                d="M977.8 558.77a2.82 2.82 0 01-1.12 2.55l-2.22 1.28c-.72.4-.26-.51-1.35-1.15a8.78 8.78 0 01-4-6.9c0-1.26-1.16-1.27-.45-1.68l2.36-1.31a2.84 2.84 0 012.79.31 8.83 8.83 0 013.99 6.9z"
                fill="url(#expeditedbackground__New_Gradient_Swatch_copy_11-3)"
              />
              <ellipse
                cx={971.48}
                cy={557.78}
                rx={3.26}
                ry={5.64}
                transform="rotate(-30.31 971.503 557.775)"
                fill="url(#expeditedbackground__New_Gradient_Swatch_copy_38-3)"
              />
              <path
                d="M971.68 553.09a2.92 2.92 0 00-2.74-.34 3.17 3.17 0 012.39.48 8.8 8.8 0 014 6.9 2.72 2.72 0 01-1.26 2.62c1-.28 1.61-1.25 1.61-2.76a8.83 8.83 0 00-4-6.9z"
                style={{
                  mixBlendMode: "screen",
                }}
                fill="url(#expeditedbackground__Radial_Gradient_1-9)"
              />
              <path
                d="M971.62 554.31c-1.71-1-3.09-.2-3.09 1.76a6.77 6.77 0 003.09 5.31c1.7 1 3.08.2 3.08-1.76a6.78 6.78 0 00-3.08-5.31zm1.17 3.89l1-.08c.14 0 .33.18.37.39a4 4 0 01.09.83 2.78 2.78 0 01-.09.74c0 .15-.23.13-.37-.05l-1-1.18a.6.6 0 01-.13-.34.19.19 0 000-.12c0-.11.05-.18.13-.19zm.61-1l-.95.08a.36.36 0 01-.27-.16.76.76 0 00-.08-.11.53.53 0 01-.14-.34v-1.26c0-.19.16-.24.32-.1a5.82 5.82 0 011.18 1.46c.12.23.09.45-.06.47zm-2.13-2.19v1.26c0 .11 0 .19-.14.19h-.08a.33.33 0 01-.26-.15l-1-1.19c-.14-.18-.17-.42-.06-.49a1.56 1.56 0 011.18-.1.55.55 0 01.36.52zm-1.79.61l1 1.18a.63.63 0 01.13.34v.12c0 .11-.05.18-.13.19l-1 .08c-.14 0-.32-.18-.37-.39a4 4 0 01-.09-.83 2.7 2.7 0 01.09-.73c.05-.12.23-.1.37.08zm.35 2.8l1-.09a.38.38 0 01.26.16.76.76 0 01.08.11.53.53 0 01.14.34v1.26c0 .2-.16.24-.32.1a6 6 0 01-1.18-1.46c-.15-.16-.12-.37.02-.38zm2.13 2.18v-1.26c0-.11 0-.19.14-.19h.08a.34.34 0 01.27.15l.95 1.19c.15.18.18.42.06.49a1.56 1.56 0 01-1.18.1.55.55 0 01-.28-.44z"
                style={{
                  mixBlendMode: "multiply",
                }}
                fill="url(#expeditedbackground__linear-gradient-67)"
              />
              <path
                d="M971.42 554.39c-1.7-1-3.08-.2-3.08 1.75a6.79 6.79 0 003.08 5.32c1.71 1 3.09.19 3.09-1.76a6.77 6.77 0 00-3.09-5.31zm1.18 3.89l1-.08c.14 0 .33.18.37.39a4 4 0 01.09.83 2.7 2.7 0 01-.09.73c0 .16-.23.14-.37 0l-1-1.19a.58.58 0 01-.13-.34v-.11c0-.15.05-.22.13-.23zm.61-1l-1 .08a.33.33 0 01-.27-.15l-.08-.11a.53.53 0 01-.14-.34v-1.27c0-.19.16-.24.32-.09a5.86 5.86 0 011.18 1.46c.16.23.14.44-.01.45zm-2.13-2.18v1.26c0 .11-.05.18-.14.19h-.08c-.08 0-.18 0-.27-.15l-1-1.18c-.15-.18-.17-.42-.06-.49a1.52 1.52 0 011.18-.1.53.53 0 01.37.5zm-1.79.6l1 1.19a.58.58 0 01.13.34v.11c0 .12 0 .19-.13.19l-1 .09c-.14 0-.33-.18-.37-.39a4.07 4.07 0 01-.09-.84 2.75 2.75 0 01.09-.73c.08-.13.23-.1.37.07zm.35 2.8l1-.08a.32.32 0 01.27.16l.08.1a.56.56 0 01.14.35v1.26c0 .19-.16.24-.32.1a6 6 0 01-1.18-1.46c-.16-.18-.14-.39.01-.4zm2.13 2.19v-1.26c0-.12.05-.19.14-.19h.09a.36.36 0 01.27.15l1 1.19c.15.17.17.42.06.48a1.51 1.51 0 01-1.18.11.55.55 0 01-.38-.45z"
                fill="url(#expeditedbackground__linear-gradient-68)"
              />
              <path
                d="M1015.77 580.54a2.79 2.79 0 01-1.12 2.54l-2.22 1.29c-.72.4-.26-.51-1.36-1.15a8.83 8.83 0 01-4-6.9c0-1.26-1.16-1.27-.45-1.69l2.36-1.3a2.84 2.84 0 012.79.31 8.83 8.83 0 014 6.9z"
                fill="url(#expeditedbackground__New_Gradient_Swatch_copy_11-4)"
              />
              <path
                d="M1013.46 581.86c0 2.54-1.8 3.56-4 2.28a8.83 8.83 0 01-4-6.9c0-2.54 1.79-3.56 4-2.28a8.81 8.81 0 014 6.9z"
                fill="url(#expeditedbackground__New_Gradient_Swatch_copy_38-4)"
              />
              <path
                d="M1009.65 574.86a2.92 2.92 0 00-2.74-.34 3.22 3.22 0 012.39.47 8.83 8.83 0 014 6.91 2.72 2.72 0 01-1.26 2.62c1-.28 1.61-1.25 1.61-2.76a8.83 8.83 0 00-4-6.9z"
                style={{
                  mixBlendMode: "screen",
                }}
                fill="url(#expeditedbackground__Radial_Gradient_1-10)"
              />
              <path
                d="M1009.59 576.08c-1.71-1-3.09-.2-3.09 1.75a6.77 6.77 0 003.09 5.32c1.7 1 3.08.2 3.08-1.76a6.78 6.78 0 00-3.08-5.31zm1.17 3.89l1-.08c.14 0 .33.18.37.39a4 4 0 01.09.83 2.7 2.7 0 01-.09.73c0 .16-.23.14-.37 0l-1-1.18a.63.63 0 01-.13-.34v-.12c0-.15.05-.2.13-.2zm.61-1l-1 .09a.39.39 0 01-.27-.16.76.76 0 00-.08-.11.53.53 0 01-.14-.34v-1.26c0-.2.16-.24.32-.1a6 6 0 011.18 1.46c.17.23.14.45-.01.45zm-2.13-2.18v1.26c0 .11 0 .19-.14.19h-.1c-.08 0-.18 0-.27-.14l-1-1.19c-.14-.18-.17-.42-.06-.49a1.56 1.56 0 011.18-.1.55.55 0 01.39.5zm-1.79.61l1 1.18a.6.6 0 01.13.34v.12c0 .11 0 .18-.13.19l-1 .08c-.14 0-.33-.18-.37-.39a4 4 0 01-.09-.83 2.78 2.78 0 01.09-.74c.04-.12.23-.1.37.08zm.35 2.79l1-.08a.34.34 0 01.27.16l.08.1a.56.56 0 01.14.35V582c0 .19-.16.24-.32.1a6 6 0 01-1.18-1.46c-.16-.19-.13-.4.01-.42zm2.13 2.19v-1.26c0-.11.05-.19.14-.19h.08a.34.34 0 01.27.15l1 1.19c.15.18.18.42.06.49a1.56 1.56 0 01-1.18.1.55.55 0 01-.37-.45z"
                style={{
                  mixBlendMode: "multiply",
                }}
                fill="url(#expeditedbackground__linear-gradient-69)"
              />
              <path
                d="M1009.39 576.15c-1.7-1-3.08-.19-3.08 1.76a6.79 6.79 0 003.08 5.32c1.71 1 3.09.19 3.09-1.76a6.8 6.8 0 00-3.09-5.32zm1.18 3.9l1-.08c.14 0 .33.18.37.38a4.14 4.14 0 01.09.84 2.7 2.7 0 01-.09.73c0 .16-.23.14-.37 0l-1-1.19a.58.58 0 01-.13-.34v-.11c0-.15.05-.22.13-.23zm.61-1l-.95.08a.33.33 0 01-.27-.15 1 1 0 00-.08-.11.53.53 0 01-.14-.34v-1.27c0-.19.16-.24.32-.09a5.69 5.69 0 011.18 1.46c.11.23.08.44-.06.45zm-2.13-2.19v1.27c0 .11 0 .18-.14.18h-.08a.34.34 0 01-.27-.15l-.95-1.18c-.15-.18-.18-.42-.06-.49a1.47 1.47 0 011.18-.1.52.52 0 01.32.5zm-1.79.61l1 1.19a.58.58 0 01.13.34v.11c0 .12-.05.19-.13.19l-1 .09c-.14 0-.33-.18-.37-.39a4.14 4.14 0 01-.09-.84 2.75 2.75 0 01.09-.73c.04-.13.23-.1.37.07zm.35 2.8l.95-.08a.33.33 0 01.27.16l.08.1a.56.56 0 01.14.35v1.26c0 .19-.16.24-.32.1a5.91 5.91 0 01-1.18-1.47c-.12-.17-.09-.38.06-.39zm2.13 2.19v-1.27c0-.11 0-.18.14-.18h.08a.36.36 0 01.27.15l.95 1.18c.14.18.17.43.06.49a1.47 1.47 0 01-1.18.1.52.52 0 01-.32-.44z"
                fill="url(#expeditedbackground__linear-gradient-70)"
              />
              <path
                d="M1035.43 567.71L1020 543.85a2.59 2.59 0 00-.88-.83L978 519.34a2.61 2.61 0 00-2.54 0l-11.6 6.35a2.58 2.58 0 00-1.17 1.33l-3.54 7.54a2.77 2.77 0 00-.18.9l-.27 13.91a2.6 2.6 0 001.32 2.31l7.25 4.11a7.91 7.91 0 01-.1-1.16c0-2.87 2-4 4.53-2.59a10 10 0 014.53 7.82 4.72 4.72 0 01-.09.95l28.61 16.14a5.78 5.78 0 010-.58c0-2.87 2-4 4.53-2.58a10 10 0 014.53 7.81v.46l1.69 1a2.61 2.61 0 002.43.07l16.54-8.17a2.6 2.6 0 001.44-2.33v-3.44a2.61 2.61 0 00-.48-1.48z"
                fill="url(#expeditedbackground__New_Gradient_Swatch_copy_33-8)"
              />
              <path
                d="M1017.24 575.88L1015 569l-9.34-17.69a4 4 0 00-1.61-1.73l-40.45-23.27c-.14.17.08.29 0 .49l40 23.05a4 4 0 011.62 1.72l9.33 17.69 2.26 6.92a4.31 4.31 0 01.45 1.93v5.09c.25 0 .16.1.41.05v-5.41a4.44 4.44 0 00-.43-1.96z"
                style={{
                  mixBlendMode: "color-dodge",
                }}
                fill="url(#expeditedbackground__Radial_Gradient_1-11)"
              />
              <path
                d="M1011.33 558l3.94-1.43a27.81 27.81 0 007.2-3.87l1-.78a1 1 0 011.43.25l5.43 8.18a1 1 0 01-.27 1.39l-2.77 1.85a31.39 31.39 0 01-6.89 3.48l-4.34 1.55a1 1 0 01-1.24-.52l-4.09-8.73a1 1 0 01.6-1.37z"
                fill="#4d4d4d"
              />
              <path
                d="M1011.89 558.22l3.76-1.36a26.67 26.67 0 006.85-3.69l1-.74a.94.94 0 011.36.24l5.17 7.79a.94.94 0 01-.26 1.32l-2.64 1.77a29.7 29.7 0 01-6.56 3.31l-4.13 1.48a1 1 0 01-1.19-.49l-3.9-8.33a1 1 0 01.54-1.3z"
                fill="url(#expeditedbackground__New_Gradient_Swatch_copy_37-3)"
              />
              <path
                d="M1002.66 555.76l.23 7.67a.58.58 0 00.28.47l9.22 5.28v-1.3l-4.7-10.34-4.2-2.29a.57.57 0 00-.83.51z"
                fill="#4d4d4d"
              />
              <path
                fill="url(#expeditedbackground__New_Gradient_Swatch_copy_37-4)"
                d="M1003.15 555.55l.24 7.78 6.7 3.88-.19-3.85-2.36-5.41-4.39-2.4z"
              />
              <path
                d="M1013.33 578.82l3.37 1.81a4.89 4.89 0 003.93.13l2.57-1a67.24 67.24 0 0011.18-6.34l1.62-1.3h.52l-.07 3.45-.52.51a47.63 47.63 0 01-15.31 8.13 4.87 4.87 0 01-3.81-.38l-3.25-1.91z"
                fill="#f2f2f2"
              />
              <path
                d="M1016.46 577.22a3 3 0 002.89.16 1.44 1.44 0 012 .89l.46 1.54-2.36.93a3.06 3.06 0 01-2.43-.08l-.66-.32z"
                fill="url(#expeditedbackground__linear-gradient-71)"
              />
              <path
                d="M1016.46 577.22a3 3 0 002.89.16 1.44 1.44 0 012 .89l.46 1.54-2.73-.13c-2.68-.56-2.62-2.46-2.62-2.46z"
                style={{
                  mixBlendMode: "multiply",
                }}
                fill="url(#expeditedbackground__linear-gradient-72)"
              />
              <path
                d="M1034.27 571.07l-.21 2.23s1.91-1.18 2-1.64a29.31 29.31 0 00-.08-3.28l-.55.67a2.75 2.75 0 00-1.16 2.02z"
                fill="url(#expeditedbackground__linear-gradient-73)"
              />
              <path
                d="M1034.27 571.07l-.21 2.23a22.83 22.83 0 001.34-2.53c.11-.46.61-2.39.61-2.39l-.55.67a2.75 2.75 0 00-1.19 2.02z"
                style={{
                  mixBlendMode: "multiply",
                }}
                fill="url(#expeditedbackground__linear-gradient-74)"
              />
              <path
                d="M1030.37 560.36l-.54-.82a1.14 1.14 0 01-.49.78l-3.11 2.09a35.57 35.57 0 01-7.74 3.9l-3.83 1.38.2.42a1 1 0 001.24.52l4.34-1.55a31.39 31.39 0 006.89-3.48l2.77-1.85a1 1 0 00.27-1.39z"
                fill="#4d4d4d"
              />
              <path
                d="M1029 558.9l-4.14-6.23a.94.94 0 00-1.36-.24l-1 .74a26.67 26.67 0 01-6.85 3.69l-3.76 1.36a1 1 0 00-.58 1.18 31.47 31.47 0 008 1 29.59 29.59 0 009.69-1.5z"
                style={{
                  mixBlendMode: "color-dodge",
                }}
                fill="url(#expeditedbackground__linear-gradient-75)"
              />
              <path
                style={{
                  mixBlendMode: "color-dodge",
                }}
                opacity={0.7}
                fill="url(#expeditedbackground__linear-gradient-76)"
                d="M1006.04 549.82l12-6.83-41.1-23.48-12 6.72 41.1 23.59z"
              />
              <path
                d="M1011.29 568.4c.64.39-3.28 2.14-4.82 2.45s-.24.71-.29.45c-.18-1.2 2.96-4.22 5.11-2.9z"
                style={{
                  mixBlendMode: "multiply",
                }}
                fill="url(#expeditedbackground__linear-gradient-77)"
              />
              <path
                d="M1006.68 566.27l.26 3.05a.69.69 0 00.95.57l3.31-1a.68.68 0 00.4-.73l-1.09-2.84a.68.68 0 00-.89-.55l-2.47.8a.68.68 0 00-.47.7z"
                fill="url(#expeditedbackground__New_Gradient_Swatch_copy_33-9)"
              />
              <path
                d="M1007.58 569.69l-.26-3.05a.68.68 0 01.47-.7l2.48-.81a.86.86 0 01.17 0 .69.69 0 00-.82-.33l-2.47.8a.68.68 0 00-.47.7l.26 3.05a.67.67 0 00.71.62 1 1 0 01-.07-.28z"
                style={{
                  mixBlendMode: "color-dodge",
                }}
                fill="url(#expeditedbackground__Radial_Gradient_1-12)"
              />
              <path
                d="M1006.26 573.32l-31.42-18a9.2 9.2 0 011.38 4.52 4.72 4.72 0 01-.09.95l28.61 16.14a5.78 5.78 0 010-.58 3 3 0 011.52-3.03z"
                style={{
                  mixBlendMode: "multiply",
                }}
                fill="url(#expeditedbackground__linear-gradient-78)"
              />
              <path
                d="M967.16 554.6a3.12 3.12 0 011.36-2.93l-9.76-5.61-.07 3.28a2.6 2.6 0 001.32 2.31l7.25 4.11a7.91 7.91 0 01-.1-1.16z"
                style={{
                  mixBlendMode: "multiply",
                }}
                fill="url(#expeditedbackground__linear-gradient-79)"
              />
              <path
                d="M1013.36 579.15l3.43 1.82a4.89 4.89 0 003.93.14l2.56-1a47.8 47.8 0 0011.19-6.35l2.06-1.67v3.1a1.57 1.57 0 01-.58 1.22l-.28.22a71.72 71.72 0 01-15 7.95 4.91 4.91 0 01-3.81-.37l-3.33-2z"
                fill="url(#expeditedbackground__New_Gradient_Swatch_copy_33-10)"
              />
              <path
                d="M1020.92 578.34l-.82 1.73s-2.48-1.54-2.24-2.07 3.06.34 3.06.34z"
                fill="url(#expeditedbackground__linear-gradient-80)"
              />
              <path
                d="M1019.84 579.57c0 .43.3.61.68.39a1.52 1.52 0 00.69-1.18c0-.44-.31-.62-.69-.4a1.51 1.51 0 00-.68 1.19z"
                fill="url(#expeditedbackground__linear-gradient-81)"
              />
              <path
                d="M1019.23 578.69l-.65 1.37s-2-1.22-1.78-1.64 2.43.27 2.43.27z"
                fill="url(#expeditedbackground__linear-gradient-82)"
              />
              <path
                d="M1018.37 579.66c0 .35.24.49.54.31a1.2 1.2 0 00.55-.94c0-.34-.25-.48-.55-.31a1.2 1.2 0 00-.54.94z"
                fill="url(#expeditedbackground__linear-gradient-83)"
              />
              <path
                d="M1035.64 570.78l-.56 1.18s-.95-.72-.78-1.09 1.34-.09 1.34-.09z"
                fill="url(#expeditedbackground__linear-gradient-84)"
              />
              <path
                d="M1034.9 571.62c0 .29.21.41.47.26a1 1 0 00.47-.8c0-.3-.21-.42-.47-.27a1 1 0 00-.47.81z"
                fill="url(#expeditedbackground__linear-gradient-85)"
              />
              <path
                d="M1035.87 569.81l-.41.86s-.69-.53-.57-.79.98-.07.98-.07z"
                fill="url(#expeditedbackground__linear-gradient-86)"
              />
              <path
                d="M1035.33 570.42c0 .22.15.3.34.19a.75.75 0 00.34-.59c0-.21-.15-.3-.34-.19a.75.75 0 00-.34.59z"
                fill="url(#expeditedbackground__linear-gradient-87)"
              />
              <path
                d="M1018.05 577.67a3 3 0 01-1.59-.45l-.11 3.12.66.32a3.19 3.19 0 001.35.29z"
                fill="url(#expeditedbackground__New_Gradient_Swatch_copy_39-2)"
              />
              <path
                d="M1022.12 576.83l.33.88a1.28 1.28 0 001.77.7c1.22-.6 3.11-1.57 4.69-2.51 1.76-1 3.21-2 3.95-2.48a1.31 1.31 0 00.57-1l.09-1.63a.36.36 0 00-.56-.32c-1 .69-3.2 2.11-5 3.16-2.07 1.17-4.7 2.34-5.6 2.73a.36.36 0 00-.24.47z"
                fill="url(#expeditedbackground__linear-gradient-88)"
              />
              <path
                d="M1033.19 570.42a.31.31 0 010 .19l-.09 1.63a1.25 1.25 0 01-.57 1c-.74.49-2.18 1.44-3.94 2.48-1.58.94-3.47 1.91-4.7 2.51a1.28 1.28 0 01-1.13 0 1.29 1.29 0 001.42.18c1.22-.6 3.11-1.57 4.69-2.51 1.76-1 3.21-2 3.95-2.48a1.31 1.31 0 00.57-1l.09-1.63a.37.37 0 00-.29-.37z"
                style={{
                  mixBlendMode: "color-dodge",
                }}
                fill="url(#expeditedbackground__Radial_Gradient_1-13)"
              />
              <path
                d="M1031.33 562.3s3.14 4.59 2.91 5.59-5.13 4.06-7.73 5.25-7.35 3.34-8.45 2.58-2.07-6.31-2.07-6.31a62.58 62.58 0 009-3.25 23 23 0 006.34-3.86z"
                style={{
                  mixBlendMode: "color-dodge",
                }}
                fill="url(#expeditedbackground__linear-gradient-89)"
              />
              <path
                d="M1030 563.43a.35.35 0 00-.54 0l-.09.07-2 1.32a22.52 22.52 0 01-4.92 2.49l-2.15.77a.28.28 0 00-.16.37.65.65 0 00.8.33l2.75-1a19.37 19.37 0 004.38-2.21l1.76-1.18a.64.64 0 00.17-.96z"
                fill="#f2f2f2"
              />
              <path
                style={{
                  mixBlendMode: "screen",
                }}
                fill="url(#expeditedbackground__linear-gradient-90)"
                d="M958.99 539.88l52.7 29.73 1.6 4-54.34-30.52.04-3.21z"
              />
              <path
                d="M958.43 546.35l1.85 1V552a3.27 3.27 0 01-1.92-3z"
                fill="url(#expeditedbackground__linear-gradient-91)"
              />
              <path
                style={{
                  mixBlendMode: "multiply",
                }}
                fill="#eab7b7"
                d="M1004.39 573.65l-27.93-16.02.17-.3 27.93 16.02-.17.3z"
              />
              <path
                style={{
                  mixBlendMode: "color-dodge",
                }}
                fill="url(#expeditedbackground__Radial_Gradient_1-14)"
                d="M1006.91 555.11l-45-25.89-.17.3 29.42 16.92v19.1h.34v-18.9l10.1 5.81v19.17h.35v-18.97l4.79 2.76.17-.3z"
              />
              <g>
                <path
                  d="M1005.05 567.17c0 .57-.41.8-.91.51a2 2 0 01-.91-1.56c0-.58.41-.81.91-.52a2 2 0 01.91 1.57z"
                  style={{
                    mixBlendMode: "multiply",
                  }}
                  fill="url(#expeditedbackground__linear-gradient-92)"
                />
                <path
                  d="M1005 567.13c.2.4-.16.46-.8.14a3.88 3.88 0 01-1.52-1.31c-.2-.4.16-.47.8-.14a3.88 3.88 0 011.52 1.31z"
                  fill="url(#expeditedbackground__New_Gradient_Swatch_copy_33-11)"
                />
              </g>
              <g>
                <path
                  d="M1000.57 564.75c0 .58-.41.81-.91.52a2 2 0 01-.91-1.57c0-.57.41-.8.91-.51a2 2 0 01.91 1.56z"
                  style={{
                    mixBlendMode: "multiply",
                  }}
                  fill="url(#expeditedbackground__linear-gradient-93)"
                />
                <path
                  d="M1000.55 564.71c.2.4-.16.47-.8.15a4 4 0 01-1.52-1.31c-.2-.41.16-.47.8-.15a3.74 3.74 0 011.52 1.31z"
                  fill="url(#expeditedbackground__New_Gradient_Swatch_copy_33-12)"
                />
              </g>
              <path
                d="M1000.21 562.18a.87.87 0 01-.39-.1l-6.45-3.47a1.78 1.78 0 01-1-1.58v-6.54a.81.81 0 01.82-.82.87.87 0 01.41.11l6.48 3.78a1.82 1.82 0 01.9 1.56v6.24a.83.83 0 01-.25.59.88.88 0 01-.52.23zm-7-12.17a.48.48 0 00-.48.48V557a1.44 1.44 0 00.77 1.28l6.45 3.47a.5.5 0 00.56-.08.48.48 0 00.14-.34v-6.24a1.47 1.47 0 00-.72-1.26l-6.49-3.78a.39.39 0 00-.2-.05z"
                style={{
                  mixBlendMode: "multiply",
                }}
                fill="#eab7b7"
              />
              <path
                d="M1000.28 562.45a.86.86 0 01-.38-.1l-6.46-3.47a1.8 1.8 0 01-1-1.59v-6.53a.82.82 0 01.82-.82.72.72 0 01.41.11l6.49 3.78a1.81 1.81 0 01.89 1.56v6.24a.79.79 0 01-.25.58.82.82 0 01-.52.24zm-7-12.17a.47.47 0 00-.47.48v6.53a1.47 1.47 0 00.76 1.29l6.46 3.46a.47.47 0 00.55-.07.45.45 0 00.15-.34v-6.24a1.47 1.47 0 00-.72-1.26l-6.49-3.78a.4.4 0 00-.21-.07z"
                style={{
                  mixBlendMode: "color-dodge",
                }}
                fill="url(#expeditedbackground__White_Black_Radial-2)"
              />
            </g>
            <motion.g
              id="expeditedbackground__aeroplane1"
              variants={aeroVariant}
              initial="start"
              animate={aeroControls}
            >
              <g fillRule="evenodd">
                <path
                  d="M558.35 490.66c-1.14-.66-1.9.19-1.9 1.33s1.24 2.35 2.38 3 1.6.07 1.6-1.07a4.33 4.33 0 00-2.08-3.26z"
                  fill="#010007"
                />
                <path
                  fill="#010007"
                  d="M555.59 491.47l1.38-.83-.14.89-1.24-.06zM558.72 495.99l1.3-.8-1.13-1.02-.11 1.28-.06.54z"
                />
                <path
                  d="M557.11 491.68c-1.14-.66-2.07-.27-2.07.88a4.28 4.28 0 002.07 3.26c1.15.66 2.08.27 2.08-.88a4.27 4.27 0 00-2.08-3.26z"
                  fill="#2e2d30"
                />
                <path
                  d="M557.11 491.88c-1-.6-1.87-.24-1.87.79a3.88 3.88 0 001.87 2.95c1 .6 1.88.24 1.88-.79a3.87 3.87 0 00-1.88-2.95z"
                  fill="#1b1b1f"
                />
                <path
                  d="M557.11 492.37c-.75-.43-1.37-.17-1.37.59a2.87 2.87 0 001.37 2.17c.76.43 1.38.17 1.38-.59a2.86 2.86 0 00-1.38-2.17z"
                  fill="#3b3b3b"
                />
                <path
                  d="M557.17 492.47c-.67-.38-1.21-.15-1.21.52a2.53 2.53 0 001.21 1.92c.67.38 1.22.15 1.22-.52a2.54 2.54 0 00-1.22-1.92z"
                  fill="#cecece"
                />
                <path
                  d="M558.19 494.1a2.17 2.17 0 00-1-1.45c-.55-.3-1-.1-1 .46a2.16 2.16 0 001 1.64c.58.33 1 .13 1-.44a1.23 1.23 0 000-.21z"
                  fill="#7c7774"
                />
                <path
                  d="M557.17 492.65c-.2 0-.34.15-.34.41a1.47 1.47 0 00.73 1.14c.31.19.58.14.67-.08a2.17 2.17 0 00-1.06-1.47z"
                  fill="#cecece"
                />
              </g>
              <g fill="#434b4c">
                <path d="M554 491.59l1.22-1.84.18.2-1.22 1.84-.18-.2z" />
                <path d="M557.11 488.65l-1.89 1.1.18.2 1.87-1.1-.16-.2z" />
              </g>
              <path
                fill="#2d383e"
                d="M556.08 490.68l-1.9 1.11 1.22-1.84 1.89-1.11-1.21 1.84z"
              />
              <path
                d="M556.15 479.6v14c0 .17.25.31.56.31s.56-.15.55-.32v-14z"
                fill="url(#expeditedbackground__\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_14)"
              />
              <g fillRule="evenodd">
                <path
                  d="M555.76 492.23c-1.14-.66-1.9.19-1.9 1.33s1.24 2.35 2.39 3 1.59.07 1.59-1.07a4.3 4.3 0 00-2.08-3.26z"
                  fill="#010007"
                />
                <path
                  fill="#010007"
                  d="M553 493.04l1.38-.83-.13.89-1.25-.06zM556.13 497.56l1.3-.81-1.13-1.02-.11 1.29-.06.54z"
                />
                <path
                  d="M554.53 493.25c-1.15-.66-2.08-.27-2.08.88a4.27 4.27 0 002.08 3.26c1.14.66 2.07.27 2.07-.88a4.28 4.28 0 00-2.07-3.26z"
                  fill="#2e2d30"
                />
                <path
                  d="M554.53 493.45c-1-.6-1.88-.24-1.88.79a3.87 3.87 0 001.88 2.95c1 .6 1.87.24 1.87-.79a3.88 3.88 0 00-1.87-2.95z"
                  fill="#1b1b1f"
                />
                <path
                  d="M554.53 493.94c-.76-.43-1.38-.17-1.38.59a2.86 2.86 0 001.38 2.17c.75.43 1.37.17 1.37-.59a2.87 2.87 0 00-1.37-2.17z"
                  fill="#3b3b3b"
                />
                <path
                  d="M554.58 494c-.67-.38-1.21-.15-1.21.52a2.53 2.53 0 001.21 1.92c.67.38 1.22.15 1.22-.52a2.54 2.54 0 00-1.22-1.92z"
                  fill="#cecece"
                />
                <path
                  d="M555.6 495.67a2.17 2.17 0 00-1-1.45c-.55-.3-1-.1-1 .46a2.16 2.16 0 001 1.64c.58.33 1 .13 1-.44a1.23 1.23 0 000-.21z"
                  fill="#7c7774"
                />
                <path
                  d="M554.58 494.22c-.2 0-.34.15-.34.41a1.47 1.47 0 00.73 1.14c.31.19.58.14.67-.08a2.17 2.17 0 00-1.06-1.47z"
                  fill="#cecece"
                />
              </g>
              <g fill="#2d383e">
                <path d="M559.18 494.53l-2.58-3.84h.2l2.58 3.84h-.2zM558.49 489.59l-1.89 1.1h.2l1.88-1.1h-.19z" />
              </g>
              <path
                fill="#6d777a"
                d="M561.27 493.42l-1.89 1.11-2.58-3.84 1.89-1.11 2.58 3.84z"
              />
              <g fillRule="evenodd">
                <path
                  d="M587.37 513c-1.14-.66-1.9.19-1.9 1.33s1.24 2.35 2.38 3 1.59.07 1.59-1.07a4.32 4.32 0 00-2.07-3.26z"
                  fill="#010007"
                />
                <path
                  fill="#010007"
                  d="M584.61 513.82l1.38-.83-.14.89-1.24-.06zM587.73 518.34l1.31-.81-1.14-1.02-.1 1.29-.07.54z"
                />
                <path
                  d="M586.13 514c-1.14-.65-2.07-.26-2.07.88a4.3 4.3 0 002.07 3.27c1.14.66 2.08.26 2.08-.88a4.33 4.33 0 00-2.08-3.27z"
                  fill="#2e2d30"
                />
                <path
                  d="M586.13 514.22c-1-.59-1.87-.23-1.87.8a3.88 3.88 0 001.87 3c1 .6 1.88.24 1.88-.79a3.91 3.91 0 00-1.88-3.01z"
                  fill="#1b1b1f"
                />
                <path
                  d="M586.13 514.72c-.76-.44-1.38-.17-1.38.59a2.88 2.88 0 001.38 2.17c.76.43 1.38.17 1.38-.59a2.86 2.86 0 00-1.38-2.17z"
                  fill="#3b3b3b"
                />
                <path
                  d="M586.19 514.82c-.67-.38-1.22-.15-1.22.52a2.51 2.51 0 001.22 1.91c.67.39 1.22.16 1.22-.51a2.54 2.54 0 00-1.22-1.92z"
                  fill="#cecece"
                />
                <path
                  d="M587.21 516.45a2.21 2.21 0 00-1-1.45c-.56-.3-1-.1-1 .46a2.19 2.19 0 001 1.64c.57.33 1 .13 1-.44a1.23 1.23 0 000-.21z"
                  fill="#7c7774"
                />
                <path
                  d="M586.19 515c-.21 0-.34.15-.34.41a1.48 1.48 0 00.73 1.14c.31.18.57.14.67-.08a2.21 2.21 0 00-1.06-1.47z"
                  fill="#cecece"
                />
              </g>
              <g fill="#434b4c">
                <path d="M583.02 513.93l1.22-1.83.17.2-1.21 1.83-.18-.2z" />
                <path d="M586.13 511l-1.89 1.1.17.2 1.88-1.11-.16-.19z" />
              </g>
              <path
                fill="#2d383e"
                d="M585.09 513.02l-1.89 1.11 1.22-1.84 1.89-1.11-1.22 1.84z"
              />
              <path
                d="M585.17 502v13.9c0 .18.25.32.56.31s.55-.14.55-.31v-14z"
                fill="url(#expeditedbackground__\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_14-2)"
              />
              <g fillRule="evenodd">
                <path
                  d="M584.78 514.58c-1.14-.66-1.9.19-1.9 1.33s1.24 2.35 2.38 3 1.6.07 1.6-1.07a4.33 4.33 0 00-2.08-3.26z"
                  fill="#010007"
                />
                <path
                  fill="#010007"
                  d="M582.02 515.39l1.38-.83-.14.89-1.24-.06zM585.14 519.9l1.31-.8-1.13-1.02-.11 1.29-.07.53z"
                />
                <path
                  d="M583.54 515.59c-1.14-.65-2.07-.26-2.07.88a4.3 4.3 0 002.07 3.27c1.15.66 2.08.26 2.08-.88a4.3 4.3 0 00-2.08-3.27z"
                  fill="#2e2d30"
                />
                <path
                  d="M583.54 515.79c-1-.59-1.87-.23-1.87.8a3.88 3.88 0 001.87 2.95c1 .6 1.88.24 1.88-.79a3.88 3.88 0 00-1.88-2.96z"
                  fill="#1b1b1f"
                />
                <path
                  d="M583.54 516.29c-.76-.44-1.37-.17-1.37.58a2.83 2.83 0 001.37 2.17c.76.44 1.38.18 1.38-.58a2.86 2.86 0 00-1.38-2.17z"
                  fill="#3b3b3b"
                />
                <path
                  d="M583.6 516.39c-.67-.38-1.21-.15-1.21.52a2.5 2.5 0 001.21 1.91c.67.39 1.22.16 1.22-.51a2.54 2.54 0 00-1.22-1.92z"
                  fill="#cecece"
                />
                <path
                  d="M584.62 518a2.15 2.15 0 00-1-1.45c-.55-.3-1-.1-1 .46a2.19 2.19 0 001 1.64c.58.32 1 .13 1-.44a1.23 1.23 0 000-.21z"
                  fill="#7c7774"
                />
                <path
                  d="M583.6 516.57c-.2 0-.34.15-.34.41a1.5 1.5 0 00.73 1.14c.31.18.58.14.67-.08a2.15 2.15 0 00-1.06-1.47z"
                  fill="#cecece"
                />
              </g>
              <g fill="#2d383e">
                <path d="M588.2 516.88l-2.58-3.85.2.01 2.58 3.84h-.2z" />
                <path d="M587.51 511.93l-1.89 1.1.2.01 1.87-1.1-.18-.01z" />
              </g>
              <path
                fill="#6d777a"
                d="M590.29 515.77l-1.89 1.11-2.58-3.84 1.89-1.11 2.58 3.84z"
              />
              <g fillRule="evenodd">
                <path
                  d="M499.28 458.66c-1.15-.66-1.9.19-1.9 1.33s1.24 2.35 2.38 3 1.59.07 1.59-1.07a4.3 4.3 0 00-2.07-3.26z"
                  fill="#010007"
                />
                <path
                  fill="#010007"
                  d="M496.51 459.46l1.39-.82-.14.89-1.25-.07zM499.64 463.98l1.3-.8-1.13-1.02-.11 1.29-.06.53z"
                />
                <path
                  d="M498 459.67c-1.14-.66-2.07-.26-2.07.88a4.32 4.32 0 002.07 3.27c1.14.66 2.07.26 2.07-.88a4.32 4.32 0 00-2.07-3.27z"
                  fill="#2e2d30"
                />
                <path
                  d="M498 459.87c-1-.59-1.87-.23-1.87.8a3.88 3.88 0 001.87 2.95c1 .59 1.87.24 1.87-.8a3.9 3.9 0 00-1.87-2.95z"
                  fill="#1b1b1f"
                />
                <path
                  d="M498 460.37c-.76-.44-1.38-.18-1.38.58a2.84 2.84 0 001.38 2.17c.76.44 1.38.18 1.38-.58a2.86 2.86 0 00-1.38-2.17z"
                  fill="#3b3b3b"
                />
                <path
                  d="M498.1 460.47c-.67-.39-1.22-.15-1.22.52a2.52 2.52 0 001.22 1.91c.67.39 1.21.15 1.21-.51a2.53 2.53 0 00-1.21-1.92z"
                  fill="#cecece"
                />
                <path
                  d="M499.11 462.1a2.16 2.16 0 00-1-1.46c-.56-.3-1-.1-1 .46a2.19 2.19 0 001 1.64c.58.32 1.05.13 1.05-.44a.58.58 0 00-.05-.2z"
                  fill="#7c7774"
                />
                <path
                  d="M498.09 460.64c-.21 0-.35.14-.35.41a1.5 1.5 0 00.73 1.14c.32.18.58.14.67-.08a2.16 2.16 0 00-1.05-1.47z"
                  fill="#cecece"
                />
              </g>
              <g fill="#434b4c">
                <path d="M494.93 459.58l1.58-1.69.18.2-1.58 1.69-.18-.2zM498.41 456.79l-1.9 1.1.18.2 1.88-1.1-.16-.2z" />
              </g>
              <path
                fill="#2d383e"
                d="M497 458.67l-1.89 1.11 1.58-1.69 1.89-1.11-1.58 1.69z"
              />
              <path
                d="M499.08 450.42l-2 11.13c0 .18.25.31.56.31s.55-.14.55-.32l2-11.13z"
                fill="url(#expeditedbackground__\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_14-3)"
              />
              <g fillRule="evenodd">
                <path
                  d="M496.69 460.23c-1.14-.66-1.9.19-1.9 1.33s1.24 2.35 2.38 3 1.59.07 1.59-1.07a4.3 4.3 0 00-2.07-3.26z"
                  fill="#010007"
                />
                <path
                  fill="#010007"
                  d="M493.93 461.03l1.38-.82-.14.89-1.24-.07zM497.05 465.55l1.31-.8-1.14-1.02-.1 1.29-.07.53z"
                />
                <path
                  d="M495.45 461.24c-1.14-.66-2.07-.26-2.07.88a4.32 4.32 0 002.07 3.27c1.14.66 2.08.26 2.08-.88a4.33 4.33 0 00-2.08-3.27z"
                  fill="#2e2d30"
                />
                <path
                  d="M495.45 461.44c-1-.59-1.87-.23-1.87.8a3.9 3.9 0 001.87 2.95c1 .59 1.87.24 1.87-.8a3.9 3.9 0 00-1.87-2.95z"
                  fill="#1b1b1f"
                />
                <path
                  d="M495.45 461.94c-.76-.44-1.38-.18-1.38.58a2.84 2.84 0 001.38 2.17c.76.44 1.38.18 1.38-.58a2.86 2.86 0 00-1.38-2.17z"
                  fill="#3b3b3b"
                />
                <path
                  d="M495.51 462c-.67-.39-1.22-.15-1.22.52a2.52 2.52 0 001.22 1.91c.67.39 1.21.15 1.21-.51a2.51 2.51 0 00-1.21-1.92z"
                  fill="#cecece"
                />
                <path
                  d="M496.52 463.67a2.18 2.18 0 00-1-1.46c-.56-.3-1-.1-1 .46a2.2 2.2 0 001.05 1.64c.57.32 1 .13 1-.44a.58.58 0 00-.05-.2z"
                  fill="#7c7774"
                />
                <path
                  d="M495.51 462.21c-.21 0-.34.14-.34.41a1.48 1.48 0 00.73 1.14c.31.18.57.14.66-.08a2.18 2.18 0 00-1.05-1.47z"
                  fill="#cecece"
                />
              </g>
              <g fill="#2d383e">
                <path d="M500.11 462.52l-2.59-3.84.21.01 2.58 3.84-.2-.01z" />
                <path d="M499.42 457.58l-1.9 1.1.21.01 1.87-1.1-.18-.01z" />
              </g>
              <path
                fill="#6d777a"
                d="M502.2 461.42l-1.89 1.11-2.58-3.84 1.89-1.11 2.58 3.84z"
              />
              <g fillRule="evenodd">
                <path
                  d="M541.75 486.21c-1.14-.66-1.9.19-1.9 1.33s1.24 2.35 2.38 3 1.59.07 1.59-1.07a4.32 4.32 0 00-2.07-3.26z"
                  fill="#010007"
                />
                <path
                  fill="#010007"
                  d="M538.99 487.02l1.38-.83-.14.89-1.24-.06zM542.11 491.54l1.3-.8-1.13-1.03-.11 1.29-.06.54z"
                />
                <path
                  d="M540.51 487.23c-1.14-.66-2.07-.27-2.07.88a4.28 4.28 0 002.07 3.26c1.14.66 2.07.27 2.07-.88a4.28 4.28 0 00-2.07-3.26z"
                  fill="#2e2d30"
                />
                <path
                  d="M540.51 487.43c-1-.6-1.87-.24-1.87.79a3.88 3.88 0 001.87 2.95c1 .6 1.87.24 1.87-.79a3.88 3.88 0 00-1.87-2.95z"
                  fill="#1b1b1f"
                />
                <path
                  d="M540.51 487.92c-.76-.43-1.38-.17-1.38.59a2.86 2.86 0 001.38 2.17c.76.43 1.38.17 1.38-.59a2.86 2.86 0 00-1.38-2.17z"
                  fill="#3b3b3b"
                />
                <path
                  d="M540.57 488c-.67-.38-1.22-.15-1.22.52a2.54 2.54 0 001.22 1.92c.67.38 1.21.15 1.21-.52a2.53 2.53 0 00-1.21-1.92z"
                  fill="#cecece"
                />
                <path
                  d="M541.58 489.65a2.16 2.16 0 00-1-1.45c-.56-.3-1-.1-1 .46a2.17 2.17 0 001.05 1.64c.57.33 1 .13 1-.44a.63.63 0 00-.05-.21z"
                  fill="#7c7774"
                />
                <path
                  d="M540.57 488.2c-.21 0-.34.15-.34.41a1.46 1.46 0 00.72 1.14c.32.19.58.14.67-.08a2.16 2.16 0 00-1.05-1.47z"
                  fill="#cecece"
                />
              </g>
              <g fill="#434b4c">
                <path d="M537.4 487.14l1.22-1.84.17.2-1.21 1.84-.18-.2z" />
                <path d="M540.51 484.2l-1.89 1.1.17.2 1.88-1.11-.16-.19z" />
              </g>
              <path
                fill="#2d383e"
                d="M539.47 486.23l-1.89 1.11 1.21-1.84 1.89-1.12-1.21 1.85z"
              />
              <path
                d="M539.55 475.15v14c0 .17.25.31.56.31s.55-.15.55-.32v-14z"
                fill="url(#expeditedbackground__\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_14-4)"
              />
              <g fillRule="evenodd">
                <path
                  d="M539.16 487.78c-1.14-.66-1.9.19-1.9 1.33s1.24 2.35 2.38 3 1.59.07 1.59-1.07a4.32 4.32 0 00-2.07-3.26z"
                  fill="#010007"
                />
                <path
                  fill="#010007"
                  d="M536.4 488.59l1.38-.83-.14.89-1.24-.06zM539.52 493.11l1.31-.8-1.14-1.03-.1 1.29-.07.54z"
                />
                <path
                  d="M537.92 488.8c-1.14-.66-2.07-.27-2.07.88a4.28 4.28 0 002.07 3.26c1.14.66 2.08.27 2.08-.88a4.29 4.29 0 00-2.08-3.26z"
                  fill="#2e2d30"
                />
                <path
                  d="M537.92 489c-1-.6-1.87-.24-1.87.79a3.88 3.88 0 001.87 2.95c1 .6 1.88.24 1.88-.79a3.89 3.89 0 00-1.88-2.95z"
                  fill="#1b1b1f"
                />
                <path
                  d="M537.92 489.49c-.76-.43-1.38-.17-1.38.59a2.86 2.86 0 001.38 2.17c.76.43 1.38.17 1.38-.59a2.86 2.86 0 00-1.38-2.17z"
                  fill="#3b3b3b"
                />
                <path
                  d="M538 489.59c-.67-.38-1.22-.15-1.22.52A2.54 2.54 0 00538 492c.67.38 1.22.15 1.22-.52a2.54 2.54 0 00-1.22-1.89z"
                  fill="#cecece"
                />
                <path
                  d="M539 491.22a2.21 2.21 0 00-1-1.45c-.56-.3-1-.1-1 .46a2.16 2.16 0 001 1.64c.57.33 1 .13 1-.44a1.23 1.23 0 000-.21z"
                  fill="#7c7774"
                />
                <path
                  d="M538 489.77c-.21 0-.34.15-.34.41a1.45 1.45 0 00.73 1.14c.31.19.57.14.67-.08a2.21 2.21 0 00-1.06-1.47z"
                  fill="#cecece"
                />
              </g>
              <g fill="#2d383e">
                <path d="M542.58 490.08l-2.58-3.84h.2l2.58 3.84h-.2zM541.89 485.14l-1.89 1.1h.2l1.87-1.1h-.18z" />
              </g>
              <path
                fill="#6d777a"
                d="M544.67 488.97l-1.89 1.11-2.58-3.84 1.89-1.11 2.58 3.84z"
              />
              <g fillRule="evenodd">
                <path
                  d="M546.59 490.05c-1.15-.66-1.91.19-1.91 1.33s1.25 2.35 2.39 3 1.59.07 1.59-1.07a4.32 4.32 0 00-2.07-3.26z"
                  fill="#010007"
                />
                <path
                  fill="#010007"
                  d="M543.82 490.86l1.39-.83-.14.89-1.25-.06zM546.95 495.38l1.3-.8-1.13-1.03-.11 1.29-.06.54z"
                />
                <path
                  d="M545.35 491.07c-1.14-.66-2.08-.27-2.08.88a4.29 4.29 0 002.08 3.26c1.14.66 2.07.27 2.07-.88a4.28 4.28 0 00-2.07-3.26z"
                  fill="#2e2d30"
                />
                <path
                  d="M545.35 491.27c-1-.6-1.88-.24-1.88.79a3.89 3.89 0 001.88 2.95c1 .6 1.87.24 1.87-.79a3.88 3.88 0 00-1.87-2.95z"
                  fill="#1b1b1f"
                />
                <path
                  d="M545.35 491.76c-.76-.43-1.38-.17-1.38.59a2.86 2.86 0 001.38 2.17c.76.43 1.38.17 1.38-.59a2.86 2.86 0 00-1.38-2.17z"
                  fill="#3b3b3b"
                />
                <path
                  d="M545.41 491.86c-.67-.38-1.22-.15-1.22.52a2.54 2.54 0 001.22 1.92c.66.38 1.21.15 1.21-.52a2.56 2.56 0 00-1.21-1.92z"
                  fill="#cecece"
                />
                <path
                  d="M546.42 493.49a2.14 2.14 0 00-1-1.45c-.56-.3-1-.1-1 .46a2.16 2.16 0 001 1.64c.58.33 1 .13 1-.44a.62.62 0 000-.21z"
                  fill="#7c7774"
                />
                <path
                  d="M545.4 492c-.21 0-.35.15-.35.41a1.47 1.47 0 00.73 1.14c.31.19.58.14.67-.08a2.14 2.14 0 00-1.05-1.47z"
                  fill="#cecece"
                />
              </g>
              <g fill="#434b4c">
                <path d="M542.24 490.98l1.21-1.84.18.2-1.21 1.84-.18-.2z" />
                <path d="M545.35 488.04l-1.9 1.1.18.2 1.88-1.1-.16-.2z" />
              </g>
              <path
                fill="#2d383e"
                d="M544.31 490.06l-1.89 1.12 1.21-1.84 1.89-1.11-1.21 1.83z"
              />
              <path
                d="M544.38 479v14c0 .17.25.31.55.31s.56-.15.56-.32V479z"
                fill="url(#expeditedbackground__\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_14-5)"
              />
              <g fillRule="evenodd">
                <path
                  d="M544 491.62c-1.15-.66-1.9.19-1.9 1.33s1.24 2.35 2.38 3 1.59.07 1.59-1.07a4.32 4.32 0 00-2.07-3.26z"
                  fill="#010007"
                />
                <path
                  fill="#010007"
                  d="M541.23 492.43l1.39-.83-.14.89-1.25-.06zM544.36 496.95l1.3-.81-1.13-1.02-.11 1.29-.06.54z"
                />
                <path
                  d="M542.76 492.64c-1.14-.66-2.07-.27-2.07.88a4.28 4.28 0 002.07 3.26c1.14.66 2.07.27 2.07-.88a4.28 4.28 0 00-2.07-3.26z"
                  fill="#2e2d30"
                />
                <path
                  d="M542.76 492.84c-1-.6-1.87-.24-1.87.79a3.88 3.88 0 001.87 2.95c1 .6 1.87.24 1.87-.79a3.88 3.88 0 00-1.87-2.95z"
                  fill="#1b1b1f"
                />
                <path
                  d="M542.76 493.33c-.76-.43-1.38-.17-1.38.59a2.86 2.86 0 001.38 2.17c.76.43 1.38.17 1.38-.59a2.86 2.86 0 00-1.38-2.17z"
                  fill="#3b3b3b"
                />
                <path
                  d="M542.82 493.43c-.67-.38-1.22-.15-1.22.52a2.54 2.54 0 001.22 1.92c.67.38 1.21.15 1.21-.52a2.53 2.53 0 00-1.21-1.92z"
                  fill="#cecece"
                />
                <path
                  d="M543.83 495.06a2.14 2.14 0 00-1-1.45c-.56-.3-1-.1-1 .46a2.16 2.16 0 001 1.64c.58.33 1.05.13 1.05-.44a.63.63 0 00-.05-.21z"
                  fill="#7c7774"
                />
                <path
                  d="M542.81 493.61c-.21 0-.35.15-.35.41a1.47 1.47 0 00.73 1.14c.32.19.58.14.67-.08a2.14 2.14 0 00-1.05-1.47z"
                  fill="#cecece"
                />
              </g>
              <g fill="#2d383e">
                <path d="M547.41 493.92l-2.58-3.84h.2l2.58 3.84h-.2zM546.73 488.98l-1.9 1.1h.2l1.88-1.1h-.18z" />
              </g>
              <path
                fill="#6d777a"
                d="M549.51 492.81l-1.89 1.11-2.59-3.84 1.9-1.11 2.58 3.84z"
              />
              <g fillRule="evenodd">
                <path
                  d="M551.42 493.89c-1.14-.66-1.9.19-1.9 1.33s1.24 2.35 2.39 3 1.59.07 1.59-1.07a4.3 4.3 0 00-2.08-3.26z"
                  fill="#010007"
                />
                <path
                  fill="#010007"
                  d="M548.66 494.7l1.38-.83-.14.89-1.24-.06zM551.79 499.22l1.3-.8-1.13-1.03-.11 1.29-.06.54z"
                />
                <path
                  d="M550.19 494.91c-1.15-.66-2.08-.27-2.08.88a4.27 4.27 0 002.08 3.26c1.14.66 2.07.27 2.07-.88a4.28 4.28 0 00-2.07-3.26z"
                  fill="#2e2d30"
                />
                <path
                  d="M550.19 495.11c-1-.6-1.88-.24-1.88.79a3.87 3.87 0 001.88 3c1 .6 1.87.24 1.87-.79a3.88 3.88 0 00-1.87-3z"
                  fill="#1b1b1f"
                />
                <path
                  d="M550.19 495.6c-.76-.43-1.38-.17-1.38.59a2.86 2.86 0 001.38 2.17c.75.43 1.37.17 1.37-.59a2.87 2.87 0 00-1.37-2.17z"
                  fill="#3b3b3b"
                />
                <path
                  d="M550.24 495.7c-.67-.38-1.21-.15-1.21.52a2.53 2.53 0 001.21 1.92c.67.38 1.22.15 1.22-.52a2.54 2.54 0 00-1.22-1.92z"
                  fill="#cecece"
                />
                <path
                  d="M551.26 497.33a2.17 2.17 0 00-1-1.45c-.55-.3-1-.1-1 .46a2.16 2.16 0 001 1.64c.58.33 1 .13 1-.44a1.23 1.23 0 000-.21z"
                  fill="#7c7774"
                />
                <path
                  d="M550.24 495.88c-.2 0-.34.15-.34.41a1.47 1.47 0 00.73 1.14c.31.19.58.14.67-.08a2.17 2.17 0 00-1.06-1.47z"
                  fill="#cecece"
                />
              </g>
              <g fill="#434b4c">
                <path d="M547.08 494.82l1.21-1.84.18.2-1.22 1.84-.17-.2z" />
                <path d="M550.18 491.88l-1.89 1.1.18.2 1.87-1.11-.16-.19z" />
              </g>
              <path
                fill="#2d383e"
                d="M549.15 493.9l-1.9 1.12 1.22-1.84 1.89-1.12-1.21 1.84z"
              />
              <path
                d="M549.22 482.83v14c0 .17.25.31.56.31s.56-.15.56-.32v-14z"
                fill="url(#expeditedbackground__\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_14-6)"
              />
              <g fillRule="evenodd">
                <path
                  d="M548.84 495.46c-1.15-.66-1.91.19-1.91 1.33s1.25 2.35 2.39 3 1.59.07 1.59-1.07a4.32 4.32 0 00-2.07-3.26z"
                  fill="#010007"
                />
                <path
                  fill="#010007"
                  d="M546.07 496.27l1.39-.83-.14.89-1.25-.06zM549.2 500.79l1.3-.8-1.13-1.03-.11 1.29-.06.54z"
                />
                <path
                  d="M547.6 496.48c-1.15-.66-2.08-.27-2.08.88a4.27 4.27 0 002.08 3.26c1.14.66 2.07.27 2.07-.88a4.28 4.28 0 00-2.07-3.26z"
                  fill="#2e2d30"
                />
                <path
                  d="M547.6 496.68c-1-.6-1.88-.24-1.88.79a3.89 3.89 0 001.88 2.95c1 .6 1.87.24 1.87-.79a3.88 3.88 0 00-1.87-2.95z"
                  fill="#1b1b1f"
                />
                <path
                  d="M547.6 497.17c-.76-.43-1.38-.17-1.38.59a2.86 2.86 0 001.38 2.17c.76.43 1.37.17 1.37-.59a2.85 2.85 0 00-1.37-2.17z"
                  fill="#3b3b3b"
                />
                <path
                  d="M547.65 497.27c-.66-.38-1.21-.15-1.21.52a2.56 2.56 0 001.21 1.92c.67.38 1.22.15 1.22-.52a2.54 2.54 0 00-1.22-1.92z"
                  fill="#cecece"
                />
                <path
                  d="M548.67 498.9a2.17 2.17 0 00-1-1.45c-.55-.3-1-.1-1 .46a2.16 2.16 0 001 1.64c.58.33 1 .13 1-.44a.62.62 0 000-.21z"
                  fill="#7c7774"
                />
                <path
                  d="M547.65 497.45c-.2 0-.34.15-.34.41A1.47 1.47 0 00548 499c.31.19.58.14.67-.08a2.17 2.17 0 00-1.02-1.47z"
                  fill="#cecece"
                />
              </g>
              <g fill="#2d383e">
                <path d="M552.25 497.76l-2.58-3.84h.2l2.58 3.84h-.2zM551.56 492.82l-1.89 1.1h.2l1.88-1.1h-.19z" />
              </g>
              <path
                fill="#6d777a"
                d="M554.34 496.65l-1.89 1.11-2.58-3.84 1.89-1.11 2.58 3.84z"
              />
              <path
                d="M505.9 489.27l-4.07 8.43-1.83 3.82-2 4.23c-.51.29-13.55-10.36-14.83-12.46-.17-.29-.47-.52-.5-1l-.36-5.73v-.1a3.89 3.89 0 011.09-2.69 3.12 3.12 0 01.71-.57l4.37-2.53a1.26 1.26 0 011.32-.1c.28.21 16.1 8.7 16.1 8.7z"
                fill="#d1d1d1"
              />
              <path
                d="M502.3 495.17l-.47 2.53-1.83 3.82-2 4.23c-.51.29-13.55-10.36-14.83-12.46-.17-.29-.47-.52-.5-1l-.36-5.73v-.1a3.89 3.89 0 011.09-2.69c5.14 2.93 18.9 11.4 18.9 11.4z"
                fill="#9da5a8"
              />
              <path
                d="M500.7 497.67l-.71 3.85-2 4.23c-.3.17-4.93-3.44-9-6.88a44.83 44.83 0 01-5.86-5.58 3.93 3.93 0 01-.44-.71 1.33 1.33 0 01-.06-.3l-.36-5.73c1.34.75 3.14 1.81 5.09 3l5 3c4.41 2.68 8.34 5.12 8.34 5.12z"
                fill="#434b4c"
              />
              <path
                d="M500 500l-2 4.23c-.51.29-13.55-10.36-14.83-12.46-.17-.29-.47-.52-.5-1l-.26-4.11-.1-.06.36 5.73c0 .49.33.72.5 1 1.28 2.1 14.32 12.75 14.83 12.46l2-4.23.71-3.85-.26-.16z"
                fill="#2d383e"
              />
              <path
                d="M499.44 505.51l4.64-2.68a5.12 5.12 0 002.3-3.79l.47-8c.09-1.58-1-2.27-2.31-1.5l-5.54 3.23a5 5 0 00-2.3 4.16l.46 7.45c.06 1.33 1.06 1.83 2.28 1.13z"
                fill="#677174"
              />
              <path
                d="M500.11 503.41l3.42-2a3.83 3.83 0 001.7-2.8l.34-5.89c.07-1.17-.71-1.67-1.7-1.1l-4.11 2.38a3.71 3.71 0 00-1.69 3.06l.34 5.5c.06 1 .8 1.37 1.7.85z"
                fill="#2e2e30"
              />
              <path
                d="M503.87 491.65l-.49.28-.32 5.52a3.75 3.75 0 01-1.7 2.79l-3 1.73v.61c.06 1 .8 1.35 1.7.83l3.42-2a3.83 3.83 0 001.7-2.8l.34-5.89c.12-1.14-.66-1.64-1.65-1.07z"
                fill="#2d383e"
              />
              <path
                d="M504.58 488.56l-12.25 4h-.05L488.6 497l.39 1.89a44.83 44.83 0 01-5.86-5.58 3.93 3.93 0 01-.44-.71l4.67-3.05 8.58-5.62z"
                style={{
                  mixBlendMode: "multiply",
                }}
                fill="#5e5e5e"
              />
              <path
                d="M589.59 448l-4.06 8.43-1.84 3.83-2 4.22c-.51.29-13.55-10.35-14.83-12.46-.17-.29-.47-.52-.5-1l-.36-5.72v-.1a3.91 3.91 0 011.1-2.68 2.78 2.78 0 01.71-.58l4.37-2.52a1.26 1.26 0 011.32-.11c.28.22 16.09 8.69 16.09 8.69z"
                fill="#d1d1d1"
              />
              <path
                d="M586 453.92l-.47 2.53-1.84 3.83-2 4.22c-.51.29-13.55-10.35-14.83-12.46-.17-.29-.47-.52-.5-1l-.36-5.74v-.1a3.91 3.91 0 011.1-2.68c5.14 2.93 18.9 11.4 18.9 11.4z"
                fill="#687074"
              />
              <path
                d="M584.4 456.42l-.71 3.86-2 4.22c-.51.29-13.55-10.35-14.83-12.46-.17-.29-.47-.52-.5-1l-.36-5.74c5.36 3.04 18.4 11.12 18.4 11.12z"
                fill="#434b4c"
              />
              <path
                d="M583.69 458.72l-2 4.22c-.51.3-13.55-10.35-14.83-12.46-.17-.29-.47-.52-.5-1l-.26-4.11-.1-.06.36 5.73c0 .49.33.72.5 1 1.28 2.11 14.32 12.75 14.83 12.46l2-4.22.71-3.86-.26-.16z"
                fill="#2d383e"
              />
              <path
                d="M583.13 464.26l4.65-2.68a5.14 5.14 0 002.3-3.79l.46-8c.1-1.58-1-2.27-2.3-1.5l-5.57 3.22a5 5 0 00-2.3 4.16l.46 7.45c.09 1.35 1.09 1.88 2.3 1.14z"
                fill="#677174"
              />
              <path
                d="M583.8 462.17l3.43-2a3.79 3.79 0 001.69-2.8l.35-5.88c.07-1.17-.71-1.68-1.7-1.11l-4.11 2.37a3.75 3.75 0 00-1.7 3.07l.35 5.49c.06 1.01.8 1.37 1.69.86z"
                fill="#2e2e30"
              />
              <path
                d="M587.57 450.4l-.49.28-.32 5.52a3.83 3.83 0 01-1.7 2.8l-3 1.72v.61c.06 1 .8 1.35 1.69.84l3.43-2a3.79 3.79 0 001.69-2.8l.35-5.88c.12-1.15-.66-1.66-1.65-1.09z"
                fill="#2d383e"
              />
              <path
                d="M611.3 427.78l-4.06 8.43-1.84 3.79-2 4.23c-.51.29-13.55-10.36-14.83-12.46-.17-.29-.47-.52-.5-1l-.36-5.73V425a3.91 3.91 0 011.1-2.68 2.59 2.59 0 01.71-.58l4.37-2.52a1.24 1.24 0 011.32-.11c.28.18 16.09 8.67 16.09 8.67z"
                fill="#d1d1d1"
              />
              <path
                d="M607.71 433.68l-.47 2.53-1.84 3.79-2 4.23c-.51.29-13.55-10.36-14.83-12.46-.17-.29-.47-.52-.5-1l-.36-5.73V425a3.91 3.91 0 011.1-2.68c5.19 2.89 18.9 11.36 18.9 11.36z"
                fill="#9da5a8"
              />
              <path
                d="M606.11 436.18l-.71 3.82-2 4.23c-.51.29-13.55-10.36-14.83-12.46-.17-.29-.47-.52-.5-1l-.36-5.73c5.36 3.06 18.4 11.14 18.4 11.14z"
                fill="#434b4c"
              />
              <path
                d="M605 438.2l-2 4.22c-.51.3-13.55-10.35-14.83-12.46a2 2 0 01-.5-1l-.26-4.12h-.1l.36 5.73a2 2 0 00.5 1c1.28 2.11 14.32 12.76 14.83 12.46l2-4.22.71-3.86-.26-.16z"
                fill="#2d383e"
              />
              <path
                d="M604.84 444l4.65-2.68a5.15 5.15 0 002.3-3.79l.46-8c.1-1.58-1-2.27-2.3-1.5l-5.57 3.22a5 5 0 00-2.31 4.16l.47 7.45c.09 1.37 1.09 1.86 2.3 1.14z"
                fill="#677174"
              />
              <path
                d="M605.51 441.92l3.43-2a3.79 3.79 0 001.69-2.8l.35-5.89c.07-1.16-.71-1.67-1.7-1.1l-4.11 2.37a3.73 3.73 0 00-1.7 3.07l.35 5.49c.06 1.01.8 1.38 1.69.86z"
                fill="#2e2e30"
              />
              <path
                d="M609.28 430.16l-.49.28-.32 5.52a3.79 3.79 0 01-1.7 2.79l-3 1.73v.61c.06 1 .8 1.35 1.69.83l3.43-2a3.79 3.79 0 001.69-2.8l.35-5.89c.12-1.13-.66-1.64-1.65-1.07z"
                fill="#2d383e"
              />
              <path
                d="M607 425.48l-8.66 6.23h-.05l-3.68 4.43.39 1.89a44.16 44.16 0 01-5.86-5.58 3.06 3.06 0 01-.44-.71l4.66-3.05 9.2-5.62z"
                style={{
                  mixBlendMode: "multiply",
                }}
                fill="#5e5e5e"
              />
              <path
                fill="#9da5a8"
                d="M507.14 384.58l-20.91 22.23-14.07-8.12 34.98-15.82v1.71z"
              />
              <path
                fill="#a9a9a9"
                d="M618.2 506.06l-7.41-13.58-10.12-10.86-50.99-32.18-46.95-22.56-24.87-6.37-1.39.72 26.4 24.36 28.83 20.31 70.75 40.95 11.33 6.78 3.04 4.05 3.03-2.29-1.65-9.33z"
              />
              <path
                fill="#6d777a"
                d="M480.18 424.31l12.08 22.19 26.54 22.01 67.61 39.14 14.21 4.8 11.4 1.33 3.34.22.72-.57-1.53-2.61-8.27-10.99-10.26-5.35-9.6-5.87-50.98-32.18-41.23-24.75-14.35-8.55.32 1.18z"
              />
              <path
                fill="#d1d1d1"
                d="M617.92 509.58l.48 2-3.49-.15-13.25-3.69-14.26-7.14-7.48-4.46-23.91-14.26-30.83-17.85-12.31-10.64-27.57-20.7-5.32-9.29-.08-.13-.47-1.78.14.06 19.74 8.51-5.86-5.72 9.28 2.54 46.95 22.56 48.81 30.8 2.17 1.38 10.13 10.86 4.31 7.91 3.1 5.67.37 2.11-.66 1.39.01.01v.01z"
              />
              <path
                fill="#4e5a5e"
                d="M618.01 516.78l.04.04-3.03 2.29-11.95-.25-14.86-5.02-3.39-1.96-2.5-1.44-64.86-37.55-25.22-21.41-15.19-24.83-.58-5.42 1.39-.71 1.17-1.46.54 2.49.41 1.85.2.91 12.08 22.19 26.54 22.01 60.86 35.23 2.36 1.37 4.39 2.54 14.2 4.8 11.41 1.33 3.34.22 3.04-2.42-.35-1.57-.13-.43v-.01l-.01-.01-2.81-9.17 3.1 5.67 1.65 9.33-1.84 1.39z"
              />
              <path
                fill="#434b4c"
                d="M619.85 515.39l-1.65-9.33-1.18-2.16 1.29 7.27.09.41-.02.02.19 1.07-1.83 1.39.03.04-3.02 2.29-11.96-.25-14.87-5.02-70.74-40.95-25.22-21.41-13.4-21.91-.24-4.85.54-1.48-1.39.71.58 5.42 15.19 24.83 25.22 21.41 70.75 40.95 14.86 5.02 11.95.25 3.03-2.29-.04-.04 1.84-1.39z"
              />
              <path
                fill="#9da5a8"
                d="M500.33 429.05l3.24.89 46.94 22.56 46.61 29.41 10.2 9.96 3.9 4.96 6.7 12.11.65-.77-.37-2.11-7.41-13.58-10.12-10.86-50.99-32.18-46.95-22.56-11.95-4.24 9.36 5.96.19.45z"
              />
              <path
                fill="#d1d1d1"
                d="M472.17 396.97l14.05 8.13 20.93-22.23-7.05-5.82-6.93 4.91-.27.2-16.53 11.81-.27.2-3.93 2.8z"
              />
              <path
                d="M476.1 394.17l5.8 2.83 13.1-13.91-1.83-1.09-.27.2-16.53 11.8zm.83-.24l16-11.4 1.15.68-12.31 13.07z"
                fill="#9da5a8"
              />
              <path
                fill="#c7c7c9"
                d="M460.35 383.79l20.14 10.83 4.76 3.68 16.76 30.35-2.7 1.41-16.03-8.9-17.09-27.52-3.86-6.8-2.61-2.64.63-.41z"
              />
              <path
                fill="#677174"
                d="M459.72 384.2l20.14 10.84 4.53 4.18 14.92 30.84-10.93-3.57-10.22-5.78-13.56-25.66-3.87-3.53-1.01-7.32z"
              />
              <path
                fill="#798488"
                d="M488.38 426.49l.32-5.78-8.84-20.12-2.37-4.61-17.77-11.78 20.14 10.84 4.53 4.18 14.92 30.84-10.93-3.57z"
              />
              <path
                fill="#434b4c"
                d="M464.6 395.05l4.95 2.81 9.97 20.74-1.36 2.11-13.56-25.66z"
              />
              <path
                style={{
                  mixBlendMode: "multiply",
                }}
                fill="#8b8b8b"
                d="M481.72 409.41l-5.63 7.39-5.28-9.99 10.91 2.6z"
              />
              <path
                fill="#9da5a8"
                d="M443.22 421.49l38.5-12.08v-1.71l-48.57 9.72 10.07 4.07z"
              />
              <path
                fill="#d1d1d1"
                d="M433.16 415.69l10.07 4.08 38.5-12.06-14.08-8.14-4.37 2.07-.35.15-20.39 9.53-.49.22-8.89 4.15z"
              />
              <path
                fill="#9da5a8"
                d="M614.37 511.4l.36-.27-.18-.31-9.64-11.2-5.9-4.97-9.71-6.51-50.99-32.18-34.69-20.39-15.8-7.68-7.92-4.62 5.4 9.42 27.57 20.7 12.31 10.64 30.83 17.85 31.38 18.73 14.27 7.13 12.71 3.66z"
              />
              <path
                style={{
                  mixBlendMode: "overlay",
                }}
                fill="#feb200"
                d="M570.76 462.74l-3.75.16-5.06 1.03-4.47 4.45-4.12 6.29-1.43 4.87v8.13l1.57 4.08 3.95 4.27 2.36 1.3-3.95-4.27-1.57-4.08v-8.13l1.43-4.87 4.12-6.29 4.48-4.46 4.86-.95 3.76-.15-2.18-1.38z"
              />
              <path
                fill="#4e5a5e"
                d="M525.13 437.62l-3.76.16-5.05 1.02-4.48 4.46-4.12 6.28-1.42 4.88-.22 3.26 1.78 8.95 3.95 4.26.8.24-3.95-4.27-1.78-8.94.21-3.27 1.42-4.87 4.12-6.29 4.48-4.46 4.86-.95 3.76-.15-.6-.31z"
              />
              <path
                fill="#434d4c"
                d="M558.16 491.3l1.84 6.21-23.76-10.01-21.32-10.68 5.48-7.38 24.41 13.8 13.35 8.06z"
              />
              <path
                fill="#939b9e"
                d="M558.58 491.54l-21.53-8.3-13.67-8.74 9.86 1.67 14.73 8.2 10.61 7.17z"
              />
              <path
                fill="#4e5a5e"
                d="M558.58 491.54l.71 3.59-23.05-9.74-21.32-10.67 3.96-3.1 18.98 11.75 20.72 8.17z"
              />
              <path
                fill="#3f362d"
                d="M614.73 499.71l-2.53-4.66-.98 1.78-5.99 3-2.72-.81-2.95.47.22 3.32 4.51 1.51 5.01.4 4.87-2.55.56-2.46z"
              />
              <path
                fill="#78726c"
                d="M610.45 497.6l.22.34 3 1.94h.79l-2.34-4.44-.88 1.63-.79.53z"
              />
              <path
                fill="#9da5a8"
                d="M601.8 506.16l-.71-.15 1.18-7.25.72.15-1.19 7.25z"
              />
              <path
                fill="#d1d1d1"
                d="M610.02 504.72h-.73l-4.26-4.98.28-.53 4.71 5.51zM614.27 502.25l-.48.48-3.05-5.74.48-.16 3.05 5.42z"
              />
              <path
                style={{
                  mixBlendMode: "multiply",
                }}
                fill="#ededed"
                d="M618.01 516.78l.04.04-3.03 2.29-11.95-.25-14.86-5.02-3.39-1.96-2.5-1.44-1.09-1.19-1.57-4.08v-8.13l.26-.9 1.16-3.97 4.13-6.28 4.47-4.46 5.05-1.02 3.76-.17 2.17 1.38 10.13 10.86 4.31 7.91 3.1 5.67 1.65 9.33-1.84 1.39z"
              />
              <path
                style={{
                  mixBlendMode: "multiply",
                }}
                fill="#5e5e5e"
                d="M552.51 472.06l-4.87 4.97-5.49 4.1-5.72 1.36-1.78 2.11v2.1l-13.98-6.99 23.9-12.38 7.94 4.73z"
              />
              <g>
                <path
                  d="M532.89 480l-4.07 8.43-1.82 3.82-2 4.22c-.5.29-13.55-10.36-14.82-12.46a2 2 0 01-.51-1l-.35-5.73v-.1a3.89 3.89 0 011.09-2.68 3.17 3.17 0 01.71-.58l4.37-2.52a1.24 1.24 0 011.32-.11c.26.21 16.08 8.71 16.08 8.71z"
                  fill="#d1d1d1"
                />
                <path
                  d="M529.29 485.89l-.47 2.53-1.82 3.83-2 4.22c-.5.29-13.55-10.36-14.82-12.46a2 2 0 01-.51-1l-.35-5.73v-.1a3.89 3.89 0 011.09-2.68c5.13 2.92 18.88 11.39 18.88 11.39z"
                  fill="#9da5a8"
                />
                <path
                  d="M527.69 488.39l-.71 3.86-2 4.22c-.5.29-13.55-10.36-14.82-12.46a2 2 0 01-.51-1l-.35-5.73c5.35 3.03 18.39 11.11 18.39 11.11z"
                  fill="#434b4c"
                />
                <path
                  d="M526.78 490.52l-2 4.22c-.51.3-13.55-10.35-14.83-12.46a1.93 1.93 0 01-.5-1l-.26-4.11-.1-.06.36 5.73a1.93 1.93 0 00.5 1c1.28 2.11 14.32 12.75 14.83 12.46l2-4.22.72-3.86-.26-.16z"
                  fill="#2d383e"
                />
                <path
                  d="M526.43 496.23l4.64-2.68a5.11 5.11 0 002.3-3.79l.47-8c.09-1.58-1-2.27-2.3-1.5l-5.54 3.23a5 5 0 00-2.3 4.16l.47 7.45c.04 1.34 1.05 1.83 2.26 1.13z"
                  fill="#677174"
                />
                <path
                  d="M527.1 494.14l3.42-2a3.77 3.77 0 001.7-2.8l.34-5.89c.07-1.16-.71-1.67-1.69-1.1l-4.11 2.37a3.7 3.7 0 00-1.7 3.07l.34 5.49c.06 1.01.81 1.37 1.7.86z"
                  fill="#2e2e30"
                />
                <path
                  d="M530.87 482.37l-.5.28-.32 5.52a3.73 3.73 0 01-1.7 2.79l-3 1.73v.61c.06 1 .81 1.35 1.7.84l3.42-2a3.77 3.77 0 001.7-2.8l.34-5.89c.12-1.14-.66-1.65-1.64-1.08z"
                  fill="#2d383e"
                />
              </g>
              <path
                d="M532 479.66l-12.25 4h-.05l-3.7 4.42.39 1.89a44.15 44.15 0 01-5.86-5.58 3.83 3.83 0 01-.44-.7l4.67-3.06 8.58-5.61z"
                style={{
                  mixBlendMode: "multiply",
                }}
                fill="#5e5e5e"
              />
              <path
                fill="#677174"
                d="M446.55 506.44l105.96-34.38 3.06-5.21-125.63 30.5v1.78l16.61 7.31zM628.44 401.83l-59.55 60.1-3.61-.11 63.16-61.77v1.78z"
              />
              <path
                fill="#eaeaea"
                d="M446.35 504.66l105.74-35.63-30.6-17.66-91.55 45.98 16.41 7.31zM628.44 400.05l-61.41 60.84-30.6-17.66 79.26-52.6 12.75 9.42z"
              />
              <path
                fill="#d1d1d1"
                d="M552.09 469.03l14.94-8.14-30.6-17.66-14.94 8.14 30.6 17.66z"
              />
              <path
                fill="#252525"
                d="M618.32 506.48l-1.47.32-3.88 2.18-1.8 1.5-1.52 3.03v2.79l1.05 2.72 4.32.09 3.18-1.04 2.4-3.63-1.4-4.8-.88-3.16z"
              />
              <path
                fill="#4e5a5e"
                d="M433.15 415.7v1.72l10.07 4.07v-1.72l-10.07-4.07z"
              />
              <path
                style={{
                  mixBlendMode: "overlay",
                }}
                fill="#feb200"
                d="M554.29 488.65l-2.09.34-.94 1.07-.24 1.57 1.14 2.58-1.53-.64-1.63-2.79.11-1.26.94-1.34 1.88-1.13 2.36 1.6z"
              />
              <path
                fill="#d1d1d1"
                d="M429.94 497.35l16.41 5.72 105.73-35.62 12.53-6.56 61.42-60.85-10.34-9.41-26.09 17.3-.25.17-42.08 27.96-.27.17-10.57 7-14.93 8.13-6.98 3.52-.29.14-48.37 24.3-.32.17-35.6 17.86z"
              />
              <path
                d="M565.29 461.82l-11.39-6.95a152.46 152.46 0 00-15.9-8.46l-4.29-2-7.63 4.36 2.22 1.1a154 154 0 0119 11.24l8.45 5.86z"
                fill="#eaeaea"
              />
              <path
                fill="#d1d1d1"
                d="M485.25 398.3l-.86.92 14.92 30.84 4.4.83-1.7-2.24-16.76-30.35z"
              />
              <g id="expeditedbackground__fan1">
                <path
                  d="M606.79 422.86a2.25 2.25 0 012.2 2.44c.14 2.5-.7 10.13-.7 10.13l-1.5.86.37-3.65-.7-.67z"
                  fill="#020204"
                />
                <path
                  d="M615.43 421.36a6.25 6.25 0 01-.73 4.83c-1.49 2.8-6.49 10.05-6.49 10.05l-1.05-.6 2.38-3.51.16-1.42z"
                  fill="#1a1a1c"
                />
                <path
                  d="M619.39 428.55a9.43 9.43 0 01-3.23 4.39 82.75 82.75 0 01-8.47 4.09v-1.72l3-1.3.93-1.35z"
                  fill="#020204"
                />
                <path
                  d="M616.35 440.23s-2.15 2.11-3.84 1.38-5.49-4.27-5.49-4.27l1.06-1.83 1.85 1.66 1.16-.48z"
                  fill="#1a1a1c"
                />
                <path
                  d="M608.09 449.54a2.25 2.25 0 01-2.2-2.43c-.14-2.5.71-10.13.71-10.13l1.49-.87-.37 3.66.7.67z"
                  fill="#020204"
                />
                <path
                  d="M599.45 451.05a6.25 6.25 0 01.73-4.83c1.49-2.8 6.49-10.05 6.49-10.05l1.06.6-2.39 3.5-.16 1.43z"
                  fill="#1a1a1c"
                />
                <path
                  d="M595.49 443.85a9.43 9.43 0 013.23-4.39 84.29 84.29 0 018.47-4.08v1.72l-3 1.3-.93 1.34z"
                  fill="#020204"
                />
                <path
                  d="M598.53 432.18s2.15-2.11 3.84-1.38 5.49 4.27 5.49 4.27l-1.06 1.83-1.8-1.67-1.16.48z"
                  fill="#1a1a1c"
                />
                <path
                  d="M608.81 434a1.26 1.26 0 00-1.37.09 4.05 4.05 0 00-1.84 3.18 1.25 1.25 0 00.56 1.19 2.49 2.49 0 002.5.39 3.42 3.42 0 001.54-2.66 2.69 2.69 0 00-1.39-2.19z"
                  fill="#2e2e30"
                />
                <path
                  d="M608.09 434.15s-.84.3-.87.6.94.79 1.09 1.22a2.22 2.22 0 001 1.11c.31.07.63-.41.63-.41a3.14 3.14 0 00-.26-1.56c-.32-.61-1.03-1.11-1.59-.96z"
                  fill="#5f5f61"
                />
                <path
                  d="M606.81 438.43a4.33 4.33 0 01-1.18-.8 1.1 1.1 0 00.53.83 2.49 2.49 0 002.5.39 2.64 2.64 0 00.29-.21 3.3 3.3 0 01-2.14-.21z"
                  fill="#020204"
                />
                <path
                  d="M608.19 438.16c0 .69.49 1 1.09.62a2.38 2.38 0 001.1-1.88c0-.7-.49-1-1.1-.63a2.43 2.43 0 00-1.09 1.89z"
                  fill="#c7a430"
                />
                <path
                  d="M609.13 438.06c0 .33.23.47.53.3a1.17 1.17 0 00.52-.91c0-.33-.23-.47-.52-.3a1.15 1.15 0 00-.53.91z"
                  fill="#59595b"
                />
                <path
                  d="M615.68 433.24a12.2 12.2 0 00.15-1.88 8.77 8.77 0 000-.9l.81-.43a8.12 8.12 0 010 .86 14 14 0 01-.13 1.81l-.35.24a5 5 0 01-.48.3z"
                  fill="#c77906"
                />
                <path
                  d="M614.7 426.19c-.09.18-.2.38-.33.59a4 4 0 00-1.59-1.09l.59-1a4.26 4.26 0 011.55 1zM612.16 441.43a19.7 19.7 0 001.75-2.84l.55.37a22.51 22.51 0 01-1.67 2.74 1.52 1.52 0 01-.28-.09zM600.18 446.22c.09-.18.2-.38.33-.59a3.92 3.92 0 001.59 1.08l-.59 1a4.26 4.26 0 01-1.55-1zM602.72 431a20.36 20.36 0 00-1.75 2.85l-.55-.37a22.51 22.51 0 011.67-2.74 1.52 1.52 0 01.28.09z"
                  fill="#c7a430"
                />
                <path
                  d="M598.37 439.71l.35-.25.48-.29a12.1 12.1 0 00-.15 1.88 8.77 8.77 0 000 .9l-.81.43v-.87a13.87 13.87 0 01.13-1.8zM605.93 447.48v-.37-.54a10.4 10.4 0 001.56-.74q.4-.24.81-.51v.95c-.25.17-.51.34-.77.49a11.43 11.43 0 01-1.6.72zM609 424.92v.92a9.51 9.51 0 00-1.56.74 7.68 7.68 0 00-.8.51v-1c.25-.17.51-.33.77-.48a10.39 10.39 0 011.59-.69z"
                  fill="#c77906"
                />
              </g>
              <g id="expeditedbackground__fan2">
                <path
                  d="M585.08 443.11a2.25 2.25 0 012.2 2.43c.14 2.5-.7 10.13-.7 10.13l-1.5.87.37-3.66-.7-.67z"
                  fill="#020204"
                />
                <path
                  d="M593.72 441.6a6.25 6.25 0 01-.73 4.83c-1.49 2.8-6.49 10.05-6.49 10.05l-1-.6 2.38-3.5.12-1.38z"
                  fill="#1a1a1c"
                />
                <path
                  d="M597.68 448.8a9.43 9.43 0 01-3.23 4.39 84.29 84.29 0 01-8.47 4.08v-1.72l3-1.3.93-1.34z"
                  fill="#020204"
                />
                <path
                  d="M594.64 460.47s-2.15 2.11-3.84 1.38-5.49-4.27-5.49-4.27l1.06-1.83 1.85 1.66 1.16-.47z"
                  fill="#1a1a1c"
                />
                <path
                  d="M586.38 469.79a2.25 2.25 0 01-2.2-2.44c-.14-2.5.71-10.13.71-10.13l1.49-.86L586 460l.7.67z"
                  fill="#020204"
                />
                <path
                  d="M586 457l-2.39 3.51-.16 1.42-3.9 6.36-1.51-.95a8.64 8.64 0 01.41-.89c1.49-2.8 6.49-10 6.49-10z"
                  fill="#1a1a1c"
                />
                <path
                  d="M573.78 464.1a9.43 9.43 0 013.23-4.39 82.75 82.75 0 018.47-4.09v1.72l-3 1.3-.93 1.35z"
                  fill="#020204"
                />
                <path
                  d="M576.82 452.42s2.15-2.11 3.84-1.38 5.49 4.27 5.49 4.27l-1.06 1.83-1.85-1.66-1.16.48z"
                  fill="#1a1a1c"
                />
                <path
                  d="M587.1 454.24a1.28 1.28 0 00-1.37.09 4.05 4.05 0 00-1.84 3.18 1.24 1.24 0 00.56 1.19 2.49 2.49 0 002.5.39 3.39 3.39 0 001.54-2.66 2.69 2.69 0 00-1.39-2.19z"
                  fill="#2e2e30"
                />
                <path
                  d="M586.38 454.4s-.84.29-.87.6.94.78 1.09 1.21a2.22 2.22 0 001 1.11c.31.07.63-.41.63-.41a3.09 3.09 0 00-.26-1.55c-.32-.62-1.03-1.12-1.59-.96z"
                  fill="#5f5f61"
                />
                <path
                  d="M585.1 458.67a4.33 4.33 0 01-1.18-.8 1.1 1.1 0 00.53.83 2.49 2.49 0 002.5.39 1.94 1.94 0 00.29-.21 3.3 3.3 0 01-2.14-.21z"
                  fill="#020204"
                />
                <path
                  d="M586.48 458.4c0 .7.49 1 1.09.63a2.41 2.41 0 001.1-1.89c0-.69-.49-1-1.1-.62a2.4 2.4 0 00-1.09 1.88z"
                  fill="#c7a430"
                />
                <path
                  d="M587.42 458.3c0 .34.24.47.53.3a1.15 1.15 0 00.52-.91c0-.33-.23-.47-.52-.3a1.18 1.18 0 00-.53.91z"
                  fill="#59595b"
                />
                <path
                  d="M594 453.48a12.2 12.2 0 00.15-1.88 8.77 8.77 0 000-.9l.81-.43a8.19 8.19 0 010 .87 13.87 13.87 0 01-.13 1.8l-.35.25z"
                  fill="#c77906"
                />
                <path
                  d="M593 446.43c-.09.18-.2.38-.33.59a3.92 3.92 0 00-1.59-1.08l.59-1a4.26 4.26 0 011.55 1c-.08.19-.15.34-.22.49zM590.45 461.68a21.41 21.41 0 001.76-2.85l.54.37a22.51 22.51 0 01-1.67 2.74 1.52 1.52 0 01-.28-.09zM578.47 466.46c.09-.18.2-.38.33-.59a4.12 4.12 0 001.59 1.09l-.59 1a4.26 4.26 0 01-1.55-1c.07-.2.14-.35.22-.5zM581 451.22a19.7 19.7 0 00-1.75 2.84l-.55-.37a22.51 22.51 0 011.67-2.74 1.52 1.52 0 01.28.09z"
                  fill="#c7a430"
                />
                <path
                  d="M576.66 460c.11-.08.23-.17.35-.24a5 5 0 01.48-.3 12.2 12.2 0 00-.15 1.88 8.77 8.77 0 000 .9l-.81.43v-.86a14 14 0 01.13-1.81zM584.22 467.73v-.38-.54a10.4 10.4 0 001.56-.74 9 9 0 00.81-.51v1c-.25.17-.51.33-.77.48a11.54 11.54 0 01-1.6.69zM587.24 445.17v.91a10.4 10.4 0 00-1.56.74c-.27.16-.54.33-.8.51v-.95c.25-.17.51-.34.77-.49a11.43 11.43 0 011.59-.72z"
                  fill="#c77906"
                />
              </g>
              <g id="expeditedbackground__fan3">
                <path
                  d="M528.37 475.08s2.06-.07 2.2 2.43-.7 10.13-.7 10.13l-1.5.87.38-3.66-.71-.67z"
                  fill="#020204"
                />
                <path
                  d="M537 473.57a6.25 6.25 0 01-.73 4.83c-1.49 2.8-6.49 10.05-6.49 10.05l-1.06-.6 2.38-3.51.17-1.42z"
                  fill="#1a1a1c"
                />
                <path
                  d="M541 480.76a9.38 9.38 0 01-3.23 4.39 83.66 83.66 0 01-8.48 4.09v-1.72l3-1.3.94-1.34z"
                  fill="#020204"
                />
                <path
                  d="M537.94 492.44s-2.15 2.11-3.84 1.38-5.5-4.27-5.5-4.27l1.06-1.83 1.86 1.66 1.16-.48z"
                  fill="#1a1a1c"
                />
                <path
                  d="M529.68 501.75s-2.06.07-2.2-2.43.7-10.13.7-10.13l1.5-.87-.38 3.68.71.67z"
                  fill="#020204"
                />
                <path
                  d="M521 503.26a6.25 6.25 0 01.73-4.83c1.49-2.8 6.49-10.05 6.49-10.05l1.06.6-2.38 3.51-.17 1.42z"
                  fill="#1a1a1c"
                />
                <path
                  d="M517.07 496.07a9.47 9.47 0 013.23-4.39 83.66 83.66 0 018.48-4.09v1.72l-3 1.3-.94 1.34z"
                  fill="#020204"
                />
                <path
                  d="M520.11 484.39s2.15-2.11 3.84-1.38 5.5 4.27 5.5 4.27l-1.06 1.83-1.86-1.66-1.16.47z"
                  fill="#1a1a1c"
                />
                <path
                  d="M530.4 486.21a1.28 1.28 0 00-1.37.09 4.07 4.07 0 00-1.85 3.18 1.27 1.27 0 00.56 1.19 2.49 2.49 0 002.5.39 3.39 3.39 0 001.54-2.66 2.7 2.7 0 00-1.38-2.19z"
                  fill="#2e2e30"
                />
                <path
                  d="M529.68 486.37s-.85.29-.88.59.94.79 1.09 1.22a2.24 2.24 0 001.05 1.11c.3.07.62-.41.62-.41a3 3 0 00-.26-1.55c-.3-.62-1.07-1.12-1.62-.96z"
                  fill="#5f5f61"
                />
                <path
                  d="M528.4 490.64a4.19 4.19 0 01-1.19-.8 1.1 1.1 0 00.53.83 2.49 2.49 0 002.5.39 2.73 2.73 0 00.3-.21 3.3 3.3 0 01-2.14-.21z"
                  fill="#020204"
                />
                <path
                  d="M529.77 490.37c0 .7.49 1 1.1.63a2.43 2.43 0 001.09-1.89c0-.69-.49-1-1.09-.63a2.41 2.41 0 00-1.1 1.89z"
                  fill="#c7a430"
                />
                <path
                  d="M530.71 490.27c0 .33.24.47.53.3a1.16 1.16 0 00.53-.91c0-.33-.24-.47-.53-.3a1.18 1.18 0 00-.53.91z"
                  fill="#59595b"
                />
                <path
                  d="M537.27 485.45a13.55 13.55 0 00.14-1.88v-.9l.81-.43v.87a13.83 13.83 0 01-.12 1.8c-.12.08-.23.17-.35.24z"
                  fill="#c77906"
                />
                <path
                  d="M536.29 478.4l-.29.6a4.15 4.15 0 00-1.6-1.09l.6-1a4.43 4.43 0 011.55 1c-.11.19-.18.34-.26.49zM533.75 493.64a19.7 19.7 0 001.75-2.84l.55.37a22.59 22.59 0 01-1.68 2.74l-.27-.09zM521.76 498.43l.33-.59a4 4 0 001.6 1.08l-.6 1a4.43 4.43 0 01-1.55-1c.07-.19.14-.34.22-.49zM524.3 483.19a20.62 20.62 0 00-1.75 2.84l-.55-.37a22.59 22.59 0 011.68-2.74l.27.09z"
                  fill="#c7a430"
                />
                <path
                  d="M520 491.92c.12-.08.23-.17.35-.24l.48-.3a13.55 13.55 0 00-.14 1.88v.9l-.81.43v-.87a13.83 13.83 0 01.12-1.8zM527.52 499.7v-.38-.54A10.49 10.49 0 00529 498c.27-.16.54-.33.8-.51v1c-.26.18-.52.34-.77.49a12.18 12.18 0 01-1.51.72zM530.53 477.13v.92a10 10 0 00-1.56.74c-.28.15-.54.33-.81.51v-1l.78-.48a11.44 11.44 0 011.59-.69z"
                  fill="#c77906"
                />
              </g>
              <g id="expeditedbackground__fan4">
                <path
                  d="M501.38 484.35a2.25 2.25 0 012.2 2.44c.14 2.5-.7 10.13-.7 10.13l-1.5.86.37-3.65-.7-.67z"
                  fill="#020204"
                />
                <path
                  d="M510 482.85a6.21 6.21 0 01-.72 4.83c-1.49 2.79-6.49 10.05-6.49 10.05l-1.06-.61 2.38-3.5.17-1.42z"
                  fill="#1a1a1c"
                />
                <path
                  d="M514 490a9.52 9.52 0 01-3.23 4.39 83.66 83.66 0 01-8.48 4.09v-1.68l3-1.3.94-1.35z"
                  fill="#020204"
                />
                <path
                  d="M511 501.72s-2.15 2.11-3.84 1.38-5.5-4.28-5.5-4.28l1.06-1.82 1.86 1.66 1.15-.48z"
                  fill="#1a1a1c"
                />
                <path
                  d="M502.69 511a2.25 2.25 0 01-2.2-2.43c-.14-2.5.7-10.13.7-10.13l1.5-.87-.38 3.66.7.66z"
                  fill="#020204"
                />
                <path
                  d="M494 512.53a6.23 6.23 0 01.73-4.82c1.49-2.8 6.49-10 6.49-10l1.06.6-2.38 3.5-.17 1.43z"
                  fill="#1a1a1c"
                />
                <path
                  d="M490.08 505.34a9.43 9.43 0 013.23-4.39 83.09 83.09 0 018.47-4.08v1.72l-3 1.3-.94 1.34z"
                  fill="#020204"
                />
                <path
                  d="M493.12 493.67s2.15-2.12 3.84-1.38 5.49 4.27 5.49 4.27l-1.05 1.83-1.86-1.67-1.16.48z"
                  fill="#1a1a1c"
                />
                <path
                  d="M503.4 495.49a1.24 1.24 0 00-1.37.09 4.08 4.08 0 00-1.84 3.18 1.27 1.27 0 00.56 1.19 2.47 2.47 0 002.5.38 3.39 3.39 0 001.54-2.65 2.69 2.69 0 00-1.39-2.19z"
                  fill="#2e2e30"
                />
                <path
                  d="M502.69 495.64s-.85.3-.88.6.94.79 1.09 1.22a2.26 2.26 0 001 1.11c.31.07.63-.41.63-.41a3.14 3.14 0 00-.26-1.56c-.27-.6-1.03-1.11-1.58-.96z"
                  fill="#5f5f61"
                />
                <path
                  d="M501.4 499.92a4.2 4.2 0 01-1.18-.81 1.1 1.1 0 00.53.84 2.47 2.47 0 002.5.38 1.37 1.37 0 00.29-.2 3.3 3.3 0 01-2.14-.21z"
                  fill="#020204"
                />
                <path
                  d="M502.78 499.65c0 .69.49 1 1.1.62a2.41 2.41 0 001.09-1.88c0-.7-.49-1-1.09-.63a2.41 2.41 0 00-1.1 1.89z"
                  fill="#c7a430"
                />
                <path
                  d="M503.72 499.55c0 .33.24.47.53.3a1.18 1.18 0 00.53-.91c0-.33-.24-.47-.53-.3a1.16 1.16 0 00-.53.91z"
                  fill="#59595b"
                />
                <path
                  d="M510.28 494.73a13.55 13.55 0 00.14-1.88 8.77 8.77 0 000-.9l.82-.43v.86a13.83 13.83 0 01-.12 1.8l-.35.25z"
                  fill="#c77906"
                />
                <path
                  d="M509.3 487.68l-.33.59a4 4 0 00-1.6-1.09l.6-1a4.18 4.18 0 011.54 1c-.06.2-.13.35-.21.5zM506.76 502.92a21.64 21.64 0 001.75-2.84l.55.37a22.59 22.59 0 01-1.68 2.74l-.27-.09zM494.77 507.71l.33-.59a4 4 0 001.6 1.08l-.6 1a4.57 4.57 0 01-1.55-1zM497.31 492.46a19.8 19.8 0 00-1.75 2.85l-.55-.37a21.77 21.77 0 011.67-2.74 1.31 1.31 0 01.28.09z"
                  fill="#c7a430"
                />
                <path
                  d="M493 501.2c.11-.09.23-.17.35-.25l.48-.29a12 12 0 00-.15 1.88v.9l-.81.43V503a13.83 13.83 0 01.13-1.8zM500.53 509a2.21 2.21 0 010-.37v-.55a9.06 9.06 0 001.56-.73q.41-.24.81-.51v.95c-.25.17-.51.33-.77.48a10.3 10.3 0 01-1.6.73zM503.54 486.41v.92a9.59 9.59 0 00-1.57.74c-.27.15-.54.32-.8.5v-.95c.26-.17.51-.33.77-.48a10.91 10.91 0 011.6-.73z"
                  fill="#c77906"
                />
              </g>
              <path
                d="M442.05 411.54l2.75.42 24.2-7.59-5.67-2.73-.35.15-20.39 9.53zm1.5-.37l19.38-9.06 4.45 2.16-22.63 7.1zM465.54 479.49l4.64 2.26 52.87-21.42.54-.25-9.07-5.21-.29.15-48.37 24.3zm1-.17l47.68-23.95 8.06 4.64-52.06 21.1zM547 436.23l8.89 5.13 37.54-30.85-3.83-2.58-.25.17-42.08 28zm.81-.2l41.54-27.56 3.12 2.09-36.65 30.09z"
                fill="#9da5a8"
              />
              <path
                d="M576.72 505.55l-6.41-3.71-.25-7.71v-.05l1.8-5.62 6.63 4-1.91 5.44zm-5.83-4.05l5.23 3-.11-6.74 1.78-5.08-5.59-3.36-1.55 4.86z"
                fill="#434b4c"
              />
              <path
                fill="#454545"
                d="M612.97 508.98l3.6 4.46 1.4 2.37 2.63-1.37-2.42-5.75-1.33-1.89-3.88 2.18z"
              />
              <path
                fill="#181818"
                d="M617.97 515.81l-.63.83-7.69-.34 1.05 2.72 4.32.09 3.18-1.04 2.4-3.63-2.63 1.37z"
              />
              <path
                fill="#cecece"
                d="M584.83 504.33l-3.88-2.23-.12-2.61 3.87 2.24.13 2.6z"
              />
              <path
                fill="#c7a430"
                d="M477.78 403.75l-5.72-3.25v-3.99l5.72 3.25v3.99z"
              />
            </motion.g>
          </g>
        </g>
      </g>
    </svg>
  );
}

export default SvgComponent;

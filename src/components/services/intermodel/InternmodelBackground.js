import React, {useEffect} from "react";
import {motion,useAnimation } from "framer-motion"

function SvgComponent(props) {
  const truckVariant = {
    start :{
      x:0,
      y:0,
      opacity:0,
    },
    showTruck:{
      x:0,
      y:0,
      opacity:1
    },
    drive:{
      x:410,
      y:240,
      opacity: 1,
      transition : {
        duration:5,
      }
    },
    hideAfterDrive : {
      x:410,
      y:240,
      opacity: 0,
      transition : {
        duration:0.1,
      }
    },
    moveToStart : {
      x:0,
      y:0,
      opacity:0
    }
  }
  const trainVariant = {
    start :{
      x:-807,
      y:-470,
      opacity:0
    },

    justAfterStart :{
      x:-807,
      y:-470,
      opacity:1,
      transition:{
        duration:0.1
      }
    }
,
    middle:{
       x:0,
       y:0,
       opacity:1,
       transition:{
         duration:5,
  
       } 
    },
    end:{
      x:1030,
      y:603,
      opacity:1,
      transition:{
        duration:5,

      }
    },
    justAfterEnd:{
      x:1030,
      y:603,
      opacity:0,
      transition:{
        duration:0.1,

      }
    },
    moveToStart:{
      x:-807,
      y:-470,
      opacity:0,
      transition:{
        duration:0.1
      }
    }
  }

  const containerVariant = {
    start : {
      x:0,y:0,opacity:1
    },

    placeOnTrain :{
      x:0,y:70,opacity:1,
      transition:{
        duration: 2,
      }
    },
    travelWithTrain :{
      x:1030,y:673,opacity:1,
      transition:{
        duration: 5,
      }
    },
    justAfterEnd:{
      x:1030,y:673,opacity:0,
      transition:{
        duration:0.1
      }
    },
    moveToStart:{
      x:0,y:0,opacity:0,
      transition:{
        duration:0.1
      }
    },
    justAfterStart:{
      x:0,y:0,opacity:1,
      transition:{
        duration:0.1
      }
    }
  }
  

  const trainControls = useAnimation();
  const containerControls = useAnimation();
  const truckControls = useAnimation();
  useEffect (()=>{
      
    const sequence = async ()=>{
      await Promise.all([trainControls.start(trainVariant.justAfterStart),containerControls.start(containerVariant.justAfterStart),truckControls.start(truckVariant.showTruck)])
     await Promise.all([trainControls.start(trainVariant.middle),truckControls.start(truckVariant.drive)])
     await containerControls.start(containerVariant.placeOnTrain)
     await Promise.all([trainControls.start(trainVariant.end),containerControls.start(containerVariant.travelWithTrain),truckControls.start(truckVariant.drive)])
     await Promise.all([trainControls.start(trainVariant.justAfterEnd),containerControls.start(containerVariant.justAfterEnd),truckControls.start(truckVariant.hideAfterDrive)])
     await Promise.all([trainControls.start(trainVariant.moveToStart),containerControls.start(containerVariant.moveToStart),truckControls.start(truckVariant.moveToStart)])
     
     await sequence();
     
    }
    sequence();
  })
  return (
    <svg
    width={"100%"}
 
      viewBox="0 0 1125 900"
      {...props}
    >
      <defs>
        <linearGradient
          id="prefix__linear-gradient"
          x1={-3076.37}
          y1={54.85}
          x2={-3067.52}
          y2={52.2}
          gradientTransform="matrix(-1 0 0 1 -3073.2 0)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#fff" />
          <stop offset={1} stopColor="#7e878e" />
        </linearGradient>
        <linearGradient
          id="prefix__linear-gradient-2"
          x1={-3092.18}
          y1={55.9}
          x2={-3008.96}
          y2={37.24}
          gradientTransform="matrix(-1 0 0 1 -3032.76 0)"
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-3"
          x1={-3044.82}
          y1={35.31}
          x2={-3050.33}
          y2={45.8}
          gradientTransform="matrix(-1 0 0 1 -3032.76 0)"
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-4"
          x1={-3086.11}
          y1={60.5}
          x2={-3077.26}
          y2={57.85}
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-5"
          x1={-3101.92}
          y1={61.54}
          x2={-3018.7}
          y2={42.89}
          gradientTransform="matrix(-1 0 0 1 -3032.76 0)"
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-6"
          x1={-3054.56}
          y1={40.95}
          x2={-3060.07}
          y2={51.45}
          gradientTransform="matrix(-1 0 0 1 -3032.76 0)"
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-7"
          x1={-3095.84}
          y1={66.14}
          x2={-3087}
          y2={63.49}
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-8"
          x1={-3111.66}
          y1={67.19}
          x2={-3028.44}
          y2={48.53}
          gradientTransform="matrix(-1 0 0 1 -3032.76 0)"
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-9"
          x1={-3064.3}
          y1={46.6}
          x2={-3069.81}
          y2={57.1}
          gradientTransform="matrix(-1 0 0 1 -3032.76 0)"
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-10"
          x1={-3105.58}
          y1={71.79}
          x2={-3096.73}
          y2={69.14}
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-11"
          x1={-3121.39}
          y1={72.84}
          x2={-3038.18}
          y2={54.18}
          gradientTransform="matrix(-1 0 0 1 -3032.76 0)"
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-12"
          x1={-3074.04}
          y1={52.24}
          x2={-3079.54}
          y2={62.74}
          gradientTransform="matrix(-1 0 0 1 -3032.76 0)"
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-13"
          x1={-3115.32}
          y1={77.43}
          x2={-3106.47}
          y2={74.79}
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-14"
          x1={-3131.13}
          y1={78.48}
          x2={-3047.91}
          y2={59.83}
          gradientTransform="matrix(-1 0 0 1 -3032.76 0)"
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-15"
          x1={-3083.77}
          y1={57.89}
          x2={-3089.28}
          y2={68.39}
          gradientTransform="matrix(-1 0 0 1 -3032.76 0)"
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-16"
          x1={-3125.05}
          y1={83.08}
          x2={-3116.21}
          y2={80.43}
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-17"
          x1={-3140.87}
          y1={84.13}
          x2={-3057.65}
          y2={65.47}
          gradientTransform="matrix(-1 0 0 1 -3032.76 0)"
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-18"
          x1={-3093.51}
          y1={63.53}
          x2={-3099.02}
          y2={74.03}
          gradientTransform="matrix(-1 0 0 1 -3032.76 0)"
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-19"
          x1={-3134.79}
          y1={88.72}
          x2={-3125.94}
          y2={86.08}
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-20"
          x1={-3150.61}
          y1={89.77}
          x2={-3067.39}
          y2={71.12}
          gradientTransform="matrix(-1 0 0 1 -3032.76 0)"
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-21"
          x1={-3103.25}
          y1={69.18}
          x2={-3108.76}
          y2={79.68}
          gradientTransform="matrix(-1 0 0 1 -3032.76 0)"
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-22"
          x1={-3144.53}
          y1={94.37}
          x2={-3135.68}
          y2={91.72}
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-23"
          x1={-3160.34}
          y1={95.42}
          x2={-3077.12}
          y2={76.76}
          gradientTransform="matrix(-1 0 0 1 -3032.76 0)"
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-24"
          x1={-3112.98}
          y1={74.82}
          x2={-3118.49}
          y2={85.32}
          gradientTransform="matrix(-1 0 0 1 -3032.76 0)"
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-25"
          x1={-3154.26}
          y1={100.02}
          x2={-3145.42}
          y2={97.37}
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-26"
          x1={-3170.08}
          y1={101.06}
          x2={-3086.86}
          y2={82.41}
          gradientTransform="matrix(-1 0 0 1 -3032.76 0)"
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-27"
          x1={-3122.72}
          y1={80.47}
          x2={-3128.23}
          y2={90.97}
          gradientTransform="matrix(-1 0 0 1 -3032.76 0)"
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-28"
          x1={-3164}
          y1={105.66}
          x2={-3155.16}
          y2={103.01}
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-29"
          x1={-3179.82}
          y1={106.71}
          x2={-3096.6}
          y2={88.05}
          gradientTransform="matrix(-1 0 0 1 -3032.76 0)"
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-30"
          x1={-3132.46}
          y1={86.11}
          x2={-3137.97}
          y2={96.61}
          gradientTransform="matrix(-1 0 0 1 -3032.76 0)"
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-31"
          x1={-3173.74}
          y1={111.31}
          x2={-3164.89}
          y2={108.66}
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-32"
          x1={-3189.55}
          y1={112.35}
          x2={-3106.33}
          y2={93.7}
          gradientTransform="matrix(-1 0 0 1 -3032.76 0)"
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-33"
          x1={-3142.19}
          y1={91.76}
          x2={-3147.7}
          y2={102.26}
          gradientTransform="matrix(-1 0 0 1 -3032.76 0)"
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-34"
          x1={-3183.48}
          y1={116.95}
          x2={-3174.63}
          y2={114.3}
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-35"
          x1={-3199.29}
          y1={118}
          x2={-3116.07}
          y2={99.34}
          gradientTransform="matrix(-1 0 0 1 -3032.76 0)"
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-36"
          x1={-3151.93}
          y1={97.4}
          x2={-3157.44}
          y2={107.9}
          gradientTransform="matrix(-1 0 0 1 -3032.76 0)"
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-37"
          x1={-3193.21}
          y1={122.6}
          x2={-3184.37}
          y2={119.95}
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-38"
          x1={-3209.03}
          y1={123.64}
          x2={-3125.81}
          y2={104.99}
          gradientTransform="matrix(-1 0 0 1 -3032.76 0)"
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-39"
          x1={-3161.67}
          y1={103.05}
          x2={-3167.18}
          y2={113.55}
          gradientTransform="matrix(-1 0 0 1 -3032.76 0)"
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-40"
          x1={-3202.95}
          y1={128.24}
          x2={-3194.1}
          y2={125.59}
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-41"
          x1={-3218.76}
          y1={129.29}
          x2={-3135.54}
          y2={110.63}
          gradientTransform="matrix(-1 0 0 1 -3032.76 0)"
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-42"
          x1={-3171.41}
          y1={108.69}
          x2={-3176.91}
          y2={119.19}
          gradientTransform="matrix(-1 0 0 1 -3032.76 0)"
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-43"
          x1={-3212.69}
          y1={133.89}
          x2={-3203.84}
          y2={131.24}
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-44"
          x1={-3228.5}
          y1={134.93}
          x2={-3145.28}
          y2={116.28}
          gradientTransform="matrix(-1 0 0 1 -3032.76 0)"
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-45"
          x1={-3181.14}
          y1={114.34}
          x2={-3186.65}
          y2={124.84}
          gradientTransform="matrix(-1 0 0 1 -3032.76 0)"
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-46"
          x1={-3222.42}
          y1={139.53}
          x2={-3213.58}
          y2={136.88}
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-47"
          x1={-3238.24}
          y1={140.58}
          x2={-3155.02}
          y2={121.92}
          gradientTransform="matrix(-1 0 0 1 -3032.76 0)"
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-48"
          x1={-3190.88}
          y1={119.98}
          x2={-3196.39}
          y2={130.48}
          gradientTransform="matrix(-1 0 0 1 -3032.76 0)"
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-49"
          x1={-3232.16}
          y1={145.18}
          x2={-3223.31}
          y2={142.53}
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-50"
          x1={-3247.98}
          y1={146.22}
          x2={-3164.76}
          y2={127.57}
          gradientTransform="matrix(-1 0 0 1 -3032.76 0)"
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-51"
          x1={-3200.62}
          y1={125.63}
          x2={-3206.13}
          y2={136.13}
          gradientTransform="matrix(-1 0 0 1 -3032.76 0)"
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-52"
          x1={-3241.9}
          y1={150.82}
          x2={-3233.05}
          y2={148.17}
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-53"
          x1={-3257.71}
          y1={151.87}
          x2={-3174.49}
          y2={133.21}
          gradientTransform="matrix(-1 0 0 1 -3032.76 0)"
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-54"
          x1={-3210.35}
          y1={131.27}
          x2={-3215.86}
          y2={141.77}
          gradientTransform="matrix(-1 0 0 1 -3032.76 0)"
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-55"
          x1={-3251.63}
          y1={156.47}
          x2={-3242.79}
          y2={153.82}
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-56"
          x1={-3267.45}
          y1={157.51}
          x2={-3184.23}
          y2={138.86}
          gradientTransform="matrix(-1 0 0 1 -3032.76 0)"
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-57"
          x1={-3220.09}
          y1={136.92}
          x2={-3225.6}
          y2={147.42}
          gradientTransform="matrix(-1 0 0 1 -3032.76 0)"
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-58"
          x1={-3261.37}
          y1={162.11}
          x2={-3252.53}
          y2={159.46}
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-59"
          x1={-3277.19}
          y1={163.16}
          x2={-3193.97}
          y2={144.5}
          gradientTransform="matrix(-1 0 0 1 -3032.76 0)"
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-60"
          x1={-3229.83}
          y1={142.57}
          x2={-3235.34}
          y2={153.06}
          gradientTransform="matrix(-1 0 0 1 -3032.76 0)"
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-61"
          x1={-3271.11}
          y1={167.76}
          x2={-3262.26}
          y2={165.11}
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-62"
          x1={-3286.92}
          y1={168.8}
          x2={-3203.7}
          y2={150.15}
          gradientTransform="matrix(-1 0 0 1 -3032.76 0)"
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-63"
          x1={-3239.56}
          y1={148.21}
          x2={-3245.07}
          y2={158.71}
          gradientTransform="matrix(-1 0 0 1 -3032.76 0)"
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-64"
          x1={-3280.85}
          y1={173.4}
          x2={-3272}
          y2={170.75}
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-65"
          x1={-3296.66}
          y1={174.45}
          x2={-3213.44}
          y2={155.79}
          gradientTransform="matrix(-1 0 0 1 -3032.76 0)"
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-66"
          x1={-3249.3}
          y1={153.86}
          x2={-3254.81}
          y2={164.36}
          gradientTransform="matrix(-1 0 0 1 -3032.76 0)"
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-67"
          x1={-3290.58}
          y1={179.05}
          x2={-3281.74}
          y2={176.4}
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-68"
          x1={-3306.4}
          y1={180.1}
          x2={-3223.18}
          y2={161.44}
          gradientTransform="matrix(-1 0 0 1 -3032.76 0)"
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-69"
          x1={-3259.04}
          y1={159.5}
          x2={-3264.55}
          y2={170}
          gradientTransform="matrix(-1 0 0 1 -3032.76 0)"
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-70"
          x1={-3300.32}
          y1={184.69}
          x2={-3291.47}
          y2={182.05}
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-71"
          x1={-3316.13}
          y1={185.74}
          x2={-3232.91}
          y2={167.09}
          gradientTransform="matrix(-1 0 0 1 -3032.76 0)"
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-72"
          x1={-3268.78}
          y1={165.15}
          x2={-3274.28}
          y2={175.65}
          gradientTransform="matrix(-1 0 0 1 -3032.76 0)"
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-73"
          x1={-3310.06}
          y1={190.34}
          x2={-3301.21}
          y2={187.69}
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-74"
          x1={-3325.87}
          y1={191.39}
          x2={-3242.65}
          y2={172.73}
          gradientTransform="matrix(-1 0 0 1 -3032.76 0)"
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-75"
          x1={-3278.51}
          y1={170.79}
          x2={-3284.02}
          y2={181.29}
          gradientTransform="matrix(-1 0 0 1 -3032.76 0)"
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-76"
          x1={-3319.79}
          y1={195.98}
          x2={-3310.95}
          y2={193.34}
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-77"
          x1={-3335.61}
          y1={197.03}
          x2={-3252.39}
          y2={178.38}
          gradientTransform="matrix(-1 0 0 1 -3032.76 0)"
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-78"
          x1={-3288.25}
          y1={176.44}
          x2={-3293.76}
          y2={186.94}
          gradientTransform="matrix(-1 0 0 1 -3032.76 0)"
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-79"
          x1={-3329.53}
          y1={201.63}
          x2={-3320.68}
          y2={198.98}
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-80"
          x1={-3345.35}
          y1={202.68}
          x2={-3262.13}
          y2={184.02}
          gradientTransform="matrix(-1 0 0 1 -3032.76 0)"
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-81"
          x1={-3297.99}
          y1={182.08}
          x2={-3303.5}
          y2={192.58}
          gradientTransform="matrix(-1 0 0 1 -3032.76 0)"
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-82"
          x1={-3339.27}
          y1={207.28}
          x2={-3330.42}
          y2={204.63}
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-83"
          x1={-3355.08}
          y1={208.32}
          x2={-3271.86}
          y2={189.67}
          gradientTransform="matrix(-1 0 0 1 -3032.76 0)"
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-84"
          x1={-3307.72}
          y1={187.73}
          x2={-3313.23}
          y2={198.23}
          gradientTransform="matrix(-1 0 0 1 -3032.76 0)"
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-85"
          x1={-3349}
          y1={212.92}
          x2={-3340.16}
          y2={210.27}
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-86"
          x1={-3364.82}
          y1={213.97}
          x2={-3281.6}
          y2={195.31}
          gradientTransform="matrix(-1 0 0 1 -3032.76 0)"
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-87"
          x1={-3317.46}
          y1={193.37}
          x2={-3322.97}
          y2={203.87}
          gradientTransform="matrix(-1 0 0 1 -3032.76 0)"
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-88"
          x1={-3358.74}
          y1={218.57}
          x2={-3349.9}
          y2={215.92}
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-89"
          x1={-3374.56}
          y1={219.61}
          x2={-3291.34}
          y2={200.96}
          gradientTransform="matrix(-1 0 0 1 -3032.76 0)"
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-90"
          x1={-3327.2}
          y1={199.02}
          x2={-3332.71}
          y2={209.52}
          gradientTransform="matrix(-1 0 0 1 -3032.76 0)"
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-91"
          x1={-3368.48}
          y1={224.21}
          x2={-3359.63}
          y2={221.56}
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-92"
          x1={-3384.29}
          y1={225.26}
          x2={-3301.07}
          y2={206.6}
          gradientTransform="matrix(-1 0 0 1 -3032.76 0)"
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-93"
          x1={-3336.93}
          y1={204.66}
          x2={-3342.44}
          y2={215.16}
          gradientTransform="matrix(-1 0 0 1 -3032.76 0)"
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-94"
          x1={-3378.22}
          y1={229.86}
          x2={-3369.37}
          y2={227.21}
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-95"
          x1={-3394.03}
          y1={230.9}
          x2={-3310.81}
          y2={212.25}
          gradientTransform="matrix(-1 0 0 1 -3032.76 0)"
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-96"
          x1={-3346.67}
          y1={210.31}
          x2={-3352.18}
          y2={220.81}
          gradientTransform="matrix(-1 0 0 1 -3032.76 0)"
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-97"
          x1={-3387.95}
          y1={235.5}
          x2={-3379.11}
          y2={232.85}
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-98"
          x1={-3403.77}
          y1={236.55}
          x2={-3320.55}
          y2={217.89}
          gradientTransform="matrix(-1 0 0 1 -3032.76 0)"
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-99"
          x1={-3356.41}
          y1={215.95}
          x2={-3361.92}
          y2={226.45}
          gradientTransform="matrix(-1 0 0 1 -3032.76 0)"
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-100"
          x1={-3397.69}
          y1={241.15}
          x2={-3388.84}
          y2={238.5}
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-101"
          x1={-3413.5}
          y1={242.19}
          x2={-3330.28}
          y2={223.54}
          gradientTransform="matrix(-1 0 0 1 -3032.76 0)"
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-102"
          x1={-3366.14}
          y1={221.6}
          x2={-3371.65}
          y2={232.1}
          gradientTransform="matrix(-1 0 0 1 -3032.76 0)"
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-103"
          x1={-3407.43}
          y1={246.79}
          x2={-3398.58}
          y2={244.14}
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-104"
          x1={-3423.24}
          y1={247.84}
          x2={-3340.02}
          y2={229.18}
          gradientTransform="matrix(-1 0 0 1 -3032.76 0)"
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-105"
          x1={-3375.88}
          y1={227.24}
          x2={-3381.39}
          y2={237.74}
          gradientTransform="matrix(-1 0 0 1 -3032.76 0)"
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-106"
          x1={-3417.16}
          y1={252.44}
          x2={-3408.32}
          y2={249.79}
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-107"
          x1={-3432.98}
          y1={253.48}
          x2={-3349.76}
          y2={234.83}
          gradientTransform="matrix(-1 0 0 1 -3032.76 0)"
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-108"
          x1={-3385.62}
          y1={232.89}
          x2={-3391.13}
          y2={243.39}
          gradientTransform="matrix(-1 0 0 1 -3032.76 0)"
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-109"
          x1={-3426.9}
          y1={258.08}
          x2={-3418.05}
          y2={255.43}
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-110"
          x1={-3442.72}
          y1={259.13}
          x2={-3359.5}
          y2={240.47}
          gradientTransform="matrix(-1 0 0 1 -3032.76 0)"
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-111"
          x1={-3395.36}
          y1={238.53}
          x2={-3400.87}
          y2={249.03}
          gradientTransform="matrix(-1 0 0 1 -3032.76 0)"
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-112"
          x1={-3436.64}
          y1={263.73}
          x2={-3427.79}
          y2={261.08}
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-113"
          x1={-3452.45}
          y1={264.77}
          x2={-3369.23}
          y2={246.12}
          gradientTransform="matrix(-1 0 0 1 -3032.76 0)"
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-114"
          x1={-3405.09}
          y1={244.18}
          x2={-3410.6}
          y2={254.68}
          gradientTransform="matrix(-1 0 0 1 -3032.76 0)"
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-115"
          x1={-3446.37}
          y1={269.37}
          x2={-3437.53}
          y2={266.72}
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-116"
          x1={-3462.19}
          y1={270.42}
          x2={-3378.97}
          y2={251.76}
          gradientTransform="matrix(-1 0 0 1 -3032.76 0)"
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-117"
          x1={-3414.83}
          y1={249.83}
          x2={-3420.34}
          y2={260.32}
          gradientTransform="matrix(-1 0 0 1 -3032.76 0)"
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-118"
          x1={-3456.11}
          y1={275.02}
          x2={-3447.26}
          y2={272.37}
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-119"
          x1={-3471.93}
          y1={276.06}
          x2={-3388.71}
          y2={257.41}
          gradientTransform="matrix(-1 0 0 1 -3032.76 0)"
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-120"
          x1={-3424.57}
          y1={255.47}
          x2={-3430.08}
          y2={265.97}
          gradientTransform="matrix(-1 0 0 1 -3032.76 0)"
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-121"
          x1={-3465.85}
          y1={280.66}
          x2={-3457}
          y2={278.01}
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-122"
          x1={-3481.66}
          y1={281.71}
          x2={-3398.44}
          y2={263.05}
          gradientTransform="matrix(-1 0 0 1 -3032.76 0)"
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-123"
          x1={-3434.3}
          y1={261.12}
          x2={-3439.81}
          y2={271.62}
          gradientTransform="matrix(-1 0 0 1 -3032.76 0)"
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-124"
          x1={-3475.59}
          y1={286.31}
          x2={-3466.74}
          y2={283.66}
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-125"
          x1={-3491.4}
          y1={287.36}
          x2={-3408.18}
          y2={268.7}
          gradientTransform="matrix(-1 0 0 1 -3032.76 0)"
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-126"
          x1={-3444.04}
          y1={266.76}
          x2={-3449.55}
          y2={277.26}
          gradientTransform="matrix(-1 0 0 1 -3032.76 0)"
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-127"
          x1={-3485.32}
          y1={291.95}
          x2={-3476.48}
          y2={289.31}
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-128"
          x1={-3501.14}
          y1={293}
          x2={-3417.92}
          y2={274.35}
          gradientTransform="matrix(-1 0 0 1 -3032.76 0)"
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-129"
          x1={-3453.78}
          y1={272.41}
          x2={-3459.29}
          y2={282.91}
          gradientTransform="matrix(-1 0 0 1 -3032.76 0)"
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-130"
          x1={-3495.06}
          y1={297.6}
          x2={-3486.21}
          y2={294.95}
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-131"
          x1={-3510.87}
          y1={298.65}
          x2={-3427.65}
          y2={279.99}
          gradientTransform="matrix(-1 0 0 1 -3032.76 0)"
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-132"
          x1={-3463.51}
          y1={278.05}
          x2={-3469.02}
          y2={288.55}
          gradientTransform="matrix(-1 0 0 1 -3032.76 0)"
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-133"
          x1={-3504.8}
          y1={303.24}
          x2={-3495.95}
          y2={300.6}
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-134"
          x1={-3520.61}
          y1={304.29}
          x2={-3437.39}
          y2={285.64}
          gradientTransform="matrix(-1 0 0 1 -3032.76 0)"
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-135"
          x1={-3473.25}
          y1={283.7}
          x2={-3478.76}
          y2={294.2}
          gradientTransform="matrix(-1 0 0 1 -3032.76 0)"
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-136"
          x1={-3514.53}
          y1={308.89}
          x2={-3505.69}
          y2={306.24}
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-137"
          x1={-3530.35}
          y1={309.94}
          x2={-3447.13}
          y2={291.28}
          gradientTransform="matrix(-1 0 0 1 -3032.76 0)"
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-138"
          x1={-3482.99}
          y1={289.34}
          x2={-3488.5}
          y2={299.84}
          gradientTransform="matrix(-1 0 0 1 -3032.76 0)"
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-139"
          x1={-3524.27}
          y1={314.54}
          x2={-3515.42}
          y2={311.89}
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-140"
          x1={-3540.09}
          y1={315.58}
          x2={-3456.87}
          y2={296.93}
          gradientTransform="matrix(-1 0 0 1 -3032.76 0)"
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-141"
          x1={-3492.73}
          y1={294.99}
          x2={-3498.23}
          y2={305.49}
          gradientTransform="matrix(-1 0 0 1 -3032.76 0)"
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-142"
          x1={-3534.01}
          y1={320.18}
          x2={-3525.16}
          y2={317.53}
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-143"
          x1={-3549.82}
          y1={321.23}
          x2={-3466.6}
          y2={302.57}
          gradientTransform="matrix(-1 0 0 1 -3032.76 0)"
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-144"
          x1={-3502.46}
          y1={300.63}
          x2={-3507.97}
          y2={311.13}
          gradientTransform="matrix(-1 0 0 1 -3032.76 0)"
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-145"
          x1={-3543.74}
          y1={325.83}
          x2={-3534.9}
          y2={323.18}
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-146"
          x1={-3559.56}
          y1={326.87}
          x2={-3476.34}
          y2={308.22}
          gradientTransform="matrix(-1 0 0 1 -3032.76 0)"
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-147"
          x1={-3512.2}
          y1={306.28}
          x2={-3517.71}
          y2={316.78}
          gradientTransform="matrix(-1 0 0 1 -3032.76 0)"
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-148"
          x1={-3553.48}
          y1={331.47}
          x2={-3544.63}
          y2={328.82}
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-149"
          x1={-3569.3}
          y1={332.52}
          x2={-3486.08}
          y2={313.86}
          gradientTransform="matrix(-1 0 0 1 -3032.76 0)"
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-150"
          x1={-3521.94}
          y1={311.92}
          x2={-3527.45}
          y2={322.42}
          gradientTransform="matrix(-1 0 0 1 -3032.76 0)"
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-151"
          x1={-3563.22}
          y1={337.12}
          x2={-3554.37}
          y2={334.47}
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-152"
          x1={-3579.03}
          y1={338.16}
          x2={-3495.81}
          y2={319.51}
          gradientTransform="matrix(-1 0 0 1 -3032.76 0)"
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-153"
          x1={-3531.67}
          y1={317.57}
          x2={-3537.18}
          y2={328.07}
          gradientTransform="matrix(-1 0 0 1 -3032.76 0)"
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-154"
          x1={-3572.96}
          y1={342.76}
          x2={-3564.11}
          y2={340.11}
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-155"
          x1={-3588.77}
          y1={343.81}
          x2={-3505.55}
          y2={325.15}
          gradientTransform="matrix(-1 0 0 1 -3032.76 0)"
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-156"
          x1={-3541.41}
          y1={323.21}
          x2={-3546.92}
          y2={333.71}
          gradientTransform="matrix(-1 0 0 1 -3032.76 0)"
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-157"
          x1={-3582.69}
          y1={348.41}
          x2={-3573.85}
          y2={345.76}
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-158"
          x1={-3598.51}
          y1={349.45}
          x2={-3515.29}
          y2={330.8}
          gradientTransform="matrix(-1 0 0 1 -3032.76 0)"
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-159"
          x1={-3551.15}
          y1={328.86}
          x2={-3556.66}
          y2={339.36}
          gradientTransform="matrix(-1 0 0 1 -3032.76 0)"
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-160"
          x1={-3592.43}
          y1={354.05}
          x2={-3583.58}
          y2={351.4}
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-161"
          x1={-3608.24}
          y1={355.1}
          x2={-3525.02}
          y2={336.44}
          gradientTransform="matrix(-1 0 0 1 -3032.76 0)"
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-162"
          x1={-3560.88}
          y1={334.5}
          x2={-3566.39}
          y2={345}
          gradientTransform="matrix(-1 0 0 1 -3032.76 0)"
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-163"
          x1={-3602.17}
          y1={359.7}
          x2={-3593.32}
          y2={357.05}
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-164"
          x1={-3617.98}
          y1={360.74}
          x2={-3534.76}
          y2={342.09}
          gradientTransform="matrix(-1 0 0 1 -3032.76 0)"
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-165"
          x1={-3570.62}
          y1={340.15}
          x2={-3576.13}
          y2={350.65}
          gradientTransform="matrix(-1 0 0 1 -3032.76 0)"
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-166"
          x1={-3611.9}
          y1={365.34}
          x2={-3603.06}
          y2={362.69}
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-167"
          x1={-3627.72}
          y1={366.39}
          x2={-3544.5}
          y2={347.73}
          gradientTransform="matrix(-1 0 0 1 -3032.76 0)"
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-168"
          x1={-3580.36}
          y1={345.79}
          x2={-3585.87}
          y2={356.29}
          gradientTransform="matrix(-1 0 0 1 -3032.76 0)"
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-169"
          x1={-3621.64}
          y1={370.99}
          x2={-3612.79}
          y2={368.34}
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-170"
          x1={-3637.46}
          y1={372.03}
          x2={-3554.24}
          y2={353.38}
          gradientTransform="matrix(-1 0 0 1 -3032.76 0)"
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-171"
          x1={-3590.1}
          y1={351.44}
          x2={-3595.6}
          y2={361.94}
          gradientTransform="matrix(-1 0 0 1 -3032.76 0)"
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-172"
          x1={-3631.38}
          y1={376.63}
          x2={-3622.53}
          y2={373.98}
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-173"
          x1={-3647.19}
          y1={377.68}
          x2={-3563.97}
          y2={359.02}
          gradientTransform="matrix(-1 0 0 1 -3032.76 0)"
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-174"
          x1={-3599.83}
          y1={357.09}
          x2={-3605.34}
          y2={367.58}
          gradientTransform="matrix(-1 0 0 1 -3032.76 0)"
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-175"
          x1={-3641.11}
          y1={382.28}
          x2={-3632.27}
          y2={379.63}
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-176"
          x1={-3656.93}
          y1={383.32}
          x2={-3573.71}
          y2={364.67}
          gradientTransform="matrix(-1 0 0 1 -3032.76 0)"
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-177"
          x1={-3609.57}
          y1={362.73}
          x2={-3615.08}
          y2={373.23}
          gradientTransform="matrix(-1 0 0 1 -3032.76 0)"
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-178"
          x1={-3650.85}
          y1={387.92}
          x2={-3642}
          y2={385.27}
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-179"
          x1={-3666.67}
          y1={388.97}
          x2={-3583.45}
          y2={370.31}
          gradientTransform="matrix(-1 0 0 1 -3032.76 0)"
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-180"
          x1={-3619.31}
          y1={368.38}
          x2={-3624.82}
          y2={378.88}
          gradientTransform="matrix(-1 0 0 1 -3032.76 0)"
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-181"
          x1={-3660.59}
          y1={393.57}
          x2={-3651.74}
          y2={390.92}
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-182"
          x1={-3676.4}
          y1={394.62}
          x2={-3593.18}
          y2={375.96}
          gradientTransform="matrix(-1 0 0 1 -3032.76 0)"
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-183"
          x1={-3629.04}
          y1={374.02}
          x2={-3634.55}
          y2={384.52}
          gradientTransform="matrix(-1 0 0 1 -3032.76 0)"
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-184"
          x1={-3670.32}
          y1={399.21}
          x2={-3661.48}
          y2={396.57}
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-185"
          x1={-3686.14}
          y1={400.26}
          x2={-3602.92}
          y2={381.61}
          gradientTransform="matrix(-1 0 0 1 -3032.76 0)"
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-186"
          x1={-3638.78}
          y1={379.67}
          x2={-3644.29}
          y2={390.17}
          gradientTransform="matrix(-1 0 0 1 -3032.76 0)"
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-187"
          x1={-3680.06}
          y1={404.86}
          x2={-3671.22}
          y2={402.21}
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-188"
          x1={-3695.88}
          y1={405.91}
          x2={-3612.66}
          y2={387.25}
          gradientTransform="matrix(-1 0 0 1 -3032.76 0)"
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-189"
          x1={-3648.52}
          y1={385.31}
          x2={-3654.03}
          y2={395.81}
          gradientTransform="matrix(-1 0 0 1 -3032.76 0)"
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-190"
          x1={-3689.8}
          y1={410.5}
          x2={-3680.95}
          y2={407.86}
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-191"
          x1={-3705.61}
          y1={411.55}
          x2={-3622.39}
          y2={392.9}
          gradientTransform="matrix(-1 0 0 1 -3032.76 0)"
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-192"
          x1={-3658.25}
          y1={390.96}
          x2={-3663.76}
          y2={401.46}
          gradientTransform="matrix(-1 0 0 1 -3032.76 0)"
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-193"
          x1={-3699.54}
          y1={416.15}
          x2={-3690.69}
          y2={413.5}
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-194"
          x1={-3715.35}
          y1={417.2}
          x2={-3632.13}
          y2={398.54}
          gradientTransform="matrix(-1 0 0 1 -3032.76 0)"
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-195"
          x1={-3667.99}
          y1={396.6}
          x2={-3673.5}
          y2={407.1}
          gradientTransform="matrix(-1 0 0 1 -3032.76 0)"
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-196"
          x1={-3709.27}
          y1={421.8}
          x2={-3700.43}
          y2={419.15}
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-197"
          x1={-3725.09}
          y1={422.84}
          x2={-3641.87}
          y2={404.19}
          gradientTransform="matrix(-1 0 0 1 -3032.76 0)"
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-198"
          x1={-3677.73}
          y1={402.25}
          x2={-3683.24}
          y2={412.75}
          gradientTransform="matrix(-1 0 0 1 -3032.76 0)"
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-199"
          x1={-3719.01}
          y1={427.44}
          x2={-3710.16}
          y2={424.79}
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-200"
          x1={-3734.82}
          y1={428.49}
          x2={-3651.61}
          y2={409.83}
          gradientTransform="matrix(-1 0 0 1 -3032.76 0)"
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-201"
          x1={-3687.47}
          y1={407.89}
          x2={-3692.97}
          y2={418.39}
          gradientTransform="matrix(-1 0 0 1 -3032.76 0)"
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-202"
          x1={-3728.75}
          y1={433.09}
          x2={-3719.9}
          y2={430.44}
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-203"
          x1={-3744.56}
          y1={434.13}
          x2={-3661.34}
          y2={415.48}
          gradientTransform="matrix(-1 0 0 1 -3032.76 0)"
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-204"
          x1={-3697.2}
          y1={413.54}
          x2={-3702.71}
          y2={424.04}
          gradientTransform="matrix(-1 0 0 1 -3032.76 0)"
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-205"
          x1={-3738.48}
          y1={438.73}
          x2={-3729.64}
          y2={436.08}
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-206"
          x1={-3754.3}
          y1={439.78}
          x2={-3671.08}
          y2={421.12}
          gradientTransform="matrix(-1 0 0 1 -3032.76 0)"
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-207"
          x1={-3706.94}
          y1={419.18}
          x2={-3712.45}
          y2={429.68}
          gradientTransform="matrix(-1 0 0 1 -3032.76 0)"
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-208"
          x1={-3748.22}
          y1={444.38}
          x2={-3739.37}
          y2={441.73}
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-209"
          x1={-3764.04}
          y1={445.42}
          x2={-3680.82}
          y2={426.77}
          gradientTransform="matrix(-1 0 0 1 -3032.76 0)"
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-210"
          x1={-3716.68}
          y1={424.83}
          x2={-3722.19}
          y2={435.33}
          gradientTransform="matrix(-1 0 0 1 -3032.76 0)"
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-211"
          x1={-3757.96}
          y1={450.02}
          x2={-3749.11}
          y2={447.37}
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-212"
          x1={-3773.77}
          y1={451.07}
          x2={-3690.55}
          y2={432.41}
          gradientTransform="matrix(-1 0 0 1 -3032.76 0)"
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-213"
          x1={-3726.41}
          y1={430.47}
          x2={-3731.92}
          y2={440.97}
          gradientTransform="matrix(-1 0 0 1 -3032.76 0)"
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-214"
          x1={-3767.69}
          y1={455.67}
          x2={-3758.85}
          y2={453.02}
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-215"
          x1={-3783.51}
          y1={456.71}
          x2={-3700.29}
          y2={438.06}
          gradientTransform="matrix(-1 0 0 1 -3032.76 0)"
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-216"
          x1={-3736.15}
          y1={436.12}
          x2={-3741.66}
          y2={446.62}
          gradientTransform="matrix(-1 0 0 1 -3032.76 0)"
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-217"
          x1={-3777.43}
          y1={461.31}
          x2={-3768.59}
          y2={458.66}
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-218"
          x1={-3793.25}
          y1={462.36}
          x2={-3710.03}
          y2={443.7}
          gradientTransform="matrix(-1 0 0 1 -3032.76 0)"
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-219"
          x1={-3745.89}
          y1={441.76}
          x2={-3751.4}
          y2={452.26}
          gradientTransform="matrix(-1 0 0 1 -3032.76 0)"
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-220"
          x1={-3787.17}
          y1={466.96}
          x2={-3778.32}
          y2={464.31}
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-221"
          x1={-3802.98}
          y1={468}
          x2={-3719.76}
          y2={449.35}
          gradientTransform="matrix(-1 0 0 1 -3032.76 0)"
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-222"
          x1={-3755.62}
          y1={447.41}
          x2={-3761.13}
          y2={457.91}
          gradientTransform="matrix(-1 0 0 1 -3032.76 0)"
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-223"
          x1={-3796.91}
          y1={472.6}
          x2={-3788.06}
          y2={469.95}
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-224"
          x1={-3812.72}
          y1={473.65}
          x2={-3729.5}
          y2={454.99}
          gradientTransform="matrix(-1 0 0 1 -3032.76 0)"
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-225"
          x1={-3765.36}
          y1={453.05}
          x2={-3770.87}
          y2={463.55}
          gradientTransform="matrix(-1 0 0 1 -3032.76 0)"
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-226"
          x1={-3806.64}
          y1={478.25}
          x2={-3797.8}
          y2={475.6}
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-227"
          x1={-3822.46}
          y1={479.29}
          x2={-3739.24}
          y2={460.64}
          gradientTransform="matrix(-1 0 0 1 -3032.76 0)"
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-228"
          x1={-3775.1}
          y1={458.7}
          x2={-3780.61}
          y2={469.2}
          gradientTransform="matrix(-1 0 0 1 -3032.76 0)"
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-229"
          x1={-3816.38}
          y1={483.89}
          x2={-3807.53}
          y2={481.24}
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-230"
          x1={-3832.19}
          y1={484.94}
          x2={-3748.98}
          y2={466.28}
          gradientTransform="matrix(-1 0 0 1 -3032.76 0)"
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-231"
          x1={-3784.84}
          y1={464.35}
          x2={-3790.34}
          y2={474.84}
          gradientTransform="matrix(-1 0 0 1 -3032.76 0)"
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-232"
          x1={-3826.12}
          y1={489.54}
          x2={-3817.27}
          y2={486.89}
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-233"
          x1={-3841.93}
          y1={490.58}
          x2={-3758.71}
          y2={471.93}
          gradientTransform="matrix(-1 0 0 1 -3032.76 0)"
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-234"
          x1={-3794.57}
          y1={469.99}
          x2={-3800.08}
          y2={480.49}
          gradientTransform="matrix(-1 0 0 1 -3032.76 0)"
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-235"
          x1={-3835.85}
          y1={495.18}
          x2={-3827.01}
          y2={492.53}
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-236"
          x1={-3851.67}
          y1={496.23}
          x2={-3768.45}
          y2={477.57}
          gradientTransform="matrix(-1 0 0 1 -3032.76 0)"
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-237"
          x1={-3804.31}
          y1={475.64}
          x2={-3809.82}
          y2={486.14}
          gradientTransform="matrix(-1 0 0 1 -3032.76 0)"
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-238"
          x1={-3845.59}
          y1={500.83}
          x2={-3836.74}
          y2={498.18}
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-239"
          x1={-3861.41}
          y1={501.88}
          x2={-3778.19}
          y2={483.22}
          gradientTransform="matrix(-1 0 0 1 -3032.76 0)"
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-240"
          x1={-3814.05}
          y1={481.28}
          x2={-3819.56}
          y2={491.78}
          gradientTransform="matrix(-1 0 0 1 -3032.76 0)"
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-241"
          x1={-3855.33}
          y1={506.47}
          x2={-3846.48}
          y2={503.83}
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-242"
          x1={-3871.14}
          y1={507.52}
          x2={-3787.92}
          y2={488.87}
          gradientTransform="matrix(-1 0 0 1 -3032.76 0)"
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-243"
          x1={-3823.78}
          y1={486.93}
          x2={-3829.29}
          y2={497.43}
          gradientTransform="matrix(-1 0 0 1 -3032.76 0)"
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-244"
          x1={-3865.06}
          y1={512.12}
          x2={-3856.22}
          y2={509.47}
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-245"
          x1={-3880.88}
          y1={513.17}
          x2={-3797.66}
          y2={494.51}
          gradientTransform="matrix(-1 0 0 1 -3032.76 0)"
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-246"
          x1={-3833.52}
          y1={492.57}
          x2={-3839.03}
          y2={503.07}
          gradientTransform="matrix(-1 0 0 1 -3032.76 0)"
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-247"
          x1={-3874.8}
          y1={517.76}
          x2={-3865.96}
          y2={515.12}
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-248"
          x1={-3890.62}
          y1={518.81}
          x2={-3807.4}
          y2={500.16}
          gradientTransform="matrix(-1 0 0 1 -3032.76 0)"
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-249"
          x1={-3843.26}
          y1={498.22}
          x2={-3848.77}
          y2={508.72}
          gradientTransform="matrix(-1 0 0 1 -3032.76 0)"
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-250"
          x1={-3884.54}
          y1={523.41}
          x2={-3875.69}
          y2={520.76}
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-251"
          x1={-3900.35}
          y1={524.46}
          x2={-3817.13}
          y2={505.8}
          gradientTransform="matrix(-1 0 0 1 -3032.76 0)"
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-252"
          x1={-3852.99}
          y1={503.86}
          x2={-3858.5}
          y2={514.36}
          gradientTransform="matrix(-1 0 0 1 -3032.76 0)"
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-253"
          x1={-3894.28}
          y1={529.06}
          x2={-3885.43}
          y2={526.41}
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-254"
          x1={-3910.09}
          y1={530.1}
          x2={-3826.87}
          y2={511.45}
          gradientTransform="matrix(-1 0 0 1 -3032.76 0)"
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-255"
          x1={-3862.73}
          y1={509.51}
          x2={-3868.24}
          y2={520.01}
          gradientTransform="matrix(-1 0 0 1 -3032.76 0)"
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-256"
          x1={-3904.01}
          y1={534.7}
          x2={-3895.17}
          y2={532.05}
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-257"
          x1={-3919.83}
          y1={535.75}
          x2={-3836.61}
          y2={517.09}
          gradientTransform="matrix(-1 0 0 1 -3032.76 0)"
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-258"
          x1={-3872.47}
          y1={515.15}
          x2={-3877.98}
          y2={525.65}
          gradientTransform="matrix(-1 0 0 1 -3032.76 0)"
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-259"
          x1={-3913.75}
          y1={540.35}
          x2={-3904.9}
          y2={537.7}
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-260"
          x1={-3929.56}
          y1={541.39}
          x2={-3846.34}
          y2={522.74}
          gradientTransform="matrix(-1 0 0 1 -3032.76 0)"
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-261"
          x1={-3882.21}
          y1={520.8}
          x2={-3887.71}
          y2={531.3}
          gradientTransform="matrix(-1 0 0 1 -3032.76 0)"
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-262"
          x1={-3923.49}
          y1={545.99}
          x2={-3914.64}
          y2={543.34}
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-263"
          x1={-3939.3}
          y1={547.04}
          x2={-3856.08}
          y2={528.38}
          gradientTransform="matrix(-1 0 0 1 -3032.76 0)"
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-264"
          x1={-3891.94}
          y1={526.44}
          x2={-3897.45}
          y2={536.94}
          gradientTransform="matrix(-1 0 0 1 -3032.76 0)"
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-265"
          x1={-3933.22}
          y1={551.64}
          x2={-3924.38}
          y2={548.99}
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-266"
          x1={-3949.04}
          y1={552.68}
          x2={-3865.82}
          y2={534.03}
          gradientTransform="matrix(-1 0 0 1 -3032.76 0)"
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-267"
          x1={-3901.68}
          y1={532.09}
          x2={-3907.19}
          y2={542.59}
          gradientTransform="matrix(-1 0 0 1 -3032.76 0)"
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-268"
          x1={-3942.96}
          y1={557.28}
          x2={-3934.11}
          y2={554.63}
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-269"
          x1={-3958.78}
          y1={558.33}
          x2={-3875.56}
          y2={539.67}
          gradientTransform="matrix(-1 0 0 1 -3032.76 0)"
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-270"
          x1={-3911.42}
          y1={537.73}
          x2={-3916.93}
          y2={548.23}
          gradientTransform="matrix(-1 0 0 1 -3032.76 0)"
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-271"
          x1={-3952.7}
          y1={562.93}
          x2={-3943.85}
          y2={560.28}
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-272"
          x1={-3968.51}
          y1={563.97}
          x2={-3885.29}
          y2={545.32}
          gradientTransform="matrix(-1 0 0 1 -3032.76 0)"
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-273"
          x1={-3921.15}
          y1={543.38}
          x2={-3926.66}
          y2={553.88}
          gradientTransform="matrix(-1 0 0 1 -3032.76 0)"
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-274"
          x1={-3962.43}
          y1={568.57}
          x2={-3953.59}
          y2={565.92}
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-275"
          x1={-3978.25}
          y1={569.62}
          x2={-3895.03}
          y2={550.96}
          gradientTransform="matrix(-1 0 0 1 -3032.76 0)"
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-276"
          x1={-3930.89}
          y1={549.02}
          x2={-3936.4}
          y2={559.52}
          gradientTransform="matrix(-1 0 0 1 -3032.76 0)"
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-277"
          x1={-3972.17}
          y1={574.22}
          x2={-3963.33}
          y2={571.57}
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-278"
          x1={-3987.99}
          y1={575.26}
          x2={-3904.77}
          y2={556.61}
          gradientTransform="matrix(-1 0 0 1 -3032.76 0)"
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-279"
          x1={-3940.63}
          y1={554.67}
          x2={-3946.14}
          y2={565.17}
          gradientTransform="matrix(-1 0 0 1 -3032.76 0)"
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-280"
          x1={-3981.91}
          y1={579.86}
          x2={-3973.06}
          y2={577.21}
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-281"
          x1={-3997.72}
          y1={580.91}
          x2={-3914.5}
          y2={562.25}
          gradientTransform="matrix(-1 0 0 1 -3032.76 0)"
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-282"
          x1={-3950.36}
          y1={560.31}
          x2={-3955.87}
          y2={570.81}
          gradientTransform="matrix(-1 0 0 1 -3032.76 0)"
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-283"
          x1={-3991.65}
          y1={585.51}
          x2={-3982.8}
          y2={582.86}
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-284"
          x1={-4007.46}
          y1={586.55}
          x2={-3924.24}
          y2={567.9}
          gradientTransform="matrix(-1 0 0 1 -3032.76 0)"
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-285"
          x1={-3960.1}
          y1={565.96}
          x2={-3965.61}
          y2={576.46}
          gradientTransform="matrix(-1 0 0 1 -3032.76 0)"
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-286"
          x1={-4001.38}
          y1={591.15}
          x2={-3992.54}
          y2={588.5}
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-287"
          x1={-4017.2}
          y1={592.2}
          x2={-3933.98}
          y2={573.54}
          gradientTransform="matrix(-1 0 0 1 -3032.76 0)"
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-288"
          x1={-3969.84}
          y1={571.61}
          x2={-3975.35}
          y2={582.1}
          gradientTransform="matrix(-1 0 0 1 -3032.76 0)"
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-289"
          x1={-4011.12}
          y1={596.8}
          x2={-4002.27}
          y2={594.15}
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-290"
          x1={-4026.93}
          y1={597.84}
          x2={-3943.71}
          y2={579.19}
          gradientTransform="matrix(-1 0 0 1 -3032.76 0)"
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-291"
          x1={-3979.57}
          y1={577.25}
          x2={-3985.08}
          y2={587.75}
          gradientTransform="matrix(-1 0 0 1 -3032.76 0)"
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-292"
          x1={-4020.86}
          y1={602.44}
          x2={-4012.01}
          y2={599.79}
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-293"
          x1={-4036.67}
          y1={603.49}
          x2={-3953.45}
          y2={584.83}
          gradientTransform="matrix(-1 0 0 1 -3032.76 0)"
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-294"
          x1={-3989.31}
          y1={582.9}
          x2={-3994.82}
          y2={593.4}
          gradientTransform="matrix(-1 0 0 1 -3032.76 0)"
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-295"
          x1={-4030.59}
          y1={608.09}
          x2={-4021.75}
          y2={605.44}
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-296"
          x1={-4046.41}
          y1={609.14}
          x2={-3963.19}
          y2={590.48}
          gradientTransform="matrix(-1 0 0 1 -3032.76 0)"
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-297"
          x1={-3999.05}
          y1={588.54}
          x2={-4004.56}
          y2={599.04}
          gradientTransform="matrix(-1 0 0 1 -3032.76 0)"
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-298"
          x1={-4040.33}
          y1={613.73}
          x2={-4031.48}
          y2={611.09}
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-299"
          x1={-4056.15}
          y1={614.78}
          x2={-3972.93}
          y2={596.13}
          gradientTransform="matrix(-1 0 0 1 -3032.76 0)"
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-300"
          x1={-4008.79}
          y1={594.19}
          x2={-4014.3}
          y2={604.69}
          gradientTransform="matrix(-1 0 0 1 -3032.76 0)"
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-301"
          x1={-4050.07}
          y1={619.38}
          x2={-4041.22}
          y2={616.73}
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-302"
          x1={-4065.88}
          y1={620.43}
          x2={-3982.66}
          y2={601.77}
          gradientTransform="matrix(-1 0 0 1 -3032.76 0)"
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-303"
          x1={-4018.52}
          y1={599.83}
          x2={-4024.03}
          y2={610.33}
          gradientTransform="matrix(-1 0 0 1 -3032.76 0)"
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-304"
          x1={-4059.8}
          y1={625.02}
          x2={-4050.96}
          y2={622.38}
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-305"
          x1={-4075.62}
          y1={626.07}
          x2={-3992.4}
          y2={607.42}
          gradientTransform="matrix(-1 0 0 1 -3032.76 0)"
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-306"
          x1={-4028.26}
          y1={605.48}
          x2={-4033.77}
          y2={615.98}
          gradientTransform="matrix(-1 0 0 1 -3032.76 0)"
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-307"
          x1={-4069.54}
          y1={630.67}
          x2={-4060.7}
          y2={628.02}
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-308"
          x1={-4085.36}
          y1={631.72}
          x2={-4002.14}
          y2={613.06}
          gradientTransform="matrix(-1 0 0 1 -3032.76 0)"
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-309"
          x1={-4038}
          y1={611.12}
          x2={-4043.51}
          y2={621.62}
          gradientTransform="matrix(-1 0 0 1 -3032.76 0)"
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-310"
          x1={-4079.28}
          y1={636.32}
          x2={-4070.43}
          y2={633.67}
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-311"
          x1={-4095.09}
          y1={637.36}
          x2={-4011.87}
          y2={618.71}
          gradientTransform="matrix(-1 0 0 1 -3032.76 0)"
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-312"
          x1={-4047.73}
          y1={616.77}
          x2={-4053.24}
          y2={627.27}
          gradientTransform="matrix(-1 0 0 1 -3032.76 0)"
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-313"
          x1={-4089.02}
          y1={641.96}
          x2={-4080.17}
          y2={639.31}
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-314"
          x1={-4104.83}
          y1={643.01}
          x2={-4021.61}
          y2={624.35}
          gradientTransform="matrix(-1 0 0 1 -3032.76 0)"
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-315"
          x1={-4057.47}
          y1={622.41}
          x2={-4062.98}
          y2={632.91}
          gradientTransform="matrix(-1 0 0 1 -3032.76 0)"
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-316"
          x1={-4098.75}
          y1={647.61}
          x2={-4089.91}
          y2={644.96}
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-317"
          x1={-4114.57}
          y1={648.65}
          x2={-4031.35}
          y2={630}
          gradientTransform="matrix(-1 0 0 1 -3032.76 0)"
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-318"
          x1={-4067.21}
          y1={628.06}
          x2={-4072.72}
          y2={638.56}
          gradientTransform="matrix(-1 0 0 1 -3032.76 0)"
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-319"
          x1={-4108.49}
          y1={653.25}
          x2={-4099.64}
          y2={650.6}
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-320"
          x1={-4124.3}
          y1={654.3}
          x2={-4041.08}
          y2={635.64}
          gradientTransform="matrix(-1 0 0 1 -3032.76 0)"
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-321"
          x1={-4076.94}
          y1={633.7}
          x2={-4082.45}
          y2={644.2}
          gradientTransform="matrix(-1 0 0 1 -3032.76 0)"
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-322"
          x1={-4118.23}
          y1={658.9}
          x2={-4109.38}
          y2={656.25}
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-323"
          x1={-4134.04}
          y1={659.94}
          x2={-4050.82}
          y2={641.29}
          gradientTransform="matrix(-1 0 0 1 -3032.76 0)"
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-324"
          x1={-4086.68}
          y1={639.35}
          x2={-4092.19}
          y2={649.85}
          gradientTransform="matrix(-1 0 0 1 -3032.76 0)"
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-325"
          x1={-4127.96}
          y1={664.54}
          x2={-4119.12}
          y2={661.89}
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-326"
          x1={-4143.78}
          y1={665.59}
          x2={-4060.56}
          y2={646.93}
          gradientTransform="matrix(-1 0 0 1 -3032.76 0)"
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-327"
          x1={-4096.42}
          y1={644.99}
          x2={-4101.93}
          y2={655.49}
          gradientTransform="matrix(-1 0 0 1 -3032.76 0)"
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-328"
          x1={-4137.7}
          y1={670.19}
          x2={-4128.85}
          y2={667.54}
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-329"
          x1={-4153.52}
          y1={671.23}
          x2={-4070.3}
          y2={652.58}
          gradientTransform="matrix(-1 0 0 1 -3032.76 0)"
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-330"
          x1={-4106.16}
          y1={650.64}
          x2={-4111.66}
          y2={661.14}
          gradientTransform="matrix(-1 0 0 1 -3032.76 0)"
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-331"
          x1={-4147.44}
          y1={675.83}
          x2={-4138.59}
          y2={673.18}
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-332"
          x1={-4163.25}
          y1={676.88}
          x2={-4080.03}
          y2={658.22}
          gradientTransform="matrix(-1 0 0 1 -3032.76 0)"
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-333"
          x1={-4115.89}
          y1={656.28}
          x2={-4121.4}
          y2={666.78}
          gradientTransform="matrix(-1 0 0 1 -3032.76 0)"
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-334"
          x1={-4157.17}
          y1={681.48}
          x2={-4148.33}
          y2={678.83}
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-335"
          x1={-4172.99}
          y1={682.52}
          x2={-4089.77}
          y2={663.87}
          gradientTransform="matrix(-1 0 0 1 -3032.76 0)"
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-336"
          x1={-4125.63}
          y1={661.93}
          x2={-4131.14}
          y2={672.43}
          gradientTransform="matrix(-1 0 0 1 -3032.76 0)"
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-337"
          x1={-4166.91}
          y1={687.12}
          x2={-4158.06}
          y2={684.47}
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-338"
          x1={-4182.73}
          y1={688.17}
          x2={-4099.51}
          y2={669.51}
          gradientTransform="matrix(-1 0 0 1 -3032.76 0)"
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-339"
          x1={-4135.37}
          y1={667.57}
          x2={-4140.88}
          y2={678.07}
          gradientTransform="matrix(-1 0 0 1 -3032.76 0)"
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-340"
          x1={-4176.65}
          y1={692.77}
          x2={-4167.8}
          y2={690.12}
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-341"
          x1={-4192.46}
          y1={693.81}
          x2={-4109.24}
          y2={675.16}
          gradientTransform="matrix(-1 0 0 1 -3032.76 0)"
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-342"
          x1={-4145.1}
          y1={673.22}
          x2={-4150.61}
          y2={683.72}
          gradientTransform="matrix(-1 0 0 1 -3032.76 0)"
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-343"
          x1={-4186.39}
          y1={698.41}
          x2={-4177.54}
          y2={695.76}
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-344"
          x1={-4202.2}
          y1={699.46}
          x2={-4118.98}
          y2={680.8}
          gradientTransform="matrix(-1 0 0 1 -3032.76 0)"
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-345"
          x1={-4154.84}
          y1={678.87}
          x2={-4160.35}
          y2={689.36}
          gradientTransform="matrix(-1 0 0 1 -3032.76 0)"
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__New_Gradient_Swatch_copy_37"
          data-name="New Gradient Swatch copy 37"
          x1={-2690.62}
          y1={245.11}
          x2={-2379.32}
          y2={246.43}
          gradientTransform="matrix(-1 0 0 1 -1882.17 0)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.04} stopColor="silver" />
          <stop offset={0.45} stopColor="#cfcfcf" />
          <stop offset={1} stopColor="#eaeaea" />
        </linearGradient>
        <linearGradient
          id="prefix__New_Gradient_Swatch_copy_37-2"
          x1={-2625.5}
          y1={240.55}
          x2={-2132.19}
          y2={267.59}
          xlinkHref="#prefix__New_Gradient_Swatch_copy_37"
        />
        <linearGradient
          id="prefix__New_Gradient_Swatch_copy_37-3"
          x1={-2609.03}
          y1={384.1}
          x2={-2487.24}
          y2={434.66}
          xlinkHref="#prefix__New_Gradient_Swatch_copy_37"
        />
        <linearGradient
          id="prefix__New_Gradient_Swatch_copy_38"
          data-name="New Gradient Swatch copy 38"
          x1={-2644.46}
          y1={386.17}
          x2={-2535.3}
          y2={386.17}
          gradientTransform="matrix(-1 0 0 1 -1882.17 0)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#171717" />
          <stop offset={1} stopColor="#2d2d2d" />
        </linearGradient>
        <linearGradient
          id="prefix__New_Gradient_Swatch_copy_37-4"
          x1={-2609.03}
          y1={337.93}
          x2={-2487.24}
          y2={388.5}
          xlinkHref="#prefix__New_Gradient_Swatch_copy_37"
        />
        <linearGradient
          id="prefix__New_Gradient_Swatch_copy_38-2"
          x1={-2644.46}
          y1={340.01}
          x2={-2535.3}
          y2={340.01}
          xlinkHref="#prefix__New_Gradient_Swatch_copy_38"
        />
        <linearGradient
          id="prefix__New_Gradient_Swatch_copy_37-5"
          x1={-2336.25}
          y1={255.15}
          x2={-2314.35}
          y2={248.59}
          xlinkHref="#prefix__New_Gradient_Swatch_copy_37"
        />
        <linearGradient
          id="prefix__New_Gradient_Swatch_copy_38-3"
          x1={-2726.24}
          y1={139.26}
          x2={-2330.48}
          y2={139.26}
          xlinkHref="#prefix__New_Gradient_Swatch_copy_38"
        />
        <linearGradient
          id="prefix__New_Gradient_Swatch_copy_37-6"
          x1={-2755.73}
          y1={92.17}
          x2={-2731.99}
          y2={135.47}
          xlinkHref="#prefix__New_Gradient_Swatch_copy_37"
        />
        <linearGradient
          id="prefix__linear-gradient-346"
          x1={-2731.76}
          y1={114.2}
          x2={-2731.76}
          y2={215.05}
          gradientTransform="matrix(-1 0 0 1 -1882.17 0)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#c1272d" />
          <stop offset={0.01} stopColor="#bd262c" />
          <stop offset={0.15} stopColor="#8b1c20" />
          <stop offset={0.28} stopColor="#601316" />
          <stop offset={0.42} stopColor="#3e0c0e" />
          <stop offset={0.56} stopColor="#230708" />
          <stop offset={0.7} stopColor="#0f0304" />
          <stop offset={0.85} stopColor="#040101" />
          <stop offset={1} />
        </linearGradient>
        <linearGradient
          id="prefix__New_Gradient_Swatch_copy_38-4"
          x1={-2500.41}
          y1={263.07}
          x2={-2425.25}
          y2={246.22}
          gradientTransform="matrix(-1 0 0 1 -1809.83 0)"
          xlinkHref="#prefix__New_Gradient_Swatch_copy_38"
        />
        <linearGradient
          id="prefix__New_Gradient_Swatch_copy_38-5"
          x1={-2476.77}
          y1={245.84}
          x2={-2425.46}
          y2={234.34}
          gradientTransform="matrix(-1 0 0 1 -1809.83 0)"
          xlinkHref="#prefix__New_Gradient_Swatch_copy_38"
        />
        <linearGradient
          id="prefix__New_Gradient_Swatch_copy_38-6"
          x1={-2661.74}
          y1={149.08}
          x2={-2525.4}
          y2={149.08}
          xlinkHref="#prefix__New_Gradient_Swatch_copy_38"
        />
        <linearGradient
          id="prefix__New_Gradient_Swatch_copy_37-7"
          x1={-2627.56}
          y1={277.99}
          x2={-2134.24}
          y2={305.03}
          xlinkHref="#prefix__New_Gradient_Swatch_copy_37"
        />
        <linearGradient
          id="prefix__New_Gradient_Swatch_copy_24"
          data-name="New Gradient Swatch copy 24"
          x1={-2826.16}
          y1={59.78}
          x2={-2710.18}
          y2={59.78}
          xlinkHref="#prefix__New_Gradient_Swatch_copy_38"
        />
        <linearGradient
          id="prefix__New_Gradient_Swatch_copy_37-8"
          x1={-3005.44}
          y1={143.14}
          x2={-2461.75}
          y2={21.26}
          xlinkHref="#prefix__New_Gradient_Swatch_copy_37"
        />
        <linearGradient
          id="prefix__New_Gradient_Swatch_copy_38-7"
          x1={-2641.06}
          y1={-109}
          x2={-2746.98}
          y2={92.86}
          xlinkHref="#prefix__New_Gradient_Swatch_copy_38"
        />
        <linearGradient
          id="prefix__New_Gradient_Swatch_copy_24-2"
          data-name="New Gradient Swatch copy 24"
          x1={-2726.1}
          y1={16.05}
          x2={-2534.3}
          y2={16.05}
          xlinkHref="#prefix__New_Gradient_Swatch_copy_38"
        />
        <linearGradient
          id="prefix__New_Gradient_Swatch_copy_37-9"
          x1={-2689.84}
          y1={61.82}
          x2={-2378.55}
          y2={63.14}
          xlinkHref="#prefix__New_Gradient_Swatch_copy_37"
        />
        <linearGradient
          id="prefix__New_Gradient_Swatch_copy_37-10"
          x1={-2615.49}
          y1={57.81}
          x2={-2122.17}
          y2={84.85}
          xlinkHref="#prefix__New_Gradient_Swatch_copy_37"
        />
        <linearGradient
          id="prefix__New_Gradient_Swatch_copy_37-11"
          x1={-2827.29}
          y1={191.51}
          x2={-2595.8}
          y2={109.07}
          xlinkHref="#prefix__New_Gradient_Swatch_copy_37"
        />
        <linearGradient
          id="prefix__New_Gradient_Swatch_copy_38-8"
          x1={-2661.74}
          y1={39.19}
          x2={-2525.4}
          y2={39.19}
          xlinkHref="#prefix__New_Gradient_Swatch_copy_38"
        />
        <linearGradient
          id="prefix__New_Gradient_Swatch_copy_37-12"
          x1={-2617.54}
          y1={95.25}
          x2={-2124.22}
          y2={122.29}
          xlinkHref="#prefix__New_Gradient_Swatch_copy_37"
        />
        <linearGradient
          id="prefix__New_Gradient_Swatch_copy_38-9"
          x1={-2478.71}
          y1={319.11}
          x2={-2707.76}
          y2={-22.73}
          xlinkHref="#prefix__New_Gradient_Swatch_copy_38"
        />
        <linearGradient
          id="prefix__New_Gradient_Swatch_copy_37-13"
          x1={-2739.22}
          y1={211}
          x2={-2416.15}
          y2={138.58}
          xlinkHref="#prefix__New_Gradient_Swatch_copy_37"
        />
        <linearGradient
          id="prefix__New_Gradient_Swatch_copy_38-10"
          x1={-2347.35}
          y1={268.31}
          x2={-2576.39}
          y2={-73.53}
          xlinkHref="#prefix__New_Gradient_Swatch_copy_38"
        />
        <linearGradient
          id="prefix__New_Gradient_Swatch_copy_37-14"
          x1={-2620.07}
          y1={141.98}
          x2={-2296.99}
          y2={69.55}
          xlinkHref="#prefix__New_Gradient_Swatch_copy_37"
        />
        <linearGradient
          id="prefix__linear-gradient-347"
          x1={6616.67}
          y1={137.82}
          x2={6611.73}
          y2={131.2}
          gradientTransform="translate(-6439.07)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#171717" />
          <stop offset={0.42} stopColor="#2d2d2d" />
          <stop offset={0.89} stopColor="#1b1b1b" />
        </linearGradient>
        <linearGradient
          id="prefix__New_Gradient_Swatch_copy_24-3"
          data-name="New Gradient Swatch copy 24"
          x1={6609.36}
          y1={135.82}
          x2={6614.83}
          y2={135.82}
          gradientTransform="translate(-6439.07)"
          xlinkHref="#prefix__New_Gradient_Swatch_copy_38"
        />
        <linearGradient
          id="prefix__linear-gradient-348"
          x1={6624.06}
          y1={142.12}
          x2={6619.12}
          y2={135.49}
          xlinkHref="#prefix__linear-gradient-347"
        />
        <linearGradient
          id="prefix__New_Gradient_Swatch_copy_24-4"
          data-name="New Gradient Swatch copy 24"
          x1={6616.75}
          y1={140.12}
          x2={6622.22}
          y2={140.12}
          gradientTransform="translate(-6439.07)"
          xlinkHref="#prefix__New_Gradient_Swatch_copy_38"
        />
        <linearGradient
          id="prefix__New_Gradient_Swatch_copy_24-5"
          data-name="New Gradient Swatch copy 24"
          x1={6496.25}
          y1={140.48}
          x2={6518.28}
          y2={135.54}
          gradientTransform="translate(-6330.5)"
          xlinkHref="#prefix__New_Gradient_Swatch_copy_38"
        />
        <linearGradient
          id="prefix__linear-gradient-349"
          x1={6686.11}
          y1={178.39}
          x2={6681.17}
          y2={171.76}
          xlinkHref="#prefix__linear-gradient-347"
        />
        <linearGradient
          id="prefix__New_Gradient_Swatch_copy_24-6"
          data-name="New Gradient Swatch copy 24"
          x1={6678.79}
          y1={176.39}
          x2={6684.27}
          y2={176.39}
          gradientTransform="translate(-6439.07)"
          xlinkHref="#prefix__New_Gradient_Swatch_copy_38"
        />
        <linearGradient
          id="prefix__linear-gradient-350"
          x1={6693.5}
          y1={182.68}
          x2={6688.56}
          y2={176.06}
          xlinkHref="#prefix__linear-gradient-347"
        />
        <linearGradient
          id="prefix__New_Gradient_Swatch_copy_24-7"
          data-name="New Gradient Swatch copy 24"
          x1={6686.18}
          y1={180.68}
          x2={6691.66}
          y2={180.68}
          gradientTransform="translate(-6439.07)"
          xlinkHref="#prefix__New_Gradient_Swatch_copy_38"
        />
        <linearGradient
          id="prefix__linear-gradient-351"
          x1={-6266.4}
          y1={167.72}
          x2={-6080.6}
          y2={112.09}
          gradientTransform="matrix(-1 0 0 1 -6010.71 0)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#b3b3b3" />
          <stop offset={1} stopColor="#f2f2f2" />
        </linearGradient>
        <linearGradient
          id="prefix__New_Gradient_Swatch_copy_24-8"
          data-name="New Gradient Swatch copy 24"
          x1={-6315.28}
          y1={181.71}
          x2={-6246.69}
          y2={166.34}
          gradientTransform="matrix(-1 0 0 1 -6010.71 0)"
          xlinkHref="#prefix__New_Gradient_Swatch_copy_38"
        />
        <linearGradient
          id="prefix__New_Gradient_Swatch_copy_24-9"
          data-name="New Gradient Swatch copy 24"
          x1={6565.68}
          y1={181.04}
          x2={6587.71}
          y2={176.1}
          gradientTransform="translate(-6330.5)"
          xlinkHref="#prefix__New_Gradient_Swatch_copy_38"
        />
        <linearGradient
          id="prefix__New_Gradient_Swatch_copy_24-10"
          data-name="New Gradient Swatch copy 24"
          x1={-6285.9}
          y1={177.02}
          x2={-6274.58}
          y2={173.63}
          gradientTransform="matrix(-1 0 0 1 -6010.71 0)"
          xlinkHref="#prefix__New_Gradient_Swatch_copy_38"
        />
        <linearGradient
          id="prefix__New_Gradient_Swatch_copy_24-11"
          data-name="New Gradient Swatch copy 24"
          x1={-6289.01}
          y1={177.88}
          x2={-6284.06}
          y2={176.77}
          gradientTransform="matrix(-1 0 0 1 -6010.71 0)"
          xlinkHref="#prefix__New_Gradient_Swatch_copy_38"
        />
        <linearGradient
          id="prefix__New_Gradient_Swatch_copy_24-12"
          data-name="New Gradient Swatch copy 24"
          x1={-6279.31}
          y1={165.96}
          x2={-6284.74}
          y2={176.3}
          gradientTransform="matrix(-1 0 0 1 -6010.71 0)"
          xlinkHref="#prefix__New_Gradient_Swatch_copy_38"
        />
        <linearGradient
          id="prefix__New_Gradient_Swatch_copy_24-13"
          data-name="New Gradient Swatch copy 24"
          x1={-6286.58}
          y1={178.23}
          x2={-6283.42}
          y2={177.29}
          gradientTransform="matrix(-1 0 0 1 -6010.71 0)"
          xlinkHref="#prefix__New_Gradient_Swatch_copy_38"
        />
        <linearGradient
          id="prefix__New_Gradient_Swatch_copy_24-14"
          data-name="New Gradient Swatch copy 24"
          x1={-6290.71}
          y1={178.49}
          x2={-6283.75}
          y2={176.93}
          gradientTransform="matrix(-1 0 0 1 -6010.71 0)"
          xlinkHref="#prefix__New_Gradient_Swatch_copy_38"
        />
        <linearGradient
          id="prefix__New_Gradient_Swatch_copy_24-15"
          data-name="New Gradient Swatch copy 24"
          x1={-6285.92}
          y1={174.51}
          x2={-6286.98}
          y2={176.52}
          gradientTransform="matrix(-1 0 0 1 -6010.71 0)"
          xlinkHref="#prefix__New_Gradient_Swatch_copy_38"
        />
        <linearGradient
          id="prefix__linear-gradient-352"
          x1={6712.37}
          y1={194.23}
          x2={6707.43}
          y2={187.61}
          xlinkHref="#prefix__linear-gradient-347"
        />
        <linearGradient
          id="prefix__New_Gradient_Swatch_copy_24-16"
          data-name="New Gradient Swatch copy 24"
          x1={6705.06}
          y1={192.23}
          x2={6710.53}
          y2={192.23}
          gradientTransform="translate(-6439.07)"
          xlinkHref="#prefix__New_Gradient_Swatch_copy_38"
        />
        <linearGradient
          id="prefix__linear-gradient-353"
          x1={6719.76}
          y1={198.52}
          x2={6714.82}
          y2={191.9}
          xlinkHref="#prefix__linear-gradient-347"
        />
        <linearGradient
          id="prefix__New_Gradient_Swatch_copy_24-17"
          data-name="New Gradient Swatch copy 24"
          x1={6712.45}
          y1={196.52}
          x2={6717.92}
          y2={196.52}
          gradientTransform="translate(-6439.07)"
          xlinkHref="#prefix__New_Gradient_Swatch_copy_38"
        />
        <linearGradient
          id="prefix__New_Gradient_Swatch_copy_24-18"
          data-name="New Gradient Swatch copy 24"
          x1={6591.95}
          y1={196.88}
          x2={6613.98}
          y2={191.95}
          gradientTransform="translate(-6330.5)"
          xlinkHref="#prefix__New_Gradient_Swatch_copy_38"
        />
        <linearGradient
          id="prefix__linear-gradient-354"
          x1={6781.81}
          y1={234.79}
          x2={6776.87}
          y2={228.17}
          xlinkHref="#prefix__linear-gradient-347"
        />
        <linearGradient
          id="prefix__New_Gradient_Swatch_copy_24-19"
          data-name="New Gradient Swatch copy 24"
          x1={6774.5}
          y1={232.79}
          x2={6779.97}
          y2={232.79}
          gradientTransform="translate(-6439.07)"
          xlinkHref="#prefix__New_Gradient_Swatch_copy_38"
        />
        <linearGradient
          id="prefix__linear-gradient-355"
          x1={6789.2}
          y1={239.09}
          x2={6784.26}
          y2={232.46}
          xlinkHref="#prefix__linear-gradient-347"
        />
        <linearGradient
          id="prefix__New_Gradient_Swatch_copy_24-20"
          data-name="New Gradient Swatch copy 24"
          x1={6781.89}
          y1={237.09}
          x2={6787.36}
          y2={237.09}
          gradientTransform="translate(-6439.07)"
          xlinkHref="#prefix__New_Gradient_Swatch_copy_38"
        />
        <linearGradient
          id="prefix__linear-gradient-356"
          x1={-6362.1}
          y1={224.13}
          x2={-6176.3}
          y2={168.49}
          xlinkHref="#prefix__linear-gradient-351"
        />
        <linearGradient
          id="prefix__New_Gradient_Swatch_copy_24-21"
          data-name="New Gradient Swatch copy 24"
          x1={-6410.98}
          y1={238.12}
          x2={-6342.39}
          y2={222.74}
          gradientTransform="matrix(-1 0 0 1 -6010.71 0)"
          xlinkHref="#prefix__New_Gradient_Swatch_copy_38"
        />
        <linearGradient
          id="prefix__New_Gradient_Swatch_copy_24-22"
          data-name="New Gradient Swatch copy 24"
          x1={6661.39}
          y1={237.45}
          x2={6683.41}
          y2={232.51}
          gradientTransform="translate(-6330.5)"
          xlinkHref="#prefix__New_Gradient_Swatch_copy_38"
        />
        <linearGradient
          id="prefix__New_Gradient_Swatch_copy_24-23"
          data-name="New Gradient Swatch copy 24"
          x1={-6381.6}
          y1={233.43}
          x2={-6370.28}
          y2={230.04}
          gradientTransform="matrix(-1 0 0 1 -6010.71 0)"
          xlinkHref="#prefix__New_Gradient_Swatch_copy_38"
        />
        <linearGradient
          id="prefix__New_Gradient_Swatch_copy_24-24"
          data-name="New Gradient Swatch copy 24"
          x1={-6384.72}
          y1={234.28}
          x2={-6379.76}
          y2={233.17}
          gradientTransform="matrix(-1 0 0 1 -6010.71 0)"
          xlinkHref="#prefix__New_Gradient_Swatch_copy_38"
        />
        <linearGradient
          id="prefix__New_Gradient_Swatch_copy_24-25"
          data-name="New Gradient Swatch copy 24"
          x1={-6375.02}
          y1={222.37}
          x2={-6380.44}
          y2={232.71}
          gradientTransform="matrix(-1 0 0 1 -6010.71 0)"
          xlinkHref="#prefix__New_Gradient_Swatch_copy_38"
        />
        <linearGradient
          id="prefix__New_Gradient_Swatch_copy_24-26"
          data-name="New Gradient Swatch copy 24"
          x1={-6382.28}
          y1={234.64}
          x2={-6379.12}
          y2={233.69}
          gradientTransform="matrix(-1 0 0 1 -6010.71 0)"
          xlinkHref="#prefix__New_Gradient_Swatch_copy_38"
        />
        <linearGradient
          id="prefix__New_Gradient_Swatch_copy_24-27"
          data-name="New Gradient Swatch copy 24"
          x1={-6386.41}
          y1={234.9}
          x2={-6379.45}
          y2={233.33}
          gradientTransform="matrix(-1 0 0 1 -6010.71 0)"
          xlinkHref="#prefix__New_Gradient_Swatch_copy_38"
        />
        <linearGradient
          id="prefix__New_Gradient_Swatch_copy_24-28"
          data-name="New Gradient Swatch copy 24"
          x1={-6381.62}
          y1={230.92}
          x2={-6382.68}
          y2={232.93}
          gradientTransform="matrix(-1 0 0 1 -6010.71 0)"
          xlinkHref="#prefix__New_Gradient_Swatch_copy_38"
        />
        <linearGradient
          id="prefix__linear-gradient-357"
          x1={6807.85}
          y1={250.52}
          x2={6802.91}
          y2={243.9}
          xlinkHref="#prefix__linear-gradient-347"
        />
        <linearGradient
          id="prefix__New_Gradient_Swatch_copy_24-29"
          data-name="New Gradient Swatch copy 24"
          x1={6800.54}
          y1={248.52}
          x2={6806.01}
          y2={248.52}
          gradientTransform="translate(-6439.07)"
          xlinkHref="#prefix__New_Gradient_Swatch_copy_38"
        />
        <linearGradient
          id="prefix__linear-gradient-358"
          x1={6815.24}
          y1={254.81}
          x2={6810.3}
          y2={248.19}
          xlinkHref="#prefix__linear-gradient-347"
        />
        <linearGradient
          id="prefix__New_Gradient_Swatch_copy_24-30"
          data-name="New Gradient Swatch copy 24"
          x1={6807.93}
          y1={252.81}
          x2={6813.4}
          y2={252.81}
          gradientTransform="translate(-6439.07)"
          xlinkHref="#prefix__New_Gradient_Swatch_copy_38"
        />
        <linearGradient
          id="prefix__New_Gradient_Swatch_copy_24-31"
          data-name="New Gradient Swatch copy 24"
          x1={6687.43}
          y1={253.17}
          x2={6709.45}
          y2={248.23}
          gradientTransform="translate(-6330.5)"
          xlinkHref="#prefix__New_Gradient_Swatch_copy_38"
        />
        <linearGradient
          id="prefix__linear-gradient-359"
          x1={6877.28}
          y1={291.08}
          x2={6872.34}
          y2={284.46}
          xlinkHref="#prefix__linear-gradient-347"
        />
        <linearGradient
          id="prefix__New_Gradient_Swatch_copy_24-32"
          data-name="New Gradient Swatch copy 24"
          x1={6869.97}
          y1={289.08}
          x2={6875.44}
          y2={289.08}
          gradientTransform="translate(-6439.07)"
          xlinkHref="#prefix__New_Gradient_Swatch_copy_38"
        />
        <linearGradient
          id="prefix__linear-gradient-360"
          x1={6884.68}
          y1={295.37}
          x2={6879.73}
          y2={288.75}
          xlinkHref="#prefix__linear-gradient-347"
        />
        <linearGradient
          id="prefix__New_Gradient_Swatch_copy_24-33"
          data-name="New Gradient Swatch copy 24"
          x1={6877.36}
          y1={293.37}
          x2={6882.84}
          y2={293.37}
          gradientTransform="translate(-6439.07)"
          xlinkHref="#prefix__New_Gradient_Swatch_copy_38"
        />
        <linearGradient
          id="prefix__linear-gradient-361"
          x1={-6457.58}
          y1={280.42}
          x2={-6271.78}
          y2={224.78}
          xlinkHref="#prefix__linear-gradient-351"
        />
        <linearGradient
          id="prefix__New_Gradient_Swatch_copy_24-34"
          data-name="New Gradient Swatch copy 24"
          x1={-6506.46}
          y1={294.41}
          x2={-6437.87}
          y2={279.03}
          gradientTransform="matrix(-1 0 0 1 -6010.71 0)"
          xlinkHref="#prefix__New_Gradient_Swatch_copy_38"
        />
        <linearGradient
          id="prefix__New_Gradient_Swatch_copy_24-35"
          data-name="New Gradient Swatch copy 24"
          x1={6756.86}
          y1={293.73}
          x2={6778.89}
          y2={288.8}
          gradientTransform="translate(-6330.5)"
          xlinkHref="#prefix__New_Gradient_Swatch_copy_38"
        />
        <linearGradient
          id="prefix__New_Gradient_Swatch_copy_24-36"
          data-name="New Gradient Swatch copy 24"
          x1={-6477.08}
          y1={289.71}
          x2={-6465.75}
          y2={286.32}
          gradientTransform="matrix(-1 0 0 1 -6010.71 0)"
          xlinkHref="#prefix__New_Gradient_Swatch_copy_38"
        />
        <linearGradient
          id="prefix__New_Gradient_Swatch_copy_24-37"
          data-name="New Gradient Swatch copy 24"
          x1={-6480.19}
          y1={290.57}
          x2={-6475.24}
          y2={289.46}
          gradientTransform="matrix(-1 0 0 1 -6010.71 0)"
          xlinkHref="#prefix__New_Gradient_Swatch_copy_38"
        />
        <linearGradient
          id="prefix__New_Gradient_Swatch_copy_24-38"
          data-name="New Gradient Swatch copy 24"
          x1={-6470.49}
          y1={278.65}
          x2={-6475.92}
          y2={289}
          gradientTransform="matrix(-1 0 0 1 -6010.71 0)"
          xlinkHref="#prefix__New_Gradient_Swatch_copy_38"
        />
        <linearGradient
          id="prefix__New_Gradient_Swatch_copy_24-39"
          data-name="New Gradient Swatch copy 24"
          x1={-6477.75}
          y1={290.92}
          x2={-6474.6}
          y2={289.98}
          gradientTransform="matrix(-1 0 0 1 -6010.71 0)"
          xlinkHref="#prefix__New_Gradient_Swatch_copy_38"
        />
        <linearGradient
          id="prefix__New_Gradient_Swatch_copy_24-40"
          data-name="New Gradient Swatch copy 24"
          x1={-6481.89}
          y1={291.18}
          x2={-6474.92}
          y2={289.62}
          gradientTransform="matrix(-1 0 0 1 -6010.71 0)"
          xlinkHref="#prefix__New_Gradient_Swatch_copy_38"
        />
        <linearGradient
          id="prefix__New_Gradient_Swatch_copy_24-41"
          data-name="New Gradient Swatch copy 24"
          x1={-6477.1}
          y1={287.2}
          x2={-6478.15}
          y2={289.21}
          gradientTransform="matrix(-1 0 0 1 -6010.71 0)"
          xlinkHref="#prefix__New_Gradient_Swatch_copy_38"
        />
        <linearGradient
          id="prefix__linear-gradient-362"
          x1={6903.44}
          y1={306.86}
          x2={6898.5}
          y2={300.24}
          xlinkHref="#prefix__linear-gradient-347"
        />
        <linearGradient
          id="prefix__New_Gradient_Swatch_copy_24-42"
          data-name="New Gradient Swatch copy 24"
          x1={6896.13}
          y1={304.86}
          x2={6901.6}
          y2={304.86}
          gradientTransform="translate(-6439.07)"
          xlinkHref="#prefix__New_Gradient_Swatch_copy_38"
        />
        <linearGradient
          id="prefix__linear-gradient-363"
          x1={6910.83}
          y1={311.16}
          x2={6905.89}
          y2={304.54}
          xlinkHref="#prefix__linear-gradient-347"
        />
        <linearGradient
          id="prefix__New_Gradient_Swatch_copy_24-43"
          data-name="New Gradient Swatch copy 24"
          x1={6903.52}
          y1={309.16}
          x2={6908.99}
          y2={309.16}
          gradientTransform="translate(-6439.07)"
          xlinkHref="#prefix__New_Gradient_Swatch_copy_38"
        />
        <linearGradient
          id="prefix__New_Gradient_Swatch_copy_24-44"
          data-name="New Gradient Swatch copy 24"
          x1={6783.02}
          y1={309.52}
          x2={6805.04}
          y2={304.58}
          gradientTransform="translate(-6330.5)"
          xlinkHref="#prefix__New_Gradient_Swatch_copy_38"
        />
        <linearGradient
          id="prefix__linear-gradient-364"
          x1={6972.87}
          y1={347.43}
          x2={6967.93}
          y2={340.8}
          xlinkHref="#prefix__linear-gradient-347"
        />
        <linearGradient
          id="prefix__New_Gradient_Swatch_copy_24-45"
          data-name="New Gradient Swatch copy 24"
          x1={6965.56}
          y1={345.43}
          x2={6971.03}
          y2={345.43}
          gradientTransform="translate(-6439.07)"
          xlinkHref="#prefix__New_Gradient_Swatch_copy_38"
        />
        <linearGradient
          id="prefix__linear-gradient-365"
          x1={6980.26}
          y1={351.72}
          x2={6975.32}
          y2={345.1}
          xlinkHref="#prefix__linear-gradient-347"
        />
        <linearGradient
          id="prefix__New_Gradient_Swatch_copy_24-46"
          data-name="New Gradient Swatch copy 24"
          x1={6972.95}
          y1={349.72}
          x2={6978.42}
          y2={349.72}
          gradientTransform="translate(-6439.07)"
          xlinkHref="#prefix__New_Gradient_Swatch_copy_38"
        />
        <linearGradient
          id="prefix__linear-gradient-366"
          x1={-6553.17}
          y1={336.76}
          x2={-6367.37}
          y2={281.13}
          xlinkHref="#prefix__linear-gradient-351"
        />
        <linearGradient
          id="prefix__New_Gradient_Swatch_copy_24-47"
          data-name="New Gradient Swatch copy 24"
          x1={-6602.04}
          y1={350.75}
          x2={-6533.46}
          y2={335.38}
          gradientTransform="matrix(-1 0 0 1 -6010.71 0)"
          xlinkHref="#prefix__New_Gradient_Swatch_copy_38"
        />
        <linearGradient
          id="prefix__New_Gradient_Swatch_copy_24-48"
          data-name="New Gradient Swatch copy 24"
          x1={6852.45}
          y1={350.08}
          x2={6874.48}
          y2={345.14}
          gradientTransform="translate(-6330.5)"
          xlinkHref="#prefix__New_Gradient_Swatch_copy_38"
        />
        <linearGradient
          id="prefix__New_Gradient_Swatch_copy_24-49"
          data-name="New Gradient Swatch copy 24"
          x1={-6572.67}
          y1={346.06}
          x2={-6561.34}
          y2={342.67}
          gradientTransform="matrix(-1 0 0 1 -6010.71 0)"
          xlinkHref="#prefix__New_Gradient_Swatch_copy_38"
        />
        <linearGradient
          id="prefix__New_Gradient_Swatch_copy_24-50"
          data-name="New Gradient Swatch copy 24"
          x1={-6575.78}
          y1={346.92}
          x2={-6570.83}
          y2={345.81}
          gradientTransform="matrix(-1 0 0 1 -6010.71 0)"
          xlinkHref="#prefix__New_Gradient_Swatch_copy_38"
        />
        <linearGradient
          id="prefix__New_Gradient_Swatch_copy_24-51"
          data-name="New Gradient Swatch copy 24"
          x1={-6566.08}
          y1={335}
          x2={-6571.51}
          y2={345.34}
          gradientTransform="matrix(-1 0 0 1 -6010.71 0)"
          xlinkHref="#prefix__New_Gradient_Swatch_copy_38"
        />
        <linearGradient
          id="prefix__New_Gradient_Swatch_copy_24-52"
          data-name="New Gradient Swatch copy 24"
          x1={-6573.34}
          y1={347.27}
          x2={-6570.19}
          y2={346.33}
          gradientTransform="matrix(-1 0 0 1 -6010.71 0)"
          xlinkHref="#prefix__New_Gradient_Swatch_copy_38"
        />
        <linearGradient
          id="prefix__New_Gradient_Swatch_copy_24-53"
          data-name="New Gradient Swatch copy 24"
          x1={-6577.48}
          y1={347.53}
          x2={-6570.51}
          y2={345.97}
          gradientTransform="matrix(-1 0 0 1 -6010.71 0)"
          xlinkHref="#prefix__New_Gradient_Swatch_copy_38"
        />
        <linearGradient
          id="prefix__New_Gradient_Swatch_copy_24-54"
          data-name="New Gradient Swatch copy 24"
          x1={-6572.69}
          y1={343.55}
          x2={-6573.74}
          y2={345.56}
          gradientTransform="matrix(-1 0 0 1 -6010.71 0)"
          xlinkHref="#prefix__New_Gradient_Swatch_copy_38"
        />
        <linearGradient
          id="prefix__linear-gradient-367"
          x1={6999.14}
          y1={363.27}
          x2={6994.2}
          y2={356.65}
          xlinkHref="#prefix__linear-gradient-347"
        />
        <linearGradient
          id="prefix__New_Gradient_Swatch_copy_24-55"
          data-name="New Gradient Swatch copy 24"
          x1={6991.83}
          y1={361.27}
          x2={6997.3}
          y2={361.27}
          gradientTransform="translate(-6439.07)"
          xlinkHref="#prefix__New_Gradient_Swatch_copy_38"
        />
        <linearGradient
          id="prefix__linear-gradient-368"
          x1={7006.53}
          y1={367.56}
          x2={7001.59}
          y2={360.94}
          xlinkHref="#prefix__linear-gradient-347"
        />
        <linearGradient
          id="prefix__New_Gradient_Swatch_copy_24-56"
          data-name="New Gradient Swatch copy 24"
          x1={6999.22}
          y1={365.56}
          x2={7004.69}
          y2={365.56}
          gradientTransform="translate(-6439.07)"
          xlinkHref="#prefix__New_Gradient_Swatch_copy_38"
        />
        <linearGradient
          id="prefix__New_Gradient_Swatch_copy_24-57"
          data-name="New Gradient Swatch copy 24"
          x1={6878.72}
          y1={365.92}
          x2={6900.74}
          y2={360.99}
          gradientTransform="translate(-6330.5)"
          xlinkHref="#prefix__New_Gradient_Swatch_copy_38"
        />
        <linearGradient
          id="prefix__linear-gradient-369"
          x1={7068.57}
          y1={403.83}
          x2={7063.63}
          y2={397.21}
          xlinkHref="#prefix__linear-gradient-347"
        />
        <linearGradient
          id="prefix__New_Gradient_Swatch_copy_24-58"
          data-name="New Gradient Swatch copy 24"
          x1={7061.26}
          y1={401.83}
          x2={7066.73}
          y2={401.83}
          gradientTransform="translate(-6439.07)"
          xlinkHref="#prefix__New_Gradient_Swatch_copy_38"
        />
        <linearGradient
          id="prefix__linear-gradient-370"
          x1={7075.97}
          y1={408.13}
          x2={7071.02}
          y2={401.5}
          xlinkHref="#prefix__linear-gradient-347"
        />
        <linearGradient
          id="prefix__New_Gradient_Swatch_copy_24-59"
          data-name="New Gradient Swatch copy 24"
          x1={7068.65}
          y1={406.13}
          x2={7074.13}
          y2={406.13}
          gradientTransform="translate(-6439.07)"
          xlinkHref="#prefix__New_Gradient_Swatch_copy_38"
        />
        <linearGradient
          id="prefix__linear-gradient-371"
          x1={-6648.87}
          y1={393.17}
          x2={-6463.07}
          y2={337.53}
          xlinkHref="#prefix__linear-gradient-351"
        />
        <linearGradient
          id="prefix__New_Gradient_Swatch_copy_24-60"
          data-name="New Gradient Swatch copy 24"
          x1={-6697.75}
          y1={407.16}
          x2={-6629.16}
          y2={391.79}
          gradientTransform="matrix(-1 0 0 1 -6010.71 0)"
          xlinkHref="#prefix__New_Gradient_Swatch_copy_38"
        />
        <linearGradient
          id="prefix__New_Gradient_Swatch_copy_24-61"
          data-name="New Gradient Swatch copy 24"
          x1={6948.15}
          y1={406.49}
          x2={6970.18}
          y2={401.55}
          gradientTransform="translate(-6330.5)"
          xlinkHref="#prefix__New_Gradient_Swatch_copy_38"
        />
        <linearGradient
          id="prefix__New_Gradient_Swatch_copy_24-62"
          data-name="New Gradient Swatch copy 24"
          x1={-6668.37}
          y1={402.47}
          x2={-6657.04}
          y2={399.08}
          gradientTransform="matrix(-1 0 0 1 -6010.71 0)"
          xlinkHref="#prefix__New_Gradient_Swatch_copy_38"
        />
        <linearGradient
          id="prefix__New_Gradient_Swatch_copy_24-63"
          data-name="New Gradient Swatch copy 24"
          x1={-6671.48}
          y1={403.32}
          x2={-6666.53}
          y2={402.21}
          gradientTransform="matrix(-1 0 0 1 -6010.71 0)"
          xlinkHref="#prefix__New_Gradient_Swatch_copy_38"
        />
        <linearGradient
          id="prefix__New_Gradient_Swatch_copy_24-64"
          data-name="New Gradient Swatch copy 24"
          x1={-6661.78}
          y1={391.41}
          x2={-6667.21}
          y2={401.75}
          gradientTransform="matrix(-1 0 0 1 -6010.71 0)"
          xlinkHref="#prefix__New_Gradient_Swatch_copy_38"
        />
        <linearGradient
          id="prefix__New_Gradient_Swatch_copy_24-65"
          data-name="New Gradient Swatch copy 24"
          x1={-6669.04}
          y1={403.68}
          x2={-6665.89}
          y2={402.73}
          gradientTransform="matrix(-1 0 0 1 -6010.71 0)"
          xlinkHref="#prefix__New_Gradient_Swatch_copy_38"
        />
        <linearGradient
          id="prefix__New_Gradient_Swatch_copy_24-66"
          data-name="New Gradient Swatch copy 24"
          x1={-6673.18}
          y1={403.94}
          x2={-6666.21}
          y2={402.38}
          gradientTransform="matrix(-1 0 0 1 -6010.71 0)"
          xlinkHref="#prefix__New_Gradient_Swatch_copy_38"
        />
        <linearGradient
          id="prefix__New_Gradient_Swatch_copy_24-67"
          data-name="New Gradient Swatch copy 24"
          x1={-6668.39}
          y1={399.96}
          x2={-6669.44}
          y2={401.97}
          gradientTransform="matrix(-1 0 0 1 -6010.71 0)"
          xlinkHref="#prefix__New_Gradient_Swatch_copy_38"
        />
        <linearGradient
          id="prefix__linear-gradient-372"
          x1={7094.62}
          y1={419.56}
          x2={7089.67}
          y2={412.94}
          xlinkHref="#prefix__linear-gradient-347"
        />
        <linearGradient
          id="prefix__New_Gradient_Swatch_copy_24-68"
          data-name="New Gradient Swatch copy 24"
          x1={7087.3}
          y1={417.56}
          x2={7092.78}
          y2={417.56}
          gradientTransform="translate(-6439.07)"
          xlinkHref="#prefix__New_Gradient_Swatch_copy_38"
        />
        <linearGradient
          id="prefix__linear-gradient-373"
          x1={7102.01}
          y1={423.85}
          x2={7097.06}
          y2={417.23}
          xlinkHref="#prefix__linear-gradient-347"
        />
        <linearGradient
          id="prefix__New_Gradient_Swatch_copy_24-69"
          data-name="New Gradient Swatch copy 24"
          x1={7094.69}
          y1={421.85}
          x2={7100.17}
          y2={421.85}
          gradientTransform="translate(-6439.07)"
          xlinkHref="#prefix__New_Gradient_Swatch_copy_38"
        />
        <linearGradient
          id="prefix__New_Gradient_Swatch_copy_24-70"
          data-name="New Gradient Swatch copy 24"
          x1={6974.19}
          y1={422.21}
          x2={6996.22}
          y2={417.27}
          gradientTransform="translate(-6330.5)"
          xlinkHref="#prefix__New_Gradient_Swatch_copy_38"
        />
        <linearGradient
          id="prefix__linear-gradient-374"
          x1={7164.05}
          y1={460.12}
          x2={7159.11}
          y2={453.5}
          xlinkHref="#prefix__linear-gradient-347"
        />
        <linearGradient
          id="prefix__New_Gradient_Swatch_copy_24-71"
          data-name="New Gradient Swatch copy 24"
          x1={7156.74}
          y1={458.12}
          x2={7162.21}
          y2={458.12}
          gradientTransform="translate(-6439.07)"
          xlinkHref="#prefix__New_Gradient_Swatch_copy_38"
        />
        <linearGradient
          id="prefix__linear-gradient-375"
          x1={7171.44}
          y1={464.41}
          x2={7166.5}
          y2={457.79}
          xlinkHref="#prefix__linear-gradient-347"
        />
        <linearGradient
          id="prefix__New_Gradient_Swatch_copy_24-72"
          data-name="New Gradient Swatch copy 24"
          x1={7164.13}
          y1={462.41}
          x2={7169.6}
          y2={462.41}
          gradientTransform="translate(-6439.07)"
          xlinkHref="#prefix__New_Gradient_Swatch_copy_38"
        />
        <linearGradient
          id="prefix__linear-gradient-376"
          x1={-6744.35}
          y1={449.46}
          x2={-6558.54}
          y2={393.82}
          xlinkHref="#prefix__linear-gradient-351"
        />
        <linearGradient
          id="prefix__New_Gradient_Swatch_copy_24-73"
          data-name="New Gradient Swatch copy 24"
          x1={-6793.22}
          y1={463.45}
          x2={-6724.63}
          y2={448.07}
          gradientTransform="matrix(-1 0 0 1 -6010.71 0)"
          xlinkHref="#prefix__New_Gradient_Swatch_copy_38"
        />
        <linearGradient
          id="prefix__New_Gradient_Swatch_copy_24-74"
          data-name="New Gradient Swatch copy 24"
          x1={7043.63}
          y1={462.77}
          x2={7065.65}
          y2={457.84}
          gradientTransform="translate(-6330.5)"
          xlinkHref="#prefix__New_Gradient_Swatch_copy_38"
        />
        <linearGradient
          id="prefix__New_Gradient_Swatch_copy_24-75"
          data-name="New Gradient Swatch copy 24"
          x1={-6631.16}
          y1={268.59}
          x2={-6727.01}
          y2={451.26}
          gradientTransform="matrix(-1 0 0 1 -6010.71 0)"
          xlinkHref="#prefix__New_Gradient_Swatch_copy_38"
        />
        <linearGradient
          id="prefix__New_Gradient_Swatch_copy_24-76"
          data-name="New Gradient Swatch copy 24"
          x1={-6763.85}
          y1={458.76}
          x2={-6752.52}
          y2={455.36}
          gradientTransform="matrix(-1 0 0 1 -6010.71 0)"
          xlinkHref="#prefix__New_Gradient_Swatch_copy_38"
        />
        <linearGradient
          id="prefix__New_Gradient_Swatch_copy_24-77"
          data-name="New Gradient Swatch copy 24"
          x1={-6766.96}
          y1={459.61}
          x2={-6762}
          y2={458.5}
          gradientTransform="matrix(-1 0 0 1 -6010.71 0)"
          xlinkHref="#prefix__New_Gradient_Swatch_copy_38"
        />
        <linearGradient
          id="prefix__New_Gradient_Swatch_copy_24-78"
          data-name="New Gradient Swatch copy 24"
          x1={-6757.26}
          y1={447.69}
          x2={-6762.68}
          y2={458.04}
          gradientTransform="matrix(-1 0 0 1 -6010.71 0)"
          xlinkHref="#prefix__New_Gradient_Swatch_copy_38"
        />
        <linearGradient
          id="prefix__New_Gradient_Swatch_copy_24-79"
          data-name="New Gradient Swatch copy 24"
          x1={-6764.52}
          y1={459.96}
          x2={-6761.36}
          y2={459.02}
          gradientTransform="matrix(-1 0 0 1 -6010.71 0)"
          xlinkHref="#prefix__New_Gradient_Swatch_copy_38"
        />
        <linearGradient
          id="prefix__New_Gradient_Swatch_copy_24-80"
          data-name="New Gradient Swatch copy 24"
          x1={-6768.65}
          y1={460.22}
          x2={-6761.69}
          y2={458.66}
          gradientTransform="matrix(-1 0 0 1 -6010.71 0)"
          xlinkHref="#prefix__New_Gradient_Swatch_copy_38"
        />
        <linearGradient
          id="prefix__New_Gradient_Swatch_copy_24-81"
          data-name="New Gradient Swatch copy 24"
          x1={-6763.87}
          y1={456.25}
          x2={-6764.92}
          y2={458.25}
          gradientTransform="matrix(-1 0 0 1 -6010.71 0)"
          xlinkHref="#prefix__New_Gradient_Swatch_copy_38"
        />
        <linearGradient
          id="prefix__linear-gradient-377"
          x1={7190.32}
          y1={475.97}
          x2={7185.38}
          y2={469.34}
          xlinkHref="#prefix__linear-gradient-347"
        />
        <linearGradient
          id="prefix__New_Gradient_Swatch_copy_24-82"
          data-name="New Gradient Swatch copy 24"
          x1={7183}
          y1={473.97}
          x2={7188.48}
          y2={473.97}
          gradientTransform="translate(-6439.07)"
          xlinkHref="#prefix__New_Gradient_Swatch_copy_38"
        />
        <linearGradient
          id="prefix__linear-gradient-378"
          x1={7197.71}
          y1={480.26}
          x2={7192.77}
          y2={473.64}
          xlinkHref="#prefix__linear-gradient-347"
        />
        <linearGradient
          id="prefix__New_Gradient_Swatch_copy_24-83"
          data-name="New Gradient Swatch copy 24"
          x1={7190.39}
          y1={478.26}
          x2={7195.87}
          y2={478.26}
          gradientTransform="translate(-6439.07)"
          xlinkHref="#prefix__New_Gradient_Swatch_copy_38"
        />
        <linearGradient
          id="prefix__New_Gradient_Swatch_copy_24-84"
          data-name="New Gradient Swatch copy 24"
          x1={7069.89}
          y1={478.62}
          x2={7091.92}
          y2={473.68}
          gradientTransform="translate(-6330.5)"
          xlinkHref="#prefix__New_Gradient_Swatch_copy_38"
        />
        <linearGradient
          id="prefix__linear-gradient-379"
          x1={7259.75}
          y1={516.53}
          x2={7254.81}
          y2={509.91}
          xlinkHref="#prefix__linear-gradient-347"
        />
        <linearGradient
          id="prefix__New_Gradient_Swatch_copy_24-85"
          data-name="New Gradient Swatch copy 24"
          x1={7252.44}
          y1={514.53}
          x2={7257.91}
          y2={514.53}
          gradientTransform="translate(-6439.07)"
          xlinkHref="#prefix__New_Gradient_Swatch_copy_38"
        />
        <linearGradient
          id="prefix__linear-gradient-380"
          x1={7267.14}
          y1={520.82}
          x2={7262.2}
          y2={514.2}
          xlinkHref="#prefix__linear-gradient-347"
        />
        <linearGradient
          id="prefix__New_Gradient_Swatch_copy_24-86"
          data-name="New Gradient Swatch copy 24"
          x1={7259.83}
          y1={518.82}
          x2={7265.3}
          y2={518.82}
          gradientTransform="translate(-6439.07)"
          xlinkHref="#prefix__New_Gradient_Swatch_copy_38"
        />
        <linearGradient
          id="prefix__linear-gradient-381"
          x1={-6840.05}
          y1={505.86}
          x2={-6654.24}
          y2={450.23}
          xlinkHref="#prefix__linear-gradient-351"
        />
        <linearGradient
          id="prefix__New_Gradient_Swatch_copy_24-87"
          data-name="New Gradient Swatch copy 24"
          x1={-6888.92}
          y1={519.86}
          x2={-6820.33}
          y2={504.48}
          gradientTransform="matrix(-1 0 0 1 -6010.71 0)"
          xlinkHref="#prefix__New_Gradient_Swatch_copy_38"
        />
        <linearGradient
          id="prefix__New_Gradient_Swatch_copy_24-88"
          data-name="New Gradient Swatch copy 24"
          x1={7139.33}
          y1={519.18}
          x2={7161.36}
          y2={514.24}
          gradientTransform="translate(-6330.5)"
          xlinkHref="#prefix__New_Gradient_Swatch_copy_38"
        />
        <linearGradient
          id="prefix__New_Gradient_Swatch_copy_24-89"
          data-name="New Gradient Swatch copy 24"
          x1={-6726.87}
          y1={324.99}
          x2={-6822.72}
          y2={507.66}
          gradientTransform="matrix(-1 0 0 1 -6010.71 0)"
          xlinkHref="#prefix__New_Gradient_Swatch_copy_38"
        />
        <linearGradient
          id="prefix__New_Gradient_Swatch_copy_24-90"
          data-name="New Gradient Swatch copy 24"
          x1={-6859.55}
          y1={515.16}
          x2={-6848.22}
          y2={511.77}
          gradientTransform="matrix(-1 0 0 1 -6010.71 0)"
          xlinkHref="#prefix__New_Gradient_Swatch_copy_38"
        />
        <linearGradient
          id="prefix__New_Gradient_Swatch_copy_24-91"
          data-name="New Gradient Swatch copy 24"
          x1={-6862.66}
          y1={516.02}
          x2={-6857.7}
          y2={514.91}
          gradientTransform="matrix(-1 0 0 1 -6010.71 0)"
          xlinkHref="#prefix__New_Gradient_Swatch_copy_38"
        />
        <linearGradient
          id="prefix__New_Gradient_Swatch_copy_24-92"
          data-name="New Gradient Swatch copy 24"
          x1={-6852.96}
          y1={504.1}
          x2={-6858.39}
          y2={514.44}
          gradientTransform="matrix(-1 0 0 1 -6010.71 0)"
          xlinkHref="#prefix__New_Gradient_Swatch_copy_38"
        />
        <linearGradient
          id="prefix__New_Gradient_Swatch_copy_24-93"
          data-name="New Gradient Swatch copy 24"
          x1={-6860.22}
          y1={516.37}
          x2={-6857.07}
          y2={515.43}
          gradientTransform="matrix(-1 0 0 1 -6010.71 0)"
          xlinkHref="#prefix__New_Gradient_Swatch_copy_38"
        />
        <linearGradient
          id="prefix__New_Gradient_Swatch_copy_24-94"
          data-name="New Gradient Swatch copy 24"
          x1={-6864.36}
          y1={516.63}
          x2={-6857.39}
          y2={515.07}
          gradientTransform="matrix(-1 0 0 1 -6010.71 0)"
          xlinkHref="#prefix__New_Gradient_Swatch_copy_38"
        />
        <linearGradient
          id="prefix__New_Gradient_Swatch_copy_24-95"
          data-name="New Gradient Swatch copy 24"
          x1={-6859.57}
          y1={512.65}
          x2={-6860.62}
          y2={514.66}
          gradientTransform="matrix(-1 0 0 1 -6010.71 0)"
          xlinkHref="#prefix__New_Gradient_Swatch_copy_38"
        />
        <linearGradient
          id="prefix__linear-gradient-382"
          x1={7284.07}
          y1={531.48}
          x2={7279.13}
          y2={524.85}
          xlinkHref="#prefix__linear-gradient-347"
        />
        <linearGradient
          id="prefix__New_Gradient_Swatch_copy_24-96"
          data-name="New Gradient Swatch copy 24"
          x1={7276.75}
          y1={529.48}
          x2={7282.23}
          y2={529.48}
          gradientTransform="translate(-6439.07)"
          xlinkHref="#prefix__New_Gradient_Swatch_copy_38"
        />
        <linearGradient
          id="prefix__linear-gradient-383"
          x1={7291.46}
          y1={535.77}
          x2={7286.52}
          y2={529.15}
          xlinkHref="#prefix__linear-gradient-347"
        />
        <linearGradient
          id="prefix__New_Gradient_Swatch_copy_24-97"
          data-name="New Gradient Swatch copy 24"
          x1={7284.15}
          y1={533.77}
          x2={7289.62}
          y2={533.77}
          gradientTransform="translate(-6439.07)"
          xlinkHref="#prefix__New_Gradient_Swatch_copy_38"
        />
        <linearGradient
          id="prefix__New_Gradient_Swatch_copy_24-98"
          data-name="New Gradient Swatch copy 24"
          x1={7163.65}
          y1={534.13}
          x2={7185.67}
          y2={529.19}
          gradientTransform="translate(-6330.5)"
          xlinkHref="#prefix__New_Gradient_Swatch_copy_38"
        />
        <linearGradient
          id="prefix__linear-gradient-384"
          x1={7353.5}
          y1={572.04}
          x2={7348.56}
          y2={565.42}
          xlinkHref="#prefix__linear-gradient-347"
        />
        <linearGradient
          id="prefix__New_Gradient_Swatch_copy_24-99"
          data-name="New Gradient Swatch copy 24"
          x1={7346.19}
          y1={570.04}
          x2={7351.66}
          y2={570.04}
          gradientTransform="translate(-6439.07)"
          xlinkHref="#prefix__New_Gradient_Swatch_copy_38"
        />
        <linearGradient
          id="prefix__linear-gradient-385"
          x1={7360.89}
          y1={576.33}
          x2={7355.95}
          y2={569.71}
          xlinkHref="#prefix__linear-gradient-347"
        />
        <linearGradient
          id="prefix__New_Gradient_Swatch_copy_24-100"
          data-name="New Gradient Swatch copy 24"
          x1={7353.58}
          y1={574.33}
          x2={7359.05}
          y2={574.33}
          gradientTransform="translate(-6439.07)"
          xlinkHref="#prefix__New_Gradient_Swatch_copy_38"
        />
        <linearGradient
          id="prefix__linear-gradient-386"
          x1={-6932.57}
          y1={560.82}
          x2={-6749.41}
          y2={505.98}
          xlinkHref="#prefix__linear-gradient-351"
        />
        <linearGradient
          id="prefix__New_Gradient_Swatch_copy_24-101"
          data-name="New Gradient Swatch copy 24"
          x1={-6981.4}
          y1={574.62}
          x2={-6912.81}
          y2={559.24}
          gradientTransform="matrix(-1 0 0 1 -6010.71 0)"
          xlinkHref="#prefix__New_Gradient_Swatch_copy_38"
        />
        <linearGradient
          id="prefix__New_Gradient_Swatch_copy_24-102"
          data-name="New Gradient Swatch copy 24"
          x1={-6985.69}
          y1={579.5}
          x2={-6910.02}
          y2={562.54}
          gradientTransform="matrix(-1 0 0 1 -6010.71 0)"
          xlinkHref="#prefix__New_Gradient_Swatch_copy_38"
        />
        <linearGradient
          id="prefix__New_Gradient_Swatch_copy_24-103"
          data-name="New Gradient Swatch copy 24"
          x1={7233.08}
          y1={574.69}
          x2={7255.11}
          y2={569.75}
          gradientTransform="translate(-6330.5)"
          xlinkHref="#prefix__New_Gradient_Swatch_copy_38"
        />
        <linearGradient
          id="prefix__New_Gradient_Swatch_copy_24-104"
          data-name="New Gradient Swatch copy 24"
          x1={-6821.17}
          y1={382.41}
          x2={-6915.66}
          y2={562.48}
          gradientTransform="matrix(-1 0 0 1 -6010.71 0)"
          xlinkHref="#prefix__New_Gradient_Swatch_copy_38"
        />
        <linearGradient
          id="prefix__New_Gradient_Swatch_copy_24-105"
          data-name="New Gradient Swatch copy 24"
          x1={-6952.24}
          y1={569.36}
          x2={-6940.92}
          y2={565.96}
          gradientTransform="matrix(-1 0 0 1 -6010.71 0)"
          xlinkHref="#prefix__New_Gradient_Swatch_copy_38"
        />
        <linearGradient
          id="prefix__New_Gradient_Swatch_copy_24-106"
          data-name="New Gradient Swatch copy 24"
          x1={-6955.36}
          y1={570.21}
          x2={-6950.4}
          y2={569.1}
          gradientTransform="matrix(-1 0 0 1 -6010.71 0)"
          xlinkHref="#prefix__New_Gradient_Swatch_copy_38"
        />
        <linearGradient
          id="prefix__New_Gradient_Swatch_copy_24-107"
          data-name="New Gradient Swatch copy 24"
          x1={-6945.66}
          y1={558.29}
          x2={-6951.08}
          y2={568.64}
          gradientTransform="matrix(-1 0 0 1 -6010.71 0)"
          xlinkHref="#prefix__New_Gradient_Swatch_copy_38"
        />
        <linearGradient
          id="prefix__New_Gradient_Swatch_copy_24-108"
          data-name="New Gradient Swatch copy 24"
          x1={-6952.92}
          y1={570.56}
          x2={-6949.76}
          y2={569.62}
          gradientTransform="matrix(-1 0 0 1 -6010.71 0)"
          xlinkHref="#prefix__New_Gradient_Swatch_copy_38"
        />
        <linearGradient
          id="prefix__New_Gradient_Swatch_copy_24-109"
          data-name="New Gradient Swatch copy 24"
          x1={-6957.05}
          y1={570.82}
          x2={-6950.09}
          y2={569.26}
          gradientTransform="matrix(-1 0 0 1 -6010.71 0)"
          xlinkHref="#prefix__New_Gradient_Swatch_copy_38"
        />
        <linearGradient
          id="prefix__New_Gradient_Swatch_copy_24-110"
          data-name="New Gradient Swatch copy 24"
          x1={-6952.26}
          y1={566.85}
          x2={-6953.32}
          y2={568.85}
          gradientTransform="matrix(-1 0 0 1 -6010.71 0)"
          xlinkHref="#prefix__New_Gradient_Swatch_copy_38"
        />
        <linearGradient
          id="prefix__linear-gradient-387"
          x1={14654.79}
          y1={326.89}
          x2={14639.71}
          y2={335.15}
          gradientTransform="translate(-14307.95)"
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
          id="prefix__linear-gradient-388"
          x1={14653.34}
          y1={334.14}
          x2={14647.31}
          y2={324.54}
          gradientTransform="translate(-14307.95)"
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
          id="prefix__linear-gradient-389"
          x1={-15882.66}
          y1={325.44}
          x2={-15871.55}
          y2={331.2}
          gradientTransform="matrix(-1 0 0 1 -15531.42 0)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#8770b8" />
          <stop offset={1} stopColor="#fff" />
        </linearGradient>
        <linearGradient
          id="prefix__linear-gradient-390"
          x1={-15874.07}
          y1={325.95}
          x2={-15876.71}
          y2={331.3}
          gradientTransform="matrix(-1 0 0 1 -15531.42 0)"
          xlinkHref="#prefix__linear-gradient-388"
        />
        <linearGradient
          id="prefix__linear-gradient-391"
          x1={14668.79}
          y1={335.14}
          x2={14653.71}
          y2={343.4}
          gradientTransform="rotate(30.31 7512.665 -26075.61)"
          xlinkHref="#prefix__linear-gradient-387"
        />
        <linearGradient
          id="prefix__linear-gradient-392"
          x1={14667.33}
          y1={342.39}
          x2={14661.3}
          y2={332.79}
          xlinkHref="#prefix__linear-gradient-388"
        />
        <linearGradient
          id="prefix__linear-gradient-393"
          x1={-15896.66}
          y1={333.68}
          x2={-15885.55}
          y2={339.44}
          xlinkHref="#prefix__linear-gradient-389"
        />
        <linearGradient
          id="prefix__linear-gradient-394"
          x1={-15888.06}
          y1={334.19}
          x2={-15890.7}
          y2={339.54}
          gradientTransform="matrix(-1 0 0 1 -15531.42 0)"
          xlinkHref="#prefix__linear-gradient-388"
        />
        <linearGradient
          id="prefix__linear-gradient-395"
          x1={-15896.4}
          y1={302.44}
          x2={-15918.97}
          y2={345.47}
          gradientTransform="matrix(-1 0 0 1 -15531.42 0)"
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
          id="prefix__linear-gradient-396"
          x1={-15977.52}
          y1={376.22}
          x2={-15966.41}
          y2={371.24}
          xlinkHref="#prefix__linear-gradient-389"
        />
        <linearGradient
          id="prefix__linear-gradient-397"
          x1={14850.2}
          y1={436.2}
          x2={14835.12}
          y2={444.46}
          xlinkHref="#prefix__linear-gradient-387"
        />
        <linearGradient
          id="prefix__linear-gradient-398"
          x1={14848.75}
          y1={443.45}
          x2={14842.72}
          y2={433.85}
          xlinkHref="#prefix__linear-gradient-388"
        />
        <linearGradient
          id="prefix__linear-gradient-399"
          x1={-16078.07}
          y1={434.75}
          x2={-16066.96}
          y2={440.51}
          xlinkHref="#prefix__linear-gradient-389"
        />
        <linearGradient
          id="prefix__linear-gradient-400"
          x1={-16069.48}
          y1={435.26}
          x2={-16072.12}
          y2={440.61}
          gradientTransform="matrix(-1 0 0 1 -15531.42 0)"
          xlinkHref="#prefix__linear-gradient-388"
        />
        <linearGradient
          id="prefix__linear-gradient-401"
          x1={14864.2}
          y1={444.45}
          x2={14849.12}
          y2={452.71}
          gradientTransform="rotate(30.31 7708.086 -25966.279)"
          xlinkHref="#prefix__linear-gradient-387"
        />
        <linearGradient
          id="prefix__linear-gradient-402"
          x1={14862.74}
          y1={451.7}
          x2={14856.71}
          y2={442.1}
          xlinkHref="#prefix__linear-gradient-388"
        />
        <linearGradient
          id="prefix__linear-gradient-403"
          x1={-16092.07}
          y1={442.99}
          x2={-16080.96}
          y2={448.75}
          xlinkHref="#prefix__linear-gradient-389"
        />
        <linearGradient
          id="prefix__linear-gradient-404"
          x1={-16083.47}
          y1={443.5}
          x2={-16086.11}
          y2={448.85}
          gradientTransform="matrix(-1 0 0 1 -15531.42 0)"
          xlinkHref="#prefix__linear-gradient-388"
        />
        <linearGradient
          id="prefix__linear-gradient-405"
          x1={-16091.81}
          y1={411.75}
          x2={-16114.38}
          y2={454.78}
          xlinkHref="#prefix__linear-gradient-395"
        />
        <linearGradient
          id="prefix__linear-gradient-406"
          x1={-16172.93}
          y1={485.53}
          x2={-16161.82}
          y2={480.55}
          xlinkHref="#prefix__linear-gradient-389"
        />
        <linearGradient
          id="prefix__linear-gradient-407"
          x1={15041.87}
          y1={548.28}
          x2={15026.79}
          y2={556.54}
          xlinkHref="#prefix__linear-gradient-387"
        />
        <linearGradient
          id="prefix__linear-gradient-408"
          x1={15040.41}
          y1={555.53}
          x2={15034.38}
          y2={545.93}
          xlinkHref="#prefix__linear-gradient-388"
        />
        <linearGradient
          id="prefix__linear-gradient-409"
          x1={-16269.74}
          y1={546.82}
          x2={-16258.63}
          y2={552.58}
          xlinkHref="#prefix__linear-gradient-389"
        />
        <linearGradient
          id="prefix__linear-gradient-410"
          x1={-16261.14}
          y1={547.33}
          x2={-16263.78}
          y2={552.68}
          gradientTransform="matrix(-1 0 0 1 -15531.42 0)"
          xlinkHref="#prefix__linear-gradient-388"
        />
        <linearGradient
          id="prefix__linear-gradient-411"
          x1={15055.87}
          y1={556.52}
          x2={15040.78}
          y2={564.78}
          xlinkHref="#prefix__linear-gradient-387"
        />
        <linearGradient
          id="prefix__linear-gradient-412"
          x1={15054.41}
          y1={563.77}
          x2={15048.38}
          y2={554.17}
          xlinkHref="#prefix__linear-gradient-388"
        />
        <linearGradient
          id="prefix__linear-gradient-413"
          x1={-16283.73}
          y1={555.07}
          x2={-16272.62}
          y2={560.83}
          xlinkHref="#prefix__linear-gradient-389"
        />
        <linearGradient
          id="prefix__linear-gradient-414"
          x1={-16275.14}
          y1={555.58}
          x2={-16277.78}
          y2={560.93}
          gradientTransform="matrix(-1 0 0 1 -15531.42 0)"
          xlinkHref="#prefix__linear-gradient-388"
        />
        <linearGradient
          id="prefix__linear-gradient-415"
          x1={-16283.47}
          y1={523.83}
          x2={-16306.05}
          y2={566.85}
          xlinkHref="#prefix__linear-gradient-395"
        />
        <linearGradient
          id="prefix__linear-gradient-416"
          x1={-16364.59}
          y1={597.6}
          x2={-16353.49}
          y2={592.62}
          xlinkHref="#prefix__linear-gradient-389"
        />
        <linearGradient
          id="prefix__linear-gradient-417"
          x1={14475.01}
          y1={222.24}
          x2={14459.93}
          y2={230.5}
          xlinkHref="#prefix__linear-gradient-387"
        />
        <linearGradient
          id="prefix__linear-gradient-418"
          x1={14473.55}
          y1={229.49}
          x2={14467.52}
          y2={219.89}
          xlinkHref="#prefix__linear-gradient-388"
        />
        <linearGradient
          id="prefix__linear-gradient-419"
          x1={-15702.88}
          y1={220.79}
          x2={-15691.77}
          y2={226.55}
          xlinkHref="#prefix__linear-gradient-389"
        />
        <linearGradient
          id="prefix__linear-gradient-420"
          x1={-15694.28}
          y1={221.29}
          x2={-15696.92}
          y2={226.64}
          gradientTransform="matrix(-1 0 0 1 -15531.42 0)"
          xlinkHref="#prefix__linear-gradient-388"
        />
        <linearGradient
          id="prefix__linear-gradient-421"
          x1={14489.01}
          y1={230.49}
          x2={14473.92}
          y2={238.75}
          xlinkHref="#prefix__linear-gradient-387"
        />
        <linearGradient
          id="prefix__linear-gradient-422"
          x1={14487.55}
          y1={237.74}
          x2={14481.52}
          y2={228.14}
          xlinkHref="#prefix__linear-gradient-388"
        />
        <linearGradient
          id="prefix__linear-gradient-423"
          x1={-15716.87}
          y1={229.03}
          x2={-15705.76}
          y2={234.79}
          xlinkHref="#prefix__linear-gradient-389"
        />
        <linearGradient
          id="prefix__linear-gradient-424"
          x1={-15708.28}
          y1={229.54}
          x2={-15710.92}
          y2={234.89}
          gradientTransform="matrix(-1 0 0 1 -15531.42 0)"
          xlinkHref="#prefix__linear-gradient-388"
        />
        <linearGradient
          id="prefix__linear-gradient-425"
          x1={-15716.61}
          y1={197.79}
          x2={-15739.19}
          y2={240.81}
          xlinkHref="#prefix__linear-gradient-395"
        />
        <linearGradient
          id="prefix__linear-gradient-426"
          x1={-15797.73}
          y1={271.57}
          x2={-15786.63}
          y2={266.59}
          xlinkHref="#prefix__linear-gradient-389"
        />
        <linearGradient
          id="prefix__New_Gradient_Swatch_copy_27"
          data-name="New Gradient Swatch copy 27"
          x1={-6652.05}
          y1={307.53}
          x2={-6451.99}
          y2={247.62}
          gradientTransform="matrix(-1 0 0 1 -6010.71 0)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.04} stopColor="#ab1919" />
          <stop offset={0.27} stopColor="#ba1414" />
          <stop offset={0.72} stopColor="#e30808" />
          <stop offset={1} stopColor="red" />
        </linearGradient>
        <linearGradient
          id="prefix__New_Gradient_Swatch_copy_27-2"
          x1={-6706.99}
          y1={322.64}
          x2={-6619.5}
          y2={303.03}
          xlinkHref="#prefix__New_Gradient_Swatch_copy_27"
        />
        <linearGradient
          id="prefix__New_Gradient_Swatch_copy_27-3"
          x1={-6535.69}
          y1={112.19}
          x2={-6631.54}
          y2={294.86}
          xlinkHref="#prefix__New_Gradient_Swatch_copy_27"
        />
        <linearGradient
          id="prefix__New_Gradient_Swatch_copy_38-11"
          x1={-2516.32}
          y1={232.84}
          x2={-2379.97}
          y2={232.84}
          xlinkHref="#prefix__New_Gradient_Swatch_copy_38"
        />
        <linearGradient
          id="prefix__New_Gradient_Swatch_copy_28"
          data-name="New Gradient Swatch copy 28"
          x1={-2546.59}
          y1={433.86}
          x2={-2346.25}
          y2={373.87}
          gradientTransform="matrix(-1 0 0 1 -1809.83 0)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.04} stopColor="#0d0202" />
          <stop offset={0.3} stopColor="#1a1111" />
          <stop offset={0.82} stopColor="#3c3a3a" />
          <stop offset={1} stopColor="#494949" />
        </linearGradient>
        <linearGradient
          id="prefix__New_Gradient_Swatch_copy_28-2"
          x1={-2601.6}
          y1={449}
          x2={-2513.99}
          y2={429.36}
          xlinkHref="#prefix__New_Gradient_Swatch_copy_28"
        />
        <linearGradient
          id="prefix__New_Gradient_Swatch_copy_28-3"
          x1={-2430.06}
          y1={238.25}
          x2={-2526.04}
          y2={421.17}
          xlinkHref="#prefix__New_Gradient_Swatch_copy_28"
        />
        <linearGradient
          id="prefix__New_Gradient_Swatch_copy_27-4"
          x1={-2642.47}
          y1={490.44}
          x2={-2442.13}
          y2={430.45}
          gradientTransform="matrix(-1 0 0 1 -1809.83 0)"
          xlinkHref="#prefix__New_Gradient_Swatch_copy_27"
        />
        <linearGradient
          id="prefix__New_Gradient_Swatch_copy_27-5"
          x1={-2697.48}
          y1={505.58}
          x2={-2609.87}
          y2={485.94}
          gradientTransform="matrix(-1 0 0 1 -1809.83 0)"
          xlinkHref="#prefix__New_Gradient_Swatch_copy_27"
        />
        <linearGradient
          id="prefix__New_Gradient_Swatch_copy_27-6"
          x1={-2525.94}
          y1={294.83}
          x2={-2621.93}
          y2={477.75}
          gradientTransform="matrix(-1 0 0 1 -1809.83 0)"
          xlinkHref="#prefix__New_Gradient_Swatch_copy_27"
        />
        <linearGradient
          id="prefix__New_Gradient_Swatch_copy_17"
          data-name="New Gradient Swatch copy 17"
          x1={9533.49}
          y1={538.58}
          x2={9685.22}
          y2={504.57}
          gradientTransform="translate(-8741.19)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#8d8d8d" />
          <stop offset={0.15} stopColor="#949494" />
          <stop offset={0.35} stopColor="#a6a6a6" />
          <stop offset={0.58} stopColor="#c2c2c2" />
          <stop offset={0.8} stopColor="#d2d2d2" />
          <stop offset={1} stopColor="#e4e4e4" />
        </linearGradient>
        <linearGradient
          id="prefix__New_Gradient_Swatch_copy_16"
          data-name="New Gradient Swatch copy 16"
          x1={9537.09}
          y1={543.05}
          x2={9681.45}
          y2={510.68}
          gradientTransform="translate(-8741.19)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.04} stopColor="#515151" />
          <stop offset={0.29} stopColor="#606060" />
          <stop offset={0.77} stopColor="#898989" />
          <stop offset={1} stopColor="#9e9e9e" />
        </linearGradient>
        <linearGradient
          id="prefix__New_Gradient_Swatch_copy_17-2"
          x1={-6917.15}
          y1={532.65}
          x2={-6875.65}
          y2={520.23}
          gradientTransform="matrix(-1 0 0 1 -6010.71 0)"
          xlinkHref="#prefix__New_Gradient_Swatch_copy_17"
        />
        <linearGradient
          id="prefix__New_Gradient_Swatch_copy_16-2"
          x1={-6916.33}
          y1={537.68}
          x2={-6880.39}
          y2={526.92}
          gradientTransform="matrix(-1 0 0 1 -6010.71 0)"
          xlinkHref="#prefix__New_Gradient_Swatch_copy_16"
        />
        <linearGradient
          id="prefix__New_Gradient_Swatch_copy_17-3"
          x1={-6840.45}
          y1={415.37}
          x2={-6893.07}
          y2={515.65}
          gradientTransform="matrix(-1 0 0 1 -6010.71 0)"
          xlinkHref="#prefix__New_Gradient_Swatch_copy_17"
        />
        <linearGradient
          id="prefix__New_Gradient_Swatch_copy_17-4"
          x1={9607.15}
          y1={550.1}
          x2={9705.81}
          y2={527.99}
          xlinkHref="#prefix__New_Gradient_Swatch_copy_17"
        />
        <linearGradient
          id="prefix__New_Gradient_Swatch_copy_17-5"
          x1={9637.95}
          y1={541.14}
          x2={9648.85}
          y2={519.61}
          xlinkHref="#prefix__New_Gradient_Swatch_copy_17"
        />
        <linearGradient
          id="prefix__New_Gradient_Swatch_copy_16-3"
          x1={9605.3}
          y1={557.9}
          x2={9681.54}
          y2={540.81}
          xlinkHref="#prefix__New_Gradient_Swatch_copy_16"
        />
        <linearGradient
          id="prefix__linear-gradient-427"
          x1={9632.95}
          y1={532.27}
          x2={9641.75}
          y2={532.27}
          gradientTransform="translate(-8741.19)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#171717" />
          <stop offset={1} stopColor="#222" />
        </linearGradient>
        <linearGradient
          id="prefix__linear-gradient-428"
          x1={9625.95}
          y1={534.83}
          x2={9649.26}
          y2={529.6}
          gradientTransform="translate(-8741.19)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#252525" />
          <stop offset={1} stopColor="#2d2d2d" />
        </linearGradient>
        <linearGradient
          id="prefix__linear-gradient-429"
          x1={9642.97}
          y1={538.07}
          x2={9651.77}
          y2={538.07}
          xlinkHref="#prefix__linear-gradient-427"
        />
        <linearGradient
          id="prefix__linear-gradient-430"
          x1={9635.97}
          y1={540.63}
          x2={9659.28}
          y2={535.4}
          xlinkHref="#prefix__linear-gradient-428"
        />
        <linearGradient
          id="prefix__New_Gradient_Swatch_copy_17-6"
          x1={9656.49}
          y1={546.48}
          x2={9717.16}
          y2={528.32}
          xlinkHref="#prefix__New_Gradient_Swatch_copy_17"
        />
        <linearGradient
          id="prefix__New_Gradient_Swatch_copy_16-4"
          x1={9657.6}
          y1={552.4}
          x2={9712.92}
          y2={535.83}
          xlinkHref="#prefix__New_Gradient_Swatch_copy_16"
        />
        <linearGradient
          id="prefix__New_Gradient_Swatch_copy_17-7"
          x1={9666.82}
          y1={490.19}
          x2={9650.3}
          y2={529.91}
          xlinkHref="#prefix__New_Gradient_Swatch_copy_17"
        />
        <linearGradient
          id="prefix__New_Gradient_Swatch_copy_17-8"
          x1={9649.28}
          y1={521.8}
          x2={9689.83}
          y2={509.65}
          xlinkHref="#prefix__New_Gradient_Swatch_copy_17"
        />
        <linearGradient
          id="prefix__linear-gradient-431"
          x1={9666.57}
          y1={532.67}
          x2={9675.36}
          y2={532.67}
          xlinkHref="#prefix__linear-gradient-427"
        />
        <linearGradient
          id="prefix__linear-gradient-432"
          x1={-11302.85}
          y1={535.22}
          x2={-11279.53}
          y2={530}
          gradientTransform="matrix(-1 0 0 1 -10361.67 0)"
          xlinkHref="#prefix__linear-gradient-428"
        />
        <linearGradient
          id="prefix__linear-gradient-433"
          x1={9656.55}
          y1={538.47}
          x2={9665.34}
          y2={538.47}
          xlinkHref="#prefix__linear-gradient-427"
        />
        <linearGradient
          id="prefix__linear-gradient-434"
          x1={-11292.83}
          y1={541.02}
          x2={-11269.51}
          y2={535.8}
          gradientTransform="matrix(-1 0 0 1 -10361.67 0)"
          xlinkHref="#prefix__linear-gradient-428"
        />
        <linearGradient
          id="prefix__linear-gradient-435"
          x1={-11303.29}
          y1={533.23}
          x2={-11279.98}
          y2={528}
          gradientTransform="matrix(-1 0 0 1 -10361.67 0)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#353535" />
          <stop offset={0.39} stopColor="#191919" />
          <stop offset={0.75} stopColor="#070707" />
          <stop offset={1} />
        </linearGradient>
        <linearGradient
          id="prefix__linear-gradient-436"
          x1={-11293.28}
          y1={539.03}
          x2={-11269.96}
          y2={533.8}
          xlinkHref="#prefix__linear-gradient-435"
        />
        <linearGradient
          id="prefix__New_Gradient_Swatch_copy_16-5"
          x1={9630.41}
          y1={537.55}
          x2={9676.63}
          y2={571.91}
          xlinkHref="#prefix__New_Gradient_Swatch_copy_16"
        />
        <linearGradient
          id="prefix__New_Gradient_Swatch_copy_16-6"
          x1={9630.91}
          y1={554.28}
          x2={9701.73}
          y2={538.41}
          xlinkHref="#prefix__New_Gradient_Swatch_copy_16"
        />
        <linearGradient
          id="prefix__New_Gradient_Swatch_copy_16-7"
          x1={9644.64}
          y1={547.29}
          x2={9710.42}
          y2={532.55}
          xlinkHref="#prefix__New_Gradient_Swatch_copy_16"
        />
        <linearGradient
          id="prefix__New_Gradient_Swatch_copy_17-9"
          x1={9584.53}
          y1={502.12}
          x2={9615.18}
          y2={495.25}
          xlinkHref="#prefix__New_Gradient_Swatch_copy_17"
        />
        <linearGradient
          id="prefix__New_Gradient_Swatch_copy_17-10"
          x1={-6882.66}
          y1={499.45}
          x2={-6865.15}
          y2={494.21}
          gradientTransform="matrix(-1 0 0 1 -6010.71 0)"
          xlinkHref="#prefix__New_Gradient_Swatch_copy_17"
        />
        <linearGradient
          id="prefix__New_Gradient_Swatch_copy_17-11"
          x1={-6864.31}
          y1={474.86}
          x2={-6876.14}
          y2={497.41}
          gradientTransform="matrix(-1 0 0 1 -6010.71 0)"
          xlinkHref="#prefix__New_Gradient_Swatch_copy_17"
        />
        <linearGradient
          id="prefix__New_Gradient_Swatch_copy_17-12"
          x1={9610.64}
          y1={512.14}
          x2={9633.03}
          y2={507.12}
          xlinkHref="#prefix__New_Gradient_Swatch_copy_17"
        />
        <linearGradient
          id="prefix__New_Gradient_Swatch_copy_17-13"
          x1={-6900.58}
          y1={510.35}
          x2={-6888.35}
          y2={506.69}
          gradientTransform="matrix(-1 0 0 1 -6010.71 0)"
          xlinkHref="#prefix__New_Gradient_Swatch_copy_17"
        />
        <linearGradient
          id="prefix__New_Gradient_Swatch_copy_17-14"
          x1={-6887.71}
          y1={492.94}
          x2={-6895.93}
          y2={508.61}
          gradientTransform="matrix(-1 0 0 1 -6010.71 0)"
          xlinkHref="#prefix__New_Gradient_Swatch_copy_17"
        />
        <linearGradient
          id="prefix__New_Gradient_Swatch_copy_17-15"
          x1={9634.44}
          y1={526.19}
          x2={9669.6}
          y2={518.31}
          xlinkHref="#prefix__New_Gradient_Swatch_copy_17"
        />
        <linearGradient
          id="prefix__New_Gradient_Swatch_copy_17-16"
          x1={-6933.01}
          y1={524.46}
          x2={-6920.77}
          y2={520.79}
          gradientTransform="matrix(-1 0 0 1 -6010.71 0)"
          xlinkHref="#prefix__New_Gradient_Swatch_copy_17"
        />
        <linearGradient
          id="prefix__New_Gradient_Swatch_copy_17-17"
          x1={-6913.22}
          y1={496.94}
          x2={-6926.63}
          y2={522.49}
          gradientTransform="matrix(-1 0 0 1 -6010.71 0)"
          xlinkHref="#prefix__New_Gradient_Swatch_copy_17"
        />
        <linearGradient
          id="prefix__New_Gradient_Swatch_copy_16-8"
          x1={9664.75}
          y1={554.6}
          x2={9721.7}
          y2={561.46}
          xlinkHref="#prefix__New_Gradient_Swatch_copy_16"
        />
        <linearGradient
          id="prefix__New_Gradient_Swatch_copy_24-111"
          data-name="New Gradient Swatch copy 24"
          x1={-11301.2}
          y1={540.62}
          x2={-11278.48}
          y2={557.5}
          gradientTransform="matrix(-1 0 0 1 -10350.67 0)"
          xlinkHref="#prefix__New_Gradient_Swatch_copy_38"
        />
        <linearGradient
          id="prefix__linear-gradient-437"
          x1={11296.79}
          y1={6158.5}
          x2={11305.1}
          y2={6159.5}
          gradientTransform="matrix(.87 -.5 0 1.15 -8848.39 -912.94)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#bebebe" />
          <stop offset={0.71} stopColor="#ebebeb" />
          <stop offset={1} stopColor="#fff" />
        </linearGradient>
        <linearGradient
          id="prefix__linear-gradient-438"
          x1={11296.79}
          y1={6162.04}
          x2={11305.1}
          y2={6163.04}
          xlinkHref="#prefix__linear-gradient-437"
        />
        <linearGradient
          id="prefix__New_Gradient_Swatch_copy_14"
          data-name="New Gradient Swatch copy 14"
          x1={10938.18}
          y1={549.51}
          x2={10939.91}
          y2={549.51}
          gradientTransform="translate(-10002.79)"
          xlinkHref="#prefix__New_Gradient_Swatch_copy_37"
        />
        <linearGradient
          id="prefix__New_Gradient_Swatch_copy_14-2"
          data-name="New Gradient Swatch copy 14"
          x1={-12402.26}
          y1={549.57}
          x2={-12401.02}
          y2={549.57}
          gradientTransform="matrix(-1 0 0 1 -11464.87 0)"
          xlinkHref="#prefix__New_Gradient_Swatch_copy_37"
        />
        <linearGradient
          id="prefix__New_Gradient_Swatch_copy_14-3"
          data-name="New Gradient Swatch copy 14"
          x1={10938.01}
          y1={553.64}
          x2={10939.74}
          y2={553.64}
          gradientTransform="translate(-10002.79)"
          xlinkHref="#prefix__New_Gradient_Swatch_copy_37"
        />
        <linearGradient
          id="prefix__New_Gradient_Swatch_copy_14-4"
          data-name="New Gradient Swatch copy 14"
          x1={-12402.08}
          y1={553.7}
          x2={-12400.84}
          y2={553.7}
          gradientTransform="matrix(-1 0 0 1 -11464.87 0)"
          xlinkHref="#prefix__New_Gradient_Swatch_copy_37"
        />
        <linearGradient
          id="prefix__linear-gradient-439"
          x1={-7122.89}
          y1={548.4}
          x2={-7142.16}
          y2={558.44}
          gradientTransform="matrix(-1 0 0 1 -6186.33 0)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#d4d4d4" />
          <stop offset={0.05} stopColor="#d6d6d6" />
          <stop offset={0.51} stopColor="#e1e1e1" />
          <stop offset={1} stopColor="#e5e5e5" />
        </linearGradient>
        <linearGradient
          id="prefix__linear-gradient-440"
          x1={-7122.89}
          y1={552.44}
          x2={-7142.16}
          y2={562.48}
          xlinkHref="#prefix__linear-gradient-439"
        />
        <linearGradient
          id="prefix__New_Gradient_Swatch_copy_37-15"
          x1={-2396.25}
          y1={333.04}
          x2={-2242.23}
          y2={286.92}
          xlinkHref="#prefix__New_Gradient_Swatch_copy_37"
        />
        <linearGradient
          id="prefix__New_Gradient_Swatch_copy_37-16"
          x1={-2463.61}
          y1={467.86}
          x2={-2341.82}
          y2={518.42}
          xlinkHref="#prefix__New_Gradient_Swatch_copy_37"
        />
        <linearGradient
          id="prefix__New_Gradient_Swatch_copy_24-112"
          data-name="New Gradient Swatch copy 24"
          x1={-2541.97}
          y1={430.41}
          x2={-2419.96}
          y2={481.64}
          xlinkHref="#prefix__New_Gradient_Swatch_copy_38"
        />
        <linearGradient
          id="prefix__New_Gradient_Swatch_copy_37-17"
          x1={-2463.61}
          y1={421.69}
          x2={-2341.82}
          y2={472.25}
          xlinkHref="#prefix__New_Gradient_Swatch_copy_37"
        />
        <linearGradient
          id="prefix__New_Gradient_Swatch_copy_38-12"
          x1={-2541.97}
          y1={384.25}
          x2={-2419.96}
          y2={435.47}
          xlinkHref="#prefix__New_Gradient_Swatch_copy_38"
        />
        <linearGradient
          id="prefix__New_Gradient_Swatch_copy_37-18"
          x1={-2436.17}
          y1={313.19}
          x2={-2414.26}
          y2={306.63}
          xlinkHref="#prefix__New_Gradient_Swatch_copy_37"
        />
        <linearGradient
          id="prefix__New_Gradient_Swatch_copy_38-13"
          x1={-2826.16}
          y1={197.3}
          x2={-2430.4}
          y2={197.3}
          xlinkHref="#prefix__New_Gradient_Swatch_copy_38"
        />
        <linearGradient
          id="prefix__New_Gradient_Swatch_copy_37-19"
          x1={-2474.36}
          y1={372.92}
          x2={-2074.78}
          y2={253.27}
          xlinkHref="#prefix__New_Gradient_Swatch_copy_37"
        />
        <linearGradient
          id="prefix__New_Gradient_Swatch_copy_37-20"
          x1={-2371.55}
          y1={307.07}
          x2={-2347.33}
          y2={351.24}
          xlinkHref="#prefix__New_Gradient_Swatch_copy_37"
        />
        <linearGradient
          id="prefix__New_Gradient_Swatch_copy_38-14"
          x1={-2446.37}
          y1={276.62}
          x2={-2330.39}
          y2={276.62}
          xlinkHref="#prefix__New_Gradient_Swatch_copy_38"
        />
        <radialGradient
          id="prefix__radial-gradient"
          cx={-2437.84}
          cy={342.3}
          r={621.85}
          gradientTransform="matrix(1 0 0 -1 2993.51 684.59)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.59} stopColor="#fff" />
          <stop offset={1} />
        </radialGradient>
        <radialGradient
          id="prefix__Radial_Gradient_2"
          data-name="Radial Gradient 2"
          cx={-2478.84}
          cy={206.34}
          r={42.67}
          gradientTransform="matrix(-1 0 0 1 -1882.17 0)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#fff" />
          <stop offset={1} />
        </radialGradient>
        <radialGradient
          id="prefix__Radial_Gradient_2-2"
          cx={-2624.27}
          cy={9.3}
          r={25.56}
          xlinkHref="#prefix__Radial_Gradient_2"
        />
        <radialGradient
          id="prefix__Radial_Gradient_1"
          data-name="Radial Gradient 1"
          cx={6612.66}
          cy={135.73}
          r={2.96}
          gradientTransform="translate(-6439.07)"
          xlinkHref="#prefix__Radial_Gradient_2"
        />
        <radialGradient
          id="prefix__Radial_Gradient_1-2"
          data-name="Radial Gradient 1"
          cx={6620.05}
          cy={140.02}
          r={2.96}
          gradientTransform="translate(-6439.07)"
          xlinkHref="#prefix__Radial_Gradient_2"
        />
        <radialGradient
          id="prefix__Radial_Gradient_1-3"
          data-name="Radial Gradient 1"
          cx={6682.09}
          cy={176.29}
          r={2.96}
          gradientTransform="translate(-6439.07)"
          xlinkHref="#prefix__Radial_Gradient_2"
        />
        <radialGradient
          id="prefix__Radial_Gradient_1-4"
          data-name="Radial Gradient 1"
          cx={6689.48}
          cy={180.59}
          r={2.96}
          gradientTransform="translate(-6439.07)"
          xlinkHref="#prefix__Radial_Gradient_2"
        />
        <radialGradient
          id="prefix__Radial_Gradient_1-5"
          data-name="Radial Gradient 1"
          cx={6708.36}
          cy={192.14}
          r={2.96}
          gradientTransform="translate(-6439.07)"
          xlinkHref="#prefix__Radial_Gradient_2"
        />
        <radialGradient
          id="prefix__Radial_Gradient_1-6"
          data-name="Radial Gradient 1"
          cx={6715.75}
          cy={196.43}
          r={2.96}
          gradientTransform="translate(-6439.07)"
          xlinkHref="#prefix__Radial_Gradient_2"
        />
        <radialGradient
          id="prefix__Radial_Gradient_1-7"
          data-name="Radial Gradient 1"
          cx={6777.8}
          cy={232.7}
          r={2.96}
          gradientTransform="translate(-6439.07)"
          xlinkHref="#prefix__Radial_Gradient_2"
        />
        <radialGradient
          id="prefix__Radial_Gradient_1-8"
          data-name="Radial Gradient 1"
          cx={6785.19}
          cy={236.99}
          r={2.96}
          gradientTransform="translate(-6439.07)"
          xlinkHref="#prefix__Radial_Gradient_2"
        />
        <radialGradient
          id="prefix__Radial_Gradient_1-9"
          data-name="Radial Gradient 1"
          cx={6803.84}
          cy={248.43}
          r={2.96}
          gradientTransform="translate(-6439.07)"
          xlinkHref="#prefix__Radial_Gradient_2"
        />
        <radialGradient
          id="prefix__Radial_Gradient_1-10"
          data-name="Radial Gradient 1"
          cx={6811.23}
          cy={252.72}
          r={2.96}
          gradientTransform="translate(-6439.07)"
          xlinkHref="#prefix__Radial_Gradient_2"
        />
        <radialGradient
          id="prefix__Radial_Gradient_1-11"
          data-name="Radial Gradient 1"
          cx={6873.27}
          cy={288.99}
          r={2.96}
          gradientTransform="translate(-6439.07)"
          xlinkHref="#prefix__Radial_Gradient_2"
        />
        <radialGradient
          id="prefix__Radial_Gradient_1-12"
          data-name="Radial Gradient 1"
          cx={6880.66}
          cy={293.28}
          r={2.96}
          gradientTransform="translate(-6439.07)"
          xlinkHref="#prefix__Radial_Gradient_2"
        />
        <radialGradient
          id="prefix__Radial_Gradient_1-13"
          data-name="Radial Gradient 1"
          cx={6899.43}
          cy={304.77}
          r={2.96}
          gradientTransform="translate(-6439.07)"
          xlinkHref="#prefix__Radial_Gradient_2"
        />
        <radialGradient
          id="prefix__Radial_Gradient_1-14"
          data-name="Radial Gradient 1"
          cx={6906.82}
          cy={309.07}
          r={2.96}
          gradientTransform="translate(-6439.07)"
          xlinkHref="#prefix__Radial_Gradient_2"
        />
        <radialGradient
          id="prefix__Radial_Gradient_1-15"
          data-name="Radial Gradient 1"
          cx={6968.86}
          cy={345.33}
          r={2.96}
          gradientTransform="translate(-6439.07)"
          xlinkHref="#prefix__Radial_Gradient_2"
        />
        <radialGradient
          id="prefix__Radial_Gradient_1-16"
          data-name="Radial Gradient 1"
          cx={6976.25}
          cy={349.63}
          r={2.96}
          gradientTransform="translate(-6439.07)"
          xlinkHref="#prefix__Radial_Gradient_2"
        />
        <radialGradient
          id="prefix__Radial_Gradient_1-17"
          data-name="Radial Gradient 1"
          cx={6995.13}
          cy={361.18}
          r={2.96}
          gradientTransform="translate(-6439.07)"
          xlinkHref="#prefix__Radial_Gradient_2"
        />
        <radialGradient
          id="prefix__Radial_Gradient_1-18"
          data-name="Radial Gradient 1"
          cx={7002.52}
          cy={365.47}
          r={2.96}
          gradientTransform="translate(-6439.07)"
          xlinkHref="#prefix__Radial_Gradient_2"
        />
        <radialGradient
          id="prefix__Radial_Gradient_1-19"
          data-name="Radial Gradient 1"
          cx={7064.56}
          cy={401.74}
          r={2.96}
          gradientTransform="translate(-6439.07)"
          xlinkHref="#prefix__Radial_Gradient_2"
        />
        <radialGradient
          id="prefix__Radial_Gradient_1-20"
          data-name="Radial Gradient 1"
          cx={7071.95}
          cy={406.03}
          r={2.96}
          gradientTransform="translate(-6439.07)"
          xlinkHref="#prefix__Radial_Gradient_2"
        />
        <radialGradient
          id="prefix__Radial_Gradient_1-21"
          data-name="Radial Gradient 1"
          cx={7090.6}
          cy={417.47}
          r={2.96}
          gradientTransform="translate(-6439.07)"
          xlinkHref="#prefix__Radial_Gradient_2"
        />
        <radialGradient
          id="prefix__Radial_Gradient_1-22"
          data-name="Radial Gradient 1"
          cx={7097.99}
          cy={421.76}
          r={2.96}
          gradientTransform="translate(-6439.07)"
          xlinkHref="#prefix__Radial_Gradient_2"
        />
        <radialGradient
          id="prefix__Radial_Gradient_1-23"
          data-name="Radial Gradient 1"
          cx={7160.04}
          cy={458.03}
          r={2.96}
          gradientTransform="translate(-6439.07)"
          xlinkHref="#prefix__Radial_Gradient_2"
        />
        <radialGradient
          id="prefix__Radial_Gradient_1-24"
          data-name="Radial Gradient 1"
          cx={7167.43}
          cy={462.32}
          r={2.96}
          gradientTransform="translate(-6439.07)"
          xlinkHref="#prefix__Radial_Gradient_2"
        />
        <radialGradient
          id="prefix__Radial_Gradient_1-25"
          data-name="Radial Gradient 1"
          cx={7186.3}
          cy={473.87}
          r={2.96}
          gradientTransform="translate(-6439.07)"
          xlinkHref="#prefix__Radial_Gradient_2"
        />
        <radialGradient
          id="prefix__Radial_Gradient_1-26"
          data-name="Radial Gradient 1"
          cx={7193.69}
          cy={478.17}
          r={2.96}
          gradientTransform="translate(-6439.07)"
          xlinkHref="#prefix__Radial_Gradient_2"
        />
        <radialGradient
          id="prefix__Radial_Gradient_1-27"
          data-name="Radial Gradient 1"
          cx={7255.74}
          cy={514.43}
          r={2.96}
          gradientTransform="translate(-6439.07)"
          xlinkHref="#prefix__Radial_Gradient_2"
        />
        <radialGradient
          id="prefix__Radial_Gradient_1-28"
          data-name="Radial Gradient 1"
          cx={7263.13}
          cy={518.73}
          r={2.96}
          gradientTransform="translate(-6439.07)"
          xlinkHref="#prefix__Radial_Gradient_2"
        />
        <radialGradient
          id="prefix__Radial_Gradient_1-29"
          data-name="Radial Gradient 1"
          cx={7280.06}
          cy={529.38}
          r={2.96}
          gradientTransform="translate(-6439.07)"
          xlinkHref="#prefix__Radial_Gradient_2"
        />
        <radialGradient
          id="prefix__Radial_Gradient_1-30"
          data-name="Radial Gradient 1"
          cx={7287.45}
          cy={533.68}
          r={2.96}
          gradientTransform="translate(-6439.07)"
          xlinkHref="#prefix__Radial_Gradient_2"
        />
        <radialGradient
          id="prefix__Radial_Gradient_1-31"
          data-name="Radial Gradient 1"
          cx={7349.49}
          cy={569.95}
          r={2.96}
          gradientTransform="translate(-6439.07)"
          xlinkHref="#prefix__Radial_Gradient_2"
        />
        <radialGradient
          id="prefix__Radial_Gradient_1-32"
          data-name="Radial Gradient 1"
          cx={7356.88}
          cy={574.24}
          r={2.96}
          gradientTransform="translate(-6439.07)"
          xlinkHref="#prefix__Radial_Gradient_2"
        />
        <radialGradient
          id="prefix__radial-gradient-2"
          cx={-15875.33}
          cy={328.33}
          r={1.41}
          gradientTransform="matrix(-1 0 0 1 -15531.42 0)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#eeebf2" />
          <stop offset={0.58} stopColor="#d4d1d8" />
          <stop offset={0.94} stopColor="#a5a6b9" />
          <stop offset={1} stopColor="#9d9eb3" />
        </radialGradient>
        <radialGradient
          id="prefix__radial-gradient-3"
          cx={-15889.51}
          cy={336.58}
          r={1.41}
          xlinkHref="#prefix__radial-gradient-2"
        />
        <radialGradient
          id="prefix__radial-gradient-4"
          cx={-15930.55}
          cy={360.46}
          r={1.41}
          xlinkHref="#prefix__radial-gradient-2"
        />
        <radialGradient
          id="prefix__radial-gradient-5"
          cx={-15972.68}
          cy={384.83}
          r={1.41}
          xlinkHref="#prefix__radial-gradient-2"
        />
        <radialGradient
          id="prefix__radial-gradient-6"
          cx={-16012.89}
          cy={374.03}
          r={0.51}
          gradientTransform="matrix(-1 0 0 1 -15531.42 0)"
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
          id="prefix__radial-gradient-7"
          cx={-15997.85}
          cy={382.68}
          r={13.18}
          xlinkHref="#prefix__radial-gradient-6"
        />
        <radialGradient
          id="prefix__radial-gradient-8"
          cx={-22424.99}
          cy={-12066.81}
          r={11.03}
          gradientTransform="matrix(-.09 -.18 -.88 .47 -12289.98 2086.25)"
          xlinkHref="#prefix__radial-gradient-6"
        />
        <radialGradient
          id="prefix__radial-gradient-9"
          cx={-16070.74}
          cy={437.64}
          r={1.41}
          xlinkHref="#prefix__radial-gradient-2"
        />
        <radialGradient
          id="prefix__radial-gradient-10"
          cx={-16084.92}
          cy={445.89}
          r={1.41}
          xlinkHref="#prefix__radial-gradient-2"
        />
        <radialGradient
          id="prefix__radial-gradient-11"
          cx={-16125.96}
          cy={469.77}
          r={1.41}
          xlinkHref="#prefix__radial-gradient-2"
        />
        <radialGradient
          id="prefix__radial-gradient-12"
          cx={-16168.09}
          cy={494.14}
          r={1.41}
          xlinkHref="#prefix__radial-gradient-2"
        />
        <radialGradient
          id="prefix__radial-gradient-13"
          cx={-16208.3}
          cy={483.34}
          r={0.51}
          xlinkHref="#prefix__radial-gradient-6"
        />
        <radialGradient
          id="prefix__radial-gradient-14"
          cx={-16193.26}
          cy={491.99}
          r={13.18}
          xlinkHref="#prefix__radial-gradient-6"
        />
        <radialGradient
          id="prefix__radial-gradient-15"
          cx={-23366.15}
          cy={-12188.03}
          r={11.03}
          gradientTransform="matrix(-.09 -.18 -.88 .47 -12289.98 2086.25)"
          xlinkHref="#prefix__radial-gradient-6"
        />
        <radialGradient
          id="prefix__radial-gradient-16"
          cx={-16262.41}
          cy={549.71}
          r={1.41}
          xlinkHref="#prefix__radial-gradient-2"
        />
        <radialGradient
          id="prefix__radial-gradient-17"
          cx={-16276.58}
          cy={557.97}
          r={1.41}
          xlinkHref="#prefix__radial-gradient-2"
        />
        <radialGradient
          id="prefix__radial-gradient-18"
          cx={-16317.62}
          cy={581.85}
          r={1.41}
          xlinkHref="#prefix__radial-gradient-2"
        />
        <radialGradient
          id="prefix__radial-gradient-19"
          cx={-16359.76}
          cy={606.22}
          r={1.41}
          xlinkHref="#prefix__radial-gradient-2"
        />
        <radialGradient
          id="prefix__radial-gradient-20"
          cx={-16399.97}
          cy={595.41}
          r={0.51}
          xlinkHref="#prefix__radial-gradient-6"
        />
        <radialGradient
          id="prefix__radial-gradient-21"
          cx={-16384.92}
          cy={604.07}
          r={13.18}
          xlinkHref="#prefix__radial-gradient-6"
        />
        <radialGradient
          id="prefix__radial-gradient-22"
          cx={-24310.73}
          cy={-12304.65}
          r={11.03}
          gradientTransform="matrix(-.09 -.18 -.88 .47 -12289.98 2086.25)"
          xlinkHref="#prefix__radial-gradient-6"
        />
        <radialGradient
          id="prefix__radial-gradient-23"
          cx={-15695.55}
          cy={223.67}
          r={1.41}
          xlinkHref="#prefix__radial-gradient-2"
        />
        <radialGradient
          id="prefix__radial-gradient-24"
          cx={-15709.72}
          cy={231.93}
          r={1.41}
          xlinkHref="#prefix__radial-gradient-2"
        />
        <radialGradient
          id="prefix__radial-gradient-25"
          cx={-15750.76}
          cy={255.81}
          r={1.41}
          xlinkHref="#prefix__radial-gradient-2"
        />
        <radialGradient
          id="prefix__radial-gradient-26"
          cx={-15792.9}
          cy={280.18}
          r={1.41}
          xlinkHref="#prefix__radial-gradient-2"
        />
        <radialGradient
          id="prefix__radial-gradient-27"
          cx={-15833.11}
          cy={269.37}
          r={0.51}
          xlinkHref="#prefix__radial-gradient-6"
        />
        <radialGradient
          id="prefix__radial-gradient-28"
          cx={-15818.06}
          cy={278.03}
          r={13.18}
          xlinkHref="#prefix__radial-gradient-6"
        />
        <radialGradient
          id="prefix__radial-gradient-29"
          cx={-21541.06}
          cy={-11957.21}
          r={11.03}
          gradientTransform="matrix(-.09 -.18 -.88 .47 -12289.98 2086.25)"
          xlinkHref="#prefix__radial-gradient-6"
        />
        <radialGradient
          id="prefix__Radial_Gradient_1-33"
          data-name="Radial Gradient 1"
          cx={9668.9}
          cy={548.25}
          r={11.99}
          gradientTransform="translate(-8741.19)"
          xlinkHref="#prefix__Radial_Gradient_2"
        />
        <radialGradient
          id="prefix__radial-gradient-30"
          cx={-12367.82}
          cy={3587.25}
          r={4.51}
          gradientTransform="matrix(-.75 .33 .26 .6 -9294.12 2459.26)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#e5e5e5" />
          <stop offset={0.02} stopColor="#dcdcdc" />
          <stop offset={0.12} stopColor="#a9a9a9" />
          <stop offset={0.23} stopColor="#7c7c7c" />
          <stop offset={0.34} stopColor="#565656" />
          <stop offset={0.45} stopColor="#363636" />
          <stop offset={0.57} stopColor="#1e1e1e" />
          <stop offset={0.7} stopColor="#0d0d0d" />
          <stop offset={0.83} stopColor="#030303" />
          <stop offset={1} />
        </radialGradient>
        <radialGradient
          id="prefix__radial-gradient-31"
          cx={-12365.85}
          cy={3592.95}
          r={4.51}
          xlinkHref="#prefix__radial-gradient-30"
        />
        <radialGradient
          id="prefix__radial-gradient-32"
          cx={9653.87}
          cy={528.61}
          r={15.44}
          gradientTransform="translate(-8741.19)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#515151" />
          <stop offset={0.16} stopColor="#363636" />
          <stop offset={0.34} stopColor="#1e1e1e" />
          <stop offset={0.53} stopColor="#0d0d0d" />
          <stop offset={0.74} stopColor="#030303" />
          <stop offset={1} />
        </radialGradient>
        <radialGradient
          id="prefix__radial-gradient-33"
          cx={9655.44}
          cy={523.3}
          r={7.85}
          xlinkHref="#prefix__radial-gradient-32"
        />
        <clipPath id="prefix__clip-path">
          <path fill="none" d="M1120.82 695.56V698l3.66-2.1v-2.44l-3.66 2.1z" />
        </clipPath>
        <clipPath id="prefix__clip-path-2">
          <path
            fill="none"
            d="M1120.83 695.56V698L0 48.31v-2.44l1120.83 649.69z"
          />
        </clipPath>
        <clipPath id="prefix__clip-path-3">
          <path
            fill="none"
            d="M0 45.87l1120.83 649.69 3.65-2.1L3.65 43.76 0 45.87z"
          />
        </clipPath>
        <clipPath id="prefix__clip-path-4">
          <path
            fill="none"
            d="M1137.84 685.74v2.44l3.66-2.1v-2.44l-3.66 2.1z"
          />
        </clipPath>
        <clipPath id="prefix__clip-path-5">
          <path
            fill="none"
            d="M1137.85 685.74v2.44L17.02 38.49v-2.44l1120.83 649.69z"
          />
        </clipPath>
        <clipPath id="prefix__clip-path-6">
          <path
            fill="none"
            d="M17.02 36.05l1120.83 649.69 3.65-2.1L20.66 33.95l-3.64 2.1z"
          />
        </clipPath>
        <mask
          id="prefix__mask"
          x={0}
          y={15.33}
          width={1143.76}
          height={684.97}
          maskUnits="userSpaceOnUse"
        >
          <path
            transform="rotate(-180 555.67 342.295)"
            fill="url(#prefix__radial-gradient)"
            d="M.71 15.33h1109.92v653.94H.71z"
          />
        </mask>
      </defs>
      <g
        style={{
          isolation: "isolate",
        }}
      >
        <g id="prefix__Layer_2" data-name="Layer 2">
          <g id="prefix__Layer_1-2" data-name="Layer 1">
            <g id="prefix__drayagbackground">
              <g mask="url(#prefix__mask)">
                <path
                  fill="url(#prefix__linear-gradient)"
                  d="M3.69 54.29v2.44l-3.66-2.1v-2.44l3.66 2.1z"
                />
                <path
                  fill="url(#prefix__linear-gradient-2)"
                  d="M3.69 54.29v2.44l30.05-17.48v-2.44L3.69 54.29z"
                />
                <path
                  fill="url(#prefix__linear-gradient-3)"
                  d="M33.74 36.81L3.69 54.29l-3.66-2.1L30.1 34.71l3.64 2.1z"
                />
                <path
                  fill="url(#prefix__linear-gradient-4)"
                  d="M13.43 59.94v2.44l-3.66-2.1v-2.45l3.66 2.11z"
                />
                <path
                  fill="url(#prefix__linear-gradient-5)"
                  d="M13.42 59.94v2.44L43.48 44.9v-2.44L13.42 59.94z"
                />
                <path
                  fill="url(#prefix__linear-gradient-6)"
                  d="M43.48 42.46L13.42 59.94l-3.65-2.11 30.07-17.48 3.64 2.11z"
                />
                <path
                  fill="url(#prefix__linear-gradient-7)"
                  d="M23.16 65.58v2.45l-3.66-2.11v-2.44l3.66 2.1z"
                />
                <path
                  fill="url(#prefix__linear-gradient-8)"
                  d="M23.16 65.58v2.45l30.06-17.49V48.1L23.16 65.58z"
                />
                <path
                  fill="url(#prefix__linear-gradient-9)"
                  d="M53.22 48.1L23.16 65.58l-3.66-2.1L49.57 46l3.65 2.1z"
                />
                <path
                  fill="url(#prefix__linear-gradient-10)"
                  d="M32.9 71.23v2.44l-3.66-2.1v-2.45l3.66 2.11z"
                />
                <path
                  fill="url(#prefix__linear-gradient-11)"
                  d="M32.9 71.23v2.44l30.05-17.48v-2.44L32.9 71.23z"
                />
                <path
                  fill="url(#prefix__linear-gradient-12)"
                  d="M62.95 53.75L32.9 71.23l-3.66-2.11 30.07-17.48 3.64 2.11z"
                />
                <path
                  fill="url(#prefix__linear-gradient-13)"
                  d="M42.64 76.87v2.45l-3.66-2.11v-2.44l3.66 2.1z"
                />
                <path
                  fill="url(#prefix__linear-gradient-14)"
                  d="M42.63 76.87v2.45l30.06-17.49V59.4L42.63 76.87z"
                />
                <path
                  fill="url(#prefix__linear-gradient-15)"
                  d="M72.69 59.4L42.63 76.87l-3.65-2.1 30.07-17.48 3.64 2.11z"
                />
                <path
                  fill="url(#prefix__linear-gradient-16)"
                  d="M52.38 82.52v2.44l-3.67-2.1v-2.44l3.67 2.1z"
                />
                <path
                  fill="url(#prefix__linear-gradient-17)"
                  d="M52.37 82.52v2.44l30.06-17.48v-2.44L52.37 82.52z"
                />
                <path
                  fill="url(#prefix__linear-gradient-18)"
                  d="M82.43 65.04L52.37 82.52l-3.66-2.1 30.07-17.49 3.65 2.11z"
                />
                <path
                  fill="url(#prefix__linear-gradient-19)"
                  d="M62.11 88.16v2.45l-3.66-2.11v-2.44l3.66 2.1z"
                />
                <path
                  fill="url(#prefix__linear-gradient-20)"
                  d="M62.11 88.16v2.45l30.06-17.49v-2.43L62.11 88.16z"
                />
                <path
                  fill="url(#prefix__linear-gradient-21)"
                  d="M92.17 70.69L62.11 88.16l-3.66-2.1 30.07-17.48 3.65 2.11z"
                />
                <path
                  fill="url(#prefix__linear-gradient-22)"
                  d="M71.85 93.81v2.44l-3.66-2.1V91.7l3.66 2.11z"
                />
                <path
                  fill="url(#prefix__linear-gradient-23)"
                  d="M71.84 93.81v2.44l30.06-17.48v-2.44L71.84 93.81z"
                />
                <path
                  fill="url(#prefix__linear-gradient-24)"
                  d="M101.9 76.33L71.84 93.81l-3.65-2.11 30.07-17.48 3.64 2.11z"
                />
                <path
                  fill="url(#prefix__linear-gradient-25)"
                  d="M81.59 99.45v2.45l-3.67-2.11v-2.44l3.67 2.1z"
                />
                <path
                  fill="url(#prefix__linear-gradient-26)"
                  d="M81.58 99.45v2.45l30.06-17.49v-2.43L81.58 99.45z"
                />
                <path
                  fill="url(#prefix__linear-gradient-27)"
                  d="M111.64 81.98L81.58 99.45l-3.66-2.1 30.07-17.48 3.65 2.11z"
                />
                <path
                  fill="url(#prefix__linear-gradient-28)"
                  d="M91.32 105.1v2.44l-3.66-2.1V103l3.66 2.1z"
                />
                <path
                  fill="url(#prefix__linear-gradient-29)"
                  d="M91.32 105.1v2.44l30.06-17.48v-2.44L91.32 105.1z"
                />
                <path
                  fill="url(#prefix__linear-gradient-30)"
                  d="M121.38 87.62L91.32 105.1l-3.66-2.1 30.07-17.49 3.65 2.11z"
                />
                <path
                  fill="url(#prefix__linear-gradient-31)"
                  d="M101.06 110.74v2.45l-3.66-2.11v-2.44l3.66 2.1z"
                />
                <path
                  fill="url(#prefix__linear-gradient-32)"
                  d="M101.06 110.74v2.45l30.05-17.49v-2.43l-30.05 17.47z"
                />
                <path
                  fill="url(#prefix__linear-gradient-33)"
                  d="M131.11 93.27l-30.05 17.47-3.66-2.1 30.07-17.48 3.64 2.11z"
                />
                <path
                  fill="url(#prefix__linear-gradient-34)"
                  d="M110.8 116.39v2.44l-3.66-2.1v-2.44l3.66 2.1z"
                />
                <path
                  fill="url(#prefix__linear-gradient-35)"
                  d="M110.79 116.39v2.44l30.06-17.48v-2.44l-30.06 17.48z"
                />
                <path
                  fill="url(#prefix__linear-gradient-36)"
                  d="M140.85 98.91l-30.06 17.48-3.65-2.1 30.07-17.49 3.64 2.11z"
                />
                <path
                  fill="url(#prefix__linear-gradient-37)"
                  d="M120.53 122.03v2.45l-3.66-2.1v-2.45l3.66 2.1z"
                />
                <path
                  fill="url(#prefix__linear-gradient-38)"
                  d="M120.53 122.03v2.45L150.59 107v-2.44l-30.06 17.47z"
                />
                <path
                  fill="url(#prefix__linear-gradient-39)"
                  d="M150.59 104.56l-30.06 17.47-3.66-2.1 30.07-17.48 3.65 2.11z"
                />
                <path
                  fill="url(#prefix__linear-gradient-40)"
                  d="M130.27 127.68v2.44l-3.66-2.1v-2.44l3.66 2.1z"
                />
                <path
                  fill="url(#prefix__linear-gradient-41)"
                  d="M130.26 127.68v2.44l30.06-17.48v-2.44l-30.06 17.48z"
                />
                <path
                  fill="url(#prefix__linear-gradient-42)"
                  d="M160.32 110.2l-30.06 17.48-3.65-2.1 30.07-17.49 3.64 2.11z"
                />
                <path
                  fill="url(#prefix__linear-gradient-43)"
                  d="M140.01 133.32v2.45l-3.66-2.1v-2.45l3.66 2.1z"
                />
                <path
                  fill="url(#prefix__linear-gradient-44)"
                  d="M140 133.32v2.45l30.06-17.48v-2.44L140 133.32z"
                />
                <path
                  fill="url(#prefix__linear-gradient-45)"
                  d="M170.06 115.85L140 133.32l-3.65-2.1 30.07-17.48 3.64 2.11z"
                />
                <path
                  fill="url(#prefix__linear-gradient-46)"
                  d="M149.75 138.97v2.44l-3.67-2.1v-2.44l3.67 2.1z"
                />
                <path
                  fill="url(#prefix__linear-gradient-47)"
                  d="M149.74 138.97v2.44l30.06-17.48v-2.44l-30.06 17.48z"
                />
                <path
                  fill="url(#prefix__linear-gradient-48)"
                  d="M179.8 121.49l-30.06 17.48-3.66-2.1 30.07-17.48 3.65 2.1z"
                />
                <path
                  fill="url(#prefix__linear-gradient-49)"
                  d="M159.48 144.62v2.44l-3.66-2.1v-2.45l3.66 2.11z"
                />
                <path
                  fill="url(#prefix__linear-gradient-50)"
                  d="M159.48 144.62v2.44l30.05-17.48v-2.44l-30.05 17.48z"
                />
                <path
                  fill="url(#prefix__linear-gradient-51)"
                  d="M189.53 127.14l-30.05 17.48-3.66-2.11 30.07-17.48 3.64 2.11z"
                />
                <path
                  fill="url(#prefix__linear-gradient-52)"
                  d="M169.22 150.26v2.44l-3.66-2.1v-2.44l3.66 2.1z"
                />
                <path
                  fill="url(#prefix__linear-gradient-53)"
                  d="M169.21 150.26v2.44l30.06-17.48v-2.44l-30.06 17.48z"
                />
                <path
                  fill="url(#prefix__linear-gradient-54)"
                  d="M199.27 132.78l-30.06 17.48-3.65-2.1 30.07-17.48 3.64 2.1z"
                />
                <path
                  fill="url(#prefix__linear-gradient-55)"
                  d="M178.96 155.91v2.44l-3.67-2.1v-2.45l3.67 2.11z"
                />
                <path
                  fill="url(#prefix__linear-gradient-56)"
                  d="M178.95 155.91v2.44l30.06-17.48v-2.44l-30.06 17.48z"
                />
                <path
                  fill="url(#prefix__linear-gradient-57)"
                  d="M209.01 138.43l-30.06 17.48-3.66-2.11 30.07-17.48 3.65 2.11z"
                />
                <path
                  fill="url(#prefix__linear-gradient-58)"
                  d="M188.69 161.55v2.44l-3.66-2.1v-2.44l3.66 2.1z"
                />
                <path
                  fill="url(#prefix__linear-gradient-59)"
                  d="M188.69 161.55v2.44l30.06-17.48v-2.44l-30.06 17.48z"
                />
                <path
                  fill="url(#prefix__linear-gradient-60)"
                  d="M218.75 144.07l-30.06 17.48-3.66-2.1 30.07-17.48 3.65 2.1z"
                />
                <path
                  fill="url(#prefix__linear-gradient-61)"
                  d="M198.43 167.2v2.44l-3.66-2.1v-2.45l3.66 2.11z"
                />
                <path
                  fill="url(#prefix__linear-gradient-62)"
                  d="M198.42 167.2v2.44l30.06-17.48v-2.44l-30.06 17.48z"
                />
                <path
                  fill="url(#prefix__linear-gradient-63)"
                  d="M228.48 149.72l-30.06 17.48-3.65-2.11 30.07-17.48 3.64 2.11z"
                />
                <path
                  fill="url(#prefix__linear-gradient-64)"
                  d="M208.17 172.84v2.44l-3.67-2.1v-2.44l3.67 2.1z"
                />
                <path
                  fill="url(#prefix__linear-gradient-65)"
                  d="M208.16 172.84v2.44l30.06-17.48v-2.43l-30.06 17.47z"
                />
                <path
                  fill="url(#prefix__linear-gradient-66)"
                  d="M238.22 155.37l-30.06 17.47-3.66-2.1 30.07-17.48 3.65 2.11z"
                />
                <path
                  fill="url(#prefix__linear-gradient-67)"
                  d="M217.9 178.49v2.44l-3.66-2.1v-2.45l3.66 2.11z"
                />
                <path
                  fill="url(#prefix__linear-gradient-68)"
                  d="M217.9 178.49v2.44l30.06-17.48v-2.44l-30.06 17.48z"
                />
                <path
                  fill="url(#prefix__linear-gradient-69)"
                  d="M247.96 161.01l-30.06 17.48-3.66-2.11 30.07-17.48 3.65 2.11z"
                />
                <path
                  fill="url(#prefix__linear-gradient-70)"
                  d="M227.64 184.13v2.45l-3.66-2.11v-2.44l3.66 2.1z"
                />
                <path
                  fill="url(#prefix__linear-gradient-71)"
                  d="M227.63 184.13v2.45l30.06-17.49v-2.43l-30.06 17.47z"
                />
                <path
                  fill="url(#prefix__linear-gradient-72)"
                  d="M257.69 166.66l-30.06 17.47-3.65-2.1 30.07-17.48 3.64 2.11z"
                />
                <path
                  fill="url(#prefix__linear-gradient-73)"
                  d="M237.38 189.78v2.44l-3.66-2.1v-2.44l3.66 2.1z"
                />
                <path
                  fill="url(#prefix__linear-gradient-74)"
                  d="M237.37 189.78v2.44l30.06-17.48v-2.44l-30.06 17.48z"
                />
                <path
                  fill="url(#prefix__linear-gradient-75)"
                  d="M267.43 172.3l-30.06 17.48-3.65-2.1 30.07-17.49 3.64 2.11z"
                />
                <path
                  fill="url(#prefix__linear-gradient-76)"
                  d="M247.12 195.42v2.45l-3.67-2.11v-2.44l3.67 2.1z"
                />
                <path
                  fill="url(#prefix__linear-gradient-77)"
                  d="M247.11 195.42v2.45l30.06-17.49v-2.43l-30.06 17.47z"
                />
                <path
                  fill="url(#prefix__linear-gradient-78)"
                  d="M277.17 177.95l-30.06 17.47-3.66-2.1 30.07-17.48 3.65 2.11z"
                />
                <path
                  fill="url(#prefix__linear-gradient-79)"
                  d="M256.85 201.07v2.44l-3.66-2.1v-2.44l3.66 2.1z"
                />
                <path
                  fill="url(#prefix__linear-gradient-80)"
                  d="M256.85 201.07v2.44l30.05-17.48v-2.44l-30.05 17.48z"
                />
                <path
                  fill="url(#prefix__linear-gradient-81)"
                  d="M286.9 183.59l-30.05 17.48-3.66-2.1 30.07-17.49 3.64 2.11z"
                />
                <path
                  fill="url(#prefix__linear-gradient-82)"
                  d="M266.59 206.71v2.45l-3.66-2.11v-2.44l3.66 2.1z"
                />
                <path
                  fill="url(#prefix__linear-gradient-83)"
                  d="M266.58 206.71v2.45l30.06-17.49v-2.43l-30.06 17.47z"
                />
                <path
                  fill="url(#prefix__linear-gradient-84)"
                  d="M296.64 189.24l-30.06 17.47-3.65-2.1L293 187.13l3.64 2.11z"
                />
                <path
                  fill="url(#prefix__linear-gradient-85)"
                  d="M276.33 212.36v2.44l-3.67-2.1v-2.44l3.67 2.1z"
                />
                <path
                  fill="url(#prefix__linear-gradient-86)"
                  d="M276.32 212.36v2.44l30.06-17.48v-2.44l-30.06 17.48z"
                />
                <path
                  fill="url(#prefix__linear-gradient-87)"
                  d="M306.38 194.88l-30.06 17.48-3.66-2.1 30.07-17.49 3.65 2.11z"
                />
                <path
                  fill="url(#prefix__linear-gradient-88)"
                  d="M286.06 218v2.45l-3.66-2.11v-2.44l3.66 2.1z"
                />
                <path
                  fill="url(#prefix__linear-gradient-89)"
                  d="M286.06 218v2.45l30.06-17.48v-2.44L286.06 218z"
                />
                <path
                  fill="url(#prefix__linear-gradient-90)"
                  d="M316.12 200.53L286.06 218l-3.66-2.1 30.07-17.48 3.65 2.11z"
                />
                <path
                  fill="url(#prefix__linear-gradient-91)"
                  d="M295.8 223.65v2.44l-3.66-2.1v-2.44l3.66 2.1z"
                />
                <path
                  fill="url(#prefix__linear-gradient-92)"
                  d="M295.79 223.65v2.44l30.06-17.48v-2.44l-30.06 17.48z"
                />
                <path
                  fill="url(#prefix__linear-gradient-93)"
                  d="M325.85 206.17l-30.06 17.48-3.65-2.1 30.07-17.49 3.64 2.11z"
                />
                <path
                  fill="url(#prefix__linear-gradient-94)"
                  d="M305.54 229.29v2.45l-3.66-2.11v-2.44l3.66 2.1z"
                />
                <path
                  fill="url(#prefix__linear-gradient-95)"
                  d="M305.53 229.29v2.45l30.06-17.49v-2.43l-30.06 17.47z"
                />
                <path
                  fill="url(#prefix__linear-gradient-96)"
                  d="M335.59 211.82l-30.06 17.47-3.65-2.1 30.06-17.48 3.65 2.11z"
                />
                <path
                  fill="url(#prefix__linear-gradient-97)"
                  d="M315.27 234.94v2.44l-3.66-2.1v-2.44l3.66 2.1z"
                />
                <path
                  fill="url(#prefix__linear-gradient-98)"
                  d="M315.27 234.94v2.44l30.06-17.48v-2.44l-30.06 17.48z"
                />
                <path
                  fill="url(#prefix__linear-gradient-99)"
                  d="M345.33 217.46l-30.06 17.48-3.66-2.1 30.07-17.49 3.65 2.11z"
                />
                <path
                  fill="url(#prefix__linear-gradient-100)"
                  d="M325.01 240.58v2.45l-3.66-2.1v-2.45l3.66 2.1z"
                />
                <path
                  fill="url(#prefix__linear-gradient-101)"
                  d="M325 240.58v2.45l30.06-17.48v-2.44L325 240.58z"
                />
                <path
                  fill="url(#prefix__linear-gradient-102)"
                  d="M355.06 223.11L325 240.58l-3.65-2.1L351.42 221l3.64 2.11z"
                />
                <path
                  fill="url(#prefix__linear-gradient-103)"
                  d="M334.75 246.23v2.44l-3.66-2.1v-2.44l3.66 2.1z"
                />
                <path
                  fill="url(#prefix__linear-gradient-104)"
                  d="M334.74 246.23v2.44l30.06-17.48v-2.44l-30.06 17.48z"
                />
                <path
                  fill="url(#prefix__linear-gradient-105)"
                  d="M364.8 228.75l-30.06 17.48-3.65-2.1 30.06-17.48 3.65 2.1z"
                />
                <path
                  fill="url(#prefix__linear-gradient-106)"
                  d="M344.49 251.88v2.44l-3.67-2.1v-2.45l3.67 2.11z"
                />
                <path
                  fill="url(#prefix__linear-gradient-107)"
                  d="M344.48 251.88v2.44l30.06-17.48v-2.44l-30.06 17.48z"
                />
                <path
                  fill="url(#prefix__linear-gradient-108)"
                  d="M374.54 234.4l-30.06 17.48-3.66-2.11 30.07-17.48 3.65 2.11z"
                />
                <path
                  fill="url(#prefix__linear-gradient-109)"
                  d="M354.22 257.52v2.44l-3.66-2.1v-2.44l3.66 2.1z"
                />
                <path
                  fill="url(#prefix__linear-gradient-110)"
                  d="M354.22 257.52v2.44l30.05-17.48v-2.44l-30.05 17.48z"
                />
                <path
                  fill="url(#prefix__linear-gradient-111)"
                  d="M384.27 240.04l-30.05 17.48-3.66-2.1 30.07-17.48 3.64 2.1z"
                />
                <path
                  fill="url(#prefix__linear-gradient-112)"
                  d="M363.96 263.17v2.44l-3.66-2.1v-2.45l3.66 2.11z"
                />
                <path
                  fill="url(#prefix__linear-gradient-113)"
                  d="M363.95 263.17v2.44l30.06-17.48v-2.44l-30.06 17.48z"
                />
                <path
                  fill="url(#prefix__linear-gradient-114)"
                  d="M394.01 245.69l-30.06 17.48-3.65-2.11 30.07-17.48 3.64 2.11z"
                />
                <path
                  fill="url(#prefix__linear-gradient-115)"
                  d="M373.7 268.81v2.44l-3.67-2.1v-2.44l3.67 2.1z"
                />
                <path
                  fill="url(#prefix__linear-gradient-116)"
                  d="M373.69 268.81v2.44l30.06-17.48v-2.43l-30.06 17.47z"
                />
                <path
                  fill="url(#prefix__linear-gradient-117)"
                  d="M403.75 251.34l-30.06 17.47-3.66-2.1 30.07-17.48 3.65 2.11z"
                />
                <g>
                  <path
                    fill="url(#prefix__linear-gradient-118)"
                    d="M383.43 274.46v2.44l-3.66-2.1v-2.45l3.66 2.11z"
                  />
                  <path
                    fill="url(#prefix__linear-gradient-119)"
                    d="M383.43 274.46v2.44l30.06-17.48v-2.44l-30.06 17.48z"
                  />
                  <path
                    fill="url(#prefix__linear-gradient-120)"
                    d="M413.49 256.98l-30.06 17.48-3.66-2.11 30.07-17.48 3.65 2.11z"
                  />
                </g>
                <g>
                  <path
                    fill="url(#prefix__linear-gradient-121)"
                    d="M393.17 280.1v2.45l-3.66-2.11V278l3.66 2.1z"
                  />
                  <path
                    fill="url(#prefix__linear-gradient-122)"
                    d="M393.16 280.1v2.45l30.06-17.49v-2.43l-30.06 17.47z"
                  />
                  <path
                    fill="url(#prefix__linear-gradient-123)"
                    d="M423.22 262.63l-30.06 17.47-3.65-2.1 30.07-17.48 3.64 2.11z"
                  />
                </g>
                <g>
                  <path
                    fill="url(#prefix__linear-gradient-124)"
                    d="M402.91 285.75v2.44l-3.66-2.1v-2.45l3.66 2.11z"
                  />
                  <path
                    fill="url(#prefix__linear-gradient-125)"
                    d="M402.9 285.75v2.44l30.06-17.48v-2.44l-30.06 17.48z"
                  />
                  <path
                    fill="url(#prefix__linear-gradient-126)"
                    d="M432.96 268.27l-30.06 17.48-3.65-2.11 30.06-17.48 3.65 2.11z"
                  />
                </g>
                <g>
                  <path
                    fill="url(#prefix__linear-gradient-127)"
                    d="M412.64 291.39v2.45l-3.66-2.11v-2.44l3.66 2.1z"
                  />
                  <path
                    fill="url(#prefix__linear-gradient-128)"
                    d="M412.64 291.39v2.45l30.06-17.49v-2.43l-30.06 17.47z"
                  />
                  <path
                    fill="url(#prefix__linear-gradient-129)"
                    d="M442.7 273.92l-30.06 17.47-3.66-2.1 30.07-17.48 3.65 2.11z"
                  />
                </g>
                <g>
                  <path
                    fill="url(#prefix__linear-gradient-130)"
                    d="M422.38 297.04v2.44l-3.66-2.1v-2.44l3.66 2.1z"
                  />
                  <path
                    fill="url(#prefix__linear-gradient-131)"
                    d="M422.38 297.04v2.44L452.43 282v-2.44l-30.05 17.48z"
                  />
                  <path
                    fill="url(#prefix__linear-gradient-132)"
                    d="M452.43 279.56l-30.05 17.48-3.66-2.1 30.07-17.49 3.64 2.11z"
                  />
                </g>
                <g>
                  <path
                    fill="url(#prefix__linear-gradient-133)"
                    d="M432.12 302.68v2.45l-3.66-2.11v-2.44l3.66 2.1z"
                  />
                  <path
                    fill="url(#prefix__linear-gradient-134)"
                    d="M432.11 302.68v2.45l30.06-17.49v-2.43l-30.06 17.47z"
                  />
                  <path
                    fill="url(#prefix__linear-gradient-135)"
                    d="M462.17 285.21l-30.06 17.47-3.65-2.1 30.06-17.48 3.65 2.11z"
                  />
                </g>
                <g>
                  <path
                    fill="url(#prefix__linear-gradient-136)"
                    d="M441.86 308.33v2.44l-3.67-2.1v-2.44l3.67 2.1z"
                  />
                  <path
                    fill="url(#prefix__linear-gradient-137)"
                    d="M441.85 308.33v2.44l30.06-17.48v-2.44l-30.06 17.48z"
                  />
                  <path
                    fill="url(#prefix__linear-gradient-138)"
                    d="M471.91 290.85l-30.06 17.48-3.66-2.1 30.07-17.49 3.65 2.11z"
                  />
                </g>
                <g>
                  <path
                    fill="url(#prefix__linear-gradient-139)"
                    d="M451.59 313.97v2.45l-3.66-2.11v-2.44l3.66 2.1z"
                  />
                  <path
                    fill="url(#prefix__linear-gradient-140)"
                    d="M451.59 313.97v2.45l30.05-17.49v-2.43l-30.05 17.47z"
                  />
                  <path
                    fill="url(#prefix__linear-gradient-141)"
                    d="M481.64 296.5l-30.05 17.47-3.66-2.1L478 294.39l3.64 2.11z"
                  />
                </g>
                <g>
                  <path
                    fill="url(#prefix__linear-gradient-142)"
                    d="M461.33 319.62v2.44l-3.66-2.1v-2.44l3.66 2.1z"
                  />
                  <path
                    fill="url(#prefix__linear-gradient-143)"
                    d="M461.32 319.62v2.44l30.06-17.48v-2.44l-30.06 17.48z"
                  />
                  <path
                    fill="url(#prefix__linear-gradient-144)"
                    d="M491.38 302.14l-30.06 17.48-3.65-2.1 30.07-17.49 3.64 2.11z"
                  />
                </g>
                <g>
                  <path
                    fill="url(#prefix__linear-gradient-145)"
                    d="M471.07 325.26v2.45l-3.67-2.1v-2.45l3.67 2.1z"
                  />
                  <path
                    fill="url(#prefix__linear-gradient-146)"
                    d="M471.06 325.26v2.45l30.06-17.48v-2.44l-30.06 17.47z"
                  />
                  <path
                    fill="url(#prefix__linear-gradient-147)"
                    d="M501.12 307.79l-30.06 17.47-3.66-2.1 30.07-17.48 3.65 2.11z"
                  />
                </g>
                <g>
                  <path
                    fill="url(#prefix__linear-gradient-148)"
                    d="M480.8 330.91v2.44l-3.66-2.1v-2.44l3.66 2.1z"
                  />
                  <path
                    fill="url(#prefix__linear-gradient-149)"
                    d="M480.8 330.91v2.44l30.06-17.48v-2.44l-30.06 17.48z"
                  />
                  <path
                    fill="url(#prefix__linear-gradient-150)"
                    d="M510.86 313.43l-30.06 17.48-3.66-2.1 30.07-17.49 3.65 2.11z"
                  />
                </g>
                <g>
                  <path
                    fill="url(#prefix__linear-gradient-151)"
                    d="M490.54 336.55V339l-3.66-2.11v-2.44l3.66 2.1z"
                  />
                  <path
                    fill="url(#prefix__linear-gradient-152)"
                    d="M490.53 336.55V339l30.06-17.49v-2.43l-30.06 17.47z"
                  />
                  <path
                    fill="url(#prefix__linear-gradient-153)"
                    d="M520.59 319.08l-30.06 17.47-3.65-2.1 30.07-17.48 3.64 2.11z"
                  />
                </g>
                <g>
                  <path
                    fill="url(#prefix__linear-gradient-154)"
                    d="M500.28 342.2v2.44l-3.66-2.1v-2.44l3.66 2.1z"
                  />
                  <path
                    fill="url(#prefix__linear-gradient-155)"
                    d="M500.27 342.2v2.44l30.06-17.48v-2.44l-30.06 17.48z"
                  />
                  <path
                    fill="url(#prefix__linear-gradient-156)"
                    d="M530.33 324.72l-30.06 17.48-3.65-2.1 30.06-17.48 3.65 2.1z"
                  />
                </g>
                <g>
                  <path
                    fill="url(#prefix__linear-gradient-157)"
                    d="M510.01 347.84v2.45l-3.66-2.1v-2.45l3.66 2.1z"
                  />
                  <path
                    fill="url(#prefix__linear-gradient-158)"
                    d="M510.01 347.84v2.45l30.06-17.48v-2.44l-30.06 17.47z"
                  />
                  <path
                    fill="url(#prefix__linear-gradient-159)"
                    d="M540.07 330.37l-30.06 17.47-3.66-2.1 30.07-17.48 3.65 2.11z"
                  />
                </g>
                <g>
                  <path
                    fill="url(#prefix__linear-gradient-160)"
                    d="M519.75 353.49v2.44l-3.66-2.1v-2.44l3.66 2.1z"
                  />
                  <path
                    fill="url(#prefix__linear-gradient-161)"
                    d="M519.75 353.49v2.44l30.05-17.48v-2.44l-30.05 17.48z"
                  />
                  <path
                    fill="url(#prefix__linear-gradient-162)"
                    d="M549.8 336.01l-30.05 17.48-3.66-2.1 30.07-17.49 3.64 2.11z"
                  />
                </g>
                <g>
                  <path
                    fill="url(#prefix__linear-gradient-163)"
                    d="M529.49 359.13v2.45l-3.66-2.1v-2.45l3.66 2.1z"
                  />
                  <path
                    fill="url(#prefix__linear-gradient-164)"
                    d="M529.48 359.13v2.45l30.06-17.48v-2.44l-30.06 17.47z"
                  />
                  <path
                    fill="url(#prefix__linear-gradient-165)"
                    d="M559.54 341.66l-30.06 17.47-3.65-2.1 30.06-17.48 3.65 2.11z"
                  />
                </g>
                <g>
                  <path
                    fill="url(#prefix__linear-gradient-166)"
                    d="M539.23 364.78v2.44l-3.67-2.1v-2.44l3.67 2.1z"
                  />
                  <path
                    fill="url(#prefix__linear-gradient-167)"
                    d="M539.22 364.78v2.44l30.06-17.48v-2.44l-30.06 17.48z"
                  />
                  <path
                    fill="url(#prefix__linear-gradient-168)"
                    d="M569.28 347.3l-30.06 17.48-3.66-2.1 30.07-17.48 3.65 2.1z"
                  />
                </g>
                <g>
                  <path
                    fill="url(#prefix__linear-gradient-169)"
                    d="M548.96 370.43v2.44l-3.66-2.1v-2.45l3.66 2.11z"
                  />
                  <path
                    fill="url(#prefix__linear-gradient-170)"
                    d="M548.96 370.43v2.44l30.05-17.48v-2.44l-30.05 17.48z"
                  />
                  <path
                    fill="url(#prefix__linear-gradient-171)"
                    d="M579.01 352.95l-30.05 17.48-3.66-2.11 30.07-17.48 3.64 2.11z"
                  />
                </g>
                <g>
                  <path
                    fill="url(#prefix__linear-gradient-172)"
                    d="M558.7 376.07v2.44l-3.66-2.1v-2.44l3.66 2.1z"
                  />
                  <path
                    fill="url(#prefix__linear-gradient-173)"
                    d="M558.69 376.07v2.44l30.06-17.48v-2.43l-30.06 17.47z"
                  />
                  <path
                    fill="url(#prefix__linear-gradient-174)"
                    d="M588.75 358.6l-30.06 17.47-3.65-2.1 30.07-17.48 3.64 2.11z"
                  />
                </g>
                <g>
                  <path
                    fill="url(#prefix__linear-gradient-175)"
                    d="M568.44 381.72v2.44l-3.67-2.1v-2.45l3.67 2.11z"
                  />
                  <path
                    fill="url(#prefix__linear-gradient-176)"
                    d="M568.43 381.72v2.44l30.06-17.48v-2.44l-30.06 17.48z"
                  />
                  <path
                    fill="url(#prefix__linear-gradient-177)"
                    d="M598.49 364.24l-30.06 17.48-3.66-2.11 30.07-17.48 3.65 2.11z"
                  />
                </g>
                <g>
                  <path
                    fill="url(#prefix__linear-gradient-178)"
                    d="M578.17 387.36v2.45l-3.66-2.11v-2.44l3.66 2.1z"
                  />
                  <path
                    fill="url(#prefix__linear-gradient-179)"
                    d="M578.17 387.36v2.45l30.06-17.49v-2.44l-30.06 17.48z"
                  />
                  <path
                    fill="url(#prefix__linear-gradient-180)"
                    d="M608.23 369.88l-30.06 17.48-3.66-2.1 30.07-17.48 3.65 2.1z"
                  />
                </g>
                <g>
                  <path
                    fill="url(#prefix__linear-gradient-181)"
                    d="M587.91 393.01v2.44l-3.66-2.1v-2.45l3.66 2.11z"
                  />
                  <path
                    fill="url(#prefix__linear-gradient-182)"
                    d="M587.9 393.01v2.44l30.06-17.48v-2.44l-30.06 17.48z"
                  />
                  <path
                    fill="url(#prefix__linear-gradient-183)"
                    d="M617.96 375.53l-30.06 17.48-3.65-2.11 30.07-17.48 3.64 2.11z"
                  />
                </g>
                <g>
                  <path
                    fill="url(#prefix__linear-gradient-184)"
                    d="M597.65 398.65v2.45l-3.66-2.11v-2.44l3.66 2.1z"
                  />
                  <path
                    fill="url(#prefix__linear-gradient-185)"
                    d="M597.64 398.65v2.45l30.06-17.49v-2.43l-30.06 17.47z"
                  />
                  <path
                    fill="url(#prefix__linear-gradient-186)"
                    d="M627.7 381.18l-30.06 17.47-3.65-2.1 30.06-17.48 3.65 2.11z"
                  />
                </g>
                <g>
                  <path
                    fill="url(#prefix__linear-gradient-187)"
                    d="M607.38 404.3v2.44l-3.66-2.1v-2.45l3.66 2.11z"
                  />
                  <path
                    fill="url(#prefix__linear-gradient-188)"
                    d="M607.38 404.3v2.44l30.06-17.48v-2.44l-30.06 17.48z"
                  />
                  <path
                    fill="url(#prefix__linear-gradient-189)"
                    d="M637.44 386.82l-30.06 17.48-3.66-2.11 30.07-17.48 3.65 2.11z"
                  />
                </g>
                <g>
                  <path
                    fill="url(#prefix__linear-gradient-190)"
                    d="M617.12 409.94v2.45l-3.66-2.11v-2.44l3.66 2.1z"
                  />
                  <path
                    fill="url(#prefix__linear-gradient-191)"
                    d="M617.12 409.94v2.45l30.05-17.49v-2.43l-30.05 17.47z"
                  />
                  <path
                    fill="url(#prefix__linear-gradient-192)"
                    d="M647.17 392.47l-30.05 17.47-3.66-2.1 30.07-17.48 3.64 2.11z"
                  />
                </g>
                <g>
                  <path
                    fill="url(#prefix__linear-gradient-193)"
                    d="M626.86 415.59v2.44l-3.66-2.1v-2.44l3.66 2.1z"
                  />
                  <path
                    fill="url(#prefix__linear-gradient-194)"
                    d="M626.85 415.59v2.44l30.06-17.48v-2.44l-30.06 17.48z"
                  />
                  <path
                    fill="url(#prefix__linear-gradient-195)"
                    d="M656.91 398.11l-30.06 17.48-3.65-2.1L653.26 396l3.65 2.11z"
                  />
                </g>
                <g>
                  <path
                    fill="url(#prefix__linear-gradient-196)"
                    d="M636.59 421.23v2.45l-3.66-2.11v-2.44l3.66 2.1z"
                  />
                  <path
                    fill="url(#prefix__linear-gradient-197)"
                    d="M636.59 421.23v2.45l30.06-17.49v-2.43l-30.06 17.47z"
                  />
                  <path
                    fill="url(#prefix__linear-gradient-198)"
                    d="M666.65 403.76l-30.06 17.47-3.66-2.1L663 401.65l3.65 2.11z"
                  />
                </g>
                <g>
                  <path
                    fill="url(#prefix__linear-gradient-199)"
                    d="M646.33 426.88v2.44l-3.66-2.1v-2.44l3.66 2.1z"
                  />
                  <path
                    fill="url(#prefix__linear-gradient-200)"
                    d="M646.33 426.88v2.44l30.05-17.48v-2.44l-30.05 17.48z"
                  />
                  <path
                    fill="url(#prefix__linear-gradient-201)"
                    d="M676.38 409.4l-30.05 17.48-3.66-2.1 30.07-17.49 3.64 2.11z"
                  />
                </g>
                <g>
                  <path
                    fill="url(#prefix__linear-gradient-202)"
                    d="M656.07 432.52v2.45l-3.66-2.1v-2.45l3.66 2.1z"
                  />
                  <path
                    fill="url(#prefix__linear-gradient-203)"
                    d="M656.06 432.52v2.45l30.06-17.48v-2.44l-30.06 17.47z"
                  />
                  <path
                    fill="url(#prefix__linear-gradient-204)"
                    d="M686.12 415.05l-30.06 17.47-3.65-2.1 30.07-17.48 3.64 2.11z"
                  />
                </g>
                <g>
                  <path
                    fill="url(#prefix__linear-gradient-205)"
                    d="M665.8 438.17v2.44l-3.66-2.1v-2.44l3.66 2.1z"
                  />
                  <path
                    fill="url(#prefix__linear-gradient-206)"
                    d="M665.8 438.17v2.44l30.06-17.48v-2.44l-30.06 17.48z"
                  />
                  <path
                    fill="url(#prefix__linear-gradient-207)"
                    d="M695.86 420.69l-30.06 17.48-3.66-2.1 30.07-17.49 3.65 2.11z"
                  />
                </g>
                <g>
                  <path
                    fill="url(#prefix__linear-gradient-208)"
                    d="M675.54 443.81v2.45l-3.66-2.11v-2.44l3.66 2.1z"
                  />
                  <path
                    fill="url(#prefix__linear-gradient-209)"
                    d="M675.54 443.81v2.45l30.06-17.49v-2.43l-30.06 17.47z"
                  />
                  <path
                    fill="url(#prefix__linear-gradient-210)"
                    d="M705.6 426.34l-30.06 17.47-3.66-2.1 30.07-17.48 3.65 2.11z"
                  />
                </g>
                <g>
                  <path
                    fill="url(#prefix__linear-gradient-211)"
                    d="M685.28 449.46v2.44l-3.66-2.1v-2.44l3.66 2.1z"
                  />
                  <path
                    fill="url(#prefix__linear-gradient-212)"
                    d="M685.27 449.46v2.44l30.06-17.48v-2.44l-30.06 17.48z"
                  />
                  <path
                    fill="url(#prefix__linear-gradient-213)"
                    d="M715.33 431.98l-30.06 17.48-3.65-2.1 30.07-17.48 3.64 2.1z"
                  />
                </g>
                <g>
                  <path
                    fill="url(#prefix__linear-gradient-214)"
                    d="M695.02 455.1v2.45l-3.66-2.1V453l3.66 2.1z"
                  />
                  <path
                    fill="url(#prefix__linear-gradient-215)"
                    d="M695.01 455.1v2.45l30.06-17.48v-2.44l-30.06 17.47z"
                  />
                  <path
                    fill="url(#prefix__linear-gradient-216)"
                    d="M725.07 437.63l-30.06 17.47-3.65-2.1 30.06-17.48 3.65 2.11z"
                  />
                </g>
                <g>
                  <path
                    fill="url(#prefix__linear-gradient-217)"
                    d="M704.75 460.75v2.44l-3.66-2.1v-2.44l3.66 2.1z"
                  />
                  <path
                    fill="url(#prefix__linear-gradient-218)"
                    d="M704.75 460.75v2.44l30.06-17.48v-2.44l-30.06 17.48z"
                  />
                  <path
                    fill="url(#prefix__linear-gradient-219)"
                    d="M734.81 443.27l-30.06 17.48-3.66-2.1 30.07-17.48 3.65 2.1z"
                  />
                </g>
                <g>
                  <path
                    fill="url(#prefix__linear-gradient-220)"
                    d="M714.49 466.39v2.45l-3.66-2.1v-2.45l3.66 2.1z"
                  />
                  <path
                    fill="url(#prefix__linear-gradient-221)"
                    d="M714.49 466.39v2.45l30.05-17.48v-2.44l-30.05 17.47z"
                  />
                  <path
                    fill="url(#prefix__linear-gradient-222)"
                    d="M744.54 448.92l-30.05 17.47-3.66-2.1 30.07-17.48 3.64 2.11z"
                  />
                </g>
                <g>
                  <path
                    fill="url(#prefix__linear-gradient-223)"
                    d="M724.23 472.04v2.44l-3.66-2.1v-2.44l3.66 2.1z"
                  />
                  <path
                    fill="url(#prefix__linear-gradient-224)"
                    d="M724.22 472.04v2.44L754.28 457v-2.44l-30.06 17.48z"
                  />
                  <path
                    fill="url(#prefix__linear-gradient-225)"
                    d="M754.28 454.56l-30.06 17.48-3.65-2.1 30.06-17.48 3.65 2.1z"
                  />
                </g>
                <g>
                  <path
                    fill="url(#prefix__linear-gradient-226)"
                    d="M733.96 477.69v2.44l-3.66-2.1v-2.45l3.66 2.11z"
                  />
                  <path
                    fill="url(#prefix__linear-gradient-227)"
                    d="M733.96 477.69v2.44l30.06-17.48v-2.44l-30.06 17.48z"
                  />
                  <path
                    fill="url(#prefix__linear-gradient-228)"
                    d="M764.02 460.21l-30.06 17.48-3.66-2.11 30.07-17.48 3.65 2.11z"
                  />
                </g>
                <g>
                  <path
                    fill="url(#prefix__linear-gradient-229)"
                    d="M743.7 483.33v2.44l-3.66-2.1v-2.44l3.66 2.1z"
                  />
                  <path
                    fill="url(#prefix__linear-gradient-230)"
                    d="M743.7 483.33v2.44l30.05-17.48v-2.43l-30.05 17.47z"
                  />
                  <path
                    fill="url(#prefix__linear-gradient-231)"
                    d="M773.75 465.86l-30.05 17.47-3.66-2.1 30.07-17.48 3.64 2.11z"
                  />
                </g>
                <g>
                  <path
                    fill="url(#prefix__linear-gradient-232)"
                    d="M753.44 488.98v2.44l-3.66-2.1v-2.45l3.66 2.11z"
                  />
                  <path
                    fill="url(#prefix__linear-gradient-233)"
                    d="M753.43 488.98v2.44l30.06-17.48v-2.44l-30.06 17.48z"
                  />
                  <path
                    fill="url(#prefix__linear-gradient-234)"
                    d="M783.49 471.5l-30.06 17.48-3.65-2.11 30.07-17.48 3.64 2.11z"
                  />
                </g>
                <g>
                  <path
                    fill="url(#prefix__linear-gradient-235)"
                    d="M763.17 494.62v2.44l-3.66-2.1v-2.44l3.66 2.1z"
                  />
                  <path
                    fill="url(#prefix__linear-gradient-236)"
                    d="M763.17 494.62v2.44l30.06-17.48v-2.44l-30.06 17.48z"
                  />
                  <path
                    fill="url(#prefix__linear-gradient-237)"
                    d="M793.23 477.14l-30.06 17.48-3.66-2.1 30.07-17.48 3.65 2.1z"
                  />
                </g>
                <g>
                  <path
                    fill="url(#prefix__linear-gradient-238)"
                    d="M772.91 500.27v2.44l-3.66-2.1v-2.45l3.66 2.11z"
                  />
                  <path
                    fill="url(#prefix__linear-gradient-239)"
                    d="M772.91 500.27v2.44l30.06-17.48v-2.44l-30.06 17.48z"
                  />
                  <path
                    fill="url(#prefix__linear-gradient-240)"
                    d="M802.97 482.79l-30.06 17.48-3.66-2.11 30.07-17.48 3.65 2.11z"
                  />
                </g>
                <g>
                  <path
                    fill="url(#prefix__linear-gradient-241)"
                    d="M782.65 505.91v2.45l-3.66-2.11v-2.44l3.66 2.1z"
                  />
                  <path
                    fill="url(#prefix__linear-gradient-242)"
                    d="M782.64 505.91v2.45l30.06-17.49v-2.43l-30.06 17.47z"
                  />
                  <path
                    fill="url(#prefix__linear-gradient-243)"
                    d="M812.7 488.44l-30.06 17.47-3.65-2.1 30.07-17.48 3.64 2.11z"
                  />
                </g>
                <g>
                  <path
                    fill="url(#prefix__linear-gradient-244)"
                    d="M792.39 511.56V514l-3.67-2.1v-2.45l3.67 2.11z"
                  />
                  <path
                    fill="url(#prefix__linear-gradient-245)"
                    d="M792.38 511.56V514l30.06-17.48v-2.44l-30.06 17.48z"
                  />
                  <path
                    fill="url(#prefix__linear-gradient-246)"
                    d="M822.44 494.08l-30.06 17.48-3.66-2.11 30.07-17.48 3.65 2.11z"
                  />
                </g>
                <g>
                  <path
                    fill="url(#prefix__linear-gradient-247)"
                    d="M802.12 517.2v2.45l-3.66-2.11v-2.44l3.66 2.1z"
                  />
                  <path
                    fill="url(#prefix__linear-gradient-248)"
                    d="M802.12 517.2v2.45l30.06-17.49v-2.43l-30.06 17.47z"
                  />
                  <path
                    fill="url(#prefix__linear-gradient-249)"
                    d="M832.18 499.73l-30.06 17.47-3.66-2.1 30.07-17.48 3.65 2.11z"
                  />
                </g>
                <g>
                  <path
                    fill="url(#prefix__linear-gradient-250)"
                    d="M811.86 522.85v2.44l-3.66-2.1v-2.44l3.66 2.1z"
                  />
                  <path
                    fill="url(#prefix__linear-gradient-251)"
                    d="M811.85 522.85v2.44l30.06-17.48v-2.44l-30.06 17.48z"
                  />
                  <path
                    fill="url(#prefix__linear-gradient-252)"
                    d="M841.91 505.37l-30.06 17.48-3.65-2.1 30.07-17.49 3.64 2.11z"
                  />
                </g>
                <g>
                  <path
                    fill="url(#prefix__linear-gradient-253)"
                    d="M821.6 528.49v2.45l-3.67-2.11v-2.44l3.67 2.1z"
                  />
                  <path
                    fill="url(#prefix__linear-gradient-254)"
                    d="M821.59 528.49v2.45l30.06-17.49v-2.43l-30.06 17.47z"
                  />
                  <path
                    fill="url(#prefix__linear-gradient-255)"
                    d="M851.65 511.02l-30.06 17.47-3.66-2.1L848 508.91l3.65 2.11z"
                  />
                </g>
                <g>
                  <path
                    fill="url(#prefix__linear-gradient-256)"
                    d="M831.33 534.14v2.44l-3.66-2.1v-2.44l3.66 2.1z"
                  />
                  <path
                    fill="url(#prefix__linear-gradient-257)"
                    d="M831.33 534.14v2.44l30.06-17.48v-2.44l-30.06 17.48z"
                  />
                  <path
                    fill="url(#prefix__linear-gradient-258)"
                    d="M861.39 516.66l-30.06 17.48-3.66-2.1 30.07-17.49 3.65 2.11z"
                  />
                </g>
                <g>
                  <path
                    fill="url(#prefix__linear-gradient-259)"
                    d="M841.07 539.78v2.45l-3.66-2.1v-2.45l3.66 2.1z"
                  />
                  <path
                    fill="url(#prefix__linear-gradient-260)"
                    d="M841.07 539.78v2.45l30.05-17.48v-2.44l-30.05 17.47z"
                  />
                  <path
                    fill="url(#prefix__linear-gradient-261)"
                    d="M871.12 522.31l-30.05 17.47-3.66-2.1 30.07-17.48 3.64 2.11z"
                  />
                </g>
                <g>
                  <path
                    fill="url(#prefix__linear-gradient-262)"
                    d="M850.81 545.43v2.44l-3.66-2.1v-2.44l3.66 2.1z"
                  />
                  <path
                    fill="url(#prefix__linear-gradient-263)"
                    d="M850.8 545.43v2.44l30.06-17.48v-2.44l-30.06 17.48z"
                  />
                  <path
                    fill="url(#prefix__linear-gradient-264)"
                    d="M880.86 527.95l-30.06 17.48-3.65-2.1 30.07-17.49 3.64 2.11z"
                  />
                </g>
                <g>
                  <path
                    fill="url(#prefix__linear-gradient-265)"
                    d="M860.54 551.07v2.45l-3.66-2.11v-2.44l3.66 2.1z"
                  />
                  <path
                    fill="url(#prefix__linear-gradient-266)"
                    d="M860.54 551.07v2.45l30.06-17.49v-2.43l-30.06 17.47z"
                  />
                  <path
                    fill="url(#prefix__linear-gradient-267)"
                    d="M890.6 533.6l-30.06 17.47-3.66-2.1 30.07-17.48 3.65 2.11z"
                  />
                </g>
                <g>
                  <path
                    fill="url(#prefix__linear-gradient-268)"
                    d="M870.28 556.72v2.44l-3.66-2.1v-2.44l3.66 2.1z"
                  />
                  <path
                    fill="url(#prefix__linear-gradient-269)"
                    d="M870.28 556.72v2.44l30.06-17.48v-2.44l-30.06 17.48z"
                  />
                  <path
                    fill="url(#prefix__linear-gradient-270)"
                    d="M900.34 539.24l-30.06 17.48-3.66-2.1 30.07-17.49 3.65 2.11z"
                  />
                </g>
                <g>
                  <path
                    fill="url(#prefix__linear-gradient-271)"
                    d="M880.02 562.36v2.45l-3.66-2.1v-2.45l3.66 2.1z"
                  />
                  <path
                    fill="url(#prefix__linear-gradient-272)"
                    d="M880.01 562.36v2.45l30.06-17.48v-2.44l-30.06 17.47z"
                  />
                  <path
                    fill="url(#prefix__linear-gradient-273)"
                    d="M910.07 544.89l-30.06 17.47-3.65-2.1 30.07-17.48 3.64 2.11z"
                  />
                </g>
                <g>
                  <path
                    fill="url(#prefix__linear-gradient-274)"
                    d="M889.76 568.01v2.44l-3.67-2.1v-2.44l3.67 2.1z"
                  />
                  <path
                    fill="url(#prefix__linear-gradient-275)"
                    d="M889.75 568.01v2.44l30.06-17.48v-2.44l-30.06 17.48z"
                  />
                  <path
                    fill="url(#prefix__linear-gradient-276)"
                    d="M919.81 550.53l-30.06 17.48-3.66-2.1 30.07-17.49 3.65 2.11z"
                  />
                </g>
                <g>
                  <path
                    fill="url(#prefix__linear-gradient-277)"
                    d="M899.49 573.65v2.45l-3.66-2.1v-2.45l3.66 2.1z"
                  />
                  <path
                    fill="url(#prefix__linear-gradient-278)"
                    d="M899.49 573.65v2.45l30.05-17.48v-2.44l-30.05 17.47z"
                  />
                  <path
                    fill="url(#prefix__linear-gradient-279)"
                    d="M929.54 556.18l-30.05 17.47-3.66-2.1 30.07-17.48 3.64 2.11z"
                  />
                </g>
                <g>
                  <path
                    fill="url(#prefix__linear-gradient-280)"
                    d="M909.23 579.3v2.44l-3.66-2.1v-2.44l3.66 2.1z"
                  />
                  <path
                    fill="url(#prefix__linear-gradient-281)"
                    d="M909.22 579.3v2.44l30.06-17.48v-2.44l-30.06 17.48z"
                  />
                  <path
                    fill="url(#prefix__linear-gradient-282)"
                    d="M939.28 561.82l-30.06 17.48-3.65-2.1 30.07-17.48 3.64 2.1z"
                  />
                </g>
                <g>
                  <path
                    fill="url(#prefix__linear-gradient-283)"
                    d="M918.97 584.95v2.44l-3.67-2.1v-2.45l3.67 2.11z"
                  />
                  <path
                    fill="url(#prefix__linear-gradient-284)"
                    d="M918.96 584.95v2.44l30.06-17.48v-2.44l-30.06 17.48z"
                  />
                  <path
                    fill="url(#prefix__linear-gradient-285)"
                    d="M949.02 567.47l-30.06 17.48-3.66-2.11 30.08-17.48 3.64 2.11z"
                  />
                </g>
                <g>
                  <path
                    fill="url(#prefix__linear-gradient-286)"
                    d="M928.7 590.59v2.44l-3.66-2.1v-2.44l3.66 2.1z"
                  />
                  <path
                    fill="url(#prefix__linear-gradient-287)"
                    d="M928.7 590.59v2.44l30.06-17.48v-2.43l-30.06 17.47z"
                  />
                  <path
                    fill="url(#prefix__linear-gradient-288)"
                    d="M958.76 573.12l-30.06 17.47-3.66-2.1 30.07-17.48 3.65 2.11z"
                  />
                </g>
                <g>
                  <path
                    fill="url(#prefix__linear-gradient-289)"
                    d="M938.44 596.24v2.44l-3.66-2.1v-2.45l3.66 2.11z"
                  />
                  <path
                    fill="url(#prefix__linear-gradient-290)"
                    d="M938.43 596.24v2.44l30.06-17.48v-2.44l-30.06 17.48z"
                  />
                  <path
                    fill="url(#prefix__linear-gradient-291)"
                    d="M968.49 578.76l-30.06 17.48-3.65-2.11 30.07-17.48 3.64 2.11z"
                  />
                </g>
                <g>
                  <path
                    fill="url(#prefix__linear-gradient-292)"
                    d="M948.18 601.88v2.45l-3.66-2.11v-2.44l3.66 2.1z"
                  />
                  <path
                    fill="url(#prefix__linear-gradient-293)"
                    d="M948.17 601.88v2.45l30.06-17.49v-2.44l-30.06 17.48z"
                  />
                  <path
                    fill="url(#prefix__linear-gradient-294)"
                    d="M978.23 584.4l-30.06 17.48-3.65-2.1 30.07-17.48 3.64 2.1z"
                  />
                </g>
                <g>
                  <path
                    fill="url(#prefix__linear-gradient-295)"
                    d="M957.91 607.53v2.44l-3.66-2.1v-2.45l3.66 2.11z"
                  />
                  <path
                    fill="url(#prefix__linear-gradient-296)"
                    d="M957.91 607.53v2.44l30.06-17.48v-2.44l-30.06 17.48z"
                  />
                  <path
                    fill="url(#prefix__linear-gradient-297)"
                    d="M987.97 590.05l-30.06 17.48-3.66-2.11 30.07-17.48 3.65 2.11z"
                  />
                </g>
                <g>
                  <path
                    fill="url(#prefix__linear-gradient-298)"
                    d="M967.65 613.17v2.45l-3.66-2.11v-2.44l3.66 2.1z"
                  />
                  <path
                    fill="url(#prefix__linear-gradient-299)"
                    d="M967.65 613.17v2.45l30.05-17.49v-2.43l-30.05 17.47z"
                  />
                  <path
                    fill="url(#prefix__linear-gradient-300)"
                    d="M997.7 595.7l-30.05 17.47-3.66-2.1 30.07-17.48 3.64 2.11z"
                  />
                </g>
                <g>
                  <path
                    fill="url(#prefix__linear-gradient-301)"
                    d="M977.39 618.82v2.44l-3.66-2.1v-2.44l3.66 2.1z"
                  />
                  <path
                    fill="url(#prefix__linear-gradient-302)"
                    d="M977.38 618.82v2.44l30.06-17.48v-2.44l-30.06 17.48z"
                  />
                  <path
                    fill="url(#prefix__linear-gradient-303)"
                    d="M1007.44 601.34l-30.06 17.48-3.65-2.1 30.07-17.49 3.64 2.11z"
                  />
                </g>
                <g>
                  <path
                    fill="url(#prefix__linear-gradient-304)"
                    d="M987.13 624.46v2.45l-3.67-2.11v-2.44l3.67 2.1z"
                  />
                  <path
                    fill="url(#prefix__linear-gradient-305)"
                    d="M987.12 624.46v2.45l30.06-17.49v-2.43l-30.06 17.47z"
                  />
                  <path
                    fill="url(#prefix__linear-gradient-306)"
                    d="M1017.18 606.99l-30.06 17.47-3.66-2.1 30.07-17.48 3.65 2.11z"
                  />
                </g>
                <g>
                  <path
                    fill="url(#prefix__linear-gradient-307)"
                    d="M996.86 630.11v2.44l-3.66-2.1v-2.44l3.66 2.1z"
                  />
                  <path
                    fill="url(#prefix__linear-gradient-308)"
                    d="M996.86 630.11v2.44l30.05-17.48v-2.44l-30.05 17.48z"
                  />
                  <path
                    fill="url(#prefix__linear-gradient-309)"
                    d="M1026.91 612.63l-30.05 17.48-3.66-2.1 30.07-17.49 3.64 2.11z"
                  />
                </g>
                <g>
                  <path
                    fill="url(#prefix__linear-gradient-310)"
                    d="M1006.6 635.75v2.45l-3.66-2.11v-2.44l3.66 2.1z"
                  />
                  <path
                    fill="url(#prefix__linear-gradient-311)"
                    d="M1006.59 635.75v2.45l30.06-17.49v-2.43l-30.06 17.47z"
                  />
                  <path
                    fill="url(#prefix__linear-gradient-312)"
                    d="M1036.65 618.28l-30.06 17.47-3.65-2.1 30.07-17.48 3.64 2.11z"
                  />
                </g>
                <g>
                  <path
                    fill="url(#prefix__linear-gradient-313)"
                    d="M1016.34 641.4v2.44l-3.67-2.1v-2.44l3.67 2.1z"
                  />
                  <path
                    fill="url(#prefix__linear-gradient-314)"
                    d="M1016.33 641.4v2.44l30.06-17.48v-2.44l-30.06 17.48z"
                  />
                  <path
                    fill="url(#prefix__linear-gradient-315)"
                    d="M1046.39 623.92l-30.06 17.48-3.66-2.1 30.07-17.49 3.65 2.11z"
                  />
                </g>
                <g>
                  <path
                    fill="url(#prefix__linear-gradient-316)"
                    d="M1026.07 647.04v2.45l-3.66-2.11v-2.44l3.66 2.1z"
                  />
                  <path
                    fill="url(#prefix__linear-gradient-317)"
                    d="M1026.07 647.04v2.45l30.06-17.49v-2.43l-30.06 17.47z"
                  />
                  <path
                    fill="url(#prefix__linear-gradient-318)"
                    d="M1056.13 629.57l-30.06 17.47-3.66-2.1 30.07-17.48 3.65 2.11z"
                  />
                </g>
                <g>
                  <path
                    fill="url(#prefix__linear-gradient-319)"
                    d="M1035.81 652.69v2.44l-3.66-2.1v-2.44l3.66 2.1z"
                  />
                  <path
                    fill="url(#prefix__linear-gradient-320)"
                    d="M1035.81 652.69v2.44l30.05-17.48v-2.44l-30.05 17.48z"
                  />
                  <path
                    fill="url(#prefix__linear-gradient-321)"
                    d="M1065.86 635.21l-30.05 17.48-3.66-2.1 30.07-17.49 3.64 2.11z"
                  />
                </g>
                <g>
                  <path
                    fill="url(#prefix__linear-gradient-322)"
                    d="M1045.55 658.33v2.45l-3.66-2.11v-2.44l3.66 2.1z"
                  />
                  <path
                    fill="url(#prefix__linear-gradient-323)"
                    d="M1045.54 658.33v2.45l30.06-17.49v-2.43l-30.06 17.47z"
                  />
                  <path
                    fill="url(#prefix__linear-gradient-324)"
                    d="M1075.6 640.86l-30.06 17.47-3.65-2.1 30.06-17.48 3.65 2.11z"
                  />
                </g>
                <g>
                  <path
                    fill="url(#prefix__linear-gradient-325)"
                    d="M1055.29 663.98v2.44l-3.67-2.1v-2.44l3.67 2.1z"
                  />
                  <path
                    fill="url(#prefix__linear-gradient-326)"
                    d="M1055.28 663.98v2.44l30.06-17.48v-2.44l-30.06 17.48z"
                  />
                  <path
                    fill="url(#prefix__linear-gradient-327)"
                    d="M1085.34 646.5l-30.06 17.48-3.66-2.1 30.07-17.49 3.65 2.11z"
                  />
                </g>
                <g>
                  <path
                    fill="url(#prefix__linear-gradient-328)"
                    d="M1065.02 669.62v2.45l-3.66-2.1v-2.45l3.66 2.1z"
                  />
                  <path
                    fill="url(#prefix__linear-gradient-329)"
                    d="M1065.02 669.62v2.45l30.05-17.48v-2.44l-30.05 17.47z"
                  />
                  <path
                    fill="url(#prefix__linear-gradient-330)"
                    d="M1095.07 652.15l-30.05 17.47-3.66-2.1 30.07-17.48 3.64 2.11z"
                  />
                </g>
                <g>
                  <path
                    fill="url(#prefix__linear-gradient-331)"
                    d="M1074.76 675.27v2.44l-3.66-2.1v-2.44l3.66 2.1z"
                  />
                  <path
                    fill="url(#prefix__linear-gradient-332)"
                    d="M1074.75 675.27v2.44l30.06-17.48v-2.44l-30.06 17.48z"
                  />
                  <path
                    fill="url(#prefix__linear-gradient-333)"
                    d="M1104.81 657.79l-30.06 17.48-3.65-2.1 30.07-17.49 3.64 2.11z"
                  />
                </g>
                <g>
                  <path
                    fill="url(#prefix__linear-gradient-334)"
                    d="M1084.5 680.91v2.45l-3.67-2.1v-2.45l3.67 2.1z"
                  />
                  <path
                    fill="url(#prefix__linear-gradient-335)"
                    d="M1084.49 680.91v2.45l30.06-17.48v-2.44l-30.06 17.47z"
                  />
                  <path
                    fill="url(#prefix__linear-gradient-336)"
                    d="M1114.55 663.44l-30.06 17.47-3.66-2.1 30.07-17.48 3.65 2.11z"
                  />
                </g>
                <g>
                  <path
                    fill="url(#prefix__linear-gradient-337)"
                    d="M1094.23 686.56V689l-3.66-2.1v-2.44l3.66 2.1z"
                  />
                  <path
                    fill="url(#prefix__linear-gradient-338)"
                    d="M1094.23 686.56V689l30.06-17.48v-2.44l-30.06 17.48z"
                  />
                  <path
                    fill="url(#prefix__linear-gradient-339)"
                    d="M1124.29 669.08l-30.06 17.48-3.66-2.1 30.07-17.48 3.65 2.1z"
                  />
                </g>
                <g>
                  <path
                    fill="url(#prefix__linear-gradient-340)"
                    d="M1103.97 692.21v2.44l-3.66-2.1v-2.45l3.66 2.11z"
                  />
                  <path
                    fill="url(#prefix__linear-gradient-341)"
                    d="M1103.96 692.21v2.44l30.06-17.48v-2.44l-30.06 17.48z"
                  />
                  <path
                    fill="url(#prefix__linear-gradient-342)"
                    d="M1134.02 674.73l-30.06 17.48-3.65-2.11 30.07-17.48 3.64 2.11z"
                  />
                </g>
                <g>
                  <path
                    fill="url(#prefix__linear-gradient-343)"
                    d="M1113.71 697.85v2.44l-3.66-2.1v-2.44l3.66 2.1z"
                  />
                  <path
                    fill="url(#prefix__linear-gradient-344)"
                    d="M1113.7 697.85v2.44l30.06-17.48v-2.43l-30.06 17.47z"
                  />
                  <path
                    fill="url(#prefix__linear-gradient-345)"
                    d="M1143.76 680.38l-30.06 17.47-3.65-2.1 30.06-17.48 3.65 2.11z"
                  />
                </g>
                <g>
                  <g clipPath="url(#prefix__clip-path)">
                    <path
                      fill="#8d9195"
                      d="M1120.82 694.37l1.09 3.63h-1.09v-3.63zM1120.82 694.04l1.19 3.96h-.1l-1.09-3.63v-.33z"
                    />
                    <path
                      fill="#8e9296"
                      d="M1120.82 693.72l1.28 4.28h-.09l-1.19-3.96v-.32z"
                    />
                    <path
                      fill="#8f9397"
                      d="M1120.84 693.46l1.36 4.54h-.1l-1.28-4.28v-.26h.02z"
                    />
                    <path
                      fill="#909498"
                      d="M1120.94 693.46l1.36 4.54h-.1l-1.36-4.54h.1z"
                    />
                    <path
                      fill="#919599"
                      d="M1121.04 693.46l1.36 4.54h-.1l-1.36-4.54h.1z"
                    />
                    <path
                      fill="#92969a"
                      d="M1121.14 693.46l1.36 4.54h-.1l-1.36-4.54h.1z"
                    />
                    <path
                      fill="#93979b"
                      d="M1121.23 693.46l1.37 4.54h-.1l-1.36-4.54h.09z"
                    />
                    <path
                      fill="#93989c"
                      d="M1121.33 693.46l1.36 4.54h-.09l-1.37-4.54h.1z"
                    />
                    <path
                      fill="#94999d"
                      d="M1121.43 693.46l1.36 4.54h-.1l-1.36-4.54h.1z"
                    />
                    <path
                      fill="#959a9e"
                      d="M1121.53 693.46l1.36 4.54h-.1l-1.36-4.54h.1z"
                    />
                    <path
                      fill="#969b9f"
                      d="M1121.63 693.46l1.36 4.54h-.1l-1.36-4.54h.1z"
                    />
                    <path
                      fill="#979ca0"
                      d="M1121.73 693.46l1.36 4.54h-.1l-1.36-4.54h.1z"
                    />
                    <path
                      fill="#989da1"
                      d="M1121.82 693.46l1.36 4.54h-.09l-1.36-4.54h.09z"
                    />
                    <path
                      fill="#999ea2"
                      d="M1121.92 693.46l1.36 4.54h-.1l-1.36-4.54h.1z"
                    />
                    <path
                      fill="#9a9fa3"
                      d="M1122.02 693.46l1.36 4.54h-.1l-1.36-4.54h.1z"
                    />
                    <path
                      fill="#9ba0a4"
                      d="M1122.12 693.46l1.36 4.54h-.1l-1.36-4.54h.1z"
                    />
                    <path
                      fill="#9ca1a5"
                      d="M1122.22 693.46l1.36 4.54h-.1l-1.36-4.54h.1z"
                    />
                    <path
                      fill="#9da2a6"
                      d="M1122.32 693.46l1.36 4.54h-.1l-1.36-4.54h.1z"
                    />
                    <path
                      fill="#9ea3a7"
                      d="M1122.41 693.46l1.37 4.54h-.1l-1.36-4.54h.09z"
                    />
                    <path
                      fill="#9fa4a8"
                      d="M1122.51 693.46l1.36 4.54h-.09l-1.37-4.54h.1z"
                    />
                    <path
                      fill="#a0a5a9"
                      d="M1122.61 693.46l1.36 4.54h-.1l-1.36-4.54h.1z"
                    />
                    <path
                      fill="#a0a6aa"
                      d="M1122.71 693.46l1.36 4.54h-.1l-1.36-4.54h.1z"
                    />
                    <path
                      fill="#a1a7ab"
                      d="M1122.81 693.46l1.36 4.54h-.1l-1.36-4.54h.1z"
                    />
                    <path
                      fill="#a2a8ac"
                      d="M1122.91 693.46l1.36 4.54h-.1l-1.36-4.54h.1z"
                    />
                    <path
                      fill="#a3a9ad"
                      d="M1123 693.46l1.37 4.54h-.1l-1.36-4.54h.09z"
                    />
                    <path
                      fill="#a4aaae"
                      d="M1123.1 693.46l1.36 4.54h-.09l-1.37-4.54h.1z"
                    />
                    <path
                      fill="#a5abaf"
                      d="M1123.2 693.46l1.28 4.27v.27h-.02l-1.36-4.54h.1z"
                    />
                    <path
                      fill="#a6acb0"
                      d="M1123.3 693.46l1.18 3.94v.33l-1.28-4.27h.1z"
                    />
                    <path
                      fill="#a7adb1"
                      d="M1123.4 693.46l1.08 3.62v.32l-1.18-3.94h.1z"
                    />
                    <path
                      fill="#a8aeb2"
                      d="M1123.5 693.46l.98 3.29v.33l-1.08-3.62h.1z"
                    />
                    <path
                      fill="#a9afb3"
                      d="M1123.6 693.46l.88 2.96v.33l-.98-3.29h.1z"
                    />
                    <path
                      fill="#aab0b4"
                      d="M1123.69 693.46l.79 2.63v.33l-.88-2.96h.09z"
                    />
                    <path
                      fill="#abb1b5"
                      d="M1123.79 693.46l.69 2.3v.33l-.79-2.63h.1z"
                    />
                    <path
                      fill="#acb2b6"
                      d="M1123.89 693.46l.59 1.97v.33l-.69-2.3h.1z"
                    />
                    <path
                      fill="#adb3b7"
                      d="M1123.99 693.46l.49 1.65v.32l-.59-1.97h.1z"
                    />
                    <path
                      fill="#adb4b8"
                      d="M1124.09 693.46l.39 1.32v.33l-.49-1.65h.1z"
                    />
                    <path
                      fill="#aeb5b9"
                      d="M1124.18 693.46l.3.99v.33l-.39-1.32h.09z"
                    />
                    <path
                      fill="#afb6ba"
                      d="M1124.28 693.46l.2.66v.33l-.3-.99h.1z"
                    />
                    <path
                      fill="#b0b7bb"
                      d="M1124.38 693.46l.1.33v.33l-.2-.66h.1z"
                    />
                    <path fill="#b1b8bc" d="M1124.48 693.46v.33l-.1-.33h.1z" />
                    <path fill="#b2b9bd" d="M1124.48 693.46z" />
                  </g>
                  <g clipPath="url(#prefix__clip-path-2)">
                    <path fill="#a7adb1" d="M0 626.5L16.03 698H0v-71.5z" />
                    <path
                      fill="#a8aeb2"
                      d="M0 481.04L48.63 698h-32.6L0 626.5V481.04z"
                    />
                    <path
                      fill="#a9afb3"
                      d="M0 335.58L81.24 698H48.63L0 481.04V335.58z"
                    />
                    <path
                      fill="#aab0b4"
                      d="M0 190.12L113.85 698H81.24L0 335.58V190.12z"
                    />
                    <path
                      fill="#abb1b5"
                      d="M.27 45.87L146.46 698h-32.61L0 190.12V45.87h.27z"
                    />
                    <path
                      fill="#acb2b6"
                      d="M32.88 45.87L179.07 698h-32.61L.27 45.87h32.61z"
                    />
                    <path
                      fill="#adb3b7"
                      d="M65.49 45.87L211.68 698h-32.61L32.88 45.87h32.61z"
                    />
                    <path
                      fill="#adb4b8"
                      d="M98.1 45.87L244.28 698h-32.6L65.49 45.87H98.1z"
                    />
                    <path
                      fill="#aeb5b9"
                      d="M130.71 45.87L276.89 698h-32.61L98.1 45.87h32.61z"
                    />
                    <path
                      fill="#afb6ba"
                      d="M163.31 45.87L309.5 698h-32.61L130.71 45.87h32.6z"
                    />
                    <path
                      fill="#b0b7bb"
                      d="M195.92 45.87L342.11 698H309.5L163.31 45.87h32.61z"
                    />
                    <path
                      fill="#b1b8bc"
                      d="M228.53 45.87L374.72 698h-32.61L195.92 45.87h32.61z"
                    />
                    <path
                      fill="#b2b9bd"
                      d="M261.14 45.87L407.32 698h-32.6L228.53 45.87h32.61z"
                    />
                    <path
                      fill="#b3babe"
                      d="M293.75 45.87L439.93 698h-32.61L261.14 45.87h32.61z"
                    />
                    <path
                      fill="#b4bbbf"
                      d="M326.35 45.87L472.54 698h-32.61L293.75 45.87h32.6z"
                    />
                    <path
                      fill="#b5bcc0"
                      d="M358.96 45.87L505.15 698h-32.61L326.35 45.87h32.61z"
                    />
                    <path
                      fill="#b6bdc1"
                      d="M391.57 45.87L537.76 698h-32.61L358.96 45.87h32.61z"
                    />
                    <path
                      fill="#b7bec2"
                      d="M424.18 45.87L570.37 698h-32.61L391.57 45.87h32.61z"
                    />
                    <path
                      fill="#b8bfc3"
                      d="M456.79 45.87L602.97 698h-32.6L424.18 45.87h32.61z"
                    />
                    <path
                      fill="#b9c0c4"
                      d="M489.39 45.87L635.58 698h-32.61L456.79 45.87h32.6z"
                    />
                    <path
                      fill="#bac1c5"
                      d="M522 45.87L668.19 698h-32.61L489.39 45.87H522z"
                    />
                    <path
                      fill="#bac1c7"
                      d="M554.61 45.87L700.8 698h-32.61L522 45.87h32.61z"
                    />
                    <path
                      fill="#bbc2c8"
                      d="M587.22 45.87L733.41 698H700.8L554.61 45.87h32.61z"
                    />
                    <path
                      fill="#bcc3c9"
                      d="M619.83 45.87L766.01 698h-32.6L587.22 45.87h32.61z"
                    />
                    <path
                      fill="#bdc4ca"
                      d="M652.43 45.87L798.62 698h-32.61L619.83 45.87h32.6z"
                    />
                    <path
                      fill="#bec5cb"
                      d="M685.04 45.87L831.23 698h-32.61L652.43 45.87h32.61z"
                    />
                    <path
                      fill="#bfc6cc"
                      d="M717.65 45.87L863.84 698h-32.61L685.04 45.87h32.61z"
                    />
                    <path
                      fill="#c0c7cd"
                      d="M750.26 45.87L896.45 698h-32.61L717.65 45.87h32.61z"
                    />
                    <path
                      fill="#c1c8ce"
                      d="M782.87 45.87L929.05 698h-32.6L750.26 45.87h32.61z"
                    />
                    <path
                      fill="#c2c9cf"
                      d="M815.48 45.87L961.66 698h-32.61L782.87 45.87h32.61z"
                    />
                    <path
                      fill="#c3cad0"
                      d="M848.08 45.87L994.27 698h-32.61L815.48 45.87h32.6z"
                    />
                    <path
                      fill="#c4cbd1"
                      d="M880.69 45.87L1026.88 698h-32.61L848.08 45.87h32.61z"
                    />
                    <path
                      fill="#c5ccd2"
                      d="M913.3 45.87L1059.49 698h-32.61L880.69 45.87h32.61z"
                    />
                    <path
                      fill="#c6cdd3"
                      d="M945.91 45.87L1092.1 698h-32.61L913.3 45.87h32.61z"
                    />
                    <path
                      fill="#c7ced4"
                      d="M978.52 45.87l142.31 634.84V698h-28.73L945.91 45.87h32.61z"
                    />
                    <path
                      fill="#c7cfd5"
                      d="M1011.13 45.87l109.7 489.37v145.47L978.52 45.87h32.61z"
                    />
                    <path
                      fill="#c8d0d6"
                      d="M1043.73 45.87l77.1 343.91v145.46l-109.7-489.37h32.6z"
                    />
                    <path
                      fill="#c9d1d7"
                      d="M1076.34 45.87l44.49 198.45v145.46l-77.1-343.91h32.61z"
                    />
                    <path
                      fill="#cad2d8"
                      d="M1108.95 45.87l11.88 52.98v145.47l-44.49-198.45h32.61z"
                    />
                    <path
                      fill="#cbd3d9"
                      d="M1120.83 98.85l-11.88-52.98h11.88v52.98z"
                    />
                  </g>
                  <g clipPath="url(#prefix__clip-path-3)">
                    <path
                      fill="#8d9195"
                      d="M1124.48 530.31L197.22 43.76h927.26v486.55z"
                    />
                    <path
                      fill="#8d9195"
                      d="M1124.48 531.87L194.24 43.76h2.98l927.26 486.55v1.56z"
                    />
                    <path
                      fill="#8e9296"
                      d="M1124.48 533.44L191.26 43.76h2.98l930.24 488.11v1.57z"
                    />
                    <path
                      fill="#8f9397"
                      d="M1124.48 535L188.28 43.76h2.98l933.22 489.68V535z"
                    />
                    <path
                      fill="#909498"
                      d="M1124.48 536.57L185.29 43.76h2.99L1124.48 535v1.57z"
                    />
                    <path
                      fill="#919599"
                      d="M1124.48 538.14L182.31 43.76h2.98l939.19 492.81v1.57z"
                    />
                    <path
                      fill="#92969a"
                      d="M1124.48 539.7L179.32 43.76h2.99l942.17 494.38v1.56z"
                    />
                    <path
                      fill="#93979b"
                      d="M1124.48 541.27L176.34 43.76h2.98l945.16 495.94v1.57z"
                    />
                    <path
                      fill="#93989c"
                      d="M1124.48 542.83L173.36 43.76h2.98l948.14 497.51v1.56z"
                    />
                    <path
                      fill="#94999d"
                      d="M1124.48 544.4L170.38 43.76h2.98l951.12 499.07v1.57z"
                    />
                    <path
                      fill="#959a9e"
                      d="M1124.48 545.96L167.39 43.76h2.99l954.1 500.64v1.56z"
                    />
                    <path
                      fill="#969b9f"
                      d="M1124.48 547.53L164.41 43.76h2.98l957.09 502.2v1.57z"
                    />
                    <path
                      fill="#979ca0"
                      d="M1124.48 549.09L161.43 43.76h2.98l960.07 503.77v1.56z"
                    />
                    <path
                      fill="#989da1"
                      d="M1124.48 550.66L158.44 43.76h2.99l963.05 505.33v1.57z"
                    />
                    <path
                      fill="#999ea2"
                      d="M1124.48 552.23L155.46 43.76h2.98l966.04 506.9v1.57z"
                    />
                    <path
                      fill="#9a9fa3"
                      d="M1124.48 553.79L152.47 43.76h2.99l969.02 508.47v1.56z"
                    />
                    <path
                      fill="#9ba0a4"
                      d="M1124.48 555.36L149.49 43.76h2.98l972.01 510.03v1.57z"
                    />
                    <path
                      fill="#9ca1a5"
                      d="M1124.48 556.92L146.51 43.76h2.98l974.99 511.6v1.56z"
                    />
                    <path
                      fill="#9da2a6"
                      d="M1124.48 558.49L143.52 43.76h2.99l977.97 513.16v1.57z"
                    />
                    <path
                      fill="#9ea3a7"
                      d="M1124.48 560.05L140.54 43.76h2.98l980.96 514.73v1.56z"
                    />
                    <path
                      fill="#9fa4a8"
                      d="M1124.48 561.62L137.56 43.76h2.98l983.94 516.29v1.57z"
                    />
                    <path
                      fill="#a0a5a9"
                      d="M1124.48 563.18L134.57 43.76h2.99l986.92 517.86v1.56z"
                    />
                    <path
                      fill="#a0a6aa"
                      d="M1124.48 564.75L131.59 43.76h2.98l989.91 519.42v1.57z"
                    />
                    <path
                      fill="#a1a7ab"
                      d="M1124.48 566.31L128.61 43.76h2.98l992.89 520.99v1.56z"
                    />
                    <path
                      fill="#a2a8ac"
                      d="M1124.48 567.88L125.62 43.76h2.99l995.87 522.55v1.57z"
                    />
                    <path
                      fill="#a3a9ad"
                      d="M1124.48 569.44L122.64 43.76h2.98l998.86 524.12v1.56z"
                    />
                    <path
                      fill="#a4aaae"
                      d="M1124.48 571.01L119.66 43.76h2.98l1001.84 525.68v1.57z"
                    />
                    <path
                      fill="#a5abaf"
                      d="M1124.48 572.58L116.67 43.76h2.99l1004.82 527.25v1.57z"
                    />
                    <path
                      fill="#a6acb0"
                      d="M1124.48 574.14L113.69 43.76h2.98l1007.81 528.82v1.56z"
                    />
                    <path
                      fill="#a7adb1"
                      d="M1124.48 575.71L110.71 43.76h2.98l1010.79 530.38v1.57z"
                    />
                    <path
                      fill="#a8aeb2"
                      d="M1124.48 577.27L107.72 43.76h2.99l1013.77 531.95v1.56z"
                    />
                    <path
                      fill="#a9afb3"
                      d="M1124.48 578.84L104.74 43.76h2.98l1016.76 533.51v1.57z"
                    />
                    <path
                      fill="#aab0b4"
                      d="M1124.48 580.4L101.76 43.76h2.98l1019.74 535.08v1.56z"
                    />
                    <path
                      fill="#abb1b5"
                      d="M1124.48 581.97L98.77 43.76h2.99L1124.48 580.4v1.57z"
                    />
                    <path
                      fill="#acb2b6"
                      d="M1124.48 583.53L95.79 43.76h2.98l1025.71 538.21v1.56z"
                    />
                    <path
                      fill="#adb3b7"
                      d="M1124.48 585.1L92.81 43.76h2.98l1028.69 539.77v1.57z"
                    />
                    <path
                      fill="#adb4b8"
                      d="M1124.48 586.66L89.82 43.76h2.99L1124.48 585.1v1.56z"
                    />
                    <path
                      fill="#aeb5b9"
                      d="M1124.48 588.23L86.84 43.76h2.98l1034.66 542.9v1.57z"
                    />
                    <path
                      fill="#afb6ba"
                      d="M1124.48 589.79L83.86 43.76h2.98l1037.64 544.47v1.56z"
                    />
                    <path
                      fill="#b0b7bb"
                      d="M1124.48 591.36L80.87 43.76h2.99l1040.62 546.03v1.57z"
                    />
                    <path
                      fill="#b1b8bc"
                      d="M1124.48 592.93L77.89 43.76h2.98l1043.61 547.6v1.57z"
                    />
                    <path
                      fill="#b2b9bd"
                      d="M1124.48 594.49L74.91 43.76h2.98l1046.59 549.17v1.56z"
                    />
                    <path
                      fill="#b3babe"
                      d="M1124.48 596.06L71.92 43.76h2.99l1049.57 550.73v1.57z"
                    />
                    <path
                      fill="#b4bbbf"
                      d="M1124.48 597.62L68.94 43.76h2.98l1052.56 552.3v1.56z"
                    />
                    <path
                      fill="#b5bcc0"
                      d="M1124.48 599.19L65.96 43.76h2.98l1055.54 553.86v1.57z"
                    />
                    <path
                      fill="#b6bdc1"
                      d="M1124.48 600.75L62.97 43.76h2.99l1058.52 555.43v1.56z"
                    />
                    <path
                      fill="#b7bec2"
                      d="M1124.48 602.32L59.99 43.76h2.98l1061.51 556.99v1.57z"
                    />
                    <path
                      fill="#b8bfc3"
                      d="M1124.48 603.88L57.01 43.76h2.98l1064.49 558.56v1.56z"
                    />
                    <path
                      fill="#b9c0c4"
                      d="M1124.48 605.45L54.02 43.76h2.99l1067.47 560.12v1.57z"
                    />
                    <path
                      fill="#bac1c5"
                      d="M1124.48 607.01L51.04 43.76h2.98l1070.46 561.69v1.56z"
                    />
                    <path
                      fill="#bac1c7"
                      d="M1124.48 608.58L48.06 43.76h2.98l1073.44 563.25v1.57z"
                    />
                    <path
                      fill="#bbc2c8"
                      d="M1124.48 610.15L45.07 43.76h2.99l1076.42 564.82v1.57z"
                    />
                    <path
                      fill="#bcc3c9"
                      d="M1124.48 611.71L42.09 43.76h2.98l1079.41 566.39v1.56z"
                    />
                    <path
                      fill="#bdc4ca"
                      d="M1124.48 613.28L39.11 43.76h2.98l1082.39 567.95v1.57z"
                    />
                    <path
                      fill="#bec5cb"
                      d="M1124.48 614.84L36.12 43.76h2.99l1085.37 569.52v1.56z"
                    />
                    <path
                      fill="#bfc6cc"
                      d="M1124.48 616.41L33.14 43.76h2.98l1088.36 571.08v1.57z"
                    />
                    <path
                      fill="#c0c7cd"
                      d="M1124.48 617.97L30.16 43.76h2.98l1091.34 572.65v1.56z"
                    />
                    <path
                      fill="#c1c8ce"
                      d="M1124.48 619.54L27.17 43.76h2.99l1094.32 574.21v1.57z"
                    />
                    <path
                      fill="#c2c9cf"
                      d="M1124.48 621.1L24.19 43.76h2.98l1097.31 575.78v1.56z"
                    />
                    <path
                      fill="#c3cad0"
                      d="M1124.48 622.67L21.21 43.76h2.98L1124.48 621.1v1.57z"
                    />
                    <path
                      fill="#c4cbd1"
                      d="M1124.48 624.23L18.22 43.76h2.99l1103.27 578.91v1.56z"
                    />
                    <path
                      fill="#c5ccd2"
                      d="M1124.48 625.8L15.24 43.76h2.98l1106.26 580.47v1.57z"
                    />
                    <path
                      fill="#c6cdd3"
                      d="M1124.48 627.37L12.26 43.76h2.98L1124.48 625.8v1.57z"
                    />
                    <path
                      fill="#c7ced4"
                      d="M1124.48 628.93L9.27 43.76h2.99l1112.22 583.61v1.56z"
                    />
                    <path
                      fill="#c7cfd5"
                      d="M1124.48 630.5L6.29 43.76h2.98l1115.21 585.17v1.57z"
                    />
                    <path
                      fill="#c8d0d6"
                      d="M1124.48 632.06L3.31 43.76h2.98L1124.48 630.5v1.56z"
                    />
                    <path
                      fill="#c9d1d7"
                      d="M1124.48 633.63L.32 43.76h2.99l1121.17 588.3v1.57z"
                    />
                    <path
                      fill="#cad2d8"
                      d="M1124.48 635.19L0 45.16v-1.4h.32l1124.16 589.87v1.56z"
                    />
                    <path
                      fill="#cbd3d9"
                      d="M1124.48 636.76L0 46.72v-1.56l1124.48 590.03v1.57z"
                    />
                    <path
                      fill="#ccd4da"
                      d="M1124.48 638.32L0 48.29v-1.57l1124.48 590.04v1.56z"
                    />
                    <path
                      fill="#cdd5db"
                      d="M1124.48 639.89L0 49.85v-1.56l1124.48 590.03v1.57z"
                    />
                    <path
                      fill="#ced6dc"
                      d="M1124.48 641.45L0 51.42v-1.57l1124.48 590.04v1.56z"
                    />
                    <path
                      fill="#cfd7dd"
                      d="M1124.48 643.02L0 52.99v-1.57l1124.48 590.03v1.57z"
                    />
                    <path
                      fill="#d0d8de"
                      d="M1124.48 644.59L0 54.55v-1.56l1124.48 590.03v1.57z"
                    />
                    <path
                      fill="#d1d9df"
                      d="M1124.48 646.15L0 56.12v-1.57l1124.48 590.04v1.56z"
                    />
                    <path
                      fill="#d2dae0"
                      d="M1124.48 647.72L0 57.68v-1.56l1124.48 590.03v1.57z"
                    />
                    <path
                      fill="#d3dbe1"
                      d="M1124.48 649.28L0 59.25v-1.57l1124.48 590.04v1.56z"
                    />
                    <path
                      fill="#d4dce2"
                      d="M1124.48 650.85L0 60.81v-1.56l1124.48 590.03v1.57z"
                    />
                    <path
                      fill="#d4dde3"
                      d="M1124.48 652.41L0 62.38v-1.57l1124.48 590.04v1.56z"
                    />
                    <path
                      fill="#d5dee4"
                      d="M1124.48 653.98L0 63.94v-1.56l1124.48 590.03v1.57z"
                    />
                    <path
                      fill="#d6dfe5"
                      d="M1124.48 655.54L0 65.51v-1.57l1124.48 590.04v1.56z"
                    />
                    <path
                      fill="#d7e0e6"
                      d="M1124.48 657.11L0 67.08v-1.57l1124.48 590.03v1.57z"
                    />
                    <path
                      fill="#d8e1e7"
                      d="M1124.48 658.67L0 68.64v-1.56l1124.48 590.03v1.56z"
                    />
                    <path
                      fill="#d9e2e8"
                      d="M1124.48 660.24L0 70.21v-1.57l1124.48 590.03v1.57z"
                    />
                    <path
                      fill="#dae3e9"
                      d="M1124.48 661.8L0 71.77v-1.56l1124.48 590.03v1.56z"
                    />
                    <path
                      fill="#dbe4ea"
                      d="M1124.48 663.37L0 73.34v-1.57L1124.48 661.8v1.57z"
                    />
                    <path
                      fill="#dce5eb"
                      d="M1124.48 664.93L0 74.9v-1.56l1124.48 590.03v1.56z"
                    />
                    <path
                      fill="#dde6ec"
                      d="M1124.48 666.5L0 76.47V74.9l1124.48 590.03v1.57z"
                    />
                    <path
                      fill="#dee7ed"
                      d="M1124.48 668.07L0 78.03v-1.56L1124.48 666.5v1.57z"
                    />
                    <path
                      fill="#dfe8ee"
                      d="M1124.48 669.63L0 79.6v-1.57l1124.48 590.04v1.56z"
                    />
                    <path
                      fill="#e0e9ef"
                      d="M1124.48 671.2L0 81.16V79.6l1124.48 590.03v1.57z"
                    />
                    <path
                      fill="#e1eaf0"
                      d="M1124.48 672.76L0 82.73v-1.57L1124.48 671.2v1.56z"
                    />
                    <path
                      fill="#e1ebf1"
                      d="M1124.48 674.33L0 84.3v-1.57l1124.48 590.03v1.57z"
                    />
                    <path
                      fill="#e2ecf2"
                      d="M1124.48 675.89L0 85.86V84.3l1124.48 590.03v1.56z"
                    />
                    <path
                      fill="#e3edf3"
                      d="M1124.48 677.46L0 87.42v-1.56l1124.48 590.03v1.57z"
                    />
                    <path
                      fill="#e4eef4"
                      d="M1124.48 679.02L0 88.99v-1.57l1124.48 590.04v1.56z"
                    />
                    <path
                      fill="#e5eff5"
                      d="M1124.48 680.59L0 90.56v-1.57l1124.48 590.03v1.57z"
                    />
                    <path
                      fill="#e6f0f6"
                      d="M1124.48 682.15L0 92.12v-1.56l1124.48 590.03v1.56z"
                    />
                    <path
                      fill="#e7f1f7"
                      d="M1124.48 683.72L0 93.69v-1.57l1124.48 590.03v1.57z"
                    />
                    <path
                      fill="#e7f1f7"
                      d="M0 93.69l1124.48 590.03v11.84H0V93.69z"
                    />
                  </g>
                </g>
                <g>
                  <g clipPath="url(#prefix__clip-path-4)">
                    <path
                      fill="#8d9195"
                      d="M1137.84 684.56l1.09 3.62h-1.09v-3.62zM1137.84 684.23l1.19 3.95h-.1l-1.09-3.62v-.33z"
                    />
                    <path
                      fill="#8e9296"
                      d="M1137.84 683.9l1.28 4.28h-.09l-1.19-3.95v-.33z"
                    />
                    <path
                      fill="#8f9397"
                      d="M1137.86 683.64l1.36 4.54h-.1l-1.28-4.28v-.26h.02z"
                    />
                    <path
                      fill="#909498"
                      d="M1137.96 683.64l1.36 4.54h-.1l-1.36-4.54h.1z"
                    />
                    <path
                      fill="#919599"
                      d="M1138.06 683.64l1.36 4.54h-.1l-1.36-4.54h.1z"
                    />
                    <path
                      fill="#92969a"
                      d="M1138.16 683.64l1.36 4.54h-.1l-1.36-4.54h.1z"
                    />
                    <path
                      fill="#93979b"
                      d="M1138.25 683.64l1.37 4.54h-.1l-1.36-4.54h.09z"
                    />
                    <path
                      fill="#93989c"
                      d="M1138.35 683.64l1.36 4.54h-.09l-1.37-4.54h.1z"
                    />
                    <path
                      fill="#94999d"
                      d="M1138.45 683.64l1.36 4.54h-.1l-1.36-4.54h.1z"
                    />
                    <path
                      fill="#959a9e"
                      d="M1138.55 683.64l1.36 4.54h-.1l-1.36-4.54h.1z"
                    />
                    <path
                      fill="#969b9f"
                      d="M1138.65 683.64l1.36 4.54h-.1l-1.36-4.54h.1z"
                    />
                    <path
                      fill="#979ca0"
                      d="M1138.75 683.64l1.36 4.54h-.1l-1.36-4.54h.1z"
                    />
                    <path
                      fill="#989da1"
                      d="M1138.84 683.64l1.37 4.54h-.1l-1.36-4.54h.09z"
                    />
                    <path
                      fill="#999ea2"
                      d="M1138.94 683.64l1.36 4.54h-.09l-1.37-4.54h.1z"
                    />
                    <path
                      fill="#9a9fa3"
                      d="M1139.04 683.64l1.36 4.54h-.1l-1.36-4.54h.1z"
                    />
                    <path
                      fill="#9ba0a4"
                      d="M1139.14 683.64l1.36 4.54h-.1l-1.36-4.54h.1z"
                    />
                    <path
                      fill="#9ca1a5"
                      d="M1139.24 683.64l1.36 4.54h-.1l-1.36-4.54h.1z"
                    />
                    <path
                      fill="#9da2a6"
                      d="M1139.34 683.64l1.36 4.54h-.1l-1.36-4.54h.1z"
                    />
                    <path
                      fill="#9ea3a7"
                      d="M1139.43 683.64l1.37 4.54h-.1l-1.36-4.54h.09z"
                    />
                    <path
                      fill="#9fa4a8"
                      d="M1139.53 683.64l1.36 4.54h-.09l-1.37-4.54h.1z"
                    />
                    <path
                      fill="#a0a5a9"
                      d="M1139.63 683.64l1.36 4.54h-.1l-1.36-4.54h.1z"
                    />
                    <path
                      fill="#a0a6aa"
                      d="M1139.73 683.64l1.36 4.54h-.1l-1.36-4.54h.1z"
                    />
                    <path
                      fill="#a1a7ab"
                      d="M1139.83 683.64l1.36 4.54h-.1l-1.36-4.54h.1z"
                    />
                    <path
                      fill="#a2a8ac"
                      d="M1139.93 683.64l1.36 4.54h-.1l-1.36-4.54h.1z"
                    />
                    <path
                      fill="#a3a9ad"
                      d="M1140.03 683.64l1.36 4.54h-.1l-1.36-4.54h.1z"
                    />
                    <path
                      fill="#a4aaae"
                      d="M1140.12 683.64l1.36 4.54h-.09l-1.36-4.54h.09z"
                    />
                    <path
                      fill="#a5abaf"
                      d="M1140.22 683.64l1.28 4.28v.26h-.02l-1.36-4.54h.1z"
                    />
                    <path
                      fill="#a6acb0"
                      d="M1140.32 683.64l1.18 3.95v.33l-1.28-4.28h.1z"
                    />
                    <path
                      fill="#a7adb1"
                      d="M1140.42 683.64l1.08 3.62v.33l-1.18-3.95h.1z"
                    />
                    <path
                      fill="#a8aeb2"
                      d="M1140.52 683.64l.98 3.29v.33l-1.08-3.62h.1z"
                    />
                    <path
                      fill="#a9afb3"
                      d="M1140.62 683.64l.88 2.96v.33l-.98-3.29h.1z"
                    />
                    <path
                      fill="#aab0b4"
                      d="M1140.71 683.64l.79 2.63v.33l-.88-2.96h.09z"
                    />
                    <path
                      fill="#abb1b5"
                      d="M1140.81 683.64l.69 2.31v.32l-.79-2.63h.1z"
                    />
                    <path
                      fill="#acb2b6"
                      d="M1140.91 683.64l.59 1.98v.33l-.69-2.31h.1z"
                    />
                    <path
                      fill="#adb3b7"
                      d="M1141.01 683.64l.49 1.65v.33l-.59-1.98h.1z"
                    />
                    <path
                      fill="#adb4b8"
                      d="M1141.11 683.64l.39 1.32v.33l-.49-1.65h.1z"
                    />
                    <path
                      fill="#aeb5b9"
                      d="M1141.2 683.64l.3.99v.33l-.39-1.32h.09z"
                    />
                    <path
                      fill="#afb6ba"
                      d="M1141.3 683.64l.2.66v.33l-.3-.99h.1z"
                    />
                    <path
                      fill="#b0b7bb"
                      d="M1141.4 683.64l.1.33v.33l-.2-.66h.1z"
                    />
                    <path fill="#b1b8bc" d="M1141.5 683.64v.33l-.1-.33h.1z" />
                    <path fill="#b2b9bd" d="M1141.5 683.65v-.01.01z" />
                  </g>
                  <g clipPath="url(#prefix__clip-path-5)">
                    <path
                      fill="#a7adb1"
                      d="M17.02 616.69l16.03 71.49H17.02v-71.49z"
                    />
                    <path
                      fill="#a8aeb2"
                      d="M17.02 471.23l48.64 216.95H33.05l-16.03-71.49V471.23z"
                    />
                    <path
                      fill="#a9afb3"
                      d="M17.02 325.76l81.24 362.42h-32.6L17.02 471.23V325.76z"
                    />
                    <path
                      fill="#aab0b4"
                      d="M17.02 180.3l113.85 507.88H98.26L17.02 325.76V180.3z"
                    />
                    <path
                      fill="#abb1b5"
                      d="M17.29 36.05l146.19 652.13h-32.61L17.02 180.3V36.05h.27z"
                    />
                    <path
                      fill="#acb2b6"
                      d="M49.9 36.05l146.19 652.13h-32.61L17.29 36.05H49.9z"
                    />
                    <path
                      fill="#adb3b7"
                      d="M82.51 36.05L228.7 688.18h-32.61L49.9 36.05h32.61z"
                    />
                    <path
                      fill="#adb4b8"
                      d="M115.12 36.05L261.3 688.18h-32.6L82.51 36.05h32.61z"
                    />
                    <path
                      fill="#aeb5b9"
                      d="M147.73 36.05l146.18 652.13H261.3L115.12 36.05h32.61z"
                    />
                    <path
                      fill="#afb6ba"
                      d="M180.33 36.05l146.19 652.13h-32.61L147.73 36.05h32.6z"
                    />
                    <path
                      fill="#b0b7bb"
                      d="M212.94 36.05l146.19 652.13h-32.61L180.33 36.05h32.61z"
                    />
                    <path
                      fill="#b1b8bc"
                      d="M245.55 36.05l146.19 652.13h-32.61L212.94 36.05h32.61z"
                    />
                    <path
                      fill="#b2b9bd"
                      d="M278.16 36.05l146.19 652.13h-32.61L245.55 36.05h32.61z"
                    />
                    <path
                      fill="#b3babe"
                      d="M310.77 36.05l146.18 652.13h-32.6L278.16 36.05h32.61z"
                    />
                    <path
                      fill="#b4bbbf"
                      d="M343.38 36.05l146.18 652.13h-32.61L310.77 36.05h32.61z"
                    />
                    <path
                      fill="#b5bcc0"
                      d="M375.98 36.05l146.19 652.13h-32.61L343.38 36.05h32.6z"
                    />
                    <path
                      fill="#b6bdc1"
                      d="M408.59 36.05l146.19 652.13h-32.61L375.98 36.05h32.61z"
                    />
                    <path
                      fill="#b7bec2"
                      d="M441.2 36.05l146.19 652.13h-32.61L408.59 36.05h32.61z"
                    />
                    <path
                      fill="#b8bfc3"
                      d="M473.81 36.05l146.18 652.13h-32.6L441.2 36.05h32.61z"
                    />
                    <path
                      fill="#b9c0c4"
                      d="M506.42 36.05L652.6 688.18h-32.61L473.81 36.05h32.61z"
                    />
                    <path
                      fill="#bac1c5"
                      d="M539.02 36.05l146.19 652.13H652.6L506.42 36.05h32.6z"
                    />
                    <path
                      fill="#bac1c7"
                      d="M571.63 36.05l146.19 652.13h-32.61L539.02 36.05h32.61z"
                    />
                    <path
                      fill="#bbc2c8"
                      d="M604.24 36.05l146.19 652.13h-32.61L571.63 36.05h32.61z"
                    />
                    <path
                      fill="#bcc3c9"
                      d="M636.85 36.05l146.18 652.13h-32.6L604.24 36.05h32.61z"
                    />
                    <path
                      fill="#bdc4ca"
                      d="M669.46 36.05l146.18 652.13h-32.61L636.85 36.05h32.61z"
                    />
                    <path
                      fill="#bec5cb"
                      d="M702.06 36.05l146.19 652.13h-32.61L669.46 36.05h32.6z"
                    />
                    <path
                      fill="#bfc6cc"
                      d="M734.67 36.05l146.19 652.13h-32.61L702.06 36.05h32.61z"
                    />
                    <path
                      fill="#c0c7cd"
                      d="M767.28 36.05l146.19 652.13h-32.61L734.67 36.05h32.61z"
                    />
                    <path
                      fill="#c1c8ce"
                      d="M799.89 36.05l146.19 652.13h-32.61L767.28 36.05h32.61z"
                    />
                    <path
                      fill="#c2c9cf"
                      d="M832.5 36.05l146.18 652.13h-32.6L799.89 36.05h32.61z"
                    />
                    <path
                      fill="#c3cad0"
                      d="M865.1 36.05l146.19 652.13h-32.61L832.5 36.05h32.6z"
                    />
                    <path
                      fill="#c4cbd1"
                      d="M897.71 36.05l146.19 652.13h-32.61L865.1 36.05h32.61z"
                    />
                    <path
                      fill="#c5ccd2"
                      d="M930.32 36.05l146.19 652.13h-32.61L897.71 36.05h32.61z"
                    />
                    <path
                      fill="#c6cdd3"
                      d="M962.93 36.05l146.19 652.13h-32.61L930.32 36.05h32.61z"
                    />
                    <path
                      fill="#c7ced4"
                      d="M995.54 36.05l142.31 634.84v17.29h-28.73L962.93 36.05h32.61z"
                    />
                    <path
                      fill="#c7cfd5"
                      d="M1028.14 36.05l109.71 489.37v145.47L995.54 36.05h32.6z"
                    />
                    <path
                      fill="#c8d0d6"
                      d="M1060.75 36.05l77.1 343.91v145.46L1028.14 36.05h32.61z"
                    />
                    <path
                      fill="#c9d1d7"
                      d="M1093.36 36.05l44.49 198.45v145.46l-77.1-343.91h32.61z"
                    />
                    <path
                      fill="#cad2d8"
                      d="M1125.97 36.05l11.88 52.99V234.5l-44.49-198.45h32.61z"
                    />
                    <path
                      fill="#cbd3d9"
                      d="M1137.85 89.04l-11.88-52.99h11.88v52.99z"
                    />
                  </g>
                  <g clipPath="url(#prefix__clip-path-6)">
                    <path
                      fill="#8d9195"
                      d="M1141.5 520.49L214.25 33.95h927.25v486.54z"
                    />
                    <path
                      fill="#8d9195"
                      d="M1141.5 522.06L211.26 33.95h2.99l927.25 486.54v1.57z"
                    />
                    <path
                      fill="#8e9296"
                      d="M1141.5 523.62L208.28 33.95h2.98l930.24 488.11v1.56z"
                    />
                    <path
                      fill="#8f9397"
                      d="M1141.5 525.19L205.29 33.95h2.99l933.22 489.67v1.57z"
                    />
                    <path
                      fill="#909498"
                      d="M1141.5 526.75L202.31 33.95h2.98l936.21 491.24v1.56z"
                    />
                    <path
                      fill="#919599"
                      d="M1141.5 528.32L199.33 33.95h2.98l939.19 492.8v1.57z"
                    />
                    <path
                      fill="#92969a"
                      d="M1141.5 529.88L196.34 33.95h2.99l942.17 494.37v1.56z"
                    />
                    <path
                      fill="#93979b"
                      d="M1141.5 531.45L193.36 33.95h2.98l945.16 495.93v1.57z"
                    />
                    <path
                      fill="#93989c"
                      d="M1141.5 533.01L190.38 33.95h2.98l948.14 497.5v1.56z"
                    />
                    <path
                      fill="#94999d"
                      d="M1141.5 534.58L187.4 33.95h2.98l951.12 499.06v1.57z"
                    />
                    <path
                      fill="#959a9e"
                      d="M1141.5 536.15L184.41 33.95h2.99l954.1 500.63v1.57z"
                    />
                    <path
                      fill="#969b9f"
                      d="M1141.5 537.71L181.43 33.95h2.98l957.09 502.2v1.56z"
                    />
                    <path
                      fill="#979ca0"
                      d="M1141.5 539.28L178.44 33.95h2.99l960.07 503.76v1.57z"
                    />
                    <path
                      fill="#989da1"
                      d="M1141.5 540.84L175.46 33.95h2.98l963.06 505.33v1.56z"
                    />
                    <path
                      fill="#999ea2"
                      d="M1141.5 542.41L172.48 33.95h2.98l966.04 506.89v1.57z"
                    />
                    <path
                      fill="#9a9fa3"
                      d="M1141.5 543.97l-972-510.02h2.98l969.02 508.46v1.56z"
                    />
                    <path
                      fill="#9ba0a4"
                      d="M1141.5 545.54L166.51 33.95h2.99l972 510.02v1.57z"
                    />
                    <path
                      fill="#9ca1a5"
                      d="M1141.5 547.1L163.53 33.95h2.98l974.99 511.59v1.56z"
                    />
                    <path
                      fill="#9da2a6"
                      d="M1141.5 548.67L160.54 33.95h2.99L1141.5 547.1v1.57z"
                    />
                    <path
                      fill="#9ea3a7"
                      d="M1141.5 550.24L157.56 33.95h2.98l980.96 514.72v1.57z"
                    />
                    <path
                      fill="#9fa4a8"
                      d="M1141.5 551.8L154.58 33.95h2.98l983.94 516.29v1.56z"
                    />
                    <path
                      fill="#a0a5a9"
                      d="M1141.5 553.37L151.59 33.95h2.99L1141.5 551.8v1.57z"
                    />
                    <path
                      fill="#a0a6aa"
                      d="M1141.5 554.93L148.61 33.95h2.98l989.91 519.42v1.56z"
                    />
                    <path
                      fill="#a1a7ab"
                      d="M1141.5 556.5L145.63 33.95h2.98l992.89 520.98v1.57z"
                    />
                    <path
                      fill="#a2a8ac"
                      d="M1141.5 558.06L142.64 33.95h2.99L1141.5 556.5v1.56z"
                    />
                    <path
                      fill="#a3a9ad"
                      d="M1141.5 559.63L139.66 33.95h2.98l998.86 524.11v1.57z"
                    />
                    <path
                      fill="#a4aaae"
                      d="M1141.5 561.19L136.68 33.95h2.98L1141.5 559.63v1.56z"
                    />
                    <path
                      fill="#a5abaf"
                      d="M1141.5 562.76L133.69 33.95h2.99L1141.5 561.19v1.57z"
                    />
                    <path
                      fill="#a6acb0"
                      d="M1141.5 564.32L130.71 33.95h2.98L1141.5 562.76v1.56z"
                    />
                    <path
                      fill="#a7adb1"
                      d="M1141.5 565.89L127.73 33.95h2.98L1141.5 564.32v1.57z"
                    />
                    <path
                      fill="#a8aeb2"
                      d="M1141.5 567.45L124.74 33.95h2.99L1141.5 565.89v1.56z"
                    />
                    <path
                      fill="#a9afb3"
                      d="M1141.5 569.02L121.76 33.95h2.98l1016.76 533.5v1.57z"
                    />
                    <path
                      fill="#aab0b4"
                      d="M1141.5 570.59L118.78 33.95h2.98L1141.5 569.02v1.57z"
                    />
                    <path
                      fill="#abb1b5"
                      d="M1141.5 572.15L115.79 33.95h2.99L1141.5 570.59v1.56z"
                    />
                    <path
                      fill="#acb2b6"
                      d="M1141.5 573.72L112.81 33.95h2.98l1025.71 538.2v1.57z"
                    />
                    <path
                      fill="#adb3b7"
                      d="M1141.5 575.28L109.83 33.95h2.98L1141.5 573.72v1.56z"
                    />
                    <path
                      fill="#adb4b8"
                      d="M1141.5 576.85L106.84 33.95h2.99L1141.5 575.28v1.57z"
                    />
                    <path
                      fill="#aeb5b9"
                      d="M1141.5 578.41L103.86 33.95h2.98l1034.66 542.9v1.56z"
                    />
                    <path
                      fill="#afb6ba"
                      d="M1141.5 579.98L100.88 33.95h2.98L1141.5 578.41v1.57z"
                    />
                    <path
                      fill="#b0b7bb"
                      d="M1141.5 581.54L97.89 33.95h2.99L1141.5 579.98v1.56z"
                    />
                    <path
                      fill="#b1b8bc"
                      d="M1141.5 583.11L94.91 33.95h2.98L1141.5 581.54v1.57z"
                    />
                    <path
                      fill="#b2b9bd"
                      d="M1141.5 584.67L91.93 33.95h2.98L1141.5 583.11v1.56z"
                    />
                    <path
                      fill="#b3babe"
                      d="M1141.5 586.24L88.94 33.95h2.99L1141.5 584.67v1.57z"
                    />
                    <path
                      fill="#b4bbbf"
                      d="M1141.5 587.8L85.96 33.95h2.98L1141.5 586.24v1.56z"
                    />
                    <path
                      fill="#b5bcc0"
                      d="M1141.5 589.37L82.98 33.95h2.98L1141.5 587.8v1.57z"
                    />
                    <path
                      fill="#b6bdc1"
                      d="M1141.5 590.94L79.99 33.95h2.99L1141.5 589.37v1.57z"
                    />
                    <path
                      fill="#b7bec2"
                      d="M1141.5 592.5L77.01 33.95h2.98L1141.5 590.94v1.56z"
                    />
                    <path
                      fill="#b8bfc3"
                      d="M1141.5 594.07L74.03 33.95h2.98L1141.5 592.5v1.57z"
                    />
                    <path
                      fill="#b9c0c4"
                      d="M1141.5 595.63L71.04 33.95h2.99L1141.5 594.07v1.56z"
                    />
                    <path
                      fill="#bac1c5"
                      d="M1141.5 597.2L68.06 33.95h2.98L1141.5 595.63v1.57z"
                    />
                    <path
                      fill="#bac1c7"
                      d="M1141.5 598.76L65.08 33.95h2.98L1141.5 597.2v1.56z"
                    />
                    <path
                      fill="#bbc2c8"
                      d="M1141.5 600.33L62.09 33.95h2.99L1141.5 598.76v1.57z"
                    />
                    <path
                      fill="#bcc3c9"
                      d="M1141.5 601.89L59.11 33.95h2.98L1141.5 600.33v1.56z"
                    />
                    <path
                      fill="#bdc4ca"
                      d="M1141.5 603.46L56.13 33.95h2.98L1141.5 601.89v1.57z"
                    />
                    <path
                      fill="#bec5cb"
                      d="M1141.5 605.02L53.14 33.95h2.99L1141.5 603.46v1.56z"
                    />
                    <path
                      fill="#bfc6cc"
                      d="M1141.5 606.59L50.16 33.95h2.98L1141.5 605.02v1.57z"
                    />
                    <path
                      fill="#c0c7cd"
                      d="M1141.5 608.15L47.18 33.95h2.98L1141.5 606.59v1.56z"
                    />
                    <path
                      fill="#c1c8ce"
                      d="M1141.5 609.72L44.19 33.95h2.99l1094.32 574.2v1.57z"
                    />
                    <path
                      fill="#c2c9cf"
                      d="M1141.5 611.29L41.21 33.95h2.98L1141.5 609.72v1.57z"
                    />
                    <path
                      fill="#c3cad0"
                      d="M1141.5 612.85L38.23 33.95h2.98L1141.5 611.29v1.56z"
                    />
                    <path
                      fill="#c4cbd1"
                      d="M1141.5 614.42L35.24 33.95h2.99l1103.27 578.9v1.57z"
                    />
                    <path
                      fill="#c5ccd2"
                      d="M1141.5 615.98L32.26 33.95h2.98L1141.5 614.42v1.56z"
                    />
                    <path
                      fill="#c6cdd3"
                      d="M1141.5 617.55L29.28 33.95h2.98L1141.5 615.98v1.57z"
                    />
                    <path
                      fill="#c7ced4"
                      d="M1141.5 619.11L26.29 33.95h2.99l1112.22 583.6v1.56z"
                    />
                    <path
                      fill="#c7cfd5"
                      d="M1141.5 620.68L23.31 33.95h2.98L1141.5 619.11v1.57z"
                    />
                    <path
                      fill="#c8d0d6"
                      d="M1141.5 622.24L20.33 33.95h2.98L1141.5 620.68v1.56z"
                    />
                    <path
                      fill="#c9d1d7"
                      d="M1141.5 623.81L17.34 33.95h2.99L1141.5 622.24v1.57z"
                    />
                    <path
                      fill="#cad2d8"
                      d="M1141.5 625.38L17.02 35.34v-1.39h.32L1141.5 623.81v1.57z"
                    />
                    <path
                      fill="#cbd3d9"
                      d="M1141.5 626.94L17.02 36.91v-1.57L1141.5 625.38v1.56z"
                    />
                    <path
                      fill="#ccd4da"
                      d="M1141.5 628.51L17.02 38.47v-1.56L1141.5 626.94v1.57z"
                    />
                    <path
                      fill="#cdd5db"
                      d="M1141.5 630.07L17.02 40.04v-1.57L1141.5 628.51v1.56z"
                    />
                    <path
                      fill="#ced6dc"
                      d="M1141.5 631.64L17.02 41.6v-1.56L1141.5 630.07v1.57z"
                    />
                    <path
                      fill="#cfd7dd"
                      d="M1141.5 633.2L17.02 43.17V41.6L1141.5 631.64v1.56z"
                    />
                    <path
                      fill="#d0d8de"
                      d="M1141.5 634.77L17.02 44.73v-1.56L1141.5 633.2v1.57z"
                    />
                    <path
                      fill="#d1d9df"
                      d="M1141.5 636.33L17.02 46.3v-1.57L1141.5 634.77v1.56z"
                    />
                    <path
                      fill="#d2dae0"
                      d="M1141.5 637.9L17.02 47.87V46.3L1141.5 636.33v1.57z"
                    />
                    <path
                      fill="#d3dbe1"
                      d="M1141.5 639.46L17.02 49.43v-1.56L1141.5 637.9v1.56z"
                    />
                    <path
                      fill="#d4dce2"
                      d="M1141.5 641.03L17.02 51v-1.57L1141.5 639.46v1.57z"
                    />
                    <path
                      fill="#d4dde3"
                      d="M1141.5 642.6L17.02 52.56V51L1141.5 641.03v1.57z"
                    />
                    <path
                      fill="#d5dee4"
                      d="M1141.5 644.16L17.02 54.13v-1.57L1141.5 642.6v1.56z"
                    />
                    <path
                      fill="#d6dfe5"
                      d="M1141.5 645.73L17.02 55.69v-1.56L1141.5 644.16v1.57z"
                    />
                    <path
                      fill="#d7e0e6"
                      d="M1141.5 647.29L17.02 57.26v-1.57L1141.5 645.73v1.56z"
                    />
                    <path
                      fill="#d8e1e7"
                      d="M1141.5 648.86L17.02 58.82v-1.56L1141.5 647.29v1.57z"
                    />
                    <path
                      fill="#d9e2e8"
                      d="M1141.5 650.42L17.02 60.39v-1.57L1141.5 648.86v1.56z"
                    />
                    <path
                      fill="#dae3e9"
                      d="M1141.5 651.99L17.02 61.95v-1.56L1141.5 650.42v1.57z"
                    />
                    <path
                      fill="#dbe4ea"
                      d="M1141.5 653.55L17.02 63.52v-1.57L1141.5 651.99v1.56z"
                    />
                    <path
                      fill="#dce5eb"
                      d="M1141.5 655.12L17.02 65.08v-1.56L1141.5 653.55v1.57z"
                    />
                    <path
                      fill="#dde6ec"
                      d="M1141.5 656.68L17.02 66.65v-1.57L1141.5 655.12v1.56z"
                    />
                    <path
                      fill="#dee7ed"
                      d="M1141.5 658.25L17.02 68.22v-1.57L1141.5 656.68v1.57z"
                    />
                    <path
                      fill="#dfe8ee"
                      d="M1141.5 659.82L17.02 69.78v-1.56L1141.5 658.25v1.57z"
                    />
                    <path
                      fill="#e0e9ef"
                      d="M1141.5 661.38L17.02 71.35v-1.57L1141.5 659.82v1.56z"
                    />
                    <path
                      fill="#e1eaf0"
                      d="M1141.5 662.95L17.02 72.91v-1.56L1141.5 661.38v1.57z"
                    />
                    <path
                      fill="#e1ebf1"
                      d="M1141.5 664.51L17.02 74.48v-1.57L1141.5 662.95v1.56z"
                    />
                    <path
                      fill="#e2ecf2"
                      d="M1141.5 666.08L17.02 76.04v-1.56L1141.5 664.51v1.57z"
                    />
                    <path
                      fill="#e3edf3"
                      d="M1141.5 667.64L17.02 77.61v-1.57L1141.5 666.08v1.56z"
                    />
                    <path
                      fill="#e4eef4"
                      d="M1141.5 669.21L17.02 79.17v-1.56L1141.5 667.64v1.57z"
                    />
                    <path
                      fill="#e5eff5"
                      d="M1141.5 670.77L17.02 80.74v-1.57L1141.5 669.21v1.56z"
                    />
                    <path
                      fill="#e6f0f6"
                      d="M1141.5 672.34L17.02 82.31v-1.57L1141.5 670.77v1.57z"
                    />
                    <path
                      fill="#e7f1f7"
                      d="M1141.5 673.9L17.02 83.87v-1.56L1141.5 672.34v1.56z"
                    />
                    <path
                      fill="#e7f1f7"
                      d="M17.02 83.87L1141.5 673.9v11.84H17.02V83.87z"
                    />
                  </g>
                </g>
              </g>
              <path
                fill="url(#prefix__New_Gradient_Swatch_copy_37)"
                d="M652.25 119.58v257.19l8.43-4.89V114.73l-8.43 4.85z"
              />
              <path
                fill="url(#prefix__New_Gradient_Swatch_copy_37-2)"
                d="M643.37 115.07v-.27l8.92 14.53v247.45l-9.06-5.31V114.99l.14.08z"
              />
              <path
                fill="url(#prefix__New_Gradient_Swatch_copy_37-3)"
                d="M762.29 419.22v7.81l-109.17-62.17v-7.79l109.17 62.15z"
              />
              <path
                fill="url(#prefix__New_Gradient_Swatch_copy_38)"
                d="M653.12 357.07l109.17 62.15-.22-7.91-102.19-58.18-6.76 3.94z"
              />
              <path
                fill="url(#prefix__New_Gradient_Swatch_copy_37-4)"
                d="M762.29 373.06v7.81l-109.17-62.18v-7.79l109.17 62.16z"
              />
              <path
                fill="url(#prefix__New_Gradient_Swatch_copy_38-2)"
                d="M653.12 310.9l109.17 62.16-.22-7.92-102.19-58.18-6.76 3.94z"
              />
              <path
                fill="url(#prefix__New_Gradient_Swatch_copy_37-5)"
                d="M456.51 252.31v9.4l-8.2-4.72v-9.41l8.2 4.73z"
              />
              <path
                d="M456.49 254v2.54a3 3 0 004.46 2.59l381.62-218a3 3 0 001.5-2.59v-2.45a3 3 0 00-4.46-2.59L458 251.45a3 3 0 00-1.51 2.55z"
                fill="#333"
              />
              <path
                fill="url(#prefix__New_Gradient_Swatch_copy_38-3)"
                d="M844.07 30.96L456.49 252.31l-8.18-4.73L835.93 26.21l8.14 4.75z"
              />
              <path
                fill="url(#prefix__New_Gradient_Swatch_copy_37-6)"
                d="M936.03 93.48v9.41l-99.72-58.06v-9.4l99.72 58.05z"
              />
              <path
                style={{
                  mixBlendMode: "screen",
                }}
                fill="url(#prefix__linear-gradient-346)"
                d="M792.73 74.74l89.24 51.8 24.48-13.98v43.13l-24.48 13.92-89.24-51.89V74.74z"
              />
              <path
                fill="#26262e"
                d="M881.98 114.56v12.25l-89.24-51.89V62.76l89.24 51.8z"
              />
              <path
                fill="#3f3f3f"
                d="M881.97 114.56v12.25l24.48-13.93v-12.31l-24.48 13.99z"
              />
              <path
                fill="#9aa0a6"
                d="M906.45 100.57l-24.48 13.99-89.23-51.8 24.49-13.97 89.22 51.78z"
              />
              <path
                fill="#26262e"
                d="M873.28 102.35v3.69l-65.29-37.97v-3.62l65.29 37.9z"
              />
              <path
                fill="#3f3f3f"
                d="M873.28 102.35v3.69l17.91-10.19v-3.73l-17.91 10.23z"
              />
              <path
                fill="#8c9399"
                d="M891.19 92.12l-17.91 10.23-65.29-37.9 17.92-10.22 65.28 37.89z"
              />
              <path
                fill="#272727"
                d="M641.58 255.7v12.25l-89.24-51.9v-12.16l89.24 51.81z"
              />
              <path
                fill="url(#prefix__New_Gradient_Swatch_copy_38-4)"
                d="M641.57 255.7v12.25l24.48-13.93v-12.31l-24.48 13.99z"
              />
              <path
                fill="#9f9f9f"
                d="M666.05 241.71l-24.48 13.99-89.23-51.81 24.5-13.96 89.21 51.78z"
              />
              <path
                fill="#272727"
                d="M632.89 243.49v3.68l-65.29-37.96v-3.62l65.29 37.9z"
              />
              <path
                fill="url(#prefix__New_Gradient_Swatch_copy_38-5)"
                d="M632.88 243.49v3.68l17.91-10.19v-3.73l-17.91 10.24z"
              />
              <path
                fill="#929292"
                d="M650.79 233.25l-17.91 10.24-65.28-37.9 17.92-10.22 65.27 37.88z"
              />
              <path
                d="M771.14 189.89v250.29a3 3 0 004.47 2.58l2.48-1.44a3 3 0 001.48-2.57V188.47a3 3 0 00-4.47-2.58l-2.47 1.42a3 3 0 00-1.49 2.58z"
                fill="#333"
              />
              <path
                fill="url(#prefix__New_Gradient_Swatch_copy_38-6)"
                d="M647.49 117.16l-4.26-2.17.24-.14-.1-.05 8.52-4.9 127.68 73.42-.09.05.09.05-8.43 4.85-1.52-.87-122.13-70.24z"
              />
              <path
                fill="url(#prefix__New_Gradient_Swatch_copy_37-7)"
                d="M643.37 115.07v-.27l127.81 73.37v257.19l-9.06-5.3v-247.6l-109.83-63.13-9.06-14.34.14.08z"
              />
              <path
                fill="url(#prefix__New_Gradient_Swatch_copy_24)"
                d="M943.98 88.99l-7.97 4.49-108-62.89 8.02-4.51 107.95 62.91z"
              />
              <path
                fill="url(#prefix__New_Gradient_Swatch_copy_37-8)"
                d="M771.38 78.05l163.47 15.83 8.42-4.88L779.8 73.2l-8.42 4.85z"
              />
              <path
                fill="url(#prefix__New_Gradient_Swatch_copy_38-7)"
                d="M779.8 73.2l163.05 15.62-7.98-4.69-163.02-15.65 7.95 4.72z"
              />
              <path
                d="M660.27 11.85l174.64 24.07a3 3 0 001.9-.37 3 3 0 00-1.06-5.55L661.09 5.94a3 3 0 00-1.9.37 3 3 0 001.08 5.54z"
                fill="#333"
              />
              <path
                fill="url(#prefix__New_Gradient_Swatch_copy_24-2)"
                d="M660.08 5.8l183.84 25.21-7.98-4.7L652.13 1.09l7.95 4.71z"
              />
              <path
                style={{
                  mixBlendMode: "color-dodge",
                }}
                fill="url(#prefix__Radial_Gradient_2)"
                d="M498.55 198.91l127.06 71.78 8.53-3.61-7.39 5.57-.93 248.51-.93-248.61-126.34-73.64z"
              />
              <g>
                <path
                  fill="url(#prefix__New_Gradient_Swatch_copy_37-9)"
                  d="M652.25 9.69v110.4l8.43-4.9V4.84l-8.43 4.85z"
                />
                <path
                  fill="url(#prefix__New_Gradient_Swatch_copy_37-10)"
                  d="M643.37 5.17V4.9l8.92 14.53v100.66l-9.06-5.3V5.1l.14.07z"
                />
                <path
                  fill="url(#prefix__New_Gradient_Swatch_copy_37-11)"
                  d="M771.14 78.27v110.41l8.43-4.9V73.42l-8.43 4.85z"
                />
                <path
                  fill="url(#prefix__New_Gradient_Swatch_copy_38-8)"
                  d="M647.49 7.27l-4.26-2.17.24-.14-.1-.06 8.52-4.9 127.68 73.42-.09.05.09.06-8.43 4.85-1.52-.88L647.49 7.27z"
                />
                <path
                  fill="url(#prefix__New_Gradient_Swatch_copy_37-12)"
                  d="M643.37 5.17V4.9l127.81 73.37v110.41l-9.06-5.31V82.56L652.29 19.43 643.23 5.1l.14.07z"
                />
                <path
                  style={{
                    mixBlendMode: "color-dodge",
                  }}
                  fill="url(#prefix__Radial_Gradient_2-2)"
                  d="M643.97 5.26l127.06 71.77 8.54-3.61-7.4 5.58-.93 101.72-.93-101.83L643.97 5.26z"
                />
              </g>
              <g>
                <path
                  fill="url(#prefix__New_Gradient_Swatch_copy_38-9)"
                  d="M771.21 78.59L625.56 272.28l-8.01-4.7L763.21 73.89l8 4.7z"
                />
                <path
                  fill="url(#prefix__New_Gradient_Swatch_copy_37-13)"
                  d="M771.19 78.59L625.54 272.28l8.42-4.88L771.03 85.43l.16-6.84z"
                />
              </g>
              <g>
                <path
                  fill="url(#prefix__New_Gradient_Swatch_copy_38-10)"
                  d="M652.06 9.56L506.41 203.25l-8.01-4.7L644.05 4.86l8.01 4.7z"
                />
                <path
                  fill="url(#prefix__New_Gradient_Swatch_copy_37-14)"
                  d="M652.04 9.56L506.39 203.25l8.42-4.88L651.87 16.4l.17-6.84z"
                />
              </g>
              <motion.g id="prefix__train"
              
              variants={trainVariant}
              animate={trainControls}
              initial="start"
              
              >
                <path
                  opacity={0.2}
                  d="M169.68 137.53l24.46-13.95 89.09 51.72-12.09 6.91 4.02 2.33-1.39.79-4.01-2.33-10.98 6.27-89.1-51.74z"
                />
                <path
                  d="M179 135.57a1.91 1.91 0 01-.77 1.74l-3.13 1.8c-.51.29-.2-.34-1-.78a6 6 0 01-2.73-4.72c0-.85-.8-.86-.31-1.15l3.25-1.82a1.94 1.94 0 011.91.21 6 6 0 012.78 4.72z"
                  fill="url(#prefix__linear-gradient-347)"
                />
                <path
                  d="M175.76 137.4c0 1.74-1.22 2.44-2.74 1.56a6 6 0 01-2.73-4.72c0-1.73 1.22-2.43 2.73-1.56a6 6 0 012.74 4.72z"
                  fill="url(#prefix__New_Gradient_Swatch_copy_24-3)"
                />
                <path
                  d="M174.33 136.68c0 .91-.64 1.27-1.43.82a3.17 3.17 0 01-1.42-2.46c0-.91.64-1.27 1.42-.82a3.15 3.15 0 011.43 2.46z"
                  fill="#7d7d7d"
                />
                <path
                  d="M173.15 132.62a2 2 0 00-1.87-.23 2.16 2.16 0 011.64.32 6 6 0 012.74 4.72 1.87 1.87 0 01-.87 1.79c.67-.19 1.1-.85 1.1-1.88a6 6 0 00-2.74-4.72z"
                  style={{
                    mixBlendMode: "screen",
                  }}
                  fill="url(#prefix__Radial_Gradient_1)"
                />
                <path
                  d="M186.37 139.86a1.93 1.93 0 01-.76 1.74l-3.14 1.8c-.51.29-.2-.34-.95-.77a6 6 0 01-2.73-4.72c0-.86-.8-.87-.31-1.15l3.23-1.82a2 2 0 011.93.2 6 6 0 012.73 4.72z"
                  fill="url(#prefix__linear-gradient-348)"
                />
                <path
                  d="M183.15 141.7c0 1.73-1.22 2.43-2.74 1.56a6 6 0 01-2.73-4.72c0-1.74 1.22-2.44 2.73-1.56a6 6 0 012.74 4.72z"
                  fill="url(#prefix__New_Gradient_Swatch_copy_24-4)"
                />
                <path
                  d="M181.72 141c0 .9-.64 1.27-1.42.81a3.14 3.14 0 01-1.43-2.46c0-.9.64-1.27 1.43-.81a3.14 3.14 0 011.42 2.46z"
                  fill="#7d7d7d"
                />
                <path
                  d="M180.55 136.91a2 2 0 00-1.88-.23 2.16 2.16 0 011.64.32 6 6 0 012.74 4.72 1.85 1.85 0 01-.87 1.79c.67-.18 1.1-.85 1.1-1.88a6 6 0 00-2.73-4.72z"
                  style={{
                    mixBlendMode: "screen",
                  }}
                  fill="url(#prefix__Radial_Gradient_1-2)"
                />
                <path
                  fill="url(#prefix__New_Gradient_Swatch_copy_24-5)"
                  d="M180.31 139.2v2.07l-7.56-4.29v-2.13l7.56 4.35z"
                />
                <path
                  d="M248.42 176.13a1.94 1.94 0 01-.77 1.74l-3.15 1.81c-.5.28-.18-.35-.93-.78a6.06 6.06 0 01-2.74-4.72c0-.86-.79-.87-.31-1.15l3.25-1.83a1.94 1.94 0 011.91.21 6 6 0 012.74 4.72z"
                  fill="url(#prefix__linear-gradient-349)"
                />
                <path
                  d="M245.2 178c0 1.73-1.23 2.43-2.74 1.56a6.06 6.06 0 01-2.74-4.72c0-1.74 1.23-2.44 2.74-1.56a6 6 0 012.74 4.72z"
                  fill="url(#prefix__New_Gradient_Swatch_copy_24-6)"
                />
                <path
                  d="M243.77 177.25c0 .9-.64 1.26-1.43.81a3.14 3.14 0 01-1.43-2.46c0-.9.64-1.27 1.43-.81a3.12 3.12 0 011.43 2.46z"
                  fill="#7d7d7d"
                />
                <path
                  d="M242.59 173.18a2 2 0 00-1.87-.23 2.15 2.15 0 011.63.32 6 6 0 012.74 4.72 1.85 1.85 0 01-.86 1.79c.66-.18 1.1-.85 1.1-1.88a6 6 0 00-2.74-4.72z"
                  style={{
                    mixBlendMode: "screen",
                  }}
                  fill="url(#prefix__Radial_Gradient_1-3)"
                />
                <path
                  d="M255.81 180.42a1.91 1.91 0 01-.77 1.74l-3.15 1.84c-.5.28-.18-.35-.93-.78a6 6 0 01-2.74-4.72c0-.86-.79-.87-.31-1.15l3.24-1.82a2 2 0 011.92.2 6.06 6.06 0 012.74 4.69z"
                  fill="url(#prefix__linear-gradient-350)"
                />
                <path
                  d="M252.59 182.26c0 1.73-1.23 2.43-2.74 1.56a6 6 0 01-2.74-4.72c0-1.74 1.23-2.43 2.74-1.56a6 6 0 012.74 4.72z"
                  fill="url(#prefix__New_Gradient_Swatch_copy_24-7)"
                />
                <path
                  d="M251.16 181.54c0 .9-.64 1.27-1.43.81a3.12 3.12 0 01-1.43-2.46c0-.9.64-1.26 1.43-.81a3.14 3.14 0 011.43 2.46z"
                  fill="#7d7d7d"
                />
                <path
                  d="M250 177.47a2 2 0 00-1.87-.23 2.15 2.15 0 011.63.32 6 6 0 012.74 4.73 1.87 1.87 0 01-.86 1.79 1.77 1.77 0 001.1-1.89 6.06 6.06 0 00-2.74-4.72z"
                  style={{
                    mixBlendMode: "screen",
                  }}
                  fill="url(#prefix__Radial_Gradient_1-4)"
                />
                <path
                  fill="url(#prefix__linear-gradient-351)"
                  d="M258.79 179.69v2.97l-18.73-10.89-5.73-.91-45.95-26.72-5.48-5.61-13.22-7.69v-2.89l89.11 51.74z"
                />
                <path
                  fill="url(#prefix__New_Gradient_Swatch_copy_24-8)"
                  d="M258.78 179.69v2.97l24.45-13.91v-3.03l-24.45 13.97z"
                />
                <path
                  fill="url(#prefix__New_Gradient_Swatch_copy_24-9)"
                  d="M249.75 179.77v2.06l-7.56-4.29v-2.12l7.56 4.35z"
                />
                <path
                  fill="#494949"
                  d="M283.23 165.72l-24.45 13.97-89.1-51.74 24.46-13.94 89.09 51.71z"
                />
                <path
                  fill="url(#prefix__New_Gradient_Swatch_copy_24-10)"
                  d="M275.18 176.88v1.7l-5.04-2.94v-1.69l5.04 2.93z"
                />
                <path
                  fill="url(#prefix__New_Gradient_Swatch_copy_24-11)"
                  d="M275.18 176.88v1.7l1.39-.79v-1.7l-1.39.79z"
                />
                <path
                  fill="url(#prefix__New_Gradient_Swatch_copy_24-12)"
                  d="M276.57 176.09l-1.39.79-5.04-2.93 1.38-.79 5.05 2.93z"
                />
                <path
                  fill="url(#prefix__New_Gradient_Swatch_copy_24-13)"
                  d="M275.62 177.09v2.39l-.92-.54v-2.38l.92.53z"
                />
                <path
                  fill="url(#prefix__New_Gradient_Swatch_copy_24-14)"
                  d="M275.62 177.09v2.39l1.94-1.11v-2.4l-1.94 1.12z"
                />
                <path
                  fill="url(#prefix__New_Gradient_Swatch_copy_24-15)"
                  d="M277.56 175.97l-1.94 1.12-.92-.53 1.94-1.11.92.52z"
                />
                <g>
                  <path
                    opacity={0.2}
                    d="M265.38 193.94l24.46-13.95 89.09 51.71-12.09 6.91 4.02 2.33-1.38.8-4.02-2.34-10.97 6.28-89.11-51.74z"
                  />
                  <path
                    d="M274.68 192a1.92 1.92 0 01-.76 1.73l-3.16 1.82c-.49.27-.18-.35-.93-.79a6 6 0 01-2.73-4.76c0-.86-.8-.86-.31-1.15L270 187a2 2 0 011.91.22 6 6 0 012.77 4.78z"
                    fill="url(#prefix__linear-gradient-352)"
                  />
                  <path
                    d="M271.46 193.81c0 1.73-1.22 2.43-2.74 1.56a6 6 0 01-2.73-4.72c0-1.73 1.22-2.43 2.73-1.56a6 6 0 012.74 4.72z"
                    fill="url(#prefix__New_Gradient_Swatch_copy_24-16)"
                  />
                  <path
                    d="M270 193.09c0 .91-.64 1.27-1.42.81a3.12 3.12 0 01-1.43-2.46c0-.9.64-1.26 1.43-.81a3.17 3.17 0 011.42 2.46z"
                    fill="#7d7d7d"
                  />
                  <path
                    d="M268.86 189a2 2 0 00-1.88-.23 2.18 2.18 0 011.64.33 6 6 0 012.74 4.72 1.87 1.87 0 01-.87 1.79c.67-.19 1.1-.85 1.1-1.89a6 6 0 00-2.73-4.72z"
                    style={{
                      mixBlendMode: "screen",
                    }}
                    fill="url(#prefix__Radial_Gradient_1-5)"
                  />
                  <path
                    d="M282.07 196.27a1.93 1.93 0 01-.76 1.74l-3.14 1.8c-.51.29-.19-.34-.95-.78a6 6 0 01-2.73-4.72c0-.85-.8-.86-.31-1.15l3.25-1.82a1.94 1.94 0 011.91.21 6 6 0 012.73 4.72z"
                    fill="url(#prefix__linear-gradient-353)"
                  />
                  <path
                    d="M278.85 198.1c0 1.74-1.22 2.44-2.73 1.56a6 6 0 01-2.74-4.72c0-1.73 1.22-2.43 2.74-1.56a6 6 0 012.73 4.72z"
                    fill="url(#prefix__New_Gradient_Swatch_copy_24-17)"
                  />
                  <path
                    d="M277.42 197.38c0 .91-.64 1.27-1.42.82a3.15 3.15 0 01-1.43-2.46c0-.91.64-1.27 1.43-.82a3.17 3.17 0 011.42 2.46z"
                    fill="#7d7d7d"
                  />
                  <path
                    d="M276.25 193.32a2 2 0 00-1.88-.23 2.12 2.12 0 011.64.32 6 6 0 012.74 4.72 1.87 1.87 0 01-.87 1.79c.67-.19 1.1-.85 1.1-1.88a6 6 0 00-2.73-4.72z"
                    style={{
                      mixBlendMode: "screen",
                    }}
                    fill="url(#prefix__Radial_Gradient_1-6)"
                  />
                  <path
                    fill="url(#prefix__New_Gradient_Swatch_copy_24-18)"
                    d="M276.01 195.61v2.06l-7.56-4.28v-2.13l7.56 4.35z"
                  />
                  <path
                    d="M344.12 232.54a1.91 1.91 0 01-.77 1.74l-3.14 1.8c-.51.28-.19-.34-.94-.78a6 6 0 01-2.74-4.72c0-.85-.79-.86-.31-1.15l3.25-1.82a1.94 1.94 0 011.91.21 6 6 0 012.74 4.72z"
                    fill="url(#prefix__linear-gradient-354)"
                  />
                  <path
                    d="M340.9 234.37c0 1.74-1.23 2.44-2.74 1.56a6 6 0 01-2.74-4.72c0-1.73 1.23-2.43 2.74-1.56a6 6 0 012.74 4.72z"
                    fill="url(#prefix__New_Gradient_Swatch_copy_24-19)"
                  />
                  <path
                    d="M339.47 233.65c0 .91-.64 1.27-1.43.82a3.15 3.15 0 01-1.43-2.46c0-.91.64-1.27 1.43-.82a3.15 3.15 0 011.43 2.46z"
                    fill="#7d7d7d"
                  />
                  <path
                    d="M338.29 229.59a2 2 0 00-1.87-.23 2.1 2.1 0 011.63.32 6 6 0 012.74 4.72 1.87 1.87 0 01-.86 1.79c.67-.19 1.1-.85 1.1-1.88a6 6 0 00-2.74-4.72z"
                    style={{
                      mixBlendMode: "screen",
                    }}
                    fill="url(#prefix__Radial_Gradient_1-7)"
                  />
                  <path
                    d="M351.51 236.83a1.91 1.91 0 01-.77 1.74l-3.15 1.81c-.5.28-.18-.35-.93-.78a6.06 6.06 0 01-2.74-4.72c0-.86-.79-.87-.31-1.15l3.24-1.82a1.93 1.93 0 011.92.2 6 6 0 012.74 4.72z"
                    fill="url(#prefix__linear-gradient-355)"
                  />
                  <path
                    d="M348.29 238.67c0 1.73-1.23 2.43-2.74 1.56a6.06 6.06 0 01-2.74-4.72c0-1.74 1.23-2.44 2.74-1.57a6.06 6.06 0 012.74 4.73z"
                    fill="url(#prefix__New_Gradient_Swatch_copy_24-20)"
                  />
                  <path
                    d="M346.86 238c0 .9-.64 1.26-1.43.81a3.14 3.14 0 01-1.43-2.51c0-.9.63-1.27 1.42-.81a3.12 3.12 0 011.44 2.51z"
                    fill="#7d7d7d"
                  />
                  <path
                    d="M345.68 233.88a2 2 0 00-1.87-.23 2.14 2.14 0 011.63.32 6 6 0 012.74 4.72 1.86 1.86 0 01-.86 1.79c.67-.18 1.1-.85 1.1-1.88a6 6 0 00-2.74-4.72z"
                    style={{
                      mixBlendMode: "screen",
                    }}
                    fill="url(#prefix__Radial_Gradient_1-8)"
                  />
                  <path
                    fill="url(#prefix__linear-gradient-356)"
                    d="M354.49 236.1v2.97l-18.73-10.89-5.73-.91-45.95-26.73-5.48-5.6-13.22-7.69v-2.89l89.11 51.74z"
                  />
                  <path
                    fill="url(#prefix__New_Gradient_Swatch_copy_24-21)"
                    d="M354.49 236.1v2.97l24.44-13.91v-3.03l-24.44 13.97z"
                  />
                  <path
                    fill="url(#prefix__New_Gradient_Swatch_copy_24-22)"
                    d="M345.45 236.17v2.07l-7.56-4.29v-2.13l7.56 4.35z"
                  />
                  <path
                    fill="#494949"
                    d="M378.93 222.13l-24.44 13.97-89.11-51.74 24.46-13.95 89.09 51.72z"
                  />
                  <path
                    fill="url(#prefix__New_Gradient_Swatch_copy_24-23)"
                    d="M370.88 233.29v1.7l-5.04-2.94v-1.69l5.04 2.93z"
                  />
                  <path
                    fill="url(#prefix__New_Gradient_Swatch_copy_24-24)"
                    d="M370.88 233.29v1.7l1.39-.79v-1.71l-1.39.8z"
                  />
                  <path
                    fill="url(#prefix__New_Gradient_Swatch_copy_24-25)"
                    d="M372.27 232.49l-1.39.8-5.04-2.93 1.38-.79 5.05 2.92z"
                  />
                  <path
                    fill="url(#prefix__New_Gradient_Swatch_copy_24-26)"
                    d="M371.32 233.49v2.39l-.92-.53v-2.38l.92.52z"
                  />
                  <path
                    fill="url(#prefix__New_Gradient_Swatch_copy_24-27)"
                    d="M371.32 233.49v2.39l1.94-1.1v-2.4l-1.94 1.11z"
                  />
                  <path
                    fill="url(#prefix__New_Gradient_Swatch_copy_24-28)"
                    d="M373.26 232.38l-1.94 1.11-.92-.52 1.95-1.11.91.52z"
                  />
                </g>
                <g>
                  <path
                    opacity={0.2}
                    d="M360.85 250.23l24.46-13.95 89.1 51.71-12.09 6.91 4.02 2.33-1.39.79-4.01-2.33-10.98 6.27-89.11-51.73z"
                  />
                  <path
                    d="M370.16 248.26a1.91 1.91 0 01-.77 1.74l-3.14 1.81c-.51.28-.19-.35-.94-.78a6 6 0 01-2.74-4.72c0-.86-.79-.87-.3-1.15l3.24-1.83a1.94 1.94 0 011.91.21 6.06 6.06 0 012.74 4.72z"
                    fill="url(#prefix__linear-gradient-357)"
                  />
                  <path
                    d="M366.94 250.1c0 1.73-1.23 2.43-2.74 1.56a6 6 0 01-2.74-4.72c0-1.74 1.23-2.44 2.74-1.56a6 6 0 012.74 4.72z"
                    fill="url(#prefix__New_Gradient_Swatch_copy_24-29)"
                  />
                  <path
                    d="M365.51 249.38c0 .9-.64 1.27-1.43.81a3.11 3.11 0 01-1.42-2.46c0-.9.63-1.27 1.42-.81a3.12 3.12 0 011.43 2.46z"
                    fill="#7d7d7d"
                  />
                  <path
                    d="M364.33 245.31a2 2 0 00-1.87-.23 2.17 2.17 0 011.64.32 6 6 0 012.73 4.72 1.85 1.85 0 01-.86 1.79c.67-.18 1.1-.85 1.1-1.88a6 6 0 00-2.74-4.72z"
                    style={{
                      mixBlendMode: "screen",
                    }}
                    fill="url(#prefix__Radial_Gradient_1-9)"
                  />
                  <path
                    d="M377.55 252.56a1.91 1.91 0 01-.77 1.73l-3.14 1.81c-.5.28-.19-.34-.94-.78a6 6 0 01-2.7-4.72c0-.86-.79-.86-.3-1.15l3.23-1.82a2 2 0 011.92.21 6 6 0 012.7 4.72z"
                    fill="url(#prefix__linear-gradient-358)"
                  />
                  <path
                    d="M374.33 254.39c0 1.74-1.23 2.43-2.74 1.56a6 6 0 01-2.74-4.72c0-1.73 1.23-2.43 2.74-1.56a6 6 0 012.74 4.72z"
                    fill="url(#prefix__New_Gradient_Swatch_copy_24-30)"
                  />
                  <path
                    d="M372.9 253.67c0 .91-.64 1.27-1.43.81a3.14 3.14 0 01-1.42-2.46c0-.9.64-1.26 1.42-.81a3.15 3.15 0 011.43 2.46z"
                    fill="#7d7d7d"
                  />
                  <path
                    d="M371.72 249.6a2 2 0 00-1.87-.23 2.18 2.18 0 011.64.33 6 6 0 012.73 4.72 1.87 1.87 0 01-.86 1.79c.67-.19 1.1-.85 1.1-1.89a6.06 6.06 0 00-2.74-4.72z"
                    style={{
                      mixBlendMode: "screen",
                    }}
                    fill="url(#prefix__Radial_Gradient_1-10)"
                  />
                  <path
                    fill="url(#prefix__New_Gradient_Swatch_copy_24-31)"
                    d="M371.49 251.9v2.06l-7.56-4.28v-2.13l7.56 4.35z"
                  />
                  <path
                    d="M439.59 288.83a1.92 1.92 0 01-.76 1.73l-3.16 1.82c-.49.27-.17-.36-.93-.79a6 6 0 01-2.73-4.72c0-.86-.8-.86-.31-1.15l3.25-1.83a2 2 0 011.91.22 6 6 0 012.73 4.72z"
                    fill="url(#prefix__linear-gradient-359)"
                  />
                  <path
                    d="M436.37 290.66c0 1.73-1.22 2.43-2.73 1.56a6 6 0 01-2.74-4.72c0-1.74 1.22-2.43 2.74-1.56a6 6 0 012.73 4.72z"
                    fill="url(#prefix__New_Gradient_Swatch_copy_24-32)"
                  />
                  <path
                    d="M434.94 289.94c0 .9-.64 1.27-1.42.81a3.12 3.12 0 01-1.43-2.46c0-.9.64-1.26 1.43-.81a3.17 3.17 0 011.42 2.46z"
                    fill="#7d7d7d"
                  />
                  <path
                    d="M433.77 285.87a2 2 0 00-1.88-.23 2.18 2.18 0 011.64.33 6 6 0 012.74 4.72 1.87 1.87 0 01-.87 1.79c.67-.19 1.1-.86 1.1-1.89a6 6 0 00-2.73-4.72z"
                    style={{
                      mixBlendMode: "screen",
                    }}
                    fill="url(#prefix__Radial_Gradient_1-11)"
                  />
                  <path
                    d="M447 293.12a1.93 1.93 0 01-.76 1.74l-3.16 1.81c-.49.28-.17-.35-.93-.79a6 6 0 01-2.73-4.72c0-.85-.79-.86-.31-1.15l3.23-1.82a2 2 0 011.93.21 6 6 0 012.73 4.72z"
                    fill="url(#prefix__linear-gradient-360)"
                  />
                  <path
                    d="M443.76 295c0 1.74-1.22 2.44-2.73 1.56a6 6 0 01-2.74-4.72c0-1.73 1.22-2.43 2.74-1.56a6 6 0 012.73 4.72z"
                    fill="url(#prefix__New_Gradient_Swatch_copy_24-33)"
                  />
                  <path
                    d="M442.33 294.23c0 .91-.64 1.27-1.42.82a3.15 3.15 0 01-1.43-2.46c0-.91.64-1.27 1.43-.82a3.17 3.17 0 011.42 2.46z"
                    fill="#7d7d7d"
                  />
                  <path
                    d="M441.16 290.17a2 2 0 00-1.88-.23 2.12 2.12 0 011.64.32 6 6 0 012.74 4.72 1.85 1.85 0 01-.87 1.79c.67-.19 1.1-.85 1.1-1.88a6 6 0 00-2.73-4.72z"
                    style={{
                      mixBlendMode: "screen",
                    }}
                    fill="url(#prefix__Radial_Gradient_1-12)"
                  />
                  <path
                    fill="url(#prefix__linear-gradient-361)"
                    d="M449.97 292.38v2.98l-18.73-10.9-5.73-.91-45.95-26.72-5.48-5.61-13.23-7.69v-2.88l89.12 51.73z"
                  />
                  <path
                    fill="url(#prefix__New_Gradient_Swatch_copy_24-34)"
                    d="M449.96 292.38v2.98l24.45-13.91v-3.04l-24.45 13.97z"
                  />
                  <path
                    fill="url(#prefix__New_Gradient_Swatch_copy_24-35)"
                    d="M440.93 292.46v2.06l-7.57-4.28v-2.13l7.57 4.35z"
                  />
                  <path
                    fill="#494949"
                    d="M474.41 278.41l-24.45 13.97-89.11-51.73 24.46-13.95 89.1 51.71z"
                  />
                  <path
                    fill="url(#prefix__New_Gradient_Swatch_copy_24-36)"
                    d="M466.36 289.57v1.7l-5.05-2.93v-1.7l5.05 2.93z"
                  />
                  <path
                    fill="url(#prefix__New_Gradient_Swatch_copy_24-37)"
                    d="M466.36 289.57v1.7l1.39-.78v-1.71l-1.39.79z"
                  />
                  <path
                    fill="url(#prefix__New_Gradient_Swatch_copy_24-38)"
                    d="M467.75 288.78l-1.39.79-5.05-2.93 1.39-.79 5.05 2.93z"
                  />
                  <path
                    fill="url(#prefix__New_Gradient_Swatch_copy_24-39)"
                    d="M466.79 289.78v2.39l-.91-.53v-2.38l.91.52z"
                  />
                  <path
                    fill="url(#prefix__New_Gradient_Swatch_copy_24-40)"
                    d="M466.79 289.78v2.39l1.95-1.11v-2.39l-1.95 1.11z"
                  />
                  <path
                    fill="url(#prefix__New_Gradient_Swatch_copy_24-41)"
                    d="M468.74 288.67l-1.95 1.11-.91-.52 1.94-1.11.92.52z"
                  />
                </g>
                <g>
                  <path
                    opacity={0.2}
                    d="M456.44 306.57l24.46-13.94 89.1 51.71-12.09 6.91 4.01 2.33-1.38.79-4.02-2.33-10.97 6.27-89.11-51.74z"
                  />
                  <path
                    d="M465.75 304.61a1.91 1.91 0 01-.77 1.74l-3.14 1.8c-.51.29-.19-.34-.94-.77a6.06 6.06 0 01-2.74-4.72c0-.86-.79-.87-.31-1.16 0 0 3.24-1.81 3.25-1.82a1.94 1.94 0 011.91.21 6 6 0 012.74 4.72z"
                    fill="url(#prefix__linear-gradient-362)"
                  />
                  <path
                    d="M462.53 306.44c0 1.74-1.23 2.44-2.74 1.56a6 6 0 01-2.74-4.72c0-1.73 1.23-2.43 2.74-1.56a6.06 6.06 0 012.74 4.72z"
                    fill="url(#prefix__New_Gradient_Swatch_copy_24-42)"
                  />
                  <path
                    d="M461.1 305.73c0 .9-.64 1.26-1.43.81a3.15 3.15 0 01-1.43-2.46c0-.9.64-1.27 1.43-.81a3.12 3.12 0 011.43 2.46z"
                    fill="#7d7d7d"
                  />
                  <path
                    d="M459.92 301.66a2 2 0 00-1.87-.23 2.15 2.15 0 011.63.32 6 6 0 012.74 4.72 1.86 1.86 0 01-.86 1.79c.67-.19 1.1-.85 1.1-1.88a6 6 0 00-2.74-4.72z"
                    style={{
                      mixBlendMode: "screen",
                    }}
                    fill="url(#prefix__Radial_Gradient_1-13)"
                  />
                  <path
                    d="M473.14 308.9a1.91 1.91 0 01-.77 1.74l-3.14 1.81c-.51.28-.19-.35-.94-.78a6 6 0 01-2.74-4.72c0-.86-.79-.87-.31-1.15l3.24-1.82a1.93 1.93 0 011.92.2 6.06 6.06 0 012.74 4.72z"
                    fill="url(#prefix__linear-gradient-363)"
                  />
                  <path
                    d="M469.92 310.74c0 1.73-1.23 2.43-2.74 1.56a6 6 0 01-2.74-4.72c0-1.74 1.23-2.44 2.74-1.56a6 6 0 012.74 4.72z"
                    fill="url(#prefix__New_Gradient_Swatch_copy_24-43)"
                  />
                  <path
                    d="M468.49 310c0 .9-.64 1.27-1.43.81a3.11 3.11 0 01-1.42-2.46c0-.9.63-1.27 1.42-.81a3.12 3.12 0 011.43 2.46z"
                    fill="#7d7d7d"
                  />
                  <path
                    d="M467.31 306a2 2 0 00-1.87-.23 2.14 2.14 0 011.63.32 6 6 0 012.74 4.72 1.85 1.85 0 01-.86 1.79c.67-.18 1.1-.85 1.1-1.88a6 6 0 00-2.74-4.72z"
                    style={{
                      mixBlendMode: "screen",
                    }}
                    fill="url(#prefix__Radial_Gradient_1-14)"
                  />
                  <path
                    fill="url(#prefix__New_Gradient_Swatch_copy_24-44)"
                    d="M467.08 308.25v2.06l-7.56-4.29v-2.13l7.56 4.36z"
                  />
                  <path
                    d="M535.18 345.17a1.93 1.93 0 01-.76 1.74l-3.16 1.81c-.49.28-.18-.35-.93-.78a6 6 0 01-2.73-4.72c0-.86-.8-.87-.31-1.15l3.25-1.83a1.94 1.94 0 011.91.21 6 6 0 012.73 4.72z"
                    fill="url(#prefix__linear-gradient-364)"
                  />
                  <path
                    d="M532 347c0 1.73-1.22 2.43-2.74 1.56a6 6 0 01-2.73-4.72c0-1.74 1.22-2.44 2.73-1.56A6 6 0 01532 347z"
                    fill="url(#prefix__New_Gradient_Swatch_copy_24-45)"
                  />
                  <path
                    d="M530.53 346.29c0 .9-.64 1.27-1.42.81a3.14 3.14 0 01-1.43-2.46c0-.9.64-1.27 1.43-.81a3.14 3.14 0 011.42 2.46z"
                    fill="#7d7d7d"
                  />
                  <path
                    d="M529.36 342.22a2 2 0 00-1.88-.23 2.16 2.16 0 011.64.32 6 6 0 012.74 4.72 1.85 1.85 0 01-.87 1.79c.67-.18 1.1-.85 1.1-1.88a6 6 0 00-2.73-4.72z"
                    style={{
                      mixBlendMode: "screen",
                    }}
                    fill="url(#prefix__Radial_Gradient_1-15)"
                  />
                  <path
                    d="M542.57 349.47a1.92 1.92 0 01-.76 1.73l-3.16 1.8c-.49.27-.18-.36-.93-.79a6 6 0 01-2.73-4.72c0-.86-.8-.86-.31-1.15l3.23-1.82a2 2 0 011.93.21 6 6 0 012.73 4.74z"
                    fill="url(#prefix__linear-gradient-365)"
                  />
                  <path
                    d="M539.35 351.3c0 1.73-1.22 2.43-2.74 1.56a6 6 0 01-2.73-4.72c0-1.74 1.22-2.43 2.73-1.56a6 6 0 012.74 4.72z"
                    fill="url(#prefix__New_Gradient_Swatch_copy_24-46)"
                  />
                  <path
                    d="M537.92 350.58c0 .9-.64 1.27-1.42.81a3.12 3.12 0 01-1.43-2.46c0-.9.64-1.26 1.43-.81a3.17 3.17 0 011.42 2.46z"
                    fill="#7d7d7d"
                  />
                  <path
                    d="M536.75 346.51a2 2 0 00-1.88-.23 2.18 2.18 0 011.64.33 6 6 0 012.74 4.72 1.87 1.87 0 01-.87 1.79c.67-.19 1.1-.86 1.1-1.89a6 6 0 00-2.73-4.72z"
                    style={{
                      mixBlendMode: "screen",
                    }}
                    fill="url(#prefix__Radial_Gradient_1-16)"
                  />
                  <path
                    fill="url(#prefix__linear-gradient-366)"
                    d="M545.56 348.73v2.97l-18.73-10.89-5.73-.91-45.95-26.72-5.48-5.61-13.23-7.69V297l89.12 51.73z"
                  />
                  <path
                    fill="url(#prefix__New_Gradient_Swatch_copy_24-47)"
                    d="M545.55 348.73v2.97L570 337.8v-3.04l-24.45 13.97z"
                  />
                  <path
                    fill="url(#prefix__New_Gradient_Swatch_copy_24-48)"
                    d="M536.51 348.81v2.06l-7.56-4.28v-2.13l7.56 4.35z"
                  />
                  <path
                    fill="#494949"
                    d="M570 334.76l-24.45 13.97L456.44 297l24.46-13.95 89.1 51.71z"
                  />
                  <path
                    fill="url(#prefix__New_Gradient_Swatch_copy_24-49)"
                    d="M561.95 345.92v1.7l-5.05-2.93v-1.7l5.05 2.93z"
                  />
                  <path
                    fill="url(#prefix__New_Gradient_Swatch_copy_24-50)"
                    d="M561.95 345.92v1.7l1.38-.79v-1.7l-1.38.79z"
                  />
                  <path
                    fill="url(#prefix__New_Gradient_Swatch_copy_24-51)"
                    d="M563.33 345.13l-1.38.79-5.05-2.93 1.39-.79 5.04 2.93z"
                  />
                  <path
                    fill="url(#prefix__New_Gradient_Swatch_copy_24-52)"
                    d="M562.38 346.13v2.39l-.92-.53v-2.39l.92.53z"
                  />
                  <path
                    fill="url(#prefix__New_Gradient_Swatch_copy_24-53)"
                    d="M562.38 346.13v2.39l1.95-1.11v-2.4l-1.95 1.12z"
                  />
                  <path
                    fill="url(#prefix__New_Gradient_Swatch_copy_24-54)"
                    d="M564.33 345.01l-1.95 1.12-.92-.53 1.95-1.11.92.52z"
                  />
                </g>
                <g>
                  <path
                    opacity={0.2}
                    d="M552.14 362.98l24.47-13.95 89.09 51.72-12.09 6.9 4.02 2.34-1.39.79-4.01-2.34-10.98 6.28-89.11-51.74z"
                  />
                  <path
                    d="M561.45 361a1.94 1.94 0 01-.77 1.74l-3.15 1.81c-.5.27-.18-.35-.93-.79a6 6 0 01-2.74-4.72c0-.86-.79-.86-.3-1.15l3.24-1.82a1.94 1.94 0 011.91.21 6 6 0 012.74 4.72z"
                    fill="url(#prefix__linear-gradient-367)"
                  />
                  <path
                    d="M558.23 362.85c0 1.74-1.23 2.43-2.74 1.56a6 6 0 01-2.74-4.72c0-1.73 1.23-2.43 2.74-1.56a6 6 0 012.74 4.72z"
                    fill="url(#prefix__New_Gradient_Swatch_copy_24-55)"
                  />
                  <path
                    d="M556.8 362.13c0 .91-.64 1.27-1.43.82a3.14 3.14 0 01-1.42-2.46c0-.91.63-1.27 1.42-.82a3.15 3.15 0 011.43 2.46z"
                    fill="#7d7d7d"
                  />
                  <path
                    d="M555.62 358.06a2 2 0 00-1.87-.22 2.13 2.13 0 011.64.32 6 6 0 012.73 4.72 1.87 1.87 0 01-.86 1.79c.67-.19 1.1-.85 1.1-1.88a6.06 6.06 0 00-2.74-4.73z"
                    style={{
                      mixBlendMode: "screen",
                    }}
                    fill="url(#prefix__Radial_Gradient_1-17)"
                  />
                  <path
                    d="M568.84 365.31a1.91 1.91 0 01-.77 1.74l-3.14 1.8c-.51.29-.19-.34-.94-.77a6.06 6.06 0 01-2.74-4.73c0-.85-.79-.86-.3-1.15l3.24-1.82a1.94 1.94 0 011.91.21 6 6 0 012.74 4.72z"
                    fill="url(#prefix__linear-gradient-368)"
                  />
                  <path
                    d="M565.62 367.14c0 1.74-1.23 2.44-2.74 1.56a6 6 0 01-2.74-4.72c0-1.73 1.23-2.43 2.74-1.56a6.06 6.06 0 012.74 4.72z"
                    fill="url(#prefix__New_Gradient_Swatch_copy_24-56)"
                  />
                  <path
                    d="M564.19 366.43c0 .9-.64 1.26-1.43.81a3.17 3.17 0 01-1.42-2.46c0-.91.64-1.27 1.42-.81a3.12 3.12 0 011.43 2.46z"
                    fill="#7d7d7d"
                  />
                  <path
                    d="M563 362.36a2 2 0 00-1.87-.23 2.17 2.17 0 011.64.32 6 6 0 012.73 4.72 1.87 1.87 0 01-.86 1.79c.67-.19 1.1-.85 1.1-1.88a6 6 0 00-2.74-4.72z"
                    style={{
                      mixBlendMode: "screen",
                    }}
                    fill="url(#prefix__Radial_Gradient_1-18)"
                  />
                  <path
                    fill="url(#prefix__New_Gradient_Swatch_copy_24-57)"
                    d="M562.78 364.65v2.06l-7.56-4.28v-2.13l7.56 4.35z"
                  />
                  <path
                    d="M630.88 401.58a1.93 1.93 0 01-.76 1.74l-3.14 1.8c-.51.29-.19-.34-1-.78a6 6 0 01-2.73-4.72c0-.85-.8-.86-.31-1.15l3.25-1.82a1.94 1.94 0 011.91.21 6 6 0 012.78 4.72z"
                    fill="url(#prefix__linear-gradient-369)"
                  />
                  <path
                    d="M627.66 403.41c0 1.74-1.22 2.44-2.73 1.56a6 6 0 01-2.74-4.72c0-1.73 1.22-2.43 2.74-1.56a6 6 0 012.73 4.72z"
                    fill="url(#prefix__New_Gradient_Swatch_copy_24-58)"
                  />
                  <path
                    d="M626.23 402.69c0 .91-.64 1.27-1.42.82a3.15 3.15 0 01-1.43-2.46c0-.91.64-1.27 1.43-.82a3.17 3.17 0 011.42 2.46z"
                    fill="#7d7d7d"
                  />
                  <path
                    d="M625.06 398.63a2 2 0 00-1.88-.23 2.12 2.12 0 011.64.32 6 6 0 012.74 4.72 1.87 1.87 0 01-.87 1.79c.67-.19 1.1-.85 1.1-1.88a6 6 0 00-2.73-4.72z"
                    style={{
                      mixBlendMode: "screen",
                    }}
                    fill="url(#prefix__Radial_Gradient_1-19)"
                  />
                  <path
                    d="M638.27 405.87a1.93 1.93 0 01-.76 1.74l-3.16 1.81c-.49.28-.17-.35-.93-.78a6 6 0 01-2.73-4.72c0-.86-.8-.87-.31-1.15l3.23-1.82a2 2 0 011.93.2 6 6 0 012.73 4.72z"
                    fill="url(#prefix__linear-gradient-370)"
                  />
                  <path
                    d="M635.05 407.71c0 1.73-1.22 2.43-2.73 1.56a6 6 0 01-2.74-4.72c0-1.74 1.22-2.44 2.74-1.56a6 6 0 012.73 4.72z"
                    fill="url(#prefix__New_Gradient_Swatch_copy_24-59)"
                  />
                  <path
                    d="M633.62 407c0 .9-.64 1.27-1.42.81a3.14 3.14 0 01-1.43-2.46c0-.9.64-1.27 1.43-.81a3.14 3.14 0 011.42 2.46z"
                    fill="#7d7d7d"
                  />
                  <path
                    d="M632.45 402.92a2 2 0 00-1.88-.23 2.16 2.16 0 011.64.32 6 6 0 012.74 4.72 1.83 1.83 0 01-.87 1.79c.67-.18 1.1-.85 1.1-1.88a6 6 0 00-2.73-4.72z"
                    style={{
                      mixBlendMode: "screen",
                    }}
                    fill="url(#prefix__Radial_Gradient_1-20)"
                  />
                  <path
                    fill="url(#prefix__linear-gradient-371)"
                    d="M641.26 405.14v2.97l-18.73-10.89-5.73-.91-45.95-26.73-5.48-5.6-13.23-7.69v-2.89l89.12 51.74z"
                  />
                  <path
                    fill="url(#prefix__New_Gradient_Swatch_copy_24-60)"
                    d="M641.25 405.14v2.97l24.45-13.91v-3.03l-24.45 13.97z"
                  />
                  <path
                    fill="url(#prefix__New_Gradient_Swatch_copy_24-61)"
                    d="M632.22 405.21v2.07l-7.57-4.29v-2.13l7.57 4.35z"
                  />
                  <path
                    fill="#494949"
                    d="M665.7 391.17l-24.45 13.97-89.11-51.74 24.47-13.95 89.09 51.72z"
                  />
                  <path
                    fill="url(#prefix__New_Gradient_Swatch_copy_24-62)"
                    d="M657.65 402.33v1.7l-5.04-2.94v-1.69l5.04 2.93z"
                  />
                  <path
                    fill="url(#prefix__New_Gradient_Swatch_copy_24-63)"
                    d="M657.65 402.33v1.7l1.38-.79v-1.7l-1.38.79z"
                  />
                  <path
                    fill="url(#prefix__New_Gradient_Swatch_copy_24-64)"
                    d="M659.03 401.54l-1.38.79-5.04-2.93 1.38-.79 5.04 2.93z"
                  />
                  <path
                    fill="url(#prefix__New_Gradient_Swatch_copy_24-65)"
                    d="M658.08 402.54v2.38l-.92-.53v-2.38l.92.53z"
                  />
                  <path
                    fill="url(#prefix__New_Gradient_Swatch_copy_24-66)"
                    d="M658.08 402.54v2.38l1.95-1.1v-2.4l-1.95 1.12z"
                  />
                  <path
                    fill="url(#prefix__New_Gradient_Swatch_copy_24-67)"
                    d="M660.03 401.42l-1.95 1.12-.92-.53 1.95-1.11.92.52z"
                  />
                </g>
                <g>
                  <path
                    opacity={0.2}
                    d="M647.62 419.27l24.46-13.95 89.09 51.71-12.09 6.91 4.02 2.33-1.38.79-4.02-2.33-10.97 6.27-89.11-51.73z"
                  />
                  <path
                    d="M656.93 417.3a1.94 1.94 0 01-.77 1.74l-3.16 1.81c-.51.28-.19-.35-.94-.78a6 6 0 01-2.74-4.72c0-.86-.79-.87-.31-1.15l3.25-1.83a2 2 0 011.91.21 6.06 6.06 0 012.76 4.72z"
                    fill="url(#prefix__linear-gradient-372)"
                  />
                  <path
                    d="M653.7 419.14c0 1.73-1.22 2.43-2.73 1.56a6 6 0 01-2.74-4.72c0-1.74 1.23-2.43 2.74-1.56a6 6 0 012.73 4.72z"
                    fill="url(#prefix__New_Gradient_Swatch_copy_24-68)"
                  />
                  <path
                    d="M652.27 418.42c0 .9-.63 1.27-1.42.81a3.12 3.12 0 01-1.43-2.46c0-.9.64-1.27 1.43-.81a3.13 3.13 0 011.42 2.46z"
                    fill="#7d7d7d"
                  />
                  <path
                    d="M651.1 414.35a2 2 0 00-1.87-.23 2.15 2.15 0 011.63.32 6.06 6.06 0 012.74 4.72 1.86 1.86 0 01-.87 1.8 1.76 1.76 0 001.11-1.89 6.06 6.06 0 00-2.74-4.72z"
                    style={{
                      mixBlendMode: "screen",
                    }}
                    fill="url(#prefix__Radial_Gradient_1-21)"
                  />
                  <path
                    d="M664.32 421.6a1.94 1.94 0 01-.77 1.74l-3.14 1.8c-.51.28-.19-.34-.94-.78a6 6 0 01-2.74-4.72c0-.86-.79-.86-.31-1.15l3.24-1.82a2 2 0 011.92.21 6 6 0 012.74 4.72z"
                    fill="url(#prefix__linear-gradient-373)"
                  />
                  <path
                    d="M661.09 423.43c0 1.74-1.22 2.43-2.73 1.56a6 6 0 01-2.74-4.72c0-1.73 1.23-2.43 2.74-1.56a6 6 0 012.73 4.72z"
                    fill="url(#prefix__New_Gradient_Swatch_copy_24-69)"
                  />
                  <path
                    d="M659.66 422.71c0 .91-.63 1.27-1.42.82a3.15 3.15 0 01-1.43-2.46c0-.91.64-1.27 1.43-.82a3.14 3.14 0 011.42 2.46z"
                    fill="#7d7d7d"
                  />
                  <path
                    d="M658.49 418.65a2 2 0 00-1.87-.23 2.1 2.1 0 011.63.32 6 6 0 012.74 4.72 1.85 1.85 0 01-.87 1.79 1.75 1.75 0 001.11-1.88 6 6 0 00-2.74-4.72z"
                    style={{
                      mixBlendMode: "screen",
                    }}
                    fill="url(#prefix__Radial_Gradient_1-22)"
                  />
                  <path
                    fill="url(#prefix__New_Gradient_Swatch_copy_24-70)"
                    d="M658.26 420.94V423l-7.56-4.28v-2.13l7.56 4.35z"
                  />
                  <path
                    d="M726.36 457.87a1.91 1.91 0 01-.77 1.73l-3.15 1.82c-.5.27-.18-.35-.93-.79a6 6 0 01-2.74-4.72c0-.86-.79-.86-.3-1.15l3.24-1.83a2 2 0 011.91.22 6 6 0 012.74 4.72z"
                    fill="url(#prefix__linear-gradient-374)"
                  />
                  <path
                    d="M723.14 459.7c0 1.74-1.23 2.43-2.74 1.56a6 6 0 01-2.74-4.72c0-1.73 1.23-2.43 2.74-1.56a6 6 0 012.74 4.72z"
                    fill="url(#prefix__New_Gradient_Swatch_copy_24-71)"
                  />
                  <path
                    d="M721.71 459c0 .91-.64 1.27-1.43.81a3.14 3.14 0 01-1.42-2.45c0-.91.64-1.27 1.42-.82a3.15 3.15 0 011.43 2.46z"
                    fill="#7d7d7d"
                  />
                  <path
                    d="M720.53 454.91a2 2 0 00-1.87-.23 2.18 2.18 0 011.64.33 6 6 0 012.73 4.72 1.87 1.87 0 01-.86 1.79c.67-.19 1.1-.85 1.1-1.88a6.06 6.06 0 00-2.74-4.73z"
                    style={{
                      mixBlendMode: "screen",
                    }}
                    fill="url(#prefix__Radial_Gradient_1-23)"
                  />
                  <path
                    d="M733.75 462.16a1.91 1.91 0 01-.77 1.74l-3.15 1.81c-.49.28-.18-.35-.93-.79a6 6 0 01-2.74-4.72c0-.85-.79-.86-.3-1.15l3.23-1.81a1.93 1.93 0 011.92.2 6 6 0 012.74 4.72z"
                    fill="url(#prefix__linear-gradient-375)"
                  />
                  <path
                    d="M730.53 464c0 1.74-1.23 2.44-2.74 1.56a6 6 0 01-2.73-4.72c0-1.73 1.22-2.43 2.73-1.56a6.06 6.06 0 012.74 4.72z"
                    fill="url(#prefix__New_Gradient_Swatch_copy_24-72)"
                  />
                  <path
                    d="M729.1 463.27c0 .91-.64 1.27-1.43.82a3.17 3.17 0 01-1.42-2.46c0-.91.64-1.27 1.42-.82a3.15 3.15 0 011.43 2.46z"
                    fill="#7d7d7d"
                  />
                  <path
                    d="M727.92 459.21a2 2 0 00-1.87-.23 2.17 2.17 0 011.64.32 6 6 0 012.73 4.72 1.87 1.87 0 01-.86 1.79c.67-.19 1.1-.85 1.1-1.88a6 6 0 00-2.74-4.72z"
                    style={{
                      mixBlendMode: "screen",
                    }}
                    fill="url(#prefix__Radial_Gradient_1-24)"
                  />
                  <path
                    fill="url(#prefix__linear-gradient-376)"
                    d="M736.74 461.43v2.97l-18.73-10.89-5.73-.92-45.95-26.72-5.49-5.61-13.22-7.69v-2.88l89.12 51.74z"
                  />
                  <path
                    fill="url(#prefix__New_Gradient_Swatch_copy_24-73)"
                    d="M736.73 461.43v2.97l24.44-13.91v-3.04l-24.44 13.98z"
                  />
                  <path
                    fill="url(#prefix__New_Gradient_Swatch_copy_24-74)"
                    d="M727.69 461.5v2.06l-7.56-4.28v-2.13l7.56 4.35z"
                  />
                  <path
                    fill="url(#prefix__New_Gradient_Swatch_copy_24-75)"
                    d="M761.17 447.45l-24.44 13.98-89.11-51.74 24.46-13.95 89.09 51.71z"
                  />
                  <path
                    fill="url(#prefix__New_Gradient_Swatch_copy_24-76)"
                    d="M753.13 458.61v1.7l-5.05-2.93v-1.7l5.05 2.93z"
                  />
                  <path
                    fill="url(#prefix__New_Gradient_Swatch_copy_24-77)"
                    d="M753.13 458.61v1.7l1.38-.78v-1.71l-1.38.79z"
                  />
                  <path
                    fill="url(#prefix__New_Gradient_Swatch_copy_24-78)"
                    d="M754.51 457.82l-1.38.79-5.05-2.93 1.39-.79 5.04 2.93z"
                  />
                  <path
                    fill="url(#prefix__New_Gradient_Swatch_copy_24-79)"
                    d="M753.56 458.82v2.39l-.92-.53v-2.38l.92.52z"
                  />
                  <path
                    fill="url(#prefix__New_Gradient_Swatch_copy_24-80)"
                    d="M753.56 458.82v2.39l1.94-1.11v-2.39l-1.94 1.11z"
                  />
                  <path
                    fill="url(#prefix__New_Gradient_Swatch_copy_24-81)"
                    d="M755.5 457.71l-1.94 1.11-.92-.52 1.95-1.11.91.52z"
                  />
                </g>
                <g>
                  <path
                    opacity={0.2}
                    d="M743.32 475.67l24.46-13.94 89.09 51.71-12.08 6.91 4.01 2.33-1.38.79-4.02-2.33-10.97 6.27-89.11-51.74z"
                  />
                  <path
                    d="M752.63 473.71a1.94 1.94 0 01-.77 1.74l-3.15 1.81c-.5.28-.18-.35-.93-.78a6.06 6.06 0 01-2.74-4.72c0-.86-.79-.87-.31-1.16l3.25-1.82a1.94 1.94 0 011.91.21 6 6 0 012.74 4.72z"
                    fill="url(#prefix__linear-gradient-377)"
                  />
                  <path
                    d="M749.41 475.55c0 1.73-1.23 2.43-2.74 1.56a6.06 6.06 0 01-2.74-4.72c0-1.74 1.23-2.44 2.74-1.57a6.06 6.06 0 012.74 4.73z"
                    fill="url(#prefix__New_Gradient_Swatch_copy_24-82)"
                  />
                  <path
                    d="M748 474.83c0 .9-.64 1.26-1.43.81a3.15 3.15 0 01-1.43-2.46c0-.9.64-1.27 1.43-.81a3.12 3.12 0 011.43 2.46z"
                    fill="#7d7d7d"
                  />
                  <path
                    d="M746.8 470.76a2 2 0 00-1.87-.23 2.15 2.15 0 011.63.32 6 6 0 012.74 4.72 1.86 1.86 0 01-.86 1.79c.66-.18 1.1-.85 1.1-1.88a6 6 0 00-2.74-4.72z"
                    style={{
                      mixBlendMode: "screen",
                    }}
                    fill="url(#prefix__Radial_Gradient_1-25)"
                  />
                  <path
                    d="M760 478a1.91 1.91 0 01-.77 1.74l-3.14 1.81c-.51.28-.19-.35-.94-.78a6 6 0 01-2.74-4.72c0-.86-.79-.87-.31-1.15l3.25-1.83a2 2 0 011.91.21A6.06 6.06 0 01760 478z"
                    fill="url(#prefix__linear-gradient-378)"
                  />
                  <path
                    d="M756.8 479.84c0 1.73-1.23 2.43-2.74 1.56a6 6 0 01-2.74-4.72c0-1.74 1.23-2.44 2.74-1.56a6 6 0 012.74 4.72z"
                    fill="url(#prefix__New_Gradient_Swatch_copy_24-83)"
                  />
                  <path
                    d="M755.37 479.12c0 .9-.64 1.27-1.43.81a3.12 3.12 0 01-1.43-2.46c0-.9.64-1.27 1.43-.81a3.14 3.14 0 011.43 2.46z"
                    fill="#7d7d7d"
                  />
                  <path
                    d="M754.19 475.05a2 2 0 00-1.87-.23 2.15 2.15 0 011.63.32 6 6 0 012.74 4.72 1.87 1.87 0 01-.86 1.8 1.77 1.77 0 001.1-1.89 6 6 0 00-2.74-4.72z"
                    style={{
                      mixBlendMode: "screen",
                    }}
                    fill="url(#prefix__Radial_Gradient_1-26)"
                  />
                  <path
                    fill="url(#prefix__New_Gradient_Swatch_copy_24-84)"
                    d="M753.96 477.35v2.06l-7.56-4.29V473l7.56 4.35z"
                  />
                  <path
                    d="M822.06 514.27a1.91 1.91 0 01-.77 1.74l-3.13 1.81c-.51.28-.2-.35-.95-.78a6 6 0 01-2.74-4.72c0-.86-.79-.87-.3-1.15l3.24-1.83a1.94 1.94 0 011.91.21 6 6 0 012.74 4.72z"
                    fill="url(#prefix__linear-gradient-379)"
                  />
                  <path
                    d="M818.84 516.11c0 1.73-1.23 2.43-2.74 1.56a6 6 0 01-2.73-4.72c0-1.74 1.22-2.44 2.73-1.56a6 6 0 012.74 4.72z"
                    fill="url(#prefix__New_Gradient_Swatch_copy_24-85)"
                  />
                  <path
                    d="M817.41 515.39c0 .9-.64 1.27-1.43.81a3.14 3.14 0 01-1.42-2.46c0-.9.64-1.27 1.42-.81a3.12 3.12 0 011.43 2.46z"
                    fill="#7d7d7d"
                  />
                  <path
                    d="M816.23 511.32a2 2 0 00-1.87-.23 2.17 2.17 0 011.64.32 6 6 0 012.73 4.72 1.85 1.85 0 01-.86 1.79c.67-.18 1.1-.85 1.1-1.88a6 6 0 00-2.74-4.72z"
                    style={{
                      mixBlendMode: "screen",
                    }}
                    fill="url(#prefix__Radial_Gradient_1-27)"
                  />
                  <path
                    d="M829.45 518.57a1.91 1.91 0 01-.77 1.73l-3.15 1.82c-.49.27-.18-.35-.93-.79a6 6 0 01-2.73-4.72c0-.86-.8-.86-.31-1.15l3.23-1.82a2 2 0 011.93.21 6 6 0 012.73 4.72z"
                    fill="url(#prefix__linear-gradient-380)"
                  />
                  <path
                    d="M826.23 520.4c0 1.73-1.23 2.43-2.74 1.56a6 6 0 01-2.73-4.72c0-1.73 1.22-2.43 2.73-1.56a6 6 0 012.74 4.72z"
                    fill="url(#prefix__New_Gradient_Swatch_copy_24-86)"
                  />
                  <path
                    d="M824.8 519.68c0 .91-.64 1.27-1.43.81A3.14 3.14 0 01822 518c0-.9.64-1.26 1.42-.81a3.15 3.15 0 011.38 2.49z"
                    fill="#7d7d7d"
                  />
                  <path
                    d="M823.62 515.61a2 2 0 00-1.87-.23 2.18 2.18 0 011.64.33 6 6 0 012.73 4.72 1.87 1.87 0 01-.86 1.79c.67-.19 1.1-.85 1.1-1.89a6 6 0 00-2.74-4.72z"
                    style={{
                      mixBlendMode: "screen",
                    }}
                    fill="url(#prefix__Radial_Gradient_1-28)"
                  />
                  <path
                    fill="url(#prefix__linear-gradient-381)"
                    d="M832.44 517.83v2.97l-18.73-10.89-5.73-.91-45.95-26.72-5.49-5.61-13.22-7.69v-2.88l89.12 51.73z"
                  />
                  <path
                    fill="url(#prefix__New_Gradient_Swatch_copy_24-87)"
                    d="M832.43 517.83v2.97l24.44-13.9v-3.04l-24.44 13.97z"
                  />
                  <path
                    fill="url(#prefix__New_Gradient_Swatch_copy_24-88)"
                    d="M823.39 517.91v2.06l-7.56-4.28v-2.13l7.56 4.35z"
                  />
                  <path
                    fill="url(#prefix__New_Gradient_Swatch_copy_24-89)"
                    d="M856.87 503.86l-24.44 13.97-89.11-51.73 24.46-13.95 89.09 51.71z"
                  />
                  <path
                    fill="url(#prefix__New_Gradient_Swatch_copy_24-90)"
                    d="M848.83 515.02v1.7l-5.05-2.94v-1.69l5.05 2.93z"
                  />
                  <path
                    fill="url(#prefix__New_Gradient_Swatch_copy_24-91)"
                    d="M848.83 515.02v1.7l1.38-.79v-1.7l-1.38.79z"
                  />
                  <path
                    fill="url(#prefix__New_Gradient_Swatch_copy_24-92)"
                    d="M850.21 514.23l-1.38.79-5.05-2.93 1.39-.79 5.04 2.93z"
                  />
                  <path
                    fill="url(#prefix__New_Gradient_Swatch_copy_24-93)"
                    d="M849.26 515.23v2.39l-.92-.53v-2.39l.92.53z"
                  />
                  <path
                    fill="url(#prefix__New_Gradient_Swatch_copy_24-94)"
                    d="M849.26 515.23v2.39l1.95-1.11v-2.39l-1.95 1.11z"
                  />
                  <path
                    fill="url(#prefix__New_Gradient_Swatch_copy_24-95)"
                    d="M851.21 514.12l-1.95 1.11-.92-.53 1.95-1.11.92.53z"
                  />
                </g>
                <g>
                  <path
                    opacity={0.2}
                    d="M837.07 531.18l24.46-13.94 87.82 50.96-12.09 6.91 4.02 2.33-1.39.79-4.01-2.33-10.98 6.27-87.83-50.99z"
                  />
                  <path
                    d="M846.38 529.22a1.91 1.91 0 01-.77 1.74l-3.15 1.81c-.5.28-.18-.35-.93-.78a6 6 0 01-2.74-4.72c0-.86-.79-.87-.31-1.15l3.25-1.83a1.94 1.94 0 011.91.21 6 6 0 012.74 4.72z"
                    fill="url(#prefix__linear-gradient-382)"
                  />
                  <path
                    d="M843.16 531.06c0 1.73-1.23 2.43-2.74 1.56a6.06 6.06 0 01-2.74-4.72c0-1.74 1.23-2.44 2.74-1.56a6 6 0 012.74 4.72z"
                    fill="url(#prefix__New_Gradient_Swatch_copy_24-96)"
                  />
                  <path
                    d="M841.73 530.34c0 .9-.64 1.27-1.43.81a3.14 3.14 0 01-1.43-2.46c0-.9.64-1.27 1.43-.81a3.12 3.12 0 011.43 2.46z"
                    fill="#7d7d7d"
                  />
                  <path
                    d="M840.55 526.27a2 2 0 00-1.87-.23 2.15 2.15 0 011.63.32 6 6 0 012.74 4.72 1.85 1.85 0 01-.86 1.79c.66-.18 1.1-.85 1.1-1.88a6 6 0 00-2.74-4.72z"
                    style={{
                      mixBlendMode: "screen",
                    }}
                    fill="url(#prefix__Radial_Gradient_1-29)"
                  />
                  <path
                    d="M853.77 533.52a1.91 1.91 0 01-.77 1.73l-3.15 1.82c-.5.27-.18-.36-.93-.79a6 6 0 01-2.74-4.72c0-.86-.79-.86-.31-1.15l3.25-1.83a2 2 0 011.91.21 6.06 6.06 0 012.74 4.73z"
                    fill="url(#prefix__linear-gradient-383)"
                  />
                  <path
                    d="M850.55 535.35c0 1.73-1.23 2.43-2.74 1.56a6 6 0 01-2.74-4.72c0-1.74 1.23-2.43 2.74-1.56a6 6 0 012.74 4.72z"
                    fill="url(#prefix__New_Gradient_Swatch_copy_24-97)"
                  />
                  <path
                    d="M849.12 534.63c0 .9-.64 1.27-1.43.81a3.12 3.12 0 01-1.43-2.46c0-.9.64-1.26 1.43-.81a3.15 3.15 0 011.43 2.46z"
                    fill="#7d7d7d"
                  />
                  <path
                    d="M847.94 530.56a2 2 0 00-1.87-.23 2.15 2.15 0 011.63.33 6 6 0 012.74 4.72 1.87 1.87 0 01-.86 1.79c.67-.19 1.1-.86 1.1-1.89a6.06 6.06 0 00-2.74-4.72z"
                    style={{
                      mixBlendMode: "screen",
                    }}
                    fill="url(#prefix__Radial_Gradient_1-30)"
                  />
                  <path
                    fill="url(#prefix__New_Gradient_Swatch_copy_24-98)"
                    d="M847.71 532.86v2.06l-7.56-4.29v-2.12l7.56 4.35z"
                  />
                  <path
                    d="M915.81 569.78a1.93 1.93 0 01-.76 1.74s-3.14 1.81-3.16 1.81c-.49.28-.18-.35-.93-.78a6 6 0 01-2.73-4.72c0-.86-.8-.87-.31-1.15l3.25-1.83a2 2 0 011.91.21 6 6 0 012.73 4.72z"
                    fill="url(#prefix__linear-gradient-384)"
                  />
                  <path
                    d="M912.59 571.62c0 1.73-1.22 2.43-2.74 1.56a6 6 0 01-2.73-4.72c0-1.74 1.22-2.43 2.73-1.56a6 6 0 012.74 4.72z"
                    fill="url(#prefix__New_Gradient_Swatch_copy_24-99)"
                  />
                  <path
                    d="M911.16 570.9c0 .9-.64 1.27-1.42.81a3.12 3.12 0 01-1.43-2.46c0-.9.64-1.27 1.43-.81a3.16 3.16 0 011.42 2.46z"
                    fill="#7d7d7d"
                  />
                  <path
                    d="M910 566.83a2 2 0 00-1.88-.23 2.16 2.16 0 011.64.32 6.06 6.06 0 012.74 4.72 1.88 1.88 0 01-.87 1.8c.67-.19 1.1-.86 1.1-1.89a6 6 0 00-2.73-4.72z"
                    style={{
                      mixBlendMode: "screen",
                    }}
                    fill="url(#prefix__Radial_Gradient_1-31)"
                  />
                  <path
                    d="M923.2 574.08a1.93 1.93 0 01-.76 1.74l-3.16 1.81c-.49.27-.18-.35-.93-.79a6 6 0 01-2.73-4.72c0-.86-.8-.86-.31-1.15l3.23-1.82a2 2 0 011.93.21 6 6 0 012.73 4.72z"
                    fill="url(#prefix__linear-gradient-385)"
                  />
                  <path
                    d="M920 575.91c0 1.74-1.22 2.43-2.74 1.56a6 6 0 01-2.73-4.72c0-1.73 1.22-2.43 2.73-1.56a6 6 0 012.74 4.72z"
                    fill="url(#prefix__New_Gradient_Swatch_copy_24-100)"
                  />
                  <path
                    d="M918.55 575.19c0 .91-.64 1.27-1.42.82a3.15 3.15 0 01-1.43-2.46c0-.91.64-1.27 1.43-.82a3.17 3.17 0 011.42 2.46z"
                    fill="#7d7d7d"
                  />
                  <path
                    d="M917.38 571.13a2 2 0 00-1.88-.23 2.12 2.12 0 011.64.32 6 6 0 012.74 4.72 1.87 1.87 0 01-.87 1.79c.67-.19 1.1-.85 1.1-1.88a6 6 0 00-2.73-4.72z"
                    style={{
                      mixBlendMode: "screen",
                    }}
                    fill="url(#prefix__Radial_Gradient_1-32)"
                  />
                  <path
                    fill="url(#prefix__linear-gradient-386)"
                    d="M924.91 572.6v2.97l-17.45-10.15-5.73-.91-45.95-26.72-5.49-5.61-13.22-7.69v-2.88l87.84 50.99z"
                  />
                  <path
                    fill="url(#prefix__New_Gradient_Swatch_copy_24-101)"
                    d="M924.9 572.6v2.97l24.45-13.91v-3.04L924.9 572.6z"
                  />
                  <path
                    fill="url(#prefix__New_Gradient_Swatch_copy_24-102)"
                    d="M924.9 575.32l1.66 5.73 24.44-13.9-1.65-5.8-24.45 13.97z"
                  />
                  <path
                    fill="url(#prefix__New_Gradient_Swatch_copy_24-103)"
                    d="M917.14 573.42v2.06l-7.56-4.28v-2.13l7.56 4.35z"
                  />
                  <path
                    fill="url(#prefix__New_Gradient_Swatch_copy_24-104)"
                    d="M949.35 558.62L924.9 572.6l-87.83-50.99 24.46-13.95 87.82 50.96z"
                  />
                  <path
                    fill="url(#prefix__New_Gradient_Swatch_copy_24-105)"
                    d="M941.52 569.21v1.7l-5.04-2.93v-1.7l5.04 2.93z"
                  />
                  <path
                    fill="url(#prefix__New_Gradient_Swatch_copy_24-106)"
                    d="M941.52 569.21v1.7l1.39-.78v-1.71l-1.39.79z"
                  />
                  <path
                    fill="url(#prefix__New_Gradient_Swatch_copy_24-107)"
                    d="M942.91 568.42l-1.39.79-5.04-2.93 1.38-.79 5.05 2.93z"
                  />
                  <path
                    fill="url(#prefix__New_Gradient_Swatch_copy_24-108)"
                    d="M941.96 569.42v2.39l-.92-.53v-2.38l.92.52z"
                  />
                  <path
                    fill="url(#prefix__New_Gradient_Swatch_copy_24-109)"
                    d="M941.96 569.42v2.39l1.94-1.11v-2.39l-1.94 1.11z"
                  />
                  <path
                    fill="url(#prefix__New_Gradient_Swatch_copy_24-110)"
                    d="M943.9 568.31l-1.94 1.11-.92-.52 1.95-1.11.91.52z"
                  />
                </g>
              </motion.g>
              <g id="prefix__trucks">
                <g id="prefix__truck4">
                  <path
                    fill="#b4c4cc"
                    d="M336.58 314.69v11.82l2.05-1.14v-11.89l-2.05 1.21z"
                  />
                  <path
                    d="M353.8 330.05c0 2-.69 3.45-1.83 4.14l-3.61 2.09c-1.18.66-.43-.83-2.22-1.87a14.38 14.38 0 01-6.52-11.25c0-2.05-1.89-2.06-.73-2.75l3.83-2.12c1.18-.64 2.79-.52 4.56.5a14.38 14.38 0 016.52 11.26z"
                    fill="#474756"
                  />
                  <path
                    d="M350 332.19c0 4.14-2.92 5.8-6.52 3.72a14.39 14.39 0 01-6.48-11.25c0-4.14 2.93-5.8 6.53-3.72a14.38 14.38 0 016.47 11.25z"
                    fill="#545466"
                  />
                  <path
                    d="M343.45 323.91c-2.33-1.34-4.22-.26-4.22 2.41a9.28 9.28 0 004.22 7.27c2.32 1.34 4.21.27 4.21-2.4a9.33 9.33 0 00-4.21-7.28z"
                    fill="url(#prefix__linear-gradient-387)"
                  />
                  <path
                    d="M345 332.63a9.32 9.32 0 01-4.22-7.28 3.66 3.66 0 01.5-2c-1.2.17-2 1.22-2 3a9.28 9.28 0 004.22 7.27c1.61.93 3 .7 3.72-.41a3.58 3.58 0 01-2.22-.58z"
                    fill="url(#prefix__linear-gradient-388)"
                  />
                  <path
                    d="M346.37 330.81c0 1.65-1.16 2.32-2.6 1.49a5.73 5.73 0 01-2.6-4.49c0-1.65 1.16-2.31 2.6-1.48a5.72 5.72 0 012.6 4.48z"
                    style={{
                      mixBlendMode: "multiply",
                    }}
                    fill="url(#prefix__linear-gradient-389)"
                  />
                  <path
                    d="M346.16 329.87c0 1.39-1 2-2.2 1.25a4.83 4.83 0 01-2.2-3.8c0-1.39 1-1.95 2.2-1.25a4.83 4.83 0 012.2 3.8z"
                    fill="url(#prefix__linear-gradient-390)"
                  />
                  <path
                    d="M345.56 330.28c0 1.4-1 2-2.2 1.26a4.83 4.83 0 01-2.2-3.8c0-1.4 1-2 2.2-1.26a4.86 4.86 0 012.2 3.8z"
                    fill="#e7f1f7"
                  />
                  <path
                    d="M353.56 330c0 2-.7 3.47-1.84 4.17l-3.48 2c-1.18.66-.42-.85-2.23-1.89a14.47 14.47 0 01-6.56-11.28c0-2.05-1.9-2.07-.74-2.76 0 0 3.67-2 3.7-2 1.19-.64 2.8-.53 4.59.5a14.48 14.48 0 016.56 11.26z"
                    fill="#4c4c5e"
                  />
                  <path
                    d="M349.92 332.09c0 4.16-2.94 5.84-6.56 3.74a14.45 14.45 0 01-6.57-11.32c0-4.16 2.94-5.83 6.57-3.74a14.47 14.47 0 016.56 11.32z"
                    fill="#474756"
                  />
                  <path
                    d="M348 331c0 3-2.09 4.16-4.67 2.67a10.28 10.28 0 01-4.68-8.07c0-3 2.09-4.16 4.68-2.66A10.3 10.3 0 01348 331z"
                    fill="#e7f1f7"
                  />
                  <path
                    d="M348 331a4 4 0 01-.59 2.27 3 3 0 01-3.27-.19 9.62 9.62 0 01-4.37-7.53c0-2 1-3.13 2.5-3.09a5.74 5.74 0 011.06.48A10.3 10.3 0 01348 331z"
                    fill="#e7f1f7"
                  />
                  <path
                    d="M340.68 322.36a3.26 3.26 0 00-1.35 3 10.31 10.31 0 004.68 8.06 3.75 3.75 0 002.67.58 3.27 3.27 0 01-3.32-.32 10.28 10.28 0 01-4.68-8.07c0-1.83.79-2.98 2-3.25z"
                    fill="#474756"
                  />
                  <path
                    d="M345.14 329c0 .78-.55 1.09-1.23.7a2.72 2.72 0 01-1.22-2.11c0-.78.55-1.09 1.22-.7a2.7 2.7 0 011.23 2.11z"
                    fill="url(#prefix__radial-gradient-2)"
                  />
                  <path
                    d="M343.41 324.28a1.38 1.38 0 00.61 1.06c.34.19.61 0 .61-.35a1.32 1.32 0 00-.61-1.05c-.33-.2-.61-.04-.61.34zm0 7.16a1.35 1.35 0 00.61 1.05c.34.2.61 0 .61-.34a1.35 1.35 0 00-.61-1.06c-.33-.19-.61-.04-.61.35zm-1.16-7.27c-.24-.42-.63-.64-.86-.5s-.24.58 0 1 .62.63.86.5.24-.59 0-1zm3.55 8.09c.23.42.62.64.86.5s.24-.58 0-1-.63-.63-.86-.5-.24.59 0 1zm-5.51-6.2a1.38 1.38 0 00.61 1.06c.34.19.62 0 .62-.35a1.36 1.36 0 00-.62-1.06c-.33-.19-.61-.04-.61.35zm6.24 3.6a1.35 1.35 0 00.61 1.06c.34.19.61 0 .61-.35a1.35 1.35 0 00-.61-1.06c-.34-.19-.61-.03-.61.35zm-5.14.06c.23.41.62.63.86.5s.24-.58 0-1-.63-.64-.86-.5-.24.59 0 1zm4.41-2.52c.23.42.62.64.86.5s.24-.58 0-1-.63-.63-.86-.5-.24.59 0 1z"
                    fill="#474756"
                  />
                  <path
                    d="M345.91 329a1.28 1.28 0 01-.5 1.15l-.77.46c-.32.18-.11-.23-.61-.52a4 4 0 01-1.81-3.12c0-.57-.52-.57-.2-.76l.81-.46a1.3 1.3 0 011.27.13 4 4 0 011.81 3.12z"
                    fill="#545466"
                  />
                  <path
                    d="M345.1 329.5c0 1.15-.8 1.61-1.8 1a4 4 0 01-1.81-3.12c0-1.15.81-1.61 1.81-1a4 4 0 011.8 3.12z"
                    fill="#545466"
                  />
                  <path
                    d="M367.8 338.3c0 2-.7 3.45-1.83 4.14l-3.62 2.09c-1.17.66-.42-.84-2.21-1.87a14.39 14.39 0 01-6.53-11.25c0-2.05-1.89-2.07-.73-2.75l3.84-2.12c1.18-.64 2.78-.52 4.55.5a14.37 14.37 0 016.53 11.26z"
                    fill="#474756"
                  />
                  <path
                    d="M364 340.44c0 4.14-2.92 5.8-6.52 3.72a14.36 14.36 0 01-6.48-11.25c0-4.14 2.92-5.81 6.53-3.72a14.37 14.37 0 016.47 11.25z"
                    fill="#545466"
                  />
                  <ellipse
                    cx={357.44}
                    cy={337}
                    rx={3.43}
                    ry={5.95}
                    transform="rotate(-30.31 357.48 337.016)"
                    fill="url(#prefix__linear-gradient-391)"
                  />
                  <path
                    d="M358.94 340.87a9.3 9.3 0 01-4.21-7.27 3.75 3.75 0 01.49-2c-1.19.16-2 1.22-2 2.95a9.33 9.33 0 004.21 7.28c1.61.93 3 .7 3.72-.42a3.55 3.55 0 01-2.21-.54z"
                    fill="url(#prefix__linear-gradient-392)"
                  />
                  <path
                    d="M360.37 339.06c0 1.65-1.17 2.31-2.6 1.48a5.72 5.72 0 01-2.61-4.48c0-1.65 1.17-2.32 2.61-1.49a5.75 5.75 0 012.6 4.49z"
                    style={{
                      mixBlendMode: "multiply",
                    }}
                    fill="url(#prefix__linear-gradient-393)"
                  />
                  <path
                    d="M360.16 338.11c0 1.4-1 2-2.21 1.26a4.86 4.86 0 01-2.2-3.8c0-1.4 1-2 2.2-1.26a4.87 4.87 0 012.21 3.8z"
                    fill="url(#prefix__linear-gradient-394)"
                  />
                  <path
                    d="M359.56 338.53c0 1.4-1 2-2.21 1.26a4.89 4.89 0 01-2.2-3.8c0-1.4 1-2 2.2-1.26a4.84 4.84 0 012.21 3.8z"
                    fill="#e7f1f7"
                  />
                  <path
                    d="M367.74 338.28c0 2-.7 3.47-1.84 4.17l-3.48 2c-1.19.67-.43-.84-2.23-1.88a14.47 14.47 0 01-6.56-11.32c0-2.05-1.9-2.07-.74-2.76l3.7-2.05c1.18-.64 2.8-.52 4.58.51a14.45 14.45 0 016.57 11.33z"
                    fill="#4c4c5e"
                  />
                  <path
                    d="M364.1 340.35c0 4.16-2.94 5.83-6.57 3.74a14.47 14.47 0 01-6.53-11.32c0-4.16 2.94-5.83 6.56-3.74a14.45 14.45 0 016.54 11.32z"
                    fill="#474756"
                  />
                  <path
                    d="M362.21 339.26c0 3-2.09 4.16-4.68 2.67a10.33 10.33 0 01-4.67-8.07c0-3 2.09-4.16 4.67-2.67a10.3 10.3 0 014.68 8.07z"
                    fill="#e7f1f7"
                  />
                  <path
                    d="M362.21 339.26a4.07 4.07 0 01-.59 2.27 3 3 0 01-3.27-.19 9.65 9.65 0 01-4.37-7.53c0-2 1-3.14 2.5-3.09a5.32 5.32 0 011 .47 10.3 10.3 0 014.73 8.07z"
                    fill="#e7f1f7"
                  />
                  <path
                    d="M354.86 330.61a3.28 3.28 0 00-1.35 3 10.31 10.31 0 004.68 8.07 3.78 3.78 0 002.67.58 3.29 3.29 0 01-3.33-.32 10.33 10.33 0 01-4.67-8.07c0-1.87.79-2.99 2-3.26z"
                    fill="#474756"
                  />
                  <path
                    d="M359.31 337.29c0 .77-.54 1.09-1.22.7a2.72 2.72 0 01-1.22-2.11c0-.78.55-1.09 1.22-.7a2.67 2.67 0 011.22 2.11z"
                    fill="url(#prefix__radial-gradient-3)"
                  />
                  <path
                    d="M357.59 332.54a1.35 1.35 0 00.61 1.06c.34.19.61 0 .61-.35a1.35 1.35 0 00-.61-1.06c-.34-.19-.61-.04-.61.35zm0 7.16a1.32 1.32 0 00.61 1.05c.34.2.61 0 .61-.35a1.34 1.34 0 00-.61-1c-.34-.24-.61-.09-.61.3zm-1.16-7.28c-.24-.41-.63-.63-.87-.5s-.24.58 0 1 .63.63.87.49.24-.58 0-.99zm3.54 8.1c.24.41.63.64.87.5s.24-.58 0-1-.63-.64-.87-.5-.24.59.03 1zm-5.5-6.2a1.32 1.32 0 00.61 1.05c.34.2.61 0 .61-.34a1.35 1.35 0 00-.61-1.06c-.34-.19-.61-.04-.61.35zm6.24 3.6a1.32 1.32 0 00.61 1.05c.34.2.61 0 .61-.34a1.35 1.35 0 00-.61-1.06c-.32-.19-.61-.04-.61.35zm-5.15.06c.24.41.63.63.87.5s.24-.58 0-1-.63-.63-.87-.5-.24.58 0 1.02zm4.41-2.52c.24.41.63.64.87.5s.24-.58 0-1-.63-.64-.87-.5-.24.59.03 1z"
                    fill="#474756"
                  />
                  <path
                    d="M360.09 337.29a1.26 1.26 0 01-.51 1.15l-.76.46c-.33.18-.12-.24-.61-.52a4 4 0 01-1.81-3.12c0-.57-.53-.57-.2-.76l.8-.5a1.3 1.3 0 011.27.13 4 4 0 011.82 3.16z"
                    fill="#545466"
                  />
                  <path
                    d="M359.28 337.76c0 1.15-.81 1.61-1.81 1a4 4 0 01-1.8-3.12c0-1.14.81-1.6 1.8-1a4 4 0 011.81 3.12z"
                    fill="#545466"
                  />
                  <g>
                    <path
                      fill="#9aa0a6"
                      d="M392.31 347.89v6.23l-21.01-12.19v-6.2l21.01 12.16z"
                    />
                    <path
                      fill="#9aa0a6"
                      d="M392.3 347.89v6.23l5.91-3.36v-6.24l-5.91 3.37z"
                    />
                    <path
                      fill="url(#prefix__linear-gradient-395)"
                      d="M398.21 344.52l-5.91 3.37-21-12.16 5.9-3.37 21.01 12.16z"
                    />
                  </g>
                  <g>
                    <path
                      fill="#8c9399"
                      d="M332.43 312.67v7.93l-.77-.62v-7.91l.77.6zM332.43 312.67v7.93l18.9-10.62v-7.94l-18.9 10.63z"
                    />
                    <path
                      fill="#e7f1f7"
                      d="M351.33 302.04l-18.9 10.63-.77-.6 18.9-10.63.77.6z"
                    />
                  </g>
                  <path
                    fill="#c5d4dd"
                    d="M367.35 332.45v11.81l-2.1-1.21v-9.4l-28.65-16.54v9.4l-2.1-1.22v-11.81l32.85 18.97z"
                  />
                  <path
                    fill="#b4c4cc"
                    d="M367.37 332.47v11.82l2.04-1.15v-11.89l-2.04 1.22z"
                  />
                  <g>
                    <path
                      fill="#b4c4cc"
                      d="M388.84 353.09l-1.07.63-17.44-10.05 1.09-.61 17.42 10.03z"
                    />
                    <path
                      fill="#b4c4cc"
                      d="M370.31 337.29v6.39l1.11-.62v-6.43l-1.11.66z"
                    />
                    <path
                      d="M368.73 335.53v9l20.63 12v-9.1zm1.6 2.78l17.42 10v5.38l-17.42-10.1z"
                      fill="#c5d4dd"
                    />
                    <path
                      fill="#b4c4cc"
                      d="M389.35 347.41v9.1l1.35-.69v-9.15l-1.35.74zM390.7 346.67l-1.35.74-20.62-11.88 1.36-.73 20.61 11.87z"
                    />
                  </g>
                  <g>
                    <path
                      d="M409 362.28c0 2-.69 3.45-1.83 4.14l-3.61 2.1c-1.18.66-.43-.84-2.22-1.87a14.4 14.4 0 01-6.52-11.26c0-2-1.89-2.06-.74-2.74l3.84-2.13c1.18-.64 2.79-.52 4.56.51a14.37 14.37 0 016.52 11.25z"
                      fill="#474756"
                    />
                    <path
                      d="M405.25 364.42c0 4.14-2.92 5.81-6.52 3.73a14.38 14.38 0 01-6.53-11.26c0-4.13 2.92-5.8 6.53-3.72a14.38 14.38 0 016.52 11.25z"
                      fill="#545466"
                    />
                    <path
                      d="M398.68 356.14c-2.33-1.34-4.22-.26-4.22 2.41a9.28 9.28 0 004.22 7.27c2.32 1.35 4.21.27 4.21-2.4a9.33 9.33 0 00-4.21-7.28z"
                      fill="#b4c4cc"
                    />
                    <path
                      d="M400.79 362.52c0 1.39-1 2-2.2 1.25a4.84 4.84 0 01-2.21-3.8c0-1.39 1-2 2.21-1.26a4.89 4.89 0 012.2 3.81z"
                      fill="#e7f1f7"
                    />
                    <path
                      d="M408.77 362.16c0 2-.7 3.47-1.84 4.17l-3.47 2c-1.19.66-.43-.84-2.23-1.88a14.44 14.44 0 01-6.56-11.32c0-2.06-1.9-2.07-.74-2.76l3.7-2.05c1.18-.64 2.8-.52 4.58.51a14.44 14.44 0 016.56 11.33z"
                      fill="#4c4c5e"
                    />
                    <path
                      d="M405.13 364.23c0 4.16-2.93 5.83-6.56 3.74a14.47 14.47 0 01-6.57-11.32c0-4.16 2.94-5.84 6.56-3.74a14.44 14.44 0 016.57 11.32z"
                      fill="#474756"
                    />
                    <path
                      d="M403.25 363.14c0 3-2.1 4.15-4.68 2.66a10.31 10.31 0 01-4.68-8.06c0-3 2.1-4.16 4.68-2.67a10.31 10.31 0 014.68 8.07z"
                      fill="#e7f1f7"
                    />
                    <path
                      d="M403.25 363.14a4.07 4.07 0 01-.59 2.27 3 3 0 01-3.28-.2 9.61 9.61 0 01-4.36-7.52c0-2 1-3.14 2.49-3.09a5.39 5.39 0 011.06.47 10.31 10.31 0 014.68 8.07z"
                      fill="#e7f1f7"
                    />
                    <path
                      d="M395.9 354.49a3.25 3.25 0 00-1.35 3 10.28 10.28 0 004.68 8.07 3.78 3.78 0 002.67.58 3.29 3.29 0 01-3.33-.33 10.31 10.31 0 01-4.68-8.06c0-1.84.8-2.99 2.01-3.26z"
                      fill="#474756"
                    />
                    <path
                      d="M400.35 361.17c0 .77-.55 1.09-1.22.69a2.68 2.68 0 01-1.23-2.11c0-.77.55-1.08 1.23-.69a2.7 2.7 0 011.22 2.11z"
                      fill="url(#prefix__radial-gradient-4)"
                    />
                    <path
                      d="M398.63 356.42a1.32 1.32 0 00.61 1.05c.33.2.61 0 .61-.34a1.38 1.38 0 00-.61-1.06c-.34-.19-.61-.07-.61.35zm0 7.16a1.34 1.34 0 00.61 1.05c.33.2.61 0 .61-.35a1.35 1.35 0 00-.61-1c-.34-.28-.61-.09-.61.3zm-1.17-7.28c-.23-.41-.62-.63-.86-.5s-.24.58 0 1 .63.64.86.5.24-.59 0-1zm3.55 8.1c.24.41.63.64.86.5s.24-.58 0-1-.62-.64-.86-.5-.24.6-.01 1zm-5.5-6.2a1.34 1.34 0 00.61 1.05c.34.2.61 0 .61-.35a1.34 1.34 0 00-.61-1c-.34-.25-.61-.09-.61.3zm6.23 3.6a1.33 1.33 0 00.62 1.05c.33.2.61 0 .61-.35a1.36 1.36 0 00-.61-1.05c-.36-.19-.62-.04-.62.35zm-5.14.05c.24.42.63.64.86.5s.24-.58 0-1-.62-.63-.86-.5-.24.59 0 1zm4.41-2.51c.24.41.63.63.86.5s.24-.58 0-1-.62-.64-.86-.5-.24.59-.01 1z"
                      fill="#474756"
                    />
                    <path
                      d="M401.13 361.17a1.28 1.28 0 01-.51 1.15l-.76.45c-.33.19-.12-.23-.62-.51a4 4 0 01-1.8-3.12c0-.57-.53-.57-.21-.76l.82-.46a1.27 1.27 0 011.27.13 4 4 0 011.81 3.12z"
                      fill="#545466"
                    />
                    <path
                      d="M400.32 361.64c0 1.15-.81 1.61-1.81 1a4 4 0 01-1.81-3.12c0-1.14.81-1.61 1.81-1a4 4 0 011.81 3.12z"
                      fill="#545466"
                    />
                  </g>
                  <g>
                    <path
                      fill="#cfdee8"
                      d="M432.76 372.65v9.09l-27.22-15.72v-9.01l27.22 15.64z"
                    />
                    <path
                      style={{
                        mixBlendMode: "multiply",
                      }}
                      fill="#e7f1f7"
                      d="M413.29 361.53v8.76l-.43-.23v-8.79l.43.26z"
                    />
                    <path
                      fill="#e7f1f7"
                      d="M432.75 372.65v9.09l21.5-12.23v-9.15l-21.5 12.29z"
                    />
                    <path
                      fill="#e7f1f7"
                      d="M454.25 360.36l-21.5 12.29-27.21-15.64 21.51-12.27 27.2 15.62z"
                    />
                  </g>
                  <g fill="#545466">
                    <path d="M429.1 366.58v3.03l-97.99-56.98v-2.94l97.99 56.89z" />
                    <path d="M429.09 366.58v3.03l26.88-15.29v-3.1l-26.88 15.36z" />
                    <path d="M455.97 351.22l-26.88 15.36-97.98-56.89L358 294.36l97.97 56.86z" />
                  </g>
                  <g>
                    <path
                      fill="#cfdee8"
                      d="M429.1 333.73v33l-97.99-56.99v-32.9l97.99 56.89z"
                    />
                    <path
                      style={{
                        mixBlendMode: "multiply",
                      }}
                      fill="#e6e7e8"
                      d="M426.78 335.06l-93.35-54.19v27.53l93.35 54.29v-27.63z"
                    />
                    <g fill="#dce8f1">
                      <path
                        style={{
                          mixBlendMode: "multiply",
                        }}
                        d="M423.81 333.73l1.22.81v27.63l-1.22-.81v-27.63zM425.09 334.43l.47-.02v27.62l-.47.02v-27.62zM419.81 331.4l1.22.81v27.63l-1.22-.81V331.4zM421.08 332.1l.47-.02v27.63l-.47.02V332.1zM415.8 329.08l1.22.81v27.62l-1.22-.81v-27.62zM417.08 329.77l.46-.02v27.63l-.46.02v-27.63zM411.8 326.75l1.22.81v27.63l-1.22-.81v-27.63zM413.07 327.45l.47-.02v27.63l-.47.01v-27.62zM407.79 324.43l1.22.8v27.63l-1.22-.81v-27.62zM409.07 325.12l.46-.02v27.63l-.46.02v-27.63zM403.79 322.1l1.22.81v27.62l-1.22-.81V322.1zM405.06 322.8l.47-.03v27.63l-.47.02V322.8zM399.78 319.77l1.22.81v27.63l-1.22-.81v-27.63zM401.06 320.47l.46-.02v27.62l-.46.02v-27.62zM395.77 317.45l1.23.8v27.63l-1.23-.81v-27.62zM397.05 318.14l.47-.02v27.63l-.47.02v-27.63zM391.77 315.12l1.22.81v27.62l-1.22-.81v-27.62zM393.05 315.82l.46-.02v27.62l-.46.02v-27.62zM387.76 312.79l1.23.81v27.63l-1.23-.81v-27.63zM389.04 313.49l.47-.02v27.63l-.47.01v-27.62zM383.76 310.47l1.22.8v27.63l-1.22-.81v-27.62zM385.04 311.16l.46-.02v27.63l-.46.02v-27.63zM379.75 308.14l1.22.81v27.62l-1.22-.81v-27.62zM381.03 308.84l.47-.02v27.62l-.47.02v-27.62z"
                      />
                      <g>
                        <path
                          style={{
                            mixBlendMode: "multiply",
                          }}
                          d="M375.75 305.81l1.22.81v27.63l-1.22-.81v-27.63zM377.02 306.51l.47-.02v27.63l-.47.01v-27.62z"
                        />
                      </g>
                      <g>
                        <path
                          style={{
                            mixBlendMode: "multiply",
                          }}
                          d="M371.74 303.49l1.22.81v27.62l-1.22-.81v-27.62zM373.02 304.18l.46-.02v27.63l-.46.02v-27.63z"
                        />
                      </g>
                      <g>
                        <path
                          style={{
                            mixBlendMode: "multiply",
                          }}
                          d="M367.74 301.16l1.22.81v27.63l-1.22-.82v-27.62zM369.01 301.86l.47-.02v27.62l-.47.02v-27.62z"
                        />
                      </g>
                      <g>
                        <path
                          style={{
                            mixBlendMode: "multiply",
                          }}
                          d="M363.73 298.83l1.22.81v27.63l-1.22-.81v-27.63zM365.01 299.53l.46-.02v27.63l-.46.01v-27.62z"
                        />
                      </g>
                      <g>
                        <path
                          style={{
                            mixBlendMode: "multiply",
                          }}
                          d="M359.73 296.51l1.22.8v27.63l-1.22-.81v-27.62zM361 297.2l.47-.02v27.63l-.47.02V297.2z"
                        />
                      </g>
                      <g>
                        <path
                          style={{
                            mixBlendMode: "multiply",
                          }}
                          d="M355.72 294.18l1.22.81v27.63l-1.22-.82v-27.62zM357 294.88l.46-.02v27.62l-.46.02v-27.62z"
                        />
                      </g>
                      <g>
                        <path
                          style={{
                            mixBlendMode: "multiply",
                          }}
                          d="M351.71 291.85l1.23.81v27.63l-1.23-.81v-27.63zM352.99 292.55l.47-.02v27.63l-.47.01v-27.62z"
                        />
                      </g>
                      <g>
                        <path
                          style={{
                            mixBlendMode: "multiply",
                          }}
                          d="M347.71 289.53l1.22.81v27.62l-1.22-.81v-27.62zM348.99 290.22l.46-.02v27.63l-.46.02v-27.63z"
                        />
                      </g>
                      <g>
                        <path
                          style={{
                            mixBlendMode: "multiply",
                          }}
                          d="M343.7 287.2l1.23.81v27.62l-1.23-.81V287.2zM344.98 287.9l.47-.02v27.62l-.47.02V287.9z"
                        />
                      </g>
                      <g>
                        <path
                          style={{
                            mixBlendMode: "multiply",
                          }}
                          d="M339.7 284.87l1.22.81v27.63l-1.22-.81v-27.63zM340.98 285.57l.46-.02v27.63l-.46.01v-27.62z"
                        />
                      </g>
                      <g>
                        <path
                          style={{
                            mixBlendMode: "multiply",
                          }}
                          d="M335.69 282.55l1.22.81v27.62l-1.22-.81v-27.62zM336.97 283.25l.47-.03v27.63l-.47.02v-27.62z"
                        />
                      </g>
                    </g>
                    <path
                      fill="#dce8f1"
                      d="M429.09 333.73v33l26.88-15.3v-33.07l-26.88 15.37z"
                    />
                    <path
                      style={{
                        mixBlendMode: "multiply",
                      }}
                      fill="#e6e7e8"
                      d="M453.65 350.08v-27.71l-22.24 12.7v27.66l22.24-12.65z"
                    />
                    <path
                      fill="#e7f1f7"
                      d="M455.97 318.36l-26.88 15.37-97.98-56.89L358 261.5l97.97 56.86z"
                    />
                    <g fill="#dce8f1">
                      <path
                        style={{
                          mixBlendMode: "multiply",
                        }}
                        d="M433.67 334.23l-1.22.81v27.62l1.22-.81v-27.62zM432.39 334.92l-.46-.02v27.63l.46.02v-27.63zM437.29 332.1l-1.22.81v27.62l1.22-.81V332.1zM436.01 332.8l-.46-.02v27.62l.46.02V332.8zM440.91 329.97l-1.22.81v27.62l1.22-.8v-27.63zM439.63 330.67l-.46-.02v27.62l.46.02v-27.62z"
                      />
                      <g>
                        <path
                          style={{
                            mixBlendMode: "multiply",
                          }}
                          d="M444.53 327.84l-1.22.81v27.63l1.22-.81v-27.63zM443.25 328.54l-.46-.02v27.63l.46.01v-27.62z"
                        />
                      </g>
                      <g>
                        <path
                          style={{
                            mixBlendMode: "multiply",
                          }}
                          d="M448.15 325.71l-1.22.81v27.63l1.22-.81v-27.63zM446.87 326.41l-.46-.02v27.63l.46.02v-27.63z"
                        />
                      </g>
                      <g>
                        <path
                          style={{
                            mixBlendMode: "multiply",
                          }}
                          d="M451.77 323.59l-1.22.81v27.62l1.22-.81v-27.62zM450.49 324.28l-.46-.02v27.63l.46.02v-27.63z"
                        />
                      </g>
                    </g>
                  </g>
                  <g>
                    <path
                      d="M455.86 331.13l17.67 10.3a9.2 9.2 0 014.35 5.7l2.48 9.8a36.6 36.6 0 011.12 9v11.47l-25.2 14.27v-10.25a36.27 36.27 0 00-1.7-11l-3.21-10.17a9.15 9.15 0 00-4.2-5.2l-16.53-9.63z"
                      fill="red"
                    />
                    <path
                      d="M456.29 381.38v10.25l-13.5-7.75-1-5.95-11.12-6.61v-25.88l16.59 9.67a9.14 9.14 0 014.21 5.22l3.18 10.15a36.62 36.62 0 011.64 10.9z"
                      fill="#e50000"
                    />
                    <path
                      d="M449.91 360.81l3.18 10.19a.81.81 0 01-1.17.94l-10-5.82a2.17 2.17 0 01-1.07-1.86v-8.35a.81.81 0 011.22-.69l6.19 3.61a3.56 3.56 0 011.63 2z"
                      fill="#26262e"
                    />
                    <path
                      d="M452.32 371.73a.54.54 0 00.42-.21.49.49 0 00.07-.46l-3.18-10.16a3.29 3.29 0 00-1.5-1.85l-6.2-3.61h-.19c-.39 0-.59.19-.59.46v8.34a1.88 1.88 0 00.93 1.62l10 5.82z"
                      fill="#616173"
                    />
                    <path
                      d="M460.57 373.4v3.77a5.21 5.21 0 007.8 4.52l3.61-2.06a12.7 12.7 0 006.4-11v-5.44z"
                      fill="#e50000"
                    />
                    <path
                      d="M465.79 381a3.75 3.75 0 001.89-.51l3.61-2.06a11.34 11.34 0 005.7-9.82v-3l-15 8.64v3a3.83 3.83 0 003.8 3.75z"
                      fill="#616173"
                    />
                    <path
                      d="M475.76 373.71L464 380.5a3.94 3.94 0 00.73.32l10.44-6a10.88 10.88 0 00.59-1.11zm1-2.9L462.45 379a3.25 3.25 0 00.37.52l13.74-7.9c.08-.24.15-.53.21-.81zm.22-2.45L462 377v.17a3.31 3.31 0 000 .55l15-8.61v-.5zm-15 6.31v.74l15-8.64V366z"
                      fill="#474756"
                      opacity={0.5}
                    />
                    <path
                      d="M457.16 372a1.46 1.46 0 00.73-.2l20.45-11.6a2.49 2.49 0 001.19-2.79L477 347.36a8.78 8.78 0 00-.55-1.51.9.9 0 00-.82-.52.88.88 0 00-.44.12l-22.28 12.78a1.47 1.47 0 00-.64 1.73l3.48 11a1.49 1.49 0 001.43 1z"
                      fill="#26262e"
                    />
                    <path
                      d="M457.16 371.74a1.11 1.11 0 00.59-.16L478.2 360a2.21 2.21 0 001.05-2.47l-2.55-10.08a8.1 8.1 0 00-.53-1.45.62.62 0 00-.56-.36.59.59 0 00-.29.07L453 358.48a1.18 1.18 0 00-.52 1.4l3.48 11a1.22 1.22 0 001.2.86z"
                      fill="#616173"
                    />
                    <path
                      d="M434.45 351.73l3 1.74a1.37 1.37 0 01.68 1.18v7.91a.16.16 0 01-.16.16l-2.86-1.64a1.31 1.31 0 01-.64-1.11v-8.24z"
                      fill="#26262e"
                    />
                    <path
                      d="M437.83 354.65a1.08 1.08 0 00-.54-.93l-2.55-1.49V360a1 1 0 00.49.86l2.6 1.49z"
                      fill="#616173"
                    />
                    <path
                      style={{
                        mixBlendMode: "multiply",
                      }}
                      fill="url(#prefix__linear-gradient-396)"
                      d="M441.6 370.59l-10.96.73 11.09 6.54-.13-7.27z"
                    />
                  </g>
                  <path
                    fill="#b4c4cc"
                    d="M433.98 376.19v4.99l3.8-2.13-.25-4.98-3.55 2.12z"
                  />
                  <g>
                    <path
                      d="M450.91 386.53c0 2-.7 3.47-1.84 4.17l-3.48 2c-1.18.67-.42-.84-2.23-1.88a14.47 14.47 0 01-6.56-11.32c0-2.06-1.9-2.07-.74-2.76l3.7-2.05c1.19-.64 2.8-.52 4.59.51a14.47 14.47 0 016.56 11.33z"
                      fill="#4c4c5e"
                    />
                    <path
                      d="M447.27 388.6c0 4.16-2.94 5.83-6.56 3.74a14.45 14.45 0 01-6.57-11.34c0-4.16 2.94-5.83 6.57-3.74a14.47 14.47 0 016.56 11.34z"
                      fill="#474756"
                    />
                    <path
                      d="M445.38 387.51c0 3-2.09 4.16-4.67 2.67a10.32 10.32 0 01-4.68-8.07c0-3 2.09-4.16 4.68-2.67a10.3 10.3 0 014.67 8.07z"
                      fill="#e7f1f7"
                    />
                    <path
                      d="M445.38 387.51a4 4 0 01-.59 2.27 3 3 0 01-3.27-.19 9.65 9.65 0 01-4.37-7.53c0-2 1-3.14 2.5-3.09a5.66 5.66 0 011.06.47 10.3 10.3 0 014.67 8.07z"
                      fill="#e7f1f7"
                    />
                    <path
                      d="M438 378.86a3.27 3.27 0 00-1.35 3 10.31 10.31 0 004.68 8.07 3.8 3.8 0 002.67.58 3.27 3.27 0 01-3.32-.32 10.32 10.32 0 01-4.68-8.07c0-1.83.82-2.99 2-3.26z"
                      fill="#474756"
                    />
                    <path
                      d="M442.49 385.54c0 .77-.55 1.09-1.23.7a2.72 2.72 0 01-1.22-2.11c0-.78.55-1.09 1.22-.7a2.68 2.68 0 011.23 2.11z"
                      fill="url(#prefix__radial-gradient-5)"
                    />
                    <path
                      d="M440.76 380.79a1.35 1.35 0 00.61 1c.34.2.61 0 .61-.34a1.35 1.35 0 00-.61-1.06c-.37-.14-.61.01-.61.4zm0 7.16a1.36 1.36 0 00.61 1.05c.34.2.61 0 .61-.35a1.34 1.34 0 00-.61-1c-.37-.25-.61-.09-.61.35zm-1.16-7.28c-.24-.41-.63-.63-.86-.5s-.24.58 0 1 .62.64.86.5.24-.59 0-1zm3.55 8.1c.23.41.62.64.86.5s.24-.58 0-1-.63-.64-.86-.5-.24.59 0 1zm-5.51-6.2a1.35 1.35 0 00.61 1.05c.34.2.62 0 .62-.35a1.36 1.36 0 00-.62-1c-.33-.27-.61-.09-.61.3zm6.24 3.6a1.32 1.32 0 00.61 1.05c.34.2.61 0 .61-.34a1.35 1.35 0 00-.61-1.06c-.34-.19-.61-.04-.61.35zm-5.14.06c.23.41.62.63.86.49s.24-.58 0-1-.63-.63-.86-.5-.24.59 0 1.01zm4.41-2.52c.23.41.62.64.86.5s.24-.58 0-1-.63-.64-.86-.5-.24.59 0 1z"
                      fill="#474756"
                    />
                    <path
                      d="M443.26 385.54a1.28 1.28 0 01-.5 1.15l-.77.46c-.32.18-.11-.24-.61-.52a4 4 0 01-1.81-3.12c0-.57-.52-.57-.2-.76l.81-.46a1.3 1.3 0 011.27.13 4 4 0 011.81 3.12z"
                      fill="#545466"
                    />
                    <path
                      d="M442.45 386c0 1.15-.8 1.61-1.8 1a4 4 0 01-1.81-3.12c0-1.14.81-1.6 1.81-1a4 4 0 011.8 3.12z"
                      fill="#545466"
                    />
                  </g>
                  <path
                    fill="#e7f1f7"
                    d="M448.93 392.04v-7.23l-4.71-8.11-6.62-3.82 4-2.29 6.65 3.84 4.7 8.12v7.22l-4.02 2.27z"
                  />
                  <path
                    fill="#dce8f1"
                    d="M448.93 384.81l-4.71-8.11 4.03-2.27 4.7 8.12-4.02 2.26z"
                  />
                  <path
                    fill="#cfdee8"
                    d="M447.82 391.44v-6.33l-4.41-7.6-5.84-3.37-3.59 2.05v4.99l-1.11-.64v-5l4.7-2.68 6.65 3.84 4.71 8.11v7.27l-1.11-.64z"
                  />
                  <g>
                    <path
                      d="M483.37 374.93l-25.21 15a4 4 0 01-4 0l-4.72-2.64v4.29l4.75 2.68a4 4 0 004 0l25.15-14.44z"
                      fill="#cfdee8"
                    />
                    <path
                      d="M482.94 375.75l-24.78 14.14a4 4 0 01-4 0l-4.72-2.64 1.29-.74 3.41 1.93a4 4 0 004 0L481.46 375v-1.71l1.52.93a.88.88 0 01-.04 1.53z"
                      fill="#e7f1f7"
                    />
                    <g
                      style={{
                        mixBlendMode: "color-dodge",
                      }}
                    >
                      <path
                        fill="url(#prefix__radial-gradient-6)"
                        d="M481.49 374.73l-.03.02-.01-1.44.04.01v1.41z"
                      />
                      <path
                        d="M449.75 387.1l4.47 2.51a4 4 0 004 0L483 375.46a.84.84 0 00.41-.52.87.87 0 01-.44.81l-24.78 14.14a4 4 0 01-4 0l-4.72-2.64z"
                        fill="url(#prefix__radial-gradient-7)"
                      />
                    </g>
                  </g>
                  <g>
                    <path
                      d="M430.6 337.79l24.8-14.23 9.35 5.62a13.15 13.15 0 016.53 11.36l-24.78 14.07z"
                      fill="#ff4a4a"
                    />
                    <path
                      d="M446.53 354.59l-15.95-9.36v-7.49l9.42 5.49a13.15 13.15 0 016.53 11.36z"
                      fill="#e50000"
                    />
                  </g>
                  <path
                    d="M461.94 383.65l-4.7 2.65a.66.66 0 01-1-.57v-2.05a1.76 1.76 0 01.95-1.56l1.47-.78a1.78 1.78 0 011.87.14l1.46 1.07a.66.66 0 01-.05 1.1zM481.49 371.12v1.7a.64.64 0 01-.34.56l-2 1.05a.48.48 0 01-.67-.6l.82-2.22a1.35 1.35 0 01.67-.74l.67-.32a.63.63 0 01.85.57z"
                    style={{
                      mixBlendMode: "multiply",
                    }}
                    fill="#e7f1f7"
                  />
                  <path
                    d="M461.94 383.3l-4.7 2.65a.66.66 0 01-1-.57v-2.05a1.76 1.76 0 01.95-1.56l1.47-.78a1.78 1.78 0 011.87.14l1.47 1.07a.66.66 0 01-.06 1.1zM481.49 370.85v1.7a.64.64 0 01-.34.56l-2 1.05a.48.48 0 01-.67-.6l.82-2.22a1.35 1.35 0 01.67-.74l.67-.32a.63.63 0 01.85.57z"
                    fill="#ffc950"
                  />
                  <path
                    d="M461.54 388.86l-3.53 2 1 .69a1.62 1.62 0 001.71.05l3.64-2.13-1.32-.67a1.6 1.6 0 00-1.5.06zM482.51 377l-3.79 2.17a1.62 1.62 0 00-.7.81l-.91 2.33 4-2.33a1.59 1.59 0 00.71-.88zM476.28 383.81v-.8a1.11 1.11 0 00-1.66-1l-7.24 4.17a3.62 3.62 0 00-1.82 3.14v.68z"
                    style={{
                      mixBlendMode: "multiply",
                    }}
                    fill="#e7f1f7"
                  />
                  <path
                    fill="#e7f1f7"
                    d="M467.6 386.85v1.93l7-3.95v-1.98l-7 4z"
                  />
                  <path
                    d="M469.68 380.39c-5.38 2.86-9.28 6.05-8.7 7.13s5.39-.37 10.77-3.24 9.28-6 8.71-7.12-5.4.37-10.78 3.23z"
                    style={{
                      mixBlendMode: "color-dodge",
                    }}
                    fill="url(#prefix__radial-gradient-8)"
                  />
                </g>
                <g id="prefix__truck3">
                  <path
                    fill="#b4c4cc"
                    d="M532 424v11.82l2.04-1.14v-11.89L532 424z"
                  />
                  <path
                    d="M549.21 439.36c0 2-.69 3.45-1.83 4.14l-3.61 2.09c-1.18.66-.43-.83-2.22-1.87a14.38 14.38 0 01-6.55-11.25c0-2.05-1.89-2.06-.73-2.75l3.83-2.12c1.18-.64 2.79-.52 4.56.5a14.38 14.38 0 016.55 11.26z"
                    fill="#474756"
                  />
                  <path
                    d="M545.43 441.5c0 4.14-2.92 5.8-6.52 3.72a14.39 14.39 0 01-6.53-11.22c0-4.14 2.93-5.8 6.53-3.72a14.38 14.38 0 016.52 11.22z"
                    fill="#545466"
                  />
                  <path
                    d="M538.86 433.22c-2.33-1.34-4.22-.26-4.22 2.41a9.28 9.28 0 004.22 7.27c2.32 1.34 4.21.27 4.21-2.4a9.33 9.33 0 00-4.21-7.28z"
                    fill="url(#prefix__linear-gradient-397)"
                  />
                  <path
                    d="M540.36 441.94a9.32 9.32 0 01-4.22-7.28 3.66 3.66 0 01.5-2c-1.2.17-2 1.22-2 3a9.28 9.28 0 004.22 7.27c1.61.93 3 .7 3.72-.41a3.58 3.58 0 01-2.22-.58z"
                    fill="url(#prefix__linear-gradient-398)"
                  />
                  <path
                    d="M541.78 440.12c0 1.65-1.16 2.32-2.6 1.49a5.73 5.73 0 01-2.6-4.49c0-1.65 1.16-2.31 2.6-1.48a5.72 5.72 0 012.6 4.48z"
                    style={{
                      mixBlendMode: "multiply",
                    }}
                    fill="url(#prefix__linear-gradient-399)"
                  />
                  <path
                    d="M541.57 439.18c0 1.39-1 2-2.2 1.25a4.83 4.83 0 01-2.2-3.8c0-1.39 1-1.95 2.2-1.25a4.83 4.83 0 012.2 3.8z"
                    fill="url(#prefix__linear-gradient-400)"
                  />
                  <path
                    d="M541 439.59c0 1.4-1 2-2.2 1.26a4.83 4.83 0 01-2.2-3.8c0-1.4 1-2 2.2-1.26a4.86 4.86 0 012.2 3.8z"
                    fill="#e7f1f7"
                  />
                  <path
                    d="M549 439.33c0 2-.7 3.47-1.84 4.17l-3.48 2c-1.18.66-.42-.85-2.22-1.89a14.45 14.45 0 01-6.57-11.32c0-2.05-1.9-2.07-.73-2.76l3.69-2c1.19-.64 2.8-.53 4.59.5a14.48 14.48 0 016.56 11.3z"
                    fill="#4c4c5e"
                  />
                  <path
                    d="M545.33 441.4c0 4.16-2.94 5.84-6.56 3.74a14.45 14.45 0 01-6.57-11.32c0-4.16 2.94-5.83 6.57-3.74a14.47 14.47 0 016.56 11.32z"
                    fill="#474756"
                  />
                  <path
                    d="M543.44 440.31c0 3-2.09 4.16-4.67 2.67a10.28 10.28 0 01-4.68-8.07c0-3 2.09-4.16 4.68-2.66a10.3 10.3 0 014.67 8.06z"
                    fill="#e7f1f7"
                  />
                  <path
                    d="M543.44 440.31a4 4 0 01-.59 2.27 3 3 0 01-3.27-.19 9.62 9.62 0 01-4.37-7.53c0-2 1-3.13 2.5-3.09a5.74 5.74 0 011.06.48 10.3 10.3 0 014.67 8.06z"
                    fill="#e7f1f7"
                  />
                  <path
                    d="M536.09 431.67a3.25 3.25 0 00-1.34 3 10.3 10.3 0 004.67 8.06 3.75 3.75 0 002.67.58 3.27 3.27 0 01-3.32-.32 10.28 10.28 0 01-4.68-8.07c0-1.83.79-2.98 2-3.25z"
                    fill="#474756"
                  />
                  <path
                    d="M540.55 438.34c0 .78-.55 1.09-1.23.7a2.72 2.72 0 01-1.22-2.11c0-.78.55-1.09 1.22-.7a2.7 2.7 0 011.23 2.11z"
                    fill="url(#prefix__radial-gradient-9)"
                  />
                  <path
                    d="M538.82 433.59a1.38 1.38 0 00.61 1.06c.34.19.61 0 .61-.35a1.32 1.32 0 00-.61-1.05c-.33-.2-.61-.04-.61.34zm0 7.16a1.35 1.35 0 00.61 1.05c.34.2.61 0 .61-.34a1.35 1.35 0 00-.61-1.06c-.33-.19-.61-.04-.61.35zm-1.16-7.27c-.24-.42-.63-.64-.86-.5s-.24.58 0 1 .62.63.86.5.24-.59 0-1zm3.55 8.09c.23.42.62.64.86.5s.24-.58 0-1-.63-.63-.86-.5-.21.59 0 1zm-5.51-6.2a1.38 1.38 0 00.61 1.06c.34.19.62 0 .62-.35a1.36 1.36 0 00-.62-1.06c-.31-.19-.61-.02-.61.35zm6.24 3.6a1.35 1.35 0 00.61 1.06c.34.19.61 0 .61-.35a1.35 1.35 0 00-.61-1.06c-.34-.19-.61-.03-.61.38zm-5.14.06c.23.41.62.63.86.5s.24-.58 0-1-.63-.64-.86-.5-.24.59 0 .97zm4.41-2.52c.23.42.62.64.86.5s.24-.58 0-1-.63-.63-.86-.5-.21.59 0 1z"
                    fill="#474756"
                  />
                  <path
                    d="M541.32 438.34a1.28 1.28 0 01-.5 1.15l-.77.46c-.32.18-.11-.23-.61-.52a4 4 0 01-1.81-3.12c0-.57-.52-.57-.2-.76l.81-.46a1.3 1.3 0 011.27.13 4 4 0 011.81 3.12z"
                    fill="#545466"
                  />
                  <path
                    d="M540.52 438.81c0 1.15-.81 1.61-1.81 1a4 4 0 01-1.81-3.12c0-1.15.81-1.61 1.81-1a4 4 0 011.81 3.12z"
                    fill="#545466"
                  />
                  <path
                    d="M563.21 447.61c0 2-.7 3.45-1.83 4.14l-3.62 2.09c-1.17.66-.42-.84-2.21-1.87a14.39 14.39 0 01-6.55-11.25c0-2.05-1.89-2.07-.73-2.75l3.84-2.12c1.18-.64 2.78-.52 4.55.5a14.37 14.37 0 016.55 11.26z"
                    fill="#474756"
                  />
                  <path
                    d="M559.43 449.75c0 4.14-2.92 5.8-6.52 3.72a14.36 14.36 0 01-6.53-11.25c0-4.14 2.92-5.81 6.53-3.72a14.37 14.37 0 016.52 11.25z"
                    fill="#545466"
                  />
                  <ellipse
                    cx={552.85}
                    cy={446.31}
                    rx={3.43}
                    ry={5.95}
                    transform="rotate(-30.31 552.904 446.34)"
                    fill="url(#prefix__linear-gradient-401)"
                  />
                  <path
                    d="M554.35 450.18a9.3 9.3 0 01-4.21-7.27 3.75 3.75 0 01.49-2c-1.19.16-2 1.22-2 2.95a9.32 9.32 0 004.21 7.28c1.61.93 3 .7 3.72-.42a3.55 3.55 0 01-2.21-.54z"
                    fill="url(#prefix__linear-gradient-402)"
                  />
                  <path
                    d="M555.78 448.37c0 1.65-1.17 2.31-2.6 1.48a5.69 5.69 0 01-2.6-4.48c0-1.65 1.16-2.32 2.6-1.49a5.75 5.75 0 012.6 4.49z"
                    style={{
                      mixBlendMode: "multiply",
                    }}
                    fill="url(#prefix__linear-gradient-403)"
                  />
                  <path
                    d="M555.57 447.42c0 1.4-1 2-2.21 1.26a4.86 4.86 0 01-2.2-3.8c0-1.4 1-2 2.2-1.26a4.87 4.87 0 012.21 3.8z"
                    fill="url(#prefix__linear-gradient-404)"
                  />
                  <path
                    d="M555 447.84c0 1.4-1 2-2.21 1.26a4.89 4.89 0 01-2.2-3.8c0-1.4 1-2 2.2-1.26a4.84 4.84 0 012.21 3.8z"
                    fill="#e7f1f7"
                  />
                  <path
                    d="M563.15 447.59c0 2-.7 3.47-1.84 4.17l-3.48 2c-1.18.67-.43-.84-2.23-1.88a14.47 14.47 0 01-6.6-11.31c0-2.05-1.9-2.07-.74-2.76l3.7-2.05c1.18-.64 2.8-.52 4.58.51a14.45 14.45 0 016.61 11.32z"
                    fill="#4c4c5e"
                  />
                  <path
                    d="M559.51 449.66c0 4.16-2.94 5.83-6.57 3.74a14.47 14.47 0 01-6.56-11.32c0-4.16 2.94-5.83 6.56-3.74a14.45 14.45 0 016.57 11.32z"
                    fill="#474756"
                  />
                  <path
                    d="M557.62 448.57c0 3-2.09 4.16-4.68 2.67a10.33 10.33 0 01-4.67-8.07c0-3 2.09-4.16 4.67-2.67a10.3 10.3 0 014.68 8.07z"
                    fill="#e7f1f7"
                  />
                  <path
                    d="M557.62 448.57a4.07 4.07 0 01-.59 2.27 3 3 0 01-3.27-.19 9.65 9.65 0 01-4.37-7.53c0-2 1-3.14 2.5-3.09a5.32 5.32 0 011.05.47 10.3 10.3 0 014.68 8.07z"
                    fill="#e7f1f7"
                  />
                  <path
                    d="M550.27 439.92a3.28 3.28 0 00-1.35 3 10.31 10.31 0 004.68 8.08 3.78 3.78 0 002.67.58 3.29 3.29 0 01-3.33-.32 10.33 10.33 0 01-4.67-8.07c0-1.84.79-3 2-3.27z"
                    fill="#474756"
                  />
                  <path
                    d="M554.73 446.6c0 .77-.55 1.09-1.23.7a2.72 2.72 0 01-1.22-2.11c0-.78.55-1.09 1.22-.7a2.68 2.68 0 011.23 2.11z"
                    fill="url(#prefix__radial-gradient-10)"
                  />
                  <path
                    d="M553 441.85a1.35 1.35 0 00.61 1.06c.34.19.61 0 .61-.35a1.35 1.35 0 00-.61-1.06c-.34-.19-.61-.04-.61.35zm0 7.16a1.32 1.32 0 00.61 1.05c.34.2.61 0 .61-.35a1.34 1.34 0 00-.61-1c-.34-.24-.61-.09-.61.29zm-1.16-7.28c-.24-.41-.63-.63-.87-.5s-.24.58 0 1 .63.63.87.49.24-.58 0-.99zm3.54 8.1c.24.41.63.64.87.5s.24-.58 0-1-.63-.64-.87-.5-.24.59 0 1zm-5.5-6.2a1.32 1.32 0 00.61 1.05c.34.2.61 0 .61-.34a1.35 1.35 0 00-.61-1.06c-.34-.19-.61-.04-.61.35zm6.24 3.6a1.32 1.32 0 00.61 1c.34.2.61 0 .61-.34a1.35 1.35 0 00-.61-1.06c-.34-.14-.61.01-.61.4zm-5.15.06c.24.41.63.63.87.5s.24-.58 0-1-.63-.63-.87-.49-.24.57.03.99zm4.41-2.52c.24.41.63.64.87.5s.24-.58 0-1-.63-.64-.87-.5-.24.59 0 1z"
                    fill="#474756"
                  />
                  <path
                    d="M555.5 446.6a1.26 1.26 0 01-.51 1.15l-.76.46c-.33.18-.12-.24-.61-.52a4 4 0 01-1.81-3.12c0-.57-.53-.57-.2-.76l.81-.46a1.3 1.3 0 011.27.13 4 4 0 011.81 3.12z"
                    fill="#545466"
                  />
                  <path
                    d="M554.69 447.07c0 1.15-.81 1.61-1.81 1a4 4 0 01-1.8-3.12c0-1.14.81-1.6 1.8-1a4 4 0 011.81 3.12z"
                    fill="#545466"
                  />
                  <g>
                    <path
                      fill="#9aa0a6"
                      d="M587.72 457.2v6.23l-21.01-12.19v-6.2l21.01 12.16zM587.72 457.2v6.23l5.9-3.36v-6.24l-5.9 3.37z"
                    />
                    <path
                      fill="url(#prefix__linear-gradient-405)"
                      d="M593.62 453.83l-5.9 3.37-21.01-12.16 5.9-3.37 21.01 12.16z"
                    />
                  </g>
                  <g>
                    <path
                      fill="#8c9399"
                      d="M527.84 421.98v7.93l-.77-.62v-7.91l.77.6zM527.84 421.98v7.93l18.91-10.62v-7.94l-18.91 10.63z"
                    />
                    <path
                      fill="#e7f1f7"
                      d="M546.75 411.35l-18.91 10.63-.77-.6 18.9-10.63.78.6z"
                    />
                  </g>
                  <path
                    fill="#c5d4dd"
                    d="M562.76 441.76v11.81l-2.11-1.21v-9.4l-28.64-16.54v9.4l-2.1-1.22v-11.81l32.85 18.97z"
                  />
                  <path
                    fill="#b4c4cc"
                    d="M562.78 441.78v11.82l2.04-1.15v-11.89l-2.04 1.22z"
                  />
                  <g>
                    <path
                      fill="#b4c4cc"
                      d="M584.25 462.4l-1.07.63-17.44-10.05 1.09-.61 17.42 10.03z"
                    />
                    <path
                      fill="#b4c4cc"
                      d="M565.72 446.6v6.39l1.11-.61v-6.44l-1.11.66z"
                    />
                    <path
                      d="M564.14 444.84v9l20.63 12v-9.1zm1.6 2.78l17.42 10V463l-17.42-10.1z"
                      fill="#c5d4dd"
                    />
                    <path
                      fill="#b4c4cc"
                      d="M584.76 456.72v9.1l1.35-.69v-9.15l-1.35.74zM586.11 455.98l-1.35.74-20.62-11.88 1.36-.73 20.61 11.87z"
                    />
                  </g>
                  <g>
                    <path
                      d="M604.44 471.59c0 2-.69 3.45-1.83 4.14l-3.61 2.1c-1.18.66-.43-.84-2.22-1.87a14.4 14.4 0 01-6.52-11.26c0-2-1.89-2.06-.74-2.74l3.84-2.13c1.18-.64 2.79-.52 4.56.51a14.37 14.37 0 016.52 11.25z"
                      fill="#474756"
                    />
                    <path
                      d="M600.66 473.73c0 4.14-2.92 5.81-6.52 3.73a14.41 14.41 0 01-6.53-11.26c0-4.13 2.93-5.8 6.53-3.72a14.38 14.38 0 016.52 11.25z"
                      fill="#545466"
                    />
                    <path
                      d="M594.09 465.45c-2.33-1.34-4.22-.26-4.22 2.41a9.28 9.28 0 004.22 7.27c2.32 1.35 4.21.27 4.21-2.4a9.33 9.33 0 00-4.21-7.28z"
                      fill="#b4c4cc"
                    />
                    <path
                      d="M596.2 471.83c0 1.39-1 1.95-2.2 1.25a4.84 4.84 0 01-2.21-3.8c0-1.39 1-2 2.21-1.26a4.89 4.89 0 012.2 3.81z"
                      fill="#e7f1f7"
                    />
                    <path
                      d="M604.18 471.47c0 2-.7 3.47-1.84 4.17l-3.47 2c-1.19.66-.43-.84-2.23-1.88a14.47 14.47 0 01-6.56-11.32c0-2.06-1.9-2.07-.74-2.76l3.7-2.05c1.18-.64 2.8-.52 4.58.51a14.44 14.44 0 016.56 11.33z"
                      fill="#4c4c5e"
                    />
                    <path
                      d="M600.54 473.54c0 4.16-2.93 5.83-6.56 3.74a14.47 14.47 0 01-6.56-11.28c0-4.16 2.94-5.84 6.56-3.74a14.44 14.44 0 016.56 11.28z"
                      fill="#474756"
                    />
                    <path
                      d="M598.66 472.45c0 3-2.1 4.15-4.68 2.66a10.31 10.31 0 01-4.68-8.06c0-3 2.1-4.16 4.68-2.67a10.31 10.31 0 014.68 8.07z"
                      fill="#e7f1f7"
                    />
                    <path
                      d="M598.66 472.45a4.07 4.07 0 01-.59 2.27 3 3 0 01-3.28-.2 9.61 9.61 0 01-4.36-7.52c0-2 1-3.14 2.49-3.09a5.39 5.39 0 011.06.47 10.31 10.31 0 014.68 8.07z"
                      fill="#e7f1f7"
                    />
                    <path
                      d="M591.31 463.8a3.27 3.27 0 00-1.35 3 10.28 10.28 0 004.68 8.07 3.78 3.78 0 002.67.58 3.29 3.29 0 01-3.33-.33 10.31 10.31 0 01-4.68-8.06c0-1.84.8-2.99 2.01-3.26z"
                      fill="#474756"
                    />
                    <path
                      d="M595.76 470.48c0 .77-.55 1.09-1.22.69a2.67 2.67 0 01-1.22-2.11c0-.77.54-1.08 1.22-.69a2.7 2.7 0 011.22 2.11z"
                      fill="url(#prefix__radial-gradient-11)"
                    />
                    <path
                      d="M594 465.73a1.32 1.32 0 00.61 1c.34.2.61 0 .61-.34a1.35 1.35 0 00-.61-1.06c-.3-.14-.61.01-.61.4zm0 7.16a1.34 1.34 0 00.61 1.05c.34.2.61 0 .61-.35a1.32 1.32 0 00-.61-1c-.3-.25-.61-.09-.61.3zm-1.17-7.28c-.23-.41-.62-.63-.86-.5s-.24.58 0 1 .63.64.86.5.28-.61.04-1zm3.55 8.1c.24.41.63.64.86.5s.24-.58 0-1-.62-.64-.86-.5-.2.59.04 1zm-5.5-6.2a1.34 1.34 0 00.61 1.05c.34.2.61 0 .61-.35a1.34 1.34 0 00-.61-1c-.3-.21-.57-.09-.57.3zm6.23 3.6a1.33 1.33 0 00.62 1.05c.33.2.61 0 .61-.35a1.36 1.36 0 00-.61-1.05c-.3-.19-.58-.04-.58.35zm-5.14.05c.24.42.63.64.86.5s.24-.58 0-1-.62-.63-.86-.5-.2.59.03 1zm4.41-2.51c.24.41.63.63.86.5s.24-.58 0-1-.62-.64-.86-.5-.2.59.04 1z"
                      fill="#474756"
                    />
                    <path
                      d="M596.54 470.48a1.28 1.28 0 01-.51 1.15l-.76.45c-.33.19-.12-.23-.62-.51a4 4 0 01-1.8-3.12c0-.57-.53-.57-.21-.76l.82-.46a1.27 1.27 0 011.27.13 4 4 0 011.81 3.12z"
                      fill="#545466"
                    />
                    <path
                      d="M595.73 471c0 1.15-.81 1.61-1.81 1a4 4 0 01-1.81-3.12c0-1.14.81-1.61 1.81-1a4 4 0 011.81 3.12z"
                      fill="#545466"
                    />
                  </g>
                  <g>
                    <path
                      fill="#cfdee8"
                      d="M628.17 481.96v9.09l-27.22-15.72v-9.01l27.22 15.64z"
                    />
                    <path
                      style={{
                        mixBlendMode: "multiply",
                      }}
                      fill="#e7f1f7"
                      d="M608.7 470.84v8.76l-.44-.23v-8.79l.44.26z"
                    />
                    <path
                      fill="#e7f1f7"
                      d="M628.16 481.96v9.09l21.5-12.23v-9.15l-21.5 12.29z"
                    />
                    <path
                      fill="#e7f1f7"
                      d="M649.66 469.67l-21.5 12.29-27.21-15.64 21.51-12.27 27.2 15.62z"
                    />
                  </g>
                  <g fill="#545466">
                    <path d="M624.51 475.89v3.03l-97.99-56.98V419l97.99 56.89z" />
                    <path d="M624.5 475.89v3.03l26.88-15.29v-3.1l-26.88 15.36z" />
                    <path d="M651.38 460.53l-26.88 15.36L526.52 419l26.9-15.33 97.96 56.86z" />
                  </g>
                  <g>
                    <path
                      d="M651.27 440.44l17.67 10.3a9.2 9.2 0 014.35 5.7l2.48 9.8a36.6 36.6 0 011.12 9v11.47l-25.2 14.27v-10.2a36.29 36.29 0 00-1.7-11l-3.21-10.17a9.15 9.15 0 00-4.2-5.2l-16.53-9.63z"
                      fill="red"
                    />
                    <path
                      d="M651.7 490.69v10.25l-13.5-7.75-1-5.95-11.12-6.61v-25.88l16.59 9.67a9.14 9.14 0 014.21 5.22l3.12 10.15a36.31 36.31 0 011.7 10.9z"
                      fill="#e50000"
                    />
                    <path
                      d="M645.32 470.12l3.18 10.16a.81.81 0 01-1.17.94l-10-5.82a2.17 2.17 0 01-1.07-1.86v-8.35a.81.81 0 011.22-.69l6.19 3.61a3.56 3.56 0 011.63 2z"
                      fill="#26262e"
                    />
                    <path
                      d="M647.73 481a.53.53 0 00.42-.21.47.47 0 00.07-.46L645 470.21a3.29 3.29 0 00-1.5-1.85l-6.2-3.61h-.19c-.39 0-.59.19-.59.46v8.34a1.88 1.88 0 00.93 1.62l10 5.82z"
                      fill="#616173"
                    />
                    <path
                      d="M656 482.71v3.77a5.21 5.21 0 007.8 4.52l3.61-2.06a12.7 12.7 0 006.4-11v-5.44z"
                      fill="#e50000"
                    />
                    <path
                      d="M661.2 490.3a3.75 3.75 0 001.89-.51l3.61-2.06a11.34 11.34 0 005.7-9.82v-3l-15 8.64v3a3.83 3.83 0 003.8 3.75z"
                      fill="#616173"
                    />
                    <path
                      d="M671.17 483l-11.81 6.79a3.94 3.94 0 00.73.32l10.44-6a10.88 10.88 0 00.64-1.11zm1-2.9l-14.32 8.23a3.25 3.25 0 00.37.52L672 481c.05-.31.12-.6.18-.88zm.22-2.45l-15 8.63v.17a3.31 3.31 0 000 .55l15-8.61v-.5zm-15 6.31v.74l15-8.64v-.74z"
                      fill="#474756"
                      opacity={0.5}
                    />
                    <path
                      d="M652.57 481.34a1.46 1.46 0 00.73-.2l20.45-11.6a2.49 2.49 0 001.19-2.79l-2.55-10.08a8.78 8.78 0 00-.55-1.51.9.9 0 00-.82-.52.88.88 0 00-.44.12l-22.28 12.78a1.47 1.47 0 00-.64 1.73l3.48 11a1.49 1.49 0 001.43 1z"
                      fill="#26262e"
                    />
                    <path
                      d="M652.57 481.05a1.11 1.11 0 00.59-.16l20.45-11.6a2.23 2.23 0 001.06-2.47l-2.56-10.08a8.1 8.1 0 00-.53-1.45.62.62 0 00-.56-.36.59.59 0 00-.29.07l-22.28 12.79a1.18 1.18 0 00-.52 1.4l3.49 11a1.19 1.19 0 001.15.86z"
                      fill="#616173"
                    />
                    <path
                      d="M629.86 461l3 1.74a1.37 1.37 0 01.68 1.18v7.91a.16.16 0 01-.16.16l-2.86-1.64a1.31 1.31 0 01-.64-1.11V461z"
                      fill="#26262e"
                    />
                    <path
                      d="M633.24 464a1.08 1.08 0 00-.54-.93l-2.55-1.49v7.74a1 1 0 00.49.86l2.6 1.49z"
                      fill="#616173"
                    />
                    <path
                      style={{
                        mixBlendMode: "multiply",
                      }}
                      fill="url(#prefix__linear-gradient-406)"
                      d="M637.01 479.9l-10.96.73 11.09 6.54-.13-7.27z"
                    />
                  </g>
                  <path
                    fill="#b4c4cc"
                    d="M629.39 485.5v4.99l3.8-2.13-.25-4.98-3.55 2.12z"
                  />
                  <g>
                    <path
                      d="M646.32 495.84c0 2-.7 3.47-1.84 4.17L641 502c-1.18.67-.42-.84-2.22-1.88a14.45 14.45 0 01-6.57-11.32c0-2.06-1.9-2.07-.73-2.76l3.69-2.05c1.19-.64 2.8-.52 4.59.51a14.47 14.47 0 016.56 11.34z"
                      fill="#4c4c5e"
                    />
                    <path
                      d="M642.68 497.91c0 4.16-2.94 5.83-6.56 3.74a14.45 14.45 0 01-6.57-11.32c0-4.16 2.94-5.83 6.57-3.74a14.47 14.47 0 016.56 11.32z"
                      fill="#474756"
                    />
                    <path
                      d="M640.79 496.82c0 3-2.09 4.16-4.67 2.67a10.32 10.32 0 01-4.68-8.07c0-3 2.09-4.16 4.68-2.67a10.3 10.3 0 014.67 8.07z"
                      fill="#e7f1f7"
                    />
                    <path
                      d="M640.79 496.82a4 4 0 01-.59 2.27 3 3 0 01-3.27-.19 9.65 9.65 0 01-4.37-7.53c0-2 1-3.14 2.5-3.09a5.66 5.66 0 011.06.47 10.3 10.3 0 014.67 8.07z"
                      fill="#e7f1f7"
                    />
                    <path
                      d="M633.44 488.17a3.26 3.26 0 00-1.34 3 10.3 10.3 0 004.67 8.07 3.8 3.8 0 002.67.58 3.27 3.27 0 01-3.32-.32 10.32 10.32 0 01-4.68-8.07c0-1.83.79-2.99 2-3.26z"
                      fill="#474756"
                    />
                    <path
                      d="M637.9 494.85c0 .77-.55 1.09-1.23.7a2.72 2.72 0 01-1.22-2.11c0-.78.55-1.09 1.22-.7a2.68 2.68 0 011.23 2.11z"
                      fill="url(#prefix__radial-gradient-12)"
                    />
                    <path
                      d="M636.17 490.1a1.35 1.35 0 00.61 1c.34.2.61 0 .61-.34a1.35 1.35 0 00-.61-1.06c-.33-.14-.61.01-.61.4zm0 7.16a1.36 1.36 0 00.61 1.05c.34.2.61 0 .61-.35a1.34 1.34 0 00-.61-1c-.33-.25-.61-.09-.61.3zM635 490c-.24-.41-.63-.63-.86-.5s-.24.58 0 1 .62.64.86.5.25-.61 0-1zm3.55 8.1c.23.41.62.64.86.5s.24-.58 0-1-.63-.64-.86-.5-.23.57.01.98zm-5.51-6.2a1.35 1.35 0 00.61 1.05c.34.2.62 0 .62-.35a1.36 1.36 0 00-.62-1.05c-.32-.21-.6-.06-.6.33zm6.24 3.6a1.32 1.32 0 00.61 1c.34.2.61 0 .61-.34a1.35 1.35 0 00-.61-1.06c-.33-.16-.6-.01-.6.38zm-5.14.06c.23.41.62.63.86.49s.24-.58 0-1-.63-.63-.86-.5-.23.57.01.99zm4.41-2.52c.23.41.62.64.86.5s.24-.58 0-1-.63-.64-.86-.5-.23.57.01.96z"
                      fill="#474756"
                    />
                    <path
                      d="M638.67 494.85a1.28 1.28 0 01-.5 1.15l-.77.46c-.32.18-.11-.24-.61-.52a4 4 0 01-1.81-3.12c0-.57-.52-.57-.2-.76l.81-.46a1.32 1.32 0 011.28.13 4 4 0 011.8 3.12z"
                      fill="#545466"
                    />
                    <path
                      d="M637.87 495.32c0 1.15-.81 1.61-1.81 1a4 4 0 01-1.81-3.12c0-1.14.81-1.6 1.81-1a4 4 0 011.81 3.12z"
                      fill="#545466"
                    />
                  </g>
                  <path
                    fill="#e7f1f7"
                    d="M644.34 501.35v-7.23l-4.71-8.11-6.62-3.82 4-2.29 6.65 3.84 4.7 8.12v7.22l-4.02 2.27z"
                  />
                  <path
                    fill="#dce8f1"
                    d="M644.34 494.12l-4.71-8.11 4.03-2.27 4.7 8.12-4.02 2.26z"
                  />
                  <path
                    fill="#cfdee8"
                    d="M643.23 500.75v-6.33l-4.41-7.6-5.84-3.37-3.59 2.05v4.99l-1.11-.64v-5l4.7-2.68 6.65 3.84 4.71 8.11v7.27l-1.11-.64z"
                  />
                  <g>
                    <path
                      d="M678.78 484.24l-25.21 15a4 4 0 01-4 0l-4.72-2.64v4.29l4.75 2.68a4 4 0 004 0l25.15-14.44z"
                      fill="#cfdee8"
                    />
                    <path
                      d="M678.35 485.06l-24.78 14.14a4 4 0 01-4 0l-4.72-2.64 1.29-.74 3.41 1.93a4 4 0 004 0l23.27-13.43v-1.71l1.52.93a.88.88 0 01.01 1.52z"
                      fill="#e7f1f7"
                    />
                    <g
                      style={{
                        mixBlendMode: "color-dodge",
                      }}
                    >
                      <path
                        fill="url(#prefix__radial-gradient-13)"
                        d="M676.9 484.04l-.03.02-.01-1.44.03.02.01 1.4z"
                      />
                      <path
                        d="M645.16 496.41l4.47 2.51a4 4 0 004 0l24.78-14.14a.84.84 0 00.41-.52.87.87 0 01-.44.81l-24.81 14.13a4 4 0 01-4 0l-4.72-2.64z"
                        fill="url(#prefix__radial-gradient-14)"
                      />
                    </g>
                  </g>
                  <g>
                    <path
                      d="M626 447.1l24.8-14.23 9.35 5.62a13.15 13.15 0 016.53 11.36l-24.74 14.09z"
                      fill="#ff4a4a"
                    />
                    <path
                      d="M641.94 463.9l-16-9.36v-7.49l9.42 5.49a13.15 13.15 0 016.58 11.36z"
                      fill="#e50000"
                    />
                  </g>
                  <path
                    d="M657.35 493l-4.7 2.65a.65.65 0 01-1-.57V493a1.75 1.75 0 01.94-1.56l1.47-.78a1.78 1.78 0 011.87.14l1.46 1.07a.66.66 0 01-.04 1.13zM676.9 480.43v1.7a.64.64 0 01-.34.56l-2 1.05a.48.48 0 01-.67-.6l.82-2.22a1.35 1.35 0 01.67-.74l.67-.32a.63.63 0 01.85.57z"
                    style={{
                      mixBlendMode: "multiply",
                    }}
                    fill="#e7f1f7"
                  />
                  <path
                    d="M657.35 492.61l-4.7 2.65a.65.65 0 01-1-.57v-2.05a1.75 1.75 0 01.94-1.56l1.47-.78a1.78 1.78 0 011.87.14l1.46 1.07a.66.66 0 01-.04 1.1zM676.9 480.16v1.7a.64.64 0 01-.34.56l-2 1.05a.48.48 0 01-.67-.6l.82-2.22a1.35 1.35 0 01.67-.74l.67-.32a.63.63 0 01.85.57z"
                    fill="#ffc950"
                  />
                  <path
                    d="M657 498.17l-3.53 2 1 .69a1.62 1.62 0 001.71.05l3.64-2.13-1.32-.67a1.6 1.6 0 00-1.5.06zM677.92 486.35l-3.79 2.17a1.62 1.62 0 00-.7.81l-.91 2.33 4-2.33a1.59 1.59 0 00.71-.88zM671.69 493.12v-.8a1.11 1.11 0 00-1.66-1l-7.24 4.17a3.62 3.62 0 00-1.82 3.14v.63z"
                    style={{
                      mixBlendMode: "multiply",
                    }}
                    fill="#e7f1f7"
                  />
                  <path
                    fill="#e7f1f7"
                    d="M663.01 496.16v1.93l7-3.95v-1.99l-7 4.01z"
                  />
                  <path
                    d="M665.09 489.7c-5.38 2.86-9.28 6.05-8.7 7.13s5.39-.37 10.77-3.24 9.28-6 8.71-7.12-5.4.37-10.78 3.23z"
                    style={{
                      mixBlendMode: "color-dodge",
                    }}
                    fill="url(#prefix__radial-gradient-15)"
                  />
                </g>
                <motion.g id="prefix__truck2"
                
                variants={truckVariant}
                initial="start"
                animate={truckControls}
                
                
                >
                  <path
                    fill="#b4c4cc"
                    d="M723.66 536.08v11.82l2.04-1.14v-11.9l-2.04 1.22z"
                  />
                  <path
                    d="M740.88 551.43c0 2-.7 3.45-1.83 4.15l-3.62 2.09c-1.17.66-.42-.84-2.21-1.87a14.39 14.39 0 01-6.53-11.26c0-2-1.89-2.06-.73-2.74l3.84-2.13c1.18-.63 2.78-.51 4.56.51a14.38 14.38 0 016.52 11.25z"
                    fill="#474756"
                  />
                  <path
                    d="M737.1 553.58c0 4.13-2.92 5.8-6.52 3.72a14.37 14.37 0 01-6.53-11.3c0-4.13 2.92-5.8 6.53-3.72a14.38 14.38 0 016.52 11.3z"
                    fill="#545466"
                  />
                  <path
                    d="M730.52 545.3c-2.32-1.35-4.21-.27-4.21 2.4a9.33 9.33 0 004.21 7.28c2.33 1.34 4.22.26 4.22-2.41a9.28 9.28 0 00-4.22-7.27z"
                    fill="url(#prefix__linear-gradient-407)"
                  />
                  <path
                    d="M732 554a9.3 9.3 0 01-4.21-7.27 3.7 3.7 0 01.49-2c-1.19.16-2 1.22-2 3a9.33 9.33 0 004.21 7.28c1.61.92 3 .69 3.72-.42A3.55 3.55 0 01732 554z"
                    fill="url(#prefix__linear-gradient-408)"
                  />
                  <path
                    d="M733.45 552.2c0 1.65-1.17 2.31-2.6 1.48a5.72 5.72 0 01-2.6-4.48c0-1.65 1.16-2.32 2.6-1.49a5.75 5.75 0 012.6 4.49z"
                    style={{
                      mixBlendMode: "multiply",
                    }}
                    fill="url(#prefix__linear-gradient-409)"
                  />
                  <path
                    d="M733.24 551.25c0 1.4-1 2-2.2 1.26a4.86 4.86 0 01-2.21-3.8c0-1.4 1-2 2.21-1.26a4.88 4.88 0 012.2 3.8z"
                    fill="url(#prefix__linear-gradient-410)"
                  />
                  <path
                    d="M732.64 551.67c0 1.39-1 2-2.2 1.25a4.84 4.84 0 01-2.21-3.8c0-1.39 1-2 2.21-1.25a4.86 4.86 0 012.2 3.8z"
                    fill="#e7f1f7"
                  />
                  <path
                    d="M740.64 551.41c0 2-.71 3.47-1.85 4.17l-3.47 2c-1.19.66-.43-.84-2.23-1.88a14.47 14.47 0 01-6.56-11.32c0-2.06-1.9-2.07-.74-2.76l3.7-2c1.18-.64 2.8-.52 4.58.51a14.45 14.45 0 016.57 11.28z"
                    fill="#4c4c5e"
                  />
                  <path
                    d="M737 553.48c0 4.15-2.94 5.83-6.57 3.74a14.48 14.48 0 01-6.56-11.32c0-4.16 2.94-5.84 6.56-3.74a14.45 14.45 0 016.57 11.32z"
                    fill="#474756"
                  />
                  <path
                    d="M735.11 552.39c0 3-2.09 4.15-4.68 2.66a10.3 10.3 0 01-4.67-8.06c0-3 2.09-4.16 4.67-2.67a10.28 10.28 0 014.68 8.07z"
                    fill="#e7f1f7"
                  />
                  <path
                    d="M735.11 552.39a4.07 4.07 0 01-.59 2.27 3 3 0 01-3.27-.2 9.59 9.59 0 01-4.37-7.52c0-2 1-3.14 2.5-3.09a5.32 5.32 0 011 .47 10.28 10.28 0 014.73 8.07z"
                    fill="#e7f1f7"
                  />
                  <path
                    d="M727.76 543.74a3.27 3.27 0 00-1.35 3 10.31 10.31 0 004.68 8.07 3.78 3.78 0 002.67.58 3.32 3.32 0 01-3.33-.33 10.3 10.3 0 01-4.67-8.06c0-1.84.79-3 2-3.26z"
                    fill="#474756"
                  />
                  <path
                    d="M732.21 550.42c0 .77-.54 1.08-1.22.69a2.67 2.67 0 01-1.22-2.11c0-.77.54-1.08 1.22-.69a2.67 2.67 0 011.22 2.11z"
                    fill="url(#prefix__radial-gradient-16)"
                  />
                  <path
                    d="M730.49 545.67a1.32 1.32 0 00.61 1.05c.34.2.61 0 .61-.35a1.35 1.35 0 00-.61-1c-.34-.24-.61-.09-.61.3zm0 7.16a1.35 1.35 0 00.61 1c.34.19.61 0 .61-.35a1.32 1.32 0 00-.61-1c-.34-.2-.61-.04-.61.35zm-1.16-7.28c-.24-.41-.63-.63-.87-.5s-.24.58 0 1 .63.64.87.5.24-.55 0-1zm3.54 8.1c.24.41.63.63.87.5s.24-.58 0-1-.63-.64-.87-.5-.24.59 0 1zm-5.5-6.2a1.34 1.34 0 00.61 1c.34.2.61 0 .61-.35a1.32 1.32 0 00-.61-1c-.34-.2-.61-.04-.61.35zm6.24 3.6a1.34 1.34 0 00.61 1.05c.34.2.61 0 .61-.35a1.34 1.34 0 00-.61-1c-.34-.25-.61-.09-.61.3zm-5.15.05c.24.41.63.64.87.5s.24-.58 0-1-.63-.63-.87-.5-.24.59 0 1zm4.41-2.51c.24.41.63.63.87.5s.24-.58 0-1-.63-.64-.87-.5-.24.59 0 1z"
                    fill="#474756"
                  />
                  <path
                    d="M733 550.42a1.27 1.27 0 01-.51 1.15l-.76.45c-.33.19-.12-.23-.61-.52a4 4 0 01-1.81-3.11c0-.57-.53-.58-.21-.77l.82-.46a1.3 1.3 0 011.27.14 4 4 0 011.81 3.12z"
                    fill="#545466"
                  />
                  <path
                    d="M732.18 550.89c0 1.15-.81 1.61-1.81 1a4 4 0 01-1.8-3.12c0-1.15.8-1.61 1.8-1a4 4 0 011.81 3.12z"
                    fill="#545466"
                  />
                  <path
                    d="M754.88 559.68c0 2-.7 3.45-1.83 4.14l-3.62 2.1c-1.18.65-.42-.84-2.21-1.87a14.38 14.38 0 01-6.53-11.26c0-2-1.89-2.06-.73-2.74l3.84-2.13c1.17-.64 2.78-.52 4.55.5a14.41 14.41 0 016.53 11.26z"
                    fill="#474756"
                  />
                  <path
                    d="M751.1 561.82c0 4.14-2.92 5.81-6.53 3.72a14.37 14.37 0 01-6.52-11.25c0-4.14 2.92-5.8 6.52-3.72a14.36 14.36 0 016.53 11.25z"
                    fill="#545466"
                  />
                  <path
                    d="M744.52 553.54c-2.33-1.34-4.22-.26-4.22 2.41a9.28 9.28 0 004.22 7.27c2.33 1.35 4.22.27 4.22-2.4a9.32 9.32 0 00-4.22-7.28z"
                    fill="url(#prefix__linear-gradient-411)"
                  />
                  <path
                    d="M746 562.26a9.3 9.3 0 01-4.2-7.26 3.66 3.66 0 01.5-2c-1.2.17-2 1.22-2 3a9.28 9.28 0 004.22 7.27c1.61.93 3 .7 3.72-.41a3.53 3.53 0 01-2.24-.6z"
                    fill="url(#prefix__linear-gradient-412)"
                  />
                  <path
                    d="M747.44 560.45c0 1.64-1.16 2.31-2.6 1.48a5.75 5.75 0 01-2.6-4.49c0-1.65 1.17-2.31 2.6-1.48a5.73 5.73 0 012.6 4.49z"
                    style={{
                      mixBlendMode: "multiply",
                    }}
                    fill="url(#prefix__linear-gradient-413)"
                  />
                  <path
                    d="M747.23 559.5c0 1.4-1 2-2.2 1.26a4.86 4.86 0 01-2.2-3.8c0-1.4 1-2 2.2-1.26a4.83 4.83 0 012.2 3.8z"
                    fill="url(#prefix__linear-gradient-414)"
                  />
                  <path
                    d="M746.63 559.91c0 1.4-1 2-2.2 1.26a4.83 4.83 0 01-2.2-3.8c0-1.4 1-2 2.2-1.26a4.86 4.86 0 012.2 3.8z"
                    fill="#e7f1f7"
                  />
                  <path
                    d="M754.81 559.67c0 2-.7 3.47-1.84 4.16l-3.47 2c-1.19.66-.43-.84-2.23-1.88a14.45 14.45 0 01-6.56-11.32c0-2.06-1.91-2.08-.74-2.76l3.7-2c1.18-.64 2.8-.52 4.58.51a14.44 14.44 0 016.56 11.29z"
                    fill="#4c4c5e"
                  />
                  <path
                    d="M751.17 561.73c0 4.16-2.94 5.84-6.56 3.75a14.5 14.5 0 01-6.56-11.32c0-4.16 2.94-5.84 6.56-3.75a14.48 14.48 0 016.56 11.32z"
                    fill="#474756"
                  />
                  <path
                    d="M749.29 560.64c0 3-2.1 4.16-4.68 2.67a10.31 10.31 0 01-4.68-8.07c0-3 2.1-4.15 4.68-2.66a10.31 10.31 0 014.68 8.06z"
                    fill="#e7f1f7"
                  />
                  <path
                    d="M749.29 560.64a4.11 4.11 0 01-.59 2.28 3 3 0 01-3.28-.2 9.61 9.61 0 01-4.36-7.53c0-2 1-3.13 2.49-3.08a4.86 4.86 0 011.06.47 10.31 10.31 0 014.68 8.06z"
                    fill="#e7f1f7"
                  />
                  <path
                    d="M741.94 552a3.25 3.25 0 00-1.35 3 10.32 10.32 0 004.68 8.07 3.83 3.83 0 002.67.58 3.32 3.32 0 01-3.33-.33 10.31 10.31 0 01-4.68-8.07c0-1.83.8-2.98 2.01-3.25z"
                    fill="#474756"
                  />
                  <path
                    d="M746.39 558.67c0 .78-.55 1.09-1.22.7a2.68 2.68 0 01-1.23-2.11c0-.77.55-1.09 1.23-.7a2.72 2.72 0 011.22 2.11z"
                    fill="url(#prefix__radial-gradient-17)"
                  />
                  <path
                    d="M744.67 553.93a1.34 1.34 0 00.61 1.05c.33.2.61 0 .61-.35a1.35 1.35 0 00-.61-1c-.34-.25-.61-.09-.61.3zm0 7.15a1.35 1.35 0 00.61 1.06c.33.19.61 0 .61-.35a1.38 1.38 0 00-.61-1.06c-.34-.19-.61-.03-.61.35zm-1.17-7.27c-.23-.41-.62-.64-.86-.5s-.24.58 0 1 .63.64.86.5.24-.59 0-1zm3.55 8.1c.24.41.63.63.86.5s.24-.58 0-1-.62-.63-.86-.49-.24.58 0 .99zm-5.5-6.21a1.35 1.35 0 00.61 1.06c.34.19.61 0 .61-.35a1.32 1.32 0 00-.61-1c-.34-.25-.61-.09-.61.29zm6.23 3.61a1.36 1.36 0 00.62 1.05c.33.19.61 0 .61-.35a1.35 1.35 0 00-.61-1c-.34-.25-.62-.09-.62.3zm-5.14.05c.24.41.63.64.86.5s.24-.58 0-1-.62-.64-.86-.5-.24.64 0 1zm4.41-2.51c.24.41.63.63.86.5s.24-.58 0-1-.62-.63-.86-.49-.24.58 0 .99z"
                    fill="#474756"
                  />
                  <path
                    d="M747.17 558.68a1.26 1.26 0 01-.51 1.14l-.76.46c-.33.18-.12-.23-.62-.52a4 4 0 01-1.8-3.12c0-.56-.53-.57-.21-.76l.82-.46a1.28 1.28 0 011.27.14 4 4 0 011.81 3.12z"
                    fill="#545466"
                  />
                  <path
                    d="M746.36 559.15c0 1.14-.81 1.6-1.81 1a4 4 0 01-1.81-3.12c0-1.15.81-1.61 1.81-1a4 4 0 011.81 3.12z"
                    fill="#545466"
                  />
                  <g>
                    <path
                      fill="#9aa0a6"
                      d="M779.38 569.28v6.23l-21.01-12.19v-6.21l21.01 12.17zM779.38 569.28v6.23l5.91-3.36v-6.25l-5.91 3.38z"
                    />
                    <path
                      fill="url(#prefix__linear-gradient-415)"
                      d="M785.29 565.9l-5.91 3.38-21.01-12.17 5.91-3.37 21.01 12.16z"
                    />
                  </g>
                  <g>
                    <path
                      fill="#8c9399"
                      d="M719.51 534.05v7.94l-.78-.62v-7.91l.78.59zM719.51 534.05v7.94l18.9-10.62v-7.95l-18.9 10.63z"
                    />
                    <path
                      fill="#e7f1f7"
                      d="M738.41 523.42l-18.9 10.63-.78-.59 18.91-10.63.77.59z"
                    />
                  </g>
                  <path
                    fill="#c5d4dd"
                    d="M754.43 553.83v11.82l-2.11-1.22v-9.4l-28.64-16.54v9.4l-2.11-1.21v-11.82l32.86 18.97z"
                  />
                  <path
                    fill="#b4c4cc"
                    d="M754.44 553.85v11.82l2.04-1.14v-11.9l-2.04 1.22z"
                  />
                  <g>
                    <path
                      fill="#b4c4cc"
                      d="M775.92 574.48l-1.07.63-17.44-10.05 1.08-.62 17.43 10.04z"
                    />
                    <path
                      fill="#b4c4cc"
                      d="M757.39 558.67v6.4l1.1-.62v-6.44l-1.1.66z"
                    />
                    <path
                      d="M755.8 556.91v9l20.64 12v-9.11zm1.61 2.78l17.42 10v5.37L757.41 565z"
                      fill="#c5d4dd"
                    />
                    <path
                      fill="#b4c4cc"
                      d="M776.43 568.8v9.09l1.35-.68v-9.16l-1.35.75zM777.78 568.05l-1.35.75-20.63-11.89 1.37-.72 20.61 11.86z"
                    />
                  </g>
                  <g>
                    <path
                      d="M796.11 583.66c0 2-.7 3.46-1.83 4.15l-3.62 2.09c-1.17.66-.42-.84-2.21-1.87a14.39 14.39 0 01-6.53-11.25c0-2-1.89-2.07-.73-2.75l3.84-2.12c1.18-.64 2.78-.52 4.55.5a14.36 14.36 0 016.53 11.25z"
                      fill="#474756"
                    />
                    <path
                      d="M792.33 585.81c0 4.13-2.92 5.8-6.52 3.72a14.36 14.36 0 01-6.53-11.25c0-4.14 2.92-5.81 6.53-3.73a14.4 14.4 0 016.52 11.26z"
                      fill="#545466"
                    />
                    <path
                      d="M785.75 577.53c-2.32-1.34-4.21-.26-4.21 2.4a9.33 9.33 0 004.21 7.28c2.33 1.34 4.22.26 4.22-2.41a9.28 9.28 0 00-4.22-7.27z"
                      fill="#b4c4cc"
                    />
                    <path
                      d="M787.87 583.9c0 1.4-1 2-2.21 1.26a4.89 4.89 0 01-2.2-3.8c0-1.4 1-2 2.2-1.26a4.84 4.84 0 012.21 3.8z"
                      fill="#e7f1f7"
                    />
                    <path
                      d="M795.85 583.54c0 2-.7 3.47-1.84 4.17l-3.48 2c-1.18.66-.42-.85-2.22-1.89a14.45 14.45 0 01-6.57-11.32c0-2-1.9-2.07-.73-2.76 0 0 3.66-2 3.7-2 1.18-.64 2.8-.53 4.58.5a14.48 14.48 0 016.56 11.3z"
                      fill="#4c4c5e"
                    />
                    <path
                      d="M792.21 585.61c0 4.16-2.94 5.84-6.56 3.74a14.45 14.45 0 01-6.57-11.35c0-4.16 2.94-5.83 6.57-3.74a14.47 14.47 0 016.56 11.35z"
                      fill="#474756"
                    />
                    <path
                      d="M790.32 584.52c0 3-2.09 4.16-4.67 2.67a10.28 10.28 0 01-4.68-8.07c0-3 2.09-4.16 4.68-2.66a10.3 10.3 0 014.67 8.06z"
                      fill="#e7f1f7"
                    />
                    <path
                      d="M790.32 584.52a4 4 0 01-.59 2.27 3 3 0 01-3.27-.19 9.61 9.61 0 01-4.36-7.53c0-2 1-3.13 2.49-3.09a5.74 5.74 0 011.06.48 10.3 10.3 0 014.67 8.06z"
                      fill="#e7f1f7"
                    />
                    <path
                      d="M783 575.88a3.24 3.24 0 00-1.35 3 10.3 10.3 0 004.67 8.06 3.75 3.75 0 002.67.58 3.27 3.27 0 01-3.32-.32 10.28 10.28 0 01-4.68-8.07c.01-1.83.77-2.98 2.01-3.25z"
                      fill="#474756"
                    />
                    <path
                      d="M787.43 582.55c0 .78-.55 1.09-1.22.7a2.7 2.7 0 01-1.23-2.11c0-.78.55-1.09 1.23-.7a2.72 2.72 0 011.22 2.11z"
                      fill="url(#prefix__radial-gradient-18)"
                    />
                    <path
                      d="M785.7 577.8a1.38 1.38 0 00.61 1.06c.34.19.62 0 .62-.35a1.33 1.33 0 00-.62-1c-.31-.25-.61-.09-.61.29zm0 7.16a1.35 1.35 0 00.61 1c.34.2.62 0 .62-.34a1.36 1.36 0 00-.62-1.06c-.31-.14-.61.01-.61.44zm-1.16-7.27c-.24-.42-.62-.64-.86-.5s-.24.58 0 1 .62.63.86.5.24-.59 0-1zm3.55 8.09c.24.42.62.64.86.5s.24-.58 0-1-.62-.63-.86-.5-.24.59 0 1zm-5.51-6.2a1.36 1.36 0 00.62 1.06c.33.19.61 0 .61-.35a1.38 1.38 0 00-.61-1.06c-.34-.23-.62-.03-.62.35zm6.24 3.6a1.38 1.38 0 00.61 1.06c.34.19.61 0 .61-.35a1.35 1.35 0 00-.61-1.06.37.37 0 00-.61.35zm-5.14.06c.24.41.62.63.86.5s.24-.58 0-1-.62-.64-.86-.5-.24.59 0 1zm4.41-2.52c.24.42.62.64.86.5s.24-.58 0-1-.62-.63-.86-.5-.24.59 0 1z"
                      fill="#474756"
                    />
                    <path
                      d="M788.2 582.55a1.28 1.28 0 01-.5 1.15l-.77.46c-.32.18-.11-.23-.61-.52a4 4 0 01-1.81-3.12c0-.57-.52-.57-.2-.76l.81-.46a1.32 1.32 0 011.28.13 4 4 0 011.8 3.12z"
                      fill="#545466"
                    />
                    <path
                      d="M787.4 583c0 1.15-.81 1.61-1.81 1a4 4 0 01-1.81-3.12c0-1.15.81-1.61 1.81-1a4 4 0 011.81 3.12z"
                      fill="#545466"
                    />
                  </g>
                  <g>
                    <path
                      fill="#cfdee8"
                      d="M819.84 594.03v9.1l-27.23-15.72v-9.02l27.23 15.64z"
                    />
                    <path
                      style={{
                        mixBlendMode: "multiply",
                      }}
                      fill="#e7f1f7"
                      d="M800.37 582.91v8.77l-.44-.23v-8.79l.44.25z"
                    />
                    <path
                      fill="#e7f1f7"
                      d="M819.83 594.03v9.1l21.5-12.24v-9.15l-21.5 12.29z"
                    />
                    <path
                      fill="#e7f1f7"
                      d="M841.33 581.74l-21.5 12.29-27.22-15.64 21.52-12.27 27.2 15.62z"
                    />
                  </g>
                  <g fill="#545466">
                    <path d="M816.18 587.97V591l-98-56.99v-2.93l98 56.89z" />
                    <path d="M816.17 587.97V591l26.88-15.3v-3.09l-26.88 15.36z" />
                    <path d="M843.05 572.61l-26.88 15.36-97.99-56.89 26.9-15.34 97.97 56.87z" />
                  </g>
                  <g>
                    <path
                      fill="#cfdee8"
                      d="M816.18 555.11v33l-98-56.98v-32.91l98 56.89z"
                    />
                    <path
                      style={{
                        mixBlendMode: "multiply",
                      }}
                      fill="#e6e7e8"
                      d="M813.85 556.45l-93.34-54.19v27.53l93.34 54.28v-27.62z"
                    />
                    <g fill="#dce8f1">
                      <path
                        style={{
                          mixBlendMode: "multiply",
                        }}
                        d="M810.89 555.12l1.22.8v27.63l-1.22-.81v-27.62zM812.17 555.81l.46-.02v27.63l-.46.02v-27.63zM806.88 552.79l1.23.81v27.62l-1.23-.81v-27.62zM808.16 553.49l.47-.02v27.62l-.47.02v-27.62zM802.88 550.46l1.22.81v27.63l-1.22-.81v-27.63zM804.16 551.16l.46-.02v27.63l-.46.01v-27.62zM798.87 548.14l1.22.81v27.62l-1.22-.81v-27.62zM800.15 548.83l.47-.02v27.63l-.47.02v-27.63zM794.87 545.81l1.22.81v27.62l-1.22-.81v-27.62zM796.14 546.51l.47-.02v27.62l-.47.02v-27.62zM790.86 543.48l1.22.81v27.63l-1.22-.81v-27.63zM792.14 544.18l.46-.02v27.63l-.46.01v-27.62zM786.86 541.16l1.22.81v27.62l-1.22-.81v-27.62zM788.13 541.85l.47-.02v27.63l-.47.02v-27.63zM782.85 538.83l1.22.81v27.62l-1.22-.81v-27.62zM784.13 539.53l.46-.02v27.62l-.46.02v-27.62zM778.85 536.5l1.22.81v27.63l-1.22-.81V536.5zM780.12 537.2l.47-.02v27.63l-.47.02V537.2zM774.84 534.18l1.22.81v27.62l-1.22-.81v-27.62zM776.12 534.87l.46-.02v27.63l-.46.02v-27.63zM770.84 531.85l1.22.81v27.62l-1.22-.81v-27.62zM772.11 532.55l.47-.02v27.62l-.47.02v-27.62zM766.83 529.52l1.22.81v27.63l-1.22-.81v-27.63zM768.11 530.22l.46-.02v27.63l-.46.02v-27.63z"
                      />
                      <g>
                        <path
                          style={{
                            mixBlendMode: "multiply",
                          }}
                          d="M762.82 527.2l1.22.81v27.62l-1.22-.81V527.2zM764.1 527.89l.47-.01v27.62l-.47.02v-27.63z"
                        />
                      </g>
                      <g>
                        <path
                          style={{
                            mixBlendMode: "multiply",
                          }}
                          d="M758.82 524.87l1.22.81v27.63l-1.22-.81v-27.63zM760.1 525.57l.46-.02v27.62l-.46.02v-27.62z"
                        />
                      </g>
                      <g>
                        <path
                          style={{
                            mixBlendMode: "multiply",
                          }}
                          d="M754.81 522.54l1.22.81v27.63l-1.22-.81v-27.63zM756.09 523.24l.47-.02v27.63l-.47.02v-27.63z"
                        />
                      </g>
                      <g>
                        <path
                          style={{
                            mixBlendMode: "multiply",
                          }}
                          d="M750.81 520.22l1.22.81v27.62l-1.22-.81v-27.62zM752.09 520.91l.46-.02v27.63l-.46.02v-27.63z"
                        />
                      </g>
                      <g>
                        <path
                          style={{
                            mixBlendMode: "multiply",
                          }}
                          d="M746.8 517.89l1.22.81v27.63l-1.22-.82v-27.62zM748.08 518.59l.46-.02v27.62l-.46.02v-27.62z"
                        />
                      </g>
                      <g>
                        <path
                          style={{
                            mixBlendMode: "multiply",
                          }}
                          d="M742.8 515.57l1.22.8V544l-1.22-.81v-27.62zM744.08 516.26l.46-.02v27.63l-.46.02v-27.63z"
                        />
                      </g>
                      <g>
                        <path
                          style={{
                            mixBlendMode: "multiply",
                          }}
                          d="M738.79 513.24l1.22.81v27.62l-1.22-.81v-27.62zM740.07 513.93l.46-.02v27.63l-.46.02v-27.63z"
                        />
                      </g>
                      <g>
                        <path
                          style={{
                            mixBlendMode: "multiply",
                          }}
                          d="M734.79 510.91l1.22.81v27.63l-1.22-.81v-27.63zM736.06 511.61l.47-.02v27.63l-.47.01v-27.62z"
                        />
                      </g>
                      <g>
                        <path
                          style={{
                            mixBlendMode: "multiply",
                          }}
                          d="M730.78 508.59l1.22.8v27.63l-1.22-.81v-27.62zM732.06 509.28l.46-.02v27.63l-.46.02v-27.63z"
                        />
                      </g>
                      <g>
                        <path
                          style={{
                            mixBlendMode: "multiply",
                          }}
                          d="M726.77 506.26l1.23.81v27.62l-1.23-.81v-27.62zM728.05 506.96l.47-.02v27.62l-.47.02v-27.62z"
                        />
                      </g>
                      <g>
                        <path
                          style={{
                            mixBlendMode: "multiply",
                          }}
                          d="M722.77 503.93l1.22.81v27.63l-1.22-.81v-27.63zM724.05 504.63l.46-.02v27.63l-.46.01v-27.62z"
                        />
                      </g>
                    </g>
                    <path
                      fill="#dce8f1"
                      d="M816.17 555.11v33l26.88-15.29v-33.07l-26.88 15.36z"
                    />
                    <path
                      style={{
                        mixBlendMode: "multiply",
                      }}
                      fill="#e6e7e8"
                      d="M840.72 571.47v-27.72l-22.23 12.71v27.66l22.23-12.65z"
                    />
                    <path
                      fill="#e7f1f7"
                      d="M843.05 539.75l-26.88 15.36-97.99-56.89 26.9-15.34 97.97 56.87z"
                    />
                    <g fill="#dce8f1">
                      <path
                        style={{
                          mixBlendMode: "multiply",
                        }}
                        d="M820.74 555.61l-1.22.81v27.63l1.22-.81v-27.63zM819.47 556.31l-.47-.02v27.62l.47.02v-27.62zM824.37 553.48l-1.23.81v27.63l1.23-.81v-27.63zM823.09 554.18l-.47-.02v27.63l.47.01v-27.62zM827.99 551.36l-1.23.8v27.63l1.23-.81v-27.62zM826.71 552.05l-.47-.02v27.63l.47.02v-27.63z"
                      />
                      <g>
                        <path
                          style={{
                            mixBlendMode: "multiply",
                          }}
                          d="M831.61 549.23l-1.23.81v27.62l1.23-.81v-27.62zM830.33 549.92l-.47-.02v27.63l.47.02v-27.63z"
                        />
                      </g>
                      <g>
                        <path
                          style={{
                            mixBlendMode: "multiply",
                          }}
                          d="M835.23 547.1l-1.23.81v27.62l1.23-.81V547.1zM833.95 547.8l-.47-.02v27.62l.47.02V547.8z"
                        />
                      </g>
                      <g>
                        <path
                          style={{
                            mixBlendMode: "multiply",
                          }}
                          d="M838.85 544.97l-1.22.81v27.63l1.22-.81v-27.63zM837.57 545.67l-.47-.02v27.62l.47.02v-27.62z"
                        />
                      </g>
                    </g>
                  </g>
                  <g>
                    <path
                      d="M842.93 552.52l17.68 10.29a9.15 9.15 0 014.34 5.7l2.49 9.8a36.62 36.62 0 011.12 9v11.47L843.36 613v-10.2a36.49 36.49 0 00-1.7-11l-3.21-10.17a9.14 9.14 0 00-4.21-5.2l-16.52-9.64z"
                      fill="red"
                    />
                    <path
                      d="M843.36 602.76V613l-13.49-7.74-1-5.95-11.11-6.62v-25.87l16.59 9.67a9.17 9.17 0 014.21 5.22l3.18 10.16a36.55 36.55 0 011.62 10.89z"
                      fill="#e50000"
                    />
                    <path
                      d="M837 582.19l3.19 10.17a.81.81 0 01-1.18.93l-10-5.82a2.16 2.16 0 01-1.07-1.86v-8.34a.81.81 0 011.21-.7l6.2 3.62a3.53 3.53 0 011.63 2z"
                      fill="#26262e"
                    />
                    <path
                      d="M839.4 593.12a.52.52 0 00.42-.22.49.49 0 00.07-.46l-3.18-10.16a3.24 3.24 0 00-1.5-1.84l-6.2-3.62h-.2c-.38 0-.58.18-.58.46v8.34a1.85 1.85 0 00.93 1.61l10 5.83z"
                      fill="#616173"
                    />
                    <path
                      d="M847.65 594.79v3.76a5.22 5.22 0 007.8 4.53l3.61-2.07a12.7 12.7 0 006.4-11v-5.44z"
                      fill="#e50000"
                    />
                    <path
                      d="M852.87 602.38a3.88 3.88 0 001.89-.51l3.61-2.07a11.35 11.35 0 005.7-9.82v-3l-15 8.64v3a3.84 3.84 0 003.8 3.76z"
                      fill="#616173"
                    />
                    <path
                      d="M862.84 595.09l-11.84 6.8a4.3 4.3 0 00.74.31l10.44-6c.25-.36.46-.73.66-1.11zm1-2.9l-14.32 8.23a3.29 3.29 0 00.36.53l13.75-7.9c.09-.29.16-.57.22-.86zm.22-2.45l-15 8.64v.17a4.56 4.56 0 000 .54l15-8.6v-.51zm-15 6.32v.73l15-8.64v-.73z"
                      fill="#474756"
                      opacity={0.5}
                    />
                    <path
                      d="M844.24 593.41a1.47 1.47 0 00.73-.19l20.45-11.6a2.5 2.5 0 001.19-2.79l-2.56-10.09a8.15 8.15 0 00-.54-1.5.92.92 0 00-.82-.53.83.83 0 00-.44.12L840 579.62a1.46 1.46 0 00-.65 1.72l3.49 11a1.49 1.49 0 001.43 1z"
                      fill="#26262e"
                    />
                    <path
                      d="M844.24 593.13a1.27 1.27 0 00.59-.16l20.45-11.6a2.23 2.23 0 001.05-2.47l-2.56-10.09a7.86 7.86 0 00-.52-1.45.64.64 0 00-.56-.36.61.61 0 00-.3.08l-22.28 12.79a1.18 1.18 0 00-.51 1.39l3.48 11a1.22 1.22 0 001.16.87z"
                      fill="#616173"
                    />
                    <path
                      d="M821.53 573.11l3 1.74a1.39 1.39 0 01.68 1.19V584a.16.16 0 01-.16.16l-2.86-1.65a1.27 1.27 0 01-.64-1.11v-8.24z"
                      fill="#26262e"
                    />
                    <path
                      d="M824.9 576a1.08 1.08 0 00-.54-.94l-2.55-1.49v7.74a1 1 0 00.5.86l2.59 1.49z"
                      fill="#616173"
                    />
                    <path
                      style={{
                        mixBlendMode: "multiply",
                      }}
                      fill="url(#prefix__linear-gradient-416)"
                      d="M828.67 591.98l-10.95.72 11.08 6.55-.13-7.27z"
                    />
                  </g>
                  <path
                    fill="#b4c4cc"
                    d="M821.06 597.57v4.99l3.8-2.13-.26-4.98-3.54 2.12z"
                  />
                  <g>
                    <path
                      d="M838 607.92c0 2-.71 3.47-1.85 4.16l-3.47 2c-1.19.66-.43-.84-2.23-1.88a14.5 14.5 0 01-6.56-11.32c0-2.06-1.9-2.08-.74-2.76l3.7-2c1.18-.64 2.8-.52 4.58.5a14.48 14.48 0 016.57 11.3z"
                      fill="#4c4c5e"
                    />
                    <path
                      d="M834.35 610c0 4.16-2.94 5.84-6.57 3.74a14.47 14.47 0 01-6.56-11.32c0-4.15 2.94-5.83 6.56-3.74a14.46 14.46 0 016.57 11.32z"
                      fill="#474756"
                    />
                    <path
                      d="M832.46 608.89c0 3-2.09 4.16-4.68 2.67a10.3 10.3 0 01-4.67-8.07c0-3 2.09-4.15 4.67-2.66a10.28 10.28 0 014.68 8.06z"
                      fill="#e7f1f7"
                    />
                    <path
                      d="M832.46 608.89a4 4 0 01-.59 2.27 3 3 0 01-3.27-.19 9.62 9.62 0 01-4.37-7.53c0-2 1-3.13 2.5-3.08a4.79 4.79 0 011 .47 10.28 10.28 0 014.73 8.06z"
                      fill="#e7f1f7"
                    />
                    <path
                      d="M825.11 600.25a3.27 3.27 0 00-1.35 3 10.31 10.31 0 004.68 8.06 3.73 3.73 0 002.67.58 3.29 3.29 0 01-3.33-.32 10.3 10.3 0 01-4.67-8.07c0-1.83.79-2.98 2-3.25z"
                      fill="#474756"
                    />
                    <path
                      d="M829.56 606.92c0 .78-.54 1.09-1.22.7a2.7 2.7 0 01-1.22-2.11c0-.77.55-1.09 1.22-.7a2.69 2.69 0 011.22 2.11z"
                      fill="url(#prefix__radial-gradient-19)"
                    />
                    <path
                      d="M827.84 602.18a1.35 1.35 0 00.61 1.05c.34.19.61 0 .61-.35a1.32 1.32 0 00-.61-1c-.34-.25-.61-.09-.61.3zm0 7.15a1.35 1.35 0 00.61 1.06c.34.19.61 0 .61-.35a1.35 1.35 0 00-.61-1.06c-.34-.19-.61.02-.61.35zm-1.16-7.27c-.24-.41-.63-.64-.87-.5s-.24.58 0 1 .63.63.87.5.24-.59 0-1zm3.54 8.1c.24.41.63.63.87.5s.24-.58 0-1-.63-.63-.87-.5-.22.58 0 1zm-5.5-6.21a1.35 1.35 0 00.61 1.06c.34.19.61 0 .61-.35a1.32 1.32 0 00-.61-1c-.33-.25-.61-.09-.61.34zm6.24 3.6a1.35 1.35 0 00.61 1.06c.34.19.61 0 .61-.35a1.32 1.32 0 00-.61-1c-.34-.26-.57-.09-.57.29zm-5.15.06c.24.41.63.63.87.5s.24-.58 0-1-.63-.64-.87-.5-.24.59 0 1zm4.41-2.51c.24.41.63.63.87.49s.24-.58 0-1-.63-.63-.87-.5-.22.59 0 1.01z"
                      fill="#474756"
                    />
                    <path
                      d="M830.34 606.93a1.24 1.24 0 01-.51 1.14l-.76.46c-.33.18-.12-.23-.61-.52a4 4 0 01-1.81-3.12c0-.56-.53-.57-.21-.76l.82-.46a1.28 1.28 0 011.27.14 4 4 0 011.81 3.12z"
                      fill="#545466"
                    />
                    <path
                      d="M829.53 607.4c0 1.14-.81 1.6-1.81 1a4 4 0 01-1.8-3.12c0-1.15.8-1.61 1.8-1a4 4 0 011.81 3.12z"
                      fill="#545466"
                    />
                  </g>
                  <path
                    fill="#e7f1f7"
                    d="M836 613.42v-7.22l-4.7-8.11-6.63-3.83 4-2.28 6.66 3.84 4.7 8.11v7.23l-4.03 2.26z"
                  />
                  <path
                    fill="#dce8f1"
                    d="M836 606.2l-4.7-8.11 4.03-2.27 4.7 8.11-4.03 2.27z"
                  />
                  <path
                    fill="#cfdee8"
                    d="M834.89 612.83v-6.33l-4.4-7.6-5.84-3.38-3.59 2.05v4.99l-1.11-.64v-4.99l4.7-2.68 6.65 3.84 4.7 8.11v7.26l-1.11-.63z"
                  />
                  <g>
                    <path
                      d="M870.45 596.32l-25.21 15a4 4 0 01-4 0l-4.71-2.64v4.29l4.75 2.68a4 4 0 004 0l25.16-14.45z"
                      fill="#cfdee8"
                    />
                    <path
                      d="M870 597.14l-24.78 14.14a4 4 0 01-4 0l-4.71-2.64 1.29-.74 3.41 1.93a4 4 0 004 0l23.28-13.43v-1.71l1.51.93a.89.89 0 010 1.52z"
                      fill="#e7f1f7"
                    />
                    <g
                      style={{
                        mixBlendMode: "color-dodge",
                      }}
                    >
                      <path
                        fill="url(#prefix__radial-gradient-20)"
                        d="M868.57 596.11l-.03.02-.01-1.44.03.02.01 1.4z"
                      />
                      <path
                        d="M836.83 608.49l4.47 2.5a4 4 0 004 0l24.78-14.15a.87.87 0 00.41-.52.89.89 0 01-.44.82l-24.78 14.14a4 4 0 01-4 0l-4.71-2.64z"
                        fill="url(#prefix__radial-gradient-21)"
                      />
                    </g>
                  </g>
                  <g>
                    <path
                      d="M817.67 559.18L842.48 545l9.35 5.61a13.16 13.16 0 016.53 11.36L833.58 576z"
                      fill="#ff4a4a"
                    />
                    <path
                      d="M833.6 576l-15.94-9.36v-7.48l9.41 5.48A13.14 13.14 0 01833.6 576z"
                      fill="#e50000"
                    />
                  </g>
                  <path
                    d="M849 605l-4.7 2.65a.65.65 0 01-1-.57v-2.05a1.77 1.77 0 01.94-1.56l1.48-.78a1.76 1.76 0 011.86.14l1.46 1.07a.65.65 0 01-.04 1.1zM868.56 592.5v1.71a.61.61 0 01-.34.55l-2 1a.48.48 0 01-.67-.59l.81-2.22a1.32 1.32 0 01.67-.74l.68-.32a.62.62 0 01.85.61z"
                    style={{
                      mixBlendMode: "multiply",
                    }}
                    fill="#e7f1f7"
                  />
                  <path
                    d="M849 604.68l-4.7 2.66a.66.66 0 01-1-.57v-2.06a1.77 1.77 0 01.94-1.56l1.48-.77a1.76 1.76 0 011.86.13l1.46 1.07a.65.65 0 01-.04 1.1zM868.56 592.23v1.71a.61.61 0 01-.34.55l-2 1a.48.48 0 01-.67-.59l.81-2.23a1.33 1.33 0 01.64-.67l.68-.32a.62.62 0 01.88.55z"
                    fill="#ffc950"
                  />
                  <path
                    d="M848.61 610.24l-3.53 2 1 .7a1.62 1.62 0 001.71 0l3.64-2.13-1.33-.68a1.63 1.63 0 00-1.49.11zM869.59 598.43l-3.79 2.17a1.58 1.58 0 00-.7.81l-.91 2.33 4-2.33a1.6 1.6 0 00.72-.88zM863.35 605.2v-.8a1.1 1.1 0 00-1.65-1l-7.24 4.16a3.63 3.63 0 00-1.82 3.15v.62z"
                    style={{
                      mixBlendMode: "multiply",
                    }}
                    fill="#e7f1f7"
                  />
                  <path
                    fill="#e7f1f7"
                    d="M854.68 608.23v1.94l7-3.95v-1.99l-7 4z"
                  />
                  <path
                    d="M856.76 601.77c-5.38 2.86-9.28 6.05-8.71 7.13s5.4-.37 10.78-3.23 9.28-6 8.71-7.13-5.4.37-10.78 3.23z"
                    style={{
                      mixBlendMode: "color-dodge",
                    }}
                    fill="url(#prefix__radial-gradient-22)"
                  />
                </motion.g>
                <g id="prefix__truck1">
                  <path
                    fill="#b4c4cc"
                    d="M156.8 210.04v11.82l2.04-1.14v-11.89l-2.04 1.21z"
                  />
                  <path
                    d="M174 225.4c0 2-.7 3.45-1.83 4.14l-3.62 2.09c-1.18.66-.42-.83-2.21-1.87a14.36 14.36 0 01-6.53-11.25c0-2-1.89-2.06-.73-2.75l3.84-2.12c1.17-.64 2.78-.52 4.55.5A14.37 14.37 0 01174 225.4z"
                    fill="#474756"
                  />
                  <path
                    d="M170.24 227.54c0 4.14-2.92 5.8-6.52 3.72a14.36 14.36 0 01-6.53-11.26c0-4.14 2.92-5.8 6.53-3.72a14.38 14.38 0 016.52 11.26z"
                    fill="#545466"
                  />
                  <path
                    d="M163.66 219.26c-2.32-1.34-4.21-.26-4.21 2.4a9.32 9.32 0 004.21 7.28c2.33 1.34 4.22.26 4.22-2.41a9.3 9.3 0 00-4.22-7.27z"
                    fill="url(#prefix__linear-gradient-417)"
                  />
                  <path
                    d="M165.16 228a9.3 9.3 0 01-4.16-7.3 3.75 3.75 0 01.49-2c-1.19.16-2 1.22-2 2.95a9.32 9.32 0 004.21 7.28c1.61.93 3 .7 3.72-.42a3.55 3.55 0 01-2.26-.51z"
                    fill="url(#prefix__linear-gradient-418)"
                  />
                  <path
                    d="M166.59 226.16c0 1.65-1.17 2.31-2.6 1.49a5.74 5.74 0 01-2.61-4.49c0-1.65 1.17-2.31 2.61-1.48a5.72 5.72 0 012.6 4.48z"
                    style={{
                      mixBlendMode: "multiply",
                    }}
                    fill="url(#prefix__linear-gradient-419)"
                  />
                  <path
                    d="M166.38 225.22c0 1.39-1 1.95-2.21 1.25a4.86 4.86 0 01-2.2-3.8c0-1.39 1-2 2.2-1.25a4.84 4.84 0 012.21 3.8z"
                    fill="url(#prefix__linear-gradient-420)"
                  />
                  <path
                    d="M165.78 225.63c0 1.4-1 2-2.21 1.26a4.89 4.89 0 01-2.2-3.8c0-1.4 1-2 2.2-1.26a4.84 4.84 0 012.21 3.8z"
                    fill="#e7f1f7"
                  />
                  <path
                    d="M173.77 225.37c0 2-.7 3.47-1.84 4.17l-3.47 2c-1.19.67-.43-.84-2.23-1.88a14.47 14.47 0 01-6.56-11.32c0-2-1.9-2.07-.74-2.76l3.7-2.05c1.18-.64 2.8-.52 4.58.51a14.44 14.44 0 016.56 11.33z"
                    fill="#4c4c5e"
                  />
                  <path
                    d="M170.13 227.44c0 4.16-2.93 5.83-6.56 3.74a14.47 14.47 0 01-6.57-11.32c0-4.16 2.94-5.83 6.56-3.74a14.44 14.44 0 016.57 11.32z"
                    fill="#474756"
                  />
                  <path
                    d="M168.25 226.35c0 3-2.1 4.16-4.68 2.67a10.33 10.33 0 01-4.67-8.02c0-3 2.09-4.16 4.67-2.67a10.33 10.33 0 014.68 8.02z"
                    fill="#e7f1f7"
                  />
                  <path
                    d="M168.25 226.35a4.07 4.07 0 01-.59 2.27 3 3 0 01-3.28-.19 9.64 9.64 0 01-4.38-7.53c0-2 1-3.14 2.49-3.09a5.39 5.39 0 011.06.47 10.33 10.33 0 014.7 8.07z"
                    fill="#e7f1f7"
                  />
                  <path
                    d="M160.9 217.7a3.28 3.28 0 00-1.35 3 10.28 10.28 0 004.68 8.07 3.78 3.78 0 002.67.58 3.29 3.29 0 01-3.33-.32 10.33 10.33 0 01-4.67-8.03c0-1.87.79-3 2-3.3z"
                    fill="#474756"
                  />
                  <path
                    d="M165.35 224.38c0 .77-.54 1.09-1.22.7a2.69 2.69 0 01-1.22-2.11c0-.78.54-1.09 1.22-.7a2.67 2.67 0 011.22 2.11z"
                    fill="url(#prefix__radial-gradient-23)"
                  />
                  <path
                    d="M163.63 219.63a1.35 1.35 0 00.61 1.06c.34.19.61 0 .61-.35a1.35 1.35 0 00-.61-1.06c-.34-.19-.61-.04-.61.35zm0 7.16a1.32 1.32 0 00.61 1.05c.34.2.61 0 .61-.35a1.34 1.34 0 00-.61-1.05c-.34-.19-.61-.04-.61.35zm-1.16-7.28c-.24-.41-.63-.63-.87-.5s-.24.58 0 1 .63.63.87.49.23-.58 0-.99zm3.54 8.1c.24.41.63.64.87.5s.23-.58 0-1-.63-.64-.87-.5-.24.59-.01 1zm-5.5-6.2a1.32 1.32 0 00.61 1.05c.34.2.61 0 .61-.34a1.35 1.35 0 00-.61-1.06c-.34-.19-.61-.06-.61.35zm6.24 3.6a1.32 1.32 0 00.61 1.05c.33.2.61 0 .61-.34a1.38 1.38 0 00-.61-1.06c-.36-.19-.61-.04-.61.34zm-5.15.06c.24.41.63.63.87.5s.23-.58 0-1-.63-.63-.87-.5-.24.58 0 1zm4.41-2.52c.24.41.63.64.87.5s.23-.58 0-1-.63-.64-.87-.5-.24.59-.01 1z"
                    fill="#474756"
                  />
                  <path
                    d="M166.13 224.38a1.26 1.26 0 01-.51 1.15l-.76.46c-.33.18-.12-.24-.62-.52a4 4 0 01-1.8-3.12c0-.57-.53-.57-.21-.76l.82-.46a1.3 1.3 0 011.27.13 4 4 0 011.81 3.12z"
                    fill="#545466"
                  />
                  <path
                    d="M165.32 224.85c0 1.15-.81 1.61-1.81 1a4 4 0 01-1.81-3.12c0-1.14.81-1.6 1.81-1a4 4 0 011.81 3.12z"
                    fill="#545466"
                  />
                  <path
                    d="M188 233.64c0 2-.69 3.45-1.83 4.15l-3.61 2.09c-1.18.66-.42-.84-2.22-1.87a14.38 14.38 0 01-6.52-11.26c0-2-1.89-2.06-.73-2.74l3.84-2.13c1.17-.63 2.78-.52 4.55.51a14.38 14.38 0 016.52 11.25z"
                    fill="#474756"
                  />
                  <path
                    d="M184.24 235.79c0 4.13-2.93 5.8-6.53 3.72a14.38 14.38 0 01-6.52-11.26c0-4.13 2.92-5.8 6.52-3.72a14.39 14.39 0 016.53 11.26z"
                    fill="#545466"
                  />
                  <path
                    d="M177.66 227.51c-2.33-1.35-4.22-.27-4.22 2.4a9.32 9.32 0 004.22 7.28c2.32 1.34 4.22.26 4.22-2.41a9.31 9.31 0 00-4.22-7.27z"
                    fill="url(#prefix__linear-gradient-421)"
                  />
                  <path
                    d="M179.16 236.22a9.28 9.28 0 01-4.22-7.27 3.61 3.61 0 01.5-2c-1.2.16-2 1.22-2 2.95a9.32 9.32 0 004.22 7.28c1.61.92 3 .69 3.72-.42a3.52 3.52 0 01-2.22-.54z"
                    fill="url(#prefix__linear-gradient-422)"
                  />
                  <path
                    d="M180.58 234.41c0 1.65-1.16 2.31-2.6 1.48a5.75 5.75 0 01-2.6-4.48c0-1.65 1.17-2.32 2.6-1.49a5.73 5.73 0 012.6 4.49z"
                    style={{
                      mixBlendMode: "multiply",
                    }}
                    fill="url(#prefix__linear-gradient-423)"
                  />
                  <path
                    d="M180.37 233.46c0 1.4-1 2-2.2 1.26a4.85 4.85 0 01-2.2-3.8c0-1.4 1-2 2.2-1.26a4.85 4.85 0 012.2 3.8z"
                    fill="url(#prefix__linear-gradient-424)"
                  />
                  <path
                    d="M179.77 233.88c0 1.39-1 2-2.2 1.25a4.83 4.83 0 01-2.2-3.8c0-1.39 1-2 2.2-1.25a4.83 4.83 0 012.2 3.8z"
                    fill="#e7f1f7"
                  />
                  <path
                    d="M188 233.63c0 2-.7 3.47-1.84 4.17l-3.47 2c-1.19.66-.43-.84-2.23-1.88a14.45 14.45 0 01-6.57-11.32c0-2.06-1.9-2.07-.73-2.76l3.7-2c1.18-.64 2.8-.52 4.58.51a14.47 14.47 0 016.56 11.28z"
                    fill="#4c4c5e"
                  />
                  <path
                    d="M184.31 235.7c0 4.16-2.94 5.83-6.56 3.74a14.44 14.44 0 01-6.56-11.32c0-4.16 2.93-5.84 6.56-3.74a14.47 14.47 0 016.56 11.32z"
                    fill="#474756"
                  />
                  <path
                    d="M182.43 234.61c0 3-2.1 4.15-4.68 2.66a10.31 10.31 0 01-4.68-8.06c0-3 2.1-4.16 4.68-2.67a10.31 10.31 0 014.68 8.07z"
                    fill="#e7f1f7"
                  />
                  <path
                    d="M182.43 234.61a4 4 0 01-.6 2.27 2.94 2.94 0 01-3.27-.2 9.61 9.61 0 01-4.36-7.52c0-2 1-3.14 2.49-3.09a5.39 5.39 0 011.06.47 10.31 10.31 0 014.68 8.07z"
                    fill="#e7f1f7"
                  />
                  <path
                    d="M175.08 226a3.25 3.25 0 00-1.35 3 10.3 10.3 0 004.67 8 3.81 3.81 0 002.68.58 3.29 3.29 0 01-3.33-.33 10.31 10.31 0 01-4.68-8.06c0-1.81.8-2.96 2.01-3.19z"
                    fill="#474756"
                  />
                  <path
                    d="M179.53 232.64c0 .77-.55 1.09-1.22.69a2.68 2.68 0 01-1.23-2.11c0-.77.55-1.08 1.23-.69a2.7 2.7 0 011.22 2.11z"
                    fill="url(#prefix__radial-gradient-24)"
                  />
                  <path
                    d="M177.8 227.89a1.33 1.33 0 00.62 1.05c.33.2.61 0 .61-.34a1.38 1.38 0 00-.61-1.06c-.34-.19-.62-.04-.62.35zm0 7.16a1.35 1.35 0 00.62 1c.33.19.61 0 .61-.35a1.35 1.35 0 00-.61-1.05c-.34-.15-.62.01-.62.4zm-1.16-7.28c-.24-.41-.62-.63-.86-.5s-.24.58 0 1 .62.64.86.5.24-.59 0-1zm3.55 8.1c.24.41.62.64.86.5s.24-.58 0-1-.62-.64-.86-.5-.19.59 0 1zm-5.5-6.2a1.34 1.34 0 00.61 1.05c.33.2.61 0 .61-.35a1.36 1.36 0 00-.61-1.05c-.3-.2-.61-.04-.61.35zm6.23 3.6a1.35 1.35 0 00.61 1c.34.2.62 0 .62-.35a1.35 1.35 0 00-.62-1.05c-.33-.14-.61.01-.61.4zm-5.14 0c.24.42.62.64.86.5s.24-.58 0-1-.62-.63-.86-.5-.24.64 0 1.05zm4.41-2.51c.24.41.62.63.86.5s.24-.58 0-1-.62-.64-.86-.5-.19.64 0 1.05z"
                    fill="#474756"
                  />
                  <path
                    d="M180.31 232.64a1.28 1.28 0 01-.51 1.15l-.76.45c-.33.19-.12-.23-.62-.51a4 4 0 01-1.81-3.12c0-.57-.52-.57-.2-.76l.82-.46a1.27 1.27 0 011.27.13 4 4 0 011.81 3.12z"
                    fill="#545466"
                  />
                  <path
                    d="M179.5 233.11c0 1.15-.81 1.61-1.81 1a4 4 0 01-1.81-3.12c0-1.14.81-1.61 1.81-1a4 4 0 011.81 3.12z"
                    fill="#545466"
                  />
                  <g>
                    <path
                      fill="#9aa0a6"
                      d="M212.52 243.24v6.23l-21.01-12.19v-6.21l21.01 12.17zM212.52 243.24v6.23l5.91-3.36v-6.24l-5.91 3.37z"
                    />
                    <path
                      fill="url(#prefix__linear-gradient-425)"
                      d="M218.43 239.87l-5.91 3.37-21.01-12.17 5.91-3.36 21.01 12.16z"
                    />
                  </g>
                  <g>
                    <path
                      fill="#8c9399"
                      d="M152.65 208.02v7.93l-.78-.62v-7.91l.78.6zM152.65 208.02v7.93l18.9-10.62v-7.95l-18.9 10.64z"
                    />
                    <path
                      fill="#e7f1f7"
                      d="M171.55 197.38l-18.9 10.64-.78-.6 18.91-10.63.77.59z"
                    />
                  </g>
                  <path
                    fill="#c5d4dd"
                    d="M187.57 227.79v11.82l-2.11-1.21v-9.41l-28.64-16.53v9.4l-2.11-1.22v-11.82l32.86 18.97z"
                  />
                  <path
                    fill="#b4c4cc"
                    d="M187.58 227.81v11.82l2.04-1.14V226.6l-2.04 1.21z"
                  />
                  <g>
                    <path
                      fill="#b4c4cc"
                      d="M209.06 248.44l-1.07.63-17.44-10.05 1.08-.61 17.43 10.03zM190.53 232.64v6.39l1.1-.62v-6.43l-1.1.66z"
                    />
                    <path
                      d="M188.94 230.87v9l20.63 12v-9.09zm1.61 2.78l17.42 10v5.37L190.55 239z"
                      fill="#c5d4dd"
                    />
                    <path
                      fill="#b4c4cc"
                      d="M209.57 242.76v9.09l1.35-.68v-9.15l-1.35.74z"
                    />
                    <path
                      fill="#b4c4cc"
                      d="M210.92 242.02l-1.35.74-20.63-11.89 1.37-.72 20.61 11.87z"
                    />
                  </g>
                  <g>
                    <path
                      d="M229.25 257.63c0 2-.7 3.45-1.83 4.14l-3.62 2.09c-1.18.66-.42-.83-2.21-1.87a14.36 14.36 0 01-6.53-11.25c0-2.05-1.89-2.06-.73-2.75l3.84-2.12c1.17-.64 2.78-.52 4.55.5a14.37 14.37 0 016.53 11.26z"
                      fill="#474756"
                    />
                    <path
                      d="M225.47 259.77c0 4.14-2.92 5.8-6.53 3.72a14.38 14.38 0 01-6.52-11.25c0-4.14 2.92-5.8 6.52-3.72a14.36 14.36 0 016.53 11.25z"
                      fill="#545466"
                    />
                    <path
                      d="M218.89 251.49c-2.32-1.34-4.21-.26-4.21 2.41a9.31 9.31 0 004.21 7.27c2.33 1.34 4.22.26 4.22-2.4a9.3 9.3 0 00-4.22-7.28z"
                      fill="#b4c4cc"
                    />
                    <path
                      d="M221 257.86c0 1.4-1 2-2.21 1.26a4.86 4.86 0 01-2.2-3.8c0-1.4 1-2 2.2-1.26a4.87 4.87 0 012.21 3.8z"
                      fill="#e7f1f7"
                    />
                    <path
                      d="M229 257.51c0 2-.7 3.47-1.84 4.16l-3.48 2c-1.18.66-.42-.84-2.22-1.88a14.46 14.46 0 01-6.57-11.32c0-2.06-1.9-2.08-.73-2.76l3.69-2c1.19-.64 2.8-.52 4.59.51a14.47 14.47 0 016.56 11.29z"
                      fill="#4c4c5e"
                    />
                    <path
                      d="M225.35 259.57c0 4.16-2.94 5.84-6.56 3.75a14.46 14.46 0 01-6.57-11.32c0-4.16 2.94-5.84 6.57-3.75a14.5 14.5 0 016.56 11.32z"
                      fill="#474756"
                    />
                    <path
                      d="M223.46 258.49c0 3-2.09 4.15-4.67 2.66a10.28 10.28 0 01-4.68-8.06c0-3 2.09-4.16 4.68-2.67a10.3 10.3 0 014.67 8.07z"
                      fill="#e7f1f7"
                    />
                    <path
                      d="M223.46 258.49a4 4 0 01-.59 2.27 3 3 0 01-3.27-.2 9.62 9.62 0 01-4.37-7.53c0-2 1-3.13 2.5-3.08a5.08 5.08 0 011.06.47 10.3 10.3 0 014.67 8.07z"
                      fill="#e7f1f7"
                    />
                    <path
                      d="M216.11 249.84a3.26 3.26 0 00-1.34 3 10.32 10.32 0 004.67 8.07 3.8 3.8 0 002.67.58 3.3 3.3 0 01-3.32-.33 10.28 10.28 0 01-4.68-8.06c0-1.84.79-2.99 2-3.26z"
                      fill="#474756"
                    />
                    <path
                      d="M220.57 256.52c0 .77-.55 1.08-1.23.69a2.7 2.7 0 01-1.22-2.11c0-.77.55-1.09 1.22-.7a2.7 2.7 0 011.23 2.12z"
                      fill="url(#prefix__radial-gradient-25)"
                    />
                    <path
                      d="M218.84 251.77a1.36 1.36 0 00.61 1c.34.2.61 0 .61-.35a1.34 1.34 0 00-.61-1.05c-.33-.15-.61.01-.61.4zm0 7.15a1.38 1.38 0 00.61 1.06c.34.19.61 0 .61-.35a1.32 1.32 0 00-.61-1.05c-.33-.2-.61-.04-.61.34zm-1.16-7.27c-.24-.41-.63-.64-.86-.5s-.24.58 0 1 .62.64.86.5.24-.59 0-1zm3.55 8.1c.23.41.62.63.86.5s.24-.58 0-1-.63-.64-.86-.5-.23.59 0 1zm-5.51-6.2a1.38 1.38 0 00.61 1c.34.19.62 0 .62-.35a1.33 1.33 0 00-.62-1.05c-.33-.15-.61.01-.61.4zm6.24 3.6a1.34 1.34 0 00.61 1.05c.34.19.61 0 .61-.35a1.32 1.32 0 00-.61-1.05c-.34-.2-.57-.04-.57.35zm-5.14.05c.23.41.62.64.86.5s.24-.58 0-1-.63-.64-.86-.5-.24.59 0 1zm4.41-2.51c.23.41.62.63.86.5s.24-.58 0-1-.63-.64-.86-.5-.23.59 0 1z"
                      fill="#474756"
                    />
                    <path
                      d="M221.34 256.52a1.29 1.29 0 01-.5 1.15l-.77.45c-.32.18-.11-.23-.61-.52a4 4 0 01-1.81-3.12c0-.56-.52-.57-.2-.76l.81-.46a1.28 1.28 0 011.27.14 4 4 0 011.81 3.12z"
                      fill="#545466"
                    />
                    <path
                      d="M220.54 257c0 1.14-.81 1.61-1.81 1a4 4 0 01-1.81-3.12c0-1.15.81-1.61 1.81-1a4 4 0 011.81 3.12z"
                      fill="#545466"
                    />
                  </g>
                  <g>
                    <path
                      fill="#cfdee8"
                      d="M252.97 268v9.09l-27.22-15.72v-9.02L252.97 268z"
                    />
                    <path
                      style={{
                        mixBlendMode: "multiply",
                      }}
                      fill="#e7f1f7"
                      d="M233.51 256.87v8.77l-.44-.23v-8.79l.44.25z"
                    />
                    <path
                      fill="#e7f1f7"
                      d="M252.97 268v9.09l21.5-12.23v-9.15L252.97 268z"
                    />
                    <path
                      fill="#e7f1f7"
                      d="M274.47 255.71L252.97 268l-27.22-15.65 21.52-12.26 27.2 15.62z"
                    />
                  </g>
                  <g fill="#545466">
                    <path d="M249.31 261.93v3.03l-97.99-56.99v-2.93l97.99 56.89zM249.31 261.93v3.03l26.88-15.29v-3.1l-26.88 15.36z" />
                    <path d="M276.19 246.57l-26.88 15.36-97.99-56.89 26.9-15.34 97.97 56.87z" />
                  </g>
                  <g>
                    <path
                      fill="#cfdee8"
                      d="M249.31 229.07v33l-97.99-56.98v-32.91l97.99 56.89z"
                    />
                    <path
                      style={{
                        mixBlendMode: "multiply",
                      }}
                      fill="#e6e7e8"
                      d="M246.99 230.41l-93.34-54.19v27.53l93.34 54.29v-27.63z"
                    />
                    <g fill="#dce8f1">
                      <path
                        style={{
                          mixBlendMode: "multiply",
                        }}
                        d="M244.03 229.08l1.22.81v27.62l-1.22-.81v-27.62zM245.31 229.78l.46-.02v27.62l-.46.02v-27.62zM240.02 226.75l1.22.81v27.63l-1.22-.81v-27.63zM241.3 227.45l.46-.02v27.63l-.46.01v-27.62zM236.02 224.43l1.22.81v27.62l-1.22-.81v-27.62zM237.29 225.12l.47-.02v27.63l-.47.02v-27.63zM232.01 222.1l1.22.81v27.62l-1.22-.81V222.1zM233.29 222.8l.46-.02v27.62l-.46.02V222.8zM228.01 219.77l1.22.81v27.63l-1.22-.81v-27.63zM229.28 220.47l.47-.02v27.63l-.47.01v-27.62zM224 217.45l1.22.8v27.63l-1.22-.81v-27.62zM225.28 218.14l.46-.02v27.63l-.46.02v-27.63zM220 215.12l1.22.81v27.62l-1.22-.81v-27.62zM221.27 215.82l.47-.02v27.62l-.47.02v-27.62zM215.99 212.79l1.22.81v27.63l-1.22-.81v-27.63zM217.27 213.49l.46-.02v27.63l-.46.01v-27.62zM211.99 210.47l1.22.81v27.62l-1.22-.81v-27.62zM213.26 211.16l.47-.02v27.63l-.47.02v-27.63zM207.98 208.14l1.22.81v27.62l-1.22-.81v-27.62zM209.26 208.84l.46-.02v27.62l-.46.02v-27.62zM203.97 205.81l1.22.81v27.63l-1.22-.81v-27.63zM205.25 206.51l.47-.02v27.63l-.47.01v-27.62zM199.97 203.49l1.22.81v27.62l-1.22-.81v-27.62zM201.25 204.18l.46-.02v27.63l-.46.02v-27.63z"
                      />
                      <g>
                        <path
                          style={{
                            mixBlendMode: "multiply",
                          }}
                          d="M195.96 201.16l1.22.81v27.62l-1.22-.81v-27.62zM197.24 201.86l.47-.02v27.62l-.47.02v-27.62z"
                        />
                      </g>
                      <g>
                        <path
                          style={{
                            mixBlendMode: "multiply",
                          }}
                          d="M191.96 198.83l1.22.81v27.63l-1.22-.81v-27.63zM193.24 199.53l.46-.02v27.63l-.46.02v-27.63z"
                        />
                      </g>
                      <g>
                        <path
                          style={{
                            mixBlendMode: "multiply",
                          }}
                          d="M187.95 196.51l1.22.81v27.62l-1.22-.81v-27.62zM189.23 197.21l.46-.02v27.62l-.46.02v-27.62z"
                        />
                      </g>
                      <g>
                        <path
                          style={{
                            mixBlendMode: "multiply",
                          }}
                          d="M183.95 194.18l1.22.81v27.63l-1.22-.81v-27.63zM185.22 194.88l.47-.02v27.62l-.47.02v-27.62z"
                        />
                      </g>
                      <g>
                        <path
                          style={{
                            mixBlendMode: "multiply",
                          }}
                          d="M179.94 191.85l1.22.81v27.63l-1.22-.81v-27.63zM181.22 192.55l.46-.02v27.63l-.46.02v-27.63z"
                        />
                      </g>
                      <g>
                        <path
                          style={{
                            mixBlendMode: "multiply",
                          }}
                          d="M175.94 189.53l1.22.81v27.62l-1.22-.81v-27.62zM177.21 190.22l.47-.01v27.62l-.47.02v-27.63z"
                        />
                      </g>
                      <g>
                        <path
                          style={{
                            mixBlendMode: "multiply",
                          }}
                          d="M171.93 187.2l1.22.81v27.63l-1.22-.82V187.2zM173.21 187.9l.46-.02v27.62l-.46.02V187.9z"
                        />
                      </g>
                      <g>
                        <path
                          style={{
                            mixBlendMode: "multiply",
                          }}
                          d="M167.93 184.88l1.22.8v27.63l-1.22-.81v-27.62zM169.2 185.57l.47-.02v27.63l-.47.02v-27.63z"
                        />
                      </g>
                      <g>
                        <path
                          style={{
                            mixBlendMode: "multiply",
                          }}
                          d="M163.92 182.55l1.22.81v27.62l-1.22-.81v-27.62zM165.2 183.25l.46-.03v27.63l-.46.02v-27.62z"
                        />
                      </g>
                      <g>
                        <path
                          style={{
                            mixBlendMode: "multiply",
                          }}
                          d="M159.91 180.22l1.23.81v27.63l-1.23-.81v-27.63zM161.19 180.92l.47-.02v27.63l-.47.01v-27.62z"
                        />
                      </g>
                      <g>
                        <path
                          style={{
                            mixBlendMode: "multiply",
                          }}
                          d="M155.91 177.9l1.22.8v27.63l-1.22-.81V177.9zM157.19 178.59l.46-.02v27.63l-.46.02v-27.63z"
                        />
                      </g>
                    </g>
                    <path
                      fill="#dce8f1"
                      d="M249.31 229.07v33l26.88-15.29v-33.07l-26.88 15.36z"
                    />
                    <path
                      style={{
                        mixBlendMode: "multiply",
                      }}
                      fill="#e6e7e8"
                      d="M273.86 245.43v-27.72l-22.23 12.71v27.66l22.23-12.65z"
                    />
                    <path
                      fill="#e7f1f7"
                      d="M276.19 213.71l-26.88 15.36-97.99-56.89 26.9-15.33 97.97 56.86z"
                    />
                    <g fill="#dce8f1">
                      <path
                        style={{
                          mixBlendMode: "multiply",
                        }}
                        d="M253.88 229.57l-1.22.81v27.63l1.22-.81v-27.63zM252.61 230.27l-.47-.02v27.63l.47.01v-27.62zM257.5 227.45l-1.22.8v27.63l1.22-.81v-27.62zM256.23 228.14l-.47-.02v27.63l.47.02v-27.63zM261.12 225.32l-1.22.81v27.62l1.22-.81v-27.62zM259.85 226.02l-.47-.02v27.62l.47.02v-27.62z"
                      />
                      <g>
                        <path
                          style={{
                            mixBlendMode: "multiply",
                          }}
                          d="M264.74 223.19l-1.22.81v27.63l1.22-.82v-27.62zM263.47 223.89l-.47-.02v27.62l.47.02v-27.62z"
                        />
                      </g>
                      <g>
                        <path
                          style={{
                            mixBlendMode: "multiply",
                          }}
                          d="M268.37 221.06l-1.23.81v27.63l1.23-.81v-27.63zM267.09 221.76l-.47-.02v27.63l.47.01v-27.62z"
                        />
                      </g>
                      <g>
                        <path
                          style={{
                            mixBlendMode: "multiply",
                          }}
                          d="M271.99 218.94l-1.23.8v27.63l1.23-.81v-27.62zM270.71 219.63l-.47-.02v27.63l.47.02v-27.63z"
                        />
                      </g>
                    </g>
                  </g>
                  <g>
                    <path
                      d="M276.07 226.48l17.68 10.29a9.14 9.14 0 014.34 5.71l2.49 9.8a36.6 36.6 0 011.12 9v11.47L276.49 287v-10.23a36.53 36.53 0 00-1.69-11l-3.21-10.17a9.17 9.17 0 00-4.21-5.2l-16.52-9.64z"
                      fill="red"
                    />
                    <path
                      d="M276.5 276.72V287l-13.5-7.77-1-6-11.11-6.62v-25.83l16.58 9.67a9.14 9.14 0 014.22 5.23l3.18 10.15a36.6 36.6 0 011.63 10.89z"
                      fill="#e50000"
                    />
                    <path
                      d="M270.12 256.16l3.19 10.16a.81.81 0 01-1.18.94l-10-5.83a2.15 2.15 0 01-1.07-1.86v-8.34a.8.8 0 011.21-.69l6.2 3.61a3.64 3.64 0 011.63 2z"
                      fill="#26262e"
                    />
                    <path
                      d="M272.54 267.08a.52.52 0 00.42-.22.47.47 0 00.07-.45l-3.18-10.17a3.25 3.25 0 00-1.51-1.84l-6.19-3.62H262c-.38 0-.58.18-.58.46v8.34a1.89 1.89 0 00.92 1.62l10 5.82z"
                      fill="#616173"
                    />
                    <path
                      d="M280.79 268.75v3.76a5.22 5.22 0 007.8 4.53l3.61-2.04a12.72 12.72 0 006.4-11v-5.43z"
                      fill="#e50000"
                    />
                    <path
                      d="M286 276.34a3.78 3.78 0 001.89-.51l3.61-2.06a11.36 11.36 0 005.7-9.83v-3l-15 8.63v3a3.84 3.84 0 003.8 3.77z"
                      fill="#616173"
                    />
                    <path
                      d="M296 269.06l-11.82 6.79a4 4 0 00.74.31l10.44-6 .64-1.1zm1-2.91l-14.32 8.24a3.71 3.71 0 00.36.52l13.75-7.9c.07-.28.14-.57.21-.86zm.22-2.45l-15 8.64v.17a4.56 4.56 0 000 .54l15-8.6v-.51zm-15 6.32v.73l15-8.63v-.74z"
                      fill="#474756"
                      opacity={0.5}
                    />
                    <path
                      d="M277.37 267.38a1.49 1.49 0 00.74-.2l20.45-11.6a2.51 2.51 0 001.19-2.79l-2.56-10.08a8 8 0 00-.54-1.51.91.91 0 00-.82-.52.93.93 0 00-.44.11l-22.28 12.79a1.47 1.47 0 00-.65 1.73l3.49 11a1.48 1.48 0 001.42 1.05z"
                      fill="#26262e"
                    />
                    <path
                      d="M277.38 267.09a1.1 1.1 0 00.58-.16l20.45-11.6a2.22 2.22 0 001.06-2.47l-2.56-10.08a8.46 8.46 0 00-.52-1.46.64.64 0 00-.56-.36.61.61 0 00-.3.08l-22.28 12.79a1.18 1.18 0 00-.51 1.39l3.48 11a1.2 1.2 0 001.16.87z"
                      fill="#616173"
                    />
                    <path
                      d="M254.67 247.08l3 1.74a1.37 1.37 0 01.68 1.18v7.91a.16.16 0 01-.16.16l-2.86-1.64a1.29 1.29 0 01-.64-1.12v-8.23z"
                      fill="#26262e"
                    />
                    <path
                      d="M258 250a1.11 1.11 0 00-.54-.94l-2.46-1.48v7.73a1 1 0 00.5.87l2.59 1.49z"
                      fill="#616173"
                    />
                    <path
                      style={{
                        mixBlendMode: "multiply",
                      }}
                      fill="url(#prefix__linear-gradient-426)"
                      d="M261.81 265.94l-10.95.72 11.08 6.55-.13-7.27z"
                    />
                  </g>
                  <path
                    fill="#b4c4cc"
                    d="M254.2 271.53v4.99l3.8-2.13-.26-4.97-3.54 2.11z"
                  />
                  <g>
                    <path
                      d="M271.12 281.88c0 2-.7 3.47-1.84 4.17l-3.47 2c-1.19.66-.43-.84-2.23-1.88a14.47 14.47 0 01-6.58-11.31c0-2.06-1.9-2.07-.74-2.76l3.7-2.05c1.18-.64 2.8-.52 4.58.51a14.44 14.44 0 016.58 11.32z"
                      fill="#4c4c5e"
                    />
                    <path
                      d="M267.48 284c0 4.15-2.93 5.83-6.56 3.74a14.48 14.48 0 01-6.56-11.32c0-4.16 2.94-5.84 6.56-3.74a14.44 14.44 0 016.56 11.32z"
                      fill="#474756"
                    />
                    <path
                      d="M265.6 282.86c0 3-2.1 4.15-4.68 2.66a10.3 10.3 0 01-4.67-8.06c0-3 2.09-4.16 4.67-2.67a10.31 10.31 0 014.68 8.07z"
                      fill="#e7f1f7"
                    />
                    <path
                      d="M265.6 282.86a4.1 4.1 0 01-.59 2.27 3 3 0 01-3.28-.2 9.61 9.61 0 01-4.36-7.52c0-2 1-3.14 2.49-3.09a5.39 5.39 0 011.06.47 10.31 10.31 0 014.68 8.07z"
                      fill="#e7f1f7"
                    />
                    <path
                      d="M258.25 274.21a3.27 3.27 0 00-1.35 3 10.28 10.28 0 004.68 8.07 3.78 3.78 0 002.67.58 3.32 3.32 0 01-3.33-.33 10.3 10.3 0 01-4.67-8.06c0-1.84.75-2.99 2-3.26z"
                      fill="#474756"
                    />
                    <path
                      d="M262.7 280.89c0 .77-.54 1.08-1.22.69a2.67 2.67 0 01-1.22-2.11c0-.77.54-1.08 1.22-.69a2.67 2.67 0 011.22 2.11z"
                      fill="url(#prefix__radial-gradient-26)"
                    />
                    <path
                      d="M261 276.14a1.32 1.32 0 00.61 1.05c.34.2.61 0 .61-.35a1.35 1.35 0 00-.61-1c-.36-.24-.61-.09-.61.3zm0 7.16a1.35 1.35 0 00.61 1.05c.34.19.61 0 .61-.35a1.32 1.32 0 00-.61-1.05c-.36-.2-.61-.04-.61.35zm-1.18-7.3c-.24-.41-.63-.63-.87-.5s-.24.58 0 1 .63.64.87.5.23-.57 0-1zm3.54 8.1c.24.41.63.63.87.5s.23-.58 0-1-.63-.64-.87-.5-.24.61 0 1.02zm-5.5-6.2a1.34 1.34 0 00.61 1.05c.34.2.61 0 .61-.35a1.32 1.32 0 00-.61-1.05c-.34-.18-.61-.02-.61.37zm6.24 3.6a1.34 1.34 0 00.61 1.05c.33.2.61 0 .61-.35a1.36 1.36 0 00-.61-1.05c-.34-.15-.61-.02-.61.37zm-5.15.05c.24.41.63.64.87.5s.23-.58 0-1-.63-.63-.87-.5-.24.61.05 1.02zm4.41-2.51c.24.41.63.63.87.5s.23-.58 0-1-.63-.64-.87-.5-.24.61 0 1.02z"
                      fill="#474756"
                    />
                    <path
                      d="M263.48 280.89A1.27 1.27 0 01263 282l-.76.45c-.33.19-.12-.23-.62-.52a4 4 0 01-1.8-3.11c0-.57-.53-.58-.21-.77l.82-.46a1.3 1.3 0 011.27.14 4 4 0 011.78 3.16z"
                      fill="#545466"
                    />
                    <path
                      d="M262.67 281.36c0 1.15-.81 1.61-1.81 1a4 4 0 01-1.81-3.12c0-1.15.81-1.61 1.81-1a4 4 0 011.81 3.12z"
                      fill="#545466"
                    />
                  </g>
                  <path
                    fill="#e7f1f7"
                    d="M269.14 287.39v-7.23l-4.7-8.11-6.63-3.83 4-2.28 6.65 3.84 4.71 8.11v7.23l-4.03 2.27z"
                  />
                  <path
                    fill="#dce8f1"
                    d="M269.14 280.16l-4.7-8.11 4.02-2.27 4.71 8.11-4.03 2.27z"
                  />
                  <path
                    fill="#cfdee8"
                    d="M268.03 286.79v-6.33l-4.4-7.6-5.84-3.37-3.59 2.04v4.99l-1.11-.63v-5l4.7-2.68 6.65 3.84 4.7 8.11v7.27l-1.11-.64z"
                  />
                  <g>
                    <path
                      d="M303.59 270.28l-25.21 15a4 4 0 01-4 0l-4.71-2.65v4.3l4.75 2.67a4 4 0 004 0l25.16-14.44z"
                      fill="#cfdee8"
                    />
                    <path
                      d="M303.16 271.1l-24.78 14.14a4 4 0 01-4 0l-4.71-2.65 1.29-.73 3.41 1.93a4 4 0 004 0l23.28-13.42v-1.72l1.51.93a.89.89 0 010 1.52z"
                      fill="#e7f1f7"
                    />
                    <g
                      style={{
                        mixBlendMode: "color-dodge",
                      }}
                    >
                      <path
                        fill="url(#prefix__radial-gradient-27)"
                        d="M301.71 270.08l-.03.01-.01-1.44.03.02.01 1.41z"
                      />
                      <path
                        d="M270 282.45l4.47 2.51a4 4 0 004 0l24.78-14.14a.87.87 0 00.41-.52.89.89 0 01-.44.81l-24.78 14.14a4 4 0 01-4 0l-4.71-2.65z"
                        fill="url(#prefix__radial-gradient-28)"
                      />
                    </g>
                  </g>
                  <g>
                    <path
                      d="M250.81 233.14l24.8-14.23 9.36 5.61a13.17 13.17 0 016.53 11.37L266.72 250z"
                      fill="#ff4a4a"
                    />
                    <path
                      d="M266.74 249.94l-15.94-9.37v-7.48l9.41 5.48a13.15 13.15 0 016.53 11.37z"
                      fill="#e50000"
                    />
                  </g>
                  <path
                    d="M282.16 279l-4.7 2.66a.66.66 0 01-1-.57V279a1.77 1.77 0 01.94-1.57l1.48-.77a1.74 1.74 0 011.86.14l1.46 1.06a.65.65 0 01-.04 1.14zM301.7 266.47v1.7a.64.64 0 01-.34.56l-2 1a.48.48 0 01-.67-.6l.81-2.22a1.35 1.35 0 01.67-.74l.68-.32a.62.62 0 01.85.62z"
                    style={{
                      mixBlendMode: "multiply",
                    }}
                    fill="#e7f1f7"
                  />
                  <path
                    d="M282.16 278.65l-4.7 2.65a.66.66 0 01-1-.57v-2.05a1.77 1.77 0 01.94-1.57l1.48-.77a1.74 1.74 0 011.86.14l1.46 1.07a.66.66 0 01-.04 1.1zM301.7 266.19v1.71a.64.64 0 01-.34.56l-2 1a.48.48 0 01-.67-.59l.81-2.22a1.32 1.32 0 01.67-.74l.68-.32a.62.62 0 01.85.6z"
                    fill="#ffc950"
                  />
                  <path
                    d="M281.75 284.2l-3.53 2 1 .69a1.6 1.6 0 001.7.05l3.64-2.13-1.32-.67a1.6 1.6 0 00-1.49.06zM302.73 272.39l-3.79 2.17a1.58 1.58 0 00-.7.81l-.91 2.33 4-2.33a1.61 1.61 0 00.72-.88zM296.49 279.16v-.8a1.1 1.1 0 00-1.65-1l-7.24 4.16a3.63 3.63 0 00-1.82 3.15v.62z"
                    style={{
                      mixBlendMode: "multiply",
                    }}
                    fill="#e7f1f7"
                  />
                  <path
                    fill="#e7f1f7"
                    d="M287.82 282.19v1.94l6.99-3.95v-1.99l-6.99 4z"
                  />
                  <path
                    d="M289.9 275.74c-5.38 2.86-9.28 6.05-8.71 7.12s5.4-.37 10.78-3.23 9.28-6.05 8.71-7.13-5.4.37-10.78 3.24z"
                    style={{
                      mixBlendMode: "color-dodge",
                    }}
                    fill="url(#prefix__radial-gradient-29)"
                  />
                </g>
              </g>
              <motion.g id="prefix__container1"
              
              animate={containerControls}
              variants={containerVariant}
              initial="start"
              
              >
                <path
                  fill="url(#prefix__New_Gradient_Swatch_copy_27)"
                  d="M641.26 305.02v30.02l-89.12-51.83v-29.92l89.12 51.73z"
                />
                <path
                  style={{
                    mixBlendMode: "multiply",
                  }}
                  fill="#eaeaea"
                  d="M639.15 306.24l-84.9-49.28V282l84.9 49.37v-25.13z"
                />
                <path
                  style={{
                    mixBlendMode: "screen",
                  }}
                  fill="#5c5d5e"
                  d="M636.45 305.03l1.11.74v25.12l-1.11-.74v-25.12z"
                />
                <path
                  style={{
                    mixBlendMode: "multiply",
                  }}
                  fill="#c8c8c8"
                  d="M637.61 305.67l.43-.02v25.12l-.43.02v-25.12z"
                />
                <path
                  style={{
                    mixBlendMode: "screen",
                  }}
                  fill="#5c5d5e"
                  d="M632.81 302.92l1.11.73v25.12l-1.11-.73v-25.12z"
                />
                <path
                  style={{
                    mixBlendMode: "multiply",
                  }}
                  fill="#c8c8c8"
                  d="M633.97 303.55l.42-.02v25.12l-.42.02v-25.12z"
                />
                <path
                  style={{
                    mixBlendMode: "screen",
                  }}
                  fill="#5c5d5e"
                  d="M629.17 300.8l1.11.74v25.12l-1.11-.74V300.8z"
                />
                <path
                  style={{
                    mixBlendMode: "multiply",
                  }}
                  fill="#c8c8c8"
                  d="M630.33 301.43l.42-.01v25.12l-.42.02v-25.13z"
                />
                <path
                  style={{
                    mixBlendMode: "screen",
                  }}
                  fill="#5c5d5e"
                  d="M625.52 298.68l1.11.74v25.12l-1.11-.73v-25.13z"
                />
                <path
                  style={{
                    mixBlendMode: "multiply",
                  }}
                  fill="#c8c8c8"
                  d="M626.69 299.32l.42-.02v25.12l-.42.02v-25.12z"
                />
                <path
                  style={{
                    mixBlendMode: "screen",
                  }}
                  fill="#5c5d5e"
                  d="M621.88 296.57l1.11.73v25.13l-1.11-.74v-25.12z"
                />
                <path
                  style={{
                    mixBlendMode: "multiply",
                  }}
                  fill="#c8c8c8"
                  d="M623.04 297.2l.43-.02v25.13l-.43.01V297.2z"
                />
                <path
                  style={{
                    mixBlendMode: "screen",
                  }}
                  fill="#5c5d5e"
                  d="M618.24 294.45l1.11.74v25.12l-1.11-.74v-25.12z"
                />
                <path
                  style={{
                    mixBlendMode: "multiply",
                  }}
                  fill="#c8c8c8"
                  d="M619.4 295.09l.42-.02v25.12l-.42.02v-25.12z"
                />
                <path
                  style={{
                    mixBlendMode: "screen",
                  }}
                  fill="#5c5d5e"
                  d="M614.6 292.34l1.11.73v25.12l-1.11-.73v-25.12z"
                />
                <path
                  style={{
                    mixBlendMode: "multiply",
                  }}
                  fill="#c8c8c8"
                  d="M615.76 292.97l.42-.02v25.12l-.42.02v-25.12z"
                />
                <path
                  style={{
                    mixBlendMode: "screen",
                  }}
                  fill="#5c5d5e"
                  d="M610.95 290.22l1.11.74v25.12l-1.11-.74v-25.12z"
                />
                <path
                  style={{
                    mixBlendMode: "multiply",
                  }}
                  fill="#c8c8c8"
                  d="M612.12 290.85l.42-.01v25.12l-.42.02v-25.13z"
                />
                <path
                  style={{
                    mixBlendMode: "screen",
                  }}
                  fill="#5c5d5e"
                  d="M607.31 288.11l1.11.73v25.12l-1.11-.73v-25.12z"
                />
                <path
                  style={{
                    mixBlendMode: "multiply",
                  }}
                  fill="#c8c8c8"
                  d="M608.47 288.74l.42-.02v25.12l-.42.02v-25.12z"
                />
                <path
                  style={{
                    mixBlendMode: "screen",
                  }}
                  fill="#5c5d5e"
                  d="M603.67 285.99l1.11.73v25.13l-1.11-.74v-25.12z"
                />
                <path
                  style={{
                    mixBlendMode: "multiply",
                  }}
                  fill="#c8c8c8"
                  d="M604.83 286.62l.42-.02v25.13l-.42.01v-25.12z"
                />
                <path
                  style={{
                    mixBlendMode: "screen",
                  }}
                  fill="#5c5d5e"
                  d="M600.03 283.87l1.11.74v25.12l-1.11-.73v-25.13z"
                />
                <path
                  style={{
                    mixBlendMode: "multiply",
                  }}
                  fill="#c8c8c8"
                  d="M601.19 284.51l.42-.02v25.12l-.42.02v-25.12z"
                />
                <path
                  style={{
                    mixBlendMode: "screen",
                  }}
                  fill="#5c5d5e"
                  d="M596.38 281.76l1.11.73v25.13l-1.11-.74v-25.12z"
                />
                <path
                  style={{
                    mixBlendMode: "multiply",
                  }}
                  fill="#c8c8c8"
                  d="M597.54 282.39l.43-.02v25.13l-.43.01v-25.12z"
                />
                <g>
                  <path
                    style={{
                      mixBlendMode: "screen",
                    }}
                    fill="#5c5d5e"
                    d="M592.74 279.64l1.11.74v25.12l-1.11-.74v-25.12z"
                  />
                  <path
                    style={{
                      mixBlendMode: "multiply",
                    }}
                    fill="#c8c8c8"
                    d="M593.9 280.27l.43-.01v25.12l-.43.02v-25.13z"
                  />
                </g>
                <g>
                  <path
                    style={{
                      mixBlendMode: "screen",
                    }}
                    fill="#5c5d5e"
                    d="M589.1 277.52l1.11.74v25.12l-1.11-.73v-25.13z"
                  />
                  <path
                    style={{
                      mixBlendMode: "multiply",
                    }}
                    fill="#c8c8c8"
                    d="M590.26 278.16l.42-.02v25.12l-.42.02v-25.12z"
                  />
                </g>
                <g>
                  <path
                    style={{
                      mixBlendMode: "screen",
                    }}
                    fill="#5c5d5e"
                    d="M585.46 275.41l1.11.73v25.13l-1.11-.74v-25.12z"
                  />
                  <path
                    style={{
                      mixBlendMode: "multiply",
                    }}
                    fill="#c8c8c8"
                    d="M586.62 276.04l.42-.02v25.13l-.42.02v-25.13z"
                  />
                </g>
                <g>
                  <path
                    style={{
                      mixBlendMode: "screen",
                    }}
                    fill="#5c5d5e"
                    d="M581.81 273.29l1.11.74v25.12l-1.11-.73v-25.13z"
                  />
                  <path
                    style={{
                      mixBlendMode: "multiply",
                    }}
                    fill="#c8c8c8"
                    d="M582.97 273.93l.43-.02v25.12l-.43.02v-25.12z"
                  />
                </g>
                <g>
                  <path
                    style={{
                      mixBlendMode: "screen",
                    }}
                    fill="#5c5d5e"
                    d="M578.17 271.18l1.11.73v25.13l-1.11-.74v-25.12z"
                  />
                  <path
                    style={{
                      mixBlendMode: "multiply",
                    }}
                    fill="#c8c8c8"
                    d="M579.33 271.81l.42-.02v25.13l-.42.01v-25.12z"
                  />
                </g>
                <g>
                  <path
                    style={{
                      mixBlendMode: "screen",
                    }}
                    fill="#5c5d5e"
                    d="M574.53 269.06l1.11.74v25.12l-1.11-.74v-25.12z"
                  />
                  <path
                    style={{
                      mixBlendMode: "multiply",
                    }}
                    fill="#c8c8c8"
                    d="M575.69 269.7l.42-.02v25.12l-.42.02V269.7z"
                  />
                </g>
                <g>
                  <path
                    style={{
                      mixBlendMode: "screen",
                    }}
                    fill="#5c5d5e"
                    d="M570.88 266.95l1.12.73v25.13l-1.12-.74v-25.12z"
                  />
                  <path
                    style={{
                      mixBlendMode: "multiply",
                    }}
                    fill="#c8c8c8"
                    d="M572.05 267.58l.42-.02v25.13l-.42.01v-25.12z"
                  />
                </g>
                <g>
                  <path
                    style={{
                      mixBlendMode: "screen",
                    }}
                    fill="#5c5d5e"
                    d="M567.24 264.83l1.11.74v25.12l-1.11-.74v-25.12z"
                  />
                  <path
                    style={{
                      mixBlendMode: "multiply",
                    }}
                    fill="#c8c8c8"
                    d="M568.4 265.46l.43-.01v25.12l-.43.02v-25.13z"
                  />
                </g>
                <g>
                  <path
                    style={{
                      mixBlendMode: "screen",
                    }}
                    fill="#5c5d5e"
                    d="M563.6 262.71l1.11.74v25.12l-1.11-.73v-25.13z"
                  />
                  <path
                    style={{
                      mixBlendMode: "multiply",
                    }}
                    fill="#c8c8c8"
                    d="M564.76 263.35l.42-.02v25.12l-.42.02v-25.12z"
                  />
                </g>
                <g>
                  <path
                    style={{
                      mixBlendMode: "screen",
                    }}
                    fill="#5c5d5e"
                    d="M559.96 260.6l1.11.73v25.13l-1.11-.74V260.6z"
                  />
                  <path
                    style={{
                      mixBlendMode: "multiply",
                    }}
                    fill="#c8c8c8"
                    d="M561.12 261.23l.42-.02v25.13l-.42.01v-25.12z"
                  />
                </g>
                <g>
                  <path
                    style={{
                      mixBlendMode: "screen",
                    }}
                    fill="#5c5d5e"
                    d="M556.31 258.48l1.11.74v25.12l-1.11-.73v-25.13z"
                  />
                  <path
                    style={{
                      mixBlendMode: "multiply",
                    }}
                    fill="#c8c8c8"
                    d="M557.48 259.12l.42-.02v25.12l-.42.02v-25.12z"
                  />
                </g>
                <path
                  style={{
                    mixBlendMode: "multiply",
                  }}
                  fill="#dadada"
                  d="M639.15 306.24v2.21L555 259.6v22.83l-.75-.43v-25.04l84.9 49.28z"
                />
                <path
                  fill="url(#prefix__New_Gradient_Swatch_copy_27-2)"
                  d="M641.25 305.02v30.02l24.45-13.91v-30.08l-24.45 13.97z"
                />
                <path
                  style={{
                    mixBlendMode: "multiply",
                  }}
                  fill="#eaeaea"
                  d="M663.58 319.9v-25.21l-20.22 11.56v25.15l20.22-11.5z"
                />
                <path
                  fill="url(#prefix__New_Gradient_Swatch_copy_27-3)"
                  d="M665.7 291.05l-24.45 13.97-89.11-51.73 24.47-13.95 89.09 51.71z"
                />
                <g>
                  <path
                    style={{
                      mixBlendMode: "screen",
                    }}
                    fill="#5c5d5e"
                    d="M645.41 305.48l-1.11.74v25.12l1.11-.74v-25.12z"
                  />
                  <path
                    style={{
                      mixBlendMode: "multiply",
                    }}
                    fill="#c8c8c8"
                    d="M644.25 306.12l-.42-.02v25.12l.42.02v-25.12z"
                  />
                  <path
                    style={{
                      mixBlendMode: "screen",
                    }}
                    fill="#5c5d5e"
                    d="M648.71 303.55l-1.11.73v25.12l1.11-.73v-25.12z"
                  />
                  <path
                    style={{
                      mixBlendMode: "multiply",
                    }}
                    fill="#c8c8c8"
                    d="M647.54 304.18l-.42-.02v25.13l.42.01v-25.12z"
                  />
                  <path
                    style={{
                      mixBlendMode: "screen",
                    }}
                    fill="#5c5d5e"
                    d="M652 301.61l-1.11.74v25.12l1.11-.74v-25.12z"
                  />
                  <path
                    style={{
                      mixBlendMode: "multiply",
                    }}
                    fill="#c8c8c8"
                    d="M650.84 302.25l-.43-.02v25.12l.43.02v-25.12z"
                  />
                  <g>
                    <path
                      style={{
                        mixBlendMode: "screen",
                      }}
                      fill="#5c5d5e"
                      d="M655.29 299.68l-1.11.73v25.13l1.11-.74v-25.12z"
                    />
                    <path
                      style={{
                        mixBlendMode: "multiply",
                      }}
                      fill="#c8c8c8"
                      d="M654.13 300.31l-.42-.02v25.13l.42.01v-25.12z"
                    />
                  </g>
                  <g>
                    <path
                      style={{
                        mixBlendMode: "screen",
                      }}
                      fill="#5c5d5e"
                      d="M658.58 297.74l-1.11.74v25.12l1.11-.74v-25.12z"
                    />
                    <path
                      style={{
                        mixBlendMode: "multiply",
                      }}
                      fill="#c8c8c8"
                      d="M657.42 298.38l-.42-.02v25.12l.42.02v-25.12z"
                    />
                  </g>
                  <g>
                    <path
                      style={{
                        mixBlendMode: "screen",
                      }}
                      fill="#5c5d5e"
                      d="M661.88 295.81l-1.11.73v25.13l1.11-.74v-25.12z"
                    />
                    <path
                      style={{
                        mixBlendMode: "multiply",
                      }}
                      fill="#c8c8c8"
                      d="M660.72 296.44l-.43-.02v25.13l.43.01v-25.12z"
                    />
                  </g>
                </g>
                <path
                  style={{
                    mixBlendMode: "multiply",
                  }}
                  fill="#dadada"
                  d="M642.72 306.69v2.21l20.48-11.98v22.83l.73-.43v-25.04l-21.21 12.41z"
                />
              </motion.g>
              <path
                fill="url(#prefix__New_Gradient_Swatch_copy_38-11)"
                d="M502.06 200.92l-4.26-2.17.25-.14-.1-.06 8.52-4.89 127.67 73.42-.08.05.08.05-8.42 4.85-1.52-.87-122.14-70.24z"
              />
              <motion.g id="prefix__fixedcontainers"
              
              variants={trainVariant}
              animate={trainControls}
              initial="start"
              
              >
                <path
                  fill="url(#prefix__New_Gradient_Swatch_copy_28)"
                  d="M736.68 431.36v30.05l-89.24-51.9v-29.96l89.24 51.81z"
                />
                <path
                  style={{
                    mixBlendMode: "multiply",
                  }}
                  fill="#eceded"
                  d="M734.57 432.57l-85.01-49.35v25.08l85.01 49.43v-25.16z"
                />
                <path
                  style={{
                    mixBlendMode: "screen",
                  }}
                  fill="#707372"
                  d="M731.87 431.36l1.11.74v25.16l-1.11-.74v-25.16z"
                />
                <path
                  style={{
                    mixBlendMode: "multiply",
                  }}
                  fill="#cfcfcf"
                  d="M733.03 432l.42-.02v25.16l-.42.01V432z"
                />
                <path
                  style={{
                    mixBlendMode: "screen",
                  }}
                  fill="#707372"
                  d="M728.22 429.24l1.11.74v25.16l-1.11-.74v-25.16z"
                />
                <path
                  style={{
                    mixBlendMode: "multiply",
                  }}
                  fill="#cfcfcf"
                  d="M729.38 429.88l.43-.02v25.16l-.43.01v-25.15z"
                />
                <path
                  style={{
                    mixBlendMode: "screen",
                  }}
                  fill="#707372"
                  d="M724.57 427.12l1.11.74v25.16l-1.11-.74v-25.16z"
                />
                <path
                  style={{
                    mixBlendMode: "multiply",
                  }}
                  fill="#cfcfcf"
                  d="M725.74 427.76l.42-.02v25.16l-.42.02v-25.16z"
                />
                <path
                  style={{
                    mixBlendMode: "screen",
                  }}
                  fill="#707372"
                  d="M720.92 425l1.12.74v25.16l-1.12-.74V425z"
                />
                <path
                  style={{
                    mixBlendMode: "multiply",
                  }}
                  fill="#cfcfcf"
                  d="M722.09 425.64l.42-.02v25.16l-.42.02v-25.16z"
                />
                <path
                  style={{
                    mixBlendMode: "screen",
                  }}
                  fill="#707372"
                  d="M717.28 422.89l1.11.73v25.16l-1.11-.74v-25.15z"
                />
                <path
                  style={{
                    mixBlendMode: "multiply",
                  }}
                  fill="#cfcfcf"
                  d="M718.44 423.52l.42-.02v25.16l-.42.02v-25.16z"
                />
                <path
                  style={{
                    mixBlendMode: "screen",
                  }}
                  fill="#707372"
                  d="M713.63 420.77l1.11.73v25.16l-1.11-.74v-25.15z"
                />
                <path
                  style={{
                    mixBlendMode: "multiply",
                  }}
                  fill="#cfcfcf"
                  d="M714.79 421.4l.43-.02v25.16l-.43.02V421.4z"
                />
                <path
                  style={{
                    mixBlendMode: "screen",
                  }}
                  fill="#707372"
                  d="M709.98 418.65l1.11.73v25.16l-1.11-.73v-25.16z"
                />
                <path
                  style={{
                    mixBlendMode: "multiply",
                  }}
                  fill="#cfcfcf"
                  d="M711.14 419.28l.43-.02v25.16l-.43.02v-25.16z"
                />
                <path
                  style={{
                    mixBlendMode: "screen",
                  }}
                  fill="#707372"
                  d="M706.33 416.53l1.12.74v25.16l-1.12-.74v-25.16z"
                />
                <path
                  style={{
                    mixBlendMode: "multiply",
                  }}
                  fill="#cfcfcf"
                  d="M707.5 417.17l.42-.02v25.16l-.42.01v-25.15z"
                />
                <path
                  style={{
                    mixBlendMode: "screen",
                  }}
                  fill="#707372"
                  d="M702.69 414.41l1.11.74v25.16l-1.11-.74v-25.16z"
                />
                <path
                  style={{
                    mixBlendMode: "multiply",
                  }}
                  fill="#cfcfcf"
                  d="M703.85 415.05l.42-.02v25.16l-.42.01v-25.15z"
                />
                <path
                  style={{
                    mixBlendMode: "screen",
                  }}
                  fill="#707372"
                  d="M699.04 412.29l1.11.74v25.16l-1.11-.74v-25.16z"
                />
                <path
                  style={{
                    mixBlendMode: "multiply",
                  }}
                  fill="#cfcfcf"
                  d="M700.2 412.93l.43-.02v25.16l-.43.01v-25.15z"
                />
                <path
                  style={{
                    mixBlendMode: "screen",
                  }}
                  fill="#707372"
                  d="M695.39 410.17l1.11.74v25.16l-1.11-.74v-25.16z"
                />
                <path
                  style={{
                    mixBlendMode: "multiply",
                  }}
                  fill="#cfcfcf"
                  d="M696.55 410.81l.43-.02v25.16l-.43.01v-25.15z"
                />
                <path
                  style={{
                    mixBlendMode: "screen",
                  }}
                  fill="#707372"
                  d="M691.74 408.06l1.12.73v25.16l-1.12-.74v-25.15z"
                />
                <path
                  style={{
                    mixBlendMode: "multiply",
                  }}
                  fill="#cfcfcf"
                  d="M692.91 408.69l.42-.02v25.16l-.42.02v-25.16z"
                />
                <g>
                  <path
                    style={{
                      mixBlendMode: "screen",
                    }}
                    fill="#707372"
                    d="M688.1 405.94l1.11.73v25.16l-1.11-.74v-25.15z"
                  />
                  <path
                    style={{
                      mixBlendMode: "multiply",
                    }}
                    fill="#cfcfcf"
                    d="M689.26 406.57l.42-.02v25.16l-.42.02v-25.16z"
                  />
                </g>
                <g>
                  <path
                    style={{
                      mixBlendMode: "screen",
                    }}
                    fill="#707372"
                    d="M684.45 403.82l1.11.73v25.16l-1.11-.74v-25.15z"
                  />
                  <path
                    style={{
                      mixBlendMode: "multiply",
                    }}
                    fill="#cfcfcf"
                    d="M685.61 404.45l.42-.02v25.16l-.42.02v-25.16z"
                  />
                </g>
                <g>
                  <path
                    style={{
                      mixBlendMode: "screen",
                    }}
                    fill="#707372"
                    d="M680.8 401.7l1.11.74v25.15l-1.11-.73V401.7z"
                  />
                  <path
                    style={{
                      mixBlendMode: "multiply",
                    }}
                    fill="#cfcfcf"
                    d="M681.96 402.33l.43-.01v25.15l-.43.02v-25.16z"
                  />
                </g>
                <g>
                  <path
                    style={{
                      mixBlendMode: "screen",
                    }}
                    fill="#707372"
                    d="M677.15 399.58l1.11.74v25.16l-1.11-.74v-25.16z"
                  />
                  <path
                    style={{
                      mixBlendMode: "multiply",
                    }}
                    fill="#cfcfcf"
                    d="M678.32 400.21l.42-.01v25.16l-.42.01v-25.16z"
                  />
                </g>
                <g>
                  <path
                    style={{
                      mixBlendMode: "screen",
                    }}
                    fill="#707372"
                    d="M673.5 397.46l1.12.74v25.16l-1.12-.74v-25.16z"
                  />
                  <path
                    style={{
                      mixBlendMode: "multiply",
                    }}
                    fill="#cfcfcf"
                    d="M674.67 398.1l.42-.02v25.16l-.42.01V398.1z"
                  />
                </g>
                <g>
                  <path
                    style={{
                      mixBlendMode: "screen",
                    }}
                    fill="#707372"
                    d="M669.86 395.34l1.11.74v25.16l-1.11-.74v-25.16z"
                  />
                  <path
                    style={{
                      mixBlendMode: "multiply",
                    }}
                    fill="#cfcfcf"
                    d="M671.02 395.98l.42-.02v25.16l-.42.01v-25.15z"
                  />
                </g>
                <g>
                  <path
                    style={{
                      mixBlendMode: "screen",
                    }}
                    fill="#707372"
                    d="M666.21 393.23l1.11.73v25.16l-1.11-.74v-25.15z"
                  />
                  <path
                    style={{
                      mixBlendMode: "multiply",
                    }}
                    fill="#cfcfcf"
                    d="M667.37 393.86l.43-.02V419l-.43.02v-25.16z"
                  />
                </g>
                <g>
                  <path
                    style={{
                      mixBlendMode: "screen",
                    }}
                    fill="#707372"
                    d="M662.56 391.11l1.11.73V417l-1.11-.74v-25.15z"
                  />
                  <path
                    style={{
                      mixBlendMode: "multiply",
                    }}
                    fill="#cfcfcf"
                    d="M663.73 391.74l.42-.02v25.16l-.42.02v-25.16z"
                  />
                </g>
                <g>
                  <path
                    style={{
                      mixBlendMode: "screen",
                    }}
                    fill="#707372"
                    d="M658.91 388.99l1.12.73v25.16l-1.12-.74v-25.15z"
                  />
                  <path
                    style={{
                      mixBlendMode: "multiply",
                    }}
                    fill="#cfcfcf"
                    d="M660.08 389.62l.42-.02v25.16l-.42.02v-25.16z"
                  />
                </g>
                <g>
                  <path
                    style={{
                      mixBlendMode: "screen",
                    }}
                    fill="#707372"
                    d="M655.27 386.87l1.11.74v25.15l-1.11-.74v-25.15z"
                  />
                  <path
                    style={{
                      mixBlendMode: "multiply",
                    }}
                    fill="#cfcfcf"
                    d="M656.43 387.5l.42-.01v25.15l-.42.02V387.5z"
                  />
                </g>
                <g>
                  <path
                    style={{
                      mixBlendMode: "screen",
                    }}
                    fill="#707372"
                    d="M651.62 384.75l1.11.74v25.15l-1.11-.73v-25.16z"
                  />
                  <path
                    style={{
                      mixBlendMode: "multiply",
                    }}
                    fill="#cfcfcf"
                    d="M652.78 385.38l.43-.01v25.15l-.43.02v-25.16z"
                  />
                </g>
                <path
                  style={{
                    mixBlendMode: "multiply",
                  }}
                  fill="#dedfdf"
                  d="M734.57 432.57v2.22l-84.27-48.92v22.86l-.74-.43v-25.08l85.01 49.35z"
                />
                <path
                  fill="url(#prefix__New_Gradient_Swatch_copy_28-2)"
                  d="M736.67 431.36v30.05l24.48-13.93v-30.11l-24.48 13.99z"
                />
                <path
                  style={{
                    mixBlendMode: "multiply",
                  }}
                  fill="#eceded"
                  d="M759.04 446.25v-25.24l-20.25 11.57v25.19l20.25-11.52z"
                />
                <path
                  fill="url(#prefix__New_Gradient_Swatch_copy_28-3)"
                  d="M761.15 417.37l-24.48 13.99-89.23-51.81 24.5-13.97 89.21 51.79z"
                />
                <g>
                  <path
                    style={{
                      mixBlendMode: "screen",
                    }}
                    fill="#707372"
                    d="M740.84 431.81l-1.11.74v25.16l1.11-.74v-25.16z"
                  />
                  <path
                    style={{
                      mixBlendMode: "multiply",
                    }}
                    fill="#cfcfcf"
                    d="M739.68 432.45l-.42-.02v25.16l.42.01v-25.15z"
                  />
                  <path
                    style={{
                      mixBlendMode: "screen",
                    }}
                    fill="#707372"
                    d="M744.14 429.88l-1.11.73v25.16l1.11-.74v-25.15z"
                  />
                  <path
                    style={{
                      mixBlendMode: "multiply",
                    }}
                    fill="#cfcfcf"
                    d="M742.98 430.51l-.43-.02v25.16l.43.02v-25.16z"
                  />
                  <path
                    style={{
                      mixBlendMode: "screen",
                    }}
                    fill="#707372"
                    d="M747.44 427.94l-1.12.73v25.16l1.12-.74v-25.15z"
                  />
                  <path
                    style={{
                      mixBlendMode: "multiply",
                    }}
                    fill="#cfcfcf"
                    d="M746.27 428.57l-.42-.02v25.16l.42.02v-25.16z"
                  />
                  <g>
                    <path
                      style={{
                        mixBlendMode: "screen",
                      }}
                      fill="#707372"
                      d="M750.73 426l-1.11.74v25.15l1.11-.74V426z"
                    />
                    <path
                      style={{
                        mixBlendMode: "multiply",
                      }}
                      fill="#cfcfcf"
                      d="M749.57 426.63l-.42-.01v25.15l.42.02v-25.16z"
                    />
                  </g>
                  <g>
                    <path
                      style={{
                        mixBlendMode: "screen",
                      }}
                      fill="#707372"
                      d="M754.03 424.06l-1.11.74v25.16l1.11-.74v-25.16z"
                    />
                    <path
                      style={{
                        mixBlendMode: "multiply",
                      }}
                      fill="#cfcfcf"
                      d="M752.87 424.7l-.43-.02v25.16l.43.01V424.7z"
                    />
                  </g>
                  <g>
                    <path
                      style={{
                        mixBlendMode: "screen",
                      }}
                      fill="#707372"
                      d="M757.33 422.12l-1.11.74v25.16l1.11-.74v-25.16z"
                    />
                    <path
                      style={{
                        mixBlendMode: "multiply",
                      }}
                      fill="#cfcfcf"
                      d="M756.16 422.76l-.42-.02v25.16l.42.02v-25.16z"
                    />
                  </g>
                </g>
                <path
                  style={{
                    mixBlendMode: "multiply",
                  }}
                  fill="#dedfdf"
                  d="M738.14 433.02v2.22l20.51-12v22.86l.74-.43V420.6l-21.25 12.42z"
                />
                <g>
                  <path
                    fill="url(#prefix__New_Gradient_Swatch_copy_27-4)"
                    d="M832.56 487.94v30.05l-89.24-51.89v-29.97l89.24 51.81z"
                  />
                  <path
                    style={{
                      mixBlendMode: "multiply",
                    }}
                    fill="#eaeaea"
                    d="M830.45 489.15l-85.01-49.35v25.08l85.01 49.43v-25.16z"
                  />
                  <path
                    style={{
                      mixBlendMode: "screen",
                    }}
                    fill="#5c5d5e"
                    d="M827.75 487.94l1.11.74v25.16l-1.11-.74v-25.16z"
                  />
                  <path
                    style={{
                      mixBlendMode: "multiply",
                    }}
                    fill="#c8c8c8"
                    d="M828.91 488.58l.43-.02v25.16l-.43.01v-25.15z"
                  />
                  <path
                    style={{
                      mixBlendMode: "screen",
                    }}
                    fill="#5c5d5e"
                    d="M824.1 485.82l1.11.74v25.16l-1.11-.74v-25.16z"
                  />
                  <path
                    style={{
                      mixBlendMode: "multiply",
                    }}
                    fill="#c8c8c8"
                    d="M825.26 486.46l.43-.02v25.16l-.43.01v-25.15z"
                  />
                  <path
                    style={{
                      mixBlendMode: "screen",
                    }}
                    fill="#5c5d5e"
                    d="M820.45 483.7l1.12.74v25.16l-1.12-.74V483.7z"
                  />
                  <path
                    style={{
                      mixBlendMode: "multiply",
                    }}
                    fill="#c8c8c8"
                    d="M821.62 484.34l.42-.02v25.16l-.42.02v-25.16z"
                  />
                  <path
                    style={{
                      mixBlendMode: "screen",
                    }}
                    fill="#5c5d5e"
                    d="M816.81 481.59l1.11.73v25.16l-1.11-.74v-25.15z"
                  />
                  <path
                    style={{
                      mixBlendMode: "multiply",
                    }}
                    fill="#c8c8c8"
                    d="M817.97 482.22l.42-.02v25.16l-.42.02v-25.16z"
                  />
                  <path
                    style={{
                      mixBlendMode: "screen",
                    }}
                    fill="#5c5d5e"
                    d="M813.16 479.47l1.11.73v25.16l-1.11-.74v-25.15z"
                  />
                  <path
                    style={{
                      mixBlendMode: "multiply",
                    }}
                    fill="#c8c8c8"
                    d="M814.32 480.1l.43-.02v25.16l-.43.02V480.1z"
                  />
                  <path
                    style={{
                      mixBlendMode: "screen",
                    }}
                    fill="#5c5d5e"
                    d="M809.51 477.35l1.11.73v25.16l-1.11-.74v-25.15z"
                  />
                  <path
                    style={{
                      mixBlendMode: "multiply",
                    }}
                    fill="#c8c8c8"
                    d="M810.67 477.98l.43-.02v25.16l-.43.02v-25.16z"
                  />
                  <path
                    style={{
                      mixBlendMode: "screen",
                    }}
                    fill="#5c5d5e"
                    d="M805.86 475.23l1.12.74v25.15l-1.12-.73v-25.16z"
                  />
                  <path
                    style={{
                      mixBlendMode: "multiply",
                    }}
                    fill="#c8c8c8"
                    d="M807.03 475.86l.42-.01V501l-.42.02v-25.16z"
                  />
                  <path
                    style={{
                      mixBlendMode: "screen",
                    }}
                    fill="#5c5d5e"
                    d="M802.22 473.11l1.11.74V499l-1.11-.73v-25.16z"
                  />
                  <path
                    style={{
                      mixBlendMode: "multiply",
                    }}
                    fill="#c8c8c8"
                    d="M803.38 473.75l.42-.02v25.15l-.42.02v-25.15z"
                  />
                  <path
                    style={{
                      mixBlendMode: "screen",
                    }}
                    fill="#5c5d5e"
                    d="M798.57 470.99l1.11.74v25.16l-1.11-.74v-25.16z"
                  />
                  <path
                    style={{
                      mixBlendMode: "multiply",
                    }}
                    fill="#c8c8c8"
                    d="M799.73 471.63l.42-.02v25.16l-.42.01v-25.15z"
                  />
                  <path
                    style={{
                      mixBlendMode: "screen",
                    }}
                    fill="#5c5d5e"
                    d="M794.92 468.87l1.11.74v25.16l-1.11-.74v-25.16z"
                  />
                  <path
                    style={{
                      mixBlendMode: "multiply",
                    }}
                    fill="#c8c8c8"
                    d="M796.08 469.51l.43-.02v25.16l-.43.01v-25.15z"
                  />
                  <path
                    style={{
                      mixBlendMode: "screen",
                    }}
                    fill="#5c5d5e"
                    d="M791.27 466.75l1.11.74v25.16l-1.11-.74v-25.16z"
                  />
                  <path
                    style={{
                      mixBlendMode: "multiply",
                    }}
                    fill="#c8c8c8"
                    d="M792.44 467.39l.42-.02v25.16l-.42.02v-25.16z"
                  />
                  <path
                    style={{
                      mixBlendMode: "screen",
                    }}
                    fill="#5c5d5e"
                    d="M787.62 464.64l1.12.73v25.16l-1.12-.74v-25.15z"
                  />
                  <path
                    style={{
                      mixBlendMode: "multiply",
                    }}
                    fill="#c8c8c8"
                    d="M788.79 465.27l.42-.02v25.16l-.42.02v-25.16z"
                  />
                  <g>
                    <path
                      style={{
                        mixBlendMode: "screen",
                      }}
                      fill="#5c5d5e"
                      d="M783.98 462.52l1.11.73v25.16l-1.11-.74v-25.15z"
                    />
                    <path
                      style={{
                        mixBlendMode: "multiply",
                      }}
                      fill="#c8c8c8"
                      d="M785.14 463.15l.42-.02v25.16l-.42.02v-25.16z"
                    />
                  </g>
                  <g>
                    <path
                      style={{
                        mixBlendMode: "screen",
                      }}
                      fill="#5c5d5e"
                      d="M780.33 460.4l1.11.73v25.16l-1.11-.73V460.4z"
                    />
                    <path
                      style={{
                        mixBlendMode: "multiply",
                      }}
                      fill="#c8c8c8"
                      d="M781.49 461.03l.43-.02v25.16l-.43.02v-25.16z"
                    />
                  </g>
                  <g>
                    <path
                      style={{
                        mixBlendMode: "screen",
                      }}
                      fill="#5c5d5e"
                      d="M776.68 458.28l1.11.74v25.15l-1.11-.73v-25.16z"
                    />
                    <path
                      style={{
                        mixBlendMode: "multiply",
                      }}
                      fill="#c8c8c8"
                      d="M777.85 458.91l.42-.01v25.15l-.42.02v-25.16z"
                    />
                  </g>
                  <g>
                    <path
                      style={{
                        mixBlendMode: "screen",
                      }}
                      fill="#5c5d5e"
                      d="M773.03 456.16l1.12.74v25.16l-1.12-.74v-25.16z"
                    />
                    <path
                      style={{
                        mixBlendMode: "multiply",
                      }}
                      fill="#c8c8c8"
                      d="M774.2 456.8l.42-.02v25.16l-.42.01V456.8z"
                    />
                  </g>
                  <g>
                    <path
                      style={{
                        mixBlendMode: "screen",
                      }}
                      fill="#5c5d5e"
                      d="M769.39 454.04l1.11.74v25.16l-1.11-.74v-25.16z"
                    />
                    <path
                      style={{
                        mixBlendMode: "multiply",
                      }}
                      fill="#c8c8c8"
                      d="M770.55 454.68l.42-.02v25.16l-.42.01v-25.15z"
                    />
                  </g>
                  <g>
                    <path
                      style={{
                        mixBlendMode: "screen",
                      }}
                      fill="#5c5d5e"
                      d="M765.74 451.92l1.11.74v25.16l-1.11-.74v-25.16z"
                    />
                    <path
                      style={{
                        mixBlendMode: "multiply",
                      }}
                      fill="#c8c8c8"
                      d="M766.9 452.56l.43-.02v25.16l-.43.01v-25.15z"
                    />
                  </g>
                  <g>
                    <path
                      style={{
                        mixBlendMode: "screen",
                      }}
                      fill="#5c5d5e"
                      d="M762.09 449.81l1.11.73v25.16l-1.11-.74v-25.15z"
                    />
                    <path
                      style={{
                        mixBlendMode: "multiply",
                      }}
                      fill="#c8c8c8"
                      d="M763.25 450.44l.43-.02v25.16l-.43.02v-25.16z"
                    />
                  </g>
                  <g>
                    <path
                      style={{
                        mixBlendMode: "screen",
                      }}
                      fill="#5c5d5e"
                      d="M758.44 447.69l1.11.73v25.16l-1.11-.74v-25.15z"
                    />
                    <path
                      style={{
                        mixBlendMode: "multiply",
                      }}
                      fill="#c8c8c8"
                      d="M759.61 448.32l.42-.02v25.16l-.42.02v-25.16z"
                    />
                  </g>
                  <g>
                    <path
                      style={{
                        mixBlendMode: "screen",
                      }}
                      fill="#5c5d5e"
                      d="M754.79 445.57l1.12.73v25.16l-1.12-.74v-25.15z"
                    />
                    <path
                      style={{
                        mixBlendMode: "multiply",
                      }}
                      fill="#c8c8c8"
                      d="M755.96 446.2l.42-.02v25.16l-.42.02V446.2z"
                    />
                  </g>
                  <g>
                    <path
                      style={{
                        mixBlendMode: "screen",
                      }}
                      fill="#5c5d5e"
                      d="M751.15 443.45l1.11.74v25.15l-1.11-.73v-25.16z"
                    />
                    <path
                      style={{
                        mixBlendMode: "multiply",
                      }}
                      fill="#c8c8c8"
                      d="M752.31 444.08l.42-.02v25.16l-.42.02v-25.16z"
                    />
                  </g>
                  <g>
                    <path
                      style={{
                        mixBlendMode: "screen",
                      }}
                      fill="#5c5d5e"
                      d="M747.5 441.33l1.11.74v25.16l-1.11-.74v-25.16z"
                    />
                    <path
                      style={{
                        mixBlendMode: "multiply",
                      }}
                      fill="#c8c8c8"
                      d="M748.66 441.96l.43-.01v25.16l-.43.01v-25.16z"
                    />
                  </g>
                  <path
                    style={{
                      mixBlendMode: "multiply",
                    }}
                    fill="#dadada"
                    d="M830.45 489.15v2.22l-84.27-48.92v22.86l-.74-.43V439.8l85.01 49.35z"
                  />
                  <path
                    fill="url(#prefix__New_Gradient_Swatch_copy_27-5)"
                    d="M832.55 487.94v30.05l24.48-13.93v-30.12l-24.48 14z"
                  />
                  <path
                    style={{
                      mixBlendMode: "multiply",
                    }}
                    fill="#eaeaea"
                    d="M854.92 502.83v-25.24l-20.25 11.57v25.19l20.25-11.52z"
                  />
                  <path
                    fill="url(#prefix__New_Gradient_Swatch_copy_27-6)"
                    d="M857.03 473.94l-24.48 14-89.23-51.81 24.5-13.97 89.21 51.78z"
                  />
                  <g>
                    <path
                      style={{
                        mixBlendMode: "screen",
                      }}
                      fill="#5c5d5e"
                      d="M836.72 488.39l-1.11.74v25.16l1.11-.74v-25.16z"
                    />
                    <path
                      style={{
                        mixBlendMode: "multiply",
                      }}
                      fill="#c8c8c8"
                      d="M835.56 489.03l-.42-.02v25.16l.42.01v-25.15z"
                    />
                    <path
                      style={{
                        mixBlendMode: "screen",
                      }}
                      fill="#5c5d5e"
                      d="M840.02 486.45l-1.11.74v25.16l1.11-.74v-25.16z"
                    />
                    <path
                      style={{
                        mixBlendMode: "multiply",
                      }}
                      fill="#c8c8c8"
                      d="M838.86 487.09l-.43-.02v25.16l.43.02v-25.16z"
                    />
                    <path
                      style={{
                        mixBlendMode: "screen",
                      }}
                      fill="#5c5d5e"
                      d="M843.32 484.52l-1.11.73v25.16l1.11-.74v-25.15z"
                    />
                    <path
                      style={{
                        mixBlendMode: "multiply",
                      }}
                      fill="#c8c8c8"
                      d="M842.15 485.15l-.42-.02v25.16l.42.02v-25.16z"
                    />
                    <g>
                      <path
                        style={{
                          mixBlendMode: "screen",
                        }}
                        fill="#5c5d5e"
                        d="M846.61 482.58l-1.11.74v25.15l1.11-.73v-25.16z"
                      />
                      <path
                        style={{
                          mixBlendMode: "multiply",
                        }}
                        fill="#c8c8c8"
                        d="M845.45 483.21l-.42-.01v25.15l.42.02v-25.16z"
                      />
                    </g>
                    <g>
                      <path
                        style={{
                          mixBlendMode: "screen",
                        }}
                        fill="#5c5d5e"
                        d="M849.91 480.64l-1.11.74v25.16l1.11-.74v-25.16z"
                      />
                      <path
                        style={{
                          mixBlendMode: "multiply",
                        }}
                        fill="#c8c8c8"
                        d="M848.75 481.28l-.42-.02v25.16l.42.01v-25.15z"
                      />
                    </g>
                    <g>
                      <path
                        style={{
                          mixBlendMode: "screen",
                        }}
                        fill="#5c5d5e"
                        d="M853.21 478.7l-1.11.74v25.16l1.11-.74V478.7z"
                      />
                      <path
                        style={{
                          mixBlendMode: "multiply",
                        }}
                        fill="#c8c8c8"
                        d="M852.04 479.34l-.42-.02v25.16l.42.02v-25.16z"
                      />
                    </g>
                  </g>
                  <path
                    style={{
                      mixBlendMode: "multiply",
                    }}
                    fill="#dadada"
                    d="M834.02 489.61v2.21l20.51-12v22.86l.74-.43v-25.07l-21.25 12.43z"
                  />
                </g>
                <g>
                  <path
                    fill="url(#prefix__New_Gradient_Swatch_copy_17)"
                    d="M890.99 522.58v26.99l-48.96-28.34v-26.91l48.96 28.26z"
                  />
                  <path
                    fill="url(#prefix__New_Gradient_Swatch_copy_16)"
                    d="M890.99 533.13v16.44l-48.96-28.34v-16.36l48.96 28.26z"
                  />
                  <path
                    style={{
                      mixBlendMode: "multiply",
                    }}
                    fill="#e7e7e7"
                    d="M889.09 523.68l-45.16-26.06v22.52l45.16 26.13v-22.59z"
                  />
                  <path
                    style={{
                      mixBlendMode: "screen",
                    }}
                    fill="#414141"
                    d="M885.09 521.82l1 .66v22.59l-1-.66v-22.59z"
                  />
                  <path
                    style={{
                      mixBlendMode: "multiply",
                    }}
                    fill="#bebebe"
                    d="M886.13 522.39l.38-.01v22.59l-.38.01v-22.59z"
                  />
                  <path
                    style={{
                      mixBlendMode: "screen",
                    }}
                    fill="#414141"
                    d="M881.81 519.92l1 .66v22.59l-1-.66v-22.59z"
                  />
                  <path
                    style={{
                      mixBlendMode: "multiply",
                    }}
                    fill="#bebebe"
                    d="M882.86 520.49l.38-.02v22.59l-.38.02v-22.59z"
                  />
                  <path
                    style={{
                      mixBlendMode: "screen",
                    }}
                    fill="#414141"
                    d="M878.54 518.02l.99.66v22.59l-.99-.66v-22.59z"
                  />
                  <path
                    style={{
                      mixBlendMode: "multiply",
                    }}
                    fill="#bebebe"
                    d="M879.58 518.59l.38-.02v22.59l-.38.02v-22.59z"
                  />
                  <path
                    style={{
                      mixBlendMode: "screen",
                    }}
                    fill="#414141"
                    d="M875.26 516.11l1 .66v22.6l-1-.67v-22.59z"
                  />
                  <path
                    style={{
                      mixBlendMode: "multiply",
                    }}
                    fill="#bebebe"
                    d="M876.31 516.68l.38-.01v22.59l-.38.01v-22.59z"
                  />
                  <path
                    style={{
                      mixBlendMode: "screen",
                    }}
                    fill="#414141"
                    d="M871.99 514.21l.99.66v22.59l-.99-.66v-22.59z"
                  />
                  <path
                    style={{
                      mixBlendMode: "multiply",
                    }}
                    fill="#bebebe"
                    d="M873.03 514.78l.38-.02v22.6l-.38.01v-22.59z"
                  />
                  <path
                    style={{
                      mixBlendMode: "screen",
                    }}
                    fill="#414141"
                    d="M868.71 512.31l1 .66v22.59l-1-.66v-22.59z"
                  />
                  <path
                    style={{
                      mixBlendMode: "multiply",
                    }}
                    fill="#bebebe"
                    d="M869.75 512.88l.38-.02v22.59l-.38.02v-22.59z"
                  />
                  <path
                    style={{
                      mixBlendMode: "screen",
                    }}
                    fill="#414141"
                    d="M865.43 510.41l1 .66v22.59l-1-.66v-22.59z"
                  />
                  <path
                    style={{
                      mixBlendMode: "multiply",
                    }}
                    fill="#bebebe"
                    d="M866.48 510.98l.38-.02v22.59l-.38.02v-22.59z"
                  />
                  <path
                    style={{
                      mixBlendMode: "screen",
                    }}
                    fill="#414141"
                    d="M862.16 508.5l1 .66v22.6l-1-.67V508.5z"
                  />
                  <path
                    style={{
                      mixBlendMode: "multiply",
                    }}
                    fill="#bebebe"
                    d="M863.2 509.07l.38-.01v22.59l-.38.01v-22.59z"
                  />
                  <path
                    style={{
                      mixBlendMode: "screen",
                    }}
                    fill="#414141"
                    d="M858.88 506.6l1 .66v22.59l-1-.66V506.6z"
                  />
                  <path
                    style={{
                      mixBlendMode: "multiply",
                    }}
                    fill="#bebebe"
                    d="M859.93 507.17l.38-.02v22.6l-.38.01v-22.59z"
                  />
                  <path
                    style={{
                      mixBlendMode: "screen",
                    }}
                    fill="#414141"
                    d="M855.61 504.7l1 .66v22.59l-1-.66V504.7z"
                  />
                  <path
                    style={{
                      mixBlendMode: "multiply",
                    }}
                    fill="#bebebe"
                    d="M856.65 505.27l.38-.02v22.59l-.38.02v-22.59z"
                  />
                  <path
                    style={{
                      mixBlendMode: "screen",
                    }}
                    fill="#414141"
                    d="M852.33 502.8l1 .66v22.59l-1-.66V502.8z"
                  />
                  <path
                    style={{
                      mixBlendMode: "multiply",
                    }}
                    fill="#bebebe"
                    d="M853.38 503.37l.38-.02v22.59l-.38.02v-22.59z"
                  />
                  <path
                    style={{
                      mixBlendMode: "screen",
                    }}
                    fill="#414141"
                    d="M849.06 500.89l.99.66v22.6l-.99-.67v-22.59z"
                  />
                  <path
                    style={{
                      mixBlendMode: "multiply",
                    }}
                    fill="#bebebe"
                    d="M850.1 501.46l.38-.01v22.59l-.38.01v-22.59z"
                  />
                  <path
                    style={{
                      mixBlendMode: "screen",
                    }}
                    fill="#414141"
                    d="M845.78 498.99l1 .66v22.59l-1-.66v-22.59z"
                  />
                  <path
                    style={{
                      mixBlendMode: "multiply",
                    }}
                    fill="#bebebe"
                    d="M846.83 499.56l.38-.02v22.59l-.38.02v-22.59z"
                  />
                  <path
                    style={{
                      mixBlendMode: "multiply",
                    }}
                    fill="#d3d3d3"
                    d="M889.09 523.68v1.98l-44.49-25.67v20.53l-.67-.38v-22.52l45.16 26.06z"
                  />
                  <path
                    fill="url(#prefix__New_Gradient_Swatch_copy_17-2)"
                    d="M890.98 522.58v26.99l18.62-10.47v-27.04l-18.62 10.52z"
                  />
                  <path
                    fill="url(#prefix__New_Gradient_Swatch_copy_16-2)"
                    d="M890.98 533.13v16.44l18.62-10.47v-16.5l-18.62 10.53z"
                  />
                  <path
                    fill="url(#prefix__New_Gradient_Swatch_copy_17-3)"
                    d="M909.6 512.06l-18.62 10.52-48.95-28.26 18.63-10.5 48.94 28.24z"
                  />
                  <g>
                    <path
                      fill="url(#prefix__New_Gradient_Swatch_copy_17-4)"
                      d="M917 532.52l-3.69 5.89v26.27l-23.83-13.8v-26.71l3.69-5.37L917 532.52z"
                    />
                    <path
                      fill="url(#prefix__New_Gradient_Swatch_copy_17-5)"
                      d="M917 532.52l-3.69 5.89-23.83-14.24 3.69-5.37L917 532.52z"
                    />
                    <path
                      fill="url(#prefix__New_Gradient_Swatch_copy_16-3)"
                      d="M913.31 548.12v16.56l-23.83-13.8V534.4l23.83 13.72z"
                    />
                    <path
                      d="M900.56 532.36v4.44a.73.73 0 01-1.09.63l-7.34-4.26a.72.72 0 01-.36-.62v-4.8a.73.73 0 011.09-.63l7 4a1.38 1.38 0 01.7 1.24z"
                      fill="url(#prefix__linear-gradient-427)"
                    />
                    <path
                      d="M892.4 532v-3.94a.29.29 0 01.43-.25l6.61 3.8a1 1 0 01.49.85v4a.29.29 0 01-.44.25l-6.6-3.83a1 1 0 01-.49-.88z"
                      fill="url(#prefix__linear-gradient-428)"
                    />
                    <path
                      d="M910.58 538.16v4.44a.73.73 0 01-1.09.63l-7-4.06a1.39 1.39 0 01-.69-1.21v-4.41a.72.72 0 011.08-.63l7 4a1.4 1.4 0 01.7 1.24z"
                      fill="url(#prefix__linear-gradient-429)"
                    />
                    <path
                      d="M902.42 537.83v-3.94a.29.29 0 01.43-.25l6.61 3.8a1 1 0 01.49.85v4a.29.29 0 01-.44.25l-6.6-3.83a1 1 0 01-.49-.88z"
                      fill="url(#prefix__linear-gradient-430)"
                    />
                    <path
                      fill="url(#prefix__New_Gradient_Swatch_copy_17-6)"
                      d="M916.99 532.52l-3.69 5.63v26.53l22.59-12.84v-26.79l-3.69-1.23-15.21 8.7z"
                    />
                    <path
                      fill="url(#prefix__New_Gradient_Swatch_copy_16-4)"
                      d="M913.3 548.12v16.56l22.59-12.84v-16.63l-22.59 12.91z"
                    />
                    <path
                      fill="url(#prefix__New_Gradient_Swatch_copy_17-7)"
                      d="M932.2 523.82l-15.21 8.7-23.82-13.72 15.22-8.67 23.81 13.69z"
                    />
                    <path
                      fill="url(#prefix__New_Gradient_Swatch_copy_17-8)"
                      d="M908.39 510.13l23.81 13.69 3.69 1.23-23.73-13.88-3.77-1.04z"
                    />
                    <path
                      d="M925.38 532.76v4.43a.73.73 0 001.09.63l7-4.06a1.39 1.39 0 00.69-1.2v-4.41a.73.73 0 00-1.09-.63l-7 4a1.4 1.4 0 00-.69 1.24z"
                      fill="url(#prefix__linear-gradient-431)"
                    />
                    <path
                      d="M933.54 532.43v-3.95a.29.29 0 00-.43-.25L926.5 532a1 1 0 00-.49.86v4a.29.29 0 00.44.25l6.6-3.82a1 1 0 00.49-.86z"
                      fill="url(#prefix__linear-gradient-432)"
                    />
                    <path
                      d="M915.36 538.56V543a.73.73 0 001.09.63l7-4.06a1.4 1.4 0 00.7-1.2V534a.73.73 0 00-1.09-.63l-7 4a1.4 1.4 0 00-.7 1.19z"
                      fill="url(#prefix__linear-gradient-433)"
                    />
                    <path
                      d="M923.52 538.23v-4a.29.29 0 00-.43-.25l-6.6 3.8a1 1 0 00-.5.86v4a.29.29 0 00.44.25l6.6-3.82a1 1 0 00.49-.84z"
                      fill="url(#prefix__linear-gradient-434)"
                    />
                    <path
                      d="M933.54 532.43v-3.95a.29.29 0 00-.43-.25L926.5 532a1 1 0 00-.49.86l7 .39a1 1 0 00.53-.82z"
                      style={{
                        mixBlendMode: "screen",
                      }}
                      fill="url(#prefix__linear-gradient-435)"
                    />
                    <path
                      d="M923.52 538.23v-4a.29.29 0 00-.43-.25l-6.6 3.8a1 1 0 00-.5.86l7 .39a1 1 0 00.53-.8z"
                      style={{
                        mixBlendMode: "screen",
                      }}
                      fill="url(#prefix__linear-gradient-436)"
                    />
                    <path
                      fill="url(#prefix__New_Gradient_Swatch_copy_16-5)"
                      d="M923.94 554.18v16.57l-10.55-6.07V548.2l10.55 5.98z"
                    />
                    <path
                      style={{
                        mixBlendMode: "multiply",
                      }}
                      fill="#e7e7e7"
                      d="M915.49 563.46v-11.64l6.34 3.59v11.69l-6.34-3.64z"
                    />
                    <path
                      fill="url(#prefix__New_Gradient_Swatch_copy_16-6)"
                      d="M923.94 554.18l11.42-9.27-10.55-6.07-11.42 9.36 10.55 5.98z"
                    />
                    <path
                      fill="url(#prefix__New_Gradient_Swatch_copy_16-7)"
                      d="M946.44 541.23l-11.08 3.68-10.55-6.07 11.08-3.59 10.55 5.98z"
                    />
                    <g fill="#e7e7e7">
                      <path
                        style={{
                          mixBlendMode: "multiply",
                        }}
                        d="M900.47 545.71l-8.88-5.11v9.07l8.88 5.14v-9.1zM901.79 546.47v9.11l9.41 5.45v-9.14l-9.41-5.42z"
                      />
                    </g>
                    <g fill="#bebebe">
                      <path
                        style={{
                          mixBlendMode: "multiply",
                        }}
                        d="M900.47 549.94l-8.88-5.11v.62l8.88 5.14v-.65zM900.47 552.05l-8.88-5.12v.63l8.88 5.14v-.65zM900.47 554.16l-8.88-5.12v.63l8.88 5.14v-.65zM900.47 547.83l-8.88-5.11v.62l8.88 5.15v-.66zM900.47 545.72l-8.88-5.11v.62l8.88 5.15v-.66zM901.79 551.36l9.41 5.45v-.69l-9.41-5.42v.66zM901.79 546.48v.66l9.41 5.45v-.69l-9.41-5.42zM901.79 555.58l9.41 5.45v-.7l-9.41-5.42v.67zM901.79 549.25l9.41 5.45v-.69l-9.41-5.42v.66zM901.79 553.47l9.41 5.45v-.69l-9.41-5.42v.66z"
                      />
                    </g>
                    <path
                      style={{
                        mixBlendMode: "color-dodge",
                      }}
                      fill="url(#prefix__Radial_Gradient_1-33)"
                      d="M913.39 548.2l10.11 6.34.44 16.21.35-16.43 11.07-9.41-11.69 8.92-10.28-5.63z"
                    />
                  </g>
                  <path
                    fill="url(#prefix__New_Gradient_Swatch_copy_17-9)"
                    d="M863.73 500.89v1.94l-10.8-6.25v-1.89l10.8 6.2z"
                  />
                  <path
                    fill="url(#prefix__New_Gradient_Swatch_copy_17-10)"
                    d="M863.72 500.89v1.94l11.26-6.33v-1.98l-11.26 6.37z"
                  />
                  <path
                    fill="url(#prefix__New_Gradient_Swatch_copy_17-11)"
                    d="M874.98 494.52l-11.26 6.37-10.79-6.2 11.27-6.35 10.78 6.18z"
                  />
                  <path
                    fill="url(#prefix__New_Gradient_Swatch_copy_17-12)"
                    d="M884.26 510.9v1.94l-7.73-4.42v-1.89l7.73 4.37z"
                  />
                  <path
                    fill="url(#prefix__New_Gradient_Swatch_copy_17-13)"
                    d="M884.26 510.9v1.94l7.59-4.08v-1.98l-7.59 4.12z"
                  />
                  <path
                    fill="url(#prefix__New_Gradient_Swatch_copy_17-14)"
                    d="M891.85 506.78l-7.59 4.12-7.73-4.37 7.6-4.1 7.72 4.35z"
                  />
                  <path
                    fill="url(#prefix__New_Gradient_Swatch_copy_17-15)"
                    d="M916.69 525v1.94l-12.48-7.31v-1.9l12.48 7.27z"
                  />
                  <path
                    fill="url(#prefix__New_Gradient_Swatch_copy_17-16)"
                    d="M916.69 525v1.94l7.59-4.08v-1.97l-7.59 4.11z"
                  />
                  <path
                    fill="url(#prefix__New_Gradient_Swatch_copy_17-17)"
                    d="M924.28 520.89l-7.59 4.11-12.48-7.27 7.6-4.1 12.47 7.26z"
                  />
                  <path
                    fill="url(#prefix__New_Gradient_Swatch_copy_16-8)"
                    d="M923.94 554.18v16.57l22.32-12.83v-16.69l-10.9 3.68-11.42 9.27z"
                  />
                  <path
                    fill="url(#prefix__New_Gradient_Swatch_copy_24-111)"
                    d="M933.77 548.04v9.3l4.58-2.63v-9.27l-4.58 2.6z"
                  />
                  <path
                    d="M937.52 548.45a3.16 3.16 0 01-1.43 2.47c-.79.45-1.43.09-1.43-.82a3.16 3.16 0 011.43-2.47c.79-.45 1.43-.09 1.43.82z"
                    fill="url(#prefix__linear-gradient-437)"
                  />
                  <path
                    d="M937.52 552.54a3.14 3.14 0 01-1.43 2.46c-.79.46-1.43.09-1.43-.81a3.16 3.16 0 011.43-2.47c.79-.46 1.43-.09 1.43.82z"
                    fill="url(#prefix__linear-gradient-438)"
                  />
                  <path
                    d="M878.15 534.29l11.08 6.36v-1.25l-47.61-27.34.54-.33-.12-1.2-1.47.93-1.86-1.07 3.45-2.09-.12-1.2-4.67 2.9a.5.5 0 00-.25.45v11.07l1.06.53v-7.26l12.48 7.17v7.47l1.05.53v-7.4l11.87 6.82v7.52l1 .53v-7.44l12.48 7.17v7.47l1 .53v-7.4l11.08 6.36v-1.24l-11.05-6.33zm-40-23l1.34.77-1.34.81zm.51 2.5l1.87-1.13 10.1 5.8v2.21zm13 7.49v-2.21l11.87 6.81v2.21zm12.92 7.42v-2.21l12.48 7.17v2.21z"
                    fill="#2d2d2d"
                  />
                  <g>
                    <path
                      d="M937.12 548.82l-.73 1.56s-1.19-1-1-1.51 1.73-.05 1.73-.05z"
                      fill="url(#prefix__New_Gradient_Swatch_copy_14)"
                    />
                    <path
                      d="M936.15 549.93c0 .39.27.55.62.35a1.37 1.37 0 00.62-1.07c0-.39-.28-.55-.62-.35a1.36 1.36 0 00-.62 1.07z"
                      fill="url(#prefix__New_Gradient_Swatch_copy_14-2)"
                    />
                  </g>
                  <g>
                    <path
                      d="M937 553l-.74 1.56s-1.19-1-1-1.51S937 553 937 553z"
                      fill="url(#prefix__New_Gradient_Swatch_copy_14-3)"
                    />
                    <path
                      d="M936 554.06c0 .39.28.55.62.35a1.37 1.37 0 00.62-1.07c0-.39-.28-.55-.62-.35a1.38 1.38 0 00-.62 1.07z"
                      fill="url(#prefix__New_Gradient_Swatch_copy_14-4)"
                    />
                  </g>
                  <path
                    d="M932.94 550.43c.65 1.49 2.69 2 4.56 1.21s2.86-2.68 2.22-4.16-2.69-2-4.56-1.21-2.87 2.73-2.22 4.16z"
                    style={{
                      mixBlendMode: "color-dodge",
                    }}
                    fill="url(#prefix__radial-gradient-30)"
                  />
                  <path
                    d="M932.94 554.47c.65 1.49 2.69 2 4.56 1.22s2.86-2.68 2.22-4.17-2.69-2-4.56-1.21-2.87 2.69-2.22 4.16z"
                    style={{
                      mixBlendMode: "color-dodge",
                    }}
                    fill="url(#prefix__radial-gradient-31)"
                  />
                  <path
                    d="M947.44 549l-5-1.73a.53.53 0 00-.44 0l-12.08 7a.58.58 0 00-.18.17l-4 6.26a.47.47 0 00-.09.28v10.84l1.06-.68v-3.2.05l3.41-2v3.26l1-.68v-3.19l10.66-6.12v3.2l1.05-.68v-3.13l3.9-2.23v3.25l1-.68v-9.62a.52.52 0 00-.29-.37zm-.69 1.65l-3.9 2.24v-4.36l3.9 1.34zm-15.61 4.2l10.66-6.22v4.86l-10.66 6.13zm-1 1v4.32l-3.43 2v-1zm-3.43 11v-3.52l3.41-2v3.46zm4.48-2.57v-3.47l10.66-6.12v3.46zm11.71-6.73v-3.47l3.9-2.23v3.46z"
                    fill="#2d2d2d"
                  />
                  <path
                    d="M960.81 555.47s-7.12 7.48-7.25 7.38-19.07-12-19-12.19l.83-2.25a1.34 1.34 0 01.67-.75l.69-.32c.44-.2 24.06 7.66 24.06 8.13z"
                    style={{
                      mixBlendMode: "screen",
                    }}
                    opacity={0.5}
                    fill="url(#prefix__linear-gradient-439)"
                  />
                  <path
                    d="M960.81 559.51s-7.12 7.48-7.25 7.39-19.07-12-19-12.2l.83-2.25a1.32 1.32 0 01.67-.74l.69-.33c.44-.2 24.06 7.67 24.06 8.13z"
                    style={{
                      mixBlendMode: "screen",
                    }}
                    opacity={0.5}
                    fill="url(#prefix__linear-gradient-440)"
                  />
                  <path
                    style={{
                      mixBlendMode: "color-dodge",
                    }}
                    fill="url(#prefix__radial-gradient-32)"
                    d="M893.17 518.8l23.48 13.68-3.34 5.93 3.84-5.83 15.05-8.76-15.12 8.26-23.91-13.28z"
                  />
                  <path
                    style={{
                      mixBlendMode: "color-dodge",
                    }}
                    fill="url(#prefix__radial-gradient-33)"
                    d="M904.21 517.73l12.44 7.07 7.63-3.91-7.46 4.17-.13 1.88-.17-2.01-12.42-7.25.11.05z"
                  />
                </g>
              </motion.g>
              <path
                fill="#333"
                d="M506.82 203.34v257.19l8.43-4.9V198.49l-8.43 4.85z"
              />
              <path
                fill="url(#prefix__New_Gradient_Swatch_copy_37-15)"
                d="M497.95 198.83v-.28l8.92 14.54v247.44l-9.07-5.3V198.75l.15.08z"
              />
              <g>
                <path
                  fill="url(#prefix__New_Gradient_Swatch_copy_37-16)"
                  d="M616.87 502.98v7.81L507.7 448.62v-7.79l109.17 62.15z"
                />
                <path
                  fill="url(#prefix__New_Gradient_Swatch_copy_24-112)"
                  d="M507.7 440.83l109.17 62.15-.22-7.91-102.19-58.19-6.76 3.95z"
                />
              </g>
              <g>
                <path
                  fill="url(#prefix__New_Gradient_Swatch_copy_37-17)"
                  d="M616.87 456.81v7.82L507.7 402.45v-7.79l109.17 62.15z"
                />
                <path
                  fill="url(#prefix__New_Gradient_Swatch_copy_38-12)"
                  d="M507.7 394.66l109.17 62.15-.22-7.91-102.19-58.18-6.76 3.94z"
                />
              </g>
              <g>
                <path
                  fill="url(#prefix__New_Gradient_Swatch_copy_37-18)"
                  d="M556.43 310.35v9.4l-8.2-4.72v-9.41l8.2 4.73z"
                />
                <path
                  d="M556.41 312.08v2.54a3 3 0 004.46 2.59l381.61-218a3 3 0 001.5-2.58v-2.5a3 3 0 00-4.45-2.59l-381.62 218a3 3 0 00-1.5 2.54z"
                  fill="#333"
                />
                <path
                  fill="url(#prefix__New_Gradient_Swatch_copy_38-13)"
                  d="M943.98 88.99L556.41 310.35l-8.18-4.73L935.85 84.25l8.13 4.74z"
                />
              </g>
              <path
                fill="#333"
                d="M625.72 271.93v257.19l8.42-4.9V267.08l-8.42 4.85z"
              />
              <path
                fill="url(#prefix__New_Gradient_Swatch_copy_37-19)"
                d="M497.95 198.83v-.28l127.81 73.38v257.19l-9.07-5.3v-247.6l-109.82-63.13-9.07-14.34.15.08z"
              />
              <path
                fill="url(#prefix__New_Gradient_Swatch_copy_37-20)"
                d="M556.24 310.32v9.41l-107.99-62.85v-9.41l107.99 62.85z"
              />
              <path
                fill="url(#prefix__New_Gradient_Swatch_copy_38-14)"
                d="M564.2 305.83l-7.98 4.49-108-62.89 8.02-4.52 107.96 62.92z"
              />
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
}

export default SvgComponent;


import * as React from "react";
import { motion } from "framer-motion";

function SvgComponent(props) {
  const barVariants = {
    hidden:{
      opacity:0
    },
    visible: {
      opacity:[0,1,1,1],
      transition: {
      times:[0,0.1,0.9,1],
        duration:1,
        staggerChildren:0.5,
       
      }
    },
    ending:{
        opacity:0
    }
  }
  const barChildVariants = {
    hidden:{
      opacity:0
    },
    visible: {
      opacity:[0,1,1,0],
     transition:{
       times:[0,0.1,0.9,1],
      duration:6,
      loop:Infinity,
    

     }
    },
    ending:{
      opacity:0
    }

  }
  return (
    <svg width={"100%"}  viewBox="0 0 644.9 841.59" {...props}>
      <defs>
        <linearGradient
          id="prefix__linear-gradient"
          x1={-1007.34}
          y1={361.35}
          x2={-1136.98}
          y2={104.72}
          gradientTransform="matrix(-1 0 0 1 -630.39 0)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#c1272d" stopOpacity={0} />
          <stop offset={0.08} stopColor="#c1272d" stopOpacity={0.23} />
          <stop offset={0.26} stopColor="#c1272d" stopOpacity={0.79} />
          <stop offset={0.32} stopColor="#c1272d" />
          <stop offset={0.47} stopColor="#c1272d" stopOpacity={0.75} />
          <stop offset={0.73} stopColor="#c1272d" stopOpacity={0.35} />
          <stop offset={0.91} stopColor="#c1272d" stopOpacity={0.1} />
          <stop offset={1} stopColor="#c1272d" stopOpacity={0} />
        </linearGradient>
        <linearGradient
          id="prefix__linear-gradient-2"
          x1={-646.79}
          y1={380.31}
          x2={-772.89}
          y2={130.39}
          gradientTransform="matrix(-1 0 0 1 -630.39 0)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#c1272d" />
          <stop offset={0.6} stopColor="#c1272d" />
          <stop offset={0.77} stopColor="#c1272d" stopOpacity={0.57} />
          <stop offset={1} stopColor="#c1272d" stopOpacity={0} />
        </linearGradient>
        <linearGradient
          id="prefix__New_Gradient_Swatch_copy_27"
          data-name="New Gradient Swatch copy 27"
          x1={434.9}
          y1={166.44}
          x2={434.9}
          y2={542.25}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.04} stopColor="#ab1919" />
          <stop offset={0.27} stopColor="#ba1414" />
          <stop offset={0.72} stopColor="#e30808" />
          <stop offset={1} stopColor="red" />
        </linearGradient>
        <linearGradient
          id="prefix__New_Gradient_Swatch_copy_27-2"
          x1={176.74}
          y1={622.31}
          x2={303.94}
          y2={827.54}
          xlinkHref="#prefix__New_Gradient_Swatch_copy_27"
        />
        <clipPath id="prefix__clip-path">
          <path
            d="M537.89 731.61l-8.81 5.12c4.84-2.81 7.85-8.8 7.87-17.32l8.82-5.12c-.02 8.51-3.03 14.5-7.88 17.32z"
            fill="none"
          />
        </clipPath>
        <clipPath id="prefix__clip-path-2">
          <path
            d="M511.22 255.11c9.47 5.46 17.12 18.71 17.09 29.59l-1.22 429c0 10.87-7.73 15.25-17.2 9.79l-151.32-87.35c-9.46-5.47-17.11-18.7-17.08-29.58l1.22-429c0-10.87 7.72-15.27 17.19-9.8l18.84 10.87a10 10 0 014.49 7.79V191c0 6.48 4.54 14.37 10.18 17.63l84.21 48.62c5.64 3.26 10.23.64 10.24-5.84v-4.64c0-2.85 2-4 4.52-2.57z"
            fill="none"
          />
        </clipPath>
      </defs>
      <g
        style={{
          isolation: "isolate",
        }}
      >
        <g id="prefix__Layer_2" data-name="Layer 2">
          <g id="prefix__Layer_1-2" data-name="Layer 1">
            <g id="prefix__HeaderPhoto">
              <image
                width={294}
                height={202}
                transform="translate(292.87 639.59)"
                xlinkHref="data:image/png;base64,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"
                opacity={0.61}
              />
              <path
                style={{
                  mixBlendMode: "overlay",
                }}
                fill="url(#prefix__linear-gradient)"
                d="M379.61 0l133.96 71.84-.62 376.37-133.96-71.84L379.61 0z"
              />
              <g id="prefix__dotsmain">
              <motion.path
                  animate={{ x: [0, 30, 0], y: [0, 10, 0] }}
                  transition={{ duration: 2.5, loop: Infinity }}
                  d="M609.72 185.39a12.48 12.48 0 015.67 9.81c0 3.61-2.56 5.07-5.7 3.25a12.48 12.48 0 01-5.67-9.81c-.02-3.64 2.56-5.07 5.7-3.25z"
                  id="techheaderphoto__dot1"
                />
                <motion.path
                  animate={{ x: [0, 30, 0], y: [0, 10, 0] }}
                  transition={{ duration: 4.5, loop: Infinity }}
                  d="M593.84 330.53a12.48 12.48 0 015.67 9.82c0 3.61-2.56 5.06-5.7 3.25a12.49 12.49 0 01-5.67-9.82c.01-3.61 2.56-5.06 5.7-3.25z"
                  id="techheaderphoto__dot2"
                />
                <motion.path
                  animate={{ x: [0, 30, 0], y: [0, 10, 0] }}
                  transition={{ duration: 4, loop: Infinity }}
                  d="M551.66 222a12.49 12.49 0 015.67 9.82c0 3.61-2.56 5.06-5.71 3.25a12.5 12.5 0 01-5.66-9.82c.04-3.59 2.56-5.04 5.7-3.25z"
                  id="techheaderphoto__dot3"
                />
                <motion.path
                  animate={{ x: [0, 30, 0], y: [0, 10, 0] }}
                  transition={{ duration: 3.5, loop: Infinity }}
                  d="M492.38 108.25a12.49 12.49 0 015.67 9.82c0 3.6-2.57 5.06-5.71 3.25a12.51 12.51 0 01-5.67-9.82c.01-3.61 2.57-5.06 5.71-3.25z"
                  id="techheaderphoto__dot4"
                />
                <motion.path
                  animate={{ x: [0, 30, 0], y: [0, 10, 0] }}
                  transition={{ duration: 2.5, loop: Infinity }}
                  d="M331.33 113.72a12.48 12.48 0 015.66 9.82c0 3.61-2.56 5.06-5.7 3.25a12.49 12.49 0 01-5.67-9.82c.01-3.61 2.57-5.06 5.71-3.25z"
                  id="techheaderphoto__dot5"
                />
                <motion.path
                  animate={{ x: [0, 30, 0], y: [0, 10, 0] }}
                  transition={{ duration: 5, loop: Infinity }}
                  d="M447.68 163.76a12.45 12.45 0 015.67 9.81c0 3.61-2.56 5.07-5.7 3.25A12.48 12.48 0 01442 167c0-3.6 2.54-5.06 5.68-3.24z"
                  id="techheaderphoto__dot6"
                />
              </g>
              <g id="prefix__leftcards">
                <motion.path
                  animate={{opacity:[0.5,0.75,0.5]}}
                  transition={{duration:5,loop:Infinity}}
                  
                  id="prefix__gradientcard"
                  style={{
                    mixBlendMode: "overlay",
                  }}
                  fill="url(#prefix__linear-gradient-2)"
                  d="M33.34 30.71l133.96 71.84-.62 295.95-133.96-77.09.62-290.7z"
                />
                <motion.g id="prefix__uppercard"
                
                animate={{y:20}}
                transition={{duration:3, yoyo:Infinity}}
                
                
                >
                  <path
                    d="M5.86 198.53c-3.08-1.77-5.58-.35-5.59 3.19L0 296.41A12.26 12.26 0 005.55 306l178.92 103.3c3.08 1.77 5.57.34 5.58-3.19l.27-94.7a12.23 12.23 0 00-5.54-9.61z"
                    fill="#c1272d"
                    opacity={0.2}
                  />
                  <path
                    d="M157 301.58a1.36 1.36 0 00-1.76.42l-6.84 20.39c-1.12 1.31-3.91.77-6.74-.86a18.61 18.61 0 01-5.17-4.42L119.71 296c-1.51-1.89-3.41-6.06-6.16-6.18s-5 3.57-6.4 5.53c-1.64 2.24-7.93 10.68-10.34 11.37a7.45 7.45 0 01-5.73-.93c-3.77-2.2-6.07-6.29-7.51-10.27-.87-2.39-2.17-6.6-5.15-7.06-2.17-.33-3.46 2.48-4.63 3.88l-3.44 4.12c-.52.63-1.81.35-3.09-.39a7.64 7.64 0 01-3.1-3.18l-6.84-24.29-4.17-14.78a90.53 90.53 0 00-3.57-11 3 3 0 00-3.58-1.5 3.81 3.81 0 00-2 2.3c-.43 1.21-1.92 6.17-2.53 7.93-1.84 5.23-3.16 10.53-4.89 15.79q-4.25 13-8.5 25.92c0 .05-.45 3-.42 3l142.1 77.94-11.58-70.42a3.39 3.39 0 00-1.18-2.2z"
                    fill="#c1272d"
                  />
                  <path
                    d="M148.32 316.93a1.13 1.13 0 00-1.77.58l-7 20.39c-1.14 1.3-4 .77-6.87-.87a19.2 19.2 0 01-5.25-4.41c-5.79-7.17-10.76-14.23-16.55-21.39-1.78-2.2-5.14-7.38-8.73-5-1.37.93-5.87 6.56-7.22 8.15L88.51 322a5.93 5.93 0 01-7.42.65c-2.85-1.61-5.13-5.73-6.29-8.43s-3-10.36-6.61-10.29a4.14 4.14 0 00-2.87 1.44c-.86.91-1.42 2.06-2.19 3-1.29 1.6-2.23 3.75-4.61 3.63-6.23-.32-10-22.6-11.77-28.48-2.33-7.71-4.48-15.52-6.75-23.36v-.06c-.33-1.14-1.32-4.28-2.57-4.9-2.09-1-2.81 1-3 1.87l-9.86 46.82 135.59 76-10.59-60.65a3.66 3.66 0 00-1.25-2.31z"
                    fill="#fff"
                  />
                  <path
                    fill="#c1272d"
                    d="M7.14 206.87l-.02 7.97 12.48 7.2.02-7.97-12.48-7.2z"
                  />
                </motion.g>
                <motion.g id="prefix__lowercard"
                
                animate={{y:20}}
                transition={{duration:3, yoyo:Infinity,delay:3}}
                
                >
                  <path
                    d="M5.86 334.63c-3.08-1.78-5.58-.35-5.59 3.18L0 432.51a12.27 12.27 0 005.55 9.62l178.92 103.3c3.08 1.77 5.57.34 5.58-3.19l.27-94.7a12.23 12.23 0 00-5.54-9.61z"
                    fill="#c1272d"
                    opacity={0.2}
                  />
                  <path
                    fill="#c1272d"
                    d="M9.38 419.35v8.31l130.08 75.93.03-8.29L9.38 419.35z"
                  />
                  <path
                    style={{
                      mixBlendMode: "overlay",
                    }}
                    fill="#fff"
                    d="M9.38 403.37v8.3l86.77 50.1.03-8.29-86.8-50.11z"
                  />
                  <path
                    fill="#c1272d"
                    d="M9.38 385.13v8.3l149.45 86.75.02-8.29L9.38 385.13z"
                  />
                  <path
                    style={{
                      mixBlendMode: "overlay",
                    }}
                    fill="#fff"
                    d="M9.38 367.87v8.3l163.35 94.72.02-8.29L9.38 367.87z"
                  />
                  <path
                    fill="#c1272d"
                    d="M9.38 351.56v8.31l128.47 74.03.03-8.29-128.5-74.05z"
                  />
                </motion.g>
              </g>
              <g
                style={{
                  isolation: "isolate",
                }}
                id="prefix__phone"
              >
                <g
                  style={{
                    isolation: "isolate",
                  }}
                >
                  <path d="M336.57 604.7v-1" fill="#292929" />
                  <path
                    d="M336.62 605.76c0-.35 0-.71-.05-1.06"
                    fill="#2b2b2b"
                  />
                  <path
                    d="M336.7 606.83c0-.36-.06-.71-.08-1.07"
                    fill="#2c2c2c"
                  />
                  <path d="M336.82 607.91l-.12-1.08" fill="#2d2d2d" />
                  <path d="M337 609c-.06-.37-.11-.74-.16-1.11" fill="#2e2e2e" />
                  <path
                    d="M337.17 610.13c-.07-.37-.13-.74-.19-1.11"
                    fill="#313131"
                  />
                  <path
                    d="M337.4 611.28c-.08-.39-.16-.77-.23-1.15"
                    fill="#323232"
                  />
                </g>
                <g clipPath="url(#prefix__clip-path)">
                  <path
                    d="M537 719.41l8.82-5.12v.08l-8.82 5.12v-.08"
                    fill="#292929"
                  />
                </g>
                <path
                  d="M367.89 150.8q-.56-.3-1.11-.57c-.37-.18-.73-.36-1.09-.52l-1.08-.46-1.09-.41-1.08-.35c-.38-.11-.75-.22-1.12-.31s-.74-.17-1.11-.24-.79-.15-1.18-.2l-1.2-.12h-1.27c-.42 0-.94 0-1.4.06s-1.05.13-1.56.23a13 13 0 00-1.88.52 12.82 12.82 0 00-2.19 1l-8.82 5.12a13.57 13.57 0 012.19-1 14.61 14.61 0 011.89-.52 15.22 15.22 0 011.55-.22 13 13 0 011.4-.07h1.27c.43 0 .8.07 1.2.12s.79.12 1.19.2.73.15 1.1.25l1.12.3q.54.16 1.08.36c.36.12.72.26 1.09.41s.72.29 1.08.46.73.33 1.09.51l1.11.57.86.48 8.82-5.12z"
                  fill="#2e2e2e"
                />
                <path
                  d="M511.22 255.11c9.47 5.46 17.12 18.71 17.09 29.59l-1.22 429c0 10.87-7.73 15.25-17.2 9.79l-151.32-87.35c-9.46-5.47-17.11-18.7-17.08-29.58l1.22-429c0-10.87 7.72-15.27 17.19-9.8l18.84 10.87a10 10 0 014.49 7.79V191c0 6.48 4.54 14.37 10.18 17.63l84.21 48.62c5.64 3.26 10.23.64 10.24-5.84v-4.64c0-2.85 2-4 4.52-2.57z"
                  fill="url(#prefix__New_Gradient_Swatch_copy_27)"
                />
                <path
                  fill="#333"
                  d="M359.93 156.41l8.82-5.13 151.32 87.37-8.82 5.12-151.32-87.36z"
                />
                <path d="M511.24 249.44c12.17 7 22 24.12 22 38.11l-1.22 429c0 14-10 19.65-22.14 12.62l-151.33-87.35c-12.17-7-22-24.13-22-38.11l1.22-429c0-14 10-19.64 22.14-12.62zm15.85 464.28l1.22-429c0-10.88-7.62-24.13-17.09-29.59l-18.83-10.87c-2.49-1.45-4.51-.28-4.52 2.57v4.64c0 6.48-4.6 9.09-10.24 5.84l-84.23-48.64c-5.64-3.26-10.2-11.15-10.18-17.63v-4.63a10 10 0 00-4.49-7.8l-18.83-10.87c-9.47-5.47-17.16-1.07-17.19 9.8l-1.21 429c0 10.88 7.61 24.11 17.07 29.58l151.32 87.37c9.47 5.46 17.17 1.08 17.2-9.79" />
                <path
                  d="M511.25 243.77c14.92 8.61 27 29.48 26.92 46.62l-1.22 429c0 17.14-12.17 24.05-27.09 15.44l-151.32-87.35c-14.92-8.61-27-29.48-26.92-46.62l1.22-429c.05-17.13 12.18-24.05 27.09-15.44zM532 716.56l1.22-429c0-14-9.83-31.09-22-38.11l-151.31-87.38c-12.17-7-22.1-1.36-22.14 12.62l-1.22 429c0 14 9.83 31.08 22 38.11l151.33 87.36c12.17 7 22.1 1.37 22.14-12.62"
                  fill="#1c1c1c"
                />
                <path
                  d="M547 285.27v-1.22c0-.41 0-.87-.06-1.31s-.06-.87-.1-1.31l-.15-1.32c-.06-.45-.12-.9-.2-1.36s-.15-.91-.23-1.36-.18-.94-.29-1.41-.21-.94-.33-1.42-.24-.95-.37-1.43-.27-.95-.42-1.43-.29-.93-.45-1.39-.31-.92-.48-1.38-.32-.88-.49-1.32-.35-.87-.53-1.31-.36-.86-.55-1.29-.39-.87-.6-1.3-.45-.95-.69-1.43-.55-1.08-.83-1.62c-.43-.8-.87-1.59-1.33-2.37-.64-1.08-1.31-2.15-2-3.19-.55-.83-1.12-1.64-1.71-2.44-.39-.53-.79-1-1.2-1.57s-.69-.87-1-1.29-.69-.82-1-1.22l-1-1.16c-.37-.4-.73-.78-1.11-1.16s-.75-.76-1.14-1.13-.78-.74-1.18-1.1-.8-.71-1.2-1.05l-1.2-1c-.4-.31-.79-.61-1.19-.9l-1.17-.84-1.15-.76-1.14-.7-.27-.15-8.82 5.12.27.16c.38.22.76.46 1.14.7s.77.49 1.15.76.79.54 1.17.83.8.59 1.19.9.8.65 1.2 1 .81.69 1.2 1 .8.73 1.19 1.11.76.74 1.14 1.12.74.77 1.1 1.16.71.77 1 1.16.7.81 1.05 1.22l1 1.29c.4.52.8 1 1.2 1.58.58.79 1.15 1.61 1.71 2.43.69 1 1.36 2.11 2 3.19.46.79.9 1.58 1.33 2.38q.43.79.84 1.62l.69 1.42c.2.43.4.87.59 1.31s.37.85.55 1.28l.53 1.31c.17.44.34.88.5 1.33l.48 1.37c.15.47.3.93.44 1.4s.29.95.42 1.42.26 1 .38 1.44l.33 1.41c.1.47.19.94.28 1.41s.17.91.24 1.37.13.9.19 1.35.11.89.15 1.32.08.88.1 1.32 0 .87.06 1.3 0 .82 0 1.22L537 719v1.78c0 .43 0 .85-.08 1.27s-.08.87-.13 1.3-.12.87-.19 1.29-.17.89-.27 1.32-.23.93-.36 1.38-.3 1-.47 1.42-.41 1.05-.65 1.54a16.18 16.18 0 01-1 1.84 13.58 13.58 0 01-4.67 4.57l8.81-5.12a13.7 13.7 0 004.68-4.57 16.33 16.33 0 001-1.85c.23-.49.45-1 .65-1.53s.33-.93.47-1.42.25-.91.36-1.38.19-.87.26-1.32.14-.86.2-1.29.09-.86.13-1.3l.08-1.28v-1.38z"
                  fill="#292929"
                />
              </g>
              <g id="prefix__circles">
                <g
                  style={{
                    mixBlendMode: "color-dodge",
                  }}
                  opacity={0.2}
                  fill="#fff"
                >
                  <path d="M451.59 565a44.11 44.11 0 003.57 16.51c.1.24.19.49.29.74l.33.77c.38.84.77 1.67 1.18 2.48l.19.38c.38.74.77 1.46 1.18 2.17l.38.67q.69 1.19 1.44 2.34c.11.18.23.34.35.52.4.6.81 1.2 1.23 1.78l.58.78c.5.67 1 1.32 1.54 2a68.85 68.85 0 001.78 2.05l.76.82c.54.56 1.08 1.11 1.64 1.64l.74.68 1.38 1.21c.21.16.4.33.6.5.64.51 1.29 1 2 1.47l.55.39c.7.47 1.42.94 2.14 1.36 13.09 7.56 23.91 1.39 24-13.66 0-.93 0-1.87-.11-2.81-.91-11.24-7.26-23.91-15.85-32.35l-.28-.27c-.53-.52-1.09-1-1.65-1.51l-.68-.59c-.46-.39-.93-.74-1.4-1.1s-.67-.52-1-.76-.81-.56-1.22-.82l-.84-.54c-.26-.15-.5-.33-.76-.48-13.29-7.7-24.01-1.59-24.06 13.63zm9.93 15.66a30.3 30.3 0 01-2.45-11.34c0-10.42 7.4-14.61 16.46-9.38.18.1.35.22.52.32 8.81 5.41 15.85 17.79 15.83 28 0 10.4-7.4 14.61-16.46 9.37-5.89-3.45-11.02-9.99-13.9-17.02zM451.59 497c0 15.05 10.71 33.66 23.81 41.23s23.91 1.39 24-13.66c0-.93 0-1.86-.11-2.81-.91-11.24-7.26-23.91-15.86-32.35l-.27-.27c-.53-.52-1.09-1-1.65-1.51l-.68-.59c-.46-.38-.93-.74-1.41-1.11l-1-.75c-.4-.29-.81-.55-1.23-.83-.27-.17-.55-.36-.83-.52-.26-.16-.5-.33-.76-.48-13.19-7.62-23.91-1.5-24 13.65zm7.48 4.32c0-10.42 7.4-14.61 16.46-9.38.18.1.35.22.52.32 8.81 5.41 15.85 17.79 15.83 28 0 10.4-7.4 14.61-16.46 9.37s-16.42-17.87-16.35-28.27zM451.59 630.47c0 15 10.71 33.66 23.81 41.22s23.91 1.4 24-13.65c0-.93 0-1.86-.11-2.81-.91-11.24-7.26-23.91-15.86-32.35l-.27-.27c-.53-.52-1.09-1-1.65-1.51l-.68-.59c-.46-.38-.93-.74-1.41-1.11l-1-.75c-.4-.29-.81-.55-1.23-.83-.27-.18-.55-.36-.83-.52s-.5-.34-.76-.49c-13.24-7.61-23.96-1.5-24.01 13.66zm7.48 4.31c0-10.41 7.4-14.6 16.46-9.37.18.1.35.22.52.32 8.81 5.41 15.85 17.78 15.83 28 0 10.41-7.4 14.62-16.46 9.38s-16.42-17.92-16.35-28.33z" />
                </g>
                <path
                  d="M465.13 549.72c-13.19-7.61-23.92-1.5-24 13.67a44.09 44.09 0 003.56 16.51l6.36-.86a30.4 30.4 0 01-2.44-11.34c0-10.41 7.4-14.6 16.45-9.37.18.1.35.22.52.32l.27-8.44c-.22-.15-.46-.34-.72-.49z"
                  fill="#c1272d"
                />
                <path
                  d="M465.89 550.21l-.27 8.44c8.82 5.41 15.86 17.78 15.83 28 0 10.41-7.39 14.61-16.45 9.38-5.89-3.4-11-9.95-13.91-17l-6.36.86c.1.24.19.49.3.73l.33.78c.38.84.76 1.67 1.17 2.48l.2.38c.38.73.77 1.45 1.17 2.17l.38.67c.47.78 1 1.56 1.45 2.33.1.18.22.34.34.53.4.59.82 1.19 1.24 1.78l.58.78c.49.67 1 1.32 1.53 2l.66.77c.37.43.75.85 1.13 1.28l.75.82c.54.56 1.09 1.11 1.65 1.64l.74.67c.45.42.91.82 1.37 1.21.21.17.4.34.61.5.64.52 1.29 1 2 1.48l.55.38c.69.47 1.41 1 2.13 1.36 13.1 7.56 23.92 1.4 24-13.65 0-.93 0-1.87-.11-2.81-.91-11.25-7.26-23.91-15.85-32.35l-.28-.28c-.54-.51-1.1-1-1.66-1.5-.22-.2-.44-.4-.67-.59-.46-.39-.93-.74-1.4-1.1s-.68-.52-1-.76-.81-.56-1.22-.82-.65-.39-.93-.56z"
                  fill="#e3e5e9"
                />
                <path
                  d="M465.13 481.82c-13.19-7.61-23.92-1.5-24 13.65l7.48 4.32c0-10.41 7.4-14.6 16.45-9.38l.52.33.27-8.43c-.22-.16-.46-.31-.72-.49z"
                  fill="#c1272d"
                />
                <path
                  d="M448.65 499.79l-7.48-4.32c0 15.06 10.7 33.67 23.8 41.23s23.92 1.4 24-13.65c0-.93 0-1.86-.11-2.81-.91-11.25-7.26-23.91-15.86-32.36l-.27-.27c-.54-.51-1.1-1-1.66-1.5-.23-.19-.44-.4-.67-.59-.46-.38-.93-.74-1.41-1.11l-1-.76c-.4-.28-.81-.54-1.23-.82-.27-.18-.54-.36-.82-.52l-.27 8.43c8.82 5.41 15.86 17.78 15.83 28 0 10.41-7.39 14.61-16.45 9.38s-16.43-17.92-16.4-28.33z"
                  fill="#e3e5e9"
                />
                <g>
                  <path
                    d="M465.13 615.25c-13.19-7.61-23.92-1.5-24 13.65l7.48 4.32c0-10.42 7.4-14.6 16.45-9.38l.52.33.27-8.44c-.22-.16-.46-.33-.72-.48z"
                    fill="#c1272d"
                  />
                  <path
                    d="M448.65 633.22l-7.48-4.32c0 15.05 10.7 33.67 23.8 41.23s23.92 1.4 24-13.65c0-.93 0-1.86-.11-2.81-.91-11.25-7.26-23.91-15.86-32.36l-.27-.27c-.54-.52-1.1-1-1.66-1.5-.23-.2-.44-.4-.67-.59-.46-.38-.93-.74-1.41-1.11-.33-.25-.67-.52-1-.76s-.81-.54-1.23-.82c-.27-.18-.54-.36-.82-.53l-.27 8.44c8.82 5.41 15.86 17.78 15.83 28 0 10.4-7.39 14.61-16.45 9.38s-16.43-17.92-16.4-28.33z"
                    fill="#e3e5e9"
                  />
                </g>
              </g>
          
                <motion.g id="prefix__bar2"
                animate={{x:[0,30,0],y:[0,10,0]}} transition={{duration:3, loop:Infinity}}
                
                >
                <path
                  fill="#c1272d"
                  d="M583.88 633.76l-17-9.81.04-12.75 16.96 9.8v12.76z"
                  id="prefix__bar28"
                />
                <path
                  fill="#c1272d"
                  d="M583.88 615.04l-16.95-9.78.04-12.74 16.91 9.76v12.76z"
                  id="prefix__bar29"
                />
                <path
                  fill="#c1272d"
                  d="M583.88 596.31l-16.89-9.75.03-12.74 16.86 9.73v12.76z"
                  id="prefix__bar210"
                />
                <path
                  fill="#c1272d"
                  d="M583.88 577.6l-16.84-9.72.04-12.76 16.8 9.7v12.78z"
                  id="prefix__bar211"
                />
                <path
                  fill="#c1272d"
                  d="M583.88 708.66l-17.21-9.93.04-12.74 17.17 9.91v12.76z"
                  id="prefix__bar24"
                />
                <path
                  fill="#c1272d"
                  d="M583.88 689.94l-17.16-9.91.04-12.74 17.12 9.88v12.77z"
                  id="prefix__bar25"
                />
                <path
                  fill="#c1272d"
                  d="M583.88 671.22l-17.11-9.87.04-12.75 17.07 9.85v12.77z"
                  id="prefix__bar26"
                />
                <path
                  fill="#c1272d"
                  d="M583.88 652.49l-17.05-9.84.03-12.75 17.02 9.82v12.77z"
                  id="prefix__bar27"
                />
                <path
                  fill="#c1272d"
                  d="M583.88 746.11l-17.32-9.99.04-12.75 17.28 9.98v12.76z"
                  id="prefix__bar22"
                />
                <path
                  fill="#c1272d"
                  d="M583.88 727.39l-17.26-9.96.03-12.76 17.23 9.95v12.77z"
                  id="prefix__bar23"
                />
                <path
                  fill="#c1272d"
                  d="M583.88 764.84l-17.37-10.03.04-12.74 17.33 10.01v12.76z"
                  id="prefix__bar21"
                />
              </motion.g>
                <motion.g id="prefix__bar1" variants={barVariants} exit="ending" initial="hidden" animate="visible">
                <motion.path
                    variants={barChildVariants}
                    fill="#c1272d"
                    d="M644.9 576.95l-17.37-10.03.04-12.74 17.33 10.01v12.76z"
                    id="prefix__bar11"
                  />
                       <motion.path
                    variants={barChildVariants}
                    fill="#c1272d"
                    d="M644.9 558.22l-17.31-9.99.03-12.75 17.28 9.98v12.76z"
                    id="prefix__bar12"
                  />
                  <motion.path
                    variants={barChildVariants}
                    fill="#c1272d"
                    d="M644.9 539.5l-17.26-9.96.03-12.76 17.23 9.95v12.77z"
                    id="prefix__bar13"
                  />
                
                <motion.path
                    variants={barChildVariants}
                    fill="#c1272d"
                    d="M644.9 520.78l-17.21-9.94.04-12.74 17.17 9.91v12.77z"
                    id="prefix__bar14"
                  />
                  <motion.path
                    variants={barChildVariants}
                    fill="#c1272d"
                    d="M644.9 502.05l-17.15-9.91.03-12.74 17.12 9.88v12.77z"
                    id="prefix__bar15"
                  />
                  <motion.path
                    variants={barChildVariants}
                    fill="#c1272d"
                    d="M644.9 483.33l-17.1-9.87.03-12.75 17.07 9.85v12.77z"
                    id="prefix__bar16"
                  />
                  <motion.path
                    variants={barChildVariants}
                    fill="#c1272d"
                    d="M644.9 464.6l-17.05-9.84.04-12.75 17.01 9.82v12.77z"
                    id="prefix__bar17"
                  />
                  <motion.path
                    variants={barChildVariants}
                    fill="#c1272d"
                    d="M644.9 445.87l-17-9.81.04-12.75 16.96 9.8v12.76z"
                    id="prefix__bar18"
                  />
                  <motion.path
                    variants={barChildVariants}
                    fill="#c1272d"
                    d="M644.9 427.15l-16.94-9.78.03-12.74 16.91 9.76v12.76z"
                    id="prefix__bar19"
                  />
                  <motion.path
                    variants={barChildVariants}
                    fill="#c1272d"
                    d="M644.9 408.43l-16.89-9.76.04-12.74 16.85 9.73v12.77z"
                    id="prefix__bar110"
                  />
                  <motion.path
                    variants={barChildVariants}
                    fill="#c1272d"
                    d="M644.9 389.71l-16.84-9.72.04-12.76 16.8 9.7v12.78z"
                    id="prefix__bar111"
                  />
         
             
                </motion.g>
              <g id="prefix__bar3" opacity={0.3}>
                <path
                  fill="red"
                  d="M306.64 190.1l-.05 17.85 6.66 3.85.05-17.85-6.66-3.85z"
                  id="prefix__bar31"
                />
                <path
                  fill="red"
                  d="M295 183.38l-.05 17.85 6.65 3.84.05-17.85-6.65-3.84z"
                  id="prefix__bar32"
                />
                <path
                  fill="red"
                  d="M283.35 176.66l-.05 17.84 6.66 3.85.05-17.85-6.66-3.84z"
                  id="prefix__bar33"
                />
                <path
                  fill="red"
                  d="M271.7 169.93l-.05 17.85 6.66 3.84.05-17.85-6.66-3.84z"
                  id="prefix__bar34"
                />
                <path
                  fill="red"
                  d="M260.06 163.21l-.05 17.85 6.65 3.84.05-17.85-6.65-3.84z"
                  id="prefix__bar35"
                />
                <path
                  fill="red"
                  d="M248.41 156.48l-.05 17.85 6.66 3.85.05-17.85-6.66-3.85z"
                  id="prefix__bar36"
                />
                <path
                  fill="red"
                  d="M236.76 149.75l-.05 17.85 6.66 3.85.05-17.85-6.66-3.85z"
                  id="prefix__bar37"
                />
                <path
                  fill="red"
                  d="M225.12 143.03l-.05 17.85 6.65 3.84.05-17.85-6.65-3.84z"
                  id="prefix__bar38"
                />
                <path
                  fill="red"
                  d="M213.47 136.31l-.05 17.85 6.65 3.84.06-17.85-6.66-3.84z"
                  id="prefix__bar39"
                />
                <path
                  fill="red"
                  d="M201.82 129.58l-.05 17.85 6.66 3.85.04-17.85-6.65-3.85z"
                  id="prefix__bar310"
                />
                <path
                  fill="red"
                  d="M190.18 122.86l-.05 17.85 6.64 3.84.05-17.85-6.64-3.84z"
                  id="prefix__bar311"
                />
                <path
                  fill="red"
                  d="M178.53 116.14l-.06 17.85 6.66 3.84.06-17.85-6.66-3.84z"
                  id="prefix__bar312"
                />
              </g>
              <g id="prefix__leftbars" opacity={0.3} fill="red">
                <path d="M186.2 254.74l-.05 17.85 6.66 3.84.05-17.85-6.66-3.84zM174.56 248.02l-.05 17.85 6.65 3.84.05-17.85-6.65-3.84zM162.91 241.29l-.05 17.85 6.66 3.85.05-17.85-6.66-3.85zM151.26 234.57l-.05 17.84 6.66 3.85.05-17.85-6.66-3.84zM139.62 227.84l-.05 17.85 6.65 3.84.05-17.85-6.65-3.84zM127.97 221.12l-.05 17.85 6.65 3.84.06-17.85-6.66-3.84zM116.32 214.39l-.05 17.85 6.65 3.85.05-17.85-6.65-3.85zM104.68 207.67l-.05 17.85 6.64 3.84.06-17.85-6.65-3.84zM93.03 200.95l-.06 17.84 6.66 3.85.05-17.85-6.65-3.84zM81.38 194.22l-.05 17.85 6.65 3.84.05-17.85-6.65-3.84zM69.73 187.5l-.05 17.85 6.65 3.84.05-17.85-6.65-3.84zM58.08 180.77l-.05 17.85 6.66 3.85.05-17.85-6.66-3.85z" />
              </g>
              <motion.g
                id="techheaderphoto__screen2"
                animate={{ x: [0, 0, 0], y: [0, 30, 0] }}
                transition={{ duration: 3, loop: Infinity }}
              >
                <path
                  d="M235.75 191.74c-3.74-2.16-6.77-.43-6.78 3.85l-.41 142.75A14.87 14.87 0 00235.3 350l176.54 101.93c3.73 2.15 6.76.42 6.77-3.86l.39-142.75a14.83 14.83 0 00-6.73-11.65z"
                  fill="red"
                  opacity={0.3}
                />
                <g fill="#fff">
                  <path d="M396.34 366.76l-.16 58.82 4.1 2.37.17-58.82-4.11-2.37zM386.88 376.78l-.12 43.36 4.1 2.37.13-43.36-4.11-2.37zM377.5 360.96l-.15 53.75 4.11 2.38.15-53.76-4.11-2.37zM368.14 340.78l-.19 68.51 4.11 2.37.19-68.51-4.11-2.37zM358.85 294.99l-.31 108.87 4.09 2.36.31-108.87-4.09-2.36zM349.37 313.3l-.25 85.12 4.11 2.37.24-85.12-4.1-2.37zM340 292.43l-.28 100.56 4.11 2.37.28-100.56-4.11-2.37zM330.62 278.69l-.3 108.87 4.1 2.37.31-108.87-4.11-2.37zM321.12 301.62l-.23 80.5 4.11 2.37.23-80.5-4.11-2.37zM311.79 270.36l-.3 106.33 4.11 2.37.3-106.33-4.11-2.37zM302.35 279.46l-.26 91.8 4.1 2.37.26-91.8-4.1-2.37zM292.98 256.95l-.31 108.87 4.1 2.37.31-108.87-4.1-2.37zM283.48 284.51l-.22 75.88 4.11 2.37.21-75.88-4.1-2.37zM274.13 257.85l-.27 97.11 4.1 2.37.28-97.11-4.11-2.37zM264.75 240.65l-.31 108.87 4.1 2.37.31-108.87-4.1-2.37zM255.26 264.75l-.23 79.34 4.11 2.37.23-79.34-4.11-2.37zM245.88 250.55l-.25 88.12 4.11 2.37.25-88.12-4.11-2.37z" />
                </g>
                <path
                  fill="#fff"
                  d="M235.15 200.59l-.02 8 12.53 7.24.02-8-12.53-7.24z"
                />
              </motion.g>
              <g id="prefix__person">
                <path
                  fill="url(#prefix__New_Gradient_Swatch_copy_27-2)"
                  d="M89.49 684.64l78.09-45.39 227.8 132.71-78.09 45.38-227.8-132.7z"
                />
                <g id="prefix__person1">
                  <path
                    d="M223.17 515.83l.69 91.18a64.5 64.5 0 00-3.41 22.39l1.76 68.09a3.15 3.15 0 002 2.86c4.21 1.57 14.1 5.87 21.1-2.24a4.1 4.1 0 00.95-2.54c.4-10.05 3.14-71.08 10.58-104.17 8.13-36.13 12.05-61.72 4.52-78.89z"
                    fill="#c1272d"
                  />
                  <path
                    d="M225.74 710.91l2.4 1.42a9.64 9.64 0 0010.41-.37l1.07-.74a8.31 8.31 0 003.58-7.22l17.95-4.77s9.16-2.68 12 1.14-4.77 18.52-25 21.38c0 0-3.42.48-9.35 7.26-4 4.58-15.08 2.86-15.66-3.63a115 115 0 01-.13-13 1.8 1.8 0 012.73-1.47z"
                    fill="#000314"
                  />
                  <path
                    d="M219.18 697.94a.79.79 0 011.37-.52c1.53 1.73 4.63 3.92 10.45 3.73 7.41-.23 12.52-2.4 14.91-4.77a.81.81 0 011.35.6v10.92a3 3 0 01-.17 1c-.69 2-4 8.9-16.24 7.74 0 0-7.31.68-11.41-4.51a3.14 3.14 0 01-.61-2z"
                    fill="#a51e28"
                  />
                  <path
                    d="M250.87 538.11l.7 91.18a64.31 64.31 0 00-3.42 22.39l1.76 68.1a3.15 3.15 0 002.05 2.85c4.21 1.57 14.1 5.87 21.1-2.24a4.1 4.1 0 00.95-2.54c.41-10.05 3.14-71.08 10.58-104.17 8.13-36.13 12.05-61.72 4.52-78.88z"
                    fill="#ed1c24"
                  />
                  <path
                    d="M253.59 732.12l2.52 1.5a10.15 10.15 0 0010.95-.39l1.12-.78a8.75 8.75 0 003.77-7.56l18.87-5s9.63-2.81 12.64 1.21-5 19.47-26.29 22.48c0 0-3.61.5-9.84 7.63-4.22 4.82-15.86 3-16.46-3.82a122.28 122.28 0 01-.15-13.69 1.9 1.9 0 012.87-1.58z"
                    fill="#000314"
                  />
                  <path
                    d="M248.39 717.82a.79.79 0 011.37-.53c1.53 1.73 4.63 3.92 10.44 3.74 7.42-.24 12.53-2.4 14.91-4.78a.81.81 0 011.35.6v10.93a2.93 2.93 0 01-.16 1c-.7 2-4 8.9-16.25 7.74 0 0-7.3.68-11.4-4.51a3.11 3.11 0 01-.61-2z"
                    fill="#c92431"
                  />
                  <path
                    d="M292.44 527.41s-3.43-41.67-1.09-50a45 45 0 00.86-20.71l-3.6-20.26a40.91 40.91 0 00-18.94-24.56c-11.48-5.67-24.61-17.49-38.13-12-22.73 9.24-14.75 43.95-6.4 60.39a35.42 35.42 0 012.3 27.12c-3 9.22-6.4 18.41-8 28-1.2 7-.93 13.87-.47 20.79a15.34 15.34 0 009 13l37.93 15.59a17.65 17.65 0 007.07 1.23 10.5 10.5 0 009.64-6.77 57.43 57.43 0 003.33-13.52l2.38-.54a31.72 31.72 0 013.51 9.16 18 18 0 001.34-6.37l.11-4.54a111.58 111.58 0 00-.84-16.01z"
                    fill="#e3e5e9"
                  />
                  <path
                    d="M291.35 477.4a45 45 0 00.86-20.71l-3.6-20.26a40.56 40.56 0 00-5.28-11.61 79.86 79.86 0 00-10 7.94c3.6 4.58 5.94 10.78 6.15 19.83.86 35.86 4.42 97.27-12.31 112.65a18.49 18.49 0 005.55.79 10.73 10.73 0 009.93-7 57.23 57.23 0 003.26-13.34l2.37-.54a31.48 31.48 0 013.52 9.17 18 18 0 001.34-6.37l.11-4.54a111.58 111.58 0 00-.8-16s-3.45-41.67-1.1-50.01z"
                    fill="#b3b3b7"
                  />
                  <motion.g
                    id="techheaderphoto__rightarm"
                    animate={{ rotate: [-20, 0, -20] }}
                    style={{ originX: 0, originY: 0.2 }}
                    transition={{ duration: 3, loop: Infinity }}
                  >
                    <path
                      d="M317 467.2l56.9-33a8.25 8.25 0 01.95-.45l15.64-6.15a2.18 2.18 0 012.9 1.44 2.19 2.19 0 01-1.29 2.63l-8.59 3.44a1.84 1.84 0 00-1.09 2.25c.86 3 2.1 9.23-1.74 11.94a97.586 97.586 0 01-7.19 4.61 15.92 15.92 0 01-6.28 2.08l-5.18.59a14.84 14.84 0 00-8.4 3.86l-24.74 23.64z"
                      fill="#ffb587"
                    />
                    <path
                      d="M272.55 413.75s16.26 2.41 23.18 13.25c6.13 9.59 22.89 38.84 22.89 38.84l2.86-1.2s9.18 10.69 9 19l-14.9 7.83s-6 5.11-16.87-12.05-25.29-42.45-25.29-42.45-12.31-16.59-.87-23.22z"
                      fill="#e3e5e9"
                    />
                    <path
                      d="M319.32 463.33S329.16 474 330.76 485l10.24-7.21s-.8-15.66-12-20.28z"
                      fill="#fafbff"
                    />
                  </motion.g>
                  <g id="prefix__head">
                    <path
                      d="M266.73 413.28c-5 .44-14.8.13-19.17-8l-.58-30a18.75 18.75 0 018-15.58c3.68-2.56 8.48-3.21 12.86-3.38 3.47-.13 9.72-.88 12.28 2 1.28 1.46 2.71 7.09 2.71 9v30.41a3.51 3.51 0 01-4.49 3.37s-8.36-1.06-8.46 3.36v5.35a3.4 3.4 0 01-3.15 3.47z"
                      fill="#ffb587"
                    />
                    <path
                      d="M275.76 362.36s6.62 17.07-9.43 21.68c0 0-7.43 15.66-16.87 14 0 0-16.86-15-12.24-27.1 0 0-3.41-23.68 27.5-25.29 0 0 7.23-4.41 12.45-.4s6.02 13.1-1.41 17.11z"
                      fill="#001748"
                    />
                    <path
                      d="M273.3 389.59l-1.52-.73A3.15 3.15 0 01270 386v-6.9h3.31z"
                      fill="#001748"
                    />
                    <path
                      d="M281.58 372.35l3.23 8.73a2.36 2.36 0 01-1.44 3.05l-2.09.72z"
                      fill="#ffb587"
                    />
                    <path
                      d="M271.27 363.36a1 1 0 00-1-1c-3.16 0-14 .68-29.91 9.22-2.07 1.11.9 9.93 5.72 13.85s14.76-10.84 14.76-10.84 10.89-.98 10.43-11.23zM241.3 361.89c.54-1.75 4.76-13.23 23.12-13.93 0 0 6.58-4.78 12.46-.82a1 1 0 01-.2 1.75c-2.1.78-5.9 2-8.87 1.89a7.72 7.72 0 00-4.68 1.35c-4.89 3.34-15.76 10.26-21.67 10a.18.18 0 01-.16-.24z"
                      fill="#00205d"
                    />
                  </g>
                </g>
              </g>
              <motion.g
                id="techheaderphoto__screen1"
                style={{}}
                animate={{ scale:[1,0.9,1]}}
                transition={{ duration: 3, loop: Infinity }}
              >
                <path
                  d="M444.92 314.1c-2.74-1.58-5-.31-5 2.85l-.26 96.05a10.93 10.93 0 005 8.57l141.65 81.78c2.75 1.59 5 .32 5-2.83l.27-96.07a10.92 10.92 0 00-4.95-8.58z"
                  fill="red"
                  opacity={0.6}
                />
                <path
                  fill="#fff"
                  d="M447.93 325.85l-.02 8 12.53 7.23.02-8-12.53-7.23z"
                />
                <path
                  d="M478.89 344.7a2.5 2.5 0 011.19 1.72l5.5 34.7a12.9 12.9 0 005.52 7.11c1.52.87 3.06 1.16 4.24.57l16.82-8.23a1.55 1.55 0 011.4.2 4.31 4.31 0 011.85 2.39l11.36 38.73a12.65 12.65 0 005.52 7.15c2.3 1.32 4.6 1.33 5.54-.76l2.71-6c.32-.69 1.09-.68 1.86-.24a4.23 4.23 0 011.84 2.37l5.4 18.44a5.84 5.84 0 002.54 3.28c1.06.61 2.12.61 2.55-.34L566.15 400c.27-1.08 1.26-1.11 2.25-.54a4.73 4.73 0 012.27 3.35l7.65 72.34-109.5-64.41 8.87-65.66c.08-.66.64-.71 1.2-.38z"
                  fill="#c1272d"
                />
                <path
                  d="M468.06 346.51a2.52 2.52 0 011.18 1.72l5.5 34.7a12.89 12.89 0 005.52 7.1c1.52.88 3.06 1.17 4.24.58l16.82-8.23a1.52 1.52 0 011.4.2 4.28 4.28 0 011.85 2.39l11.36 38.73a12.63 12.63 0 005.52 7.14c2.3 1.33 4.6 1.34 5.54-.76l2.71-6c.32-.68 1.09-.67 1.86-.23a4.2 4.2 0 011.84 2.37l5.4 18.43a5.81 5.81 0 002.54 3.28c1.06.61 2.12.62 2.55-.34l11.42-45.77c.27-1.07 1.26-1.1 2.25-.53a4.71 4.71 0 012.27 3.35l7.65 72.36L458 412.57l8.87-65.65c.06-.69.62-.74 1.19-.41z"
                  fill="#fff"
                />
              </motion.g>
              <g id="prefix__graph">
                <path
                  fill="#fff"
                  d="M370.65 495.49l-.34 121.19-9.45-5.46.34-121.19 9.45 5.46zM386.76 551.67l-.2 74.39-9.46-5.46.21-74.39 9.45 5.46zM402.92 593.65l-.12 41.79-9.45-5.46.12-41.79 9.45 5.46zM419.31 551.22l-.26 93.6-9.47-5.47.27-93.6 9.46 5.47z"
                  opacity={0.5}
                />
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
}

export default SvgComponent;


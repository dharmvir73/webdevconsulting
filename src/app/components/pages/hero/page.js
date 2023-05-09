'use client';

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import TextTransition, { presets } from 'react-text-transition';

const Hero = () => {

    const [index, setIndex] = useState(0);

    const TEXTS = ['SCALABLE', 'FASTER', 'ANIMATED',];

    useEffect(() => {
        const intervalId = setInterval(
          () => setIndex((index) => index + 1),
          3000, // every 3 seconds
        );
        return () => clearTimeout(intervalId);
      }, []);

    return (
        <div className="max-w-[1150px] mx-auto border-x-[0.0625em] border-[#4d4d4d] p-5">
            <div className=" text-[#d3d3d3] md:text-9xl text-8xl  md:flex-row flex flex-col flex-wrap font-anton overflow-hidden">
            <motion.h1  
            initial={{x: -500,}}
            animate={{x: 0}}
            transition={{duration: 1, ease: "easeIn", type: "tween"}}>
                WE&nbsp;
            </motion.h1>
            <motion.h1
            initial={{y: 500}}
            animate={{y: 0}}
            transition={{duration: 1, ease:"easeIn", type: "tween"}}>
                HELP&nbsp;
            </motion.h1>
            <motion.h1
            ease-in
            initial={{x:1000}}
            animate={{x:0}}
            transition={{duration: 0.6, ease:"easeIn", type: "tween"}}>
                TO&nbsp;BUILD&nbsp;&nbsp;
                </motion.h1>
            <span  className="flex md:flex-row flex-col ">
            <span>
                <motion.h1
            ease-in
            initial={{opacity: 0, scale: 0}}
            animate={{opacity: 1, scale: 1}}
            transition={{duration: 0.8, ease:"easeIn", type: "tween"}}
            className="text-purple-500">
                <TextTransition inline={true} springConfig={presets.wobbly}>{TEXTS[index % TEXTS.length]}&nbsp;</TextTransition>
            </motion.h1>
            </span>
            <span>
            <motion.h1
            initial={{opacity: 0, scale: 0}}
            animate={{opacity: 1, scale: 1}}
            transition={{duration: 0.8, ease:"easeIn", type: "tween"}}>
            WEBSITES
                </motion.h1>
            </span>
            </span>
            </div>
        </div>
    )
};


export default Hero;        
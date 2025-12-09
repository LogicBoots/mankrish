import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

import * as THREE from "three";
import GLOBE from "vanta/dist/vanta.globe.min";
// import LetterGlitch from "../components/LetterGlitch";
// import { Boxes } from "../components/Boxes";
import Flipper from "../components/Flipper";

import { Marquee } from "../components/Marquee";

import Divider from "@mui/material/Divider";

const Banner = () => {
  const [vantaEffect, setVantaEffect] = useState(null);
  const vantaRef = useRef(null);

  // useEffect(() => {
  //   if (!vantaEffect) {
  //     setVantaEffect(
  //       GLOBE({
  //         el: vantaRef.current,
  //         THREE: THREE,
  //         mouseControls: true,
  //         touchControls: true,
  //         gyroControls: false,
  //         minHeight: 200.0,
  //         minWidth: 200.0,
  //         scale: 1.0,
  //         scaleMobile: 1.0,
  //         color: 0xff3f81,
  //         backgroundColor: 0x171a3b,
  //         size: 0.7,
  //       })
  //     );
  //   }
  //   return () => {
  //     if (vantaEffect) vantaEffect.destroy();
  //   };
  // }, [vantaEffect]);

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center rounded-lg bg-[#FAF8F6] ">
      <div>

        {/* Vanta Globe background container */}
        <div ref={vantaRef} className="absolute inset-0" />

        {/* Overlay to reduce Globe effect opacity */}
        <div className="absolute inset-0 bg-slate-900/60 z-10 pointer-events-none" />

        <div className="relative z-20 text-center  px-4 sm:px-6  lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl mx-auto">

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-5xl md:text-6xl lg:text-8xl font-extrabold leading-tight mb-4 md:mb-6 bg-gradient-to-r text-black bg-clip-text"
            >
              <Flipper>Mamle</Flipper>

              {/* Premium tagline — bigger, cleaner, luxury feel */}
              <motion.span
                initial={{ backgroundPosition: "200% center", opacity: 0 }}
                animate={{ backgroundPosition: "0% center", opacity: 1 }}
                transition={{ duration: 1.2, delay: 0.8 }}
                className="block mt-4 text-3xl md:text-4xl lg:text-5xl font-semibold 
               bg-gradient-to-r from-gray-700 via-black to-gray-700 
               bg-[length:200%] bg-clip-text text-transparent tracking-wide"
              >
                <div className="lg:text-7xl md:text-5xl text-4xl">INTERNATIONAL</div>
              </motion.span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="font-manrope text-lg md:text-xl lg:text-2xl  mb-6 md:mb-8 max-w-3xl text-black mx-auto leading-relaxed">
              A dynamic startup revolutionizing healthcare and household
              automation with AI-powered robotics.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="/about"
                className="font-geist btn-primary text-base md:text-lg px-6 md:px-8 py-3 md:py-4 bg-white/10 text-black backdrop-blur-sm border border-white/20 hover:bg-white/20">
                Learn More
              </a>
              <a
                href="/products"
                className="font-geist btn-secondary text-base md:text-lg px-6 md:px-8 py-3 md:py-4 bg-black border-2 border-white/30 text-white ">
                Our Products
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        {/* <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-black rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-black rounded-full mt-2"
          />
        </motion.div>
      </motion.div> */}
      </div>

      <div className="bottom-10 absolute left-0 w-full z-30   p-6">
        <div className="">
          <Marquee repeat={4} className="[--duration:20s]">
            <span>Robotics</span>
            <Divider orientation="vertical" flexItem />
            <span>Artificial Intelligence</span>
            <Divider orientation="vertical" flexItem />
            <span>Internet of Things</span>
            <Divider orientation="vertical" flexItem />
            <span>Drones</span>
            <Divider orientation="vertical" flexItem />
            <span>Medical Devices</span>
            <Divider orientation="vertical" flexItem />
            <span>Healthcare</span>
            <Divider orientation="vertical" flexItem />
          </Marquee>


        </div>

      </div>

    </div>
  );
};

export default Banner;

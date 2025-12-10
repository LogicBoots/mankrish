import { motion } from "framer-motion";

import Banner from "../components/Banner";

import FeaturedCard from "../components/FeaturedCard";
import ProductCard from "../components/ProductCard";
import { Drone } from "lucide-react";
import { Stethoscope } from "lucide-react";
import { House } from "lucide-react";
import { Bot } from "lucide-react";
import { Microscope } from "lucide-react";
import { Rocket } from "lucide-react";
import { Marquee } from "../components/Marquee";
import Divider from "@mui/material/Divider";
import { Carousel } from "@material-tailwind/react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

import logo1 from "../assets/tides.png";
import logo2 from "../assets/iitrLogo.png";
import logo3 from "../assets/stpi.png";
import logo4 from "../assets/electropreneurial.png";
import logo5 from "../assets/medtech.png";
import About from "./About";
import Products from "./Products";

const Home = () => {
  const featuredItems = [
    {
      id: "atharvaai",
      title: "HomeDesign",
      description:
        "A futuristic AI powered solution for home design. Provides real-time inputs to assist designers during the design process.",
      color: "from-luxury-sapphire-500 to-luxury-sapphire-700",
      icon: <House size={44} color="#ffffff" />,
    },
    {
      id: "ai-stethoscope",
      title: "Stethoscope",
      description:
        "Smart stethoscope with AI-powered diagnosis and remote patient monitoring capabilities.",
      color: "from-luxury-amethyst-500 to-luxury-amethyst-700",
      icon: <Stethoscope size={44} color="#ffffff" />,
    },
  ];

  const products = [
    {
      id: "home-design",
      title: "Home Design",
      description: "A futuristic AI powered solution for home design.",
      icon: <Microscope size={44} color="#ffffff" />,
      color: "from-luxury-amethyst-600 to-luxury-amethyst-700",
    },
    {
      id: "ai-icu",
      title: "AI in ICU",
      description:
        "Realtime monitoring and diagnostics of ICU patients using AI.",
      icon: <Drone size={44} color="#ffffff" />,
      color: "from-luxury-ruby-500 to-luxury-ruby-600",
    },

    {
      id: "robotic-vacuum",
      title: "AI-Powered Robotic Vacuum Cleaners",
      description:
        "Advanced robotic vacuum cleaners with AI navigation and smart home integration.",
      icon: <Bot size={44} color="#ffffff" />,
      color: "from-luxury-emerald-500 to-luxury-emerald-600",
    },
    {
      id: "dinkarai",
      title: "Bridge Inspection",
      description:
        "Civil infrastructure inspection using drones + AI in real time",
      icon: <Rocket size={44} color="#ffffff" />,
      color: "from-luxury-sapphire-500 to-luxury-sapphire-600",
    },
  ];

  return (
    <div id="home" className=" min-h-screen  relative">
      <div className="absolute inset-0 " />
      {/* Hero Banner */}
      <Banner />




      {/* About Teaser Section */}
      {/* <div className="section-padding relative overflow-hidden ">
        <div className="absolute inset-0 opacity-50" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center max-w-5xl mx-auto relative z-10 p-6 md:p-8 bg-black rounded-3xl shadow-2xl shadow-luxury-platinum-900/10 border border-luxury-gold-400">
          <div className="absolute inset-0 bg-gradient-to-br from-luxury-platinum-800/80 via-luxury-obsidian-800/80 to-luxury-sapphire-900/80 rounded-3xl" />
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative z-10 text-3xl md:text-4xl lg:text-5xl font-geist font-bold text-luxury-gold-100 mb-6 md:mb-8 leading-tight">
            Revolutionizing Healthcare & Automation
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative z-10 text-lg md:text-xl font-manrope text-luxury-gold-200 mb-8 md:mb-10 leading-relaxed max-w-4xl mx-auto">
            At Mamale International, we're pioneering the future of AI-powered
            robotics, creating solutions that transform healthcare delivery and
            household automation. Our cutting-edge technology combines
            artificial intelligence with robotics to solve real-world
            challenges.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="relative z-10">
            <Link
              to="/about"
              className="inline-flex items-center px-8 md:px-10 py-3 md:py-4 font-geist font-semibold text-white bg-gradient-to-r from-luxury-sapphire-600 via-luxury-amethyst-600 to-luxury-sapphire-700 rounded-2xl shadow-xl shadow-luxury-sapphire-500/25 hover:shadow-2xl hover:shadow-luxury-sapphire-500/40 hover:scale-105 hover:-translate-y-1 transform transition-all duration-300 group text-sm md:text-base">
              <span>Learn More About Us</span>
              <svg className="ml-3 w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>
        </motion.div>
      </div> */}




      {/* Innovation Showcase */}

      {/* Products Section */}




      {/* Industries Marquee */}
      {/* <div className="relative overflow-hidden">
        <div className="absolute top-10 left-0 w-full h-px bg-gradient-to-r from-transparent via-luxury-gold-300/50 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-luxury-gold-300/50 to-transparent" />

        <div className="relative backdrop-blur-sm bg-luxury-obsidian-800/60 rounded-2xl border border-luxury-gold-400/20 shadow-xl shadow-luxury-gold-500/10 mx-0 my-4">
          <div className="absolute inset-0 bg-gradient-to-br from-luxury-sapphire-900/20 via-luxury-amethyst-900/10 to-luxury-gold-900/20 rounded-2xl" />
          <Marquee repeat={4} className="[--duration:25s] font-manrope py-6 text-luxury-gold-200 font-semibold">
            <span className="px-8 py-4 rounded-full bg-gradient-to-r from-luxury-sapphire-500/20 to-luxury-amethyst-500/20 backdrop-blur-sm border border-luxury-gold-400/30 text-luxury-gold-100 font-bold mx-4 shadow-sm hover:shadow-md transition-all duration-300">Healthcare</span>
            <span className="text-luxury-gold-400 mx-6 text-2xl">✦</span>
            <span className="px-8 py-4 rounded-full bg-gradient-to-r from-luxury-amethyst-500/20 to-luxury-ruby-500/20 backdrop-blur-sm border border-luxury-gold-400/30 text-luxury-gold-100 font-bold mx-4 shadow-sm hover:shadow-md transition-all duration-300">Railways</span>
            <span className="text-luxury-gold-400 mx-6 text-2xl">✦</span>
            <span className="px-8 py-4 rounded-full bg-gradient-to-r from-luxury-ruby-500/20 to-luxury-emerald-500/20 backdrop-blur-sm border border-luxury-gold-400/30 text-luxury-gold-100 font-bold mx-4 shadow-sm hover:shadow-md transition-all duration-300">Metro</span>
            <span className="text-luxury-gold-400 mx-6 text-2xl">✦</span>
            <span className="px-8 py-4 rounded-full bg-gradient-to-r from-luxury-emerald-500/20 to-luxury-sapphire-500/20 backdrop-blur-sm border border-luxury-gold-400/30 text-luxury-gold-100 font-bold mx-4 shadow-sm hover:shadow-md transition-all duration-300">Bridge</span>
            <span className="text-luxury-gold-400 mx-6 text-2xl">✦</span>
            <span className="px-8 py-4 rounded-full bg-gradient-to-r from-luxury-sapphire-500/20 to-luxury-amethyst-500/20 backdrop-blur-sm border border-luxury-gold-400/30 text-luxury-gold-100 font-bold mx-4 shadow-sm hover:shadow-md transition-all duration-300">Health Monitoring</span>
            <span className="text-luxury-gold-400 mx-6 text-2xl">✦</span>
            <span className="px-8 py-4 rounded-full bg-gradient-to-r from-luxury-amethyst-500/20 to-luxury-ruby-500/20 backdrop-blur-sm border border-luxury-gold-400/30 text-luxury-gold-100 font-bold mx-4 shadow-sm hover:shadow-md transition-all duration-300">Civil Infrastructure Inspection</span>
            <span className="text-luxury-gold-400 mx-6 text-2xl">✦</span>
            <span className="px-8 py-4 rounded-full bg-gradient-to-r from-luxury-ruby-500/20 to-luxury-emerald-500/20 backdrop-blur-sm border border-luxury-gold-400/30 text-luxury-gold-100 font-bold mx-4 shadow-sm hover:shadow-md transition-all duration-300">Industrial Robotics</span>
            <span className="text-luxury-gold-400 mx-6 text-2xl">✦</span>
          </Marquee>
        </div>
      </div> */}
    </div>
  );
};

export default Home;

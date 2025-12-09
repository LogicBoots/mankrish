import { useParams, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeftIcon, PlayIcon } from "@heroicons/react/24/outline";
import { Stethoscope, Bot, Microscope, Rocket, ChevronRight } from "lucide-react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ProductDetail = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('overview');

  const productData = {
    "robotic-vacuum": {
      title: "AI-Powered Robotic Vacuum",
      subtitle: "The Future of Home Automation",
      badge: "AI SERIES • GEN 3",
      price: "$899.00",
      status: "AVAILABLE",
      backgroundVideo: "/images/vaccum.mp4",
      gallery: [
        "/images/vaccum.mp4",
        "/images/img5.jpeg",
        "/images/img2.jpeg",
        "/images/img4.jpeg",
      ],
      description: "Experience the pinnacle of smart cleaning. Our AI-powered independent navigation system adapts to your home's layout in real-time.",
      longDescription: `Driven by a neural network processor, this isn't just a vacuum. It's an intelligent home maintenance droid. It learns your floor plan, identifies dirtier areas for deep cleaning, and avoids dynamic obstacles like pets and wires with millimeter precision.`,
      features: ["Neural Network Navigation", "Lidar + Visual SLAM", "6000Pa Suction Power", "Self-Emptying Base", "Voice Control Matrix"],
      specifications: [
        { label: "Battery", value: "5200mAh" },
        { label: "Runtime", value: "180 mins" },
        { label: "Suction", value: "6000Pa" },
        { label: "Noise", value: "< 62dB" },
        { label: "Bin Capacity", value: "400ml" },
        { label: "Weight", value: "3.2kg" }
      ],
      icon: <Bot size={24} className="text-cyan-400" />,
      accentColor: "cyan",
      gradient: "from-cyan-500/20 via-blue-500/10 to-transparent"
    },
    // ... (Keep other products with similar structure or fallback)
    "ai-stethoscope": {
      title: "AI-Powered Stethoscope",
      subtitle: "Digital Auscultation Redefined",
      badge: "MEDTECH • PRO",
      price: "$299.00",
      status: "IN STOCK",
      gallery: [
        "/images/i1.jpeg",
        "/images/i4.jpeg",
        "/images/i3.jpeg",
        "/images/i5.jpeg",
      ],
      description: "Next-gen diagnostic tool with active noise cancellation and AI-assisted heart/lung sound analysis.",
      longDescription: "Transforms analog body sounds into digital insights (spectrograms). Detects murmurs and arrhythmias in real-time.",
      features: ["Active Noise Cancellation", "Real-time AI Analysis", "Bluetooth 5.0", "HIPAA Compliant App"],
      specifications: [
        { label: "Battery", value: "20 Hours" },
        { label: "Freq Response", value: "20Hz-20kHz" },
        { label: "Weight", value: "150g" }
      ],
      icon: <Stethoscope size={24} className="text-rose-400" />,
      accentColor: "rose",
      gradient: "from-rose-500/20 via-red-500/10 to-transparent"
    },
    "nanobots-cancer": {
      title: "Precision Nanobots",
      subtitle: "Targeted Oncology Solution",
      badge: "RESEARCH • BETA",
      price: "CONTACT SALES",
      status: "WAITLIST",
      gallery: [
        "/images/im2.jpeg",
        "/images/im1.jpeg",
        "/images/im3.jpeg",
        "/images/im4.jpeg",
      ],
      description: "Microscopic autonomous units designed for non-invasive targeted drug delivery at the cellular level.",
      longDescription: "Revolutionary medical nanorobotics capable of navigating the bloodstream to deliver payloads directly to malignant cells.",
      features: ["Cellular Targeting", " biocompatible Polymer", "External Mag Control", "Real-time Tracking"],
      specifications: [
        { label: "Size", value: "500nm" },
        { label: "Material", value: "Bio-Polymer" },
        { label: "Half-life", value: "48 Hours" }
      ],
      icon: <Microscope size={24} className="text-purple-400" />,
      accentColor: "purple",
      gradient: "from-purple-500/20 via-indigo-500/10 to-transparent"
    },
    placeholder: {
      title: "Project: NextGen",
      subtitle: "Coming Soon",
      badge: "CONFIDENTIAL",
      price: "---",
      status: "DEVELOPMENT",
      gallery: ["/images/placeholder-1.jpg"],
      description: "Top secret innovation currently in the research and development phase.",
      longDescription: "We are pushing the boundaries of what's possible.",
      features: ["Undisclosed"],
      specifications: [],
      icon: <Rocket size={24} className="text-gray-400" />,
      accentColor: "gray",
      gradient: "from-gray-500/20 via-slate-500/10 to-transparent"
    }
  };

  const data = productData[id];

  if (!data) return (
    <div className="min-h-screen bg-[#050505] text-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Product Not Found</h1>
        <Link to="/" className="text-cyan-400 hover:underline">Return Home</Link>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-cyan-500/30 selection:text-cyan-200 overflow-x-hidden flex flex-col">
      <Navbar />

      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none">
        <div className={`absolute top-[-20%] left-[-10%] w-[70vw] h-[70vw] bg-gradient-radial ${data.gradient} blur-[120px] opacity-40`} />
        <div className={`absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] bg-gradient-radial ${data.gradient} blur-[100px] opacity-30`} />
      </div>

      <div className="relative z-10 container mx-auto px-6 pt-32 pb-12 flex-grow">



        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">

          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            <div className={`inline-flex items-center space-x-2 px-3 py-1 rounded-md bg-${data.accentColor}-500/10 border border-${data.accentColor}-500/20 text-${data.accentColor}-400 text-xs font-bold tracking-widest uppercase`}>
              {data.icon}
              <span>{data.badge}</span>
            </div>

            <div>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[0.9] text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-white/40 mb-4">
                {data.title.split(' ')[0]}<br />
                <span className="text-white/20">{data.title.split(' ').slice(1).join(' ')}</span>
              </h1>
              <p className="text-xl text-white/60 max-w-lg leading-relaxed pt-4 border-t border-white/10 mt-8">
                {data.description}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 pt-4">
              <button className={`px-8 py-4 rounded-full bg-gradient-to-r from-${data.accentColor}-500 to-${data.accentColor}-600 hover:from-${data.accentColor}-400 hover:to-${data.accentColor}-500 text-white font-bold tracking-wide shadow-lg shadow-${data.accentColor}-500/25 transition-all transform hover:scale-105 hover:shadow-${data.accentColor}-500/40`}>
                PRE-ORDER NOW
              </button>
              <button className="group px-8 py-4 rounded-full border border-white/20 hover:bg-white/5 text-white font-semibold tracking-wide flex items-center gap-3 transition-all">
                <PlayIcon className="w-5 h-5 group-hover:text-cyan-400 transition-colors" />
                <span>WATCH DEMO</span>
              </button>
            </div>

            <div className="pt-8 flex items-center gap-6 text-sm text-white/40">
              <div className="flex -space-x-3">
                {[1, 2, 3].map(i => (
                  <div key={i} className="w-8 h-8 rounded-full bg-gray-700 border-2 border-[#050505]" />
                ))}
              </div>
              <p>Joined by 12,000+ pioneers</p>
            </div>
          </motion.div>

          {/* Right: Hero Image/Media */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-blue-900/20 aspect-square md:aspect-[4/3] bg-gradient-to-br from-gray-900 to-black group">
              <Carousel
                showStatus={false}
                showThumbs={false}
                infiniteLoop
                autoPlay
                interval={5000}
                className="product-carousel h-full"
              >
                {data.gallery.map((src, i) => (
                  <div key={i} className="h-full w-full flex items-center justify-center bg-gray-900 aspect-square md:aspect-[4/3]">
                    {src.endsWith('.mp4') ? (
                      <video src={src} autoPlay loop muted playsInline className="h-full w-full object-cover" />
                    ) : (
                      <img src={src} alt={`Product View ${i}`} className="h-full w-full object-cover" />
                    )}
                  </div>
                ))}
              </Carousel>

            </div>

            {/* Background Glow */}
            <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-${data.accentColor}-500/20 blur-[100px] -z-10`} />
          </motion.div>

        </div>

        {/* Scrollable Content Sections */}
        <div className="mt-32 grid grid-cols-1 md:grid-cols-12 gap-12">

          {/* Sidebar Navigation */}
          <div className="md:col-span-3 sticky top-32 h-fit hidden md:block space-y-2">
            <span className="text-xs font-bold text-white/40 uppercase tracking-widest pl-4 mb-4 block">Contents</span>
            {['overview', 'specs'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all ${activeTab === tab ? `bg-white/10 text-white border-l-2 border-${data.accentColor}-400` : 'text-white/40 hover:text-white hover:bg-white/5'}`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          {/* Main Content Area */}
          <div className="md:col-span-9 space-y-20">

            {/* Overview */}
            <section id="overview" className="space-y-8">
              <h2 className="text-3xl font-bold">Product Overview</h2>
              <p className="text-lg text-white/70 leading-relaxed font-light">
                {data.longDescription}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {data.features.map((feature, i) => (
                  <div key={i} className="p-6 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors flex items-start gap-4">
                    <div className={`p-2 rounded-lg bg-${data.accentColor}-500/20 text-${data.accentColor}-400`}>
                      <ChevronRight className="w-4 h-4" />
                    </div>
                    <span className="text-white/80 font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Specs */}
            <section id="specs" className="space-y-8">
              <h2 className="text-3xl font-bold">Technical Specifications</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {data.specifications.map((spec, i) => (
                  <div key={i} className="p-4 border-l border-white/10">
                    <div className="text-xs text-white/40 uppercase tracking-widest mb-1">{spec.label}</div>
                    <div className="text-xl font-semibold">{spec.value}</div>
                  </div>
                ))}
              </div>
            </section>

          </div>
        </div>

      </div>
      <Footer />
    </div>
  );
};
export default ProductDetail;
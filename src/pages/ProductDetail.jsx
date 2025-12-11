import { useParams, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { PlayIcon, ArrowRight, ShoppingBagIcon, Search, User, ChevronRight } from "lucide-react";
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
      gallery: [
        "/images/vaccum.mp4",
        "/images/img5.jpeg",
        "/images/img2.jpeg",
      ],
      description: "Experience the pinnacle of smart cleaning. Our AI-powered independent navigation system adapts to your home's layout in real-time.",
      features: ["Neural Network Navigation", "Lidar + Visual SLAM", "6000Pa Suction Power", "Self-Emptying Base"],
      specifications: [
        { label: "Battery", value: "5200mAh" },
        { label: "Runtime", value: "180 mins" },
        { label: "Suction", value: "6000Pa" },
        { label: "Weight", value: "3.2kg" }
      ],
      accentColor: "cyan"
    },
    "ai-stethoscope": {
      title: "AI-Powered Stethoscope",
      subtitle: "Medical Grade",
      badge: "MEDTECH • PRO",
      price: "$299.00",
      status: "IN STOCK",
      gallery: [
        "/images/i1.jpeg",
        "/images/i4.jpeg",
        "/images/i3.jpeg",
        "/images/i5.jpeg"
      ],
      description: "Next-gen diagnostic tool with active noise cancellation and AI-assisted heart/lung sound analysis.",
      features: ["Active Noise Cancellation", "Real-time AI Analysis", "Bluetooth 5.0", "HIPAA Compliant App"],
      specifications: [
        { label: "Battery", value: "20 Hours" },
        { label: "Freq Response", value: "20Hz-20kHz" },
        { label: "Weight", value: "150g" },
        { label: "Connectivity", value: "Bluetooth 5.0" }
      ],
      accentColor: "rose"
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
      ],
      description: "Microscopic autonomous units designed for non-invasive targeted drug delivery at the cellular level.",
      features: ["Cellular Targeting", "Biocompatible Polymer", "External Mag Control", "Real-time Tracking"],
      specifications: [
        { label: "Size", value: "500nm" },
        { label: "Material", value: "Bio-Polymer" },
        { label: "Half-life", value: "48 Hours" }
      ],
      accentColor: "purple"
    },
    placeholder: {
      title: "Project: NextGen",
      subtitle: "Coming Soon",
      gallery: ["/images/placeholder-1.jpg"],
      description: "Top secret innovation currently in the research and development phase.",
      features: ["Undisclosed"],
      specifications: [],
      accentColor: "gray"
    }
  };

  const data = productData[id] || productData.placeholder;

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-black selection:text-white overflow-x-hidden flex flex-col relative">

      {/* Background Ambience / Waves */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[10%] right-[-10%] w-[50vw] h-[50vw] border-t border-gray-100/50 rounded-full" />
        <div className="absolute top-[15%] right-[-5%] w-[45vw] h-[45vw] border-t border-gray-100/60 rounded-full" />
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_40%,rgba(255,255,230,0.6),transparent_60%)]" />
      </div>

      <Navbar />

      <main className="relative z-10 flex-grow pt-32 pb-12 w-full max-w-[1400px] mx-auto px-6 lg:px-12">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[700px]">

          {/* LEFT COLUMN: Main Text & CTA */}
          <div className="lg:col-span-4 flex flex-col justify-center space-y-8 order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-gray-500 text-lg mb-2 font-medium">{data.subtitle}</p>
              <h1 className="text-5xl lg:text-7xl font-bold leading-[1.1] text-gray-900 mb-8 tracking-tight">
                {data.title}
              </h1>

              <p className="text-gray-500 text-base leading-relaxed max-w-sm mb-10">
                {data.description}
              </p>

              <div className="flex items-center gap-4">
                <button className="flex items-center justify-between gap-6 pl-8 pr-2 py-2 bg-[#4A4A4A] text-white rounded-full hover:bg-black transition-all shadow-xl hover:shadow-2xl group">
                  <span className="font-medium text-sm tracking-wide">Shop Now</span>
                  <div className="bg-white text-black w-10 h-10 rounded-full flex items-center justify-center transform group-hover:translate-x-1 transition-transform">
                    <ArrowRight size={18} />
                  </div>
                </button>
              </div>
            </motion.div>
          </div>

          {/* CENTER COLUMN: Product Image / Carousel */}
          <div className="lg:col-span-4 relative order-1 lg:order-2 h-full flex items-center justify-center">

            {/* Product Image Wrapper */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative z-10 w-full max-w-[500px] aspect-square flex items-center justify-center p-4 md:p-8"
            >
              <Carousel
                showStatus={false}
                showThumbs={false}
                showArrows={false}
                showIndicators={false}
                infiniteLoop
                autoPlay
                interval={4000}
                className="w-full h-full product-carousel-center"
                stopOnHover={false}
                swipeable={true}
                emulateTouch={true}
              >
                {data.gallery.map((src, i) => (
                  <div key={i} className="h-full w-full flex items-center justify-center">
                    {src.endsWith('.mp4') ? (
                      <video src={src} autoPlay loop muted playsInline className="h-full w-full object-cover rounded-3xl shadow-2xl" />
                    ) : (
                      <img
                        src={src}
                        alt={`Product View ${i}`}
                        className="h-full w-full object-cover rounded-[2rem] shadow-2xl"
                      />
                    )}
                  </div>
                ))}
              </Carousel>
            </motion.div>
          </div>

          {/* RIGHT COLUMN: Details / Specs */}
          <div className="lg:col-span-4 flex flex-col justify-center items-start lg:items-end space-y-12 order-3 lg:order-3 h-full">

            <div className="w-full max-w-sm ml-auto">

              {/* Tab Navigation */}
              <div className="flex justify-end gap-8 mb-8 border-b border-gray-100 pb-2">
                {['overview', 'specs'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`text-sm font-bold uppercase tracking-widest pb-2 transition-all relative ${activeTab === tab
                      ? 'text-gray-900 border-b-2 border-gray-900'
                      : 'text-gray-400 hover:text-gray-600'
                      }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className="min-h-[300px]"
              >
                {activeTab === 'overview' ? (
                  <div className="space-y-6 text-right">
                    <h3 className="text-xl font-medium text-gray-900">Product Highlights</h3>
                    <div className="space-y-4">
                      {(data.features || []).map((feature, i) => (
                        <div key={i} className="flex items-center justify-end gap-3 text-gray-600">
                          <span>{feature}</span>
                          <div className={`p-1 rounded-full bg-${data.accentColor}-50 text-${data.accentColor}-600`}>
                            <ChevronRight size={14} />
                          </div>
                        </div>
                      ))}
                    </div>
                    <p className="text-sm text-gray-400 mt-8 italic">
                      *Estimated delivery 2-3 days
                    </p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {(data.specifications || []).map((spec, i) => (
                      <div key={i} className="flex justify-between items-center py-3 border-b border-gray-50 last:border-0 hover:bg-gray-50/50 transition-colors px-2 rounded-lg">
                        <span className="font-semibold text-gray-900">{spec.value}</span>
                        <span className="text-xs text-gray-400 uppercase tracking-wider">{spec.label}</span>
                      </div>
                    ))}
                    {(data.specifications || []).length === 0 && (
                      <p className="text-gray-400 text-right">No specifications available</p>
                    )}
                  </div>
                )}
              </motion.div>

            </div>

          </div>

        </div>

      </main>

      <Footer />
      <style>{`
        .product-carousel-center .carousel.carousel-slider { height: 100% !important; overflow: visible !important; }
        .product-carousel-center .slider-wrapper { height: 100% !important; }
        .product-carousel-center .slider { height: 100% !important; }
        .product-carousel-center .slide { height: 100% !important; display: flex; align-items: center; justify-content: center; background: transparent !important; }
      `}</style>
    </div>
  );
};

export default ProductDetail;
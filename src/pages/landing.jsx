import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar from "../components/Navbar";
import Home from "./Home";
import About from "./About";
import Products from "./Products";
import FeaturedDetail from "./FeaturedDetail";
import ProductDetail from "./ProductDetail";
import Footer from "../components/Footer";
import PrivacyPolicy from "./PrivacyPolicy";
import ContactPage from "../components/ContactPage";

// function Landing() {
//   return (
//     <Router>
//       <div className="min-h-screen flex flex-col">
//         <Navbar />
//         <main className="flex-1">
//           <AnimatePresence mode="wait">
//             <Routes>
//               <Route path="/" element={<Home />} />
//               <Route path="/about" element={<About />} />
//               <Route path="/products" element={<Products />} />
//               {/* <Route path="/featured/:id" element={<FeaturedDetail />} />
//               <Route path="/product/:id" element={<ProductDetail />} />
//               <Route path="/privacy" element={<PrivacyPolicy />} /> */}
//             </Routes>
//           </AnimatePresence>
//         </main>
//         <Footer />
//       </div>
//     </Router>
//   );
// }

function Landing() {
  return (
 
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <AnimatePresence mode="wait">
              <Home />
              <About />
              <Products />
                     <ContactPage/> 
              {/* <FeaturedDetail /> */}



          </AnimatePresence>
        </main>
        <Footer />
      </div>
 
  );
}


export default Landing;


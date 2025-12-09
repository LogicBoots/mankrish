import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';
import ProductCard from '../components/ProductCard';
import { Stethoscope } from "lucide-react";
import { Bot } from "lucide-react";
import { Microscope } from "lucide-react";
import { Rocket } from "lucide-react";
import ContactPage from '../components/ContactPage';

const Products = () => {
  const products = [
    {
      id: 'robotic-vacuum',
      title: 'AI-Powered Robotic Vacuum Cleaners',
      description: 'Advanced robotic vacuum cleaners with AI navigation and smart home integration.',
      icon: <Bot size={32} color="#ffffff" />,
      color: 'from-green-500 to-green-600'
    },
    {
      id: 'ai-stethoscope',
      title: 'AI-Powered Stethoscope with Remote Monitoring',
      description: 'Smart stethoscope with AI-powered diagnosis and remote patient monitoring capabilities.',
      icon: <Stethoscope size={32} color="#ffffff" />,
      color: 'from-red-500 to-red-600'
    },
    {
      id: 'nanobots-cancer',
      title: 'Precise Drug Delivery',
      description: 'Revolutionary nanobots designed for targeted cancer treatment and drug delivery.',
      icon: <Microscope size={32} color="#ffffff" />,
      color: 'from-purple-500 to-purple-600'
    },
    {
      id: 'placeholder',
      title: 'Coming Soon',
      description: 'We are working on exciting new products. Stay tuned for more innovations.',
      icon: <Rocket size={32} color="#ffffff" />,
      color: 'from-gray-500 to-gray-600'
    }
  ];

  return (
    <div id='products' className="min-h-screen pt-16">
      {/* Hero Section */}
      <SectionWrapper className="bg-gradient-to-br from-gray-50 to-slate-50">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto px-4 sm:px-6"
        >
          <h1 className="font-geist text-3xl md:text-4xl lg:text-6xl font-bold text-black  bg-clip-text mb-4 md:mb-6">
            Our Product
          </h1>
          <p className="font-manrope text-lg md:text-xl text-black leading-relaxed">
            Discover our range of AI-powered solutions designed to revolutionize healthcare and household automation
          </p>
        </motion.div>
      </SectionWrapper>

      {/* Products Grid */}
      <SectionWrapper className="bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 p-4 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
          {products.map((product, index) => (
            <ProductCard
              key={product.id}
              {...product}
              delay={index * 0.1}
            />
          ))}
        </div>
      </SectionWrapper>

      {/* Call to Action */}
      <SectionWrapper className="">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto px-4 sm:px-6"
        >

        </motion.div>
      </SectionWrapper>
    </div>
  );
};

export default Products;

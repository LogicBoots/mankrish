import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ProductCard = ({
  id,
  title,
  description,
  icon,
  color = "from-blue-500 to-blue-600",
}) => {
  return (
    <Link to={`/product/${id}`} className="block h-full">
      <motion.div
        whileHover={{
          scale: 1.03,
          y: -8,
          transition: { duration: 0.2 },
        }}
        className="group cursor-pointer h-full">
        <div className=" p-12 bg-white text-center card h-full relative overflow-hidden">
          {/* Icon */}
          <div className="flex items-center justify-center mb-2 md:mb-3">
            <div
              className={`w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br ${color} rounded-xl flex items-center justify-center shadow-lg`}>
              <span className="text-lg md:text-xl text-white">{icon}</span>
            </div>
          </div>

          {/* Content */}
          <h3 className="font-geist text-lg md:text-xl font-semibold text-gray-900 mb-2 md:mb-3 group-hover:text-primary-600 transition-colors">
            {title}
          </h3>

          <p className="font-manrope text-gray-600 text-xs md:text-sm leading-relaxed group-hover:text-gray-700 transition-colors">
            {description}
          </p>

          {/* Hover effect */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileHover={{ opacity: 1, scale: 1 }}
            className="absolute top-4 right-4 w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
            <svg
              className="w-4 h-4 text-primary-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </motion.div>

          {/* Bottom border animation */}
          <motion.div
            initial={{ width: 0 }}
            whileHover={{ width: "100%" }}
            className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-primary-500 to-primary-600 rounded-b-xl"
          />
        </div>
      </motion.div>
    </Link>
  );
};

export default ProductCard;

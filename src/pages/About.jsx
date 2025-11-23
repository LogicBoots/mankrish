import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';

const About = () => {
  const services = [
    {
      icon: '🏥',
      title: 'Healthcare Robotics',
      description: 'AI-powered medical devices and robotic systems for enhanced patient care and surgical precision.'
    },
    {
      icon: '🏠',
      title: 'Household Automation',
      description: 'Smart home solutions with robotic assistance for daily household tasks and maintenance.'
    },
    {
      icon: '🤖',
      title: 'AI Development',
      description: 'Custom AI solutions and machine learning models for various industry applications.'
    },
    {
      icon: '🔬',
      title: 'Research & Innovation',
      description: 'Cutting-edge research in robotics, AI, and their applications in healthcare and automation.'
    }
  ];

  const expertise = [
    'Artificial Intelligence & Machine Learning',
    'Robotics & Automation',
    'Healthcare Technology',
    'Computer Vision',
    'IoT & Smart Systems',
    'Product Development',
    'Patent & IP Management',
    'Clinical Trials & Validation'
  ];

  return (
    <section  id='about' className="min-h-screen pt-16 bg-[#FAF8F6] relative">
      <div className="absolute inset-0 " />
      {/* Hero Section */}
      <SectionWrapper className="relative bg-gradient-to-br backdrop-blur-sm z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="font-geist text-4xl md:text-6xl font-bold text-black  mb-6">
            About  <span className='font-thin text-5xl'>Mankrish Global</span> 
          </h1>
          <p className="font-manrope text-xl text-black">
            Pioneering the future of AI-powered robotics to transform healthcare and household automation
          </p>
        </motion.div>
      </SectionWrapper>

      {/* Company Introduction */}
      <SectionWrapper className="bg-black   border rounded-lg ">
        <div className="  " /> 
        <div className="max-w-2\3xl mx-auto relative z-10 p-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className=" max-w-none"
          >
            <h2 className="font-geist text-4xl font-bold text-luxury-gold-100 mb-6">
              Our Story
            </h2>
            <p className="  text-luxury-gold-200 mb-6 ">
              Mankrish Global was founded with a vision to bridge the gap between cutting-edge AI technology and practical,
              life-changing applications. We recognized the immense potential of combining artificial intelligence with
              robotics to solve real-world challenges in healthcare and household automation.
            </p>
            <p className=" text-luxury-gold-200 mb-6 ">
              As a dynamic startup based in India, we've assembled a team of passionate engineers, researchers, and
              healthcare professionals who share our commitment to innovation and excellence. Our journey began with
              a simple question: "How can we make AI and robotics more accessible and beneficial to everyday life?"
            </p>
            <p className=" text-luxury-gold-200 ">
              Today, we're proud to be at the forefront of this technological revolution, developing solutions that
              not only meet current needs but anticipate future challenges in healthcare delivery and home automation.
            </p>
          </motion.div>
        </div>
      </SectionWrapper>

      {/* Mission & Vision */}
      <SectionWrapper className="relative">
        <div className="absolute inset-0  opacity-50" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative p-8 rounded-3xl shadow-2xl backdrop-blur-sm  bg-luxury-obsidian-800/60 border border-luxury-gold-400 h-full text-white ">
              <div className="absolute inset-0 bg-gradient-to-br  bg-white rounded-3xl" />
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-r from-luxury-sapphire-500 to-luxury-sapphire-700 rounded-2xl flex items-center justify-center mb-6 shadow-xl shadow-luxury-sapphire-500/25">
                  <span className="text-3xl">🎯</span>
                </div>
                <h3 className="font-geist text-2xl font-bold text-black mb-4">Our Mission</h3>
                <p className="font-manrope text-black leading-relaxed">
                  To revolutionize healthcare delivery and household automation through innovative AI-powered robotics,
                  making advanced technology accessible and beneficial to everyone while improving quality of life
                  and operational efficiency.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative p-8 rounded-3xl shadow-2xl  border border-luxury-gold-400 h-full">
              <div className="absolute inset-0 bg-white  rounded-3xl" />
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-r from-luxury-amethyst-500 to-luxury-amethyst-700 rounded-2xl flex items-center justify-center mb-6 shadow-xl shadow-luxury-amethyst-500/25">
                  <span className="text-3xl">🔮</span>
                </div>
                <h3 className="font-geist text-2xl font-bold text-black mb-4">Our Vision</h3>
                <p className="font-manrope text-black leading-relaxed">
                  To be the global leader in AI-powered robotics for healthcare and household automation, creating
                  a future where intelligent machines work seamlessly with humans to enhance our capabilities and
                  improve our daily lives.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </SectionWrapper>

      {/* Services */}
      <SectionWrapper className="relative ">
        <div className=" inset-0  opacity-50" />
        <div className=" z-10">
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-geist md:text-5xl text-3xl font-thin bg-clip-text text-black mb-4"
            >
              Services
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-manrope text-lg text-black max-w-2xl mx-auto"
            >
              Comprehensive solutions across healthcare robotics and household automation
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const gradients = [
                { bg: "from-luxury-sapphire-500 to-luxury-sapphire-600", hover: "group-hover:shadow-luxury-sapphire-500/40" },
                { bg: "from-luxury-amethyst-500 to-luxury-amethyst-700", hover: "group-hover:shadow-luxury-amethyst-500/40" },
                { bg: "from-luxury-ruby-500 to-luxury-ruby-600", hover: "group-hover:shadow-luxury-ruby-500/40" },
                { bg: "from-luxury-emerald-500 to-luxury-emerald-600", hover: "group-hover:shadow-luxury-emerald-500/40" }
              ];
              const grad = gradients[index] || gradients[0];
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative group hover:shadow-2xl transition-all duration-500 transform-gpu"
                >
                  <div className="relative bg-black backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-luxury-gold-400/20 group-hover:border-luxury-gold-400/40 transition-all duration-500">
                    <div className="absolute inset-0 bg-gradient-to-br from-luxury-platinum-800/80 via-luxury-obsidian-800/80 to-luxury-sapphire-900/80 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
                    <div className="relative z-10">
                      <div className={`w-16 h-16 bg-gradient-to-r ${grad.bg} rounded-2xl flex items-center justify-center mb-6 shadow-xl ${grad.hover} transition-all duration-300 group-hover:scale-105`}>
                        <span className="text-3xl">{service.icon}</span>
                      </div>
                      <h3 className="font-geist text-xl font-semibold text-luxury-gold-100 mb-3 group-hover:text-luxury-gold-200 transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="font-manrope text-luxury-gold-200 leading-relaxed group-hover:text-luxury-gold-100 transition-colors duration-300">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </SectionWrapper>

      {/* Expertise */}
      <SectionWrapper className="relative ">
        <div className=" inset-0 rounded-3xl" />
        <div className="max-w-4xl mx-auto relative z-10 p-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-geist font-thin text-5xl text-black mb-4">
              Our Expertise
            </h2>
            <p className="font-manrope text-lg text-black max-w-2xl mx-auto">
              Deep knowledge and experience across multiple domains of technology and healthcare
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            {expertise.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="flex items-center space-x-3 p-6 backdrop-blur-sm bg-black rounded-lg shadow-xl border border-luxury-gold-400/20 hover:border-luxury-gold-400/40  transition-all duration-300"
              >
                <div className="w-3 h-3 bg-gradient-to-r from-luxury-sapphire-500 to-luxury-amethyst-500 rounded-full shadow-lg"></div>
                <span className="font-manrope text-luxury-gold-100 font-medium">{skill}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </SectionWrapper>

   
    </section>
  );
};

export default About;

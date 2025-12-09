import { motion } from 'framer-motion';
import { Send, Mail, MapPin, Phone } from 'lucide-react';
import SectionWrapper from './SectionWrapper';

const ContactPage = () => {
  return (
    <div id="contact" className="relative min-h-screen pt-20 overflow-hidden bg-gray-50">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-200 rounded-full blur-3xl mix-blend-multiply animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-200 rounded-full blur-3xl mix-blend-multiply animate-pulse delay-1000" />
      </div>

      <SectionWrapper className="relative z-10 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600 mb-4">
            Get in Touch
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Have a question or want to work together? We'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:border-purple-200 transition-colors">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-purple-100 rounded-lg text-purple-600">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-gray-900 font-medium">Email Us</h4>
                    <p className="text-gray-600">sales@mamleinternational.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-blue-100 rounded-lg text-blue-600">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-gray-900 font-medium">Call Us</h4>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-pink-100 rounded-lg text-pink-600">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-gray-900 font-medium">Visit Us</h4>
                    <p className="text-gray-600">Gk 2 Delhi, India</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <form className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 text-sm font-medium mb-2">First Name</label>
                    <input
                      type="text"
                      className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all placeholder:text-gray-400"
                      placeholder="First Name"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 text-sm font-medium mb-2">Last Name</label>
                    <input
                      type="text"
                      className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all placeholder:text-gray-400"
                      placeholder="Last Name"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 text-sm font-medium mb-2">Email Address</label>
                    <input
                      type="email"
                      className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all placeholder:text-gray-400"
                      placeholder="Email"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 text-sm font-medium mb-2">Mobile Number</label>
                    <input
                      type="tel"
                      className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all placeholder:text-gray-400"
                      placeholder="Mobile Number"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2">Message</label>
                  <textarea
                    rows={4}
                    className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all resize-none placeholder:text-gray-400"
                    placeholder="Message"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-semibold py-4 rounded-lg shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transform hover:-translate-y-0.5 transition-all flex items-center justify-center space-x-2"
                >
                  <span>Send Message</span>
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default ContactPage;

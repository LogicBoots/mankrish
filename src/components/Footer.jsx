
const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-[#0A0A0A] to-[#111111] border-t border-[#2A2A2A]">
      <div className="container-custom px-6 py-14">

        {/* Top */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-5">
              <img src="/logo2.png" className="w-10 h-10" alt="logo" />
              <span className="font-geist text-2xl font-semibold bg-gradient-to-r from-[#F4E3B2] to-[#D6C27A] bg-clip-text text-transparent">
                Mamale Intelligence.
              </span>
            </div>

            <p className="font-manrope text-[#C5B88A]/80 text-sm leading-relaxed max-w-md">
              Revolutionizing healthcare and home automation with intelligent,
              AI-powered robotic systems built for the future.
            </p>

            <div className="mt-5 flex space-x-4">
              <a className="text-[#C5B88A]/70 text-xl hover:text-[#E2D49B] transition-all">
                <i className="ri-facebook-fill" />
              </a>
              <a className="text-[#C5B88A]/70 text-xl hover:text-[#E2D49B] transition-all">
                <i className="ri-instagram-fill" />
              </a>
              <a className="text-[#C5B88A]/70 text-xl hover:text-[#E2D49B] transition-all">
                <i className="ri-linkedin-fill" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-manrope text-lg font-bold text-[#E8DCAE]">
              Quick Links
            </h3>

            <ul className="mt-5 space-y-3">
              {[
                { name: "Home", to: "/" },
                { name: "About Us", to: "#about" },
                { name: "Products", to: "#products" },
                { name: "Privacy Policy", to: "#privacy" },
              ].map((item) => (
                <li key={item.name}>
                  <a
                    href={item.to}
                    className="group text-sm font-manrope text-[#C5B88A]/80 hover:text-[#E8DCAE] transition-all flex items-center space-x-2"
                  >
                    <span className="opacity-0 group-hover:opacity-100 transition-all text-[#E8DCAE]">›</span>
                    <span>{item.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-manrope text-lg font-bold text-[#E8DCAE]">
              Contact
            </h3>

            <ul className="mt-5 space-y-3 text-sm text-[#C5B88A]/80">
              <li>
                <span className="font-semibold text-[#E8DCAE]">Email:</span>{" "}
                sales@mamleintelligence.com
              </li>
              <li>
                <span className="font-semibold text-[#E8DCAE]">Location:</span>{" "}
                GK 2, Delhi, India
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#2A2A2A] mt-12"></div>

        {/* Bottom */}
        <div className="pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="font-manrope text-[#C5B88A]/70 text-sm">
            © 2025 Mamale Intelligence — All Rights Reserved.
          </p>
          <p className="font-manrope text-[#C5B88A]/70 text-sm mt-4 md:mt-0">
            Built with ❤️ Intelligence & Precision
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

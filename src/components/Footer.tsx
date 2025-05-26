const Footer = () => {
  return (
    <footer className="bg-purple-700 text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-6 md:px-16 grid grid-cols-1 md:grid-cols-3 gap-20">
        {/* Logo / About */}
        <div>
          <h3 className="text-2xl font-bold mb-4">FX Exchange</h3>
          <p className="text-sm text-gray-200 leading-relaxed">
            Your trusted platform for fast, secure, and reliable crypto &
            giftcard exchanges — anytime, anywhere.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="lg:ml-10">
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-gray-200">
            <li>
              <a href="#home" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#about-us" className="hover:underline">
                About
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:underline">
                Contact
              </a>
            </li>
            <li>
              <a href="#rates" className="hover:underline">
                Exchange Rates
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Contact</h4>
          <p className="text-sm text-gray-200 mb-2">Lagos, Nigeria</p>
          <p className="text-sm text-gray-200 mb-4">
            WhatsApp:{" "}
            <a
              href="https://wa.me/2348012345678"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-white"
            >
              +234 801 234 5678
            </a>
          </p>
          <a
            href="https://wa.me/2348012345678"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-purple-700 px-5 py-2 rounded-md font-semibold text-sm hover:bg-gray-100 transition"
          >
            Chat on WhatsApp
          </a>
        </div>
      </div>

      <div className="mt-10 border-t border-purple-600 pt-4 text-center text-sm text-gray-300">
        &copy; {new Date().getFullYear()} FX Exchange. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

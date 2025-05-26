import { FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-16 px-6 md:px-20 bg-purple-50 text-gray-800"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-customPurple mb-6">
          Contact & Support
        </h2>
        <p className="text-gray-600 mb-10">
          Reach out to us anytime — we're always here to help.
        </p>

        <div className="flex flex-col items-center gap-6">
          {/* WhatsApp */}
          <div className="flex items-center gap-3 text-lg text-gray-700">
            <FaWhatsapp className="text-green-500 w-6 h-6" />
            <span>+234 812 345 6789</span>
          </div>

          {/* Address */}
          <div className="flex items-center gap-3 text-lg text-gray-700">
            <FaMapMarkerAlt className="text-red-500 w-6 h-6" />
            <span>Lagos, Nigeria</span>
          </div>

          {/* WhatsApp Button */}
          <a
            href="https://wa.me/2348123456789"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 bg-purple-700 cursor-pointer text-white px-6 py-3 rounded-lg text-sm font-semibold transition"
          >
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;

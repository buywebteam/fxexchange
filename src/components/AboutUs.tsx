import { FaShieldAlt, FaClock, FaStar, FaSmile } from "react-icons/fa";
const features = [
  {
    icon: <FaShieldAlt className="w-6 h-6" />,
    title: "Secure & Transparent",
    description:
      "Your transactions are protected with industry-standard security and total transparency.",
  },
  {
    icon: <FaClock className="w-6 h-6" />,
    title: "Fast Payments",
    description:
      "We process payments in minutes — no unnecessary delays, ever.",
  },
  {
    icon: <FaStar className="w-6 h-6" />,
    title: "Best Rates",
    description:
      "We offer competitive rates that ensure you get the best value on every exchange.",
  },
  {
    icon: <FaSmile className="w-6 h-6" />,
    title: "User-Friendly",
    description:
      "Our platform is designed for a seamless experience — chat and exchange in just a few steps.",
  },
];

const WhyChooseUs = () => {
  return (
    <section
      id="about-us"
      className="py-16 px-6 md:px-20 text-gray-800 scroll-mt-24"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6 text-customPurple">
          Why Choose FX Exchange
        </h2>
        <p className="text-gray-600 mb-12">
          FX Exchange is your trusted partner for secure, fast, and reliable
          crypto and gift card exchanges. We prioritize your convenience,
          offering a streamlined, chat-based experience backed by real humans —
          not bots.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-purple-50 rounded-xl shadow hover:shadow-md transition-all"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

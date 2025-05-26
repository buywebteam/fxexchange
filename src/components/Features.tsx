// components/Features.tsx
import {
  FaMoneyCheckAlt,
  FaHandshake,
  FaHeadset,
  FaShieldAlt,
  FaMobileAlt,
} from "react-icons/fa";

const Features = () => {
  const features = [
    {
      title: "Fast Payments",
      description: "Get paid instantly once your exchange is verified.",
      icon: <FaMoneyCheckAlt className="text-customPurple w-8 h-8" />,
    },
    {
      title: "Best Exchange Rates",
      description: "Enjoy competitive and fair exchange rates always.",
      icon: <FaHandshake className="text-customPurple w-8 h-8" />,
    },
    {
      title: "24/7 Support",
      description: "We’re available round-the-clock to assist you.",
      icon: <FaHeadset className="text-customPurple w-8 h-8" />,
    },
    {
      title: "Secure & Transparent",
      description: "Your transactions are protected and trustworthy.",
      icon: <FaShieldAlt className="text-customPurple w-8 h-8" />,
    },
    {
      title: "User-Friendly Interface",
      description: "Simple, modern platform for stress-free exchanges.",
      icon: <FaMobileAlt className="text-customPurple w-8 h-8" />,
    },
  ];

  return (
    <section className="py-16 px-6 md:px-20 bg-purple-50 text-gray-800">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6 text-customPurple">
          Why Choose FX Exchange?
        </h2>
        <p className="text-gray-600 mb-12">
          We offer unmatched speed, support, and security to give you the best
          trading experience.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition"
            >
              <div className="flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

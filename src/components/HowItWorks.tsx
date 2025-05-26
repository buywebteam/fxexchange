// components/HowItWorks.tsx
import { FaComments, FaCheckCircle, FaMoneyBillWave } from "react-icons/fa";

const HowItWorks = () => {
  const steps = [
    {
      icon: <FaComments className="w-8 h-8 text-customPurple" />,
      title: "Start a Chat",
      description: "Initiate a chat with our admin directly from the platform.",
    },
    {
      icon: <FaCheckCircle className="w-8 h-8 text-customPurple" />,
      title: "Verify Your Exchange",
      description:
        "Share your giftcard or crypto details and get a quick verification.",
    },
    {
      icon: <FaMoneyBillWave className="w-8 h-8 text-customPurple" />,
      title: "Get Paid Instantly",
      description:
        "Once confirmed, receive your payment instantly in your preferred method.",
    },
  ];

  return (
    <section
      id="how-it-works"
      className="pb-16 px-6 md:px-20 bg-purple-50 text-gray-800 scroll-mt-24"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6 text-customPurple">
          How It Works
        </h2>
        <p className="text-gray-600 mb-12">
          At{" "}
          <span className="font-semibold text-customPurple">FX Exchange</span>,
          exchanging crypto or giftcards is as easy as chatting with us!
        </p>

        <div className="grid md:grid-cols-3 gap-10">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all"
            >
              <div className="flex justify-center mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-sm text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

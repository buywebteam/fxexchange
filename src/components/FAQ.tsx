import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

const faqs = [
  {
    question: "How long does it take to get paid?",
    answer:
      "Payments are processed instantly once your exchange is verified. In rare cases, it may take up to 5 minutes.",
  },
  {
    question: "What cards do you accept?",
    answer:
      "We accept a wide range of giftcards including Amazon, iTunes, Steam, Google Play, Sephora, and more.",
  },
  {
    question: "Is there a minimum or maximum exchange amount?",
    answer:
      "There is no strict minimum, but larger exchanges may require additional verification. Contact our admin for details.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 px-6 md:px-20 bg-white text-gray-800">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8 text-customPurple">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg shadow-sm transition"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between px-4 py-4 text-left text-lg font-medium text-gray-700 focus:outline-none"
              >
                {faq.question}
                <FiChevronDown
                  className={`ml-2 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-4 pb-4 text-gray-600">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;

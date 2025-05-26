// components/ExchangeRates.tsx
import { useState } from "react";
import { FaExchangeAlt } from "react-icons/fa";

const ExchangeRates = () => {
  const rates: Record<string, number> = {
    USDT: 740,
    BTC: 59000000,
    ETH: 3800000,
    Amazon: 720,
    Steam: 680,
    iTunes: 690,
    GooglePlay: 670,
    Sephora: 650,
    Walmart: 660,
  };

  const [currency, setCurrency] = useState("USDT");
  const [amount, setAmount] = useState(100);
  const rate = rates[currency];
  const converted = amount * rate;

  return (
    <section
      id="rates"
      className="py-16 px-6 md:px-20 text-gray-800 scroll-mt-24"
    >
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Live Exchange Rates</h2>
        <p className="text-gray-600 mb-12">
          Check current rates and calculate your return instantly.
        </p>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Rate List */}
          <div className="space-y-4 text-left">
            {Object.entries(rates).map(([key, value]) => (
              <div
                key={key}
                className="flex justify-between bg-purple-50 p-4 rounded-lg shadow-sm"
              >
                <span className="font-semibold">{key} ➝ NGN</span>
                <span>₦{value.toLocaleString()}</span>
              </div>
            ))}
          </div>

          {/* Calculator */}
          <div className="bg-purple-50 p-6 rounded-xl shadow-lg">
            <div className="mb-4 flex items-center justify-center">
              <FaExchangeAlt className="w-6 h-6 mr-2" />
              <h3 className="text-xl font-semibold">Quick Calculator</h3>
            </div>

            <label className="block text-sm mb-2 text-left">Currency</label>
            <select
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
              className="w-full p-3 rounded-lg border border-gray-300 mb-4 outline-none focus:ring-2 focus:ring-customPurple"
            >
              {Object.keys(rates).map((key) => (
                <option key={key} value={key}>
                  {key}
                </option>
              ))}
            </select>

            <label className="block text-sm mb-2 text-left">Amount</label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
              className="w-full p-3 rounded-lg border border-gray-300 mb-4 outline-none focus:ring-2 focus:ring-customPurple"
            />

            <p className="text-lg font-bold text-customPurple">
              ₦{converted.toLocaleString()}
            </p>
            <p className="text-sm text-gray-500 mt-1">
              At ₦{rate.toLocaleString()}/{currency}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExchangeRates;

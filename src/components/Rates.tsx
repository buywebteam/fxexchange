// components/ExchangeRates.tsx
import { useState } from "react";
import { FaExchangeAlt } from "react-icons/fa";

const ExchangeRates = () => {
  const [amount, setAmount] = useState(100);
  const rate = 740; // Example: 1 USDT = 740 NGN
  const converted = amount * rate;

  return (
    <section className="py-16 px-6 md:px-20 bg-white text-gray-800">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6 text-customPurple">
          Live Exchange Rates
        </h2>
        <p className="text-gray-600 mb-12">
          Check current rates and calculate your return instantly.
        </p>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Rate List */}
          <div className="space-y-4 text-left">
            <div className="flex justify-between bg-gray-100 p-4 rounded-lg shadow-sm">
              <span className="font-semibold">USDT ➝ NGN</span>
              <span>₦740.00</span>
            </div>
            <div className="flex justify-between bg-gray-100 p-4 rounded-lg shadow-sm">
              <span className="font-semibold">BTC ➝ NGN</span>
              <span>₦59,000,000.00</span>
            </div>
            <div className="flex justify-between bg-gray-100 p-4 rounded-lg shadow-sm">
              <span className="font-semibold">ETH ➝ NGN</span>
              <span>₦3,800,000.00</span>
            </div>
            <div className="flex justify-between bg-gray-100 p-4 rounded-lg shadow-sm">
              <span className="font-semibold">Amazon $100 ➝ NGN</span>
              <span>₦72,000.00</span>
            </div>
            <div className="flex justify-between bg-gray-100 p-4 rounded-lg shadow-sm">
              <span className="font-semibold">Steam $100 ➝ NGN</span>
              <span>₦68,000.00</span>
            </div>
          </div>

          {/* Calculator */}
          <div className="bg-gray-100 p-6 rounded-xl shadow-lg">
            <div className="mb-4 flex items-center justify-center">
              <FaExchangeAlt className="text-customPurple w-6 h-6 mr-2" />
              <h3 className="text-xl font-semibold">Quick Calculator</h3>
            </div>
            <label className="block text-sm mb-2 text-left">
              Amount (USDT)
            </label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
              className="w-full p-3 rounded-lg border border-gray-300 mb-4 outline-none focus:ring-2 focus:ring-customPurple"
            />
            <p className="text-lg font-bold text-customPurple">
              ₦{converted.toLocaleString()}
            </p>
            <p className="text-sm text-gray-500 mt-1">At ₦{rate}/USDT</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExchangeRates;

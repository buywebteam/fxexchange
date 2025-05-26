// components/SupportedAssets.tsx
import {
  SiBitcoin,
  SiEthereum,
  SiTether,
  SiLitecoin,
  SiBinance,
  SiDogecoin,
  SiAmazon,
  SiApplemusic,
  SiSteam,
  SiGoogle,
  SiPlaystation,
  SiWalmart,
} from "react-icons/si";

const SupportedAssets = () => {
  const cryptocurrencies = [
    {
      name: "Bitcoin",
      icon: <SiBitcoin className="text-yellow-500 w-8 h-8" />,
    },
    {
      name: "Ethereum",
      icon: <SiEthereum className="text-indigo-600 w-8 h-8" />,
    },
    {
      name: "USDT (Tether)",
      icon: <SiTether className="text-green-500 w-8 h-8" />,
    },
    {
      name: "Litecoin",
      icon: <SiLitecoin className="text-gray-600 w-8 h-8" />,
    },
    {
      name: "Binance Coin",
      icon: <SiBinance className="text-yellow-600 w-8 h-8" />,
    },
    {
      name: "Dogecoin",
      icon: <SiDogecoin className="text-yellow-400 w-8 h-8" />,
    },
  ];

  const giftcards = [
    {
      name: "Amazon",
      icon: <SiAmazon className="text-orange-600 w-8 h-8" />,
    },
    {
      name: "iTunes / Apple",
      icon: <SiApplemusic className="text-pink-500 w-8 h-8" />,
    },
    {
      name: "Steam",
      icon: <SiSteam className="text-gray-700 w-8 h-8" />,
    },
    {
      name: "Google Play",
      icon: <SiGoogle className="text-blue-500 w-8 h-8" />,
    },
    {
      name: "PlayStation",
      icon: <SiPlaystation className="text-indigo-700 w-8 h-8" />,
    },

    {
      name: "Walmart",
      icon: <SiWalmart className="text-blue-600 w-8 h-8" />,
    },
  ];

  return (
    <section className="py-16 px-6 md:px-20 bg-white text-gray-800">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6 text-customPurple">
          Supported Currencies & Giftcards
        </h2>
        <p className="text-gray-600 mb-12">
          FX Exchange supports major cryptocurrencies and the most popular
          giftcards for seamless trading.
        </p>

        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-6">Cryptocurrencies</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 place-items-center">
            {cryptocurrencies.map((currency, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-2 bg-gray-50 p-4 rounded-xl shadow-sm hover:shadow-md transition"
              >
                {currency.icon}
                <span className="text-sm font-medium">{currency.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-6">Giftcards</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 place-items-center">
            {giftcards.map((card, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-2 bg-gray-50 p-4 rounded-xl shadow-sm hover:shadow-md transition"
              >
                {card.icon}
                <span className="text-sm font-medium">{card.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportedAssets;

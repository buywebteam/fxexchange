const Hero = () => {
  return (
    <section className="bg-purple-50 min-h-[450px] py-50 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto px-4 flex flex-col-reverse  md:flex-col- lg:flex-row items-center justify-around gap-6">
        {/* Text Section */}
        <div className="">
          <h1 className="text-3xl lg:text-left text-left font-extrabold text-gray-900 leading-tight">
            Fast & Secure <span className="text-purple-700">Crypto</span> &{" "}
            <span className="text-purple-700">Giftcard</span> Exchange
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Exchange your cryptocurrencies and giftcards with the best rates in
            minutes — anytime, anywhere.
          </p>
          <div className="mt-6 flex justify-center md:justify-start gap-4">
            <a
              href="#get-started"
              className="bg-purple-700 text-white px-6 py-3 rounded-lg text-sm font-semibold hover:bg-purple-800 transition"
            >
              Get Started
            </a>
            <a
              href="#how-it-works"
              className="border border-purple-700 text-purple-700 px-6 py-3 rounded-lg text-sm font-semibold hover:bg-purple-50 transition"
            >
              How It Works
            </a>
          </div>
        </div>

        {/* Image or Illustration Section */}
        <div className="lg:pb-0 pb-4">
          <img
            src="/hero.svg"
            alt="FX Exchange Hero"
            className="w-full max-w-md mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;

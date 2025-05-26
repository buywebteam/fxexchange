const Hero = () => {
  return (
    <section className="bg-purple-50 min-h-[450px] py-50 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse lg:flex-row items-center justify-between gap-10">
        {/* Text Section */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Fast & Secure <span className="text-purple-700">Crypto</span> &{" "}
            <span className="text-purple-700">Giftcard</span> Exchange
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Exchange your cryptocurrencies and giftcards with the best rates in
            minutes — anytime, anywhere.
          </p>
          <div className="mt-6 flex justify-center lg:justify-start gap-4">
            <a
              href="https://wa.me/2348123456789"
              target="_blank"
              rel="noopener noreferrer"
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

        {/* Image Section */}
        <div className="w-full lg:w-1/2">
          <img
            src="/hero.svg"
            alt="FX Exchange Hero"
            className="w-full h-auto max-w-[600px] mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;

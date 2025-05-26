import { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { IoCloseOutline } from "react-icons/io5";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");

  const navigation = [
    { name: "Home", href: "#home" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "Rates", href: "#rates" },
    { name: "Contact", href: "#contact" },
  ];

  const handleClick = (href: string): void => {
    setActiveLink(href);
    setIsOpen(false);
  };

  return (
    <header className="bg-white shadow-md fixed top-0 w-full z-50 font-poppins">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="text-2xl font-bold text-purple-700">
            <a href="#home">FX Exchange</a>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-6 items-center">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => handleClick(item.href)}
                className={`transition ${
                  activeLink === item.href
                    ? "text-purple-700 font-semibold"
                    : "text-gray-700 hover:text-purple-700"
                }`}
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700"
            aria-label="Toggle menu"
          >
            {isOpen ? <IoCloseOutline size={24} /> : <CiMenuBurger size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white">
          <div className="flex flex-col p-4 space-y-3">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => handleClick(item.href)}
                className={`transition ${
                  activeLink === item.href
                    ? "text-purple-700 font-semibold"
                    : "text-gray-700 hover:text-purple-700"
                }`}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;

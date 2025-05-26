import { IoChatboxOutline } from "react-icons/io5";

const StickyWhatsappIcon = () => {
  return (
    <a
      href="https://wa.me/1234567890" // Replace with your WhatsApp number
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 bg-purple-500 text-white p-3 rounded-full shadow-lg hover:bg-purple-700 transition duration-300 ease-in-out"
    >
      <IoChatboxOutline size={32} />
    </a>
  );
};

export default StickyWhatsappIcon;

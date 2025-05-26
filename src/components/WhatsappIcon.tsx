import { IoChatboxOutline } from "react-icons/io5";

const StickyWhatsappIcon = () => {
  return (
    <a
      href="https://wa.me/1234567890" // Replace with your WhatsApp number
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 bg-white text-purple-700 p-4 rounded-full shadow-lg"
    >
      <IoChatboxOutline size={40} />
    </a>
  );
};

export default StickyWhatsappIcon;

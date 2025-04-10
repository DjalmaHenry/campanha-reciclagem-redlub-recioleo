
import { WhatsApp } from "lucide-react";
import { useState } from "react";

const WhatsAppButton = () => {
  const [isHovered, setIsHovered] = useState(false);
  
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/+5500000000000", "_blank");
  };

  return (
    <div 
      className="fixed bottom-6 right-6 z-50"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered && (
        <div className="absolute bottom-16 right-0 bg-white p-2 rounded-lg shadow-lg text-sm font-medium text-gray-700 mb-2 whitespace-nowrap animate-fade-in">
          Fale conosco pelo WhatsApp
        </div>
      )}
      <button 
        onClick={handleWhatsAppClick}
        className="bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transition-all duration-300 hover:scale-110"
        aria-label="Contato via WhatsApp"
      >
        <WhatsApp className="h-6 w-6" />
      </button>
    </div>
  );
};

export default WhatsAppButton;


import { ArrowDown } from "lucide-react";

const Hero = () => {
  const scrollToSection = () => {
    const residencialSection = document.getElementById('residencial');
    if (residencialSection) {
      residencialSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative overflow-hidden bg-eco-yellow-light min-h-screen flex items-center">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-eco-yellow-light to-eco-yellow opacity-80"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3">
          <div className="absolute bottom-0 left-0 w-full h-full bg-eco-green-light opacity-30 rounded-tr-full"></div>
        </div>
        <div className="absolute top-0 right-0 w-1/3 h-1/3">
          <div className="absolute top-0 right-0 w-full h-full bg-eco-orange opacity-20 rounded-bl-full"></div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-eco-green-dark mb-6 leading-tight">
              <span className="block text-eco-orange mb-2">Campanha de</span>
              Reciclagem de Óleo de Cozinha
            </h1>
            <p className="text-lg sm:text-xl text-gray-700 mb-8">
              Transforme um <span className="text-eco-red-light font-semibold">problema ambiental</span> em uma <span className="text-eco-green font-semibold">solução sustentável</span> com a RedLub Recioleo.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={scrollToSection}
                className="eco-btn flex items-center justify-center gap-2 text-lg"
              >
                Saiba Mais
                <ArrowDown size={20} />
              </button>
              <a 
                href="#empresarial" 
                className="eco-btn-secondary flex items-center justify-center"
              >
                Para Empresas
              </a>
            </div>
          </div>
          
          <div className="mx-auto max-w-md lg:max-w-full">
            <div className="relative rounded-xl overflow-hidden shadow-2xl">
              <img 
                src="/lovable-uploads/067095bb-ef25-4149-96d0-61402f474d3c.png" 
                alt="Campanha de Reciclagem de Óleo" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="text-eco-green-dark" size={32} />
      </div>
    </div>
  );
};

export default Hero;

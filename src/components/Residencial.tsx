
import { Droplets, Pipette, Heart, Recycle, Trash2 } from "lucide-react";

const Residencial = () => {
  const beneficios = [
    {
      icon: <Pipette className="text-eco-red h-12 w-12 mb-3" />,
      title: "Reduz o Risco de Câncer",
      description: "O óleo reaquecido libera substâncias cancerígenas. Ao reciclá-lo corretamente, você protege sua saúde e a de sua família."
    },
    {
      icon: <Trash2 className="text-eco-orange h-12 w-12 mb-3" />,
      title: "Evita Danos nas Tubulações",
      description: "Quando descartado na pia, o óleo endurece e entope os canos, causando prejuízos e manutenções caras."
    },
    {
      icon: <Droplets className="text-eco-green h-12 w-12 mb-3" />,
      title: "Previne a Poluição dos Rios",
      description: "Um litro de óleo pode contaminar até 25 mil litros de água, prejudicando a vida aquática e os ecossistemas."
    }
  ];

  const abrirWhatsApp = () => {
    window.open("https://wa.me/55seunumeroaqui?text=Olá!%20Quero%20solicitar%20a%20coleta%20de%20óleo%20de%20cozinha%20usado.", "_blank");
  };

  return (
    <section id="residencial" className="py-16 lg:py-24 bg-white">
      <div className="section-container">
        <h2 className="section-title">
          Campanha <span className="text-eco-orange">Residencial</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {beneficios.map((beneficio, index) => (
            <div key={index} className="benefit-card">
              <div className="mb-2">{beneficio.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-eco-green-dark">{beneficio.title}</h3>
              <p className="text-gray-600 text-center">{beneficio.description}</p>
            </div>
          ))}
        </div>
        
        <div className="bg-eco-yellow-light rounded-2xl p-8 lg:p-12 shadow-lg">
          <h3 className="text-2xl lg:text-3xl font-bold text-center mb-8 text-eco-green-dark">
            Como reciclar é <span className="text-eco-orange">fácil</span>!
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
            <div className="bg-white rounded-xl p-6 shadow-md text-center">
              <div className="bg-eco-green-light inline-flex items-center justify-center h-16 w-16 rounded-full mb-4">
                <Heart className="text-white h-8 w-8" />
              </div>
              <h4 className="text-xl font-semibold mb-2 text-eco-green-dark">Coleta</h4>
              <p className="text-gray-600">Junte o óleo usado em garrafas PET limpas e secas.</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-md text-center">
              <div className="bg-eco-orange inline-flex items-center justify-center h-16 w-16 rounded-full mb-4">
                <Recycle className="text-white h-8 w-8" />
              </div>
              <h4 className="text-xl font-semibold mb-2 text-eco-green-dark">Solicite</h4>
              <p className="text-gray-600">Entre em contato via WhatsApp para agendar a coleta.</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-md text-center">
              <div className="bg-eco-red-light inline-flex items-center justify-center h-16 w-16 rounded-full mb-4">
                <Droplets className="text-white h-8 w-8" />
              </div>
              <h4 className="text-xl font-semibold mb-2 text-eco-green-dark">Transforme</h4>
              <p className="text-gray-600">Seu óleo usado será transformado em produtos sustentáveis.</p>
            </div>
          </div>
          
          <div className="text-center">
            <button 
              onClick={abrirWhatsApp} 
              className="eco-btn text-lg flex items-center justify-center mx-auto"
            >
              <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004c-1.52 0-3.001-.414-4.281-1.193l-.31-.183-3.162.827.842-3.084-.2-.314c-.849-1.338-1.291-2.886-1.29-4.473.004-4.628 3.761-8.394 8.39-8.394 2.245.002 4.346.879 5.925 2.468 1.58 1.584 2.45 3.692 2.446 5.932-.002 4.628-3.76 8.39-8.356 8.39m7.127-15.514C17.328 4.35 14.683 3.076 11.763 3.08 5.833 3.08 1.022 7.893 1.026 13.822c.002 1.706.442 3.372 1.276 4.844L1 23.646l5.106-1.342c1.42.78 3.014 1.194 4.644 1.194h.004c5.937 0 10.742-4.82 10.743-10.75.001-2.871-1.114-5.57-3.141-7.597" />
              </svg>
              Solicitar Coleta
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Residencial;

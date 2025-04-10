
import { FileCheck, DollarSign, Heart, Award, Leaf } from "lucide-react";

const Empresarial = () => {
  const abrirWhatsApp = () => {
    window.open("https://wa.me/55seunumeroaqui?text=Olá!%20Sou%20uma%20empresa%20interessada%20na%20coleta%20de%20óleo%20de%20cozinha%20usado.", "_blank");
  };

  return (
    <section id="empresarial" className="py-16 lg:py-24 bg-eco-green-light bg-opacity-10">
      <div className="section-container">
        <h2 className="section-title">
          Campanha <span className="text-eco-orange">Empresarial</span>
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-eco-green-dark">
              Cumpra as exigências da Vigilância Sanitária e ainda <span className="text-eco-orange">lucre</span> com isso!
            </h3>
            
            <p className="text-lg text-gray-700 mb-4">
              A Vigilância Sanitária <span className="font-semibold">exige</span> o descarte correto do óleo de cozinha usado. 
              Nós oferecemos uma solução completa que não apenas atende às regulamentações, 
              mas também pode ser vantajosa para o seu negócio.
            </p>
            
            <p className="text-lg text-gray-700">
              Além de contribuir com o meio ambiente, evitando todos os problemas causados pelo descarte incorreto, 
              sua empresa ainda ganha reconhecimento pelo compromisso com a sustentabilidade.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-lg flex flex-col items-center text-center">
              <div className="bg-eco-green inline-flex items-center justify-center h-16 w-16 rounded-full mb-4">
                <DollarSign className="text-white h-8 w-8" />
              </div>
              <h4 className="text-xl font-semibold mb-2 text-eco-green-dark">Remuneração</h4>
              <p className="text-gray-600">A partir de 50 litros, receba um valor proporcional ao volume de óleo destinado corretamente.</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg flex flex-col items-center text-center">
              <div className="bg-eco-red-light inline-flex items-center justify-center h-16 w-16 rounded-full mb-4">
                <Heart className="text-white h-8 w-8" />
              </div>
              <h4 className="text-xl font-semibold mb-2 text-eco-green-dark">Doação</h4>
              <p className="text-gray-600">Opção de doar o valor para o Hospital de Câncer de Pernambuco como ação social.</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg flex flex-col items-center text-center">
              <div className="bg-eco-orange inline-flex items-center justify-center h-16 w-16 rounded-full mb-4">
                <FileCheck className="text-white h-8 w-8" />
              </div>
              <h4 className="text-xl font-semibold mb-2 text-eco-green-dark">Certificado</h4>
              <p className="text-gray-600">Receba um certificado oficial para apresentar à Vigilância Sanitária e aos seus clientes.</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg flex flex-col items-center text-center">
              <div className="bg-eco-green-dark inline-flex items-center justify-center h-16 w-16 rounded-full mb-4">
                <Award className="text-white h-8 w-8" />
              </div>
              <h4 className="text-xl font-semibold mb-2 text-eco-green-dark">Reconhecimento</h4>
              <p className="text-gray-600">Destaque-se como uma empresa comprometida com práticas sustentáveis.</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg">
          <div className="flex flex-col lg:flex-row items-center gap-8 mb-8">
            <div className="flex-1">
              <h3 className="text-2xl lg:text-3xl font-bold mb-6 text-eco-green-dark">
                Benefícios para o <span className="text-eco-orange">ambiente</span> e para o seu <span className="text-eco-orange">negócio</span>
              </h3>
              
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Leaf className="text-eco-green h-6 w-6 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Evita o entupimento das tubulações, economizando com manutenção.</span>
                </li>
                <li className="flex items-start">
                  <Leaf className="text-eco-green h-6 w-6 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Previne a poluição da água, preservando rios e ecossistemas aquáticos.</span>
                </li>
                <li className="flex items-start">
                  <Leaf className="text-eco-green h-6 w-6 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Reduz riscos à saúde, pois o óleo reutilizado pode liberar substâncias cancerígenas.</span>
                </li>
                <li className="flex items-start">
                  <Leaf className="text-eco-green h-6 w-6 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Regulariza seu negócio perante as exigências da Vigilância Sanitária.</span>
                </li>
              </ul>
            </div>
            
            <div className="lg:w-1/2 relative">
              <div className="aspect-video bg-gray-200 rounded-xl overflow-hidden">
                <div className="w-full h-full flex items-center justify-center bg-eco-green-light bg-opacity-30">
                  <div className="text-center p-6">
                    <h4 className="text-xl font-semibold mb-3 text-eco-green-dark">Vídeo Demonstrativo</h4>
                    <p className="text-gray-700 mb-4">Assista nosso vídeo sobre o processo de reciclagem</p>
                    <p className="text-sm text-gray-500">[Espaço para inserir vídeo do YouTube]</p>
                  </div>
                </div>
              </div>
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
              Fale com um Consultor
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Empresarial;

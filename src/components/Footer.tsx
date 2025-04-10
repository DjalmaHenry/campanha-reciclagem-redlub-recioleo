
import { Mail, Phone, MapPin, Instagram, Facebook, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-eco-green-dark text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <h3 className="text-xl font-bold mb-4 text-eco-yellow">RedLub Recioleo</h3>
            <p className="mb-4 text-gray-300">
              Transformando óleo de cozinha usado em soluções sustentáveis para um futuro mais verde.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-eco-yellow transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-eco-yellow transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-eco-yellow transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 text-eco-yellow">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Phone className="h-5 w-5 mr-3 mt-1 text-eco-yellow" />
                <span>(00) 00000-0000</span>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 mr-3 mt-1 text-eco-yellow" />
                <span>contato@recioleo.com.br</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 mt-1 text-eco-yellow" />
                <span>Recife, Pernambuco - Brasil</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 text-eco-yellow">Links Rápidos</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-eco-yellow transition-colors">Sobre Nós</a></li>
              <li><a href="#residencial" className="hover:text-eco-yellow transition-colors">Campanha Residencial</a></li>
              <li><a href="#empresarial" className="hover:text-eco-yellow transition-colors">Campanha Empresarial</a></li>
              <li><a href="#" className="hover:text-eco-yellow transition-colors">Parceiros</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 text-eco-yellow">Certificações</h3>
            <p className="text-gray-300 mb-4">
              Empresa certificada pelos órgãos competentes para coleta e tratamento de resíduos especiais.
            </p>
            <div className="bg-white bg-opacity-10 p-3 rounded-lg inline-block">
              <div className="flex items-center justify-center">
                <span className="text-eco-yellow font-bold">ECO</span>
                <span className="text-white font-bold">FRIENDLY</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} RedLub Recioleo. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

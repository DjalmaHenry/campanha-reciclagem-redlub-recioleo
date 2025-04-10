
import Hero from "@/components/Hero";
import Residencial from "@/components/Residencial";
import Empresarial from "@/components/Empresarial";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-eco-yellow-light">
      <Hero />
      <Residencial />
      <Empresarial />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;

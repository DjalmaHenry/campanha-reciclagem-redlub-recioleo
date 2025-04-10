
import Hero from "@/components/Hero";
import Residencial from "@/components/Residencial";
import Empresarial from "@/components/Empresarial";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-eco-yellow-light">
      <Hero />
      <Residencial />
      <Empresarial />
      <Footer />
    </div>
  );
};

export default Index;

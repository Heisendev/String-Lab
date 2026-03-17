import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StringTypes from "@/components/StringTypes";
import GaugeGuide from "@/components/GaugeGuide";
import TensionSlider from "@/components/TensionSlider";
import InjuryPrevention from "@/components/InjuryPrevention";
import StringQuiz from "@/components/StringQuiz";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <StringTypes />
      <GaugeGuide />
      <TensionSlider />
      <InjuryPrevention />
      <StringQuiz />
      <Footer />
    </div>
  );
};

export default Index;

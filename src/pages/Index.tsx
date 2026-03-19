import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StringTypes from "@/components/StringTypes";
import GaugeGuide from "@/components/GaugeGuide";
import TensionSlider from "@/components/TensionSlider";
import InjuryPrevention from "@/components/InjuryPrevention";
import StringQuiz from "@/components/StringQuiz";
import Footer from "@/components/Footer";
import KidsSection from "@/components/KidsSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <StringTypes />
      <GaugeGuide />
      <KidsSection />
      <TensionSlider />
      <InjuryPrevention />
      <StringQuiz />
      <Footer />
    </div>
  );
};

export default Index;

import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { RoomsShowcase } from "@/components/RoomsShowcase";
import { Features } from "@/components/Features";
import { Footer } from "@/components/Footer";
import { ChatBot } from "@/components/ChatBot";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <RoomsShowcase />
      <Features />
      <Footer />
      <ChatBot />
    </div>
  );
};

export default Index;

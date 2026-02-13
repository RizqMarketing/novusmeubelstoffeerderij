import heroImage from "@/assets/hero-upholstery.jpg";
import OfferteDialog from "./OfferteDialog";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroImage} alt="Vakmanschap" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-navy/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <p
          className="font-body text-sm md:text-base tracking-[0.3em] uppercase text-gold-light mb-6 opacity-0 animate-fade-in-up"
          style={{ animationDelay: "0.2s" }}
        >
          Vakmanschap &bull; Kwaliteit &bull; Passie
        </p>
        <h1
          className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-cream leading-tight mb-6 opacity-0 animate-fade-in-up"
          style={{ animationDelay: "0.5s" }}
        >
          Geef Uw Meubels Een
          <span className="block text-gradient-gold mt-2">Tweede Leven</span>
        </h1>
        <p
          className="font-body text-base md:text-lg text-cream/80 max-w-2xl mx-auto mb-10 opacity-0 animate-fade-in-up"
          style={{ animationDelay: "0.8s" }}
        >
          Novus Meubelstoffeerderij transformeert uw geliefde meubels met
          premium stoffen en ambachtelijk vakmanschap. Van klassiek tot modern.
        </p>
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-in-up"
          style={{ animationDelay: "1.1s" }}
        >
          <OfferteDialog>
            <button className="font-body text-sm tracking-wider uppercase px-8 py-4 bg-gold text-navy font-semibold hover:bg-gold-light transition-all duration-300">
              Vraag Een Offerte Aan
            </button>
          </OfferteDialog>
          <a
            href="#diensten"
            className="font-body text-sm tracking-wider uppercase px-8 py-4 border border-cream/40 text-cream hover:border-gold hover:text-gold transition-all duration-300"
          >
            Bekijk Ons Werk
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in" style={{ animationDelay: "1.5s" }}>
        <div className="w-6 h-10 border-2 border-gold/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gold rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

import beforeAfterImage from "@/assets/before-after.jpg";

const BeforeAfterSection = () => {
  return (
    <section className="py-24 md:py-32 bg-navy">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div>
            <p className="font-body text-sm tracking-[0.3em] uppercase text-gold-light mb-4">
              Ons Resultaat
            </p>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-cream mb-6">
              Van Versleten Naar{" "}
              <span className="text-gradient-gold">Prachtig</span>
            </h2>
            <p className="font-body text-cream/70 leading-relaxed mb-8">
              Elk meubel vertelt een verhaal. Wij zorgen ervoor dat dat verhaal
              prachtig verder gaat. Met jarenlange ervaring en een scherp oog
              voor detail transformeren wij uw versleten meubels tot
              pronkstukken.
            </p>
            <ul className="space-y-4 mb-8">
              {[
                "Gratis inspectie en advies aan huis",
                "Ruime keuze uit honderden stoffen",
                "Gegarandeerde kwaliteit en afwerking",
                "Ophaal- en bezorgservice",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-gold rounded-full flex-shrink-0" />
                  <span className="font-body text-cream/80">{item}</span>
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              className="inline-block font-body text-sm tracking-wider uppercase px-8 py-4 bg-gold text-navy font-semibold hover:bg-gold-light transition-all duration-300"
            >
              Plan Een Afspraak
            </a>
          </div>
          <div className="overflow-hidden shadow-2xl">
            <img
              src={beforeAfterImage}
              alt="Voor en na herstoffering"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterSection;

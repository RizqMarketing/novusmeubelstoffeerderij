import { Award, Clock, Heart, Truck, Sparkles, Shield, Scissors, Palette } from "lucide-react";

const features = [
  {
    icon: Scissors,
    title: "Ambachtelijk Vakmanschap",
    description: "Elke naad, elke vouw — met de hand afgewerkt door ervaren stoffeerders die hun vak verstaan.",
    highlights: ["Handmatige afwerking", "Traditionele technieken", "Oog voor detail"],
  },
  {
    icon: Heart,
    title: "Gedreven Door Passie",
    description: "Elk meubel behandelen we alsof het ons eigen is. Dat ziet u terug in het eindresultaat.",
    highlights: ["Persoonlijke aanpak", "Met liefde gemaakt", "Klant staat centraal"],
  },
  {
    icon: Palette,
    title: "Eindeloze Stofkeuze",
    description: "Van velvet tot linnen, van leer tot jacquard. Wij helpen u de perfecte stof te kiezen.",
    highlights: ["Premium materialen", "Kleuradvies op maat", "Stalen aan huis"],
  },
  {
    icon: Truck,
    title: "Gratis Ophaal & Bezorg",
    description: "Wij halen uw meubels gratis op en bezorgen ze vakkundig na afloop weer bij u thuis.",
    highlights: ["Geen transportkosten", "Zorgvuldig vervoer", "Flexibele planning"],
  },
];

const WhyUsSection = () => {
  return (
    <section id="over-ons" className="py-24 md:py-32 bg-cream">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="font-body text-sm tracking-[0.3em] uppercase text-gold-dark mb-4">
            Waarom Novus
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-navy mb-6">
            Waarom Klanten Voor Ons Kiezen
          </h2>
          <div className="w-20 h-0.5 bg-gold mx-auto mb-6" />
          <p className="font-body text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Bij Novus combineren wij traditioneel ambacht met moderne technieken.
            Het resultaat? Meubels die er niet alleen prachtig uitzien, maar ook jarenlang meegaan.
          </p>
        </div>

        {/* Feature cards — 2x2 grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto mb-24">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="relative bg-card border border-border hover:border-gold/40 shadow-sm hover:shadow-2xl transition-all duration-500 group overflow-hidden"
            >
              {/* Gold accent line */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              {/* Decorative corner glow */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-gold/[0.04] rounded-full group-hover:bg-gold/[0.08] transition-colors duration-700" />

              <div className="relative p-8 md:p-10 flex flex-col h-full">
                {/* Icon + Title row */}
                <div className="flex items-start gap-5 mb-5">
                  <div className="w-14 h-14 bg-navy rounded-xl flex items-center justify-center flex-shrink-0 group-hover:shadow-[0_0_25px_rgba(201,168,76,0.15)] transition-all duration-500">
                    <feature.icon className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-semibold text-navy mb-1">
                      {feature.title}
                    </h3>
                    <p className="font-body text-muted-foreground text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>

                {/* Highlight chips */}
                <div className="flex flex-wrap gap-2 mt-auto pt-5 border-t border-border/60">
                  {feature.highlights.map((h) => (
                    <span
                      key={h}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-navy/[0.04] border border-gold/15 font-body text-xs tracking-wide text-navy/70 group-hover:border-gold/30 group-hover:bg-gold/[0.06] transition-all duration-300"
                    >
                      <span className="w-1 h-1 rounded-full bg-gold flex-shrink-0" />
                      {h}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Process timeline */}
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 mb-4">
              <Sparkles className="w-4 h-4 text-gold" />
              <p className="font-body text-sm tracking-[0.3em] uppercase text-gold-dark">
                Ons Proces
              </p>
              <Sparkles className="w-4 h-4 text-gold" />
            </div>
            <h3 className="font-display text-2xl md:text-4xl font-bold text-navy">
              In 4 Stappen Naar Een Nieuw Meubel
            </h3>
          </div>

          <div className="grid md:grid-cols-4 gap-0">
            {[
              { step: "01", title: "Inspectie", description: "Gratis inspectie bij u thuis of in onze werkplaats" },
              { step: "02", title: "Stofkeuze", description: "Kies uit honderden premium stoffen en kleuren" },
              { step: "03", title: "Vakwerk", description: "Uw meubel wordt met zorg en precisie herstoffeerd" },
              { step: "04", title: "Oplevering", description: "Wij bezorgen uw vernieuwde meubel bij u thuis" },
            ].map((item, index) => (
              <div key={item.step} className="relative text-center px-6 py-8 group">
                {index < 3 && (
                  <div className="hidden md:block absolute top-14 left-[60%] w-[80%] h-px bg-gold/30" />
                )}
                <div className="relative z-10 w-14 h-14 mx-auto mb-5 bg-navy rounded-full flex items-center justify-center border-2 border-gold/30 group-hover:border-gold group-hover:shadow-[0_0_20px_rgba(201,168,76,0.2)] transition-all duration-500">
                  <span className="font-display text-sm font-bold text-gold">{item.step}</span>
                </div>
                <h4 className="font-display text-lg font-semibold text-navy mb-2">{item.title}</h4>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;

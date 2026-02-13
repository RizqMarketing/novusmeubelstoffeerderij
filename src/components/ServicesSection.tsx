import serviceSofa from "@/assets/service-sofa.jpg";
import serviceChairs from "@/assets/service-chairs.jpg";
import serviceArmchair from "@/assets/service-armchair.jpg";

const services = [
  {
    image: serviceSofa,
    title: "Banken & Sofa's",
    description:
      "Complete herstoffering van uw bank met een ruime keuze aan premium stoffen. Van velvet tot linnen.",
  },
  {
    image: serviceChairs,
    title: "Eetkamerstoelen",
    description:
      "Uw eetkamerstoelen verdienen het beste. Wij zorgen voor een perfecte afwerking die jaren meegaat.",
  },
  {
    image: serviceArmchair,
    title: "Fauteuils & Klassiekers",
    description:
      "Antieke en klassieke meubels herstellen we met oog voor authentiek detail en respect voor het origineel.",
  },
];

const ServicesSection = () => {
  return (
    <section id="diensten" className="py-24 md:py-32 bg-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="font-body text-sm tracking-[0.3em] uppercase text-gold-dark mb-4">
            Wat Wij Doen
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-navy mb-6">
            Onze Diensten
          </h2>
          <div className="w-20 h-0.5 bg-gold mx-auto" />
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service) => (
            <div
              key={service.title}
              className="group bg-card overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              <div className="overflow-hidden h-72">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="p-8">
                <h3 className="font-display text-xl font-semibold text-navy mb-3">
                  {service.title}
                </h3>
                <p className="font-body text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

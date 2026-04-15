import serviceSofa from "@/assets/service-sofa.jpg";
import serviceChairs from "@/assets/service-chairs.jpg";
import serviceArmchair from "@/assets/service-armchair.jpg";
import serviceCamper from "@/assets/service-camper.jpg";
import serviceCaravan from "@/assets/service-caravan.jpg";
import serviceBoten from "@/assets/service-boten.jpg";
import serviceBootkussens from "@/assets/service-bootkussens.jpg";

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
  {
    image: serviceBoten,
    title: "Boten",
    description:
      "Volledige herstoffering van boot-interieurs met waterbestendige, UV-vaste en duurzame stoffen.",
  },
  {
    image: serviceBootkussens,
    title: "Bootkussens",
    description:
      "Nieuwe bootkussens op maat, gemaakt met schimmelwerende vulling en weerbestendige bekleding.",
  },
  {
    image: serviceCamper,
    title: "Campers",
    description:
      "Camperbanken, zittingen en interieur opnieuw bekleed voor comfort en stijl tijdens elke reis.",
  },
  {
    image: serviceCaravan,
    title: "Caravans",
    description:
      "Geef uw caravan-interieur een tweede leven met slijtvaste stoffen die er jaren fris uitzien.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
    title: "Horeca meubels",
    description:
      "Robuuste herstoffering van stoelen, banken en booths voor restaurants, cafés en hotels.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=80",
    title: "Kussens op maat",
    description:
      "Sier- en zitkussens op maat gemaakt, in elk formaat, stof en vulling naar uw wens.",
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
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

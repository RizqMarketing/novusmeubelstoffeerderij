import { Phone, Mail, MapPin, Send, ArrowRight } from "lucide-react";
import { useState } from "react";
import { submitLead } from "@/lib/odoo";
import { toast } from "sonner";

const contactDetails = [
  {
    icon: Phone,
    title: "Bel Ons",
    detail: "+31 345 22 87 20",
    href: "tel:+31345228720",
    sub: "Ma - Vr: 08:00 - 18:00",
  },
  {
    icon: Mail,
    title: "E-mail",
    detail: "info@novusmeubelstoffeerderij.nl",
    href: "mailto:info@novusmeubelstoffeerderij.nl",
    sub: "Reactie binnen 24 uur",
  },
  {
    icon: MapPin,
    title: "Locatie",
    detail: "Anthonie van Diemenstraat 8a, 4104 AE Culemborg",
    href: "https://maps.google.com/?q=Anthonie+van+Diemenstraat+8a,+4104+AE+Culemborg",
    sub: "Wij komen ook bij u langs",
  },
];

const ContactSection = () => {
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    naam: '',
    telefoon: '',
    email: '',
    typeMeubel: '',
    bericht: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await submitLead(form);
      toast.success("Aanvraag verstuurd!", {
        description: "Wij nemen binnen 24 uur contact met u op.",
      });
      setForm({ naam: '', telefoon: '', email: '', typeMeubel: '', bericht: '' });
      setFocusedField(null);
    } catch {
      toast.error("Er ging iets mis. Probeer het opnieuw of bel ons.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-navy relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/[0.03] rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-gold/[0.02] rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <p className="font-body text-sm tracking-[0.3em] uppercase text-gold-light mb-4">
              Neem Contact Op
            </p>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-cream mb-6">
              Klaar Om Uw Meubels Te{" "}
              <span className="text-gradient-gold">Transformeren?</span>
            </h2>
            <p className="font-body text-cream/70 max-w-xl mx-auto">
              Vraag vandaag nog een gratis en vrijblijvende offerte aan. Wij
              komen graag bij u langs voor een inspectie en advies.
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-10">
            {/* Left: Contact info cards */}
            <div className="lg:col-span-2 space-y-5">
              {contactDetails.map((item) => (
                <div
                  key={item.title}
                  className="flex items-start gap-5 p-6 bg-navy-light/60 border border-gold/10 hover:border-gold/30 transition-all duration-300 group"
                >
                  <div className="w-14 h-14 bg-gold/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-gold/20 transition-colors duration-300">
                    <item.icon className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h4 className="font-display text-lg text-cream mb-1">{item.title}</h4>
                    {item.href ? (
                      <a href={item.href} className="font-body text-cream/80 text-sm mb-1 hover:text-gold transition-colors duration-200 block">{item.detail}</a>
                    ) : (
                      <p className="font-body text-cream/80 text-sm mb-1">{item.detail}</p>
                    )}
                    <p className="font-body text-cream/40 text-xs">{item.sub}</p>
                  </div>
                </div>
              ))}

              {/* Trust badge */}
              <div className="p-6 bg-gold/5 border border-gold/20 text-center">
                <div className="flex items-center justify-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-gold fill-gold" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                <p className="font-body text-sm text-cream/70">
                  Beoordeeld met een <span className="text-gold font-semibold">4.9/5</span> door onze klanten
                </p>
              </div>
            </div>

            {/* Right: Form */}
            <div className="lg:col-span-3">
              <div className="bg-navy-light/40 border border-gold/15 p-8 md:p-10">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 bg-gold/10 rounded-lg flex items-center justify-center">
                    <Send className="w-4 h-4 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl text-cream">Offerte Aanvragen</h3>
                    <p className="font-body text-xs text-cream/40">Alle velden zijn optioneel</p>
                  </div>
                </div>

                <form className="space-y-5" onSubmit={handleSubmit}>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="relative">
                      <label className={`absolute left-5 transition-all duration-300 font-body text-xs tracking-wider uppercase pointer-events-none ${focusedField === 'naam' ? 'top-2 text-gold' : 'top-2 text-cream/30'}`}>
                        Naam
                      </label>
                      <input
                        type="text"
                        value={form.naam}
                        onChange={(e) => setForm({ ...form, naam: e.target.value })}
                        onFocus={() => setFocusedField('naam')}
                        onBlur={(e) => !e.target.value && setFocusedField(null)}
                        className="w-full bg-navy/60 border border-gold/15 text-cream px-5 pt-7 pb-3 font-body text-sm focus:outline-none focus:border-gold focus:shadow-[0_0_15px_rgba(201,168,76,0.1)] transition-all duration-300"
                      />
                    </div>
                    <div className="relative">
                      <label className={`absolute left-5 transition-all duration-300 font-body text-xs tracking-wider uppercase pointer-events-none ${focusedField === 'telefoon' ? 'top-2 text-gold' : 'top-2 text-cream/30'}`}>
                        Telefoonnummer
                      </label>
                      <input
                        type="tel"
                        value={form.telefoon}
                        onChange={(e) => setForm({ ...form, telefoon: e.target.value })}
                        onFocus={() => setFocusedField('telefoon')}
                        onBlur={(e) => !e.target.value && setFocusedField(null)}
                        className="w-full bg-navy/60 border border-gold/15 text-cream px-5 pt-7 pb-3 font-body text-sm focus:outline-none focus:border-gold focus:shadow-[0_0_15px_rgba(201,168,76,0.1)] transition-all duration-300"
                      />
                    </div>
                  </div>

                  <div className="relative">
                    <label className={`absolute left-5 transition-all duration-300 font-body text-xs tracking-wider uppercase pointer-events-none ${focusedField === 'email' ? 'top-2 text-gold' : 'top-2 text-cream/30'}`}>
                      E-mailadres
                    </label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      onFocus={() => setFocusedField('email')}
                      onBlur={(e) => !e.target.value && setFocusedField(null)}
                      className="w-full bg-navy/60 border border-gold/15 text-cream px-5 pt-7 pb-3 font-body text-sm focus:outline-none focus:border-gold focus:shadow-[0_0_15px_rgba(201,168,76,0.1)] transition-all duration-300"
                    />
                  </div>

                  <div className="relative">
                    <label className="absolute left-5 top-2 font-body text-xs tracking-wider uppercase text-cream/30 pointer-events-none">
                      Type Meubel
                    </label>
                    <select
                      value={form.typeMeubel}
                      onChange={(e) => setForm({ ...form, typeMeubel: e.target.value })}
                      className="w-full bg-navy/60 border border-gold/15 text-cream px-5 pt-7 pb-3 font-body text-sm focus:outline-none focus:border-gold focus:shadow-[0_0_15px_rgba(201,168,76,0.1)] transition-all duration-300 appearance-none cursor-pointer"
                    >
                      <option value="" className="bg-navy">Selecteer een type...</option>
                      <option value="Bank / Sofa" className="bg-navy">Bank / Sofa</option>
                      <option value="Fauteuil" className="bg-navy">Fauteuil</option>
                      <option value="Eetkamerstoelen" className="bg-navy">Eetkamerstoelen</option>
                      <option value="Antiek Meubel" className="bg-navy">Antiek Meubel</option>
                      <option value="Boot Bekleding" className="bg-navy">Boot Bekleding</option>
                      <option value="Anders" className="bg-navy">Anders</option>
                    </select>
                    <ArrowRight className="absolute right-5 top-1/2 -translate-y-1/2 w-4 h-4 text-cream/30 rotate-90" />
                  </div>

                  <div className="relative">
                    <label className={`absolute left-5 transition-all duration-300 font-body text-xs tracking-wider uppercase pointer-events-none ${focusedField === 'bericht' ? 'top-2 text-gold' : 'top-2 text-cream/30'}`}>
                      Uw Bericht
                    </label>
                    <textarea
                      rows={4}
                      value={form.bericht}
                      onChange={(e) => setForm({ ...form, bericht: e.target.value })}
                      onFocus={() => setFocusedField('bericht')}
                      onBlur={(e) => !e.target.value && setFocusedField(null)}
                      className="w-full bg-navy/60 border border-gold/15 text-cream px-5 pt-7 pb-3 font-body text-sm focus:outline-none focus:border-gold focus:shadow-[0_0_15px_rgba(201,168,76,0.1)] transition-all duration-300 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full font-body text-sm tracking-wider uppercase px-8 py-4 bg-gold text-navy font-semibold hover:bg-gold-light transition-all duration-300 flex items-center justify-center gap-3 group disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {loading ? 'Versturen...' : 'Verstuur Aanvraag'}
                    {!loading && <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />}
                  </button>

                  <p className="text-center font-body text-xs text-cream/30 mt-4">
                    Wij nemen binnen 24 uur contact met u op
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

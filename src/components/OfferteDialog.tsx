import { useState } from "react";
import { Send, ArrowRight } from "lucide-react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { toast } from "sonner";

const OfferteDialog = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setOpen(false);
    toast.success("Offerte aanvraag verstuurd!", {
      description: "Wij nemen binnen 24 uur contact met u op.",
    });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="bg-navy border border-gold/20 max-w-xl p-0 overflow-hidden max-h-[90vh] overflow-y-auto">
        {/* Decorative accent */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold/0 via-gold to-gold/0" />

        <div className="p-8 pt-10">
          <DialogHeader className="mb-8">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-gold/10 rounded-lg flex items-center justify-center">
                <Send className="w-4 h-4 text-gold" />
              </div>
              <div>
                <DialogTitle className="font-display text-xl text-cream">
                  Gratis Offerte Aanvragen
                </DialogTitle>
                <DialogDescription className="font-body text-xs text-cream/40">
                  Alle velden zijn optioneel
                </DialogDescription>
              </div>
            </div>
            <p className="font-body text-sm text-cream/60">
              Vul het formulier in en wij nemen zo snel mogelijk contact met u op
              voor een vrijblijvend adviesgesprek.
            </p>
          </DialogHeader>

          <form className="space-y-5" onSubmit={handleSubmit}>
            <div className="grid sm:grid-cols-2 gap-5">
              <div className="relative">
                <label
                  className={`absolute left-5 transition-all duration-300 font-body text-xs tracking-wider uppercase pointer-events-none ${
                    focusedField === "naam"
                      ? "top-2 text-gold"
                      : "top-2 text-cream/30"
                  }`}
                >
                  Naam
                </label>
                <input
                  type="text"
                  onFocus={() => setFocusedField("naam")}
                  onBlur={(e) => !e.target.value && setFocusedField(null)}
                  className="w-full bg-navy-light/60 border border-gold/15 text-cream px-5 pt-7 pb-3 font-body text-sm focus:outline-none focus:border-gold focus:shadow-[0_0_15px_rgba(201,168,76,0.1)] transition-all duration-300"
                />
              </div>
              <div className="relative">
                <label
                  className={`absolute left-5 transition-all duration-300 font-body text-xs tracking-wider uppercase pointer-events-none ${
                    focusedField === "telefoon"
                      ? "top-2 text-gold"
                      : "top-2 text-cream/30"
                  }`}
                >
                  Telefoonnummer
                </label>
                <input
                  type="tel"
                  onFocus={() => setFocusedField("telefoon")}
                  onBlur={(e) => !e.target.value && setFocusedField(null)}
                  className="w-full bg-navy-light/60 border border-gold/15 text-cream px-5 pt-7 pb-3 font-body text-sm focus:outline-none focus:border-gold focus:shadow-[0_0_15px_rgba(201,168,76,0.1)] transition-all duration-300"
                />
              </div>
            </div>

            <div className="relative">
              <label
                className={`absolute left-5 transition-all duration-300 font-body text-xs tracking-wider uppercase pointer-events-none ${
                  focusedField === "email"
                    ? "top-2 text-gold"
                    : "top-2 text-cream/30"
                }`}
              >
                E-mailadres
              </label>
              <input
                type="email"
                onFocus={() => setFocusedField("email")}
                onBlur={(e) => !e.target.value && setFocusedField(null)}
                className="w-full bg-navy-light/60 border border-gold/15 text-cream px-5 pt-7 pb-3 font-body text-sm focus:outline-none focus:border-gold focus:shadow-[0_0_15px_rgba(201,168,76,0.1)] transition-all duration-300"
              />
            </div>

            <div className="relative">
              <label className="absolute left-5 top-2 font-body text-xs tracking-wider uppercase text-cream/30 pointer-events-none">
                Type Meubel
              </label>
              <select
                className="w-full bg-navy-light/60 border border-gold/15 text-cream px-5 pt-7 pb-3 font-body text-sm focus:outline-none focus:border-gold focus:shadow-[0_0_15px_rgba(201,168,76,0.1)] transition-all duration-300 appearance-none cursor-pointer"
                defaultValue=""
              >
                <option value="" disabled className="bg-navy">
                  Selecteer een type...
                </option>
                <option value="bank" className="bg-navy">
                  Bank / Sofa
                </option>
                <option value="fauteuil" className="bg-navy">
                  Fauteuil
                </option>
                <option value="eetkamerstoelen" className="bg-navy">
                  Eetkamerstoelen
                </option>
                <option value="antiek" className="bg-navy">
                  Antiek Meubel
                </option>
                <option value="boot" className="bg-navy">
                  Boot Bekleding
                </option>
                <option value="anders" className="bg-navy">
                  Anders
                </option>
              </select>
              <ArrowRight className="absolute right-5 top-1/2 -translate-y-1/2 w-4 h-4 text-cream/30 rotate-90" />
            </div>

            <div className="relative">
              <label
                className={`absolute left-5 transition-all duration-300 font-body text-xs tracking-wider uppercase pointer-events-none ${
                  focusedField === "bericht"
                    ? "top-2 text-gold"
                    : "top-2 text-cream/30"
                }`}
              >
                Uw Bericht
              </label>
              <textarea
                rows={3}
                onFocus={() => setFocusedField("bericht")}
                onBlur={(e) => !e.target.value && setFocusedField(null)}
                className="w-full bg-navy-light/60 border border-gold/15 text-cream px-5 pt-7 pb-3 font-body text-sm focus:outline-none focus:border-gold focus:shadow-[0_0_15px_rgba(201,168,76,0.1)] transition-all duration-300 resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full font-body text-sm tracking-wider uppercase px-8 py-4 bg-gold text-navy font-semibold hover:bg-gold-light transition-all duration-300 flex items-center justify-center gap-3 group"
            >
              Verstuur Aanvraag
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </button>

            <p className="text-center font-body text-xs text-cream/30">
              Wij nemen binnen 24 uur contact met u op
            </p>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default OfferteDialog;

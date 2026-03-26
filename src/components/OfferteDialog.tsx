import { useState, useEffect } from "react";
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
import { submitLead } from "@/lib/odoo";

interface OfferteDialogProps {
  children: React.ReactNode;
  externalOpen?: boolean;
  onExternalClose?: () => void;
}

const OfferteDialog = ({ children, externalOpen, onExternalClose }: OfferteDialogProps) => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [form, setForm] = useState({
    naam: '',
    telefoon: '',
    email: '',
    typeMeubel: '',
    bericht: '',
  });

  useEffect(() => {
    if (externalOpen) setOpen(true);
  }, [externalOpen]);

  const handleOpenChange = (value: boolean) => {
    setOpen(value);
    if (!value && onExternalClose) onExternalClose();
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      await submitLead(form);
      setOpen(false);
      if (onExternalClose) onExternalClose();
      toast.success("Offerte aanvraag verstuurd!", {
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
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent onOpenAutoFocus={(e) => e.preventDefault()} className="bg-navy border border-gold/20 max-w-xl p-0 overflow-hidden max-h-[90vh] overflow-y-auto">
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
                  Velden met * zijn verplicht
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
                <label className={`absolute left-5 transition-all duration-300 font-body text-xs tracking-wider uppercase pointer-events-none ${focusedField === "naam" ? "top-2 text-gold" : "top-2 text-cream/30"}`}>
                  Naam <span className="text-gold">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={form.naam}
                  onChange={(e) => setForm({ ...form, naam: e.target.value })}
                  onFocus={() => setFocusedField("naam")}
                  onBlur={(e) => !e.target.value && setFocusedField(null)}
                  className="w-full bg-navy-light/60 border border-gold/15 text-cream px-5 pt-7 pb-3 font-body text-sm focus:outline-none focus:border-gold focus:shadow-[0_0_15px_rgba(201,168,76,0.1)] transition-all duration-300"
                />
              </div>
              <div className="relative">
                <label className={`absolute left-5 transition-all duration-300 font-body text-xs tracking-wider uppercase pointer-events-none ${focusedField === "telefoon" ? "top-2 text-gold" : "top-2 text-cream/30"}`}>
                  Telefoonnummer <span className="text-gold">*</span>
                </label>
                <input
                  type="tel"
                  required
                  value={form.telefoon}
                  onChange={(e) => setForm({ ...form, telefoon: e.target.value })}
                  onFocus={() => setFocusedField("telefoon")}
                  onBlur={(e) => !e.target.value && setFocusedField(null)}
                  className="w-full bg-navy-light/60 border border-gold/15 text-cream px-5 pt-7 pb-3 font-body text-sm focus:outline-none focus:border-gold focus:shadow-[0_0_15px_rgba(201,168,76,0.1)] transition-all duration-300"
                />
              </div>
            </div>

            <div className="relative">
              <label className={`absolute left-5 transition-all duration-300 font-body text-xs tracking-wider uppercase pointer-events-none ${focusedField === "email" ? "top-2 text-gold" : "top-2 text-cream/30"}`}>
                E-mailadres <span className="text-gold">*</span>
              </label>
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
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
                value={form.typeMeubel}
                onChange={(e) => setForm({ ...form, typeMeubel: e.target.value })}
                className="w-full bg-navy-light/60 border border-gold/15 text-cream px-5 pt-7 pb-3 font-body text-sm focus:outline-none focus:border-gold focus:shadow-[0_0_15px_rgba(201,168,76,0.1)] transition-all duration-300 appearance-none cursor-pointer"
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
              <label className={`absolute left-5 transition-all duration-300 font-body text-xs tracking-wider uppercase pointer-events-none ${focusedField === "bericht" ? "top-2 text-gold" : "top-2 text-cream/30"}`}>
                Uw Bericht
              </label>
              <textarea
                rows={3}
                value={form.bericht}
                onChange={(e) => setForm({ ...form, bericht: e.target.value })}
                onFocus={() => setFocusedField("bericht")}
                onBlur={(e) => !e.target.value && setFocusedField(null)}
                className="w-full bg-navy-light/60 border border-gold/15 text-cream px-5 pt-7 pb-3 font-body text-sm focus:outline-none focus:border-gold focus:shadow-[0_0_15px_rgba(201,168,76,0.1)] transition-all duration-300 resize-none"
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

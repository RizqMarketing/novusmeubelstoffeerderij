import logo from "@/assets/novuslogo.png";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = ["Home", "Diensten", "Over Ons", "Portfolio", "Contact"];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-navy backdrop-blur-sm border-b border-gold/20">
      <div className="container mx-auto flex items-center justify-between py-0 px-4">
        <img src={logo} alt="Novus Meubelstoffeerderij" className="h-36 md:h-44 -mt-10 -mb-14 md:-mt-6" />
        
        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                className="font-body text-sm tracking-widest uppercase text-gold-light hover:text-gold transition-colors duration-300"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden md:inline-block font-body text-sm tracking-wider uppercase px-6 py-2.5 border border-gold text-gold hover:bg-gold hover:text-navy transition-all duration-300"
        >
          Gratis Offerte
        </a>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-gold">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-navy border-t border-gold/20 animate-fade-in">
          <ul className="flex flex-col items-center gap-6 py-8">
            {navItems.map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase().replace(" ", "-")}`}
                  onClick={() => setOpen(false)}
                  className="font-body text-sm tracking-widest uppercase text-gold-light hover:text-gold transition-colors"
                >
                  {item}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="font-body text-sm tracking-wider uppercase px-6 py-2.5 border border-gold text-gold hover:bg-gold hover:text-navy transition-all duration-300"
              >
                Gratis Offerte
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

const Footer = () => {
  return (
    <footer className="bg-navy border-t border-gold/10 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="font-body text-sm text-cream/40">
            &copy; {new Date().getFullYear()} Novus Meubelstoffeerderij. Alle rechten voorbehouden.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

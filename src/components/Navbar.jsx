import { useState, useEffect } from 'react';
import { Pizza, Phone, MapPin } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all ${
      scrolled ? 'backdrop-blur bg-white/70 shadow-sm' : 'bg-transparent'
    }`}>
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-2">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-tr from-rose-500 via-orange-400 to-yellow-400 text-white shadow-md">
            <Pizza size={18} />
          </span>
          <span className="font-extrabold tracking-tight text-lg bg-gradient-to-r from-rose-600 via-orange-600 to-yellow-500 bg-clip-text text-transparent">
            Pizzeria Stella
          </span>
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="#menu" className="hover:text-rose-600 transition-colors">Menù</a>
          <a href="#recensioni" className="hover:text-rose-600 transition-colors">Recensioni</a>
          <a href="#prenota" className="hover:text-rose-600 transition-colors">Prenota</a>
        </div>
        <div className="flex items-center gap-3">
          <a href="tel:+39000000000" className="hidden sm:flex items-center gap-2 text-sm font-semibold px-3 py-1.5 rounded-full bg-black text-white hover:opacity-90 transition">
            <Phone size={16} />
            Chiama
          </a>
          <a href="#footer" className="flex items-center gap-1.5 text-sm font-semibold px-3 py-1.5 rounded-full bg-gradient-to-r from-rose-500 via-orange-500 to-yellow-400 text-white shadow hover:shadow-md transition">
            <MapPin size={16} />
            Come arrivare
          </a>
        </div>
      </nav>
    </header>
  );
}

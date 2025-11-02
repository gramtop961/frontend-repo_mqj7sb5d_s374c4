import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SignaturePizzas from './components/SignaturePizzas';
import Testimonials from './components/Testimonials';

function App() {
  return (
    <div className="font-[Inter] text-gray-900 bg-[radial-gradient(45rem_45rem_at_120%_-10%,rgba(255,221,195,0.35),transparent),radial-gradient(40rem_40rem_at_-10%_120%,rgba(255,200,200,0.35),transparent)]">
      <Navbar />
      <main>
        <Hero />
        <SignaturePizzas />
        <Testimonials />

        {/* Prenotazione CTA */}
        <section id="prenota" className="relative py-20">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-orange-300/50 to-transparent" />
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-rose-500 via-orange-500 to-yellow-400 p-1 shadow-xl">
              <div className="rounded-[22px] bg-white/80 backdrop-blur p-8 md:p-10">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight">Prenota il tuo tavolo</h3>
                    <p className="mt-2 text-gray-700">Siamo aperti tutti i giorni a cena. Prenota ora e assicurati un posto per una serata indimenticabile.</p>
                    <div className="mt-6 flex flex-wrap gap-3">
                      <a href="tel:+39000000000" className="px-6 py-3 rounded-full bg-black text-white font-semibold shadow hover:opacity-90 transition">Chiama subito</a>
                      <a href="#menu" className="px-6 py-3 rounded-full bg-white text-gray-900 font-semibold border border-gray-200 hover:bg-gray-50 transition">Scopri il menù</a>
                    </div>
                  </div>
                  <form onSubmit={(e) => e.preventDefault()} className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input required placeholder="Nome" className="px-4 py-3 rounded-xl border border-gray-200 bg-white/70 focus:outline-none focus:ring-2 focus:ring-rose-400" />
                    <input required type="tel" placeholder="Telefono" className="px-4 py-3 rounded-xl border border-gray-200 bg-white/70 focus:outline-none focus:ring-2 focus:ring-rose-400" />
                    <input required type="date" className="px-4 py-3 rounded-xl border border-gray-200 bg-white/70 focus:outline-none focus:ring-2 focus:ring-rose-400" />
                    <input required type="time" className="px-4 py-3 rounded-xl border border-gray-200 bg-white/70 focus:outline-none focus:ring-2 focus:ring-rose-400" />
                    <select className="px-4 py-3 rounded-xl border border-gray-200 bg-white/70 focus:outline-none focus:ring-2 focus:ring-rose-400">
                      <option>2 persone</option>
                      <option>3 persone</option>
                      <option>4 persone</option>
                      <option>5 persone</option>
                      <option>6+ persone</option>
                    </select>
                    <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-rose-600 via-orange-500 to-yellow-500 text-white font-semibold shadow hover:shadow-md transition">
                      Invia richiesta
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer id="footer" className="border-t border-gray-200 bg-white/70 backdrop-blur">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-600">© {new Date().getFullYear()} Pizzeria Stella — Tutti i diritti riservati.</p>
          <div className="text-sm text-gray-600">Via dei Sapori 12, Milano · Aperto 19:00 — 23:30</div>
        </div>
      </footer>
    </div>
  );
}

export default App;

import { motion } from 'framer-motion';
import { Flame, Leaf, Crown, Star } from 'lucide-react';

const pizzas = [
  {
    name: 'Vesuvio Piccante',
    desc: 'Salame piccante, fior di latte, pomodoro San Marzano, peperoncino fresco.',
    icon: Flame,
    badge: 'Hot!'
  },
  {
    name: 'Regina Margherita',
    desc: 'Pomodoro DOP, mozzarella di bufala, basilico, olio EVO.',
    icon: Crown,
    badge: 'Classico'
  },
  {
    name: 'Green Garden',
    desc: 'Zucchine grigliate, peperoni, olive taggiasche, pesto genovese.',
    icon: Leaf,
    badge: 'Veg'
  }
];

export default function SignaturePizzas() {
  return (
    <section id="menu" className="relative py-20">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-rose-300/50 to-transparent" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/70 backdrop-blur px-3 py-1 text-sm font-semibold shadow-sm">
            <Star size={16} className="text-yellow-500" /> Le nostre firme
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight">Pizze iconiche</h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">Ricette creative e ingredienti selezionati per un colpo di fulmine al primo morso.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {pizzas.map((p, idx) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: idx * 0.05 }}
              className="group relative overflow-hidden rounded-3xl border border-gray-100 bg-white/70 backdrop-blur p-6 shadow hover:shadow-xl transition"
            >
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br from-rose-200 via-orange-200 to-yellow-200 blur-2xl opacity-70 group-hover:opacity-90 transition" />
              <div className="relative z-10">
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center gap-2 rounded-full bg-black text-white text-xs font-semibold px-2.5 py-1 shadow">{p.badge}</div>
                  <p.icon className="text-rose-600" />
                </div>
                <h3 className="mt-4 text-xl font-bold">{p.name}</h3>
                <p className="mt-2 text-sm text-gray-600">{p.desc}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="font-extrabold text-lg">€12</span>
                  <button className="px-4 py-2 rounded-full bg-gradient-to-r from-rose-500 to-orange-500 text-white text-sm font-semibold shadow hover:shadow-md transition">
                    Aggiungi
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

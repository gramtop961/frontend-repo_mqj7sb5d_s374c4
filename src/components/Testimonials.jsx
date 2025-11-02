import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Giulia R.',
    text: 'Una pizza spettacolare! Leggera, gustosa e con ingredienti super freschi. Tornerò presto!',
  },
  {
    name: 'Marco D.',
    text: 'Locale coloratissimo e moderno, servizio impeccabile. La Vesuvio è pazzesca!',
  },
  {
    name: 'Elena P.',
    text: 'Finalmente una pizzeria che osa! Impasti fantastici e abbinamenti creativi.',
  },
];

export default function Testimonials() {
  return (
    <section id="recensioni" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/70 backdrop-blur px-3 py-1 text-sm font-semibold shadow-sm">
            <Quote size={16} className="text-rose-600" /> Dicono di noi
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight">Recensioni stellari</h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">Le parole dei nostri clienti sono la nostra miglior pubblicità.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.blockquote
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.06 }}
              className="relative overflow-hidden rounded-3xl border border-gray-100 bg-white/70 backdrop-blur p-6 shadow"
            >
              <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-gradient-to-br from-rose-200 via-orange-200 to-yellow-200 blur-2xl opacity-70" />
              <div className="relative z-10">
                <p className="text-gray-700">{t.text}</p>
                <footer className="mt-4 font-semibold">{t.name}</footer>
              </div>
            </motion.blockquote>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-12 rounded-3xl border border-gray-100 bg-gradient-to-r from-rose-50 via-orange-50 to-yellow-50 p-6"
        >
          <p className="text-center text-sm text-gray-600">
            Oltre 5.000 recensioni verificate su piattaforme come Google e TheFork.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

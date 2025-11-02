import { motion } from 'framer-motion';
import { Star, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 -z-0">
        <div className="absolute -top-40 -right-32 h-96 w-96 rounded-full bg-gradient-to-br from-rose-400 via-orange-300 to-yellow-300 blur-3xl opacity-60" />
        <div className="absolute -bottom-40 -left-32 h-[28rem] w-[28rem] rounded-full bg-gradient-to-br from-yellow-300 via-lime-200 to-rose-300 blur-3xl opacity-50" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-24">
        <div className="grid lg:grid-cols-2 items-center gap-10">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-2 rounded-full bg-white/70 backdrop-blur px-3 py-1 text-sm font-semibold shadow-sm"
            >
              <Sparkles className="text-rose-600" size={16} />
              La pizzeria più amata della città
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="mt-5 text-5xl sm:text-6xl font-black tracking-tight leading-tight"
            >
              <span className="bg-gradient-to-r from-rose-600 via-orange-600 to-yellow-500 bg-clip-text text-transparent">
                Pizza d’autore
              </span>{' '}
              cotta a regola d’arte
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-5 text-lg text-gray-600 max-w-xl"
            >
              Impasti a lunga lievitazione, ingredienti DOP e creatività senza limiti. Un
             ’esperienza coloratissima e moderna che profuma di forno a legna.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <a
                href="#prenota"
                className="px-6 py-3 rounded-full text-white font-semibold bg-gradient-to-r from-rose-600 via-orange-500 to-yellow-500 shadow hover:shadow-lg transition"
              >
                Prenota un tavolo
              </a>
              <a
                href="#menu"
                className="px-6 py-3 rounded-full font-semibold border border-gray-300 bg-white/70 backdrop-blur hover:bg-white transition"
              >
                Guarda il menù
              </a>
            </motion.div>

            <div className="mt-10 flex items-center gap-6">
              <div className="flex -space-x-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <img
                    key={i}
                    src={`https://i.pravatar.cc/64?img=${i + 10}`}
                    alt="Cliente"
                    className="h-9 w-9 rounded-full border-2 border-white shadow"
                    loading="lazy"
                  />
                ))}
              </div>
              <div className="text-sm text-gray-600">
                Amata da oltre{' '}
                <span className="font-semibold text-gray-900">10.000</span> clienti
              </div>
            </div>
          </div>

          {/* Visual side */}
          <div className="relative">
            <motion.div
              initial={{ rotate: -10, scale: 0.9, opacity: 0 }}
              animate={{ rotate: 0, scale: 1, opacity: 1 }}
              transition={{ type: 'spring', stiffness: 80, damping: 12 }}
              className="relative mx-auto w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-white/70 backdrop-blur shadow-2xl flex items-center justify-center"
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-rose-200/60 via-orange-200/60 to-yellow-200/60" />
              <motion.div
                animate={{ rotate: [0, 8, -8, 0] }}
                transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
                className="relative z-10"
              >
                <PizzaIllustration />
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="absolute -bottom-4 -right-2 flex items-center gap-1 rounded-full bg-black text-white px-3 py-1 text-xs shadow"
            >
              <Star size={14} className="text-yellow-400" />
              Valutazione 4.9/5
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PizzaIllustration() {
  return (
    <svg width="260" height="260" viewBox="0 0 260 260" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="dough" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(130 130) rotate(90) scale(120)">
          <stop offset="0%" stopColor="#FFE9B0" />
          <stop offset="100%" stopColor="#F2C37A" />
        </radialGradient>
        <linearGradient id="sauce" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ff6b6b" />
          <stop offset="100%" stopColor="#ff922b" />
        </linearGradient>
      </defs>
      <circle cx="130" cy="130" r="120" fill="url(#dough)" stroke="#E6B566" strokeWidth="6" />
      <circle cx="130" cy="130" r="90" fill="url(#sauce)" opacity="0.9" />
      {Array.from({ length: 20 }).map((_, i) => (
        <circle key={i} cx={50 + (i * 10) % 160} cy={50 + (i * 7) % 160} r="8" fill="#fff" stroke="#ff4d4f" strokeWidth="3" />
      ))}
      {Array.from({ length: 10 }).map((_, i) => (
        <ellipse key={`b${i}`} cx={70 + (i * 12) % 140} cy={70 + (i * 9) % 140} rx="10" ry="6" fill="#9AE6B4" />
      ))}
      {Array.from({ length: 8 }).map((_, i) => (
        <rect key={`y${i}`} x={80 + (i * 14) % 120} y={80 + (i * 11) % 120} width="14" height="6" rx="3" fill="#FFD43B" />
      ))}
    </svg>
  );
}

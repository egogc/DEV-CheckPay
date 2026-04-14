import { motion } from 'motion/react';

const logos = [
  { name: 'Nequi',       src: '/logos/nequi.svg',       color: '#ca0080' },
  { name: 'Daviplata',   src: '/logos/daviplata.svg',   color: '#dd141d' },
  { name: 'Breb',        src: '/logos/breb.svg',        color: '#00b4e5' },
  { name: 'Bancolombia', src: '/logos/bancolombia.svg', color: '#ffd100' },
  { name: 'Dale',        src: '/logos/dale.svg',        color: '#00d3d8' },
  { name: 'Movii',       src: '/logos/movii.svg',       color: '#de0058' },
];

export function Compatible() {
  return (
    <section className="relative py-24 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Title — mismo estilo que "Cómo funciona" */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2
            className="text-5xl md:text-6xl text-white mb-6"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Compatible <span className="text-[#79e5f2]">con:</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#7863fe] to-[#79e5f2] mx-auto rounded-full" />
        </motion.div>

        {/* Logos */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-12">
          {logos.map((logo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, rotate: 2 }}
              className="relative flex items-center justify-center w-56 h-32 rounded-3xl"
              style={{
                background: `linear-gradient(135deg, ${logo.color}15 0%, ${logo.color}05 100%)`,
                border: `2px solid ${logo.color}30`,
              }}
            >
              {/* Animated ring 1 */}
              <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0, 0.3] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: index * 0.4 }}
                className="absolute inset-0 rounded-3xl border-2"
                style={{ borderColor: logo.color }}
              />
              {/* Animated ring 2 */}
              <motion.div
                animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0, 0.2] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: index * 0.4 + 0.5 }}
                className="absolute inset-0 rounded-3xl border-2"
                style={{ borderColor: logo.color }}
              />

              <img
                src={logo.src}
                alt={logo.name}
                className="relative z-10 h-12 w-auto object-contain"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

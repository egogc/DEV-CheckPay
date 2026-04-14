import { motion } from 'motion/react';
import { Zap, Clock, Smartphone, Store } from 'lucide-react';
import { CheckPayBrand } from './CheckPayBrand';

const benefits = [
  {
    icon: Zap,
    title: 'Automatización completa',
    description: <>Cero trabajo manual, <CheckPayBrand /> hace todo por ti</>,
  },
  {
    icon: Clock,
    title: 'Reportes en tiempo real',
    description: 'Accede a tu contabilidad actualizada cuando quieras',
  },
  {
    icon: Smartphone,
    title: 'Compatible con todos los pagos',
    description: 'Nequi, Daviplata, QR y más plataformas',
  },
  {
    icon: Store,
    title: 'Para tu negocio',
    description: 'Tiendas, panaderías, peluquerías, cafés',
  },
];

export function Benefits() {
  return (
    <section className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section title */}
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
            Beneficios <span className="text-[#7863fe]">clave</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#7863fe] to-[#79e5f2] mx-auto rounded-full" />
        </motion.div>

        {/* Benefits grid with staggered layout */}
        <div className="grid md:grid-cols-2 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  type: 'spring',
                  stiffness: 100,
                }}
                className="group relative"
              >
                <div className="relative bg-[#13131a] border border-gray-800 rounded-3xl p-8 overflow-hidden hover:border-[#79e5f2]/50 transition-all duration-300">
                  {/* Checkmark */}
                  <div className="absolute top-6 right-6">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#7863fe] to-[#79e5f2] flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={3}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                  </div>

                  {/* Icon */}
                  <div className="mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#7863fe]/20 to-[#79e5f2]/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-8 h-8 text-[#79e5f2]" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl text-white mb-3 font-medium">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-400 text-lg leading-relaxed">
                    {benefit.description}
                  </p>

                  {/* Hover gradient effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#7863fe]/5 to-[#79e5f2]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Additional info section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center space-y-6"
        >
          <div className="inline-block bg-gradient-to-r from-[#7863fe]/10 to-[#79e5f2]/10 border border-[#7863fe]/30 rounded-2xl px-8 py-6">
            <p className="text-xl text-gray-300">
              <span className="text-[#79e5f2] font-medium">Diseñado específicamente</span> para pequeños comercios en Colombia
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

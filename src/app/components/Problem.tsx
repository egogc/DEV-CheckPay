import { motion } from 'motion/react';
import { FileQuestion, TrendingDown, AlertTriangle } from 'lucide-react';
import { CheckPayBrand } from './CheckPayBrand';

const problems = [
  {
    icon: FileQuestion,
    title: 'Foto desorganizada de comprobantes',
    description: 'Montones de capturas de pantalla perdidas en el celular',
  },
  {
    icon: TrendingDown,
    title: 'Contabilidad manual y lenta',
    description: 'Horas perdidas anotando cada pago a mano en cuadernos',
  },
  {
    icon: AlertTriangle,
    title: 'Riesgo de errores',
    description: 'Números mal copiados que afectan tu balance mensual',
  },
];

export function Problem() {
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
            ¿Por qué <CheckPayBrand />?
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#7863fe] to-[#79e5f2] mx-auto rounded-full" />
        </motion.div>

        {/* Problem cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="group relative"
              >
                {/* Card background with gradient border effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#7863fe]/20 to-[#79e5f2]/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative bg-[#13131a] border border-gray-800 rounded-2xl p-8 h-full hover:border-[#7863fe]/50 transition-all duration-300">
                  {/* Icon */}
                  <div className="mb-6 relative">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#7863fe]/10 to-[#79e5f2]/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-8 h-8 text-[#7863fe]" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl text-white mb-4 font-medium">
                    {problem.title}
                  </h3>
                  <p className="text-gray-400 text-lg leading-relaxed">
                    {problem.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

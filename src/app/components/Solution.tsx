import { motion } from 'motion/react';
import { Camera, Sparkles, FileText } from 'lucide-react';
import { CheckPayBrand } from './CheckPayBrand';

const steps = [
  {
    number: '01',
    icon: Camera,
    title: 'Toma foto del comprobante',
    description: 'Captura cualquier comprobante de Nequi, Daviplata o pago QR',
    color: '#7863fe',
  },
  {
    number: '02',
    icon: Sparkles,
    title: <><CheckPayBrand /> verifica automáticamente</>,
    description: 'Nuestra IA extrae y valida toda la información al instante',
    color: '#8B5CF6',
  },
  {
    number: '03',
    icon: FileText,
    title: 'Recibe reporte organizado',
    description: 'Todo listo para tu contabilidad, sin errores ni trabajo manual',
    color: '#79e5f2',
  },
];

export function Solution() {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#7863fe] rounded-full blur-[200px] opacity-10" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-24"
        >
          <h2
            className="text-5xl md:text-6xl text-white mb-6"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Cómo <span className="text-[#79e5f2]">funciona</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Tres pasos simples para automatizar completamente tu contabilidad
          </p>
        </motion.div>

        {/* Steps */}
        <div className="space-y-16">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: isEven ? -60 : 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`flex flex-col md:flex-row items-center gap-12 ${
                  isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Content */}
                <div className="flex-1 text-center md:text-left">
                  <div className="mb-4">
                    <span
                      className="text-8xl font-bold opacity-20"
                      style={{
                        fontFamily: 'var(--font-display)',
                        color: step.color,
                      }}
                    >
                      {step.number}
                    </span>
                  </div>
                  <h3
                    className="text-3xl md:text-4xl text-white mb-4"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-xl text-gray-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Icon visual */}
                <motion.div
                  whileHover={{ scale: 1.05, rotate: 5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className="flex-1 flex justify-center"
                >
                  <div
                    className="relative w-64 h-64 rounded-3xl flex items-center justify-center"
                    style={{
                      background: `linear-gradient(135deg, ${step.color}15 0%, ${step.color}05 100%)`,
                      border: `2px solid ${step.color}30`,
                    }}
                  >
                    {/* Animated rings */}
                    <motion.div
                      animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0, 0.3] }}
                      transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                      className="absolute inset-0 rounded-3xl border-2"
                      style={{ borderColor: step.color }}
                    />
                    <motion.div
                      animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0, 0.2] }}
                      transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                      className="absolute inset-0 rounded-3xl border-2"
                      style={{ borderColor: step.color }}
                    />

                    {/* Icon */}
                    <Icon className="w-24 h-24 relative z-10" style={{ color: step.color }} />
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Connecting lines */}
        <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-3/4 bg-gradient-to-b from-[#7863fe]/30 via-[#8B5CF6]/30 to-[#79e5f2]/30 -z-10" />
      </div>
    </section>
  );
}

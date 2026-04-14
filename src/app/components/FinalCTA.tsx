import { motion } from 'motion/react';
import { Mail, ArrowRight, Sparkles } from 'lucide-react';
import { useState } from 'react';
import { CheckPayBrand } from './CheckPayBrand';

export function FinalCTA() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock submission
    alert(`¡Gracias! Te contactaremos pronto a ${email}`);
    setEmail('');
  };

  return (
    <section className="relative py-32 px-6 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-gradient-to-r from-[#7863fe] to-[#79e5f2] rounded-full blur-[180px] opacity-20" />
      </div>

      {/* Animated grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(#7863fe 1px, transparent 1px),
            linear-gradient(90deg, #7863fe 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-[#13131a] border border-[#7863fe]/30 rounded-full px-6 py-3 mb-8"
          >
            <Sparkles className="w-5 h-5 text-[#79e5f2]" />
            <span className="text-gray-300">🎉 Primer mes gratis</span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-5xl md:text-6xl lg:text-7xl text-white mb-6 leading-tight"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Sé de los primeros <br />
            en usar <CheckPayBrand />
          </motion.h2>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-400 mb-4 max-w-2xl mx-auto"
          >
            Regístrate ahora y obtén <span className="text-[#79e5f2] font-medium">1 mes completamente gratis</span> para probar <CheckPayBrand />
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="text-base md:text-lg text-gray-500 mb-12 max-w-2xl mx-auto"
          >
            Sin tarjeta de crédito, sin compromisos
          </motion.p>

          {/* Email form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="max-w-xl mx-auto mb-12"
          >
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1 relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="tu@email.com"
                  required
                  className="w-full pl-12 pr-4 py-4 bg-[#13131a] border border-gray-800 rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:border-[#7863fe] transition-colors"
                />
              </div>
              <button
                type="submit"
                className="group px-8 py-4 bg-gradient-to-r from-[#7863fe] to-[#79e5f2] text-white font-medium rounded-2xl flex items-center justify-center gap-2 hover:scale-105 transition-all hover:shadow-[0_0_40px_rgba(99,102,241,0.5)]"
              >
                <span>Unirse</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </motion.form>

          {/* Contact email */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-gray-500"
          >
            <p className="mb-8">
              ¿Tienes preguntas? Escríbenos a{' '}
              <a
                href="mailto:mail@checkpay.com.co"
                className="text-[#79e5f2] hover:text-[#7863fe] transition-colors underline"
              >
                mail@checkpay.com.co
              </a>
            </p>
          </motion.div>
        </motion.div>

        {/* Decorative bottom elements */}
        <div className="mt-20 flex justify-center gap-4">
          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="w-3 h-3 rounded-full bg-[#7863fe]"
          />
          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 0.2,
            }}
            className="w-3 h-3 rounded-full bg-[#8B5CF6]"
          />
          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 0.4,
            }}
            className="w-3 h-3 rounded-full bg-[#79e5f2]"
          />
        </div>
      </div>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="relative z-10 mt-20 text-center text-gray-600 text-sm"
      >
        <p>© 2026 <CheckPayBrand />. Simplificando pagos para comerciantes colombianos.</p>
      </motion.footer>
    </section>
  );
}

import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import logoSvg from '../../imports/logo.svg';

function PhoneIllustration() {
  return (
    <div className="relative">
      {/* Phone frame */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="relative w-[280px] h-[560px] bg-[#13131a] border-[12px] border-gray-900 rounded-[3rem] shadow-2xl shadow-[#7863fe]/20 overflow-hidden"
      >
        {/* Phone notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-gray-900 rounded-b-2xl z-10" />

        {/* Screen content */}
        <div className="h-full bg-gradient-to-b from-[#1a1a24] to-[#13131a] p-6 pt-10">
          {/* Header */}
          <div className="text-center mb-6">
            <p className="text-gray-400 text-sm mb-1">Comprobante de pago</p>
            <h3 className="text-white text-xl font-bold">Nequi</h3>
          </div>

          {/* Payment receipt card */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="bg-gradient-to-br from-[#7863fe]/20 to-[#79e5f2]/20 border border-[#7863fe]/30 rounded-2xl p-5 mb-4"
          >
            {/* Success icon */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.8, type: 'spring', stiffness: 200 }}
              className="flex justify-center mb-4"
            >
              <div className="w-16 h-16 bg-[#79e5f2] rounded-full flex items-center justify-center">
                <CheckCircle2 className="w-10 h-10 text-white" />
              </div>
            </motion.div>

            {/* Amount */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="text-center mb-4"
            >
              <p className="text-gray-400 text-xs mb-1">Monto</p>
              <p className="text-white text-3xl font-bold">$45.000</p>
            </motion.div>

            {/* Details */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="space-y-2 text-sm"
            >
              <div className="flex justify-between">
                <span className="text-gray-400">De:</span>
                <span className="text-white">Juan Pérez</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Fecha:</span>
                <span className="text-white">14 Abr 2026</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">ID:</span>
                <span className="text-white">NEQ-7392...</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Scanning animation */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: [0, 1, 1, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatDelay: 2,
              times: [0, 0.3, 0.7, 1],
            }}
            className="h-1 bg-gradient-to-r from-transparent via-[#79e5f2] to-transparent mb-3"
          />

          {/* Status text */}
          <motion.p
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-center text-[#79e5f2] text-sm"
          >
            Verificando información...
          </motion.p>
        </div>
      </motion.div>

      {/* Floating data particles */}
      <motion.div
        animate={{
          y: [0, -100],
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          delay: 0.5,
        }}
        className="absolute top-1/4 -right-6 w-3 h-3 bg-[#79e5f2] rounded-full"
      />
      <motion.div
        animate={{
          y: [0, -120],
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          delay: 1.5,
        }}
        className="absolute top-1/2 -left-6 w-2 h-2 bg-[#7863fe] rounded-full"
      />
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#7863fe] rounded-full blur-[150px] animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#79e5f2] rounded-full blur-[150px] animate-pulse" style={{ animationDuration: '6s', animationDelay: '1s' }} />
      </div>

      {/* Noise texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Content */}
          <div className="text-center lg:text-left">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8 flex justify-center lg:justify-start"
            >
              <img src={logoSvg} alt="CheckPay" className="h-16 md:h-20" />
            </motion.div>

            {/* Main heading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Verifica y organiza <br />
              <span className="text-[#79e5f2]">tus pagos digitales</span>
            </motion.h2>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-400 mb-4"
            >
              De la foto al reporte automático en segundos
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="text-base md:text-lg text-[#79e5f2] mb-12"
            >
              🎉 Primer mes completamente gratis
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex justify-center lg:justify-start"
            >
              <button className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#7863fe] to-[#79e5f2] text-white text-lg font-bold rounded-full overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(99,102,241,0.5)]">
                <span className="relative z-10">Pruébalo gratis</span>
                <ArrowRight className="relative z-10 w-5 h-5 transition-transform group-hover:translate-x-1" />

                {/* Button shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transition-opacity -translate-x-full group-hover:translate-x-full duration-700" />
              </button>
            </motion.div>
          </div>

          {/* Right column - Phone illustration */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center lg:justify-end"
          >
            <PhoneIllustration />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

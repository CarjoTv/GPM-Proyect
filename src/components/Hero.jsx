import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="pt-24 pb-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-12">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex-1"
        >
          <h1 className="text-4xl lg:text-5xl font-bold text-[#1a365d] leading-tight mb-6">
            PROTECCIÓN Y CRECIMIENTO PARA TU PATRIMONIO FAMILIAR
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            GPM: Tu aliado de confianza en seguros integrales y previsión patrimonial para el futuro
          </p>
          <button className="bg-[#1a365d] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#2d4a7c] transition-colors border-2 border-[#d4a853]">
            SOLICITA TU ASESORÍA GRATUTITA
          </button>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex-1"
        >
          <img 
            src="https://images.unsplash.com/photo-1511895426328-dc8714191300?w=800&h=600&fit=crop" 
            alt="Familia mexicana feliz frente a su hogar"
            className="rounded-2xl shadow-2xl w-full object-cover h-[500px]"
          />
        </motion.div>
      </div>
    </section>
  );
}
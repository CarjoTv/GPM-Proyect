import { motion } from 'framer-motion';
import { HeartHandshake, HeartPulse, PiggyBank } from 'lucide-react';

const services = [
  {
    icon: HeartHandshake,
    title: 'SEGUROS DE VIDA',
    description: 'Protege a tu familia con coberturas integrales que garantizan su bienestar futuro.'
  },
  {
    icon: HeartPulse,
    title: 'GASTOS MÉDICOS',
    description: 'Acceso a la mejor atención médica sin preocuparte por los costos imprevistos.'
  },
  {
    icon: PiggyBank,
    title: 'AHORRO PATRIMONIAL',
    description: 'Planifica tu retiro y haz crecer tu patrimonio con inversiones seguras.'
  }
];

export default function Services() {
  return (
    <section id="seguros" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold text-[#1a365d] text-center mb-12"
        >
          Nuestros Servicios
        </motion.h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white p-8 rounded-xl shadow-lg border-2 border-gray-100 hover:border-[#d4a853] transition-colors"
            >
              <div className="w-16 h-16 bg-[#1a365d] rounded-full flex items-center justify-center mb-6 mx-auto">
                <service.icon className="w-8 h-8 text-[#d4a853]" />
              </div>
              <h3 className="text-xl font-bold text-[#1a365d] text-center mb-4">{service.title}</h3>
              <p className="text-gray-600 text-center">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
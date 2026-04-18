import { motion } from 'framer-motion';
import { HeartHandshake, HeartPulse, PiggyBank, ShieldCheck, Clock, Users } from 'lucide-react';

const services = [
  {
    icon: HeartHandshake,
    title: 'SEGUROS DE VIDA',
    description: 'Protege a tu familia con coberturas integrales que garantizan su bienestar futuro. Planes diseñados para cada etapa de tu vida.',
    features: ['Cobertura por muerte natural', 'Cobertura por accidente', 'Protección de ingresos familiares']
  },
  {
    icon: HeartPulse,
    title: 'GASTOS MÉDICOS',
    description: 'Acceso a la mejor atención médica sin preocuparte por los costos imprevistos. Hospitalización, cirugías y más.',
    features: ['Cobertura hospitalaria', 'Medicamentos y tratamientos', 'Atención de emergencia 24/7']
  },
  {
    icon: PiggyBank,
    title: 'AHORRO PATRIMONIAL',
    description: 'Planifica tu retiro y haz crecer tu patrimonio con inversiones seguras que se adaptan a tus objetivos financieros.',
    planes: ['Plan de Retiro', 'Ahorro para educación', 'Inversiones conservadoras']
  }
];

export default function Services() {
  return (
    <section id="seguros" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-[#1a365d] mb-4">Nuestros Servicios</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Soluciones integrales para proteger lo que más valoras: tu familia y tu patrimonio
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white p-8 rounded-2xl shadow-lg border-2 border-gray-100 hover:border-[#d4a853] hover:shadow-xl transition-all group"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-[#1a365d] to-[#2d4a7c] rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform">
                <service.icon className="w-10 h-10 text-[#d4a853]" />
              </div>
              <h3 className="text-2xl font-bold text-[#1a365d] text-center mb-4">{service.title}</h3>
              <p className="text-gray-600 text-center mb-6 leading-relaxed">{service.description}</p>
              
              {service.features && (
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-gray-500">
                      <ShieldCheck className="w-4 h-4 text-[#d4a853]" />
                      {feature}
                    </li>
                  ))}
                </ul>
              )}
              
              {service.planes && (
                <ul className="space-y-2">
                  {service.planes.map((plan, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-gray-500">
                      <Clock className="w-4 h-4 text-[#d4a853]" />
                      {plan}
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
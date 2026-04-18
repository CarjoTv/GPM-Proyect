import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    name: 'María González',
    role: '客户',
    text: 'GPM me dio la tranquilidad que necesitaba para proteger a mi familia. El equipo fue muy profesional y me explicó todas las opciones de manera clara. Recommendación total.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face'
  },
  {
    name: 'Carlos Rodríguez',
    role: 'Empresario',
    text: 'Desde que contraté el seguro de vida con GPM, siento que mi patrimonio está seguro. El servicio al cliente es excepcional y siempre están pendientes de nosotros.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face'
  },
  {
    name: 'Ana López',
    role: 'Profesionista',
    text: 'Encontré en GPM exactly lo que buscaba: seguridad y confianza. Los planes de ahorro patrimonial me ayudan a preparar mi futuro sin preocupaciones.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face'
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-[#1a365d] mb-4">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Descubre por qué miles de familias confían en GPM para proteger su patrimonio
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="relative bg-white rounded-2xl p-8 shadow-lg border-t-4 border-[#d4a853]"
            >
              <Quote className="w-10 h-10 text-[#d4a853] absolute top-4 right-4 opacity-20" />
              
              <div className="relative mb-6 mx-auto w-24 h-24">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-24 h-24 rounded-full object-cover border-4 border-[#d4a853]/30"
                />
              </div>
              
              <p className="text-gray-600 text-center mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>
              
              <div className="text-center">
                <p className="text-[#1a365d] font-bold text-lg">{testimonial.name}</p>
                <p className="text-gray-500 text-sm">{testimonial.role}</p>
                <div className="flex justify-center gap-1 mt-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-[#d4a853] fill-[#d4a853]" />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
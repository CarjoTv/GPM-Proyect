import { Shield, Phone, MapPin, Mail, Clock } from 'lucide-react';
import { FacebookIcon, InstagramIcon, TwitterIcon } from './Icons';

export default function Footer() {
  return (
    <footer id="contacto" className="bg-[#1a365d] text-white py-20 mt-auto">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-14 h-14 bg-white rounded-lg flex items-center justify-center">
                <Shield className="w-9 h-9 text-[#1a365d]" />
              </div>
              <div>
                <span className="text-2xl font-bold">GPM</span>
                <p className="text-xs text-gray-300">GRUPO PATRIMONIAL MEXICANO</p>
              </div>
            </div>
            <p className="text-gray-300 max-w-md">
              Comprometidos con la protección y el crecimiento de tu patrimonio familiar. 
              Más de 20 años de experiencia asegurando el futuro de miles de familias mexicanas.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold text-[#d4a853] mb-4">Contacto</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-[#d4a853]" />
                <span className="text-gray-300">Av. principal 123, Ciudad de México</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#d4a853]" />
                <span className="text-gray-300">+52 (55) 1234-5678</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#d4a853]" />
                <span className="text-gray-300">contacto@gpm.com.mx</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-[#d4a853]" />
                <span className="text-gray-300">Lun-Vie: 9am - 6pm</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold text-[#d4a853] mb-4">Síguenos</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#d4a853] transition-colors">
                <FacebookIcon />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#d4a853] transition-colors">
                <InstagramIcon />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#d4a853] transition-colors">
                <TwitterIcon />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 text-center">
          <p className="text-gray-400">
            &copy; 2026 GPM - Grupo Patrimonial Mexicano. Todos los derechos reservados.
          </p>
          <div className="flex justify-center gap-6 mt-4 text-sm text-gray-400">
            <a href="#" className="hover:text-[#d4a853] transition-colors">Términos y Condiciones</a>
            <a href="#" className="hover:text-[#d4a853] transition-colors">Política de Privacidad</a>
            <a href="#" className="hover:text-[#d4a853] transition-colors">Aviso Legal</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
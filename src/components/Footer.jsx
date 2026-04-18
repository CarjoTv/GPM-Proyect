import { Shield, Phone, MapPin } from 'lucide-react';
import { FacebookIcon, InstagramIcon, TwitterIcon } from './Icons';

export default function Footer() {
  return (
    <footer id="contacto" className="bg-[#1a365d] text-white py-16 mt-auto min-h-[40vh] flex flex-col">
      <div className="max-w-7xl mx-auto px-6 flex-1 flex flex-col justify-center">
        <div className="grid md:grid-cols-3 gap-12 items-center">
          <div className="flex items-center gap-3">
            <div className="w-14 h-14 bg-white rounded-lg flex items-center justify-center">
              <Shield className="w-9 h-9 text-[#1a365d]" />
            </div>
            <div>
              <span className="text-2xl font-bold">GPM</span>
              <p className="text-xs text-gray-300">GRUPO PATRIMONIAL MEXICANO</p>
            </div>
          </div>

          <div className="flex flex-col gap-3 text-lg">
            <div className="flex items-center gap-3">
              <MapPin className="w-6 h-6 text-[#d4a853]" />
              <span>Rua Aitana, 1450 - Ciudad de México</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-6 h-6 text-[#d4a853]" />
              <span>+52 (55) 1234-5678</span>
            </div>
          </div>

          <div className="flex justify-center gap-6">
            <a href="#" className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#d4a853] transition-colors">
              <FacebookIcon />
            </a>
            <a href="#" className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#d4a853] transition-colors">
              <InstagramIcon />
            </a>
            <a href="#" className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#d4a853] transition-colors">
              <TwitterIcon />
            </a>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8 text-center text-gray-400 text-lg">
          <p>&copy; 2026 GPM - Grupo Patrimonial Mexicano. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
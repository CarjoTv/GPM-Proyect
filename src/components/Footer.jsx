import { Shield, Phone, MapPin } from 'lucide-react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contacto" className="bg-[#1a365d] text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
              <Shield className="w-8 h-8 text-[#1a365d]" />
            </div>
            <div>
              <span className="text-2xl font-bold">GPM</span>
              <p className="text-xs text-gray-300">GRUPO PATRIMONIAL MEXICANO</p>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-[#d4a853]" />
              <span>Rua Aitana, 1450 - Ciudad de México</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5 text-[#d4a853]" />
              <span>+52 (55) 1234-5678</span>
            </div>
          </div>

          <div className="flex justify-center gap-4">
            <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#d4a853] transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#d4a853] transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#d4a853] transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2026 GPM - Grupo Patrimonial Mexicano. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
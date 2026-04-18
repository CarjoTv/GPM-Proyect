import { Shield } from 'lucide-react';
import { motion } from 'framer-motion';

const navItems = ['Inicio', 'Seguros', 'Inversiones', 'Sobre Nosotros', 'Contacto'];

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 bg-white shadow-md z-50"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-[#1a365d] rounded-lg flex items-center justify-center">
            <Shield className="w-8 h-8 text-[#d4a853]" />
          </div>
          <div>
            <span className="text-2xl font-bold text-[#1a365d]">GPM</span>
            <p className="text-xs text-[#1a365d] font-medium">GRUPO PATRIMONIAL MEXICANO</p>
          </div>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a 
              key={item}
              href={`#${item.toLowerCase().replace(' ', '-')}`}
              className="text-[#1a365d] hover:text-[#d4a853] transition-colors font-medium"
            >
              {item}
            </a>
          ))}
        </div>

        <button className="bg-[#1a365d] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#2d4a7c] transition-colors border-2 border-[#d4a853]">
          ACCESO CLIENTES
        </button>
      </div>
    </motion.nav>
  );
}
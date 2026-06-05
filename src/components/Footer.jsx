import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#3E4B3F] text-[#E8E3D7]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-light text-white mb-4 tracking-wide">
              {t('header.logo')}
            </h3>
            <p className="text-[#B6C2AE] text-sm leading-relaxed max-w-md">
              {t('hero.subtitle')}
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-medium mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection('inicio')}
                  className="text-[#B6C2AE] hover:text-white transition-colors"
                >
                  {t('header.home')}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('sobre-mi')}
                  className="text-[#B6C2AE] hover:text-white transition-colors"
                >
                  {t('header.about')}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('servicios')}
                  className="text-[#B6C2AE] hover:text-white transition-colors"
                >
                  {t('header.services')}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('recursos')}
                  className="text-[#B6C2AE] hover:text-white transition-colors"
                >
                  {t('header.resources')}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('reservas')}
                  className="text-[#B6C2AE] hover:text-white transition-colors"
                >
                  {t('header.bookings')}
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-medium mb-4">Contact</h4>
            <ul className="space-y-2 text-[#B6C2AE]">
              <li>
                <button 
                  onClick={() => scrollToSection('contacto')}
                  className="hover:text-white transition-colors"
                >
                  {t('header.contact')}
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal */}
        <div className="border-t border-[#5F6B5C] mt-12 pt-8">
          <p className="text-[#7D8C7A] text-xs text-center md:text-left">
            This site offers educational and personal growth companionship. The services presented here do not substitute professional medical or psychological attention.
          </p>
          <p className="text-[#5F6B5C] text-xs text-center md:text-left mt-2">
            © {new Date().getFullYear()} {t('header.logo')}. {t('footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
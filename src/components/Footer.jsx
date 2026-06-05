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
    <footer className="bg-stone-900 text-stone-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-light text-white mb-4 tracking-wide">
              {t('header.logo')}
            </h3>
            <p className="text-stone-400 text-sm leading-relaxed max-w-md">
              {t('hero.subtitle')}
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-medium mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection('cursos')}
                  className="text-stone-400 hover:text-white transition-colors"
                >
                  {t('header.courses')}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('comunidad')}
                  className="text-stone-400 hover:text-white transition-colors"
                >
                  {t('header.community')}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('retiros')}
                  className="text-stone-400 hover:text-white transition-colors"
                >
                  {t('header.retreats')}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('reprogramacion')}
                  className="text-stone-400 hover:text-white transition-colors"
                >
                  {t('header.reprogramming')}
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-medium mb-4">Contact</h4>
            <ul className="space-y-2 text-stone-400">
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
        <div className="border-t border-stone-800 mt-12 pt-8">
          <p className="text-stone-500 text-xs text-center md:text-left">
            This site offers educational and personal growth companionship. The services presented here do not substitute professional medical or psychological attention.
          </p>
          <p className="text-stone-600 text-xs text-center md:text-left mt-2">
            © {new Date().getFullYear()} {t('header.logo')}. {t('footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
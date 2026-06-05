import { useTranslation } from 'react-i18next';
import Button from './Button';
import LanguageSwitcher from './LanguageSwitcher';

const Header = () => {
  const { t } = useTranslation();

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-stone-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <span className="text-xl md:text-2xl font-light text-stone-800 tracking-wide">
              {t('header.logo')}
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('cursos')}
              className="text-stone-600 hover:text-stone-800 transition-colors"
            >
              {t('header.courses')}
            </button>
            <button 
              onClick={() => scrollToSection('comunidad')}
              className="text-stone-600 hover:text-stone-800 transition-colors"
            >
              {t('header.community')}
            </button>
            <button 
              onClick={() => scrollToSection('retiros')}
              className="text-stone-600 hover:text-stone-800 transition-colors"
            >
              {t('header.retreats')}
            </button>
            <button 
              onClick={() => scrollToSection('reprogramacion')}
              className="text-stone-600 hover:text-stone-800 transition-colors"
            >
              {t('header.reprogramming')}
            </button>
            <Button 
              variant="primary" 
              onClick={() => scrollToSection('contacto')}
              className="px-5 py-2 text-sm"
            >
              {t('header.contact')}
            </Button>
          </nav>

          {/* Language Switcher & Mobile Menu */}
          <div className="flex items-center gap-4">
            {/* Language Switcher - Always visible */}
            <LanguageSwitcher />

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button 
                onClick={() => scrollToSection('contacto')}
                className="text-stone-600 hover:text-stone-800"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
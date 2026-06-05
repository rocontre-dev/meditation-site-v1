import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Button from './Button';
import LanguageSwitcher from './LanguageSwitcher';

const Header = () => {
  const { t } = useTranslation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  const navItems = [
    { label: t('header.home'), id: 'inicio' },
    { label: t('header.about'), id: 'sobre-mi' },
    { label: t('header.services'), id: 'servicios' },
    { label: t('header.resources'), id: 'recursos' },
    { label: t('header.bookings'), id: 'reservas' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-[#E8E3D7]/95 backdrop-blur-sm z-50 border-b border-[#CDD7C9]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <span className="text-xl md:text-2xl font-light text-[#3E4B3F] tracking-wide">
              {t('header.logo')}
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-[#5A6B5C] hover:text-[#7D8C7A] transition-colors"
              >
                {item.label}
              </button>
            ))}
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
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-[#5A6B5C] hover:text-[#7D8C7A]"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#E8E3D7] border-t border-[#CDD7C9]">
          <nav className="px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left px-3 py-2 text-[#5A6B5C] hover:text-[#7D8C7A] hover:bg-[#CDD7C9] transition-colors"
              >
                {item.label}
              </button>
            ))}
            <Button
              variant="primary"
              onClick={() => scrollToSection('contacto')}
              className="w-full mt-4 px-5 py-2 text-sm"
            >
              {t('header.contact')}
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;

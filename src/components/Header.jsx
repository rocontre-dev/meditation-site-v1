import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import Button from './Button';
import LanguageSwitcher from './LanguageSwitcher';

const Header = () => {
  const { t } = useTranslation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: t('header.home'), to: '/' },
    { label: t('header.about'), to: '/about' },
    { label: t('header.services'), to: '/services' },
    { label: t('header.resources'), to: '/resources' },
    { label: t('header.bookings'), to: '/bookings' },
  ];

  // Active link styling - subtle underline and color change
  const activeClassName = "text-[var(--zen-moss)] border-b-2 border-[var(--zen-moss)] pb-0.5";
  const inactiveClassName = "text-[var(--zen-muted)] hover:text-[var(--zen-moss)] transition-colors";

  return (
    <header className="fixed top-0 left-0 right-0 bg-[var(--zen-cream)]/85 backdrop-blur-md z-50 border-b border-[var(--zen-border)]/40 shadow-[var(--zen-shadow-soft)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <NavLink 
              to="/" 
              className="text-xl md:text-2xl font-light text-[var(--zen-deep)] tracking-wide hover:text-[var(--zen-moss)] transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t('header.logo')}
            </NavLink>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) => 
                  `${isActive ? activeClassName : inactiveClassName} transition-colors`
                }
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}
            <Button
              variant="primary"
              as={NavLink}
              to="/contact"
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
                className="text-[var(--zen-muted)] hover:text-[var(--zen-moss)]"
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
        <div className="md:hidden bg-[var(--zen-sand)] border-t border-[var(--zen-border)]">
          <nav className="px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `block w-full text-left px-3 py-2 transition-colors ${
                    isActive 
                      ? 'text-[var(--zen-moss)] bg-[var(--zen-border)] font-medium' 
                      : 'text-[var(--zen-muted)] hover:text-[var(--zen-moss)] hover:bg-[var(--zen-border)]'
                  }`
                }
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}
            <Button
              variant="primary"
              as={NavLink}
              to="/contact"
              className="w-full mt-4 px-5 py-2 text-sm"
              onClick={() => setMobileMenuOpen(false)}
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
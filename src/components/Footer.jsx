import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-[var(--zen-deep)] text-[var(--zen-sand)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-light text-[var(--zen-sand)] mb-4 tracking-wide">
              {t('header.logo')}
            </h3>
            <p className="text-[var(--zen-sage)] text-sm leading-relaxed max-w-md">
              {t('hero.subtitle')}
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-[var(--zen-sand)] font-medium mb-4">{t('footer.navigation')}</h4>
            <ul className="space-y-3">
              <li>
                <Link 
                  to="/"
                  className="text-[var(--zen-sage)] hover:text-[var(--zen-sand)] zen-transition"
                >
                  {t('header.home')}
                </Link>
              </li>
              <li>
                <Link 
                  to="/the-void"
                  className="text-[var(--zen-sage)] hover:text-[var(--zen-sand)] zen-transition"
                >
                  {t('header.theVoid')}
                </Link>
              </li>
              <li>
                <Link 
                  to="/meditation"
                  className="text-[var(--zen-sage)] hover:text-[var(--zen-sand)] zen-transition"
                >
                  {t('header.meditation')}
                </Link>
              </li>
              <li>
                <Link 
                  to="/retreats"
                  className="text-[var(--zen-sage)] hover:text-[var(--zen-sand)] zen-transition"
                >
                  {t('header.retreats')}
                </Link>
              </li>
              <li>
                <Link 
                  to="/podcast"
                  className="text-[var(--zen-sage)] hover:text-[var(--zen-sand)] zen-transition"
                >
                  {t('header.podcast')}
                </Link>
              </li>
              <li>
                <Link 
                  to="/fabrizio"
                  className="text-[var(--zen-sage)] hover:text-[var(--zen-sand)] zen-transition"
                >
                  {t('header.fabrizio')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[var(--zen-sand)] font-medium mb-4">{t('footer.contact')}</h4>
            <ul className="space-y-3 text-[var(--zen-sage)]">
              <li>
                <Link 
                  to="/contact"
                  className="hover:text-[var(--zen-sand)] zen-transition"
                >
                  {t('header.contact')}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal */}
        <div className="border-t border-[var(--zen-muted)] mt-12 pt-8">
          <p className="text-[var(--zen-moss)] text-xs text-center md:text-left">
            {t('footer.disclaimer')}
          </p>
          <p className="text-[var(--zen-muted)] text-xs text-center md:text-left mt-2">
            © {new Date().getFullYear()} {t('header.logo')}. {t('footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
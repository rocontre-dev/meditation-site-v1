import { useTranslation } from 'react-i18next';
import ensoPrimary from '../assets/images/shared/enso-primary.webp';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-[var(--zen-deep)] text-[var(--zen-sand)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        {/* Brand */}
        <div className="text-center">
          <div className="relative flex items-center justify-center mb-4">
            <h3 className="relative text-2xl font-light text-[var(--zen-sand)] tracking-wide">
              <img src={ensoPrimary} alt="" className="absolute right-full top-1/2 -translate-y-1/2 mr-4 w-8 h-8 object-contain" />
              {t('header.logo')}
            </h3>
          </div>
          <p className="text-[var(--zen-sage)] text-sm leading-relaxed max-w-md mx-auto">
            {t('hero.subtitle')}
          </p>
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
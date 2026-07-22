import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Button from '../Button';
import fabrizioPortrait from '../../assets/images/about/fabrizio-portrait.png';

/**
 * About preview for Home page.
 * Concise introduction with portrait and CTA to full About page.
 */
const AboutPreview = () => {
  const { t } = useTranslation();

  return (
    <section className="zen-section py-24 md:py-32 bg-[var(--zen-soft)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="order-1 lg:order-1">
            <div className="aspect-[4/5] rounded-[var(--zen-radius-2xl)] bg-[var(--zen-cream)] border border-[var(--zen-border)] overflow-hidden shadow-[var(--zen-shadow-medium)]">
              <img
                src={fabrizioPortrait}
                alt={t('about.photoAlt')}
                className="w-full h-full object-cover object-center"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>

          {/* Content */}
          <div className="order-2 lg:order-2">
            <span className="inline-block text-sm font-medium text-[var(--zen-moss)] uppercase tracking-wider mb-4">
              {t('home.aboutEyebrow')}
            </span>
            <h2 className="text-3xl md:text-4xl font-light text-[var(--zen-deep)] mb-6 tracking-wide">
              {t('about.title')}
            </h2>
            <p className="text-lg text-[var(--zen-muted)] leading-relaxed mb-6">
              {t('about.subtitle')}
            </p>
            <p className="text-[var(--zen-muted)] leading-relaxed mb-8">
              {t('about.paragraph1')}
            </p>
            <Button
              variant="primary"
              as={Link}
              to="/about"
              className="px-8 py-3"
            >
              {t('home.aboutCta')}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
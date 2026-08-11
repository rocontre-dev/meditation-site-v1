import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Button from '../Button';

/**
 * Contact CTA section for Home page.
 * Brief invitation to reach out, linking to Contact page.
 */
const ContactCallout = () => {
  const { t } = useTranslation();

  return (
    <section className="zen-section py-16 md:py-20 home-editorial-surface">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="home-section-title font-light text-[var(--zen-deep)] mb-6 tracking-wide">
          {t('home.contactHeading')}
        </h2>
        <p className="home-section-lead text-[var(--zen-muted)] max-w-2xl mx-auto leading-relaxed mb-10">
          {t('home.contactSubtitle')}
        </p>
        <Button
          variant="primary"
          as={Link}
          to="/contact"
          className="px-10 py-4"
        >
          {t('home.contactCta')}
        </Button>
      </div>
    </section>
  );
};

export default ContactCallout;
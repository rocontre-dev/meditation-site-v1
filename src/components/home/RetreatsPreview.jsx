import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Button from '../Button';

/**
 * Retreats preview for Home page.
 * Shows upcoming retreats with CTA to Services page.
 */
const RetreatsPreview = () => {
  const { t } = useTranslation();

  return (
    <section className="zen-section py-24 md:py-32 home-editorial-surface">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light text-[var(--zen-deep)] mb-6 tracking-wide">
            {t('retreats.title')}
          </h2>
          <p className="text-lg text-[var(--zen-muted)] max-w-2xl mx-auto leading-relaxed">
            {t('retreats.subtitle')}
          </p>
        </div>

        <div className="max-w-2xl mx-auto space-y-16 mb-16">
          {/* Retreat 1 */}
          <div className="text-left">
            <div className="text-sm text-[var(--zen-muted)] mb-3 tracking-wide">
              July 2026 · 5 days
            </div>
            <h3 className="text-xl font-medium text-[var(--zen-deep)] mb-4">
              {t('retreats.retreat1Title')}
            </h3>
            <p className="text-[var(--zen-muted)] leading-relaxed mb-4">
              {t('retreats.retreat1Desc')}
            </p>
            <div className="text-sm text-[var(--zen-moss)]">
              12 spots available
            </div>
          </div>

          {/* Retreat 2 */}
          <div className="text-left">
            <div className="text-sm text-[var(--zen-muted)] mb-3 tracking-wide">
              September 2026 · 7 days
            </div>
            <h3 className="text-xl font-medium text-[var(--zen-deep)] mb-4">
              {t('retreats.retreat3Title')}
            </h3>
            <p className="text-[var(--zen-muted)] leading-relaxed mb-4">
              {t('retreats.retreat3Desc')}
            </p>
            <div className="text-sm text-[var(--zen-moss)]">
              8 spots available
            </div>
          </div>
        </div>

        <div className="text-center">
          <Button
            variant="secondary"
            as={Link}
            to="/retreats"
            className="px-8 py-3"
          >
            {t('home.retreatsCta')}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default RetreatsPreview;
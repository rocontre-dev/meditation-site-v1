import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Button from '../Button';
import Card from '../Card';

/**
 * Retreats preview for Home page.
 * Shows upcoming retreats with CTA to Services page.
 */
const RetreatsPreview = () => {
  const { t } = useTranslation();

  return (
    <section className="zen-section py-24 md:py-32 bg-[var(--zen-soft)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light text-[var(--zen-deep)] mb-6 tracking-wide">
            {t('retreats.title')}
          </h2>
          <p className="text-lg text-[var(--zen-muted)] max-w-2xl mx-auto leading-relaxed">
            {t('retreats.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
          {/* Retreat 1 */}
          <Card className="flex flex-col">
            <div className="flex items-center justify-between mb-4">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-[var(--zen-sand)] text-[var(--zen-muted)]">
                July 2026
              </span>
              <span className="text-[var(--zen-moss)] text-sm">5 days</span>
            </div>
            <h3 className="text-xl font-medium text-[var(--zen-deep)] mb-3">
              {t('retreats.retreat1Title')}
            </h3>
            <p className="text-[var(--zen-muted)] leading-relaxed mb-4 flex-grow">
              {t('retreats.retreat1Desc')}
            </p>
            <div className="flex items-center gap-2 text-[var(--zen-moss)] text-sm mb-6">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span>12 spots available</span>
            </div>
          </Card>

          {/* Retreat 2 */}
          <Card className="flex flex-col">
            <div className="flex items-center justify-between mb-4">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-[var(--zen-sand)] text-[var(--zen-muted)]">
                September 2026
              </span>
              <span className="text-[var(--zen-moss)] text-sm">7 days</span>
            </div>
            <h3 className="text-xl font-medium text-[var(--zen-deep)] mb-3">
              {t('retreats.retreat3Title')}
            </h3>
            <p className="text-[var(--zen-muted)] leading-relaxed mb-4 flex-grow">
              {t('retreats.retreat3Desc')}
            </p>
            <div className="flex items-center gap-2 text-[var(--zen-moss)] text-sm mb-6">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span>8 spots available</span>
            </div>
          </Card>
        </div>

        <div className="text-center">
          <Button
            variant="secondary"
            as={Link}
            to="/services"
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
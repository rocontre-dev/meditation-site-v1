import { useTranslation } from 'react-i18next';
import Button from '../components/Button';
import Card from '../components/Card';

const Retreats = () => {
  const { t } = useTranslation();

  const retreats = [
    {
      id: 1,
      title: t('retreats.retreat1Title'),
      date: 'July 2026',
      duration: '5 days',
      description: t('retreats.retreat1Desc'),
      spots: 12
    },
    {
      id: 2,
      title: t('retreats.retreat3Title'),
      date: 'September 2026',
      duration: '7 days',
      description: t('retreats.retreat3Desc'),
      spots: 8
    }
  ];

  return (
    <section id="retiros" className="zen-section py-24 md:py-32 bg-[var(--zen-sage)]/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-light text-[var(--zen-deep)] mb-6 tracking-wide">
            {t('retreats.title')}
          </h2>
          <p className="text-lg text-[var(--zen-muted)] max-w-2xl mx-auto leading-relaxed">
            {t('retreats.subtitle')}
          </p>
        </div>

        {/* Retreats grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {retreats.map((retreat) => (
            <Card key={retreat.id} className="flex flex-col zen-float">
              {/* Date badge */}
              <div className="flex items-center justify-between mb-4">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-[var(--zen-sand)] text-[var(--zen-muted)]">
                  {retreat.date}
                </span>
                <span className="text-[var(--zen-moss)] text-sm">
                  {retreat.duration}
                </span>
              </div>

              {/* Content */}
              <h3 className="text-xl font-medium text-[var(--zen-deep)] mb-3">
                {retreat.title}
              </h3>
              <p className="text-[var(--zen-muted)] leading-relaxed mb-4 flex-grow">
                {retreat.description}
              </p>

              {/* Spots info */}
              <div className="flex items-center gap-2 text-[var(--zen-moss)] text-sm mb-6">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span>{retreat.spots} spots available</span>
              </div>

              {/* CTA */}
              <Button variant="accent" className="w-full px-4 py-3">
                {t('onlineCourse.enroll')}
              </Button>
            </Card>
          ))}
        </div>

        {/* Additional info */}
        <div className="mt-12 text-center">
          <p className="text-[var(--zen-moss)] text-sm">
            {t('contact.subtitle')}{' '}
            <button 
              onClick={() => {
                const contact = document.getElementById('contacto');
                if (contact) contact.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-[var(--zen-muted)] hover:text-[var(--zen-deep)] underline underline-offset-4 transition-colors"
            >
              {t('header.contact')}
            </button>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Retreats;
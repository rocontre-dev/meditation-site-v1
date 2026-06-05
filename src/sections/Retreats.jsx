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
    <section id="retiros" className="py-20 md:py-28 bg-stone-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light text-stone-800 mb-4 tracking-tight">
            {t('retreats.title')}
          </h2>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto leading-relaxed">
            {t('retreats.subtitle')}
          </p>
        </div>

        {/* Retreats grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {retreats.map((retreat) => (
            <Card key={retreat.id} className="flex flex-col">
              {/* Date badge */}
              <div className="flex items-center justify-between mb-4">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-amber-100 text-amber-800">
                  {retreat.date}
                </span>
                <span className="text-stone-500 text-sm">
                  {retreat.duration}
                </span>
              </div>

              {/* Content */}
              <h3 className="text-xl font-medium text-stone-800 mb-3">
                {retreat.title}
              </h3>
              <p className="text-stone-600 leading-relaxed mb-4 flex-grow">
                {retreat.description}
              </p>

              {/* Spots info */}
              <div className="flex items-center gap-2 text-stone-500 text-sm mb-6">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span>{retreat.spots} spots available</span>
              </div>

              {/* CTA */}
              <Button variant="accent" className="w-full">
                {t('onlineCourse.enroll')}
              </Button>
            </Card>
          ))}
        </div>

        {/* Additional info */}
        <div className="mt-12 text-center">
          <p className="text-stone-500 text-sm">
            {t('contact.subtitle')}{' '}
            <button 
              onClick={() => {
                const contact = document.getElementById('contacto');
                if (contact) contact.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-amber-700 hover:text-amber-800 underline underline-offset-2"
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
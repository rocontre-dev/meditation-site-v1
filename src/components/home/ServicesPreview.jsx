import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Button from '../Button';
import Card from '../Card';

/**
 * Services preview for Home page.
 * Shows 3 selected service cards with CTA to full Services page.
 */
const ServicesPreview = () => {
  const { t } = useTranslation();

  // Selected services for home preview
  const previewServices = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      title: t('services.courseTitle'),
      description: t('services.courseDesc'),
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: t('services.retreatTitle'),
      description: t('services.retreatDesc'),
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
      title: t('services.coachingTitle'),
      description: t('services.coachingDesc'),
    },
  ];

  return (
    <section className="zen-section py-24 md:py-32 bg-[var(--zen-sand)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light text-[var(--zen-deep)] mb-6 tracking-wide">
            {t('services.title')}
          </h2>
          <p className="text-lg text-[var(--zen-muted)] max-w-2xl mx-auto leading-relaxed">
            {t('services.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {previewServices.map((service, index) => (
            <Card key={index} className="flex flex-col h-full">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[var(--zen-sand)] mb-6">
                <div className="text-[var(--zen-moss)]">
                  {service.icon}
                </div>
              </div>
              <h3 className="text-xl font-medium text-[var(--zen-deep)] mb-4">
                {service.title}
              </h3>
              <p className="text-[var(--zen-muted)] leading-relaxed flex-grow">
                {service.description}
              </p>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button
            variant="secondary"
            as={Link}
            to="/services"
            className="px-8 py-3"
          >
            {t('home.servicesCta')}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Button from '../Button';
import Card from '../Card';

/**
 * Resources preview for Home page.
 * Shows 3 resource categories with CTA to Resources page.
 */
const ResourcesPreview = () => {
  const { t } = useTranslation();

  const resources = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      title: t('resources.reflexionesTitle'),
      description: t('resources.reflexionesDesc'),
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: t('resources.meditacionesTitle'),
      description: t('resources.meditacionesDesc'),
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
        </svg>
      ),
      title: t('resources.podcastTitle'),
      description: t('resources.podcastDesc'),
    },
  ];

  return (
    <section className="zen-section py-24 md:py-32 bg-[var(--zen-sand)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light text-[var(--zen-deep)] mb-6 tracking-wide">
            {t('resources.title')}
          </h2>
          <p className="text-lg text-[var(--zen-muted)] max-w-2xl mx-auto leading-relaxed">
            {t('resources.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {resources.map((resource, index) => (
            <Card key={index} className="flex flex-col h-full">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[var(--zen-sand)] mb-6">
                <div className="text-[var(--zen-moss)]">
                  {resource.icon}
                </div>
              </div>
              <h3 className="text-xl font-medium text-[var(--zen-deep)] mb-4">
                {resource.title}
              </h3>
              <p className="text-[var(--zen-muted)] leading-relaxed flex-grow">
                {resource.description}
              </p>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button
            variant="secondary"
            as={Link}
            to="/resources"
            className="px-8 py-3"
          >
            {t('home.resourcesCta')}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ResourcesPreview;
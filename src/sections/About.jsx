import { useTranslation } from 'react-i18next';
import Button from '../components/Button';
import fabrizioPortrait from '../assets/images/about/fabrizio-portrait.png';

const About = () => {
  const { t } = useTranslation();

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const values = [
    {
      id: 'presencia',
      title: t('about.presenceTitle'),
      description: t('about.presenceDesc'),
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707-.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
    },
    {
      id: 'escucha',
      title: t('about.listenTitle'),
      description: t('about.listenDesc'),
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
    },
    {
      id: 'transformacion',
      title: t('about.transformationTitle'),
      description: t('about.transformationDesc'),
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
    },
  ];

  return (
    <section id="sobre-mi" className="zen-section py-24 md:py-32 bg-[var(--zen-soft)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Image */}
          <div className="order-1 lg:order-1 relative">
            <div className="aspect-[4/5] rounded-[var(--zen-radius-2xl)] bg-[var(--zen-cream)] border border-[var(--zen-border)] overflow-hidden shadow-[var(--zen-shadow-medium)]">
              <img
                src={fabrizioPortrait}
                alt={t('about.photoAlt')}
                className="w-full h-full object-cover object-center"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -z-10 -bottom-4 -left-4 w-full h-full rounded-[var(--zen-radius-2xl)] bg-[var(--zen-border)]/30" />
          </div>

          {/* Content */}
          <div className="order-2 lg:order-2">
            <h2 className="text-3xl md:text-4xl font-light text-[var(--zen-deep)] mb-6 tracking-wide">
              {t('about.title')}
            </h2>
            <p className="text-lg text-[var(--zen-muted)] leading-relaxed mb-8">
              {t('about.subtitle')}
            </p>

            <div className="space-y-6 mb-10">
              <p className="text-[var(--zen-muted)] leading-relaxed">
                {t('about.paragraph1')}
              </p>
              <p className="text-[var(--zen-muted)] leading-relaxed">
                {t('about.paragraph2')}
              </p>
              <p className="text-[var(--zen-muted)] leading-relaxed">
                {t('about.paragraph3')}
              </p>
            </div>

            {/* Values */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              {values.map((value) => (
                <div key={value.id} className="text-center md:text-left">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[var(--zen-sand)] text-[var(--zen-moss)] mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-lg font-medium text-[var(--zen-deep)] mb-2">
                    {value.title}
                  </h3>
                  <p className="text-sm text-[var(--zen-muted)] leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="primary"
                onClick={() => scrollToSection('reservas')}
                className="px-8 py-3"
              >
                {t('about.ctaButton')}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
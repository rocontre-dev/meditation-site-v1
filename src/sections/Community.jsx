import { useTranslation } from 'react-i18next';
import Button from '../components/Button';

const Community = () => {
  const { t } = useTranslation();

  const benefits = [
    t('community.desc1'),
    t('community.desc2'),
    t('community.desc3'),
    t('hero.feature2'),
    t('hero.feature3')
  ];

  return (
    <section id="comunidad" className="zen-section py-24 md:py-32 bg-[var(--zen-soft)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image placeholder - order first on desktop */}
          <div className="order-2 lg:order-1 relative">
            <div className="aspect-[4/3] rounded-[var(--zen-radius-2xl)] bg-[var(--zen-cream)] border border-[var(--zen-border)] flex items-center justify-center overflow-hidden shadow-[var(--zen-shadow-medium)]">
              <div className="text-center p-8">
                <div className="flex justify-center -space-x-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-[var(--zen-sage)] border-2 border-[var(--zen-cream)]" />
                  <div className="w-16 h-16 rounded-full bg-[var(--zen-moss)] border-2 border-[var(--zen-cream)]" />
                  <div className="w-16 h-16 rounded-full bg-[var(--zen-sage)] border-2 border-[var(--zen-cream)]" />
                  <div className="w-16 h-16 rounded-full bg-[var(--zen-moss)] border-2 border-[var(--zen-cream)]" />
                </div>
                <p className="text-[var(--zen-muted)] text-sm">
                  {t('community.title')}
                </p>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -z-10 -bottom-4 -left-4 w-full h-full rounded-[var(--zen-radius-2xl)] bg-[var(--zen-border)]/30" />
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl font-light text-[var(--zen-deep)] mb-6 tracking-wide">
              {t('community.title')}
            </h2>
            <p className="text-lg text-[var(--zen-muted)] leading-relaxed mb-6">
              {t('community.subtitle')}
            </p>
            <p className="text-[var(--zen-muted)] leading-relaxed mb-8">
              {t('hero.subtitle')}
            </p>

            {/* Benefits list */}
            <div className="space-y-4 mb-10">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[var(--zen-sand)] flex items-center justify-center">
                    <svg className="w-3.5 h-3.5 text-[var(--zen-moss)]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-[var(--zen-deep)]">{benefit}</span>
                </div>
              ))}
            </div>

            <Button variant="primary" className="px-8 py-3">
              {t('community.join')}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;
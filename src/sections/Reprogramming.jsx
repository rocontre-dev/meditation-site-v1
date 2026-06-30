import { useTranslation } from 'react-i18next';
import Button from '../components/Button';

const Reprogramming = () => {
  const { t } = useTranslation();

  const steps = [
    {
      number: '01',
      title: t('reprogramming.step1Title'),
      description: t('reprogramming.step1Desc')
    },
    {
      number: '02',
      title: t('reprogramming.step2Title'),
      description: t('reprogramming.step2Desc')
    },
    {
      number: '03',
      title: t('reprogramming.step3Title'),
      description: t('reprogramming.step3Desc')
    },
    {
      number: '04',
      title: t('reprogramming.step4Title'),
      description: t('reprogramming.step4Desc')
    }
  ];

  return (
    <section id="reprogramacion" className="zen-section py-24 md:py-32 bg-[var(--zen-sage)]/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light text-[var(--zen-deep)] mb-6 tracking-wide">
            {t('reprogramming.title')}
          </h2>
          <p className="text-lg text-[var(--zen-muted)] leading-relaxed">
            {t('reprogramming.subtitle')}
          </p>
        </div>

        {/* Main description */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-[var(--zen-soft)] rounded-[var(--zen-radius-2xl)] p-8 md:p-12 border border-[var(--zen-border)]/40 shadow-[var(--zen-shadow-soft)]">
            <p className="text-[var(--zen-muted)] leading-relaxed text-lg mb-6">
              {t('reprogramming.intro')}
            </p>
            <p className="text-[var(--zen-muted)] leading-relaxed">
              {t('reprogramming.description')}
            </p>
          </div>
        </div>

        {/* Process steps */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-xl font-medium text-[var(--zen-deep)] text-center mb-12 tracking-wide">
            {t('reprogramming.processTitle')}
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {steps.map((step) => (
              <div key={step.number} className="relative group">
                <div className="bg-[var(--zen-cream)] rounded-[var(--zen-radius-xl)] p-8 border border-[var(--zen-border)]/30 shadow-[var(--zen-shadow-soft)] zen-transition zen-float">
                  <span className="text-5xl font-light text-[var(--zen-sage)] mb-6 block tracking-wider">
                    {step.number}
                  </span>
                  <h4 className="text-lg font-medium text-[var(--zen-deep)] mb-4">
                    {step.title}
                  </h4>
                  <p className="text-[var(--zen-muted)] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Important note */}
        <div className="mt-16 max-w-2xl mx-auto">
          <div className="bg-[var(--zen-soft)] rounded-[var(--zen-radius-lg)] p-8 border border-[var(--zen-border)]/40 shadow-[var(--zen-shadow-soft)]">
            <div className="flex items-start gap-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[var(--zen-sand)] flex-shrink-0">
                <svg className="w-5 h-5 text-[var(--zen-moss)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p className="text-[var(--zen-muted)] text-sm leading-relaxed">
                <strong className="text-[var(--zen-deep)]">{t('reprogramming.noteLabel')}:</strong> {t('reprogramming.note')}
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Button 
            variant="primary" 
            onClick={() => {
              const reservas = document.getElementById('reservas');
              if (reservas) reservas.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-10 py-4"
          >
            {t('reprogramming.start')}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Reprogramming;
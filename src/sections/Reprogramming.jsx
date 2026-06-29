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
    <section id="reprogramacion" className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light text-[#3E4B3F] mb-6 tracking-tight">
            {t('reprogramming.title')}
          </h2>
          <p className="text-lg text-[#5A6B5C] leading-relaxed">
            {t('reprogramming.subtitle')}
          </p>
        </div>

        {/* Main description */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-[#F0EDE5] rounded-2xl p-8 md:p-10">
            <p className="text-[#5A6B5C] leading-relaxed text-lg mb-6">
              {t('reprogramming.intro')}
            </p>
            <p className="text-[#5A6B5C] leading-relaxed">
              {t('reprogramming.description')}
            </p>
          </div>
        </div>

        {/* Process steps */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-xl font-medium text-[#3E4B3F] text-center mb-10">
            {t('reprogramming.processTitle')}
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {steps.map((step) => (
              <div key={step.number} className="relative">
                <div className="bg-white rounded-xl p-6 border border-[#CDD7C9] shadow-sm">
                  <span className="text-4xl font-light text-[#B6C2AE] mb-4 block">
                    {step.number}
                  </span>
                  <h4 className="text-lg font-medium text-[#3E4B3F] mb-3">
                    {step.title}
                  </h4>
                  <p className="text-[#5A6B5C] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Important note */}
        <div className="mt-16 max-w-2xl mx-auto">
          <div className="bg-[#F0EDE5] rounded-xl p-6 border border-[#CDD7C9]">
            <div className="flex items-start gap-4">
              <svg className="w-6 h-6 text-[#7D8C7A] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-[#5A6B5C] text-sm leading-relaxed">
                <strong>{t('reprogramming.noteLabel')}:</strong> {t('reprogramming.note')}
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Button variant="primary" onClick={() => {
            const reservas = document.getElementById('reservas');
            if (reservas) reservas.scrollIntoView({ behavior: 'smooth' });
          }}>
            {t('reprogramming.start')}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Reprogramming;
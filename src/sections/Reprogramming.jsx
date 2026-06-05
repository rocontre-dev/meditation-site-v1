import { useTranslation } from 'react-i18next';
import Button from '../components/Button';

const Reprogramming = () => {
  const { t } = useTranslation();

  const steps = [
    {
      number: '01',
      title: t('reprogramming.benefit1'),
      description: t('reprogramming.desc')
    },
    {
      number: '02',
      title: 'Exploration & Dialogue',
      description: 'Through guided communication, we explore what emerges with supportive questions and reflections.'
    },
    {
      number: '03',
      title: 'Pattern Recognition',
      description: 'Together we identify limiting beliefs and programs that arose as responses to past experiences.'
    },
    {
      number: '04',
      title: t('reprogramming.benefit2'),
      description: t('reprogramming.benefit3')
    }
  ];

  return (
    <section id="reprogramacion" className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light text-stone-800 mb-6 tracking-tight">
            {t('reprogramming.title')}
          </h2>
          <p className="text-lg text-stone-600 leading-relaxed">
            {t('reprogramming.subtitle')}
          </p>
        </div>

        {/* Main description */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-stone-50 rounded-2xl p-8 md:p-10">
            <p className="text-stone-700 leading-relaxed text-lg mb-6">
              {t('hero.subtitle')}
            </p>
            <p className="text-stone-700 leading-relaxed">
              This service provides a safe space to explore your story with conscious companionship and recognize the programs you've been operating unconsciously. It's not about healing in a medical sense, but about understanding, recognizing, and choosing more freely how you want to live.
            </p>
          </div>
        </div>

        {/* Process steps */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-xl font-medium text-stone-800 text-center mb-10">
            How does the process work?
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {steps.map((step) => (
              <div key={step.number} className="relative">
                <div className="bg-white rounded-xl p-6 border border-stone-100 shadow-sm">
                  <span className="text-4xl font-light text-amber-200 mb-4 block">
                    {step.number}
                  </span>
                  <h4 className="text-lg font-medium text-stone-800 mb-3">
                    {step.title}
                  </h4>
                  <p className="text-stone-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Important note */}
        <div className="mt-16 max-w-2xl mx-auto">
          <div className="bg-amber-50 rounded-xl p-6 border border-amber-100">
            <div className="flex items-start gap-4">
              <svg className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-amber-800 text-sm leading-relaxed">
                <strong>Important note:</strong> This is an educational and personal growth companionship service. It does not substitute psychological therapy or professional medical attention. If you're going through a moment of intense emotional crisis, we recommend seeking specialized professional support.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Button variant="primary" onClick={() => {
            const contact = document.getElementById('contacto');
            if (contact) contact.scrollIntoView({ behavior: 'smooth' });
          }}>
            {t('reprogramming.start')}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Reprogramming;
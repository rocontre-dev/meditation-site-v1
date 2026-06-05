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
    <section id="comunidad" className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image placeholder - order first on desktop */}
          <div className="order-2 lg:order-1 relative">
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-amber-100 to-stone-200 flex items-center justify-center overflow-hidden">
              <div className="text-center p-8">
                <div className="flex justify-center -space-x-4 mb-4">
                  <div className="w-16 h-16 rounded-full bg-stone-300 border-2 border-white" />
                  <div className="w-16 h-16 rounded-full bg-stone-400 border-2 border-white" />
                  <div className="w-16 h-16 rounded-full bg-stone-300 border-2 border-white" />
                  <div className="w-16 h-16 rounded-full bg-stone-400 border-2 border-white" />
                </div>
                <p className="text-stone-500 text-sm">
                  {t('community.title')}
                </p>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -z-10 -bottom-4 -left-4 w-full h-full rounded-2xl bg-stone-100" />
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl font-light text-stone-800 mb-6 tracking-tight">
              {t('community.title')}
            </h2>
            <p className="text-lg text-stone-600 leading-relaxed mb-6">
              {t('community.subtitle')}
            </p>
            <p className="text-stone-600 leading-relaxed mb-8">
              {t('hero.subtitle')}
            </p>

            {/* Benefits list */}
            <div className="space-y-3 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-amber-500 flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-stone-700">{benefit}</span>
                </div>
              ))}
            </div>

            <Button variant="primary">
              {t('community.join')}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;
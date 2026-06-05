import { useTranslation } from 'react-i18next';
import Button from '../components/Button';

const Hero = () => {
  const { t } = useTranslation();

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-stone-50 via-amber-50/30 to-white pt-16 md:pt-20">
      {/* Subtle decorative element */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-amber-100/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-stone-200/20 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main title */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-stone-800 leading-tight mb-6 tracking-tight">
          {t('hero.title')}<br className="hidden md:block" />
          <span className="font-normal">{t('hero.titleHighlight')}</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-stone-600 leading-relaxed max-w-2xl mx-auto mb-10">
          {t('hero.subtitle')}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button 
            variant="primary" 
            onClick={() => scrollToSection('cursos')}
            className="w-full sm:w-auto min-w-[180px]"
          >
            {t('hero.btnCourses')}
          </Button>
          <Button 
            variant="secondary" 
            onClick={() => scrollToSection('retiros')}
            className="w-full sm:w-auto min-w-[180px]"
          >
            {t('hero.btnRetreats')}
          </Button>
        </div>

        {/* Trust indicators */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-stone-500 text-sm">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
            </svg>
            <span>{t('hero.feature1')}</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
            </svg>
            <span>{t('hero.feature2')}</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
            </svg>
            <span>{t('hero.feature3')}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import PodcastPromoFloating from '../components/PodcastPromoFloating';

const Hero = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <section id="inicio" className="zen-hero-background zen-section relative min-h-screen flex items-center justify-center pt-24 md:pt-28">
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main title */}
        <h1 className="home-hero-title font-light text-[var(--zen-cream)] leading-tight mb-8 tracking-wide">
          {t('hero.title')}{' '}
          <br className="hidden md:block" />
          <span className="font-normal">{t('hero.titleHighlight')}</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-[var(--zen-sage)] leading-relaxed max-w-2xl mx-auto mb-12">
          {t('hero.subtitle')}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Button 
            variant="primary" 
            onClick={() => navigate('/contact')}
            className="w-full sm:w-auto min-w-[200px] px-8 py-4"
          >
            {t('hero.btnSession')}
          </Button>
          <Button 
            variant="secondary" 
            onClick={() => navigate('/podcast')}
            className="w-full sm:w-auto min-w-[200px] px-8 py-4"
          >
            {t('hero.btnResources')}
          </Button>
        </div>

        {/* Trust indicators */}
        <div className="mt-20 grid w-full grid-cols-3 items-start gap-0 text-[#3F5145] text-sm sm:flex sm:w-auto sm:flex-wrap sm:items-center sm:justify-center sm:gap-10">
          <div className="flex flex-col items-center justify-start gap-3 text-center sm:flex-row sm:text-left">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[var(--zen-deep)]">
              <svg className="w-5 h-5 text-[var(--zen-sand)]" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
              </svg>
            </div>
            <span>{t('hero.feature1')}</span>
          </div>
          <div className="flex flex-col items-center justify-start gap-3 text-center sm:flex-row sm:text-left">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[var(--zen-deep)]">
              <svg className="w-5 h-5 text-[var(--zen-sand)]" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
              </svg>
            </div>
            <span>{t('hero.feature2')}</span>
          </div>
          <div className="flex flex-col items-center justify-start gap-3 text-center sm:flex-row sm:text-left">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[var(--zen-deep)]">
              <svg className="w-5 h-5 text-[var(--zen-sand)]" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
              </svg>
            </div>
            <span>{t('hero.feature3')}</span>
          </div>
        </div>
      </div>

      {/* Floating Podcast Promo */}
      <PodcastPromoFloating />
    </section>
  );
};

export default Hero;
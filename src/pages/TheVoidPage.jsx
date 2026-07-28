import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

/**
 * The Void page — a contemplative editorial experience.
 * Designed as a magazine page of contemplation, not a wellness landing page.
 * 
 * Structure:
 * 1. Hero — The Void
 * 2. Intro — The space between stories
 * 3. Principles — Pause, Observation, Disidentification, Presence
 * 4. Not Absence — The void is not absence
 * 5. Closing — Stay a moment
 */
const TheVoidPage = () => {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = `${t('theVoid.hero.title')} | ${t('header.logo')}`;
  }, [t]);

  const principles = [
    { key: 'pause', title: t('theVoid.principles.pause.title'), text: t('theVoid.principles.pause.text') },
    { key: 'observation', title: t('theVoid.principles.observation.title'), text: t('theVoid.principles.observation.text') },
    { key: 'disidentification', title: t('theVoid.principles.disidentification.title'), text: t('theVoid.principles.disidentification.text') },
    { key: 'presence', title: t('theVoid.principles.presence.title'), text: t('theVoid.principles.presence.text') },
  ];

  return (
    <main className="bg-[var(--zen-cream)]">
      {/* ═══════════════════════════════════════════════════════════════
          1. HERO — The Void
          ═══════════════════════════════════════════════════════════════ */}
      <section
        id="the-void-hero"
        className="zen-section relative min-h-[85vh] flex items-center justify-center py-32 md:py-40 overflow-hidden"
        aria-label={t('theVoid.hero.title')}
      >
        {/* Subtle ambient background */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div
            className="absolute top-0 left-1/4 w-96 h-96 rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(182, 194, 174, 0.12) 0%, transparent 70%)',
              filter: 'blur(60px)',
            }}
          />
          <div
            className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(209, 194, 161, 0.10) 0%, transparent 70%)',
              filter: 'blur(60px)',
            }}
          />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-xs font-medium text-[var(--zen-moss)] uppercase tracking-widest mb-6">
            {t('theVoid.hero.eyebrow')}
          </span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-[var(--zen-deep)] mb-8 tracking-wide">
            {t('theVoid.hero.title')}
          </h1>
          <p className="text-xl md:text-2xl text-[var(--zen-muted)] leading-relaxed max-w-2xl mx-auto mb-10">
            {t('theVoid.hero.lead')}
          </p>
          <p className="text-base md:text-lg text-[var(--zen-moss)] leading-relaxed max-w-xl mx-auto mb-12">
            {t('theVoid.hero.intro')}
          </p>
          <a
            href="#the-void-intro"
            className="inline-flex items-center gap-3 text-[var(--zen-muted)] hover:text-[var(--zen-moss)] transition-colors duration-300 text-sm uppercase tracking-widest"
          >
            {t('theVoid.hero.cta')}
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          2. INTRO — The space between stories
          ═══════════════════════════════════════════════════════════════ */}
      <section
        id="the-void-intro"
        className="zen-section py-24 md:py-32 bg-[var(--zen-soft)]"
        aria-labelledby="intro-title"
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="intro-title" className="text-3xl md:text-4xl font-light text-[var(--zen-deep)] mb-12 tracking-wide text-center">
            {t('theVoid.intro.title')}
          </h2>
          <div className="space-y-6 text-lg text-[var(--zen-muted)] leading-relaxed">
            <p>{t('theVoid.intro.paragraph1')}</p>
            <p>{t('theVoid.intro.paragraph2')}</p>
            <p className="text-[var(--zen-deep)] font-medium">{t('theVoid.intro.paragraph3')}</p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          3. PRINCIPLES — Pause, Observation, Disidentification, Presence
          ═══════════════════════════════════════════════════════════════ */}
      <section
        className="zen-section py-24 md:py-32 bg-[var(--zen-cream)]"
        aria-labelledby="principles-title"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="principles-title" className="text-3xl md:text-4xl font-light text-[var(--zen-deep)] mb-16 tracking-wide text-center">
            {t('theVoid.principles.title')}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-16 gap-x-12">
            {principles.map((principle) => (
              <div key={principle.key} className="md:pt-4">
                <h3 className="text-2xl md:text-3xl font-light text-[var(--zen-deep)] mb-4 tracking-wide">
                  {principle.title}
                </h3>
                <p className="text-lg text-[var(--zen-muted)] leading-relaxed max-w-md">
                  {principle.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          4. NOT ABSENCE — The void is not absence
          ═══════════════════════════════════════════════════════════════ */}
      <section
        className="zen-section py-24 md:py-32 bg-[var(--zen-soft)]"
        aria-labelledby="not-absence-title"
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="not-absence-title" className="text-3xl md:text-4xl font-light text-[var(--zen-deep)] mb-12 tracking-wide text-center">
            {t('theVoid.notAbsence.title')}
          </h2>
          <div className="space-y-6 text-lg text-[var(--zen-muted)] leading-relaxed">
            <p>{t('theVoid.notAbsence.paragraph1')}</p>
            <p>{t('theVoid.notAbsence.paragraph2')}</p>
            <p>{t('theVoid.notAbsence.paragraph3')}</p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          5. CLOSING — Stay a moment
          ═══════════════════════════════════════════════════════════════ */}
      <section
        className="zen-section py-32 md:py-40 bg-[var(--zen-cream)] text-center"
        aria-labelledby="closing-title"
      >
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="closing-title" className="text-3xl md:text-4xl font-light text-[var(--zen-deep)] mb-10 tracking-wide">
            {t('theVoid.closing.title')}
          </h2>
          <div className="space-y-6 text-lg text-[var(--zen-muted)] leading-relaxed mb-12">
            <p>{t('theVoid.closing.paragraph1')}</p>
            <p>{t('theVoid.closing.paragraph2')}</p>
          </div>
          <Link
            to="/meditation"
            className="inline-flex items-center gap-3 text-[var(--zen-moss)] hover:text-[var(--zen-deep)] transition-colors duration-300 text-sm uppercase tracking-widest border-b border-[var(--zen-moss)] pb-1"
          >
            {t('theVoid.closing.cta')}
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default TheVoidPage;
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import EditorialContainer from '../components/editorial/EditorialContainer';
import EditorialSection from '../components/editorial/EditorialSection';
import EditorialTitle from '../components/editorial/EditorialTitle';
import EditorialDivider from '../components/editorial/EditorialDivider';

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
        className="zen-section relative min-h-[85vh] flex items-center justify-center py-24 md:py-32 overflow-hidden"
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

        <EditorialContainer size="content">
          <div className="text-center">
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
        </EditorialContainer>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          2. INTRO — The space between stories
          ═══════════════════════════════════════════════════════════════ */}
      <EditorialSection tone="soft" id="the-void-intro">
        <EditorialContainer size="content">
          <EditorialTitle as="h2" size="h2" className="mb-12 text-center">
            {t('theVoid.intro.title')}
          </EditorialTitle>
          <div className="space-y-6 text-lg text-[var(--zen-muted)] leading-relaxed">
            <p>{t('theVoid.intro.paragraph1')}</p>
            <p>{t('theVoid.intro.paragraph2')}</p>
            <p className="text-[var(--zen-deep)] font-medium">{t('theVoid.intro.paragraph3')}</p>
          </div>
        </EditorialContainer>
      </EditorialSection>

      <EditorialDivider decorative />

      {/* ═══════════════════════════════════════════════════════════════
          3. PRINCIPLES — Pause, Observation, Disidentification, Presence
          ═══════════════════════════════════════════════════════════════ */}
      <EditorialSection tone="paper">
        <EditorialContainer size="wide">
          <EditorialTitle as="h2" size="h2" className="mb-16 text-center">
            {t('theVoid.principles.title')}
          </EditorialTitle>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-16 gap-x-12">
            {principles.map((principle) => (
              <div key={principle.key} className="md:pt-4">
                <EditorialTitle as="h3" size="h3" className="mb-4">
                  {principle.title}
                </EditorialTitle>
                <p className="text-lg text-[var(--zen-muted)] leading-relaxed max-w-md">
                  {principle.text}
                </p>
              </div>
            ))}
          </div>
        </EditorialContainer>
      </EditorialSection>

      <EditorialDivider decorative />

      {/* ═══════════════════════════════════════════════════════════════
          4. NOT ABSENCE — The void is not absence
          ═══════════════════════════════════════════════════════════════ */}
      <EditorialSection tone="soft">
        <EditorialContainer size="content">
          <EditorialTitle as="h2" size="h2" className="mb-12 text-center">
            {t('theVoid.notAbsence.title')}
          </EditorialTitle>
          <div className="space-y-6 text-lg text-[var(--zen-muted)] leading-relaxed">
            <p>{t('theVoid.notAbsence.paragraph1')}</p>
            <p>{t('theVoid.notAbsence.paragraph2')}</p>
            <p>{t('theVoid.notAbsence.paragraph3')}</p>
          </div>
        </EditorialContainer>
      </EditorialSection>

      <EditorialDivider decorative />

      {/* ═══════════════════════════════════════════════════════════════
          5. CLOSING — Stay a moment
          ═══════════════════════════════════════════════════════════════ */}
      <EditorialSection tone="paper" spacing="default">
        <EditorialContainer size="content">
          <EditorialTitle as="h2" size="h2" className="mb-10 text-center">
            {t('theVoid.closing.title')}
          </EditorialTitle>
          <div className="space-y-6 text-lg text-[var(--zen-muted)] leading-relaxed mb-12">
            <p>{t('theVoid.closing.paragraph1')}</p>
            <p>{t('theVoid.closing.paragraph2')}</p>
          </div>
          <div className="text-center">
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
        </EditorialContainer>
      </EditorialSection>
    </main>
  );
};

export default TheVoidPage;
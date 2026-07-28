import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  EditorialContainer,
  EditorialSection,
  EditorialTitle,
  EditorialDivider,
  EditorialQuote,
  EditorialPrinciples,
} from '../components/editorial';

/**
 * The Void page — a contemplative editorial experience.
 * Designed as a magazine page of contemplation, not a wellness landing page.
 * 
 * Structure:
 * 1. Hero — The Void
 * 2. Intro — The space between stories
 * 3. Quote — EditorialQuote
 * 4. Principles — EditorialPrinciples (3 items)
 * 5. Not Absence — The void is not absence
 * 6. Closing — Stay a moment
 */
const TheVoidPage = () => {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = `${t('theVoid.hero.title')} | ${t('header.logo')}`;
  }, [t]);

  // Build principles array from existing i18n keys (first 3 only)
  const principlesItems = [
    {
      title: t('theVoid.principles.pause.title'),
      description: t('theVoid.principles.pause.description', { defaultValue: t('theVoid.principles.pause.text') })
    },
    {
      title: t('theVoid.principles.observation.title'),
      description: t('theVoid.principles.observation.description', { defaultValue: t('theVoid.principles.observation.text') })
    },
    {
      title: t('theVoid.principles.disidentification.title'),
      description: t('theVoid.principles.disidentification.description', { defaultValue: t('theVoid.principles.disidentification.text') })
    }
  ];

  // Check if quote translations exist
  const quoteText = t('theVoid.quote.text', { defaultValue: null });
  const quoteAuthor = t('theVoid.quote.author', { defaultValue: null });

  return (
    <main className="bg-[var(--zen-cream)]">
      {/* ═══════════════════════════════════════════════════════════════
          1. HERO — The Void
          ═══════════════════════════════════════════════════════════════ */}
      <section
        id="the-void-hero"
        className="zen-section relative min-h-screen flex items-center justify-center py-24 md:py-32"
        aria-label={t('theVoid.hero.title')}
      >
        <EditorialContainer size="content">
          <div className="text-center">
            {/* Enso placeholder temporal */}
            <div className="editorial-enso-placeholder" aria-hidden="true">
              <span>○</span>
            </div>

            {/* Título principal */}
            <h1 className="editorial-display mb-6">
              {t('theVoid.hero.title')}
            </h1>

            {/* Tagline */}
            <p className="editorial-tagline mb-10">
              {t('theVoid.hero.lead')}
            </p>

            {/* Scroll link */}
            <a
              href="#the-void-intro"
              className="editorial-scroll-link"
            >
              ↓ {t('theVoid.hero.scroll')}
            </a>
          </div>
        </EditorialContainer>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          2. INTRO — The space between stories
          ═══════════════════════════════════════════════════════════════ */}
      <section id="the-void-intro">
        <EditorialSection tone="soft">
          <EditorialContainer size="content" style={{ maxWidth: '720px' }}>
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
      </section>

      <EditorialDivider decorative />

      {/* ═══════════════════════════════════════════════════════════════
          3. QUOTE — EditorialQuote
          ═══════════════════════════════════════════════════════════════ */}
      {quoteText && (
        <EditorialQuote
          text={quoteText}
          author={quoteAuthor}
        />
      )}

      <EditorialDivider decorative />

      {/* ═══════════════════════════════════════════════════════════════
          4. PRINCIPLES — EditorialPrinciples
          ═══════════════════════════════════════════════════════════════ */}
      <EditorialPrinciples items={principlesItems} />

      <EditorialDivider decorative />

      {/* ═══════════════════════════════════════════════════════════════
          5. NOT ABSENCE — The void is not absence
          ═══════════════════════════════════════════════════════════════ */}
      <EditorialSection tone="soft">
        <EditorialContainer size="content" style={{ maxWidth: '720px' }}>
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
          6. CLOSING — Stay a moment
          ═══════════════════════════════════════════════════════════════ */}
      <EditorialSection tone="paper" spacing="default">
        <EditorialContainer size="content" style={{ maxWidth: '720px' }}>
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
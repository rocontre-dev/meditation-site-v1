import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  EditorialContainer,
  EditorialSection,
  EditorialTitle,
  EditorialDivider,
} from '../components/editorial';

// Concept order for the Manifestation Map. Names, zones and descriptions all
// come from the translation resources; these are lookup keys only.
const mapKeys = [
  'medios',
  'carisma',
  'capacidad',
  'orientacion',
  'eliminacion',
  'asimilacion',
  'impulso',
  'necesidades',
  'posibilidades',
  'forma',
  'sustancia',
];

const stageKeys = ['historia', 'patron', 'pregunta', 'modificacion', 'integracion'];
const benefitKeys = ['benefit1', 'benefit2', 'benefit3', 'benefit4', 'benefit5', 'benefit6', 'benefit7'];
const lineNums = [1, 2, 3, 4, 5];

const TheVoidPage = () => {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = t('theVoid.finale.brand') + ' | ' + t('header.logo');
  }, [t]);

  return (
    <main className="bg-[var(--zen-cream)]">
      {/* 1. HERO */}
      <section
        id="the-void-hero"
        className="zen-section relative min-h-screen flex items-center justify-center py-24 md:py-32"
        aria-label={t('theVoid.hero.title')}
      >
        <EditorialContainer size="content">
          <div className="text-center">
            <div className="editorial-hero__mark" aria-hidden="true">
              <span>○</span>
            </div>
            <h1 className="editorial-display editorial-hero__title">
              {t('theVoid.hero.title')}
            </h1>
            <p className="editorial-tagline editorial-hero__lead">
              {t('theVoid.hero.lead')}
            </p>
            <a href="#the-void-intro" className="editorial-scroll-link">
              ↓ {t('theVoid.hero.scroll')}
            </a>
          </div>
        </EditorialContainer>
      </section>

      {/* 2. INTRO */}
      <section id="the-void-intro">
        <EditorialSection tone="soft">
          <EditorialContainer size="content">
            <div className="editorial-prose">
              <p className="editorial-prose__lead">{t('theVoid.intro.paragraph1')}</p>
              <p>{t('theVoid.intro.ladderLead')}</p>
              <div className="editorial-ladder">
                {lineNums.map((n) => (
                  <p className="editorial-ladder__line" key={n}>
                    {t('theVoid.intro.ladderLine' + n)}
                  </p>
                ))}
              </div>
              <p>{t('theVoid.intro.paragraph2')}</p>
              <p>{t('theVoid.intro.paragraph3')}</p>
              <p className="editorial-prose__em">{t('theVoid.intro.paragraph4')}</p>
            </div>
          </EditorialContainer>
        </EditorialSection>
      </section>

      <EditorialDivider decorative />

      {/* 3. EL TRABAJO ES TUYO */}
      <EditorialSection tone="paper">
        <EditorialContainer size="content">
          <EditorialTitle as="h2" size="h2" className="editorial-title mb-8 text-center">
            {t('theVoid.work.title')}
          </EditorialTitle>
          <div className="editorial-prose">
            <p className="editorial-prose__lead">{t('theVoid.work.paragraph1')}</p>
            <p>{t('theVoid.work.paragraph2')}</p>
            <p>{t('theVoid.work.paragraph3')}</p>
            <p>{t('theVoid.work.paragraph4')}</p>
          </div>
          <div className="editorial-ladder">
            <p className="editorial-ladder__line">{t('theVoid.work.questionsLead')}</p>
            <p className="editorial-ladder__line">{t('theVoid.work.questionsLine1')}</p>
            <p className="editorial-ladder__line">{t('theVoid.work.questionsLine2')}</p>
            <p className="editorial-ladder__line">{t('theVoid.work.questionsLine3')}</p>
          </div>
          <div className="editorial-prose">
            <p className="editorial-prose__em">{t('theVoid.work.closing')}</p>
          </div>
        </EditorialContainer>
      </EditorialSection>

      <EditorialDivider decorative />

      {/* 4. UNA TECNOLOGÍA DE LA CONCIENCIA */}
      <EditorialSection tone="soft">
        <EditorialContainer size="content">
          <EditorialTitle as="h2" size="h2" className="editorial-title mb-8 text-center">
            {t('theVoid.technology.title')}
          </EditorialTitle>
          <div className="editorial-prose">
            <p>{t('theVoid.technology.paragraph1')}</p>
            <p className="editorial-prose__lead">{t('theVoid.technology.paragraph2')}</p>
            <p>{t('theVoid.technology.paragraph3')}</p>
            <p>{t('theVoid.technology.paragraph4')}</p>
            <p className="editorial-prose__em">{t('theVoid.technology.paragraph5')}</p>
          </div>
        </EditorialContainer>
      </EditorialSection>

      <EditorialDivider decorative />

      {/* 5. MAPA DE MANIFESTACIÓN */}
      <EditorialSection tone="paper">
        <EditorialContainer size="content">
          <EditorialTitle as="h2" size="h2" className="editorial-title mb-4 text-center">
            {t('theVoid.map.title')}
          </EditorialTitle>
        </EditorialContainer>
        <EditorialContainer size="wide">
          <div className="editorial-map__grid">
            {mapKeys.map((key) => (
              <article className="editorial-map__item" key={key}>
                <h3 className="editorial-map__name">{t('theVoid.map.' + key + '.name')}</h3>
                <p className="editorial-map__zone">{t('theVoid.map.' + key + '.zone')}</p>
                <p className="editorial-map__desc">{t('theVoid.map.' + key + '.description')}</p>
              </article>
            ))}
          </div>
          <p className="editorial-map__note">{t('theVoid.map.disclaimer')}</p>
        </EditorialContainer>
      </EditorialSection>

      <EditorialDivider decorative />

      {/* 6. ¿CÓMO FUNCIONA? */}
      <EditorialSection tone="soft">
        <EditorialContainer size="content">
          <EditorialTitle as="h2" size="h2" className="editorial-title mb-8 text-center">
            {t('theVoid.process.title')}
          </EditorialTitle>
          <div className="editorial-process">
            {stageKeys.map((key, i) => (
              <article className="editorial-process__stage" key={key}>
                <span className="editorial-process__numeral" aria-hidden="true">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="editorial-process__name">{t('theVoid.process.stages.' + key + '.name')}</h3>
                <div className="editorial-prose">
                  <p>{t('theVoid.process.stages.' + key + '.paragraph1')}</p>
                  {key === 'patron' && (
                    <>
                      <div className="editorial-process__questions">
                        {[1, 2, 3, 4, 5, 6].map((n) => (
                          <p key={n}>{t('theVoid.process.stages.patron.question' + n)}</p>
                        ))}
                      </div>
                      <p>{t('theVoid.process.stages.patron.detailLead')}</p>
                      <p className="editorial-process__detail">{t('theVoid.process.stages.patron.detail')}</p>
                    </>
                  )}
                  {/* The 'patron' stage has no paragraph2: its authoritative
                      structure is paragraph1 → questions → detailLead → detail. */}
                  {key !== 'patron' && (
                    <p>{t('theVoid.process.stages.' + key + '.paragraph2')}</p>
                  )}
                  {key === 'modificacion' && (
                    <p>{t('theVoid.process.stages.modificacion.paragraph3')}</p>
                  )}
                </div>
              </article>
            ))}
          </div>
        </EditorialContainer>
      </EditorialSection>

      <EditorialDivider decorative />

      {/* 7. DARK STATEMENT */}
      <section className="editorial-statement">
        <EditorialContainer size="content">
          <span className="editorial-eyebrow editorial-eyebrow--void text-center">
            {t('theVoid.statement.title')}
          </span>
          <div className="editorial-prose">
            <p className="editorial-prose__lead">{t('theVoid.statement.paragraph1')}</p>
          </div>
          <p className="editorial-statement__premise">{t('theVoid.statement.premise')}</p>
          <div className="editorial-ladder">
            <p className="editorial-ladder__line">{t('theVoid.statement.ladderLead')}</p>
            <p className="editorial-ladder__line">{t('theVoid.statement.ladderLine1')}</p>
            <p className="editorial-ladder__line">{t('theVoid.statement.ladderLine2')}</p>
            <p className="editorial-ladder__line">{t('theVoid.statement.ladderLine3')}</p>
            <p className="editorial-ladder__line">{t('theVoid.statement.ladderLine4')}</p>
          </div>
          <div className="editorial-prose">
            <p className="editorial-prose__em">{t('theVoid.statement.paragraph2')}</p>
            <p>{t('theVoid.statement.paragraph3')}</p>
          </div>
        </EditorialContainer>
      </section>

      {/* 8. MEMBERSHIP + PRICE + BENEFITS */}
      <EditorialSection tone="paper">
        <EditorialContainer size="content">
          <EditorialTitle as="h2" size="h2" className="editorial-title mb-8 text-center">
            {t('theVoid.membership.title')}
          </EditorialTitle>
          <div className="editorial-prose">
            <p>{t('theVoid.membership.paragraph1')}</p>
            <p>{t('theVoid.membership.paragraph2')}</p>
            <p className="editorial-prose__lead">{t('theVoid.membership.paragraph3')}</p>
            <p className="editorial-price">{t('theVoid.membership.price')}</p>
            <p className="editorial-prose__lead">{t('theVoid.membership.includesLabel')}</p>
            <ul className="editorial-benefits">
              {benefitKeys.map((k) => (
                <li key={k}>
                  <span className="editorial-benefits__marker" aria-hidden="true">—</span>
                  <span>{t('theVoid.membership.' + k)}</span>
                </li>
              ))}
            </ul>
            <p className="editorial-prose__em">{t('theVoid.membership.paragraph4')}</p>
            <p>{t('theVoid.membership.paragraph5')}</p>
            <p>{t('theVoid.membership.paragraph6')}</p>
          </div>
        </EditorialContainer>
      </EditorialSection>

      {/* 9. FINALE */}
      <EditorialSection tone="soft">
        <EditorialContainer size="content">
          <div className="text-center">
            <p className="editorial-finale__brand">{t('theVoid.finale.brand')}</p>
            <div className="editorial-finale__lines">
              <p className="editorial-finale__line">{t('theVoid.finale.line1')}</p>
              <p className="editorial-finale__line">{t('theVoid.finale.line2')}</p>
              <p className="editorial-finale__line">{t('theVoid.finale.line3')}</p>
              <p className="editorial-finale__line">{t('theVoid.finale.line4')}</p>
            </div>
            <p className="editorial-finale__price">{t('theVoid.finale.price')}</p>
            <div>
              <Link to="/contact" className="editorial-cta">
                {t('theVoid.finale.cta')}
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </EditorialContainer>
      </EditorialSection>
    </main>
  );
};

export default TheVoidPage;
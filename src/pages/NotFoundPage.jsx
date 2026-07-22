import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Button from '../components/Button';

/**
 * 404 Not Found page - displayed for unknown routes.
 */
const NotFoundPage = () => {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = `404 - ${t('header.logo')}`;
  }, [t]);

  return (
    <section className="zen-section py-32 md:py-40 bg-[var(--zen-cream)]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-6xl md:text-8xl font-light text-[var(--zen-sage)] mb-8 tracking-wider">
          404
        </h1>
        <h2 className="text-2xl md:text-3xl font-light text-[var(--zen-deep)] mb-6 tracking-wide">
          {t('notFound.title')}
        </h2>
        <p className="text-lg text-[var(--zen-muted)] leading-relaxed max-w-xl mx-auto mb-12">
          {t('notFound.subtitle')}
        </p>
        <Button
          variant="primary"
          as={Link}
          to="/"
          className="px-8 py-3"
        >
          {t('notFound.backHome')}
        </Button>
      </div>
    </section>
  );
};

export default NotFoundPage;
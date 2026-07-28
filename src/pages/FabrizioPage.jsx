import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import About from '../sections/About';

/**
 * Fabrizio page - the About section.
 */
const FabrizioPage = () => {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = `${t('header.fabrizio')} | ${t('header.logo')}`;
  }, [t]);

  return (
    <>
      <About />
    </>
  );
};

export default FabrizioPage;
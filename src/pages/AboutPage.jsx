import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import About from '../sections/About';

/**
 * About page - displays the full About section.
 */
const AboutPage = () => {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = `${t('header.about')} | ${t('header.logo')}`;
  }, [t]);

  return (
    <>
      <About />
    </>
  );
};

export default AboutPage;
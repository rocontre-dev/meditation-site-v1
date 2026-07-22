import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Contact from '../sections/Contact';

/**
 * Contact page - displays the full Contact section.
 */
const ContactPage = () => {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = `${t('header.contact')} | ${t('header.logo')}`;
  }, [t]);

  return (
    <>
      <Contact />
    </>
  );
};

export default ContactPage;
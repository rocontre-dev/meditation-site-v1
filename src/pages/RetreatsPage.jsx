import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Retreats from '../sections/Retreats';

/**
 * Retreats page - contains retreat-related sections.
 */
const RetreatsPage = () => {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = `${t('header.retreats')} | ${t('header.logo')}`;
  }, [t]);

  return (
    <>
      <Retreats />
    </>
  );
};

export default RetreatsPage;
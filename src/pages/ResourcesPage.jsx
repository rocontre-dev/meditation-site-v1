import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Resources from '../sections/Resources';

/**
 * Resources page - displays the full Resources section.
 */
const ResourcesPage = () => {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = `${t('header.resources')} | ${t('header.logo')}`;
  }, [t]);

  return (
    <>
      <Resources />
    </>
  );
};

export default ResourcesPage;
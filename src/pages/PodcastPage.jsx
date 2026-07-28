import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import FeaturedPodcast from '../sections/FeaturedPodcast';
import Resources from '../sections/Resources';

/**
 * Podcast page - contains podcast and resources sections.
 */
const PodcastPage = () => {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = `${t('header.podcast')} | ${t('header.logo')}`;
  }, [t]);

  return (
    <>
      <FeaturedPodcast />
      <Resources />
    </>
  );
};

export default PodcastPage;
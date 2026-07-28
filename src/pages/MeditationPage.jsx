import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Services from '../sections/Services';
import OnlineCourse from '../sections/OnlineCourse';
import Community from '../sections/Community';
import Reprogramming from '../sections/Reprogramming';

/**
 * Meditation page - contains all meditation-related sections.
 * Includes: Services, Online Course, Community, and Reprogramming.
 */
const MeditationPage = () => {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = `${t('header.meditation')} | ${t('header.logo')}`;
  }, [t]);

  return (
    <>
      <Services />
      <OnlineCourse />
      <Community />
      <Reprogramming />
    </>
  );
};

export default MeditationPage;
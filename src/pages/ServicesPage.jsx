import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Services from '../sections/Services';
import OnlineCourse from '../sections/OnlineCourse';
import Community from '../sections/Community';
import Retreats from '../sections/Retreats';
import Reprogramming from '../sections/Reprogramming';

/**
 * Services page - displays all service-related sections:
 * - Services (main offerings)
 * - Online Course
 * - Community
 * - Retreats
 * - Reprogramming
 */
const ServicesPage = () => {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = `${t('header.services')} | ${t('header.logo')}`;
  }, [t]);

  return (
    <>
      <Services />
      <OnlineCourse />
      <Community />
      <Retreats />
      <Reprogramming />
    </>
  );
};

export default ServicesPage;
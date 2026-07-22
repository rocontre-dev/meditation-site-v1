import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Bookings from '../sections/Bookings';

/**
 * Bookings page - displays the full Bookings section.
 */
const BookingsPage = () => {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = `${t('header.bookings')} | ${t('header.logo')}`;
  }, [t]);

  return (
    <>
      <Bookings />
    </>
  );
};

export default BookingsPage;
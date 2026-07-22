import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Button from '../Button';

/**
 * Booking CTA section for Home page.
 * Concise call-to-action linking to Bookings page.
 */
const BookingCallout = () => {
  const { t } = useTranslation();

  return (
    <section className="zen-section py-24 md:py-32 bg-[var(--zen-cream)]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-light text-[var(--zen-deep)] mb-6 tracking-wide">
          {t('home.bookingHeading')}
        </h2>
        <p className="text-lg text-[var(--zen-muted)] max-w-2xl mx-auto leading-relaxed mb-10">
          {t('home.bookingSubtitle')}
        </p>
        <Button
          variant="accent"
          as={Link}
          to="/bookings"
          className="px-10 py-4"
        >
          {t('home.bookingCta')}
        </Button>
      </div>
    </section>
  );
};

export default BookingCallout;
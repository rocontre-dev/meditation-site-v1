import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Button from '../Button';

const whatsappUrl = 'https://wa.me/5213331067934';

/**
 * Booking CTA section for Home page.
 * Concise call-to-action linking to Bookings page.
 */
const BookingCallout = () => {
  const { t } = useTranslation();

  return (
    <section className="zen-section pt-8 pb-16 sm:py-16 md:py-20 home-editorial-surface">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="home-section-title font-light text-[var(--zen-deep)] mb-6 tracking-wide">
          {t('home.bookingHeading')}
        </h2>
        <p className="home-section-lead text-[var(--zen-muted)] max-w-2xl mx-auto leading-relaxed mb-10">
          {t('home.bookingSubtitle')}
        </p>
        <div className="flex flex-col items-center gap-4">
          <Button
            variant="accent"
            as={Link}
            to="/contact"
            className="px-10 py-4"
          >
            {t('home.bookingCta')}
          </Button>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-10 py-4 rounded-full font-medium transition-all duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[var(--zen-cream)] bg-[var(--zen-cream)]/70 text-[var(--zen-deep)] border-2 border-[var(--zen-moss)] hover:bg-[var(--zen-sage)]/20 focus:ring-[var(--zen-moss)] backdrop-blur-sm"
          >
            <svg className="w-[18px] h-[18px] flex-shrink-0" fill="currentColor" viewBox="0 0 448 512" aria-hidden="true">
              <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-221.7 99.6-221.7 222 0 39.1 10.2 77.3 29.6 111L.3 480l117.7-30.9c32.4 17.7 68.9 27 106 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.3-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.8l-6.7-4-69.8 18.3L72 359.1l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.7-186.6 184.7zm101.2-138.2c-5.5-2.8-32.8-16.1-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
            </svg>
            {t('home.contactHeading')}
          </a>
        </div>
      </div>
    </section>
  );
};

export default BookingCallout;
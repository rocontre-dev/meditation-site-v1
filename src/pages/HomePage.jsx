import Hero from '../sections/Hero';
import FeaturedPodcast from '../sections/FeaturedPodcast';
import OnlineCourse from '../sections/OnlineCourse';
import AboutPreview from '../components/home/AboutPreview';
import ServicesPreview from '../components/home/ServicesPreview';
import RetreatsPreview from '../components/home/RetreatsPreview';
import ResourcesPreview from '../components/home/ResourcesPreview';
import BookingCallout from '../components/home/BookingCallout';
import ContactCallout from '../components/home/ContactCallout';

/**
 * Home page - enriched landing page with curated previews.
 * Contains 10 sections:
 * 1. Hero
 * 2. About Preview
 * 3. Services Preview
 * 4. Online Course Feature
 * 5. Retreats Preview
 * 6. Featured Podcast
 * 7. Resources Preview
 * 8. Community Preview (via FeaturedPodcast)
 * 9. Booking CTA
 * 10. Contact CTA
 *
 * Does NOT include full About, Services, Resources, Bookings or Contact sections.
 */
const HomePage = () => {
  return (
    <>
      {/* 1. Hero */}
      <Hero />

      {/* 2. About Preview */}
      <AboutPreview />

      {/* 3. Services Preview */}
      <ServicesPreview />

      {/* 4. Online Course Feature */}
      <OnlineCourse />

      {/* 5. Retreats Preview */}
      <RetreatsPreview />

      {/* 6. Featured Podcast */}
      <FeaturedPodcast />

      {/* 7. Resources Preview */}
      <ResourcesPreview />

      {/* 8. Community Preview - integrated via FeaturedPodcast above */}

      {/* 9. Booking CTA */}
      <BookingCallout />

      {/* 10. Contact CTA */}
      <ContactCallout />
    </>
  );
};

export default HomePage;
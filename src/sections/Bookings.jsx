import { useTranslation } from 'react-i18next';
import Card from '../components/Card';
import Button from '../components/Button';

const Bookings = () => {
  const { t } = useTranslation();

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const bookings = [
    {
      id: 'consulta',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
      title: t('bookings.consultaTitle'),
      description: t('bookings.consultaDesc'),
      action: () => scrollToSection('contacto'),
      buttonText: t('bookings.consultaButton'),
    },
    {
      id: 'sesion',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: t('bookings.sesionTitle'),
      description: t('bookings.sesionDesc'),
      action: () => scrollToSection('contacto'),
      buttonText: t('bookings.sesionButton'),
    },
    {
      id: 'actividades',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      title: t('bookings.actividadesTitle'),
      description: t('bookings.actividadesDesc'),
      action: () => scrollToSection('contacto'),
      buttonText: t('bookings.actividadesButton'),
    },
  ];

  return (
    <section id="reservas" className="zen-section py-24 md:py-32 bg-[var(--zen-cream)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-light text-[var(--zen-deep)] mb-6 tracking-wide">
            {t('bookings.title')}
          </h2>
          <p className="text-lg text-[var(--zen-muted)] max-w-2xl mx-auto leading-relaxed mb-6">
            {t('bookings.subtitle')}
          </p>
          <p className="text-[var(--zen-moss)] max-w-xl mx-auto leading-relaxed">
            {t('bookings.description')}
          </p>
        </div>

        {/* Bookings grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {bookings.map((booking) => (
            <Card key={booking.id} className="flex flex-col h-full zen-float">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[var(--zen-sand)] mb-6">
                <div className="text-[var(--zen-moss)]">
                  {booking.icon}
                </div>
              </div>
              <h3 className="text-xl font-medium text-[var(--zen-deep)] mb-4">
                {booking.title}
              </h3>
              <p className="text-[var(--zen-muted)] leading-relaxed flex-grow">
                {booking.description}
              </p>
              <div className="mt-6">
                <Button
                  variant="primary"
                  onClick={booking.action}
                  className="w-full px-4 py-3 text-sm"
                >
                  {booking.buttonText}
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Bookings;
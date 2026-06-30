import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Button from '../components/Button';

const Contact = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real implementation, this would send data to a backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
    // Reset form after submission
    setTimeout(() => {
      setFormData({ name: '', email: '', service: '', message: '' });
      setSubmitted(false);
    }, 5000);
  };

  return (
    <section id="contacto" className="zen-section py-24 md:py-32 bg-[var(--zen-soft)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-[var(--zen-deep)] mb-6 tracking-wide">
              {t('contact.title')}
            </h2>
            <p className="text-lg text-[var(--zen-muted)] leading-relaxed">
              {t('contact.subtitle')}
            </p>
          </div>

          {/* Form */}
          <div className="bg-[var(--zen-cream)] rounded-[var(--zen-radius-2xl)] p-10 md:p-12 border border-[var(--zen-border)] shadow-[var(--zen-shadow-medium)]">
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-[var(--zen-sand)] flex items-center justify-center">
                  <svg className="w-10 h-10 text-[var(--zen-moss)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-[var(--zen-deep)] mb-3">
                  {t('contact.success')}
                </h3>
                <p className="text-[var(--zen-muted)]">
                  {t('contact.successMessage')}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label 
                    htmlFor="name" 
                    className="block text-sm font-medium text-[var(--zen-deep)] mb-2"
                  >
                    {t('contact.name')}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-[var(--zen-radius-lg)] border border-[var(--zen-border)] bg-[var(--zen-soft)] focus:border-[var(--zen-moss)] focus:ring-2 focus:ring-[var(--zen-moss)]/20 outline-none zen-transition"
                    placeholder={t('contact.name')}
                  />
                </div>

                {/* Email */}
                <div>
                  <label 
                    htmlFor="email" 
                    className="block text-sm font-medium text-[var(--zen-deep)] mb-2"
                  >
                    {t('contact.emailLabel')}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-[var(--zen-radius-lg)] border border-[var(--zen-border)] bg-[var(--zen-soft)] focus:border-[var(--zen-moss)] focus:ring-2 focus:ring-[var(--zen-moss)]/20 outline-none zen-transition"
                    placeholder={t('contact.emailPlaceholder')}
                  />
                </div>

                {/* Service */}
                <div>
                  <label 
                    htmlFor="service" 
                    className="block text-sm font-medium text-[var(--zen-deep)] mb-2"
                  >
                    {t('contact.serviceLabel')}
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-[var(--zen-radius-lg)] border border-[var(--zen-border)] bg-[var(--zen-soft)] focus:border-[var(--zen-moss)] focus:ring-2 focus:ring-[var(--zen-moss)]/20 outline-none zen-transition"
                  >
                    <option value="">{t('contact.servicePlaceholder')}</option>
                    <option value="curso">{t('onlineCourse.title')}</option>
                    <option value="acompanamiento">{t('services.coachingTitle')}</option>
                    <option value="comunidad">{t('community.title')}</option>
                    <option value="retiro">{t('retreats.title')}</option>
                    <option value="reprogramacion">{t('reprogramming.title')}</option>
                    <option value="otro">{t('contact.serviceOther')}</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label 
                    htmlFor="message" 
                    className="block text-sm font-medium text-[var(--zen-deep)] mb-2"
                  >
                    {t('contact.message')}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-[var(--zen-radius-lg)] border border-[var(--zen-border)] bg-[var(--zen-soft)] focus:border-[var(--zen-moss)] focus:ring-2 focus:ring-[var(--zen-moss)]/20 outline-none zen-transition resize-none"
                    placeholder={t('contact.message')}
                  />
                </div>

                {/* Submit button */}
                <Button 
                  type="submit" 
                  variant="primary" 
                  className="w-full px-10 py-4"
                >
                  {t('contact.send')}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
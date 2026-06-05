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
    <section id="contacto" className="py-20 md:py-28 bg-[#F0EDE5]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-light text-[#3E4B3F] mb-4 tracking-tight">
              {t('contact.title')}
            </h2>
            <p className="text-lg text-[#5A6B5C] leading-relaxed">
              {t('contact.subtitle')}
            </p>
          </div>

          {/* Form */}
          <div className="bg-white rounded-2xl p-8 md:p-10 shadow-sm border border-[#CDD7C9]">
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#CDD7C9] flex items-center justify-center">
                  <svg className="w-8 h-8 text-[#5F6B5C]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-[#3E4B3F] mb-2">
                  {t('contact.success')}
                </h3>
                <p className="text-[#5A6B5C]">
                  We'll respond as soon as possible.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label 
                    htmlFor="name" 
                    className="block text-sm font-medium text-[#3E4B3F] mb-2"
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
                    className="w-full px-4 py-3 rounded-lg border border-[#CDD7C9] focus:border-[#7D8C7A] focus:ring-2 focus:ring-[#CDD7C9] outline-none transition-all"
                    placeholder={t('contact.name')}
                  />
                </div>

                {/* Email */}
                <div>
                  <label 
                    htmlFor="email" 
                    className="block text-sm font-medium text-[#3E4B3F] mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-[#CDD7C9] focus:border-[#7D8C7A] focus:ring-2 focus:ring-[#CDD7C9] outline-none transition-all"
                    placeholder="your@email.com"
                  />
                </div>

                {/* Service */}
                <div>
                  <label 
                    htmlFor="service" 
                    className="block text-sm font-medium text-[#3E4B3F] mb-2"
                  >
                    Service of interest
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-[#CDD7C9] focus:border-[#7D8C7A] focus:ring-2 focus:ring-[#CDD7C9] outline-none transition-all bg-white"
                  >
                    <option value="">Select a service</option>
                    <option value="curso">{t('onlineCourse.title')}</option>
                    <option value="acompanamiento">{t('services.coachingTitle')}</option>
                    <option value="comunidad">{t('community.title')}</option>
                    <option value="retiro">{t('retreats.title')}</option>
                    <option value="reprogramacion">{t('reprogramming.title')}</option>
                    <option value="otro">Other</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label 
                    htmlFor="message" 
                    className="block text-sm font-medium text-[#3E4B3F] mb-2"
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
                    className="w-full px-4 py-3 rounded-lg border border-[#CDD7C9] focus:border-[#7D8C7A] focus:ring-2 focus:ring-[#CDD7C9] outline-none transition-all resize-none"
                    placeholder={t('contact.message')}
                  />
                </div>

                {/* Submit button */}
                <Button type="submit" variant="primary" className="w-full">
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
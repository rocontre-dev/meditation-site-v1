import { useTranslation } from 'react-i18next';
import Button from '../components/Button';

const OnlineCourse = () => {
  const { t } = useTranslation();

  const features = [
    {
      title: t('onlineCourse.module1'),
      description: t('onlineCourse.module1Desc'),
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    },
    {
      title: t('onlineCourse.module2'),
      description: t('onlineCourse.module2Desc'),
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: t('onlineCourse.module3'),
      description: t('onlineCourse.module3Desc'),
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-[#F0EDE5]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-light text-[#3E4B3F] mb-6 tracking-tight">
              {t('onlineCourse.title')}
            </h2>
            <p className="text-lg text-[#5A6B5C] leading-relaxed mb-6">
              {t('onlineCourse.subtitle')}
            </p>
            <p className="text-[#5A6B5C] leading-relaxed mb-8">
              {t('hero.subtitle')}
            </p>

            {/* Features list */}
            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#CDD7C9] flex items-center justify-center text-[#5F6B5C]">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="font-medium text-[#3E4B3F] mb-1">
                      {feature.title}
                    </h4>
                    <p className="text-[#5A6B5C] text-sm">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <Button variant="primary">
              {t('onlineCourse.enroll')}
            </Button>
          </div>

          {/* Image placeholder */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-[#CDD7C9] to-[#B6C2AE] flex items-center justify-center overflow-hidden">
              <div className="text-center p-8">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-[#9EAB9A]/30 flex items-center justify-center">
                  <svg className="w-12 h-12 text-[#5F6B5C]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <p className="text-[#5A6B5C] text-sm">
                  {t('onlineCourse.title')}
                </p>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -z-10 -top-4 -right-4 w-full h-full rounded-2xl bg-[#CDD7C9]/50" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OnlineCourse;
import { useTranslation } from 'react-i18next';
import Card from '../components/Card';
import Button from '../components/Button';
import { podcastEpisodes } from '../data/podcasts';

const Resources = () => {
  const { t } = useTranslation();

  const resources = [
    {
      id: 'reflexiones',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      title: t('resources.reflexionesTitle'),
      description: t('resources.reflexionesDesc'),
    },
    {
      id: 'meditaciones',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: t('resources.meditacionesTitle'),
      description: t('resources.meditacionesDesc'),
    },
    {
      id: 'podcast',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
        </svg>
      ),
      title: t('resources.podcastTitle'),
      description: t('resources.podcastDesc'),
    },
  ];

  const episodes = podcastEpisodes.map(episode => ({
    ...episode,
    title: t(episode.title),
    description: t(episode.description)
  }));

  return (
    <section id="recursos" className="py-20 md:py-28 bg-[#D1C2A1]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light text-[#3E4B3F] mb-4 tracking-tight">
            {t('resources.title')}
          </h2>
          <p className="text-lg text-[#5A6B5C] max-w-2xl mx-auto leading-relaxed">
            {t('resources.subtitle')}
          </p>
        </div>

        {/* Featured Reflection */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-[#CDD7C9]">
            {/* Label */}
            <div className="flex justify-center mb-6">
              <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-[#F0EDE5] text-[#5F6B5C]">
                {t('resources.featuredLabel')}
              </span>
            </div>

            {/* Title */}
            <h3 className="text-2xl md:text-3xl font-light text-[#3E4B3F] text-center mb-8 tracking-tight">
              {t('resources.featuredTitle')}
            </h3>

            {/* Content */}
            <div className="space-y-6 mb-10">
              <p className="text-[#5A6B5C] leading-relaxed text-lg">
                {t('resources.featuredText1')}
              </p>
              <p className="text-[#5A6B5C] leading-relaxed text-lg">
                {t('resources.featuredText2')}
              </p>
              <p className="text-[#5A6B5C] leading-relaxed text-lg">
                {t('resources.featuredText3')}
              </p>
              <p className="text-[#5A6B5C] leading-relaxed text-lg">
                {t('resources.featuredText4')}
              </p>
            </div>

            {/* CTA */}
            <div className="flex justify-center">
              <Button
                variant="secondary"
                className="px-8 py-3"
                disabled
              >
                {t('resources.featuredButton')}
              </Button>
            </div>
          </div>
        </div>

        {/* Editorial note */}
        <p className="text-center text-[#7D8C7A] text-sm italic mb-12">
          {t('resources.reflectionsNote')}
        </p>

        {/* Podcast Episodes */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-light text-[#3E4B3F] mb-2 tracking-tight">
              {t('resources.podcastSectionTitle')}
            </h3>
            <p className="text-[#5A6B5C] text-lg">
              {t('resources.podcastSectionSubtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {episodes.map((episode, index) => (
              <Card key={index} className="flex flex-col h-full">
                <div className="text-[#7D8C7A] mb-4">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                  </svg>
                </div>
                <h4 className="text-lg font-medium text-[#3E4B3F] mb-2">
                  {episode.title}
                </h4>
                <p className="text-[#5A6B5C] text-sm leading-relaxed flex-grow">
                  {episode.description}
                </p>
                <div className="mt-4">
                  {episode.spotifyUrl && (
                    <a
                      href={episode.spotifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-[#1DB954] text-white hover:bg-[#1ed760] transition-colors"
                    >
                      <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                      </svg>
                      {t('resources.podcastSpotifyButton')}
                    </a>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Resources grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {resources.map((resource) => (
            <Card key={resource.id} className="flex flex-col h-full">
              <div className="text-[#7D8C7A] mb-4">
                {resource.icon}
              </div>
              <h3 className="text-xl font-medium text-[#3E4B3F] mb-3">
                {resource.title}
              </h3>
              <p className="text-[#5A6B5C] leading-relaxed flex-grow">
                {resource.description}
              </p>
              {resource.id === 'podcast' && (
                <p className="text-[#7D8C7A] text-xs italic mt-4">
                  {t('resources.podcastNote')}
                </p>
              )}
              <div className="mt-6">
                <Button
                  variant="secondary"
                  className="w-full px-4 py-2 text-sm"
                  disabled
                >
                  {t('resources.comingSoon')}
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Resources;
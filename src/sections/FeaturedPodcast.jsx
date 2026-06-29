import { useTranslation } from 'react-i18next';
import Card from '../components/Card';
import { podcastEpisodes } from '../data/podcasts';

const FeaturedPodcast = () => {
  const { t } = useTranslation();

  const episodes = podcastEpisodes.map(episode => ({
    ...episode,
    title: t(episode.title),
    description: t(episode.description)
  }));

  return (
    <section className="py-16 md:py-20 bg-[#F7F3ED]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-light text-[#3E4B3F] mb-4 tracking-tight">
            {t('featuredPodcast.title')}
          </h2>
          <p className="text-lg text-[#5A6B5C] max-w-2xl mx-auto leading-relaxed">
            {t('featuredPodcast.subtitle')}
          </p>
        </div>

        {/* Podcast Cards */}
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
    </section>
  );
};

export default FeaturedPodcast;
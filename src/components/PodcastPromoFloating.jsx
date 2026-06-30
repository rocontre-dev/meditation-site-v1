import { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import Button from './Button';

const PodcastPromoFloating = () => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const [isPulsing, setIsPulsing] = useState(false);
  const dismissTimeoutRef = useRef(null);

  useEffect(() => {
    // Check if dismissed in this session
    const dismissed = sessionStorage.getItem('podcastPromoDismissed');
    if (dismissed === 'true') {
      setIsDismissed(true);
      return;
    }

    // Show after 2 seconds
    const showTimer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    return () => clearTimeout(showTimer);
  }, []);

  useEffect(() => {
    // Pulse animation every 7 seconds when collapsed
    if (isVisible && !isExpanded && !isDismissed) {
      const pulseInterval = setInterval(() => {
        setIsPulsing(true);
        setTimeout(() => setIsPulsing(false), 1000);
      }, 7000);

      return () => clearInterval(pulseInterval);
    }
  }, [isVisible, isExpanded, isDismissed]);

  const handleDismiss = () => {
    sessionStorage.setItem('podcastPromoDismissed', 'true');
    setIsDismissed(true);
    setIsVisible(false);
  };

  const spotifyUrl = 'https://open.spotify.com/show/033punyXxKZvfVjF4qeGrn';

  if (isDismissed || !isVisible) return null;

  return (
    <div
      className={`
        fixed z-50
        bottom-6 right-6
        md:bottom-8 md:right-8
        transition-all duration-500 ease-out
        ${isExpanded ? 'translate-x-0' : 'translate-x-0'}
        ${isVisible ? 'opacity-100' : 'opacity-0'}
      `}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      <div
        className={`
          relative overflow-hidden
          bg-[var(--zen-cream)]/88 backdrop-blur-md
          border border-[var(--zen-sage)]/40
          rounded-[var(--zen-radius-xl)]
          shadow-[var(--zen-shadow-medium)]
          transition-all duration-500 ease-out
          ${isExpanded ? 'w-72 p-4' : 'w-auto px-4 py-3'}
          ${isPulsing ? 'shadow-[var(--zen-shadow-float)]' : ''}
        `}
        style={{
          transition: 'transform 0.7s ease-in-out, width 0.5s ease-out, opacity 0.5s ease-out'
        }}
      >
        {/* Close button */}
        <button
          onClick={handleDismiss}
          aria-label={t('podcastPromo.close')}
          className="
            absolute top-2 right-2
            w-6 h-6
            flex items-center justify-center
            text-[var(--zen-moss)] hover:text-[var(--zen-muted)]
            transition-colors
            focus:outline-none focus:ring-2 focus:ring-[var(--zen-moss)] focus:ring-offset-2 focus:ring-offset-[var(--zen-cream)] rounded-full
          "
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Content */}
        <div className={`${isExpanded ? '' : 'pr-6'}`}>
          {/* Collapsed state - badge only */}
          {!isExpanded && (
            <div className="flex items-center gap-2">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[var(--zen-sand)]">
                <svg className="w-4 h-4 text-[var(--zen-moss)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                </svg>
              </div>
              <span className="text-xs font-medium text-[var(--zen-muted)]">
                {t('podcastPromo.badge')}
              </span>
            </div>
          )}

          {/* Expanded state - full content */}
          {isExpanded && (
            <div className="space-y-3">
              {/* Badge */}
              <div className="flex items-center gap-2">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[var(--zen-sand)]">
                  <svg className="w-4 h-4 text-[var(--zen-moss)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                  </svg>
                </div>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[var(--zen-soft)] text-[var(--zen-muted)]">
                  {t('podcastPromo.badge')}
                </span>
              </div>

              {/* Title */}
              <h4 className="text-sm font-medium text-[var(--zen-deep)] leading-tight">
                {t('podcastPromo.title')}
              </h4>

              {/* Subtitle */}
              <p className="text-xs text-[var(--zen-muted)] leading-relaxed">
                {t('podcastPromo.subtitle')}
              </p>

              {/* Button */}
              <div className="pt-1">
                <a
                  href={spotifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center"
                >
                  <Button
                    variant="primary"
                    className="px-4 py-2 text-xs"
                  >
                    <svg className="w-3.5 h-3.5 mr-1.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                    </svg>
                    {t('podcastPromo.button')}
                  </Button>
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PodcastPromoFloating;
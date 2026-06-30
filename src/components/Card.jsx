const Card = ({ children, className = '', hover = true }) => {
  return (
    <div 
      className={`
        bg-[var(--zen-cream)]/78 backdrop-blur-sm
        rounded-[var(--zen-radius-xl)] p-6
        border border-[var(--zen-sage)]/45
        shadow-[var(--zen-shadow-medium)]
        ${
          hover 
            ? 'hover:shadow-[var(--zen-shadow-elevated)] hover:border-[var(--zen-muted)]/60 transition-all duration-300 ease-out' 
            : ''
        } 
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default Card;
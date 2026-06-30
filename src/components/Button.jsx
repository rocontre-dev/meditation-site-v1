const Button = ({ children, variant = 'primary', onClick, type = 'button', className = '', ...props }) => {
  const baseStyles = 'inline-flex items-center justify-center px-6 py-3 rounded-full font-medium transition-all duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[var(--zen-cream)]';
  
  const variants = {
    primary: 'bg-[var(--zen-deep)] text-[var(--zen-cream)] hover:bg-[var(--zen-moss)] focus:ring-[var(--zen-moss)] shadow-[var(--zen-shadow-soft)]',
    secondary: 'bg-[var(--zen-cream)]/70 text-[var(--zen-deep)] border-2 border-[var(--zen-moss)] hover:bg-[var(--zen-sage)]/20 focus:ring-[var(--zen-moss)] backdrop-blur-sm',
    accent: 'bg-[var(--zen-sage)] text-[var(--zen-deep)] hover:bg-[var(--zen-muted)] focus:ring-[var(--zen-sage)] shadow-[var(--zen-shadow-soft)]',
  };

  return (
    <button
      type={type}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
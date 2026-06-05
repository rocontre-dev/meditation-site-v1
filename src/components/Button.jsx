const Button = ({ children, variant = 'primary', onClick, type = 'button', className = '', ...props }) => {
  const baseStyles = 'inline-flex items-center justify-center px-6 py-3 rounded-full font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variants = {
    primary: 'bg-stone-800 text-white hover:bg-stone-700 focus:ring-stone-500',
    secondary: 'bg-white text-stone-800 border-2 border-stone-800 hover:bg-stone-50 focus:ring-stone-500',
    accent: 'bg-amber-700 text-white hover:bg-amber-800 focus:ring-amber-600',
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
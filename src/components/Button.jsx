const Button = ({ children, variant = 'primary', onClick, type = 'button', className = '', ...props }) => {
  const baseStyles = 'inline-flex items-center justify-center px-6 py-3 rounded-full font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variants = {
    primary: 'bg-[#7D8C7A] text-white hover:bg-[#5F6B5C] focus:ring-[#7D8C7A]',
    secondary: 'bg-white text-[#3E4B3F] border-2 border-[#3E4B3F] hover:bg-[#B6C2AE] focus:ring-[#7D8C7A]',
    accent: 'bg-[#B6C2AE] text-white hover:bg-[#9EAB9A] focus:ring-[#B6C2AE]',
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
const Button = ({ children, variant = 'primary', onClick, type = 'button', className = '', ...props }) => {
  const baseStyles = 'inline-flex items-center justify-center px-6 py-3 rounded-full font-medium transition-all duration-350 ease-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#F7F3ED]';
  
  const variants = {
    primary: 'bg-[#3E4B3F] text-white hover:bg-[#2D382E] focus:ring-[#7D8C7A] shadow-sm',
    secondary: 'bg-white/70 text-[#3E4B3F] border-2 border-[#7D8C7A] hover:bg-[#B6C2AE]/20 focus:ring-[#7D8C7A] backdrop-blur-sm',
    accent: 'bg-[#B6C2AE] text-white hover:bg-[#9EAB9A] focus:ring-[#B6C2AE] shadow-sm',
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
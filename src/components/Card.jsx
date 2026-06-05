const Card = ({ children, className = '', hover = true }) => {
  return (
    <div 
      className={`bg-white rounded-2xl p-6 shadow-sm border border-[#CDD7C9] ${
        hover ? 'hover:shadow-md hover:border-[#9EAB9A] transition-all duration-300' : ''
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
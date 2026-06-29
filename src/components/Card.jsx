const Card = ({ children, className = '', hover = true }) => {
  return (
    <div 
      className={`
        bg-[#F7F3ED]/78 backdrop-blur-sm
        rounded-[28px] p-6
        border border-[#B6C2AE]/45
        shadow-[0_18px_45px_rgba(62,75,63,0.08)]
        ${
          hover 
            ? 'hover:shadow-[0_24px_50px_rgba(62,75,63,0.12)] hover:border-[#9EAB9A]/60 transition-all duration-350 ease-out' 
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
/**
 * EditorialSection — Sección con tono de fondo y espaciado vertical.
 * 
 * @param {string} [as='section'] - Elemento HTML a renderizar
 * @param {'paper'|'soft'|'transparent'} [tone='paper'] - Color de fondo
 * @param {'default'|'compact'} [spacing='default'] - Espaciado vertical
 * @param {string} [className=''] - Clases CSS adicionales
 * @param {ReactNode} children - Contenido de la sección
 */
const EditorialSection = ({
  as: Component = 'section',
  tone = 'paper',
  spacing = 'default',
  className = '',
  children
}) => {
  const toneClasses = {
    paper: 'bg-[var(--zen-cream)]',
    soft: 'bg-[var(--zen-soft)]',
    transparent: 'bg-transparent',
  };

  const spacingClasses = {
    default: 'py-[var(--tv-section-space)]',
    compact: 'py-[var(--tv-section-space-compact)]',
  };

  return (
    <Component className={`${toneClasses[tone]} ${spacingClasses[spacing]} ${className}`}>
      {children}
    </Component>
  );
};

export default EditorialSection;
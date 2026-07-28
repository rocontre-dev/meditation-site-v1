/**
 * EditorialContainer — Contenedor con ancho máximo responsive.
 * 
 * @param {string} [as='div'] - Elemento HTML a renderizar
 * @param {'reading'|'content'|'wide'} [size='content'] - Ancho del contenedor
 * @param {string} [className=''] - Clases CSS adicionales
 * @param {ReactNode} children - Contenido del contenedor
 */
const EditorialContainer = ({
  as: Component = 'div',
  size = 'content',
  className = '',
  children
}) => {
  const sizeClasses = {
    reading: 'max-w-[var(--tv-reading-width)]',
    content: 'max-w-[var(--tv-content-width)]',
    wide: 'max-w-[var(--tv-wide-width)]',
  };

  return (
    <Component className={`mx-auto px-[var(--tv-page-gutter)] ${sizeClasses[size]} ${className}`}>
      {children}
    </Component>
  );
};

export default EditorialContainer;
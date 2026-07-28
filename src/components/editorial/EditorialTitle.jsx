/**
 * EditorialTitle — Título con niveles tipográficos editoriales.
 * 
 * La semántica HTML (as) y el tamaño visual (size) son independientes.
 * 
 * @param {'h1'|'h2'|'h3'} [as='h2'] - Elemento HTML semántico
 * @param {'display'|'h1'|'h2'|'h3'} [size='h2'] - Tamaño visual
 * @param {string} [className=''] - Clases CSS adicionales
 * @param {ReactNode} children - Contenido del título
 */
const EditorialTitle = ({
  as: Component = 'h2',
  size = 'h2',
  className = '',
  children
}) => {
  const sizeClasses = {
    display: 'editorial-display',
    h1: 'editorial-h1',
    h2: 'editorial-h2',
    h3: 'editorial-h3',
  };

  return (
    <Component className={`${sizeClasses[size]} ${className}`}>
      {children}
    </Component>
  );
};

export default EditorialTitle;
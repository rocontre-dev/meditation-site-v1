import PropTypes from 'prop-types';

/**
 * EditorialQuote — Citas editoriales con tipografía destacada.
 *
 * @param {string} text - El texto de la cita
 * @param {string} [author] - Autor de la cita (opcional)
 * @param {'left'|'center'|'right'} [align='center'] - Alineación del texto
 * @param {string} [maxWidth='900px'] - Ancho máximo del contenedor
 */
const EditorialQuote = ({
  text,
  author,
  align = 'center',
  maxWidth = '900px'
}) => {
  const alignmentClass = {
    left: 'editorial-quote--left',
    center: 'editorial-quote--center',
    right: 'editorial-quote--right'
  }[align] || 'editorial-quote--center';

  return (
    <figure className={`editorial-quote ${alignmentClass}`} style={{ maxWidth }}>
      <blockquote>
        <p className="editorial-quote-text">
          {text}
        </p>

        {author && (
          <footer className="editorial-quote-author">
            {author}
          </footer>
        )}
      </blockquote>
    </figure>
  );
};

EditorialQuote.propTypes = {
  text: PropTypes.string.isRequired,
  author: PropTypes.string,
  align: PropTypes.oneOf(['left', 'center', 'right']),
  maxWidth: PropTypes.string,
};

export default EditorialQuote;

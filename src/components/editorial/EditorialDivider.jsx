import PropTypes from 'prop-types';

/**
 * EditorialDivider — Divisor horizontal con opción decorativa.
 * 
 * @param {string} [className=''] - Clases CSS adicionales
 * @param {boolean} [decorative=true] - Si es decorativo, usa aria-hidden="true"
 */
const EditorialDivider = ({ className = '', decorative = true }) => {
  if (decorative) {
    return (
      <hr 
        className={`editorial-divider editorial-divider--decorative ${className}`} 
        aria-hidden="true" 
      />
    );
  }

  return <hr className={`editorial-divider ${className}`} />;
};

EditorialDivider.propTypes = {
  className: PropTypes.string,
  decorative: PropTypes.bool,
};

export default EditorialDivider;

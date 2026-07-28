import PropTypes from 'prop-types';

/**
 * EditorialPrinciples — Grid de principios editoriales.
 *
 * @param {Array} items - Array de principios (máximo 3)
 * @param {string} items[].title - Título del principio
 * @param {string} items[].description - Descripción del principio
 */
const EditorialPrinciples = ({ items }) => {
  // Validate and limit to 3 items
  let displayItems = items;
  if (items.length > 3) {
    console.warn('EditorialPrinciples: Maximum of 3 items allowed. Received', items.length);
    displayItems = items.slice(0, 3);
  }

  return (
    <section className="editorial-principles">
      {displayItems.map((item, index) => (
        <article key={index} className="editorial-principle">
          <h3 className="editorial-principle-title">
            {item.title}
          </h3>
          <p className="editorial-principle-description">
            {item.description}
          </p>
        </article>
      ))}
    </section>
  );
};

EditorialPrinciples.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default EditorialPrinciples;

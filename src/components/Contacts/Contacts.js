import PropTypes from 'prop-types';
import React from 'react';
import Filter from './Filter';

class Contacts extends React.Component {
  render() {
    const { contacts, filterValue, onChange, onDelete } = this.props;
    return (
      <section>
        <h2>Contacts</h2>
        <Filter value={filterValue} onChange={onChange} />

        <ul>
          {contacts.map(contact => (
            <li key={contact.id}>
              <p>{contact.name}:</p>
              <p>{contact.number}</p>
              <button
                onClick={() => {
                  onDelete(contact.id);
                }}
              >
                delete
              </button>
            </li>
          ))}
        </ul>
      </section>
    );
  }
}
Contacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
  filterValue: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};
export default Contacts;

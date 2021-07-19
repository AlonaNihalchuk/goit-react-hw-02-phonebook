// import PropTypes from 'prop-types'
import React from 'react';
import Filter from './Filter';

class StatisticsSection extends React.Component {
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
export default StatisticsSection;

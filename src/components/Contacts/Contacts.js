import PropTypes from 'prop-types';
import React from 'react';
import Filter from './Filter';
import style from './Contacts.module.css';

class Contacts extends React.Component {
  static propTypes = {
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
  render() {
    const { contacts, filterValue, onChange, onDelete } = this.props;
    return (
      <section className={style.contacts}>
        <h2 className={style.contactsHead}>Contacts </h2>
        <Filter value={filterValue} onChange={onChange} />

        <ul className={style.contactsList}>
          {contacts.map(contact => (
            <li className={style.contactsItem} key={contact.id}>
              <p className={style.contactsName}>{contact.name}:</p>
              <p>{contact.number}</p>
              <button
                className={style.contactsButton}
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

export default Contacts;

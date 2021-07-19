// import PropTypes from 'prop-types'

const Filter = ({ value, onChange }) => {
  return (
    <label>
      Find contact by name
      <input
        type="text"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        value={value}
        onChange={onChange}
      ></input>
    </label>
  );
};
export default Filter;

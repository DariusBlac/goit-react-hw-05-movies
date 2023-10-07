import { useState } from 'react';
import css from './Form.module.css';

export const Form = ({ setQuery }) => {
  const [value, setValue] = useState('');

  const handlerChange = event => {
    setValue(event.target.value);
  };
  const handleSubmit = event => {
    event.preventDefault();
    setQuery(value);
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <button type="submit" className={css.button}>
        <span className={css.button_label}></span>
      </button>

      <input
        onChange={handlerChange}
        className={css.input}
        type="text"
        autoComplete="off"
        autoFocus
        required
        placeholder="Search movies"
      />
    </form>
  );
};

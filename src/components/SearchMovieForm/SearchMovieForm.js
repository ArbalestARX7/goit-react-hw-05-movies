import { useState } from 'react';

const SearchMovieForm = ({ onSearch }) => {
  const [querry, setQuerry] = useState('');

  const searchButtomHandler = evt => {
    evt.preventDefault();

    if (querry.trim() === '') {
      alert('Type smthng');
    }

    onSearch(querry);
  };

  const inputHandler = e => {
    setQuerry(e.target.value);
  };

  return (
    <form>
      <button type="submit" onClick={searchButtomHandler}>
        <span>Search</span>
      </button>

      <input
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search Films"
        onChange={inputHandler}
        value={querry}
      />
    </form>
  );
};

export default SearchMovieForm;

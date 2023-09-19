import PropTypes from 'prop-types';
import { useState } from 'react';
import { FormStyled, InputStyled, SearchButtonStyled } from './Searcbar.styled';
import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';

export const SearchBar = ({ onChange }) => {
  const [query, setQuery] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();

  const movieId = searchParams.get('movieId');

  const updateQueryString = e => {
    const movieIdValue = e.target.value;
    if (movieIdValue === '') {
      return setSearchParams({});
    }
    setSearchParams({ movieId: movieIdValue });
  };

  const handleInput = e => {
    const { value } = e.currentTarget.value;
    setQuery(value.toLowerCase().trim());
    updateQueryString(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (query === '') {
      toast.info('Please enter your search term');
      return;
    }
    onChange(query);
  };
  return (
    <>
      <FormStyled onSubmit={handleSubmit}>
        <InputStyled
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
          value={query}
          onChange={handleInput}
        />
        <SearchButtonStyled type="submit">Search</SearchButtonStyled>
      </FormStyled>
    </>
  );
};

SearchBar.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

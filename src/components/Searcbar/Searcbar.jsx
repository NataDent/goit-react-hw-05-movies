import PropTypes from 'prop-types';
import { useState } from 'react';
import {
  FormStyled,
  Icon,
  InputStyled,
  SearchButtonStyled,
} from './Searcbar.styled';

import { toast } from 'react-toastify';

export const SearchBar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  // const updateQueryString = e => {
  //   const movieIdValue = e.target.value;
  //   if (movieIdValue === '') {
  //     return setSearchParams({});
  //   }
  //   setSearchParams({ movieId: movieIdValue });
  // };

  const handleInput = e => {
    const newQuery = e.currentTarget.value.toLowerCase().trim();
    setQuery(newQuery);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (query === '') {
      toast.info('Please enter your search term');
      return;
    }
    onSubmit(query);
    setQuery('');
  };

  return (
    <>
      <FormStyled onSubmit={handleSubmit}>
        <InputStyled
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies 👓"
          value={query}
          onChange={handleInput}
        />

        <SearchButtonStyled type="submit">
          Search
          <Icon />
        </SearchButtonStyled>
      </FormStyled>
    </>
  );
};

SearchBar.propTypes = {
  query: PropTypes.string,
};

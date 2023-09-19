import { useState } from 'react';
import {
  FormStyled,
  Icon,
  InputStyled,
  SearchButtonStyled,
} from './Searcbar.styled';

import { toast } from 'react-toastify';

export const SearchBar = ({ onSubmitForm }) => {
  const [query, setQuery] = useState('');

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

    onSubmitForm(query);
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

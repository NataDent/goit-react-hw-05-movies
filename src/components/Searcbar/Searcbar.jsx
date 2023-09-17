import PropTypes from 'prop-types';
import { useState } from 'react';
import { FormStyled, InputStyled, SearchButtonStyled } from './Searcbar.styled';
import { toast } from 'react-toastify';

export const SearchBar = ({ onSubmit }) => {
    const [query, setQuery] = useState('');
  
  const handleInput = e => {
    const { value } = e.currentTarget;
    setQuery(value.toLowerCase().trim());
    };

    const handleSubmit = e => {
        e.preventDefault();
        if (query === '') {
      toast.info('Please enter your search term');
      return;
        }
        onSubmit(query); 
    }
return(
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
  )
};

SearchBar.propTypes = {
    // query: PropTypes.string,
    // onChange: PropTypes.func,
    onSubmit: PropTypes.func,
  };
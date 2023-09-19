import styled from 'styled-components';
import { HiSearch } from 'react-icons/hi';

export const FormStyled = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  background-color: #fff;
  border-radius: 3px;
  outline: 1px solid black;
  overflow: hidden;
  margin-left: auto;
  margin-right: auto;
`;

export const InputStyled = styled.input`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 20px;
  border: none;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;
  ::placeholder {
    font: inherit;
    font-size: 18px;
  }
`;

export const Icon = styled(HiSearch)`
  width: 20px;
  height: 20px;
  position: absolute;
  right: 6px;
`;

export const SearchButtonStyled = styled.button`
  display: inline-block;
  width: 80px;
  height: 48px;
  border: 0;
  font-weight: 600;
  /* background-size: 50%; */
  background-repeat: no-repeat;
  background-position: center;
  background-color: #be5edc;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  padding: 4px;
  text-align: center;
  font-size: 16px;
  &:hover {
    opacity: 1;
    color: white;
  }
`;

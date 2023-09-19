import styled from 'styled-components';

export const ItemContainer = styled.div`
  padding: 0 16px;
`;
export const ButtonBack = styled.button`
  display: block;
  font-family: 'Roboto';
  font-weight: 600;
  font-size: 32px;
  line-height: 1.3;
  min-width: 108px;
  min-height: 48px;
  margin-left: auto;
  color: #ffffff;
  background-color: #ff6b01;
  border-color: #ffffff;
  border-radius: 5px;
  background: linear-gradient(transparent, grey);

  &:hover,
  &:focus {
    background: #be5edc;
    box-shadow: 0px 8px 43px rgba(255, 107, 1, 0.6);
    border-radius: 5px;
    border: none;
    cursor: pointer;
    transform: translateY(5%) scale(1.1);
  }
`;

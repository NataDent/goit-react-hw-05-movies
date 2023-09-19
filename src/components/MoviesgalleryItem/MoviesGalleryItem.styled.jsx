import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const ItemContainer = styled.div`
  padding: 0 16px;
`;

export const StyledLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;
  font-family: 'Roboto';
  font-weight: 600;
  font-size: 24px;
  line-height: 1.3;
  width: 160px;
  min-height: 48px;
  margin-right: auto;
  margin-bottom: 20px;
  color: #ffffff;
  background: #be5edc;
  border-color: #ffffff;
  border-radius: 5px;
  text-decoration: none;
  text-align: center;
  &:hover,
  &:focus {
    border: none;
    cursor: pointer;
    transform: translateY(5%) scale(1.05);
  }
`;

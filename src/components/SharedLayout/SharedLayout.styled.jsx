import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`

width: 100vw;
height: 48px;
  display: flex;
  padding: 4px 24px;
  margin-bottom: 24px;
  border-bottom: 1px solid grey;
  background-color: #f5f6fa;
  box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.1);
`;

export const NavStyled = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
`;

export const StyledLink = styled(NavLink)`
color: black;
display: flex;
text-decoration: none;
font-weight: 600;
font-size: 24px;
opacity: 0.8;
  &.active {
    color:#be5edc;
  }
&:hover{
  opacity: 1;
}
`;



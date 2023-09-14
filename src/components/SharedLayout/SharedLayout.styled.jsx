import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Link = styled(NavLink)`
  color: black;

  &.active {
    color: orange;
  }
`;
const Container = styled.div`
  display: flex;
`;
const Header = styled.header``;

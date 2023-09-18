import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const MoviesGalleryStyled = styled.ul`
  text-decoration: none;
  display: grid;
  width: 396px;
  grid-template-columns: repeat(auto-fill, min(300px));
  grid-gap: 16px;
  margin-top: 0;
  margin-bottom: 0;
  padding: 48px;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
  @media (min-width: 712px) {
    width: 712px;
  }
  @media (min-width: 1028px) {
    width: 1028px;
  }
  @media (min-width: 1344px) {
    width: 1344px;
  }
  @media (min-width: 1660px) {
    width: 1660px;
  }
`;

export const LinkStyled = styled(NavLink)`
  color: black;

  text-decoration: none;
  &:hover {
    color: #be5edc;
  }
`;

export const GalleryItemStyled = styled.li`
  width: 300px;
  background: #fff;
  box-shadow: 0 6px 18px rgb(0 0 0 / 10%);
  margin: 0.5em;
  border-radius: 20px;
  transition: transform 250ms linear;
  display: inline-block;
  display: table-caption;
  text-decoration: none;
  &:hover {
    cursor: pointer;

    transform: scale(1.05);
    box-shadow: 0px 10px 25px rgba(0, 0, 0, 0.08);
  }
`;

export const MovieTitle = styled.h2`
  /* display: block; */
  font-size: large;
  font-weight: 600;
  padding: 16px;
  min-height: 80px;
  line-height: 1.3;
  text-align: center;
`;
export const GalleryItemImageStyled = styled.img`
  display: block;
  width: 100%;
  height: auto;
  /* object-fit: cover; */
`;

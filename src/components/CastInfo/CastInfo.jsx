import { Cover, InfoBox, Span, Title } from './CastInfo.styled';

const BASE_URL = 'https://image.tmdb.org/t/p/w200';
const errorImage =
  'https://i.ebayimg.com/00/s/NDAwWDQwMA==/z/mrYAAOSwWk5kux96/$_1.JPG?set_id=8800005007';

export const CastInfo = ({ actors }) => {
  return (
    <InfoBox>
      <Title>Casting</Title>
      <Cover>
        {actors.map(({ name, id, profile_path, character }) => {
          const image = profile_path
            ? `${BASE_URL}${profile_path}`
            : errorImage;
          return (
            <li key={id}>
              <img src={image} alt={name} />
              <p>
                Name: <Span>{name}</Span>
              </p>
              <p>
                Character: <Span>{character}</Span>
              </p>
            </li>
          );
        })}
      </Cover>
    </InfoBox>
  );
};

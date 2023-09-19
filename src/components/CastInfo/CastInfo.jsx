import { Cover, InfoBox, Span, Title } from './CastInfo.styled';

const BASE_URL = 'https://image.tmdb.org/t/p/w200';
const errorImage =
  'https://img.freepik.com/free-vector/error-404-concept-illustration_114360-1811.jpg?w=200&t=st=1695137281~exp=1695137881~hmac=5c85dff672e9fb913c28c343e490d9ef5b0155e19e71e30d93c93b9c80d4d869';

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

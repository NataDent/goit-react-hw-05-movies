import { InfoBox } from 'components/CastInfo/CastInfo.styled';
import { InfoWrapper, RevTitle } from './ReviewsInfo.styled';

export const ReviewsInfo = ({ reviews }) => {
  return (
    <InfoBox>
      <InfoWrapper>
        {reviews.map(({ id, author, content, updated_at }) => (
          <li key={id}>
            <RevTitle>Author: {author}</RevTitle>
            <p>{content}</p>
            <p>
              <b>Date:</b> {updated_at}
            </p>
          </li>
        ))}
      </InfoWrapper>
    </InfoBox>
  );
};

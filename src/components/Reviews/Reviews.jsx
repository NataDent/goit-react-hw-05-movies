export const Reviews = ({ reviews }) => {
  return (
    <div>
      <ul>
        {reviews.map(({ id, author, content, updated_at }) => (
          <li key={id}>
            <h3>Author: {author}</h3>
            <p>{content}</p>
            <p>
              <b>Date:</b> {updated_at}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

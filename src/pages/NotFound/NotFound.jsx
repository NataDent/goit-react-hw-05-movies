import styled from 'styled-components';

const Container = styled.div`
  display: block;
  width: auto;
  height: auto;
`;

const NotFound = () => {
  return (
    <Container>
      <img
        src="https://img.freepik.com/free-vector/error-404-concept-illustration_114360-1811.jpg?size=800&ext=jpg&uid=R116879206&ga=GA1.2.491591425.1694955071&semt=ais"
        alt="Page not found"
      />
    </Container>
  );
};
export default NotFound;

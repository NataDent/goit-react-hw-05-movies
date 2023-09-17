import { Vortex } from 'react-loader-spinner';
import styled from 'styled-components';

const LoaderBox = styled.div`
  display: flex;
  justify-content: center;
`;

export const Loader = () => {
  return (
    <LoaderBox>
      <Vortex
        visible={true}
        height="80"
        width="80"
        ariaLabel="vortex-loading"
        wrapperStyle={{}}
        wrapperClass="vortex-wrapper"
        colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
      />
    </LoaderBox>
  );
};

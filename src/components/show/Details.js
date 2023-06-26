import styled from 'styled-components';

const Details = props => {
  const { status, premiered, network } = props;

  return (
    <DetailsWrapper>
      <p>Status: <span>{status}</span></p>
      <p>
        Premiered {premiered} {network  ? `on ${network.name}` : null}
      </p>
    </DetailsWrapper>
  );
};

export default Details;

const DetailsWrapper = styled.div`
  p {
    margin: 5px 0;
  }

  span{
    font-weight: bold;
  }
`;
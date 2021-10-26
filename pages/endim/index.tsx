import styled from 'styled-components';
import Layout from 'layout/endim';
import { Title } from 'components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Information = styled.p``;

export default function Home() {
  return (
    <Layout>
      <Container>
        <Title>Endimensionell analys</Title>
        <Information>Hej! Vad kul att du har hittat hit.</Information>
        <Information>
          Här kan du hitta värdefulla länkar, lösningar och andra projekt när du
          studerar kursen FMAB65, Endimensionell analys B1.
        </Information>
      </Container>
    </Layout>
  );
}

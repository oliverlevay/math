import styled from 'styled-components';
import Link from 'next/link';
import Layout from 'layout';
import { Title } from 'components';
import { routes } from 'lib/routes';
import { links } from 'lib/links';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Information = styled.p``;

export default function Home() {
  return (
    <Layout course='endimB1'>
      <Container>
        <Title>Endimensionell analys B1</Title>
        <Information>Hej! Vad kul att du har hittat hit.</Information>
        <Information>
          Här kan du hitta{' '}
          <Link href={routes.endim.links}>värdefulla länkar</Link>, lösningar
          och andra projekt när du studerar kursen FMAB65, Endimensionell analys
          B1.
        </Information>
        <Information>
          Det som jag har lagt mest energi på i dagsläget är{' '}
          <Link href={routes.endim.rehearsal}>instuderingsfrågorna</Link>, men
          det kommer mer!
        </Information>
        <Information>
          Om du tycker att något är dåligt eller saknas kan du ändra och lägga
          till, detta projekt har nämligen{' '}
          <a href={links.github} target='_blank' rel='noopener noreferrer'>
            öppen källkod
          </a>{' '}
          och finns på GitHub.
        </Information>
        <Information>//Oliver Levay</Information>
      </Container>
    </Layout>
  );
}

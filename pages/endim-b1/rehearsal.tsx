import styled from 'styled-components';
import Layout from 'layout';
import { Title } from 'components';
import Rehearsal from 'components/Endim/Rehearsal';
import { links } from 'lib/links';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Information = styled.p``;

export default function RehearsalPage() {
  return (
    <Layout course='endimB1'>
      <Container>
        <Title>Instuderingsfrågor</Title>
        <Information>
          Här samlas lösningar till instuderingsfrågorna. Du kan{' '}
          <a
            href='/assets/instud_b1_2013.pdf'
            target='_blank'
            rel='noopener noreferrer'
          >
            ladda ner en PDF till frågorna här
          </a>
          <br />
          <br />
          Jag kan inte garantera att lösningarna är korrekt eller lätta att
          förstå. Men jag har gjort mitt bästa. Detta projekt har{' '}
          <a href={links.github} target='_blank' rel='noopener noreferrer'>
            öppen källkod och finns på Github.
          </a>{' '}
          Om du har en bättre lösning eller förklaring kan du komma med ett pull
          request {':)'}
          <br />
          <br />
          De flesta lösningarna är inspirerade av Christines lösningar, stort
          tack!{' '}
          <a
            href='/assets/Svar-till-instuderingsfrågor-Endim-B1-1.pdf'
            target='_blank'
            rel='noopener noreferrer'
          >
            PDF till lösningarna finns här
          </a>
          . En del av lösningarna har slarvfel och det är lite svårt att läsa,
          därför bestämde jag mig för att göra om dem i LaTeX. Tryck på en
          uppgift för att se lösningen. Försök gärna först själv och se
          lösningen om du fastnar eller vill kontrollera att du har gjort rätt.
        </Information>
        <Rehearsal />
      </Container>
    </Layout>
  );
}

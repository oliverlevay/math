import styled from 'styled-components';
import Layout from 'layout/endim';
import { Title } from 'components';
import Rehearsal from 'components/Endim/Rehearsal';

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
        <Title>Instuderingsfrågor</Title>
        <Information>
          Här samlas lösningar till instuderingsfrågorna. Du kan ladda ner en
          PDF till frågorna{' '}
          <a
            href='/assets/instud_b1_2013.pdf'
            target='_blank'
            rel='noopener noreferrer'
          >
            här
          </a>
          <br />
          <br />
          Jag kan inte garantera att lösningarna är korrekt eller lätta att
          förstå. Men jag har gjort mitt bästa. Detta projekt har{' '}
          <a
            href='https://github.com/oliverlevay/math'
            target='_blank'
            rel='noopener noreferrer'
          >
            öppen källkod
          </a>{' '}
          och finns på Github. Om du har en bättre lösning eller förklaring kan
          du komma med ett pull request :
          <br />
          <br />
          De flesta lösningarna är inspirerade av Christines lösningar, stort
          tack! PDF till lösningarna finns{' '}
          <a
            href='/assets/Svar-till-instuderingsfrågor-Endim-B1-1.pdf'
            target='_blank'
            rel='noopener noreferrer'
          >
            här
          </a>
          . En del av lösningarna har slarvfel och det är lite svårt att läsa,
          därför bestämde jag mig för att göra om dem i LaTeX. Håll musen över
          eller klicka på en ruta för att få se lösningen.
        </Information>
        <Rehearsal />
      </Container>
    </Layout>
  );
}

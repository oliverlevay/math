import styled from 'styled-components';
import Layout from 'layout/endim';
import { Title } from 'components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Information = styled.p``;

const LinkComponent = ({ label, link }: { label: string; link: string }) => (
  <Information>
    {label}:{' '}
    <a href={link} target='_blank' rel='noopener noreferrer'>
      {link}
    </a>
  </Information>
);

export default function Home() {
  return (
    <Layout>
      <Container>
        <Title>Länkar</Title>
        <LinkComponent
          label='Jonas Månssons fantastiska YouTube videos'
          link='https://youtube.com/playlist?list=PL2w8yt28pgXoV2-2KDEyJYZtQc8h-aCN6'
        />
        <LinkComponent
          label='Allt möjligt användbart på tekniskfysik.org'
          link='https://tekniskfysik.org/ar-ett/endimensionell-analys/'
        />
        <LinkComponent
          label='Nya extentor'
          link='https://www.maths.lth.se/course/endimB1ny/'
        />
        <LinkComponent
          label='Gamla extentor'
          link='https://www.maths.lth.se/course/endimb1/'
        />
      </Container>
    </Layout>
  );
}

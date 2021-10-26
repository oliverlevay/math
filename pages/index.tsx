import Link from 'next/link';
import EndimLogo from 'components/CourseLogo/EndimLogo';
import styled from 'styled-components';
import { Title } from 'components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`;

const CourseList = styled.div``;

const CourseContainer = styled.div``;

export default function Home() {
  return (
    <Container>
      <Title>Välj en kurs</Title>
      <CourseList>
        <CourseContainer>
          <Link href='/endim' passHref>
            <a style={{ textDecoration: 'none' }}>
              <EndimLogo />
            </a>
          </Link>
        </CourseContainer>
      </CourseList>
    </Container>
  );
}

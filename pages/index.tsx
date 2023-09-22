import Link from "components/Link";
import Head from "next/head";
import EndimLogo from "components/CourseLogo/EndimLogo";
import styled from "styled-components";
import { Title } from "components";
import { routes } from "lib/routes";
import LinAlgLogo from "components/CourseLogo/LinAlgLogo";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`;

const CourseList = styled.div``;

const CourseContainer = styled.div`
  display: flex;
`;

const Margin1Rem = styled.div`
  margin-right: 1rem;
  margin-top: 1rem;
`;

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Välj en kurs | Sakur Math</title>
      </Head>
      <Title>Välj en kurs</Title>
      <CourseList>
        <CourseContainer>
          <Link href={routes.endimB1.home}>
            <EndimLogo title={"B1"} />
          </Link>
          <Margin1Rem />
          <Link href={routes.endimB2.home}>
            <EndimLogo title={"B2"} />
          </Link>
          <Margin1Rem />
          <Link href={routes.linalg.home}>
            <LinAlgLogo/>
          </Link>
        </CourseContainer>
      </CourseList>
    </Container>
  );
}

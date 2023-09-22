import styled from "styled-components";
import Head from "next/head";
import Link from "next/link";
import Layout from "layout";
import { Title } from "components";
import { routes } from "lib/routes";
import { links } from "lib/links";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export default function Home() {
  return (
    <Layout course="linalg">
      <Head>
        <title>Linjär Algebra | Sakur Math</title>
      </Head>
      <Container>
        <Title>Linjär Algebra </Title>
        <p>
          Hej! Vad kul att du har hittat hit.
          <br />
          <br />
          Jag kommer initialt börja med att lägga upp{" "}
          <Link href={routes.linalg.bookSolutions.home}>
            lösningar till uppgifter i boken
          </Link>
          <br />
          <br />
          Om du tycker att något är dåligt eller saknas kan du ändra och lägga
          till, detta projekt har nämligen{" "}
          <a href={links.github} target="_blank" rel="noopener noreferrer">
            öppen källkod
          </a>{" "}
          och finns på GitHub.
          <br />
          <br />
          //Oliver Levay
        </p>
      </Container>
    </Layout>
  );
}

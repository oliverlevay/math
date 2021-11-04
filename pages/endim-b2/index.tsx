import styled from "styled-components";
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
    <Layout course="endimB2">
      <Container>
        <Title>Endimensionell analys B2</Title>
        <p>
          Hej! Vad kul att du har hittat hit.
          <br />
          <br />
          Jag kommer initialt börja med att lägga upp{" "}
          <Link href={routes.endimB2.bookSolutions.home}>
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

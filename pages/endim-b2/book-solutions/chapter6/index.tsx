import styled from "styled-components";
import Head from "next/head";

import Layout from "layout";
import { Title } from "components";
import PartOne from "components/EndimB2/BookSolutions/Chapter6/PartOne";
import PartTwo from "components/EndimB2/BookSolutions/Chapter6/PartTwo";
import PartThree from "components/EndimB2/BookSolutions/Chapter6/PartThree";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-bottom: 30rem;
`;
export default function Chapter6() {
  return (
    <Layout course="endimB2">
      <Head>
        <title>Lösningar till uppgifter i boken | Endim B2</title>
      </Head>
      <Container>
        <Title>Lösningar till uppgifter i boken</Title>
        <h2>Kapitel 6. Komplexa tal</h2>
        <PartOne />
        <PartTwo />
        <PartThree />
      </Container>
    </Layout>
  );
}

import styled from "styled-components";
import Head from "next/head";

import Layout from "layout";
import { Title } from "components";
import LinAlgChapter1PartOne from "components/Linalg/Chapter1/PartOne";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-bottom: 30rem;
`;
export default function Chapter1() {
  return (
    <Layout course="linalg">
      <Head>
        <title>Lösningar till uppgifter i boken | Linalg</title>
      </Head>
      <Container>
        <Title>Lösningar till uppgifter i boken</Title>
        <h2>Kapitel 1. Vektorer</h2>
        <LinAlgChapter1PartOne />
      </Container>
    </Layout>
  );
}

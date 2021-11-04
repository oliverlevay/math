import styled from "styled-components";
import Head from "next/head";
import Link from "next/link";
import { Button, Stack } from "@mui/material";

import Layout from "layout";
import { Title } from "components";
import { routes } from "lib/routes";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-bottom: 30rem;
`;
export default function Home() {
  return (
    <Layout course="endimB2">
      <Head>
        <title>Lösningar till uppgifter i boken | Endim B2</title>
      </Head>
      <Container>
        <Title>Lösningar till uppgifter i boken</Title>
        <h2>Kapitel 6. Komplexa tal</h2>
        <Stack spacing={2}>
          <Link href={routes.endimB2.bookSolutions.chapter6.home} passHref>
            <Button variant="contained" style={{ width: "fit-content" }}>
              Alla uppgifter
            </Button>
          </Link>
          <Link href={routes.endimB2.bookSolutions.chapter6.partOne} passHref>
            <Button variant="contained" style={{ width: "fit-content" }}>
              6.1 till 6.12
            </Button>
          </Link>
        </Stack>
      </Container>
    </Layout>
  );
}

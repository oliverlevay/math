import styled from "styled-components";
import Head from "next/head";
import Link from "next/link";
import { Button, Stack } from "@mui/material";

import Layout from "layout";
import { Title } from "components";
import { routes } from "lib/routes";
import { colors } from "lib/colors";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-bottom: 30rem;
`;
export default function Home() {
  return (
    <Layout course="linalg">
      <Head>
        <title>Lösningar till uppgifter i boken | Linjär Algebra</title>
      </Head>
      <Container>
        <Title>Lösningar till uppgifter i boken</Title>
        <p>
          Lösningar som inte finns än (men är på väg) är{" "}
          <span style={{ color: colors.activeHard }}>markerade med rött</span>
        </p>
        <h2>Kapitel 1. Vektorer </h2>
        <Stack spacing={5}>
          <Link href={routes.linalg.bookSolutions.chapter1.home} passHref>
            <Button variant="contained" style={{ width: "fit-content" }}>
              Alla uppgifter
            </Button>
          </Link>
        </Stack>
      </Container>
    </Layout>
  );
}

/*
 
<p>
  Lösningar som inte finns än är{" "}
  <span style={{ color: colors.activeHard }}>markerade med rött</span>
</p>
<span style={{ color: colors.activeHard, marginLeft: "0.25rem" }}>
</span>
*/

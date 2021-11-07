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
    <Layout course="endimB2">
      <Head>
        <title>Lösningar till uppgifter i boken | Endim B2</title>
      </Head>
      <Container>
        <Title>Lösningar till uppgifter i boken</Title>
        <p>
          Lösningar som inte finns än är{" "}
          <span style={{ color: colors.activeHard }}>markerade med rött</span>
        </p>
        <h2>Kapitel 6. Komplexa tal</h2>
        <Stack spacing={2}>
          <Link href={routes.endimB2.bookSolutions.chapter6.home} passHref>
            <Button variant="contained" style={{ width: "fit-content" }}>
              Alla uppgifter
            </Button>
          </Link>
          <Link href={routes.endimB2.bookSolutions.chapter6.partOne} passHref>
            <Button variant="contained" style={{ width: "fit-content" }}>
              6.1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12
            </Button>
          </Link>
          <Link href={routes.endimB2.bookSolutions.chapter6.partTwo} passHref>
            <Button variant="contained" style={{ width: "fit-content" }}>
              6.18, 19, 20, 21, 22, 23, 24, 25, 26, 27, (28), 29, 32, 34
            </Button>
          </Link>
          <Link href={routes.endimB2.bookSolutions.chapter6.partThree} passHref>
            <Button
              variant="contained"
              style={{ width: "fit-content", textTransform: "none" }}
            >
              6.37, 38a, 40, 41,
              <span style={{ color: colors.activeHard, marginLeft: "0.25rem" }}>
                44, 45, 49, 53
              </span>
            </Button>
          </Link>
        </Stack>
      </Container>
    </Layout>
  );
}

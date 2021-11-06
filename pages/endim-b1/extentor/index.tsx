import styled from "styled-components";
import Head from "next/head";
import Link from "next/link";
import Layout from "layout";
import { Title } from "components";
import { routes } from "lib/routes";
import { Button } from "@mui/material";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
export default function Home() {
  return (
    <Layout course="endimB1">
      <Head>
        <title>Extentor | Sakur Math</title>
      </Head>
      <Container>
        <Title>Extentor</Title>
        <h2>Välj tenta</h2>
        <Link href={routes.endimB1.extentor._20210818} passHref>
          <Button variant="contained">2021-08-18</Button>
        </Link>
      </Container>
    </Layout>
  );
}

import styled from "styled-components";
import Head from "next/head";
import Layout from "layout";
import { Title } from "components";
import { Button, Stack } from "@mui/material";
import Solutions from "components/EndimB1/Extentor/2021-08-18/Solutions";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-bottom: 30rem;
`;
export default function Home() {
  return (
    <Layout course="endimB1">
      <Head>
        <title>Extenta 2021-08-18 | Sakur Math</title>
      </Head>
      <Container>
        <Title>Extenta 2021-08-18</Title>
        <Stack direction="row" spacing={2}>
          <Button
            variant="contained"
            style={{ width: "fit-content" }}
            href="https://www.maths.lth.se/media11/exams/endimB1ny/exam_2021-08-18.pdf"
            rel="noopener noreferrer"
            target="_blank"
          >
            PDF frågor
          </Button>
          <Button
            variant="contained"
            style={{ width: "fit-content" }}
            href="https://www.maths.lth.se/media11/exams/endimB1ny/solution_2021-08-18_0Js6rbP.pdf"
            rel="noopener noreferrer"
            target="_blank"
          >
            PDF Svar
          </Button>
        </Stack>
        <h2>Lösningar</h2>
        <Solutions />
      </Container>
    </Layout>
  );
}

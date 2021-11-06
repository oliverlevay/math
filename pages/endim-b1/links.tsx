import styled from "styled-components";
import Head from "next/head";
import Layout from "layout";
import { Title } from "components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Information = styled.p``;

const LinkComponent = ({
  label,
  link,
  linkText,
}: {
  label: string;
  link: string;
  linkText: string;
}) => (
  <Information>
    {label}{" "}
    <a href={link} target="_blank" rel="noopener noreferrer">
      {linkText}
    </a>
  </Information>
);

export default function Links() {
  return (
    <Layout course="endimB1">
      <Head>
        <title>Länkar | Sakur Math</title>
      </Head>
      <Container>
        <Title>Länkar</Title>
        <h2>Lösningar och förklaringar:</h2>
        <LinkComponent
          label="Jonas Månssons fantastiska"
          linkText="YouTube videos"
          link="https://youtube.com/playlist?list=PL2w8yt28pgXoV2-2KDEyJYZtQc8h-aCN6"
        />
        <LinkComponent
          label="Allt möjligt användbart på tekniskfysik.orgs"
          linkText="endim sida"
          link="https://tekniskfysik.org/ar-ett/endimensionell-analys/"
        />
        <LinkComponent
          label="Emil Wihlanders otroliga PDF som innehåller tydliga lösningar fram till och med kapitel 5:"
          linkText="Visa PDF"
          link="https://docs.google.com/viewer?url=https://raw.githubusercontent.com/emilwihlander/Endim/master/Endimensionell_analys.pdf"
        />
        <LinkComponent
          label="Obligatorisk länk till"
          linkText="Emils GitHub repo"
          link="https://github.com/emilwihlander/Endim"
        />
        <h2>Verktyg:</h2>
        <LinkComponent
          label="För att smidigt rita grafer rekommenderas"
          linkText="GeoGebra"
          link="https://www.geogebra.org/calculator"
        />
        <LinkComponent
          label="Deriveringskalkylator som även kan visa lösningssteg:"
          linkText="Derivative Calculator"
          link="https://www.derivative-calculator.net/"
        />
        <LinkComponent
          label="Photomath är en app där man kan ta bild på en fråga så får man se lösningen med steg:"
          linkText="Photomath"
          link="https://photomath.com/en/"
        />
        <h2>Extentor:</h2>
        <LinkComponent
          label="Nya extentor"
          linkText="maths.lth.se/course/endimB1ny/"
          link="https://www.maths.lth.se/course/endimB1ny/"
        />
        <LinkComponent
          label="Gamla extentor"
          linkText="maths.lth.se/course/endimb1/"
          link="https://www.maths.lth.se/course/endimb1/"
        />
      </Container>
    </Layout>
  );
}

import { FC } from 'react';
import styled from 'styled-components';
import Latex from 'react-latex-next';
import 'katex/dist/katex.min.css';
import AreaSatsenTriangle1 from './components/figures/AreaSatsenTriangel1';
import AreaSatsenTriangel2 from './components/figures/AreaSatsenTriangel2';
import SinusSatsenTriangel from './components/figures/SinussatsenTriangel';
import { colors } from 'lib/colors';
import { TABLET_BP } from 'lib/breakpoints';

const Container = styled.div`
  ${TABLET_BP} {
    margin-top: 1rem;
  }
  line-height: 1;
`;

const ChapterHeader = styled.h2`
  font-family: 'Times New Roman', Times, serif;
`;

const Divider = styled.div`
  margin-top: 1rem;
  margin-left: 1rem;
`;

const FiguresContainer = styled.div`
  display: flex;
  margin: 1rem 0;
`;

const Assignment = styled.div`
  position: relative;
  margin-bottom: 2rem;
`;

const SpoilerBlock = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: ${process.env.NODE_ENV === 'development'
    ? 'transparent'
    : colors.almond};
  :hover {
    background-color: transparent;
  }
  z-index: 1;
`;

const Spoiler: FC = ({ children }) => (
  <Assignment>
    <SpoilerBlock></SpoilerBlock>
    {children}
  </Assignment>
);

const Rehearsal = () => {
  return (
    <Container>
      <ChapterHeader>Kapitel T och 8.4</ChapterHeader>
      {/** # Uppgift 66 */}
      66. Formulera och bevisa areasatsen.
      <Spoiler>
        <Divider />
        <b>Areasatsen</b> säger att arean av en triangel är halva produkten av
        två sidors längder multiplicerat med sinus för mellanliggande vinkel.
        <Divider />
        Formel: <Latex>{'$A=\\dfrac{bc\\sin\\alpha}{2}$'}</Latex>
        <FiguresContainer>
          <AreaSatsenTriangle1 />
          <Divider />
          <AreaSatsenTriangel2 />
        </FiguresContainer>
        <b>Bevis:</b> Antingen kan vinkeln vara spetsig (vänster figur) eller
        trubbig (höger figur).
        <br /> I vänster figur gäller <Latex>{'$h=c\\sin\\alpha$'}</Latex> och i
        höger{' '}
        <Latex>
          {'$h=c\\sin\\beta=c\\sin(180\\degree-\\alpha)=c\\sin\\alpha$'}
        </Latex>
        . <br /> I båda fallen gäller alltså{' '}
        <Latex>{'$A=\\dfrac{bh}{2}=\\dfrac{bc\\sin\\alpha}{2}$.'}</Latex>
      </Spoiler>
      {/** # Uppgift 67 */}
      67. Formulera och bevisa sinussatsen.
      <Spoiler>
        <Divider />
        <b>Sinussatsen</b> säger att i en triangel med sidorna{' '}
        <Latex>{'$a, b, c$'}</Latex> och motstående vinklarna{' '}
        <Latex>{'$\\alpha, \\beta, \\gamma$'}</Latex> gäller att:
        <Divider />
        <Latex>
          {
            '$\\dfrac{sin\\alpha}{a}=\\dfrac{sin\\beta}{b}=\\dfrac{sin\\gamma}{c}$'
          }
        </Latex>{' '}
        <FiguresContainer>
          <SinusSatsenTriangel />
        </FiguresContainer>
        <b>Bevis:</b> Areasatsen på respektive hörn ger att:
        <Divider />
        <Latex>
          {
            '$A=\\dfrac{ab\\sin\\alpha}{2}=\\dfrac{ab\\sin\\beta}{2}=\\dfrac{ab\\sin\\gamma}{2}$'
          }
        </Latex>
        <Divider />
        Multipliceras varje led med med <Latex>{'$\\dfrac{2}{abc}$'}</Latex> fås
        resultatet i satsen.
      </Spoiler>
    </Container>
  );
};

export default Rehearsal;

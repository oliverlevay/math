import Link from 'next/link';
import styled from 'styled-components';
import Latex from 'react-latex-next';
import 'katex/dist/katex.min.css';
import { TABLET_BP } from 'lib/breakpoints';
import Assignment from 'components/Assignment';

import AreaSatsenTriangle1 from './components/figures/AreaSatsenTriangel1';
import AreaSatsenTriangel2 from './components/figures/AreaSatsenTriangel2';
import SinusSatsenTriangel from './components/figures/SinussatsenTriangel';
import CosinussatsenTriangel1 from './components/figures/CosinussatsenTriangel1';
import CosinussatsenTriangel2 from './components/figures/CosinussatsenTriangel2';

const Container = styled.div`
  ${TABLET_BP} {
    margin-top: 1rem;
  }
  line-height: 1;
  br {
    min-height: 1rem;
  }
`;

const ChapterHeader = styled.h2`
  font-family: 'Times New Roman', Times, serif;
`;

const SolutionTip = styled.div`
  margin-top: 0.5em;
  margin-bottom: 0.25rem;
`;

const Divider = styled.div`
  margin-top: 1rem;
  margin-left: 1rem;
`;

const FiguresContainer = styled.div`
  display: flex;
  margin: 1rem 0;
`;

const Rehearsal = () => {
  return (
    <Container>
      <ChapterHeader>Kapitel T och 8.4</ChapterHeader>

      <Assignment title='64. Visa trigonometriska ettan.' id='64'>
        <b>Trigonometriska ettan</b> <Latex>$\sin^2x+cos^2x=1$</Latex> visas
        enkelt genom Pythagoras sats i enhetscirkeln.
      </Assignment>

      <Assignment title='66. Formulera och bevisa areasatsen.' id='66'>
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
        <br />
        <Latex>{'I vänster figur gäller $h=c\\sin\\alpha$'}</Latex>
        <br />
        <Latex>
          {
            'I höger figur gäller $h=c\\sin\\beta=c\\sin(180\\degree-\\alpha)=c\\sin\\alpha$'
          }
        </Latex>
        . <br /> I båda fallen gäller alltså{' '}
        <Latex>{'$A=\\dfrac{bh}{2}=\\dfrac{bc\\sin\\alpha}{2}$.'}</Latex>
      </Assignment>

      <Assignment title='67. Formulera och bevisa sinussatsen.' id='67'>
        <Divider />
        <b>Sinussatsen</b> säger att i en triangel med sidorna{' '}
        <Latex>
          {
            '$a, b, c$ och motstående vinklarna $\\alpha, \\beta, \\gamma$ gäller att:'
          }
        </Latex>
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
        <Latex>
          {
            'Multipliceras varje led med med $\\dfrac{2}{abc}$ fås resultatet i satsen.'
          }
        </Latex>
      </Assignment>

      <Assignment title='68. Formulera och bevisa cosinussatsen.' id='68'>
        Kom ihåg <Link href='?id=64#64'>trigonometriska ettan</Link>
        <Divider />
        <b>Cosinussatsen</b>{' '}
        <Latex>
          säger att om sidorna i en triangel är $a, b, c$ och den till sidan $a$
          motstående vinkeln är $\alpha$ så gäller:
        </Latex>
        <Divider />
        <Latex>$a^2=b^2+c^2-2bc\cos\alpha$</Latex>
        <FiguresContainer>
          <CosinussatsenTriangel1 />
          <Divider />
          <CosinussatsenTriangel2 />
        </FiguresContainer>
        <b>Bevis:</b>
        <br />
        <Latex>
          Vi börjar med det fall då $\alpha&gt;90\degree$(högra figuren)
        </Latex>
        <Divider />
        Det gäller att:
        <br />
        <Latex>$h=c\sin\beta=c\sin(180\degree-\alpha)=c\sin\alpha$</Latex>
        <br />
        <Latex>$x=c\cos(180\degree-\alpha)=-c\cos\alpha$</Latex>
        <Divider />
        <SolutionTip>Pythagoras sats ger:</SolutionTip>
        <Latex>$a^2=h^2+(b+x)^2=$</Latex>
        <SolutionTip>
          <Latex>Byt ut $x$ och $h$</Latex>
        </SolutionTip>
        <Latex>$c^2\sin^2\alpha+(b-c\cos\alpha)^2=$</Latex>
        <SolutionTip>Lös ut kvadraten</SolutionTip>
        <Latex>$c^2\sin^2\alpha+b^2-2bc\cos\alpha+c^2\cos^2\alpha=$</Latex>
        <SolutionTip>
          <Latex>Faktorisera $c^2$</Latex>
        </SolutionTip>
        <Latex>$b^2+c^2(\sin^2\alpha+\cos^2\alpha)-2bc\cos\alpha=$</Latex>
        <SolutionTip>Applicera trigonometriska ettan</SolutionTip>
        <Latex>$b^2+c^2-2bc\cos\alpha$</Latex>
        <Divider />
        <Latex>
          I det fall då $\alpha&lt;90\degree$ (vänstra figuren) gäller att:
        </Latex>
        <br />
        <Latex>$h=c\sin\alpha$</Latex>
        <br />
        <Latex>$x=c\cos\alpha$</Latex>
        <Divider />
        <SolutionTip>Pythagoras sats ger:</SolutionTip>
        <Latex>$a^2=h^2+(b-x)^2=$</Latex>
        <SolutionTip>
          <Latex>Byt ut $x$ och $h$</Latex>
        </SolutionTip>
        <Latex>$c^2\sin^2\alpha+(b-c\cos\alpha)^2=$</Latex>
        <SolutionTip>Lös ut kvadraten</SolutionTip>
        <Latex>$c^2\sin^2\alpha+b^2-2bc\cos\alpha+c^2\cos^2\alpha=$</Latex>
        <SolutionTip>
          <Latex>Faktorisera $c^2$</Latex>
        </SolutionTip>
        <Latex>$b^2+c^2(\sin^2\alpha+\cos^2\alpha)-2bc\cos\alpha=$</Latex>
        <SolutionTip>Applicera trigonometriska ettan</SolutionTip>
        <Latex>$b^2+c^2-2bc\cos\alpha$</Latex>
      </Assignment>

      <Assignment title='69. Hur definieras vinkelmåttet radian?' id='69'>
        <Latex>{'1 rad $=\\dfrac{360\\degree}{2\\pi}$'}</Latex>
        <Divider />
        <Latex>En hel cirkel: $2\pi$</Latex>
        <br />
        <Latex>En halv cirkel: $\pi$</Latex>
        <br />
        <Latex>{'En fjärdedels cirkel: $\\frac{\\pi}{2}$'}</Latex>
      </Assignment>
    </Container>
  );
};

export default Rehearsal;

import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';
import Latex from 'react-latex-next';
import { TABLET_BP } from 'lib/breakpoints';
import Assignment from 'components/Assignment';

import AreaSatsenTriangle1 from './components/figures/AreaSatsenTriangel1';
import AreaSatsenTriangel2 from './components/figures/AreaSatsenTriangel2';
import SinusSatsenTriangel from './components/figures/SinussatsenTriangel';
import CosinussatsenTriangel1 from './components/figures/CosinussatsenTriangel1';
import CosinussatsenTriangel2 from './components/figures/CosinussatsenTriangel2';
import Sine from './components/figures/Sine';
import Cosine from './components/figures/Cosine';
import Tan from './components/figures/Tan';
import Cot from './components/figures/Cot';
import { ltx, breakLine, newLine } from 'lib/latexHelpers';

const Container = styled.div`
  padding-bottom: 10rem;
  ${TABLET_BP} {
    margin-top: 1rem;
  }
  line-height: 1;
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

const DecreaseMobileFont = styled.div`
  font-size: 0.875rem;
  ${TABLET_BP} {
    font-size: 1rem;
  }
`;

const Rehearsal = () => {
  return (
    <Container>
      <ChapterHeader>Kapitel T och 8.4</ChapterHeader>

      <Assignment title='64. Visa trigonometriska ettan.' id='64'>
        <b>Trigonometriska ettan</b> <Latex>$\sin^2x+cos^2x=1$</Latex> visas
        enkelt genom Pythagoras sats i enhetscirkeln.
        <br />
        <Image width={453} height={461} src='/figures/64.png' />
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

      <Assignment
        title='70. Rita graferna till funktionerna $\sin x, \cos x, \tan x$ och $\cot x$.'
        id='70'
      >
        <Sine />
        <Cosine />
        <br />
        <Tan />
        <Cot />
      </Assignment>

      <Assignment
        title='71. Illustrera dubbelolikheten $\sin x < x < \tan x$ då $0 < x < \fracπ2$.'
        id='71'
      >
        <Image src='/figures/71.png' width={250} height={255} />
        <Divider />
        <Latex>
          Kurvan är enhetscirkeln inritad i första kvadranten. Här syns tydligt
          att linjestycket $AB$ med längd $\sin x$ är kortare än circelbågen
          $AC$ med längd $x$. Cirkelbågen är i sin tur kortare än linjestycket
          $CD$ med längd $\tan x$
        </Latex>
      </Assignment>

      <Assignment
        title='72. Skriv upp de trigonometriska additionsformlerna. Ange formler för dubbla vinkeln för sinus respektive cosinus. Ge bevis.'
        id='72'
      >
        <a
          href='https://www.youtube.com/watch?v=5tA5lj2dLkw'
          rel='noopener noreferrer'
          target='_blank'
        >
          Länk till Jonas video
        </a>
        <Divider />
        <b>Additionsformlerna </b>för cosinus och sinus lyder:
        <Divider />
        <Latex>$\cos(x+y)=\cos x\cos y-\sin x\sin y$</Latex>
        <br />
        <Latex>$\sin(x+y)=\sin x\cos y+\cos x\sin y$</Latex>
        <Divider />
        <b>Bevis: </b>
        <br />
        <Image src='/figures/72.png' width={500} height={115} />
        <SolutionTip>Ur den vänstra figuren får vi:</SolutionTip>
        <Latex>$d^2=(\cos x - \cos y)^2+(\sin x - \sin y)^2$</Latex>
        <SolutionTip>
          Ur den högra figuren, där triangeln enbart roterats ned till x-angeln
          får vi:
        </SolutionTip>
        <Latex>$d^2=(1-\cos(x-y))^2+\sin^2(x-y)$</Latex>
        <br />
        <SolutionTip>
          <Latex>Båda är $=d^2$, dvs lika med varandra</Latex>
        </SolutionTip>
        <Latex>
          $(\cos x - \cos y)^2+(\sin x - \sin y)^2=(1-\cos(x-y))^2+\sin^2(x-y)$
        </Latex>
        <SolutionTip>Applicera kvadreringsregler</SolutionTip>
        <Latex>
          $\Leftrightarrow\cos^2x-2\cos x\cos y+\cos^2y+\sin^2x-2\sin x\sin
          y+sin^2y=1+\cos^2(x-y)-2\cos(x-y)+sin^2(x-y)$
        </Latex>
        <SolutionTip>Applicera trigonometriska ettan</SolutionTip>
        <Latex>
          $\Leftrightarrow1+1-2\cos x\cos y-2\sin x \sin y=1+1-2\cos(x-y)$
        </Latex>
        <br />
        <Latex>$\Leftrightarrow\cos(x-y)=\cos x\cos y + \sin x \sin y$</Latex>
        <SolutionTip>
          Nu har vi tagit fram subtraktionsformeln, som vi kan använda för att
          ta fram additionsformeln.
        </SolutionTip>
        <Latex>Kom ihåg att $\cos(-y)=\cos y$ och $\sin(-y)=-\sin y$</Latex>
        <br />
        <Latex>$\cos(x+y)=\cos(x-(-y))=$</Latex>
        <br />
        <Latex>
          $\cos x\cos(-y)+\sin x\sin(-y)=\cos x \cos y - \sin x \sin y$
        </Latex>
        <Divider />
        För Sinus:
        <br />
        <Latex>$\sin(x+y)=\cos(\frac\pi2-(x+y))=\cos((\frac\pi2-x)-y)$</Latex>
        <SolutionTip>
          Applicera subtraktionsformeln för{' '}
          <Latex>$\cos((\frac\pi2-x)-y)$</Latex>:
        </SolutionTip>
        <Latex>
          $\cos((\frac\pi2-x)-y)=\cos(\frac\pi2-x)\cos y + \sin(\frac\pi2-x)\sin
          y$
        </Latex>
        <br />
        <Latex>$=\sin x \cos y+\cos x \sin y$ #</Latex>
      </Assignment>

      <Assignment
        title='73. Redogör för hjälpvinkelmetoden vid behandling av uttryck av formen $a \sin \omega x + b \cos \omega x.$'
        id='73'
      >
        <b>Hjälpvinkelmetoden</b> är ett sätt att skriva om en kombination av
        cosinus- och sinusvågor som en enda cosinus- eller sinusvåg. Detta
        enligt sats 8.7:
        <Divider />
        <Latex>
          {
            '$a\\sin(\\omega x)+b\\cos(\\omega x)=\\sqrt{a^2+b^2}\\sin(\\omega x+\\varphi)$'
          }
        </Latex>
        <br />
        <Latex>
          {
            'där $\\varphi$ uppfyller $\\cos \\varphi=\\dfrac{a}{\\sqrt{a^2+b^2}}$ , $\\sin \\varphi=\\dfrac{b}{\\sqrt{a^2+b^2}}$'
          }
        </Latex>
        <br />
        <Latex>
          {
            '$\\sqrt{a^2+b^2}$ kallas amplitud, $\\varphi$ kallas fasförskjutning och $\\omega$ vinkelfrekvens'
          }
        </Latex>
      </Assignment>

      <Assignment
        title='74. Givet radien i en cirkel, skriv upp formler för dess omkrets respektive area.'
        id='74'
      >
        <Latex>En cirkel med radien $r$ har</Latex>
        <b> omkretsen </b>
        <Latex>$\pi r^2$ respektive</Latex>
        <b> arean </b>
        <Latex>$2\pi r$</Latex>
      </Assignment>

      <Assignment
        title='75. Ange sambandet mellan båglängd, vinkel och radie för en cirkelsektor, dels då vinkeln mäts i grader, dels i radianer.'
        id='75'
      >
        <Latex>
          Sambandet mellan båglängd $b$, vinkel $\alpha$ och radie $r$ för en
          cirkelsektor är
        </Latex>
        <br />
        <Latex>
          {
            '$b=\\dfrac{\\alpha}{360\\degree}\\cdot2\\pi r=\\alpha r$ (om $a$ är i rad)'
          }
        </Latex>
      </Assignment>

      <Assignment
        title='76. Givet radien och båglängden för en cirkelsektor, ange dess area.'
        id='76'
      >
        <Latex>{'$\\dfrac{\\alpha}{360\\degree}\\pi r^2$'}</Latex>
      </Assignment>

      <ChapterHeader>Kapitel 8.5</ChapterHeader>

      <Assignment
        title='77. Definiera funktionerna $\arcsin x$, $\arccos x$ och $\arctan x$. Ange deras definitions- och värdemängder'
        id='77'
      >
        <Latex>
          {`Arcusfunktionerna är inversfunktioner till de trigonometreiska funktionerna. 
            Eftersom dessa inte är injektiva i hela $\\mathbb{R}$ så är arcus-funktionerna bara definerade på intervall:`}
        </Latex>
        <br />
        <Latex>
          $y=\sin x\iff x = \arcsin y$ , $-\frac\pi2\leq x \leq \frac\pi2$
        </Latex>
        <br />
        <Latex>$y=\cos x\iff x = \arccos y$ , $0 \leq x \leq \pi$</Latex>
        <br />
        <Latex>
          $y=\tan x\iff x = \arctan y$ , $-\frac\pi2\leq x \leq \frac\pi2$
        </Latex>
        <br />
        <Latex>$y=\cot x\iff x = arccot y$ , $0 \leq x \leq \pi$</Latex>
        <br />
      </Assignment>

      <Assignment
        title='78. Rita graferna till funktionerna arcsin x, arccos x och arctan x.'
        id='78'
      >
        Hänvisar till{' '}
        <a
          href='https://www.geogebra.org/calculator'
          rel='noopener noreferrer'
          target='_blank'
        >
          GeoGebra
        </a>{' '}
        för grafritning.
      </Assignment>

      <ChapterHeader>Kapitel 9</ChapterHeader>

      <Assignment
        id='79'
        title='79. Låt $α > 0$ och $a > 1$. Arrangera funktionerna $x^\alpha$, $\ln x$ och $a^x$ storleksordning för stora värden på $x$. Precisera svaret i form av gränsvärden då $x \rightarrow \infin$.'
      >
        <Latex>
          Då $\alpha &gt; 0$ och $a &gt; 1$ gäller $a^x&gt;x^\alpha&gt;\ln x$ då
          $x\rightarrow\infin$ eftersom det enligt sats 9.3 gäller:
        </Latex>
        <Divider />
        <Latex>{`$${ltx.limInf}\\dfrac{a^x}{x^a}=\\infin$ och $${ltx.limInf}\\dfrac{x^a}{\\ln x}=\\infin$`}</Latex>
        <Divider />
        Detta betyder helt enkelt att exponentialfunktioner växer fortare än
        polynom, som växer fortare än logaritmer.
      </Assignment>

      <Assignment title='80. Definiera talet $e$.' id='80'>
        <Latex>{`$e=${ltx.limInf}(1+\\frac1x)^x$`}</Latex>
      </Assignment>

      <Assignment
        title='81. Definiera innebörden av uttrycket ”funktionen f är kontinuerlig i punkten a”.'
        id='81'
      >
        <Latex>{`Funktionen $f$ är kontinuerlig i punkten $a$ om $${ltx.limA}f(x)=f(a)$`}</Latex>
        <Divider />
        <Latex>
          {`Till exempel funktionen $f(x)=\\dfrac1x$ är inte kontinuerlig i punkten
          $x=0$ eftersom $${ltx.lim0}f(x)\\neq f(0)$ då $f(0)$ är odefinerad`}
        </Latex>
      </Assignment>

      <Assignment
        title='82. Ange några egenskaper hos kontinuerliga funktioner på slutna, begränsade intervall.'
        id='82'
      >
        De antar alla värden mellan sina ändpunkter minst en gång (sats 9.8) och
        de antar ett största och minsta värde på intervallet (sats 9.9)
      </Assignment>

      <Assignment
        title={`83 (WIP). Lär dig standardgränsvärdena nummer (9.19) till (9.25) på sida 194 i läroboken. Utgående från de två gränsvärdena 
      $\\newline(\\dfrac{e^x-1}{x})\\rightarrow$ då $x\\rightarrow\\plusmn\\infin$ , 
      och $\\dfrac{a^x}{x^a}\\rightarrow\\infin$ då $x\\rightarrow\\infin\\newline$
      lär dig härleda (9.20), (9.23), (9.24) och (9.25).`}
        id='83'
      >
        <b>Standardgränsvärderna:</b>
        <Divider />
        <DecreaseMobileFont>
          <Latex>{`$\\begin{matrix*}[l]
                  ${ltx.limInf}\\dfrac{a^x}{x^\\alpha}=\\infin & (\\alpha>0, a>1), & (9.19)${newLine}
                  ${ltx.limInf}\\dfrac{x^\\alpha}{^a\\log x}=\\infin & (\\alpha>0, a>1), & (9.20)${newLine}
                  ${ltx.limPlMnInf}(1+\\dfrac1x)^x=e, && (9.21)${newLine}
                  ${ltx.lim0}\\dfrac{\\sin x}{x}=1, && (9.22)${newLine}
                  ${ltx.lim0}\\dfrac{\\ln(1+x)}{x}=1, && (9.23)${newLine}
                  ${ltx.lim0}\\dfrac{e^x-1}{x}=1, && (9.24)${newLine}
                  ${ltx.lim0Pl}x^\\alpha \\ln x=0 & (\\alpha>0) & (9.25),
                  \\end{matrix*}${newLine}$
                  `}</Latex>
        </DecreaseMobileFont>

        <Latex>{`Om vi utgår från 9.19 och 9.21 kan vi härleda de fem övriga:
                $${newLine}
                (9.20):${breakLine} \\text{Låt } t=^a\\log x: ${ltx.limInf}\\dfrac{x^\\alpha}{^a\\log x}=
                \\begin{bmatrix*}[l]
                  t=^a\\log x & \\Rarr & x=a^t${breakLine}
                  x \\rarr\\infin & \\Rarr & t\\rarr\\infin
                \\end{bmatrix*}${newLine}
                \\lim\\limits_{t\\rightarrow\\infin}\\dfrac{(a^t)^\\alpha}{t}=\\lim\\limits_{t\\rightarrow\\infin}\\dfrac{(a^\\alpha)^t}{t}=\\infin$ enligt (9.19)
                $${newLine}(9.22):${breakLine}
                \\text{Vi undersöker först funktionen för } x > 0.${breakLine}
                $ Eftersom $x$ kan antas vara litet går det bra att föursätta att $x<\\frac\\pi2${breakLine}
                \\text{Enligt sats 8.5 gäller då att}${breakLine}
                \\sin x < x < \\tan x ${ltx.iss}
                \\sin x < x < \\dfrac{\\sin x}{\\cos x} ${ltx.iss}
                1 < \\dfrac{x}{\\sin x} < \\dfrac{1}{\\cos x}${newLine}
                \\text{Då }\\cos x\\text{ är kontinuerlig gäller att }\\dfrac{1}{cox}\\rarr1\\text{ då }x\\rarr0^+.${breakLine}
                \\dfrac{x}{sin x} $ är då instängd av två funktioner som båda har gränsvärdet 1, alltså:$${newLine}
                ${ltx.lim0Pl}\\dfrac{x}{\\sin x}=1 ${ltx.iss}${ltx.lim0Pl}\\dfrac{\\sin x}{x}=${ltx.iss}\\dfrac{1}{\\frac{1}{\\sin x}}=1 \\#
                $`}</Latex>
      </Assignment>
    </Container>
  );
};

export default Rehearsal;

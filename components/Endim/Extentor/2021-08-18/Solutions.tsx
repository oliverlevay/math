import React from 'react';
import styled from 'styled-components';
import Latex from 'react-latex-next';
import Assignment from 'components/Assignment';
import { ltx } from 'lib/latexHelpers';

const Container = styled.div``;

const breakLine = '\\\\';
const newLine = '\\\\~\\\\';

const Solutions = () => {
  return (
    <Container>
      <p>
        INGA HJÄLPMEDEL. Lösningarna skall vara försedda med ordentliga
        motiveringar. Lämna tydliga svar. Varje uppgift kan som mest ge 3 poäng.
      </p>
      <h3>Godkänt del</h3>
      För att bli godkänd krävs dels högst en uppgift med 0 poäng av dessa sex
      uppgifter, dels minst 9 poäng av 18 möjliga.
      <h4>Uppgift 1.</h4>
      <p>
        Till denna uppgift krävs endast svar. Eventuella lösningar kommer ej att
        bedömas. 0-3 rätt ger 0 poäng, 4 rätt ger 1 poäng, 5 rätt ger 2 poäng
        och 6 rätt ger 3 poäng.
      </p>
      <Assignment
        title={`$a)\\text{ Beräkna }\\dfrac{\\frac23-\\frac12}{2-\\frac13}$`}
        id='1a'
      >
        <Latex>{`$
        \\dfrac{\\frac{2}{3}-\\frac{1}{2}}{2-\\frac{1}{3}}=
        \\dfrac{\\frac{4}{6}-\\frac{3}{6}}{\\frac{6}{3}-\\frac{1}{3}}=
        \\dfrac{\\frac{1}{6}}{\\frac{5}{3}}=
        \\dfrac{1}{6}\\cdot\\dfrac{3}{5}=
        \\dfrac{3}{30}=\\dfrac{1}{10}
        $`}</Latex>
      </Assignment>
      <Assignment
        title={`$b)$ Låt $\\ell$ vara linjen som går genom punkterna $(-1, 1)$ och $(3, -1)$ Ange linjens ekvation i formen $y=kx+m$`}
        id='1b'
      >
        <Latex>{`$
        \\text{Tvåpunktsformeln: } y - y_1 = \\dfrac{y_2-y_1}{x_2-x_1}(x-x_1):${newLine}
        y-1=\\dfrac{-1-1}{3-(-1)}(x-(-1))=-\\frac{1}{2}(x+1)=-\\frac{1}{2}x-\\frac{1}{2}${breakLine}
        y-1=-\\frac{1}{2}x-\\frac{1}{2}${ltx.iss}y=\\frac{1}{2}-\\frac{1}{2}x
        $`}</Latex>
      </Assignment>
      <Assignment
        title={`$c)$ Ange alla vinklar $\\alpha$ mellan 0 och 360 grader som uppfyller $\\sin\\alpha=-\\frac{\\sqrt{2}}{2}$.`}
        id='1c'
      >
        <Latex>{`$
        255\\degree \\text{ och } 315 \\degree
        $`}</Latex>
      </Assignment>
      <Assignment title={`$d)$ Lös ekvationen $x^3 = 2x^2 + 3x$.`} id='1a'>
        <Latex>{`$
        x^3=2x^2+3x${ltx.iss}x^3-(2x^2+3x)=0${ltx.iss}x(x^2-2x-3)=0${breakLine}
        \\text{Dela upp i fall:}${breakLine}
        x=0\\text{ och }x^2-2x-3=0${breakLine}
        x^2-2x-3=0${ltx.iss}x=1\\plusmn\\sqrt{1+3}${ltx.iss}x_1=3,x_2=-1${breakLine}
        \\text{Svar: }x_1=3,x_2=-1,x_3=0
        $`}</Latex>
      </Assignment>
      <Assignment title='$e)$ Lös olikheten $\dfrac{x+2}{1-x} > 0$' id='1e'>
        <Latex>{`$
        x\\neq1${newLine}
        \\text{Dela upp i fall:}${breakLine}
        x+2>0${ltx.iss}x>-2${breakLine}
        1-x>0${ltx.iss}x<1${newLine}
        x+2<0${ltx.iss}x<-2${breakLine}
        1-x<0${ltx.iss}x>1${newLine}
        \\text{Svar: } -2<x<1
        $`}</Latex>
      </Assignment>
      <Assignment title='$f)$ Lös ekvationen $\ln(1-x)-\ln(x+3)=\ln1$' id='1e'>
        <Latex>{`$
        \\ln(1-x)-\\ln(x+3)=\\ln1${ltx.iss}\\ln(1-x)-\\ln(x+3)=0${ltx.iss}${breakLine}
        \\ln(1-x)=\\ln(x+3)${ltx.iss}1-x=x+3${ltx.iss}x=-1
        $`}</Latex>
      </Assignment>
    </Container>
  );
};

export default Solutions;

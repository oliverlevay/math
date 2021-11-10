import React from "react";
import styled from "styled-components";
import Latex from "react-latex-next";
import Assignment from "components/Assignment";

const Container = styled.div`
  width: 100%;
`;

const Solutions = () => {
  return (
    <Container>
      <h3>Partialintegration</h3>
      <p>
        12.17 Bestäm med hjälp av partialintegration samtliga primitiver till
      </p>
      <Assignment author="Oliver" title={`a) $x^2 \\ln x$`} id="12.17a">
        <Latex>{`
        Formeln för partialintegration ges av $\\\\
        \\displaystyle\\int f(x)g(x)dx=F(x)g(x)-\\int F(x)g'(x)dx, \\\\$
        och målet med omskrivningen är att $F(x)g'(x)$ ska vara lättare att hantera
        än $f(x)g(x)$ som vi startar med. Eftersom derivatan $\\ln x$ blir ett
        relativt enkelt uttryck, $1/x$, sätter vi $f(x)=x^2$ och $g(x)=\\ln x \\\\$
        Då får vi: 
        $\\\\ \\displaystyle
        \\int x^2\\ln x \\,dx=
        \\frac{1}{3}x^3 \\ln x-\\int \\frac{1}{3}\\cdot\\frac{1}{x}dx=
        \\dfrac{1}{3}x^3\\ln x - \\int\\frac{1}{3}x^2\\,dx=
        \\frac{1}{3}\\ln x-\\frac{1}{9}x^3+C
        \\\\~\\\\
        \\textbf {Svar: } \\frac{1}{3}\\ln x-\\frac{1}{9}x^3+C
        $`}</Latex>
      </Assignment>
      <Assignment author="Oliver" title={`b) $xe^{-x}$`} id="12.17b">
        <Latex>{`
        Vilken funktion är lättast att integrera, och hur interagerar det resultatet med derivatan av den andra funktionen?
        $\\\\ \\displaystyle
        \\int xe^{-x} dx=
        -e^{-x}\\cdot x - \\int -e^{-x}\\cdot1 dx=
        -e^{-x}x-e^{-x}+C=
        -(x+1)e^{-x}+C
        \\\\~\\\\
        \\textbf {Svar: } -(x+1)e^{-x}+C
        $`}</Latex>
      </Assignment>
      <Assignment author="Oliver" title={`c) $\\sqrt{x} \\ln x$`} id="12.17c">
        <Latex>{`$
        \\\\ \\displaystyle
        \\sqrt{x}=x^{1/2} \\\\~\\\\
        \\int x^{1/2} \\ln x dx=
        \\frac{x^{3/2}}{3/2}\\ln x-\\int \\frac{x^{3/2}}{3/2} \\cdot \\frac{1}{x} dx=
        \\frac{2}{3}x^{3/2}\\ln x-\\int \\frac{2}{3}\\cdot\\frac{x^{3/2}}{x^1} dx=
        \\frac{2}{3}x^{3/2}\\ln x-\\frac{2}{3}\\int x^{1/2} dx= \\\\~\\\\
        =\\frac{2}{3}x^{3/2}\\ln x-\\frac{2}{3}\\cdot\\frac{x^{3/2}}{3/2}+C=
        \\frac{2}{3}x^{3/2}\\ln x-\\frac{4}{9}x^{3/2}
        \\\\~\\\\
        \\textbf {Svar: } -(x+1)e^{-x}+C
        $`}</Latex>
      </Assignment>
      <Assignment author="Oliver" title={`d) $\\arctan x$`} id="12.17d">
        <Latex>{`$
        \\\\ \\displaystyle
        \\arctan x= 1 \\cdot \\arctan x 
        \\\\~\\\\
        \\int 1\\cdot \\arctan x=
        x\\arctan x-\\int x\\cdot\\frac{1}{1+x^2}dx
        \\\\~\\\\
        \\int x\\cdot\\frac{1}{1+x^2}dx=
        \\begin{bmatrix}
        t=1+x^2 \\\\
        dx=\\dfrac{1}{2x}
        \\end{bmatrix}
        =\\frac{1}{2}\\int\\frac{1}{t}dt=
        \\frac{1}{2}\\ln|t|+C=
        \\frac{1}{2}\\ln(1+x^2)+C
        \\\\~\\\\
        x\\arctan x-\\int x\\cdot\\frac{1}{1+x^2}dx=
        x\\arctan x - \\frac{1}{2}\\ln (1+x)^2+C
        \\\\~\\\\
        \\textbf {Svar: } x\\arctan x - \\frac{1}{2}\\ln (1+x)^2+C
        $`}</Latex>
      </Assignment>
      {/*       <Assignment author="Oliver" title={`e) $x \\arctan x$`} id="12.17e">
        <Latex>{`$
        $`}</Latex>
      </Assignment>
      <Assignment author="Oliver" title={`f) $\\ln(x+1)$`} id="12.17f">
        <Latex>{`$
        $`}</Latex>
      </Assignment>
      <Assignment author="Oliver" title={`g) $\\ln^2x$`} id="12.17g">
        <Latex>{`$
        $`}</Latex>
      </Assignment> */}
    </Container>
  );
};

export default Solutions;

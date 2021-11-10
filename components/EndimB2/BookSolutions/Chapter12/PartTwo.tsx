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
      <Assignment author="Oliver" title={`f) $\\ln(x+1)$`} id="12.17f">
        <Latex>{`$
        \\displaystyle
        \\int \\ln (x+1)\\,dx=
        \\begin{bmatrix}
        t=x+1 \\\\
        dx=1dt
        \\end{bmatrix}
        =\\int 1\\cdot\\ln t\\,dt=
        t\\cdot\\ln(t)-\\int t\\cdot \\frac{1}{t}\\,dt=
        \\\\~\\\\
        (x+1)\\ln(x+1)-(x+1)+C=
        (x+1)\\ln(x+1)-x-1+C=
        (x+1)\\ln(x+1)-x+C
        \\\\~\\\\
        \\textbf {Svar: } (x+1)\\ln(x+1)-x+C
        $`}</Latex>
      </Assignment>
      <Assignment author="Oliver" title={`g) $\\ln^2x$`} id="12.17g">
        <Latex>{`$
        \\displaystyle
        \\int 1 \\cdot \\ln^2 x\\,dx=
        x(\\ln x)^2-\\int\\frac{2\\ln x}{x}dx=
        x(\\ln x)^2-\\int 2\\ln x\\,dx=
        x(\\ln x)^2-(x\\cdot2x\\ln x-\\int x\\cdot\\frac{2}{x})=

        \\\\~\\\\
        =x(\\ln x)^2-2x\\ln x+2x+C
        \\\\~\\\\
        \\textbf {Svar: } x(\\ln x)^2-2x\\ln x+2x+C
        $`}</Latex>
      </Assignment>

      <p>
        12.18 Bestäm med hjälp av partialintegration samtliga primitiver till{" "}
      </p>
      <Assignment author="Oliver" title={`b) $e^{2x}\\sin 3x$`} id="12.18b">
        <Latex>{`$
        \\displaystyle
        F(x)=\\int e^{2x}\\sin 3x=
        \\frac{1}{2}e^{2x}\\sin 3x-\\int \\frac{1}{2}e^{2x}\\cdot3\\cos 3x\\,dx=
        \\frac{1}{2}e^{2x}\\sin 3x-(\\frac{1}{4}e^{2x}\\cdot3\\cos 3x-\\int \\frac{1}{4}e^{2x}\\cdot(-9\\sin 3x))=
        \\\\~\\\\
        F(x)=\\frac{1}{2}e^{2x}\\sin 3x-\\frac{1}{4}e^{2x}\\cdot3\\cos 3x-\\frac{9}{4}\\int e^{2x}\\sin 3x \\Leftrightarrow
        \\frac{1}{4}e^{2x} 2\\sin 3x-\\frac{1}{4}e^{2x}3 \\cos 3x=\\frac{13}{4}F(x) \\Leftrightarrow
        \\\\~\\\\
        13F(x)=e^{2x} 2\\sin 3x-e^{2x}3 \\cos 3x\\Leftrightarrow F(x)=\\frac{1}{13}e^{2x}(2\\sin 3x-3\\cos 3x)
        \\\\~\\\\
        \\textbf {Svar: } \\frac{1}{13}e^{2x}(2\\sin 3x-3\\cos 3x)
        $`}</Latex>
      </Assignment>
      {/*       <p>
        <Latex>{`12.19 Bestämma alla primitiva funktioner till $12.16$ b) och c) med hjälp av partialintegration`}</Latex>
      </p> */}
    </Container>
  );
};

export default Solutions;

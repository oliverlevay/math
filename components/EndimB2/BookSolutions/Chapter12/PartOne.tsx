import React from "react";
import styled from "styled-components";
import Latex from "react-latex-next";
import Assignment from "components/Assignment";
import { newLine, breakLine } from "lib/latexHelpers";

const Container = styled.div`
  width: 100%;
`;

const Solutions = () => {
  return (
    <Container>
      <p>
        För lösningar jag inte har gjort än får kan ni kolla på{" "}
        <a
          href="/assets/Losning_till_forelasning_4.pdf"
          rel="noopener noreferrer"
          target="_blank"
        >
          Hanxuans lösningar (PDF)
        </a>{" "}
        eller{" "}
        <a
          href="/assets/U12-endim.pdf"
          rel="noopener noreferrer"
          target="_blank"
        >
          de här lösningarna jag hittade på tekniskfysik.org (PDF)
        </a>
      </p>
      <p>
        <Latex>{`12.1 $\\quad$Ange alla primitiva funktioner till:`}</Latex>
      </p>
      <Assignment title={`a) $x^4$`} id="12.1a">
        <Latex>{`$
        \\displaystyle
        \\int{x^\\alpha dx}=\\dfrac{x^{\\alpha+1}}{\\alpha+1}+C\\quad(\\alpha\\neq -1)${newLine}
        \\displaystyle
        \\int x^4 dx=\\dfrac{x^{4+1}}{4+1}+C=\\dfrac{x^5}{5}+C=\\frac{1}{5}x^5+C
        ${newLine}\\textbf{Svar: } \\frac{1}{5}x^5+C$`}</Latex>
      </Assignment>
      <Assignment title={`b) $\\dfrac1x$`} id="12.1b">
        <Latex>{`$
        $Se sida 282 i läroboken$${newLine}
        \\displaystyle
        \\int{\\dfrac{1}{x}dx}=\\ln |x|+C
        ${newLine}\\textbf{Svar: } \\ln |x|+C$`}</Latex>
      </Assignment>
      <Assignment title={`c) $e^x$`} id="12.1c">
        <Latex>{`$
        \\displaystyle
        \\int{e^xdx}=e^x+C
        ${newLine}\\textbf{Svar: } e^x+C$`}</Latex>
      </Assignment>
      <Assignment title={`d) $\\cos x$`} id="12.1d">
        <Latex>{`$
        \\displaystyle
        \\int\\cos x dx=\\sin x+C
        ${newLine}\\textbf{Svar: } \\sin x+C$`}</Latex>
      </Assignment>
      <Assignment title={`e) $\\sin x$`} id="12.1e">
        <Latex>{`$
        \\displaystyle
        \\int\\sin x dx=-\\cos x+C
        ${newLine}\\textbf{Svar: } -\\cos x+C$`}</Latex>
      </Assignment>
      <Assignment title={`f) $\\dfrac{1}{cos^2x}$`} id="12.1f">
        <Latex>{`$
        \\displaystyle
        \\int\\dfrac{1}{cos^2x}dx=\\tan x+C
        ${newLine}\\textbf{Svar: } \\tan x+C$`}</Latex>
      </Assignment>
      <Assignment title={`g) $\\dfrac{1}{sin^2x}$`} id="12.1g">
        <Latex>{`$
        \\displaystyle
        \\int\\dfrac{1}{sin^2x}dx=-$cot $ x+C
        ${newLine}\\textbf{Svar: } -$cot $ x+C$`}</Latex>
      </Assignment>
      <Assignment title={`h) $\\dfrac{1}{1+x^2}$`} id="12.1h">
        <Latex>{`$
        \\displaystyle
        \\int\\dfrac{1}{1+x^2}dx=\\arctan x+C
        ${newLine}\\textbf{Svar: } \\arctan x+C$`}</Latex>
      </Assignment>
      <Assignment title={`i) $\\dfrac{1}{\\sqrt{1-x^2}}$`} id="12.1i">
        <Latex>{`$
        \\displaystyle
        \\int\\dfrac{1}{\\sqrt{1-x^2}}dx=\\arcsin x+C
        ${newLine}\\textbf{Svar: } \\arcsin x+C$`}</Latex>
      </Assignment>
      <Assignment title={`j) $\\dfrac{1}{\\sqrt{x^2+\\alpha}}$`} id="12.1j">
        <Latex>{`$
        $Se sida 282 i läroboken$${newLine}
        \\displaystyle
        \\int\\dfrac{1}{\\sqrt{x^2+\\alpha}}dx=ln|x+\\sqrt{x^2+\\alpha}|+C
        ${newLine}\\textbf{Svar: } ln|x+\\sqrt{x^2+\\alpha}|+C$`}</Latex>
      </Assignment>

      <p>
        <Latex>{`12.2 $\\quad$ Bestäm en primitiv funktion till:`}</Latex>
      </p>
      <Assignment title={`a) $x^3$`} id="12.2a">
        <Latex>{`$
        $Eftersom vi endast söker $\\textbf{en}$ primitiv funktion kan vi utelämna $C$$${newLine}
        \\displaystyle
        \\int{x^\\alpha dx}=\\dfrac{x^{\\alpha+1}}{\\alpha+1}\\quad(\\alpha\\neq -1)${newLine}
        \\displaystyle
        \\int x^3 dx=\\dfrac{x^{3+1}}{3+1}=\\dfrac{x^4}{4}${newLine}
        ${newLine}\\textbf{Svar: } \\dfrac{x^4}{4}$`}</Latex>
      </Assignment>
      <Assignment title={`b) $\\dfrac{1}{x^3}$`} id="12.2b">
        <Latex>{`$
        $Eftersom vi endast söker $\\textbf{en}$ primitiv funktion kan vi utelämna $C$$${newLine}
        \\dfrac{1}{x^3}=x^{-3}${newLine}
        \\displaystyle
        \\int{x^\\alpha dx}=\\dfrac{x^{\\alpha+1}}{\\alpha+1}\\quad(\\alpha\\neq -1)${newLine}
        \\displaystyle
        \\int x^{-3} dx=\\dfrac{x^{-3+1}}{-3+1}=\\dfrac{x^{-2}}{-2}${newLine}
        \\dfrac{x^{-2}}{-2}=
        \\dfrac{\\dfrac{1}{x^2}}{-\\dfrac{2}{1}}=
        \\dfrac{1}{x^2}\\cdot-\\dfrac{1}{2}=
        -\\dfrac{1}{2x^2}
        ${newLine}\\textbf{Svar: } -\\dfrac{1}{2x^2}$`}</Latex>
      </Assignment>
      <Assignment title={`c) $\\sqrt{x}$`} id="12.2c">
        <Latex>{`$
        $Eftersom vi endast söker $\\textbf{en}$ primitiv funktion kan vi utelämna $C$$${newLine}
        \\sqrt{x}=x^\\frac{1}{2}${newLine}
        \\displaystyle
        \\int{x^\\alpha dx}=\\dfrac{x^{\\alpha+1}}{\\alpha+1}\\quad(\\alpha\\neq -1)${newLine}
        \\displaystyle
        \\int x^{\\frac{1}{2}} dx=\\dfrac{x^{\\frac{1}{2}+1}}{\\frac{1}{2}+1}=\\dfrac{x^{\\frac{3}{2}}}{\\frac{3}{2}}${newLine}
        \\dfrac{x^{\\frac{3}{2}}}{\\frac{3}{2}}=
        \\dfrac{x^1\\cdot x^{\\frac{1}{2}}}{\\frac{3}{2}}=
        \\dfrac{x\\sqrt{x}}{\\frac{3}{2}}=
        \\dfrac{2}{3}x\\sqrt{x}
        ${newLine}\\textbf{Svar: } \\dfrac{2}{3}x\\sqrt{x}$`}</Latex>
      </Assignment>
      <Assignment title={`d) $x\\sqrt{x}$`} id="12.2d">
        <Latex>{`$
        $Eftersom vi endast söker $\\textbf{en}$ primitiv funktion kan vi utelämna $C$$${newLine}
        x\\sqrt{x}=x^\\frac{3}{2}${newLine}
        \\displaystyle
        \\int{x^\\alpha dx}=\\dfrac{x^{\\alpha+1}}{\\alpha+1}\\quad(\\alpha\\neq -1)${newLine}
        \\displaystyle
        \\int x^{\\frac{3}{2}} dx=\\dfrac{x^{\\frac{3}{2}+1}}{\\frac{3}{2}+1}=\\dfrac{x^{\\frac{5}{2}}}{\\frac{5}{2}}${newLine}
        \\dfrac{x^{\\frac{5}{2}}}{\\frac{5}{2}}=
        \\dfrac{x^2\\cdot x^{\\frac{1}{2}}}{\\frac{5}{2}}=
        \\dfrac{x^2\\sqrt{x}}{\\frac{5}{2}}=
        \\dfrac{2}{5}x^2\\sqrt{x}
        ${newLine}\\textbf{Svar: } \\dfrac{2}{5}x^2\\sqrt{x}$`}</Latex>
      </Assignment>
      <Assignment title={`e) $\\dfrac{1}{\\sqrt{x}}$`} id="12.2e">
        <Latex>{`$
        $Eftersom vi endast söker $\\textbf{en}$ primitiv funktion kan vi utelämna $C$$${newLine}
        \\dfrac{1}{\\sqrt{x}}=\\dfrac{1}{x^{\\frac{1}{2}}}=x^{-\\frac{1}{2}}${newLine}
        \\displaystyle
        \\int{x^\\alpha dx}=\\dfrac{x^{\\alpha+1}}{\\alpha+1}\\quad(\\alpha\\neq -1)${newLine}
        \\displaystyle
        \\int x^{-\\frac{1}{2}} dx=\\dfrac{x^{-\\frac{1}{2}+1}}{-\\frac{1}{2}+1}=\\dfrac{x^{\\frac{1}{2}}}{\\frac{1}{2}}${newLine}
        \\dfrac{x^{\\frac{1}{2}}}{\\frac{1}{2}}=
        \\dfrac{\\sqrt{x}}{\\frac{1}{2}}=
        2\\sqrt{x}
        ${newLine}\\textbf{Svar: } 2\\sqrt{x}$`}</Latex>
      </Assignment>
      <Assignment title={`f) $\\dfrac{1}{x\\sqrt{x}}$`} id="12.2f">
        <Latex>{`$
        $Eftersom vi endast söker $\\textbf{en}$ primitiv funktion kan vi utelämna $C$$${newLine}
        \\dfrac{1}{x\\sqrt{x}}=\\dfrac{1}{x^{\\frac{3}{2}}}=x^{-\\frac{3}{2}}${newLine}
        \\displaystyle
        \\int{x^\\alpha dx}=\\dfrac{x^{\\alpha+1}}{\\alpha+1}\\quad(\\alpha\\neq -1)${newLine}
        \\displaystyle
        \\int x^{-\\frac{3}{2}} dx=\\dfrac{x^{-\\frac{3}{2}+1}}{-\\frac{3}{2}+1}=\\dfrac{x^{-\\frac{1}{2}}}{-\\frac{1}{2}}${newLine}
        \\dfrac{x^{-\\frac{1}{2}}}{-\\frac{1}{2}}=
        \\dfrac{\\dfrac{1}{\\sqrt{x}}}{-\\dfrac{1}{2}}=
        \\dfrac{1}{\\sqrt{x}}\\cdot-\\dfrac{2}{1}=
        -\\dfrac{2}{\\sqrt{x}}
        ${newLine}\\textbf{Svar: } -\\dfrac{2}{\\sqrt{x}}$`}</Latex>
      </Assignment>

      <p>
        <Latex>{`12.3 $\\quad$ Bestäm en primitiv funktion till:`}</Latex>
      </p>
      <Assignment title={`d) $\\dfrac{2}{x+1}$`} id="12.3d">
        <Latex>{`$
        $Eftersom vi endast söker $\\textbf{en}$ primitiv funktion kan vi utelämna $C$$${newLine}
        \\displaystyle\\int{2\\cdot\\dfrac{1}{x+1}dx}=
        2\\displaystyle\\int{\\dfrac{1}{x+1}dx}
        =\\begin{bmatrix}
        t=x+1${breakLine}
        dx=dt
        \\end{bmatrix}
        =2\\int{\\dfrac{1}{t}}dt
        =2\\ln |x+1|${newLine}
        ${breakLine}\\textbf{Svar: } 2\\ln |x+1|$`}</Latex>
      </Assignment>
      <Assignment title={`e) $\\dfrac{1}{2x+1}$`} id="12.3e">
        <Latex>{`$
        $Eftersom vi endast söker $\\textbf{en}$ primitiv funktion kan vi utelämna $C$$${newLine}
        \\displaystyle\\int{\\dfrac{1}{2x+1}dx}
        =\\begin{bmatrix}
        t=2x+1${breakLine}
        dt=2dx \\Rightarrow dx=\\frac12dt
        \\end{bmatrix}=
        \\int{\\dfrac{1}{t}}\\cdot\\frac{1}{2}dt=
        \\dfrac{1}{2}\\int{\\dfrac{1}{t}dt}
        =\\frac{1}{2}\\ln|t|=\\frac{1}{2}\\ln|2x+1|${newLine}
        ${breakLine}\\textbf{Svar: } \\frac{1}{2}\\ln|2x+1|$`}</Latex>
      </Assignment>
      <Assignment title={`l) $\\dfrac{2}{(1-3x)^2}$`} id="12.3l">
        <Latex>{`$
        $Eftersom vi endast söker $\\textbf{en}$ primitiv funktion kan vi utelämna $C$$${breakLine}
        \\displaystyle\\int{\\dfrac{2}{(1-3x)^2}dx}
        =\\begin{bmatrix}
        t=1-3x${breakLine}
        dt=-3dx \\Rightarrow dx=-\\frac{1}{3}dt
        \\end{bmatrix}=
        \\int{\\dfrac{2}{t^2}}\\cdot-\\frac{1}{3}dt=
        -\\dfrac{2}{3}\\int{t^{-2}dt}=${newLine}
        -\\frac{2}{3}\\cdot-t^{-1}=-\\frac{2}{3}-\\frac{1}{t}=\\frac{2}{3t}=\\frac{2}{3(1-3x)}${newLine}
        ${breakLine}\\textbf{Svar: } \\dfrac{2}{3(1-3x)}$`}</Latex>
      </Assignment>

      <p>
        <Latex>{`12.5 $\\quad$ Bestäm en primitiv funktion till:`}</Latex>
      </p>
      <Assignment title={`a) $\\sin 2x$`} id="12.5a">
        <Latex>{`$
        \\displaystyle\\int{\\sin 2xdx}
        =\\begin{bmatrix}
        t=2x${breakLine}
        dx=\\frac12dt
        \\end{bmatrix}=
        \\int\\sin t\\cdot\\frac12\\cdot dt=\\frac12\\int\\sin t\\,dt=\\frac12-\\cos t=-\\frac12\\cos2x
        
        ${newLine}\\textbf{Svar: } -\\frac12\\cos2x$`}</Latex>
      </Assignment>
      <Assignment title={`b) $\\sin \\frac{x}{3}$`} id="12.5b">
        <Latex>{`$
        \\displaystyle\\int\\sin \\frac{x}{3}dx
        =\\begin{bmatrix}
        t=\\frac{x}{3}${breakLine}
        dx=3dt
        \\end{bmatrix}=
        \\int\\sin t\\cdot3\\cdot dt=
        3\\int\\sin t\\,dt=
        3\\cdot-\\cos t=-3\\cos\\frac{x}{3}
        
        ${newLine}\\textbf{Svar: } -3\\cos\\frac{x}{3}$`}</Latex>
      </Assignment>
      <Assignment title={`c) $\\sin (2x+\\frac\\pi3)$`} id="12.5b">
        <Latex>{`$
        \\displaystyle\\int\\sin (2x+\\frac\\pi3)dx
        =\\begin{bmatrix}
        t=2x+\\frac\\pi3${breakLine}
        dx=\\frac12dt
        \\end{bmatrix}=
        \\int\\sin t\\cdot\\frac12dt=
        \\frac12\\int\\sin t\\,dt=
        \\frac12\\cdot-\\cos t=-\\frac12\\cos(2x + \\frac\\pi3)
        
        ${newLine}\\textbf{Svar: } -\\frac12\\cos(2x + \\frac\\pi3)$`}</Latex>
      </Assignment>

      <p>
        <Latex>{`12.6 $\\quad$ Är $\\dfrac{e^{x^2}}{2x}$ en primitiv funktion till $e^{x^2}$? Motivera ditt svar.`}</Latex>
      </p>
      {/**
       * ???? Jag fattar inte den här lösningen
       */}
      <Assignment title={`Lösning`} id="12.6">
        <Latex>{`
        Nej, deriverar vi $\\dfrac{e^{x^2}}{2x}$ använder vi "kvotregeln:
        $${newLine}
        D\\dfrac{e^{x^2}}{2x}=\\dfrac{4x^2e^{x^2}-2e^{x^2}}{4x^2}=e^{x^2}(1-\\dfrac{1}{2x^2})$`}</Latex>
      </Assignment>

      <p>
        <Latex>{`12.7 $\\quad$`}</Latex>
      </p>
      <Assignment
        title={`a) Hur kan man, utan några beräkningar, direkt bestämma $\\int e^{x^2}2xdx$?`}
        id="12.7a"
      >
        <Latex>{`
        Notera att 2x motsvarar den inre derivatan vid derivering av $e^{x^2}$; vi har $De^{x^2}=e^{x^2}\\cdot2x.${breakLine}$
        Samtliga primitver ges alltså av $e^{x^2}+C$.
        `}</Latex>
      </Assignment>
      <Assignment
        title={`b) Bestäm 
                  $${breakLine}\\qquad \\int e^{x^2}\\cdot2xdx${breakLine}$
                $\\quad$ genom att först utföra variabelbytet $t=x^2$.`}
        id="12.7b"
      >
        <Latex>{`
        Om vi utför variabelbytet t=x^2 så får vi$${newLine}
        \\displaystyle
        \\int e^{x^2}2xdx
        =\\begin{bmatrix}
        t=x^2${breakLine}
        \\frac{dt}{dx}=2x \\Rightarrow dx=\\frac{1}{2x}dt
        \\end{bmatrix}=
        \\int e^t dt=e^t+C=e^{x^2}+C
        ${newLine}\\textbf{Svar: } e^{x^2}+C$`}</Latex>
      </Assignment>

      <p>
        <Latex>{`12.8 Bestäm en primitiv funktion till:`}</Latex>
      </p>
      <Assignment title={`a) $e^{x^2}\\cdot x$`} id="12.8a">
        <Latex>{`$
        \\displaystyle
        \\int e^{x^2}x dx
        =\\begin{bmatrix}
        t=x^2${breakLine}
        \\frac{dt}{dx}=2x \\Rightarrow dx=\\frac{1}{2x}dt
        \\end{bmatrix}=
        \\int e^t \\frac12 dt=
        \\frac12\\int e^t dt=
        \\frac12e^t=
        \\frac12e^{x^2}
        ${newLine}\\textbf{Svar: } \\frac12e^{x^2}$`}</Latex>
      </Assignment>
      <Assignment title={`b) $\\dfrac{x}{3}e^{x^2} x$`} id="12.8b">
        <Latex>{`$
        \\displaystyle
        \\int \\dfrac{x}{3}e^{x^2} dx
        =\\begin{bmatrix}
        t=x^2${breakLine}
        dx=\\frac{1}{2x}dt
        \\end{bmatrix}=
        \\int e^t \\frac16 dt=
        \\frac16\\int e^t dt=
        \\frac16e^t=
        \\frac16e^{x^2}
        ${newLine}\\textbf{Svar: } \\frac16e^{x^2}$`}</Latex>
      </Assignment>
      <Assignment title={`c) $\\cos x^2\\cdot 2x$`} id="12.8c">
        <Latex>{`$
        \\displaystyle
        \\int \\cos x^2\\cdot 2x dx
        =\\begin{bmatrix}
        t=x^2${breakLine}
        dx=\\frac{1}{2x}dt
        \\end{bmatrix}=
        \\int \\cos t\\,dt=
        \\sin t=
        \\sin x^2
        ${newLine}\\textbf{Svar: } \\sin x^2$`}</Latex>
      </Assignment>
      <Assignment title={`d) $x\\cos x^2$`} id="12.8d">
        <Latex>{`$
        \\displaystyle
        \\int x\\cos x^2 dx
        =\\begin{bmatrix}
        t=x^2${breakLine}
        dx=\\frac{1}{2x}dt
        \\end{bmatrix}=
        \\int \\cos t\\frac12 dt=
        \\frac12\\int \\cos t\\,dt=
        \\frac12\\sin t=
        \\frac12\\sin x^2
        ${newLine}\\textbf{Svar: } \\frac12\\sin x^2$`}</Latex>
      </Assignment>
      <Assignment title={`e) $x^2\\cos x^3$`} id="12.8e">
        <Latex>{`$
        \\displaystyle
        \\int x^2\\cos x^3 dx
        =\\begin{bmatrix}
        t=x^3${breakLine}
        dx=\\frac{1}{3x^2}dt
        \\end{bmatrix}=
        \\int \\cos t\\frac13 dt=
        \\frac13\\int \\cos t\\,dt=
        \\frac13\\sin t=
        \\frac13\\sin x^3
        ${newLine}\\textbf{Svar: } \\frac13\\sin x^3$`}</Latex>
      </Assignment>
      <Assignment title={`f) $x^2\\sin x^3$`} id="12.8f">
        <Latex>{`$
        \\displaystyle
        \\int x^2\\sin x^3 dx
        =\\begin{bmatrix}
        t=x^3${breakLine}
        dx=\\frac{1}{3x^2}dt
        \\end{bmatrix}=
        \\int \\sin t\\frac13 dt=
        \\frac13\\int \\sin t\\,dt=
        \\frac13-\\cos t=
        -\\frac13\\cos x^3
        ${newLine}\\textbf{Svar: } -\\frac13\\cos x^3$`}</Latex>
      </Assignment>
      <Assignment title={`g) $\\dfrac{1}{x^2}\\cos(\\dfrac1x)$`} id="12.8g">
        <Latex>{`$
        \\displaystyle
        \\int \\dfrac{1}{x^2}\\cos(\\dfrac1x) dx
        =\\begin{bmatrix}
        t=\\frac{1}{x}${breakLine}
        dx=-x^2\\,dt
        \\end{bmatrix}=
        \\int -\\cos t\\,dt=
        -\\sin t=
        -\\sin x^2
        ${newLine}\\textbf{Svar: } -\\sin x^2$`}</Latex>
      </Assignment>
      <Assignment title={`h) $2x(x^2+5)^8$`} id="12.8h">
        <Latex>{`$
        \\displaystyle
        \\int 2x(x^2+5)^8 dx
        =\\begin{bmatrix}
        t=x^2+5${breakLine}
        dx=\\dfrac{1}{2x}dt
        \\end{bmatrix}=
        \\int t^8dt=
        \\dfrac{t^9}{9}=
        \\frac{1}{9}(x^2+5)^9
        ${newLine}\\textbf{Svar: } \\frac{1}{9}(x^2+5)^9$`}</Latex>
      </Assignment>

      <p>
        <Latex>{`12.9 Bestäm en primitiv funktion till:`}</Latex>
      </p>
      <Assignment title={`a) $\\sin^2 x\\cos x$`} id="12.9a">
        <Latex>{`$
        \\displaystyle
        \\int \\sin^2 x\\cos x dx
        =\\begin{bmatrix}
        t=\\sin x${breakLine}
        dx=\\dfrac{1}{\\cos x}dt
        \\end{bmatrix}=
        \\int t^2dt=
        \\dfrac{1}{3}t^3=
        \\frac{1}{3}\\sin^3 x
        ${newLine}\\textbf{Svar: } \\frac{1}{3}\\sin^3 x$`}</Latex>
      </Assignment>
      <Assignment title={`b) $\\cos x\\sin^3 x$`} id="12.9b">
        <Latex>{`$
        \\displaystyle
        \\int \\cos x\\sin^3 x dx
        =\\begin{bmatrix}
        t=\\sin x${breakLine}
        dx=\\dfrac{1}{\\cos x}dt
        \\end{bmatrix}=
        \\int t^3dt=
        \\dfrac{1}{4}t^4=
        \\frac{1}{4}\\sin^4 x
        ${newLine}\\textbf{Svar: } \\frac{1}{4}\\sin^4 x$`}</Latex>
      </Assignment>
      <Assignment title={`c) $\\sin x\\cos x$`} id="12.9c">
        <Latex>{`$
        \\displaystyle
        \\int \\cos x\\sin x\\,dx
        =\\begin{bmatrix}
        t=\\sin x${breakLine}
        dx=\\dfrac{1}{\\cos x}dt
        \\end{bmatrix}=
        \\int t^1dt=
        \\dfrac{t^2}{2}=
        \\frac{1}{2}\\sin^2 x
        ${newLine}\\textbf{Svar: } \\frac{1}{2}\\sin^2 x$`}</Latex>
      </Assignment>
      <Assignment title={`d) $\\cos x\\dfrac{1}{\\sin^2 x}$`} id="12.9d">
        <Latex>{`$
        \\displaystyle
        \\int \\cos x\\dfrac{1}{\\sin^2 x}\\,dx
        =\\begin{bmatrix}
        t=\\sin x${breakLine}
        dx=\\dfrac{1}{\\cos x}dt
        \\end{bmatrix}=
        \\int \\frac{1}{t^2}dt=
        \\int t^{-2}dt=
        -t^{-1}=
        -\\frac{1}{\\sin x}
        ${newLine}\\textbf{Svar: } -\\frac{1}{\\sin x}$`}</Latex>
      </Assignment>
      <Assignment title={`e) $\\cos x\\dfrac{1}{\\sin x}$`} id="12.9e">
        <Latex>{`$
        \\displaystyle
        \\int \\cos x\\dfrac{1}{\\sin x}\\,dx
        =\\begin{bmatrix}
        t=\\sin x${breakLine}
        dx=\\dfrac{1}{\\cos x}dt
        \\end{bmatrix}=
        \\int \\frac{1}{t}dt=
        \\ln|t|=
        \\ln|\\sin x|
        ${newLine}\\textbf{Svar: } \\ln|\\sin x|$`}</Latex>
      </Assignment>
      <Assignment title={`f) $\\dfrac{\\cos x}{\\sin x}$`} id="12.9f">
        <Latex>{`$
        \\dfrac{\\cos x}{\\sin x}=\\cos x\\dfrac{1}{\\sin x}${newLine}
        \\displaystyle
        \\int \\cos x\\dfrac{1}{\\sin x}\\,dx
        =\\begin{bmatrix}
        t=\\sin x${breakLine}
        dx=\\dfrac{1}{\\cos x}dt
        \\end{bmatrix}=
        \\int \\frac{1}{t}dt=
        \\ln|t|=
        \\ln|\\sin x|
        ${newLine}\\textbf{Svar: } \\ln|\\sin x|$`}</Latex>
      </Assignment>
      <Assignment title={`g) $\\dfrac{\\sin x}{\\cos x}$`} id="12.9g">
        <Latex>{`$
        \\displaystyle
        \\int \\dfrac{\\sin x}{\\cos x}\\,dx
        =\\begin{bmatrix}
        t=\\cos x${breakLine}
        dx=-\\dfrac{1}{\\sin x}dt
        \\end{bmatrix}=
        \\int -\\frac{1}{t}dt=
        -\\ln|t|=
        -\\ln|\\cos x|
        ${newLine}\\textbf{Svar: } -\\ln|\\cos x|$`}</Latex>
      </Assignment>
      <Assignment title={`h) $\\tan x$`} id="12.9h">
        <Latex>{`$
        \\tan x=\\dfrac{\\sin x}{\\cos x}${newLine}
        \\displaystyle
        \\int \\dfrac{\\sin x}{\\cos x}\\,dx
        =\\begin{bmatrix}
        t=\\cos x${breakLine}
        dx=-\\dfrac{1}{\\sin x}dt
        \\end{bmatrix}=
        \\int -\\frac{1}{t}dt=
        -\\ln|t|=
        -\\ln|\\cos x|
        ${newLine}\\textbf{Svar: } -\\ln|\\cos x|$`}</Latex>
      </Assignment>

      <p>
        <Latex>{`12.10 Bestäm en primitiv funktion till:`}</Latex>
      </p>
      <Assignment title={`a) $\\dfrac{1}{x^2+1}2x$`} id="12.9a">
        <Latex>{`$
        \\displaystyle
        \\int \\dfrac{1}{x^2+1}2x\\,dx
        =\\begin{bmatrix}
        t=x^2+1${breakLine}
        dx=\\dfrac{1}{2x}dt
        \\end{bmatrix}=
        \\int \\frac{1}{t}dt=
        \\ln|t|=
        \\ln(x^2+1)${newLine}$
        Här behövs inget absolutbelopp eftersom $x^2+1$ endast kan vara positivt$
        ${newLine}\\textbf{Svar: } \\ln(x^2+1)$`}</Latex>
      </Assignment>
      <Assignment title={`b) $\\dfrac{2x}{x^2+1}$`} id="12.9b">
        <Latex>{`$
        \\dfrac{2x}{x^2+1}=\\dfrac{1}{x^2+1}2x${newLine}
        \\displaystyle
        \\int \\dfrac{1}{x^2+1}2x\\,dx
        =\\begin{bmatrix}
        t=x^2+1${breakLine}
        dx=\\dfrac{1}{2x}dt
        \\end{bmatrix}=
        \\int \\frac{1}{t}dt=
        \\ln|t|=
        \\ln(x^2+1)${newLine}$
        Här behövs inget absolutbelopp eftersom $x^2+1$ endast kan vara positivt$
        ${newLine}\\textbf{Svar: } \\ln(x^2+1)$`}</Latex>
      </Assignment>
      <Assignment title={`c) $\\dfrac{x}{x^2+1}$`} id="12.9c">
        <Latex>{`$
        \\displaystyle
        \\int \\dfrac{x}{x^2+1}2x\\,dx
        =\\begin{bmatrix}
        t=x^2+1${breakLine}
        dx=\\dfrac{1}{2x}dt
        \\end{bmatrix}=
        \\frac{1}{2}\\int \\frac{1}{t}dt=
        \\frac{1}{2}\\ln|t|=
        \\frac{1}{2}\\ln(x^2+1)${newLine}$
        Här behövs inget absolutbelopp eftersom $x^2+1$ endast kan vara positivt$
        ${newLine}\\textbf{Svar: } \\frac{1}{2}\\ln(x^2+1)$`}</Latex>
      </Assignment>
      <Assignment title={`d) $\\dfrac{3x^2}{x^3+1}$`} id="12.9d">
        <Latex>{`$
        \\displaystyle
        \\int \\dfrac{3x^2}{x^3+1}\\,dx
        =\\begin{bmatrix}
        t=x^3+1${breakLine}
        dx=\\dfrac{1}{3x^2}dt
        \\end{bmatrix}=
        \\int \\frac{1}{t}dt=
        \\ln|t|=
        \\ln|x^3+1|
        ${newLine}\\textbf{Svar: } \\ln|x^3+1|$`}</Latex>
      </Assignment>
      <Assignment title={`e) $\\dfrac{x^2}{x^3+1}$`} id="12.9e">
        <Latex>{`$
        \\displaystyle
        \\int \\dfrac{x^2}{x^3+1}\\,dx
        =\\begin{bmatrix}
        t=x^3+1${breakLine}
        dx=\\dfrac{1}{3x^2}dt
        \\end{bmatrix}=
        \\frac{1}{3}\\int \\frac{1}{t}dt=
        \\frac{1}{3}\\ln|t|=
        \\frac{1}{3}\\ln|x^3+1|
        ${newLine}\\textbf{Svar: } \\frac{1}{3}\\ln|x^3+1|$`}</Latex>
      </Assignment>
      <Assignment title={`f) $\\dfrac{e^x}{e^x+1}$`} id="12.9f">
        <Latex>{`$
        \\displaystyle
        \\int \\dfrac{e^x}{e^x+1}\\,dx
        =\\begin{bmatrix}
        t=e^x+1${breakLine}
        dx=\\dfrac{1}{e^x}dt
        \\end{bmatrix}=
        \\int \\frac{1}{t}dt=
        \\ln|t|=
        \\ln(e^x+1)
        ${newLine}\\textbf{Svar: } \\ln(e^x+1)$`}</Latex>
      </Assignment>
      <Assignment title={`g) $\\dfrac{e^x-e^{-x}}{e^x+e^{-x}}$`} id="12.9g">
        <Latex>{`$
        \\displaystyle
        \\int \\dfrac{e^x-e^{-x}}{e^x+e^{-x}}\\,dx
        =\\begin{bmatrix}
        t=e^x+e^{-x}${breakLine}
        dx=\\dfrac{1}{e^x-e^{-x}}dt
        \\end{bmatrix}=
        \\int \\frac{1}{t}dt=
        \\ln|t|=
        \\ln(e^x+e^{-x})
        ${newLine}\\textbf{Svar: } \\ln(e^x+1)$`}</Latex>
      </Assignment>
      <Assignment title={`h) $\\dfrac{e^x+1}{e^x}$`} id="12.9h">
        <p>
          Om du har en lösning till denna uppgift med variabelbyte, maila gärna
          mig på{" "}
          <a href="mailto:ol1662le-s@student.lu.se">ol1662le-s@student.lu.se</a>{" "}
          eller kontakta mig på Discord: olivoljan#8007
        </p>
        <Latex>{`$
        \\displaystyle
        \\int \\dfrac{e^x+1}{e^x}\\,dx
        \\int \\dfrac{e^x}{e^x}+\\dfrac{1}{e^x}dx=
        \\int 1dx+
        \\int \\dfrac{1}{e^x}dx=
        \\int \\frac{1}{t}dt=
        x-e^{-x}
        ${newLine}\\textbf{Svar: } x-e^{-x}$`}</Latex>
      </Assignment>

      <p>
        <Latex>{`12.11 Bestäm en primitiv funktion till:`}</Latex>
      </p>
      <Assignment title={`a) $\\dfrac{1}{x}(\\ln x)^2$`} id="12.10a">
        <Latex>{`$
        \\displaystyle
        \\int \\dfrac{1}{x}(\\ln x)^2\\,dx
        =\\begin{bmatrix}
        t=\\ln x${breakLine}
        dx=xdt
        \\end{bmatrix}=
        \\int t^2\\,dt=
        \\dfrac{t^3}{3}=
        \\frac{1}{3}(\\ln x)^3
        ${newLine}\\textbf{Svar: } \\frac{1}{3}(\\ln x)^3$`}</Latex>
      </Assignment>
      <Assignment title={`b) $\\dfrac{1}{x}(\\ln x)$`} id="12.10b">
        <Latex>{`$
        \\displaystyle
        \\int \\dfrac{1}{x}(\\ln x)\\,dx
        =\\begin{bmatrix}
        t=\\ln x${breakLine}
        dx=xdt
        \\end{bmatrix}=
        \\int t\\,dt=
        \\dfrac{t^2}{2}=
        \\frac{1}{2}(\\ln x)^2
        ${newLine}\\textbf{Svar: } \\frac{1}{2}(\\ln x)^2$`}</Latex>
      </Assignment>
      <Assignment title={`c) $\\dfrac{(\\ln x)^2}{x}$`} id="12.10c">
        <Latex>{`$
        \\dfrac{(\\ln x)^2}{x}=\\dfrac{1}{x}(\\ln x)^2${newLine}
        \\displaystyle
        \\int \\dfrac{1}{x}(\\ln x)^2\\,dx
        =\\begin{bmatrix}
        t=\\ln x${breakLine}
        dx=xdt
        \\end{bmatrix}=
        \\int t^2\\,dt=
        \\dfrac{t^3}{3}=
        \\frac{1}{3}(\\ln x)^3
        ${newLine}\\textbf{Svar: } \\frac{1}{3}(\\ln x)^3$`}</Latex>
      </Assignment>
      <Assignment title={`d) $\\dfrac{\\ln x}{x}$`} id="12.10d">
        <Latex>{`$
        \\dfrac{\\ln x}{x}=\\dfrac{1}{x}(\\ln x)${newLine}
        \\displaystyle
        \\int \\dfrac{1}{x}(\\ln x)\\,dx
        =\\begin{bmatrix}
        t=\\ln x${breakLine}
        dx=xdt
        \\end{bmatrix}=
        \\int t\\,dt=
        \\dfrac{t^2}{2}=
        \\frac{1}{2}(\\ln x)^2
        ${newLine}\\textbf{Svar: } \\frac{1}{2}(\\ln x)^2$`}</Latex>
      </Assignment>
      <Assignment title={`e) $\\dfrac{1}{x}\\sin(\\ln x)$`} id="12.10e">
        <Latex>{`$
        \\displaystyle
        \\int \\dfrac{1}{x}\\sin(\\ln x)\\,dx
        =\\begin{bmatrix}
        t=\\ln x${breakLine}
        dx=xdt
        \\end{bmatrix}=
        \\int \\sin t\\,dt=
        -\\cos t=
        -\\cos \\ln x
        ${newLine}\\textbf{Svar: } \\frac{1}{2}(\\ln x)^2$`}</Latex>
      </Assignment>
      <Assignment
        title={`f) $\\dfrac{1}{x}\\cdot\\dfrac{1}{\\ln x}$`}
        id="12.10f"
      >
        <Latex>{`$
        \\displaystyle
        \\int \\dfrac{1}{x}\\cdot\\dfrac{1}{\\ln x}\\,dx
        =\\begin{bmatrix}
        t=\\ln x${breakLine}
        dx=xdt
        \\end{bmatrix}=
        \\int \\frac{1}{t}\\,dt=
        \\ln|t|=
        \\ln|\\ln x|
        ${newLine}\\textbf{Svar: } \\ln|\\ln x|$`}</Latex>
      </Assignment>
      <Assignment title={`g) $\\dfrac{1}{x\\ln x}$`} id="12.10g">
        <Latex>{`$
        \\dfrac{1}{x\\ln x}=\\dfrac{1}{x}\\cdot\\dfrac{1}{\\ln x}${newLine}
        \\displaystyle
        \\int \\dfrac{1}{x}\\cdot\\dfrac{1}{\\ln x}\\,dx
        =\\begin{bmatrix}
        t=\\ln x${breakLine}
        dx=xdt
        \\end{bmatrix}=
        \\int \\frac{1}{t}\\,dt=
        \\ln|t|=
        \\ln|\\ln x|
        ${newLine}\\textbf{Svar: } \\ln|\\ln x|$`}</Latex>
      </Assignment>
      <Assignment title={`h) $\\dfrac{\\sin(\\ln x)}{x}$`} id="12.10h">
        <Latex>{`$
        \\dfrac{\\sin(\\ln x)}{x}=\\dfrac{1}{x}\\sin(\\ln x)${newLine}
        \\displaystyle
        \\int \\dfrac{1}{x}\\sin(\\ln x)\\,dx
        =\\begin{bmatrix}
        t=\\ln x${breakLine}
        dx=xdt
        \\end{bmatrix}=
        \\int \\sin t\\,dt=
        -\\cos t=
        -\\cos \\ln x
        ${newLine}\\textbf{Svar: } \\frac{1}{2}(\\ln x)^2$`}</Latex>
      </Assignment>

      <p>
        <Latex>{`12.13 Bestäm $\\int e^x(e^x+5)^8 dx$ genom att utföra variabelbytet $t=e^x+5$`}</Latex>
      </p>
      <Assignment title={`Lösning`} id="12.6">
        <Latex>{`$
        \\displaystyle
        \\int e^x(e^x+5)^8 dx=
        \\begin{bmatrix}
        t=e^x+5${breakLine}
        dx=\\frac{1}{e^x}
        \\end{bmatrix}=
        \\int t^8dt=
        \\frac{1}{9}t^9+C=
        \\frac{1}{9}(e^x+5)^9+C
        ${newLine}\\textbf{Svar: } \\frac{1}{9}(e^x+5)^9+C $`}</Latex>
      </Assignment>

      <p>
        <Latex>{`12.14 Bestäm samtliga primitiva funktioner till`}</Latex>
      </p>
      <Assignment
        title={`a) $\\dfrac{1}{x\\ln x}$ genom att först utföra variabelbytet $t=\\ln x$`}
        id="12.14a"
      >
        <Latex>{`$
        \\dfrac{1}{x\\ln x}=\\dfrac{1}{x}\\cdot\\dfrac{1}{\\ln x}${newLine}
        \\displaystyle
        \\int \\dfrac{1}{x}\\cdot\\dfrac{1}{\\ln x}\\,dx
        =\\begin{bmatrix}
        t=\\ln x${breakLine}
        dx=xdt
        \\end{bmatrix}=
        \\int \\frac{1}{t}\\,dt=
        \\ln|t|+C=
        \\ln|\\ln x|+C
        ${newLine}\\textbf{Svar: } \\ln|\\ln x|+C$`}</Latex>
      </Assignment>
      <Assignment
        title={`b) $\\sin x \\cos^{-4/3}x$ genom att först utföra variabelbytet $t=\\cos x$`}
        id="12.14b"
      >
        <Latex>{`$
        \\displaystyle
        \\int \\sin x \\cos^{-4/3}x\\,dx
        =\\begin{bmatrix}
        t=\\cos x${breakLine}
        dx=\\dfrac{1}{\\sin x}dt
        \\end{bmatrix}=
        \\int t^{-4/3},dt=
        \\dfrac{t^{-1/3}}{-1/3}+C=\\dfrac{3}{t^{1/3}}+C=3t^{-1/3}+C=3\\cos^{-1/3} x+C
        
        ${newLine}\\textbf{Svar: } 3\\cos^{-1/3} x+C$`}</Latex>
      </Assignment>
    </Container>
  );
};

export default Solutions;

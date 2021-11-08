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
        \\displaystyle
        \\int{x^\\alpha dx}=\\dfrac{x^{\\alpha+1}}{\\alpha+1}+C\\quad(\\alpha\\neq -1)${newLine}
        \\displaystyle
        \\int x^3 dx=\\dfrac{x^{3+1}}{3+1}+C=\\dfrac{x^4}{4}+C${newLine}
        $Eftersom vi endast söker $\\textbf{en}$ primitiv funktion kan vi utelämna $C$$
        ${newLine}\\textbf{Svar: } \\dfrac{x^4}{4}$`}</Latex>
      </Assignment>
      <Assignment title={`b) $\\dfrac{1}{x^3}$`} id="12.2b">
        <Latex>{`$
        \\dfrac{1}{x^3}=x^{-3}${newLine}
        \\displaystyle
        \\int{x^\\alpha dx}=\\dfrac{x^{\\alpha+1}}{\\alpha+1}+C\\quad(\\alpha\\neq -1)${newLine}
        \\displaystyle
        \\int x^{-3} dx=\\dfrac{x^{-3+1}}{-3+1}+C=\\dfrac{x^{-2}}{-2}+C${newLine}
        $Eftersom vi endast söker $\\textbf{en}$ primitiv funktion kan vi utelämna $C$$${breakLine}
        \\dfrac{x^{-2}}{-2}=
        \\dfrac{\\dfrac{1}{x^2}}{-\\dfrac{2}{1}}=
        \\dfrac{1}{x^2}\\cdot-\\dfrac{1}{2}=
        -\\dfrac{1}{2x^2}
        ${newLine}\\textbf{Svar: } -\\dfrac{1}{2x^2}$`}</Latex>
      </Assignment>
      <Assignment title={`c) $\\sqrt{x}$`} id="12.2c">
        <Latex>{`$
        \\sqrt{x}=x^\\frac{1}{2}${newLine}
        \\displaystyle
        \\int{x^\\alpha dx}=\\dfrac{x^{\\alpha+1}}{\\alpha+1}+C\\quad(\\alpha\\neq -1)${newLine}
        \\displaystyle
        \\int x^{\\frac{1}{2}} dx=\\dfrac{x^{\\frac{1}{2}+1}}{\\frac{1}{2}+1}+C=\\dfrac{x^{\\frac{3}{2}}}{\\frac{3}{2}}+C${newLine}
        $Eftersom vi endast söker $\\textbf{en}$ primitiv funktion kan vi utelämna $C$$${breakLine}
        \\dfrac{x^{\\frac{3}{2}}}{\\frac{3}{2}}=
        \\dfrac{x^1\\cdot x^{\\frac{1}{2}}}{\\frac{3}{2}}=
        \\dfrac{x\\sqrt{x}}{\\frac{3}{2}}=
        \\dfrac{2}{3}x\\sqrt{x}
        ${newLine}\\textbf{Svar: } \\dfrac{2}{3}x\\sqrt{x}$`}</Latex>
      </Assignment>
      <Assignment title={`d) $x\\sqrt{x}$`} id="12.2d">
        <Latex>{`$
        x\\sqrt{x}=x^\\frac{3}{2}${newLine}
        \\displaystyle
        \\int{x^\\alpha dx}=\\dfrac{x^{\\alpha+1}}{\\alpha+1}+C\\quad(\\alpha\\neq -1)${newLine}
        \\displaystyle
        \\int x^{\\frac{3}{2}} dx=\\dfrac{x^{\\frac{3}{2}+1}}{\\frac{3}{2}+1}+C=\\dfrac{x^{\\frac{5}{2}}}{\\frac{5}{2}}+C${newLine}
        $Eftersom vi endast söker $\\textbf{en}$ primitiv funktion kan vi utelämna $C$$${breakLine}
        \\dfrac{x^{\\frac{5}{2}}}{\\frac{5}{2}}=
        \\dfrac{x^2\\cdot x^{\\frac{1}{2}}}{\\frac{5}{2}}=
        \\dfrac{x^2\\sqrt{x}}{\\frac{5}{2}}=
        \\dfrac{2}{5}x^2\\sqrt{x}
        ${newLine}\\textbf{Svar: } \\dfrac{2}{5}x^2\\sqrt{x}$`}</Latex>
      </Assignment>
      <Assignment title={`e) $\\dfrac{1}{\\sqrt{x}}$`} id="12.2e">
        <Latex>{`$
        \\dfrac{1}{\\sqrt{x}}=\\dfrac{1}{x^{\\frac{1}{2}}}=x^{-\\frac{1}{2}}${newLine}
        \\displaystyle
        \\int{x^\\alpha dx}=\\dfrac{x^{\\alpha+1}}{\\alpha+1}+C\\quad(\\alpha\\neq -1)${newLine}
        \\displaystyle
        \\int x^{-\\frac{1}{2}} dx=\\dfrac{x^{-\\frac{1}{2}+1}}{-\\frac{1}{2}+1}+C=\\dfrac{x^{\\frac{1}{2}}}{\\frac{1}{2}}+C${newLine}
        $Eftersom vi endast söker $\\textbf{en}$ primitiv funktion kan vi utelämna $C$$${breakLine}
        \\dfrac{x^{\\frac{1}{2}}}{\\frac{1}{2}}=
        \\dfrac{\\sqrt{x}}{\\frac{1}{2}}=
        2\\sqrt{x}
        ${newLine}\\textbf{Svar: } 2\\sqrt{x}$`}</Latex>
      </Assignment>
      <Assignment title={`f) $\\dfrac{1}{x\\sqrt{x}}$`} id="12.2f">
        <Latex>{`$
        \\dfrac{1}{x\\sqrt{x}}=\\dfrac{1}{x^{\\frac{3}{2}}}=x^{-\\frac{3}{2}}${newLine}
        \\displaystyle
        \\int{x^\\alpha dx}=\\dfrac{x^{\\alpha+1}}{\\alpha+1}+C\\quad(\\alpha\\neq -1)${newLine}
        \\displaystyle
        \\int x^{-\\frac{3}{2}} dx=\\dfrac{x^{-\\frac{3}{2}+1}}{-\\frac{3}{2}+1}+C=\\dfrac{x^{-\\frac{1}{2}}}{-\\frac{1}{2}}+C${newLine}
        $Eftersom vi endast söker $\\textbf{en}$ primitiv funktion kan vi utelämna $C$$${breakLine}
        \\dfrac{x^{-\\frac{1}{2}}}{-\\frac{1}{2}}=
        \\dfrac{\\dfrac{1}{\\sqrt{x}}}{-\\dfrac{1}{2}}=
        \\dfrac{1}{\\sqrt{x}}\\cdot-\\dfrac{2}{1}=
        -\\dfrac{2}{\\sqrt{x}}
        ${newLine}\\textbf{Svar: } -\\dfrac{2}{\\sqrt{x}}$`}</Latex>
      </Assignment>

      <p>
        <Latex>{`12.3 $\\quad$ Bestäm en primitiv funktion till:`}</Latex>
      </p>
      <Assignment title={`d) $\\dfrac{2}{x+1}$`} id="12.2d">
        <Latex>{`$
        \\displaystyle\\int{2\\cdot\\dfrac{1}{x+1}dx}=
        2\\displaystyle\\int{\\dfrac{1}{x+1}dx}
        =\\begin{bmatrix}
        t=x+1${breakLine}
        \\frac{dt}{dx}=1 \\Rightarrow dt=dx
        \\end{bmatrix}
        =2\\int{\\dfrac{1}{t}}dt
        =2\\ln |x+1|+C${newLine}
        $Eftersom vi endast söker $\\textbf{en}$ primitiv funktion kan vi utelämna $C$$${breakLine}
        ${breakLine}\\textbf{Svar: } 2\\ln |x+1|$`}</Latex>
      </Assignment>
      <Assignment title={`e) $\\dfrac{1}{2x+1}$`} id="12.2e">
        <Latex>{`$
        \\displaystyle\\int{\\dfrac{1}{2x+1}dx}
        =\\begin{bmatrix}
        t=2x+1${breakLine}
        \\frac{dt}{dx}=2 \\Rightarrow dt=2dx
        \\end{bmatrix}=
        \\int{\\dfrac{1}{t}}\\cdot\\frac{1}{2}dt=
        \\dfrac{1}{2}\\int{\\dfrac{1}{t}dt}
        =\\frac{1}{2}\\ln|t|+C=\\frac{1}{2}\\ln|2x+1|+C${newLine}
        $Eftersom vi endast söker $\\textbf{en}$ primitiv funktion kan vi utelämna $C$$${breakLine}
        ${breakLine}\\textbf{Svar: } \\frac{1}{2}\\ln|2x+1|$`}</Latex>
      </Assignment>
      <Assignment title={`l) $\\dfrac{2}{(1-3x)^2}$`} id="12.2l">
        <Latex>{`$
        \\displaystyle\\int{\\dfrac{2}{(1-3x)^2}}
        =\\begin{bmatrix}
        t=1-3x${breakLine}
        \\frac{dt}{dx}=-3 \\Rightarrow dt=-3dx
        \\end{bmatrix}=
        \\int{\\dfrac{2}{t^2}}\\cdot-\\frac{1}{3}dt=
        -\\dfrac{2}{3}\\int{t^{-2}dt}=${newLine}
        -\\frac{2}{3}\\cdot-t^{-1}+C=-\\frac{2}{3}-\\frac{1}{t}+C=\\frac{2}{3t}+C=\\frac{2}{3(1-3x)}+C${newLine}
        $Eftersom vi endast söker $\\textbf{en}$ primitiv funktion kan vi utelämna $C$$${breakLine}
        ${breakLine}\\textbf{Svar: } \\dfrac{2}{3(1-3x)}$`}</Latex>
      </Assignment>
    </Container>
  );
};

export default Solutions;

import React from "react";
import styled from "styled-components";
import Latex from "react-latex-next";
import Assignment from "components/Assignment";
import { ltx, newLine, breakLine } from "lib/latexHelpers";

const Container = styled.div`
  width: 100%;
`;

const Solutions = () => {
  return (
    <Container>
      <h3>Kapitel 6. Polär form</h3>
      <p>
        <Latex>{`6.18 Ange på formen $a+bi$ de komplexa tal vars absolutbelopp och argument är:`}</Latex>
      </p>
      <Assignment title={`a) $\\sqrt{2}, \\frac\\pi4$`} id="6.18a">
        <Latex>{`$
        |z|=r=\\sqrt{2}${breakLine}
        \\arg{z}=\\theta=\\frac\\pi4${breakLine}
        \\cos\\theta=\\frac{\\sqrt{2}}{2}, \\sin\\theta=\\frac{\\sqrt{2}}{2}${breakLine}
        z=r\\cos\\theta+ir\\sin\\theta=
        \\sqrt{2}\\dfrac{\\sqrt{2}}{2} + i\\sqrt{2}\\dfrac{\\sqrt{2}}{2}=1+i
        $`}</Latex>
      </Assignment>
      <Assignment title={`b) $1, \\pi$`} id="6.18b">
        <Latex>{`$
        |z|=r=1${breakLine}
        \\arg{z}=\\theta=\\pi${breakLine}
        \\cos\\theta=-1, \\sin\\theta=0${breakLine}
        z=r\\cos\\theta+ir\\sin\\theta=
        -1 + 0 = -1
        $`}</Latex>
      </Assignment>
      <Assignment title={`c) $\\sqrt{2}, \\frac{9\\pi}{4}$`} id="6.18c">
        <Latex>{`$
        |z|=r=\\sqrt{2}${breakLine}
        \\arg{z}=\\theta=\\frac{9\\pi}{4}=2\\pi+\\frac{\\pi}{4}\\backsimeq\\frac\\pi4${breakLine}
        \\cos\\theta=\\frac{\\sqrt{2}}{2}, \\sin\\theta=\\frac{\\sqrt{2}}{2}${breakLine}
        z=r\\cos\\theta+ir\\sin\\theta=
        \\sqrt{2}\\dfrac{\\sqrt{2}}{2} + i\\sqrt{2}\\dfrac{\\sqrt{2}}{2}=1+i
        $`}</Latex>
      </Assignment>
      <Assignment title={`d) $1, \\frac{\\pi}{2}$`} id="6.18d">
        <Latex>{`$
        |z|=r=1${breakLine}
        \\arg{z}=\\theta=\\frac{\\pi}{2}${breakLine}
        \\cos\\theta=0, \\sin\\theta=1${breakLine}
        z=r\\cos\\theta+ir\\sin\\theta=
        1\\cdot0 + i\\cdot1\\cdot1=i
        $`}</Latex>
      </Assignment>
      <Assignment title={`e) $1, 2\\pi$`} id="6.18e">
        <Latex>{`$
        |z|=r=1${breakLine}
        \\arg{z}=\\theta=
        \\pi\\backsimeq0
        ${breakLine}
        \\cos\\theta=1, \\sin\\theta=0
        ${breakLine}
        z=r\\cos\\theta+ir\\sin\\theta=
        1\\cdot1 + i\\cdot1\\cdot0=1+0=1
        $`}</Latex>
      </Assignment>
      <Assignment
        title={`f) $\\frac{1}{\\sqrt{2}}, -\\frac{\\pi}{4}$`}
        id="6.18f"
      >
        <Latex>{`$
        |z|=r=\\frac{1}{\\sqrt{2}}
        ${breakLine}
        \\arg{z}=\\theta=
        -\\frac{\\pi}{4}
        ${breakLine}
        \\cos\\theta=\\frac{1}{\\sqrt{2}}, \\sin\\theta=-\\frac{1}{\\sqrt{2}}
        ${breakLine}
        z=r\\cos\\theta+ir\\sin\\theta=
        \\frac{1}{\\sqrt{2}}\\frac{1}{\\sqrt{2}}+i\\frac{1}{\\sqrt{2}}\\cdot(-\\frac{1}{\\sqrt{2}})=
        \\frac12-\\frac12i
        $`}</Latex>
      </Assignment>
      <Assignment title={`g) $1, -100\\pi$`} id="6.18g">
        <Latex>{`$
        |z|=r=1
        ${breakLine}
        $
        100$\\pi$ innehåller 50 hela varv
        $${breakLine}
        \\arg{z}=\\theta=-100\\pi=-(2\\pi\\cdot50)+0\\pi\\backsimeq0
        ${breakLine}
        \\cos\\theta=1, \\sin\\theta=0
        ${breakLine}
        z=r\\cos\\theta+ir\\sin\\theta=
        1\\cdot1 + i\\cdot1\\cdot0=1
        $`}</Latex>
      </Assignment>
      <p>
        6.19 Rita följande komplexa tal i ett talplan. Bestäm även argument,
        absolutbelop och polär form:
      </p>
      <Assignment title={`a) $1$`} id="6.19a">
        <Latex>{`$
        z=1${ltx.iss}|z|=1${newLine}
        \\arg z=0${newLine}
        \\text{Polär form: }z=re^{i\\theta}=1e^{i0}
        $`}</Latex>
      </Assignment>
      <Assignment title={`b) $-13$`} id="6.19b">
        <Latex>{`$
        z=-13${ltx.iss}|z|=13${newLine}
        \\arg z=\\pi${newLine}
        \\text{Polär form: }z=re^{i\\theta}=1e^{i\\pi}
        $`}</Latex>
      </Assignment>
      <Assignment title={`c) $i$`} id="6.19c">
        <Latex>{`$
        z=i${ltx.iss}|z|=\\sqrt{0^2+1^2}=1${newLine}
        \\arg z=\\frac{\\pi}{2}${newLine}
        \\text{Polär form: }z=re^{i\\theta}=1e^{i\\frac{\\pi}{2}}
        $`}</Latex>
      </Assignment>
      <Assignment title={`d) $-1+i$`} id="6.19d">
        <Latex>{`$
        z=-1+i${ltx.iss}|z|=\\sqrt{(-1)^2+1^2}=\\sqrt{2}${newLine}
        \\arg z=\\frac{3\\pi}{4}${newLine}
        \\text{Polär form: }z=re^{i\\theta}=\\sqrt{2}e^{i\\frac{3\\pi}{4}}
        $`}</Latex>
      </Assignment>
      <Assignment title={`e) $i\\sqrt{3}-1$`} id="6.19e">
        <Latex>{`$
        z=i\\sqrt3-1${ltx.iss}|z|=\\sqrt{\\sqrt{3}^2+(-1)^2}=\\sqrt{4}=2${newLine}
        $Eftersom $\\sqrt{3}>1$ måste vi faktorisera med $r=|z|=2$ för att få en standardvinkel$${breakLine}
        -1+\\sqrt{3}i=2(\\frac12 + \\frac{\\sqrt{3}}{2}i)${ltx.iss}\\arg z = \\frac{2\\pi}{3}${newLine}
        \\text{Polär form: }z=re^{i\\theta}=2e^{i\\frac{2\\pi}{3}}
        $`}</Latex>
      </Assignment>
      <Assignment title={`f) $\\sqrt{3}+3i$`} id="6.19f">
        <Latex>{`$
        z=i\\sqrt3-1${ltx.iss}|z|=\\sqrt{\\sqrt{3}^2+(3)^2}=\\sqrt{12}${newLine}
        $Eftersom $\\sqrt{3}, 3>1$ måste vi faktorisera med $r=|z|=\\sqrt{12}$ för att få en standardvinkel$${breakLine}
        \\sqrt{3}+3i=
        \\sqrt{12}(\\frac{\\sqrt{3}}{\\sqrt{12}}+\\frac{3}{\\sqrt{12}}i)=
        \\sqrt{12}(\\sqrt{\\frac14}+\\sqrt{\\frac34}i)=
        \\sqrt{12}(\\frac12+\\frac{\\sqrt3}{2}i)
        ${ltx.iss}\\arg z = \\frac{\\pi}{3}${newLine}
        \\text{Polär form: }z=re^{i\\theta}=\\sqrt{12}e^{i\\frac{\\pi}{3}}
        $`}</Latex>
      </Assignment>
      <p>6.20 Vad är absolutbelopp av:</p>
      <Assignment
        title={`a) $\\cos\\frac{\\pi}{8}+i\\sin\\frac{\\pi}{8}$`}
        id="6.20a"
      >
        <Latex>{`
        Använd den trigonometriska ettan$${newLine}
        |\\cos\\frac{\\pi}{8}+i\\sin\\frac{\\pi}{8}|=
        \\sqrt{\\cos^2\\frac{\\pi}{8}+\\sin^2\\frac{\\pi}{8}}=
        \\sqrt{1}=1
        ${newLine}$
        `}</Latex>
      </Assignment>
      <Assignment
        title={`b) $\\cos\\frac{9\\pi}{5}+i\\sin\\frac{9\\pi}{5}$`}
        id="6.20b"
      >
        <Latex>{`
        Använd den trigonometriska ettan$${newLine}
        |\\cos\\frac{9\\pi}{5}+i\\sin\\frac{9\\pi}{5}|=
        \\sqrt{\\cos^2\\frac{9\\pi}{5}+\\sin^2\\frac{9\\pi}{5}}=
        \\sqrt{1}=1
        ${newLine}$
        `}</Latex>
      </Assignment>
      <Assignment title={`c) $\\cos\\theta+i\\sin\\theta$`} id="6.20c">
        <Latex>{`
        Använd den trigonometriska ettan$${newLine}
        |\\cos\\theta+i\\sin\\theta|=
        \\sqrt{\\cos^2\\theta+\\sin^2\\theta}=
        \\sqrt{1}=1
        ${newLine}$
        `}</Latex>
      </Assignment>
      <p>6.21 Vad är absolutbelopp av:</p>
      <Assignment title={`a) $e^{i\\frac{\\pi}{8}}$`} id="6.21a">
        <Latex>{`
        $|e^{i\\theta}|=|\\cos\\theta+i\\sin\\theta|=|\\cos\\frac{\\pi}{8}+i\\sin\\frac{\\pi}{8}|${newLine}$
        Använd den trigonometriska ettan$${newLine}
        |\\cos\\frac{9\\pi}{5}+i\\sin\\frac{9\\pi}{5}|=
        \\sqrt{\\cos^2\\frac{9\\pi}{5}+\\sin^2\\frac{9\\pi}{5}}=
        \\sqrt{1}=1
        ${newLine}$
        `}</Latex>
      </Assignment>
      <Assignment title={`b) $e^{i\\frac{9\\pi}{5}}$`} id="6.21b">
        <Latex>{`
        $|e^{i\\theta}|=|\\cos\\theta+i\\sin\\theta|=|\\cos\\frac{9\\pi}{5}+i\\sin\\frac{9\\pi}{5}|${newLine}$
        Använd den trigonometriska ettan$${newLine}
        |\\cos\\frac{9\\pi}{5}+i\\sin\\frac{9\\pi}{5}|=
        \\sqrt{\\cos^2\\frac{9\\pi}{5}+\\sin^2\\frac{9\\pi}{5}}=
        \\sqrt{1}=1
        ${newLine}$
        `}</Latex>
      </Assignment>
      <Assignment
        title={`c) $e^{i\\theta}$ om $\\theta$ är reellt?`}
        id="6.21c"
      >
        <Latex>{`
        $|e^{i\\theta}|=|\\cos\\theta+i\\sin\\theta|${newLine}$
        Använd den trigonometriska ettan$${newLine}
        |\\cos\\theta+i\\sin\\theta|=
        \\sqrt{\\cos^2\\theta+\\sin^2\\theta}=
        \\sqrt{1}=1
        ${newLine}$
        `}</Latex>
      </Assignment>

      <p>
        <Latex>{`6.22 Argumenet av $z$ är $\\pi/3$ och $\\arg w=\\pi/4$ Bestäm ett argument till:`}</Latex>
      </p>
      <Assignment title={`a) $zw$`} id="6.22a">
        <Latex>{`$
        \\arg z = \\frac{\\pi}{3}, \\arg w = \\frac{\\pi}{4}${newLine}
        \\arg zw = \\arg z + \\arg w = \\frac{\\pi}{3} + \\frac{\\pi}{4}=\\frac{7\\pi}{12}
        $`}</Latex>
      </Assignment>
      <Assignment title={`b) $z/w$`} id="6.22b">
        <Latex>{`$
        \\arg z = \\frac{\\pi}{3}, \\arg w = \\frac{\\pi}{4}${newLine}
        \\arg \\frac{z}{w} = \\arg z - \\arg w = \\frac{\\pi}{3} - \\frac{\\pi}{4}=\\frac{\\pi}{12}
        $`}</Latex>
      </Assignment>
      <Assignment
        title={`c) Kan man säga något om vad $\\arg(z+w)$ eller $\\arg(z-w)$ är?`}
        id="6.22c"
      >
        <Latex>{`
        Nej.$${newLine}$
        Regler för argumenträkning är samma som potenslagarna, alltså:$${newLine}$
        $a^x a^y=a^{x+y}, \\dfrac{a^x}{a^y}=a^{x-y}${newLine}$
        Det finns inga lagar för $a^x+a^y$
        `}</Latex>
      </Assignment>

      <p>
        <Latex>{`6.23 Argumentet av $z$ är $\\pi/3$. Ange ett argument som ligger mellan $0$ och $2\\pi$ till $z^{2000}$`}</Latex>
      </p>
      <Assignment title={`Lösning`} id="6.23">
        <Latex>{`$
        z^{2000} = (e^{i\\frac{\\pi}{3}})^{2000} = 
        e^{i\\frac{2000\\pi}{3}}${ltx.iss}
        \\arg z^{2000}=\\frac{2000\\pi}{3}${newLine}
        $
        Ett varv är $2\\pi=\\frac{6\\pi}{3}$, hur många hela varv finns i $\\frac{2000\\pi}{3}$?
        $${newLine}
        \\dfrac{2000\\pi}{3}=666\\pi \\text{ + rest}${ltx.iss}2\\pi\\cdot333\\text { varv}${newLine}
        $Uttryckt som ett ett bråk med 3 i nämnaren$${newLine}
        \\dfrac{666\\pi\\cdot3}{3}=\\dfrac{1998\\pi}{3}${newLine}
        \\dfrac{2000\\pi}{3}-\\dfrac{1998\\pi}{3}=\\dfrac{2\\pi}{3}${ltx.iss}
        \\arg\\dfrac{2000\\pi}{3}\\backsimeq\\arg\\dfrac{2\\pi}{3}${newLine}
        $
        Svar: $\\dfrac{2\\pi}{3}$`}</Latex>
      </Assignment>

      <p>
        <Latex>{`6.24 Beräkna argumentet av $z=\\dfrac{1+i\\sqrt{3}}{(2-2i)^3}$`}</Latex>
      </p>
      <Assignment title={`Lösning`} id="6.24">
        <Latex>{`
        Kalla täljaren för $w$ och nämnaren för $x$: $${newLine}

        z=\\dfrac{1+i\\sqrt{3}}{(2-2i)^3}=\\dfrac{w}{x}${newLine}

        |w|=\\sqrt{1^2+\\sqrt{3}^2}=2${breakLine}
        \\arg w = \\arctan(\\frac{\\sqrt{3}}{1})=\\frac\\pi3${breakLine}
        w=2e^{i\\frac{\\pi}{3}}${newLine}

        |x|=\\sqrt{2^2+2^2}=\\sqrt{8}=2\\sqrt{2}${breakLine}
        \\arg x = \\arctan(\\frac{-2}{2})=\\arctan(-1)=\\frac{3\\pi}{4}${breakLine}
        x=2\\sqrt{2}e^{i\\frac{3\\pi}{4}}${newLine}
        
        z=\\dfrac{2e^{i\\frac{\\pi}{3}}}{2\\sqrt{2}e^{i\\frac{3\\pi}{4}}}=
        \\sqrt{2}\\dfrac{e^{i\\frac{\\pi}{3}}}{e^{i\\frac{3\\pi}{4}}}=
        \\sqrt{2}(e^{i(\\frac{\\pi}{3}-\\frac{3\\pi}{4})})=\\sqrt{2}e^{-i\\frac{5\\pi}{12}}
        $`}</Latex>
      </Assignment>
    </Container>
  );
};

export default Solutions;

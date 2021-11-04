import React from "react";
import styled from "styled-components";
import Latex from "react-latex-next";
import Assignment from "components/Assignment";
import { ltx } from "lib/latexHelpers";

const Container = styled.div`
  width: 100%;
`;

const breakLine = "\\\\";
const newLine = "\\\\~\\\\";

const Solutions = () => {
  return (
    <Container>
      <h3>Kapitel 6. Komplexa tal</h3>
      <p>
        <Latex>{`6.1 Bestäm Re $z$ och Im $z$ om $z$ är:`}</Latex>
      </p>
      <Assignment title={`a) $2+3i$`} id="6.1a">
        <Latex>{`$
        \\text{Re} z=2${breakLine}
        \\text{Im} z=3
        $`}</Latex>
      </Assignment>
      <Assignment title={`b) $-1-i$`} id="6.1b">
        <Latex>{`$
        \\text{Re} z=-1${breakLine}
        \\text{Im} z=-1
        $`}</Latex>
      </Assignment>
      <Assignment title={`c) $3$`} id="6.1c">
        <Latex>{`$
        \\text{Re} z=3${breakLine}
        \\text{Im} z=0
        $`}</Latex>
      </Assignment>
      <Assignment title={`d) $2i$`} id="6.1d">
        <Latex>{`$
        \\text{Re} z=0${breakLine}
        \\text{Im} z=2
        $`}</Latex>
      </Assignment>
      <Assignment title={`e) $-i$`} id="6.1e">
        <Latex>{`$
        \\text{Re} z=0${breakLine}
        \\text{Im} z=-1
        $`}</Latex>
      </Assignment>
      <p>
        <Latex>{`6.2 Skriv följande tal på formen $a+bi$ där $a$ och $b$ är reella:`}</Latex>
      </p>
      <Assignment title={`a) $(1+i)+(-3-2i)$`} id="6.2a">
        <Latex>{`$
        (1+i)+(-3-2i)=1-3+i-2i=2-i
        $`}</Latex>
      </Assignment>
      <Assignment title={`b) $(1+i)-(3-4i)$`} id="6.2b">
        <Latex>{`$
        (1+i)-(3-4i)=1-3+i+4i=-2+5i
        $`}</Latex>
      </Assignment>
      <Assignment title={`c) $(1+i)(3-4i)$`} id="6.2c">
        <Latex>{`$
        (1+i)(3-4i)=3-4i+3i-4i^2=7-i
        $`}</Latex>
      </Assignment>
      <Assignment title={`d) $(1-i)^2$`} id="6.2d">
        <Latex>{`$
        (1-i)^2=1^2-2i+i^2=-2i
        $`}</Latex>
      </Assignment>
      <Assignment title={`e) $(5-2i)^3$`} id="6.2e">
        <Latex>{`$
        (a-b)^3=a^3-3a^2b+3ab^2-b^3${newLine}
        (5-2i)^3=5^3-3 \\cdot 5^2 \\cdot 2i + 3 \\cdot 5 \\cdot (2i)^2-(2i)^3= ${breakLine}
        125-150i+60i^2+8i=65-142i
        $`}</Latex>
      </Assignment>
      <Assignment title={`f) $(1-i)^4$`} id="6.2f">
        <Latex>{`$
        (1-i)^4=((1-i)^2)^2=(1-2i+i^2)^2=(-2i)^2=4i^2=-4
        $`}</Latex>
      </Assignment>
      <p>
        <Latex>{`6.3 Beräkna:`}</Latex>
      </p>
      <Assignment title={`a) $\\overline{1+i}$`} id="6.3a">
        <Latex>{`$
        \\overline{1+i}=1-i
        $`}</Latex>
      </Assignment>
      <Assignment title={`b) $\\overline{3-5i}$`} id="6.3b">
        <Latex>{`$
        \\overline{3-5i}=3+5i
        $`}</Latex>
      </Assignment>
      <Assignment title={`c) $\\overline{-7}$`} id="6.3c">
        <Latex>{`$
        \\overline{-7}=-7
        $`}</Latex>
      </Assignment>
      <Assignment title={`d) $(1+i)\\overline{(1+i)}$`} id="6.3d">
        <Latex>{`$
        (1+i)\\overline{(1+i)}=(1+i)(1-i)=1^2-i^2=2
        $`}</Latex>
      </Assignment>
      <Assignment title={`e) $|1+i|$`} id="6.3e">
        <Latex>{`$
        |1+i|=\\sqrt{1^2+1^2}=\\sqrt{2}
        $`}</Latex>
      </Assignment>
      <Assignment title={`f) $|i|$`} id="6.3f">
        <Latex>{`$
        |i|=\\sqrt{0^2+1^2}=\\sqrt{1}=1
        $`}</Latex>
      </Assignment>
      <Assignment title={`g) $|3-2i|$`} id="6.3g">
        <Latex>{`$
        |3-2i|=\\sqrt{3^2+(-2)^2}=\\sqrt{13}
        $`}</Latex>
      </Assignment>
      <Assignment title={`h) $|-5i|$`} id="6.3g">
        <Latex>{`$
        |-5i|=\\sqrt{0^2+(-5)^2}=\\sqrt{25}=5
        $`}</Latex>
      </Assignment>
      <p>
        <Latex>{`6.4 Skriv följande tal på formen $a+bi$ där $a$ och $b$ är reella:`}</Latex>
      </p>
      <Assignment title={`a) $\\dfrac{1}{1+i}$`} id="6.4a">
        <Latex>{`$
        \\dfrac{1}{1+i}=\\dfrac{1-i}{(1+i)(1-i)}=\\dfrac{1-i}{1^2-i^2}=\\dfrac{1-i}{2}=\\frac12-\\frac12i
        $`}</Latex>
      </Assignment>
      <Assignment title={`b) $\\dfrac{1}{3-4i}$`} id="6.4b">
        <Latex>{`$
        \\dfrac{1}{3-4i}=\\dfrac{3+4i}{(3-4i)(3+4i)}=\\dfrac{3+4i}{3^2-(4i)^2}=\\dfrac{3+4i}{9-16i^2}=\\frac{3}{25}+\\frac{4}{25}i
        $`}</Latex>
      </Assignment>
      <Assignment title={`c) $\\dfrac{3-4i}{1+i}$`} id="6.4c">
        <Latex>{`$
        \\dfrac{3-4i}{1+i}=\\dfrac{(3-4i)(1-i)}{(1+i)(1-i)}=\\dfrac{3-3i-4i+4i^2}{2}=\\dfrac{1-7i}{2}=-\\dfrac12-\\dfrac72i
        $`}</Latex>
      </Assignment>
      <Assignment title={`d) $\\dfrac{1-i}{1+i}$`} id="6.4d">
        <Latex>{`$
        \\dfrac{1-i}{1+i}=\\dfrac{(1-i)^2}{(1+i)(1-i)}=\\dfrac{-2i}{2}=-i
        $`}</Latex>
      </Assignment>
      <Assignment title={`e) $(1+i)^{-2}$`} id="6.4e">
        <Latex>{`$
        (1+i)^{-2}=\\dfrac{1}{(1+2)^2}=\\dfrac{1}{2i}=\\dfrac{2i}{(2i)^2}=\\dfrac{2i}{4i^2}=\\dfrac{2i}{-4}=-\\frac12i
        $`}</Latex>
      </Assignment>
      <Assignment title={`f) $\\dfrac1i$`} id="6.4f">
        <Latex>{`$
        \\dfrac{1}{i}=\\dfrac{i}{i^2}=\\dfrac{i}{-i}=-i
        $`}</Latex>
      </Assignment>
      <p>
        <Latex>{`6.5 Beräkna absolutbeloppet av talen:`}</Latex>
      </p>
      <Assignment title={`a) $(1-i)^{14}$`} id="6.5a">
        <Latex>{`
        Vi använder räknelagen $|zw|=|z||w|$ (upprepade gånger) och får
        $${newLine}
        |(1-i)^{14}|=|1-i|^{14}=\\sqrt{1^2+1^2}^{14}=\\sqrt{2}^{14}=(2^{\\frac12})^{14}=2^7=128
        $`}</Latex>
      </Assignment>
      <Assignment title={`b) $\\dfrac{3+i}{4+3i}$`} id="6.5b">
        <Latex>{`
        Med räknelagen $|\\dfrac{z}{w}|=\\dfrac{|z|}{|w|}$ får vi
        $${newLine}
        |\\dfrac{3+i}{4+3i}|=\\dfrac{|3+i|}{|4+3i|}=
        \\dfrac{\\sqrt{3^2+1^2}}{\\sqrt{4^2+3^2}}=
        \\dfrac{\\sqrt{10}}{\\sqrt{25}}=
        \\dfrac{\\sqrt{10}}{5}

        $`}</Latex>
      </Assignment>
      <p>
        <Latex>{`6.6 Beräkna absolutbeloppet av:`}</Latex>
      </p>
      <Assignment title={`$\\dfrac{(1+2i)(7+\\sqrt{3}i)^2}{(5+i)^2}$`} id="6.6">
        <Latex>{`
        Vi använder räknelagen $|zw|=|z||w|$ och $|\\dfrac{z}{w}|=\\dfrac{|z|}{|w|}$ tillsammans.
        $${newLine}
        \\Bigl|\\dfrac{(1+2i)(7+\\sqrt{3}i)^2}{(5+i)^2}\\Bigl|=
        \\dfrac{|1+2i||7+\\sqrt{3}i|^2}{|5+i|^2}=
        \\dfrac{\\sqrt{1^2+2^2}\\sqrt{7^2+\\sqrt{3}^2}^2}{\\sqrt{5^2+1^2}^2}=
        \\dfrac{\\sqrt{5}\\sqrt{52}^2}{\\sqrt{26}^2}=
        \\dfrac{52\\sqrt{5}}{26}=2\\sqrt{5}
        $`}</Latex>
      </Assignment>
      <p>
        <Latex>{`6.7 Lös ekvationen:`}</Latex>
      </p>
      <Assignment title={`$z+2\\overline{z}=2-i$`} id="6.7">
        <Latex>{`
        Sätt $z=x + yi$
        $${newLine}
        (x+yi)+2(x-yi)=2-i${ltx.iss}x+yi+2x-2yi=2-i${ltx.iss}3x-yi=2-i${newLine}
        3x=2, -y=-i${ltx.iss}x=\\frac23, y=i${ltx.iss}z=\\frac23+i
        $
        `}</Latex>
      </Assignment>
      <p>
        <Latex>{`6.8 Lös ekvationerna:`}</Latex>
      </p>
      <Assignment title={`a) $3z-i\\overline{z}=7-5i$`} id="6.8a">
        <Latex>{`
        Sätt $z=x + yi$
        $${newLine}
        3(x+yi)-i(x-yi)=7-5i${breakLine}
        3(x+yi)-i(x-yi)=3x+3yi-xi+yi^2=3x-y+3yi-xi${newLine}
        3x-y=7 \\text{ och } 3yi-xi=-5i${newLine}
        $Definera $y$ med $x$:$${breakLine}
        3x-y=7${ltx.iss}y=3x-7${breakLine}
        $Definera $x$ med $y$:$${breakLine}
        3yi-xi=-5i${ltx.iss}x=3y+5${breakLine}
        $Stoppa in $3y+5$ istället för $x$ i $y=3x-7$:$${breakLine}
        y=3(3y+5)-7${ltx.iss}y=9y+8${ltx.iss}-8y=8${ltx.iss}y=-1${breakLine}
        $Stoppa in $-1$ istället för $y$ i $x=3y+5$:$${breakLine}
        x=3(-1)+5=-3+5=2${newLine}
        z=x+yi=2-i
        $`}</Latex>
      </Assignment>
      <Assignment title={`b) $z\\cdot2\\overline{z}=1+i$`} id="6.8b">
        <Latex>{`
        Sätt $z=x + yi$
        $${newLine}
        x+yi\\cdot2(\\overline{x+yi})=2(x+yi)(x-yi)=2(x^2-(yi)^2)=2x-2(yi)^2=2x^2+2y^2${newLine}
        2x^2+2y^2=1+i${newLine}$
        Denna uppgift saknar lösning eftersom vänsterledet inte innehåller någon imaginär del.
        `}</Latex>
      </Assignment>
    </Container>
  );
};

export default Solutions;

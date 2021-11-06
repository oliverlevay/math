import React from "react";
import styled from "styled-components";
import Link from "next/link";
import Latex from "react-latex-next";
import Assignment from "components/Assignment";
import { ltx, newLine, breakLine } from "lib/latexHelpers";

const Container = styled.div`
  width: 100%;
`;

const Solutions = () => {
  return (
    <Container>
      <h3>Polynomekvationer</h3>
      <p>
        <Latex>{`6.37 Lös ekvationerna:`}</Latex>
      </p>
      <Assignment title={`a) $z^2=5+12i$`} id="6.37a">
        <Latex>{`
        Sätt $z=x+yi${breakLine}$
        $z^2=(x+yi)^2=x^2+wxy+(yi)^2=x^2-y^2+2xyi${newLine}
        z^2=5+12i${ltx.iss} 
        \\bigg\\{\\begin{matrix*}[l]
          x^2-y^2=5${breakLine}
          2xy=12 
        \\end{matrix*}${newLine}
        $Absolutbelopp av vänsterledet$${breakLine}
        |z^2|=|z|^2=|x+yi|^2=(\\sqrt{x^2+y^2})^2=x^2+y^2${breakLine}
        $Absolutbelopp av högerledet$${breakLine}
        |5+12i|=\\sqrt{5^2+12^2}=\\sqrt{169}=13${breakLine}
        $Ekvationssystemet blir alltså$${breakLine}
        \\Bigg\\{\\begin{matrix*}[l]
          x^2+y^2=13${breakLine}
          x^2-y^2=5${breakLine}
          2xy=12 
        \\end{matrix*}${newLine}
        $Addition av de två första ger$${breakLine}
        (x^2+y^2)+(x^2-y^2)=13+5${ltx.iss}2x^2=18${ltx.iss}x^2=9${ltx.iss}x=\\plusmn3${breakLine}
        $och en subtraktion av samma två ekvationer ger$${breakLine}
        (x^2+y^2)-(x^2-y^2)=13-5${ltx.iss}2y^2=8${ltx.iss}x^2=4${ltx.iss}y=\\plusmn2${breakLine}
        $Den tredje ekvationen används för att bestämma tecken på x och y.$${breakLine}
        $Eftersom 2xy=12 (positivt) måste x och y ha samma tecken. Vi får därför endast lösningarna:$${breakLine}
        z_1=x+yi=3+2i $ och $ z_2=x+yi=-3-2i

        ${newLine}\\textbf{Svar: } z=\\plusmn(3+2i)
        $
        `}</Latex>
      </Assignment>
      <Assignment title={`a) $z^2-(2+2i)z-5-10i=0$`} id="6.37b">
        <Latex>{`
        Förenkla vänsterledet$${breakLine}
        z^2-(2+2i)z-5-10i=(z-(1+i))^2-2i-5-10i=(z-1-i)^2-5-12i${breakLine}
        (z-1-i)^2=5+12i${breakLine}
        $Sätt $ w=z-1-i=x+yi

        ${newLine}\\textbf{Svar: } z=$`}</Latex>
      </Assignment>
    </Container>
  );
};

export default Solutions;

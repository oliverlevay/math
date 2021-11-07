import React from "react";
import styled from "styled-components";
import Image from "next/image";
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
      <p>6.37 Lös ekvationerna:</p>
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
        $Eftersom $2xy=12$ (positivt) måste x och y ha samma tecken. Vi får därför endast lösningarna:$${breakLine}
        z_1=x+yi=3+2i $ och $ z_2=x+yi=-3-2i

        ${newLine}\\textbf{Svar: } z=\\plusmn(3+2i)
        $
        `}</Latex>
      </Assignment>
      <Assignment title={`b) $z^2-(2+2i)z-5-10i=0$`} id="6.37b">
        <Latex>{`
        Förenkla vänsterledet$${breakLine}
        z^2-(2+2i)z-5-10i=(z-(1+i))^2-2i-5-10i=(z-1-i)^2-5-12i${ltx.iss}${breakLine}
        (z-1-i)^2=5+12i${newLine}
        $Sätt $w=z-1-i=x+yi${ltx.iss}w^2=(z-1-i)^2=5+12i$, därefter är det exakt samma uträkning som a)$${newLine}
       
        \\bigg\\{\\begin{matrix*}[l]
        w_1=x+yi=3+2i${breakLine}
        w_2=x+yi=-3-2i
        \\end{matrix*}${newLine}

        w_1=x+yi=3+2i ${ltx.iss} z_1-1-i=3+2i ${ltx.iss} z_1=4+3i ${breakLine}
        w_2=x+yi=-3-2i ${ltx.iss} z_2-1-i=-3-2i ${ltx.iss} z_2=-2-i

        ${newLine}\\textbf{Svar: } z_1=4+3i \\quad z_2=-2-i$`}</Latex>
      </Assignment>

      <p>6.38 Lös ekvationerna:</p>
      <Assignment title={`a) $z^2=-i$`} id="6.38a">
        <Latex>{`
        Sätt $z=x+yi${breakLine}
        z^2=x^2+2xyi-y^2${newLine}
        z^2=0-i${ltx.iss}
        \\bigg\\{\\begin{matrix*}[l]
        x^2-y^2=0${breakLine}
        2xy=-1
        \\end{matrix*}${newLine}

        $Absolutbelopp av vänsterledet$${breakLine}
        |z^2|=|z|^2=|x+yi|^2=(\\sqrt{x^2+y^2})^2=x^2+y^2${breakLine}
        $Absolutbelopp av högerledet$${breakLine}
        |-i|=\\sqrt{0^2+1^2}=\\sqrt{1}=1${breakLine}
        $Ekvationssystemet blir alltså$${breakLine}
        \\Bigg\\{\\begin{matrix*}[l]
          x^2+y^2=1${breakLine}
          x^2-y^2=0${breakLine}
          2xy=-1
        \\end{matrix*}${newLine}

        $Addition av de två första ger$${breakLine}
        (x^2+y^2)+(x^2-y^2)=1+0${ltx.iss}2x^2=1${ltx.iss}x^2=\\frac{1}{2}${ltx.iss}x=\\plusmn\\frac{1}{\\sqrt{2}}${breakLine}
        $och en subtraktion av samma två ekvationer ger$${breakLine}
        (x^2+y^2)-(x^2-y^2)=1-0${ltx.iss}2y^2=1${ltx.iss}x^2=\\frac{1}{2}${ltx.iss}y=\\plusmn\\frac{1}{\\sqrt{2}}${breakLine}
        $Den tredje ekvationen används för att bestämma tecken på x och y.$${breakLine}
        $Eftersom $2xy=-1$ (negativt) måste x och y ha olika tecken. Vi får därför endast lösningarna:$${breakLine}
        z_1=x+yi=\\frac{1}{\\sqrt{2}}-\\frac{1}{\\sqrt{2}}i, \\quad z_2=x+yi=-\\frac{1}{\\sqrt{2}}+\\frac{1}{\\sqrt{2}}i
        ${newLine}\\textbf{Svar: } z=\\plusmn\\frac{1}{\\sqrt{2}}(1-i)$`}</Latex>
      </Assignment>

      <p>
        <Latex>{`6.40 Lös ekvationen $(2+i)z^2+(1-7i)z-5=0$`}</Latex>
      </p>
      <Assignment title="Lösning" id="6.40">
        <Latex>{`
        Dela alla termerna med $2-i$ för att få $z^2$ ensamt.$${breakLine}
        z^2+\\frac{1-7i}{2+1}z-\\frac{5}{2+i}=0 ${ltx.iss}
        z^2+\\frac{(1-7i)(2-i)}{(2+i)(2-i)}z-\\frac{5(2-i)}{(2+i)(2-i)}=0 ${ltx.iss} ${breakLine}
        z^2+\\frac{2-i-14i-7}{4+1}z-\\frac{5(2-i)}{4+1}=0 ${ltx.iss}
        z^2+\\frac{5(-1-3i)}{5}z-\\frac{5(2-i)}{5}=0 ${ltx.iss} ${breakLine}
        z^2+(-1-3i)z-(2-i)=0${newLine}
        
        $Förenkla vänsterledet genom att kvadratkomplettera.$${breakLine}
        z^2 -z -3iz-2+i=
        (z-(\\frac{1}{2}+\\frac{3}{2}i))^2-(\\frac{1}{2}+\\frac{3}{2}i)^2-2+i= ${breakLine} =
        (z-\\frac{1}{2}-\\frac{3}{2}i)^2-(\\frac{1}{4}+\\frac{3}{2}i-\\frac{9}{4})-2+i=
        (z-\\frac{1}{2}-\\frac{3}{2}i)^2+2-\\frac{3}{2}i-2+i= ${breakLine} =
        (z-\\frac{1}{2}-\\frac{3}{2}i)^2-\\frac{1}{2}i${newLine}

        $Låt $w=x+yi=z-\\frac{1}{2}-\\frac{3}{2}i.${breakLine}
        (x+yi)^2-\\frac{1}{2}i=0 ${ltx.iss}${breakLine} 
        x^2+2xyi-y^2=\\frac{1}{2}i${ltx.iss}
        \\begin{cases}
          x^2-y^2=0 ${breakLine}
          2xy=\\frac{1}{2}
        \\end{cases}${newLine}

        w^2=\\frac{1}{2}i${breakLine}
        $Absolutbelopp av $w^2${breakLine}
        |w^2|=|w|^2=|x+yi|^2=(\\sqrt{x^2+y^2})^2=x^2+y^2${breakLine}
        $Absolutbelopp av $\\frac12i${breakLine}
        |\\frac12i|=\\sqrt{0^2+(\\frac12)^2}=\\sqrt{\\frac{1}{4}}=\\frac{1}{2}${breakLine}

        $Ekvationssystemet blir alltså$${breakLine}
        \\begin{cases}
          x^2+y^2=\\frac{1}{2}${breakLine}
          x^2-y^2=0${breakLine}
          2xy=\\frac{1}{2}
        \\end{cases}${newLine}

        $Addition av de två första ger$${breakLine}
        (x^2+y^2)+(x^2-y^2)=\\frac12+0${ltx.iss}2x^2=\\frac12${ltx.iss}x^2=\\frac14${ltx.iss}x=\\plusmn\\frac12${breakLine}
        $och en subtraktion av samma två ekvationer ger$${breakLine}
        (x^2+y^2)-(x^2-y^2)=\\frac12 -0${ltx.iss}2y^2=\\frac12${ltx.iss}x^2=\\frac{1}{4}${ltx.iss}y=\\plusmn\\frac12${breakLine}

        $Den tredje ekvationen används för att bestämma tecken på x och y.$${breakLine}
        $Eftersom $2xy=\\frac12$ (positivt) måste x och y ha samma tecken. Vi får därför endast lösningarna:$${breakLine}
        \\begin{cases}
          w_1=\\frac12+\\frac12i${breakLine}
          w_2=-\\frac12-\\frac12i
        \\end{cases}${breakLine}
        w_1=\\frac12+\\frac12i${ltx.iss}z_1-\\frac12-\\frac32i=\\frac12+\\frac12i${ltx.iss}z_1=1+2i${breakLine}
        w_2=-\\frac12-\\frac12i${ltx.iss}z_2-\\frac12-\\frac32i=-\\frac12-\\frac12i${ltx.iss}z_2=i

        ${newLine}\\textbf{Svar: } z_1=1+2i \\quad z_2=i$`}</Latex>
      </Assignment>

      <p>
        6.41 Lös följande ekvationer och rita ut rötterna i det komplexa
        talplanet:
      </p>
      <Assignment title={`a) $z^3=i$`} id="6.41a">
        <Latex>{`
        Låt $z=re^{i\\theta}$ och skriv om högerledet till polär form.$${newLine}

        z^3=i ${ltx.iss}
        r^3e^{i3\\theta}=e^{i\\pi/2} ${ltx.iss}
        \\begin{cases}
        r^3 = 1 ${breakLine}
        3\\theta=\\frac{\\pi}{2}+k2\\pi
        \\end{cases} ${ltx.iss}
        \\begin{cases}
        r=1 ${breakLine}
        \\theta=\\frac{\\pi}{6}+k\\frac{2\\pi}{3}
        \\end{cases}${newLine}

        k=0,1,2 $ ger tre unika rötter.$${breakLine}
        z_1=e^{i(\\pi/6+0(2\\pi/3))}=e^{i\\pi/6}=\\frac{\\sqrt{3}}{2}+\\frac{1}{2}i${breakLine}
        z_2=e^{i(\\pi/6+1(2\\pi/3))}=e^{i5\\pi/6}=-\\frac{\\sqrt{3}}{2}+\\frac{1}{2}i${breakLine}
        z_3=e^{i(\\pi/6+2(2\\pi/3))}=e^{i3\\pi/2}=-i
        $`}</Latex>
        <div style={{ maxWidth: "16rem" }}>
          <Image
            src="/figures/endim/641a.png"
            width="692"
            height="691"
            layout="responsive"
          />
        </div>
      </Assignment>
      <Assignment title={`b) $z^3=1+i$`} id="6.41b">
        <Latex>{`
        Låt $z=re^{i\\theta}$ och skriv om högerledet till polär form.$${newLine}

        z^3=1+i ${ltx.iss}
        r^3e^{i3\\theta}=\\sqrt{2}e^{i\\pi/4} ${ltx.iss}
        \\begin{cases}
        r^3 = \\sqrt{2} ${breakLine}
        3\\theta=\\frac{\\pi}{4}+k2\\pi
        \\end{cases} ${ltx.iss}
        \\begin{cases}
        r=2^{1/6} ${breakLine}
        \\theta=\\frac{\\pi}{12}+k\\frac{2\\pi}{3}
        \\end{cases}${newLine}
        
        k=0,1,2 $ ger tre unika rötter.$${breakLine}
        z_1=2^{1/6}e^{i(\\pi/12+0(2\\pi/3))}=2^{1/6}e^{i\\pi/12}${breakLine}
        z_2=2^{1/6}e^{i(\\pi/12+1(2\\pi/3))}=2^{1/6}e^{i3\\pi/4}${breakLine}
        z_3=2^{1/6}e^{i(\\pi/12+2(2\\pi/3))}=2^{1/6}e^{i17\\pi/12}
        $`}</Latex>
        <div style={{ maxWidth: "16rem" }}>
          <Image
            src="/figures/endim/641b.png"
            width="692"
            height="691"
            layout="responsive"
          />
        </div>
      </Assignment>
      <Assignment title={`c) $z^4=16$`} id="6.41c">
        <Latex>{`
        Låt $z=re^{i\\theta}$ och skriv om högerledet till polär form. ($r$ kan endast vara positiv eftersom det är ett avstånd)$${newLine}

        z^4=16 ${ltx.iss}
        r^4e^{i4\\theta}=16e^{i0} ${ltx.iss}
        \\begin{cases}
        r^4 = 16 ${breakLine}
        4\\theta=k2\\pi
        \\end{cases} ${ltx.iss}
        \\begin{cases}
        r=|\\pm 2|=2 ${breakLine}
        \\theta=k\\frac{\\pi}{2}
        \\end{cases}${newLine}
        
        k=0,1,2,3 $ ger fyra unika rötter.$${breakLine}
        z_1=2e^{i\\cdot0(\\pi/2)}=2e^{i0}=2${breakLine}
        z_2=2e^{i\\cdot1(\\pi/2)}=2e^{i\\pi/2}=2i${breakLine}
        z_3=2e^{i\\cdot2(\\pi/2)}=2e^{i\\pi}=-2${breakLine}
        z_4=2e^{i\\cdot3(\\pi/2)}=2e^{i3\\pi/2}=-2i
        $`}</Latex>
        <div style={{ maxWidth: "16rem" }}>
          <Image
            src="/figures/endim/641c.png"
            width="692"
            height="691"
            layout="responsive"
          />
        </div>
      </Assignment>
      <Assignment title={`d) $z^3=i\\sqrt{3}-1$`} id="6.41d">
        <Latex>{`
        Låt $z=re^{i\\theta}$ och skriv om högerledet till polär form.$${newLine}

        z^3=i\\sqrt{3}-1 ${ltx.iss}
        r^3e^{i3\\theta}=2e^{i2\\pi/3} ${ltx.iss}
        \\begin{cases}
        r^3 = 2 ${breakLine}
        3\\theta=\\frac{2\\pi}{3}+k2\\pi
        \\end{cases} ${ltx.iss}
        \\begin{cases}
        r=2^{1/3} ${breakLine}
        \\theta=\\frac{2\\pi}{9}+k\\frac{2\\pi}{3}
        \\end{cases}${newLine}
        
        k=0,1,2 $ ger tre unika rötter.$${breakLine}
        z_1=2^{1/3}e^{i(2\\pi/9+0(2\\pi/3))}=2^{1/3}e^{i2\\pi/9}${breakLine}
        z_2=2^{1/3}e^{i(2\\pi/9+1(2\\pi/3))}=2^{1/3}e^{i8\\pi/9}${breakLine}
        z_3=2^{1/3}e^{i(2\\pi/9+2(2\\pi/3))}=2^{1/3}e^{i14\\pi/9}        
        $`}</Latex>
        <div style={{ maxWidth: "16rem" }}>
          <Image
            src="/figures/endim/641d.png"
            width="692"
            height="691"
            layout="responsive"
          />
        </div>
      </Assignment>
      <Assignment title={`e) $z^5=4i$`} id="6.41e">
        <Latex>{`
        Låt $z=re^{i\\theta}$ och skriv om högerledet till polär form.$${newLine}

        z^5=4i ${ltx.iss}
        r^5e^{i5\\theta}=4e^{i\\pi/2} ${ltx.iss}
        \\begin{cases}
        r^5 = 4 ${breakLine}
        5\\theta=\\frac{\\pi}{2}+k2\\pi
        \\end{cases} ${ltx.iss}
        \\begin{cases}
        r=4^{1/5} ${breakLine}
        \\theta=\\frac{\\pi}{10}+k\\frac{2\\pi}{5}
        \\end{cases}${newLine}
        
        k=0,1,2,3,4 $ ger fem unika rötter.$${breakLine}
        z_1=4^{1/5}e^{i(\\pi/10+0(2\\pi/5))}=4^{1/5}e^{i\\pi/10}${breakLine}
        z_2=4^{1/5}e^{i(\\pi/10+1(2\\pi/5))}=4^{1/5}e^{i\\pi/2}=4^{1/5}i${breakLine}
        z_3=4^{1/5}e^{i(\\pi/10+2(2\\pi/5))}=4^{1/5}e^{i9\\pi/10}${breakLine}
        z_4=4^{1/5}e^{i(\\pi/10+3(2\\pi/5))}=4^{1/5}e^{i13\\pi/10}${breakLine}
        z_5=4^{1/5}e^{i(\\pi/10+4(2\\pi/5))}=4^{1/5}e^{i17\\pi/10}  
        $`}</Latex>
        <div style={{ maxWidth: "16rem" }}>
          <Image
            src="/figures/endim/641e.png"
            width="692"
            height="691"
            layout="responsive"
          />
        </div>
      </Assignment>
      <Assignment title={`f) $z^4=-1$`} id="6.41f">
        <Latex>{`
        Låt $z=re^{i\\theta}$ och skriv om högerledet till polär form. ($r$ kan endast vara positiv eftersom det är ett avstånd)$${newLine}

        z^4=-1 ${ltx.iss}
        r^4e^{i4\\theta}=e^{i\\pi} ${ltx.iss}
        \\begin{cases}
        r^4 = 1 ${breakLine}
        4\\theta=\\pi+k2\\pi
        \\end{cases} ${ltx.iss}
        \\begin{cases}
        r=|\\pm 1|=1 ${breakLine}
        \\theta=\\frac{\\pi}{4}+k\\frac{\\pi}{2}
        \\end{cases}${newLine}
        
        k=0,1,2,3$ ger fyra unika rötter.$${breakLine}
        z_1=e^{i(\\pi/4+0(\\pi/2))}=e^{i\\pi/4}=\\frac{1}{\\sqrt{2}}+\\frac{1}{\\sqrt{2}}i${breakLine}
        z_2=e^{i(\\pi/4+1(\\pi/2))}=e^{i3\\pi/4}=-\\frac{1}{\\sqrt{2}}+\\frac{1}{\\sqrt{2}}i${breakLine}
        z_3=e^{i(\\pi/4+2(\\pi/2))}=e^{i5\\pi/4}=-\\frac{1}{\\sqrt{2}}-\\frac{1}{\\sqrt{2}}i${breakLine}
        z_4=e^{i(\\pi/4+3(\\pi/2))}=e^{i7\\pi/4}=\\frac{1}{\\sqrt{2}}-\\frac{1}{\\sqrt{2}}i${breakLine}
        $`}</Latex>
        <div style={{ maxWidth: "16rem" }}>
          <Image
            src="/figures/endim/641f.png"
            width="692"
            height="691"
            layout="responsive"
          />
        </div>
      </Assignment>
      <div style={{ display: "flex", margin: "1rem 0" }}>
        <p style={{ margin: 0, marginRight: "1rem", lineHeight: 1.5 }}>6.44</p>
        <Latex>{`
        Bestäm konstaten $a$ så att polynomet$${breakLine}
        \\quad p(x)=x^3-2x^2-19x+a${breakLine}$
        får faktorn $x-1$. Faktorisera polynomet för detta $a$-värde.
        `}</Latex>
      </div>
      <Assignment title="Lösning" id="6.44">
        <Latex>{`
        Ansätter lösning med $x-1$ som faktor (kan lösas med polynomdivision också):$${breakLine}
        x^3-2x^2-19x+a=${breakLine}
        (x-1)(x^2+Ax+B)=${breakLine}
        x^3+Ax^2+Bx-x^2-Ax-B=${breakLine}
        x^3+(A-1)x^2+(B-A)x-B${newLine}
        $Identifierar variablerna:$${breakLine}
        \\begin{cases}
        A-1=-2 ${breakLine}
        B-A=-19 ${breakLine}
        -B=a
        \\end{cases}
        \\Leftrightarrow
        \\begin{cases}
        A=-1 ${breakLine}
        B=-20 ${breakLine}
        a=20
        \\end{cases}${newLine}
        x^3-2x^2-19x+20=(x-1)(x^2-x-20) ${newLine}
        $Faktorisera $x^2-x-20$ med pq-formeln.$${breakLine}
        x^2-x-20=0${breakLine}
        x=\\frac{1}{2}\\pm\\sqrt{\\frac{1}{4}+20}=
        \\frac{1}{2}\\pm\\sqrt{\\frac{81}{4}}=
        \\frac{1}{2}\\pm\\frac{9}{2}${breakLine}
        x_1=5${breakLine}
        x_2=-4${newLine}
        (x-1)(x^2-x-20)=(x-1)(x-5)(x+4)

        ${newLine}\\textbf{Svar: } a=20, \\quad p(x)=(x-1)(x-5)(x+4)$`}</Latex>
      </Assignment>

      <div style={{ display: "flex", margin: "1rem 0" }}>
        <p style={{ margin: 0, marginRight: "1rem", lineHeight: 1.5 }}>6.45</p>
        <Latex>{`
        Ekvationen
        $${breakLine}\\quad z^4-2z^3+2z^2-10z+25=0${breakLine}$
        har rötterna $z=2+i$ och $z=-1-2i$. Lös ekvationen fullständigt.
        `}</Latex>
      </div>
      <Assignment title="Lösning" id="6.45">
        <Latex>{`
        Polynomet har reella koefficienter.$${breakLine}$ 
        Förutom nollställerna $2+i$ och $-1-2i$ är då även konjugaten $2-i$ och $-1+2i$ nollställen.$${breakLine}$
        Eftersom det rör sig  om ett fjärdegradspolynom, och vi har funnit lika många nollställen, så är ekvationen fullständigt löst.

        $${newLine}\\textbf{Svar: } z=2\\pm i, -1 \\pm 2i$`}</Latex>
      </Assignment>

      <p>
        <Latex>{`6.49 Ekvationen $z^4-z^3+7z^2-9z-18=0$ har en rent imaginär rot. Lös ekvationen.`}</Latex>
      </p>
      <Assignment title="Lösning" id="6.49">
        <Latex>{`
        Vi ansätter en rent imaginär rot $z=bi$ och sätter in i ekvationen$${newLine}
        (bi)^4-(bi)^3+7(bi)^2-9bi-18=0${ltx.iss}${breakLine}        
        b^4+b^3i-7b^2-9bi-18=0${ltx.iss}${breakLine} 
        (b^4-7b^2-18)+(b^3-9b)i=0${ltx.iss}${breakLine} 
        \\begin{cases}
          b^4-7b^2-18=0${breakLine}
          b^3-9b=b(b^2-9)=0
        \\end{cases}${newLine}$

        Ur systemets sista ekvation får vi möjligheterna $b=0$, som ej uppfyller
        den första, och $b=\\pm 3$, som uppfyller den första.$${breakLine}$
        Vi har alltså rötterna $z_1=3i$ och $z_2=-3i$.$${newLine}$
        Polynomdivision med $(z-z_1)(z-z_2)=z^2+9$ ger $${breakLine}
        z^4-z^3+7z^2-9z-18=(z^2+9)(z^2-z-2)${breakLine}
        $och vi finner de båda resterande rötterna genom att sätta $z^2-z-2=0${breakLine}
        $detta ger $z_3=-1$ och $z_4=2$
        $${newLine}\\textbf{Svar: } z=-1,\\quad2,\\quad3i,\\quad-3i$`}</Latex>
      </Assignment>

      <p>
        <Latex>{`6.53 Faktorisera polynomet $p(x)=x^5-x^4+4x-4$ i realla faktorer av så låg grad som möjligt`}</Latex>
      </p>
      <Assignment title="Lösning" id="6.53">
        <Latex>{`
        Gissa en rot $p(1) = 0$. Använd polynomdivision. $${breakLine}
        \\quad p(x)=(x-1)(x^{4}+4)${newLine}
        $Skriv om $x^4+4$ som en binomisk ekvation$${breakLine}
        z^4+4=0${ltx.iss}z^4=-4${breakLine}
        z=re^{i\\theta}${breakLine}
        z^4=(re^{i\\theta})^4=r^4(e^{i\\theta})^4=r^4e^{i4\\theta}${breakLine}
        $Eftersom $-4=4e^{i\\pi}$ kan vår ekvation skrivas$${breakLine}
        r^4e^{i4\\theta}=4e^{i\\pi}${breakLine}
        \\begin{cases}
        r^4=4 & r\\geq 0${breakLine}
        4\\theta=\\pi+k2\\pi & k\\in \\mathbb{Z}
        \\end{cases}${ltx.iss}
        \\begin{cases}
        r=\\sqrt{2}${breakLine}
        \\theta=\\frac{\\pi}{4}+k\\frac{\\pi}{2}, k \\in\\{0,1,2,3\\}
        \\end{cases}${newLine}
        z_0=\\sqrt{2}e^{i(\\pi/4+0(\\pi/2)}=\\sqrt{2}e^{i\\pi/4}=
        \\sqrt{2}(\\frac{1}{\\sqrt{2}}+\\frac{1}{\\sqrt{2}}i)=1+i${breakLine}
        z_1=\\sqrt{2}e^{i(\\pi/4+1(\\pi/2)}=\\sqrt{2}e^{i3\\pi/4}=
        \\sqrt{2}(-\\frac{1}{\\sqrt{2}}+\\frac{1}{\\sqrt{2}}i)=-1+i${breakLine}
        z_2=\\sqrt{2}e^{i(\\pi/4+2(\\pi/2)}=\\sqrt{2}e^{i5\\pi/4}=
        \\sqrt{2}(-\\frac{1}{\\sqrt{2}}-\\frac{1}{\\sqrt{2}}i)=-1-i${breakLine}
        z_3=\\sqrt{2}e^{i(\\pi/4+3(\\pi/2)}=\\sqrt{2}e^{i7\\pi/4}=
        \\sqrt{2}(\\frac{1}{\\sqrt{2}}-\\frac{1}{\\sqrt{2}}i)=1+i${newLine}
        $Använd faktorsatsen och konjugatregeln$${breakLine}
        z^4+4=(z-(1+i))(z-(-1+i))(z-(-1-i))(z-(1+i))=${breakLine}
        (z^2+2z+2)(z^2-2z+2)${breakLine}
        $Faktoriseringen blir alltså $${breakLine}
        (x^{2}-2 x+2)(x^{2}+2 x+2)
        ${newLine}\\textbf{Svar: } (x-1)(x^2-2x+2)(x^2+2x+2)$`}</Latex>
      </Assignment>
    </Container>
  );
};

export default Solutions;

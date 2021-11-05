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
        z=1${ltx.iss}|z|=1${breakLine}
        \\arg z=0${breakLine}
        \\text{Polär form: }z=re^{i\\theta}=1e^{i0}
        $`}</Latex>
      </Assignment>
      <Assignment title={`b) $-13$`} id="6.19b">
        <Latex>{`$
        z=-13${ltx.iss}|z|=13${breakLine}
        \\arg z=\\pi${breakLine}
        \\text{Polär form: }z=re^{i\\theta}=1e^{i\\pi}
        $`}</Latex>
      </Assignment>
      <Assignment title={`c) $i$`} id="6.19c">
        <Latex>{`$
        z=i${ltx.iss}|z|=\\sqrt{0^2+1^2}=1${breakLine}
        \\arg z=\\frac{\\pi}{2}${breakLine}
        \\text{Polär form: }z=re^{i\\theta}=1e^{i\\frac{\\pi}{2}}
        $`}</Latex>
      </Assignment>
      <Assignment title={`d) $-1+i$`} id="6.19d">
        <Latex>{`$
        z=-1+i${ltx.iss}|z|=\\sqrt{(-1)^2+1^2}=\\sqrt{2}${breakLine}
        \\arg z=\\frac{3\\pi}{4}${breakLine}
        \\text{Polär form: }z=re^{i\\theta}=\\sqrt{2}e^{i\\frac{3\\pi}{4}}
        $`}</Latex>
      </Assignment>
      <Assignment title={`e) $i\\sqrt{3}-1$`} id="6.19e">
        <Latex>{`$
        z=i\\sqrt3-1${ltx.iss}|z|=\\sqrt{\\sqrt{3}^2+(-1)^2}=\\sqrt{4}=2${breakLine}
        $Eftersom $\\sqrt{3}>1$ måste vi faktorisera med $r=|z|=2$ för att få en standardvinkel$${breakLine}
        -1+\\sqrt{3}i=2(\\frac12 + \\frac{\\sqrt{3}}{2}i)${ltx.iss}\\arg z = \\frac{2\\pi}{3}${breakLine}
        \\text{Polär form: }z=re^{i\\theta}=2e^{i\\frac{2\\pi}{3}}
        $`}</Latex>
      </Assignment>
      <Assignment title={`f) $\\sqrt{3}+3i$`} id="6.19f">
        <Latex>{`$
        z=i\\sqrt3-1${ltx.iss}|z|=\\sqrt{\\sqrt{3}^2+(3)^2}=\\sqrt{12}${breakLine}
        $Eftersom $\\sqrt{3}, 3>1$ måste vi faktorisera med $r=|z|=\\sqrt{12}$ för att få en standardvinkel$${breakLine}
        \\sqrt{3}+3i=
        \\sqrt{12}(\\frac{\\sqrt{3}}{\\sqrt{12}}+\\frac{3}{\\sqrt{12}}i)=
        \\sqrt{12}(\\sqrt{\\frac14}+\\sqrt{\\frac34}i)=
        \\sqrt{12}(\\frac12+\\frac{\\sqrt3}{2}i)
        ${ltx.iss}\\arg z = \\frac{\\pi}{3}${breakLine}
        \\text{Polär form: }z=re^{i\\theta}=\\sqrt{12}e^{i\\frac{\\pi}{3}}
        $`}</Latex>
      </Assignment>
      <p>6.20 Vad är absolutbelopp av:</p>
      <Assignment
        title={`a) $\\cos\\frac{\\pi}{8}+i\\sin\\frac{\\pi}{8}$`}
        id="6.20a"
      >
        <Latex>{`
        Använd den trigonometriska ettan$${breakLine}
        |\\cos\\frac{\\pi}{8}+i\\sin\\frac{\\pi}{8}|=
        \\sqrt{\\cos^2\\frac{\\pi}{8}+\\sin^2\\frac{\\pi}{8}}=
        \\sqrt{1}=1
        $
        `}</Latex>
      </Assignment>
      <Assignment
        title={`b) $\\cos\\frac{9\\pi}{5}+i\\sin\\frac{9\\pi}{5}$`}
        id="6.20b"
      >
        <Latex>{`
        Använd den trigonometriska ettan$${breakLine}
        |\\cos\\frac{9\\pi}{5}+i\\sin\\frac{9\\pi}{5}|=
        \\sqrt{\\cos^2\\frac{9\\pi}{5}+\\sin^2\\frac{9\\pi}{5}}=
        \\sqrt{1}=1
        $
        `}</Latex>
      </Assignment>
      <Assignment title={`c) $\\cos\\theta+i\\sin\\theta$`} id="6.20c">
        <Latex>{`
        Använd den trigonometriska ettan$${breakLine}
        |\\cos\\theta+i\\sin\\theta|=
        \\sqrt{\\cos^2\\theta+\\sin^2\\theta}=
        \\sqrt{1}=1
        $
        `}</Latex>
      </Assignment>
      <p>6.21 Vad är absolutbelopp av:</p>
      <Assignment title={`a) $e^{i\\frac{\\pi}{8}}$`} id="6.21a">
        <Latex>{`
        $|e^{i\\theta}|=|\\cos\\theta+i\\sin\\theta|=|\\cos\\frac{\\pi}{8}+i\\sin\\frac{\\pi}{8}|${breakLine} $
        Använd den trigonometriska ettan$${breakLine}
        |\\cos\\frac{9\\pi}{5}+i\\sin\\frac{9\\pi}{5}|=
        \\sqrt{\\cos^2\\frac{9\\pi}{5}+\\sin^2\\frac{9\\pi}{5}}=
        \\sqrt{1}=1
        $
        `}</Latex>
      </Assignment>
      <Assignment title={`b) $e^{i\\frac{9\\pi}{5}}$`} id="6.21b">
        <Latex>{`
        $|e^{i\\theta}|=|\\cos\\theta+i\\sin\\theta|=|\\cos\\frac{9\\pi}{5}+i\\sin\\frac{9\\pi}{5}|${breakLine} $
        Använd den trigonometriska ettan$${breakLine}
        |\\cos\\frac{9\\pi}{5}+i\\sin\\frac{9\\pi}{5}|=
        \\sqrt{\\cos^2\\frac{9\\pi}{5}+\\sin^2\\frac{9\\pi}{5}}=
        \\sqrt{1}=1
        $
        `}</Latex>
      </Assignment>
      <Assignment
        title={`c) $e^{i\\theta}$ om $\\theta$ är reellt?`}
        id="6.21c"
      >
        <Latex>{`
        $|e^{i\\theta}|=|\\cos\\theta+i\\sin\\theta|${breakLine} $
        Använd den trigonometriska ettan$${breakLine}
        |\\cos\\theta+i\\sin\\theta|=
        \\sqrt{\\cos^2\\theta+\\sin^2\\theta}=
        \\sqrt{1}=1
        $
        `}</Latex>
      </Assignment>

      <p>
        <Latex>{`6.22 Argumenet av $z$ är $\\pi/3$ och $\\arg w=\\pi/4$ Bestäm ett argument till:`}</Latex>
      </p>
      <Assignment title={`a) $zw$`} id="6.22a">
        <Latex>{`$
        \\arg z = \\frac{\\pi}{3}, \\arg w = \\frac{\\pi}{4}${breakLine}
        \\arg zw = \\arg z + \\arg w = \\frac{\\pi}{3} + \\frac{\\pi}{4}=\\frac{7\\pi}{12}
        $`}</Latex>
      </Assignment>
      <Assignment title={`b) $z/w$`} id="6.22b">
        <Latex>{`$
        \\arg z = \\frac{\\pi}{3}, \\arg w = \\frac{\\pi}{4}${breakLine}
        \\arg \\frac{z}{w} = \\arg z - \\arg w = \\frac{\\pi}{3} - \\frac{\\pi}{4}=\\frac{\\pi}{12}
        $`}</Latex>
      </Assignment>
      <Assignment
        title={`c) Kan man säga något om vad $\\arg(z+w)$ eller $\\arg(z-w)$ är?`}
        id="6.22c"
      >
        <Latex>{`
        Nej.$${newLine}$
        Regler för argumenträkning är samma som potenslagarna, alltså:$${breakLine}$
        $a^x a^y=a^{x+y}, \\dfrac{a^x}{a^y}=a^{x-y}${breakLine}$
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
        $${breakLine}
        \\dfrac{2000\\pi}{3}=666\\pi \\text{ + rest}${ltx.iss}2\\pi\\cdot333\\text { varv}${newLine}
        $Uttryckt som ett ett bråk med 3 i nämnaren$${breakLine}
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
        Kalla täljaren för $w$ och nämnaren för $x$: $${breakLine}
        z=\\dfrac{1+i\\sqrt{3}}{(2-2i)^3}=\\dfrac{w}{x}${newLine}

        |w|=\\sqrt{1^2+\\sqrt{3}^2}=2${breakLine}
        1+i\\sqrt{3}=2(\\frac{1}{2}+\\frac{\\sqrt{3}}{2}i)${ltx.iss}\\arg w = \\frac{\\pi}{3}${breakLine}
        w=2e^{i\\frac{\\pi}{3}}${newLine}

        |x|=\\sqrt{2^2+2^2}=\\sqrt{8}=2\\sqrt{2}${breakLine}
        (2-2i)^3=2\\sqrt{2}(\\frac{\\sqrt{2}}{2}-\\frac{\\sqrt{2}}{2}i)^3=
        2\\sqrt{2}(\\cos(-\\frac{\\pi}{4})-i\\sin(-\\frac{\\pi}{4}))^3=${breakLine}
        x= 2\\sqrt{2}(e^{i(-\\frac\\pi4)})^3${breakLine}
        $de Moivres formel:$${breakLine}
        (e^{i\\theta})^n=e^{in\\theta}${ltx.iss}2\\sqrt{2}(e^{i(-\\frac\\pi4)})^3=2\\sqrt{2}(e^{i(-\\frac{3\\pi}{4})})${newLine}

        z=\\dfrac{2e^{i\\frac{\\pi}{3}}}{2\\sqrt{2}e^{i(-\\frac{3\\pi}{4})}}=
        \\sqrt{2}\\dfrac{e^{i\\frac{\\pi}{3}}}{e^{i(-\\frac{3\\pi}{4}})}=
        \\sqrt{2}(e^{i(\\frac{\\pi}{3}-(-\\frac{3\\pi}{4}))})=\\sqrt{2}e^{i\\frac{13\\pi}{12}}${breakLine}
        \\arg z = \\dfrac{13\\pi}{12}+2\\pi n, $ n heltal$
        $`}</Latex>
      </Assignment>

      <p>
        <Latex>{`6.25 Bestäm $\\arg \\dfrac{(2+2i)(1+i\\sqrt{3})}{3i(\\sqrt{12}-2i)}$`}</Latex>
      </p>
      <Assignment title={`Lösning`} id="6.25">
        <Latex>{`
          Då argumentet är det enda som är intressant kan alla faktorer skrivas ihop som $k$.
          $${breakLine}
          \\frac{(2+2i)(1+i\\sqrt{3})}{3i(\\sqrt{12}-2i)}=
          \\frac{2\\sqrt{2}(\\frac{1}{\\sqrt{2}}+i\\frac{1}{\\sqrt{2}})\\frac{1}{2}(\\frac{1}{2}+i\\frac{\\sqrt{3}}{2})}{3i\\cdot\\frac{1}{4}(\\frac{\\sqrt{3}}{2}-i\\frac{1}{2})}= ${breakLine} 
          = k\\frac{(\\cos\\frac{\\pi}{4}+i\\sin\\frac{\\pi}{4})(\\cos\\frac{\\pi}{3}+i\\sin\\frac{\\pi}{3})}{(\\cos\\frac{\\pi}{2}+i\\sin\\frac{\\pi}{2})(\\cos(-\\frac{\\pi}{6})+i\\sin(-\\frac{\\pi}{6}))}=
          k\\frac{e^{i\\pi/4}e^{i\\pi/3}}{e^{i\\pi/2}e^{-i\\pi/6}}= ${breakLine} 
          =ke^{i(\\pi/4+\\pi/3-\\pi/2-(-\\pi/6))}=
          ke^{i(3\\pi/12+4\\pi/12-6\\pi/12+2\\pi/12)}= ${breakLine} =
          ke^{i3\\pi/12}=
          ke^{i\\pi/4} \\Rightarrow ${breakLine} \\Rightarrow
          \\arg\\frac{(2+2i)(1+i\\sqrt{3})}{3i(\\sqrt{12}-2i)}=\\arg ke^{i\\pi/4}=\\frac{\\pi}{4}+2\\pi n, ~~ n\\in\\mathbb{Z}
          ${breakLine}
          $
          $\\textbf{Svar: } \\frac{\\pi}{4}+2\\pi n, ~~ n\\in\\mathbb{Z}$
          `}</Latex>
      </Assignment>

      <p>
        <Latex>{`6.26 Låt $w$ vara ett givet reelt tal. Bestäm ett argument av`}</Latex>
      </p>
      <Assignment title={`a) $1+2iw$`} id="6.26a">
        <Latex>{`
        Låt $z=a+bi$ och $\\theta$ ett argument till $z$. Eftersom Re$z$ motsvarar x-axeln och Im$z$ motsvarar y-axeln i ett koordinatsystem är $\\tan\\theta=\\frac{b}{a},~~a\\neq 0$.
        $${breakLine}$
        Om $a > 0$ är $\\theta=\\arctan\\frac{b}{a}$ och om $a < 0$ är $\\theta=\\pi+\\arctan\\frac{b}{a}$.
        $${newLine}
        \\arg(1+2iw)=\\arctan\\frac{2w}{1}=\\arctan2w
        ${newLine}\\textbf{Svar: } \\arctan2w
        $`}</Latex>
      </Assignment>
      <Assignment title={`b) $-1+2iw$`} id="6.26b">
        <Latex>{`
        Låt $z=a+bi$ och $\\theta$ ett argument till $z$. Eftersom Re$z$ motsvarar x-axeln och Im$z$ motsvarar y-axeln i ett koordinatsystem är $\\tan\\theta=\\frac{b}{a},~~a\\neq 0$.
        $${breakLine}$
        Om $a > 0$ är $\\theta=\\arctan\\frac{b}{a}$ och om $a < 0$ är $\\theta=\\pi+\\arctan\\frac{b}{a}$.
        $${newLine}
        \\arg(-1+2iw)=\\pi+\\arctan\\frac{2w}{-1}=\\pi+\\arctan(-2w)=\\pi-\\arctan 2w
        ${newLine}\\textbf{Svar: } \\pi-\\arctan2w
        $`}</Latex>
      </Assignment>
      <Assignment title={`c) $\\dfrac{1}{1+2iw}$`} id="6.26c">
        <Latex>{`
        Låt $z=a+bi$ och $\\theta$ ett argument till $z$. Eftersom Re$z$ motsvarar x-axeln och Im$z$ motsvarar y-axeln i ett koordinatsystem är $\\tan\\theta=\\frac{b}{a},~~a\\neq 0$.
        $${breakLine}$
        Om $a > 0$ är $\\theta=\\arctan\\frac{b}{a}$ och om $a < 0$ är $\\theta=\\pi+\\arctan\\frac{b}{a}$.
        $${newLine}\\arg 1=0${breakLine}
        \\arg(1+2iw)=\\arctan2w\\;$`}</Latex>
        <Link href="?id=6.26a#6.26a">(se uppgift a)</Link>
        <Latex>{`$${breakLine}
        \\arg\\Big(\\dfrac{1}{1+2iw}\\Big)=\\arg1-\\arg(1+2w)=0-\\arctan(2w)=-\\arctan(2w)
        ${newLine}\\textbf{Svar: } -\\arctan2w
        $`}</Latex>
      </Assignment>
      <Assignment title={`d) $\\dfrac{1}{-1+2iw}$`} id="6.26d">
        <Latex>{`
        Låt $z=a+bi$ och $\\theta$ ett argument till $z$. Eftersom Re$z$ motsvarar x-axeln och Im$z$ motsvarar y-axeln i ett koordinatsystem är $\\tan\\theta=\\frac{b}{a},~~a\\neq 0$.
        $${breakLine}$
        Om $a > 0$ är $\\theta=\\arctan\\frac{b}{a}$ och om $a < 0$ är $\\theta=\\pi+\\arctan\\frac{b}{a}$.
        $${newLine}\\arg 1=0${breakLine}
        \\arg(-1+2iw)=\\pi-\\arctan2w\\;$`}</Latex>
        <Link href="?id=6.26b#6.26b">(se uppgift b)</Link>
        <Latex>{`$${breakLine}
        \\arg\\Big(\\dfrac{1}{-1+2iw}\\Big)=\\arg1-\\arg(-1+2w)=0-(\\pi-\\arctan(2w))=\\arctan(2w)-\\pi
        ${newLine}\\textbf{Svar: } \\arctan(2w)-\\pi
        $`}</Latex>
      </Assignment>
      <Assignment title={`e) $\\dfrac{1}{(1+2iw)^2}$`} id="6.26e">
        <Latex>{`
        Låt $z=a+bi$ och $\\theta$ ett argument till $z$. Eftersom Re$z$ motsvarar x-axeln och Im$z$ motsvarar y-axeln i ett koordinatsystem är $\\tan\\theta=\\frac{b}{a},~~a\\neq 0$.
        $${breakLine}$
        Om $a > 0$ är $\\theta=\\arctan\\frac{b}{a}$ och om $a < 0$ är $\\theta=\\pi+\\arctan\\frac{b}{a}$.
        $${newLine}\\arg 1=0${breakLine}
        \\arg(1+2iw)=\\arctan2w\\;$`}</Latex>
        <Link href="?id=6.26a#6.26a">(se uppgift a)</Link>
        <Latex>{`$${breakLine}
        \\arg\\Big(\\dfrac{1}{(1+2iw)^2}\\Big)=\\arg1-2\\arg(1+2w)=0-2\\arctan(2w)=-2\\arctan(2w)
        ${newLine}\\textbf{Svar: } -2\\arctan2w
        $`}</Latex>
      </Assignment>
      <Assignment title={`f) $\\dfrac{e^{iw}}{(1+2iw)^2}$`} id="6.26f">
        <Latex>{`
        Låt $z=a+bi$ och $\\theta$ ett argument till $z$. Eftersom Re$z$ motsvarar x-axeln och Im$z$ motsvarar y-axeln i ett koordinatsystem är $\\tan\\theta=\\frac{b}{a},~~a\\neq 0$.
        $${breakLine}$
        Om $a > 0$ är $\\theta=\\arctan\\frac{b}{a}$ och om $a < 0$ är $\\theta=\\pi+\\arctan\\frac{b}{a}$.
        $${newLine}\\arg e^{iw}=w${breakLine}
        \\arg(1+2iw)=\\arctan2w\\;$`}</Latex>
        <Link href="?id=6.26a#6.26a">(se uppgift a)</Link>
        <Latex>{`$${breakLine}
        \\arg\\Big(\\dfrac{e^{iw}}{1+2iw}\\Big)=\\arg e^{iw}-\\arg(1+2w)=w-\\arctan(2w)
        ${newLine}\\textbf{Svar: } w-\\arctan2w
        $`}</Latex>
      </Assignment>

      <p>
        <Latex>{`6.27 Beräkna $(\\frac12+i\\frac{\\sqrt{3}}{2})^{100}$`}</Latex>
      </p>
      <Assignment title="Lösning" id="6.27">
        <Latex>{`
        Använd faktumet att både sinus och cosinus har perioden $2\\pi$.
        $${newLine}
        (\\frac12+i\\frac{\\sqrt{3}}{2})^{100}=
        (\\cos\\frac{\\pi}{3}+i\\sin\\frac{\\pi}{3})^{100}=
        (e^{i\\frac{\\pi}{3}})^{100}=
        e^{i100\\pi/3}=
        e^{i102\\pi/3-\\frac{2\\pi}{3}}=
        e^{i(17\\cdot2\\pi-\\frac{2\\pi}{3})}${newLine}
        e^{i(17\\cdot2\\pi-\\frac{2\\pi}{3})}\\backsimeq e^{i(-\\frac{2\\pi}{3})}=
        \\cos(-\\frac{2\\pi}{3})+i\\sin(-\\frac{2\\pi}{3})=-\\frac{\\sqrt{3}}{2}-i\\frac{1}{2}
        ${newLine}\\textbf{Svar: } -\\frac{\\sqrt{3}}{2}-i\\frac{1}{2}
        $`}</Latex>
      </Assignment>

      <p>
        <Latex>{`6.28 Använd de Moivres formel för att uttrycka $\\cos 4\\theta$ och $\\sin 4\\theta$ med hjälp av $\\sin\\theta$ och $\\cos\\theta$`}</Latex>
      </p>
      <Assignment title="Lösning" id="6.28">
        <Latex>{`
        de Moivres formel: $(\\cos\\theta+i\\sin\\theta)^n=\\cos n\\theta + i\\sin n \\theta$
        
        $${breakLine}
        (\\cos\\theta+i\\sin\\theta)^4=\\cos 4\\theta + i\\sin 4 \\theta${breakLine}$
        Utveckla vänsterledet med hjälp av binomialsatsen
        $(x+y)^n=\\displaystyle\\sum_{k=0}^n \\binom{n}{k} x^{n-k}y^k$
        $${newLine}
        (\\cos\\theta+i\\sin\\theta)^4=${breakLine}
        =\\cos^4\\theta+i4\\cos^3\\theta\\sin\\theta+i^26\\cos^2\\theta\\sin^2\\theta+i^34\\cos\\theta\\sin^3\\theta+i^4\\sin^4\\theta=${breakLine}
        =\\cos^4\\theta+i4\\cos^3\\theta\\sin\\theta-6\\cos^2\\theta\\sin^2\\theta-i4\\cos\\theta\\sin^3\\theta+\\sin^4\\theta=${breakLine}
        $Bryt ut $i$ för att finna imaginär och reell del
        $${breakLine}
        =\\cos^4\\theta-6\\cos^2\\theta\\sin^2\\theta+\\sin^4\\theta+i(4\\cos^3\\theta\\sin\\theta-4\\cos\\theta\\sin^3\\theta)${breakLine}
        ${newLine}\\textbf{Svar: } \\cos 4\\theta=\\cos^4\\theta-6\\cos^2\\theta\\sin^2\\theta+\\sin^4\\theta${breakLine}
        \\quad\\qquad              \\sin 4\\theta=4\\cos^3\\theta\\sin\\theta-4\\cos\\theta\\sin^3\\theta
        $`}</Latex>
      </Assignment>

      <p>
        <Latex>{`6.29 Använd Eulers formler för att härleda ett uttryck för $\\cos\\alpha\\sin\\beta$`}</Latex>
      </p>
      <Assignment title="Lösning" id="6.29">
        <Latex>{`
        Med hjälp av Eulers formler
        $${breakLine}
        \\cos x=\\frac{1}{2}(e^{ix}+e^{-ix}), \\quad\\sin x=\\frac{1}{2i}(e^{ix}-e^{-ix}),${breakLine}
        $så får vi$${breakLine}
        \\cos\\alpha\\sin\\beta=${breakLine}
        \\frac{1}{2}(e^{i\\alpha}+e^{-i\\alpha})\\frac{1}{2i}(e^{i\\beta}-e^{-i\\beta})=${breakLine}
        \\frac{1}{2}(\\frac{1}{2i}(e^{i(\\alpha+\\beta)}-e^{i(\\alpha-\\beta)}+e^{-i(\\alpha-\\beta)}-e^{-i(\\alpha+\\beta)}))=${breakLine}
        \\frac{1}{2}(\\frac{1}{2i}(e^{i(\\alpha+\\beta)}-e^{-i(\\alpha+\\beta)})-\\frac{1}{2i}(e^{i(\\alpha-\\beta)}+e^{-i(\\alpha-\\beta)}))=${breakLine}
        \\frac{1}{2}(\\sin(\\alpha+\\beta)-\\sin(\\alpha-\\beta)).
        $`}</Latex>
      </Assignment>
    </Container>
  );
};

export default Solutions;

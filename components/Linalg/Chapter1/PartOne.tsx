import React from "react";
import styled from "styled-components";
import Latex from "react-latex-next";
import Assignment from "components/Assignment";
import { ltx, newLine, breakLine } from "lib/latexHelpers";

const Container = styled.div`
  width: 100%;
`;

const LinAlgChapter1PartOne = () => {
  return (
    <Container>
      <p>
        <Latex>{`6.1 Bestäm Re $z$ och Im $z$ om $z$ är:`}</Latex>
      </p>
      <Assignment author="Oliver" title={`a) $2+3i$`} id="6.1a">
        <Latex>{`$
        \\text{Re} z=2${breakLine}
        \\text{Im} z=3
        $`}</Latex>
      </Assignment>
      <Assignment author="Oliver" title={`b) $-1-i$`} id="6.1b">
        <Latex>{`$
        \\text{Re} z=-1${breakLine}
        \\text{Im} z=-1
        $`}</Latex>
      </Assignment>
      <Assignment author="Oliver" title={`c) $3$`} id="6.1c">
        <Latex>{`$
        \\text{Re} z=3${breakLine}
        \\text{Im} z=0
        $`}</Latex>
      </Assignment>
      <Assignment author="Oliver" title={`d) $2i$`} id="6.1d">
        <Latex>{`$
        \\text{Re} z=0${breakLine}
        \\text{Im} z=2
        $`}</Latex>
      </Assignment>
      <Assignment author="Oliver" title={`e) $-i$`} id="6.1e">
        <Latex>{`$
        \\text{Re} z=0${breakLine}
        \\text{Im} z=-1
        $`}</Latex>
      </Assignment>
    </Container>
  );
};

export default LinAlgChapter1PartOne;

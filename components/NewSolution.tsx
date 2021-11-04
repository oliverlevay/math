import React, { useRef, useState } from "react";
import styled from "styled-components";
import Layout from "layout";
import { Title } from "components";
import TextField from "@mui/material/TextField";
import Latex from "react-latex-next";

import { ltx } from "lib/latexHelpers";
import { Button, Stack } from "@mui/material";
import { Course } from "lib/types";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-bottom: 30rem;
`;

const Divider = styled.div`
  margin-top: 1rem;
  margin-left: 1rem;
`;

const convertLtxHelpers: { label: string; string: string }[] = Object.values(
  ltx
).map((ltxHelper) => ({
  label: `$${ltxHelper}$`,
  string: ltxHelper,
}));

const helpers: { label: string; string: string; wrap?: boolean }[] = [
  {
    label: "Text",
    string: "\\text{{}}",
    wrap: true,
  },
  ...convertLtxHelpers,
];

export default function NewSolution({ course }: { course: Course }) {
  const [text, setText] = useState(
    "\\text{Definition för talet } e = \\lim \\limits_{x \\rarr \\plusmn \\infin} \\left(1+\\dfrac{1}{x}\\right)^x"
  );
  const inputRef = useRef<HTMLInputElement>();
  const [selectionStart, setSelectionStart] = useState(
    inputRef?.current?.selectionStart || 0
  );
  const [selectionEnd, setSelectionEnd] = useState(
    inputRef?.current?.selectionEnd || text.length
  );
  return (
    <Layout course={course}>
      <Container>
        <Title>Ny lösning</Title>
        <p>
          I dagsläget finns ingen backend för att lägga upp nya lösningar, men
          här kan du förhandsvisa hur din lösning skulle se ut innan du skickar
          in till{" "}
          <a href="mailto:ol1662le-s@student.lu.se">
            ol1662le-s@student.lu.se.
          </a>
          <br />
        </p>
        <Stack flexDirection="row" flexWrap="wrap">
          {helpers.map((helper) => (
            <Button
              key={helper.label}
              color="secondary"
              style={{
                marginRight: "1rem",
                marginBottom: "1rem",
                textTransform: "none",
              }}
              variant="outlined"
              onClick={() => {
                if (helper.wrap) {
                  const wrapperText = helper.string.split("{}");
                  document.execCommand(
                    "insertText",
                    false,
                    `${wrapperText[0]}${text.substring(
                      selectionStart,
                      selectionEnd
                    )}${wrapperText[1]}`
                  );
                } else {
                  document.execCommand("insertText", false, helper.string);
                }
                inputRef?.current?.focus();
              }}
            >
              <Latex>{helper.label}</Latex>
            </Button>
          ))}
        </Stack>
        <TextField
          multiline
          style={{ backgroundColor: "white" }}
          minRows={5}
          inputRef={inputRef}
          defaultValue={text}
          onChange={(event) => setText(event.target.value)}
          onSelect={() => {
            setSelectionStart(inputRef?.current?.selectionStart || 0);
            setSelectionEnd(inputRef?.current?.selectionEnd || 0);
          }}
        />
        <Divider />
        <Latex>{text ? `$${text}$` : ""}</Latex>
      </Container>
    </Layout>
  );
}

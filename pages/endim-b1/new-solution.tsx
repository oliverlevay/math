import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Layout from 'layout';
import { Title } from 'components';
import TextField from '@mui/material/TextField';
import Latex from 'react-latex-next';
import 'katex/dist/katex.min.css';
import { ltx } from 'lib/latexHelpers';
import { Button, Stack } from '@mui/material';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const ButtonContainer = styled.div``;

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
    label: 'Nytt block',
    string: '${}$',
    wrap: true,
  },
  ...convertLtxHelpers,
];

export default function Home() {
  const [text, setText] = useState(
    'Definition för talet $ e = \\lim \\limits_{x \\rightarrow \\plusmn \\infin} (1+\\dfrac{1}{x})^x $'
  );
  const inputRef = useRef<HTMLInputElement>();
  const [selectionStart, setSelectionStart] = useState(
    inputRef?.current?.selectionStart || 0
  );
  const [selectionEnd, setSelectionEnd] = useState(
    inputRef?.current?.selectionEnd || text.length
  );
  return (
    <Layout course='endimB1'>
      <Container>
        <Title>Ny lösning</Title>
        <p>
          I dagsläget finns ingen backend för att lägga upp nya lösningar, men
          här kan du förhandsvisa hur din lösning skulle se ut innan du skickar
          in till{' '}
          <a href='mailto:ol1662le-s@student.lu.se'>
            ol1662le-s@student.lu.se.
          </a>
          <br />
          <br />
          Vi använder oss av ett plugin som kräver att man wrappar sina LaTeX
          uttryck i "$$", se exempel nedan.
          <br />
        </p>
        <Stack flexDirection='row' flexWrap='wrap'>
          {helpers.map((helper) => (
            <Button
              key={helper.label}
              style={{
                marginRight: '1rem',
                marginBottom: '1rem',
                textTransform: 'none',
              }}
              variant='outlined'
              onClick={() => {
                setText((state) => {
                  if (helper.wrap) {
                    const textArray = [
                      state.substring(0, selectionStart),
                      state.substring(selectionStart, selectionEnd),
                      state.substring(selectionEnd, state.length),
                    ];
                    const helperArray = helper.string.split('{}');
                    return `${textArray[0]}${helperArray[0]}${textArray[1]}${helperArray[1]}${textArray[2]}`;
                  }
                  const textArray = [
                    state.substring(0, selectionStart),
                    state.substring(selectionStart, state.length),
                  ];
                  return `${textArray[0]}${helper.string}${textArray[1]}`;
                });
              }}
            >
              <Latex>{helper.label}</Latex>
            </Button>
          ))}
        </Stack>
        <TextField
          multiline
          style={{ backgroundColor: 'white' }}
          minRows={5}
          value={text}
          inputRef={inputRef}
          onChange={(event) => setText(event.target.value)}
          onSelect={() => {
            setSelectionStart(inputRef?.current?.selectionStart || 0);
            setSelectionEnd(inputRef?.current?.selectionEnd || 0);
          }}
        />
        <Divider />
        <Latex>{text}</Latex>
      </Container>
    </Layout>
  );
}

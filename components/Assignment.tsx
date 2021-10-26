import { FC, useEffect, useState } from 'react';
import styled from 'styled-components';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useRouter } from 'next/dist/client/router';

type Props = {
  title: string;
  id: string;
};

const Anchor = styled.a`
  display: block;
  position: relative;
  top: -8rem;
  visibility: hidden;
`;

const Assignment: FC<Props> = ({ title, id, children }) => {
  const router = useRouter();
  const { id: selectedId } = router.query;
  const [expanded, setExpanded] = useState(false);
  console.log(router.query);
  useEffect(() => {
    if (id === selectedId) {
      setExpanded(true);
      router.push(router.pathname);
    }
  }, [selectedId, router]);
  return (
    <>
      <Anchor id={id} />
      <Accordion
        expanded={expanded}
        onClick={() => setExpanded((state) => !state)}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          {title}
        </AccordionSummary>
        <AccordionDetails>{children}</AccordionDetails>
      </Accordion>
    </>
  );
};

export default Assignment;

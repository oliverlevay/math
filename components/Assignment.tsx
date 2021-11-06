import { FC, useEffect, useState } from "react";
import styled from "styled-components";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
import LinkIcon from "@mui/icons-material/Link";
import { useRouter } from "next/dist/client/router";
import Latex from "react-latex-next";
import { Stack } from "@mui/material";
import Tooltip from "@mui/material/Tooltip";
import copyToClipBoard from "lib/copyToClipboard";

type Props = {
  title: string;
  id: string;
};

const Anchor = styled.a`
  display: block;
  position: relative;
  visibility: hidden;
  top: -20rem;
`;

const Assignment: FC<Props> = ({ title, id, children }) => {
  const router = useRouter();
  const { id: selectedId } = router.query;
  const [expanded, setExpanded] = useState(false);
  const [copiedToClipboard, setCopiedToClipboard] = useState(false);
  useEffect(() => {
    if (id === selectedId) {
      setExpanded(true);
    }
  }, [selectedId, router]);
  return (
    <>
      <Anchor id={id} />
      <Accordion expanded={expanded} style={{ lineHeight: 2 }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          onClick={() => setExpanded((state) => !state)}
        >
          <Latex>{title}</Latex>
        </AccordionSummary>
        <AccordionDetails>
          <Stack spacing={5}>
            <div>{children}</div>
            <Tooltip
              open={copiedToClipboard}
              disableFocusListener
              disableHoverListener
              disableTouchListener
              title="Länk kopierad!"
            >
              <div style={{ width: "fit-content", marginLeft: "auto" }}>
                <Button
                  variant="outlined"
                  color="secondary"
                  onClick={() => {
                    const url = new URL(
                      document.location.pathname,
                      document.location.origin
                    );
                    url.searchParams.set("id", id);
                    copyToClipBoard(url.toString() + `#${id}`, (err) => {
                      if (!err && !copiedToClipboard) {
                        setCopiedToClipboard(true);
                        setTimeout(() => setCopiedToClipboard(false), 2500);
                      }
                    });
                  }}
                  title="Kopiera länk till lösning"
                >
                  <LinkIcon />
                </Button>
              </div>
            </Tooltip>
          </Stack>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default Assignment;

import { colors } from 'lib/colors';
import { FC, useState } from 'react';
import styled from 'styled-components';

//const disableSpoiler = process.env.NODE_ENV === 'development';
const disableSpoiler = false;

const Assignment = styled.div`
  position: relative;
  margin-bottom: 2rem;
`;

const SpoilerBlock = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: ${disableSpoiler ? 'transparent' : colors.almond};
  z-index: 1;
`;

const Spoiler: FC = ({ children }) => {
  const [revealed, setRevealed] = useState(false);
  return (
    <Assignment onClick={() => setRevealed((state) => !state)}>
      <SpoilerBlock
        style={{ backgroundColor: revealed ? 'transparent' : '' }}
      />
      {children}
    </Assignment>
  );
};

export default Spoiler;

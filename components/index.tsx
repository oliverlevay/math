import { TABLET_BP } from 'lib/breakpoints';
import { colors } from 'lib/colors';
import styled from 'styled-components';

export const Title = styled.h1`
  color: ${colors.blackCoffee};
  font-size: 28px;
  ${TABLET_BP} {
    font-size: 50px;
  }
`;

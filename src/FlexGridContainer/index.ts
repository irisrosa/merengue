import styled from 'styled-components';

import { GridOptions } from '@src/types';

export const FlexGridContainer = styled.div<{ $maxWidth: GridOptions['maxWidth'] }>`
  @media (min-width: 992px) {
    max-width: ${({ $maxWidth }) => $maxWidth}px;
  }
  width: 100%;
  margin: 0 auto;
`;

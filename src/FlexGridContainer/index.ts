import styled from 'styled-components';

import { GridOptions } from '@src/types';

export const FlexGridContainer = styled.div`
  @media (min-width: ${({ theme }) => theme.breakPoints.large}px) {
    max-width: ${({ theme }) => theme.maxWidth}px;
  }
  width: 100%;
  margin: 0 auto;
`;

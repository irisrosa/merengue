import styled from 'styled-components';
import { transparentize } from 'polished';
import { ComponentInterface } from '@src/types';

export const Overlay = styled.div<ComponentInterface>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  background: ${({ theme }) => transparentize(0.45, theme.colors.gray900)};
  z-index: 0;
`;

import React, { ElementType } from 'react';

import styled, { css, useTheme } from 'styled-components';

import { Background } from '@src/Background';
import { BlockProps } from '@src/types';

const BlockContent = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  flex-basis: 100%;
`;

type StyledBlockProps = {
  $size: BlockProps['size'];
  $noPadding: BlockProps['noPadding'];
};

export const StyledBlock = styled.div<StyledBlockProps>`
  flex-grow: 1;
  box-sizing: border-box;
  max-width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;

  ${({ $noPadding, theme }) =>
    !$noPadding &&
    theme.blockPadding &&
    css`
      ${BlockContent} {
        padding: 10px;
        @media (min-width: ${theme.breakPoints.small}px) {
          padding: 20px;
        }
      }
    `}

  flex-basis: ${({ $size, theme }) => (100 / Math.trunc(theme.columns)) * Math.trunc($size)}%;

  @media (max-width: ${({ theme }) => theme.breakPoints.small}px) {
    flex-basis: 100%;
  }
`;

export const Block: ElementType<BlockProps> = ({
  BackgroundComponent,
  backgroundImage,
  children,
  className,
  noPadding,
  size = 1,
  style,
}) => (
  <StyledBlock $noPadding={noPadding} $size={size} className={className} style={style}>
    <Background CustomComponent={BackgroundComponent} image={backgroundImage} />
    <BlockContent data-testid="block-content">{children}</BlockContent>
  </StyledBlock>
);

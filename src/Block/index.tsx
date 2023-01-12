import React, { ElementType } from 'react';

import styled, { css } from 'styled-components';

import { Background } from '@src/Background';
import { BlockProps } from '@src/types';

const BlockContent = styled.div`
  position: relative;
  z-index: 1;
`;

type StyledBlockProps = {
  $size: BlockProps['size'];
  $blockPadding: BlockProps['blockPadding'];
};

export const StyledBlock = styled.div<StyledBlockProps>`
  position: relative;
  grid-column: span ${({ $size }) => $size};

  display: grid;

  ${({ theme, $blockPadding }) =>
    ($blockPadding || theme.blockPadding) &&
    css`
      ${BlockContent} {
        padding: ${({ theme }) => `${$blockPadding || theme.blockPadding}`};
        @media (min-width: ${theme.breakPoints.small}px) {
          padding: 1rem;
        }
      }
    `}

  @media (max-width: ${({ theme }) => theme.breakPoints.small}px) {
    grid-column: 1 / -1;
  }
`;

export const Block: ElementType<BlockProps> = ({
  BackgroundComponent,
  backgroundImage,
  blockPadding,
  children,
  className,
  size = 1,
  style,
}) => (
  <StyledBlock
    $blockPadding={blockPadding}
    $size={size}
    className={className}
    style={style}
    data-id="block"
  >
    <Background CustomComponent={BackgroundComponent} image={backgroundImage} />
    <BlockContent data-testid="block-content">{children}</BlockContent>
  </StyledBlock>
);

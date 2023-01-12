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
};

export const StyledBlock = styled.div<StyledBlockProps>`
  position: relative;
  grid-column: span ${({ $size }) => $size};

  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(${({ theme }) => theme.columns}, 1fr);

  ${({ theme }) =>
    theme.blockPadding &&
    css`
      ${BlockContent} {
        padding: 0.5rem;
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
  children,
  className,
  size = 1,
  style,
}) => (
  <StyledBlock $size={size} className={className} style={style} data-id="block">
    <Background CustomComponent={BackgroundComponent} image={backgroundImage} />
    <BlockContent data-testid="block-content">{children}</BlockContent>
  </StyledBlock>
);

import React, { ForwardedRef } from 'react';

import styled, { css } from 'styled-components';

import { Background } from '@src/Background';
import { BlockProps, PolymorphicComponent } from '@src/types';

const BlockContent = styled.div`
  position: relative;
  z-index: 1;
`;

// type StyledBlockProps = {
//   $size: BlockProps['size'];
//   $blockPadding: BlockProps['blockPadding'];
// };

export const StyledBlock = styled.div<BlockProps>`
  position: relative;
  grid-column: span ${({ size }) => size || 1};

  display: grid;

  ${({ theme, blockPadding }) =>
    (blockPadding || theme.blockPadding) &&
    css`
      padding: ${({ theme }) => `${blockPadding || theme.blockPadding}`};
      @media (max-width: ${theme.breakPoints.small}px) {
        padding: 1rem;
      }
    `}

  @media (max-width: ${({ theme }) => theme.breakPoints.small}px) {
    grid-column: 1 / -1;
  }
`;

export const Block: PolymorphicComponent<BlockProps> = React.forwardRef(
  (
    { BackgroundComponent, backgroundImage, children, ...props }: BlockProps,
    ref: ForwardedRef<any>
  ) => (
    <StyledBlock ref={ref} {...props}>
      <Background CustomComponent={BackgroundComponent} image={backgroundImage} />
      {backgroundImage || BackgroundComponent ? <BlockContent>{children}</BlockContent> : children}
    </StyledBlock>
  )
);

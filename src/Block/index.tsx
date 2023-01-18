import React from 'react';

import styled, { css } from 'styled-components';

import { Background } from '@src/Background';
import { BlockProps, PolymorphicComponent } from '@src/types';

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
      padding: ${({ theme }) => `${$blockPadding || theme.blockPadding}`};
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
    {
      BackgroundComponent,
      backgroundImage,
      blockPadding,
      children,
      size = 1,
      ...props
    }: BlockProps,
    ref: React.Ref<HTMLElement>
  ) => (
    <StyledBlock $blockPadding={blockPadding} $size={size} data-id="block" ref={ref} {...props}>
      <Background CustomComponent={BackgroundComponent} image={backgroundImage} />
      {backgroundImage || BackgroundComponent ? <BlockContent>{children}</BlockContent> : children}
    </StyledBlock>
  )
);

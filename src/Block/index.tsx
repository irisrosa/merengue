import React, { ForwardedRef } from 'react';

import styled, { css, useTheme } from 'styled-components';

import { Background } from '@src/Background';
import { BlockProps, PolymorphicComponent } from '@src/types';

const BlockContent = styled.div`
  position: relative;
  z-index: 1;
`;

export const StyledBlock = styled.div.withConfig<BlockProps>({
  shouldForwardProp: (prop, defaultValidatorFn) =>
    !['size'].includes(prop) && defaultValidatorFn(prop),
})`
  position: relative;
  grid-column: span ${({ size = 1 }) => size};

  display: grid;

  ${({ theme, blockPadding }) =>
    (blockPadding || theme.blockPadding) &&
    css`
      padding: ${`${blockPadding || theme.blockPadding}`};
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
    { renderCustomBackground, backgroundImage, children, offset, ...props }: BlockProps,
    ref: ForwardedRef<any>
  ) => {
    const hasBackground = Boolean(backgroundImage) || Boolean(renderCustomBackground);
    return (
      <>
        {Boolean(offset) &&
          Array(offset)
            .fill(0)
            .map(() => <StyledBlock />)}
        <StyledBlock ref={ref} {...props}>
          {hasBackground ? (
            <>
              <Background
                renderCustomBackground={renderCustomBackground}
                backgroundImage={backgroundImage}
              />
              <BlockContent>{children}</BlockContent>
            </>
          ) : (
            children
          )}
        </StyledBlock>
      </>
    );
  }
);

import React, { ForwardedRef } from 'react';

import styled, { css } from 'styled-components';

import { Background } from '@src/Background';
import {
  BlockSetProps,
  PolymorphicComponent,
  PolymorphicComponentPropWithRef,
  PolymorphicRef,
} from '@src/types';

const convertRemToPixels: (arg: string | false) => number = rem =>
  rem ? parseFloat(rem) * parseFloat(getComputedStyle(document.documentElement).fontSize) : 1;

const BlockSetStyled = styled.div<BlockSetProps>`
  position: relative;
  display: grid;
  gap: ${({ theme }) => theme.gap && `${theme.gap}`};
  grid-template-columns: repeat(${({ theme }) => theme.columns}, 1fr);

  @media (min-width: ${({ theme }) => theme.breakPoints.large}px) {
    max-width: ${({ theme, extendContent, extendBackground }) =>
      extendContent || extendBackground ? '100%' : theme.maxWidth}px;

    ${({ theme, extendBackground }) =>
      extendBackground &&
      css`
        grid-template-columns: repeat(
          ${theme.columns},
          ${Math.floor(
            (theme.maxWidth - (theme.columns - 1) * convertRemToPixels(theme.gap)) / theme.columns
          )}px
        );
        justify-content: center;
      `}
  }

  width: 100%;
  margin: 0 auto;
`;

export const BlockSet: PolymorphicComponent<BlockSetProps> = React.forwardRef(
  <C extends React.ElementType = 'div'>(
    {
      children,
      renderCustomBackground,
      backgroundImage,
      ...props
    }: PolymorphicComponentPropWithRef<C, BlockSetProps>,
    ref: PolymorphicRef<C>
  ) => {
    const hasBackground = Boolean(backgroundImage) || Boolean(renderCustomBackground);

    return (
      <BlockSetStyled ref={ref} {...props}>
        {hasBackground && (
          <Background
            renderCustomBackground={renderCustomBackground}
            backgroundImage={backgroundImage}
          />
        )}

        {children}
      </BlockSetStyled>
    );
  }
);

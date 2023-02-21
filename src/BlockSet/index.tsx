import React from 'react';

import styled from 'styled-components';

import { Background } from '@src/Background';
import { theme } from '@src/theme';
import {
  BlockSetProps,
  PolymorphicComponent,
  PolymorphicComponentPropWithRef,
  PolymorphicRef,
  PropsWithTheme,
} from '@src/types';

const BlockSetStyled = styled.div<PropsWithTheme<BlockSetProps>>`
  position: relative;
  display: grid;
  gap: ${({ theme }) => theme.gap && `${theme.gap}`};
  grid-template-columns: repeat(${({ theme }) => theme.columns}, 1fr);

  @media (min-width: ${({ theme }) => theme.breakPoints.large}px) {
    max-width: ${({ theme, extendContent }) => (extendContent ? '100%' : theme.maxWidth)}px;
  }

  width: 100%;
  margin: 0 auto;
`;

const BlockSetWrapper = styled.div`
  position: relative;
`;

export const BlockSet: PolymorphicComponent<BlockSetProps> = React.forwardRef(
  <C extends React.ElementType = 'div'>(
    {
      children,
      renderCustomBackground,
      backgroundImage,
      extendBackground,
      ...props
    }: PolymorphicComponentPropWithRef<C, BlockSetProps>,
    ref: PolymorphicRef<C>
  ) => {
    const hasBackground = Boolean(backgroundImage) || Boolean(renderCustomBackground);

    if (hasBackground && extendBackground) {
      return (
        <BlockSetWrapper>
          <Background
            renderCustomBackground={renderCustomBackground}
            backgroundImage={backgroundImage}
          />
          <BlockSetStyled {...props} theme={theme.options} ref={ref}>
            {children}
          </BlockSetStyled>
        </BlockSetWrapper>
      );
    }

    return (
      <BlockSetStyled {...props} theme={theme.options} ref={ref}>
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

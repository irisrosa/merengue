import React, { ElementType } from 'react';

import styled, { css, ThemeProvider, useTheme } from 'styled-components';

import { Background } from '@src/Background';
import { BlockSetProps } from '@src/types';

import { theme as defaultTheme } from '../defaultTheme';
import { BlockSetContent } from './BlockSetContent';

type BlockSetStyledProps = {
  $extendBackground: BlockSetProps['extendBackground'];
};

const BlockSetStyled = styled.div<BlockSetStyledProps>`
  position: relative;
  overflow: hidden;

  ${({ $extendBackground, theme }) =>
    !$extendBackground &&
    css`
      @media (min-width: ${theme.breakPoints.small}px) {
        max-width: ${theme.maxWidth}px;
      }
      width: 100%;
      margin: 0 auto;
    `}
`;

export const BlockSet: ElementType<BlockSetProps> = ({
  BackgroundComponent,
  backgroundImage,
  children,
  className,
  extendBackground,
  extendContent,
  style,
  options = defaultTheme,
}) => {
  const theme = useTheme();

  return (
    <ThemeProvider theme={{ ...theme, ...options }}>
      <BlockSetStyled
        $extendBackground={extendBackground || extendContent}
        className={className}
        style={style}
      >
        <Background CustomComponent={BackgroundComponent} image={backgroundImage} />
        <BlockSetContent extend={extendContent}>{children}</BlockSetContent>
      </BlockSetStyled>
    </ThemeProvider>
  );
};

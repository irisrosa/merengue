import React, { ElementType } from 'react';

import styled, { css } from 'styled-components';

import { Background } from '@src/Background';
import { BlockSetContext } from '@src/BlockSet/BlockSetContext';
import { DEFAULT_MAX_WIDTH } from '@src/constants';
import { BlockSetProps, GridOptions } from '@src/types';

import { BlockSetContent } from './BlockSetContent';

type BlockSetStyledProps = {
  $extendBackground: BlockSetProps['extendBackground'];
  $maxWidth: GridOptions['maxWidth'];
};

const BlockSetStyled = styled.div<BlockSetStyledProps>`
  position: relative;
  overflow: hidden;

  ${({ $extendBackground, $maxWidth }) =>
    !$extendBackground &&
    css`
      @media (min-width: 992px) {
        max-width: ${$maxWidth}px;
      }
      width: 100%;
      margin: 0 auto;
    `}
`;

export const BlockSet: ElementType<BlockSetProps> = ({
  BackgroundComponent,
  backgroundImage,
  blockPadding,
  children,
  className,
  columns,
  extendBackground,
  extendContent,
  maxWidth = DEFAULT_MAX_WIDTH,
  style,
}) => {
  return (
    <BlockSetContext.Provider value={{ blockPadding, columns, maxWidth }}>
      <BlockSetStyled
        $extendBackground={extendBackground || extendContent}
        $maxWidth={maxWidth}
        className={className}
        style={style}
      >
        <Background CustomComponent={BackgroundComponent} image={backgroundImage} />
        <BlockSetContent extend={extendContent}>{children}</BlockSetContent>
      </BlockSetStyled>
    </BlockSetContext.Provider>
  );
};

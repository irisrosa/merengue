import React, { ElementType } from 'react';

import styled, { css } from 'styled-components';

import { Background } from '@src/Background';
import { BlockSetContext } from '@src/BlockSet/BlockSetContext';
import { BlockSetProps } from '@src/types';

import { BlockSetContent } from './BlockSetContent';

const BlockSetStyled = styled.div<Pick<BlockSetProps, 'extendBackground'>>`
  position: relative;
  overflow: hidden;

  ${({ extendBackground }) =>
    !extendBackground &&
    css`
      @media (min-width: 992px) {
        max-width: 960px;
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
  style,
}) => {
  return (
    <BlockSetContext.Provider value={{ blockPadding, columns }}>
      <BlockSetStyled
        extendBackground={extendBackground || extendContent}
        className={className}
        style={style}
      >
        <Background CustomComponent={BackgroundComponent} image={backgroundImage} />
        <BlockSetContent extend={extendContent}>{children}</BlockSetContent>
      </BlockSetStyled>
    </BlockSetContext.Provider>
  );
};

import React, { ElementType } from 'react';

import styled, { css } from 'styled-components';

import { BlockSetContext } from '@src/BlockSet/BlockSetContext';
import { BlockSetProps } from '@src/types';

import { BlockSetBackground } from './BlockSetBackground';
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
  extendBackground,
  extendContent,
  style,
}) => {
  return (
    <BlockSetContext.Provider value={{ blockPadding }}>
      <BlockSetStyled
        data-testid="blockset"
        extendBackground={extendBackground || extendContent}
        className={className}
        style={style}
      >
        <BlockSetBackground CustomComponent={BackgroundComponent} image={backgroundImage} />
        <BlockSetContent extend={extendContent}>{children}</BlockSetContent>
      </BlockSetStyled>
    </BlockSetContext.Provider>
  );
};

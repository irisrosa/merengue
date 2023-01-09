import React, { ElementType } from 'react';

import { omit, pick } from 'ramda';
import styled, { css } from 'styled-components';

import { Background } from '@src/Background';
import { Block } from '@src/Block';
import { BlockSetContext } from '@src/BlockSet/BlockSetContext';
import { FlexWrap } from '@src/FlexWrap';
import { BlockSetProps } from '@src/types';

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

const FlexGridContainer = styled.div`
  @media (min-width: 992px) {
    max-width: 960px;
  }
  width: 100%;
  margin: 0 auto;
`;

const Container: ElementType = ({ children }) => (
  <FlexGridContainer data-testid="flexgrid-container">{children}</FlexGridContainer>
);

export const BlockSet: ElementType<BlockSetProps> = ({
  extendContent,
  extendBackground,
  blockPadding,
  backgroundImage,
  BackgroundComponent,
  className,
  style,
  children,
}) => {
  const blocksContent = <FlexWrap>{children}</FlexWrap>;

  const imageBackground = Boolean(backgroundImage) && (
    <Background data-testid="blockset-background-image" overlay {...backgroundImage} />
  );
  const customBackground = Boolean(BackgroundComponent) && (
    <BackgroundComponent data-testid="blockset-background-comp" />
  );
  const content = Boolean(extendContent) ? blocksContent : <Container>{blocksContent}</Container>;

  return (
    <BlockSetContext.Provider value={{ blockPadding }}>
      <BlockSetStyled
        data-testid="blockset"
        extendBackground={extendBackground || extendContent}
        className={className}
        style={style}
      >
        {(customBackground || imageBackground) && (
          <div
            data-testid="blockset-background"
            style={{
              position: 'static',
            }}
          >
            {customBackground}
            {imageBackground}
          </div>
        )}
        {content}
      </BlockSetStyled>
    </BlockSetContext.Provider>
  );
};

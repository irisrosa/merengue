import React, { ElementType, useContext } from 'react';

import styled, { css } from 'styled-components';

import { Background } from '@src/Background';
import { BlockSetContext } from '@src/BlockSet/BlockSetContext';
import { BlockProps } from '@src/types';

const BlockContent = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  flex-basis: 100%;
`;

export const StyledBlock = styled.div<Pick<BlockProps, 'size' | 'noPadding'>>`
  flex-grow: 1;
  box-sizing: border-box;
  max-width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;

  ${({ noPadding }) =>
    !noPadding &&
    css`
      ${BlockContent} {
        padding: 10px;
        @media (min-width: 767px) {
          padding: 20px;
        }
      }
    `}

  ${({ size }) => {
    switch (size) {
      case 4:
        return css`
          flex-basis: 100%;
        `;
      case 2:
        return css`
          flex-basis: 50%;
        `;
      case 3:
        return css`
          flex-basis: 75%;
        `;
      case 1:
      default:
        return css`
          flex-basis: 25%;
        `;
    }
  }}

  @media (max-width: 767px) {
    flex-basis: 100%;
  }
`;

export const Block: ElementType<BlockProps> = ({
  BackgroundComponent,
  backgroundImage,
  children,
  className,
  noPadding,
  size,
  style,
}) => {
  const { blockPadding: usePadding = !noPadding } = useContext(BlockSetContext);

  const imageBackground = Boolean(backgroundImage) && (
    <Background data-testid="block-background-image" overlay {...backgroundImage} />
  );
  const customBackground = Boolean(BackgroundComponent) && (
    <BackgroundComponent data-testid="blockset-background-comp" />
  );

  return (
    <StyledBlock
      data-testid="block"
      noPadding={!usePadding}
      size={size}
      style={style}
      className={className}
    >
      {(customBackground || imageBackground) && (
        <div
          data-testid="block-background"
          style={{
            position: 'static',
          }}
        >
          {customBackground}
          {imageBackground}
        </div>
      )}
      <BlockContent data-testid="block-content">{children}</BlockContent>
    </StyledBlock>
  );
};

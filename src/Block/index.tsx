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

  flex-basis: ${({ size }) => (100 / 4) * size}%;

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

  return (
    <StyledBlock noPadding={!usePadding} size={size} style={style} className={className}>
      <Background CustomComponent={BackgroundComponent} image={backgroundImage} />
      <BlockContent data-testid="block-content">{children}</BlockContent>
    </StyledBlock>
  );
};

import React, { useContext } from 'react';

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

export const StyledBlock = styled.div<BlockProps>`
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

export const Block: React.FC<BlockProps> = ({
  children,
  noPadding,
  backgroundImage,
  BgComp,
  ...rest
}) => {
  const { blockPadding: usePadding = !noPadding } = useContext(BlockSetContext);

  const hasCustomBgImg = Boolean(backgroundImage);
  const hasCustomBgComp = Boolean(BgComp);

  return (
    <StyledBlock data-testid="block" noPadding={!usePadding} {...rest}>
      {(hasCustomBgImg || hasCustomBgComp) && (
        <div
          data-testid="block-background"
          style={{
            position: 'static',
          }}
        >
          {hasCustomBgComp && <BgComp data-testid="blockset-background-comp" />}
          {hasCustomBgImg && (
            <Background data-testid="block-background-image" overlay {...backgroundImage} />
          )}
        </div>
      )}
      <BlockContent data-testid="block-content">{children}</BlockContent>
    </StyledBlock>
  );
};

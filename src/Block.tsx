import React, { useContext } from 'react';
import styled, { css } from 'styled-components';
import { Background } from '@src/Background';
import { BlockSetContext } from './BlockSetContext';
import { BlockInterface } from './types';

const BlockContent = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  flex-basis: 100%;
`;

export const StyledBlock = styled.div<BlockInterface>`
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

export const Block: React.FC<BlockInterface> = ({
  children,
  noPadding,
  position,
  noBackground,
  backgroundImage,
  BgComp,
  ...rest
}) => {
  const {
    blockPadding: usePadding = !noPadding,
    hasCustomBg: blockSetHasCustomBg,
    BgComp: BlockSetBgComp,
  } = useContext(BlockSetContext);

  const useBlockSetCustomBg = position === 0 && blockSetHasCustomBg;
  const hasCustomBgImg = Boolean(backgroundImage);
  const hasCustomBgComp = Boolean(BgComp);
  const hasCustomBg = hasCustomBgImg || hasCustomBgComp;
  const BackgroundComp = BgComp || BlockSetBgComp || Background;

  const Content = () => <BlockContent data-testid="block-content">{children}</BlockContent>;

  return (
    <StyledBlock data-testid="block" noPadding={!usePadding} {...rest}>
      {!noBackground && !useBlockSetCustomBg && hasCustomBg ? (
        <BackgroundComp
          data-testid="background-image"
          style={{ position: 'static' }}
          overlay
          {...backgroundImage}
        >
          <Content />
        </BackgroundComp>
      ) : (
        <Content />
      )}
    </StyledBlock>
  );
};

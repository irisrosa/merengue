import React, { useContext } from 'react';
import styled, { css } from 'styled-components';
import { generateMediaQueries, respondTo } from '@src/theme/utils';
import { Background } from '@components/layout/Background';
import { BlockSetContext } from './BlockSetContext';
import { BlockContext } from './BlockContext';
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

  ${({ theme, noPadding }) =>
    !noPadding &&
    css`
      ${BlockContent} {
        padding: ${theme.spacing.md};
        ${respondTo().mdXl`
          padding: ${theme.spacing.lg};
        `}
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

  ${({ theme }) =>
    generateMediaQueries('flex-basis', { block: { sm: '100%' } }, theme.queries).block}

  ${({ blockStyle, theme }) => {
    switch (blockStyle) {
      case 'light':
        return css`
          background-color: ${theme.colors.gray100};
        `;
      case 'highlight':
        return css`
          background-color: ${theme.colors.brand};
        `;
      case 'dark':
        return css`
          background-color: ${theme.colors.brand700};
        `;
      default:
        return css``;
    }
  }}
`;

export const Block: React.FC<BlockInterface> = ({
  children,
  noPadding,
  blockStyle,
  position,
  noBackground,
  backgroundImage,
  BgComp,
  ...rest
}) => {
  const {
    style: blockSetStyle,
    blockPadding: usePadding = !noPadding,
    hasCustomBg: blockSetHasCustomBg,
    BgComp: BlockSetBgComp,
  } = useContext(BlockSetContext);

  const bStyle = blockStyle || blockSetStyle;
  const useBlockSetCustomBg = position === 0 && blockSetHasCustomBg;
  const hasCustomBgImg = Boolean(backgroundImage);
  const hasCustomBgComp = Boolean(BgComp);
  const hasCustomBg = hasCustomBgImg || hasCustomBgComp;
  const BackgroundComp = BgComp || BlockSetBgComp || Background;

  const Content = () => <BlockContent data-testid="block-content">{children}</BlockContent>;

  return (
    <BlockContext.Provider value={bStyle}>
      <StyledBlock
        data-testid="block"
        blockStyle={useBlockSetCustomBg || noBackground ? 'default' : bStyle}
        noPadding={!usePadding}
        {...rest}
      >
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
    </BlockContext.Provider>
  );
};

import React from 'react';
import styled, { css } from 'styled-components';
import { pick, omit } from 'ramda';
import { responsiveMaxWidth } from '@theme/utils';
import { AvailableThemes } from '@src/theme/types';
import { Block, FlexWrap } from './';
import { Background } from './Background';
import { BlockSetInterface } from './types';
import { BlockSetContext } from './BlockSetContext';

const BlockSetStyled = styled.div<
  Pick<BlockSetInterface, 'blockSetStyle' | 'theme' | 'bleedBackground'>
>`
  position: relative;
  overflow: hidden;

  ${({ bleedBackground, theme }) =>
    !bleedBackground &&
    css`
      ${responsiveMaxWidth(theme).container}
      width: 100%;
      margin: 0 auto;
    `}

  ${({ blockSetStyle, theme }) => {
    switch (blockSetStyle) {
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

const FlexGridContainer = styled.div<{ theme?: keyof AvailableThemes }>`
  ${({ theme }) => responsiveMaxWidth(theme).container}
  width: 100%;
  margin: 0 auto;
`;

const Blocks: React.FC<Pick<BlockSetInterface, 'blocks'>> = ({ blocks }) => (
  <FlexWrap>
    {blocks.map(({ style, Component, ...block }, blockKey) => {
      const blockProps = ['size', 'backgroundImage', 'noBackground'];
      return (
        <Block key={blockKey} position={blockKey} blockStyle={style} {...pick(blockProps, block)}>
          <Component {...omit(blockProps, block)} />
        </Block>
      );
    })}
  </FlexWrap>
);

export const BlockSet: React.FC<BlockSetInterface> = ({
  blocks,
  blockSetStyle,
  bleedContent,
  bleedBackground,
  blockPadding,
  children,
  backgroundImage,
  BgComp,
  ...rest
}) => {
  const renderChildren = () =>
    children ? <FlexWrap>{children}</FlexWrap> : <Blocks blocks={blocks} />;

  const renderContainer = (components: JSX.Element | React.ReactNode) => (
    <FlexGridContainer data-testid="flexgrid-container">{components}</FlexGridContainer>
  );

  const hasCustomBgImg = Boolean(backgroundImage);
  const hasCustomBgComp = Boolean(BgComp);
  const hasCustomBg = hasCustomBgImg;
  const BackgroundComp = hasCustomBgComp ? BgComp : Background;
  const content = bleedContent ? renderChildren() : renderContainer(renderChildren());

  return (
    <BlockSetContext.Provider value={{ style: blockSetStyle, blockPadding, hasCustomBg, BgComp }}>
      <BlockSetStyled
        data-testid="blockset"
        blockSetStyle={blockSetStyle}
        bleedBackground={bleedBackground || bleedContent}
        {...rest}
      >
        {hasCustomBg ? (
          <BackgroundComp
            data-testid="blockset-background-image"
            overlay
            {...backgroundImage}
            style={{ position: 'static' }}
          >
            {content}
          </BackgroundComp>
        ) : (
          content
        )}
      </BlockSetStyled>
    </BlockSetContext.Provider>
  );
};

import { Background } from '@src/Background';
import { Block } from '@src/Block';
import { BlockSetContext } from '@src/BlockSet/BlockSetContext';
import { FlexWrap } from '@src/FlexWrap';
import { BlockSetInterface } from '@src/types';
import { omit, pick } from 'ramda';
import React from 'react';
import styled, { css } from 'styled-components';

const BlockSetStyled = styled.div<Pick<BlockSetInterface, 'bleedBackground'>>`
  position: relative;
  overflow: hidden;

  ${({ bleedBackground }) =>
    !bleedBackground &&
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

const Blocks: React.FC<Pick<BlockSetInterface, 'blocks'>> = ({ blocks }) => (
  <FlexWrap>
    {blocks.map(({ style, Component, ...block }, blockKey) => {
      const blockProps = ['size', 'backgroundImage', 'noBackground'];
      return (
        <Block key={blockKey} position={blockKey} {...pick(blockProps, block)}>
          <Component {...omit(blockProps, block)} />
        </Block>
      );
    })}
  </FlexWrap>
);

export const BlockSet: React.FC<BlockSetInterface> = ({
  blocks,
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
    <BlockSetContext.Provider value={{ blockPadding, hasCustomBg, BgComp }}>
      <BlockSetStyled
        data-testid="blockset"
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

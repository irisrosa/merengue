import React from 'react';

import { omit, pick } from 'ramda';
import styled, { css } from 'styled-components';

import { Background } from '@src/Background';
import { Block } from '@src/Block';
import { BlockSetContext } from '@src/BlockSet/BlockSetContext';
import { FlexWrap } from '@src/FlexWrap';
import { BlockSetProps } from '@src/types';

const BlockSetStyled = styled.div<Pick<BlockSetProps, 'bleedBackground'>>`
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

const Blocks: React.FC<Pick<BlockSetProps, 'blocks'>> = ({ blocks }) => (
  <FlexWrap>
    {blocks.map(({ Component, ...block }, blockKey) => {
      const blockProps = ['size', 'backgroundImage', 'BgComp'];
      return (
        <Block key={blockKey} {...pick(blockProps, block)}>
          <Component {...omit(blockProps, block)} />
        </Block>
      );
    })}
  </FlexWrap>
);

export const BlockSet: React.FC<BlockSetProps> = ({
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
  const content = bleedContent ? renderChildren() : renderContainer(renderChildren());

  return (
    <BlockSetContext.Provider value={{ blockPadding }}>
      <BlockSetStyled
        data-testid="blockset"
        bleedBackground={bleedBackground || bleedContent}
        {...rest}
      >
        {(hasCustomBgComp || hasCustomBgImg) && (
          <div
            data-testid="blockset-background"
            style={{
              position: 'static',
            }}
          >
            {hasCustomBgComp && <BgComp data-testid="blockset-background-comp" />}
            {hasCustomBgImg && (
              <Background data-testid="blockset-background-image" overlay {...backgroundImage} />
            )}
          </div>
        )}
        {content}
      </BlockSetStyled>
    </BlockSetContext.Provider>
  );
};

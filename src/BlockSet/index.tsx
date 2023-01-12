import React, { Children, ElementType, PropsWithChildren } from 'react';

import styled, { css, useTheme } from 'styled-components';

import { Background } from '@src/Background';
import { BlockSetProps } from '@src/types';

// type BlockSetStyledProps = {
//   $extendBackground: FlexGridProps['extendBackground'];
// };

// const BlockSetStyled = styled.div<BlockSetStyledProps>`
//   position: relative;
//   overflow: hidden;

//   ${({ $extendBackground, theme }) =>
//     !$extendBackground &&
//     css`
//       @media (min-width: ${theme.breakPoints.small}px) {
//         max-width: ${theme.maxWidth}px;
//       }
//       width: 100%;
//       margin: 0 auto;
//     `}
// `;

const BlockSetElement: ElementType<BlockSetProps> = props => {
  const theme = useTheme();
  return React.createElement(theme.domMapping.wrapper, props, [props.children]);
};

const BlockSetStyled = styled(BlockSetElement)`
  display: grid;
  gap: ${({ theme }) => theme.gap && `${theme.gap}`};
  grid-template-columns: repeat(${({ theme }) => theme.columns}, 1fr);

  @media (min-width: ${({ theme }) => theme.breakPoints.large}px) {
    max-width: ${({ theme }) => theme.maxWidth}px;
  }
  width: 100%;
  margin: 0 auto;
`;

export const BlockSet: ElementType<BlockSetProps> = ({
  // BackgroundComponent,
  // backgroundImage,
  children,
  className,
  // extendBackground,
  // extendContent,
  style,
}) => (
  <BlockSetStyled
    data-id="blockset"
    // $extendBackground={extendBackground || extendContent}
    className={className}
    style={style}
  >
    {/* <Background CustomComponent={BackgroundComponent} image={backgroundImage} /> */}
    {children}
  </BlockSetStyled>
);

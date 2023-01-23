import React, { ForwardedRef } from 'react';

import styled from 'styled-components';

import { BlockSetProps, PolymorphicComponent } from '@src/types';

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

// const BlockSetElement: ElementType<BlockSetProps> = props => {
//   const theme = useTheme();
//   return React.createElement(theme.domMapping.wrapper, props, [props.children]);
// };

const BlockSetStyled = styled.div<BlockSetProps>`
  display: grid;
  gap: ${({ theme }) => theme.gap && `${theme.gap}`};
  grid-template-columns: repeat(${({ theme }) => theme.columns}, 1fr);

  @media (min-width: ${({ theme }) => theme.breakPoints.large}px) {
    max-width: ${({ theme, extendContent }) => (extendContent ? '100%' : theme.maxWidth)}px;
  }

  width: 100%;
  margin: 0 auto;
`;

export const BlockSet: PolymorphicComponent<BlockSetProps> = React.forwardRef(
  ({ children, ...props }: BlockSetProps, ref: ForwardedRef<any>) => (
    <BlockSetStyled ref={ref} {...props}>
      {children}
    </BlockSetStyled>
  )
);

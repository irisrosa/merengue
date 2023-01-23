import React, { ForwardedRef } from 'react';

import styled from 'styled-components';

import { Background } from '@src/Background';
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

const BlockSetStyled = styled.div<BlockSetProps>`
  position: relative;
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
  (
    { children, renderCustomBackground, backgroundImage, ...props }: BlockSetProps,
    ref: ForwardedRef<any>
  ) => {
    const hasBackground = Boolean(backgroundImage) || Boolean(renderCustomBackground);

    return (
      <BlockSetStyled ref={ref} {...props}>
        {hasBackground && (
          <Background
            renderCustomBackground={renderCustomBackground}
            backgroundImage={backgroundImage}
          />
        )}

        {children}
      </BlockSetStyled>
    );
  }
);

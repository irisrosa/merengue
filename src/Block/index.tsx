import React, { ComponentProps, ElementType, PropsWithChildren } from 'react';

import styled, { css, useTheme } from 'styled-components';

import { Background } from '@src/Background';
import { BlockProps, PolymorphicComponent } from '@src/types';

const BlockContent = styled.div`
  position: relative;
  z-index: 1;
`;

// type BlockProps = {
//   foo?: string
// }

// export const Block = <E extends React.ElementType = 'div'>(
//   { as, ...props}: BlockProps & Omit<React.ComponentProps<E>, 'as'> & { as?: E }
// ) => {
//     const Element = as || 'div';
//     return <Element {...props} />
// }

// const Teste2 = () => {
//   return <Block as="div" href="#" color="blue" />
// }

// const BlockElement: ElementType<BlockProps> = props => {
//   const theme = useTheme();
//   return React.createElement(theme.domMapping.block, props, [props.children]);
// };

type StyledBlockProps = {
  $size: BlockProps['size'];
  $blockPadding: BlockProps['blockPadding'];
};

export const StyledBlock = styled.div<StyledBlockProps>`
  position: relative;
  grid-column: span ${({ $size }) => $size};

  display: grid;

  ${({ theme, $blockPadding }) =>
    ($blockPadding || theme.blockPadding) &&
    css`
      ${BlockContent} {
        padding: ${({ theme }) => `${$blockPadding || theme.blockPadding}`};
        @media (min-width: ${theme.breakPoints.small}px) {
          padding: 1rem;
        }
      }
    `}

  @media (max-width: ${({ theme }) => theme.breakPoints.small}px) {
    grid-column: 1 / -1;
  }
`;

export const Block: PolymorphicComponent<BlockProps> = ({
  BackgroundComponent,
  backgroundImage,
  blockPadding,
  children,
  size = 1,
  ...props
}: BlockProps) => (
  <StyledBlock $blockPadding={blockPadding} $size={size} data-id="block" {...props}>
    <Background CustomComponent={BackgroundComponent} image={backgroundImage} />
    <BlockContent data-testid="block-content">{children}</BlockContent>
  </StyledBlock>
);

// const TestComp = () => {
//    <Block as="div" href='€' >Hello</Block>
// }

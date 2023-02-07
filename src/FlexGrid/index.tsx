import React from 'react';

import { BlockSet } from '@src/BlockSet';
// import { Blocks } from '@src/Blocks';
import { theme } from '@src/theme';

import {
  FlexGridProps,
  PolymorphicComponent,
  PolymorphicComponentPropWithRef,
  PolymorphicRef,
} from '../types';

export const FlexGrid: PolymorphicComponent<FlexGridProps> = React.forwardRef(
  <C extends React.ElementType = 'div'>(
    { blocks, children, ...props }: PolymorphicComponentPropWithRef<C, FlexGridProps>,
    ref: PolymorphicRef<C>
  ) => {
    const { blockPadding, gap, columns, maxWidth, breakPoints, ...blockSetAttributes } = props;

    console.log('1', theme.options);
    theme.options = { blockPadding, gap, columns, maxWidth, breakPoints };
    console.log('2', theme.options);

    return (
      <BlockSet {...blockSetAttributes} ref={ref}>
        {/* {Boolean(blocks) && <Blocks blocks={blocks} />} */}
        {children}
      </BlockSet>
    );
  }
);

import React from 'react';

import { Blocks } from '@src/Blocks';
import { BlockSet } from '@src/BlockSet';
import { theme } from '@src/theme';

import {
  MerengueData,
  PolymorphicComponent,
  PolymorphicComponentPropWithRef,
  PolymorphicRef,
} from '../types';

export const MerengueBox: PolymorphicComponent<MerengueData> = React.forwardRef(
  <C extends React.ElementType = 'div'>(
    { blocks, children, ...props }: PolymorphicComponentPropWithRef<C, MerengueData>,
    ref: PolymorphicRef<C>
  ) => {
    const { blockPadding, gap, columns, maxWidth, breakPoints, ...blockSetAttributes } = props;

    theme.options = { blockPadding, gap, columns, maxWidth, breakPoints };

    return (
      <BlockSet {...blockSetAttributes} ref={ref}>
        {Boolean(blocks) && <Blocks blocks={blocks} />}
        {children}
      </BlockSet>
    );
  }
);

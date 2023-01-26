import React, { ForwardedRef } from 'react';

import { pick, omit } from 'rambda';
import { ThemeProvider } from 'styled-components';

import { Blocks } from '@src/Blocks';

import { BlockSet } from '../BlockSet';
import { theme } from '../defaultTheme';
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
    const themeOptionsKeys = ['blockPadding', 'gap', 'columns', 'maxWidth', 'breakPoints'];
    const themeOptions = pick(themeOptionsKeys, props);
    const blockSetAttributes = { ...omit(themeOptionsKeys, props), ref };

    return (
      <ThemeProvider theme={{ ...theme, ...themeOptions }}>
        <BlockSet {...blockSetAttributes} ref={ref}>
          {Boolean(blocks) && <Blocks blocks={blocks} />}
          {children}
        </BlockSet>
      </ThemeProvider>
    );
  }
);

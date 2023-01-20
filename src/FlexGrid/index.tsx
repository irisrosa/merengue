import React, { ElementType, useRef } from 'react';

import { pick, omit } from 'rambda';
import { ThemeProvider } from 'styled-components';

import { Blocks } from '@src/Blocks';

import { BlockSet } from '../BlockSet';
import { theme } from '../defaultTheme';
import { FlexGridProps, PolymorphicComponent } from '../types';

export const FlexGrid: PolymorphicComponent<FlexGridProps> = React.forwardRef(
  <RefType,>({ blocks, children, ...props }: FlexGridProps, ref: RefType) => {
    const themeOptionsKeys = ['blockPadding', 'gap', 'columns', 'maxWidth', 'breakPoints'];
    const themeOptions = pick(themeOptionsKeys, props);
    const blockSetAttributes = { ...omit(themeOptionsKeys, props), ref };

    return (
      <ThemeProvider theme={{ ...theme, ...themeOptions }}>
        <BlockSet {...blockSetAttributes} ref={ref}>
          {blocks && <Blocks blocks={blocks} />}
          {children}
        </BlockSet>
      </ThemeProvider>
    );
  }
);

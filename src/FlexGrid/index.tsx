import React, { ElementType } from 'react';

import { ThemeProvider } from 'styled-components';

import { Blocks } from '@src/Blocks';

import { BlockSet } from '../BlockSet';
import { theme } from '../defaultTheme';
import { GridData } from '../types';

export const FlexGrid: ElementType<GridData> = ({ grid, options: flexGridOptions }) => (
  <ThemeProvider theme={{ ...theme, ...flexGridOptions }}>
    {Object.values(grid).map(({ blocks, options: blockSetOptions, ...props }, blockSetKey) => (
      <BlockSet key={blockSetKey} options={{ ...flexGridOptions, ...blockSetOptions }} {...props}>
        <Blocks blocks={blocks} />
      </BlockSet>
    ))}
  </ThemeProvider>
);

import React, { ElementType } from 'react';

import { ThemeProvider } from 'styled-components';

import { Blocks } from '@src/Blocks';

import { BlockSet } from '../BlockSet';
import { theme } from '../defaultTheme';
import { FlexGridProps } from '../types';

export const FlexGrid: ElementType<FlexGridProps> = ({
  grid,
  children,
  style,
  className,
  ...options
}) => (
  <>
    <ThemeProvider theme={{ ...theme, ...options }}>
      <BlockSet>
        {grid && <Blocks grid={grid} />}
        {children}
      </BlockSet>
    </ThemeProvider>
  </>
);

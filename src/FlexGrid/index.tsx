import React, { ElementType } from 'react';

import { ThemeProvider } from 'styled-components';

import { Blocks } from '@src/Blocks';

import { BlockSet } from '../BlockSet';
import { theme } from '../defaultTheme';
import { FlexGridProps } from '../types';

export const FlexGrid: ElementType<FlexGridProps> = ({
  grid: { blocks, ...gridSettings } = {},
  options,
  children,
  ...props
}) => (
  <>
    <ThemeProvider theme={{ ...theme, ...options }}>
      <BlockSet {...{ ...gridSettings, ...props }}>
        {blocks && <Blocks blocks={blocks} />}
        {children}
      </BlockSet>
    </ThemeProvider>
  </>
);

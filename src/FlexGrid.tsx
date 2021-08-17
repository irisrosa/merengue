import React from 'react';
import { BlockSet } from '@components/layout/FlexGrid';
import { GridInterface } from './types';
import { withTheme } from '@src/hocs';
import { ThemeProvider } from 'styled-components';

export const FlexGridComponent: React.FC<GridInterface> = ({ data, theme }) => (
  <ThemeProvider theme={theme}>
    {Object.values(data).map(({ blocks, bleedBackground, ...props }, blockSetKey) => {
      return (
        <BlockSet
          data-testid="blockset"
          key={blockSetKey}
          blockSetStyle={bleedBackground ? blocks[0].style : 'default'}
          bleedBackground={bleedBackground}
          backgroundImage={blocks[0].useImageBackground && blocks[0].backgroundImage}
          blocks={blocks}
          {...props}
        />
      );
    })}
  </ThemeProvider>
);

export const FlexGrid: React.FC<GridInterface> = withTheme(FlexGridComponent);

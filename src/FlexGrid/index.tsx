import React, { ElementType } from 'react';

import { pick, omit } from 'rambda';
import { ThemeProvider } from 'styled-components';

import { Blocks } from '@src/Blocks';

import { BlockSet } from '../BlockSet';
import { theme } from '../defaultTheme';
import { FlexGridProps, PolymorphicComponent } from '../types';

export const FlexGrid: PolymorphicComponent<FlexGridProps> = ({
  blocks,
  children,
  ...props
}: FlexGridProps) => {
  const themeOptionsKeys = ['blockPadding', 'gap', 'columns', 'maxWidth', 'breakPoints'];
  const themeOptions = pick(themeOptionsKeys, props);
  const blockSetAttributes = omit(themeOptionsKeys, props);

  return (
    <>
      <ThemeProvider theme={{ ...theme, ...themeOptions }}>
        <BlockSet {...blockSetAttributes}>
          {blocks && <Blocks blocks={blocks} />}
          {children}
        </BlockSet>
      </ThemeProvider>
    </>
  );
};

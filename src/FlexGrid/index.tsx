import React, { ElementType, useRef } from 'react';

import { pick, omit } from 'rambda';
import { ThemeProvider } from 'styled-components';

import { Blocks } from '@src/Blocks';

import { Block } from '..';
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
          {Boolean(blocks) && <Blocks blocks={blocks} />}
          {children}
        </BlockSet>
      </ThemeProvider>
    );
  }
);

const Test = () => {
  return (
    <FlexGrid as="article" href="#">
      <Block as="span" href="#">
        hello
      </Block>
      <Block as="a" href="#">
        hello
      </Block>
    </FlexGrid>
  );
};

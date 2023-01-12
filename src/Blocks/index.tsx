import { ElementType } from 'react';

import { Block } from '@src/Block';
import { GridData } from '@src/types';

export const Blocks: ElementType<Pick<GridData, 'blocks'>> = ({ blocks }) => (
  <>
    {blocks.map(({ Content, ...block }, blockKey) => (
      <Block key={blockKey} {...block}>
        <Content />
      </Block>
    ))}
  </>
);

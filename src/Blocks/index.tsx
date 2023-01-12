import { ElementType } from 'react';

import { Block } from '@src/Block';
import { GridData } from '@src/types';

export const Blocks: ElementType<Pick<GridData, 'grid'>> = ({ grid }) => (
  <>
    {grid.map(({ Content, ...block }, blockKey) => (
      <Block key={blockKey} {...block}>
        <Content />
      </Block>
    ))}
  </>
);

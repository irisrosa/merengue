import { ElementType } from 'react';

import { Block } from '@src/Block';
import { BlockSetData } from '@src/types';

export const Blocks: ElementType<Pick<BlockSetData, 'blocks'>> = ({ blocks }) => (
  <>
    {blocks.map(({ Content, ...block }, blockKey) => (
      <Block key={blockKey} {...block}>
        <Content />
      </Block>
    ))}
  </>
);

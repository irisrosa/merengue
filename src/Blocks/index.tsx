import { ElementType } from 'react';

import { BlockSetData } from '@src/types';

import { FlexWrap, Block } from '..';

export const Blocks: ElementType<Pick<BlockSetData, 'blocks'>> = ({ blocks }) => (
  <FlexWrap>
    {blocks.map(({ Content, ...block }, blockKey) => (
      <Block key={blockKey} {...block}>
        <Content />
      </Block>
    ))}
  </FlexWrap>
);

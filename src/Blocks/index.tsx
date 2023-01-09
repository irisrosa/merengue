import { ElementType } from 'react';

import { Block } from '@src/Block';
import { FlexWrap } from '@src/FlexWrap';
import { BlockSetData } from '@src/types';

export const Blocks: ElementType<Pick<BlockSetData, 'blocks'>> = ({ blocks }) => (
  <FlexWrap>
    {blocks.map(({ Content, ...block }, blockKey) => (
      <Block key={blockKey} {...block}>
        <Content />
      </Block>
    ))}
  </FlexWrap>
);

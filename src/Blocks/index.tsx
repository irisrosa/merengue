import { ElementType } from 'react';

import { Block } from '@src/Block';
import { MerengueData } from '@src/types';

export const Blocks: ElementType<Required<Pick<MerengueData, 'blocks'>>> = ({ blocks }) => (
  <>
    {blocks.map(({ renderContent, ...block }, blockKey) => (
      <Block key={blockKey} {...block}>
        {renderContent()}
      </Block>
    ))}
  </>
);

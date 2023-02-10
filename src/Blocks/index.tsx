import { ElementType } from 'react';

import { Block } from '@src/Block';
import { FlexGridProps } from '@src/types';

export const Blocks: ElementType<Required<Pick<FlexGridProps, 'blocks'>>> = ({ blocks }) => (
  <>
    {blocks.map(({ renderContent, ...block }, blockKey) => (
      <Block key={blockKey} {...block}>
        {renderContent()}
      </Block>
    ))}
  </>
);

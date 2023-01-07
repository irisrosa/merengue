import React from 'react';

import { BlockSet } from '../BlockSet';
import { GridInterface } from '../types';

export const FlexGrid: React.FC<GridInterface> = ({ data }) => (
  <>
    {Object.values(data).map(({ blocks, bleedBackground, ...props }, blockSetKey) => {
      return (
        <BlockSet
          data-testid="blockset"
          key={blockSetKey}
          bleedBackground={bleedBackground}
          backgroundImage={blocks[0].backgroundImage}
          blocks={blocks}
          {...props}
        />
      );
    })}
  </>
);

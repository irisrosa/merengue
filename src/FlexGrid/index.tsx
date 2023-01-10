import React from 'react';

import { Blocks } from '@src/Blocks';

import { BlockSet } from '../BlockSet';
import { GridData } from '../types';

export const FlexGrid: React.FC<GridData> = ({ grid, ...gridProps }) => (
  <>
    {Object.values(grid).map(({ blocks, ...props }, blockSetKey) => (
      <BlockSet key={blockSetKey} {...gridProps} {...props}>
        <Blocks blocks={blocks} />
      </BlockSet>
    ))}
  </>
);

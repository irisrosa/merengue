import React from 'react';

import { Blocks } from '@src/Blocks';

import { BlockSet } from '../BlockSet';
import { GridData } from '../types';

export const FlexGrid: React.FC<GridData> = ({ grid, columns }) => (
  <>
    {Object.values(grid).map(({ blocks, ...props }, blockSetKey) => (
      <BlockSet key={blockSetKey} columns={columns} {...props}>
        <Blocks blocks={blocks} />
      </BlockSet>
    ))}
  </>
);

import React from 'react';

import { Blocks } from '@src/Blocks';

import { BlockSet } from '../BlockSet';
import { Grid } from '../types';

export const FlexGrid: React.FC<Grid> = ({ data, columns }) => (
  <>
    {Object.values(data).map(({ blocks, ...props }, blockSetKey) => (
      <BlockSet key={blockSetKey} columns={columns} {...props}>
        <Blocks blocks={blocks} />
      </BlockSet>
    ))}
  </>
);

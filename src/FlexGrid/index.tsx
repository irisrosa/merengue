import React from 'react';

import { BlockSet } from '../BlockSet';
import { Grid } from '../types';

export const FlexGrid: React.FC<Grid> = ({ data }) => (
  <>
    {Object.values(data).map((props, blockSetKey) => (
      <BlockSet data-testid="blockset" key={blockSetKey} {...props} />
    ))}
  </>
);

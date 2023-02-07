import React from 'react';

import { FlexGrid } from '../FlexGrid';
import { data } from './utils/data';

export const Data = () => (
  <FlexGrid blocks={data.blocks} extendBackground columns={2}>
    Hey!
  </FlexGrid>
);

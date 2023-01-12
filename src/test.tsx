import React from 'react';

import { FlexGrid } from './FlexGrid';
import { data } from './stories/data';

const Test = () => {
  return <FlexGrid {...data} />;
};

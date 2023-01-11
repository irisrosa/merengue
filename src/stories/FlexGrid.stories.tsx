import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { FlexGrid } from '../FlexGrid';
import { data } from './data';

export default {
  title: 'FlexGrid/FlexGrid',
  component: FlexGrid,
  args: { grid: data.basic, options: { columns: 2 } },
} as ComponentMeta<typeof FlexGrid>;

export const Basic: ComponentStory<typeof FlexGrid> = args => <FlexGrid {...args} />;

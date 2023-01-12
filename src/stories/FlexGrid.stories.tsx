import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Block } from '../Block';
import { FlexGrid } from '../FlexGrid';
import { FlexGridProps } from '../types';
import { data } from './data';

export default {
  title: 'FlexGrid/FlexGrid',
  component: FlexGrid,
} as ComponentMeta<typeof FlexGrid>;

export const Data: ComponentStory<typeof FlexGrid> = (args: FlexGridProps) => (
  <FlexGrid {...args} />
);
Data.args = data;

export const Components: ComponentStory<typeof FlexGrid> = (args: FlexGridProps) => (
  <FlexGrid {...args}>
    <Block>Hello</Block>
    <Block size={2} noPadding>
      Hello
    </Block>
    <Block>Hello</Block>
  </FlexGrid>
);
Components.args = {
  columns: 6,
};

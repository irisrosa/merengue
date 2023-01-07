import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { FlexGrid } from '../../src';
import { data } from './data';

export default {
  title: 'FlexGrid',
  component: FlexGrid,
} as ComponentMeta<typeof FlexGrid>;

const Template: ComponentStory<typeof FlexGrid> = args => <FlexGrid {...args} />;

export const Default = Template.bind({});
Default.args = { data };

import { FlexGrid } from '../';
import { data } from './data';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'FlexGrid',
  component: FlexGrid,
} as ComponentMeta<typeof FlexGrid>;

const Template: ComponentStory<typeof FlexGrid> = args => <FlexGrid {...args} />;

export const Default = Template.bind({});
Default.args = { data };

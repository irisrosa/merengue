import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeProvider } from 'styled-components';

import { Block } from '../Block';
import { theme } from '../defaultTheme';
import CustomBackgroundComponent from './CustomBackgroundComponent';

export default {
  title: 'FlexGrid/Block',
  component: Block,
  args: {
    size: 1,
  },
  decorators: [
    Story => (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    ),
  ],
} as ComponentMeta<typeof Block>;

const text = `Ut qui exercitation non incididunt eu fugiat consectetur dolore laboris occaecat laborum. Enim
commodo nostrud ex nisi. Laborum et incididunt ad pariatur sunt nostrud dolore consequat
deserunt non. Incididunt cupidatat est deserunt laboris exercitation. Consequat pariatur et
exercitation eu aliqua ad nostrud tempor est proident cupidatat.`;
export const Basic: ComponentStory<typeof Block> = args => <Block {...args}>{text}</Block>;

export const BackgroundImage: ComponentStory<typeof Block> = args => (
  <Block {...args}>{text}</Block>
);
BackgroundImage.args = {
  backgroundImage: {
    alt: 'something',
    src: 'https://images.unsplash.com/photo-1558244661-d248897f7bc4?crop=entropy&fm=jpg&h=500&q=80&w=1600&cs=tinysrgb&fit=crop',
  },
};

export const BackgroundComponent: ComponentStory<typeof Block> = args => (
  <Block {...args}>{text}</Block>
);
BackgroundComponent.args = {
  BackgroundComponent: CustomBackgroundComponent,
};

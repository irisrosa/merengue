import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Block } from '../Block';
import { BlockSet } from '../BlockSet';
import { theme } from '../defaultTheme';
import CustomBackgroundComponent from './CustomBackgroundComponent';

export default {
  title: 'FlexGrid/BlockSet',
  component: BlockSet,
  args: {
    options: {
      columns: 4,
      blockPadding: true,
    },
    extendContent: false,
    extendBackground: false,
    style: {
      border: '1px solid #ccc',
    },
  },
} as ComponentMeta<typeof BlockSet>;

const blockStyle = {
  border: '1px solid #ccc',
};

const Item = ({
  text = `Sit incididunt eu pariatur proident ipsum amet amet aute adipisicing proident adipisicing.
Nulla dolore sint ex excepteur sunt eu qui. Fugiat quis velit proident ipsum labore sunt
labore. Minim nisi eiusmod mollit Lorem occaecat. Eu amet et exercitation consequat sit esse
ipsum consectetur laboris magna duis pariatur. Incididunt cillum veniam ullamco amet
proident duis deserunt reprehenderit veniam laboris esse proident duis. Sit in magna culpa
deserunt culpa duis est magna ullamco amet commodo.`,
}) => <Block>{text}</Block>;

export const Basic: ComponentStory<typeof BlockSet> = args => (
  <BlockSet {...args}>
    {Array(6)
      .fill(0)
      .map(() => (
        <Item />
      ))}
  </BlockSet>
);

export const BlockSizes: ComponentStory<typeof BlockSet> = args => (
  <BlockSet {...args}>
    <Block style={blockStyle}>1</Block>
    <Block style={blockStyle} size={2}>
      2
    </Block>
    <Block style={blockStyle} size={4}>
      4
    </Block>
    <Block style={blockStyle} size={3}>
      3
    </Block>
    <Block style={blockStyle}>1</Block>
  </BlockSet>
);

export const BackgroundImage: ComponentStory<typeof BlockSet> = args => <Basic {...args} />;
BackgroundImage.args = {
  backgroundImage: {
    alt: 'something',
    src: 'https://images.unsplash.com/photo-1558244661-d248897f7bc4?crop=entropy&fm=jpg&h=500&q=80&w=1600&cs=tinysrgb&fit=crop',
  },
};

export const BackgroundComponent: ComponentStory<typeof BlockSet> = args => <Basic {...args} />;
BackgroundComponent.args = {
  BackgroundComponent: CustomBackgroundComponent,
};

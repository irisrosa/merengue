import React, { useRef } from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Block } from '../Block';
import { FlexGrid } from '../FlexGrid';
import { FlexGridProps } from '../types';
import { data } from './data';

export default {
  title: 'FlexGrid/FlexGrid',
  component: FlexGrid,
  argTypes: {
    blockPadding: {
      type: 'string',
      description:
        'Internal padding applied to each Block. Accepts `false` or a definition such as `10px`.',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    gap: {
      type: 'string',
      description: 'Gap between blocks. Accepts `false` or a definition such as `1rem`.',
      table: {
        defaultValue: { summary: '1rem' },
      },
    },
    columns: {
      type: 'number',
      description: 'Number of columns per row.',
      table: {
        defaultValue: { summary: '4' },
      },
    },
    maxWidth: {
      type: 'number',
      description: 'Number in pixels that represents the maximum width of the Grid',
      table: {
        defaultValue: { summary: '960' },
      },
    },
  },
} as ComponentMeta<typeof FlexGrid>;

export const Data: ComponentStory<typeof FlexGrid> = (args: FlexGridProps) => (
  <FlexGrid {...args} />
);
Data.args = data;

export const Components: ComponentStory<typeof FlexGrid> = (args: FlexGridProps) => {
  const ref = useRef();
  const ref2 = useRef();
  return (
    <FlexGrid {...args} ref={ref}>
      <Block as="div" onClick={() => console.log(ref2.current)} ref={ref2}>
        Hello
      </Block>
      <Block size={2} noPadding>
        Hello
      </Block>
      <Block>Hello</Block>
    </FlexGrid>
  );
};
Components.args = {
  columns: 6,
  as: 'section',
  breakPoints: { small: 767, large: 992 },
  extendContent: false,
  // extendBackground: false,
};

export const Nested: ComponentStory<typeof FlexGrid> = (args: FlexGridProps) => (
  <FlexGrid {...args}>
    <Block>1</Block>
    <Block>2</Block>
    <Block size={2}>
      <FlexGrid columns={2}>
        <Block>1</Block>
        <Block>2</Block>
        <Block>3</Block>
      </FlexGrid>
    </Block>
  </FlexGrid>
);

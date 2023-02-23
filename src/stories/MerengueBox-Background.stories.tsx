import React from 'react';

import { Story } from '@ladle/react';

import { MerengueBox } from '../MerengueBox';
import { MerengueData } from '../types';
import { CustomBackground } from './utils/CustomBackground';
import { RandomArticle } from './utils/RandomArticle';

const data: MerengueData = {
  blocks: [
    { renderContent: RandomArticle },
    { renderContent: RandomArticle },
    { renderContent: RandomArticle },
    { renderContent: RandomArticle },
  ],
};

const args = {
  as: 'ol',
  blockAs: 'li',
  blockPadding: '',
  columns: 4,
  extendBackground: false,
  extendContent: false,
  gap: 1,
  maxWidth: '960px',
  blocks: data.blocks,
};

export const Image: Story<MerengueData> = props => <MerengueBox {...props} />;
export const CustomComponent: Story<MerengueData> = props => <MerengueBox {...props} />;
export const ExtendBackground: Story<MerengueData> = props => <MerengueBox {...props} />;

Image.args = { ...args, backgroundImage: { src: 'https://picsum.photos/800/500' } };
CustomComponent.args = { ...args, renderCustomBackground: CustomBackground };
ExtendBackground.args = {
  ...args,
  extendBackground: true,
  backgroundImage: { src: 'https://picsum.photos/800/500' },
};

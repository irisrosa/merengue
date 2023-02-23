import React from 'react';

import { Story } from '@ladle/react';

import { MerengueBox } from '../MerengueBox';
import { MerengueData } from '../types';
import { CustomBackground } from './utils/CustomBackground';
import { RandomArticle } from './utils/RandomArticle';

const args = {
  as: 'ol',
  blockAs: 'li',
  blockPadding: '',
  columns: 4,
  extendBackground: true,
  extendContent: false,
  gap: 1,
  maxWidth: '960px',
};

export const Image: Story<MerengueData> = props => <MerengueBox {...props} />;
export const CustomComponent: Story<MerengueData> = props => <MerengueBox {...props} />;

Image.args = {
  ...args,
  blocks: [
    { renderContent: RandomArticle, backgroundImage: { src: 'https://picsum.photos/500/300' } },
    { renderContent: RandomArticle },
    { renderContent: RandomArticle },
    { renderContent: RandomArticle },
  ],
};

CustomComponent.args = {
  ...args,
  blocks: [
    { renderContent: RandomArticle, renderCustomBackground: CustomBackground },
    { renderContent: RandomArticle },
    { renderContent: RandomArticle },
    { renderContent: RandomArticle },
  ],
};

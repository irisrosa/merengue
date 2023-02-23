import React from 'react';

import { Story } from '@ladle/react';

import { MerengueBox } from '../MerengueBox';
import { MerengueData } from '../types';
import { getRandomImage } from './utils';
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

export const Size: Story<MerengueData> = props => <MerengueBox {...props} />;

Size.args = {
  ...args,
  blocks: [
    { renderContent: RandomArticle, size: 2 },
    { renderContent: RandomArticle },
    { renderContent: RandomArticle },
    { renderContent: RandomArticle },
  ],
};

export const Offset: Story<MerengueData> = props => <MerengueBox {...props} />;

Offset.args = {
  ...args,
  blocks: [
    { renderContent: RandomArticle, offset: 2 },
    { renderContent: RandomArticle },
    { renderContent: RandomArticle },
    { renderContent: RandomArticle },
  ],
};

export const CustomDOMElement: Story<MerengueData> = props => <MerengueBox {...props} />;

CustomDOMElement.args = {
  ...args,
  blocks: [
    {
      as: 'figure',
      renderContent: () => (
        <>
          <img src={getRandomImage()} alt="Example Image" />
          <figcaption>Sit laboris ipsum ex sunt veniam deserunt.</figcaption>
        </>
      ),
    },
    { renderContent: RandomArticle },
    { renderContent: RandomArticle },
    { renderContent: RandomArticle },
  ],
};

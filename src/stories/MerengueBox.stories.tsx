import React, { useRef } from 'react';

import { Story } from '@ladle/react';

import { Block } from '../Block';
import { MerengueBox } from '../MerengueBox';
import { MerengueData } from '../types';
import { data } from './utils/data';
import { RandomArticle } from './utils/RandomArticle';

export const FromDataObject: Story<MerengueData> = props => <MerengueBox {...props} />;

FromDataObject.args = {
  as: 'ol',
  blockAs: 'li',
  blockPadding: '',
  columns: 3,
  extendBackground: true,
  extendContent: false,
  gap: 1,
  maxWidth: '960px',
  blocks: data.blocks,
};

export const CustomDOMElement: Story<MerengueData> = props => <MerengueBox {...props} />;

CustomDOMElement.args = {
  as: 'section',
  blockAs: 'div',
  blockPadding: '',
  columns: 3,
  extendBackground: true,
  extendContent: false,
  gap: 1,
  maxWidth: '960px',
  blocks: data.blocks,
};

export const Nested: Story<MerengueData> = props => {
  const ref = useRef(null);
  const ref2 = useRef(null);
  return (
    <MerengueBox {...props} ref={ref}>
      <Block ref={ref2} onClick={() => console.log({ ref, ref2 })}>
        <RandomArticle />
      </Block>
      <Block>
        <RandomArticle />
      </Block>
      <Block>
        <RandomArticle />
      </Block>
      <Block>
        <RandomArticle />
      </Block>
      <Block>
        <RandomArticle />
      </Block>
      <Block>
        <RandomArticle />
      </Block>
      <Block>
        <RandomArticle />
      </Block>
      <Block>
        <RandomArticle />
      </Block>
    </MerengueBox>
  );
};

Nested.args = {
  extendContent: false,
  extendBackground: true,
  columns: 4,
  blockAs: 'li',
  as: 'ol',
};

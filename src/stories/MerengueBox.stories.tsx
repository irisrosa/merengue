import React, { useRef } from 'react';

import { Story } from '@ladle/react';

import { Block } from '../Block';
import { MerengueBox } from '../MerengueBox';
import { MerengueData } from '../types';
import { CustomBackground } from './utils/CustomBackground';
import { data } from './utils/data';
import { RandomArticle } from './utils/RandomArticle';

export const FromDataObject: Story<MerengueData> = props => <MerengueBox {...data} {...props} />;

FromDataObject.args = {
  as: 'ol',
  blockAs: 'li',
  blockPadding: '',
  columns: 4,
  extendBackground: true,
  extendContent: false,
  gap: 1,
  maxWidth: '960px',
  renderCustomBackground: CustomBackground,
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
    </MerengueBox>
  );
};

Nested.args = {
  extendContent: false,
  extendBackground: true,
  columns: 3,
  blockAs: 'li',
  as: 'ol',
};

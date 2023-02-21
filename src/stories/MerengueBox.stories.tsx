import React, { useRef } from 'react';

import { Story } from '@ladle/react';

import { Block } from '../Block';
import { MerengueBox } from '../MerengueBox';
import { MerengueData } from '../types';
import { data } from './utils/data';

export const FromDataObject: Story<MerengueData> = props => <MerengueBox {...data} {...props} />;

FromDataObject.args = {
  extendContent: false,
  extendBackground: true,
  maxWidth: 960,
  columns: 4,
  as: 'div',
};

export const Nested: Story<MerengueData> = props => {
  const ref = useRef(null);
  const ref2 = useRef(null);
  return (
    <MerengueBox {...props} as="ol" ref={ref}>
      <Block as="li" ref={ref2} onClick={() => console.log({ ref, ref2 })}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat optio nemo, animi eligendi
        voluptatem voluptatum. Sit facere fugit laudantium adipisci itaque similique incidunt, quos
        assumenda totam! Eaque magni culpa quisquam.
      </Block>
      <Block size={2}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat optio nemo, animi eligendi
        voluptatem voluptatum. Sit facere fugit laudantium adipisci itaque similique incidunt, quos
        assumenda totam! Eaque magni culpa quisquam.
      </Block>
      <Block>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat optio nemo, animi eligendi
        voluptatem voluptatum. Sit facere fugit laudantium adipisci itaque similique incidunt, quos
        assumenda totam! Eaque magni culpa quisquam.
      </Block>
      <Block>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat optio nemo, animi eligendi
        voluptatem voluptatum. Sit facere fugit laudantium adipisci itaque similique incidunt, quos
        assumenda totam! Eaque magni culpa quisquam.
      </Block>
      <Block>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat optio nemo, animi eligendi
        voluptatem voluptatum. Sit facere fugit laudantium adipisci itaque similique incidunt, quos
        assumenda totam! Eaque magni culpa quisquam.
      </Block>
      <Block>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat optio nemo, animi eligendi
        voluptatem voluptatum. Sit facere fugit laudantium adipisci itaque similique incidunt, quos
        assumenda totam! Eaque magni culpa quisquam.
      </Block>
    </MerengueBox>
  );
};

Nested.args = {
  extendContent: false,
  extendBackground: true,
  maxWidth: 600,
  columns: 4,
};

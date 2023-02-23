import React, { useRef } from 'react';

import { Story } from '@ladle/react';

import { Block } from '../Block';
import { MerengueBox } from '../MerengueBox';
import { MerengueData } from '../types';
import { CustomBackground } from './utils/CustomBackground';
import { data } from './utils/data';

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

const BlockContent = () => (
  <>
    <img src="http://placeimg.com/640/480/city" style={{ maxWidth: '100%' }} />
    <h3>Transform</h3>
    <p>
      Ut quia qui eius. Veritatis nam unde. Inventore enim velit aut. Quis animi voluptas tempore
      sed quibusdam doloribus ullam. Ab architecto fuga quo.
    </p>
  </>
);

export const Nested: Story<MerengueData> = props => {
  const ref = useRef(null);
  const ref2 = useRef(null);
  return (
    <MerengueBox {...props} as="ol" ref={ref}>
      <Block as="li" ref={ref2} onClick={() => console.log({ ref, ref2 })}>
        <BlockContent />
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
  columns: 4,
};

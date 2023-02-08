import { Story } from '@ladle/react';
import React, { useRef } from 'react';

import { Block } from '../Block';
import { FlexGrid } from '../FlexGrid';
import { FlexGridProps } from '../types';
import { data } from './utils/data';

export const FromDataObject: Story<FlexGridProps> = props => <FlexGrid {...data} {...props} />;

FromDataObject.args = {
  extendContent: false,
  extendBackground: true,
  maxWidth: 960,
  columns: 4,
  as: 'div',
};

export const Nested: Story<FlexGridProps> = props => {
  const ref = useRef(null);
  const ref2 = useRef(null);
  return (
    <FlexGrid {...props} as="ol" ref={ref}>
      <Block as="li" ref={ref2} onClick={() => console.log({ ref, ref2 })}>
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
      <Block>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat optio nemo, animi eligendi
        voluptatem voluptatum. Sit facere fugit laudantium adipisci itaque similique incidunt, quos
        assumenda totam! Eaque magni culpa quisquam.
      </Block>
    </FlexGrid>
  );
};

Nested.args = {
  extendContent: false,
  extendBackground: true,
  maxWidth: 960,
  columns: 4,
  as: 'div',
};

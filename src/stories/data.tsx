import React from 'react';

import { FlexGridProps } from '../types';

export const data: FlexGridProps = {
  blockPadding: '',
  gap: '1rem',
  columns: 4,
  maxWidth: 960,
  breakPoints: { small: 767, large: 992 },
  blocks: [
    {
      size: 1,
      Content: (): React.ReactElement => (
        <div>
          {' '}
          1 Lorem velit aliquip enim velit adipisicing magna. Elit tempor occaecat quis amet nulla.
          Magna proident cillum sunt irure id anim aliquip quis aliquip minim occaecat. Ullamco
          dolore enim est dolore ad enim labore quis aliqua esse esse. Est est non cupidatat magna
          consectetur duis officia dolor do commodo est magna dolor ut. Pariatur commodo ex eu
          excepteur ea.
        </div>
      ),
      BackgroundComponent: undefined,
      backgroundImage: undefined,
    },
    {
      size: 2,
      Content: (): React.ReactElement => (
        <div>
          {' '}
          2 Lorem velit aliquip enim velit adipisicing magna. Elit tempor occaecat quis amet nulla.
          Magna proident cillum sunt irure id anim aliquip quis aliquip minim occaecat. Ullamco
          dolore enim est dolore ad enim labore quis aliqua esse esse. Est est non cupidatat magna
          consectetur duis officia dolor do commodo est magna dolor ut. Pariatur commodo ex eu
          excepteur ea.
        </div>
      ),
      BackgroundComponent: undefined,
      backgroundImage: undefined,
    },
    {
      size: 1,
      Content: (): React.ReactElement => (
        <div>
          3 Lorem velit aliquip enim velit adipisicing magna. Elit tempor occaecat quis amet nulla.
          Magna proident cillum sunt irure id anim aliquip quis aliquip minim occaecat. Ullamco
          dolore enim est dolore ad enim labore quis aliqua esse esse. Est est non cupidatat magna
          consectetur duis officia dolor do commodo est magna dolor ut. Pariatur commodo ex eu
          excepteur ea.
        </div>
      ),
      BackgroundComponent: undefined,
      backgroundImage: undefined,
    },
    {
      size: 1,
      Content: (): React.ReactElement => (
        <div>
          4 Lorem velit aliquip enim velit adipisicing magna. Elit tempor occaecat quis amet nulla.
          Magna proident cillum sunt irure id anim aliquip quis aliquip minim occaecat. Ullamco
          dolore enim est dolore ad enim labore quis aliqua esse esse. Est est non cupidatat magna
          consectetur duis officia dolor do commodo est magna dolor ut. Pariatur commodo ex eu
          excepteur ea.
        </div>
      ),
      BackgroundComponent: undefined,
      backgroundImage: undefined,
    },
    {
      size: 1,
      Content: (): React.ReactElement => (
        <div>
          5 Lorem velit aliquip enim velit adipisicing magna. Elit tempor occaecat quis amet nulla.
          Magna proident cillum sunt irure id anim aliquip quis aliquip minim occaecat. Ullamco
          dolore enim est dolore ad enim labore quis aliqua esse esse. Est est non cupidatat magna
          consectetur duis officia dolor do commodo est magna dolor ut. Pariatur commodo ex eu
          excepteur ea.
        </div>
      ),
      BackgroundComponent: undefined,
      backgroundImage: undefined,
    },
  ],
};

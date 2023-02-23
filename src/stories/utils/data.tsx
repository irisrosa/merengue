import React from 'react';

import { MerengueData } from '../../types';

const MyComponent = () => (
  <>
    1 Lorem velit aliquip enim velit adipisicing magna. Elit tempor occaecat quis amet nulla. Magna
    proident cillum sunt irure id anim aliquip quis aliquip minim occaecat. Ullamco dolore enim est
    dolore ad enim labore quis aliqua esse esse. Est est non cupidatat magna consectetur duis
    officia dolor do commodo est magna dolor ut. Pariatur commodo ex eu excepteur ea.
  </>
);

export const data: MerengueData = {
  blocks: [
    {
      as: 'figure',
      size: 1,
      renderContent: MyComponent,
      renderCustomBackground: undefined,
      backgroundImage: undefined,
    },
    {
      size: 2,
      renderContent: () => (
        <>
          2 Lorem velit aliquip enim velit adipisicing magna. Elit tempor occaecat quis amet nulla.
          Magna proident cillum sunt irure id anim aliquip quis aliquip minim occaecat. Ullamco
          dolore enim est dolore ad enim labore quis aliqua esse esse. Est est non cupidatat magna
          consectetur duis officia dolor do commodo est magna dolor ut. Pariatur commodo ex eu
          excepteur ea.
        </>
      ),
      renderCustomBackground: undefined,
      backgroundImage: undefined,
    },
    {
      size: 1,
      renderContent: () => (
        <>
          3 Lorem velit aliquip enim velit adipisicing magna. Elit tempor occaecat quis amet nulla.
          Magna proident cillum sunt irure id anim aliquip quis aliquip minim occaecat. Ullamco
          dolore enim est dolore ad enim labore quis aliqua esse esse. Est est non cupidatat magna
          consectetur duis officia dolor do commodo est magna dolor ut. Pariatur commodo ex eu
          excepteur ea.
        </>
      ),
      renderCustomBackground: undefined,
      backgroundImage: undefined,
    },
    {
      size: 1,
      renderContent: () => (
        <>
          4 Lorem velit aliquip enim velit adipisicing magna. Elit tempor occaecat quis amet nulla.
          Magna proident cillum sunt irure id anim aliquip quis aliquip minim occaecat. Ullamco
          dolore enim est dolore ad enim labore quis aliqua esse esse. Est est non cupidatat magna
          consectetur duis officia dolor do commodo est magna dolor ut. Pariatur commodo ex eu
          excepteur ea.
        </>
      ),
      renderCustomBackground: undefined,
      backgroundImage: undefined,
    },
    {
      size: 1,
      renderContent: () => (
        <>
          5 Lorem velit aliquip enim velit adipisicing magna. Elit tempor occaecat quis amet nulla.
          Magna proident cillum sunt irure id anim aliquip quis aliquip minim occaecat. Ullamco
          dolore enim est dolore ad enim labore quis aliqua esse esse. Est est non cupidatat magna
          consectetur duis officia dolor do commodo est magna dolor ut. Pariatur commodo ex eu
          excepteur ea.
        </>
      ),
      renderCustomBackground: undefined,
      backgroundImage: undefined,
    },
  ],
};

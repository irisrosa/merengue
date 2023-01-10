import React from 'react';

import { BlockSetData } from '@src/types';

export const data: { [key: string]: BlockSetData[] } = {
  basic: [
    {
      extendContent: false,
      extendBackground: false,
      blocks: [
        {
          size: 2,
          noPadding: false,
          Content: (): React.ReactElement => (
            <div>
              Lorem velit aliquip enim velit adipisicing magna. Elit tempor occaecat quis amet
              nulla. Magna proident cillum sunt irure id anim aliquip quis aliquip minim occaecat.
              Ullamco dolore enim est dolore ad enim labore quis aliqua esse esse. Est est non
              cupidatat magna consectetur duis officia dolor do commodo est magna dolor ut. Pariatur
              commodo ex eu excepteur ea.
            </div>
          ),
          BackgroundComponent: undefined,
          backgroundImage: undefined,
        },
        {
          size: 1,
          noPadding: false,
          Content: (): React.ReactElement => (
            <div>
              Lorem velit aliquip enim velit adipisicing magna. Elit tempor occaecat quis amet
              nulla. Magna proident cillum sunt irure id anim aliquip quis aliquip minim occaecat.
              Ullamco dolore enim est dolore ad enim labore quis aliqua esse esse. Est est non
              cupidatat magna consectetur duis officia dolor do commodo est magna dolor ut. Pariatur
              commodo ex eu excepteur ea.
            </div>
          ),
          BackgroundComponent: undefined,
          backgroundImage: undefined,
        },
        {
          size: 1,
          noPadding: false,
          Content: (): React.ReactElement => (
            <div>
              Lorem velit aliquip enim velit adipisicing magna. Elit tempor occaecat quis amet
              nulla. Magna proident cillum sunt irure id anim aliquip quis aliquip minim occaecat.
              Ullamco dolore enim est dolore ad enim labore quis aliqua esse esse. Est est non
              cupidatat magna consectetur duis officia dolor do commodo est magna dolor ut. Pariatur
              commodo ex eu excepteur ea.
            </div>
          ),
          BackgroundComponent: undefined,
          backgroundImage: undefined,
        },
      ],
      blockPadding: true,
      BackgroundComponent: undefined,
      backgroundImage: undefined,
    },
  ],
};

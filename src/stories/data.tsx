import React from 'react';

import { BlockSetData } from '@src/types';

export const data: BlockSetData[] = [
  {
    bleedBackground: false,
    bleedContent: false,
    blockPadding: true,
    blocks: [
      {
        style: 'default',
        Component: (): React.ReactElement => (
          <>
            <h2>FlexGrid Layout</h2>
            <p>
              A <mark>flex</mark>
              <em>ible</em> grid layout id built from blocks, gouped into sets of blocks which
              determine how they are laid out.
            </p>
          </>
        ),
      },
    ],
  },
  {
    bleedBackground: false,
    bleedContent: false,
    blockPadding: true,
    blocks: [
      {
        style: 'default',
        Component: (): React.ReactElement => (
          <>
            <h2>Block 1</h2>
            <p>
              Blocks expand to fill the main content area. You can have a maximum of 4 blocks in any
              given blockset.
            </p>
          </>
        ),
      },
      {
        style: 'default',
        Component: (): React.ReactElement => (
          <>
            <h2>Block 2</h2>
            <p>
              Blocks expand to fill the main content area. You can have a maximum of 4 blocks in any
              given blockset.
            </p>
          </>
        ),
      },
    ],
  },
  {
    bleedContent: false,
    blockPadding: true,
    blocks: [
      {
        style: 'default',
        Component: (): React.ReactElement => (
          <>
            <h2>This allows</h2>
            <p>
              This block has the <mark>default</mark> style
            </p>
          </>
        ),
      },

      {
        style: 'light',
        Component: (): React.ReactElement => (
          <>
            <h2>for very</h2>
            <p>
              This block has the <mark>light</mark> style
            </p>
          </>
        ),
      },

      {
        style: 'highlight',
        Component: (): React.ReactElement => (
          <>
            <h2>
              <em>flexible</em>
            </h2>
            <p>
              This block has the <mark>highlight</mark> style
            </p>
          </>
        ),
      },

      {
        style: 'dark',
        Component: (): React.ReactElement => (
          <>
            <h2>layout!</h2>
            <p>
              This block has the <mark>dark</mark> style
            </p>
          </>
        ),
      },
    ],
  },

  {
    bleedBackground: false,
    bleedContent: false,
    blockPadding: true,
    blocks: [
      {
        style: 'default',
        Component: (): React.ReactElement => (
          <>
            <h2>Breaking out of the grid!</h2>
            <p>Blocks can be set to break out of the bounding content area, in 2 ways.</p>
          </>
        ),
      },
    ],
  },
  {
    bleedBackground: true,
    bleedContent: false,
    blockPadding: true,
    blocks: [
      {
        style: 'light',
        Component: (): React.ReactElement => (
          <>
            <h2>Background Bleed</h2>
            <p>
              This block has the <mark>background bleed</mark> options set, which means it's
              background colour <em>bleeds out</em> of the bounding content area to the window
              edges. Usefull for breaking up a long page of content or highlighting some important
              information.
            </p>
          </>
        ),
      },
    ],
  },
  {
    bleedBackground: true,
    bleedContent: false,
    blockPadding: true,
    blocks: [
      {
        style: 'highlight',
        Component: (): React.ReactElement => (
          <>
            <h2>Background Bleed</h2>
            <p>
              This block has the <mark>background bleed</mark> options set, which means it's
              background colour <em>bleeds out</em> of the bounding content area to the window
              edges. Usefull for breaking up a long page of content or highlighting some important
              information.
            </p>
          </>
        ),
      },
      {
        style: 'dark',
        Component: (): React.ReactElement => (
          <>
            <h2>Hello!</h2>
            <p>
              You can still have other blocks in this set, if you set a styles it is preserved. This
              block has the <mark>dark</mark> style
            </p>
          </>
        ),
      },
    ],
  },
  {
    bleedBackground: false,
    bleedContent: false,
    blockPadding: true,
    blocks: [
      {
        style: 'default',
        Component: (): React.ReactElement => (
          <>
            <h2>That's all folks!</h2>
            <p>Go forth and create beutiful page layouts!</p>
          </>
        ),
      },
    ],
  },

  {
    bleedBackground: false,
    bleedContent: false,
    blockPadding: true,
    blocks: [
      {
        style: 'dark',
        Component: (): React.ReactElement => (
          <>
            <h2>&nbsp;</h2>
            <p>&nbsp;</p>
          </>
        ),
      },
      {
        style: 'highlight',
        Component: (): React.ReactElement => (
          <>
            <h2>&nbsp;</h2>
            <p>&nbsp;</p>
          </>
        ),
      },
      {
        style: 'light',
        Component: (): React.ReactElement => (
          <>
            <h2>&nbsp;</h2>
            <p>&nbsp;</p>
          </>
        ),
      },
    ],
  },
  {
    bleedBackground: false,
    bleedContent: false,
    blockPadding: true,
    blocks: [
      {
        style: 'default',
        size: 1,
        Component: (): React.ReactElement => (
          <>
            <h2>Size 1</h2>
            <p>
              Blocks can also have a specified size, using more than 1 column. Don't worry they are
              still responsive.
            </p>
          </>
        ),
      },
      {
        style: 'default',
        size: 2,
        Component: (): React.ReactElement => (
          <>
            <h2>Size 2</h2>
            <p>
              Blocks can also have a specified size, using more than 1 column. Don't worry they are
              still responsive.
            </p>
          </>
        ),
      },
      {
        style: 'default',
        Component: (): React.ReactElement => (
          <>
            <h2>Size auto</h2>
            <p>
              If the blocks have no specified size they will behave as a size 1, taking by default
              only one column of the grid. But they will grow to fill the available width.
            </p>
          </>
        ),
      },
    ],
  },
  {
    bleedBackground: true,
    bleedContent: false,
    blockPadding: true,
    blocks: [
      {
        style: 'light',
        size: 1,
        Component: (): React.ReactElement => (
          <>
            <h2>Size 1</h2>
            <p>
              Blocks can also have a specified size, using more than 1 column. Don't worry they are
              still responsive.
            </p>
          </>
        ),
      },
      {
        style: 'light',
        size: 3,
        Component: (): React.ReactElement => (
          <>
            <h2>Size 3</h2>
            <p>
              Blocks can also have a specified size, using more than 1 column. Don't worry they are
              still responsive.
            </p>
          </>
        ),
      },
    ],
  },
  {
    bleedBackground: true,
    bleedContent: false,
    blockPadding: true,
    blocks: [
      {
        style: 'dark',
        size: 2,
        Component: (): React.ReactElement => (
          <>
            <h2>Size 2</h2>
            <p>
              Blocks can also have a specified size, using more than 1 column. Don't worry they are
              still responsive.
            </p>
          </>
        ),
      },
      {
        style: 'dark',
        Component: (): React.ReactElement => (
          <>
            <h2>Size auto</h2>
            <p>
              If the blocks have no specified size they will behave as a size 1, taking by default
              only one column of the grid. But they will grow to fill the available width.
            </p>
          </>
        ),
      },
      {
        style: 'dark',
        Component: (): React.ReactElement => (
          <>
            <h2>Size auto</h2>
            <p>
              If the blocks have no specified size they will behave as a size 1, taking by default
              only one column of the grid. But they will grow to fill the available width.
            </p>
          </>
        ),
      },
    ],
  },
  {
    bleedBackground: true,
    bleedContent: false,
    blockPadding: true,
    blocks: [
      {
        style: 'highlight',
        size: 4,
        Component: (): React.ReactElement => (
          <>
            <h2>Size 4</h2>
            <p>
              Blocks can also have a specified size, using more than 1 column. Don't worry they are
              still responsive.
            </p>
          </>
        ),
      },
      {
        style: 'highlight',
        Component: (): React.ReactElement => (
          <>
            <h2>Size auto</h2>
            <p>
              If the blocks have no specified size they will behave as a size 1, taking by default
              only one column of the grid. But they will grow to fill the available width.
            </p>
          </>
        ),
      },
    ],
  },

  // CUSTOM BG examples

  {
    bleedBackground: false,
    bleedContent: false,
    blockPadding: true,
    blocks: [
      {
        style: 'dark',
        useImageBackground: true,
        backgroundImage: {
          alt: 'something',
          src: 'https://images.unsplash.com/photo-1558244661-d248897f7bc4?crop=entropy&fm=jpg&h=500&q=80&w=1600&cs=tinysrgb&fit=crop',
        },
        Component: (): React.ReactElement => (
          <>
            <h2>Images</h2>
            <p>
              It's possible to set a background image for the block. If it's the first block of a
              blockset the background image expands to the blockset.
              <ul>
                <li>One block</li>
                <li>bleedBackground: false</li>
                <li>Default background component</li>
              </ul>
            </p>
          </>
        ),
      },
    ],
  },

  {
    bleedBackground: true,
    bleedContent: false,
    blockPadding: true,
    blocks: [
      {
        style: 'dark',
        useImageBackground: true,
        backgroundImage: {
          alt: 'something',
          src: 'https://images.unsplash.com/photo-1458682625221-3a45f8a844c7?crop=entropy&fm=jpg&h=500&q=80&w=1600&cs=tinysrgb&fit=crop',
        },
        Component: (): React.ReactElement => (
          <>
            <h2>Background Images</h2>
            <p>
              <ul>
                <li>Multiple blocks</li>
                <li>bleedBackground: true</li>
                <li>Default background component</li>
              </ul>
            </p>
          </>
        ),
      },
      {
        style: 'dark',
        noBackground: true,
        Component: (): React.ReactElement => (
          <>
            <h2>Background Images</h2>
            <p>
              <ul>
                <li>noBackground: true</li>
              </ul>
            </p>
          </>
        ),
      },
      {
        style: 'dark',
        Component: (): React.ReactElement => (
          <>
            <h2>Background Images</h2>
            <p>
              <ul>
                <li>noBackground: false</li>
              </ul>
            </p>
          </>
        ),
      },
      {
        style: 'dark',
        useImageBackground: true,
        backgroundImage: {
          alt: 'something',
          src: 'https://images.unsplash.com/photo-1550537687-c91072c4792d?crop=entropy&fm=jpg&h=500&q=80&w=1600&cs=tinysrgb&fit=crop',
        },
        Component: (): React.ReactElement => (
          <>
            <h2>Background Images</h2>
            <p>
              <ul>
                <li>Default background component</li>
              </ul>
            </p>
          </>
        ),
      },
    ],
  },

  {
    bleedBackground: true,
    bleedContent: false,
    blockPadding: true,
    blocks: [
      {
        style: 'dark',
        Component: (): React.ReactElement => (
          <>
            <h2>Background Images</h2>
            <p>
              <ul>
                <li>Multiple blocks</li>
                <li>bleedBackground: true</li>
                <li>First block without background</li>
              </ul>
            </p>
          </>
        ),
      },
      {
        style: 'dark',
        useImageBackground: true,
        backgroundImage: {
          alt: 'something',
          src: 'https://images.unsplash.com/photo-1464639351491-a172c2aa2911?crop=entropy&fm=jpg&h=500&q=80&w=1600&cs=tinysrgb&fit=crop',
        },
        Component: (): React.ReactElement => (
          <>
            <h2>Background Images</h2>
            <p>
              <ul>
                <li>Block with background image</li>
              </ul>
            </p>
          </>
        ),
      },
      {
        style: 'dark',
        useImageBackground: true,
        backgroundImage: {
          alt: 'something',
          src: 'https://images.unsplash.com/photo-1600942956976-f5a7a7cd8ff7?crop=entropy&fm=jpg&h=500&q=80&w=1600&cs=tinysrgb&fit=crop',
        },
        Component: (): React.ReactElement => (
          <>
            <h2>Background Images</h2>
            <p>
              <ul>
                <li>Block with background image</li>
              </ul>
            </p>
          </>
        ),
      },
    ],
  },
];

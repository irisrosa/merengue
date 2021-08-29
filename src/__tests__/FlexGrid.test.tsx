import React from 'react';
import { screen, render, within } from '@testing-library/react';
import { BlockSetData, GridInterface } from '@src/types';
import { FlexGrid } from '@src/FlexGrid';
import { getStyles } from '@src/testUtils';

const noOpComp = () => <React.Fragment />;

const noBleedBlockSet: BlockSetData = {
  bleedContent: false,
  bleedBackground: false,
  blockPadding: true,
  blocks: [
    { style: 'light', Component: noOpComp },
    { style: 'dark', Component: noOpComp },
    { style: 'light', Component: noOpComp },
  ],
};

const bleedbgBlockset: BlockSetData = {
  bleedContent: false,
  bleedBackground: true,
  blockPadding: true,
  blocks: [{ style: 'dark', Component: noOpComp }],
};

const fullBleedBlockSet: BlockSetData = {
  bleedContent: true,
  bleedBackground: true,
  blockPadding: false,
  blocks: [{ style: 'dark', Component: noOpComp }],
};

describe('FlexGrid', () => {
  test('defaults', () => {
    render(<FlexGrid data={[noBleedBlockSet, bleedbgBlockset, fullBleedBlockSet]} />);

    const allSets = screen.queryAllByTestId('blockset');
    const allBlocks = screen.queryAllByTestId('block');

    expect(screen.queryAllByTestId('blockset')).toHaveLength(3);
    expect(allSets.map(s => getStyles(s))).toMatchSnapshot();

    expect(screen.queryAllByTestId('block')).toHaveLength(5);
    expect(allBlocks.map(b => getStyles(b))).toMatchSnapshot();
  });

  test('background', () => {
    const blocksetWithBackground: BlockSetData = {
      bleedBackground: true,
      bleedContent: false,
      blockPadding: true,
      blocks: [
        {
          style: 'dark',
          noBackground: false,
          useImageBackground: true,
          backgroundImage: {
            src: 'http://somepath/image.png',
            alt: 'something',
          },
          Component: noOpComp,
        },
        {
          noBackground: true,
          Component: noOpComp,
        },
        {
          noBackground: true,
          Component: noOpComp,
        },
        {
          noBackground: true,
          Component: noOpComp,
        },
      ],
    };
    render(<FlexGrid data={[blocksetWithBackground]} />);

    const blockset = screen.getByTestId('blockset');
    const blockSetBg = within(blockset).queryAllByTestId('blockset-background-image');
    const blockBg = screen.queryAllByTestId('background-image');

    expect(screen.queryAllByTestId('blockset')).toHaveLength(1);
    expect(blockSetBg).toHaveLength(1);
    expect(blockBg).toHaveLength(0);
  });
});

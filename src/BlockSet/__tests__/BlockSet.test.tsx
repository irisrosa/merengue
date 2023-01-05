import React from 'react';

import { screen, render } from '@testing-library/react';

import { BlockSet } from '@src/BlockSet';
import { BlockData } from '@src/types';

const noOpComp = () => <React.Fragment />;

const blocks: BlockData[] = [{ style: 'dark', Component: noOpComp }];

describe('FlexGrid BlockSet', () => {
  test('does not expands to the fullwidth', () => {
    render(<BlockSet blocks={blocks} />);

    // Media queries are not registered as we can't properly simulate screen size
    expect(screen.getByTestId('blockset')).toHaveStyle({
      width: '100%',
      margin: '0px auto',
    });
  });

  test('has a background image', () => {
    render(
      <BlockSet
        blocks={blocks}
        backgroundImage={{
          src: 'http://somepath/image.png',
        }}
      />
    );

    expect(screen.queryAllByTestId('blockset-background-image')).toHaveLength(1);
  });

  test('bleed background', () => {
    render(
      <BlockSet
        bleedBackground
        blocks={blocks}
        backgroundImage={{
          src: 'http://somepath/image.png',
        }}
      />
    );

    expect(screen.getByTestId('blockset')).not.toHaveStyle({
      width: '100%',
      margin: '0px auto',
    });
  });

  test('wraps blocks in container', () => {
    render(<BlockSet blocks={blocks} />);

    expect(screen.queryAllByTestId('flexgrid-container')).toHaveLength(1);
  });

  test('does not wrap blocks in container', () => {
    render(<BlockSet blocks={blocks} bleedContent />);

    expect(screen.queryAllByTestId('flexgrid-container')).toHaveLength(0);
  });
});

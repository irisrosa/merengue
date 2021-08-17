import React from 'react';
import { screen } from '@testing-library/react';
import { lime } from '@src/theme/lime';
import { BlockSet } from '@components/layout/FlexGrid/BlockSet';
import { BlockData, BlockSetInterface } from '@components/layout/FlexGrid/types';
import { ThemeContextRender } from '@src/testUtils/ContextRenderer';

const noOpComp = () => <React.Fragment />;

const blocks: BlockData[] = [{ style: 'dark', Component: noOpComp }];

const renderComponent = (props: BlockSetInterface) => <BlockSet {...props} />;

describe('FlexGrid BlockSet', () => {
  test('does not expands to the fullwidth', () => {
    ThemeContextRender(
      renderComponent({
        blocks,
      }),
      'lime'
    );

    // Media queries are not registered as we can't properly simulate screen size
    expect(screen.getByTestId('blockset')).toHaveStyle({
      width: '100%',
      margin: '0px auto',
    });
  });

  test('has a background image', () => {
    ThemeContextRender(
      renderComponent({
        backgroundImage: {
          src: 'http://somepath/image.png',
        },
        blocks,
      }),
      'lime'
    );

    expect(screen.queryAllByTestId('blockset-background-image')).toHaveLength(1);
  });

  test('has dark background', () => {
    ThemeContextRender(
      renderComponent({ bleedBackground: true, blockSetStyle: 'dark', blocks }),
      'lime'
    );

    const el = screen.getByTestId('blockset');

    expect(el).toHaveStyle({
      backgroundColor: lime.colors.brand700,
    });
    expect(el).not.toHaveStyle({
      width: '100%',
      margin: '0px auto',
    });
  });

  test('has default background', () => {
    ThemeContextRender(renderComponent({ blocks }), 'lime');

    expect(screen.getByTestId('blockset')).not.toHaveStyle({
      backgroundColor: lime.colors.brand700,
    });
  });

  test('wraps blocks in container', () => {
    ThemeContextRender(renderComponent({ blocks }), 'lime');

    expect(screen.queryAllByTestId('flexgrid-container')).toHaveLength(1);
  });

  test('does not wrap blocks in container', () => {
    ThemeContextRender(renderComponent({ blocks, bleedContent: true }), 'lime');

    expect(screen.queryAllByTestId('flexgrid-container')).toHaveLength(0);
  });
});

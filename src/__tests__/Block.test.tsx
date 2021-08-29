import React from 'react';
import { screen } from '@testing-library/react';
import { Block } from '@src/Block';
import { BlockInterface } from '@src/types';
import { WithBlockProviders, ThemeContextRender } from '@src/testUtils/ContextRenderer';

const renderComponent = (props: Partial<BlockInterface>) => (
  <Block {...props}>
    <p>My Block</p>
  </Block>
);

describe('FlexGrid Block', () => {
  describe('padding', () => {
    test('has default padding', () => {
      ThemeContextRender(renderComponent({}), 'lime');

      expect(screen.getByTestId('block-content')).toHaveStyle({ padding: '10px' });
    });

    test('has no padding', () => {
      ThemeContextRender(renderComponent({ noPadding: true }), 'lime');

      expect(screen.getByTestId('block-content')).toHaveStyleRule('padding', undefined);
    });
  });

  describe('background', () => {
    test('has default background', () => {
      ThemeContextRender(renderComponent({}), 'lime');

      expect(screen.getByTestId('block')).toHaveStyleRule('background-color', undefined);
    });

    test('has dark background', () => {
      ThemeContextRender(renderComponent({ blockStyle: 'dark' }), 'lime');

      expect(screen.getByTestId('block')).toHaveStyleRule('background-color', lime.colors.brand700);
    });

    test('has light background', () => {
      ThemeContextRender(renderComponent({ blockStyle: 'light' }), 'lime');

      expect(screen.getByTestId('block')).toHaveStyleRule('background-color', lime.colors.gray100);
    });

    test('has highlight background', () => {
      ThemeContextRender(renderComponent({ blockStyle: 'highlight' }), 'lime');

      expect(screen.getByTestId('block')).toHaveStyleRule('background-color', lime.colors.brand);
    });

    describe('no backgroud', () => {
      test('has no background color', () => {
        WithBlockProviders(
          renderComponent({
            blockStyle: 'dark',
            noBackground: true,
          })
        );

        expect(screen.getByTestId('block')).not.toHaveStyleRule(
          'background-color',
          lime.colors.brand700
        );
        expect(screen.queryAllByTestId('background-image')).toHaveLength(0);
      });

      test('has no image background', () => {
        WithBlockProviders(
          renderComponent({
            backgroundImage: {
              src: 'http://somepath/image.png',
            },
            noBackground: true,
          })
        );

        expect(screen.queryAllByTestId('background-image')).toHaveLength(0);
      });

      test('has no image background if its the first element', () => {
        WithBlockProviders(
          renderComponent({
            position: 0,
            backgroundImage: {
              src: 'http://somepath/image.png',
            },
          }),
          {
            hasCustomBg: true,
          }
        );

        expect(screen.queryAllByTestId('background-image')).toHaveLength(0);
      });
    });

    describe('background image', () => {
      test('has image background', () => {
        WithBlockProviders(
          renderComponent({
            backgroundImage: {
              src: 'http://somepath/image.png',
            },
          })
        );

        expect(screen.getAllByTestId('background-image')).toHaveLength(1);
      });

      test('has a backgroud image on top of blockset', () => {
        WithBlockProviders(
          renderComponent({
            backgroundImage: {
              src: 'http://somepath/image.png',
            },
          }),
          {
            hasCustomBg: true,
          }
        );

        expect(screen.getAllByTestId('background-image')).toHaveLength(1);
      });
    });
  });

  describe('size', () => {
    test('has size default', () => {
      ThemeContextRender(renderComponent({}), 'lime');

      expect(screen.getByTestId('block')).toHaveStyleRule('flex-basis', '25%');
    });

    test('has size 1', () => {
      ThemeContextRender(renderComponent({ size: 1 }), 'lime');

      expect(screen.getByTestId('block')).toHaveStyleRule('flex-basis', '25%');
    });

    test('has size 2', () => {
      ThemeContextRender(renderComponent({ size: 2 }), 'lime');

      expect(screen.getByTestId('block')).toHaveStyleRule('flex-basis', '50%');
    });

    test('has size 3', () => {
      ThemeContextRender(renderComponent({ size: 3 }), 'lime');

      expect(screen.getByTestId('block')).toHaveStyleRule('flex-basis', '75%');
    });

    test('has size 4', () => {
      ThemeContextRender(renderComponent({ size: 4 }), 'lime');

      expect(screen.getByTestId('block')).toHaveStyleRule('flex-basis', '100%');
    });
  });
});

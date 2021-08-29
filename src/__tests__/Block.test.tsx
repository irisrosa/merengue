import React from 'react';
import { render, screen, RenderResult } from '@testing-library/react';
import { Block } from '@src/Block';
import { BlockInterface, BlockSetContextType } from '@src/types';
import { BlockSetContext } from '@src/BlockSet/BlockSetContext';

export const renderWithBlockSetContext = (
  ui: React.ReactChild,
  blockSetContext?: BlockSetContextType
): RenderResult =>
  render(<BlockSetContext.Provider value={blockSetContext || {}}>{ui}</BlockSetContext.Provider>);

const BlockComp = (props: Partial<BlockInterface>) => (
  <Block {...props}>
    <p>My Block</p>
  </Block>
);

describe('FlexGrid Block', () => {
  describe('padding', () => {
    test('has default padding', () => {
      render(<BlockComp />);

      expect(screen.getByTestId('block-content')).toHaveStyle({ padding: '10px' });
    });

    test('has no padding', () => {
      render(<BlockComp noPadding />);

      expect(screen.getByTestId('block-content')).toHaveStyle({ padding: undefined });
    });
  });

  describe('background', () => {
    describe('no backgroud', () => {
      test('has no image background', () => {
        render(<BlockComp backgroundImage={{ src: 'http://somepath/image.png' }} noBackground />);

        expect(screen.queryAllByTestId('background-image')).toHaveLength(0);
      });

      test('has no image background if its the first element', () => {
        renderWithBlockSetContext(
          <BlockComp position={0} backgroundImage={{ src: 'http://somepath/image.png' }} />,
          { hasCustomBg: true }
        );

        expect(screen.queryAllByTestId('background-image')).toHaveLength(0);
      });
    });

    describe('background image', () => {
      test('has image background', () => {
        render(<BlockComp backgroundImage={{ src: 'http://somepath/image.png' }} />);

        expect(screen.getAllByTestId('background-image')).toHaveLength(1);
      });

      test('has a backgroud image on top of blockset', () => {
        renderWithBlockSetContext(
          <BlockComp backgroundImage={{ src: 'http://somepath/image.png' }} />,
          { hasCustomBg: true }
        );

        expect(screen.getAllByTestId('background-image')).toHaveLength(1);
      });
    });
  });

  describe('size', () => {
    test('has size default', () => {
      render(<BlockComp />);

      expect(screen.getByTestId('block')).toHaveStyle({ 'flex-basis': '25%' });
    });

    test('has size 1', () => {
      render(<BlockComp size={1} />);

      expect(screen.getByTestId('block')).toHaveStyle({ 'flex-basis': '25%' });
    });

    test('has size 2', () => {
      render(<BlockComp size={2} />);

      expect(screen.getByTestId('block')).toHaveStyle({ 'flex-basis': '50%' });
    });

    test('has size 3', () => {
      render(<BlockComp size={3} />);

      expect(screen.getByTestId('block')).toHaveStyle({ 'flex-basis': '75%' });
    });

    test('has size 4', () => {
      render(<BlockComp size={4} />);

      expect(screen.getByTestId('block')).toHaveStyle({ 'flex-basis': '100%' });
    });
  });
});

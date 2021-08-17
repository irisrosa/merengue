import React from 'react';
import { screen, render } from '@testing-library/react';
import { ViewportContextRender } from '@src/testUtils/ContextRenderer';
import { useViewport } from '..';

const TestComponent = () => {
  const viewport = useViewport();
  return <>Viewport: {JSON.stringify(viewport)}</>;
};

beforeEach(() => {
  global.innerWidth = 500;
  global.innerHeight = 700;
});

describe('useViewport hook', () => {
  test('gets the width and height values', () => {
    ViewportContextRender(<TestComponent />);

    expect(screen.getByText(/Viewport:/)).toHaveTextContent('Viewport: {"width":500,"height":700}');
  });

  test('does not get the width and height values', () => {
    render(<TestComponent />);

    expect(screen.getByText(/Viewport:/)).toHaveTextContent('Viewport: {}');
  });
});

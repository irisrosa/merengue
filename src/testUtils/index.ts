import { screen } from '@testing-library/react';

export const getStylesById = (dataTestId: string): Record<string, unknown> => {
  const element = screen.getByTestId(dataTestId);
  return getStyles(element);
};

export const getStyles = (element: HTMLElement): Record<string, unknown> => {
  return window.getComputedStyle(element)['_values'];
};

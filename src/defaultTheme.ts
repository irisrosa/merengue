import { DefaultTheme } from 'styled-components';

export const theme: DefaultTheme = {
  blockPadding: false,
  gap: '1rem',
  breakPoints: { small: 767, large: 992 },
  columns: 4,
  maxWidth: 960,
  domMapping: {
    wrapper: 'div',
    block: 'div',
  },
};

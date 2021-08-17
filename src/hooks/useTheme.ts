import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { getTheme } from '@theme/utils';
import { AvailableThemes, Theme } from '@theme/types';

export default (theme?: keyof AvailableThemes): Theme => {
  const themeObj = getTheme(theme);
  const themeContext = useContext(ThemeContext);

  return theme || !themeContext ? themeObj : themeContext;
};

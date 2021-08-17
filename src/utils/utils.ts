import { CSSObject, css, Interpolation, ThemedCssFunction, DefaultTheme } from 'styled-components';
import { Theme, Queries, FontSizes, MaxWidths, AvailableThemes } from './types';
import { themes, defaultTheme } from './';

type RespondTo = {
  [key in keyof Queries]: ThemedCssFunction<DefaultTheme>;
};

type MediaQueries = {
  [key: string]: string;
};

type ResponsiveFontSizeInterface = {
  [key in keyof FontSizes]: string;
};

type ResponsiveMaxWidthInterface = {
  [key in keyof MaxWidths]: string;
};

const getRespondToValues = (queries: Queries): RespondTo =>
  Object.keys(queries).reduce((acc, key) => {
    acc[key] = (first: CSSObject, ...interpolations: Interpolation<never>[]) =>
      css`
        @media ${queries[key]} {
          ${css(first, ...interpolations)};
        }
      `;

    return acc;
  }, {}) as RespondTo;

export const respondTo = (theme?: Theme): RespondTo =>
  getRespondToValues(theme ? theme.queries : defaultTheme.queries);

/**
 * Returns an object with the media queries for each breakpoint of values
 *
 * @param values - Object containing a list of values per breakpoint
 * @param cssProp - CSS property to be applied at each generated media query.
 * @param theme - Optional Theme object. Used to generate media queries rules.
 */
export const generateMediaQueries = (
  cssProp: string,
  values: FontSizes | MaxWidths | { [key: string]: Queries },
  queries: Queries
): MediaQueries => {
  return Object.keys(values).reduce((acc, sizeLabel) => {
    const mediaQueries = Object.keys(values[sizeLabel]).map(
      screenSize => `@media ${queries[screenSize]} { ${cssProp}: ${values[sizeLabel][screenSize]} }`
    );
    acc[sizeLabel] = Object.values(mediaQueries).join('');
    return acc;
  }, {}) as MediaQueries;
};

export const responsiveFontSize = (theme: Theme): ResponsiveFontSizeInterface =>
  generateMediaQueries('font-size', theme.fontSizes, theme.queries) as ResponsiveFontSizeInterface;

export const responsiveMaxWidth = (theme: Theme): ResponsiveMaxWidthInterface =>
  generateMediaQueries('max-width', theme.maxWidths, theme.queries) as ResponsiveMaxWidthInterface;

export const getTheme = (theme: keyof AvailableThemes = 'lime'): Theme => themes[theme];

export default {
  responsiveFontSize,
  responsiveMaxWidth,
  respondTo,
  getTheme,
};

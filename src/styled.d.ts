import 'styled-components';

import { GridOptions } from './types';

declare module 'styled-components' {
  export interface DefaultTheme extends GridOptions {}
}

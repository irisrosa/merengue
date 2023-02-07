import { Theme } from '@src/types';

import { theme as defaultTheme } from './defaultTheme';

class ThemeSingleton {
  private static _instance: ThemeSingleton;
  private _options: Theme;

  private constructor() {
    this._options = defaultTheme;
  }

  public static get Instance() {
    return this._instance || (this._instance = new this());
  }

  public get options(): Theme {
    return this._options;
  }

  public set options(themeOptions: Theme) {
    this._options = { ...this._options, ...themeOptions };
  }
}

export const theme = ThemeSingleton.Instance;

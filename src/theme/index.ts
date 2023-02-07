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
    const filteredOptions = Object.fromEntries(
      Object.entries(themeOptions).filter(([_, v]) => Boolean(v))
    );

    this._options = { ...this._options, ...filteredOptions };
  }
}

export const theme = ThemeSingleton.Instance;

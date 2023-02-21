import { GridOptions } from '@src/types';

import { theme as defaultTheme } from './defaultTheme';

class ThemeSingleton {
  private static _instance: ThemeSingleton;
  private _options: GridOptions;

  private constructor() {
    this._options = defaultTheme;
  }

  public static get Instance() {
    return this._instance || (this._instance = new this());
  }

  public get options(): GridOptions {
    return this._options;
  }

  public set options(themeOptions: GridOptions) {
    const filteredOptions = Object.fromEntries(
      Object.entries(themeOptions).filter(([_, v]) => Boolean(v))
    );

    this._options = { ...this._options, ...filteredOptions };
  }
}

export const theme = ThemeSingleton.Instance;

import { ElementType, PropsWithChildren } from 'react';

import { CSSProperties, DefaultTheme } from 'styled-components';

export type ComponentProps = PropsWithChildren<{
  className?: string;
  style?: CSSProperties;
}>;

export type ImageType = {
  [key: string]: unknown;
  alt?: string;
  aspectRatio?: number;
  base64?: string;
  sizes?: string;
  src: string;
  srcSet?: string;
};

interface BackgroundProps {
  BackgroundComponent?: ElementType;
  backgroundImage?: ImageType;
}

export interface BlockData extends BackgroundProps {
  blockPadding?: boolean | string;
  Content: ElementType;
  size?: number;
}

export type GridOptions = {
  blockPadding?: boolean | string;
  gap?: boolean;
  columns?: number;
  maxWidth?: number;
  breakPoints?: {
    small: number;
    large: number;
  };
};

export type GridData = BackgroundProps &
  GridOptions & {
    grid: BlockData[];
    // extendBackground?: boolean;
    // extendContent?: boolean;
  };

export type FlexGridProps = ComponentProps & Partial<GridData>;

export type BlockSetProps = ComponentProps;

export type BlockProps = ComponentProps & Omit<BlockData, 'Content'>;

import { ElementType, PropsWithChildren } from 'react';

import { CSSProperties } from 'styled-components';

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

export interface BlockSetData extends BackgroundProps {
  blocks: BlockData[];
  extendBackground?: boolean;
  extendContent?: boolean;
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

export type GridData = {
  options?: GridOptions;
  grid: BlockSetData;
};

export type FlexGridProps = ComponentProps & Partial<GridData>;

export type BlockSetProps = ComponentProps &
  Omit<BlockSetData, 'blocks'> & { options?: GridOptions };

export type BlockProps = ComponentProps & Omit<BlockData, 'Content'>;

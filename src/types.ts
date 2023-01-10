import { ElementType, PropsWithChildren } from 'react';

export type ComponentProps = PropsWithChildren<{
  className?: string;
  style?: Record<string, unknown>;
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
  Content: ElementType;
  noPadding?: boolean;
  size?: 1 | 2 | 3 | 4;
}

export interface BlockSetData extends BackgroundProps {
  blockPadding?: boolean;
  blocks: BlockData[];
  extendBackground?: boolean;
  extendContent?: boolean;
}

export type GridOptions = {
  columns?: number;
  maxWidth?: number;
};

export type GridData = GridOptions & {
  grid: BlockSetData[];
};

export type BlockSetProps = ComponentProps & Omit<BlockSetData, 'blocks'> & GridOptions;

export type BlockProps = ComponentProps & Omit<BlockData, 'Content'>;

export type BlockSetContextType = Pick<BlockSetData, 'blockPadding'> & GridOptions;

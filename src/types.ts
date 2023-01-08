import { ElementType, PropsWithChildren } from 'react';

export type OnClickType = () => void;

export type ComponentProps = PropsWithChildren<{
  className?: string;
  style?: Record<string, unknown>;
}>;

export type ImageType = {
  alt?: string;
  src: string;
  srcSet?: string;
  sizes?: string;
  base64?: string;
  aspectRatio?: number;
  [key: string]: unknown;
};

interface BackgroundProps {
  backgroundImage?: ImageType;
  BackgroundComponent?: ElementType;
}

export interface BlockData extends BackgroundProps {
  size?: 1 | 2 | 3 | 4;
  noPadding?: boolean;
  Content: ElementType;
}

export interface BlockSetData extends BackgroundProps {
  extendContent?: boolean;
  extendBackground?: boolean;
  blocks: BlockData[];
  blockPadding?: boolean;
}

export interface Grid {
  data: BlockSetData[];
}

export type BlockSetProps = ComponentProps & Partial<BlockSetData>;

export type BlockProps = ComponentProps & Partial<BlockData>;

export type BlockSetContextType = Pick<BlockSetData, 'blockPadding'>;

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
  BgComp?: ElementType;
}

export interface BlockData extends BackgroundProps {
  Component: ElementType;
  size?: number;
}

export interface BlockSetData extends BackgroundProps {
  bleedContent?: boolean;
  bleedBackground?: boolean;
  blocks: BlockData[];
  blockPadding?: boolean;
}

export interface Grid {
  data: BlockSetData[];
}

export type BlockSetProps = ComponentProps & BackgroundProps & BlockSetData;

export interface BlockProps extends ComponentProps, BackgroundProps, Pick<BlockData, 'size'> {
  noPadding?: boolean;
}

export type BlockSetContextType = Pick<BlockSetData, 'blockPadding'>;

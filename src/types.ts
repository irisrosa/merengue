import { ElementType, PropsWithChildren } from 'react';

export type OnClickType = () => void;

export type ComponentInterface = PropsWithChildren<{
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

interface BlocksAndBlockSetsData extends ComponentInterface {
  backgroundImage?: ImageType;
  BgComp?: ElementType;
}

export interface BlockData extends BlocksAndBlockSetsData {
  Component: ElementType;
  size?: number;
}

export interface BlockSetData extends BlocksAndBlockSetsData {
  bleedContent?: boolean;
  bleedBackground?: boolean;
  blocks: BlockData[];
  blockPadding?: boolean;
}

export interface GridInterface extends ComponentInterface {
  data: BlockSetData[];
}

export interface BlockSetInterface
  extends Pick<
    BlockSetData,
    'blockPadding' | 'bleedContent' | 'bleedBackground' | 'BgComp' | 'className' | 'children'
  > {
  blocks?: BlockData[];
  backgroundImage?: ImageType;
}

export interface BlockInterface
  extends Pick<BlockData, 'size' | 'backgroundImage' | 'className' | 'children'> {
  noPadding?: boolean;
  position?: number;
  noBackground?: boolean;
  BgComp?: ElementType;
}

export type BlockSetContextType = Pick<BlockSetData, 'blockPadding'>;

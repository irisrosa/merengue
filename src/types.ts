import { ElementType } from 'react';
import { PropsWithChildren } from 'react';

export type OnClickType = () => void;

export interface ComponentProps {
  className?: string;
  style?: Record<string, unknown>;
}

export type ComponentInterface = PropsWithChildren<ComponentProps>;

export type ImageType = {
  alt?: string;
  src: string;
  srcSet?: string;
  sizes?: string;
  base64?: string;
  aspectRatio?: number;
  [key: string]: unknown;
};

export interface BlockData extends ComponentInterface {
  backgroundImage?: ImageType;
  BgComp?: ElementType;
  Component: ElementType;
  size?: number;
}

export interface BlockSetData extends ComponentInterface {
  backgroundImage?: ImageType;
  bleedContent?: boolean;
  bleedBackground?: boolean;
  blocks: BlockData[];
  blockPadding?: boolean;
  BgComp?: ElementType;
}

export interface GridInterface extends ComponentInterface {
  data: BlockSetData[];
}

export interface BlockSetInterface
  extends Pick<ComponentInterface, 'className' | 'children'>,
    Pick<BlockSetData, 'blockPadding' | 'bleedContent' | 'bleedBackground' | 'BgComp'> {
  blocks?: BlockData[];
  backgroundImage?: ImageType;
}

export interface BlockInterface
  extends Pick<ComponentInterface, 'className' | 'children'>,
    Pick<BlockData, 'size' | 'backgroundImage'> {
  noPadding?: boolean;
  position?: number;
  noBackground?: boolean;
  BgComp?: ElementType;
}

export type BlockSetContextType = Pick<BlockSetData, 'blockPadding'>;

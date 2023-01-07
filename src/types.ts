import React, { ComponentType, ElementType } from 'react';
import { PropsWithChildren } from 'react';

type Comp = ComponentType | React.FC | ElementType;

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
  BgComp?: Comp;
  Component: Comp;
  size?: number;
}

export interface BlockSetData extends ComponentInterface {
  backgroundImage?: ImageType;
  bleedContent?: boolean;
  bleedBackground?: boolean;
  blocks: BlockData[];
  blockPadding?: boolean;
  BgComp?: Comp;
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
  BgComp?: Comp;
}

export type BlockSetContextType = Pick<BlockSetData, 'blockPadding'>;
